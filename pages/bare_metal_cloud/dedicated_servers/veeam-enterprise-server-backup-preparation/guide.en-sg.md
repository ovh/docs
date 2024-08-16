---
title: Preparing a Bare Metal Server backup with Veeam Enterprise
excerpt: Learn how to prepare to back up your Bare Metal Server using Veeam Backup and Replication (Enterprise)
updated: 2024-04-05
---

## Objective

Backing up a Bare Metal server with Veeam Enterprise involves several applications and services to work together. The process may also change based on your configuration and preferences.

**Learn how to prepare to back up your Bare Metal Server using Veeam Backup and Replication (Enterprise).**

## Requirements

- An [OVHcloud Bare Metal server](https://www.ovhcloud.com/en-sg/bare-metal/)
- A [Veeam Enterprise Backup solution](https://www.ovhcloud.com/en-sg/storage-solutions/veeam-enterprise/)
- [OVHcloud Standard S3 Object Storage](https://www.ovhcloud.com/en-sg/public-cloud/object-storage/) (optional)

## Instructions

### Setting up your Dedicated Server

Your OVHcloud Bare Metal server needs to be installed and configured.

Browse our [Getting Started guides](/products/bare-metal-cloud-dedicated-servers-getting-started) for Dedicated Servers.

You can also configure your Dedicated Server to use the private network by following the steps in [this guide](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server).

### Setting up your Veeam Enterprise backup server

Download, install, and license your Veeam Enterprise backup server using our guide [Setting up Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication).

From here, you can keep reading to learn how to set up S3 Object Storage as your repository or you can go directly to the [Go further](#gofurther) step.

### Setting up your Object Storage

Object Storage creation and configuration can be done in the `Public Cloud`{.action} section of the [OVHcloud Control Panel](/links/manager).

If you don't have already a Public Cloud project in your OVHcloud account, read our [Creating your first OVHcloud Public Cloud project](/pages/public_cloud/compute/create_a_public_cloud_project) guide.

[Create an Object Storage container](/pages/storage_and_backup/object_storage/s3_create_bucket) using one of OVHcloud's **S3 API solutions (Standard or High Performance)**. Standard is recommended since this backup usually does not require High Performance storage.

> [!primary]
> When ordering an S3 container from OVHcloud, only order **Standard Object Storage – S3 API** or the **High Performance Object Storage – S3 API**. These containers support the S3 protocol fully and are designed for use as backup repositories.

Give the S3 user rights to the container by copying and pasting the text below into a JSON file.

```json
{
  "Statement":[
    {
      "Action":
         [
             "s3:GetObject",
             "s3:PutObject",
             "s3:DeleteObject",
             "s3:ListBucket",
             "s3:ListMultipartUploadParts",
             "s3:ListBucketMultipartUploads",
             "s3:AbortMultipartUpload",
             "s3:GetBucketLocation"
          ],
      "Effect":"Allow",
      "Resource":
          [
              "arn:aws:s3:::<container name>",
              "arn:aws:s3::: :::<container name>/*"
          ],
      "Sid":"RWContainer"
     }
  ]
}
```

Make sure to replace `container name` with your actual Object Storage container name.

From the [OVHcloud Control Panel](/links/manager), select `Public Cloud`{.action} and then `Object Storage`{.action} under the `Storage` section. Click on the more options `...`{.action} button to the right of the S3 user and choose `Import S3 Policy (JSON)`{.action}.

Select the JSON file you just edited and click `Import`{.action}.

![Object Storage - S3 user - JSON import](images/backup-preparation-01.png){.thumbnail}

### Configuring the S3 repository in Veeam Enterprise

From the Veeam application, select `Backup Infrastructure`{.action}, `Backup Repositories`{.action}, and `Add Repository`{.action}.

![Veeam - add respository](images/backup-preparation-02.png){.thumbnail}

Select `Object storage`{.action} as the repository type.

![Veeam - Object Storage](images/backup-preparation-03.png){.thumbnail}

Select `S3 Compatible`{.action}.

![Veeam - S3 compatible](images/backup-preparation-04.png){.thumbnail}

Give the new repository a **Name** and click `Next`{.action}.

![Veeam - repository name](images/backup-preparation-05.png){.thumbnail}

Enter the **Service point** (Endpoint) and **Region** information for your S3 storage service.

> You can find this information in the `Public Cloud`{.action} section of the [OVHcloud Control Panel](/links/manager).
> Click `Object Storage`{.action} then click the `...`{.action} button to the right of your container and click `Display objects`{.action}.
>
> ![Object storage - display objects](images/backup-preparation-06.png){.thumbnail}
>
> ![Object storage - endpoint](images/backup-preparation-07.png){.thumbnail}

![Veeam - service endpoint and region](images/backup-preparation-08.png){.thumbnail}

Click `Add`{.action} to enter your credentials. Enter your **Access key** and **Secret key** and then click `OK`{.action}.

> This information is available in the OVHcloud Control Panel under the `S3 Users`{.action} tab. The **Access key** is visible on the main page. 
> The **Secret key** can be found by clicking the more options `...`{.action} button and selecting `View the secret key`{.action}. 
>
> ![Object storage - keys](images/backup-preparation-09.png){.thumbnail}

![Veeam - keys](images/backup-preparation-10.png){.thumbnail}

Click `Browse...`{.action} to select the **Bucket**.

![Veeam - bucket](images/backup-preparation-11.png){.thumbnail}

Select the bucket and click `OK`{.action}.

![Veeam - bucket](images/backup-preparation-12.png){.thumbnail}

Click `Browse...`{.action} to select the **Folder**.

![Veeam - folder](images/backup-preparation-13.png){.thumbnail}

Click `New Folder`{.action}, enter a name for the folder, select it, and then click `OK`{.action}.

![Veeam - folder](images/backup-preparation-14.png){.thumbnail}

On the Mount Server screen, click `Next`{.action}.

![Veeam - Mount Server](images/backup-preparation-15.png){.thumbnail}

On the Review screen, click `Apply`{.action}.

![Veeam - review](images/backup-preparation-16.png){.thumbnail}

After the processes run successfully, click `Next`{.action}.

![Veeam - process end](images/backup-preparation-17.png){.thumbnail}

Review the Summary page and click `Finish`{.action}.

![Veeam - summary](images/backup-preparation-18.png){.thumbnail}

The Backup Repositories should now look similar to this:

![Veeam - repositories](images/backup-preparation-19.png){.thumbnail}

You can now proceed to perform a backup with Veeam Enterprise.

## Go further <a name="gofurther"></a>

Back up your environment using the Linux or Windows guide below:

- For Linux: [Backing Up a Bare Metal Linux Server with Veeam Enterprise](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-backup-linux)
- For Windows: [Backing Up a Bare Metal Server Using Veeam Agent for Windows](/pages/bare_metal_cloud/dedicated_servers/veeam-enterprise-server-backup-windows-agent)

Join our community of users on <https://community.ovh.com/en/>.
