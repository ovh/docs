---
title: 'Use Prometheus'
slug: protocol-prometheus
excerpt: 'Get an overview on how to use Prometheus for Metrics'
section: Protocol
order: 5
---

**Last updated 15th May, 2018**

## Objective

Prometheus is another open-source monitoring system that takes its root as a clone of Borgmon from Google. In this guide, you will learn how to use Prometheus protocol with Metrics.

## Requirements

- a valid OVH Metrics account.

## Instructions

### Compatibility

| API    | Method | Supported |
|--------|--------|-----------|
| /api/v1/query | GET   |  <i class="fas fa-check"></i> |
| /api/v1/query_range | GET   |  <i class="fas fa-check"></i> |
| /api/v1/series | GET   |  <i class="fas fa-check"></i> |
| /api/v1/label/&lt;label_name>&gt;/values | GET   |  <i class="fas fa-check"></i> |
| /api/v1/targets | GET   |  <i class="fas fa-times"></i> |
| /api/v1/alertmanagers | GET   |  <i class="fas fa-times"></i> |
| /api/v1/status/* | GET   |  <i class="fas fa-times"></i> |
| /api/v1/admin/* | GET   |  <i class="fas fa-times"></i> |
| /metrics/job/&lt;some_job&gt; | POST  |  <i class="fas fa-check"></i> |

### How to Push data

Prometheus is using the [pull-based approach](https://prometheus.io/docs/introduction/faq/#why-do-you-pull-rather-than-push?){.external} to gather metrics. We developed an open-source tool called `Beamium` in order to scrape metrics in Prometheus format. Please see the [dedicated guide to use Beamium](/docs/usecases/beamium/){.external}.

In case you need to push, we also support the [PushGateway](https://prometheus.io/docs/instrumenting/pushing/){.external} with the following URL:

<pre>https://metrics:[WRITE_TOKEN]@prometheus.[region].metrics.ovh.net</pre>


### How to query data with PromQL

PromQL is a **Query Language** for Prometheus. It offers basic query capabilities, like OpenTSDB, plus a way to use operators between two series. All query documentation is available [here](https://prometheus.io/docs/prometheus/latest/querying/basics/){.external}

For example to retrieve your data, you can simply execute the following HTTP request using cURL.

```sh
curl 'https://u:READ_TOKEN@prometheus.REGION.metrics.ovh.net/api/v1/query_range?query=SERIES_NAME\{LABEL0_KEY="LABEL0_VALUE",LABEL1_KEY="LABEL1_VALUE"\}&start=1533127072.115&end=1533127472.115&step=2m'
```

where:

* READ_TOKEN is your read token available on your OVH Metrics account
* SERIES_NAME is the series name to retrieve. It can be for example **os.cpu**
* LABEL0_KEY and LABEL1_KEY are specific labels that the series must have with
* LABEL0_KEY values is LABEL0_VALUE and LABEL1_KEY value is LABEL1_VALUE.

### PromQL valid operators

#### Binary operators

A few binary arithmetic operators exists in PromQL and can be used on the Metrics platform:

| Operator | Name | Supported |
|----------|------|-----------|
| + | addition | <i class="fas fa-check"></i> |
| - | subtraction | <i class="fas fa-check"></i> |
| * | multiplication | <i class="fas fa-check"></i> |
| / | division | <i class="fas fa-check"></i> |
| % | modulo | <i class="fas fa-check"></i> |
| ^ | power/exponentiation | <i class="fas fa-check"></i> |
| == | equal | <i class="fas fa-check"></i> |
| != | not-equal | <i class="fas fa-check"></i> |
| > | greater-than | <i class="fas fa-check"></i> |
| < | less-than | <i class="fas fa-check"></i> |
| >= | greater-or-equal | <i class="fas fa-check"></i> |
| <= | less-or-equal | <i class="fas fa-check"></i> |
| and | intersection | <i class="fas fa-check"></i> |
| or | union | <i class="fas fa-check"></i> |
| unless | complement | <i class="fas fa-check"></i> |

> **Modulo** (%) and **exponentiation** (^) are not yet supported accross several metrics. They both can still be applied between metrics and scalar value.

For all operators, the same precedance applies than in promQL.

#### Vector matching

PromQL has it's own method to manage how to match left and right entry of an operator. The valid vector matching on the Metrics platform are:

| Operator | Params | Supported |
|----------|------|-----------|
| ignoring | &lt;label list&gt; | <i class="fas fa-check"></i> |
| on | &lt;label list&gt; | <i class="fas fa-check"></i> |
| group_left | &lt;label list&gt; | <i class="fas fa-check"></i> |
| group_right | &lt;label list&gt; | <i class="fas fa-check"></i> |

> Only one keyword between **on** and **ignoring** can be applied to an operator. The same applies to **group_left** or **group_right**

#### Aggregation operators

The valid aggregation operators on the Metrics platform are:

| Aggregation pperator | Details | Supported |
|----------|------|-----------|
| sum | calculate sum over dimensions | <i class="fas fa-check"></i> |
| min | select minimum over dimensions | <i class="fas fa-check"></i> |
| max | select maximum over dimensions | <i class="fas fa-check"></i> |
| stddev | calculate the average over dimensions | <i class="fas fa-check"></i> |
| stdvar | calculate population standard deviation over dimensions | <i class="fas fa-check"></i> |
| count | count number of elements in the vector | <i class="fas fa-check"></i> |
| count_values | count number of elements with the same value | <i class="fas fa-check"></i> |
| bottomk | smallest k elements by sample value | <i class="fas fa-check"></i> |
| topk | largest k elements by sample value | <i class="fas fa-check"></i> |
| quantile | calculate φ-quantile (0 ≤ φ ≤ 1) over dimensions | <i class="fas fa-check"></i> |

> The aggregation operator **count_values** expects a label string key for each new metrics created (per different values).

#### Aggregation operators clauses

PromQL has it's own method to manage how to match left and right entry of an operator. The valid vector matching on the Metrics platform are:

| Operator | Params | Supported |
|----------|------|-----------|
| without | &lt;label list&gt; | <i class="fas fa-check"></i> |
| by | &lt;label list&gt; | <i class="fas fa-check"></i> |


> Only one keyword between **without** and **by** can be applied to an aggregation operator.

#### Supported PromQL functions

The valid promQL functions on the Metrics platform are:

| Function | Params | Supported |
|----------|------|-----------|
| abs | instant-vector | <i class="fas fa-check"></i> |
| absent | instant-vector | <i class="fas fa-check"></i> |
| ceil | instant-vector | <i class="fas fa-check"></i> |
| changes | range-vector | <i class="fas fa-check"></i> |
| clamp_max | instant-vector, scalar | <i class="fas fa-check"></i> |
| clamp_min | instant-vector, scalar | <i class="fas fa-check"></i> |
| count_scalar | instant-vector | <i class="fas fa-check"></i> |
| day_of_month | instant-vector | <i class="fas fa-check"></i> |
| day_of_week | instant-vector | <i class="fas fa-check"></i> |
| days_in_month | instant-vector | <i class="fas fa-check"></i> |
| delta | range-vector | <i class="fas fa-check"></i> |
| deriv | range-vector | <i class="fas fa-times"></i> |
| drop_common_labels | instant-vector | <i class="fas fa-check"></i> |
| exp | instant-vector | <i class="fas fa-check"></i> |
| floor | instant-vector | <i class="fas fa-check"></i> |
| histogram_quantile | float, instant-vector | <i class="fas fa-check"></i> |
| holt_winters | range-vector, scalar, scalar| <i class="fas fa-check"></i> |
| hour | instant-vector | <i class="fas fa-check"></i> |
| idelta | range-vector | <i class="fas fa-check"></i> |
| increase | range-vector | <i class="fas fa-check"></i> |
| irate | range-vector | <i class="fas fa-check"></i> |
| label_join | instant-vector, string,  string, string, string, ... | <i class="fas fa-check"></i> |
| label_replace | instant-vector, string, string, string, string) | <i class="fas fa-check"></i> |
| ln | instant-vector | <i class="fas fa-check"></i> |
| log2 | instant-vector | <i class="fas fa-check"></i> |
| log10 | instant-vector | <i class="fas fa-check"></i> |
| minute | instant-vector | <i class="fas fa-check"></i> |
| month | instant-vector | <i class="fas fa-check"></i> |
| predict_linear | range-vector, scalar | <i class="fas fa-check"></i> |
| rate | range-vector | <i class="fas fa-check"></i> |
| resets | range-vector | <i class="fas fa-check"></i> |
| round | instant-vector, (optional) scalar | <i class="fas fa-check"></i> |
| scalar | instant-vector | <i class="fas fa-check"></i> |
| sort | instant-vector | <i class="fas fa-check"></i> |
| sort_desc | instant-vector | <i class="fas fa-check"></i> |
| sqrt | instant-vector | <i class="fas fa-check"></i> |
| time | | <i class="fas fa-check"></i> |
| timestamp | instant-vector | <i class="fas fa-check"></i> |
| vector | scalar | <i class="fas fa-check"></i> |
| year | instant-vector | <i class="fas fa-check"></i> |
| avg_over_time | range-vector | <i class="fas fa-check"></i> |
| min_over_time | range-vector | <i class="fas fa-check"></i> |
| max_over_time | range-vector | <i class="fas fa-check"></i> |
| sum_over_time | range-vector | <i class="fas fa-check"></i> |
| count_over_time | range-vector | <i class="fas fa-check"></i> |
| quantile_over_time | range-vector | <i class="fas fa-check"></i> |
| stddev_over_time | range-vector | <i class="fas fa-check"></i> |
| stdvar_over_time | range-vector | <i class="fas fa-check"></i> |

#### PromQL examples queries

Here, you will find two valid queries examples.

For example this request will add 2 os.cpu series from host 1 and host 2 (we just replace the + character per it's URL encoded value %2B). 

```sh
curl 'https://u:READ_TOKEN@prometheus.REGION.metrics.ovh.net/api/v1/query_range?query=os.cpu\{host="1",cpu="1"\}%2Bos.cpu\{host="2",cpu="2"\}&start=1533127072.115&end=1533127472.115&step=2m'
```

Our second example here will compute the rate of the os.cpu metric for the host 1 and all cpu.

```sh
curl 'https://u:READ_TOKEN@prometheus.REGION.metrics.ovh.net/api/v1/query_range?query=sum(rate(os.cpu\{host="1"\}\[1m\]))&start=1533127072.115&end=1533127472.115&step=2m'
```
To select a Time-series stored in Metrics with unvalid Prometheus character as "-" you can also use the PromQL `{__name__="http-requests-total"}` syntax as Time series matcher expression.  Matchers other than = (!=, =~, !~) may also be used.

## Go further

You can learn how to configure a Grafana Prometheus source by following [this guide](../start-grafana).

Join our community of users on <https://community.ovh.com/en/>.