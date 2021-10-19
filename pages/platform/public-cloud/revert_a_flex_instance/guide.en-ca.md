---
title: Reverting a flex instance
slug: revert-a-flex-instance
excerpt: Find out how to revert a flex instance from the OpenStack Horizon interface
section: Horizon
order: 7
---

**Last updated 15th September 2021**

## Objective

A flex instance is a single size disk (50GB) instance which offers a faster process for snapshots. It allows resizing to higher or lower models with a fix storage space, whereas classic models can only be resized to higher models. As your infrastructure is constantly evolving, you may need to resize your instance as well as the storage space. In this case, you will need to « revert » your flex instance to a classic model. This action can only be done from the Horizon interface.

**This guide shows you how to revert and resize your flex instance from the OpenStack Horizon interface.**

## Requirements

- an [OVHcloud Public Cloud instance](../create_an_instance_in_your_ovh_customer_account/) with the flex option
- [Create an access to the Horizon interface](https://docs.ovh.com/ca/en/public-cloud/configure_user_access_to_horizon/)

## Instructions

Log into the [Horizon interface](https://horizon.cloud.ovh.net/auth/login/), and make sure you are in the correct region. You can verify this on the top left corner. Next, click on the `Compute`{.action} menu on the left side and select `Instances`{.action}. Select `Resize Instance`{.action} in the drop list for the corresponding instance.

![Resize instance](images/resizeinstance.png){.thumbnail}

This section allows you to select the new instance « flavor » and « model ». You can either revert your instance to a classic model and maintain the same « flavor » or resize your instance to a different « flavor ».

In our example, our instance is a « b2-15-flex », we can either revert to a « b2-15 » classic model or upgrade it to a « b2-XX » classic model. In our case, we want to upgrade our instance to a « b2-30 » classic model.

> [!warning] 
> Please note that you can only switch from a Linux model to another Linux model and from a Windows model to another Windows model.
>
> Resizing to lower models only works for flex models. Note that the flex option is not available for all models.
>

![Choose new flavor](images/confirmflavor.png){.thumbnail}

To continue, click on the `Resize`{.action} button.

Once the process is completed, you will have a classic instance and a larger storage space.

![New flavor applied](images/newflavor.png){.thumbnail}

In case you wish to revert your instance to a flex model, you can do this by performing the same steps mentioned above and select a flex « flavor » instead. 

Alternatively, you can [edit the configuration of the instance](https://docs.ovh.com/ca/en/public-cloud/get-started-with-a-public-cloud-instance/#edit-the-configuration-of-an-instance) in the OVHcloud Control Panel.

## Go further

Join our community of users on <https://community.ovh.com/en/>.