---
title: Data
slug: data
excerpt: Learn the concept behind AI Training data
section: Concepts
order: 1
---
*Last updated 29th October, 2020.*

## Definition

**AI Training** jobs can read and write data from and to the OVHcloud Object Storage.

There are two ways to manage your data:

-   You can upload and download data from your local environment using the CLI, see [how to install `ovhai` CLI](../install-client)
-   You can use the manager, see [create data](../create-data)

## Considerations

> [!warning]
> Before running the job and after it finishes running, the data you attached to the job are synchronised from the OVHcloud Object Storage to a distributed filesystem, it is used as a cache for your training jobs.

## Going further

-   You can check the [OVHcloud documentation on how to create data](../create-data).

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

-   On the OVHcloud [AI community forum](https://community.ovh.com/c/platform/ai-ml)
