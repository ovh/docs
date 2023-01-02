---
title: Restore a backup
slug: restore-backup
excerpt: Find out how to restore a backup
section: General guides
order: 060
---

**Last updated May 4th, 2022**

## Objective

OVHcloud Databases as-a-service (DBaaS) allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance. 

**This guide explains how to restore a backup of a database solution in the OVHcloud Control Panel.**

We continuously improve our offers. You can follow and submit ideas to add to our roadmap at <https://github.com/ovh/public-cloud-roadmap/projects/2>.

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia)
- A [Public Cloud database service](https://www.ovhcloud.com/asia/public-cloud/databases/) up and running

## Before we begin
In this guide we will use a Postgresql database engine as an example, but the procedure is exactly the same for all other engines.

You can learn more about how backups works on the [Automated backups guide](https://docs.ovh.com/asia/en/publiccloud/databases/backups/).

Restoration of a backup is done by creating a new service and pushing the backup data to this new service. This full process is called forking and is fully automated. Once this process is done, you will have two independent service running, the one from which the backup comes from, and a new one on which the backup data has been imported.


## Instructions
### Step 1: Select the database service you want to restore data from
First you need to go on the overview page of the service you want to restore the backup from.

![Select service](images/service-selection.png){.thumbnail}

### Step 2: Go to the backup tab
In the tab list click on `Backups`{.action}.

![service overview](images/service-overview.png){.thumbnail}

### Step 3: Select the backup to restore from
Select the backup from which you want to restore from. To help you choose, observe the dates at which the backups have been performed in the "Creation date" column.
Click on the `...`{.action} button corresponding to the chosen backup. Then click on `Duplicate (Fork)`{.action} to go on the configuration page of the new service.

> [!warning]
> The MongoDB service has the option to restore a backup in place, meaning restoring the backup on the same service. This option will rollback ALL data to the state it was in when the backup was done. This can induce data loss.


![backup tab](images/backup-tab.png){.thumbnail}

### Step 4: Configure the target service
As seen before, when restoring a backup you create a new separate database service on which the backup data will be imported. You are able to configure this new service as you wish.
#### Engine
For obvious reasons, you can not change the engine, this option is greyed. Same goes for the engine version, you will be able to update engine version once the new service is running.

![engine selection](images/engine-selection.png){.thumbnail}

#### Plan
When restoring a backup you can select another service plan.

![plan selection](images/plan-selection.png){.thumbnail}

#### Region
We currently don't allow changing the region. Your new service must be on the same region as the old one.

![region selection](images/region-selection.png){.thumbnail}

#### Nodes
You are able to change the node flavor of the service. Please note that the selection is restricted, depending on backup size. You can't restore a 400 GB data set on a node with only 320 GB of disk space.

![node selection](images/node-selection.png){.thumbnail}

#### Options
You can update the database name.

![engine selection](images/option-selection.png){.thumbnail}


Now click on `Create a database service`{.action} and the new service will be created. Please note that depending on the backup size it can take some time before the service is available.

### Step 5: Wait for service creation
You now just have to wait for your service to be ready.
This new service is now completly independent from the one you forked the backup from. You can safely delete the old service without impacting the new one.

> [!warning]
> The newly created service does not duplicate IP restrictions nor users which were created on the old service. You will have to recreate those before using your new service.

![forked service](images/forked-service.png){.thumbnail}

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!