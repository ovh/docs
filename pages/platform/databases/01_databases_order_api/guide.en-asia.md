---
title: How to order my database via API
excerpt: Find out how to order your Public Cloud managed database service using the OVHcloud API
slug: order-api
section: Configuration
order: 1
---

**Last updated 8th July 2021**

## Objective

Public Cloud managed databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance.

**This guide explains how to order a Public Cloud managed database for MongoDB instance using the OVHcloud API.**

## Requirements

- access to the [OVHcloud APIv6](https://api.ovh.com/console/){.external} (create your credentials by consulting [this guide](../../api/first-steps-with-ovh-api/))
- a [Public Cloud project](https://www.ovhcloud.com/en/public-cloud/) in your OVHcloud account

## Instructions

### Step 1: Gather the set of required parameters

In order to create a database service, you'll need to specify at minimum:

- an _engine_, and its _version_ (e.g. "MongoDB v4.4")
- the _plan_ (e.g. "business")
- the _nodes_ of the cluster (e.g. "3 nodes with 4 cores, 15 GiB memory, 100 GiB disk")

#### List the Capabilities

The _capabilities_ endpoint lists the allowed values for the engine, plan, and flavor the service knows about.

> [!api]
> @api {GET} /cloud/project/{serviceName}/database/capabilities

The call returns an object listing allowed values for:

- the various engines, with the various versions for each engine
- the plans
- and the flavors

#### Get the Availability

The _availability_ endpoint lists what combination of parameters the service allows. For example, for MongoDB currently the `essential` plan only allows clusters with a single node, whereas `business` services allows clusters of 3 to 8 nodes. You should decide what set of parameters among that list best fit your needs.

> [!api]
> @api {GET} /cloud/project/{serviceName}/database/availability

The call returns an array listing the available set of parameters. Each entry in this array lists (among other data): an _engine_, a _version_, a _plan_, a _flavor_, a _region_, if it supports _public_ or _private networking_, a _minimum_ and a _maximum number of nodes_.

### Step 2: Create a MongoDB database service

> [!warning]
> By creating a cluster, you will be billed accordingly.

Use this endpoint to create a new database cluster:

> [!api]
> @api {POST} /cloud/project/{serviceName}/database/mongodb

- **description**: A human-readable description for the service you wish to create
- **plan**: the desired plan for the service
- **version**: the MongoDB version you want to use
- **nodesPattern**: specify the nodes _flavor_ and _region_, and the number of nodes you want to use
- **nodeslist**: Leave this parameter undefined. It is another way to specify the list of nodes your cluster uses. As of today, multi-region and non flavor-homogenous clusters are not supported. Hence it's easier to use **nodePattern** to specify a number of same-region, same-flavor nodes.

If you want to use public networking, you're all set. If you want to use private networking, you'll also want to specify:

- **networkId**: The ID of the vRack you want to use
- **subnetId**: The ID of the vRack subnet you want your cluster to be attached to

The call returns an object describing the cluster you asked for. Initially, its **status** property will be `CREATING`. The **primaryUser** property lists the first provisioned user, with its initial password. That initial password won't be available again after this point. Take note of the **id** property of the newly-created cluster for the next step.

### Step 3: Wait for your database service to become ready

The cluster will take a few minutes to become fully usable. You can check its status using:

> [!api]
> @api {GET} /cloud/project/{serviceName}/database/mongodb/{clusterId}

The call returns an object describing the cluster. Its **status** property will transition to `READY` when the cluster becomes available.

### Step 4: Whitelist the IP addresses or blocks you want to access your cluster from

> [!warning]
> For security reasons the default network configuration doesn't allow any incoming connections. It is thus critical you whitelist the suitable IP addresses in order to successfully access your database.

Declare the IP address blocks allowed to connect to your cluster with:

> [!api]
> @api {POST} /cloud/project/{serviceName}/database/mongodb/{clusterId}/ipRestriction

- **description** is a human-readable description or label for the IP block
- **ip** is a string representing an IP block or network, using the syntax `aaa.bbb.ccc.ddd/xy` -- If you want to specify a single IP address, use `aaa.bbb.ccc.ddd/32`

You can add multiple allowed IP blocks.

### Step 5: Find out about available users' roles

use:

> [!api]
> @api {GET} /cloud/project/{serviceName}/database/mongodb/{clusterId}/role

to retrieve the list of available role IDs, and:

> [!api]
> @api {GET} /cloud/project/{serviceName}/database/mongodb/{clusterId}/role/{roleId}

to get the details for each one of the roles. Refer to the [MongoDB documentation](https://docs.mongodb.com/manual/reference/built-in-roles/) to learn about the permissions associated with each role.

### Step 6: Create a user to access the cluster

Create a user with:

> [!api]
> @api {POST} /cloud/project/{serviceName}/database/mongodb/{clusterId}/user

- **name** the name of the new user
- **password** its password
- **roles** an array of role IDs to associate with the user

### Step 7: Start using the cluster

You’ll find the cluster connection information in your control panel; You can now start using the cluster!

## Go further

[MongoDB capabilities](https://docs.ovh.com/asia/en/publiccloud/databases/mongodb/capabilities/)

[Managing a MongoDB service from the OVHcloud Control Panel](https://docs.ovh.com/asia/en/publiccloud/databases/mongodb/managing-service/)

[Configuring vRack for Public Cloud](https://docs.ovh.com/asia/en/public-cloud/public-cloud-vrack/)

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

Join our community of users on <https://community.ovh.com/en/>.
