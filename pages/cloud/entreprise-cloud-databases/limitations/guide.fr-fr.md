---
title: 'Limitations appliquées à l''offre PostgreSQL managée'
slug: limitations-techniques
excerpt: 'Prenez connaissances des limitations techniques de l''offre PostgreSQL managée'
section: 'Informations techniques'
order: 4
---

## Limitations réseau

|**Composant**|**Description**|
|---|---| 
|Bande passante maximale|1 Gb/s|
|Réseau privé|Non disponible|

## Limitations logicielles

Nous supportons les mises à jour mineures du système d'exploitation ainsi que du SGBD. OVHcloud applique l’entièreté des mises à jour de securité.

## Limitations d'usage

|**Composant**|**Description**|
|---|---|
|SGBD proposés|PostgreSQL 9.6, 10, 11|
|Maximum de connexions actives|900|
|Espace disque|L'espace disque est fixe, il ne peut pas être étendu|
|Type de réplication|Asynchrone. Il est possible qu'il y ai un court délai d'application des changements entre le serveur primaire et le ou les réplicas.|

## Extensions compatibles

La liste d'extensions est régulièrement mise à jour.

Vous pouvez à tout moment trouver la liste des extensions disponibles sur votre cluster en exécutant la requête SQL suivante:

    SELECT * FROM pg_available_extensions ORDER BY name;

Voici un exemple de sortie à partir d'un PostgreSQL 11 datant du 8 Novembre 2019 :

                  name               | default_version | installed_version |                                                       comment
    ----------------------------------+-----------------+-------------------+---------------------------------------------------------------------------------------------------------------------
    address_standardizer             | 2.5.3           |                   | Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.
    address_standardizer-2.5         | 2.5.3           |                   | Used to parse an address into constituent elements. Generally used to support geocoding address normalization step.
    address_standardizer_data_us     | 2.5.3           |                   | Address Standardizer US dataset example
    address_standardizer_data_us-2.5 | 2.5.3           |                   | Address Standardizer US dataset example
    adminpack                        | 2.0             |                   | administrative functions for PostgreSQL
    amcheck                          | 1.1             |                   | functions for verifying relation integrity
    autoinc                          | 1.0             |                   | functions for autoincrementing fields
    bloom                            | 1.0             |                   | bloom access method - signature file based index
    btree_gin                        | 1.3             |                   | support for indexing common datatypes in GIN
    btree_gist                       | 1.5             |                   | support for indexing common datatypes in GiST
    citext                           | 1.5             |                   | data type for case-insensitive character strings
    cube                             | 1.4             |                   | data type for multidimensional cubes
    dblink                           | 1.2             |                   | connect to other PostgreSQL databases from within a database
    dict_int                         | 1.0             |                   | text search dictionary template for integers
    dict_xsyn                        | 1.0             |                   | text search dictionary template for extended synonym processing
    earthdistance                    | 1.1             |                   | calculate great-circle distances on the surface of the Earth
    file_fdw                         | 1.0             |                   | foreign-data wrapper for flat file access
    fuzzystrmatch                    | 1.1             |                   | determine similarities and distance between strings
    hstore                           | 1.5             |                   | data type for storing sets of (key, value) pairs
    hstore_plpython2u                | 1.0             |                   | transform between hstore and plpython2u
    hstore_plpythonu                 | 1.0             |                   | transform between hstore and plpythonu
    insert_username                  | 1.0             |                   | functions for tracking who changed a table
    intagg                           | 1.1             |                   | integer aggregator and enumerator (obsolete)
    intarray                         | 1.2             |                   | functions, operators, and index support for 1-D arrays of integers
    ip4r                             | 2.4             |                   |
    isn                              | 1.2             |                   | data types for international product numbering standards
    jsonb_plpython2u                 | 1.0             |                   | transform between jsonb and plpython2u
    jsonb_plpythonu                  | 1.0             |                   | transform between jsonb and plpythonu
    lo                               | 1.1             |                   | Large Object maintenance
    ltree                            | 1.1             |                   | data type for hierarchical tree-like structures
    ltree_plpython2u                 | 1.0             |                   | transform between ltree and plpython2u
    ltree_plpythonu                  | 1.0             |                   | transform between ltree and plpythonu
    moddatetime                      | 1.0             |                   | functions for tracking last modification time
    pageinspect                      | 1.7             |                   | inspect the contents of database pages at a low level
    pg_buffercache                   | 1.3             |                   | examine the shared buffer cache
    pg_freespacemap                  | 1.2             |                   | examine the free space map (FSM)
    pg_prewarm                       | 1.2             |                   | prewarm relation data
    pg_stat_statements               | 1.6             |                   | track execution statistics of all SQL statements executed
    pg_trgm                          | 1.4             |                   | text similarity measurement and index searching based on trigrams
    pg_visibility                    | 1.2             |                   | examine the visibility map (VM) and page-level visibility info
    pgcrypto                         | 1.3             |                   | cryptographic functions
    pglogical                        | 2.2.2           |                   | PostgreSQL Logical Replication
    pglogical_origin                 | 1.0.0           |                   | Dummy extension for compatibility when upgrading from Postgres 9.4
    pgrouting                        | 2.6.2           |                   | pgRouting Extension
    pgrowlocks                       | 1.2             |                   | show row-level locking information
    pgstattuple                      | 1.5             |                   | show tuple-level statistics
    plpgsql                          | 1.0             | 1.0               | PL/pgSQL procedural language
    plpython2u                       | 1.0             |                   | PL/Python2U untrusted procedural language
    plpythonu                        | 1.0             |                   | PL/PythonU untrusted procedural language
    postgis                          | 2.5.3           |                   | PostGIS geometry, geography, and raster spatial types and functions
    postgis-2.5                      | 2.5.3           |                   | PostGIS geometry, geography, and raster spatial types and functions
    postgis_sfcgal                   | 2.5.3           |                   | PostGIS SFCGAL functions
    postgis_sfcgal-2.5               | 2.5.3           |                   | PostGIS SFCGAL functions
    postgis_tiger_geocoder           | 2.5.3           |                   | PostGIS tiger geocoder and reverse geocoder
    postgis_tiger_geocoder-2.5       | 2.5.3           |                   | PostGIS tiger geocoder and reverse geocoder
    postgis_topology                 | 2.5.3           |                   | PostGIS topology spatial types and functions
    postgis_topology-2.5             | 2.5.3           |                   | PostGIS topology spatial types and functions
    postgres_fdw                     | 1.0             |                   | foreign-data wrapper for remote PostgreSQL servers
    refint                           | 1.0             |                   | functions for implementing referential integrity (obsolete)
    seg                              | 1.3             |                   | data type for representing line segments or floating-point intervals
    sslinfo                          | 1.2             |                   | information about SSL certificates
    tablefunc                        | 1.0             |                   | functions that manipulate whole tables, including crosstab
    tcn                              | 1.0             |                   | Triggered change notifications
    timetravel                       | 1.0             |                   | functions for implementing time travel
    tsm_system_rows                  | 1.0             |                   | TABLESAMPLE method which accepts number of rows as a limit
    tsm_system_time                  | 1.0             |                   | TABLESAMPLE method which accepts time in milliseconds as a limit
    unaccent                         | 1.1             |                   | text search dictionary that removes accents
    uuid-ossp                        | 1.1             |                   | generate universally unique identifiers (UUIDs)
    xml2                             | 1.1             |                   | XPath querying and XSLT
    (69 rows)
