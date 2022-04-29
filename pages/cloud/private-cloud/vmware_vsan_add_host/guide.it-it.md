---
title: 'Aggiungere un server ESXi in un cluster vSAN (EN)'
slug: vmware-vsan-add-host
routes:
    canonical: 'https://docs.ovh.com/gb/en/private-cloud/vmware-vsan-add-host/'
excerpt: 'Find out how to add an ESXi server to an existing vSAN cluster'
section: 'Funzionalità VMware vSphere'
---

**Last updated 22nd December 2021**

## Objective

This guide explains how to add a new ESXi server storage to an existing vSAN cluster.

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it))
- A deployed [vSan Datastore](https://docs.ovh.com/it/private-cloud/vmware-vsan/)

## Instructions

### Order a new vSan host

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) with your administrative credentials.

In the `Hosted Private Cloud`{.action} section, select your datacenter and go to the `Hosts`{.action} tab.<br>
Click on the `Order a Host`{.action} button.

![ORDER](images/en02order.png){.thumbnail}

Select the fitting vSAN host for your need and click `Confirm Order`{.action}

![ORDER](images/en03hosttype.png){.thumbnail}

Verify the recap of your order and click `Next`{.action}

Check the boxes to accept the terms and conditions and go on to the payment. You will get an order confirmation.

The new host will be automatically integrated to your infrastructure and you will receive a confirmation email when it is ready for use in vSphere.

### Add new vSan host storage to your datastore

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.

![Menu](images/en07hosts.png){.thumbnail}

You should see your new host in the cluster.<br>
On the left side, select your cluster, go in the `Configure`{.action} tab then `vSAN`{.action} / `Disk Management`{.action}.<br>
Click on `Claim Unused Disks`{.action}.

![vSAN](images/en08cluster.png){.thumbnail}

Available disks are assigned to cache or capacity (see [Official VMware VSAN page](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vsan-planning.doc/GUID-18F531E9-FF08-49F5-9879-8E46583D4C70.html){.external} for explanation) depending on types and sizes. You can customize it to your need.

Click on `Create`{.action} when ready.

![vSAN](images/en09claim.png){.thumbnail}

The new disk group will take some time to be created and added to the vSAN datastore.

![vSAN](images/en10progress.png){.thumbnail}

Once done, the datastore is ready for use with the added storage.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
