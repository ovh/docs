---
title: 'Resetting an OVHcloud Managed Kubernetes cluster'
excerpt: 'Find out how to reset an OVHcloud Managed Kubernetes cluster'
slug: resetting-a-cluster
section: 'User guides'
---

**Last updated September 5th, 2019.**

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
 }
 .small {
     font-size: 0.75em;
 }
</style>


## Objective

OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. 

**Find out how to reset an OVHcloud Managed Kubernetes cluster.**


## Requirements

- an OVHcloud Managed Kubernetes cluster


## Instructions

### Step 1 - Ask for cluster reset on the OVH Cloud Manager 

Access our administration UI for your OVHcloud Managed Kubernetes clusters by clicking on the *Platforms and services* menu in the [OVH Cloud Manager](https://www.ovh.com/manager/cloud/)

![Access to the administration UI](images/resetting_a_cluster-01.jpg){.thumbnail}


In the *Services* tab of the administration UI, click on the button on the *Status* section, and choose to reset the configuration of the cluster. 


![Reset the configuration of the cluster](images/resetting_a_cluster-02.jpg){.thumbnail}


### Step 2 - Choose the type of reset you want

You have two options on the reset menu, *Delete* and *Reinstall*. 

- Choosing *Delete* means that the current cluster nodes are deleted, and the cluster is reinitialized to an empty state.

- Choosing *Reinstall* means that the cluster is reinitialized without destroying the nodes.


![Choose the type of reset you want](images/resetting_a_cluster-03.jpg){.thumbnail}



### Step 3 - Wait for the resetting to end 

Depending on the chosen kind of reset, the process can take several minutes. During that time, a message on the manager warns you that the cluster is under resetting:


![Choose the type of reset you want](images/resetting_a_cluster-03.jpg){.thumbnail}


## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes site](https://www.ovh.com/public-cloud/kubernetes/).

Otherwise to skip it and learn more about using your Kubernetes cluster the practical way, we invite you to look at our  [tutorials](../) .

Join our community of users on https://community.ovh.com/en/.
