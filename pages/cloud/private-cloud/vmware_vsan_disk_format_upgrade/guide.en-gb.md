---
title: 'Updating the vSAN disk format'
slug: vsan-disk-format-upgrade
excerpt: 'Find out how to update the format of a vSAN’s disks'
section: 'VMware vSphere features'
---

**Last updated 17th January 2023**

## Objective

**This guide will show you how to update the format of your vSAN disks** 

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- A deployed [vSan cluster](https://docs.ovh.com/gb/en/private-cloud/vmware-vsan/)

## Overview

vSAN disks are regularly upgraded with new versions. we will look at how to update the vSAN disk format.

You need to update the vSAN disk format version to have new features or to maintain compatibility with versions of your VMware cluster as described in this link [Understanding vSAN on-disk format versions and compatibility (2148493)](https://kb.vmware.com/s/article/2148493).

## Instructions

Log in to your vSphere interface using this [guide](https://docs.ovh.com/gb/en/private-cloud/connexion-interface-vsphere/).

In the vSphere interface, click on your `Cluster`{.action} to the left, go to the `Configure`{.action} tab, choose `Services`{.action} in the **vSAN** section and click `PRE-CHECK UPGRADE`{.action}.

![01 vSAN disk format upgrade 01](images/01-vsan-disk-format-upgrade01.png){.thumbnail}

The upgrade control tells you that everything is ok to perform the upgrade.

Click `UPGRADE`{.action}.

![01 vSAN disk format upgrade 02](images/01-vsan-disk-format-upgrade02.png){.thumbnail}

Click `UPGRADE`{.action} to confirm the upgrade.

![01 vSAN disk format upgrade 03](images/01-vsan-disk-format-upgrade03.png){.thumbnail}

The upgrade will take a few moments.

![01 vSAN disk format upgrade 04](images/01-vsan-disk-format-upgrade04.png){.thumbnail}

When the upgrade is complete, you will be informed that everything is correct, as well as the vSAN disk format version number.

![01 vSAN disk format upgrade 05](images/01-vsan-disk-format-upgrade05.png){.thumbnail}

## Go further

[Upgrade vSAN Disk Format Using vSphere Web Client](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.virtualsan.doc/GUID-9FB6F6D8-80A9-4584-BD0D-8FED073B3D40.html)

Join our community of users on <https://community.ovh.com/en/>.
