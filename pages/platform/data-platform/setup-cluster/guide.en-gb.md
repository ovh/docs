---
title: Create your Data Platform
excerpt: Learn how to deploy your first Data Platform, ingest data, make your first Hive queries and Spark scripts.
section: Getting started
order: 2
---

## Before you begin

The analytics data platform is meant to be deployed in an Openstack project.  
You can create a new project in your [OVH manager in Cloud section](https://www.ovh.com/manager/public-cloud/index.html#/)

The cloud project that you will use to deploy your Analytics Data Platform has to be connected to
[OVH vRack technology](https://www.ovh.com/fr/solutions/vrack/) to create and add it to your project,
please see [section about vRack](../vrack/guide.en-gb.md).


## Create your first cluster

In this section you deploy a new Data Platform running on OVH Public
Cloud instances:

1.  Login to your [OVH Manager](https://www.ovh.com/manager/public-cloud/index.html)
2.  In the sidebar, click on the *create a new project* button ![Create button](images/manager_01.png)

3.  Choose a project name in which your cluster will run and create the project

4.  Select your project in the *sidebar* 

5.  In the *Data & Analytics* section of the *sidebar*, select *Analytics Data Platform*

6.  Click on the **Create Analytics Data Platform** 
![Analytics Data Plateform view](images/manager_02.png)
7.  Fill in the deployement form
![Deployment form](images/manager_03.png)
8.  Save your master password to a secure place, you will need it to connect to your cluster

9. Congratulations, your cluster is now deploying! It should take less than 1 hour to complete.
![Deployment running](images/manager_04.png)

## Connect to your cluster

Each OVH Analytics Data Platform instance is installed with Apache
Ambari, an easy-to-use web UI to monitor and configure your cluster.

To access Ambari GUI in your newly created cluster, go to the following
URL, using your cluster id:

`https://knox.{cluster_id}.datalake.ovh/gateway/default/ambari/`

But you can also find the links to your Ambari, Free IPA and Ranger interfaces on the *Cluster information* page just after you Data Plateform has been deployed successfully.

![Cluster information view](images/manager_05.png)
