---
title: "Using Openstack Tokens"
slug: using-openstack-tokens
excerpt: "Find out how to create and use Openstack tokens for your actions"
section: "Openstack"
order: 01
updated: 2023-05-02
---

**Last updated 2nd May 2023**

## Objective

**This guide provide good practices to perform a lot of Openstack actions in a short time**

> [!primary]
>
Informations in this guide applies to version 3.0 of the Keystone API
>

## Instructions

### Definitions

- Endpoint: HTTP address pointing directly to a service's API. For example [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) for the authentication endpoint or [https://image.compute.gra11.cloud.ovh.net/](https://image.compute.gra11.cloud.ovh.net/) for the GRA11 zone image management endpoint. 


- Token: A unique string of characters used to authenticate and access resources. The user requests it by entering their credentials (login details) to the authentication API. The token is generated and it is valid for 24 hours.

- OpenRC : To increase efficiency of interactions with the Identity service via the openstack client, OpenStack supports simple client environment scripts also known as OpenRC files.
This is a file containing common options for all clients, but also support unique options.

### Outline of a request
Most requests sent to the OpenStack API must follow an authorization procedure, which involves generating a token and validating it.

However, if you perform too much actions in a short time, some Openstack actions will fall in error due to too much API Calls. Current limit is 60 token creation per minutes and per Openstack user, if you go above this limit, authentication endpoint will answer HTTP 429 error.

For more information, see the [OpenStack API](http://developer.openstack.org/api-guide/quick-start/) documentation.

This guide will show you how to issue an Openstack token, use it for the actions you want to perform and how to revoke a token

### Requirements 

This guide needs the Openstack CLI tool installed on your machine

You can find more informations on this tool with this guide : [OpenStack CLI](https://docs.openstack.org/python-openstackclient/latest/)

You can get it from package manager apt (for Debian-based distribs) or by yum (for RHEL/CentOS-based distribs)

```bash
# Debian-based distribs: 

sudo apt install python3-openstackclient

# CentOS-based distribs :

sudo yum install python3-openstackclient
```

For Windows users, you can follow this guide to export your environment variables : 

[Set OpenStack Environment Variables](https://docs.ovh.com/gb/en/public-cloud/set-openstack-environment-variables/)

### Step 1: Download and source your openrc file

Go on your Control Panel, Public Cloud tab, User & Roles, click on the three dots button, then download openrc file of your Openstack user wanted and specify the region you want to perform actions in

Once downloaded, edit your openrc file and add this line :

```bash
OS_PASSWORD=<your_password>
```

Please adapt this line with your Openstack User password given at the user's creation step

Then, source the file you previously downloaded

```bash
source openrc.sh
```

### Step 2: Issue an Openstack Token


> [!primary]
>
An Openstack token has 24 hours of validity

For a better reliability, you can issue a token every 8 hours (as an example) to avoid proceeding actions with an expired token

Please prefer token creation instead of running directly the wanted action when you want to proceed long actions like snapshots, shelves, image creations, ...
>

Once you have sourced your openrc file, run this command to issue a token

```bash
openstack token issue
```

This command should show you a similar output : 

```bash
+------------+----------------------------------------------------------------+
| Field      | Value                                                          |
+------------+----------------------------------------------------------------+
| expires    | 2023-04-06T08:33:15+0000                                       |
| id         | gAAAAA[...]                                                    |
| project_id | 8a7[...]                                                       |
| user_id    | f99[...]                                                       |
+------------+----------------------------------------------------------------+
```

You can now export token previously issued : 
```bash
export OS_TOKEN = gAAAAA[...]
```

You can also export directly your token with this command : 

```bash
export OS_TOKEN=$(openstack token issue -f value -c id)
```

### Step 3: Remove useless variable

In order to use your issued token to make actions with your user, you have to unset the "OS_USER_DOMAIN_NAME" variable

To do so, run this command:

```bash
unset OS_USER_DOMAIN_NAME
```

### Step 4: Use token to run commands

Now that you have your token, you can use classic Openstack calls to manage your infrastructure

```bash
openstack --os-auth-type token <command>
```

Example : 

```bash
openstack --os-auth-type token image list
```

### Step 5: Revoke Openstack token

Once you performed all the actions you wanted, you can revoke used token to avoid it to be used for any other actions

To do so :

```bash
openstack --os-auth-type token token revoke <token_id>

# or 

openstack --os-auth-type token token revoke $OS_TOKEN
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
