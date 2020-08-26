---
title: Data
slug: data
excerpt: Learn the concept behind AI Training data
section: Concepts
order: 1
---
## Definition

**Data** in **AI Training** are objects used to manage your actual data.
The actual data used during the **training jobs** is stored on a
distributed filesystem and the **data** object is your mean of
interaction with this filesystem.

There are two ways to hydrate your data on the filesystem :

-   Directly push data from your local environment using the client, see
    [how to install \$partner\_short client](../install-client)
-   Synchronize your data from the OVHcloud Object Storage (can be done
    either from the manager or the client)

## Considerations

> [!warning] 
> * The underlying distributed filesystem is not to be
> used as a persistent storage, it is used as a cache for your training
> jobs 
> * We reserve the right to delete at any time pushed data that is
> not currently used or was not used for an extended period of time
> (about 7 days) 
> * To have persistent storage it is highly recommanded
> that you link your **data** objects to a container/bucket in your
> OVHcloud Object Storage, see [create data](../create-data). 
> * Upon
> job completion you should synchronize your data with your Object
> Storage to persist your training results

## Under the hood

The **data** object keeps track of the data you uploaded (either from
Object Storage synchronization or from local push). If you provide a
**data** upon job submission the distributed filesystem is mounted in
the docker container at the specified path. Your changes are directly
applied on the filesystem but it remains your responsibility to trigger
the synchronization with the Object Storage (we require manual
synchronization to avoid side effects on your persistent storage in case
of an unexpected behavior from your job).

## Going further

-   You can check the [OVHcloud documentation on how to create
    data](../create-data).

## Feedback

Please send us your questions, feedback and suggestions to improve the
service:

-   On the OVHcloud [AI community
    forum](https://community.ovh.com/c/platform/ai-ml)
