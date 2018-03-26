---
title: Start using Metrics
slug: using
excerpt: Which protocol suits you best?
section: Getting started
---

> Metrics is protocol agnostic, it means that you can push your data with OpenTSDB, and query it with Warp10 or vice versa.
> Metrics doesn't enforce you to a proprietary protocol. Instead, we believe the plurality of existing protocols from Open Source solutions can be used to achieve Pushing and Querying the platform.
> 



## Supported protocols
Each protocol provides different capabilities. Some will be easier than others but may have less features. We've tried to summary them with this simple table :

|Protocol|Push|Query|Per protocol documentation/examples|Features|Corresponding Open Source project|
|---|---|---|---|---|---|
|Graphite|<i class="fa fa-check"></i>|<i class="fa fa-times"></i>|[Metrics Graphite](#graphite_desc){.external}|<i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>|[http://graphiteapp.org/](http://graphiteapp.org/){.external}|
|InfluxDB|<i class="fa fa-check"></i>|<i class="fa fa-times"></i>|[Metrics Influx](#influx_desc){.external}|<i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>|[https://github.com/influxdata/influxdb](https://github.com/influxdata/influxdb){.external}|
|OpentSDB|<i class="fa fa-check"></i>|<i class="fa fa-check"></i>|[Metrics OpenTSDB](#opentsdb_desc){.external}|<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>|[http://opentsdb.net/](http://opentsdb.net/){.external}|
|Prometheus|<i class="fa fa-check"></i>|<i class="fa fa-check"></i>|[Metrics Prometheus](#prom_desc){.external}|<i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i>|[https://prometheus.io/](https://prometheus.io/){.external}|
|SQL|<i class="fa fa-times"></i>|<i class="fa fa-check"></i>|[Metrics SQL](#sql_desc){.external}|<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>||
|Warp10|<i class="fa fa-check"></i>|<i class="fa fa-check"></i>|[Metrics Warp10](#warp_desc){.external}|<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>|[http://www.warp10.io/](http://www.warp10.io/){.external}|

Most of the protocols don't include **authentification**, so **you need to add the tokens in the Basic Auth field.**

> If you're wondering which protocol to choose, here is a simple guideline :
> - You want to push json? -> OpenTSDB
> - You want to instrument your code? -> Prometheus SDK + Beamium
> - You want powerful analytics? -> Warp10 & WarpScript
> - You want BI tools integration like Tableau, Power BI, Qlik? -> SQL
>

## Authentification and endpoints
Metrics has builtin security to secure your data. In the previous section [](../start_manager/guide.en-gb.md){.ref} you've learnt where to get them from the manager. We've generated a default pair of **tokens** :

- a **READ** token to Query
- a **WRITE** token to Push Data

Except for Warp10 (where it's provided as a specific Header for push and in the DSL payload for queries), this token will be used as the password in the [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication){.external}.

Most of the protocols are available through HTTPS endpoints. Here's the logic for pushing: **https://token:[write token]@[protocol].[region].metrics.ovh.net**

For example :

```
 https://token:cersX8.P5X_4Zv...LEXV_hoXuKcn_BRp2eqp7@opentsdb.gra1.metrics.ovh.net
```

> The user in the basic authenfication is discarded. 


## Protocols

### Graphite

#### Abstract
[Graphite](https://graphiteapp.org/){.external} is the first Time Series platform with basic analytics capabilities. This is the reason why many developers and sysadmin like it.


#### Data Model
Graphite's data model uses a dot-separated format that describes a metric name, e.g. :

```
 servers.srv_1.dc.gra1.cpu0.nice;
```

#### How to Push data
Since Graphite doesn't support authentication, we've developed a small proxy that fits on your host and accept pushes to [TCP:2003](TCP:2003){.external} like Graphite.

It's named [Fossil](https://github.com/ovh/fossil){.external} and it's Open Source.


#### Queries
Queries over Graphite are performed with URL based query parameters, json payload or form payload.

```
https://graphite.gra1.metrics.ovh.net/render
```

#### Query data with Graphite

The full documentation is available at [http://graphite-api.readthedocs.io/en/latest/](http://graphite-api.readthedocs.io/en/latest/){.external}.

```bash
curl 'https://metrics:TOKEN_READ@graphite.gra1.metrics.ovh.net/render?target=maximumAbove(os.cpu, 1048576)'
```

To authenticate requests basic auth is used. You must fill the basic auth password with the read token available in your OVH Metrics Data Platform manager.

#### Grafana

Graphite is integrated with Grafana : [Read more on Graphite builtin data source](http://docs.grafana.org/features/datasources/graphite/){.external}.

#### Compatibility

The Graphite API documentation is available at [http://graphite-api.readthedocs.io/en/latest/api.html](http://graphite-api.readthedocs.io/en/latest/api.html){.external}.

We are currently supporting this calls:

|Method|Supported call|limitation|
|---|---|---|
|GET|/render|This path does not support pictures generation|
|GET|/metrics||
|GET|/metrics/find||
|GET|/metrics/index.json||

<a name="influx_desc"></a>

### InfluxDB

#### Abstract
InfluxDB is a proprietary time series database that integrates with [Telegraf](https://github.com/influxdata/telegraf){.external}.


#### Data Model
InfluxDB uses it own data model :

```
 <measurement>[,<tag_key>=<tag_value>[,<tag_key>=<tag_value>]] <field_key>=<field_value>[,<field_key>=<field_value>] [<timestamp>]
```

#### Authentification
Use Basic Auth with the URL : **https://token:[write token]@influxdb.[region].metrics.ovh.net**


#### How to push data


> [!primary]
>
> The full documentation is available at https://docs.influxdata.com/influxdb/v1.2/guides/writing_data/
> 


##### Bash &amp; curl

```sh
 curl -i -XPOST \
     'https://DESC:TOKEN_WRITE@influxdb.gra1.metrics.ovh.net/write' \
     --data-binary \
     'cpu_load_short,host=server01,region=us-west value=0.64 1434055562000000000'
```


#### Queries
InfluxDB has its own Query DSL, that mimics SQL without being plain ANSI SQL.

```
 SELECT <field_key>[,<field_key>,<tag_key>] FROM <measurement_name>[,<measurement_name>]
```
Metrics currently doesn't support Influx Query Language.


#### Compatibility
|Method|Supported call|
|---|---|
|POST|/write|

InfluxDB has the notion of databases. This concept doesn't exist within Metrics. If you need segmentation, you can use different Metrics project or isolate with an additional label.

<a name="opentsdb_desc"></a>

### OpenTSDB

#### Abstract
OpenTSDB is a Scalable Time Series Database design to store and serve massive amounts of time series data without losing granularity.


#### Authentification
To push data to the platform, you will need a **WRITE TOKEN**. Except for Warp10, it’ll be used as the password in the [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication){.external} like this: **https://[whatever you want]:[write token]@opentsdb.[region].metrics.ovh.net**


#### How to Push data

> The full documentation is available at http://opentsdb.net/docs/build/html/api_http/put.html

```
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

or

```
 [
     {
         "metric": "sys.cpu.nice",
         "timestamp": 1346846400,
         "value": 18,
         "tags": {
             "host": "web01",
             "dc": "lga"
         }
     },
     {
         "metric": "sys.cpu.nice",
         "timestamp": 1346846400,
         "value": 9,
         "tags": {
             "host": "web02",
             "dc": "lga"
         }
     }
 ]
```

##### Bash &amp; curl

```sh
curl -X POST -d @opentsdb.json \
    'https://DESC:TOKEN_WRITE@opentsdb.gra1.metrics.ovh.net/api/put'
```


##### Python

```Python
>>> import requests 

>>> url = 'https://opentsdb.gra1.metrics.ovh.net/api/put'
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


#### Query data with OpenTSDB



> The full documentation is available at http://opentsdb.net/docs/build/html/api_http/query/index.html
> 

```
 {
     "start": 1487066514,
     "end": 1487070014,
     "queries": [{
         "metric": "os.cpu",
         "aggregator": "max",
         "downsample": "5m-avg",
         "tags": {
             "host": "*",
             "dc": "*"
         }
     }]
 }
```

##### Bash &amp; curl

```sh
curl --data-binary @QUERY \
    'https://DESC:TOKEN_READ@opentsdb.gra1-ovh.metrics.ovh.net/api/query'
```


#### Grafana
OpenTSDB in integrated with Grafana : [Read more on OpenTSDB builtin data source](http://docs.grafana.org/features/datasources/opentsdb/){.external}.


#### Compatibility
We are currently supporting this calls:

|Method|Supported call|
|---|---|
|GET|/api/suggest|
|POST|/api/suggest|
|GET|/api/search/lookup|
|POST|/api/search/lookup|
|GET|/api/query|
|POST|/api/query|
|DELETE|/api/query|
|GET|/api/query/last|
|POST|/api/query/last|

> We do not support pushing using telnet mode

<a name="prom_desc"></a>

### Prometheus

#### Abstract
Prometheus is another open-source monitoring system that takes its root as a clone of Borgmon from Google. Prometheus has a unique approach for collecting measurements by **pulling** them  and uses **scrapers** to read metrics from HTTP endpoints exposed (like /metrics) from hosts and applications.

This mode has many advantages but it's not safe by design and if the scraper or network is down, you can loose metrics. In order to overcome these issues, we've developed [beamium](https://github.com/ovh/beamium){.external}.


#### Authentification
To push data to the platform, you will need a **WRITE TOKEN**. Except for Warp10, it’ll be used as the password in the [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication){.external} like this: **https://token:[write token]@prometheus.[region].metrics.ovh.net**


#### How to Expose data
If you want to use a Prometheus exporter (or instrument an app with a /metrics), we recommend to use Beamium, that will :

- offer a DFO (Disk Fail Over in case of network failure)
- scrape as much /metrics endpoint you could have
- filter metrics
- recover datapoints from a network outage
- route datapoints to multiple destinations (or sinks)

Beamium can parse Prometheus and Sensision(Warp10) formats. So every Prometheus exporter (node-exporter, haproxy-exporter, ...) will be compliant with Beamium.


#### How to Push data
We also provide a PushGateway compliant endpoint


#### PromQL
PromQL is a **Query Language** for Prometheus. It offers basic query capabilities, like OpenTSDB, plus a way to use operators between two series.


#### Compatibility
We currently support:

- client libraries for instrumenting application code thanks to Beamium, our prometheus scraper.

> PromQL by Metrics is quite new has not been extensively tested. If you have any feedback : OVH Community.


#### Grafana
PromQL in integrated with Grafana : [Read more on Prometheus builtin data source](http://docs.grafana.org/features/datasources/prometheus/){.external}.

<a name="sql_desc"></a>

### SQL

#### Coming soon
SQL support is coming and will allow Metrics integration with all solutions that provides JDBC/ODBC support. At first SQL suppot won't be ANSI SQL but a subset that allows to fetch data and perform basic aggregations, which is mostly enough to use your data from BI Tools.

<a name="warp_desc"></a>

### Warp10
[The Warp 10 Platform](http://www.warp10.io/){.external} is designed to collect, store and manipulate sensor data. Sensor data are ingested as sequences of measurements (also called time series). The Warp 10 Platform offers the possibility for each measurement to also have spatial metadata specifying the geographic coordinates and/or the elevation of the sensor at the time of the reading. Those augmented measurements form what we call Geo Time Series® (GTS).


#### Compatibility
Being based on Warp10, we are first class citizens for it. **All functions and calls are supported**:

|Method|Supported call|
|---|---|
|POST|[/api/v0/update](http://www.warp10.io/apis/ingress/){.external}|
|GET|[/api/v0/fetch](http://www.warp10.io/apis/fetch/){.external}|
|POST|[/api/v0/exec](http://www.warp10.io/apis/warpscript/){.external}|
|GET|[/api/v0/delete](http://www.warp10.io/apis/delete/){.external}|


#### How to Push data


> The full documentation is available at http://www.warp10.io/apis/ingress/

```
1380475081000000// foo{label0=val0,label1=val1} 42
```

##### Bash &amp; curl

```sh
curl -H 'X-Warp10-Token: WRITE_TOKEN' -H 'Transfer-Encoding: chunked' \
    --data-binary @METRICS_FILE 'https://warp10.gra1.metrics.ovh.net/api/v0/update'
# or
curl -H 'X-Warp10-Token: WRITE_TOKEN' --data-binary "1380475081000000// foo{label0=val0,label1=val1} 42" \
    'https://warp10.gra1.metrics.ovh.net/api/v0/update'
```


##### Python

```Python
>>> import requests

>>> url = 'https://warp10.gra1.metrics.ovh.net/api/v0/update'
>>> headers = {'X-Warp10-Token': 'WRITE_TOKEN', 'content-type':'text/plain'}
>>> payload = "1380475081000000// foo{label0=val0,label1=val1} 42"

>>> r = requests.post(url, headers=headers, data=payload)
>>> r.status_code
```


#### WarpScript
Warp10 is providing a **Query Language** called **WarpScript**, designed to manipulate time series. It features:

- Server Side Analysis
- Dataflow language
- Rich programming QL (+800 functions)
- Geo-Fencing capabilities
- Unified Language (query, batch, streaming)

Here's a WarpScript example:

```
'TOKEN_READ' 'token' STORE                          // Stocking token
[ $token ‘temperature’ {} NOW 1 h ] FETCH           // Fetching all values from now to 1 hour ago
[ SWAP bucketizer.max       0 1 m 0 ] BUCKETIZE     // Get max value for each minute
[ SWAP mapper.round 0 0 0 ] MAP                         // Round to nearest decimal
[ SWAP [] 15 filter.last.le ] FILTER                // Filter points less than 15°C
```


> To help you getting started, we created a Warp10 Tour http://tour.warp10.io.



#### How to Query data

> The full documentation is available at http://www.warp10.io/apis/warpscript/.



```sh
curl -v  --data-binary "'READ_TOKEN' 'test' {} NOW -1 FETCH" \
    'https://warp10.gra1.metrics.ovh.net/api/v0/exec'
```

or

```
// Egress token to use
'TOKEN_READ' 'token' STORE
 
[ $token '~class.*' { 'foo' '=bar' } NOW 1 h ] FETCH // fetch from date (here NOW) to 1 hour ago.
 // or
[ $token '~class.*' { 'foo' '=bar' } NOW -1 ] FETCH // fetch last point of each GTS matching the selector from date (here NOW)
```

```sh
curl -X POST @script.mc2 \
    'https://warp10.gra1.metrics.ovh.net/api/v0/exec'
```


#### Grafana
WarpScript in integrated as data source with our Grafana.


### MQTT


> [MQTT](http://mqtt.org/){.external} is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol. It was designed as an extremely lightweight publish/subscribe messaging transport. It is useful for connections with remote locations where a small code footprint is required and/or network bandwidth is at a premium.


MQTT support for Metrics is in early stage and considered **Alpha**. If you're interested in MQTT. Contact us through [OVH Community](https://community.ovh.com/c/mobile-hosting/data-platforms-lab){.external}.