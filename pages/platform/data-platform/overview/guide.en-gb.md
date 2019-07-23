---
title: Overview
slug: analytics-overview
excerpt: Overview of OVH Analytics Data Platform
section: Getting started
order: 1
---

## Overview of OVH Analytics Data Platform

OVH Analytics Data Platform provides a one-click pre-configured Hadoop stack designed
to store and process high volumes of data across OVH Public Cloud.

Deploying a big data stack can be cumbersome and time consuming. With OVH Analytics Data Platform get your fully working big data stack ready to use in an hour.

Analytics data platform is based on [a standard open source Hadoop distribution](https://hortonworks.com/products/data-platforms/hdp/),
it namely includes:

- [HDFS](https://hortonworks.com/apache/hdfs/) the distributed filesystem of Hadoop ecosystem
- [Hive](https://hortonworks.com/apache/hive/) a SQL engine running on top of HDFS
- [HBase](https://hortonworks.com/apache/hbase/) a distributed columnar storage
- [Kafka](https://hortonworks.com/apache/kafka/) the famous messaging queue system
- [Spark](https://hortonworks.com/apache/spark/) a complete data processor handling ETL as much as machine learning

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
directly using **SSH**.

### Isolated

Kerberos authentication is enabled out of the box on all OVH Analytics
clusters. You can easily manage all the cluster users via a
**pre-installed identity manager** and web interface. Access control and
fine-grained auditing is made possible by the integrated **Apache
Ranger** service.

Your OVH Analytics cluster benefits from **OVH vRack** technology,
isolating all instances from inbound internet access inside a private
network. External access is only possible through an authenticated
**HTTPS Apache Knox** gateway.

### Open-source and reversibility

Forget about vendor-lock, OVH Analytics is based on a fully
open-source data platform. It is meant to stay accessible and operable with standard big data tools.

You can delete your cluster anytime, should it be hours or months.

[Learn more about Open Cloud Foundation](https://open-cloud-foundation.org/)

## Technical considerations

![Generic schema of your cluster](images/analytics_schema.png)

Hadoop services are installed on **workers and masters nodes**. We
provide a **network gateway** and a **bastion** in order to make
services accessible from the outside world. There are 2 services nodes
for: Identity Management services (Kerberos and LDAP) and a database backend
(Apache Ambari and Hive metastore).
5 utility nodes

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
           
