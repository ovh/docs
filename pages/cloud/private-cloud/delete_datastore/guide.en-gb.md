---
title: 'Removing a datastore'
slug: remove-data-store
excerpt: 'Find out how to remove a datastore from your Private Cloud'
legacy_guide_number: '7766789'
section: 'OVH features'
---

**Last updated 10th August 2018**


## Objective

In certain cases — like replacing a datastore or scaling it up to a higher capacity, for example — it may be useful to remove a datastore from your cluster.

**This guide will show you how to securely remove a datastore from your infrastructure.**

## Requirements

* an [OVH Private Cloud](https://www.ovh.co.uk/private-cloud/){.external} solution
* access to the vSphere management interface


## Instructions

> [!warning]
>
> Please note that you cannot remove the  **two 300 GB or 1.2 TB datastores** included in your pack. For security reasons, the removal request will also be blocked if you have virtual machines (VMs) on the datastore concerned (they will be listed in the confirmation window).
> 


To remove a datastore, right-click on the resource concerned. Then select `OVH Private Cloud`{.action}, and `Remove Storage`{.action}.

![Choice of datastore](images/removestorage_01.png){.thumbnail}

A confirmation window will pop up. Confirm by clicking `Next`{.action}.

![Confirm removal](images/removestorage_02.png){.thumbnail}

The removal request will then be processed.

![Removal confirmed](images/removestorage_03.png){.thumbnail}


You can also monitor the progress of the datastore removal in `Recent Tasks`{.action}.

![Removal monitoring task](images/removedatastore.png){.thumbnail}


## Go further

Join our community of users on <https://community.ovh.com/en/>.
