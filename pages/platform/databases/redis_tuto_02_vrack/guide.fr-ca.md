---
title: Redis - Connecter Redis au vRack (EN)
slug: redis/vrack
excerpt: Connect an OVHcloud managed Redis cluster to vrack
section: Redis - Tutorials
order: 020
routes:
    canonical: 'https://docs.ovh.com/gb/en/publiccloud/databases/redis/vrack/'
---

**Last updated March 17<sup>th</sup>, 2022**

## Objective

This page shows you how to create and use a managed Redis cluster with vRack.

We are going to connect a cloud instance, hosted in a datacenter, to a [Redis](https://redis.io/){.external} database, hosted in another datacenter, like this:

![vrack schema](images/redis_08_vrack_01.png){.thumbnail}

This will be, from a configuration point of view, the equivalent of this:

![vrack schema equivalent](images/redis_08_vrack_02.png){.thumbnail}

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/fr-ca/public-cloud/) in your OVHcloud account.
- An [Activated Vrack](https://docs.ovh.com/ca/fr/public-cloud/public-cloud-vrack/).

The OVHcloud vRack is a private network solution that enables our customers to route traffic between OVHcloud dedicated servers as well as other OVHcloud services, such as databases. The vRack also allows you to add Public Cloud instances to your private network to create an infrastructure of physical and virtual resources.

Your vRack must be configured to be accessible from all the services in your Public cloud project.

![vrack configured](images/redis_08_vrack_03.png){.thumbnail}

## Instructions

### Creating a virtual network

The first step is to create the virtual network that will be used in your vRack.

To proceed, from the `Public cloud`{.action} tab, click on the `Private Network`{.action} menu, then click on the `Add Private Network`{.action} button.

![Add virtual network](images/redis_08_vrack_04.png){.thumbnail}

You can define yourself a **VLAN ID** for your virtual network. Value must be between 2 and 4,000.

Define your own range or let dynamic address distribution if you want to use DHCP.

By default, the 10.0.0.0/16 CIDR address is defined. Different subnets can be added later.

![Configure virtual network](images/redis_08_vrack_05.png){.thumbnail}

Give a name to your virtual network.

![Name virtual network](images/redis_08_vrack_06.png){.thumbnail}

Choose the regions where you want your virtual network to operate.

The subnets addresses are automatically ajusted, depending on the number of regions you choose.

![Choose regions](images/redis_08_vrack_07.png){.thumbnail}

Your vRack is ready!

### Creating a Redis database connected to the private network

Create a new Redis database service:

![Choose database](images/redis_08_vrack_08.png){.thumbnail}

Choose the **Business** solution.

According the [Redis capabilities page](https://docs.ovh.com/ca/fr/publiccloud/databases/redis/capabilities/#plans), the use of private networks with databases is allowed for **Business** and **Enterprise** plans.

![Choose plan](images/redis_08_vrack_09.png){.thumbnail}

Choose the region in which you want to create your database.

![Choose region](images/redis_08_vrack_10.png){.thumbnail}

Select the instances model.

![Choose model](images/redis_08_vrack_11.png){.thumbnail}

Give a name to the database.

Select **Private** from the Network Type list, then select **XXXX - my-private-network**. The XXX value is the ID of the vRack.

From the Subnetwork list, select the **10.0.0.0/16 - YYY**. The YYY value is the name of the datacenter you chose.

![Configure options](images/redis_08_vrack_12.png){.thumbnail}

The final section will display a summary of your order as well as the API equivalent for creating this database instance with the [OVHcloud API](https://docs.ovh.com/ca/fr/api/first-steps-with-ovh-api/).

![Resume database creation](images/redis_08_vrack_13.png){.thumbnail}

Wait a few minutes before the end of the creation of all nodes. When this is done, status changes to **ready**.

![Nodes are ready](images/redis_08_vrack_14.png){.thumbnail}

Now you can add users and roles to interact with the database.

From the `Users`{.action} tab, click on the `+ Add user`{.action} button.

![Add users and roles](images/redis_08_vrack_15.png){.thumbnail}

Name the Redis user and give him some rights.

Example:

- Keys: *.*
- Categories: +@all
- Commands: +ping, +get, +set
- Channels: *

You can follow the official Redis documentation about users and ACL: [https://redis.io/topics/acl](https://redis.io/topics/acl){.external}.

![Create user and roles](images/redis_08_vrack_16.png){.thumbnail}

Once the user is created, the password is displayed in plain text. Save it in a password manager as it won't be displayed again.

![Get user password](images/redis_08_vrack_17.png){.thumbnail}

The last step is to authorize access from your required IPs.

From the `Authorised IPs`{.action} tab, click on the `+ Add an IP address or IP block (CIDR)`{.action} button.

![Authorize IPs](images/redis_08_vrack_18.png){.thumbnail}

The simplest way is to authorize the whole private network, as defined on previous steps.

![Add virtual network subnet](images/redis_08_vrack_19.png){.thumbnail}

Check that everything is fine:

- Status is ready.
- At least one user is defined.
- Some IPs added to the white list.

![Redis database ready](images/redis_08_vrack_20.png){.thumbnail}

That's it! Your managed Redis database is ready to be accessed within the vRack virtual network.

### Adding another instance to the vRack

The database is now connected to the virtual network, we can use it from any component that is connected to the same vRack.

If you want to test the access from an existing instance, read this tutorial to connect it to the vRack: [Configuring vRack for Public Cloud](https://docs.ovh.com/ca/fr/public-cloud/public-cloud-vrack/#cases-of-an-already-existing-instance_2).

For this tutorial, create a new instance by following the next steps.

Start by selecting a model.

![Select the model](images/redis_08_vrack_21.png){.thumbnail}

Choose another region than the database one.

![Select a region](images/redis_08_vrack_22.png){.thumbnail}

Select **Debian** from the images list.

![Select an image](images/redis_08_vrack_23.png){.thumbnail}

Adjust the number of instances to be created, give a name, then select the desired virtual network **XXXX - my-private-network**.

![Configure the instance](images/redis_08_vrack_24.png){.thumbnail}

Choose your billing option.

![Select the billing period](images/redis_08_vrack_25.png){.thumbnail}

Wait for the **Activated** status.

![Status activated](images/redis_08_vrack_26.png){.thumbnail}

### Connecting and installing the Redis client

We assume that you have an already set SSH key on your project. For more details, read the [Creating and connecting to your first Public Cloud instance](https://docs.ovh.com/ca/fr/public-cloud/premiers-pas-instance-public-cloud/) page.

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

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
