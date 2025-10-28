---
title: PostgreSQL - Available extensions
excerpt: List of available PostgreSQL extensions
updated: 2025-05-05
---

## List of available extensions

Public Cloud Databases for PostgreSQL come with a set of supported extensions.

You cannot install unsupported ones, since they are managed and industrialized services. Contact us if an extension is missing for your project, we may consider the implementation.

Please note that some of the extensions have dependencies and they need to be created in the proper order.
Also some extensions may require disconnecting the client and reconnecting before they are fully available.

### Auditing

| Extension Name | Link | Notes |
|----------------|------|-------|
| `pgaudit` | <https://github.com/pgaudit/pgaudit> | Provides session and object audit logging often required for compliance with government, financial, or ISO certifications |
| `tcn` | <https://www.postgresql.org/docs/current/tcn.html> | Triggered change notifications. |

### Connectivity

| Extension Name | Link | Notes |
|----------------|------|-------|
| `dblink` | <https://www.postgresql.org/docs/current/contrib-dblink-function.html> | Connect to other PostgreSQL databases from within a database. |
| `postgres_fdw` | <https://www.postgresql.org/docs/current/postgres-fdw.html> | Foreign-data wrapper for remote PostgreSQL servers. |

### Data types

| Extension Name | Link | Notes |
|----------------|------|-------|
| `citext` | <https://www.postgresql.org/docs/current/citext.html> | Data type for case-insensitive character strings. |
| `cube` | <https://www.postgresql.org/docs/current/cube.html> | Data type for multidimensional cubes. |
| `hll` | <https://github.com/citusdata/postgresql-hll> | Type for storing `hyperloglog` data. `PG11 and newer` |
| `hstore` | <https://www.postgresql.org/docs/current/hstore.html> | Data type for storing sets of (key, value) pairs. |
| `isn` | <https://www.postgresql.org/docs/current/isn.html> | Data types for international product numbering standards. |
| `ltree` | <https://www.postgresql.org/docs/current/ltree.html> | Data type for hierarchical tree-like structures. |
| `seg` | <https://www.postgresql.org/docs/current/seg.html> | Data type for representing line segments or floating-point intervals. |
| `timescaledb` | <https://github.com/timescale/timescaledb> | Enables scalable inserts and complex queries for time-series data. |
| `unit` | <https://github.com/df7cb/postgresql-unit> | SI units extension. |
| `uuid-ossp` | <https://www.postgresql.org/docs/current/uuid-ossp.html> | Generate universally unique identifiers (UUIDs). |

### Geographical features

| Extension Name | Link | Notes |
|----------------|------|-------|
| `address_standardizer` | <https://postgis.net/docs/standardize_address.html> | Used to parse an address into constituent elements. Generally used to support geocoding address normalization step. |
| `address_standardizer_data_us` | <https://postgis.net/docs/standardize_address.html> | Address standardizer US dataset example. |
| `earthdistance` | <https://www.postgresql.org/docs/current/earthdistance.html> | Calculate great-circle distances on the surface of the Earth. |
| `h3` | <https://github.com/zachasme/h3-pg> | PostgreSQL bindings for H3, a hierarchical hexagonal geospatial indexing system. |
| `h3_postgis` | <https://github.com/zachasme/h3-pg> | H3 PostGIS integration. |
| `pgrouting` | <https://github.com/pgRouting/pgrouting> | Extends the PostGIS/PostgreSQL geospatial database to provide geospatial routing and other network analysis functionality. |
| `postgis` | <https://postgis.net/> | PostGIS geometry and geography spatial types and functions. |
| `postgis_legacy` | <https://postgis.net/> | Legacy functions for PostGIS. |
| `postgis_raster` | <https://postgis.net/docs/RT_reference.html> | PostGIS raster types and functions. |
| `postgis_sfcgal` | <https://postgis.net/docs/reference_sfcgal.html> | PostGIS SFCGAL functions. |
| `postgis_tiger_geocoder` | <https://postgis.net/docs/Extras.html#Tiger_Geocoder> | PostGIS tiger geocoder and reverse geocoder. |
| `postgis_topology` | <https://postgis.net/docs/Topology.html> | PostGIS topology spatial types and functions. |

### Machine learning (ML) and artificial intelligence (AI)

| Extension Name | Link | Notes |
|----------------|------|-------|
| `pgvector` | <https://github.com/pgvector/pgvector> | Designed for vector similarity search for PostgreSQL. `PG13 and newer` |
| `pgvectorscale` | <https://github.com/timescale/pgvectorscale> | Complements `pgvector` as a vector data extension for PostgreSQL. `PG16 and newer` |

> [!primary]
>
> Supported `pgvectorscale` versions:
>
> - PG16: pgvectorscale-0.6.0
> - PG17: pgvectorscale-0.6.0
>
 
