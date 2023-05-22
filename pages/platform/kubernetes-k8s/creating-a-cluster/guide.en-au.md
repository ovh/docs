---
title: Creating a cluster
slug: creating-a-cluster
excerpt: 'Find out how to create an OVHcloud Managed Kubernetes cluster through the OVHcloud Control Panel'
section: Getting started
order: 0
updated: 2023-05-12
---

**Last updated 12th May 2023**

## Objective

The OVHcloud Managed Kubernetes service provides you Kubernetes clusters without the hassle of installing or operating them. This guide will cover the creation of a new cluster.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ApfujBFT82g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

## Instructions

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

Access the administration UI for your OVHcloud Managed Kubernetes clusters by clicking on `Managed Kubernetes Service`{.action} in the left-hand menu and click on `Create a cluster`{.action}.

![Create a cluster](images/creating-a-cluster1.png){.thumbnail}

Select a location for your new cluster.

![Select a location](images/creating-a-cluster2.png){.thumbnail}

Choose the minor version of Kubernetes.

![Choose the minor version of Kubernetes](images/creating-a-cluster3.png){.thumbnail}

> [!primary]
> We recommend to always use the last stable version. 
> Please read our [End of life / end of support](../eos-eol-policies/) page to understand our version policy.
>

You can now choose to integrate your Kubernetes cluster into a private network using OVHcloud vRack. For more information about this option, please read our guide [Using the vRack](../using_vrack/).

![Choose a private network for this cluster](images/creating-a-cluster4.png){.thumbnail}

Now you can configure the default node pool. A node pool is a group of nodes sharing the same configuration, allowing you a lot of flexibility in your cluster management. 

> [!primary]
> You can read the [Managing node pools](../managing-nodes/) guide for more information on node pools.
>

![Node pool](images/creating-a-cluster5.png){.thumbnail}

In the next step, define the size of the default node pool.

![Default node pool](images/creating-a-cluster6.png){.thumbnail}

Alternatively, you can enable the `Autoscaling`{.action} feature for the cluster. Define the minimum and maximum pool size in that case.

![Autoscaling](images/creating-a-cluster7.png){.thumbnail}

In the next step, choose the appropriate billing mode (monthly or hourly). You can also enable the anti-affinity mode here. 

![Choose the billing mode](images/creating-a-cluster8.png){.thumbnail}

> [!primary]
> By enabling anti-affinity, current and future nodes will be launched on different hypervisors (physical servers), guaranteeing higher fault tolerance. Anti-affinity node pools can only include up to 5 nodes.
>
> Moreover, if you choose the monthly billing method, you cannot change later from monthly to hourly. A change is only possible the other way around.
> 

Enter a name for your cluster.

![Enter a name for your cluster](images/creating-a-cluster9.png){.thumbnail}

Finally, click the `Send`{.action} button.

The cluster creation is now in progress. It should be available within a few minutes in your OVHcloud Control Panel.

### Warning

After a cluster is created, you can no longer change:<br>
\-  The region.<br>
\-  The private network ID.

## Go further

To have an overview of OVHcloud Managed Kubernetes service, you can go to the [OVHcloud Managed Kubernetes page](https://www.ovhcloud.com/en-au/public-cloud/kubernetes/).

To deploy your first application on your Kubernetes cluster, we invite you to follow our guide to [configuring default settings for `kubectl`](../configuring-kubectl/) and [deploying a Hello World application](../deploying-hello-world/) .

- If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

- Join our community of users on <https://community.ovh.com/en/>.
