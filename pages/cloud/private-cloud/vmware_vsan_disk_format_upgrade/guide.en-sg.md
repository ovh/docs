---
title: "Updating the vSAN disk format"
slug: vsan-disk-format-upgrade
excerpt: "Find out how to update the format of a vSAN disk"
section: VMware vSphere features
---

**Last updated 19th January 2023**

## Objective

vSAN disks are regularly upgraded with new versions. You need to update the vSAN disk format version to have new features or to maintain compatibility with the versions of your VMware cluster, as described in this article: [Understanding vSAN on-disk format versions and compatibility (2148493)](https://kb.vmware.com/s/article/2148493).

**This guide explains how to update the format of your vSAN disks.** 

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-sg/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg))
- A deployed [vSan cluster](https://docs.ovh.com/sg/en/private-cloud/vmware-vsan/)

## Instructions

Log in to your vSphere interface using [this guide](https://docs.ovh.com/sg/en/private-cloud/login-vsphere-interface/).

In the vSphere interface, click on your `Cluster`{.action} to the left, go to the `Configure`{.action} tab, choose `Services`{.action} in the **vSAN** section and click `PRE-CHECK UPGRADE`{.action}.

![01 vSAN disk format upgrade 01](images/01-vsan-disk-format-upgrade01.png){.thumbnail}

The check result informs you that everything is in order to perform the upgrade.

Click on `UPGRADE`{.action}.

![01 vSAN disk format upgrade 02](images/01-vsan-disk-format-upgrade02.png){.thumbnail}

In the new window, click `UPGRADE`{.action} to confirm the operation.

![01 vSAN disk format upgrade 03](images/01-vsan-disk-format-upgrade03.png){.thumbnail}

The upgrade will take a few moments.

![01 vSAN disk format upgrade 04](images/01-vsan-disk-format-upgrade04.png){.thumbnail}

As soon as the upgrade is complete, you will receive a success message indicating the new vSAN disk format version number.

![01 vSAN disk format upgrade 05](images/01-vsan-disk-format-upgrade05.png){.thumbnail}

## Go further

[Upgrading vSAN disk format with vSphere web client](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.virtualsan.doc/GUID-9FB6F6D8-80A9-4584-BD0D-8FED073B3D40.html)

Join our community of users on <https://community.ovh.com/en/>.