### Procedural language

| Extension Name | Link | Notes |
|----------------|------|-------|
| `plperl` | <https://www.postgresql.org/docs/current/plperl.html> | PL/Perl procedural language. |
| `plpgsql` | <https://www.postgresql.org/docs/current/plpgsql.html> | PL/pgSQL procedural language. |

### Search and text handling

| Extension Name | Link | Notes |
|----------------|------|-------|
| `bloom` | <https://www.postgresql.org/docs/current/bloom.html> | Bloom access method - signature file based index. |
| `btree_gin` | <https://www.postgresql.org/docs/current/btree-gin.html> | Support for indexing common data types in GIN. |
| `btree_gist` | <https://www.postgresql.org/docs/current/btree-gist.html> | Support for indexing common data types in GiST. |
| `dict_int` | <https://www.postgresql.org/docs/current/dict-int.html> | Text search dictionary template for integers. |
| `fuzzystrmatch` | <https://www.postgresql.org/docs/current/fuzzystrmatch.html> | Determine similarities and distance between strings. |
| `pg_similarity` | <https://github.com/eulerto/pg_similarity> | Support similarity queries. `PG13 and newer` |
| `pg_trgm` | <https://www.postgresql.org/docs/current/pgtrgm.html> | Text similarity measurement and index searching based on trigrams. |
| `pgcrypto` | <https://www.postgresql.org/docs/current/pgcrypto.html> | Cryptographic functions. |
| `rum` | <https://github.com/postgrespro/rum> | RUM index access method. |
| `unaccent` | <https://www.postgresql.org/docs/current/unaccent.html> | Text search dictionary that removes accents. |

### Utilities

| Extension Name | Link | Notes |
|----------------|------|-------|
| `aiven_extras` | <https://github.com/aiven/aiven-extras> | This extension is meant for use in environments where you want non-superusers to be able to use certain database features. |
| `bool_plperl` | <https://www.postgresql.org/docs/current/plperl-funcs.html> | Transform between `bool` and `plperl`. `PG13 and newer` |
| `intagg` | <https://www.postgresql.org/docs/current/intagg.html> | Integer aggregator and enumerator (obsolete). |
| `intarray` | <https://www.postgresql.org/docs/current/intarray.html> | Functions, operators, and index support for 1-D arrays of integers. |
| `jsonb_plperl` | <https://www.postgresql.org/docs/current/datatype-json.html> | Transform between `jsonb` and `plperl`. |
| `lo` | <https://www.postgresql.org/docs/current/lo.html> | Large Object maintenance. |
| `pageinspect` | <https://www.postgresql.org/docs/current/pageinspect.html> | Inspect the contents of database pages at a low level. |
| `pg_buffercache` | <https://www.postgresql.org/docs/current/pgbuffercache.html> | Examine the shared buffer cache. |
| `pg_cron` | <https://github.com/citusdata/pg_cron> | Job scheduler for PostgreSQL. |
| `pg_partman` | <https://github.com/pgpartman/pg_partman> | Extension to manage partitioned tables by time or ID. |
| `pg_prewarm` | <https://www.postgresql.org/docs/current/pgprewarm.html> | Prewarm relation data. PG11 and newer |
| `pg_prometheus` | <https://github.com/timescale/pg_prometheus> | Prometheus metrics for PostgreSQL. `PG12 and earlier` |
| `pg_repack` | <https://pgxn.org/dist/pg_repack/1.4.6/> | Reorganize tables in PostgreSQL databases with minimal locks. |
| `pg_stat_statements` | <https://www.postgresql.org/docs/current/pgstatstatements.html> | Track planning and execution statistics of all SQL statements executed. |
| `pgrowlocks` | <https://www.postgresql.org/docs/current/pgrowlocks.html> | Show row-level locking information. |
| `pgstattuple` | <https://www.postgresql.org/docs/current/pgstattuple.html> | Show tuple-level statistics. |
| `sslinfo` | <https://www.postgresql.org/docs/current/sslinfo.html> | Information about SSL certificates. |
| `tablefunc` | <https://www.postgresql.org/docs/current/tablefunc.html> | Functions that manipulate whole tables, including `crosstab`. |
| `timetravel` | <https://www.postgresql.org/docs/6.3/c0503.htm> | Functions for implementing time travel. `PG11 and earlier` |
| `tsm_system_rows` | <https://www.postgresql.org/docs/current/tsm-system-rows.html> | TABLESAMPLE method which accepts number of rows as a limit. |
| `tsm_system_time` | <https://www.postgresql.org/docs/current/tsm-system-time.html> | TABLESAMPLE method which accepts time in milliseconds as a limit. |

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

Install an available extension:

```sql
defaultdb=> CREATE EXTENSION IF NOT EXISTS "<extension_name>";
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

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
