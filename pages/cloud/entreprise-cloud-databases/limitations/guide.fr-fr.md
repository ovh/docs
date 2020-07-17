---
title: 'Limitations appliquées à l''offre PostgreSQL managée'
slug: limitations-techniques
excerpt: 'Prenez connaissances des limitations techniques de l''offre PostgreSQL managée'
section: 'Informations techniques'
order: 4
---

## Limitations réseau

|**Composant**          |**Description**|
|-----------------------|---------------|
|Bande passante maximale|1 Gb/s         |
|Réseau privé           |Non disponible |

## Limitations logicielles

Nous supportons les mises à jour mineures du système d'exploitation ainsi que du SGBD. OVHcloud applique l’entièreté des mises à jour de securité.

## Limitations d'usage

|**Composant**                |**Description**                                                                                                                     |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------|
|SGBD proposés                |PostgreSQL 9.6, 10, 11, 12                                                                                                          |
|Maximum de connexions actives|900                                                                                                                                 |
|Espace disque                |L'espace disque est fixe, il ne peut pas être étendu                                                                                |
|Type de réplication          |Asynchrone. Il est possible qu'il y ai un court délai d'application des changements entre le serveur primaire et le ou les réplicas.|

## Extensions compatibles

La liste d'extensions est régulièrement mise à jour.

Vous pouvez à tout moment trouver la liste des extensions disponibles sur votre cluster en exécutant la requête SQL suivante:

    SELECT * FROM pg_available_extensions ORDER BY name;

L'extension "wal2json" n'est pas incluse dans la liste précédente car elle ne peut pas être créée avec la commande `CREATE EXTENSION`. Elle est utilisable lors de la création d'un [slot de réplication logique](https://docs.postgresql.fr/current/functions-admin.html#functions-replication).

### PostgreSQL 12

Liste des extensions supportées au 17 Juillet 2020 :

|          **Extension**           | **Version** |
|----------------------------------|-------------|
| address_standardizer             | 3.0.1       |
| address_standardizer-2.5         | 2.5.4       |
| address_standardizer-3           | 3.0.1       |
| address_standardizer_data_us     | 3.0.1       |
| address_standardizer_data_us-2.5 | 2.5.4       |
| address_standardizer_data_us-3   | 3.0.1       |
| adminpack                        | 2.0         |
| amcheck                          | 1.2         |
| autoinc                          | 1.0         |
| bloom                            | 1.0         |
| btree_gin                        | 1.3         |
| btree_gist                       | 1.5         |
| citext                           | 1.6         |
| cube                             | 1.4         |
| dblink                           | 1.2         |
| dict_int                         | 1.0         |
| dict_xsyn                        | 1.0         |
| earthdistance                    | 1.1         |
| file_fdw                         | 1.0         |
| fuzzystrmatch                    | 1.1         |
| hstore                           | 1.6         |
| hstore_plpython3u                | 1.0         |
| insert_username                  | 1.0         |
| intagg                           | 1.1         |
| intarray                         | 1.2         |
| ip4r                             | 2.4         |
| isn                              | 1.2         |
| jsonb_plpython3u                 | 1.0         |
| lo                               | 1.1         |
| ltree                            | 1.1         |
| ltree_plpython3u                 | 1.0         |
| moddatetime                      | 1.0         |
| pageinspect                      | 1.7         |
| pg_buffercache                   | 1.3         |
| pg_freespacemap                  | 1.2         |
| pg_prewarm                       | 1.2         |
| pg_stat_statements               | 1.7         |
| pg_trgm                          | 1.4         |
| pg_visibility                    | 1.2         |
| pgcrypto                         | 1.3         |
| pglogical                        | 2.3.0       |
| pglogical_origin                 | 1.0.0       |
| pgrouting                        | 3.0.0       |
| pgrowlocks                       | 1.2         |
| pgstattuple                      | 1.5         |
| plpgsql                          | 1.0         |
| plpython3u                       | 1.0         |
| postgis                          | 3.0.1       |
| postgis-2.5                      | 2.5.4       |
| postgis-3                        | 3.0.1       |
| postgis_raster                   | 3.0.1       |
| postgis_raster-3                 | 3.0.1       |
| postgis_sfcgal                   | 3.0.1       |
| postgis_sfcgal-2.5               | 2.5.4       |
| postgis_sfcgal-3                 | 3.0.1       |
| postgis_tiger_geocoder           | 3.0.1       |
| postgis_tiger_geocoder-2.5       | 2.5.4       |
| postgis_tiger_geocoder-3         | 3.0.1       |
| postgis_topology                 | 3.0.1       |
| postgis_topology-2.5             | 2.5.4       |
| postgis_topology-3               | 3.0.1       |
| postgres_fdw                     | 1.0         |
| refint                           | 1.0         |
| seg                              | 1.3         |
| sslinfo                          | 1.2         |
| tablefunc                        | 1.0         |
| tcn                              | 1.0         |
| timescaledb                      | 1.7.2       |
| tsm_system_rows                  | 1.0         |
| tsm_system_time                  | 1.0         |
| unaccent                         | 1.1         |
| uuid-ossp                        | 1.1         |
| wal2json                         | 2.2         |
| xml2                             | 1.1         |

