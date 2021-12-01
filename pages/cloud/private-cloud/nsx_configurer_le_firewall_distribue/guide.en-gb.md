---
title: NSX Distributed Firewall Configuration
slug: nsx-distributed-firewall-configuration
section: NSX
order: 08
---

**Last Updated on 12/01/2021**

## Objective

As does the [NSX Edge Firewall](https://docs.ovh.com/gb/en/private-cloud/nsx-edge-firewall-configuration/), The distibuted firewall restricts or allows network traffic based on rules applied to network nodes or groups.       
The distributed firewall optimizes traffic and bandwidth consumption by applying rules to packets before they are sent to the Edge firewall. 

**This guide explains how to create rules**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))


## Instructions

### Interface access

In the vSphere interface menu, go to the `Networking and Security`{.action} dashboard.

![Menu](images/en01dash.png){.thumbnail}


On the left side, navigate to the `Firewall`{.action} section.

![FW](images/en02fw.png){.thumbnail}


The distributed Firewall allows for
- `General`{.action} rules (layer 3 and up)
- `Ethernet`{.action} rules (layer 2)
- `Partner Services`{.action} rules (requires integration of third party products)

![FW](images/en03layer.png){.thumbnail}





## Go further

Join our community of users on <https://community.ovh.com/en/>.
