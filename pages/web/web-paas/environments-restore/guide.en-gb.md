---
title: Restore an environment from a backup
slug: environments-restore
section: Environments
---

**Last updated 31st August 2023**



## Objective  

Once you have [backups of your environment](./backup.md), you can restore data from a previous point.

To restore an environment, you need an [Admin role for that environment type](../administration/users.md).

## 1. List available backups

To restore an environment, first select one of the available backups:

> [!tabs]      
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     
>      
>> ```      
>> {!> web/web-paas/ !}  
>> ```     

## 2. Restore from a backup

To restore the backup you've selected, follow these steps:

> [!tabs]      

The data is restored and your backed-up environment is deployed.
This deployment uses the built app, including variables, from when the backup was taken.

> [!primary]  
> 
> The code is also initially restored, but {{< vendor/name >}} doesn't modify your Git repository.
> So any future (re)deployments use the current Git repository to build the environment.
> 
> To restore your code to its previous state when the backup was taken,
> use Git commands such as [revert](https://git-scm.com/docs/git-revert).
> 
> See [how backup and restore works on {{< vendor/name >}}](../environments/backup.md#how-backup-and-restore-works).
> 
> 

## Restore to a different environment

You can restore backups to a different environment than they were created on using the CLI:

1\. Switch to the branch where the backup was created.

2\. Run the following command:


```bash
platform backup:restore --target={{% variable "TARGET_BRANCH_NAME" %}} {{% variable "BACKUP_ID" %}}
```