### PostgreSQL 11

Liste des extensions supportées au 17 Juillet 2020 :

|         **Extension**          | **Version** |
|--------------------------------|-------------|
| address_standardizer           | 3.0.1       |
| address_standardizer-3         | 3.0.1       |
| address_standardizer_data_us   | 3.0.1       |
| address_standardizer_data_us-3 | 3.0.1       |
| adminpack                      | 2.0         |
| amcheck                        | 1.1         |
| autoinc                        | 1.0         |
| bloom                          | 1.0         |
| btree_gin                      | 1.3         |
| btree_gist                     | 1.5         |
| citext                         | 1.5         |
| cube                           | 1.4         |
| dblink                         | 1.2         |
| dict_int                       | 1.0         |
| dict_xsyn                      | 1.0         |
| earthdistance                  | 1.1         |
| file_fdw                       | 1.0         |
| fuzzystrmatch                  | 1.1         |
| hstore                         | 1.5         |
| hstore_plpython3u              | 1.0         |
| insert_username                | 1.0         |
| intagg                         | 1.1         |
| intarray                       | 1.2         |
| ip4r                           | 2.4         |
| isn                            | 1.2         |
| jsonb_plpython3u               | 1.0         |
| lo                             | 1.1         |
| ltree                          | 1.1         |
| ltree_plpython3u               | 1.0         |
| moddatetime                    | 1.0         |
| pageinspect                    | 1.7         |
| pg_buffercache                 | 1.3         |
| pg_freespacemap                | 1.2         |
| pg_prewarm                     | 1.2         |
| pg_stat_statements             | 1.6         |
| pg_trgm                        | 1.4         |
| pg_visibility                  | 1.2         |
| pgcrypto                       | 1.3         |
| pglogical                      | 2.3.0       |
| pglogical_origin               | 1.0.0       |
| pgrouting                      | 3.0.0       |
| pgrowlocks                     | 1.2         |
| pgstattuple                    | 1.5         |
| plpgsql                        | 1.0         |
| plpython3u                     | 1.0         |
| postgis                        | 3.0.1       |
| postgis-3                      | 3.0.1       |
| postgis_raster                 | 3.0.1       |
| postgis_raster-3               | 3.0.1       |
| postgis_sfcgal                 | 3.0.1       |
| postgis_sfcgal-3               | 3.0.1       |
| postgis_tiger_geocoder         | 3.0.1       |
| postgis_tiger_geocoder-3       | 3.0.1       |
| postgis_topology               | 3.0.1       |
| postgis_topology-3             | 3.0.1       |
| postgres_fdw                   | 1.0         |
| refint                         | 1.0         |
| seg                            | 1.3         |
| sslinfo                        | 1.2         |
| tablefunc                      | 1.0         |
| tcn                            | 1.0         |
| timescaledb                    | 1.7.2       |
| timetravel                     | 1.0         |
| tsm_system_rows                | 1.0         |
| tsm_system_time                | 1.0         |
| unaccent                       | 1.1         |
| uuid-ossp                      | 1.1         |
| wal2json                       | 2.2         |
| xml2                           | 1.1         |

### PostgreSQL 10

Liste des extensions supportées au 17 Juillet 2020 :

