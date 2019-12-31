---
title: Use Graphite
slug: protocol-graphite
excerpt: Get an overview on how to use Graphite for Metrics
section: Protocol
order: 2
---

**Last updated 31th December, 2019**

## Objective

[Graphite](https://graphiteapp.org/){.external} is a Time Series platform with analytics capabilities. In this guide, you will learn how to use Graphite protocol with Metrics.

## Requirements

- a valid OVH Metrics account.

## Instructions

### Compatibility

The Graphite API documentation is available at [http://graphite-api.readthedocs.io/en/latest/api.html](http://graphite-api.readthedocs.io/en/latest/api.html){.external}.

We are currently supporting this calls:

| API                 | Method     | Supported                    | limitation                                     |
| ------------------- | ---------- | ---------------------------- | ---------------------------------------------- |
| /render             | GET / POST | <i class="fas fa-check"></i> | This path does not support pictures generation |
| /metrics            | GET        | <i class="fas fa-check"></i> |
| /metrics/find       | GET        | <i class="fas fa-check"></i> |
| /metrics/index.json | GET        | <i class="fas fa-check"></i> |

### How to push data

[Graphite Carbon](https://github.com/graphite-project/carbon){.external} use a push-based approach using a TCP listener to gather metrics. We developed open-source tools called
`Beamium` and `Fossil` in order to push metrics to Metrics Data Platform. Please see the [dedicated guide to use Beamium](../source-beamium) and [Fossil github repository](https://github.com/ovh/fossil){.external}.

The Graphite protocol is support on the Metrics Data Platform via a TCP connection or via an HTTP request. You can use the same syntax as defined in [Hosted Graphite](https://www.hostedgraphite.com/docs/#tcp-connection){.external}.

In this part og the guide, you will learn how to send Graphite's metrics to Metrics Data Platform.

#### Via a TCP connection

You can use the same syntax as defined in [Hosted Graphite](https://www.hostedgraphite.com/docs/#tcp-connection){.external}. You need to ensure each metrics names are prefixed by a valid Metric token and an "@.", like this:

```shell-session
TOKEN@.metricname value [timestamp]
```

Where TOKEN is the write token of your Metrics Data Platform application. You can put multiple metrics on separate lines. The **timestamp** is optional.

**Host**: graphite.REGION.metrics.ovh.net, **Port (no SSL)**: 2003, **Port (with SSL)**: 20030

The following example shows how to send a single metric to the Metrics gra1 REGION using netcat on linux:

```shell-session
echo "TOKEN@.tcp_metric 14.2 1546420308000" | ncat --ssl graphite.gra1.metrics.ovh.net 20030
```

#### Via StatsD in TCP

[StatsD](https://github.com/etsy/statsd){.external} is a network daemon. It listens for statistics such as counters and timers sent via UDP or TCP. You can use StatsD to perform metrics aggregations before sending them to the Metrics Data Platform.

You need to install StatsD, once it's done. StatsD can be used with a config file as describe below.

```yaml
{
  graphitePort: 2003
, graphiteHost: "graphite.gra1.metrics.ovh.net"
, port: 8125
, backends: [ "./backends/graphite" ]
,  graphite: {
    legacyNamespace: false,
    globalPrefix: "TOKEN@"
  }
}
```

TOKEN is the write token of your Metrics Data Platform application.

#### Via an HTTP Post

You can use the same syntax as defined in [Hosted Graphite](https://www.hostedgraphite.com/docs/#http-post){.external}.
You need to ensure each metrics names have a valid Graphite format:

```shell-session
metricname value [timestamp]
```

You can put multiple metrics on separate lines. The **timestamp** is optional. You can use the following URL to push your metrics on our Graphite endpoint: https://graphite.REGION.metrics.ovh.net/api/vi/sink

The following example shows how to send a single metric on the gra1 REGION using the cURL command on linux:

```shell-session
curl https://u:TOKEN@graphite.gra1.metrics.ovh.net/api/v1/sink --data-binary "https_metric 14.2 1546420308000"
```

Where TOKEN is the write token of your Metrics Data Platform application.

### How to query

Graphite expose an HTTP api in order to query time series. It offers basic query capabilities and a way to use functions on time series. All query documentation is available [here](https://graphite-api.readthedocs.io/en/latest/api.html#the-render-api-render){.external}.

For example to retrieve your data, you can simply execute the following HTTP request using cURL.

```sh
curl 'https://u:READ_TOKEN@graphite.REGION.metrics.ovh.net/render?target=SERIES_NAME'
```

where:

* READ_TOKEN is your read token available on your OVH Metrics account. You can get the list [here](https://www.ovh.com/manager/cloud/index.html#/){.external}.
* REGION is the region where metrics is available. For example, **gra1**.
* SERIES_NAME is the series name to retrieve. It can be for example **os.cpu**.

#### Special use case

When using a function the time series must be set between double quotes `"`. This behaviour will be replaced in the future in order to be fully compliant with Graphite Carbon.

## Graphite functions

Table of function which are supported by Metrics Data Platform.

| Function                    | Supported                    |
| --------------------------- | ---------------------------- |
| averageSeries               | <i class="fas fa-check"></i> |
| absolute                    | <i class="fas fa-check"></i> |
| aggregate                   | <i class="fas fa-times"></i> |
| aggregateLine               | <i class="fas fa-times"></i> |
| aggregateWithWildcards      | <i class="fas fa-times"></i> |
| alias                       | <i class="fas fa-check"></i> |
| aliasByMetric               | <i class="fas fa-check"></i> |
| aliasByNode                 | <i class="fas fa-check"></i> |
| aliasSub                    | <i class="fas fa-check"></i> |
| averageAbove                | <i class="fas fa-times"></i> |
| averageBelow                | <i class="fas fa-times"></i> |
| averageSeries               | <i class="fas fa-check"></i> |
| averageSeriesWithWildcards  | <i class="fas fa-times"></i> |
| consolidateBy               | <i class="fas fa-times"></i> |
| constantLine                | <i class="fas fa-check"></i> |
| countSeries                 | <i class="fas fa-check"></i> |
| cumulative                  | <i class="fas fa-times"></i> |
| currentAbove                | <i class="fas fa-times"></i> |
| currentBelow                | <i class="fas fa-times"></i> |
| delay                       | <i class="fas fa-check"></i> |
| derivative                  | <i class="fas fa-check"></i> |
| diffSeries                  | <i class="fas fa-check"></i> |
| divideSeries                | <i class="fas fa-times"></i> |
| drawAsInfinite              | <i class="fas fa-check"></i> |
| exclude                     | <i class="fas fa-check"></i> |
| grep                        | <i class="fas fa-check"></i> |
| highestAverage              | <i class="fas fa-check"></i> |
| highestCurrent              | <i class="fas fa-check"></i> |
| highestMax                  | <i class="fas fa-check"></i> |
| hitcount                    | <i class="fas fa-check"></i> |
| integral                    | <i class="fas fa-check"></i> |
| interpolate                 | <i class="fas fa-times"></i> |
| invert                      | <i class="fas fa-times"></i> |
| keepLastValue               | <i class="fas fa-times"></i> |
| limit                       | <i class="fas fa-check"></i> |
| logarithm                   | <i class="fas fa-check"></i> |
| lowestAverage               | <i class="fas fa-check"></i> |
| lowestCurrent               | <i class="fas fa-check"></i> |
| maxSeries                   | <i class="fas fa-check"></i> |
| maximumAbove                | <i class="fas fa-check"></i> |
| maximumBelow                | <i class="fas fa-check"></i> |
| minMax                      | <i class="fas fa-check"></i> |
| minSeries                   | <i class="fas fa-check"></i> |
| minimumAbove                | <i class="fas fa-times"></i> |
| minimumBelow                | <i class="fas fa-check"></i> |
| multiplySeries              | <i class="fas fa-check"></i> |
| multiplySeriesWithWildcards | <i class="fas fa-times"></i> |
| offset                      | <i class="fas fa-check"></i> |
| perSecond                   | <i class="fas fa-check"></i> |
| pow                         | <i class="fas fa-check"></i> |
| randomWalk                  | <i class="fas fa-check"></i> |
| randomWalkFunction          | <i class="fas fa-check"></i> |
| rangeOfSeries               | <i class="fas fa-check"></i> |
| removeAboveValue            | <i class="fas fa-check"></i> |
| removeBelowValue            | <i class="fas fa-check"></i> |
| removeEmptySeries           | <i class="fas fa-check"></i> |
| scale                       | <i class="fas fa-check"></i> |
| scaleToSeconds              | <i class="fas fa-times"></i> |
| seriesByTag                 | <i class="fas fa-times"></i> |
| sinFunction                 | <i class="fas fa-times"></i> |
| sortByMaxima                | <i class="fas fa-check"></i> |
| sortByMinima                | <i class="fas fa-check"></i> |
| sortByName                  | <i class="fas fa-check"></i> |
| sortByTotal                 | <i class="fas fa-check"></i> |
| squareRoot                  | <i class="fas fa-check"></i> |
| stddevSeries                | <i class="fas fa-times"></i> |
| substr                      | <i class="fas fa-check"></i> |
| sumSeries                   | <i class="fas fa-check"></i> |
| sumSeriesWithWildcards      | <i class="fas fa-times"></i> |
| summarize                   | <i class="fas fa-check"></i> |
| threshold                   | <i class="fas fa-check"></i> |
| timeFunction                | <i class="fas fa-times"></i> |
| timeShift                   | <i class="fas fa-times"></i> |
| timeSlice                   | <i class="fas fa-times"></i> |
| transformNull               | <i class="fas fa-check"></i> |
| unique                      | <i class="fas fa-check"></i> |
| aliasByTags                 | <i class="fas fa-times"></i> |
| aliasQuery                  | <i class="fas fa-times"></i> |
| alpha                       | <i class="fas fa-times"></i> |
| applyByNode                 | <i class="fas fa-times"></i> |
| areaBetween                 | <i class="fas fa-times"></i> |
| asPercent                   | <i class="fas fa-times"></i> |
| averageOutsidePercentile    | <i class="fas fa-times"></i> |
| cactiStyle                  | <i class="fas fa-times"></i> |
| changed                     | <i class="fas fa-times"></i> |
| color                       | <i class="fas fa-times"></i> |
| dashed                      | <i class="fas fa-times"></i> |
| divideSeriesLists           | <i class="fas fa-times"></i> |
| events                      | <i class="fas fa-times"></i> |
| exponentialMovingAverage    | <i class="fas fa-times"></i> |
| fallbackSeries              | <i class="fas fa-times"></i> |
| filterSeries                | <i class="fas fa-times"></i> |
| group                       | <i class="fas fa-times"></i> |
| groupByNode                 | <i class="fas fa-times"></i> |
| groupByNodes                | <i class="fas fa-times"></i> |
| groupByTags                 | <i class="fas fa-times"></i> |
| highest                     | <i class="fas fa-times"></i> |
| holtWintersAberration       | <i class="fas fa-times"></i> |
| holtWintersConfidenceArea   | <i class="fas fa-times"></i> |
| holtWintersConfidenceBands  | <i class="fas fa-times"></i> |
| holtWintersForecast         | <i class="fas fa-times"></i> |
| identity                    | <i class="fas fa-times"></i> |
| integralByInterval          | <i class="fas fa-times"></i> |
| isNonNull                   | <i class="fas fa-times"></i> |
| legendValue                 | <i class="fas fa-times"></i> |
| lineWidth                   | <i class="fas fa-times"></i> |
| linearRegression            | <i class="fas fa-times"></i> |
| linearRegressionAnalysis    | <i class="fas fa-times"></i> |
| lowest                      | <i class="fas fa-times"></i> |
| mapSeries                   | <i class="fas fa-times"></i> |
| mostDeviant                 | <i class="fas fa-times"></i> |
| movingAverage               | <i class="fas fa-times"></i> |
| movingMax                   | <i class="fas fa-times"></i> |
| movingMedian                | <i class="fas fa-times"></i> |
| movingMin                   | <i class="fas fa-times"></i> |
| movingSum                   | <i class="fas fa-times"></i> |
| movingWindow                | <i class="fas fa-times"></i> |
| nPercentile                 | <i class="fas fa-times"></i> |
| nonNegativeDerivative       | <i class="fas fa-times"></i> |
| offsetToZero                | <i class="fas fa-times"></i> |
| percentileOfSeries          | <i class="fas fa-times"></i> |
| pieAverage                  | <i class="fas fa-times"></i> |
| pieMaximum                  | <i class="fas fa-times"></i> |
| pieMinimum                  | <i class="fas fa-times"></i> |
| powSeries                   | <i class="fas fa-times"></i> |
| reduceSeries                | <i class="fas fa-times"></i> |
| removeAbovePercentile       | <i class="fas fa-times"></i> |
| removeBelowPercentile       | <i class="fas fa-times"></i> |
| removeBetweenPercentile     | <i class="fas fa-times"></i> |
| roundFunction               | <i class="fas fa-times"></i> |
| secondYAxis                 | <i class="fas fa-times"></i> |
| setXFilesFactor             | <i class="fas fa-times"></i> |
| smartSummarize              | <i class="fas fa-times"></i> |
| sortBy                      | <i class="fas fa-times"></i> |
| stacked                     | <i class="fas fa-times"></i> |
| stddev                      | <i class="fas fa-times"></i> |
| timeStack                   | <i class="fas fa-times"></i> |
| useSeriesAbove              | <i class="fas fa-times"></i> |
| verticalLine                | <i class="fas fa-times"></i> |
| weightedAverage             | <i class="fas fa-times"></i> |

### Graphite example queries

Here, you will find a valid query example.

For example this request will add 2 `os.cpu` series from host 1 and host 2.

```sh
curl 'https://u:READ_TOKEN:@graphite.REGION.metrics.ovh.net/render?target=sumSeries("os.cpu;host=1", "os.cpu;host=1")'
```

#### Grafana

When you are using [Graphite tags](https://graphite.readthedocs.io/en/latest/tags.html) with Grafana, you should put between double `"` your time series name with tags in order to work with Metrics Data Platform.

For example this request will add 2 `os.cpu` series from host 1 and host 2.

```sh
curl 'https://u:READ_TOKEN:@graphite.REGION.metrics.ovh.net/render?target=sumSeries("os.cpu;host=1", "os.cpu;host=1")'
```

This case appears when you are using functions on Grafana. If you want to discover how works Grafana's Graphite plugin, please take a look [here](http://docs.grafana.org/features/datasources/graphite/).

## Go further

- Documentation: [Guides](../product.en-gb.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/c/platform/data-platforms){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
- Gitter: [Gitter](https://gitter.im/ovh/metrics)