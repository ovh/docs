---
title: "File Upload"
updated: 2025-02-15
---

## Objective

This simple connector allows you to upload your files as sources in the platform.

![File Upload](images/file-upload-1.png){.thumbnail}

* [Add a File source on the Platform](#add-a-file-source-on-the-platform)
    * [Configuration screen overview](#configuration-screen-overview)
    * [Supported files and sizes](#supported-files-and-sizes)
    * [Configuring your source](#configuring-your-source)

## Add a File source on the Platform

### Configuration screen overview

Once you have found *File upload* in the **Platform store**, click on *Select* and you will be able to see the configuration screen as shown below:

![File Upload](images/file-upload-2.png){.thumbnail}

### Supported files and sizes

This connector allows you to drag and drop files from the following types: `.csv`, `.xls`, `.xlsx`, `.xml`, `.json` and `.parquet`.

> [!warning]
> There is a **1GB size limit** on files handled by this tab. In order to process files larger than 1GB, you need to upload them through the [Lakehouse Manager Buckets](/pages/public_cloud/data_platform/product/lakehouse-manager/buckets).

### Configuring your source

To add a file just drag & drop it directly to the designated area in the middle of the screen or click on the indicated link to select the file from your computer.

Uploaded files will be displayed in the list below the drag & drop area, as in the picture below :

![File Upload](images/file-upload-3.png){.thumbnail}

> [!primary]
> Note that you can add multiple files to a single *File Upload* source.

The encoding of the source file is automatically detected by the Platform. However, if the automatic detection fails, you have the ability to specify the file encoding by clicking on the **pen icon** next to each source object:

![File Upload](images/file-upload-4.png){.thumbnail}

Select the encoding of your source object in the dropdown selection.

![File Upload](images/file-upload-5.png){.thumbnail}

## Go further

Join our [community of users](/links/community).