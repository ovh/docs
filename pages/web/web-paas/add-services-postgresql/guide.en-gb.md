---
title: PostgreSQL (Database service)
slug: add-services-postgresql
section: Add-Services
---

**Last updated 31st August 2023**



## Objective  

PostgreSQL is a high-performance, standards-compliant relational SQL database.

See the [PostgreSQL documentation](https://www.postgresql.org/docs/9.6/index.html) for more information.

{{% frameworks %}}

- [Hibernate](../guides/hibernate/deploy.md#mysql)

- [Jakarta EE](../guides/jakarta/deploy.md#mysql)

- [Spring](../guides/spring/mysql.md)


{{% /frameworks %}}

## Supported versions

{{% major-minor-versions-note %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 15  
- 14  
- 13  
- 12  
- 11 |

\* No High-Availability on {{% names/dedicated-gen-2 %}}.

> [!primary]  
> 
> You can't upgrade to PostgreSQL 12 with the `postgis` extension enabled.
> For more details, see how to [upgrade to PostgreSQL 12 with `postgis`](#upgrade-to-postgresql-12-with-the-postgis-extension).
> 
> 

{{% deprecated-versions %}}

| Grid | {{% names/dedicated-gen-3 %}} | {{% names/dedicated-gen-2 %}} |
|------|-------------------------------|------------------------------ |
|  - 10  
- 9.6  
- 9.5  
- 9.4  
- 9.3 |

{{% relationship-ref-intro %}}

{{% service-values-change %}}

```yaml
{
    "username": "main",
    "scheme": "pgsql",
    "service": "postgresql12",
    "fragment": null,
    "ip": "169.254.38.66",
    "hostname": "zydalrxgkhif2czr3xqth3qkue.postgresql12.service._.eu-3.platformsh.site",
    "port": 5432,
    "cluster": "rjify4yjcwxaa-master-7rqtwti",
    "host": "postgresql.internal",
    "rel": "postgresql",
    "path": "main",
    "query": {
        "is_master": true
    },
    "password": "ChangeMe",
    "type": "postgresql:12",
    "public": false,
    "host_mapped": false
}
```

## Usage example

{{% endpoint-description type="postgresql" php=true /%}}

> [!tabs]      

## Access the service directly

Access the service using the WebPaas CLI by running `webpaas sql`.

You can also access it from your app container via [SSH](../development/ssh/_index.md).
From your [relationship data](#relationship-reference), you need: `username`, `host`, and `port`.
Then run the following command:

```bash
psql -U {{< variable "USERNAME" >}} -h {{< variable "HOST" >}} -p {{< variable "PORT" >}}
```

Using the values from the [example](#relationship-reference), that would be:

```bash
psql -U main -h postgresql.internal -p 5432
```

{{% service-values-change %}}

## Exporting data

The easiest way to download all data in a PostgreSQL instance is with the WebPaas CLI. If you have a single SQL database, the following command exports all data using the `pg_dump` command to a local file:

```bash
webpaas db:dump
```

If you have multiple SQL databases it prompts you which one to export. You can also specify one by relationship name explicitly:

```bash
webpaas db:dump --relationship database
```

By default the file is uncompressed. If you want to compress it, use the `--gzip` (`-z`) option:

```bash
webpaas db:dump --gzip
```

You can use the `--stdout` option to pipe the result to another command. For example, if you want to create a bzip2-compressed file, you can run:

```bash
webpaas db:dump --stdout | bzip2 > dump.sql.bz2
```

## Importing data

Make sure that the imported file contains objects with cleared ownership and `IF EXISTS` clauses. For example, you can create a DB dump with following parameters:

```bash
pg_dump --no-owner --clean --if-exists
```

The easiest way to load data into a database is to pipe an SQL dump through the `webpaas sql` command, like so:

```bash
webpaas sql < my_database_backup.sql
```

That runs the database backup against the SQL database on {{< vendor/name >}}.
That works for any SQL file, so the usual caveats about importing an SQL dump apply
(for example, it's best to run against an empty database).
As with exporting, you can also specify a specific environment to use and a specific database relationship to use, if there are multiple.

```bash
webpaas sql --relationship database -e {{< variable "BRANCH_NAME" >}} < my_database_backup.sql
```

> [!primary]  
> Importing a database backup is a destructive operation. It overwrites data already in your database.
> Taking a backup or a database export before doing so is strongly recommended.
> 

## Sanitizing data

To ensure people who review code changes can't access personally identifiable information stored in your database,
[sanitize your development environments](../development/sanitize-db/postgresql.md).

## Multiple databases

If you are using version `10`, `11`, `12`, `13`, or later of this service,
it's possible to define multiple databases as well as multiple users with different permissions.
To do so requires defining multiple endpoints.
Under the `configuration` key of your service there are two additional keys:

* `databases`:  This is a YAML array listing the databases that should be created. If not specified, a single database named `main` is created.

  Note that removing a schema from the list of `schemas` on further deployments results in **the deletion of the schema.**
* `endpoints`: This is a nested YAML object defining different credentials. Each endpoint may have access to one or more schemas (databases), and may have different levels of permission for each. The valid permission levels are:
  * `ro`: Using this endpoint only `SELECT` queries are allowed.
  * `rw`: Using this endpoint `SELECT` queries as well as `INSERT`/`UPDATE`/`DELETE` queries are allowed.
  * `admin`: Using this endpoint all queries are allowed, including DDL queries (`CREATE TABLE`, `DROP TABLE`, etc.).

Consider the following illustrative example:

```yaml
dbpostgres:
    type: postgresql:13
    disk: 2048
    configuration:
        databases:
            - main
            - legacy
        endpoints:
            admin:
                privileges:
                    main: admin
                    legacy: admin
            reporter:
                default_database: main
                privileges:
                    main: ro
            importer:
                default_database: legacy
                privileges:
                    legacy: rw
```

This example creates a single PostgreSQL service named `dbpostgres`. The server has two databases, `main` and `legacy` with three endpoints created.

* `admin`: has full access to both databases.
* `reporter`: has `SELECT` query access to the `main` database, but no access to `legacy`.
* `importer`: has `SELECT`/`INSERT`/`UPDATE`/`DELETE` access (but not DDL access) to the `legacy` database. It doesn't have access to `main`.

If a given endpoint has access to multiple databases you should also specify which is listed by default in the relationships array. If one isn't specified, the `path` property of the relationship is `null`. While that may be acceptable for an application that knows the name of the database it's connecting to, automated tools like the {{< vendor/name >}} CLI can't access the database on that relationship. For that reason, defining the `default_database` property is always recommended.

Once these endpoints are defined, you need to expose them to your application as a relationship. Continuing with the above example, your `relationships` in `{{< vendor/configfile "app" >}}` might look like:

```yaml
relationships:
    database: "dbpostgres:admin"
    reports: "dbpostgres:reporter"
    imports: "dbpostgres:importer"
```

Each database is accessible to your application through the `database`, `reports`, and `imports` relationships. They'll be available in the `PLATFORM_RELATIONSHIPS` environment variable and all have the same structure documented above, but with different credentials. You can use those to connect to the appropriate database with the specified restrictions using whatever the SQL access tools are for your language and application.

A service configuration without the `configuration` block defined is equivalent to the following default values:

```yaml
configuration:
    databases:
        - main
    endpoints:
        postgresql:
          default_database: main
          privileges:
            main: admin
```

If you do not define `database` but `endpoints` are defined, then the single database `main` is created with the following assumed configuration:

```yaml
configuration:
    databases:
        - main
    endpoints: <your configuration>
```

Alternatively, if you define multiple databases but no endpoints, a single user `main` is created with `admin` access to each of your databases, equivalent to the configuration below:

```yaml
configuration:
    databases:
        - firstdb
        - seconddb
        - thirddb
    endpoints:
        main:
            firstdb: admin
            seconddb: admin
            thirddb: admin
```

{{% databases-passwords %}}

## Service timezone

To change the timezone for the current session, run `SET TIME ZONE {{< variable "TIMEZONE" >}};`.

## Extensions

{{< vendor/name >}} supports a number of PostgreSQL extensions. To enable them, list them under the `configuration.extensions` key in your `{{< vendor/configfile "services" >}}` file, like so:

```yaml
db:
    type: postgresql:12
    disk: 1025
    configuration:
        extensions:
            - pg_trgm
            - hstore
```

In this case, you have `pg_trgm` installed, providing functions to determine the similarity of text based on trigram matching, and `hstore` providing a key-value store.

### Available extensions

The following is the extensive list of supported extensions. Note that you can't currently add custom
extensions not listed here.

* `address_standardizer` - Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.
* `address_standardizer_data_us` - For standardizing addresses based on US dataset example
* `adminpack` - administrative functions for PostgreSQL
* `autoinc` - functions for auto-incrementing fields
* `bloom` - bloom access method - signature file based index (requires 9.6 or higher)
* `btree_gin` - support for indexing common data types in GIN
* `btree_gist` - support for indexing common data types in GiST
* `chkpass` - data type for auto-encrypted passwords
* `citext` - data type for case-insensitive character strings
* `cube` - data type for multidimensional cubes
* `dblink` - connect to other PostgreSQL databases from within a database
* `dict_int` - text search dictionary template for integers
* `dict_xsyn` - text search dictionary template for extended synonym processing
* `earthdistance` - calculate great-circle distances on the surface of the Earth
* `file_fdw` - foreign-data wrapper for flat file access
* `fuzzystrmatch` - determine similarities and distance between strings
* `hstore` - data type for storing sets of (key, value) pairs
* `insert_username` - functions for tracking who changed a table
* `intagg` - integer aggregator and enumerator (obsolete)
* `intarray` - functions, operators, and index support for 1-D arrays of integers
* `isn` - data types for international product numbering standards
* `lo` - Large Object maintenance
* `ltree` - data type for hierarchical tree-like structures
* `moddatetime` - functions for tracking last modification time
* `pageinspect` - inspect the contents of database pages at a low level
* `pg_buffercache` - examine the shared buffer cache
* `pg_freespacemap` - examine the free space map (FSM)
* `pg_prewarm` - prewarm relation data (requires 9.6 or higher)
* `pg_stat_statements` - track execution statistics of all SQL statements executed
* `pg_trgm` - text similarity measurement and index searching based on trigrams
* `pg_visibility` - examine the visibility map (VM) and page-level visibility info (requires 9.6 or higher)
* `pgcrypto` - cryptographic functions
* `pgrouting` - pgRouting Extension (requires 9.6 or higher)
* `pgrowlocks` - show row-level locking information
* `pgstattuple` - show tuple-level statistics
* `pgvector` - Open-source vector similarity search for Postgres 11+
* `plpgsql` - PL/pgSQL procedural language
* `postgis` - PostGIS geometry, geography, and raster spatial types and functions
* `postgis_sfcgal` - PostGIS SFCGAL functions
* `postgis_tiger_geocoder` - PostGIS tiger geocoder and reverse geocoder
* `postgis_topology` - PostGIS topology spatial types and functions
* `postgres_fdw` - foreign-data wrapper for remote PostgreSQL servers
* `refint` - functions for implementing referential integrity (obsolete)
* `seg` - data type for representing line segments or floating-point intervals
* `sslinfo` - information about SSL certificates
* `tablefunc` - functions that manipulate whole tables, including `crosstab`
* `tcn` - Triggered change notifications
* `timetravel` - functions for implementing time travel
* `tsearch2` - compatibility package for pre-8.3 text search functions (obsolete, only available for 9.6 and 9.3)
* `tsm_system_rows` - TABLESAMPLE method which accepts number of rows as a limit (requires 9.6 or higher)
* `tsm_system_time` - TABLESAMPLE method which accepts time in milliseconds as a limit (requires 9.6 or higher)
* `unaccent` - text search dictionary that removes accents
* `uuid-ossp` - generate universally unique identifiers (UUIDs)
* `xml2` - XPath querying and XSLT

> [!primary]  
> 
> You can't upgrade to PostgreSQL 12 with the `postgis` extension enabled.
> For more details, see how to [upgrade to PostgreSQL 12 with `postgis`](#upgrade-to-postgresql-12-with-the-postgis-extension).
> 
> 

## Notes

### Could not find driver

If you see this error: `Fatal error: Uncaught exception 'PDOException' with message 'could not find driver'`, this means you are missing the `pdo_pgsql` PHP extension. You need to enable it in your `{{< vendor/configfile "app" >}}` (see above).

## Upgrading

PostgreSQL 10 and later include an upgrade utility that can convert databases from previous versions to version 10 or later. If you upgrade your service from a previous version of PostgreSQL to version 10 or above (by modifying the `{{< vendor/configfile "services" >}}` file), it upgrades automatically.

The utility can't upgrade PostgreSQL 9 versions, so upgrades from PostgreSQL 9.3 to 9.6 aren't supported. Upgrade straight to version 11 instead.

> [!primary]  
> 
> Make sure you first test your migration on a separate branch.
> 

> [!primary]  
> 
> Be sure to take a backup of your production environment **before** you merge this change.
> 

Downgrading isn't supported. If you want, for whatever reason, to downgrade you should dump to SQL, remove the service, recreate the service, and import your dump.

### Upgrade to PostgreSQL 12 with the `postgis` extension

You can't upgrade to PostgreSQL 12 with the `postgis` extension enabled.
It involves a change to a major version that results in a failed deployment that requires support intervention to fix.
Upgrading from 12 to a higher version is possible.

If you need to upgrade to version 12, follow the same steps recommended for downgrading:

1\. Dump the database.

2\. Remove the service.

3\. Create a new service with PostgreSQL 12.

4\. Import the dump to that service.

