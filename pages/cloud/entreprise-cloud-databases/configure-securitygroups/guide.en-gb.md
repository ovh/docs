---
title: 'Configuring security groups'
slug: "configure-security-groups"
excerpt: 'Protect access to your cluster with access filters'
section: 'Getting started with a PostgreSQL cluster'
---

**Last updated 03rd January 2020**

## Objective
Enterprise Cloud Database solutions are compatible with any services that can be accessed via the public network (internet). This includes all OVHcloud cloud products, solutions from other third-party cloud providers, and even your own architecture.

To secure access, you need to authorise IPs to connect to your cluster.

**This guide explains how to manage security groups and rules.**


## Requirements
- an Enterprise Cloud Databases cluster
- access to the OVHcloud Control Panel or API with sufficient rights (admin or technical)
- an IPv4 or IPv4 range to authorise


## Instructions

### Step 1: Get an understanding of security mechanisms.
Your cluster is a service exposed on the public network, and it does not authorise any outside connections by default.
For security reasons, OVHcloud requires you to create security groups and rules in order to connect to your cluster.
These groups and filtering rules work alongside other mechanisms, such as secure traffic via TLS protocol, and data encryption.


### Step 2: Create or delete a security group.
Security groups can contain multiple security rules. They are designed to help you organise and sort your security rules more easily.
To create a group, go to the OVHcloud Control Panel, then click `Settings`{.action}. Next, click `Security groups`{.action}, then `Create a group`{.action}.
You will be asked to provide a name for your group.

Once you have created your security group, it will appear on the same page, where you can edit the group name or delete it.


### Step 3: Create or delete a security rule.
Once you have created a security group, click `...`{.action}, then `Add a rule`{.action}.
Enter the security rule you want, then confirm.


> [!primary]
> The IP addresses you enter must meet the following requirements:
>
> - they must be valid IPs
> - they must not start with 0.0.0.0
> - they must not be a private IP ("10.0.0.0/8", "172.16.0.0/12" or "192.168.0.0/16")
>


> [!primary]
> Please note: you need to keep an active security group containing at least one valid IP address in order to access your cluster.
>


## Go further

Learn how to manage your PostgreSQL cluster by reading [OVHcloud’s technical guides](../enterprise-cloud-databases/){.external} for further information on the technical aspects of how your managed solution works.


