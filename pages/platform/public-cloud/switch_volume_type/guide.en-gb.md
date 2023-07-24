---
title: Change your Block Storage volume type
excerpt: Find out how to change your volume type using OpenStack
updated: 2023-07-24
---

## Objective

The purpose of this guide is to show you how to change a block storage volume type from Classic or High speed to High speed gen2.

## Requirements

- [Access to the Horizon interface](/pages/platform/public-cloud/introducing_horizon)
- A [Block Storage volume](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance) created in your [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/)

## Instructions

When trying to change a block storage volume type to a "High speed gen2" one, the migration policy will need to be changed from `Never` to `On-demand`.

The migration policy is set by default to `Never` as the volume stays on the same CEPH cluster. However, for the "High speed gen2" type, the volume will need to be migrated to a new cluster.

This modification can be made via Horizon or the Openstack CLI.

### From the Horizon Interface

Log in to the [Horizon interface](https://horizon.cloud.ovh.net/auth/login/) and make sure you are in the correct region. You can verify this on the top left corner. 

![Region selection](images/region2021.png){.thumbnail}

Next, click on the `Volumes`{.action} menu on the left side and click on `Volumes`{.action}.
Click on the drop-down arrow next to `Edit Volume`{.action} and select `Change Volume Type`{.action}.

![Option selection](images/selectoption.png){.thumbnail}

In the pop-up window, click on the drop-down menu underneath `Type` and select `high-speed-gen-2`{.action}. Next, click on the drop-down arrow underneath `Migration Policy`, and select `On Demand`{.action}.

Once done, click on `Change Volume Type`{.action} to confirm the change.

![Option selection](images/changevolume.png){.thumbnail}

### From the OpenStack CLI

Once your environment is ready, type the following at the command line:

```bash
$ openstack volume set --type NEW_TYPE --retype-policy on-demand VOLUME_NAME_OR_ID
```

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.