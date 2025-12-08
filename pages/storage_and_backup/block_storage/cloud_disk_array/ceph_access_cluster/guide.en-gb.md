---
title: How to Access a Cloud Disk Array Cluster from a Client Machine
excerpt: "Connect a client to your OVHcloud Cloud Disk Array, add its IP to the ACL, install Ceph, configure ceph.conf, add the keyring and test"
updated: 2025-09-18
---

## Objective

This guide shows how to configure a client (such as a Public Cloud instance or any server with a public IP) to connect to your OVHcloud Cloud Disk Array cluster using Ceph CLI tools.

## Requirements

- A [Cloud Disk Array](/links/storage/cloud-disk-array) solution
- The public IP address of the client machine you want to grant access to.
- Access to the [OVHcloud Control Panel](/links/manager) or to the [OVHcloud API](/links/api)
- The Ceph monitor IPs, a Ceph user, and its secret key from the Control Panel. You can follow [this guide](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_create_a_user) to manage dedicated users.

## Instructions

### Step 1: Authorize Your Client's IP in the ACL

You must add your client machine's public IP address to the cluster's Access Control List (ACL) to allow it to connect. Follow [this guide](/pages/storage_and_backup/block_storage/cloud_disk_array/ceph_create_an_ip_acl) to add the IP in your Clous Disk Arry ACL.

> [!warning]
>
> Without this step, all connection attempts from your client will be blocked by the firewall.
>

### Step 2: Install Ceph Common Packages

Make sure the ceph-common package is installed on your client machine.

> [!tabs]
> **On Debian/Ubuntu**
>>
>> ```shell
>> sudo apt update
>> sudo apt install -y ceph-common
>> ```
>>
> **On RHEL/CentOS Stream/Rocky Linux**
>>
>> ```shell
>> sudo dnf install -y ceph-common
>> ```
>>

### Step 3: Create the Ceph Configuration File

This configuration file tells your client how to reach the cluster’s monitors over the public network.

1. Create the Ceph configuration directory:

    ```shell
    sudo mkdir -p /etc/ceph
    ```

2. Create and edit the ceph.conf file:

    ```shell
    sudo nano /etc/ceph/ceph.conf
    ```

3. Add a [global] section with your monitors’ public IPs, found on your Cloud Disk Array main Control Panel page.

    ```ini
    [global]
    #Specific fsid           
    fsid = aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee
    
    #Force use secure protocol
    ms_client_mode = secure
    
    #Force the messenger v2 protocol
    ms_bind_msgr2 = true
    
    # Use the PUBLIC IPs provided for your Cloud Disk Array
    mon_host =A.B.X.Y:6789,A.B.X.Y:6789,A.B.X.Y:6789
    ```

4. Save and close the file.

### Step 4: Create the Ceph Keyring File

Store the secret key in a keyring file to authenticate your user.

1. Create the keyring file for your user:

    ```shell
    sudo nano /etc/ceph/ceph.client.[USERID].keyring
    ```

2. Enter the key using the correct format:

    ```ini
    [client.[USERID]]
    key = YOUR_SECRET_KEY_FOR_USER
    ```

3. Restrict file permissions for security:

    ```shell
    sudo chmod 600 /etc/ceph/ceph.client.[USERID].keyring
    ```

### Step 5: Test the Connection

Test your configuration, the ceph command will use the config file and keyring automatically.

```shell
# Check the overall health and status of the cluster
sudo ceph --id [USERID] status
 
# List the available storage pools in the cluster
sudo ceph --id [USERID] osd lspools
```

If these commands show cluster information, your client is successfully configured to access the Cloud Disk Array over the public internet.

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Storage and Backup services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
