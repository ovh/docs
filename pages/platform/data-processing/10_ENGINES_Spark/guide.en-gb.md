---
title: Apache Spark Overview
slug: overview-spark
excerpt: Introduction to Apache Spark 
section: Supported computing engines
order: 0
---

**Last updated 06<sup>th</sup> March, 2020**

## What is Apache Spark?

[Apache Spark](http://spark.apache.org/) is an open-source distributed, general-purpose cluster-computing framework that is much faster than the previous cluster computing framework, Hadoop MapReduce, thanks to features like in-memory processing and lazy evaluation. 

Apache Spark is the leading platform for large-scale SQL, batch processing, stream processing and machine learning, with an easy-to-use API, and for coding in Spark, you have the options of using different programming languages, including Java, Scala, Python, R and SQL. It can be run locally in a single machine or in a cluster of computers to distribute its tasks.

## How Apache Spark works

Apache Spark stores data in RDD (Resilient Distributed Datasets), which is an immutable distributed collection of objects, and then divides it into different logical partitions, so it can process each part in parallel, in different nodes of the cluster. Task parallelism and in-memory computing are the key to being ultra-fast in Apache Spark. 

Apache Spark creates a core process called driver program in master node and several executors in worker nodes and then driver program will distribute the processing task among executors to be executed in parallel. The number of the workers can be scaled up and down to optimise the workload based on available resources and computation nodes. 

## Apache Spark Components

Different components of Apache Spark are:

- Apache Spark Core, which provides in-memory computing, and forms the basis of other components.
- Spark SQL, which provides structured and semi-structured data processing.
- Spark Streaming, which performs streaming analysis using RDD (Resilient Distributed Datasets) transformation.
- MLlib (Machine Learning Library), which is a distributed machine learning framework above Spark.
- GraphX, which is a distributed graph processing framework on top of Spark.

## Some use cases of Apache Spark?

- With Apache Spark stream processing you can analyse real-time data by consuming data of other streams like Apache Kafka and write the results in your data storage. 
- Netflix uses Apache Spark as its recommendation engine to provide better recommendation to its members. 
- Uber uses Apache Spark to create an ETL pipeline over the huge data it receives everyday from its mobile users to convert raw data into structured data and run different kinds of queries and analysis. 
- Pinterest uses Apache Spark to analyse user engagement and give a better recommendations while they are navigating in their platform in real-time. 

## Feedback

Please send us your questions, feedback and suggestions to improve the service: 

- On OVHcloud community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/)
- On our public [Gitter](https://gitter.im/ovh/data-processing)
