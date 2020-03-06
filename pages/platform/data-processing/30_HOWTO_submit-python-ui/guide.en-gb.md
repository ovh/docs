---
title: How to submit a Python job on the Data Processing platform using the OVHcloud manager
slug: submit-python
excerpt: Find out how to create a cluster and run your Apache Spark Python job with Data Processing platform using the OVHcloud manager
section: How to
order: 0
---

**Last updated 06<sup>th</sup> March, 2020**

## Objective
This guide helps you to upload an Apache Spark job in Python to your OVHcloud Object Storage and run your job with the Data Processing page in the Manager. 

If you want to submit an Apache Spark job in Java or Scala language, you can read this document: [How to submit a Java/Scala job using Data Processing Manager](../submit-javascala/){.external}

In this guide, we are assuming that you're using the [OVHcloud Manager](https://www.ovh.com/manager/cloud/){.external} to use the Data Processing platform. 

To read an introduction about the Data Processing service you can visit [Data Processing Overview](../overview){.external}.

## Requirements 
- Access to [OVHcloud Manager](https://www.ovh.com/manager/cloud/){.external}
- An OVHcloud account 
- A cloud project in your OVHcloud account (see [How to create a cloud project](../../public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project){.external} for details.)
- An Openstack user in your cloud project and access to Openstack Horizon dashboard (see [How to create an Openstack user and access to Horizon](../../public-cloud/configure_user_access_to_horizon/){.external} for details.)
- Your application code as Python files 
- Your Python requirement file in Conda yml format 

## Instructions

### **Step 1 - Upload your Python application code and requirements file** 

Before running your job in the Data Processing platform, you will need to create a container in your Object Storage for your job and upload your application Python files into this container. You can work with your Object Storage using either the OVHcloud manager or the Openstack Horizon dashboard. 

Please see [Creating Storage Containers in Customer Panel](../../storage/pcs/create-container/){.external} or [Create an object container in Horizon](../../storage/create_an_object_container/){.external} for more details. 


If you don’t currently have an application code and you still would like to try OVHcloud Data Processing, you can download and use the [PI sample from Apache Spark repository](https://github.com/apache/spark/blob/master/examples/src/main/python/pi.py){.external}.

If your application needs some package requirements, create a Conda requirements.yml file containing all requirements you need to install in your Apache Spark cluster and upload this file into the same container as your Python files. 

### **Step 2 - Submit your Apache Spark job**
To submit your job with your required parameters follow these steps: 

- Login to the OVHcloud manager and select `Public Cloud`{.action}
- Select the relevant project if you have multiple projects in your OVHcloud account
- Select `Data Processing`{.action} from the left panel 
- Select `Submit a new job`{.action}

![Data Processing Manager](images/dataprocessingmanager.png){.thumbnail}

- Fill the "**Submit a job**" form that is now displayed and at the end push the `Submit job`{.action} button to submit your Apache Spark job. 

Please see [How to fill job submit form in Data Processing Manager](../job-submit-form){.external} for more details. 

### **Step 3 - Check information, status and logs of a job**
In the **Data Processing** section of the OVHcloud Manager you can see the list of all the jobs that you have submitted so far. If you click on a job's name, you can see detailed information on it, including its status. Then you can click on the `Logs`{.action} to see the live logs while the job is running.

Once the job will be finished, the complete logs will be saved to your Object Storage container. You will be able to download it from your account whenever you would like.

Please see [How to check your job's logs in the Data Processing manager page](../check-logs){.external} for more details. 

### **Step 4 - Check your job's results!** 
After your Spark job is finished, you will be able to check the results from your logs as well as in any connected storage your job was designed to update. 

## Go further

To learn more about using Data Processing and how to create cluster and process your data, we invite you to look at [Data Processing documentations page](../).

You can send your questions, suggestions or feedbacks in our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external} or in our public [Gitter](https://gitter.im/ovh/data-processing){.external}