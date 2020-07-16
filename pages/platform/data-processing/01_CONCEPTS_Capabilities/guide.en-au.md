---
title: Data Processing Capabilities and Limitations 
slug: capabilities
excerpt: Find out what are the current capabilities and limitations of the OVHcloud Data Processing Platform 
section: Concepts
order: 1
---

**Last updated 06<sup>th</sup> March, 2020**


## Objective 

In this document, we list all the features currently supported by the Data Processing platform. We will also give you a peek at some of our upcoming features.

## Capabilities and known limits

### Processing engine 

- At this moment, OVHcloud Data Processing supports the following engines:

  - Spark 2.4.3 

- It is not possible to interact with Apache Spark cluster via command line.  

### The Apache Spark job in Data Processing is limited to: 

- Minimum 1 and maximum 60 GB of RAM per Executor
- Minimum 1 and maximum 16 Cores of CPU per Executor 
- Maximum 24 hours for the duration of each job 

### Supported languages for Apache Spark code

- Java 8
- Scala 2.12
- Python v2.7+ and v3.4+

### Available ports to public network

- FTP (21)
- HTTP (443, 80, 8443, 8080, 9090)
- Kerberos (88)
- Apache HDFS (8020, 9000)
- Apache Hive (10000, 9083, 10500, 10001, 10501, 50111, 15551, 15004)
- Apache HBase (16000, 8765)
- Apache Solr (8886)
- Apache Pulsar (6650, 6651)
- Apache Kafka (9092, 9093, 6667)
- RabbitMQ (5672)
- MySQL (3306)
- PostgreSQL (5432)
- Microsoft SQL Server (1433)
- MongoDB (27017, 27018, 27019)

### OVHcloud vRack

- Data Processing can not use or access OVHcloud vRack. 

### Available regions 

- GRA (Gravelines in France) 

### Storage

- Before submitting a job, you will need to upload your job into your OVHcloud Object Storage account. 
- To process data, your data can be stored in OVHcloud Object Storage or any other cloud storage or connected storage that is accessible through public internet.

### Resources quotas 

We distinguish three types of resources: CPU cores, RAM and Instances. 

You have a limited amount of those resources that you can use simultaneously. If you have a job using all of your quotas, you will not be able to submit other jobs until it is completed. The maximum amount of each resource you can use simultaneously is fetched from your cloud project quotas. Only the maximum quotas are shared between Data Processing and your cloud project. If you run out of resource on your cloud project, it will not impact your ability to submit a job on Data Processing. 

If you would like to increase the quotas for Data Processing you will need to increase your cloud project quotas. Please visit [Increasing Public Cloud quota](../../public-cloud/increase-public-cloud-quota/) for more details on the subject. 

## Planned features

- Ability to select Spark version, starting from 2.4.3 
- Availability in different OVHcloud regions 

## Feedback

Please send us your questions, feedback and suggestions to improve the service: 

- On OVHcloud community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/)
- On our public [Gitter](https://gitter.im/ovh/data-processing)
