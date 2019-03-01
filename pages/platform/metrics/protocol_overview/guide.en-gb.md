---
title: 'Overview of supported protocols'
slug: protocol-overview
excerpt: 'Get an overview on supported protocols for Metrics'
section: Protocol
order: 1
---

**Last updated 15th May, 2018**

## Choose yours, no vendor lock-in!

> [!primary]
> 
> Metrics is protocol agnostic, it means that you can push your data with OpenTSDB, and query it with Warp 10™ or vice versa.
>
> Metrics doesn't enforce you to a proprietary protocol. Instead, we believe the plurality of existing protocols from Open Source solutions can be used to achieve Pushing and Querying the platform.
>

### Supported protocols

Each protocol provides different capabilities. Some will be easier than others but may have less features. We've tried to summary them with this simple table :

|Protocol|Push|Query|Protocol documentation|Features|Corresponding Open Source project|
|---|---|---|---|---|---|
|InfluxDB|<i class="fas fa-check"></i>|<i class="fas fa-times"></i>|[Metrics Influx](../protocol-influxdb)|<i class="fas fa-star"></i>|[https://github.com/influxdata/influxdb](https://github.com/influxdata/influxdb){.external}|
|OpenTSDB|<i class="fas fa-check"></i>|<i class="fas fa-check"></i>|[Metrics OpenTSDB](../protocol-opentsdb)|<i class="fas fa-star"><i class="fas fa-star">|[http://opentsdb.net/](http://opentsdb.net/){.external}|
|Graphite|<i class="fas fa-check"></i>|<i class="fas fa-check"></i>|[Metrics Graphite](../protocol-graphite)|<i class="fas fa-star"><i class="fas fa-star"></i>|[http://graphiteapp.org/](http://graphiteapp.org/){.external}|
|Metrics2.0|<i class="fas fa-check"></i>|<i class="fas fa-times"></i>|[Metrics 2.0 spec](../protocol-opentsdb)|<i class="fas fa-star"><i class="fas fa-star">|[http://metrics20.org/](http://metrics20.org/){.external}|
|Prometheus|<i class="fas fa-check"></i>|<i class="fas fa-check"></i>|[Metrics Prometheus](../protocol-prometheus)|<i class="fas fa-star"></i><i class="fas fa-star"></i>|[https://prometheus.io/](https://prometheus.io/){.external}|
|SQL|<i class="fas fa-times"></i>|<i class="fas fa-times"></i>|Metrics SQL - Not implemented yet| | |
|Warp 10™|<i class="fas fa-check"></i>|<i class="fas fa-check"></i>|[Metrics Warp 10™](../protocol-warp10)|<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>|[https://warp10.io/](https://warp10.io/){.external}|

Most of the protocols don't include **authentification**, so **you need to add the tokens in the Basic Auth field.**

> [!primary]
> 
> If you're wondering which protocol to choose, here is a simple guideline :
>
> - You want to push json? -> `OpenTSDB`
> - You want to instrument your code? -> `Prometheus SDK` & `Beamium`
> - You want powerful analytics? -> `Warp 10™` & `WarpScript™`
> - You want BI tools integration like Tableau, Power BI, Qlik? -> `SQL`
>

### Authentification and endpoints
Metrics has builtin security to secure your data. In the Start section you've learnt where to get them from the manager. We've generated a default pair of **tokens** :

- a **READ** token to Query
- a **WRITE** token to Push Data

Except for Warp 10™ (where it's provided as a specific Header for push and in the DSL payload for queries), this token will be used as the password in the [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication){.external}.

Most of the protocols are available through HTTPS endpoints. Here's the logic for pushing:

**`https://token:[write token]@[protocol].[region].metrics.ovh.net`**

For example :  https://token:cersX8.P5X_4Zv...LEXV_hoXuKcn_BRp2eqp7@opentsdb.gra1.metrics.ovh.net

The user in the basic authenfication is discarded.
