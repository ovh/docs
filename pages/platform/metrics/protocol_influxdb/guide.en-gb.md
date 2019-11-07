---
title: Use InfluxDB
slug: protocol-influxdb
excerpt: Get an overview on how to use InfluxDB for Metrics
section: Protocol
order: 4
---

**Last updated 07 November, 2019**

> [!warning]
>
> InfluxQL on the Metrics platform is a new release. Any feedback on this implementation will be greatly welcomed, you can reach us on [gitter](https://gitter.im/ovh/metrics).
>

## Objective

[InfluxDB](https://www.influxdata.com/products/influxdb-overview/){.external} is a proprietary time series database that integrates the open source collector [Telegraf](https://github.com/influxdata/telegraf){.external}. In this guide, you will learn how to push and query using the Influx protocol with Metrics.

## Requirements

- a valid OVH Metrics account.

## Instructions

### Compatibility

| API    | Method | Supported                    |
| ------ | ------ | ---------------------------- |
| /write | POST   | <i class="fas fa-check"></i> |
| /query | GET   | <i class="fas fa-check"></i> |

InfluxDB has the notion of databases. This concept doesn't exist within Metrics. If you need segmentation, you can use different Metrics project or isolate with an additional label.

### Data Model

InfluxDB uses it own data model :

```text
 <measurement>[,<tag_key>=<tag_value>[,<tag_key>=<tag_value>]] <field_key>=<field_value>[,<field_key>=<field_value>] [<timestamp>]
```

### How to push data

The full documentation is available at [https://docs.influxdata.com/influxdb/v1.2/guides/writing_data/](https://docs.influxdata.com/influxdb/v1.2/guides/writing_data/){.external}

#### Authentification

To push data to the platform, you will need a **WRITE TOKEN**. Use Basic Auth directly inside the URL to pass it properly, like this :

<pre>https://metrics:[WRITE_TOKEN]@influxdb.[region].metrics.ovh.net</pre>

#### Pushing datapoints using cURL

```shell-session
 $ curl -i -XPOST \
     'https://DESC:TOKEN_WRITE@influxdb.gra1.metrics.ovh.net/write' \
     --data-binary \
     'cpu_load_short,host=server01,region=us-west value=0.64 1434055562000000000'
```

## How to query data

InfluxDB has its own Query DSL, that mimics SQL without being plain ANSI SQL.

```text
 SELECT <field_key>[,<field_key>,<tag_key>] FROM <measurement_name>[,<measurement_name>]
```

### Authentification

To query data to the platform, you will need a READ TOKEN. Use Basic Auth directly inside the URL to pass it properly, like this :

https://metrics:[READ_TOKEN]@influxdb.[region].metrics.ovh.net

### Data Exploration

The [InfluxQL data exploration statements](https://docs.influxdata.com/influxdb/v1.7/query_language/data_exploration/){.external} requests supported on the metrics platform are:


| Statement        | Supported                    |
| ---------------- | ---------------------------- |
| SELECT           | <i class="fas fa-check"></i> |
| WHERE            | <i class="fas fa-check"></i> |
| GROUP BY         | <i class="fas fa-check"></i> |
| INTO             | <i class="fas fa-times"></i> |

We support also all possibility to configure a query result using: `ORDER BY time DESC`, `LIMIT`, `OFFSET` or `TIME` clauses.

You can also use all `InfluxQL tips on the query syntax`of the [InfluxQL data exploration page](https://docs.influxdata.com/influxdb/v1.7/query_language/data_exploration/){.external} on the Metrics Platform.

#### Mathematical operators

The following existing [arithmetic operators](https://docs.influxdata.com/influxdb/v1.7/query_language/math_operators/){.external} in InfluxQL can be used on the Metrics platform:

| Operator | Name | Supported |
|----------|------|-----------|
| + | Addition | <i class="fas fa-check"></i> |
| - | Subtraction | <i class="fas fa-check"></i> |
| * | Multiplication | <i class="fas fa-check"></i> |
| / | Division | <i class="fas fa-check"></i> |
| % | Modulo | <i class="fas fa-check"></i> |
| & | Bitwise AND | <i class="fas fa-check"></i> |
| \| | Bitwise OR | <i class="fas fa-check"></i> |
| ^ | Bitwise Exclusive-OR | <i class="fas fa-check"></i> |

The **Modulo** (%) operator is **not yet supported** accross several metrics. It can still be applied between metrics and values.

All the **bitwise** operation: **Bitwise AND** (&), **Bitwise OR** (|) and **Bitwise Exclusive-OR** (^) are only working on numbers (float numbers will be automaticallly cast to integers).

#### InfluxQL functions

The valid [influxQL functions](https://docs.influxdata.com/influxdb/v1.7/query_language/functions/) on the Metrics platform are (all parameter with a `?` are optionals):

| Function | Params | Supported |
|----------|------|-----------|
| COUNT | metrics | <i class="fas fa-check"></i> |
| DISTINCT | metrics | <i class="fas fa-check"></i> |
| INTEGRAL | metrics, (duration)?  | <i class="fas fa-check"></i> |
| MEAN | metrics | <i class="fas fa-check"></i> |
| MEDIAN | metrics | <i class="fas fa-check"></i> |
| MODE | metrics | <i class="fas fa-check"></i> |
| SPREAD | metrics | <i class="fas fa-check"></i> |
| STDDEV | metrics | <i class="fas fa-check"></i> |
| SUM | metrics | <i class="fas fa-check"></i> |
| BOTTOM | metrics, number | <i class="fas fa-check"></i> |
| FIRST | metrics | <i class="fas fa-check"></i> |
| LAST | metrics | <i class="fas fa-check"></i> |
| MAX | metrics | <i class="fas fa-check"></i> |
| MIN | metrics | <i class="fas fa-check"></i> |
| PERCENTILE | metrics, number | <i class="fas fa-check"></i> |
| SAMPLE | metrics, number | <i class="fas fa-check"></i> |
| TOP | metrics, number | <i class="fas fa-check"></i> |
| ABS | metrics | <i class="fas fa-check"></i> |
| ACOS | metrics | <i class="fas fa-check"></i> |
| ATAN | metrics | <i class="fas fa-check"></i> |
| ATAN2 | metrics, metrics | <i class="fas fa-check"></i> |
| CEIL | metrics | <i class="fas fa-check"></i> |
| COS | metrics | <i class="fas fa-check"></i> |
| CUMULATIVE_SUM | metrics | <i class="fas fa-check"></i> |
| DERIVATIVE | metrics, (duration)? | <i class="fas fa-check"></i> |
| DIFFERENCE | metrics | <i class="fas fa-check"></i> |
| ELAPSED | metrics, (duration)? | <i class="fas fa-check"></i> |
| EXP | metrics | <i class="fas fa-check"></i> |
| FLOOR | metrics | <i class="fas fa-check"></i> |
| HISTOGRAM | metrics | <i class="fas fa-check"></i> |
| LN | metrics, base | <i class="fas fa-check"></i> |
| LOG | metrics | <i class="fas fa-check"></i> |
| LOG2 | metrics | <i class="fas fa-check"></i> |
| LOG10 | metrics | <i class="fas fa-check"></i> |
| MOVING_AVERAGE | metrics, number | <i class="fas fa-check"></i> |
| NON_NEGATIVE_DERIVATIVE | metrics | <i class="fas fa-check"></i> |
| NON_NEGATIVE_DIFFERENCE | metrics | <i class="fas fa-check"></i> |
| POW | metrics, number | <i class="fas fa-check"></i> |
| ROUND | metrics | <i class="fas fa-check"></i> |
| SIN | metrics | <i class="fas fa-check"></i> |
| SQRT | metrics | <i class="fas fa-check"></i> |
| HOLT_WINTERS | metrics, duration, offset | <i class="fas fa-times"></i> |
| CHANDE_MOMENTUM_OSCILLATOR | metrics, period, (hold_period)?, (warmup_type)? | <i class="fas fa-times"></i> |
| EXPONENTIAL_MOVING_AVERAGE | metrics, period, (hold_period)?, (warmup_type)?  | <i class="fas fa-times"></i> |
| DOUBLE_EXPONENTIAL_MOVING_AVERAGE | metrics, period, (hold_period)?, (warmup_type)?  | <i class="fas fa-times"></i> |
| KAUFMANS_EFFICIENCY_RATIO | metrics, period, (hold_period)? | <i class="fas fa-times"></i> |
| KAUFMANS_ADAPTIVE_MOVING_AVERAGE | metrics, period, (hold_period)? | <i class="fas fa-times"></i> |
| TRIPLE_EXPONENTIAL_MOVING_AVERAGE | metrics, period, (hold_period)?, (warmup_type)? | <i class="fas fa-times"></i> |
| TRIPLE_EXPONENTIAL_DERIVATIVE | metrics, period, (hold_period)?, (warmup_type)? | <i class="fas fa-times"></i> |
| RELATIVE_STRENGTH_INDEX | metrics, period, (hold_period)?, (warmup_type)? | <i class="fas fa-times"></i> |

#### Data types and cast operations

The existing [data types and cast operations](https://docs.influxdata.com/influxdb/v1.7/query_language/data_exploration/#data-types-and-cast-operations){.external} of InfluxQL matches the one supported by the Metrics platform:

| Operator | Cast | Supported |
|----------|------|-----------|
| :: | integer | <i class="fas fa-check"></i> |
| :: | float | <i class="fas fa-check"></i> |
| :: | string | <i class="fas fa-check"></i> |

#### Regular expressions

You can apply Regular expression on the Metrics Platform, however we **don't** support the native InfluxQL regular expression but [Warp 10™ native supported one](https://www.warp10.io/){.external}.

#### GROUPBY clause

The existing [GROUPBY clause](https://docs.influxdata.com/influxdb/v1.7/query_language/data_exploration/#the-group-by-clause){.external} of InfluxQL is supported as if on the Metrics platform (by time or by tag fields).

The `null` parameter for filling will not provide any `null` values on the Metrics platform as NULL ticks correspond to empty values in Warp 10™ .

#### WHERE clause

The existing [WHERE clause](https://docs.influxdata.com/influxdb/v1.7/query_language/data_exploration/#the-where-clause){.external} of InfluxQL is supported as if on the Metrics platform.

### Schema exploration statements

The existing [SHOW statements](https://docs.influxdata.com/influxdb/v1.7/query_language/schema_exploration/){.external} of InfluxQL supported by the Metrics platform are:

| Statement        | Supported                    |
| ---------------- | ---------------------------- |
| SHOW DATABASES          | <i class="fas fa-check"></i> |
| SHOW MEASUREMENTS       | <i class="fas fa-check"></i> |
| SHOW FIELD KEYS         | <i class="fas fa-check"></i> |
| SHOW RETENTION POLICIES | <i class="fas fa-check"></i> |
| SHOW TAG KEYS           | <i class="fas fa-check"></i> |
| SHOW SERIES             | <i class="fas fa-check"></i> |
| SHOW TAG VALUES         | <i class="fas fa-check"></i> |

As in Metrics, the concept of DataBases doesn't exists, the `SHOW DATABASES` statement will always return only one database: `metrics`. 

### Database management statements

The existing [database management statements](https://docs.influxdata.com/influxdb/v1.7/query_language/database_management/){.external} of InfluxQL supported by the Metrics platform are:

| Statement        | Supported                    |
| ---------------- | ---------------------------- |
| CREATE DATABASE | <i class="fas fa-check"></i> |
| DROP DATABASE | <i class="fas fa-times"></i> |
| DROP SERIES  | <i class="fas fa-times"></i> |
| DELETE | <i class="fas fa-times"></i> |
| DROP MEASUREMENT | <i class="fas fa-times"></i> |
| DROP SHARD | <i class="fas fa-times"></i> |
| CREATE RETENTION POLICY | <i class="fas fa-times"></i> |
| ALTER RETENTION POLICY | <i class="fas fa-times"></i> |
| DROP RETENTION POLICY | <i class="fas fa-times"></i> |

As the `CREATE DATABASE` statement is used in some client, this statement was implemented in Metrics and always return. However no databases exists in Metrics.

### Database continuous queries

The InfluxQL [continuous queries](https://docs.influxdata.com/influxdb/v1.7/query_language/continuous_queries/){.external} **can not** be performed **yet** on the Metrics platform.

### Query parameters

Natively an InfluxQL requests expects two parameter `q` and `db`. As in metrics application the database notion doesn't exist the `db` parameter is optional.
You can optionnaly add a `precision` with value **rfc3339** as parameter to change the time representation output (by default a timestamp to a Human readable UTC date).  

### Use InfluxQL to query data from sources that were not pushed on the Influx format

On Metrics, you can push data with several different format: for example the Prometheus. As by default when a user push `native` influxQL data, we add a "." as separator between the  `measurement` and its `field keys` in our internal representation. As for example, with Prometheus you can't have any "." in the data format. We added a new clause in where statements: the `_separator` to be able to query data from all kind of sources in InfluxQL.

The `_separator` allow the user to choose a custom selector which will splits its influx `measurement` from its `field keys`. This allow the user to use the promQL "_" as separator to split Prometheus metrics classnames.

Example:

```influxQL
SELECT mean("field") FROM "prometheus_data" WHERE  time >= now() - 6h AND _separator = "_" GROUP BY time(1h) fill(null)
```

This allow also the user to query InfluxData or any other kind of data with InfluxQL and to get the `raw` data representation.

Example:

```influxQL
SELECT mean("disk.used_percent") FROM "" WHERE  time >= now() - 6h AND _separator = "" GROUP BY time(1h) fill(null)
```

### Query using cURL

A quick example to use InfluxQL on Metrics with cURL would be:

```sh
curl --request GET \
  --url 'https://m:READ_TOKEN@influxdb.gra1.metrics.ovh.net/query?q=SELECT%20%22used_percent%22%20FROM%20%22disk%22%20WHERE%20%20time%20%3E%3D%20now()%20-%2020m&=%20'
```

This will execute the following InfluxQL query:

```InfluxQL
SELECT "used_percent" FROM "disk" WHERE  time >= now() - 20m
```

For the one used to query Influx, you will notify that the `db` mandatory parameter of Influx isn't set in this query. With Metrics the database field is optionnal, as Metris doesn't rely on Data-bases to store its metrics. If you need segmentation, you can use different Metrics project or isolate with an additional label.

### Set up InfluxDB on Grafana

Then select `basic auth` and fill the **user** with a non empty value, `metrics` for example.
The basic auth password need to be valid Metrics `READ_TOKEN`.
Please ensure that you have set the `metrics` key in the database field as describe in the screen below.

![menu](images/grafana-datasource-influx.png){.thumbnail}

Your Influx datasource is now set and ready to be query.

## Go further

- Documentation: [Guides](../product.fr-fr.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
