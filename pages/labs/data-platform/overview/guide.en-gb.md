---
title: Overview
excerpt: 'overview of OVH Analytics Data Platform'
section: 'Getting started'
order: 1
---

## Overview of OVH Analytics Data Platform

OVH Analytics Data Platform provides a one-click pre-configured Hadoop stack designed
to store and process high volumes of data across OVH Public Cloud
infrastructure.

Deploy a big data stack is usually tricky and takes a lot of time. OVH Analytics Data Platform
reduces the setup cost of such platform. Indeed, in only 1 hour, get your fully working big data stack
ready to use, and start to use it.

As we consider open source software like a durable way of development, we chose to base all our service
on open source software. Analytics data platform is based on [a standard open source Hadoop distribution](https://hortonworks.com/products/data-platforms/hdp/),
it namely includes:

- [HDFS](https://hortonworks.com/apache/hdfs/) the distributed filesystem of Hadoop ecosystem
- [Hive](https://hortonworks.com/apache/hive/) a SQL engine running on top of HDFS
- [HBase](https://hortonworks.com/apache/hbase/) a distributed columnar storage
- [Kafka](https://hortonworks.com/apache/kafka/) the famous messaging queue system
- [Spark](https://hortonworks.com/apache/spark/) a complete data processor handling ETL as much as machine learning
- [Presto](https://prestodb.io/) (soon).

With OVH Analytics, you can handle a wide range of use cases including
**business intelligence**, **IoT**, **marketing analysis**, **AI**, **data cleaning**, and
**predictive maintenance**.

### One-click big data platform

Once ordered, your cluster is provisioned in less than 1 hour. OVH
Analytics takes care of the whole Hadoop configuration: you are all
set up to start working straight away.

### Customizable

You have full control over your cluster and are given root access to
services and instances. You can monitor, install new services and
operate your cluster from your web browser using **Apache Ambari** or
directly using an integrated **Web SSH terminal**.

### Isolated

Kerberos authentication is enabled out of the box on all OVH Analytics
clusters. You can easily manage all the cluster users via a
**pre-installed LDAP directory** and web interface. Access control and
fine-grained auditing is made possible by the integrated **Apache
Ranger** service.

Your OVH Analytics cluster benefits from **OVH vRack** technology,
isolating all instances from inbound internet access inside a private
network. External access is only possible through an authenticated
**HTTPS Apache Knox** gateway.

### Open-source and reversibility

Forget about vendor-lock, OVH Analytics is based on a fully
open-source data platform. It is meant to stay accessible and operable with standard big data tools.

You can delete your cluster after use whenever you want, even just after
a few hours.

[Learn more about Open Cloud Foundation](https://open-cloud-foundation.org/>)

## Technical considerations

![Generic schema of your cluster](images/analytics_schema.png)

Hadoop services are installed on **Workers and Masters nodes**. We
provide a **network gateway** and a **bastion** in order to make
services accessible from the outside world. There are 3 services nodes
for: Identity Management services (Kerberos and LDAP), [Apache Guacamole
WebSSH](https://guacamole.apache.org/) and a database backend
(Apache Ambari and Hive metastore).

## Available services

The table below lists services available on your cluster after its
creation.

| Dataflow Services   | Security Services   | Storage Services | Monitoring Services  | Scheduling Services  | Messaging Services  | Processing Services
----------------------|---------------------|------------------|----------------------|----------------------|---------------------|---------------------
| Sqoop               | Ranger              | HDFS             | Ambari Metrics       | Oozie                | Kafka               | YARN        
| Flume               | Kerberos            | HBase            | Logs Search          |                      |                     | Map Reduce 2
|                     | Knox                |                  | Ambari Infra         |                      |                     | Tez
|                     | FreeIPA idM         |                  |                      |                      |                     | Pig
|                     |                     |                  |                      |                      |                     | Slider
|                     |                     |                  |                      |                      |                     | Hive   
|                     |                     |                  |                      |                      |                     | Spark  
|                     |                     |                  |                      |                      |                     | Presto
