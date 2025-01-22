---
title: Analytics - Getting started with APIs
excerpt: Find out how to order and manage your analytics service using the OVHcloud API
updated: 2025-01-13
---

## Objective

Analytics services allow you to focus on building and deploying cloud applications while OVHcloud takes care of the analytics infrastructure and maintenance.

**This guide explains how to order an OpenSearch service instance of an Analytics service using the OVHcloud API.**

## Requirements

- Access to the [OVHcloud API](/links/api) (create your credentials by consulting [this guide](/pages/manage_and_operate/api/first-steps))
- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account

## Instructions

### Step 1: Gather the set of required parameters

In order to create an analytics service, you will need to specify at minimum:

- an _engine_, and its _version_ (e.g. "opensearch 2.0")
- the _plan_ (e.g. "business")
- the _nodes_ of the cluster (e.g. "3 nodes with 4 cores, 15 GiB memory, 100 GiB disk")

#### List the capabilities

The _capabilities_ endpoint lists the allowed values for the engine, plan, and flavor the service knows about.

> [!api]
> @api {v1} /cloud GET /cloud/project/{serviceName}/database/capabilities

The call returns an object listing allowed values for:

- the various engines, with the various versions for each engine
- the plans
- the flavors

#### Get the availability

The _availability_ endpoint lists what combination of parameters the service allows. For example, an OpenSearch `Essential` plan currently allows clusters with a single node, whereas `Business` services allow clusters of 3 to 8 nodes. You should decide what set of parameters among that list best fit your needs.

> [!api]
> @api {v1} /cloud GET /cloud/project/{serviceName}/database/availability

The call returns an array listing the available set of parameters. Each entry in this array lists (among other data): an _engine_, a _version_, a _plan_, a _flavor_, a _region_, if it supports _public_ or _private networking_, a _minimum number of nodes_ and a _maximum number of nodes_.

### Step 2: Create an OpenSearch analytics service

> [!warning]
> Upon creating a cluster, you will be billed accordingly.

Use this endpoint to create a new analytics service cluster:

> [!api]
> @api {v1} /cloud POST /cloud/project/{serviceName}/database/opensearch

- **description**: A human-readable description for the service you wish to create.
- **plan**: The desired plan for the service.
- **version**: The OpenSearch version you want to use.
- **nodesPattern**: Specify the _flavor_ and _region_, and the number of nodes you want to use.
- **nodeslist**: Leave this parameter undefined. It is another way to specify the list of nodes your cluster uses. As of today, multi-region and flavor-heterogeneous clusters are not supported. Hence it is easier to use **nodesPattern** to specify a number of same-region, same-flavor nodes.
- **ipRestrictions**: The IP addresses blocks allowed to connect to your cluster.

> [!primary]
> For security reasons, the default network configuration does not allow any incoming connections. You must authorize a suitable IP address to successfully access your analytics service.

If you want to use public networking, you're all set. If you want to use private networking, you'll also want to specify:

- **networkId**: The ID of the vRack you want to use
- **subnetId**: The ID of the vRack subnet you want your cluster to be attached to

The call returns an object describing the cluster you asked for. Initially, its **status** property will be `CREATING`. Take note of the **id** property of the newly-created cluster for the next step.

### Step 3: Wait for your analytics service to be ready

The cluster will take a few minutes to become fully usable. You can check its status using:

> [!api]
> @api {v1} /cloud GET /cloud/project/{serviceName}/database/opensearch/{clusterId}

The call returns an object describing the cluster. Its **status** property will transition to `READY` when the cluster becomes available.

### Step 4: Reset the primary user password

At this point you don't know your cluster primary user's password. List your cluster's users with:

> [!api]
> @api {v1} /cloud GET /cloud/project/{serviceName}/database/opensearch/{clusterId}/user

Note the id of your admin user. Reset its password with:

> [!api]
> @api {v1} /cloud POST /cloud/project/{serviceName}/database/opensearch/{clusterId}/user/{userId}/credentials/reset

Note the new password of the user to later be able to connect to the cluster.

> [!warning]
> That password won't ever be available later on: OVHcloud never stores users' passwords.

### Step 5: Start using the cluster

You’ll find the cluster connection information in your Control Panel. You can now start using the cluster!

## Go further

[OpenSearch capabilities](/pages/public_cloud/public_cloud_databases/opensearch_01_capabilities)

[Starting with OpenSearch analytics service](/pages/public_cloud/public_cloud_databases/opensearch_02_getting_Started)

[Configuring vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Analytics services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).
