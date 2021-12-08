---
title: 'Backing up an instance'
slug: back-up-instance
excerpt: 'Find out how to back up a Public Cloud instance in a few clicks'
section: Management via Control Panel
order: 1
---

**Last updated 2nd December 2019**

## Objective

You can create a backup of your instance at any time via the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). You can then use this backup to restore your instance to an old configuration, or recreate it.

**Create a backup of a Public Cloud in just a few clicks.**

## Requirements

- An [OVHcloud Public Cloud instance](../create_an_instance_in_your_ovh_customer_account/)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Creating a backup of an instance

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), switch to the `Public Cloud`{.action} section and select the Public Cloud project concerned. Then click on `Instances`{.action} in the left-hand menu.

Next, click on the `...`{.action} button to the right of the instance, then `Create a backup`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Enter a name for the backup on the next page.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Once the backup has been created, it will be available in the `Instance Backup`{.action} section.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Creating an automated backup of an instance

In the `Instances`{.action} section, select `Create an automatic backup`{.action} in the list of available actions you can perform on the instance.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

You will need to enter the following information on the next page:

#### **The workflow** 

Currently, only one workflow exists. It will make a backup for the instance and its primary volume.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **The resource** 

Simply select the instance you want to back up.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **The schedule** 

Here, you need to define the frequency with which backups are made. There are two default options:

- Daily backup with a log of 7 days maximum
- Daily backup with a log of 14 days maximum

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

    
#### **The name** 

This is where you set a name for the backup task. 
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

Once you have created it, go to the `Workflow Management`{.action} section:

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Your backups will be available in the `Instance Backup`{.action} section, and are billed in accordance with the solution you are using.


## Go further

Join our community of users on <https://community.ovh.com/en/>.
