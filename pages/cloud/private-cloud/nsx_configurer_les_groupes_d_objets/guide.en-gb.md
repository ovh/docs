---
title: How to set up NSX groups
slug: setup-nsx-groups
excerpt: Create groups to simplify rules management
section: NSX
order: 09
---

**Last updated 11/24/2021**

## Objective

An object, in the Network Security world, is a singular item that can be assigned rules.    
*Examples: IP address, machine name, service, network port, MAC adress...*     
Leveraging object groups limits the number of rules necessary and simplify management.

**This guide explains how to create/manage groups**


## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- Have an [NSX Edge Services Gateway](https://docs.ovh.com/gb/en/private-cloud/how-to-deploy-an-nsx-edge-gateway/) deployed

## Instructions

### Interface access

First, in the vSphere interface menu, go to the `Networking and Security`{.action} dashboard.

![Menu](images/en01dash.png){.thumbnail}

On the left side, navigate to the `Groups and Tags`{.action} section.    
The section shows 7 types of grouping methods:
- Security Tags
- IP Pools
- Service Groups
- Services
- MAC Sets
- IP Sets
- Security Groups

![GUI](images/en02groups.png){.thumbnail}



## Go further

Join our community of users on <https://community.ovh.com/en/>.
