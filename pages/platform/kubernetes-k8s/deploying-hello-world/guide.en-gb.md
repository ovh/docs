---
title: Deploying a Hello World application with the OVH Control Panel
slug: deploying-hello-world
excerpt: 'Find out how to deploy a Hello World application with the OVH Control Panel'
section: Tutorials
order: 1
---

**Last updated February 18, 2022.**

Follow this quickstart guide to deploy a containerised *Hello World* application on your OVHcloud Managed Kubernetes Service cluster, using the OVH Control Panel.

In this guide, we are assuming that you're using the [OVHcloud Cloud Manager](https://www.ovh.com/auth?onsuccess=https%3A%2F%2Fwww.ovh.com%2Fmanager%2Fpublic-cloud&ovhSubsidiary=gb) to manage your Kubernetes cluster. If you are using a different method, like the [OVHcloud API](https://api.ovh.com/), please refer to the appropriate documentation:

- [Deploying a Hello World with the OVHcloud API](../deploying-hello-world-ovh-api/)

## Before you begin

* You should have already created a cluster on the OVHcloud Managed Kubernetes service.
* You will also need the [kubectl](https://kubernetes.io/docs/reference/kubectl/overview/){.external} command-line tool. You can find the [detailed installation instructions](https://kubernetes.io/docs/tasks/tools/install-kubectl/){.external} for this tool on Kubernetes' official site.

## Getting your cluster information

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned.

Access the administration UI for your OVHcloud Managed Kubernetes clusters by clicking on `Managed Kubernetes Service`{.action} in the left-hand menu.

![Select your cluster](images/select-cluster.png){.thumbnail}

Click on your cluster to access on its information.

In this administration UI, you have several tabs included:

- **Service:** a global view of your cluster, with important information like the status, API URL, and `kubectl` configuration file.

- **Node pools:** the node pools of your cluster, with options for adding, configuring or removing them.

- **APIServer access:** TODO: xx

- **Audit Logs:** logs of your Kubernetes cluster’s control-plane.

## Configuring the default settings for kubectl

Please refer to the [Configuring kubectl on an OVHcloud Managed Kubernetes cluster](../configuring-kubectl/) documentation for this part of the process.

## Add a worker node

In the *Computer Nodes* tab of the administration UI, click on *Add Node*. For this example, choose a general purpose node, like the B2-7 flavor:

![Add a worker node](images/kubernetes-quickstart-03.png){.thumbnail}

## Verify that your node is ready

In the *Computer Nodes* tab, you can inspect the state of your nodes. The node you have just created should now be in an *Installing* state. The node installation can take a minute, so feel free to take a short break, then try again until it's ready.

![Verify your node is ready](images/kubernetes-quickstart-06.png){.thumbnail}

## Deploy your first application

You're now ready to deploy your first application.

For more details about this process, you can refer to our [deploying an application](../deploying-an-application/) documentation.
