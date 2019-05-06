---
title: 'Use OpenTSDB'
slug: protocol-opentsdb
excerpt: 'Get an overview on how to use OpenTSDB for Metrics'
section: Protocol
order: 3
---

**Last updated 26 April, 2019**

## Objective

[OpenTSDB](http://opentsdb.net/){.external} is a Scalable Time Series Database design to store and serve massive amounts of time series data without losing granularity. In this guide, you will learn how to use OpenTSDB protocol with Metrics.

## Requirements

- a valid OVH Metrics account.

## Instructions

### Compatibility

We are currently supporting this calls:

| API                | Method | Supported                    |
| ------------------ | ------ | ---------------------------- |
| /api/aggregators   | GET    | <i class="fas fa-check"></i> |
| /api/aggregators   | POST   | <i class="fas fa-check"></i> |
| /api/annotation    | GET    | <i class="fas fa-times"></i> |
| /api/annotation    | POST   | <i class="fas fa-times"></i> |
| /api/annotation    | PUT    | <i class="fas fa-times"></i> |
| /api/annotation    | DELETE | <i class="fas fa-times"></i> |
| /api/config        | GET    | <i class="fas fa-times"></i> |
| /api/config        | POST   | <i class="fas fa-times"></i> |
| /api/dropcaches    | GET    | <i class="fas fa-times"></i> |
| /api/dropcaches    | POST   | <i class="fas fa-times"></i> |
| /api/histogram     | GET    | <i class="fas fa-times"></i> |
| /api/histogram     | POST   | <i class="fas fa-times"></i> |
| /api/put           | POST   | <i class="fas fa-check"></i> |
| /api/query         | GET    | <i class="fas fa-check"></i> |
| /api/query         | POST   | <i class="fas fa-check"></i> |
| /api/query         | DELETE | <i class="fas fa-check"></i> |
| /api/query/last    | GET    | <i class="fas fa-check"></i> |
| /api/query/last    | POST   | <i class="fas fa-check"></i> |
| /api/rollup        | GET    | <i class="fas fa-times"></i> |
| /api/rollup        | POST   | <i class="fas fa-times"></i> |
| /api/search/lookup | GET    | <i class="fas fa-check"></i> |
| /api/search/lookup | POST   | <i class="fas fa-check"></i> |
| /api/search/\*     | GET    | <i class="fas fa-times"></i> |
| /api/search/\*     | POST   | <i class="fas fa-times"></i> |
| /api/serializers   | GET    | <i class="fas fa-times"></i> |
| /api/serializers   | POST   | <i class="fas fa-times"></i> |
| /api/stats         | GET    | <i class="fas fa-times"></i> |
| /api/stats         | POST   | <i class="fas fa-times"></i> |
| /api/suggest       | GET    | <i class="fas fa-check"></i> |
| /api/suggest       | POST   | <i class="fas fa-check"></i> |
| /api/tree          | GET    | <i class="fas fa-times"></i> |
| /api/tree          | POST   | <i class="fas fa-times"></i> |
| /api/tree          | PUT    | <i class="fas fa-times"></i> |
| /api/tree          | DELETE | <i class="fas fa-times"></i> |
| /api/uid/\*        | GET    | <i class="fas fa-times"></i> |
| /api/uid/\*        | POST   | <i class="fas fa-times"></i> |
| /api/version       | GET    | <i class="fas fa-times"></i> |
| /api/version       | POST   | <i class="fas fa-times"></i> |
| TELNET             | TCP    | <i class="fas fa-times"></i> |

> We do not support pushing using telnet mode and API backend (config, caches, serializers, stats, version) related endpoints as we are not running an OpenTSDB.

> OpenTSDB annotation can be used using strings values as metrics data

### How to Push data

#### Authentification

To push data to the platform, you will need a **WRITE TOKEN**. Use Basic Auth directly inside the URL to pass it properly, like this :

<pre>https://metrics:[WRITE_TOKEN]@opentsdb.[region].metrics.ovh.net</pre>

#### Push datapoints using curl

> The full documentation is available at [http://opentsdb.net/docs/build/html/api_http/put.html](http://opentsdb.net/docs/build/html/api_http/put.html){.external}. As an example you can push single point.

Create a file on your disk named "opentsdb.json", and populate it with the following content:

```json
{
	"metric": "sys.cpu.nice",
	"timestamp": 1346846400,
	"value": 18,
	"tags": {
		"host": "web01",
		"dc": "lga"
	}
}
```

In the `curl` command below, replace **REGION** per your own one : **gra1** or **bhs1**. As the user doesn't matter on the metrics backend, all the information are stored in our cryptographical token, you can replace or let metrics as if.

```sh
curl -X POST -d @opentsdb.json \
    'https://metrics:TOKEN_WRITE@opentsdb.REGION.metrics.ovh.net/api/put'
```

If everyting happens correctly, the CURL would exit with a 200 code status.

#### Push datapoints using Python

Here's an example how you can use Python to push datapoints in OpenTSDB format using [Requests](http://docs.python-requests.org/en/master/){.external}:

```python
>>> import requests

>>> url = 'https://metrics:TOKEN@opentsdb.REGION.metrics.ovh.net/api/put'
>>> payload = {}
>>> payload["metric"] = "sys.cpu.nice"
>>> payload["timestamp"] = "1346846400"
>>> payload["value"] = 18
>>> tags = { "host": "web01", "dc": "lga"}
>>> payload["tags"] = tags

>>> r = requests.post(url, json=payload)
>>> r.status_code
```

### How to query data

#### Authentification

To query data to the platform, you will need a **READ TOKEN**. Use Basic Auth directly inside the URL to pass it properly, like this :

<pre>https://metrics:[READ_TOKEN]@opentsdb.[region].metrics.ovh.net</pre>

#### Query using curl

Now let's retrieve the previously pushed data.

> The full documentation is available at [http://opentsdb.net/docs/build/html/api_http/query/index.html](http://opentsdb.net/docs/build/html/api_http/query/index.html){.external}

Let's write a query.json file which contains the following code:

```json
{
	"start": 1346846000000,
	"end": 1346847300005,
	"queries": [
		{
			"metric": "sys.cpu.nice",
			"aggregator": "min",
			"downsample": "4m-avg",
			"tags": {
				"host": "*",
				"dc": "*"
			}
		}
	]
}
```

This will get all the saved points and compute the query before returning the result. The curl command to execute this query is:

```sh
curl --data-binary @query.json \
    'https://DESC:TOKEN_READ@opentsdb.REGION.metrics.ovh.net/api/query'
```

You should expects a result similar to:

![pricing](images/opentsdb-query-result.png){.thumbnail}

## Supported queries attributes

The Metrics platform offers almost a full support for OpenTSDB 2.3 queries.

### OpenTSDB requests

The OpenTSDB requests attributes supported on the metrics platform are:

| Attribute         | Type            | Supported                    |
| ----------------- | --------------- | ---------------------------- |
| start             | Integer, String | <i class="fas fa-check"></i> |
| end               | Integer, String | <i class="fas fa-check"></i> |
| queries           | Array           | <i class="fas fa-check"></i> |
| noAnnotations     | Boolean         | <i class="fas fa-times"></i> |
| globalAnnotations | Boolean         | <i class="fas fa-times"></i> |
| msResolution      | Boolean         | <i class="fas fa-check"></i> |
| showTSUIDs        | Boolean         | <i class="fas fa-times"></i> |
| showSummary (2.2) | Boolean         | <i class="fas fa-times"></i> |
| showStats (2.2)   | Boolean         | <i class="fas fa-times"></i> |
| showQuery (2.2)   | Boolean         | <i class="fas fa-times"></i> |
| delete            | Boolean         | <i class="fas fa-check"></i> |
| timezone (2.3)    | String          | <i class="fas fa-times"></i> |
| useCalendar (2.3) | Boolean         | <i class="fas fa-times"></i> |

> We do not support annotations (as in Metrics annotations can be stored in a series). showTSUIDs isn't implemented as our series are stored using an Hash of their classnames and tags.

> The allowed strings date format are defined at [http://opentsdb.net/docs/build/html/user_guide/query/dates.html](http://opentsdb.net/docs/build/html/user_guide/query/dates.html){.external}.

### OpenTSDB sub-queries

The OpenTSDQ sub-queries attributes supported on the metrics platform are:

| Attribute          | Type    | Supported                    |
| ------------------ | ------- | ---------------------------- |
| aggregator         | String  | <i class="fas fa-check"></i> |
| metric             | String  | <i class="fas fa-check"></i> |
| rate               | Boolean | <i class="fas fa-check"></i> |
| rateOptions        | Map     | <i class="fas fa-check"></i> |
| downsample         | String  | <i class="fas fa-check"></i> |
| tags               | Map     | <i class="fas fa-check"></i> |
| filters (2.2)      | List    | <i class="fas fa-check"></i> |
| explicitTags (2.3) | Boolean | <i class="fas fa-check"></i> |
| percentiles (2.4)  | Boolean | <i class="fas fa-times"></i> |

> Settings **explicitTags** will result only on the series that have all theirs labels key in tags map and/or in filters list.

### OpenTSDB rate-options

The OpenTSDB rate-options attributes supported on the metrics platform are:

| Attribute  | Type    | Supported                    |
| ---------- | ------- | ---------------------------- |
| counter    | Boolean | <i class="fas fa-check"></i> |
| counterMax | Integer | <i class="fas fa-check"></i> |
| resetValue | Integer | <i class="fas fa-check"></i> |
| dropResets | Boolean | <i class="fas fa-check"></i> |

### OpenTSDB Filters

The OpenTSDB Filters attributes supported on the metrics platform are:

| Attribute | Type    | Supported                    |
| --------- | ------- | ---------------------------- |
| type      | String  | <i class="fas fa-check"></i> |
| tagk      | String  | <i class="fas fa-check"></i> |
| filter    | String  | <i class="fas fa-check"></i> |
| groupBy   | Boolean | <i class="fas fa-check"></i> |

### OpenTSDB Aggregators

The OpenTSDB aggregators supported on the metrics platform are:

| Attribute | Interpolation             | Grouping/Downsampling | Supported                    |
| --------- | ------------------------- | --------------------- | ---------------------------- |
| avg       | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| count     | Not counted when missing  | Both                  | <i class="fas fa-check"></i> |
| dev       | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| ep50r3    | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep50r7    | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep75r3    | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep75r7    | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep90r3    | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep90r7    | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep95r3    | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep95r7    | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep99r3    | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep99r7    | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep999r3   | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| ep999r7   | Linear Interpolation      | None                  | <i class="fas fa-times"></i> |
| first     | None                      | Downsampling          | <i class="fas fa-check"></i> |
| last      | None                      | Downsampling          | <i class="fas fa-check"></i> |
| mimmin    | Not compared when missing | Both                  | <i class="fas fa-check"></i> |
| mimmax    | Not compared when missing | Both                  | <i class="fas fa-check"></i> |
| min       | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| max       | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| none      | Not counted when missing  | Grouping              | <i class="fas fa-check"></i> |
| p50       | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| p75       | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| p90       | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| p95       | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| p99       | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| p999      | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| sum       | Linear Interpolation      | Both                  | <i class="fas fa-check"></i> |
| zimsum    | Zero when missing         | Both                  | <i class="fas fa-check"></i> |

### OpenTSDB Downsampling fill policies

The OpenTSDB downsampling fill policies supported on the metrics platform are:

| Policy | Supported                    |
| ------ | ---------------------------- |
| None   | <i class="fas fa-check"></i> |
| NaN    | <i class="fas fa-check"></i> |
| Null   | <i class="fas fa-check"></i> |
| Zero   | <i class="fas fa-check"></i> |

## Going further

You can learn how to configure a Grafana OpenTSDB source by following [this guide](../start-grafana).

You can also exchange with our community of users on [https://community.ovh.com](https://community.ovh.com){.external}.
