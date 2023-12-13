---
title: "Install and use OVHcloud Backint Agent for SAP HANA"
excerpt: "This guide provides instructions for installing OVHcloud Backint Agent for SAP HANA and its usage"
updated: 2023-09-05
---
 
 
## Objective
  
This guide provides detailed steps for the installation and usage of OVHcloud Backint Agent for SAP HANA.

OVHcloud Backint Agent for SAP HANA allows you to back up your SAP HANA database on an OVHcloud S3 Object Storage bucket.

![one_bucket](images/one_bucket.png){.thumbnail}
  
## Requirements.
.
- [A Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project) deployed.
- An [S3 user](/pages/storage_and_backup/object_storage/s3_identity_and_access_management#creating-a-user) created.
- An [S3 Object Storage bucket](/pages/storage_and_backup/object_storage/s3_create_bucket) created.
- [The read and write rights configured](/pages/storage_and_backup/object_storage/s3_identity_and_access_management#manage-access-to-a-bucket-via-a-profile) on the S3 Object Storage bucket for the S3 user
- A SAP HANA database installed

> [!warning]
> The access key and the secret key should not be communicated. They grant the rights to write, read and delete the data which will be stored in the S3 Object Storage bucket.
>

## Instructions
  
> [!primary]
> [** Quick access to OVHcloud Backint Agent download URL**](#ovhcloud-backint-agent-for-sap-hana)
>

### S3 Object Storage

> [!primary]
> To get more information about the configuration and the usage of the AWS S3 CLI commands, please refer to the documentation [Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).
>

The bucket versioning must be enabled to ensure the correct operation of OVHcloud Backint Agent.

To check if the versioning is enabled on your S3 Object Storage bucket, execute the following command:

```bash
aws --profile <profile_name> \
s3api get-bucket-versioning \
--bucket <bucket_name>
```

Output expected:

```bash
{
    "Status": "Enabled"
}
```

If the versioning status of your S3 Object Storage bucket is different from `Enabled`, execute the following command:

```bash
aws --profile <profile_name> \
s3api put-bucket-versioning \
--bucket <bucket_name> \
--versioning-configuration Status=Enabled
```
  
### OVHcloud Backint Agent for SAP HANA

Go to the repository `/usr/sap/<SID>/SYS/global/hdb/opt/` and [download the OVHcloud Backint Agent for SAP HANA archive](https://ovhcloud-backint-agent.s3.rbx.io.cloud.ovh.net/ovhcloud-backint-agent.zip) which contains:

- The usage license of OVHcloud Backint Agent for SAP HANA.
- The NOTICE file including copyrights.
- A configuration file template.
- The OVHcloud Backint Agent for SAP HANA binary.

To download the archive to your server which hosts the SAP HANA database, you can use the following command:

```bash
wget https://ovhcloud-backint-agent.s3.rbx.io.cloud.ovh.net/ovhcloud-backint-agent.zip -P /usr/sap/<SID>/SYS/global/hdb/opt/
```

The archive named `ovhcloud-backint-agent.zip` must be decompressed. Execute the following command:

```bash
unzip /usr/sap/<SID>/SYS/global/hdb/opt/ovhcloud-backint-agent.zip -d /usr/sap/<SID>/SYS/global/hdb/opt/
```

Now, four files are present in the repository `/usr/sap/<SID>/SYS/global/hdb/opt/`:

- LICENSE
- NOTICE
- hdbbackint.cfg
- hdbbackint

> [!primary]
> Take note of the LICENSE file. By using or downloading OVHcloud Backint Agent for SAP HANA, you consent to the license terms.
>

The `hdbbackint.cfg` file must have the read and write rights, the `hdbbackint` file must have the read and execution rights. These rights must be applied to the SAP HANA (sid)adm user.

```bash
chown <sid>adm:sapsys /usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg
chown <sid>adm:sapsys /usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint
chmod 600 /usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg
chmod 500 /usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint
```

Check that you are able to execute OVHcloud Backint Agent with the SAP HANA user.

```bash
su - <sid>adm -c "/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint -v"
"Backint 1.04" "OVHcloud Backint Agent version 1.0 for SAP HANA"
```

### Configuration

Edit the content of the `hdbbackint.cfg` file and replace all values between round brackets by your S3 Object Storage bucket information.

```{.console}
[trace]
default = INFO
destination = outputfile
 
[ovhcloud]
endpoint_url = https://s3.(region).io.cloud.ovh.net # example : https://s3.rbx.io.cloud.ovh.net
bucket = (bucket_name) # example : sap-hana-backup
region = (region) # example : rbx
access_key = (s3_user_access_key) # example : 12345678901234567890123456789012
secret_key = (s3_user_secret_key) # example : 12345678901234567890123456789012
max_concurrency = 10
multipart_chunksize = 51916800
multipart_threshold = 51916800
```

> [!warning]
> The following commands modify the backup configuration of your SAP HANA database. Execute these commands with precaution.
>
> We recommend to trigger a full backup of your SAP HANA database after this operation to validate the configuration.
>

Execute the following SQL commands to update the backup configuration of your SAP HANA database.

*Replace in the following SQL commands the* `<SID>` *characters by the SID of your SAP HANA database.*

```SQL
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','catalog_backup_parameter_file')='/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','catalog_backup_using_backint')='true' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','data_backup_parameter_file')='/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','log_backup_parameter_file')='/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','log_backup_using_backint')='true' WITH RECONFIGURE;
```

> [!primary]
> To discover all backup parameters for SAP HANA, we recommend the [SAP documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/009e68bc5f3c440cb31823a3ec4bb95b/e28fbdf1024c40e1a97fca48380aad98.html?locale=en-US). In the column "Section", set "Backup".
>

### Backup

To validate the configuration, you can trigger manual backups with the following commands via SSH access:

*Replace in the following commands the* `<SID>` *characters by the SID of your SAP HANA database.*

```bash
# SYSTEMDB Backup
/usr/sap/<SID>/HDB00/exe/hdbsql -u SYSTEM -d SYSTEMDB "BACKUP DATA USING BACKINT ('MANUAL_COMPLETE_BACKUP');"

# TENANTDB Backup
/usr/sap/<SID>/HDB00/exe/hdbsql -u SYSTEM -d SYSTEMDB "BACKUP DATA FOR <SID> USING BACKINT ('MANUAL_COMPLETE_BACKUP');"
```

You also have the possibility to trigger these backups via the SAP HANA Studio software. Select `Backint`{.action} in the `Destination Type`{.action} category.

![hana_studio](images/hana_studio.png){.thumbnail}

After the execution of these backups, several files corresponding to backups of your SAP HANA database via OVHcloud Backint Agent are now present in your S3 Object Storage bucket.

![backup](images/backup.png){.thumbnail}

> [!success]
> If you see these files in your S3 Object Storage bucket, you have successfully configured your SAP HANA backups with OVHcloud Backint Agent.
>

If these backups have not been done as expected, check the content of the following files to search for errors:

- backint.log
- backup.log

Both files are present in the repository `/usr/sap/<SID>/HDB<NI>/<hostname>/trace` for the SYSTEMDB backup and the repository `/usr/sap/<SID>/HDB<NI>/<hostname>/trace/DB_<SID>` for the TENANTDB backup.

The `backint.log` file gives you information about the OVHcloud Backint Agent execution. For example, a permission issue with the S3 Object Storage bucket:

```log
botocore.exceptions.ClientError: An error occurred (AccessDenied) when calling the PutObject operation: Access Denied.
```

The `backup.log` file gives you information about the backup execution through SAP HANA, its progress and its encountered errors.

```log
INFO    BACKUP   state of service: nameserver, <hostname>:30001, volume: 0, BackupExecuteTopologyAndSSFSBackupInProgress
INFO    BACKUP   state of service: nameserver, <hostname>:30001, volume: 0, BackupError
INFO    BACKUP   state of service: nameserver, <hostname>:30001, volume: 1, BackupAbortSavepointInProgress
INFO    BACKUP   state of service: nameserver, <hostname>:30001, volume: 1, BackupAbortSavepointFinished
ERROR   BACKUP   SAVE DATA finished with error: [447] backup could not be completed
```

### Scheduling

The scheduling of your SAP HANA database backups has to be modified.

We advise you to refer to the SAP Note [2782059](https://launchpad.support.sap.com/#/notes/2782059) which sets out four options to schedule the backup of SAP HANA databases.

A scheduling example via crontab:

*Replace in the following commands the* `<SID>` *characters by the SID of your SAP HANA database.*

```bash
# TENANTDB Full Backup - MON THU SUN
0 0 * * 1,4,7 /usr/sap/<SID>/HDB00/exe/hdbsql -U BACKUP "BACKUP DATA FOR <SID> USING BACKINT ('SCHEDULED_$(date +\%H\%M\%S\%s)_COMPLETE_BACKUP');"
 
# TENANTDB Differential Backup - TUE WED FRI SAT
0 0 * * 2,3,5,6 /usr/sap/<SID>/HDB00/exe/hdbsql -U BACKUP "BACKUP DATA DIFFERENTIAL FOR <SID> USING BACKINT ('SCHEDULED_$(date +\%H\%M\%S\%s)_DIFFERENTIAL_BACKUP');"
 
# SYSTEMDB Full Backup - SUN
0 0 * * 7 /usr/sap/<SID>/HDB00/exe/hdbsql -U BACKUP "BACKUP DATA USING BACKINT ('SCHEDULED_$(date +\%H\%M\%S\%s)_COMPLETE_BACKUP);"
```

> [!primary]
> The `-U` option allows you to call a stored key in the *hdbuserstore*. To know more about the adding of a key in the *hdbuserstore*, we invite you to take note of the SAP documentation available at [this address](https://help.sap.com/docs/SAP_HANA_PLATFORM/b3ee5778bc2e4a089d3299b82ec762a7/ddbdd66b632d4fe7b3c2e0e6e341e222.html?version=2.0.02&locale=en-US).
>
> In this example, the "BACKUP" key has been created with a login and password for a SAP HANA user which has the role BACKUP. The privileges to grant to this user are explained in [the SAP HANA documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/c4b71703bb571014810ebb38dc59cf51.html).
>

### Recovery

To recover a SAP HANA database from a backup done with OVHcloud Backint Agent, follow these steps in SAP HANA Studio:

> [!tabs]
> **Step 1**
>> Select your TENANTDB that you want to recover.
>>
>> Then click on `Next`{.action}.
>>
>> ![hana_studio_recover_1](images/hana_studio_recover_1.png){.thumbnail}
>>
> **Step 2**
>> Select the option that you want to use to recover your TENANTDB:
>>
>> - Recover the database to its most recent state.
>> - Recover the database to the following point in time.
>> - Recover the database to a specific data backup.
>> 
>> Then click on `Next`{.action}.
>>
>> ![hana_studio_recover_2](images/hana_studio_recover_2.png){.thumbnail}
>>
> **Step 3**
>> Ensure that the options `Recover using the backup catalog`{.action} and `Search for the backup catalog in Backint only`{.action} are selected.
>>
>> Then click on `Next`{.action}.
>>
>> ![hana_studio_recover_3](images/hana_studio_recover_3.png){.thumbnail}
>>
> **Step 4**
>> The TENANTDB has to be stopped to do the recovery.
>>
>> Ensure to stop your SAP system linked to this SAP HANA database before starting the recovery.
>>
>> ![hana_studio_recover_4](images/hana_studio_recover_4.png){.thumbnail}
>>
> **Step 5**
>> After few seconds, SAP HANA Studio displays the full backup list recorded in the backup catalog of your SAP HANA database.
>>
>> We recommend to click on `Check Availability`{.action} to check the availability of the backup in the S3 Object Storage bucket.
>>
>> Then click on `Next`{.action}.
>>
>> ![hana_studio_recover_5](images/hana_studio_recover_5.png){.thumbnail}
>> 
> **Step 6**
>> If you did not modify the backup log localisation, you can click on `Next`{.action}.
>>
>> Otherwise set the right path first. Then click on `Next`{.action}.
>> 
>> ![hana_studio_recover_6](images/hana_studio_recover_6.png){.thumbnail}
>>
> **Step 7**
>> Ensure to check the `Third-Party Backup Tool (Backint)`{.action} option and to uncheck the `File System`{.action} option.
>>
>> Then click on `Next`{.action}.
>>
>> ![hana_studio_recover_7](images/hana_studio_recover_7.png){.thumbnail}
>>
> **Step 8**
>> The recovery of your SAP HANA database starts.
>>
>> ![hana_studio_recover_8](images/hana_studio_recover_8.png){.thumbnail}
>>

Once the recovery has been done successfully, your SAP HANA database is started and available.

## Go further

- To improve the security of your backups, we advise you to set the [object immutability](/pages/storage_and_backup/object_storage/s3_managing_object_lock).
- You also have the possibility to [trigger SAP HANA backup to several S3 Object Storage buckets](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_ovhcloud_backint_agent_several_buckets).

Join our community of users on <https://community.ovh.com/en/>.