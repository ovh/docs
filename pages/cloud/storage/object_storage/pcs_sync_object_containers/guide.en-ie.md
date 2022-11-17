---
title: Object Storage Swift - Syncing object containers
slug: pcs/sync-object-containers
section: OpenStack Swift Storage Class Specifics
order: 060
---

**Last updated 16 November 2022**

## Objective

If you want to move your objects from one data centre to another, or even from one project to another, syncing objects between containers is the best solution for avoiding service disruptions during your migration. This guide explains how you can implement this solution.


## Requirements

- [An environment that is ready to use the OpenStack API with the Swift client](https://docs.ovh.com/ie/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- [OpenStack environment variables set](https://docs.ovh.com/ie/en/public-cloud/set-openstack-environment-variables/)
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
root@server-1:~$ sharedKey=$(openssl rand -base64 32)
```

#### Destination container configuration

First of all, you will need to configure the key on the container that will receive the data. In our case, the destination container is in BHS.

- Check the region that has loaded in the environment variables:

```bash
root@server-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS
```

- Configure the key on the destination container:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerBHS
```

- Next, check that the key has been successfully configured using the following command, and note down the content of the "Account" variable at the same time:

```bash
root@server-1:~$ swift stat containerBHS
                         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
                       Container: containerBHS
                         Objects: 0
                           Bytes: 0
                        Read ACL:
                       Write ACL:
                         Sync To:
                        Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
Meta Access-Control-Allow-Origin: https://www.ovh.com
                   Accept-Ranges: bytes
                X-Storage-Policy: Policy-0
                      Connection: close
                     X-Timestamp: 1444812373.28095
                      X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
                    Content-Type: text/plain; charset=utf-8
```

- Retrieve the target container’s address, then configure it on the source container (this one is: "//OVH_PUBLIC_CLOUD/Region/Account/Container").

```bash
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS"
```

#### Source container configuration

- Change the region in the environment variables:

```bash
root@server-1:~$ export OS_REGION_NAME=GRA
```

- Configure the key on the source container:

```bash
root@server-1:~$ swift post --sync-key "$sharedKey" containerGRA
```

- Configure the recipient container on the source container:

```bash
root@server-1:~$ swift post --sync-to "$destContainer" containerGRA
```

- As detailed previously, you can check that it has been configured properly using the following command:

```bash
root@server-1:~$ swift stat containerGRA
         Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
       Container: containerGRA
         Objects: 3
           Bytes: 15
        Read ACL:
       Write ACL:
         Sync To: //OVH_PUBLIC_CLOUD/BHS/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerBHS
        Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
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
root@server-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```

- To list the files on the destination container:

```bash
root@server-1:~$ swift list containerBHS
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
root@server-1:~$ swift post -H "X-Container-Sync-To:" containerGRA
root@server-1:~$ export destContainer="//OVH_PUBLIC_CLOUD/GRA/AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29/containerGRA"
root@server-1:~$ export OS_REGION_NAME=BHS
root@server-1:~$ swift post --sync-to "$destContainer" containerBHS
```

### Stop synchronisation between two containers

In order to stop synchronisation between two containers, you need to remove the `--sync-key` and `--sync-to` metadata:

```bash
swift post -H "X-Container-Sync-Key:" containerGRA
swift post -H "X-Container-Sync-To:" containerGRA
```

> [!primary]
>
> You can also use this guide for migrating RunAbove objects to the OVHcloud Public Cloud.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
