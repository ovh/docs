---
title: Overview of Metrics
slug: overview
excerpt: Discover the Metrics Data Platform and why you need it
section: Introduction
---


## What is Metrics Data Platform?
The Metrics Data Platform is as a fully flexible and secure solution specially designed to **store and analyze high volume of time series data**.

Time Series uses cases are widely spread from IoT to Monitoring. Generally, highly scalable databases are used to support volumetry. For example, the **300,000 Airbus A380 sensors on board can generate an average of 16 TB of data per flight**. On a smaller scale, **a single sensor that measures every second generates 31.5 million values per year**.

Handling Time Series at scale is difficult, because you're running into advanced distributed systems issues, such as:

- **ingestion scalability**, ie. how to absorb all the datapoints 24/7.
- **query scalability**, ie. how to query in a raisonnable amount of time.
- **delete capability**, ie. how to handle deletes without stopping ingestion and query.

Metrics was built at first with one goal: **Being the goto metrics solution inside OVH**. This includes: monitoring all servers, Cloud instances, other products, and provide KPIs for the internal teams. Following up on this first achievement, we opened the product to our customers so they can benefit from our expertise.

Check our Metrics Data Platform page to discover more about metrics and try our offers among the different options available.

We currently have two product lines : Metircs Cloud and Metrics Live. What are their differences ?

|Metrics Cloud|Metrics Live|
|---|---|
|Metrics Cloud is a a **fully-managed**, **scalable** cloud service for time series data.Key advantages:
- **Native Geo Spacial support**
- **Cutting Edge Analytics capabilities**
- **Protocol Agnostic**, push with OpenTSDB and query with Prometheus (PromQL) or others
- **Open Source ecosystem** for reversibility and ease of integration
- **Smart alerting** with scheduled WarpScripts
- **First class security** with [Macaroons](https://static.googleusercontent.com/media/research.google.com/fr//pubs/archive/41892.pdf){.external} like tokens
- **Hadoop powered scalability**

Choose the offer that suits you best (XXS to XL) depending on your monthly active series and datapoint push frequecy (default : 2dp/min/series)|Metrics Live is the **in-memory** counterpart of Metrics Cloud.Key advantages:
- **Metrics Cloud feature set**,
- **Process extreme large aggregations** and persist only aggregates
- **Auto eviction** for short duration relevant data points
- **Fine grained monitoring with millions of series & high frequency measurements**, forward only long term relevant

Ingested data into Metrics Live can be **automatically forwarded** to Metrics Cloud to combine **atomic availability** with **long term storage**.|


## How to choose between Cloud and Live?
They are bigger chance that what you need is a Metrics Cloud solution. Still you first have to take into consideration the retention of your data (which refers to the length of time you want to keep your data for) and their frequency.

But given your experience or use case, they are corner cases where you could need a Metrics Live solution. You should choose Metrics Live when:

- you need to run **massive aggregations** on hundred of thousands series or more in a second
- you need to view **only the latest data** and **store aggregations** for capacity planning
- you need **atomic availability** to take decision about your data


## Can I combine both Cloud and Live?
Sure! Metrics Live is extensively used inside OVH, however every team needs Metrics Cloud for long term storage, capacity planning purpose, user facing metrics, root cause analysis, late observations, machine learning analysis and deep learning model training.

We provide tools to automatically connect Metrics Live to Metrics Cloud so that you only have to push data to your Metrics Live endpoint. Anyway you could still use a software like Beamium to sink your metrics to two endpoints at the same time.

Metrics has been made for you?

- Continue on the  : [](../intro_beginner/guide.en-gb.md){.ref}.
- Start Step-by-step tour of Metrics  : [](start_order/guide.en-gb.md){.ref}.
- Discover our use cases  : [](guide.en-gb.md){.ref}.