---
title: Developer guide
slug: pca/dev
excerpt: OVH Public Cloud Archive reference for developers.
section: Public Cloud Archive
---


## What is OVH Public Cloud Archive?
[OVH Public Cloud Archive](https://www.ovh.com/us/public-cloud/storage/cloud-archive/){.external} is an extremely low-cost storage solution destined for long-term data archiving.

OVH Public Cloud Archive is backed by [Openstack Swift](https://swift.openstack.org){.external}, an open source, highly available, distributed, eventually consistent object store. It gives developers access to an highly scalable, reliable, inexpensive data storage infrastructure that OVH uses to run some of its own internal solutions.

OVH Public Cloud Archive is designed for seldom consulted data: the less frequently an archive unsealing operation is requested, the smaller the retrieval latency.  This makes OVH Public Cloud Archive a tremendous solution when looking for durable, inexpensive storage, without the burden of waiting multiple hours to retrieve important data when you actually need it.

If your data is subject to frequent access consider using [OVH Public Cloud
Storage](https://www.ovh.com/us/public-cloud/storage/object-storage/){.external} instead.



> [!primary]
>
> Looking for a Software Development Kit? Visit the Openstack official SDK
> list.
> 

This guide provides in-depth explanations of the core concepts of OVH Public Cloud Archive such as regions, accounts, containers, archives and how to work with these resources using the Openstack Swift application programming interface (API).


## Authentication
As OVH Public Cloud Archive is backed by Openstack Swift, the authentication is handled like other Openstack services using the ordinary user management layer, [Keystone](https://docs.openstack.org/developer/keystone/){.external}.



> [!primary]
>
> Visit the official Openstack Keystone API reference
> here.
> 

A successfull authentication will return an **authentication token**, a **project id** and a **service catalog** allowing further use of Openstack services. The token is to be transmitted alongside interactions with programming interfaces of a given service. A token is valid for a given scope and a period of time, specified by the remote authentication service. Token generation is an operation subject to rate-limiting, a user cannot retrieve more than 60 tokens per minute.

Note: The following gives the syntax for unscoped authorization i.e. the token will be valid for the default project id. Refer to the keystone API if you wish to use scoped authorization.

**Syntax**

```
 POST /v3/auth/tokens HTTP/1.1
 Host: auth.cloud.ovh.net
 Content-Length: <length>
 Content-Type: application/json
 
 {
     "auth": {
         "identity": {
             "methods": [
                 "password"
             ],
             "password": {
                 "user": {
                     "name": "<username>",
                     "domain": {
                         "name": "Default"
                     },
                     "password": "<password>"
                 }
             }
         }
     }
 }
```

**Sample response**

```
 HTTP/1.1 201 Created
 Vary: X-Auth-Token
 X-Subject-Token: 3caec5b614a94326b0e9b847661e3d6a
 Content-Length: 2299
 Content-Type: application/json
 Date: Thu, 09 Mar 2017 11:21:04 GMT
 
 {
    "token" : {
       "methods" : [
          "password"
       ],
       "expires_at" : "2017-03-10T12:38:46.046846Z",
       "issued_at" : "2017-03-09T12:38:46.046871Z",
       "catalog" : [
          {
             "type" : "object-store",
             "id" : "9afff7a684eb4830b08366fce2b94c57",
             "endpoints" : [
                {
                   "url" : "https://storage.bhs1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f",
                   "id" : "35ed7954cd8241b384da3c2d6c7277bb",
                   "interface" : "public",
                   "region_id" : "BHS1"
                },
                {
                   "region_id" : "SBG1",
                   "interface" : "public",
                   "id" : "3ccc82bbd33d4cdfbc5f03aef2724ab0",
                   "url" : "https://storage.sbg1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f"
                },
                {
                   "url" : "https://storage.gra1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f",
                   "id" : "c96f61d071a74e36bd3c07e53d241ce3",
                   "region_id" : "GRA1",
                   "interface" : "public"
                }
             ]
          },
       ],
       "roles" : [
          {
             "name" : "_member_",
             "id" : "9fe3fd9ee4291b1895a90975d3e92baf"
          }
       ],
       "extras" : {},
       "user" : {
          "domain" : {
             "name" : "Default",
             "id" : "default"
          },
          "name" : "ktZeF8Uqluqm",
          "id" : "200ba261af11471db447526575dcb9fb"
       },
       "audit_ids" : [
          "BN_StzM0SFmGB5uYiIhA7Q"
       ],
       "project" : {
          "id" : "e80c212388cd4d509abc959643993b9f",
          "domain" : {
             "name" : "Default",
             "id" : "default"
          },
          "name" : "3635872342124167"
       }
    }
 }
```

## Regions
OVH Public Cloud Archive is available in various geographical regions. Regions are composed of zones, themselves formed by set of resources potentially placed in distinct datacenters. Each region comes with a service endpoint. An exhaustive list of usable regions for OVH Public Cloud Archive and OVH Public Cloud Storage is easily identifiable from the service catalog of the [Authentication](#authentication){.internal} step.


## Storage Policies
Data stored in either OVH Object Storage or OVH Public Cloud Archive is allocated by a storage layer inclined to handle various policies. A storage policy can typically differ by storage mediums in use or the redundancy algorithm responsible for placing data to maximize overall durability.

The following storage policies are exposed:

Policy for OVH **P**ublic **C**loud **A**rchive offer. Optimized for at rest, infrequently accessed storage. Data is stored using an [Erasure Code](https://en.wikipedia.org/wiki/Erasure_code){.external} characterized by a *code rate* of 0.8, formed by 12 data fragments and 3 parity fragments. Its access is ruled by a retrieval latency that can vary from minutes to hours depending on previous operations.

Policy for OVH **P**ublic **C**loud **S**torage offer. Optimized for hot, frequently accessed storage. Data is replicated 3 times by writing 3 copies of each object and its access is immediate.


## Accounts
Each OVH Public Cloud project is identified by a unique id. For you to be able to manage your data in an organized way, OVH Public Cloud Archive and OVH Public Cloud Storage provide a core concept named Account. An account is alike a cloud storage project, it is able to hold sets of data called containers. An account is referred to as *AUTH_<project_id>* where the project identifier comes from user [Authentication](#authentication){.internal}.


## Containers
OVH Public Cloud Archive is a cloud storage service. To be able to transfer your archives, you first need to create a container in one of the OVH Public Cloud regions.

In this section we will explain working with containers using the [Openstack Swift API](https://developer.openstack.org/api-ref/object-storage/){.external}.


### Creating a container
When you create a container, you provide a name and a storage policy. You pick a region by choosing the service endpoint you send the creation request to. You can create any number of containers and within these, any number of archives.

Containers can be created using either of the following ways:

- Create a container in the cloud section of the OVH customer interface.
- Create a container through gateways for SSH-based transfer protocols.
- Create a container with the OVH API.
- Create a container with the Openstack API.

When using the Openstack Swift API, the default storage policy, if not specified at container creation time, is *PCS*. In order to create a container for OVH Public Cloud Archive its is required to specify the corresponding policy.

Note that a container's storage policy is immutable.

**Syntax**

```
 PUT /v1/<account>/<container> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 X-Storage-Policy: PCA
```

**Sample request**

```
 PUT /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 X-Storage-Policy: PCA
```
**Sample response**

```
 HTTP/1.1 201 Created
 Content-Length: 0
 X-Trans-Id: tx2acf06eb506d441ab605a-0058c15384
 X-Openstack-Request-Id: tx2acf06eb506d441ab605a-0058c15384
 Date: Thu, 09 Mar 2017 13:07:17 GMT
```

### Getting a container inventory
When you upload an archive, OVH Public Cloud Archive updates the container inventory with informations about this archive. This inventory is created and available for reading immediately after the archive data has been entirely received.

In order to support the particularities of at-rest storage, OVH has slighty modified the generation of this inventory compared to regular Openstack Swift infrastructures with the aim to include additionnal information related to its particular storage process. This assures you have essential informations about your archive, such as its unsealing state and the retrieval delay before it is ready for download.

See greater details about this [request](https://docs.ovh.com/gb/en/storage/pca/api/){.external}.

**Syntax**

```
 GET /v1/<account>/<container>?policy_extra=true HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 Accept: application/json
 X-Auth-Token: <token>
```
**Sample request**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives?policy_extra=true HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 Accept: application/json
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
```
**Sample response**

```
 HTTP/1.1 200 OK
 Content-Length: 913
 Accept-Ranges: bytes
 X-Container-Object-Count: 3
 X-Storage-Policy: PCA
 Last-Modified: Fri, 24 Feb 2017 10:06:54 GMT
 X-Timestamp: 1487930813.23049
 X-Container-Bytes-Used: 3072
 Content-Type: application/json; charset=utf-8
 X-Trans-Id: tx1f9a222e5d004f3198fcf-0058c15d1a
 X-Openstack-Request-Id: tx1f9a222e5d004f3198fcf-0058c15d1a
 Date: Thu, 09 Mar 2017 13:48:10 GMT
 
 [
    {
       "hash" : "l0dad6ursvjudy1ea4xyfftbwdsfqhqq",
       "policy_retrieval_state" : "sealed",
       "bytes" : 1024,
       "last_modified" : "2017-02-24T10:09:12.026940",
       "policy_retrieval_delay" : null,
       "name" : "archive1.zip",
       "content_type" : "application/octet-stream"
    },
    {
       "hash" : "d69eegihauxczrutglltkkz4k9xwwfsp",
       "policy_retrieval_state" : "unsealing",
       "bytes" : 1024,
       "last_modified" : "2017-02-24T10:09:12.031512",
       "policy_retrieval_delay" : 1851,
       "name" : "archive2.tar.gz",
       "content_type" : "application/octet-stream"
    },
    {
       "policy_retrieval_delay" : null,
       "content_type" : "application/octet-stream",
       "name" : "archive3.xz",
       "bytes" : 1024,
       "policy_retrieval_state" : "unsealed",
       "hash" : "k9pzyglnvupkqbrniqoo16kb95y68vms",
       "last_modified" : "2017-03-07T15:13:42.624310"
    }
 ]
```

### Deleting a container
If you wish to delete a container, you first need to delete all archives it contains. Once a container is empty, deletion is a simple operation that solely requires the container name.

**Syntax**

```
 DELETE /v1/<account>/<container> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
```
**Sample request**

```
 DELETE /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
```
**Sample response**

```
 HTTP/1.1 204 No Content
 Content-Length: 0
 X-Trans-Id: txc578ec094c764908a9feb-0058c153cc
 X-Openstack-Request-Id: txc578ec094c764908a9feb-0058c153cc
 Date: Thu, 09 Mar 2017 13:08:28 GMT
```

## Archives
OVH Public Cloud Archive provides you with the ability to transfer generic objects called archives. An archive can be of any size and its content can be of any type. An archive differs from a traditional Openstack Swift object as it carries a supplementary attribute: the *retrieval state*. Indeed, archives can be sealed and unsealed.


### Uploading an archive
An archive uploaded to OVH Public Cloud Archive will be immediately sealed by the storage layer. To retrieve it you will need to unseal it first.

You can upload archives up to 5 GB in size in a single operation. Larger archives must be split into segments not exceeding 5 GiB each, referenced by a manifest. A manifest is an important concept of Openstack Swift that allows supporting large objects. You can read more about this [here](https://docs.openstack.org/developer/swift/overview_large_objects.html){.external}. The minimum segment size is 1 byte. SLO objects are limited to 1000 segments and the maximum manifest size is 2 MiB.

When uploading an archive to OVH Public Cloud Archive, it is very important to verify that both the local and remote copy of the data are indentical. This is a guarantee data received remotely is correct and that nobody has been able to alter its content.

- When uploading segmented archives, you must calculate the md5 checksum of each segment then form a string with the concatenation of each md5 checksum in the correct order. The md5 checksum of this string should then be transmitted in the manifest creation request.
- When uploading non-segmented archives, you must calculate its md5 checksum and include it in the archive creation request.

**Syntax**

```
 PUT /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 Content-Length: <archive_size>
 Etag: <archive_md5sum>
```
**Sample request**

```
 PUT /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 Content-Length: 1024
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 
 [bytes]
```
**Sample response**

```
 HTTP/1.1 201 Created
 Content-Length: 0
 Last-Modified: Thu, 09 Mar 2017 15:02:12 GMT
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 X-Trans-Id: txa1e833e835c749a883ff4-0058c16e71
 X-Openstack-Request-Id: txa1e833e835c749a883ff4-0058c16e71
 Date: Thu, 09 Mar 2017 15:02:18 GMT
```

### Unsealing an archive
OVH Public Cloud Archive stores data so that cost is optimal at the expense of some latency in the retrieval process. To access your archive, an unsealing request must be received with the container and archive names it relates to.

Archive unseal requests are identical to archive download requests. Only the response sent by OVH Public Cloud Archive differs and is a particularity of the underlying Openstack Swift infrastructure that OVH runs. Once an unsealing request is received it cannot be cancelled. Further unsealing requests will have no other effect than polling the operation ETA.

See further explanations about this [request](https://docs.ovh.com/gb/en/storage/pca/api/){.external}.

**Syntax**

```
 GET /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
```
**Sample request**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
```
**Sample response**

```
 HTTP/1.1 429 Too Many Requests
 Retry-After: 637
 Content-Length: 64
 X-Trans-Id: txe9fad9afaf7b4950a16af-0058c17f11
 X-Openstack-Request-Id: txe9fad9afaf7b4950a16af-0058c17f11
 Date: Thu, 09 Mar 2017 16:13:05 GMT
 
 <html><h1>Too Many Requests</h1><p>Too Many Requests.</p></html>
```

### Downloading an archive
Once you archive has been unsealed in OVH Public Cloud Archive, you can download it during 24 hours with unlimited throughput and access frequency. At the end of the retrieval span, the archive will be sealed again.

Since OVH Public Cloud Archive is optimized for at-rest storage, if a new unsealing request is received relatively soon after the retrieval period has elapsed, it will take **significantly longer** to complete.

**Syntax**

```
 GET /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
```
**Sample request**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
```
**Sample response**

```
 HTTP/1.1 200 OK
 Content-Length: 1024
 Content-Type: application/octet-stream
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 
 [bytes]
```

### Deleting an archive
Even though archive downloading has inherent latency involved, archive deletion is a one step operation processed immediately by OVH Public Cloud Archive. Be aware that as such this operation is irrevocable and cannot be cancelled. To delete an archive you need to provide its name and the container it is stored in.

**Syntax**

```
 DELETE /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
```
**Sample request**

```
 DELETE /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive1.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
```
**Sample response**

```
 HTTP/1.1 204 No Content
 Content-Length: 0
 X-Trans-Id: txcf8e98d30f714c85a323d-0058c16813
 X-Openstack-Request-Id: txcf8e98d30f714c85a323d-0058c16813
 Date: Thu, 09 Mar 2017 14:35:00 GMT
```