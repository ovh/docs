---
title: Use TSL
slug: protocol-tsl
excerpt: TSL overview
section: Protocol
order: 2
---

**Last updated 23th August, 2019**

## Objective

Our mission is to provide you a great experience and we thought current languages was either too limited or too complicated to reach this goal. That's why we wanted to propose a take : Time Series Language (or TSL). It's build to be easier to read, back-end agnostic and most of all oriented to simplify servers and applications monitoring. We will describe here its syntax and how to query data with it.

## Requirements

- a valid OVH Metrics account.

## Instructions

First things first, let's decode a TSL query.

```sql
select("sys.cpu.nice").where("host=web01").from(1346846400000,to=1346847000005)
```

This is a first TSL query, each keywords have its own meaning: 

* **select** is used to specify a metric name to retrieve (or pattern name).
* **where** is used to set labels that the current Time-series must have.
* **from** is used to select data between two dates.

Now that you see how simple it's to query time-series data, let's see how it works with a real example.

### Push Data in metrics

If you do not have your own data we will reuse the example previously explained in our [getting started guide](../metrics_opentsdb/guide.en-gb.md) and push multiple datapoints into a single OpenTSDB query. As a reminder create a file called `opentsdb.json` and write this content to it:

```json
[
    {
        "metric": "sys.cpu.nice",
        "timestamp": 1346846400000,
        "value": 18,
        "tags": {
           "host": "web01",
           "dc": "lga"
        }
    },
    {
        "metric": "sys.cpu.nice",
        "timestamp": 1346846800000,
        "value": 19,
        "tags": {
           "host": "web01",
           "dc": "lga"
        }
    },
    {
        "metric": "sys.cpu.nice",
        "timestamp": 1346847000000,
        "value": 20,
        "tags": {
           "host": "web01",
           "dc": "lga"
        }
    },
    {
        "metric": "sys.cpu.nice",
        "timestamp": 1346847000005,
        "value": 19,
        "tags": {
           "host": "web01",
           "dc": "lga"
        }
    },
    {
        "metric": "sys.cpu.nice",
        "timestamp": 1346846400000,
        "value": 9,
        "tags": {
           "host": "web02",
           "dc": "lga"
        }
    },
    {
        "metric": "sys.cpu.nice",
        "timestamp": 1346846800000,
        "value": 8,
        "tags": {
           "host": "web02",
           "dc": "lga"
        }
    },
    {
        "metric": "sys.cpu.nice",
        "timestamp": 1346847000000,
        "value": 7,
        "tags": {
           "host": "web02",
           "dc": "lga"
        }
    },
    {
        "metric": "sys.cpu.nice",
        "timestamp": 1346847000005,
        "value": 10,
        "tags": {
           "host": "web02",
           "dc": "lga"
        }
    }
]
```

Using the `curl` command below, replace __REGION__ per your own one : __gra1__  or __bhs1__. As the user doesn't matter on the metrics backend, all the information are stored in our cryptographical token, you can replace or let test as if.

```sh
curl -v -X POST -d @opentsdb.json \
    'https://test:WRITE_TOKEN@opentsdb.REGION.metrics.ovh.net/api/put'
```

If everyting happens correctly, the cURL would exit with a 200 code status and the data are available using your metrics account.

### Execute your first TSL request

Now that we pre-load some data points, let's execute the following query:

```
select("sys.cpu.nice").where("host=web01").from(1346846400000,to=1346847000005)
```

