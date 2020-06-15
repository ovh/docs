---
title: FAQ
excerpt: 'Data Processing FAQ'
slug:  data-processing-faq 
section: Getting started
order: 3
---

**Last updated 16<sup>th</sup> June, 2020**

## Objective

Here are the most frequently asked questions about OVHcloud Data Processing solution.

### Does OVHcloud offer products for collecting and analyzing large amounts of data, the big data?

Yes, OVHcloud offers turnkey Big Data Apache Hadoop clusters and Data Processing tools in the Public Cloud, and Big Data clusters in the Private Cloud.

To summarize :

A big data cluster allows massive data storage and is equipped with a suite of tools (Apache Hadoop) to extract useful information. 
<br>A big data cluster often has fixed resources (power and storage). They are for example very useful for Business Intelligence (financial reporting etc).
<br>Data Processing (Apache Spark), is often included in a big data cluster. But with technical limitations in terms of physical resources. For example, it is impossible to run parallel computing tasks. 
<br>OVhcloud Data Processing solves this problem by offering you Data Processing "as a Service". 
<br>Extracting text from videos, mathematical calculations, cleaning tabular data, ... launch dozens of tasks in parallel, OVHcloud takes care of the infrastructure


### What is the OVHcloud Data Processing solution and for what purposes?

OVHcloud Data Processing enables massive volumes of data to be processed, cleaned, enriched, and machine learned by automatically analyzing them.
There are many uses for this type of solution, but it is most often used to process raw data (mainly text or tabular data) in order to produce "cleaned" data that can be easily used for big data and/or artificial intelligence.


### Who can use Data processing? Is it necessary to be a data expert?

No matter your level of expertise in Python or Java programming, the Data Processing solution is fully usable. To facilitate its use, OVHcloud provides you with the Apache Spark framework and tutorials directly accessible in [the guides](../).


### From which countries can customers order the Data Processing solution?

They can order Data Processing via [OVHcloud EU or CA Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}. 
<br>However, the product is not available via the OVHcloud US Control Panel.


### From which regions is the Data processing solution available?

For the moment, only the following region is currently offered :

EU WEST EN 1: automatic deployment of servers from Gravelines (GRA).

Other regions are currently coming up because OVHcloud wants to deploy Data Processing in all Public Cloud regions.


### How can I size my cluster?

To size your cluster, you can do it before you start a job. To do so, you need at least one "driver" as well as "workers".

For each node, you can define the amount of vCores and Memory (RAM).


### What is the supported Apache spark version?

For more information, we invite you to read [the following guide](../capabilities/).


### What kind of languages or program are supported by Data Processing?

For more information, we invite you to read [the following guide](../capabilities/).


### Does OVHcloud plan other data processing tools?

In the short term, there are no plans for OVHcloud to deploy a new tool.


### What are the the Data Processing product limitations?

For more information, we invite you to read [the following guide](../capabilities/).


### How to launch a job with the Data Processing solution?

It is possible to launch a job via Control Panel, API and CLI. For more information, we invite you to read [our documentation](../).


### Where to put the data to process?

Data processing from OVHcloud is compliant with Object Storage via Openstack Swift or AWS S3 protocols.

We recommend the AWS S3 protocol.

Data can be hosted on an OVHcloud server or on another cloud provider's server (AWS S3 compliant).


### What about billing?

Data processing is charged by the minute. Also, you pay the amount of "power" used, for each minute.

We have pricing per GB of RAM and per vCore.

Example : you launch a job with 16vCores and 67GB RAM. You job will last 1 hours and 20 minutes

You will pay :

<br>0,xxx euros x vCOREs x 80 minutes
<br>0,yyy euros x GB OF RAM x 80 minutes
<br>if used by the customer (not mandatory) : Object storage prices


### What is included in the Data processing offer?

Setup of cluster, RAM, vCores, Monitoring are all included in the Data processing offer.


### What is not included in the Data processing offer?

Storage and Storage transfer are not included in the Data processing offer.


### What  are the SLA linked to the Data processing offer?

For more information, we invite you to read the terms and conditions of use: 


### How to monitor a cluster?  Is Datadog compatible?

Once your job is started, you can find in your Control Panel an Apache Spark monitoring tool called Spark Web UI.
To access the tool: <https://spark.apache.org/docs/3.0.0-preview/web-ui.html>
Datadog is not compatible for monitoring.


### What are the main advantages of OVHcloud Data Processing?

This new solution is designed to simplify our customers’ lives.

To do this, OVHcloud provides Apache Spark Jobs as a turnkey service. A cluster is deployed for the duration of your task.

No maintenance is required by customers.

OVHcloud builds a cluster, deploys it and monitors it. A great breakthrough, right?

## Go further

To learn more about using Data Processing and how to create a cluster and process your data, we invite you to look at [Data Processing documentation page](../).

You can send your questions, suggestions or feedbacks in our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external} or in our public [Gitter](https://gitter.im/ovh/data-processing){.external}
