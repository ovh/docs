---
title: PostgreSQL - Tutorial - How to migrate an on-premises database to Public Cloud Databases
excerpt: Learn how to migrate a on-premises PostgreSQL database instance to Public Cloud Databases for PostgreSQL
updated: 2022-03-16
---

## Objective

**This guide details a procedure to migrate a PostgreSQL instance running on-premises to OVHcloud Public Cloud Databases for PostgreSQL.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/compute/) in your OVHcloud account
- A PostgreSQL database running on-premises (the "source" instance)
- A PostgreSQL database running on OVHcloud Public Cloud Databases (the "target" instance)
- A PostgreSQL client that can connect to both database instances, source and target.
- Access to the [OVHcloud Control Panel](/links/manager)

These guides can help you to meet these requirements:

- [Getting started with Public Cloud Databases](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel)
- [PostgreSQL - Connect with CLI](/pages/public_cloud/public_cloud_databases/postgresql_03_connect_cli)

## Considerations

- This document outlines an offline migration path for your database, which means you will have to suspend all the writes from your application for the duration of the migration. Ensure you plan sufficient downtime to carry out all the migration tasks.
- Ensure the source and destination PostgreSQL versions match.
- Ensure you have good enough bandwidth between the client machine and both source and destination databases.
- Ensure you choose a [Database plan](https://www.ovhcloud.com/en-gb/public-cloud/prices/#databases) with appropriate compute, storage and memory resources.

## Procedure

### Step 1: Stop writing to the source database

Ensure client applications stop all write activity on the source database side. Depending on your system, this might entail letting your customers know in advance about unavailability, stopping other upstream applications, or some other administrative, operations or development tasks.

### Step 2: Export the schema

Use the `pg_dump` command to export the database schema to the client machine, as an SQL plaintext file:

```bash
$ pg_dump --file "path/to/dump.sql" --host "xxxxxxxxxxx.prm.clouddb.ovh.net" --port "<write port>" \
    --username "postgres" --verbose --format=p --schema-only "database-name"
```

### Step 3: Export the data

Use the `pg_dump` command to export the database data to the client machine, in a .tar archive file:

```bash
$ pg_dump --file "path/to/dump.tar" --host "xxxxxxxxxxx.prm.clouddb.ovh.net" --port "<write port>" \
    --no-owner --username "postgres" --no-password --verbose --format=t --blobs --encoding "UTF8"
```

Exporting the full dataset may take time depending on the size of the database and available bandwidth.

### Step 4: Edit the schema

Since you won't have access to super user privilege (usually named `postgres`) on the destination database, you need to replace references to that role in the schema dump file with another role, either `avnadmin`, the initial admin user of your managed database, or another user you'd have created beforehand.

Open the schema dump file with a text editor and search for lines such as:

```sql
ALTER TABLE public.<table> OWNER TO postgres;
```

Edit it so that it reads:

```sql
ALTER TABLE public.<table> OWNER TO avnadmin;
```

Then, search the schema dump file for anything that is not compatible with the OVHcloud Public Cloud Databases offer. Review [PostgreSQL - Capabilities and Limitations](/pages/public_cloud/public_cloud_databases/postgresql_01_capabilities) to learn about what the destination database supports.

Pay particular attention to anything related to extensions, users, roles and schemas. For example, if you installed any third party extensions, you'll need to remove them as extensions are to be handled differently going forward (check the list of supported extensions here: [PostgreSQL - Available extensions](/pages/public_cloud/public_cloud_databases/postgresql_02_extensions)).

### Step 5: Import the schema

Use the following psql command to restore the schema on the destination:

```bash
$ psql -v ON_ERROR_STOP=1 -h postgresql-xxxxxxxx.database.cloud.ovh.net -p <port> \
    -d defaultdb -U avnadmin < path/to/the/dump.sql
```

This step should complete quickly.

### Step 6: Verify the schema import

Connect to your database service to check if the schema restore completed successfully:

```bash
$ psql "postgres://<username>:<password>@<hostname>:<port>/defaultdb?sslmode=require"
```

Check the table(s):

```sql
defaultdb=> \dt
```

Verify the schema:

```sql
defaultdb=> \d <tablename>
defaultdb=> select * from information_schema.columns;
```

### Step 7: Import the data

Use th `pg_restore` command to restore the data:

```bash
$ pg_restore -d defaultdb -h <postgresql-xxxxxxxxx.database.cloud.ovh.net> -p <port> \
     --no-owner -U avnadmin --data-only path/to/the/dump.tar -v
```

As for the data export step and depending on the dataset size and the available bandwidth, the operation might take some time.<br>
You can monitor the disk & network activity from the Metrics section of the DB service page in your [OVHcloud Control Panel](/links/manager):

![Metrics Tab](images/metrics_tab.png){.thumbnail}

See, for example, the disk usage:

![Metrics - Disk](images/metrics_disk.png){.thumbnail}

or the incoming network:

![Metrics - Network](images/metrics_net_rx.png){.thumbnail}

### Step 8: Verify the data import

You can check if the data was migrated successfully by querying the destination database, e.g.:

```sql
defaultdb=> select pg_size_pretty(pg_total_relation_size('<tablename>'));
defaultdb=> select count(*) from <tablename>;
```

### Step 9: Resume operations using the destination database

Once you verified that the database migration was successful, update client applications to have them connect to the destination database. You can now resume normal operations.

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
