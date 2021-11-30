---
title: NSX Edge Gateway VPN Configuration 
slug: nsx-edge-gateway-vpn-configuration
excerpt: Use the NSX Edge VPN service to connect to remote sites
section: NSX
order: 07
---

**Last Updated on 11/30/2021**

## Objective

VPN creates a secured tunnel accross public networks to connect remote clients or sites to your infrastructure.

**This guide explains the two ways to do it through the NSX Edge Gateway**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- Have an [NSX Edge Services Gateway](https://docs.ovh.com/gb/en/private-cloud/how-to-deploy-an-nsx-edge-gateway/) deployed

## Instructions

### Interface access

In the vSphere interface menu, go to the `Networking and Security`{.action} dashboard.

![Menu](images/en01dash.png){.thumbnail}


On the left side, navigate to the `NSX Edges`{.action} section then click on the appliance you're setting up.

![NSX](images/en02nsx.png){.thumbnail}


In the VPN tab, you'll notice two types of VPN
- IPsec VPN : Internet Protocol Security VPN secures traffic between two networks connected over a public network through IPSec gateways called endpoints. It is hardware agnostic.
- L2 VPN : In the case of NSX Edge Gateway, Layer 2 VPN connects NSX appliances across multiple sites and secures the connection through IPsec. 

![VPN](images/en03vpn.png){.thumbnail}


### IPsec VPN

### L2 VPN

## Go further

Join our community of users on <https://community.ovh.com/en/>.
