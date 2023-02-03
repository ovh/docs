---
title: First step with NSX-T
slug: nsx-t-first-steps
excerpt: Discover NSX-T
section: NSX-T
order: 01
---

**Last updated 03th February 2023**

> [!warning]
> Guides for **NSX-T** in the VMware solution are not final, they will be modified when the BETA version is released and finalised when the final version is ready.
>

## Objective

**This guide is an introduction to the NSX-T**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Overview

NSX-T is a Software-Defined Networking (SDN)** solution provided by VMware. OVHcloud is offering this service in place of NSX-V in its Hosted Private Cloud Powered by VMware solution. For the ALPHA version of NSX-T to work, two hosts are deployed with a dedicated virtual machine for NSX-T on each host, allowing redundancy in the event of one of the hosts failing.

When a customer subscribes to the NSX-T offer and is enabled, a pre-configuration is applied with two gateways:

* **Tier-0 Gateway** : For connections between the cluster and the public INTERNET network, known as north-south traffic.
* **Tier-1 Gateway**: For communication between cluster virtual segments. This type of connection is called east-west traffic.

The two gateways are interconnected to allow internal networks to communicate outside the cluster.

OVHcloud provides a block of 8 public IP addresses, some of which are reserved. The **HA VIP** address is preconfigured, it is used for SNAT by default on future internal segments.


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

The diagram below shows the network topology from top to bottom:

- The two physical interfaces that allow redundancy of internet access in case of failure (Both interfaces use public IP addresses that are not usable for client configuration).
- The North-South gateway that acts as the link between the Internet network and the internal networks of your cluster.
- The connection between the **ovh-t0-gw** and **ovh-t1-gw** gateways is via IP addresses reserved for this purpose.
- The East-West gateway to ensure communication between the cluster’s internal networks.

In the bottom right you have **ovh-segment-nsxpublic**, it is a network segment connected to the OVHcloud public network on VLAN 2197 it contains the network of public addresses usable for customer configurations. Click the `Rectangle`{.action} below to display this network.

![02 Display network topology 03](images/02-display-network-topology03.png){.thumbnail}

In the right pane you have the subnet used by NSX-T on the public network.

![02 Display network topology 04](images/02-display-network-topology04.png){.thumbnail}

### Display of virtual IP address **HA VIP**

When NSX-T is deployed in ALPHA version, a virtual IP address is assigned and it also serves for the SNAT of future segments on the cluster’s internal network. We will see how to retrieve this information.

Stay on the `Networking`{.action} tab and click on `Tier-0 Gateways`{.action} on the left. in the **Connectivity** category.

![03 Display public vip 01](images/03-display-public-vip01.png)){.thumbnail}

Click the scroll button `>`{.action} to the left of **Name** to view the configuration.

![03 Display public vip 02](images/03-display-public-vip02.png)){.thumbnail}

Click on the `Number`{.action} to the right of **HA VIP Configuration**.

![03 Display public vip 03](images/03-display-public-vip03.png)){.thumbnail}

You see the public virtual IP address that can be used in your **NSX-T** configurations, click `Close`{.action} to close this window.

![03 Display public vip 03](images/03-display-public-vip04.png)){.thumbnail}

### NAT Default Configuration Information

A default SNAT configuration is applied, which allows Internet access from the private networks of your future segments.

From the `Networking`{.action} tab, click `NAT`{.action} to view the default configuration of NAT rules.

The default rule for the **SNAT** shows that the virtual IP address is used to translate from the networks within the cluster.

![04 Display default SNAT Configuration 01](images/04-display-default-nat-configuration01.png){.thumbnail}

You have just seen the default configuration. You can refer to the other OVHcloud guides for NSX-T to create segments, manage DHCP, perform DNAT port redirection, load balancing, VPN, etc...

## Go further <a name="gofurther"></a>

Join our community of users on <https://community.ovh.com/en/>.

