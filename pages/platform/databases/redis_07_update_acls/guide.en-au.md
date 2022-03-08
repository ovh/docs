---
title: Redis - Update ACLs
slug: redis/acls
excerpt: Update Redis users ACLs with OVHcloud API 
section: Redis
order: 1
---

**Last updated March 8<sup>th</sup>, 2022**

## Objective

This page shows you how to update your Redis user ACLs with the OVHcloud API.

## Users and roles

As explained on this page: [Redis Capabilities, Users & roles](https://docs.ovh.com/au/en/publiccloud/databases/redis/capabilities/#users-and-roles) we cannot update users' ACLs via the manager.

You must therefore use the OVHcloud() API.

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au).
- A [Public Cloud project](https://www.ovhcloud.com/en-au/public-cloud/) in your OVHcloud account.
- An up and running Public Cloud Database for Redis.

If you have never used the OVHcloud API before, then follow this tutorial: [First Steps with the OVHcloud APIs](https://docs.ovh.com/au/en/api/first-steps-with-ovh-api/).

For the rest of this tutorial, we consider that you are connected and identified on the site [API.OVH.com](https://api.ovh.com/console).

## Get your service, Redis cluster and user ids

start by identifying the service, the redis cluster and the user you want to apply the changes to.

### Get the desired service id

Open this url: [https://api.ovh.com/console/#/cloud/project~GET](https://api.ovh.com/console/#/cloud/project~GET) in a web browser, then click on the [Execute] button.

From the resulting list, select and copy the service identifier corresponding to the desired service, also known as **serviceName**.

![API path project](images/redis_07_update_acls_01.png){.thumbnail}

### Get the desired Redis cluster id

Open this url: [https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/database/redis~GET](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/database/redis~GET) in a web browser, paste the service id into the **serviceName** input field, then click on [Execute].

From the resulting list, select and copy the Redis cluster id, also known as **clusterId**.

![API path cluster](images/redis_07_update_acls_02.png){.thumbnail}

### Get the desired user id

Open this url: [https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/database/redis/%7BclusterId%7D/user~GET](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/database/redis/%7BclusterId%7D/user~GET) in a web browser, paste the service id into the **serviceName** input field, paste the cluster id into the **clusterId** input field, then click on [Execute].

From the resulting list, find and select the desired **user**.

![API path user](images/redis_07_update_acls_03.png){.thumbnail}

To get more details on a user, simply add the **user** value to the end of the previous request: [https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/database/redis/%7BclusterId%7D/user/%7BuserId%7D~GET](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/database/redis/%7BclusterId%7D/user/%7BuserId%7D~GET)

Example:

![API path user detail](images/redis_07_update_acls_04.png){.thumbnail}

The result shows four string arrays, which represent the ACLs defined for the given user.

- Keys: Allow and disallow certain keys and key permissions.
- Categories: Add all the commands in such category to be called by the user, with valid categories being like @admin, @set, @sortedset,...
- Commands: Add or remove the command to the list of commands the user can call.
- Channels: Allow and disallow Pub/Sub channels.

You can follow the official Redis documentation about users and ACL: [https://redis.io/topics/acl](https://redis.io/topics/acl){.external}.

## Update an ACL with the API

Open the url: [https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/database/redis/%7BclusterId%7D/user/%7BuserId%7D~PUT](https://api.ovh.com/console/#/cloud/project/%7BserviceName%7D/database/redis/%7BclusterId%7D/user/%7BuserId%7D~PUT) in a web browser, and paste the corresponding identifiers (**serviceName**, **clusterId**, **user**).

Now, according the strategy you choosed, set the different values into the string arrays, as example:

![API update ACL string arrays](images/redis_07_update_acls_05.png){.thumbnail}

Click on the [Execute] button and see that tha Redis user ACL has been changed:

![API ACL change result](images/redis_07_update_acls_06.png){.thumbnail}

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
