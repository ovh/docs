---
title: "Adding a node in a Nutanix cluster"
slug: add-node
excerpt: 'Add a node and confirm that it is working properly'
section: Advanced use
order: 03
hidden: true
kb: Hosted Private Cloud
category_l1: Hosted Private Cloud powered by Nutanix
category_l2: Advanced usage
---

**Last updated 5th April 2022**

## Objective

Nutanix clusters are scalable. You can add nodes to an existing cluster.

**This guide will show you how to add a node and ensure it works properly.**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a specialist service provider if you have difficulties or doubts concerning the administration, usage or implementation of services on a server.

## Requirements

- A Nutanix cluster in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)
- You must be connected to the cluster via Prism Central
- A ready-to-configure physical server added to the OVHcloud Control Panel

## Technical information

The **Hosted Private Cloud solution powered by Nutanix** enables you to have between 3 and 18 nodes on the same cluster.

It is possible to add several nodes when expanding the cluster.

The nodes to be added must have the same version of **AOS** as the existing cluster.

## Instructions

### Add a node to a Nutanix cluster.

Connect to **Prism Element** through **Prism Central**.

For more information on connecting to the cluster; see the « [Go further](#gofurther) » section of this guide. 

On the dashboard, the 3 nodes are visible in the `Hardware Summary`. Click on `View Details`{.action} in the middle left to bring up more details.

![Display dashboard before Expansion](images/DisplayDashboardBefore.PNG){.thumbnail}

A more detailed view is displayed with information such as total space and storage resilience capacity.<br>
Click `Close`{.action} to close this window.

![Cluster detail before Expansion](images/ClusterDetailBFromDashboard.PNG){.thumbnail}

Open the `Home`{.action} menu and choose `Health`{.action} to perform a cluster analysis before adding the node.

![NCC check before Expansion 01](images/CheckBeforeAdd01.PNG){.thumbnail}

Click on `Actions`{.action} in the top right-hand corner and choose `Run NCC Check`{.action}.

![NCC check before Expansion 02](images/CheckBeforeAdd02.PNG){.thumbnail}

Click `Run`{.action} to launch a control and wait for the operation to complete.

![NCC check before Expansion 03](images/CheckBeforeAdd03.PNG){.thumbnail}

After the check, click the `cogwheel`{.action} icon at the top right to change the settings.

![Add Node 01](images/AddNode01.PNG){.thumbnail}

Click `Expand Cluster`{.action}.

![Add Node 02](images/AddNode02.PNG){.thumbnail}

Check the box next to the discovered host to display the node details.

![Add Node 03](images/AddNode03.PNG){.thumbnail}

Scroll to see the options.

![Add Node 04](images/AddNode04.PNG){.thumbnail}

Scroll down to the bottom of the window and click on `Next`{.action}.

![Add Node 05](images/AddNode05.PNG){.thumbnail}

Choose the Rack in `Assign to Rack` and click `Next`{.action}.

![Add Node 06](images/AddNode06.PNG){.thumbnail}

Click `Expand Cluster`{.action}.

![Add Node 07](images/AddNode07.PNG){.thumbnail}

Click `Open`{.action} to view the cluster expansion details.

![Add Node 08](images/AddNode08.PNG){.thumbnail}

![Add Node 09](images/AddNode09.PNG){.thumbnail}

The addition of the node is completed when the *Expanding Cluster* progress is 100%.

![Add Node 10](images/AddNode10.PNG){.thumbnail}

Four nodes are visible in `Hardware Summary`, click `View Details`{.action} for more information.

![Display dashbord after expansion](images/DisplayDashboardAfter.PNG){.thumbnail}

Click `Close`{.action} to return to the dashboard.

![Cluster detail after Expansion](images/ClusterDetailAfterFromDashboard.PNG){.thumbnail}

## Go further <a name="gofurther"></a>

[Nutanix Hyperconvergence](https://docs.ovh.com/us/en/nutanix/nutanix-hci/)

[Nutanix Node Addition Guide](https://portal.nutanix.com/page/documents/details?targetId=Web-Console-Guide-Prism-v5_20:wc-cluster-expand-wc-t.html)

Join our community of users on <https://community.ovh.com/en/>.