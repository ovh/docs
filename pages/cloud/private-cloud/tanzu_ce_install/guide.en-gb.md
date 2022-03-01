---
title: Install Tanzu Community Edition
slug: tanzu-ce-install
excerpt: Integrate Tanzu Community Edition on your infrastructure
section: Tanzu
order: 01
---

**Last Updated on 01/03/2022**

## Objective

VMware Tanzu Community Edition is a full-featured, easy-to-manage Kubernetes platform.
You can deploy the product on an OVHcloud infrastructure to leverage its functionnality and scalability.

**This guide offers a step by step study case to achieve the objective**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- Have an [NSX Edge Services Gateway](https://docs.ovh.com/gb/en/private-cloud/how-to-deploy-an-nsx-edge-gateway/) deployed
- Have [dhcp](https://docs.ovh.com/gb/en/private-cloud/setup-dhcp-nsx-edge/) services activated on the NSX Gateway


## Instructions

### Planification

As stated in the Requirements, an NSX Edge Services Gateway is used in our study case for Firewall and DHCP purposes.<br>
Other Network components can be used as alternative such as pfsense.<br>

To set up your Network, you will need to define a public IP for external access and an internal network with dhcp service activated for your Tanzu infrastructure.<br>
Your Datacenter comes with a set of public IPs useable for your different needs. They are visible in the Datacenter `Configure`{.action} tab, in the `Network`{.action} section. You will also see the mask and gateway settings on the page.<br>
Check out our [Adding an IP block](https://docs.ovh.com/gb/en/private-cloud/add-ip-block/) documentation if you are out of useable public IPs.

![](images/en00ipblocks.png){.thumbnail}

> [!warning]
>
> Public IPs marked as "Reserved" are used for Datacenter functions and cannot be used for other services.
>

For our study case, the NSX Edge Services Gateway is set up with two interfaces as follows
- an external interface (Uplink) with a primary and secondary public IPs (xxx.xxx.xxx.225 and xxx.xxx.xxx.226)
- an internal interface (Internal) with private IP 172.16.13.1 on VLAN13
- dhcp service distributing VLAN13 address scope 172.16.13.10 through 172.16.13.100
- an SNAT rule to translate adress range 172.16.13.1/24 into secondary public IP xxx.xxx.xxx.226 for external access 

![](images/en01nsxinter.png){.thumbnail}
![](images/en02nsxdhcp.png){.thumbnail}
![](images/en03nsxsnat.png){.thumbnail}


### Bootstrap VM


