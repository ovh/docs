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
bash file, like openrc.sh and you need to source this file to have required environment variables. It is better to download
 the openrc.sh file in version 3, but if you wanted to use version 2, check the OS_AUTH_URL in the openrc.sh file and 
 add /v2.0 to the end if there isn't. So the OS_AUTH_URL should have the value: OS_AUTH_URL=https://auth.cloud.ovh.net/v2.0 
  
For loading this file after downloading, you can run: 
```
$ source openrc.sh
```
Then by sourcing this file you will have all Openstack credentials in your environment variables that ovh-spark-submit requires.
 For better performance it is recommended that you use "GRA5" region and be aware that region SBG3 is not supported yet.
For setting the region, you can open openrc.sh in any file editor and set OS_REGION_NAME="GRA5" or any other region you
 like except SBG3, then source openrc.sh again to update your environment variables. 

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

You can also build the ovh-spark-submit instead of downloading by cloning the code and running `make all`

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
of your Openstack project. Then you will have a link to the output log of your cluster and Spark job that you can read the log
 and results of your code by using curl or by just simply open the link in a browser. Then each time you refresh 
 the page, you will see the updated logs until the end of the job. After finishing the Spark job, this log file will be 
 saved in your Swift storage in the same region that you mentioned in you openrc.sh file or in OS_REGION_NAME environment 
 variable and in "SparkLogs" container. So, to see the logs and results you can go to horizon dashboard:
  [https://horizon.cloud.ovh.net](https://horizon.cloud.ovh.net) and then go to "Object Store" -> Containers -> SparkLogs 
 and you will find the logs folders based on date and time of Spark job. 
  
 
Also you can find the address of Spark official master dashboard and SparkUI in this log page and you can open dashboard 
and UI separately if you like. Master dashboard is on port 8080 of master IP (like: http://1.2.3.4:8080) and SparkUI will 
be on port 4040 of one of the workers (like: http://1.2.3.4:4040). 

By running ovh-spark-submit command line and by addressing your jar file from you local machine, the jar file will be 
uploaded to your Swift storage in a container named "jar", then the spark cluster will read the jar file from this container.
It is possible also to put your jar file in your Swift storage first and use its address in ovh-spark-submit command line. 
For this purpose you need to add "swift://" at the beginning of the address following container name and then folder path and 
file name of your jar file. Be aware that names of containers and files in Swift are case sensitive and the jar file in 
Swift should be in the same region that you mentioned in your openrc.sh file or OS_REGION_NAME environment variable. 
Using this feature is specially useful when you have a big jar file and slow internet connection and you run the cluster 
several times without any change in the jar file and thus you don't like to upload the jar file each time you run a 
Spark job. For example: 
```  
./ovh-spark-submit \
   --class org.apache.spark.examples.SparkPi \
   --name Simulation01 \
   --version 2.4.0 \
   --total-executor-cores 8 \
   swift://jar/spark-examples_2.11-2.4.0.jar 1000
```  
 
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
After running the command line, you will find the address of Spark master in the output log.  
```  
./ovh-spark-submit \
   --class org.apache.spark.examples.SparkPi \
   --name Simulation01 \
   --version 2.4.0 \
   --total-executor-cores 8 \
   --keep-infra \
   swift://jar/spark-examples_2.11-2.4.0.jar 1000
``` 
When you don't need the cluster anymore you can go to ovh.com manager or your Openstack Horizon dashboard to deleted the
 cluster VM's.  
 
## Feedback
Please send us your questions, feedback and suggestions to improve the service: 

- On OVH Community: [https://community.ovh.com/c/platform/big-data](https://community.ovh.com/c/platform/big-data)
- On OVH public Mailing-list :  [ovh-analytics@ml.ovh.net](ovh-analytics@ml.ovh.net) 
- On Gitter: [https://gitter.im/ovh/lab-spark](https://gitter.im/ovh/lab-spark)

## Request Free Access

Register in [OVH Analytic Data Compute](https://labs.ovh.com/analytics-data-compute) lab page to get a voucher for 
Spark cluster as a service and test it for free. 

# Study more: 

- [Spark documentation](https://spark.apache.org/docs/latest/)
- [Spark Quick Start Guide](https://spark.apache.org/docs/latest/quick-start.html)
- [Spark Cluster Mode Overview](https://spark.apache.org/docs/latest/cluster-overview.html)
- [spark-submit command line tool](https://spark.apache.org/docs/latest/submitting-applications.html)
- [Install the OpenStack command-line client](https://docs.openstack.org/newton/user-guide/common/cli-install-openstack-command-line-clients.html)
