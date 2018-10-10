---
title: Getting started with OVH Analytics Data Compute
excerpt: Spark
section: Getting started
---
## OVH Analytics Data Compute

Welcome to the getting started guide of OVH Analytics Data Compute. This guide will help you to 
understand the core concepts behind the Analytics Data Compute and how to run your first Spark 
cluster task by using this service.

## What is Spark ?

[Apache Spark](http://spark.apache.org/) is a bigdata computing platform which is much faster 
than its competitors like Hadoop MapReduce because of keeping data in memory. It can be run 
locally in a single machine or it can be run in a cluster of computers to distribute its tasks.

## What is the Analytics Data Compute ?

It provides you a ready computing cluster based on [Apache Spark](http://spark.apache.org/).

With Analytics Data Compute you don't need to be worry about creating and managing a network of 
computers for running your Spark job on a Spark cluster. 

Using `ovh-spark-submit` command line, you just send your code and define how much memory and 
CPU cores you like and Analytics Data Compute will take care of everything. Command line options 
are almost the same as original `spark-submit` command line.

When you start a job, Analytics Data Compute engine creates a Spark cluster using virtual machines 
in OVH public cloud. Once your job finishes, the cluster is destroyed and the results are sent 
back to the user. You will be charged only for the virtual machines running during the computation time. 

Also the created cluster is only dedicated for this user and this job and it will be deleted after 
finishing the job, so the security and privacy of the user's data would be highly considered.  

In the command line options, users can choose which version of Spark to use and also they can have 
different formats and sources of data for input and output.

## Getting started

### Create OVH Account

Before starting to use the Analytics Data Compute you need to make sure that you have an OVH.com account.

Go to [ovh.com](https://www.ovh.com/manager/web/login/) and select "Create Account".

### Generate Openstack Token

For using Analytics Data Compute you need to generate an Openstack token. Analytics Data Compute 
will use this token to generate the cluster inside the project of user. You can generate the token 
and store it in an environment variable like TOKEN. 

The Openstack command for generating token: 

#### Prerequisite
```
$ pip install python-openstackclient
```

To generate token, run: 

```
$ openstack token issue
```
Then you can copy the token and save it in TOKEN variable by this command: 
```
$ export TOKEN=<paste the token here>
```
You can see the openstack commandline installation documentation in 
[openstack](https://docs.openstack.org/newton/user-guide/common/cli-install-openstack-command-line-clients.html) web page. 

### Install the application

Before installing the application, you need to add the OVH Dataconvergence repository to your 
system and then install ovh-spark-submit package. 

#### For Debian/Ubuntu linux: 

1. Run this command to add dataconvergence repository to your system: 
```
$ sudo add-apt-repository 'deb https://repository.dataconvergence.ovh.com/repository/debian stable main'
```
2. Then run this command to add the repository key: 
```
$ sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com C4F21B73
```
3. Then update and install ovh-spark-submit: 
```
$ sudo apt update
$ sudo apt install ovh-spark-submit
```

#### For CentOS linux: 

1. Create dataconvergence.repo in /etc/yum.repos.d/ and add this text to the file:
```
[dataconvergence]
baseurl = https://repository.dataconvergence.ovh.com/repository/centos/7/os/x86_64/
gpgcheck = 1
gpgkey = https://repository.dataconvergence.ovh.com/repository/gpg-keys/RPM-GPG-KEY-dcrepo
name = data convergence repo
```

2. Install ovh-spark-submit: 
```
$ sudo yum install ovh-spark-submit
```

### Example 

In this example we use the sample jar file from official Spark package called: spark-examples_2.11-2.3.1.jar 
that you can download from official [Apache Spark](http://spark.apache.org/) version 2.3.1

Before running this command line you have to generate an Openstack token and store the token in 
TOKEN environment variable. 

```
$ ovh-spark-submit \
--token $TOKEN \
--class org.apache.spark.examples.SparkPi \
--name SparkJob1 \
--executor-memory 2G \
--total-executor-cores 4 \
spark-examples_2.11-2.3.1.jar 1000
```

# Going further

- [Spark documentation](https://spark.apache.org/docs/latest/)
- [Spark Quick Start Guide](https://spark.apache.org/docs/latest/quick-start.html)
- [Spark Cluster Mode Overview](https://spark.apache.org/docs/latest/cluster-overview.html)
- [spark-submit command line tool](https://spark.apache.org/docs/latest/submitting-applications.html)
- [Install the OpenStack command-line client](https://docs.openstack.org/newton/user-guide/common/cli-install-openstack-command-line-clients.html)
