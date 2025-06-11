---
title: "Microsoft Azure Blob Storage"
updated: 2025-02-15
---

## Objective

The Microsoft Azure Blob Storage connector lets you retrieve files stored in Microsoft Azure's object storage system: [Azure Blob Storage](https://azure.microsoft.com/en-us/services/storage/blobs/). 

![FB1](images/blob-store.png){.thumbnail}

* [Get your access credentials from Azure](#get-your-access-credentials-from-azure)
    * [Get your storage account name and key](#-your-storage-account-name-and-key)
        * [Create a new storage account](#create-a-new-storage-account)
    * [Get your blob container name](#get-your-blob-container-name)
        * [Create a new blob container](#create-a-new-blob-container)
* [Add a Microsoft Azure Blob Storage source on the Platform](#add-a-microsoft-azure-blob-storage-source-on-the-platform)
    * [Configuration screen overview](#configuration-screen-overview)
    * [Configuring your source](#configuring-your-source)
        * [Connect to Microsoft Azure Blob Storage](#connect-to-microsoft-azure-blob-storage)

## Get your access credentials from Azure

You need to obtain the following information from Azure:

- the name of the Azure storage account to connect to
- a key for this storage account
- the name of the blob container to connect to

### Get your storage account name and key

On the Microsoft Azure console, open the **storage account** that you want to connect to and open the *Access keys* tab.

![FB1](images/ABS-name-key.png){.thumbnail}

Retrieve the following information:

- *storage account name*
- *key*

> [!warning]
> If you are on a Dedicated plan with a self-hosted cluster, you shouldn't connect to the resource group/storage account dedicated to the Platform resources. 

If you don't have a separate storage account yet, use the below documentation to create one.

#### Create a new storage account

To create a new [Microsoft Azure storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview?toc=%2Fazure%2Fstorage%2Fblobs%2Ftoc.json) from the Microsoft Azure console, select *Storage accounts* and click on **Create**.

![FB1](images/ABS-add-storage-account.png){.thumbnail}

Follow the steps to add a storage account filling in the required fields and custom settings. The *storage account name* will be needed to connect from the Platform.

> [!warning]
> If you are on a Dedicated plan with a self-hosted cluster, you shouldn't use the resource group dedicated to the Platform resources. 

![FB1](images/ABS-add-storage-account2.png){.thumbnail}

Once your storage account is created, go back to the first steps up above to retrieve its name and key.

### Get your blob container name

In the Microsoft Azure console, open the *Storage browser* tab.

![FB1](images/ABS-storage-browser.png){.thumbnail}

In the service account you just used, open the section *Blob containers*.

![FB1](images/ABS-blob-containers.png){.thumbnail}

If you have an existing container that you want to use, retrieve its *name* at this step. Else, create a new container.

#### Create a new blob container

Click on **Add container**. The *name* you fill in will be needed to connect from the Platform. 

![FB1](images/ABS-add-blob-container.png){.thumbnail}

## Add a Microsoft Azure Blob Storage source on the Platform

### Configuration screen overview

Once you have found *Microsoft Azure Blob Storage* in the **Platform store**, click on *Select* and you will be able to see the configuration screen as shown below:

![FB2](images/blob2.png){.thumbnail}

### Configuring your source

#### Connect to Microsoft Azure Blob Storage

When creating the source, you will be required to input the following information :

- **Account name**: the name of the storage account obtained [here](#get-your-storage-account-name-and-key)
- **Account key**: the key for this storage account obtained [here](#get-your-storage-account-name-and-key)
- **Container name**: the name of the blob container obtained [here](#get-your-blob-container-name)
- **Path of files** *(optional)*: the full path of a specific folder or file to connect to

Once you add the above details click on **Connect** to establish a connection with Microsoft Azure Blob Storage. 

> [!primary]
> If everything works successfully, you should see the list of parsed files appearing on the page. This may take up to a few seconds.

To finish, click on the **Create** button on the top right-hand corner.

> [!warning]
> Don't forget to name your source before creating it. The technical name cannot be changed after creating the source and will be used when trying to access the source using the [SDK](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index).

## Go further

Join our [community of users](/links/community).