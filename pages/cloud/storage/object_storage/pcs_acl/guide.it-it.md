---
title: Object Storage Swift - Set up an Access Control List on Object Storage (EN)
slug: pcs/acl
routes:
    canonical: 'https://docs.ovh.com/gb/en/storage/pcs/acl'
excerpt: Here are the concepts for implementing ACLs in Object Storage
section: OpenStack Swift Storage Class Specifics
order: 040
---

**Last updated 06th May 2022**

## Objective

The purpose of this guide is to help you become familiar with ACLs in order to refine access rights to your containers.

## Introduction

The container ACLs are stored in the **X-Container-Write** and **X-Container-Read** metadata. The scope of the ACL is limited to the container in which the metadata is defined and to the container objects. Furthermore:

- **X-Container-Write** provides the ability to perform PUT, POST, and DELETE operations on objects in a container. It does not allow POST or DELETE operations on the container itself. Some items in the access control list can also be used to perform HEAD or GET operations on the container.

- **X-Container-Read** enables GET and HEAD operations to be performed on objects in a container. Some items in the access control list also allow HEAD or GET operations on the container itself. However, a container ACL does not provide access to privileged metadata (such as X-Container-Sync-Key).

Container ACLs use ACL syntax "V1" which is a comma-separated string of elements as shown in the following example:

```
.r:*,.rlistings,702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf:*
```

Elements can be separated by spaces, as in the following example:

```
.r : *, .rlistings, 702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf:*
```

## Requirements

