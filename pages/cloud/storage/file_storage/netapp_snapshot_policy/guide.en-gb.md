---
title: Enterprise File Storage - Manage your snapshot policies
slug: cloud/storage/file_storage/snapshot-policies
excerpt: Snapshot policies management tutorial for Enterprise File Storage
section: Enterprise File Storage
order: 04
updated: 2023-08-11
---
 
**Last updated 11th August 2023**
 
## Objective
  
In this tutorial, we will provide an overview of how to manage your snapshot policies for OVHcloud Enterprise File Storage volumes.
Learn how to create a snapshot policy, apply it to your volume, modify and delete it using the OVHcloud APIs and the control panel.
  
## Requirements

- An OVHcloud Enterprise File Storage service with an available volume
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Basics

A volume snapshot is a point-in-time, read-only copy of a volume.
Snapshots are created from an existing, operational volume. They cannot exist without it. 
A snapshot policy allows you to automate the snapshot creation using different parameters. The policy can then be modified and deleted if you no longer need it.


## Instructions

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and switch to `Bare Metal Cloud`{.action} in the top navigation bar. Open `Storage and Backup`{.action} and `Enterprise File Storage`{.action} in the left-hand menu, then select your service from the list.

### Creating your snapshot policy

A snapshot policy allows you to automate snapshots creation by defining creation frequency in minute, hour, day, week, or month rotations. 
It is also required to specify the number of copies you want to retain.

1.  From your OVHcloud Enterprise File Storage control panel, select the `Snapshot policy`{.action} tab.
![SnapshotPolicy](images/Snapshot_Policy_1.png){.thumbnail}

2.  Set your snapshot policy name, a policy description and then use the button `Add a new rule`{.action} to add one or more rules to the policy.
![SnapshotPolicy](images/Snapshot_Policy_2.png){.thumbnail}

3.Fill in the fields to specify the time of day, days of a month, week days and months for the snapshot creation. You also have to enter a prefix for the snapshots, needed for naming them.

You can find more detailed information for each value by clicking on the question mark icon. By expanding the `Example`{.action} section you can view two sets of policy rules with an explanation of their outcome.
Click on the check mark button to add the new rule. Once all rules are added, click on `Create a new snapshot policy`{.action}.

> [!primary]
> You need to specify a prefix and a duration in minutes. You can optionally enter the hours, days and months of execution to refine your scheduling.
>

You cannot modify a snapshot policy after creating it. You will have to delete it and create another one if you need to apply new frequency parameters.  

### Apply a snapshot policy 

Once the snapshot policy is created, you can then apply it to a volume.
1.  Go to the `volumes`{.action} tab of your capacity pool
![ApplySnapshotPolicy](images/Snapshot_Policy_3.png){.thumbnail}

3.  Choose from the list, the volume you want the snapshot policy to be applied on
4.	Go the `Snapshots`{.action} section and in the `Manage the snapshot policy`{.action} section, select the policy you want to apply. 
5.	Click on the `Apply the policy`{.action}
![ApplySnapshotPolicy](images/Snapshot_Policy_4.png){.thumbnail}

### Delete a snapshot policy

> [!warning]
>
> A snapshot policy attached to a volume cannot be deleted. If you want to delete a snapshot policy associated to one or more volumes, you will have to de-associate the snapshot policy first by associating another snapshot policy to these volumes.
>

To delete a snapshot policy:
1.	Go to your capacity pool `Snapshot policies`{.action} tab
![DeleteSnapshotPolicy](images/Snapshot_Policy_5.png){.thumbnail}

2.	Select the policy you want to delete
3.	Click on the `delete`{.action} button
![DeleteSnapshotPolicy](images/Snapshot_Policy_6.png){.thumbnail}


## Go further
  
Join our community of users on <https://community.ovh.com/en/>.
