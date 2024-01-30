---
title: "Use OVHcloud Backint Agent with several S3 Object Storage buckets"
excerpt: "This guide provides instructions for using OVHcloud Backint Agent for SAP HANA with several S3 Object Storage buckets"
updated: 2024-01-25
---

## Objective

This guide provides the details of using OVHcloud Backint Agent for SAP HANA with several S3 Object Storage buckets.

OVHcloud Backint Agent for SAP HANA allows you to back up and recover your SAP HANA database on one or many OVHcloud S3 Object Storage buckets.

Using several S3 Object Storage buckets can be useful to:

- separate the data backup named `databackup` from the log backup named `log_backup` ;
- store into S3 Object Storage buckets with a different retention policy ;
- use different locations.

![two_buckets](images/two_buckets.png){.thumbnail}

OVHcloud Backint Agent for SAP HANA has been certified by SAP, you can find certification information here:

- [SAP Certified Solutions Directory](https://www.sap.com/dmc/exp/2013_09_adpd/enEN/#/solutions?search=backint&id=s:c5927e8a-cf79-40c1-84ad-cdd354554389)
- [SAP Note 2031547](https://me.sap.com/notes/0002031547)
- [SAP Note 3344150](https://me.sap.com/notes/3344150)

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- [A Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project) in your OVHcloud account with:
    - Two [S3 Object Storage buckets](/pages/storage_and_backup/object_storage/s3_create_bucket) and an [S3 user](/pages/storage_and_backup/object_storage/s3_identity_and_access_management#creating-a-user) with the read and write rights
- A SAP HANA database installed
- [OVHcloud Backint Agent for SAP HANA installed](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent)

## Instructions

### S3 Object Storage

> [!primary]
>
> To get more information about the configuration and the usage of the AWS S3 CLI commands, please refer to the documentation [Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).
>
> It's not mandatory to install AWS S3 CLI on your SAP HANA server. All actions in this chapter can be done from your admin server or also from your laptop.
>

The S3 Object Storage buckets versioning must be enabled to ensure the correct operation of OVHcloud Backint Agent. The versioning allows you to keep several versions of a same object in your S3 Object Storage buckets.

With SAP HANA backups, the versioning allows you to trigger several backups with the same name (for example "COMPLETE_DATA_BACKUP") and keeping the capacity to recover a specific version of the backup named "COMPLETE_DATA_BACKUP". If the versioning is not enabled, only the latest version of the backup named "COMPLETE_DATA_BACKUP" can be recovered.

To check if the versioning is enabled on your S3 Object Storage buckets, please execute the following command:

```bash
aws --profile <profile_name> s3api get-bucket-versioning --bucket <bucket_name>

# Example :
# aws --profile default s3api get-bucket-versioning --bucket my-sap-hana-bucket-data
# aws --profile default s3api get-bucket-versioning --bucket my-sap-hana-bucket-log
```

Expected output for each S3 Object Storage bucket:

```console
{
    "Status": "Enabled"
}
```

If the output is empty, it means that the versioning of your S3 Object Storage buckets is not enabled. To fix it, please execute the following command:

```bash
aws --profile <profile_name> s3api put-bucket-versioning --bucket <bucket_name> --versioning-configuration Status=Enabled

# Example :
# aws --profile default s3api put-bucket-versioning --bucket my-sap-hana-bucket-data --versioning-configuration Status=Enabled
# aws --profile default s3api put-bucket-versioning --bucket my-sap-hana-bucket-log --versioning-configuration Status=Enabled
```

### Configuration

Edit the content of the `hdbbackint.cfg` file and replace all values between chevrons by your first S3 Object Storage bucket information. Below, an example of its content after edition.

```ini
[trace]
default = INFO
destination = outputfile

[ovhcloud]
endpoint_url = https://s3.rbx.io.cloud.ovh.net
bucket = my-sap-hana-bucket-data
region = rbx
access_key = 12345678901234567890123456789012
secret_key = 12345678901234567890123456789012
max_concurrency = 10
multipart_chunksize = 1GB
multipart_threshold = 1GB
```

The `multipart_chunksize` and `multipart_threshold` parameters can be set with values in byte (example: 52428800 equal 50MB), in KB, in GB, or in TB. If the value is set without unit, the default unit is byte.

- The `multipart_threshold` parameter triggers the upload of an object in multipart.
- The `multipart_chunksize` parameter sets the size of each part to be uploaded.

The default values for `multipart_chunksize` and `multipart_threshold` parameters in the `hdbbackint.cfg` file offer an optimal performance in many cases, but you can increase or decrease it, depending on your environment.

Create a copy of the `hdbbackint.cfg` file with another name, for example `hdbbackint-log.cfg` and replace its values by the details of your second S3 Object Storage bucket.

```ini
[trace]
default = INFO
destination = outputfile

[ovhcloud]
endpoint_url = https://s3.rbx.io.cloud.ovh.net
bucket = my-sap-hana-bucket-log
region = rbx
access_key = 12345678901234567890123456789012
secret_key = 12345678901234567890123456789012
max_concurrency = 10
multipart_chunksize = 1GB
multipart_threshold = 1GB
```

> [!warning]
>
> The following commands modify the backup configuration of your SAP HANA database, please execute these commands with caution.
>
> We recommend triggering a full backup of your SAP HANA database after this operation to validate the configuration.
>

Execute the following SQL commands to update the backup configuration of your SAP HANA database.

*Replace in the following SQL commands the* `<SID>` *characters by the SID of your SAP HANA database.*

```SQL
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','catalog_backup_parameter_file')='/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','catalog_backup_using_backint')='true' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','data_backup_parameter_file')='/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint.cfg' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','log_backup_parameter_file')='/usr/sap/<SID>/SYS/global/hdb/opt/hdbbackint-log.cfg' WITH RECONFIGURE;
ALTER SYSTEM ALTER CONFIGURATION('global.ini','SYSTEM') SET('backup','log_backup_using_backint')='true' WITH RECONFIGURE;
```

> [!primary]
>
> To discover all backup parameters for SAP HANA, we recommend the [SAP documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/009e68bc5f3c440cb31823a3ec4bb95b/e28fbdf1024c40e1a97fca48380aad98.html?locale=en-US). In the column "Section", set "Backup".
>

### Backup

To validate the configuration, you can trigger manual backups with the following commands via SSH access:

*Replace in the following commands the* `<SID>` *characters by the SID of your SAP HANA database and* `<NI>` *characters by the instance number of your SAP HANA database.*

```bash
# SYSTEMDB Backup
/usr/sap/<SID>/HDB<NI>/exe/hdbsql -u SYSTEM -d SYSTEMDB "BACKUP DATA USING BACKINT ('MANUAL_COMPLETE_BACKUP');"

# TENANTDB Backup
/usr/sap/<SID>/HDB<NI>/exe/hdbsql -u SYSTEM -d SYSTEMDB "BACKUP DATA FOR <SID> USING BACKINT ('MANUAL_COMPLETE_BACKUP');"
```

You also have the possibility to trigger these backups via the SAP HANA Cockpit. Select `Backint`{.action} in the `Destination Type`{.action} category.

![backup_hana_cockpit](images/backup_hana_cockpit.png){.thumbnail}

After the execution of these backups, several files named `_databackup_` are now present in your first S3 Object Storage bucket, these files correspond to backups of your SAP HANA database via the OVHcloud Backint Agent.

Two files named `log_backup_0_0_0_0` and which have `DB_<SID>` and `SYSTEMDB` prefixes are also present in your first S3 Object Storage bucket. These files correspond to backups of the SAP HANA backup catalog, allowing you to list backups known by SAP HANA.

![bucket_data_backup](images/bucket_data_backup.png){.thumbnail}

In your second S3 Object Storage bucket,  some files named `log_backup` are present and correspond to logs backups.

![bucket_log_backup](images/bucket_log_backup.png){.thumbnail}

If these backups have not been done as expected, check the content of the following files to search for errors:

- backint.log
- backup.log

Both files are present in the repository `/usr/sap/<SID>/HDB<NI>/<hostname>/trace` for the SYSTEMDB backup and in the repository `/usr/sap/<SID>/HDB<NI>/<hostname>/trace/DB_<SID>` for the TENANTDB backup.

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

You have the possibility to create more S3 Object Storage buckets and apply on it different parameters as the retention policy or the managing object immutability.

In order to target the right S3 Object Storage bucket, OVHcloud Backint Agent needs the corresponding `hdbbackint.cfg` file during the backup execution.

### Scheduling

About the backups scheduling, please refer to our guide [Install and use OVHcloud Backint Agent for SAP HANA](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent#scheduling).

### Recovery

About the recovery of your SAP HANA database, please refer to our guide [Install and use OVHcloud Backint Agent for SAP HANA](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent#recovery).

The steps are the same, even if you use different S3 Object Storage buckets for your `DATA` and `LOG` backups.

## Go further

To improve the security of your backups, we advise you to set the [object immutability](/pages/storage_and_backup/object_storage/s3_managing_object_lock).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