|         **Extension**          | **Version** |
|--------------------------------|-------------|
| address_standardizer           | 3.0.1       |
| address_standardizer-3         | 3.0.1       |
| address_standardizer_data_us   | 3.0.1       |
| address_standardizer_data_us-3 | 3.0.1       |
| adminpack                      | 1.1         |
| amcheck                        | 1.0         |
| autoinc                        | 1.0         |
| bloom                          | 1.0         |
| btree_gin                      | 1.2         |
| btree_gist                     | 1.5         |
| chkpass                        | 1.0         |
| citext                         | 1.4         |
| cube                           | 1.2         |
| dblink                         | 1.2         |
| dict_int                       | 1.0         |
| dict_xsyn                      | 1.0         |
| earthdistance                  | 1.1         |
| file_fdw                       | 1.0         |
| fuzzystrmatch                  | 1.1         |
| hstore                         | 1.4         |
| hstore_plpython3u              | 1.0         |
| insert_username                | 1.0         |
| intagg                         | 1.1         |
| intarray                       | 1.2         |
| ip4r                           | 2.4         |
| isn                            | 1.1         |
| lo                             | 1.1         |
| ltree                          | 1.1         |
| ltree_plpython3u               | 1.0         |
| moddatetime                    | 1.0         |
| pageinspect                    | 1.6         |
| pg_buffercache                 | 1.3         |
| pg_freespacemap                | 1.2         |
| pg_prewarm                     | 1.1         |
| pg_stat_statements             | 1.6         |
| pg_trgm                        | 1.3         |
| pg_visibility                  | 1.2         |
| pgcrypto                       | 1.3         |
| pglogical                      | 2.3.0       |
| pglogical_origin               | 1.0.0       |
| pgrouting                      | 3.0.0       |
| pgrowlocks                     | 1.2         |
| pgstattuple                    | 1.5         |
| plpgsql                        | 1.0         |
| plpython3u                     | 1.0         |
| postgis                        | 3.0.1       |
| postgis-3                      | 3.0.1       |
| postgis_raster                 | 3.0.1       |
| postgis_raster-3               | 3.0.1       |
| postgis_sfcgal                 | 3.0.1       |
| postgis_sfcgal-3               | 3.0.1       |
| postgis_tiger_geocoder         | 3.0.1       |
| postgis_tiger_geocoder-3       | 3.0.1       |
| postgis_topology               | 3.0.1       |
| postgis_topology-3             | 3.0.1       |
| postgres_fdw                   | 1.0         |
| refint                         | 1.0         |
| seg                            | 1.1         |
| sslinfo                        | 1.2         |
| tablefunc                      | 1.0         |
| tcn                            | 1.0         |
| timescaledb                    | 1.7.2       |
| timetravel                     | 1.0         |
| tsm_system_rows                | 1.0         |
| tsm_system_time                | 1.0         |
| unaccent                       | 1.1         |
| uuid-ossp                      | 1.1         |
| wal2json                       | 2.2         |
| xml2                           | 1.1         |

### PostgreSQL 9.6

Liste des extensions supportées au 17 Juillet 2020 :

|         **Extension**          | **Version** |
|--------------------------------|-------------|
| address_standardizer           | 3.0.1       |
| address_standardizer-3         | 3.0.1       |
| address_standardizer_data_us   | 3.0.1       |
| address_standardizer_data_us-3 | 3.0.1       |
| adminpack                      | 1.1         |
| autoinc                        | 1.0         |
| bloom                          | 1.0         |
| btree_gin                      | 1.0         |
| btree_gist                     | 1.2         |
| chkpass                        | 1.0         |
| citext                         | 1.3         |
| cube                           | 1.2         |
| dblink                         | 1.2         |
| dict_int                       | 1.0         |
| dict_xsyn                      | 1.0         |
| earthdistance                  | 1.1         |
| file_fdw                       | 1.0         |
| fuzzystrmatch                  | 1.1         |
| hstore                         | 1.4         |
| hstore_plpython3u              | 1.0         |
| insert_username                | 1.0         |
| intagg                         | 1.1         |
| intarray                       | 1.2         |
| ip4r                           | 2.4         |
| isn                            | 1.1         |
| lo                             | 1.1         |
| ltree                          | 1.1         |
| ltree_plpython3u               | 1.0         |
| moddatetime                    | 1.0         |
| pageinspect                    | 1.5         |
| pg_buffercache                 | 1.2         |
| pg_freespacemap                | 1.1         |
| pg_prewarm                     | 1.1         |
| pg_stat_statements             | 1.4         |
| pg_trgm                        | 1.3         |
| pg_visibility                  | 1.1         |
| pgcrypto                       | 1.3         |
| pglogical                      | 2.3.0       |
| pglogical_origin               | 1.0.0       |
| pgrouting                      | 3.0.0       |
| pgrowlocks                     | 1.2         |
| pgstattuple                    | 1.4         |
| plpgsql                        | 1.0         |
| plpython3u                     | 1.0         |
| postgis                        | 3.0.1       |
| postgis-3                      | 3.0.1       |
| postgis_raster                 | 3.0.1       |
| postgis_raster-3               | 3.0.1       |
| postgis_sfcgal                 | 3.0.1       |
| postgis_sfcgal-3               | 3.0.1       |
| postgis_tiger_geocoder         | 3.0.1       |
| postgis_tiger_geocoder-3       | 3.0.1       |
| postgis_topology               | 3.0.1       |
| postgis_topology-3             | 3.0.1       |
| postgres_fdw                   | 1.0         |
| refint                         | 1.0         |
| seg                            | 1.1         |
| sslinfo                        | 1.2         |
| tablefunc                      | 1.0         |
| tcn                            | 1.0         |
| timescaledb                    | 1.7.2       |
| timetravel                     | 1.0         |
| tsearch2                       | 1.0         |
| tsm_system_rows                | 1.0         |
| tsm_system_time                | 1.0         |
| unaccent                       | 1.1         |
| uuid-ossp                      | 1.1         |
| wal2json                       | 2.2         |
| xml2                           | 1.1         |
