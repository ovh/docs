---
title: Object Storage - How to migrate from an S3-compatible object storage provider to OVHcloud Object Storage
excerpt: This guide provides details on how to migrate from an S3-compatible object storage provider to OVHcloud Object Storage using Rclone
updated: 2025-09-08
---

## Objective

This guide provides detailed steps to help you migrate from a third-party S3-compatible object storage provider to OVHcloud Object Storage using the popular [Rclone](https://rclone.org/) tool, a command-line tool that can be used to manage cloud storage resources.

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](/links/partner) and/or discuss the issue with our [community of users](/links/community). OVHcloud cannot provide you with technical support in this regard.
>

## Requirements

- An **S3-compatible source bucket** in your current object storage with:
    - Your bucket name
    - Your associated access and secret keys
    - The associated region ID
- An **OVHcloud Object Storage destination bucket** with:
    - Your bucket name
    - Your associated access and secret keys
    - The associated region ID
- An **OVHcloud virtual machine** with Rclone installed working as the management workstation in our scenario. To get the best results, within your budget, we suggest at least the following specifications:
    - b3-16: 4 v-cores and 16 GB of RAM
    - c3-16: 8 v-cores and 16 GB of RAM

> [!primary]
>
> If this is your first time creating an Object Storage bucket, read our guide [Getting Started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).
>

## Migration Process

![Architecture](images/move-to-cloud-object-storage.png){.thumbnail}

See the diagram above for an illustration of the architecture. An OVHcloud Public Cloud virtual machine acts as an entry point, on which Rclone (installed with SSH and sudo access enabled) moves data to OVHcloud Object Storage.

## Considerations

### Egress

Egress fees may apply when migrating from your current platform, depending on your provider. The term “egress” describes the volume of data transferred from the provider’s network. **We highly recommend reviewing your current provider’s egress pricing** before starting the migration.

### Migration speed optimisation 

Keep in mind that several factors could affect how long migration takes. Consider not only the volume of data you plan to migrate but also the quantity and size of individual objects. Infrastructure and network limitations (bandwidth, computing power, network interfaces, etc.) could also affect performance.

### Data volume

This guide mainly **focuses on data migration for small to medium volumes (generally under 200 TB)**. For applications needing migration of hundreds or thousands of terabytes, we suggest contacting our [Professional Services](/links/professional-services) team for identifying the best approaches for migrating your data.

## Instructions 

### Step 1 - Preparing your S3-compatible source bucket

As explained before you will need your `access key`, `secret key` but also the `region ID` in which your bucket is. Connect to your source bucket provider console to get those details.

### Step 2 - Preparing your OVHcloud destination bucket

Similar to your source bucket, you will need your `access key`, `secret key` but also the `region ID` for your destination bucket. Log in to the [OVHcloud Control Panel](/links/manager) and navigate to the `Object Storage`{.action} section to collect those details.

### Step 3 - Installing, configuring and running Rclone

#### Step 3.1 - Installing Rclone

If you haven’t done it already, install **Rclone** by following the instructions from its [documentation](https://rclone.org/install/), based on your OS configuration.

#### Step 3.2 - Configuring Rclone

After installing **Rclone** on your virtual machine, configure its connection to both the source and destination buckets.

```bash
$ rclone config
```

This command will open the configuration menu and will guide you step by step with the configuration. The official OVHcloud provider configuration is available and will guide you step by step. Follow the steps available [here](https://rclone.org/s3/#ovhcloud).

You can also create/modify the configuration file yourself with the following command:

```bash
$ rclone config file
```

If the configuration file doesn’t exist, you’ll be prompted to add the following configuration using your preferred editor. For example, on Linux you can use `nano` :

```bash
$ nano /home/<your linux user>/.config/rclone/rclone.conf
```

Then, add your configuration blocks:

```bash
[<your source remote provider name>]
type = s3
provider = <name of your source provider in rclone list>
env_auth = false
access_key_id = <your source provider access key>
secret_access_key = <your source provider secret key>
region = <your source provider region name>

[ovhcloud]
type = s3
provider = OVHcloud
env_auth = false
access_key_id = OVH-ACCESS-KEY
secret_access_key = OVH-SECRET-KEY
endpoint = s3.<region>.io.cloud.ovh.net
region = <region>
```

> [!primary]
>
> To get the list of OVHcloud region endpoints, see [Object Storage - Endpoints and Object Storage geoavailability](/pages/storage_and_backup/object_storage/s3_location).
>

You can then test your source provider and your OVHcloud connections using the `rclone config` command by as below:

```bash
$ rclone config
```

#### Step 3.3 - Running Rclone

Depending on your strategy you can use two different commands to start the migration. Either you use the `rclone sync` command to start the migration of one or all buckets. As detailed in the documentation, the `rclone sync`command will make source and destination identical. Be careful then when using it.

You can also use the `rclone copy` command that will copy files from your source to your destination.
In both cases, remember to change `source-bucket-name` and `ovh-bucket-name` to your S3-compatible source provider and OVHcloud Object Storage bucket names, respectively:

```bash
$ rclone sync <your source provider name>:source-bucket-name/ ovhcloud:ovh-bucket-name/ --progress
```

or:

```bash
$ rclone copy <your source provider name>:source-bucket-name/ ovhcloud:ovh-bucket-name/ --progress
```

`--progress` shows progress during transfer.

In order to leverage the rclone WebUI GUI you can also use the following command:

```bash
$ rclone copy <your source provider name>:source-bucket-name/ ovhcloud:ovh-bucket-name/ --transfers 50 --rc --rc-addr :5572 --rc-web-gui --rc-user USERNAME --rc-pass PASSWORD
```

In this command we added specific flags to optimize and monitor the copy:

- `--transfers` represents the number of file transfers to run in parallel (default 4). Test different value based on your use case and your configuration as high values may increase CPU usage for example.
- `--rc` enables the remote control server
- `--rc-addr :5572` represents the address and the port used to access rclone’s WebUI GUI. Port 5572 is the default port used by Rclone to securely access the WebUI.
- `--rc-web-gui` launches WebGUI on localhost
- `--rc-user USERNAME` `--rc-pass PASSWORD` are your user and password for authentication. Make sure to enter the right credentials.

> [!primary]
>
> Many other flags are available with rRlone. You can get them on the [Rclone documentation](https://rclone.org/commands/rclone/).
>

With the copy process set up, you can now begin monitoring the migration process using Rclone’s WebUI GUI.

In your preferred web browser, use port 5572 to reach your instance’s address: `http://IP-ADDRESS:5572`.

You’ll need to log in using your rclone credentials: `--rc-user` and `–rc-pass`.

Once you’re logged in, you can track the `rclone copy` command’s progress: check job status, throughput, bandwidth, object count, and total data volume. From the GUI, you can also manage new remotes and new actions.

#### Migration status

We recommend comparing the source and destination buckets after migration. Your source and OVHcloud destination buckets can be compared via command line or their respective control panels.

You can check the size of both buckets and number of objects using this command line:

```bash
rclone size <your source provider name>:source-bucket-name/
rclone size ovhcloud:ovh-bucket-name/
```

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
