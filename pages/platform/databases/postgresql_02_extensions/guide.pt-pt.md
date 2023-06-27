---
title: PostgreSQL - Available extensions
excerpt: List of available PostgreSQL extensions
routes:
    canonical: '/pages/platform/databases/postgresql_02_extensions'
updated: 2023-06-22
---

## List of available extensions

Public Cloud Databases for PostgreSQL come with a set of supported extensions.

You cannot install unsupported ones, since they are managed and industrialized services. Contact us if an extension is missing for your project, we may consider the implementation.

Please note that some of the extensions have dependencies and they need to be created in the proper order. 
Also some extensions may require disconnecting the client and reconnecting before they are fully available.

| Extension Name                 | Link                                                                   | Notes                                                                                                                                           |
| ------------------------------ | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `address_standardizer`         | <https://postgis.net/docs/standardize_address.html>                    |                                                                                                                                                 |
| `address_standardizer_data_us` | <https://postgis.net/docs/standardize_address.html>                    |                                                                                                                                                 |
| `aiven_extras`                 | <https://github.com/aiven/aiven-extras>                                | Logical replication support from our technological partner Aiven                                                                                |
| `bloom`                        | <https://www.postgresql.org/docs/current/bloom.html>                   |                                                                                                                                                 |
| `btree_gin`                    | <https://www.postgresql.org/docs/current/btree-gin.html>               |                                                                                                                                                 |
| `btree_gist`                   | <https://www.postgresql.org/docs/current/btree-gist.html>              |                                                                                                                                                 |
| `chkpass`                      | <https://www.postgresql.org/docs/10/chkpass.html>                      | Available up to PostgreSQL v10                                                                                                                  |
| `citext`                       | <https://www.postgresql.org/docs/current/citext.html>                  |                                                                                                                                                 |
| `cube`                         | <https://www.postgresql.org/docs/current/cube.html>                    |                                                                                                                                                 |
| `dblink`                       | <https://www.postgresql.org/docs/current/contrib-dblink-function.html> |                                                                                                                                                 |
| `dict_int`                     | <https://www.postgresql.org/docs/current/dict-int.html>                |                                                                                                                                                 |
| `earthdistance`                | <https://www.postgresql.org/docs/current/earthdistance.html>           |                                                                                                                                                 |
| `fuzzystrmatch`                | <https://www.postgresql.org/docs/current/fuzzystrmatch.html>           |                                                                                                                                                 |
| `hll`                          | <https://github.com/citusdata/postgresql-hll>                          | PostgreSQL 11 and newer                                                                                                                         |
| `hstore`                       | <https://www.postgresql.org/docs/current/hstore.html>                  |                                                                                                                                                 |
| `intagg`                       | <https://www.postgresql.org/docs/current/intagg.html>                  |                                                                                                                                                 |
| `intarray`                     | <https://www.postgresql.org/docs/current/intarray.html>                |                                                                                                                                                 |
| `isn`                          | <https://www.postgresql.org/docs/current/isn.html>                     |                                                                                                                                                 |
| `ltree`                        | <https://www.postgresql.org/docs/current/ltree.html>                   |                                                                                                                                                 |
| `pg_buffercache`               | <https://www.postgresql.org/docs/current/pgbuffercache.html>           |                                                                                                                                                 |
| `pg_cron`                      | <https://github.com/citusdata/pg_cron>                                 |                                                                                                                                                 |
| `pg_partman`                   | <https://github.com/pgpartman/pg_partman>                              | PostgreSQL 10 and older                                                                                                                         |
| `pg_prometheus`                | <https://github.com/timescale/pg_prometheus>                           | PostgreSQL 10 to 12, the extension has been sunset by Timescale in favor of `promscale` and is not supported for PostgreSQL 13                  |
| `pg_repack`                    | <https://pgxn.org/dist/pg_repack/1.4.6/>                               | PostgreSQL 10 and newer                                                                                                                         |
| `pg_similarity`                | <https://github.com/eulerto/pg_similarity>                             | PostgreSQL 13 and newer                                                                                                                         |
| `pg_stat_statements`           | <https://www.postgresql.org/docs/current/pgstatstatements.html>        |                                                                                                                                                 |
| `pg_trgm`                      | <https://www.postgresql.org/docs/current/pgtrgm.html>                  |                                                                                                                                                 |
| `pgcrypto`                     | <https://www.postgresql.org/docs/current/pgcrypto.html>                |                                                                                                                                                 |
| `pgrouting`                    | <https://github.com/pgRouting/pgrouting>                               |                                                                                                                                                 |
| `pgrowlocks`                   | <https://www.postgresql.org/docs/current/pgrowlocks.html>              |                                                                                                                                                 |
| `pgstattuple`                  | <https://www.postgresql.org/docs/current/pgstattuple.html>             | PostgreSQL 11 and later                                                                                                                         |
| `pgvector`                     | <https://github.com/pgvector/pgvector>                                 | PostgreSQL 13 and later                                                                                                                         |
| `plcoffee`                     | <https://pgxn.org/dist/plv8/>                                          | Available up to PostgreSQL v10                                                                                                                  |
| `plls`                         | <https://pgxn.org/dist/plv8/>                                          | Available up to PostgreSQL v10                                                                                                                  |
| `plperl`                       | <https://www.postgresql.org/docs/current/plperl.html>                  |                                                                                                                                                 |
| `plv8`                         | <https://pgxn.org/dist/plv8/>                                          | Available up to PostgreSQL v10                                                                                                                  |
| `postgis`                      | <https://postgis.net/>                                                 |                                                                                                                                                 |
| `postgis_address_standardizer` | <https://postgis.net/docs/standardize_address.html>                    |                                                                                                                                                 |
| `postgis_sfcgal`               | <http://postgis.net/docs/reference.html#reference_sfcgal>              |                                                                                                                                                 |
| `postgis_tiger_geocoder`       | <https://postgis.net/docs/Geocode.html>                                |                                                                                                                                                 |
| `postgis_topology`             | <https://postgis.net/docs/Topology.html>                               |                                                                                                                                                 |
| `postgis_legacy`               |                                                                        | The extension is not packaged or supported as an extension by the PostGIS project. The extension package is provided by OVHcloud for our users. |
| `postgres_fdw`                 | <https://www.postgresql.org/docs/current/postgres-fdw.html>            |                                                                                                                                                 |
| `rum`                          | <https://github.com/postgrespro/rum>                                   |                                                                                                                                                 |
| `sslinfo`                      | <https://www.postgresql.org/docs/current/sslinfo.html>                 |                                                                                                                                                 |
| `tablefunc`                    | <https://www.postgresql.org/docs/current/tablefunc.html>               |                                                                                                                                                 |
| `timescaledb`                  | <https://github.com/timescale/timescaledb>                             | PostgreSQL 10 and newer                                                                                                                         |
| `tsearch2`                     | <https://www.postgresql.org/docs/9.2/tsearch2.html>                    | Available up to PostgreSQL v9.6                                                                                                                 |
| `tsm_system_rows`              | <https://www.postgresql.org/docs/current/tsm-system-rows.html>         |                                                                                                                                                 |
| `unaccent`                     | <https://www.postgresql.org/docs/current/unaccent.html>                |                                                                                                                                                 |
| `unit`                         | <https://github.com/df7cb/postgresql-unit>                             | PostgreSQL 10 and newer                                                                                                                         |
| `uuid-ossp`                    | <https://www.postgresql.org/docs/current/uuid-ossp.html>               |                                                                                                                                                 |
| `wal2json`                     | <https://github.com/eulerto/wal2json>                                  | PostgreSQL 10 and newer                                                                                                                         |

