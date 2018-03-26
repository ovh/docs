---
title: Synchronize object containers
slug: pcs/sync-container
excerpt: Find here how to synchronize object containers.
section: Object Storage
---


## Preamble
If you want to move your objects from one datacenter to another or even from one project to another, synchronizing objects between containers is the best way to avoid a service disruption during the migration.


### Prerequisites
You need to -  [Prepare the environment for the OpenStack API](https://www.ovh.com/fr/g1851.preparer_lenvironnement_pour_utiliser_lapi_openstack){.external} by downloading the Swift client. -  Set OpenStack environment variables -  You must have two object containers in two different datacenters


## Configure the synchronization

### Create a synchronisation key
You have to create a key and configure it on each containers, so that the containers can be identified :

- Create the key :


```bash
root@serveur-1:~$ sharedKey=$(openssl rand -base64 32)
```


### Configure the destination container
First, you have to configure the key on the container which is going to receive the data. In this instance, the container is located in BHS.

- Check the region which has been set in the environment variable:


```bash
root@serveur-1:~$ env | grep OS_REGION
OS_REGION_NAME=BHS1
```

- Configure the key on the destination container :


```bash
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerBHS
```



> [!success]
>
> You can check that the key has been configured by using the following command :
> 
> ```bash
>   root@serveur-1:~$ swift stat containerBHS
>                          Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
>                        Container: containerBHS
>                          Objects: 0
>                            Bytes: 0
>                         Read ACL:
>                        Write ACL:
>                          Sync To:
>                         Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
> Meta Access-Control-Allow-Origin: https://www.ovh.com
>                    Accept-Ranges: bytes
>                 X-Storage-Policy: Policy-0
>                       Connection: close
>                      X-Timestamp: 1444812373.28095
>                       X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
>                     Content-Type: text/plain; charset=utf-8
> ```
>
- Recover the address of the destination container in order to configure it on the source container :


```bash
root@serveur-1:~$ destContainer=$(swift --debug stat containerBHS 2>&1 | grep 'curl -i.*storage' | awk '{ print $4 }')
```


### Configure the source container
- Change the region in the environment variables :


```bash
root@serveur-1:~$ export OS_REGION_NAME=GRA1
```

- Configure the key on the source container :


```bash
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerGRA
```

- Configure the destination on the source container :


```bash
root@serveur-1:~$ swift post --sync-to "//OVH_PUBLIC_CLOUD/{zone}/AUTH_account/containerDest" containerGRA
```



> [!success]
>
> As before, you can check that this has been configured by using the following command :
> 
> ```bash
> root@serveur-1:~$ swift stat containerGRA
>          Account: AUTH_b3e269f057d14af594542d6312b0ba29
>        Container: containerGRA
>          Objects: 3
>            Bytes: 15
>         Read ACL:
>        Write ACL:
>          Sync To: //OVH_PUBLIC_CLOUD/BHS1/AUTH_b3e269f057d14af594542d6312b0ba29/containerBHS
>         Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
>    Accept-Ranges: bytes
>       Connection: close
>      X-Timestamp: 1444813114.55493
>       X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
> X-Storage-Policy: Policy-0
>     Content-Type: text/plain; charset=utf-8
> ```
>

### Check the synchronization
After a few moments (depending on the size and number of the files you are uploading) you can check if the synchronization worked by listing the files in each of the containers.

- List the files in the source container :


```bash
root@serveur-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```

- List the files in the destination container :


```bash
root@serveur-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```



> [!success]
>
> You can also use this guide to migrate objects from RunAbove to Public Cloud.
> 