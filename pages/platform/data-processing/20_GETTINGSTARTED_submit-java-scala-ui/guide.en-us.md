---
title: Submitting a Java/Scala job to Data Processing platform using OVHcloud manager
slug: submit-javascala
excerpt: Find out how to create a cluster and run your Apache Spark Java/Scala job with Data Processing platform using OVHcloud Manager
section: Getting started
order: 0
---

**Last updated 06<sup>th</sup> March, 2020**

## Objective

This guide helps you to upload an Apache Spark job in Java or Scala to your OVHcloud Object Storage and run your job with Data Processing using OVHcloud Manager. 

If you would like to submit an Apache Spark job in Python language, you can read this document: [How to submit a Python job to Data Processing using OVHcloud Manager](../submit-python/){.external}

In this guide, we are assuming that you're using the [OVHcloud Manager](https://www.ovh.com/manager/cloud/){.external} to use Data Processing platform. 

To read an introduction about Data Processing service you can visit [Data Processing Overview](../overview){.external}.

## Requirements 

- Access to [OVHcloud Manager](https://www.ovh.com/manager/cloud/){.external}
- An OVHcloud account 
- A cloud project in your OVHcloud account (see [How to create a cloud project](../../public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project){.external} for details.)
- An Openstack user in your cloud project and access to Openstack Horizon dashboard (see [How to create an Openstack user and access to Horizon](../../public-cloud/configure_user_access_to_horizon/){.external} for details.)
- A jar file containing your Java or Scala code to be run in Apache Spark environment

## Instructions

### **Step 1 - Upload your application code to Object Storage** 

Before running your job in Data Processing platform, you will need to create a container in OVHcloud Object Storage for your job and upload your application jar file into this container. You can work with your Object Storage using either the OVHcloud Manager or the Openstack Horizon dashboard. 

Please see [Creating Storage Containers in Customer Panel](../../storage/pcs/create-container/){.external} or [Create an object container in Horizon](../../storage/create_an_object_container/){.external} for more details. 


If you don’t currently have an application code and you still would like to try OVHcloud Data Processing, you can download an [Apache Spark package](http://spark.apache.org/downloads.html) and extract it. Inside, you can find a jar file in examples/jars folder to run the SparkPi sample (which will just compute the Pi value).

### **Step 2 - Submit your Spark job**
To submit your job with your required parameters follow these steps: 

- Login to the OVHcloud Manager and select `Public Cloud`{.action}
- Select the relevant project if you have multiple projects in your OVHcloud account
- Select `Data Processing`{.action} from the left panel 
- Select `Submit a new job`{.action}

![Data Processing Manager](images/dataprocessingmanager.png){.thumbnail}

- Fill the "**Submit a job**" form that is now displayed, and at the end push `Submit job`{.action} button to submit your Apache Spark job. Please see [How to fill job submit form in Data Processing Manager](../job-submit-form){.external} for more details. 

### **Step 3 - Check information, status and logs of a job**
In the **Data Processing** section of Manager you can see the list of all the jobs that you have submitted so far. If you click on a job's name, you can see detailed information on it, including its status. Then you can click on the `Logs`{.action} to see the live logs while the job is running.

Once the job will be finished, the complete logs will be saved to your Object Storage container. You will be able to download it from your account whenever you would like.

Please see [How to check your job's logs in the Data Processing manager page](../check-logs){.external} for more details. 

### **Step 4 - Check your job's results!** 
After your Spark job is finished, you will be able to check the results from your logs as well as in any connected storage your job was designed to update. 

## Go further

To learn more about using Data Processing and how to create cluster and process your data, we invite you to look at [Data Processing documentations page](../).

You can send your questions, suggestions or feedbacks in our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external} or in our public [Gitter](https://gitter.im/ovh/data-processing){.external}