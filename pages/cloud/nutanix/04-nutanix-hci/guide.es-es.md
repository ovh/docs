---
title: Hyperconvergencia Nutanix (EN)
slug: nutanix-hci
routes:
    canonical: 'https://docs.ovh.com/gb/en/nutanix/nutanix-hci/'
excerpt: Presentation of the Nutanix hyperconvergence solution
section: Primeros pasos
order: 04
---

**Last updated 22nd February 2022**

## Objective

This document details the operation of a Nutanix hyperconvergence solution and describes the Prism Central and PRISM element interfaces.

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Requirements

- A Nutanix cluster in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)

## Technical solution overview

### A reminder about defining a node

A Nutanix solution consists of so-called nodes. In practice, a node is a physical computer. On this computer, we find:

- One system disk or two system disks in RAID. The AHV hypervisor is installed on this system disk. 
- An SSD or CVM (a virtual machine that provides connections between each node and is an essential component of the Nutanix solution) is stored. Any remaining disk space may be used for data storage.
- Other SSD or SAS disks, with a different licence cost depending on the chosen storage technology.
- One or more processors.
- Memory.
- Sometimes a **GPU** (*Graphical Processor Unit*) graphics card.

Ideally, each node in a Nutanix cluster should be identical. There may be differences, especially when a GPU is present. However, nodes that contain storage must be identical.

### How a Nutanix cluster works

A cluster is created from the cluster nodes. A minimum of 3 nodes are required to run a Nutanix cluster.

When a cluster is created, all available disks are added to what is called a "Storage POOL".
We recommend having only one Storage POOL.

As a reminder, the OVHcloud Nutanix solution starts from 3 nodes and can go up to 18 nodes.

Data redundancy is not done on one node as with RAID, but across the network on multiple nodes.<br>
There are several levels of redundancy:

- RF2: Data is available on 2 nodes, allowing a node or data disk to fail on one of the nodes.
- RF3: Data is available on 3 nodes. This solution is only possible from 5 nodes, it is more secure as it allows the loss of 2 nodes with a smaller storage capacity.

### Virtualisation Overview

Virtualisation is done through the AHV hypervisor.
This hypervisor is integrated on each node and does not require an additional licence.

Virtual machines run on one of the nodes and can hot-swap from one node to another in normal operation.

If a node fails, the virtual machines reboot on one of the nodes.

### List of Nutanix cluster connection options

- From the Prism Central web interface (an additional virtual machine that has features that Prism Element does not have and that can connect to one or more clusters).
- On the Prism ELEMENT web interface (actually one of the CVMs).
- Via SSH on the cluster (in this case, it is also one of the CVMs).
- Via SSH on one of the cluster nodes for hypervisor maintenance operations.

Through Prism Central and Prism Element, it is possible to use the RESTAPI interface to automate some command line tasks.

## Instructions

Now that the Nutanix solution has been introduced, we will connect to Nutanix's web interfaces and discover storage.

### Connecting to Prism Central from the Internet

We will connect via Prism Central which is the entry point, from the Internet, into the solution offered by OVHcloud.

Access to the cluster is via a public address such as `https://FQDN:9440`. This address is provided to you when you create a Nutanix cluster with OVHcloud.

![Interface Prism Central - Login](images/PrismCentralUsername.PNG){.thumbnail}

Enter your username and password and click the arrow.

![Interface Prism Central - Dashboard](images/PrismCentralDashboard.PNG){.thumbnail}

### Connecting to Prism Element via Prism Central

On the Prism Central *Dashboard*, click the cluster name in the **Cluster Quick Access** frame.

![Interface Prism Central - Dashboard](images/PrismCentralDashboard.PNG){.thumbnail}

You will then access your cluster’s dashboard.

To the right is the total number of disks, the number of VMs, and the number of hosts.<br>
A green heart indicates that the Nutanix cluster is functioning correctly.<br>
At the bottom of this section, you will see the fault tolerance level (1 means we are in RF2 with the possibility of a disk loss on a node or failure of an entire node).

A summary of the storage and available disk space is displayed on the left.<br>
Click `View Details`{.action} for more information about storage.

![Interface Prism Element - DashBoard](images/PrismElementDashBoard.PNG){.thumbnail}

This allows you to check the storage status by node.

![Storage](images/StorageDetail.PNG){.thumbnail}

Click on the `Hardware`{.action} menu to view the details of the storage per node, as well as the number of disks allocated per node.

![Hardware Menu](images/HardwareMenu.PNG){.thumbnail}

Click `Diagrams`{.action} for a graphical summary as shown below.

![Hardware Detail](images/HardwareDetail.PNG){.thumbnail}

## Go further

Visit the website <https://www.nutanixbible.com/> for more information on how Nutanix works.

Join our community of users on <https://community.ovh.com/en/>.
