---
title: “Datamotive - Introduction”
excerpt: “Discover a presentation of the Datamotive multi-cloud solution, for hybridizing Hosted Private Cloud - VMware on OVHcloud with other platforms”
updated: 2024-09-26
---

## Objective

**The aim of this quide is to introduce Datamotive's solution to the world of Hosted Private Cloud - VMware on OVHcloud.**

## Instructions

As a multi-cloud orchestrator, Datamotive has succeeded in building a solution that simplifies the process of hybridizing private and public cloud environments.

It has 3 products within this solution:

- `EasyMigrate`: Transforming workload management and portability.
- `EasyHybridDR`: Protect your workloads transparently.
- `EasyAnalytics`: Turn data into actionable information.

### Step 1 - The Datamotive console

#### How to connect to the console

To connect to the Datamotive console, use the IP address or domain name you have configured:

- `Url`: https://XX.XX.XX.XX:5000/dashboard

The default access port to the management console is `5000`.

If you're using an Active Directory, you can use the `Sign In with Active Directory` button.

![Datamotive Login](images/datamotive_login.png){.thumbnail}

You'll be redirected to the Datamotive dashboard.

![Datamotive Login](images/datamotive_dashboard.png){.thumbnail}

### Step 2 - Console features

#### Configure

The second part of the Datamotive console is the `Configure` configuration section.

It has 3 subsections:

- `Nodes`
- `Sites`
- `Protection Plans`

The **Nodes** section lists the nodes to which you have connected your console. You'll find all the useful information you need, such as `Hostname`, `Type`, `Platform Type`, `Version`, `Ports`, `Status`.

![Datamotive Login](images/datamotive_nodes.png){.thumbnail}

- `Name` : Name of the deployed node VM or instance.
- `Hostname` : IP address or FQDN of the node.
- `Username` : Username of the deployed node.
- `Password` : Password of the deployed node
- `Type` : Node type, Replication - The node will act as a stateless replication unit and will handle provided replication operations. Dedupe - Node to perform deduplication of data. Management - Node will act as a management server.
- `Platform type` : On which node is deployed. Supported platform types are VMware, AWS, GCP, Azure and OpenStack.
- `Management Port` : Port on which management service is running
- `Replication Data Port` : Port on which replication data service is running
- `Replication Controller Port` : Port on which replication controller service is running

Here's an example of how to edit an existing node:

![Datamotive Node](images/datamotive_nodes_edit.png){.thumbnail}

There are several node types available for adding a node: `Management`, `Replication`, `Prep Node`, `Dedupe Server`.

Here's an example of how to create a new node:

![Datamotive Node](images/datamotive_nodes_new.png){.thumbnail}

-`Sites`

The **Sites** section is used to list the Sites supported for protection and recovery within Datamotive.

To create a Site you must have: `Name`, `Description`, `Site`, `Type`, `Platform Type`, `Node`, `Region`.

The new element in this section is the region:

- `Region`: The region of the cloud site where the management server is deployed and where protection is to be performed.
  Select the site type. Supported site types are `Protection` and `Recover`.

- Protection Plans


## Going further

If you need training or technical assistance to implement our solutions, contact your Technical Account Manager or go to [this page](/links/professional-services) to get a quote and request a personalised analysis of your project from our experts in the Professional Services team.

Ask questions, give your opinion and interact directly with the team building the Datamotive solution on the [website](https://www.datamotive.io/).

Join our [OVHcloud user community](/links/community).