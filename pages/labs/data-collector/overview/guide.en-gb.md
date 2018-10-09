---
title: Overview of OVH Data Collector
excerpt: Let's get an insight of what Data Collector is.
section: Getting started
order: 1
---

## What is OVH Data Collector ?

OVH Data Collector is an easy and ready-to-use solution for managing your legacy data without changing its infrastructure. You can feed your new infrastructure with data from sources such as xls files, SQL databases or directly from APIs.  

You can process data no matter the backend it comes from, and feed any application with changes that remotely happened on data: everything is synchronized.

OVH Data Collector is a cloud-hosted agent which can scale to optimize resources usage and can be remotely controlled. It supports any new source or sink connectors with its plugin-based structure.

- **Performance** : Data collector is only limited by network and sources' speed
- **Synchonization**
- **Failure tolerance** : if something wrong happens, it restarts from the last collected data
- All data transfers can be **encrypted**
- **Data governance** : choose or ignore the data you need
- **Simplicity**: deployed on OVH Cloud and supports full remote control

![schema](images/lookatch-agent.jpg)


## Technical View :

- *300 000 Events/s* in "Query" Mode
- *~ 40 000 Events/s* in "Change data capture" Mode
- Containerized agents based on *Mesos*
- No JVM needed, developed in *Go*
- Data Collector remotely controlled by API
- Supports *multiple types of sources and sinks*
- *Kafka topic provided* with Data Collector


## How to order a Data Collector ?

To order your OVH Data Collector, please fill the form [here](https://labs.ovh.com/ovh-data-collector).  
We will then get in touch to see what your needs are.
