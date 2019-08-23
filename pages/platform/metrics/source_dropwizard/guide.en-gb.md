---
title: Configure Dropwizard Metrics
slug: source-dropwizard
excerpt: Configure Dropwizard for Metrics Data Platform
section: Source
order: 3
hidden: true
---
**Last updated 15th May, 2018**

## Objective

Dropwizard Metrics is a framework to capture JVM/application-level metrics. In this guide, you will learn how to configure it for Metrics Data Platform.

## Requirements

- a valid Metrics account.
- a UNIX/Linux machine

## Instructions

### What is Dropwizard Metrics

Metrics is an instrumenting Java library which gives you unparalleled insight into what your code does in production.

Metrics provides a powerful toolkit of ways to measure the behavior of critical components in your production environment.

Go to the [documentation](http://metrics.dropwizard.io/4.0.0/index.html){.external} to get started with this library.


#### Setting Up Maven

You need the metrics-core library as a dependency:

```pre
<dependencies>
    <dependency>
        <groupId>io.dropwizard.metrics</groupId>
        <artifactId>metrics-core</artifactId>
        <version>${metrics.version}</version>
    </dependency>
</dependencies>
```

With modules for common libraries like Jetty, Logback, Log4j, Apache HttpClient, Ehcache, JDBI, Jersey and reporting backends like Graphite, Metrics provides you with full-stack visibility.

#### Meters

A meter measures the rate of events over time (e.g., “requests per second”). In addition to the mean rate, meters also track 1-, 5-, and 15-minute moving averages.

```java
private final MetricRegistry metrics = new MetricRegistry();
private final Meter requests = metrics.meter("requests");

public void handleRequest(Request request, Response response) {
    requests.mark();
    // etc
}
```

This meter will measure the rate of requests in requests per second.

#### Add a reporter

Dropwizard Metrics doesn't come with reporters. You would have to choose a reporter from the [Third party libraries](http://metrics.dropwizard.io/4.0.0/manual/third-party.html){.external}.

## Going further

You can exchange with our community of users on [https://community.ovh.com](https://community.ovh.com){.external}.