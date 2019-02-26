---
title: Known limits
excerpt: ''
slug: known-limits
section: Technical resources
---


**Last updated 25th February, 2019.**


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

## Nodes and pods

We have tested our OVH Managed Kubernetes service with up to 100 nodes and 100 pods per node. While we are fairly sure it can go further, we advise you to keep under those limits. 

In general. it's better to have several mid-size Kubernetes clusters than one monster-size one.

Delivering a fully managed service, including OS and other component updates, you will neither need nor be ble to SSH as root into your nodes.

## LoadBalancer

We are currently offering OVH Managed Kubernetes LoadBalancer service as a free preview, until the end of summer 2019. 

During the free preview there is a limit of 6 active `LoadBalancer` per cluster. This limit can be exceptionally raised upon request though our support team.

## OpenStack

Our Managed Kubernetes service is based on OpenStack, and your nodes and persistent volumes are built on it, using OVH Public Cloud. As such, you can see them in the *Servers* section of [OVH Cloud Manager](https://www.ovh.com/manager/cloud/). It doesn't mean that you can deal directly with these nodes and persistent volumes as other cloud instances. The *managed* part of OVH Managed Kubernetes means that we have configured those nodes and volumes to be part of our Managed Kubernetes. Please refrain from manipulating them from the *OVH Cloud Manage* (modifying ports left opened, renaming, resizing volumes...), as you could break them.