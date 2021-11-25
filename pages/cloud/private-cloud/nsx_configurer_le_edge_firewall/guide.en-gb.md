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

![Rule](images/en03fw.png){.thumbnail}

### Firewall Rule

The basics of a firewall rule is to manage identified service(s) from specified source(s) to specified destination(s).     

Click on `+ Add Rule`{.action}

The new rule shows with:
- Activation slider
- Selection box for specific actions *(order chande, deletion...)*
- Name
- ID
- Type
- Source
- Destination
- Service
- Action
- Log slider
- Advanced settings

![Rule](images/en03rule.png){.thumbnail}


Name the rule by clicking the field. ID and Type fields are automatically populated.

### Source

The source field defines the origin of the traffic.    
Hover over the field and click on the `pencil`{.action} icon.     
You can add objects and/or IP addresses as needed.     
*If Negate Source is turned on, the rule is applied to all sources except for the sources selected.*     
Click `Save`{.action} when ready.

![Source](images/en04sourceobjects.png){.thumbnail}
![Source](images/en05sourceIP.png){.thumbnail}


### Destination

The destination field defines the target of the traffic.    
Hover over the field and click on the `pencil`{.action} icon.     
You have the same choices for destination as you had for source.    
*If Negate Destination is turned on, the rule is applied to all destinations except for the destinations selected.*
Click `Save`{.action} when ready.

![Destination](images/en07destobjects.png){.thumbnail}
![Destination](images/en07destIP.png){.thumbnail}


### Service

The service field defines the type of traffic aimed at.    
Hover over the field and click on the `pencil`{.action} icon.     
You have the choice between using existing services and groups or add raw ports/protocols.    
*Clicking on an existing service or group will show you a description with the ports and protocols involved.*
Click `Save`{.action} when ready.

![Service](images/en08servsg.png){.thumbnail}
![Service](images/en09servdetail.png){.thumbnail}
![Service](images/en10servport.png){.thumbnail}


### Action

The action field defines how to handle the traffic.    
You have three possible options:
- Accept. The traffic will go through.
- Deny. The traffic will be blocked with no more communication.
- Reject. The traffic will be blocked and a port unreachable will be sent to the source.     
Select the desired outcome.

![Action](images/en11action.png){.thumbnail}


### Log

The log slider allows you to keep a journal of events on the rule.


### Advanced Settings

You have three functions in the advanced settings:
- a comment section
- a statistics section
- an advanced section that allows you to define if the target traffic is inbound, outbound or both and in case of NAT traffic, if the rule applies to the original or translated source.

![Advanced](images/en12adv.png){.thumbnail}


### Rule Order

Once the rule set up, you see it in the list.   
The number of the rule in the list defines its priority.    
Rules are applied from top to bottom, and the first rule that matches the traffic overrides all the other rules below.    
That means that in the case of conflicting rules, the rule with the highest priority (lowest number) will be applied.    
You can modify the rule order by selecting a rule and using the up and down arrows.    

![Order](images/en13order.png){.thumbnail}


### Publish

No creation/modification of rule will be registered until you click the `Publish`{.action} button.

![Publish](images/en14publish.png){.thumbnail}
![Publish](images/en15done.png){.thumbnail}


Congratulations and thank you.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
