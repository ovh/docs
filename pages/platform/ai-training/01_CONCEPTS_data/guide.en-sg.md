---
title: Data
slug: data
excerpt: Learn the concept behind AI Training data
section: Concepts
order: 1
---
*Last updated 18th May, 2021.*

## Definition

-   **Data** relates to any type of files (binary, text, etc.) that you want to use inside **AI Training jobs**.
-   **Object Storage** is a scalable, resilient and secure storage place accessible from anywhere through HTTPS APIs. It is a perfect place to store static files on the long term.
-   **Volumes** are filesystems storage units mounted and used inside **AI Training jobs**.

## Best practices

**OVHcloud Object Storage** should be used to persist any data needed by **AI Training jobs**.

There are two ways to manage your data:

-   You can upload and download data from your local environment using the CLI, see [how to install `ovhai` CLI](../install-client)
-   You can use the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), see [create data container](https://docs.ovh.com/gb/en/storage/pcs/create-container/)

## How it works

**AI Training jobs** can read and write data from and to the **OVHcloud Object Storage**. Here is what is happening under the hood :

1.  Before the job start, data is synchronized **from** the object storage **into** an underlying filesystem volume. This synchronization is done during the `INITIALIZING` phase.
2.  At the job start, the volume is attached inside the wanted directory. Data is then available inside the job as long as the `RUNNING` phase lasts.
3.  After the job stop, data is synchronized back **from** the underlying filesystem volume **into** the **OVHcloud Object Storage**. This synchronization is done during the `FINALIZING` phase.

![image](images/data_phases.svg){.thumbnail}

## Capabilities

### Access rights

Users can give 2 different access rights on **Filesystem volumes** attached on jobs :

-   **Read Only** (shorten by `ro`) : The job will only be able to read data (writing is forbidden)
-   **Read Write** (shorten by `rw`) : The job will have full access

> [!primary]
>
> Volumes that are in a **read only** mode are not synchronized with the object storage during the `FINALIZING` phase because there is no point synchronizing data that have not changed during a job life.

### Volume caching and sharing

By default **filesystem volumes** are created and deleted on the fly for each job needing it.

User can enable a `cache` feature that allow jobs to re-use available volumes instead of creating a new one each time. That feature serves several purposes :

-   Reducing synchronization time for data that have already been downloaded before.
-   Sharing same volumes between several jobs.

> [!warning]
>
> Unused volume data are regularly deleted. User should not rely on this `cache` feature for long time persistence.

## Going further

-   You can check the [OVHcloud documentation on how to create a data container](https://docs.ovh.com/gb/en/storage/pcs/create-container/).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [AI community forum](https://community.ovh.com/en/c/Data-AI)
