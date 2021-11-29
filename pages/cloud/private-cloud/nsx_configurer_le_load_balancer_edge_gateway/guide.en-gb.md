---
title: NSX Edge Load Balancer Configuration
slug: nsx-edge-load-balancer-configuration
excerpt: Simple steps to use the NSX Edge load balancing service
section: NSX
order: 05
---

**Last Updated on 11/29/2021**

## Objective

The NSX Edge load balancing service spreads traffic from a specified public or private IP accross several defined VMs in your infrastructure.

**This guide explains how to setup the NSX Edge Load Balancer**

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


The Load Balancer tab shows the status of the service and its basic configuration.


### Global Configuration

In the `Global Configuration`{.action} tab, click on `Edit`{.action}.

![Global](images/en03edit.png){.thumbnail}


Enable options as needed.     
- Load Balancer: global service
- Acceleration: enabled, Load Balancer engine works at layer 4 (faster) vs layer 7 if disabled. 
- Logging: capture logs for the service (log level to be set as intended) 

Click `Save`{.action} when ready.

![Global](images/en04conf.png){.thumbnail}

The service is now active.


#### Service Monitor

A service monitor defines health check parameters for a particular type of network traffic. When you associate a service monitor with a pool, the pool members are monitored according to the service monitor parameters.

By default, three monitors are set up in the NSX Edge:
- TCP
- HTTP
- HTTPS

In the `Service Monitoring`{.action} tab, click `+ Add`{.action}.     

![Monitor](images/en07service.png){.thumbnail}


Set a name and choose the type of monitor you are setting up.     
*you can customize Interval, Timeout and Retries as well*      
Click `Add`{.action}.

![Monitor](images/en08monitor.png){.thumbnail}

Your monitor is added to the list.


#### Application Profiles

An application profile defines the behavior of a particular type of network traffic. After configuring a profile, you associate the profile with a virtual server. The virtual server then processes traffic according to the values specified.

In the `Application Profiles`{.action} tab, click `+ Add`{.action}.     

![Profiles](images/en06app.png){.thumbnail}


Set the type and name of the profile.     
Set the other options in regards to the type chosen.     
Two settings of note:
- Persistence allows session data tracking by cookie or source IP
- Insert X-Forwarded-For HTTP header keeps the originating IP of a client connecting through the load balancer      
Click `Add`{.action}.

![Profiles](images/en06profile.png){.thumbnail}

Your profile is now available.


## Go further

Join our community of users on <https://community.ovh.com/en/>.
