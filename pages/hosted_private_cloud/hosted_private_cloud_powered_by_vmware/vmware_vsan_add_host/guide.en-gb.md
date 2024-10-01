---
title: 'Adding an ESXi server to a vSAN cluster'
excerpt: 'Find out how to add an ESXi server to an existing vSAN cluster'
updated: 2021-12-22
---

## Objective

This guide explains how to add a new ESXi server storage to an existing vSAN cluster.

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](/links/manager))
- A deployed [vSan Datastore](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_vsan)

## Instructions

### Order a new vSan host

Log in to the [OVHcloud Control Panel](/links/manager) with your administrative credentials.

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
