---
title: Securing Inter Segment
slug: nsx-t-intersegment-secure
excerpt: Comment sécuriser les accès entre segment
section: NSX-T
order: 04
---

**Last updated 30th January 2023**

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

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- Having **NSX-T** deployed with two segments configured in your NSX-T configuration, you can use this guide [Segment management in NSX-T](https://docs.ovh.com/gb/en/private-cloud/nsx-t-segment-management).

## Instructions

The networks in each segment behind the **ovh-T1-gw** are not isolated by default.

We will create a rule that isolates these two segments from each other from their subnet addresses :

- ov1-segment : 192.168.1.0/24.
- ov2-segment : 192.168.2.0/24.

Through the **NSX-T** interface select the `Security`{.action} tab, click `Distributed Firewall`{.action} in the vertical menu bar on the left and click `+ ADD POLICY`{.action}.

![01 go to distributed firewall security01](images/01-goto-distributed-firewall-security01.png){.thumbnail}

Go to the `Category Specific Rules`{.action} tab and click `ADD POLICY`{.action}.

![02 Configure policy 01](images/02-configure-policy01.png){.thumbnail}

In the **Name** column, type `ov1 <-> ov2 isolation`{.action}.

![02 Configure policy 02](images/02-configure-policy02.png){.thumbnail}

To the left of your strategy, click on the `three small vertical dots`{.action} and choose `Add Rule`{.action} from the menu.

![02 Configure policy 03](images/02-configure-policy03.png){.thumbnail}

Type `drop ov1 -> ov2`{.action} in the **Name** column.

![02 Configure policy 04](images/02-configure-policy04.png){.thumbnail}

Click on the `pen`{.action} in the **Sources** column.

![02 Configure policy 05](images/02-configure-policy05.png){.thumbnail}

Choose `IP Addresses`{.action}, enter `192.168.1.0/24`{.action} which is the subnet of the ov1-segment segment and click `APPLY`{.action}.

![02 Configure policy 06](images/02-configure-policy06.png){.thumbnail}

Click on the `pen`{.action} in the **Destinations** column.

![02 Configure policy 07](images/02-configure-policy07.png){.thumbnail}

Choose `IP Addresses`{.action}, enter `192.168.2.0/24`{.action} which is the subnet of the ov2 segment and click `APPLY`{.action}.

![02 Configure policy 08](images/02-configure-policy08.png){.thumbnail}

Select `Drop`{.action} in the **Action** column.

![02 Configure policy 09](images/02-configure-policy09.png){.thumbnail}

Click the `three small vertical dots`{.action} to the left of your policy and choose `Add Rule`{.action} from the menu.

![02 Configure policy 10](images/02-configure-policy10.png){.thumbnail}

Type `drop ov2 -> ov1`{.action} in the **Name** column.

![02 Configure policy 11](images/02-configure-policy11.png){.thumbnail}

Click on the `pen`{.action} in the **Sources** column.

![02 Configure policy 12](images/02-configure-policy12.png){.thumbnail}

Choisissez `IP Addresses`{.action}, saisissez `192.168.2.0/24`{.action} qui est le sous-réseau du segment ov2-segment et cliquez sur `APPLY`{.action}.

![02 Configure policy 13](images/02-configure-policy13.png){.thumbnail}

Choose `IP Addresses`{.action}, enter `192.168.2.0/24`{.action} which is the subnet of the ov2 segment and click `APPLY`{.action}.

![02 Configure policy 14](images/02-configure-policy14.png){.thumbnail}

Choose `IP Addresses`{.action}, enter `192.168.1.0/24`{.action} which is the subnet of the ov1-segment segment and click `APPLY`{.action}.

![02 Configure policy 15](images/02-configure-policy15.png){.thumbnail}

Select `Drop`{.action} in the **Action** column.

![02 Configure policy 16](images/02-configure-policy16.png){.thumbnail}

Click `PUBLISH`{.action} to activate the rule.

![02 Configure policy 17](images/02-configure-policy17.png){.thumbnail}

In the **Action** column, a green circle with *Success* indicates that the rule is active. communication between the two segments will no longer be possible.

![02 Configure policy 18](images/02-configure-policy18.png){.thumbnail}


## Go further <a name="gofurther"></a>

[Getting started with NSX-T](https://docs.ovh.com/gb/en/private-cloud/nsx-t-first-steps/)

[Segment management](https://docs.ovh.com/gb/en/nsx-t-segment-management/)

Join our community of users on <https://community.ovh.com/en/>.

