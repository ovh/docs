---
title: Data Processing Overview
slug: overview
excerpt: Introduction to OVHcloud Data Processing Platform
section: Concepts
order: 0
---

**Last updated 06<sup>th</sup> March, 2020**

## What is Data Processing?

With Data Processing, you can run your processing job over the cloud, in a fast, easy and cost-efficient way. Everything is managed and secured by OVHcloud and you just need to define how much resources you would like. 

Your job will be processed in isolated instances and the job logs will be stored in your private cloud storage. You will be charged only for the resources you request and for the duration of your job execution, with per-minute billing. Currently we use only Apache Spark as our processing engine and we will add more engines in future. 


![OVHcloud Data Processing](images/DataProcessingIntroduction4.jpeg){.thumbnail}

## Benefits

### Automatic Cluster Management

When you submit a job, an isolated cluster is created on the fly and everything is configured and secured automatically. There is no need for any knowledge or skills related to cluster networking, security and installation. Just focus on creating your jobs and the OVHcloud Data Processing platform will take care of everything else for you.

Once jour job is running, you can access its live logs through the OVHcloud manager (in the Data Processing web page). And when your job is finished, its logs will be saved directly to your private cloud storage. 

### Easy to Use

You can easily launch a processing job in less than a minute with the help of Data Processing web UI, accessible through the OVHcloud Manager. You can also make use of OVHcloud API if you want to do more complex tasks, like job launching automation.

### Secured 

Your job runs in a completely isolated environment. Output logs will be written in your private cloud storage and you are the only person that can access the logs and results. 

Also, your data will be stored in OVHcloud data centers according to respective geographical legislation (GDPR of OVHcloud Europe).

### Processing Engine and Version Selection 

Each job you launch can be run using any supported processing engine independently and for each engine, you can select the version of engine that you like to use. For example you can submit a job to be processed by Apache Spark version A, and at the same time you can send another job to be processed by Apache Spark version B. 

### Region Selection 

OVHcloud infrastructure consists of several data centers located in different cities and countries called regions. You can select which region you like to use for your data processing location. For example you can create a cluster to run a job in Germany because your data is in Germany and you don't need to send the data outside of Germany to process it. Or imagine that you have sensitive data in Poland to process and you can not move your data outside Poland for processing by law.  

### Any Connected Storage is Supported

Your job will be run in the OVHcloud public cloud infrastructure but you're the one deciding where your input data is coming from. Your data is stored on an Amazon S3 bucket? You can access it. On an OVHcloud Object Storage? You can access it.

## Feedback
Please send us your questions, feedback and suggestions to improve the service: 

- On OVHcloud community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/)
- On our public [Gitter](https://gitter.im/ovh/data-processing)
