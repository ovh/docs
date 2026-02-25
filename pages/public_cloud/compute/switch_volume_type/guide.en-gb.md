---
title: Change your block storage volume type
excerpt: Find out how to change your volume type using OpenStack
updated: 2026-01-13
---

## Objective

The purpose of this guide is to show you how to change a block storage volume type from Classic or High speed to High speed gen2.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager) or to the [Horizon interface](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)
- A [Block Storage volume](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) created in your [Public Cloud project](/links/public-cloud/public-cloud)

## Instructions

When trying to change a block storage volume type to a "High speed gen2" one, the migration policy will need to be changed from `Never` to `On-demand`.

The migration policy is set by default to `Never` as the volume stays on the same CEPH cluster. However, for the "High speed gen2" type, the volume will need to be migrated to a new cluster.

This modification can be made via Horizon or the OpenStack CLI.

> [!warning]
>
> If the block storage volume is attached to an instance, you must first detach it before proceeding. For more information, see the **Detach a volume** section of the guide "[How to create and configure an additional disk on an instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#detach-a-volume)".
>
> Changing the volume type (retyping) via the OVHcloud Control Panel or the OVHcloud API is available only for unencrypted volumes. Encrypted volumes of type **-LUKS** cannot be retyped using these interfaces.
>
> Retyping is supported via OpenStack / Horizon only for **-LUKS** to **-LUKS** volumes. In this case, volume restoration after retyping is not possible.
>
> Conversions from **-LUKS** to **non -LUKS** (or vice versa) are not supported, including via OpenStack / Horizon.
>

> [!tabs]
> Via the OVHcloud Control Panel
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), go to the `Public Cloud`{.action} section and select the Public Cloud project concerned. Then click on `Block Storage`{.action} in the left-hand menu under **Storage & backup**.
>>
>> Locate the relevant volume in the list, then click the `...`{.action} button on the right. Select `Change the volume type`{.action}.
>>
>> A new window opens, displaying the available volume types. Select the desired type, then confirm by clicking `Edit`{.action}.
>>
>> > [!primary]
>> >
>> > Changing the volume type (retyping) may take a few minutes.
>> >
>>
> Via the Horizon Interface
>>
>> Log in to the [Horizon interface](https://horizon.cloud.ovh.net/auth/login/) and make sure you are in the correct region. You can verify this in the top left corner. 
>>
>> ![Region selection](images/region2021.png){.thumbnail}
>>
>> Next, click on the `Volumes`{.action} menu on the left side and click on `Volumes`{.action}.
>> Click on the drop-down arrow next to `Edit Volume`{.action} and select `Change Volume Type`{.action}.
>>
>> ![Option selection](images/selectoption.png){.thumbnail}
>>
>> In the pop-up window, click on the drop-down menu under `Type` and select `high-speed-gen-2`{.action}. Next, click on the drop-down arrow under `Migration Policy`, and select `On Demand`{.action}.
>>
>> Once done, click on `Change Volume Type`{.action} to confirm the change.
>>
>> ![Option selection](images/changevolume.png){.thumbnail}
>>
> Via the OpenStack CLI
>>
>> Make sure to consult the following guide before proceeding:
>>
>> - [Preparing an environment for using the OpenStack API](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>>
>> First, list the type of volumes available in your region with the following command:
>>
>> ```bash
>> #~$ openstack volume type list
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | ID                                   | Name                                               | Is Public |
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True      |
>> | 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True      |
>> | 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True      |
>> | 9c5b1e42-3d8f-4a67-a9d2-84f3b2e7c1aa | high-speed-gen2-luks                               | True      |
>> | f41d7c8e-6a2b-4b91-9e73-2d6c0a58e94f | classic-luks                                       | True      |
>> | c8e92a5d-0f6e-4e3b-b1a4-7a9d6f3c2e8b | high-speed-luks                                    | True      |
>> ---------------------------------------------------------------------------------------------------------
>> ```
>>
>> > [!warning]
>> >
>> > Please note that if the "high-speed-gen2" or **-LUKS** volume types do not appear in the list, it means that they are not available in this region.
>> >
>> > **-LUKS** volume types are only displayed when they are supported in the region and compatible with the volume's encryption type.
>> >
>>
>> Next, switch volume types with the following command:
>>
>> ```bash
>> $ openstack volume set --type <VOLUME_TYPE> --retype-policy on-demand <VOLUME_NAME_OR_ID>
>> ```
>>

## Go further

To learn how to migrate a Block Storage volume to an encrypted LUKS volume, check out our dedicated guide: [Migrating a Block Storage volume to an encrypted LUKS volume](/pages/public_cloud/compute/migrating-non-encrypted-to-encrypted-volume).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
