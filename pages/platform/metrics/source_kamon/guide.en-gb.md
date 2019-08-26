---
title: Configure Kamon
slug: source-kamon
excerpt: Configure Kamon for Metrics Data Platform
section: Source
order: 4
---

**Last updated 23 August, 2019**

## Objective

[Kamon](https://kamon.io/){.external} is a monitoring toolkit for applications running on the JVM. In this guide, you will learn how to configure it for Metrics Data Platform.

## Requirements

- a valid Metrics account.
- a UNIX/Linux machine

## Instructions

### What is Kamon

Kamon is a monitoring toolkit for applications running on the JVM.

It gives you Metrics, Tracing and Context Propagation APIs without locking you to any specific vendor.

All Kamon APIs are completely decoupled from the protocol that can be used to report data, be it StatsD, Prometheus, Zipkin, Jaeger or any other supported reporter. With Kamon you instrument your application once and report anywhere you want.

Kamon provides you a simple way to create :

- Counters : Count requests, errors, cache misses, etc.
- Gauges : Track disk usage, number of loaded classes, configuration settings, etc.
- Histograms : Record the distribution of values within a configurable range and precision. Typically used for recording latency, message sizes and so on.
- Timers : A latency specialized histograms
- Range Samplers : Used to track variables that increase and decrease very quickly, the most notable use case being tracking the number of concurrent requests or the number of elements in a queue.

### Installation and Startup

Add the kamon dependencies to your build:

Example for SBT :

```s
  libraryDependencies += "io.kamon" %% "kamon-core" % "1.1.0"

  // Optional Dependencies
  libraryDependencies += "io.kamon" %% "kamon-prometheus" % "1.0.0"
```

for Gradle :

```s
dependencies {
  compile 'io.kamon:kamon-core_2.12:1.1.0'
  compile 'io.kamon:kamon-prometheus_2.12:1.0.0'
}
```

or for Maven :

```xml
<dependencies>
  <dependency>
    <groupId>io.kamon</groupId>
    <artifactId>kamon-core_2.12</artifactId>
    <version>1.1.0</version>
  </dependency>

  <!-- Optional Dependencies -->
  <dependency>
    <groupId>io.kamon</groupId>
    <artifactId>kamon-prometheus_2.12</artifactId>
    <version>1.0.0</version>
  </dependency>
</dependencies>
```

### Record Metrics in your App

```java
val myHistogram = Kamon.histogram("my.histogram")
val myCounter = Kamon.counter("my.counter")
val myTaggedCounter = Kamon.counter("my.tagged.counter").refine("env" -> "test")

myHistogram.record(42)
myHistogram.record(50)
myCounter.increment()
myTaggedCounter.increment()
```

### Report your Data

Just add a reporter like this :

```java
Kamon.addReporter(new PrometheusReporter())
```

### Continue with Kamon

Go to the [documentation](http://kamon.io){.external} to get started with this library.

## Go further

- Documentation: [Guides](../product.en-gb.md){.ref}
- Vizualize your data: [https://grafana.metrics.ovh.net/login](https://grafana.metrics.ovh.net/login){.external}
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27metrics-free-trial~configuration~%28~%28label~%27region~values~%28~%27gra1%29%29%29~option~%28~%29~quantity~1~productId~%27metrics%29%29&paymentMeanRequired=0){.external}
