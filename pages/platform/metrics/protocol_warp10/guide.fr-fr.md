---
title: Use Warp 10™
slug: protocol-warp10
excerpt: Get an overview on how to use Warp 10™ for Metrics
section: Protocol
order: 6
---

**Last updated 23th August, 2019**

## Objective

[The Warp 10 Platform](http://www.warp10.io/){.external} is designed to collect, store and manipulate sensor data. In this guide, you will learn how to use Warp10 protocol with Metrics.

## Requirements

- a valid OVH Metrics account.

## Instructions

### Compatibility

Being based on Warp10, we are first class citizens for it. **All functions and calls are supported**:

| API                                                              | Method | Supported                    |
| ---------------------------------------------------------------- | ------ | ---------------------------- |
| [/api/v0/update](http://www.warp10.io/apis/ingress/){.external}  | POST   | <i class="fas fa-check"></i> |
| [/api/v0/fetch](http://www.warp10.io/apis/fetch/){.external}     | GET    | <i class="fas fa-check"></i> |
| [/api/v0/exec](http://www.warp10.io/apis/warpscript/){.external} | POST   | <i class="fas fa-check"></i> |
| [/api/v0/delete](http://www.warp10.io/apis/delete/){.external}   | GET    | <i class="fas fa-check"></i> |

### How to Push data

#### Authentification

To push data to the platform, you will need a **WRITE TOKEN**. Warp10 supports authentification through `X-Warp10-Token`.

#### Push data using curl

The full documentation is available at [http://www.warp10.io/apis/ingress/](http://www.warp10.io/apis/ingress/){.external}

Write a file called `warp.data` with this included:

```text
1380475081000000// foo{label0=val0,label1=val1} 42
```

You can now push it to the platform using curl:

```shell-session
$ curl -H 'X-Warp10-Token: WRITE_TOKEN' -H 'Transfer-Encoding: chunked' \
    --data-binary @warp.data 'https://warp10.gra1.metrics.ovh.net/api/v0/update'
```

or

```shell-session
$ curl -H 'X-Warp10-Token: WRITE_TOKEN' --data-binary "1380475081000000// foo{label0=val0,label1=val1} 42" \
    'https://warp10.gra1.metrics.ovh.net/api/v0/update'
```

Don't forget to replace `WRITE_TOKEN` by your own write token.

#### Push data using Python

You can also use Python to push some data.

```python
>>> import requests

>>> url = 'https://warp10.gra1.metrics.ovh.net/api/v0/update'
>>> headers = {'X-Warp10-Token': 'WRITE_TOKEN', 'content-type':'text/plain'}
>>> payload = "1380475081000000// foo{label0=val0,label1=val1} 42"

>>> r = requests.post(url, headers=headers, data=payload)
>>> r.status_code
```

Don't forget to replace `WRITE_TOKEN` by your own write token.

### How to query

#### An overview of WarpScript

Warp10 is providing a **Query Language** called **WarpScript**, designed to manipulate time series. It features:

- Server Side Analysis
- Dataflow language
- Rich programming QL (+800 functions)
- Geo-Fencing capabilities
- Unified Language (query, batch, streaming)

Here's a WarpScript example:

```text
'TOKEN_READ' 'token' STORE                          // Stocking token

[ $token ‘consumption’ {} NOW 1 h ] FETCH           // Fetch all values from now to 1 hour ago
[ SWAP bucketizer.max       0 1 m 0 ] BUCKETIZE     // Get max value for each minute

[ SWAP [ 'room' ] reducer.sum ] REDUCE              // Aggregate all consumptions by room
[ SWAP mapper.rate 1 0 0 ] MAP                      // Consumption being a counter, compute the rate
```

To help you get started, we've created a "Tour" available at [http://tour.warp10.io](http://tour.warp10.io){.external}.

#### How to query data with curl

The full documentation is available at [http://www.warp10.io/apis/warpscript/](http://www.warp10.io/apis/warpscript/){.external}.

Write a file called `script.mc2` with this content:

```text
// Egress token to use
'TOKEN_READ' 'token' STORE

[ $token '~class.*' { 'foo' '=bar' } NOW 1 h ] FETCH // fetch from date (here NOW) to 1 hour ago.
```

Then, you can execute the query using `curl`:

```shell-session
$ curl -X POST @script.mc2 'https://warp10.gra1.metrics.ovh.net/api/v0/exec'
```

### How to delete my data

To delete all completely a series you can use the simple Warp 10 delete command used below replacing SERIES_NAME by your own series selector. Once the data are deleted you will not be able to retrieve them! Deleting data will not reduce your number of points per day pushed.

```shell-session
$ curl -H 'X-Warp10-Token: WRITE_TOKEN' 'https://warp10.gra1.metrics.ovh.net/api/v0/delete?deleteall&selector=sys.cpu.nice\{\}'
```

## Go further

- Documentation: [Guides](../product.fr-fr.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
