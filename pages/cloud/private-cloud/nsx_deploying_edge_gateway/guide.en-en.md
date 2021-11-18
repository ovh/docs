---
title: How to deploy an NSX Edge Services Gateway
slug: how-to-deploy-an-nsx-edge-gateway
excerpt: Discover how to deploy an NSX Edge Services Gateway
section: NSX
order: 02
---

**Last updated on 11/17/2021**

## Objective

An *NSX Edge Services Gateway* is a VMware appliance providing services such as Firewall, NAT, DHCP, VPN, Load Balancer and High Availability.

**This guide explains how to deploy such an appliance**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))

## Instructions

The following document will focus on deploying a standard appliance.

First, go to the Networking and Security dashboard.

![Menu](images/en01dash.png)

On the left side, navigate to the NSX Edges section.

![NSX](images/en02nsx.png)

Click on +Add then Edge Services Gateway.

![AddNSX](images/en03add.png)

The guided installation  window pops up.   
Fill in the basic information. Only the name is mandatory, the other fields are optional and will either be automatically created or be ignored if non applicable to your case. When done, click Next.    
(Leave Deploy Edge Appliance VM checked. unchecking it would create the rules and settings but nothing would be active until a VM is deployed. We are leaving High Availibility out of our scope for now)
![Basic](images/en04basic.png)

Now on the to the settings window.
The default administrator user name is filled in automatically but you can change it as you need.
Create and confirm a compliant password.
Leave Auto Rule Generation on. It will add firewall, NAT, and routing to enable control traffic to flow for these services. It can be manually added though if you need.
SSH option allows console access on port 22 if needed. We recommend leaving it off by default and only open access as needed. 
FIPS mode enforces encryption and security levels compliant with the United States Federal Information Processing Standards. 
The logging level can be adapted to your needs.
Click Next
![Settings](images/en05settings.png)

Next is the Deployment Configuration.
Select the destination datacenter (if you only have one datacenter in vSphere, there is no choice possible), the size of the appliance (Size will determine processing power and resource consumption) and hit the + button.
![Deployment](images/en06deploy.png)

In the next window, select where the appliance will leave within the chosen datacenter.
Only Cluster/Resource Pool and Datastore are mandatory field. vSphere will select the best suited places for the rest if you do not input data.
Click Add.
![add](images/en07add.png)

Back in the Deployment Configuration window, click Next.

Things get more serious with the Configure Interfaces.
Click on +Add
![Interfaces](images/en08inter.png)

There are 2 types of interfaces:
- Uplink will communicate with the outside of your netword
- Internal will be confined to your network
Let's name an interface and choose Uplink. Click on the pen symbol to select how it will connect out.
![Outside](images/en09out.png)

Typically, in the Distributed Virtual Port Group, the VM Network is the default outside access network. If you customized your environment, select accordingly.
Click OK.
![Net](images/en10standard.png)

Back in the Interface configuration window, add a primary IP and subnet prefix for the interface. 
Click OK.
![addIP](images/en10standard02.png)

Add a second interface. THis time it will be an Internal one.
Click on the pen symbol again to select the network the interface will be part of.
Also, add the primary IP and subnet prefix for the vNIC.
![Inside](images/en11in.png)

Interfaces are ready. Review and click Next
![Ready](images/en12ready.png)

Configure the Default Gateway for external access (this is not mandatory and can be disabled to be done later).
Click Next
![Gateway](images/en13gw.png)

Enable or disable Firewall Default Policy and click Next.
![Firewall](images/en14fw.png)

Review the configuration and hit the Finish button.
![Review](images/en15review.png)

The Gateway will deploy. It will show a Busy and Installing status until done.
![Installing](images/en16busy.png)

If the deployment fails, it will show you basic error message and link to the full logs in the Failed section.
Otherwise, after some time, you appliance will show as Deployed.
![Done](images/en17dones.png)

Congratulations and welcome to the world of NSX!


## Go further

Join our community of users on <https://community.ovh.com/en/>.
