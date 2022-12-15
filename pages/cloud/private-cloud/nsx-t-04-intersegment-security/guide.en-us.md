---
title: DHCP Configuration
slug: nsx-t-dhcp-configuration
excerpt: How to Add a DHCP Server to a Segment
section: NSX-T
order: 03
---

**Last updated 14th December 2022**

> [!warning]
> Guides for **NSX-T** in the VMware solution are not final, they will be modified when the BETA version is released and finalised when the final version is ready.
>


## Objectif

**How to Configure a DHCP Server in a Segment**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. Nevertheless, we recommend contacting a specialist provider if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Prérequis

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en/enterprise/products/hosted-private-cloud/) to receive login credentials.
- Having a user account with access to vSphere as well as the specific rights for NSX-T (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we))
- **NSX-T** deployed.

## Instructions

We will configure a DHCP server on a segment connected to **OVH-T1-gw**. This segment is configured with a gateway in **192.168.1.254/24**.

From the NSX-T interface go to the `Networking`{.action} tab and click on `Segments`{.action} on the left.

![01 add DHCP ON Segment 01](images/01-add-dhcp-on-segment01.png)

Click the specified configuration icon with `three vertical dots`{.action} to the left of your segment and choose `Edit`{.action}.

![01 add DHCP ON Segment 02](images/01-add-dhcp-on-segment02.png)

Click `Set DHCP CONFIG`{.action}.

![01 add DHCP ON Segment 03](images/01-add-dhcp-on-segment03.png)

Select `Local DHCP Server`{.action} on the left in **DHCP Type**. Then click the configuration icon with `three vertical dots`{.action} to the right of **DHCP Profile** and choose `Create New`{.action}.

![01 add DHCP ON Segment 04](images/01-add-dhcp-on-segment04.png)

Choose this information :

* **Name** : Name of your DHCP server.
* **Server IP Address** : The IP address of your DHCP server, which must not be the same as your gateway IP address in this form 192.168.1.253/24.
* **Edge Cluster** : Select your cluster edge.

And click `Save`{.action}.

![01 add DHCP ON Segment 05](images/01-add-dhcp-on-segment05.png)

Enter these values:

* **DHCP Server Address**: DHCP server address like 192.168.1.253/24
* **DHCP Range**: Scope of your DHCP server with start address and end address separated a dash like 192.168.1.10-192.168.1.200
* **DNS Server**: DNS servers like 213.186.33.99 which is the OVHcloud DHCP server.

Then click `APPLY`{.action}.

![01 add DHCP ON Segment 06](images/01-add-dhcp-on-segment06.png)

Virtual machines on this segment can now be configured with DHCP.

## Go further <a name="gofurther"></a>

[Getting started with NSX-T](https://docs.ovh.com/us/en/private-cloud/nsx-t-first-steps/)

[Segment management](https://docs.ovh.com/us/en/nsx-t-segment-management/)

Join our community of users on <https://community.ovh.com/en/>.

