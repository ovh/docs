---
title: MariaDB/MySQL (Database service)
slug: mysql
section: Services
updated: 2021-06-03
---

**Last updated 3rd June 2021**



## Objective  

Web PaaS supports both MariaDB and Oracle MySQL.  While there are some differences at the application level for developers, they function nearly identically from an infrastructure point of view.

See the [MariaDB documentation](https://mariadb.org/learn/) or [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/) for more information.

## Supported versions

The service types `mariadb` and `mysql` both refer to MariaDB for compatibility reasons. The service type `oracle-mysql` refers to MySQL as released by Oracle, Inc. Other than the type, MySQL and MariaDB are otherwise identical and the rest of this page refers to both equally.


| **`mariadb`** | **`mysql`** | **`oracle-mysql`** |
|----------------------------------|---------------|-------------------------|
|  - 5.7  
- 8.0 |

Only MariaDB is available on Dedicated environments, using Galera for replication:

- 10.0  
- 10.1  
- 10.2  
- 10.3  
- 10.4  
- 10.5

> [!primary]  
> Downgrades of MySQL or MariaDB are not supported. Both will update their own datafiles to a new version automatically but cannot downgrade them. If you want to experiment with a later version without committing to it use a non-master environment.
> 
> Dedicated environments do not support any storage engine other than InnoDB. Tables created using the MyISAM storage engine on dedicated environments will not replicate between cluster nodes.
> 

### Deprecated versions

The following versions are available but are not receiving security updates from upstream, so their use is not recommended. They will be removed at some point in the future.

| **`mariadb`** | **`mysql`** | **`oracle-mysql`** |
|----------------------------------|---------------|-------------------------|
|   |

## Relationship

The format exposed in the ``$PLATFORM_RELATIONSHIPS`` [environment variable](../../development-variables#platformsh-provided-variables):

```json  
{
    "username": "user",
    "scheme": "mysql",
    "service": "mariadb104",
    "fragment": null,
    "ip": "169.254.135.53",
    "hostname": "e3wffyxtwnrxujeyg5u3kvqi6y.mariadb104.service._.eu-3.platformsh.site",
    "public": false,
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "mysql.internal",
    "rel": "mysql",
    "query": {
        "is_master": true
    },
    "path": "main",
    "password": "",
    "type": "mariadb:10.4",
    "port": 3306,
    "host_mapped": false
}
```  

## Usage example

For MariaDB your `.platform/services.yaml` use `mariadb` service type:


```yaml   
db:
    type: mariadb:10.5
    disk: 256
```  


Oracle-mysql uses the `oracle-mysql` service type:


```yaml   
dbmysql:
    type: oracle-mysql:8.0
    disk: 256
```  


Note that the minimum disk size for `mysql`/`oracle-mysql` is 256MB.

Despite these service type differences, MariaDB and Oracle MySQL both use the `mysql` endpoint in their configuration.

> You will need to use `mariadb`, `mysql` or `oracle-mysql` type when defining the service
>
> ```yaml
> # .platform/services.yaml
> service_name:
>       type: mariadb:version
>       disk:256
> ```
>
> and the endpoint `mysql` when defining the relationship
>
> ```yaml
> # .platform.app.yaml
>  relationships:
>       relationship_name: “service_name:mysql”
> ```
>
> Your `service_name` and `relationship_name` are defined by you, but we recommend making them distinct from each other.
>

You can then use the service in a configuration file of your application with something like:

> [!tabs]      
> Go     
>> [MySQL - Go](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/golang/mysql)  
>>      
> Java     
>> [MySQL - Java](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/java/mysql)  
>>      
> PHP     
>> [MySQL - PHP](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/php/mysql)  
>>      
> Python     
>> [MySQL - Python](https://github.com/ovh/docs/blob/develop/pages/web/web-paas/static/files/fetch/examples/python/mysql)  
>>      


> [!primary]  
> MySQL schema names can not use system reserved namespace. (mysql, information_schema, etc)
> 

## Multiple databases

If you are using version `10.0` or later of this service it is possible to define multiple databases as well as multiple users with different permissions.  To do so requires defining multiple endpoints.  Under the `configuration` key of your service there are two additional keys:

* `schemas`:  This is a YAML array listing the databases that should be created.  If not specified, a single database named `main` will be created.
* `endpoints`: This is a nested YAML array defining different credentials.  Each endpoint may have access to one or more schemas (databases), and may have different levels of permission on each.  The valid permission levels are:
  * `ro`: Using this endpoint only SELECT queries are allowed.
  * `rw`: Using this endpoint SELECT queries as well INSERT/UPDATE/DELETE queries are allowed.
  * `admin`: Using this endpoint all queries are allowed, including DDL queries (CREATE TABLE, DROP TABLE, etc.).

Consider the following illustrative example:

```yaml
db:
    type: mariadb:10.5
    disk: 2048
    configuration:
        schemas:
            - main
            - legacy
        endpoints:
            admin:
                default_schema: main
                privileges:
                    main: admin
                    legacy: admin
            reporter:
                privileges:
                    main: ro
            importer:
                default_schema: legacy
                privileges:
                    legacy: rw
```

This example creates a single MySQL/MariaDB service named `mysqldb`.  That server will have two databases, `main` and `legacy`.  There will be three endpoints created.  The first, named `admin`, will have full access to both databases.  The second, `reporter`, will have SELECT query access to the `main` DB but no access to `legacy` at all.  The `importer` user will have SELECT/INSERT/UPDATE/DELETE access (but not DDL access) to the `legacy` database but no access to `main`.

If a given endpoint has access to multiple databases you should also specify which will be listed by default in the relationships array.  If one isn't specified the `path` property of the relationship will be null.  While that may be acceptable for an application that knows the name of the database to connect to, it would mean that automated tools such as the WebPaas CLI will not be able to access the database on that relationship. For that reason the `default_schema` property is always recommended.

Once those endpoints are defined, you need to expose them to your application as a relationship.  Continuing with our example, this would be a possible corresponding block from `.platform.app.yaml`:

```yaml
relationships:
    database: "db:admin"
    reports: "db:reporter"
    imports: "db:importer"
```

This block defines three relationships, `database`, `reports`, and `imports`.  They'll be available in the `PLATFORM_RELATIONSHIPS` environment variable and all have the same structure documented above, but with different credentials.  You can use those to connect to the appropriate database with the specified restrictions using whatever the SQL access tools are for your language and application.

If no `configuration` block is specified at all, it is equivalent to the following default:

```yaml
configuration:
    schemas:
        - main
    endpoints:
        mysql:
          default_schema: main
          privileges:
            main: admin
```

If either schemas or endpoints are defined, then no default will be applied and you must specify the full configuration.

## Adjusting database configuration

For MariaDB 10.1 and later Oracle MySQL 8.0 and later, a select few configuration properties from the `my.cnf` file are available for adjustment.

### Packet and connection sizing

This value defaults to `16` (in MB).  Legal values are from `1` to `100`.

```yaml
db:
    type: mariadb:10.5
    disk: 2048
    configuration:
        properties:
            max_allowed_packet: 64
```

The above code will increase the maximum allowed packet size (the size of a query or response) to 64 MB.  However, increasing the size of the maximum packet will also automatically decrease the `max_connections` value.  The number of connections allowed will depend on the packet size and the memory available to the service.  In most cases leaving this value at the default is recommended.

## Character encoding

For services created prior to February 2020, the default character set and collation is `latin1`, which is the default in most MySQL/MariaDB.

For services created after February 2020, the default character set is `utf8mb4` and the default collation is `utf8mb4_unicode_ci`.

Both values can be adjusted at the server level in `services.yaml`:

```yaml
db:
  type: mariadb:10.5
  disk: 2048
  configuration:
    properties:
      default_charset: utf8mb4
      default_collation: utf8mb4_unicode_ci
```

Note that the effect of this setting is to set the character set and collation of any tables created once those properties are set.  Tables created prior to when those settings are changed will be unaffected by changes to the `services.yaml` configuration.  However, you can change your own table's character set and collation through `ALTER TABLE` commands.  For example:

```text
# To change defaults when creating new tables:
ALTER DATABASE main CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# To change defaults when creating new columns:
ALTER TABLE table_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# To convert existing data:
ALTER TABLE table_name CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Consult the [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/charset-mysql.html) for further details.

## Storage Engine

We recommend using the InnoDB storage engine wherever possible. MyISAM is only properly supported in Grid environments. In dedicated cluster environments there is no replication of MyISAM tables.

If MyISAM tables are inadvertently created or imported in a dedicated environment they can be converted to use the InnoDB storage engine using the following procedure:

```sql
RENAME TABLE <existing> <old>;
INSERT INTO <existing> SELECT * from <old>;
```

## Access your MariaDB service

Assuming your MariaDB relationship is named `database`, the host name and port number obtained from `PLATFORM_RELATIONSHIPS` would be `database.internal` and `3306`. 

```bash
mysql -h database.internal -P 3306 -u user main
```

If your database relationship has a password, you need to pass the `-p` switch and enter the password when prompted:

```bash
mysql -h database.internal -P 3306 -u user -p main
```

Outside the application container, you can use WebPaas CLI `webpaas sql`.

## Exporting data

The easiest way to download all data in a MariaDB instance is with the Web PaaS CLI.  If you have a single SQL database, the following command will export all data using the `mysqldump` command to a local file:

```bash
webpaas db:dump
```

If you have multiple SQL databases it will prompt you which one to export. You can also specify one by relationship name explicitly:

```bash
webpaas db:dump --relationship database
```

By default the file will be uncompressed. If you want to compress it, use the `--gzip` (`-z`) option:

```bash
webpaas db:dump --gzip
```

You can use the `--stdout` option to pipe the result to another command. For example, if you want to create a bzip2-compressed file, you can run:

```bash
webpaas db:dump --stdout | bzip2 > dump.sql.bz2
```

## Importing data

The easiest way to load data into a database is to pipe an SQL dump through the `webpaas sql` command, like so:

```bash
webpaas sql < my_database_backup.sql
```

That will run the database backup against the SQL database on Web PaaS.  That will work for any SQL file, so the usual caveats about importing an SQL dump apply (e.g., it's best to run against an empty database).  As with exporting, you can also specify a specific environment to use and a specific database relationship to use, if there are multiple.

```bash
webpaas sql --relationship database -e master < my_database_backup.sql
```

> [!primary]  
> Importing a database backup is a destructive operation. It will overwrite data already in your database.
> Taking a backup or a database export before doing so is strongly recommended.
> 


