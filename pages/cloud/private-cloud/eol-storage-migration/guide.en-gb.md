---
title: Hosted Private Cloud VMware Lifecycle Policy
slug: eol-storage-migration
excerpt: 'How to perform a storage migration'
section: FAQ
order: 1
hidden: true
---

**Last updated 10th January 2023**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/) if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Objective

Some storages will no longer be available at the end of March 2023 as they will no longer be maintained as described in this guide [Life cycle of Hosted Private Cloud powered by VMware](https://docs.ovh.com/gb/en/private-cloud/lifecycle-policy/#datastores-stockage).

We will go through all the steps to migrate your data to more recent storage and disable your obsolete storage

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- A user account with access to vSphere

## Instructions

### Add storage

Use this guide to add more storage if you have not yet subscribed to a more recent solution.

[How do I add storage space?](https://docs.ovh.com/fr/private-cloud/additional-storage/)

### Migrate your virtual machines

Go to your vCenter interface and check the VMs on each of your outdated datastore.

Click the `Storage`{.action} icon, select your `Datastore`{.action} in `Shared Storage`{.action} on the left and click the `VMs`{.action} tab to display the virtual machines on this obsolete storage.

![01 check existing VM on datastore 01](images/01-check-existing-vm-on-datastore01.png)

Then use Storage migration to migrate your data from your outdated datastore to your new datastore.

You can use this guide to perform the VMware Storage vMotion migration [VMware Storage vMotion](https://docs.ovh.com/gb/en/managed-bare-metal/vmware-storage-vmotion-new/#finaliser-le-vmotion).

### Deleting storage for your VMware cluster

Use this guide to delete your obsolete storage [Delete a datastore](https://docs.ovh.com/gb/en/private-cloud/remove-data-store/)

> [!warning]
> After deleting your Datastore, you will need to go to your Control Panel to stop subscribing to this service.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
