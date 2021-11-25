---
title: NSX Edge Firewall Configuration
slug: nsx-edge-firewall-configuration
excerpt: creating firewall rules  
section: NSX
order: 04
---

**Last updated 11/25/2021**

## Objective

The NSX firewall service restricts or allows network traffic based on rules applied to network nodes or groups.

**This guide explain how to create rules**

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

The Firewall tab shows the status with a simple button to stop or start the service.    
*any change made will need to be published to be validated so you will not shut down the service at the single push of a button*     
Under the status are the default rules set on the firewall.     
Click on `+ Add Rule`{.action}

![Rule](images/en03fw.png){.thumbnail}





## Go further

Join our community of users on <https://community.ovh.com/en/>.
