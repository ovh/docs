---
title: Server and Infrastructure monitoring
slug: usecase-monitoring
excerpt: Monitoring guide for your infrastructure from 1 to thousands of hosts
section: Use cases
order: 4
---

**Last updated 15th May, 2018**

> [!warning]
>
> This page is a Work in Progress.
> 

> [!primary]
>
> Monitoring represents most of our customer experience, so we initially wrote a manifesto called "[Metrics - Monitoring Manifesto](https://medium.com/@d33d33/bd089f26af2d#.mdlnskpan){.external}", did you read it?
> 

## Monitoring?

From an historical point of view, timeseries appeared shortly after the creation of the Web, **to help engineers monitor the networks.** It quickly expands to also monitors servers.

Supervision involves indicating and controlling the status of a call, system or network. Supervision solutions **help technical and functional information of the information system**. Since IT has become the backbone of the company, regardless of its sector, the information system is at the center of the different business entities and must function fully and continuously to ensure the efficiency of the company. At all levels, networks, user terminals, **application servers or data are becoming sensitive links that could harm the availability and quality of service or even the proper functioning of the company**.


## Why you should monitor?

Monitoring is one of the pillars of successful infrastructure. It has been called the base of the hierarchy of reliability. Monitoring is a must have for responding to incidents, detecting and debugging systemic problems, planning for the future, and generally understanding your infrastructure.


> [!faq]
>
> Analysis of long-term trend
>> 
>> How fast is my database growing? At what speed my number of active user accounts grows?
>> 
>> 
> The comparison over time
>> 
>> My queries run faster with the new version of my library? Is my site slower than last week?
>> 
>> 
> The Alert
>> 
>> Human intervention seems necessary
>> 
>> 
> Displaying data through dashboards
>> 
>> Displaying data through dashboards. Dashboards help answer basic questions on the service, and in particular the 4 indispensable metrics: latency, traffic, errors and service saturation
>> 
>> 
> The possibility of designing retrospective
>> 
>> Our latency is doubling, what's going on? Supervision is fundamental to performing a stable service. Control enables decision-makers to make decisions on the impacts of application change, but also on the measure alignment of service with business objectives.
>> 
>> 
>

## Monitor your servers

The most basic form of monitoring is monitoring the server. By sending key metrics such as **cpu, ram, disk**, you can watch over the health of your servers. **Does one of my servers has a disk full?**

In fact, Systems like ["Apache mesos"](http://mesos.apache.org/){.external}, ["OpenStack"](https://www.openstack.org/){.external}, ["Kubernetes"](https://kubernetes.io/){.external} and others are heavily relying on time series to handle basic operations like **"what's the status of my virtual machine"**, or **"where should I deploy my container"**.

You can find numerous Open Source exporters to install on your servers, like:

- ["Scollector"](http://bosun.org/scollector/){.external}
- ["Telegraf"](https://github.com/influxdata/telegraf){.external}
- ["Snap"](http://snap-telemetry.io/){.external}
- ["Beamium"](https://github.com/ovh/beamium){.external} and ["Noderig"](https://github.com/ovh/noderig){.external}
- ["StatsD"](https://github.com/etsy/statsd){.external}
- ["Collectd"](https://collectd.org/){.external}