## Installing an extension

You can list available extensions:

```sql
defaultdb=> SELECT * FROM pg_available_extensions;                                                                                                                                        
             name             | default_version | installed_version |                                                      comment
------------------------------+-----------------+-------------------+--------------------------------------------------------------------------------------------------------------------
 address_standardizer         | 3.2.4           |                   | Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.
 address_standardizer_data_us | 3.2.4           |                   | Address Standardizer US dataset example
 aiven_extras                 | 1.1.8           |                   | aiven_extras
 aiven_gatekeeper             | 1.0.0           |                   | Aiven standard security library
 [...]
(71 rows)
```

Install an available extension::

```sql
defaultdb=> CREATE EXTENSION IF NOT EXISTS extension_name
CREATE EXTENSION
```

Check installed extensions:

```sql
defaultdb=> \dx
                     List of installed extensions
     Name     | Version |    Schema    |         Description          
--------------+---------+--------------+------------------------------
 aiven_extras | 1.1.8   | aiven_extras | aiven_extras
 pg_cron      | 1.4-1   | public       | Job scheduler for PostgreSQL
 plpgsql      | 1.0     | pg_catalog   | PL/pgSQL procedural language

 -- In this example, aiven_extras and pg_cron are installed. plpgsql is installed by default.
```

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/pt/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