We can send this request through an HTTP Post with the cURL Command line or any other HTTP tools like [Insomnia](https://insomnia.rest/){.external} or [PostMan](https://www.getpostman.com/){.external}.

Using a cURL command, we can write a new TSL file containing the previous select

```shell-session
$ curl -v --data-binary @select.TSL 'https://DESC:READ_TOKEN@TSL.gra1-ovh.metrics.ovh.net/v0/query'
```

You should get the result as a time-series JSON list.

## TSL main operators

To retrieve data, TSL have a **select** method to choose the metrics name to retrieve, a **where** clauses to select specific labels and a **from** or **last** method to select the temporal period to get.

Once the data are available, with TSL you can apply a lot of functions: from **sampling**, to **grouping**, to **metrics operation** or to **operation between metrics**.

As with TSL the goal is to simplify metrics queries, inside a query a user can store **variables** that will re-used, we will see how to use it. TSL offers the possibilities to fetch data from different backend and to dynamically execute queries on them from a same script using the **connect** method. Besides we will see how to update metrics meta-data (name and labels) and storing the request result in the specified backend 

### Select

The first instructions used to select data is the method **select**.

Select contains only **one** parameter : 
 
* The series name as a string. It can also be asterisk to retrieve all series of the current application.

Example:

```sql
-- Will load the last points of all sys.cpu.nice
select("sys.cpu.nice") 

-- Will load the last points of all series of this application (only on a Warp 10 backend)
select(*)
```

TSL supports native backend. At current time, for **Prometheus** you need to specify the exact classname of the metrics to load. When for **Warp 10**, you can use native regexp. _As example "~sys.*" is a working Warp 10 REGEXP to select all series starting with sys._

### Where 

The **where** method allow the user to filter the metrics to load matching labels clauses.

Where can contains **one** to **n** parameter(s):

* The labels selector string formed as "key=label". 

With the "key=label" string, we use an equals label matcher. The TSL valid matcher are **=**, **~**, **!=** and **!~**. The first one encounters in the string will be used.

Example: 

```sql
-- Will load the last points of sys.cpu.nice series where 'dc' equals 'lga' 
select("sys.cpu.nice").where("dc=lga")

-- Will load the last points of sys.cpu.nice series where 'dc' equals 'lga' and have labels 'web'
select("sys.cpu.nice").where("dc=lga", "web~.*")
```

You can chain as many where clauses as wanted in a TSL query, example: select(...).where(...).where(...) as long as you are defining the data to retrieve.

### From or Last

The last methods to define the data to retrieve are **last** and **from**. They are used to set the time limits to retrieve the data.

The **from** method is used to select physical time limits. 

From can contains **one** or **two** parameters:

* from: retrieve data **from** this date, can be valid timestamp or date string of the backend
* to: retrieve data **until** this date, can be valid timestamp or date string of the backend

A valid timestamp for **Warp 10** is a long in time unit (on our Metrics platform it's in micro-seconds: 1346846400000 is valid), when a valid timestamp for **Prometheus** may be provided as a Unix timestamp in seconds, with optional decimal places for sub-second precision (on our Metrics platform, you can have timestamp in ms: 1524376786.878 is valid).

A valid date string for **Warp 10** are [ISO 8601 dates string](https://en.wikipedia.org/wiki/ISO_8601) and for **Prometheus** are date in [RFC3339 format](https://www.ietf.org/rfc/rfc3339.txt):  "2018-04-22T00:57:00-05:00" is valid for both backends. 

By default, if only one parameter is set, it considers that it corresponds to the **from** parameter and will load all data from the current date. Be careful as it can retrieve a lot of data.

When using the from method, you can prefix the parameter with **from** or **to** prefix.

Example: 

```sql
-- Will load all values set after timestamp 0 of sys.cpu.nice series.
select("sys.cpu.nice")
  .from(0)

-- Will load all values between two timestamps of sys.cpu.nice series.
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)

-- Will load all values between two timestamps of sys.cpu.nice series.
select("sys.cpu.nice")
  .from(from=1346846400000000, to=1346847000006000)

-- Will load all values between two timestamps of sys.cpu.nice series.
select("sys.cpu.nice")
  .from(to=1346847000006000, from=1346846400000000)

-- Will load all values between two dates of sys.cpu.nice series.
select("sys.cpu.nice")
  .from("2018-04-22T00:57:00-05:00",to="2018-04-22T01:00:00-05:00")

-- From a Prometheus backend
select("sys.cpu.nice")
  .from(to=1346847000.005, from=1346846400.000)
```

To resume **from** valid parameters are listed below. A parameter can be optional or mandatory. When a prefix is indicated, it means that this parameter can be set using a prefix name.

| name | type | mandatory | prefix | Complementary information |
|------|------|-----------|--------|---------------------------|
| from | Integer,String | <i class="fas fa-check"></i> | from | Only on Warp 10, [ISO 8601 dates string](https://en.wikipedia.org/wiki/ISO_8601) |
| from | Integer, Double, String |<i class="fas fa-check"></i>| from | Only on Prometheus, [RFC3339 format](https://www.ietf.org/rfc/rfc3339.txt) |
| to | Integer,String | <i class="fas fa-times"></i> | to | Only on Warp 10, [ISO 8601 dates string](https://en.wikipedia.org/wiki/ISO_8601) |
| to | Integer, Double, String |<i class="fas fa-times"></i> | to | Only on Prometheus, [RFC3339 format](https://www.ietf.org/rfc/rfc3339.txt) |

The **last** method is used to select the last recorded datapoints after a valid date.

Last can contains **one** or **three** parameters:

* The first parameter must be a time duration (Prometheus and Warp 10) or a fix number (Warp10). A time duration will fetch all the data points in the time window before the current date or specified timestamp. On a Warp 10 backend, a number to retrieve as many points as specified before the current date or the specified Timestamp. 
* And optionnaly the second or third parameter can be a timestamp or a string date to load data before.
* And optionnaly the second or third parameter can be an other time duration corresponding to a shift duration (loading one hour specified tick).

Example: 

```sql
-- Will load last point before the current date of sys.cpu.nice series.
select("sys.cpu.nice")
  .last(1)

-- Will load last minute before the current date of sys.cpu.nice series.
select("sys.cpu.nice")
  .last(1m)

-- Will load 10 points before 1528240512000000 of sys.cpu.nice series.
select("sys.cpu.nice")
  .last(10, timestamp=1528240512000000)

-- Will load last minute before "2018-04-22T01:00:00-05:00" of sys.cpu.nice series.
select("sys.cpu.nice")
  .last(2m, date="2018-04-22T01:00:00-05:00")

-- Will load last minute one hour before NOW of sys.cpu.nice series.
select("sys.cpu.nice")
  .last(2m, shift=1h)
```

To resume **last** valid parameters are listed below. A parameter can be optional or mandatory. When a prefix is indicated, it means that this parameter can be set using a prefix name.

| name | type | mandatory | prefix | Complementary information |
|------|------|-----------|--------|---------------------------|
| span | Duration value | <i class="fas fa-check"></i> | None | first parameter |
| count | Integer | <i class="fas fa-check"></i> | None | Only on Warp 10, first parameter |
| date | String| <i class="fas fa-times"></i> | date | On Prometheus, [RFC3339 format](https://www.ietf.org/rfc/rfc3339.txt) and on Warp 10, [ISO 8601 dates string](https://en.wikipedia.org/wiki/ISO_8601) |
| timestamp | Integer | <i class="fas fa-times"></i> | timestamp | Only on Warp 10 |
| timestamp | Integer, Double | <i class="fas fa-times"></i> | timestamp | Only on Prometheus |
| shift | Duration value |<i class="fas fa-times"></i> | shift | |

### Sampling

When collecting servers or application metrics, the data stored are often unsynchronised. To start processing our stored metrics, it's often mandatory to sample the data. Sampling the data corresponds to split metrics data points per time window. All values in this time window are send as parameter to a function that will provide one value as result.

This can be done using the TSL **sampleBy** method.

The **sampleBy** method expects as first parameter (mandatory):

* **span**: that correponds to the time window duration (duration format: 1m, 2M, 10s) 
* or **count**: that correponds to a number of splits of the series as number (1, 2, ...).

The **sampleBy** method expects as second parameter (mandatory):

* An **aggregator** function to use: can be one of **max, mean, min, first, last, sum, join, median, count, and** or **or**. TSL expects the aggregator to be set as an ident field.

The **sampleBy** method takes also two optionals parameters: 

* A boolean to indicate whether we should keep a relative sampling (true) or use an absolute one (default, and params at false): absolute sampling means that data would be round up (ex: with a 5 minutes span series at time 12:03 it would be 12:05, 12:00, 11:55, when with a relative sampling times would be at 12:03, 11:58, 11:53).
* A sampling policy can be **auto, none, interpolate, next** or **previous**. TSL expects the policy to be set as string (example "auto") or a list of strings, containing the policiy to apply in order. This list is restrained to values equals to **interpolate, next or previous**. Using **interpolate** policy will compute the interpolation of the intermediary values, **next** will fill missing values with the next values it found, and **previous** will fill missing values by the previous value of the series found. The **none** one will let empty missing values. When **auto** means that an interpolation is applied first to field intermediary missing values, previous to fill missing values before the first data-point and next to fill missing values after the last data-point. When no policy it's set it used **auto** by default.

The duration format is a number followed by one of **w** for week(s), **d** for day(s), **h** for hour(s), **m** for minute(s), **s** for second(s), **ms** for milli-second(s), **us** for micro-second(s), **ns** for nano-second(s) and **ps** for pico-second(s)

With a Prometheus back-end, we use the step query parameter to sample the data. It's handled a bit differently as by default Prometheus will sample by the last value recorded (until last 5 minutes). 

When using sampleBy in TSL on **Prometheus** you can only set a **span** and an **aggregator** equals to **last** as parameters.

Example:

```sql
-- Will load all values between of sys.cpu.nice series with 1 minute samples (one point per minute), aggegrated using a mean function. 
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(1m, mean)


-- Will load all values between of sys.cpu.nice series with 1 minute samples (one point per minute), aggegrated using a max function. 
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(30, max)

-- Will load all values between of sys.cpu.nice series with 1 minute samples aggegrated using a mean function. One point per minute when at least one point exists in each minute.
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(1m, mean, "none")

-- Will load all values between of sys.cpu.nice series with 1 minute samples aggegrated using a mean function, filling intermediary missing point by a values interpolation and not using a relative sampling.
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(1m, mean, "interpolate", false)

-- Valid parameters prefixes
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(span=1m, aggregator=mean, fill="interpolate", relative=false)

-- Using a list as fill policy
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(span=1m, aggregator="mean", fill=["interpolate", "next", "previous"], relative=false)
```

To resume **sampleBy** valid parameters are listed below. A parameter can be optional or mandatory. When a prefix is indicated, it means that this parameter can be set using a prefix name.

| name | type | mandatory | prefix | Complementary information |
|------|------|-----------|--------|---------------------------|
| span | Duration value | <i class="fas fa-check"></i> | span | |
| count | Number | <i class="fas fa-check"></i> | count | |
| aggregator | Operator | <i class="fas fa-check"></i> | aggregator | Operator value can be one of: **max, mean, min, first, last, sum, join, median, count, and, or** |
| fill | String | <i class="fas fa-times"></i> | fill | Fill value can be one of **auto, none, interpolate, next, previous** |
| fill | List of string | <i class="fas fa-times"></i> | fill | Each values of the list can be one of **interpolate, next, previous** |
| relative | Boolean | <i class="fas fa-times"></i> | relative | |

### Group and GroupBy

When building a metrics data flow, once we sampled the data, we may want to regroup similar metrics. This is what the **group** and **groupBy** methods are build to. The user defines the aggregation function and custom rules to applied to reduce to a single value all metrics values occuring at the same time. 

The **group** method will generate a single series using the specified aggregator.

The group method takes one parameter:

* The aggregator function to use: can be one of **max, mean, min, sum, join, median, count, and** or **or**. TSL expects the policy to be set as an ident field.

```sql
-- Valid parameters prefix
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(1m, "mean")
  .group(sum)
```

The **groupBy** method allow to specify labels to limit the aggegator on series that have the same values for each labels key specified. For example, when using our example, if we specify **dc** and **host**, it will reduce the data into two series: both with "dc=lga" and one with **host** equals to "web01" and the second with "web02". 

The groupBy method takes two to n parameters:

* A labels key as string to group the data on. To select more than one label string you can use a label string list as parameter
* The aggregator function to use: can be one of **max, mean, min, sum, join, median, count, and** or **or**. TSL expects the policy to be set as an ident field.

Example:

```sql
-- Valid parameters prefix
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(1m, "mean")
  .groupBy("dc", mean)

-- Valid parameters prefix
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(1m, "mean")
  .groupBy(["host","dc"],mean)
```

To resume **groupBy** valid parameters are listed below. A parameter can be optional or mandatory. When a prefix is indicated, it means that this parameter can be set using a prefix name.

| name | type | mandatory | prefix | Complementary information |
|------|------|-----------|--------|---------------------------|
| label | String | <i class="fas fa-check"></i> | None | a label key as first parameter |
| labels | List of string | <i class="fas fa-check"></i> | None | a label key list as first parameter |
| aggregator | Operator | <i class="fas fa-check"></i> | None | Operator value can be one of: **max, mean, min, sum, join, median, count, and** or **or** as second parameter |

### Metrics values operators

Sometimes, we just want to update our series values (adding 2, checking the values with a threshold, rounded the value, compute a rate, and so on). In TSL, we have a large variety of Time series operator available than can be applied directly on a series result. 

This can be done using the TSL **window** method.

The **window** method expects

* At least a **window function** to use: can be one of **max, mean, min, first, last, sum, delta, stddev, stdvar, join, median, count, and** or **or**. TSL expects the window function to be set as an ident field.
* A single duration time window to compute the **over_time** method on for **Prometheus** or **Warp10**.
* **Warp10** MAP frame supports two parameters as TSL window function a [pre and/or post](http://www.warp10.io/reference/frameworks/framework-map/){.external} parameter. The **pre** and **post** parameters can be a number of points to compute the window on, or a duration if the series was sampled before.

As Warp 10 is more flexible, you can either specify a duration or a number of points to apply on with the [pre and/or post](http://www.warp10.io/reference/frameworks/framework-map/){.external} parameter.

Example:

```sql
-- With only a duration (Prometheus or Warp10)
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(1m, "last")
  .window(mean, 1m)

-- With pre and post as durations (Warp10)
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .sampleBy(1m, "last")
  .window(sum, 2m, 1m)


-- With pre and post as integer (Warp10)
select("sys.cpu.nice")
  .from(1346846400000000,1346847000006000)
  .window(sum, 2, 10)
```

#### Arithmetic operators

The following TSL methods can be used to apply arithmetic operators on metrics:

* The **add** operator. Add takes **one number parameter**, example: _.add(2)_
* The **sub** operator. Sub takes **one number parameter**, example: _.sub(2)_
* The **mul** operator. Mul takes **one number parameter**, example: _.mul(2)_
* The **div** operator. Div takes **one number parameter**, example: _.div(2)_
* The **abs** operator. Compute the **absolute value** of all values of the series, example: _.abs()_
* The **ceil** operator. **Round** all values of the series at the nearest integer **above**, example: _.ceil()_
* The **floor** operator. **Round** all values of the series at the nearest integer **below**, example: _.floor()_
* The **round** operator. **Round** all values of the series at the nearest integer, example: _.round()_
* The **ln** operator. Compute values **ln**, example: _.ln()_
* The **log2** operator. Compute values **log2**, example: _.log2()_
* The **log10** operator. Compute values **log10**, example: _.log10()_
* The **logN** operator. Compute values logN of the **number parameter**, example: _.logN(2)_
* The **rate** operator. Compute a **rate** (by default per second whe no parameter sets) on a specify duration **
* The **sqrt** operator. Compute values **square root**, example: _.sqrt()_
* The **cumulativeSum** operator used to compute the **cumulative sum** of the metrics, example: _.cumulativeSum()._

The **logN** and **cumulativeSum** operators are not available on **Prometheus**.

#### Equality operators

The following TSL methods can be used to apply equality operators on metrics:

* The **equal** operator. Only values that are stricly equals to **equal parameter** are kept, example: _.equal(2)_
* The **notEqual** operator. Only values that are not equals to **notEqual parameter** are kept, example: _.notEqual(2)_
* The **greaterThan** operator. Only values that are stricly above to **greaterThan number parameter** are kept, example: _.greaterThan(2)_
* The **greaterOrEqual** operator. Only values that are above or equals to **greaterOrEqual number parameter** are kept, example: _.greaterOrEqual(2)_
* The **lessThan** operator. Only values that are stricly below to **lessThan number parameter** are kept, example: _.lessThan(2)_
* The **lessOrEqual** operator. Only values that are below or equals to **lessOrEqual number parameter** are kept, example: _.lessOrEqual(2)_

#### Limit operators

The following TSL methods can be used to apply limit operators on metrics:

* The **maxWith** operator. MaxWith will test all values to keep only the one **above maxWith parameter** and **replace** all other values per maxWith parameter, example: *.maxWith(2)*
* The **minWith** operator. MinWith will test all values to keep only the one **below minWith parameter** and **replace** all other values per minWith parameter, example: *.minWith(2)*

#### Metrics time operators

The following TSL methods can be used to apply time related operators on metrics:

* The **shift** operator used to **shift** all points by a **duration parameter**, example: _.shift(2m)._
* The **day** operator used to replace each points per the **day of the month** of each points (in UTC time), example: _.day()._
* The **weekday** operator used to replace each points per **the day of the week** of each points (in UTC time), example: _.weekday()._
* The **hour** operator used to replace each points per their **hours** (in UTC time), example: _.hour()._
* The **minute** operator used to replace each points per their **minutes** (in UTC time), example: _.minute()._
* The **month** operator used to replace each points per their **month** (in UTC time), example: _.month()._
* The **year** operator used to replace each points per their **year** (in UTC time), example: _.year()._
* The **timestamp** operator used to replace each points per their **timestamp** (in UTC time), example: _.timestamp()._

#### Time window methods

TSL includ a method to apply an operation on a selected time window. This represents [**time window mapper**](http://www.warp10.io/reference/frameworks/framework-map/){.external} in Warp 10 and [**over_time**](https://prometheus.io/docs/prometheus/latest/querying/functions/#%3Caggregation%3E_over_time()){.external} operators in PromQL.
This methods apply a function to all values of a time window of each metrics and replace the current value by the result of this function. 

The method applied can be one of

### Metrics sort 

TSL introduces some methods to sort metrics by their samples values.

* The **sort** operator used to sort metrics data by their globals **mean** value in **ascending** order. Use example: _.sort()._
* The **sortDesc** operator used to sort metrics data by their globals **mean** value in **descending** order. Use example: _.sortDesc()._
* The **sortBy** operator used to sort metrics data according to the result of a **global operator** in **ascending** order. The operator function can be one of: **last, first, max, mean, min, sum, join, median, count, and** or **or**. Use example: _.sortBy(max)._
* The **sortDescBy** operator used to sort metrics data according to the result of a **global operator** in **descending** order. The operator function can be one of: **last, first, max, mean, min, sum, join, median, count, and** or **or**. Use example: _.sortDescBy(max).
* The **topN** operator used to get the top N series (sorted by their globals **mean** value in **descending** order) Use example: _.topN(2)._
* The **bottomN** operator used to get the lowest N series (sorted by their globals **mean** value in **ascending** order). Use example: _.bottomN(2)._
* The **topNBy** operator used to get the top N series (sorted according to the result of a **global operator** in **descending** order. The operator function can be one of: **last, first, max, mean, min, sum, join, median, count, and** or **or**). Use example: _.topNBy(2, min)._
* The **bottomNBy** operator used to get the lowest N series (sorted according to the result of a **global operator** in **ascending** order. The operator function can be one of: **last, first, max, mean, min, sum, join, median, count, and** or **or**). Use example: _.topNBy(2, max)._

The **sortBy**, **sortDescBy**, **topNBy** and **bottomNBy** operators are not available for **Prometheus**.

### Metrics operators on metrics sets

When we load several set of data, we may want to apply operation on metrics sets. TSL allow us to apply operators on metrics. 

#### Metrics operators

A metrics operators will apply an operation on several set of metrics. 

_For example: we can add the values of a first series with a second one. Value will be added when ticks have an exact match, this is why it's important to sample the data before executing such an operation._

* The **add** operator between metrics sets, example: _add(select(...), select(...), ...)_
* The **sub** operator between two metrics sets, example: _sub(select(...), select(...))_
* The **mul** operator between metrics sets, example: _mul(select(...), select(...), ...)_
* The **div** operator between two metrics sets, example: _div(select(...), select(...))_
* The **and** operator between metrics sets, example: _and(select(...), select(...), ...)_
* The **or** operator between metrics sets, example: _or(select(...), select(...), ...)_
* The **equal** operator between metrics sets, example: _equal(select(...), select(...), ...)_
* The **notEqual** operator between metrics sets, example: _notEqual(select(...), select(...), ...)_
* The **greaterThan** operator between metrics sets, example: _greaterThan(select(...), select(...), ...)_
* The **greaterOrEqual** operator between metrics sets, example: _greaterOrEqual(select(...), select(...), ...)_
* The **lessThan** operator between metrics sets, example: _lessThan(select(...), select(...), ...)_
* The **lessOrEqual** operator between metrics sets, example: _lessOrEqual(select(...), select(...), ...)_

Example:

```sql
-- Valid parameters prefix
add(
  select("sys.cpu.nice")
    .from(1346846400000000,1346847000006000)
    .where("host=web01")
    .sampleBy(1m, "mean"),
  select("sys.cpu.nice")
    .from(1346846400000000,1346847000006000)
    .where("host=web02")
    .sampleBy(1m, "mean")
)
```

By default, on **Warp 10** only one metrics will be computed as result except if we use the **on** and/or **ignoring**  method explained below.
By default, on **Prometheus** the minimal equivalence class matching a maximum of labels will be computed as result except if we use the **on** and/or **ignoring**  method explained below.

#### On method

To limit operation on specific labels, the method **on** can be-used post a metrics operator one.

For example the following TSL query will return two series one where all values of the _"web01"_ host series are summed and a second one for the _"web02"_ host series.

```sql
-- Add on label "host"
add(
  select("sys.cpu.nice")
    .from(1346846400000000,1346847000006000)
    .sampleBy(1m, "mean"),
  select("sys.cpu.nice")
    .from(1346846400000000,1346847000006000)
    .sampleBy(1m, "mean")
).on("host")
```

#### Ignoring method

The **Ignoring** method will remove the selected labels of the equivalence class for the operator method.

Example:

```sql
-- Compute an add on all series
add(
  select("sys.cpu.nice")
    .from(1346846400000000,1346847000006000)
    .where("host=web01")
    .sampleBy(1m, "mean"),
  select("sys.cpu.nice")
    .from(1346846400000000,1346847000006000)
    .where("host=web02")
    .sampleBy(1m, "mean")
).ignoring("host")
```

### Variables

TSL allow the user to set it's own variable. Just set a name followed by an "=" sign. 

To reuse a variable, just use it's name. To execute a query store in a variable, just write the variable name in a new line.

Example:

```sql
-- Store a two minutes duration
customDuration = 2m

-- Store a series name
seriesName = "sys.cpu.nice"

-- Store a label name
labelName = "host=web02"

-- Store a number
myNumber = 100

-- Store a select instruction and it's operation
mySelect = select(seriesName)
              .from(1346846400000000,1346847000006000)
			        .where(labelName)
			        .sample(30s)
			        .add(100)

-- Get it's result
mySelect
```

```sql
-- Store a label name
labelName = "host=web02"

-- Store a single select
mySelect = select("sys.cpu.nice").from(1346846400000000,1346847000006000)

-- Apply post select operation and get result 
mySelect.where(labelName).ln()
mySelect.where(labelName).add(100)
```

```sql
-- Store a label name
labelName = "host=web02"

-- Use variables in operation
mySelect = select("sys.cpu.nice").from(1346846400000000,1346847000006000)

add(mySelect.where(labelName).ln(),mySelect
   .where("host=web01"))

-- Store multiples series operation result in variable
addSave = add(mySelect.where(labelName).ln(),mySelect
   .where("host=web01"))

-- Get multiples series operation result from addSave variable
addSave.on("host").add(100)
```

### Connect

In TSL, we can directly use the Connect method to update the set the backend on which queries are processed.

```sql
connect("http://localhost:9090", "TOKEN")
```

The back-end have to be declared in TSL configuration, for OVH the valid backends are: "https://p:READ_TOKEN@prometheus.gra1-ovh.metrics.ovh.net/api/v1/query_range" and "https://warp10.gra1-ovh.metrics.ovh.net". Do not replace the "READ_TOKEN" key to use our emulated Prometheus backend.

#### Series meta operator

The update metrics meta-data in TSL you can use one of the following function:

* The **addNamePrefix** to add a **prefix** to each metrics of a set. Use example: _.addNamePrefix("prefix")._
* The **addNameSuffix** to add a **suffix** to each metrics of a set. Use example: _.addNameSuffix("suffix")._
* The **rename** to rename each metrics of a set. Use example: _.rename("newName")._
* The **renameBy** to rename each metrics per one of it's labels. Use example: _.renameBy("host")._
* The **removeLabels** to remove one or several labels of a metrics set. Use example: _.removeLabels("host", "dc")._
* The **renameLabelKey** to rename a label key. Use example: _.renameLabelKey("dc", "Data-center")._
* The **renameLabelValue** to rename a label value. Use example: _.renameLabelValue("dc", "new")._
* The **renameLabelValue** to rename a label value matching a regexp. Use example: _.renameLabelValue("dc", "lg.*", "new-dc")._

None of those methods are currently available for **Prometheus**. 

#### Global series operator

TSL can also be used to store query result back on the backend. 
This can be done using the **store** method. Store expects a token as unique parameter. Use example:  _.store("WRITE\_TOKEN")._

> **store** is only avaible on a Warp 10 backend.

To resets counters values the method **resets** can be applied in TSL. Use example:  _.resets("host")._

## TSL outside OVH

TSL goals are to simplify the process to query Time series data and to provide a unified language syntax to apply on different backend.

### TSL on Warp 10

The Warp 10 language, WarpScript, gives a lot of possibilities to query metrics data. However it's not the easiest language to learn. That's where TSL can used to abstract the WarpSCript complexity but still use its power.

To execute TSL on the Metrics platform using a Warp 10 backend you can use the **connect** method on top of your TSL query.

```sql
connect("https://warp10.gra1-ovh.metrics.ovh.net")
```

### TSL on Prometheus

The Prometheus back-end is widely use, this is why TSL queries can also be executed on Prometheus. 

To execute TSL on the Metrics platform using an emulated Prometheus backend, you can use the **connect** method on top of your TSL query.

```sql
connect("https://p:READ_TOKEN@prometheus.gra1-ovh.metrics.ovh.net/api/v1/query_range")
```

## Go further

- Documentation: [Guides](../product.fr-fr.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
