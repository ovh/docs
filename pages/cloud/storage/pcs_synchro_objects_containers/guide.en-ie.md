---
title: Synchronise object containers
excerpt: Synchronise object containers
slug: synchronise_object_containers
section: Object Storage
legacy_guide_number: g1919
---


## 
If you want to move your objects from one datacentre to another or even from one project to another, synchronising objects between containers is the best way to avoid a service interruption during the migration.


## Prerequisites
You need to

- [Prepare the environment to use the OpenStack API](../../public-cloud/prepare_the_environment_for_using_the_openstack_api/) by downloading the Swift client
- Set OpenStack environment variables
- You must have two object containers in two different datacentres




## Creating a synchronisation key
You have to create a key and configure it on each of the containers, so that the containers can be identified: 


- Create the key: 


```
root@serveur-1:~$ sharedKey=$(openssl rand -base64 32)
```





## Configure the destination container
Firstly, you have to configure the key on the container which is going to receive the data.
In this instance, the container is at BHS.


- Check the region which has been set in the environment variable:


```
root@serveur-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS1
```


- Configure the key on the destination container:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerBHS
```



You can verify that the key has been configured by using the following command: 


```
root@serveur-1:~$ swift stat containerBHS
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



- Recover the address of the destination container so that it can be configured on the source container:


```
root@serveur-1:~$ destContainer=$(swift --debug stat containerBHS 2>&1 | grep 'curl -i.*storage' | awk '{ print $4 }')
```





## Configuring the source container

- Change the region in the environment variables:


```
root@serveur-1:~$ export OS_REGION_NAME=GRA1
```


- Configure the key on the source container:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerGRA
```


- Configure the destination on the source container: 


```
root@serveur-1:~$ swift post --sync-to "$destContainer" containerGRA
```



As before, you can verify that this has been configured by using the following command:


```
root@serveur-1:~$ swift stat containerGRA
Account: AUTH_b3e269f057d14af594542d6312b0ba29
Container: containerGRA
Objects: 3
Bytes: 15
Read ACL:
Write ACL:
Sync To: https://storage.bhs1.cloud.ovh.net/v1/AUTH_b3e269f057d14af594542d6312b0ba29/containerBHS
Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
Accept-Ranges: bytes
Connection: close
X-Timestamp: 1444813114.55493
X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
Content-Type: text/plain; charset=utf-8
```




## Verify synchronisation
After a few moments (depending on the size and number of the files you are uploading) you can check that synchronisation has worked by listing the files in each of the containers. 


- List the files in the source container:


```
root@serveur-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```


- List the files in the destination container:


```
root@serveur-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```



You can also use this guide to migrate objects from RunAbove to Public Cloud.


## 
 

