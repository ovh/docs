---
title: 'Adding an ESXi server to a vSAN cluster'
slug: vmware-vsan-add-host
excerpt: 'Find out how to add an ESXi server to an existing vSAN cluster'
section: 'VMware vSphere features'
---

**Last updated 22/12/2021**

## Objective

This guide explains how to add a new ESXi server storage to an existing vSAN cluster.

## Requirements

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- Have a [vSan Datastore](https://docs.ovh.com/gb/en/private-cloud/vmware-vsan/) deployed

## Instructions

### Order a new vSan host

Navigate to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and log on with your administrative credentials.

![LOGIN](images/en01login.png){.thumbnail}


In the `Hosted Private Cloud`{.action} section, Select your datacenter and go to the `Hosts`{.action} tab.<br>
Click on the `Order a Host`{.action} button.

![ORDER](images/en02order.png){.thumbnail}


Select the fitting vSAN host for your need and click `Confirm Order`{.action}

![LOGIN](images/en03hosttype.png){.thumbnail}


Verify the recap of your order and click `Next`{.action}

![LOGIN](images/en04recap.png){.thumbnail}


Check the boxes to accept the terms and conditions and go on to the payment.

![LOGIN](images/en05accept.png){.thumbnail}


You'll get a confirmation of order with a number.

![LOGIN](images/en06ordered.png){.thumbnail}


The new host will be automatically integrated to your infrastructure and you will receive a confirmation email when it is ready for use in vSphere.


### Add new vSan host storage to your datastore




Since OVHcloud servers are automatically preconfigured on delivery, adding a host to a vSAN cluster simply specifies which disks will be integrated into the datastore.

Once connected to vCenter, go to the `Hosts and Clusters`{.action} menu, select the concerned cluster, click on the `Configure`{.action} tab and select the `vSAN`{.action} menu and then `Disk Management`{.action}.

In the `Disk Groups`{.action} table, select the new ESXi server and ensure that no disk is assigned to the vSAN datastore (the `Disks in Use` column should be 0 of X).

![disk management](images/01.png){.thumbnail}

Click on the icon with a green `+`{.action}. In the `Create Disk Group` window, select the cache disk and capacity disk(s) and click `OK`{.action}.

> [!primary]
>
> Please refer to the server hardware configuration to determine which disks are for cache or capacity.
>

![disk group](images/02.png){.thumbnail}

You can track the progress of the disk group creation task in the `Recent Tasks` window.

![recent tasks](images/03.png){.thumbnail}

Once the task is complete, the `Disks in Use` column should indicate that all disks on the server are integrated into the cluster.

![disk cluster](images/04.png){.thumbnail}

The ESXi server is now fully integrated into the vSAN cluster, and its disks are usable by the datastore.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
