---
title: Data - Concept and best practices
slug: data
excerpt: Learn the concept behind AI Tools data
section: General information
order: 105
---

**Last updated 11th April, 2022.**

## Definition

- **Data** relates to any type of files (binary, text, code, images, etc.) that you want to use inside with OVHcloud **AI tools**.
- **Object Storage** is a scalable, resilient and secure storage place accessible from anywhere through HTTPS APIs. It is a perfect place to store static files on the long term.
- **Volumes** are filesystems storage units mounted and used inside **AI Training jobs** and **AI notebooks**.

## Best practices

**OVHcloud Object Storage** should be used to persist any data needed by **AI Training jobs** or **AI notebooks**.

There are two ways to manage your data:

- You can upload and download data from your local environment using the CLI, see [how to install `ovhai` CLI](https://docs.ovh.com/asia/en/publiccloud/ai/cli/install-client). Next, find out how to [manage your data with the CLI](https://docs.ovh.com/asia/en/publiccloud/ai/cli/data-cli/).
- You can use the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia), see [create data container](https://docs.ovh.com/asia/en/storage/object-storage/pcs/create-container/).

## How it works

**AI Training jobs** and **AI Notebooks** can read and write data from and to the **OVHcloud Object Storage**. Here is what is happening under the hood.

### AI Training

1.  Before the job start, data is synchronized **from** the object storage **into** an underlying filesystem volume. This synchronization is done during the `INITIALIZING` phase.
2.  At the job start, the volume is attached inside the wanted directory. Data is then available inside the job as long as the `RUNNING` phase lasts.
3.  After the job stop, data is synchronized back **from** the underlying filesystem volume **into** the **OVHcloud Object Storage**. This synchronization is done during the `FINALIZING` phase.

![image](images/data_phases_job.svg){.thumbnail}

### AI Notebooks

1. Before the notebook start, data is synchronized **from** the object storage **into** an underlying filesystem volume. This synchronization is done during the `STARTING` phase.
2. At the notebook start, the volume is attached inside the wanted directory. Data is then available inside the job as long as the `RUNNING` phase lasts.
3. After the notebook stop, data is synchronized back **from** the underlying filesystem volume **into** the **OVHcloud Object Storage**. This synchronization is done during the `STOPPING` phase.

![image](images/data_phases_notebook.svg){.thumbnail}

## Capabilities

### Access rights

Users can give 3 different access rights on **Filesystem volumes** attached on jobs and notebooks:

- **Read Only** (shorten by `RO`): you are only able to read data in your job or notebook. It is forbidden to write, modify or delete data in this container.

*When to attach a volume in read-only `RO`?*

The purpose of **read-only** permissions is to ensure that you do not modify your data by mistake. This permission is recommended for your input data: images, videos, sounds, text or csv files, etc.

> [!warning]
>
> Volumes which are in **read-only** mode are not synchronized with the Object Storage during the `FINALIZING` or `STOPPING` phase because there is no point in synchronizing data which has not changed during the life of a job or notebook.

> [!primary]
>
> If you have directly added data from the Object Storage to the container connected in `RO`, you can request an **intermediate synchronization**. Otherwise, your data will be **synchronized at the next start** of your job or notebook.

- **Read Write** (shorten by `RW`): you have full access to your data in your job or notebook. You can therefore write, modify or add data in this container.

*When to attach a volume in read-write `RW`?*

The purpose of the **read-write** permission is to be able to modify the contents of the object container. This permission is recommended if your container contains code (e.g. a Python file), a notebook or if you want to save a model or connection weights after your training.

> [!primary]
>
> Volumes which are in **read-write** do not allow you to **delete** data from your Object Storage. If you delete them from a job or notebook, they will still be present in your object container, even after synchronisation. 

If you need to delete data from your object container, you can mount your volume in `RWD`.

- **Read Write Delete** (shorten by `RWD`): you have full access to your data in your job or notebook. You can therefore write, modify, add or **delete** data in this container.

*When to attach a volume in read-write-delete `RWD`?*

The purpose of the **read-write-delete** permission is to be able to modify or delete the object container contents. You can not only make changes to the different files in your container (Python code, requirements file, ...) but also, and especially, delete data from it. The RWD will allow you to permanently delete data you no longer need from your object container. 
This permission can be used in particular if you want to delete old codes or connection weights which can be heavy files.

> [!warning]
>
> After the synchronisation phase, your data deleted from your notebook or job will be permanently deleted in the Object Storage.

> [!primary]
>
> For volume in `RW` or `RWD`: as long as your job or notebook is in the `FINALIZING` or `STOPPING` state, this means that the upload is still in progress. Once the state changes to `INTERRUPTED` or `STOPPED`, it means all the data was uploaded to your Object Storage.

### Volume caching and sharing

By default **filesystem volumes** are created and deleted on the fly for each job needing it.

User can enable a `cache` feature that allow jobs and notebooks to re-use available volumes instead of creating a new one each time. That feature serves several purposes :

- Reducing synchronization time for data that have already been downloaded before.
- Sharing same volumes between several jobs or notebooks.

> [!warning]
>
> Unused volume data is regularly deleted. Users should not rely on this `cache` feature for long time persistence.

## Going further

- You can check the [OVHcloud documentation on how to create a data container](https://docs.ovh.com/asia/en/storage/object-storage/pcs/create-container/).

- You can check how to [use your data in an AI Notebook](https://docs.ovh.com/asia/en/publiccloud/ai/cli/access-object-storage-data/).

- You can check how to [launch an AI Training job with attached volumes](https://docs.ovh.com/asia/en/publiccloud/ai/cli/run-job-cli/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [Discord server](https://discord.com/invite/vXVurFfwe9)
