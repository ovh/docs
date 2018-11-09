---
title: Use OpenTSDB
slug: protocol-opentsdb
excerpt: Get an overview on how to use OpenTSDB for Metrics
section: Protocol
order: 3
---
**Last updated 15th May, 2018**
## Objective

[OpenTSDB](http://opentsdb.net/){.external} is a Scalable Time Series Database design to store and serve massive amounts of time series data without losing granularity. In this guide, you will learn how to use OpenTSDB protocol with Metrics.

## Requirements

- a valid OVH Metrics account.

## Instructions

### Compatibility

We are currently supporting this calls:


| API    | Method | Supported |
|--------|--------|-----------|
| /api/suggest | GET   |  <i class="fas fa-check"></i> |
| /api/suggest | POST   |  <i class="fas fa-check"></i> |
| /api/search/lookup  | GET   |  <i class="fas fa-check"></i> |
| /api/search/lookup  | POST   |  <i class="fas fa-check"></i> |
| /api/query | GET   |  <i class="fas fa-check"></i> |
| /api/query | POST   |  <i class="fas fa-check"></i> |
| /api/query | DELETE   |  <i class="fas fa-check"></i> |
| /api/query/last | GET   |  <i class="fas fa-check"></i> |
| /api/query/last | POST   |  <i class="fas fa-check"></i> |
| TELNET | TCP   |  <i class="fas fa-times"></i> |



> We do not support pushing using telnet mode.


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


In the `curl` command below, replace __REGION__ per your own one : __gra1__  or __bhs1__. As the user doesn't matter on the metrics backend, all the information are stored in our cryptographical token, you can replace or let metrics as if.

```sh
curl -X POST -d @opentsdb.json \
    'https://metrics:TOKEN_WRITE@opentsdb.REGION.metrics.ovh.net/api/put'
```

If everyting happens correctly, the CURL would exit with a 200 code status.
#### Push datapoints using Python

Here's an example how you can use Python to push datapoints in OpenTSDB format using [Requests](http://docs.python-requests.org/en/master/){.external}:

```Python
>>> import requests

>>> url = 'https://opentsdb.REGION.metrics.ovh.net/api/put'
>>> headers = {'X-Warp10-Token': 'WRITE_TOKEN', 'content-type':'text/plain'}
>>> payload = {}
>>> payload["metric"] = "sys.cpu.nice"
>>> payload["timestamp"] = "1346846400"
>>> payload["value"] = 18
>>> tags = { "host": "web01", "dc": "lga"}
>>> payload["tags"] = tags

>>> r = requests.post(url, headers=headers, data=payload)
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
    "queries": [{
        "metric": "sys.cpu.nice",
        "aggregator": "min",
        "downsample": "4m-avg",
        "tags": {
            "host": "*",
            "dc": "*"
        }
    }]
}
```

This will get all the saved points and compute the query before returning the result. The curl command to execute this query is:

```sh
curl --data-binary @query.json \
    'https://DESC:TOKEN_READ@opentsdb.REGION.metrics.ovh.net/api/query'
```

You should expects a result similar to:

<img src="../../images/opentsdb-query-result.png" width="100%"/>

## Going further

You can learn how to configure a Grafana OpenTSDB source by following [this guide](../start-grafana).

You can also exchange with our community of users on [https://community.ovh.com](https://community.ovh.com){.external}.