- an Object Storage container
- [OpenStack users](https://docs.ovh.com/it/public-cloud/creation-and-deletion-of-openstack-user/)
- [Preparing the environment to use the OpenStack API](https://docs.ovh.com/it/public-cloud/prepara_il_tuo_ambiente_di_sviluppo_per_utilizzare_lapi_openstack/) by installing python-swiftclient
- [Loading the OpenStack environment variables](https://docs.ovh.com/it/public-cloud/impostare-le-variabili-dambiente-openstack/)

## Instructions

### Create three users

- An **admin** account with the `ObjectStore operator` role
- A **user** account with no role
- A **limited_user** account with no role

![Creating new users](images/create-users.png)

### Load the **admin** account environment

```bash
. openrc-admin.sh
```

### Create a container and drop two test files

```bash
swift post <container>
swift upload <container> <largeobject>
swift upload <container> <object>
```

#### Access verification

From the **admin** account:

```bash
. openrc-admin.sh
swift stat
swift list
swift stat <container>
swift list <container>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Containers: 2
Objects: 14
Bytes: 6442454246
Containers in policy "pcs": 2
Objects in policy "pcs": 14
Bytes in policy "pcs": 6442454246
X-Timestamp: 1628236187.15682
Content-Type: text/plain; charset=utf-8
Accept-Ranges: bytes
X-Account-Project-Domain-Id: default
Vary: Accept
X-Trans-Id: txa90afd77faf64420a26fe-0061272ba6
X-Openstack-Request-Id: txa90afd77faf64420a26fe-0061272ba6
X-Iplb-Request-Id: 6DBEFE1E:EDE8_3626E64B:01BB_61272BA5_1E67059:20729
X-Iplb-Instance: 12308

<container>
<container_segments>

Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <container>
Objects: 1
Bytes: 3302
Read ACL:
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Wed, 25 Aug 2021 21:13:08 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
 Vary: Accept
X-Trans-Id: tx5dc255c8afcb46e8a39be-0061272d16
X-Openstack-Request-Id: tx5dc255c8afcb46e8a39be-0061272d16
X-Iplb-Request-Id: 6DBEFE1E:806A_3626E64B:01BB_61272D16_2672F8C:12099
X-Iplb-Instance: 38426

<largeobject>
<object>
```

From the **user** account:

```bash
. openrc-user.sh
swift stat
swift list
swift stat <container>
swift list <container>
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: tx5c07e0049b244351a8ad3-0061272d97

Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: txc64f2ae1b13b4512921d7-0061272dbe

Container HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<container> 403 Forbidden
Failed Transaction ID: txe28a06b820024e2db7fdd-0061272dd0

Container GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<container>?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: tx7f02e551b0124f33bf7e3-0061272dde
```

From the **limited_user** account:

```bash
. openrc-limited-user.sh
swift stat
swift list
swift stat <container>
swift list <container>
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: tx08b18a4a051d490ca02b6-00612734a6

Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: tx072cebdc7d634368ab78f-00612734b3

Container HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<container> 403 Forbidden
Failed Transaction ID: tx1370b790fcf14068b3c4b-00612734c4

Container GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<container>?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: tx46316b5682924d4c849ac-00612734db
```

### Share the container in read/write mode with a specific member of the project

Get user `id`:

```bash
. openrc-user.sh
openstack user show --format json "${OS_USERNAME}"
```

```json
{
  "default_project_id": "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b",
  "description": "user",
  "domain_id": "default",
  "enabled": true,
  "id": "febxxxxxxxxxxxxxxxxxxxxxxxxxxc72",
  "name": "user-rAawn9H2qxnn",
  "options": {},
  "password_expires_at": null
}
```

```bash
. openrc-admin.sh
swift post <container> -r "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72" \
                       -w "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72"
```

#### Access verification

From the **admin** account:

```bash
. openrc-admin.sh
swift stat
swift list
swift stat <container>
swift list <container>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Containers: 2
Objects: 15
Bytes: 6442454992
Containers in policy "pcs": 2
Objects in policy "pcs": 15
Bytes in policy "pcs": 6442454992
X-Timestamp: 1628236187.15682
Content-Type: text/plain; charset=utf-8
Accept-Ranges: bytes
X-Account-Project-Domain-Id: default
Vary: Accept
X-Trans-Id: txa02aabbe1e154f7284a12-0061273617
X-Openstack-Request-Id: txa02aabbe1e154f7284a12-0061273617
X-Iplb-Request-Id: 6DBEFE1E:8412_3626E64B:01BB_61273616_20D6218:4ED7
X-Iplb-Instance: 33617

<container>
<container_segments>

Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <container>
Objects: 2
Bytes: 4048
Read ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72
Write ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 06:32:26 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx36cc5c3ed5224bdabaa61-0061273644
X-Openstack-Request-Id: tx36cc5c3ed5224bdabaa61-0061273644
X-Iplb-Request-Id: 6DBEFE1E:8486_3626E64B:01BB_61273644_20D14A0:15614
X-Iplb-Instance: 38342

<largeobject>
<object>
```

From the **user** account:

```bash
. openrc-user.sh
swift stat
swift list
swift stat <container>
swift list <container>
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: txd478e14d3a044d27a1069-0061273678

Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: txdf7a083913a449a0bdaa0-0061273699

Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <container>
Objects: 2
Bytes: 4048
Read ACL:
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 06:32:26 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
 Vary: Accept
X-Trans-Id: txe320d39085464a24b7e48-00612736a9
X-Openstack-Request-Id: txe320d39085464a24b7e48-00612736a9
X-Iplb-Request-Id: 6DBEFE1E:8514_3626E64B:01BB_612736A8_202065D:27FE7
X-Iplb-Instance: 33618

<largeobject>
<object>
```

From the **limited_user** account:

```bash
. openrc-limited-user.sh
swift stat
swift list
swift stat <container>
swift list <container>
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: tx9ee6002842844cf791a8c-0061273715

Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resource'
Failed Transaction ID: txab4706eabf354d2982630-0061273724

Container HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<container> 403 Forbidden
Failed Transaction ID: txa7a488b0549647e886757-0061273734

Container GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<container>?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resource'
Failed Transaction ID: txdd45d71c14314f589744e-0061273744
```

### Share container with project members

```bash
. openrc-admin.sh
swift post <container> -r "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:*" \
                       -w "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:*"
```

#### Access verification

From the **admin** account:

```bash
. openrc-admin.sh
swift stat
swift list
swift stat <container>
swift list <container>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Containers: 2
Objects: 15
Bytes: 6442454992
Containers in policy "pcs": 2
Objects in policy "pcs": 15
Bytes in policy "pcs": 6442454992
X-Timestamp: 1628236187.15682
Content-Type: text/plain; charset=utf-8
Accept-Ranges: bytes
X-Account-Project-Domain-Id: default
Vary: Accept
X-Trans-Id: tx1d665074c05545ce9f398-0061273cad
X-Openstack-Request-Id: tx1d665074c05545ce9f398-0061273cad
X-Iplb-Request-Id: 6DBEFE1E:8712_3626E64B:01BB_61273CAD_1EB615D:20727
X-Iplb-Instance: 12308

<container>
<container_segments>

Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <container>
Objects: 2
Bytes: 4048
Read ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:*
Write ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:*
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 06:43:31 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: txa2611c408ccd4c5599a69-0061273cdd
X-Openstack-Request-Id: txa2611c408ccd4c5599a69-0061273cdd
X-Iplb-Request-Id: 6DBEFE1E:874E_3626E64B:01BB_61273CDD_1F01CA8:20722
X-Iplb-Instance: 12308

<largeobject>
<object>
```

From the **user** account:

```bash
. openrc-user.sh
swift stat
swift list
swift stat <container>
swift list <container>
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: txa890a6d4b42c4f32be23e-0061273d10

Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resource'
Failed Transaction ID: txc3a82eda633e47e691633-0061273d1f

Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <container>
Objects: 2
Bytes: 4048
Read ACL:
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 06:43:31 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: txb6c4e1e26225414fbfee6-0061273d2a
X-Openstack-Request-Id: txb6c4e1e26225414fbfee6-0061273d2a
X-Iplb-Request-Id: 6DBEFE1E:87A8_3626E64B:01BB_61273D2A_2218418:4ED4
X-Iplb-Instance: 33617

<largeobject>
<object>
```

From the **limited_user** account:

```bash
. openrc-limited-user.sh
swift stat
swift list
swift stat <container>
swift list <container>
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: txf0ef1ea9e9024e8da4886-0061273d58

Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resource'
Failed Transaction ID: tx554571e2af674d58913d2-0061273d65

Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <container>
Objects: 2
Bytes: 4048
Read ACL:
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 06:43:31 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx677723846a044648b1498-0061273d73
X-Openstack-Request-Id: tx677723846a044648b1498-0061273d73
X-Iplb-Request-Id: 6DBEFE1E:8804_3626E64B:01BB_61273D73_1F9C77D:27FE7
X-Iplb-Instance: 12309

<largeobject>
<object>
```

### Allow a referring domain to download objects

In order to allow all requests from the domain `example.com` to have access to the container objects:

```bash
swift post <container> -r ".r:.example.com"
```

> {!primary}
>
> Although most modern browsers include the `Referrer` header in their queries, this is a security risk because it is quite possible to change the value of this header.
>

#### Access verification

```bash
STORAGE_URL=`swift auth | awk -F = '/OS_STORAGE_URL/ {print $2}'`
curl -i $STORAGE_URL/<container>/<object> -H "Referrer: http://example.com/index.html"
```

### Share a container with a user external to the project

From another project, create an **other-project-user** user without any role:

![Other user](images/other-user.png)

Get user `id`:

```bash
. openrc-other-project-user.sh
openstack user show --format json "${OS_USERNAME}"
```

```json
{
  "default_project_id": "702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf",
  "description": "other-project-user",
  "domain_id": "default",
  "enabled": true,
  "id": "c9677ed21acb4724aeafe2f60b7123f9",
  "name": "user-Pkwgh5CqDbdm",
  "options": {},
  "password_expires_at": null
}
```

Get the storage URL:

```bash
. openrc-admin.sh
swift auth | awk -F = '/OS_STORAGE_URL/ {print $2}'
```

```
https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
```

Allow **other-project-user** to access the read container:

```bash
. openrc-admin.sh
swift post -r "702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf:c9677ed21acb4724aeafe2f60b7123f9" <container>
```

#### Access verification

From the `other-project-user` account:

```bash
. openrc-other-project-user.sh
swift --os-storage-url https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b list <container>
```

```
<largeobject>
<object>
```

From the **admin** account:

```bash
. openrc-admin.sh
swift stat <container>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <container>
Objects: 2
Bytes: 4048
Read ACL: 702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf:c9677ed21acb4724aeafe2f60b7123f9
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Wed, 04 May 2022 18:00:00 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx21f55cdaee1f4ebc907b0-0061274202
X-Openstack-Request-Id: tx21f55cdaee1f4ebc907b0-0061274202
X-Iplb-Request-Id: 6DBEFE1E:8A5A_3626E64B:01BB_61274201_22328AF:4ED4
X-Iplb-Instance: 33617
```

## The case of Large Objects

If an object over 5Gb has been dropped, this generates a container such as: `<container_segments>`.<br>
A large object can be SLO or DLO. You can find more information about this on the [OpenStack documentation](https://docs.openstack.org/swift/latest/overview_large_objects.html){.external}

### SLO

The same ACLs must be applied to the `<container_segments>` container in order to retrieve the object larger than 5Gb.

```bash
swift stat <container>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <container>
Objects: 2
Bytes: 4048
Read ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72
Write ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 07:34:41 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx446a45d7108648c2b9054-0061274418
X-Openstack-Request-Id: tx446a45d7108648c2b9054-0061274418
X-Iplb-Request-Id: 6DBEFE1E:8B28_3626E64B:01BB_61274418_1FF3C2C:45FC
X-Iplb-Instance: 38343
```

```bash
swift stat <container_segments>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <container_segments>
Objects: 13
Bytes: 6442450944
Read ACL:
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Wed, 25 Aug 2021 21:13:09 GMT
X-Timestamp: 1629925988.34920
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx4f5ce8af0bd845129c0d0-006127443b
X-Openstack-Request-Id: tx4f5ce8af0bd845129c0d0-006127443b
X-Iplb-Request-Id: 6DBEFE1E:8B3C_3626E64B:01BB_6127443A_1E867A3:15625
X-Iplb-Instance: 38342
```

If ACL is only on the "manifest container" you will encounter 409 errors :

```bash
swift download <container> <largeobject>
```

```
Error downloading object '<container>/<largeobject>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<container>/<largeobject> 409 Conflict  [first 60 chars of response] b'<html><h1>Conflict</h1><p>There was a conflict when trying t'
```

You can update the rights on the container to allow the download : 

```bash
swift post <container_segments> -r "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72"
```

```bash
swift stat <container_segments>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <container_segments>
Objects: 13
Bytes: 6442450944
Read ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 07:38:40 GMT
X-Timestamp: 1629925988.34920
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: txaba4d18d7cdd413581ab6-0061274504
X-Openstack-Request-Id: txaba4d18d7cdd413581ab6-0061274504
X-Iplb-Request-Id: 6DBEFE1E:8C04_3626E64B:01BB_61274504_28945B6:1209B
X-Iplb-Instance: 38426
```

```bash
swift download <container> <largeobject>
```
```
<largeobject> [auth 0.739s, headers 1.408s, total 5504.436s, 1.171 MB/s]
```

### DLO

By design, DLO manifests need to dynamically list `<container_segments>`.<br> 
If .rlistings ACL is only on the "manifest container" you will encounter 403 errors :

```bash
Container GET failed: https://storage.xxx.cloud.ovh.net/v1/AUTH_e4xxxxxxxxxxxxxxxxxxxxxxxxe02f/payload.png?format=json 403 Forbidden [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resource' (txn: txf74a0fc6ixxxxxxxxxxxxx-006270f0a1)
```

To allow object download you will need to put the acl ".rlisting" on the <container_segments>.

```bash
swift post dlo --read-acl ".rlistings"
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
