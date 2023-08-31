---
title: MariaDB/MySQL External Replication
slug: mysql-replication
section: Mysql
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

Normally an automated backup is better for short-term usage and a `mysqldump` for longer term storage, but in some cases the data set is large enough that `mysqldump` is prohibitive.
In that case, you can enable external replication using an extra permission.

Note that this guide covers the {{< vendor/name >}} side; you need to set up and maintain your own replica instance.
Consult the MySQL or MariaDB documentation for steps to do so.

## Create a replication user

To set up replication you need to create a replication-enabled user.
For each database that you'd like to replicate, you need to assign a `replication` permission/role, under a corresponding `endpoint`:

```yaml
db:
    type: mysql:10.4
    disk: 1024
    configuration:
        schemas:
            - main
        endpoints:
            # Restate the default user to be used by your application.
            mysql:
                default_schema: main
                privileges:
                    main: admin
            replicator:
                privileges:
                    main: replication
```

This creates a `replicator` user, and grants read-only and table locking rights on the `main` database (namely `Select_priv`, `Show_view_priv`, `Create_tmp_table_priv`, `Lock_tables_priv` privileges) along with global replication rights (namely `Repl_slave_priv` and `Repl_client_priv` privileges) and flushing rights (`Reload_priv` used for flushing before reading the binary log position). If there is at least one `replication` permission defined, the bin-logging is enabled on the primary server, which is essential for the replication.

## Add a relationship for the new endpoint

Even if you won't be accessing the replication endpoint from your application, you still need to expose it to an application as a relationship so that you can connect to it over SSH.
Add a new relationship to your application container:

```yaml
relationships:
    database: db:mysql
    replication: db:replicator
```

## Getting the Primary's Binary Log Co-ordinates

Open the MySQL CLI to the `replication` relationship, either by accessing the credentials while on the app container or using the following command.

```bash
webpaas sql -r replication
```

Now you need to prevent any changes to the data while you view the binary log position. You'll use this to tell the replica at exactly which point it should start replicating from. On the primary server, flush and lock all tables by running `FLUSH TABLES WITH READ LOCK`. Keep this session running - exiting it releases the lock. Get the current position in the binary log by running `SHOW MASTER STATUS`:

```sql
mysql> FLUSH TABLES WITH READ LOCK;
Query OK, 0 rows affected (0.016 sec)

mysql> SHOW MASTER STATUS;
+-----------------+----------+--------------+------------------+
| File            | Position | Binlog_Do_DB | Binlog_Ignore_DB |
+-----------------+----------+--------------+------------------+
| binlogs.000002  |  1036    | dflt         |                  |
+-----------------+----------+--------------+------------------+
```

Record the File and Position details. If binary logging has just been enabled, these are blank. Now, with the lock still in place, copy the data from the primary to the replica.

Login to the app container, then run:

```sh
# Dump the data from primary. Note that it dumps only the databases, which "replicator" user has access to.
$ mysqldump --all-databases --single-transaction -h database.internal -P 3306 -u replicator -p > /path/to/dump.sql
```

Download the dump file, then move it to the server where your replica lives to import it.

```bash
# Copy the dump to your replica
$ mysql -u root < /path/to/dump.sql
```

Note for live databases: You just need to make a local copy of the data, you don't need to keep the primary locked until the replica has imported the data.
Once the `mysqldump` has completed, you can release the lock on the primary by running `UNLOCK TABLES`.

```sql
mysql> UNLOCK TABLES;
```

## Setting up the replica

### Configuring the replica

As mentioned above you have to set up a replica on your own. Assuming that you have a running MariaDB/MySQL replica instance, give the replica a unique `server_id` (distinct from primary). You can find out primary's `server_id` by running:

```sql
mysql> SHOW VARIABLES LIKE 'server_id';

+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| server_id     | 1     |
+---------------+-------+
```

Then set a distinct `server_id` number (e.g. server_id+1) in your replica config (e.g. `my.cnf`) under:

```
[mysqld]
server_id=2
```

And reload the replica instance for the changes to take an effect.

### Set up SSH tunneling

You need to set up an SSH tunnel from the replica server to the primary, tunneled through the application.
To do so using the {{< vendor/name >}} CLI, run the following
(replacing `{{< variable "BRANCH_NAME" >}}` with the name of your production branch):

```bash
webpaas tunnel:open --project {{< variable "PROJECT_ID" >}} --environment {{< variable "BRANCH_NAME" >}}
```

This opens local SSH tunnels to all services accessible from the application. In practice, you may be better served by setting up the tunnel manually using SSH. Consult the SSH documentation for the best way to do so.

> [!primary]  
> The SSH connection is interrupted every time the environment redeploys. For replication to continue you must setup an auto-restart for the connection. There are many ways to do so that are out of the scope of this documentation.
> 

### Starting the Replica

Once the data has been imported, you are ready to start replicating. Begin by running a `CHANGE MASTER TO`, making sure that `MASTER_LOG_FILE` matches the file and `MASTER_LOG_POS` the position returned by the earlier `SHOW MASTER STATUS` on the {{< vendor/name >}} database. For example:

```sql
mysql> CHANGE MASTER TO
  MASTER_HOST='{{< variable "HOST" >}}',
  MASTER_USER='replicator',
  MASTER_PASSWORD='{{< variable "REPLICATOR_PASSWORD" >}}',
  MASTER_PORT=3306,
  MASTER_LOG_FILE='binlogs.000002',
  MASTER_LOG_POS=1036,
  MASTER_CONNECT_RETRY=10;
```

Where `{{< variable "HOST" >}}` varies depending on the SSH tunneling configuration you have, and the `{{< variable "REPLICATOR_PASSWORD" >}}` can be obtained by running `webpaas relationships`.

Now start the replica with the `START SLAVE` command:

```sql
mysql> START SLAVE;
```

Check that the replication is working by executing the `SHOW SLAVE STATUS` command:

```sql
mysql> SHOW SLAVE STATUS \G
```

If replication is working correctly, the values of both `Slave_IO_Running` and `Slave_SQL_Running` should be `Yes`:

```sql
Slave_IO_Running: Yes
Slave_SQL_Running: Yes
```

### [Optional/Troubleshooting] Skipping invalid binary log queries

In some cases, after applying primary's dump to the replica and starting the replica, you might experience replication errors (`Slave_SQL_Running: No` and `Error:` in the output of `SHOW SLAVE STATUS \G` above). Each of such errors needs a careful inspection, but you might be able to just skip some of them. For example:

```sql
mysql> STOP SLAVE; SET GLOBAL SQL_SLAVE_SKIP_COUNTER = 1; START SLAVE;
mysql> SHOW SLAVE STATUS \G
```

In case you have multiple errors you would need to repeat the steps above (preferred) or set `SQL_SLAVE_SKIP_COUNTER` (which corresponds to skipping the next N events from the primary) to something greater.
