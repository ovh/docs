---
title: First step with NSX-T
slug: nsx-t-first-steps
excerpt: Discover the NSX-T interface
section: NSX-T
order: 01
---

**Last updated 04th November 2022**

> [!warning]
> Guides for **NSX-T** in the VMware solution are not final, they will be modified when the BETA version is released and finalised when the final version is ready.
>


## Objectif

**This guide is an introduction to the NSX-T interface**

NSX-T is a **Software-Defined Networking (SDN)** solution provided by VMware. OVHcloud offers this service as an alternative to **NSX-V**. This service is available in **VMware on OVHcloud** solutions.

When a customer subscribes to **NSX-T** offer and what is enabled some parameters are already active like: 

- An external gateway named **ovh-T0-gw** that is connected to the Internet and another internal gateway.
- An internal gateway named **ovh-T1-gw** which is connected to the external gateway.

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>



## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en/enterprise/products/hosted-private-cloud/) to receive login credentials.
- Having a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we))

## Instructions

### Logging in to the NSX-T administration interface

You can connect to NSX-T from the URL of your VMware cluster, provided by OVHcloud, in the form **https://pcc-xxxxx.ovh.xx`.

From the homepage for your cluster, click the `NSX NSX-T`{.action} icon.

![01 NSX-T Connection 01](images/01-nsxt-connection01.png)

Enter your credentials and click `LOG IN`{.action}.

> [!warning]
> The user account is for your VMware cluster, followed by **@your-pcc-fqdn-name**
>

![01 NSX-T Connection 02](images/01-nsxt-connection02.png)

The NSX-T interface appears.

![01 NSX-T Connection 03](images/01-nsxt-connection03.png)

### Display the default configuration

We will see the network topology configured by default when deploying the **NSX-T** service.

In the **NSX-T** interface, click on the `Networking`{.action} tab.

![02 Display network topology 01](images/02-display-network-topology01.png)

A view of the entire network is displayed.

Left-click on `Network Topology`{.action}.

![02 Display network topology 02](images/02-display-network-topology02.png)

A network topology view is available with two public IP addresses connected to the gateway **ovh-T0-gateway** and the connection to the gateway **ovh-T1-gateway**.

Inside initial configuration, there is no link between your VMware infrastructure and the internet.

![03 Display network topology 03](images/02-display-network-topology03.png)

## Go further <a name="gofurther"></a>

Join our community of users on <https://community.ovh.com/en/>.
