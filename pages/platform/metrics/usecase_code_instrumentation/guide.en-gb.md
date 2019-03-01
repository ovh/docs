---
title: Code Instrumentation &#58; Monitor an App
slug: usecase-apm
excerpt: Monitor your apps through code instrumentation
section: Use cases
order: 2
---

**Last updated 15th May, 2018**

> [!warning]
>
> This page is a Work in Progress.
> 

## Why instrumenting your app?

## Monitor your applications

Sometimes, server monitoring is not enough. You may need deep insights about your application. Questions like **"How is my latency doing since the last upgrade?"** are keys to provide a fast and reliable service, especially when you're using **micro-services**, as you're multiplying points of failures. **Every library, subsystem and service should have at least a few metrics** to give you a rough idea of how it is performing.

There's many libraries to help you create metrics from the runtime of your application. In most of the languages, you'll be able to find a client library to exposes them. Prometheus has a ["client libraries"](https://prometheus.io/docs/instrumenting/clientlibs/){.external} list compatible with Metrics, as we support Prometheus thanks to ["Beamium"](https://github.com/ovh/beamium){.external}, our opensource Warp 10™ & Prometheus metrics scraper.


## Monitor your third-party applications

Now that you are monitoring both your servers and application, you can also monitor **third-party applications** like HAProxy or PostgreSQL. There are a number of libraries and servers which help in **exporting existing metrics from third-party systems as metrics**. This is useful for cases where it is not feasible to instrument a given system. You'll be able to find multiples exporters for each supported protocols. We recommend the list provided by ["Prometheus"](https://prometheus.io/docs/instrumenting/exporters/){.external}.
