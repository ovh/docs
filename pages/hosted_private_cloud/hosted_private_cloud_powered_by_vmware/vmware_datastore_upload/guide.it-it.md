---
title: "Uploading files to the VMware vSphere on OVHcloud datastore (EN)"
excerpt: "Find out how to use the datastore uploading tool to import data into your managed VMware vSphere on OVHcloud environnement"
updated: 2024-09-17
---

## Objective

**Find out how to upload files to a folder in your datastore with the VMware vSphere on OVHcloud HTML client.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- You must be the technical administrator of the [VMware on OVHcloud infrastructure](/links/hosted-private-cloud/vmware).
- If you are using IAM, ensure that you have the rights, roles, and actions to upload files or create directories in the Datastore. For more information, please refer to our guide: [IAM for VMware on OVHcloud - Overview and FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started).

## Instructions

> [!primary]
>
> This guide replaces the SFTP method, which is now deprecated: [Logging in via SFTP](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/sftp_connection).
>

### Step 1 - Access the datastore

Log in to the vSphere web interface, using the guide [Log in to the vSphere on OVHcloud web console](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connection) if necessary.

You then need to access the directories where you want to store your files (ISO, for example). The goal is to create a tree-view so that you can easily find your elements within your managed vSphere.

![vSphere Home - Access](images/vsphere_home.png){.thumbnail}

### Step 2 - Upload files

There are two ways of accessing the right menu, choose the one you prefer:

**1\. From the `Inventory`{.action} menu:**

|                                        **Images**                                         | **Steps**                                                            |
|:-----------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------|
| ![vSphere Datastore Upload 01](images/datastore_inventory_2.png){.thumbnail}  | - Click `Inventory`{.action}.                                   |
| ![vSphere Datastore Upload](images/datastore.png){.thumbnail} <br/> ![vSphere Datastore Upload 01](images/datastore_1.png){.thumbnail} | - From `pcc-XXX-XXX-XXX-XXX.ovh.XX`, click `Datastores`{.action}     |

You will then find all of your listed datastores.

Click on your datastore to see the `Files`{.action} section open.

![vSphere Datastore Inventory - Upload Files](images/inventory_datastore.png){.thumbnail}

In the `Files`{.action} section of your open datastore, click `DOWNLOAD FILES`{.action} to select the file (ISO or other).

Locate the item you want to upload from your local computer (e.g. file `XXX.iso`) and click `Open`{.action} to upload the files from your locale machine connected to the vSphere HTML client.

The ISO file is uploaded automatically without validation in the folder (if any) of your selected data store.

You can refresh the Data Store File Explorer to see the uploaded file in the list.

![Datastore Upload - Upload Files](images/datastore_4.png){.thumbnail}

You can then launch this ISO file from a CD/DVD device within your VM, and launch the OS installation by following the installation process. However, it is recommended that you use OVHcloud deployment templates, or VM clones that you may have transformed into templates.

**2\. From the `Global Inventory Lists`{.action} menu:**

This menu also opens the `Files`{.action} upload interface:

|                                        **Images**                                         | **Steps**                                     |
|:-------------------------------------------------------------------------------------------:|:----------------------------------------------|
|         ![vSphere Global Inventory](images/global_inventory.png){.thumbnail}      | - Click `Global Inventory Lists`{.action}<br> |
| ![vSphere Global Inventory Datastore](images/global_inventory_datastores.png){.thumbnail} | - Then on `Datastores`{.action}               |

![vSphere Global Inventory Datastore - Upload Files](images/global_inventory_datastores_2.png){.thumbnail}

Click on the desired `Datastore`.

The `Files`{.action} section opens, allowing you to upload data to your datastore.

Then click `UPLOAD FILES`{.action} to select the file (ISO or other) to upload from your local machine.

Locate the item you want to upload from your local computer (e.g. file `XXX.iso`) and click `Open`{.action}.

### Step 3 - Upload folders

From your datastore, in the `Files`{.action} section, click `UPLOAD FOLDER`{.action}

Locate the item to upload from your machine connected to the vSphere HTML client and click `Send`{.action}.

The folder upload will only begin after you validate the confirmation :

|                                 **Images**                                 | **Steps**                          |
|:--------------------------------------------------------------------------:|:-----------------------------------|
| ![vSphere - Upload Folder](images/datastore_folder_upload.png){.thumbnail} | - To confirm, clic `Send`{.action} |

### Step 4 - Move/Copy files

From your datastore, click `MOVE TO`{.action} or `COPY TO`{.action}.

![Datastore Upload - Move/copy](images/datastore_4.png){.thumbnail}

Locate the destination item to move from the datastore and click `OK`{.action}

![Datastore Upload - Move/copy](images/datastore_move.png){.thumbnail}

You must have sufficient rights to perform these actions.

### Step 5 - Rename files

From your datastore, click `RENAME TO`{.action}

![Datastore Upload - Rename](images/datastore_upload_rename.png){.thumbnail}

Rename your file, then click `OK`{.action}.

### Step 6 - Create a folder (optional)

In the `Files`{.action} section of your datastore, click `NEW FOLDER`{.action} to create a directory to store your files.

Name your folder and click `OK`{.action}.

![Datastore Upload - Create a folder](images/datastore_4.png){.thumbnail}

## Go further

- [IAM for VMware on OVHcloud - Overview and FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)

If you require training or technical support to implement our solutions, please contact your Technical Account Manager or visit [this page](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the [dedicated Discord channel](https://discord.gg/ovhcloud).

Join our [community of users](/links/community).
