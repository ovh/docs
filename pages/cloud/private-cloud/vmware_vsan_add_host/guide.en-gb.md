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

![ORDER](images/en03hosttype.png){.thumbnail}


Verify the recap of your order and click `Next`{.action}

![ORDER](images/en04recap.png){.thumbnail}


Check the boxes to accept the terms and conditions and go on to the payment.

![ORDER](images/en05accept.png){.thumbnail}


You'll get a confirmation of order with a number.

![ORDER](images/en06ordered.png){.thumbnail}


The new host will be automatically integrated to your infrastructure and you will receive a confirmation email when it is ready for use in vSphere.


### Add new vSan host storage to your datastore

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.

![Menu](images/en07hosts.png){.thumbnail}


You should see your new host visible in the cluster.<br>
On the left side, select your cluster, go in the `Configure`{.action} tab then vSAN / `Disk Management`{.action}.<br>
Click on `Claim Unused Disks`{.action}.

![vSAN](images/en08cluster.png){.thumbnail}


Available disks are assigned to cache or capacity (see [Official VMware VSAN page](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vsan-planning.doc/GUID-18F531E9-FF08-49F5-9879-8E46583D4C70.html){.external} for explanation) depending on types and sizes. You can customize it to your need.<br>
Click on `Create`{.action} when ready.

![vSAN](images/en09claim.png){.thumbnail}

The new disk group will take some time to be created and added to the vSAN datastore.

![vSAN](images/en10progress.png){.thumbnail}

Once done, the datastore is ready for use with the added storage.

Congratulations and thank you.



## Go further

Join our community of users on <https://community.ovh.com/en/>.
