---
title: How to disconnect an ISO image from a VM
excerpt: How do you disconnect an ISO image from a virtual machine?
updated: 2022-04-27
---

## Objective

If an ISO is connected to a VM, the VM cannot be migrated, either manually or automatically. This can prevent DRS from working properly, and the host to be put in maintenance mode.

## Requirements

- You must be an administrative contact for the [Hosted Private Cloud](https://www.ovhcloud.com/en-ie/enterprise/products/hosted-private-cloud/) infrastructure to receive login credentials.
- An active username (created in the [OVHcloud Control Panel](/links/manager))

## Instructions

If you simply untick the `Connected`{.action} checkbox in the ISO File datastore, the VM is still linked to the ISO:

![Disconnect](images/disconnect1.png){.thumbnail}

To disconnect the ISO from the VM, first click the dropdown arrow next to CD/DVD drive 1 and select `Client Device`{.action}.

![Disconnect](images/disconnect2.png){.thumbnail}

The ISO is now disconnected:

![Disconnect](images/disconnect3.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.