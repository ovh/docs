---
title: Enable the Private Gateway
slug: private-gateway
excerpt: Learn how to enable Private Gateway on a Hosted Private Cloud infrastructure
section: OVHcloud Features
hidden: true
---

**Last updated 06th January 2023**

## Objective

The vSphere interface is accessible by default over the Internet. For infrastructures that can be managed through the vRack private network, vSphere access can be switched over to the vRack through the private gateway.

**This guide explains how to enable private gateway on your Hosted Private Cloud infrastructure through the OVHcloud API.**

> [!warning]
> Do not enable the Private Gateway if you are using the Disaster Recovery Plan solution [Zerto](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/zerto/) as this would cause Zerto to fail.
>



> [!warning]
>
> Activating the private gateway blocks access from the Internet, so it is important to make sure you can access the vRack.
>

## Requirements

* An [OVHcloud Private Cloud](https://www.ovh.co.uk/private-cloud/){.external} solution
* Access to the vSphere interface
* Being connected to [OVHcloud API](https://api.ovh.com/){.external}.
* Creating [OVHcloud API credentials](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/){.external}.

## Instructions

### Architecture

* The private gateway is a virtual machine (VM) that will be deployed on the infrastructure and connected to the vRack.
* The private gateway does not have a route, so only the user of the same subnet can reach the gateway. The connection from another network must be a source-nat.

> [!warning]
>
> The TLS certificate remains the same (pcc-X-X-X-X-X.ovh.com).
>

### Prerequisites

* Creating a Portgroup on the vRack to connect the private gateway. It must be under the right datacenter.
* Having added the private gateway network to [restrictions per source IP](https://docs.ovh.com/gb/en/private-cloud/control-panel-ovh-private-cloud/).
* Adding a entry in file /etc/hosts or C:\Windows\system32\etc\hosts for pcc-X-X-X-X.ovh.com with the private IP

### Enable the Private Gateway

Before starting, get the following necessary information:

- **serviceName**: the Hosted Private Cloud name (syntax: pcc-X-X-X-X)
- **datacenterId**: the datacenter ID
- **ip** & **netmask**: the IP address and netmask for the private gateway
- **portgroup**: the PortGroup name for vRack connexion.

These elements will be used in the following API calls.

Start activation with:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/enable
>

The call creates a task that will deploy the virtual machine and make the network configuration.

You may receive a resource delivery notification (a new datastore). This will not be charged and will be placed in the **Admin Storages** folder from the **Storage** view. It is added to host the virtual machine without consuming your datastores.

### Disable the Private Gateway

Before starting, get the following necessary information:

- **serviceName**: the Hosted Private Cloud name (syntax: pcc-X-X-X-X)
- **datacenterId**: the datacenter ID

> [!warning]
>
> Turning off the private gateway restores access from the Internet, so it is important to ensure that you have set up the IP filtering you want.
>

Start deactivation with:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway/disable
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
