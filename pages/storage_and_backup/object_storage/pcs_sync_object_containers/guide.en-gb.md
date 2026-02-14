---
title: Object Storage Swift - Syncing object containers
updated: 2022-11-16
---

## Objective

If you want to move your objects from one data centre to another, or even from one project to another, syncing objects between containers is the best solution for avoiding service disruptions during your migration. This guide explains how you can implement this solution.

## Requirements

- [An environment that is ready to use the OpenStack API with the Swift client](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [OpenStack environment variables set](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)
- Two object containers in two different data centres

## Instructions

> [!primary]
>
> If your container contains objects larger than 5 GB, your two containers must have the same name. In addition, the synchronisation configuration must also be applied to the container that contains the segments.
>

### Configuring the sync

#### Creating a sync key

For containers to authenticate, you will need to create a key and configure it on each object container.

- Create the key:

```bash
sharedKey=$(openssl rand -base64 32)
```

#### Destination container configuration

First of all, you will need to configure the key on the container that will receive the data. In our case, the destination container is in BHS.

- Check the region that has loaded in the environment variables:

```bash
env | grep OS_REGION
```

```text
OS_REGION_NAME=BHS
```

- Configure the key on the destination container:

```bash
swift post --sync-key "$sharedKey" <destination_container_name>
```

- Next, check that the key has been successfully configured using the following command, and note down the content of the "Account" variable at the same time:

```bash
swift stat <destination_container_name>
```

```text
                         Account: AUTH_<project_id>
                       Container: <destination_container_name>
                         Objects: 0
                           Bytes: 0
                        Read ACL:
                       Write ACL:
                         Sync To:
                        Sync Key: <sync_key>
Meta Access-Control-Allow-Origin: https://www.ovh.com
                   Accept-Ranges: bytes
                X-Storage-Policy: Policy-0
                      Connection: close
                     X-Timestamp: 1444812373.28095
                      X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
                    Content-Type: text/plain; charset=utf-8
```

- Retrieve the target container’s address, then configure it on the source container (this one is: `//OVH_PUBLIC_CLOUD/Region/Account/Container`).

```bash
export destContainer="//OVH_PUBLIC_CLOUD/BHS/AUTH_<project_id>/<destination_container_name>"
```

#### Source container configuration

- Change the region in the environment variables:

```bash
export OS_REGION_NAME=GRA
```

- Configure the key on the source container:

```bash
swift post --sync-key "$sharedKey" <source_container_name>
```

- Configure the recipient container on the source container:

```bash
swift post --sync-to "$destContainer" <source_container_name>
```

- As detailed previously, you can check that it has been configured properly using the following command:

```bash
swift stat <source_container_name>
```

```text
         Account: AUTH_<project_id>
       Container: <source_container_name>
         Objects: 3
           Bytes: 15
        Read ACL:
       Write ACL:
         Sync To: //OVH_PUBLIC_CLOUD/BHS/AUTH_<project_id>/<destination_container_name>
        Sync Key: <sync_key>
   Accept-Ranges: bytes
      Connection: close
     X-Timestamp: 1444813114.55493
      X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
    Content-Type: text/plain; charset=utf-8
```

#### Checking the sync

After a few minutes (depending on the number and size of the files to be sent), you can check whether the sync is successful by simply listing the files in each container.

- To list the files on the source container:

```bash
swift list <source_container_name>
```

```text
test1.txt
test2.txt
test3.txt
```

- To list the files on the destination container:

```bash
swift list <destination_container_name>
```

```text
test1.txt
test2.txt
test3.txt
```

### Reversing the synchronisation between two containers

In order to reverse the synchronisation between two containers, you need to remove the `--sync-to` metadata from the source container, and redeclare it on the other container, which will then become the new source container.

> [!warning]
>
> Don't forget to also change the region in the new "sync-to" URL.
>

```bash
swift post -H "X-Container-Sync-To:" <source_container_name>
export destContainer="//OVH_PUBLIC_CLOUD/GRA/AUTH_<project_id>/<source_container_name>"
export OS_REGION_NAME=BHS
swift post --sync-to "$destContainer" <destination_container_name>
```

### Stop synchronisation between two containers

In order to stop synchronisation between two containers, you need to remove the `--sync-key` and `--sync-to` metadata:

```bash
swift post -H "X-Container-Sync-Key:" <source_container_name>
swift post -H "X-Container-Sync-To:" <source_container_name>
```

> [!primary]
>
> You can also use this guide for migrating RunAbove objects to the OVHcloud Public Cloud.
>

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
