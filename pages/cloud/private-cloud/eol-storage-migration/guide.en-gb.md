---
title: End-Of-Life management for LV1 and LV2 storage
slug: eol-storage-migration
excerpt: 'Learn how to perform a storage migration'
section: FAQ
order: 05
hidden: true
updated: 2023-03-02
---

**Last updated 2nd March 2023**

> [!warning]
> OVHcloud provides services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they work properly.
>
> This guide is designed to assist you as much as possible with common tasks. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) if you experience any difficulties or doubts when it comes to managing, using or setting up a service on a server.
>

## Objective

Some storages will no longer be available at the end of March 2023 as they will no longer be maintained, as described in this guide: [Life cycle of Hosted Private Cloud powered by VMware](https://docs.ovh.com/gb/en/private-cloud/lifecycle-policy/#datastores-stockage).

We will go through all the steps to migrate your data to more recent storage and disable your obsolete storage.

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials.
- A user account with access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).
- A user account with access to vSphere.

## Instructions

### Adding storage

Using the new storage ranges will provide you with full-SSD (vs SSD-accelerated) disks, 2x2x25Gbps network cards (vs 2x10Gbps), higher availability and resilience. Click this link for more information: [NFS Datastore](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/datastores-nfs/).

Use this guide to add more storage if you have not yet subscribed to a more recent solution: [How do I add storage space?](https://docs.ovh.com/fr/private-cloud/additional-storage/)

### Migrating your virtual machines

Go to your vCenter interface and check the virtual machines that are on each of your outdated datastores.

Click on the `storage`{.action} icon, select your Datastore in `Shared Storage`{.action} to the left. Click on the `VM`{.action} tab and stay on `Virtual Machines`{.action} to display the virtual machines on this obsolete storage.

![01 check existing VM on datastore 01](images/01-check-existing-vm-on-datastore01.png){.thumbnail}

Right-click each of the virtual machines that are on this datastore, choose `Migrate`{.action} and use the [VMware Storage vMotion](https://docs.ovh.com/gb/en/private-cloud/vmware_storage_vmotion/#finalising-the-operation) guide to migrate to a more recent datastore.

![01 check existing VM on datastore 02](images/01-check-existing-vm-on-datastore02.png){.thumbnail}

When the tab no longer contains virtual machines, go to `VM template in folders`{.action} to view the saved templates on your *datastore*.

![02 unregister and move template 01](images/02-unregister-and-move-template01.png){.thumbnail}

Right-click each of the templates saved in your *datastore* and click `Remove from Inventory`{.action}.

> [!warning]
> The template is deleted from the inventory but is still in the *datastore*. You can retrieve it and move it to another *datastore* or delete it if you no longer need it.
>

![02 unregister and move template 02](images/02-unregister-and-move-template02.png){.thumbnail}

The templates list is empty, you can keep moving your templates to another datastore.

![02 unregister and move template 03](images/02-unregister-and-move-template03.png){.thumbnail}

Go to the `Files`{.action} tab, go to a folder in a template and click `Move to`{.action}.

![02 unregister and move template 04](images/02-unregister-and-move-template04.png){.thumbnail}

Choose a Datastore and click `OK`{.action}.

![02 unregister and move template 05](images/02-unregister-and-move-template05.png){.thumbnail}

Wait for the task to complete.

![02 unregister and move template 06](images/02-unregister-and-move-template06.png){.thumbnail}

Select the destination datastore for the template on the left, go to the Template folder, select the template file and click `Save VM`{.action}.

![03 register template 01](images/03-register-template01.png){.thumbnail}

Click `NEXT`{.action}.

![03 register template 02](images/03-register-template02.png){.thumbnail}

Click `NEXT`{.action} again.

![03 register template 03](images/03-register-template03.png){.thumbnail}

Click `FINISH`{.action}.

![03 register template 04](images/03-register-template04.png){.thumbnail}

Go to the `VM & templates`{.action} tab to make your model appear.

![03 register template 05](images/03-register-template05.png){.thumbnail}

### Deleting storage for your VMware cluster

Use this guide to delete your obsolete storage: [Delete a datastore](https://docs.ovh.com/gb/en/private-cloud/remove-data-store/)

> [!warning]
> After deleting your Datastore, log in to your OVHcloud Control Panel to stop subscribing to this service.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
