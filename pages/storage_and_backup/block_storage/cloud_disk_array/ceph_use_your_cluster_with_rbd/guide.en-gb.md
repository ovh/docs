---
title: Access the cluster using rbd client
excerpt: This guide shows you how to access your cluster using rbd client.
updated: 2022-06-22
---

## Objective

This guide explains how to access your **OVHcloud Ceph cluster** from a machine configured as an **RBD client**. It describes how to prepare your environment, configure network access, and connect securely to your **Cloud Disk Array**.

## Requirements

Before proceeding:

- A [Cloud Disk Array](/links/storage/cloud-disk-array) solution
- Your client machine’s public or private IP is allowed in the Access Control List (ACL){} of your Ceph cluster. See our guide [Cloud Disk Array - IP ACL creation](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_create_an_ip_acl)
- You have the following credentials (available in the OVHcloud Control Panel):
  - Cluster monitor IPs
  - Ceph username (`client.<username>`)
  - Secret key (keyring content)

## Instructions

### Installing Ceph on the Client Machine

For **Debian/Ubuntu** distributions:

```bash
sudo apt-get update
sudo apt-get -y install ceph ceph-common
```

For **RHEL/CentOS** distributions:

```bash
sudo yum install -y ceph-common
```

### Retrieve Connection Details

Access the [OVHcloud Control Panel](/links/manager) and navigate to your **Cloud Disk Array service**.

Overview:

- Locate the monitor IPs for your Ceph cluster.

Users:

- Find the Ceph username and key required for authentication.

> [!primary]
>
> **Note:** If no users exist yet, follow these guides:
>
> - [Cloud Disk Array - User creation](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_create_a_user)
> - [Change user rights](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_change_user_rights)
>

### Configure the Client

Create or edit the file `/etc/ceph/ceph.conf` with the following content:

```bash
[global]
mon_host = <MONITOR_IP_1>:6789, <MONITOR_IP_2>:6789, <MONITOR_IP_3>:6789
```

> [!primary]
>
> **Note:** The default Ceph monitor port is :6789 (Messenger v1). Some clusters may also expose :3300 for Messenger v2.
>

Create a keyring file for your Ceph user at `/etc/ceph/ceph.client.<username>.keyring`:

```bash
[client.<username>]
key = <your_secret_key>
```

Ensure the keyring file has restricted permissions for security:

```bash
sudo chmod 600 /etc/ceph/ceph.client.<username>.keyring
```

### Test the Connection and Configuration

Verify that the client can successfully connect to the Ceph cluster:

```bash
ceph -s --id <username>
```

If the configuration is correct, the command returns the current cluster status.

To further validate the setup, list the images available in your pool:

```bash
rbd -n client.<username> list <pool_name>
```

An empty result indicates that no images have been created yet. If an error occurs, review the configuration files and credentials to ensure they are correct.

### Create, Map, and Mount an RBD Volume

A Ceph pool cannot be mounted directly. You must first create an RBD image within the pool and then map it to a block device.

Create an RBD image:

```bash
rbd -n client.<username> create <pool_name>/<image_name> \
  -s <size_in_MB> \
  --image-format 2 \
  --image-feature layering
```

Verify image creation:

```bash
rbd -n client.<username> list <pool_name>
```

Map the image to a Block Device

```bash
sudo rbd -n client.<username> map <pool_name>/<image_name>
```

Verify the mapping

```bash
rbd showmapped
```

Format the Block Device (XFS Example)

```bash
sudo mkfs.xfs /dev/rbd0
```

Mount the Filesystem

```bash
sudo mkdir -p /mnt/<mount_point>
sudo mount /dev/rbd0 /mnt/<mount_point>
df -h /mnt/<mount_point>
```

You can now start using your Ceph block storage.

### Unmount and Unmap the RBD Volume

Before detaching an RBD image, ensure the filesystem is properly unmounted:

```bash
sudo umount /mnt/<mount_point>
sudo rbd unmap /dev/rbd0
```

The RBD image is now safely detached from the client.

### Notes and Best Practices

- Always use the monitor IP addresses provided in the OVHcloud Control Panel.
- Avoid storing sensitive information in plain-text configuration files.
- For Kubernetes environments, use the **CSI RBD driver** with the same configuration and credentials.

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Storage and Backup services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
