---
title: First step with NSX-T
slug: nsx-t-first-steps
excerpt: Discover NSX-T
section: NSX-T
order: 01
---

**Last updated 30th January 2023**

> [!warning]
> Guides for **NSX-T** in the VMware solution are not final, they will be modified when the BETA version is released and finalised when the final version is ready.
>


## Objectif

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

**This guide is an introduction to the NSX-T**

NSX-T is a Software-Defined Networking (SDN)** solution provided by VMware. OVHcloud is offering this service to replace NSX-V in its Hosted Private Cloud Powerer by VMware solution.

When a customer subscribes to the NSX-T offer and is enabled, a preset is applied with two gateways :

- **Tier-0 Gateway** : For connections between the cluster and the public INTERNET network, known as north-south traffic.
- **Tier-1 Gateway**: For communication between cluster virtual segments. This type of connection is called east-west traffic.

The two gateways are interconnected to allow internal networks to communicate outside the cluster.

OVHcloud provides a block of 16 public IP addresses, some of which are reserved. You can use 8 addresses from the second address in the block to perform port redirections.

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)


## Instructions

### Logging in to the NSX-T administration interface

You can connect to NSX-T from the URL of your cluster, provided by OVHcloud, in the form **https://pcc-xxxxx.ovh.xx**.

From the homepage for your cluster, click the `NSX NSX-T`{.action} icon.

![01 NSX-T Connection 01](images/01-nsxt-connection01.png){.thumbnail}

Enter your credentials and click `LOG IN`{.action}.

> [!warning]
> To authenticate on the NSX-T interface, you need to use an account provided by OVHcloud followed by your cluster’s FQDN, such as **admin@pcc-xxxxx.ovh.xx**.
>

![01 NSX-T Connection 02](images/01-nsxt-connection02.png){.thumbnail}

The NSX-T interface appears.

![01 NSX-T Connection 03](images/01-nsxt-connection03.png){.thumbnail}

### Display the default configuration

We will see the network topology configured by default when deploying the **NSX-T** service.

In the **NSX-T** interface, click on the `Networking`{.action} tab.

![02 Display network topology 01](images/02-display-network-topology01.png){.thumbnail}

A view of all network elements is displayed.

Left-click on `Network Topology`{.action}.

![02 Display network topology 02](images/02-display-network-topology02.png){.thumbnail}

A diagram representing the network topology is available with two public IP addresses (both addresses are for NSX-T and are not usable for port redirections) connected to the **ovh-T0-gateway** and the connection to the **ovh-T1-gateway**.

![03 Display network topology 03](images/02-display-network-topology03.png){.thumbnail}

## Go further <a name="gofurther"></a>

Join our community of users on <https://community.ovh.com/en/>.

