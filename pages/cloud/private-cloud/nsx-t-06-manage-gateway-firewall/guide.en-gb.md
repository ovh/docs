---
title: Gateway Firewall Management
slug: nsx-t-manage-gateway-firewall
excerpt: How to administer gateway firewall
section: NSX-T
order: 06
---

**Last updated 13th February 2023**

> [!warning]
> Guides for **NSX-T** in the VMware solution are not final, they will be modified when the BETA version is released and finalised when the final version is ready.
>


## Objectif

**How to administer the gateway firewall**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/) if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- Having **NSX-T** deployed with one segment configured in your NSX-T configuration, you can use this guide [Segment management in NSX-T](https://docs.ovh.com/gb/en/private-cloud/nsx-t-segment-management).

# Overview

Gateway Firewall allows filtering between internal segments and the network outside the cluster in and out. 

It works on the North-South (Tier-0 Gateways) and East-West (Tier-1 Gateways) gateways if the source or destination is not inside the cluster.

If you want to create filtering rules between internal segments, you will need to use distributed firewall using this guide [Distributed Firewall Management](https://docs.ovh.com/gb/en/nsx-t-manage-distributed-firewall).

## Instructions

We will create a rule that blocks access to the entire external network of a cluster from a group that contains a segment. You can use this guide to create [Distributed Firewall Management] groups (https://docs.ovh.com/en/gb/nsx-t-manage-distributed-firewall) and **any** groups for the destination.

Allez sur l'onglet `Security`{.action}, Sélectionnez `Gateway Firewall`{.action} et cliquez sur `+ ADD POLICY`{.action}

![01 Create gateway firewall rules 01](images/01-create-gateway-firewall-rules01.png){.thumbnail}

Select `ovh-T0-gw`{.action} to the right of **Gateway**, name your policy `my policy`{.action} below the **Name** column and click the `vertical suspend points`{.action} to the left of your policy.

![01 Create gateway firewall rules 02](images/01-create-gateway-firewall-rules02.png){.thumbnail}

Click `Add Rule`{.action} in the menu.

![01 Create gateway firewall rules 03](images/01-create-gateway-firewall-rules03.png){.thumbnail}

Name your rule `block segment1 to any`{.action} below the **Name** column.

![01 Create gateway firewall rules 04](images/01-create-gateway-firewall-rules04.png){.thumbnail}

Click on the `pen`{.action} to the left of Any in the **Source** column.

![01 Create gateway firewall rules 05](images/01-create-gateway-firewall-rules05.png){.thumbnail}

Stay in the `Group`{.action} tab, select the group `g-segment1`{.action} and click `APPLY`{.action}.

![01 Create gateway firewall rules 06](images/01-create-gateway-firewall-rules06.png){.thumbnail}

Choose `Drop`{.action} under the **Action** column and click `PUBLISH`{.action}.

![01 Create gateway firewall rules 07](images/01-create-gateway-firewall-rules07.png){.thumbnail}

Your rule is active on the gateway **ovh-T0-gw** it blocks all outgoing traffic from members of the group **g-segment01**.

## Go further <a name="gofurther"></a>

[Getting started with NSX-T](https://docs.ovh.com/gb/en/private-cloud/nsx-t-first-steps/)

[Segment management](https://docs.ovh.com/gb/en/nsx-t-segment-management/)

[Gestion du pare-feu distribué](https://docs.ovh.com/en/gb/nsx-t-manage-distributed-firewall).

[Documentation VMware sur les pare-feux de passerelles dans NSX-T](https://docs.vmware.com/en/VMware-NSX-T-Data-Center/3.2/administration/GUID-A52E1A6F-F27D-41D9-9493-E3A75EC35481.html)


Join our community of users on <https://community.ovh.com/en/>.

