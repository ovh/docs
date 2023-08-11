---
title: Configure your Private Network
excerpt: Connect a Public Cloud Database to vRack
routes:
    canonical: '/pages/public_cloud/public_cloud_databases/databases_08_vrack'
updated: 2023-07-07
---

**Last updated 7th July 2023**

## Objective

The OVHcloud vRack is a private network solution that enables our customers to route traffic between OVHcloud dedicated servers as well as other OVHcloud services, such as databases. The vRack also allows you to add Public Cloud instances to your private network to create an infrastructure of physical and virtual resources.

**This guide explains how to connect a Public Cloud Instance, hosted in a datacenter, to a Public Cloud Database, hosted in another datacenter, like this:**

![vrack schema](images/redis_tuto_02_vrack-20220829155628651.png){.thumbnail}

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
- A [Public Cloud project](https://www.ovhcloud.com/de/public-cloud/) in your OVHcloud account.

## Instructions

### Step 1 - Creating a virtual network

The first step is to create the virtual network that will be used in your vRack. To proceed, consult this [guide](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

### Step 2 - Creating a Public Cloud Database connected to the private network


Follow this [guide](/pages/public_cloud/public_cloud_databases/databases_01_order_control_panel) to create a new Public Cloud Database.

> [!primary]
>
> Choose the plan that best fits your needs. The use of private networking with databases is available with all plans.
>
> ![Choose plan](images/databases_01_order_control_panel-2022072719143198.png){.thumbnail}
>

> [!primary]
>
> - Select **Private** from the Network Type list, then select **XXXX - my-private-nw**.
> *The XXX value is the ID of the vRack.*
>
> - From the Subnetwork list, select the **10.0.0.0/16 - YYY**.
> *The YYY value is the name of the datacenter you chose.*
>
> ![Configure options](images/redis_08_vrack_12.png){.thumbnail}
>


### Step 3 - Configure your Public Cloud database instance to accept incoming connections

Follow the *Configure your \<database> instance to accept incoming connections* guide of your selected database type available [here](/products/public-cloud-databases) to configure your service after installation.

> [!primary]
>
> Authorize the whole private network, as defined on previous steps.
>
>![Add virtual network subnet](images/redis_08_vrack_19.png){.thumbnail}
>

The database is now connected to the virtual network, we can use it from any component that is connected to the same vRack.

### Step 4 - Adding a Public Cloud Instance to the vRack

Follow this [guide](/pages/public_cloud/compute/public-cloud-first-steps) to create a new Public Cloud Instance


> [!primary]
>
> At the fourth step, select the desired virtual network **XXXX - my-private-network**.
>
> ![Configure the instance](images/redis_08_vrack_24.png){.thumbnail}
>

> [!primary]
>
>If you want to test the access from an existing instance, read this tutorial to connect it to the vRack: [Configuring vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack#in-case-of-an-existing-instance).
>

### Step 5 - Example of verification with a Public Cloud Databases for Redis

We assume that you have an already set SSH key on your project. For more details, read the [Creating and connecting to your first Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps) page.

Connect to the instance via SSH:

```bash
ssh debian@141.95.107.2
```

Now install the Redis client by installing the Redis server package:

```bash
sudo apt-get update && sudo apt-get install redis-server -y
```

Now connect to the Redis database using the URL retrieved from the OVHcloud Control Panel, with a command such as:

```bash
redis-cli --tls -u "rediss://my-redis-user@redis-2612345abc-abcd1234defg.database.cloud.ovh.net:20185"
```

Authenticate yourself with the AUTH command:

```bash
AUTH my-redis-user myRedisUserPassword
```

Test the overall operation with these sample commands:

```bash
redis-2612345abc-abcd1234defg.database.cloud.ovh.net:20185> ping
PONG
redis-2612345abc-abcd1234defg.database.cloud.ovh.net:20185> SET mykey.test test
OK
redis-2612345abc-abcd1234defg.database.cloud.ovh.net:20185> GET mykey.test
"test"
```

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/de/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!
