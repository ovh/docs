---
title: Definition
slug: definition
excerpt: Learn the concept behind AI Training notebooks
section: Introduction
order: 1
---
*Last updated 27th May, 2021.*

## Definition

A **notebook** in **AI Training** is used to easily work with one of the well-known machine learning frameworks on
either JupyterLab or VSCode and powerful hardware.

The advantage compared to doing your own setup is that everything is already installed for you, and that you pay only
for your notebooks while they are running.

Each notebook is linked to a **Public Cloud** project and specifies hardware resources along with a machine learning framework and an editor among those available.

The easiest way to create and manage notebooks currently is to use the ovhai CLI. You can start learning to use it
by reading the [Getting Started](https://docs.ovh.com/gb/en/publiccloud/ai/notebooks/getting-started-cli/) page.

Notebooks also provide an easy way to access data from your Object Storage, you can read more about it [here](https://docs.ovh.com/gb/en/publiccloud/ai/notebooks/access-object-storage-data/).

## Considerations

-   A notebook will run indefinitely until manual interruption.
-   If you do not customise your resource request, the default requested is 1 GPU. Memory is not customisable.
-   Billing for **notebooks** is minute-based. Each commenced minute is billed completely.

## Notebook lifecycle

During its lifetime the notebook will transition between the following statuses:

> [!primary]
> * Billing starts once a notebook is `RUNNING` and ends when its status switches to `STOPPING`.
> * Only notebooks in states `STARTING` and `RUNNING` are included in the resource quota computation.

-   `STARTING`: the notebook is starting, and volumes are synchroniaed from the Object Storage
-   `RUNNING`: the notebook is running and can be accessed from your browser
-   `STOPPING`: the notebook is still running, but an interruption order was received and `RW` volumes are uploaded to your Object Storage
-   `STOPPED`: the notebook is stopped and `RW` volumes have been synchronised back to your Object Storage

## Feedback

Please send us your questions, feedback and suggestions to improve the service:

- On the OVHcloud [AI community forum](https://community.ovh.com/en/c/Data-AI)
