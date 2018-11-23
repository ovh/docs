---
title: Getting started with Analytics Data Compute
excerpt: Spark
section: Getting started
---
# Analytics Data Compute

Welcome to the getting started guide of OVH Analytics Data Compute. This guide will help you to 
understand the core concepts behind the Analytics Data Compute and how to run your first Spark 
cluster job by using this service.

## What is Spark ?

[Apache Spark](http://spark.apache.org/) is a bigdata computing platform which is much faster 
than its competitors like Hadoop MapReduce because of nice features like in memory processing and 
lazy evaluation. It can be run locally in a single machine or in a cluster of computers to distribute 
its tasks.

## What is the Analytics Data Compute ?

It provides you a ready computing cluster based on [Apache Spark](http://spark.apache.org/).
With Analytics Data Compute you don't need to be worry about creating and managing a network of 
computers for running your Spark job on a cluster of computers. 

Using `ovh-spark-submit` command line, you just send your code and define how much 
CPU cores you like and Analytics Data Compute will take care of everything. Command line options 
are almost the same as original `spark-submit` command line.

When you start a job, Analytics Data Compute engine creates a Spark cluster using virtual machines 
in OVH public cloud and submits the job to that cluster. Once your job finishes, the cluster is 
destroyed and the results are sent back to the user. You will be charged only for the virtual 
machines running during the computation time. 

Also the created cluster is only dedicated for this user and this job and it will be deleted after 
finishing the job, so the security and privacy of the user's data would be highly considered.  

In the command line options, users can choose which version of Spark to use and also they can have 
different formats and sources of data for input and output.

# Getting started

## Create an OVH Account
Before starting to use the Analytics Data Compute you need to make sure that you have an [ovh.com](www.ovh.com) account (NIC). 
If needed, go to [ovh.com](https://www.ovh.com/manager/web/login/) and select "Create Account". 


## Create a Public Cloud Project 
In order to spawn automatically an Apache Spark cluster, we need to have access to a new OVH Public Cloud project.
This project will contain all the storage and compute required to run your Apache Spark jobs.

Create a new one by following
 [this tutorial.](https://docs.ovh.com/gb/en/public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project/)
If you have a voucher, you can activate it during this step.
If you browse this project, in the "project managed" tab, you'll have all details about consumptions.

## Create Openstack user account and openrc.sh
After creating OVH account and project, you need to create an Openstack user account. You can find a tutorial 
in [this link](https://docs.ovh.com/gb/en/public-cloud/configure_user_access_to_horizon/) and login to your
Horizon dashboard. In Horizon dashboard you will have a link to download your Openstack credential as a 
bash file, like openrc.sh and you need to source this file to have required environment variables. 
For loading this file after downloading, you can run: 
```
$ source openrc.sh
```
Then by sourcing this file you will have all environment variables that ovh-spark-submit requires. For better 
performance it is recommended that you use "GRA5" region. For set the region, you can open openrc.sh in any editor 
and set OS_REGION_NAME="GRA5". 

## Download ovh-spark-submit CLI program:
You can download ovh-spark-submit CLI program from these addresses: 

for Mac: https://repository.dataconvergence.ovh.com/repository/binary/ovh-spark-submit/mac/ovh-spark-submit

for Linux: https://repository.dataconvergence.ovh.com/repository/binary/ovh-spark-submit/linux/ovh-spark-submit
  
If the downloader added some extension to the file, (for example safari adds .dms to the files without extension) 
remove the extension. You can also download the CLI using wget or curl commands.

for Mac: 
```
$ curl -o ovh-spark-submit https://repository.dataconvergence.ovh.com/repository/binary/ovh-spark-submit/mac/ovh-spark-submit
```
for Linux: 
```
$ curl -o ovh-spark-submit https://repository.dataconvergence.ovh.com/repository/binary/ovh-spark-submit/linux/ovh-spark-submit
```
  
Then run this command to make the downloaded file executable:
```
$ chmod +x ovh-spark-submit
```

## Run your spark job
usage:  
```
$ ./ovh-spark-submit [options] <jar file> <arguments>
```

ovh-spark-submit command line options are almost the same as original spark-submit without `--deploy-mode` 
and `--master`. For example:

```
$ ./ovh-spark-submit \
   --class org.apache.spark.examples.SparkPi \
   spark-examples_2.11-2.4.0.jar 1000
```

This is the minimum command line. In this case it will create a cluster with 1 master 
and 1 worker with 4 cores and will installs the latest Spark version. Then the program will run the SparkPi example
and shows the result. (You can find spark-examples_2.11-2.4.0.jar file inside the official apache spark 
package folder)

You can specify the version of Spark and the total number of cores as well. For example:
```  
./ovh-spark-submit \
   --class org.apache.spark.examples.SparkPi \
   --name Simulation01 \
   --version 2.4.0 \
   --total-executor-cores 8 \
   spark-examples_2.11-2.4.0.jar 1000
```  

After running this command, a cluster in OVH public cloud will be created and after finishing the computation, 
it will be automatically deleted.  After running the command your jar file will be uploaded to the swift storage 
of your openstack project. Then you will have a link to the output log of your cluster that you can read the log
 and results of your code by using curl or by just simply open the link in a browser. Then each time you refresh 
 the page, you will see the updated logs until the end of the job.
 
### Pro tip #1 : How to calculate your billing ?
For creating the cluster we use flavor b2-15, it means that each worker node will have 4 cores and 15 GB memory. 
For example if you add the option: `total-executor-cores 8`, you will need 8/4=2 worker nodes plus one for master node
and totally 3 nodes. Then according to the time of execution, you can calculate the cost of service for each job 
based on the cost of b2-15 in OVH tarifs website. (For example, here is the
 [FR Pricing.](https://www.ovh.com/fr/public-cloud/instances/tarifs/)). 
Be aware that it will be calculated per hour basis. For example if you use a cluster for 5 minutes, 
it will be considered as 1 hour.
  
### Pro tip #2 : Want to keep your cluster ?
There is an option which you can create cluster and keep it and send as many as jobs that you like. You just need 
to add `--keep-infra` option to your command line. 
But you need to delete the cluster when you don't need the cluster anymore. 
Be careful because if you forget to delete the cluster, you will be charged for the VMs that you have in your project. 
After running the command line, you will find the address of master in the output log.
  
Please send us your questions, feedback and suggestions to improve the service: 

- On OVH Community: https://community.ovh.com/c/platform/big-data
- On OVH public Mailing-list :  ovh-analytics@ml.ovh.net 
- On Gitter: https://gitter.im/ovh/lab-spark


# Study more: 

- [Spark documentation](https://spark.apache.org/docs/latest/)
- [Spark Quick Start Guide](https://spark.apache.org/docs/latest/quick-start.html)
- [Spark Cluster Mode Overview](https://spark.apache.org/docs/latest/cluster-overview.html)
- [spark-submit command line tool](https://spark.apache.org/docs/latest/submitting-applications.html)
- [Install the OpenStack command-line client](https://docs.openstack.org/newton/user-guide/common/cli-install-openstack-command-line-clients.html)
