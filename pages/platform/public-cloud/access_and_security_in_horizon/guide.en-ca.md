---
title: Access and security settings in Horizon
excerpt: Find out how to manage secure access to your instances
slug: access_and_security_in_horizon
legacy_guide_number: g1774
section: Horizon
order: 07
---

**Last updated 26th May 2021**

## Objective

The OpenStack Horizon interface provides options to configure access to your instances and other services.<br>
For example, you can define security groups to filter incoming and outgoing connections or download an OpenRC file containing the credentials for the OpenStack API.

## Requirements

- [Configuring user access to Horizon](../horizon/)


## Instructions

Log in to [the Horizon interface](https://horizon.cloud.ovh.net/auth/login/).

The access and security settings consist of the following sections, accessible via the left-hand menu:

- **API Access** (under `Project`{.action})

The API Access table lists the service endpoints of the OpenStack API.

![security Horizon](images/api_access.png){.thumbnail}

To review the access values to use with the API, click on `View Credentials`{.action}.

Clicking on the button `Download OpenStack RC File`{.action} opens a drop-down menu from which you can choose the appropriate RC file to download.

- **Key Pairs** (under `Project`{.action} / `Compute`{.action})

This section allows you to store and manage SSH key pairs. You can simply create and add a public and a private key by clicking on the button `Create Key Pair`{.action}.

![security Horizon](images/key_pairs.png){.thumbnail}

If you have an existing key to add, click on `Import Public Key`{.action}. In the popup window, you can enter a key string or select a key file.

This interface section includes some basic instructions; for more information about SSH keys please refer to [this guide](../create-ssh-keys/).

- **Security Groups** (under `Project`{.action} / `Network`{.action})

Security groups are sets of filter rules that are applied to network interfaces. You can use them to manage access to instances by IP addresses and ports.

![security Horizon](images/security_groups.png){.thumbnail}

Add a security group by clicking on `Create Security Group`{.action}, then apply customised or preset rules to it via the `Manage Rules`{.action} button in the table.


## Go further

Join our community of users on <https://community.ovh.com/en/>.
