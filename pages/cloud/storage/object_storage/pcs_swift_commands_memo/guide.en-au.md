---
title: Object Storage Swift - Swift commands Memo
slug: pcs/swift-commands-memo
excerpt: Find here the main swift commands to manage your object containers
section: OpenStack Swift Storage Class Specifics
order: 100
---

**Last updated 21st September 2021**

## Objective

You can use the OpenStack API to generate various scripts to automate your actions on your Public Cloud instances.

The OpenStack swiftclient allows you to interact with and manage your containers and objects. For example, you can send files regularly to your containers, in order to back them up.

**In this guide, you can find the main swift commands for managing your object containers using python-swiftclient.**

## Requirements

- [Prepare the environment to use the OpenStack API](https://docs.ovh.com/au/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/) by installing python-swiftclient.
- [Load the OpenStack environment variables](https://docs.ovh.com/au/en/public-cloud/set-openstack-environment-variables/).

## Instructions

### Create a PCS container

```bash
swift post <container>
```

### View account information

```bash
swift stat
```

### View container information

```bash
swift stat <container>
```

### View object information

```bash
swift stat <container> <object>
```

### List the container(s) related to an account

```bash
swift list
```

### List the contents of a container

```bash
swift list <container>
```

### Upload an object smaller than 5GB

```bash
swift upload <container> <object>
```

### Upload an object higher than 5GB in SLO mode

```bash
swift upload --use-slo --segment-size 1G <container> <object>
```

### Upload an object higher than 5GB in DLO mode

```bash
swift upload --segment-size 1G <container> <object>
```

### LargeObject upload abortion

```bash
$ swift upload --use-slo --segment-size 500M <container> <object>
^C Aborted
$ swift list
<container>
<container_segments>
$ swift list <container>
$
$ swift list <container_segments>
<object>/slo/1628738591.297565/6442450944/524288000/00000000
<object>/slo/1628738591.297565/6442450944/524288000/00000001
<object>/slo/1628738591.297565/6442450944/524288000/00000002
<object>/slo/1628738591.297565/6442450944/524288000/00000003
<object>/slo/1628738591.297565/6442450944/524288000/00000004
<object>/slo/1628738591.297565/6442450944/524288000/00000005
<object>/slo/1628738591.297565/6442450944/524288000/00000006
<object>/slo/1628738591.297565/6442450944/524288000/00000007
<object>/slo/1628738591.297565/6442450944/524288000/00000008
<object>/slo/1628738591.297565/6442450944/524288000/00000009
```

> It is recommended that you delete the `<container_segments>` or at least the segments that correspond to the dropped object.

### Download an object

```bash
swift download <container> <object>
```

### Delete an empty container

```bash
swift delete <container>
```

### Delete a non-empty container

```bash
swift delete <container>
```

### Delete an object

```bash
swift delete <container> <object>
```

### Delete prefix objects

```bash
swift delete --prefix <prefix> <container>
```

### Add a metadata to a container

```bash
swift post -H "X-Container-Meta-Access-Control-Allow-Origin:http://example.com" <container>
```

### Add metadata to an object

```bash
swift post -m "my-custom-key:value" <container> <object>
```

### Delete a metadata from a container

```bash
swift post -H "X-Container-Meta-Access-Control-Allow-Origin:" <container>
```

### Delete a metadata from an object

```bash
swift post -m "my-custom-key:" <container> <object>
swift post -H "X-Remove-Object-My-Custom-Key:" <container> <object>
```

### Set Read ACL on a container

```bash
swift post <container> -r "${OS_TENANT_ID}:*"
```

### Set write ACL on a container

```bash
swift post <container> -w "${OS_TENANT_ID}:*"
```

### Delete the read ACL on a container

```bash
swift post <container> -r ""
```

### Delete write ACL on a container

```bash
swift post <container> -w ""
```

### Move objects from one container to another

```bash
swift copy -d /<destination_container> <container> <object>
```

#### LargeObjects

> [!primary]
>
> In this example, the LargeObject was uploaded in SLO mode.
> See the [Curl command memo](https://docs.ovh.com/au/en/storage/pcs/curl-commands-memo/) documentation for the manifest upload.
>

On a LargeObject, the `swift copy` command returns a 413 **error**:

```bash
swift copy -d /<destination_container> <container> <largeobject>
created container <cdestination_container>
Object COPY failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<container>/<largeobject> 413 Request Entity Too Large  [first 60 chars of response] b'<html><h1>Request Entity Too Large</h1><p>The body of your r'
```

So we need to start by moving the segments:

```bash
for obj in $(swift list <container_segments>);do swift copy -d /<destination_container_segments> <container_segments> $obj;done
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000000 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000000
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000001 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000001
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000002 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000002
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000003 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000003
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000004 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000004
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000005 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000005
```

Then retrieve the manifest, adapt it and re-upload it

```bash
$(swift auth)
curl -s -X GET "$OS_STORAGE_URL/<container>/<largeobject>?multipart-manifest=get" -H "X-Auth-Token:$OS_AUTH_TOKEN" | jq '.' > <largeobject>.json

sed -i 's/name/path/g' <largeobject>.json
sed -i 's/bytes/size_bytes/g' <largeobject>.json
sed -i '/hash/d' <largeobject>.json
sed -i '/last_modified/d' <largeobject>.json
sed -i '/content_type/d' <largeobject>.json
sed -i '/path/s/,$//g' <largeobject>.json

curl -i -X PUT -H "X-Auth-Token:$OS_AUTH_TOKEN" -T <largeobject>.json "$OS_STORAGE_URL/<destination_container>/<largeobject>?multipart-manifest=put`
```

### Rename a container

You cannot rename a container. To do this, create a new container and re-upload the objects in it. However, Swift has the `copy` feature, which seems to provide better performance.

Time to upload 2Gb (1500 objects of 1M and 1 object of 500M):

```bash
time swift upload <container> ./*
real	69m26,159s
user	0m20,017s
sys	0m3,689s
```

```bash
swift list --lh -t <container>
2.0G
```

```bash
swift list
<container>
```

```bash
time for obj in $(swift list <container>);do swift copy -d /<other_container> <container> $obj; done
real	54m43,898s
user	12m38,060s
sys	1m34,394s
```

```bash
swift list
<other_container>
<container>
```

```bash
swift list --lh -t <other_container>
2.0G
```

We notice that for small objects, this does not change much. However, for objects of a slightly larger size (500M):

```bash
time swift upload <container> <object> --object-name <bis_object>
<bis_object>

real	15m51,525s
user	0m4,245s
sys	0m0,848s
```

```bash
time swift copy -d /<other_container> <container> <bis_object>
created container <other_container>
<container>/<bis_object> copied to /<other_container>/<bis_object>

real	0m11,924s
user	0m0,464s
sys	0m0,091s
```

#### LargeObject

> [!primary]
>
> In this example, the LargeObject was uploaded in SLO mode.
> Please refer to the [Curl Command Memo](https://docs.ovh.com/au/en/storage/pcs/curl-commands-memo/) documentation for the manifest upload.
>

```bash
time swift upload --use-slo --segment-size 1G <container> <largeobject>
<largeobject> segment 4
<largeobject> segment 2
<largeobject> segment 0
<largeobject> segment 1
<largeobject> segment 5
<largeobject> segment 3
<largeobject>

real	190m55,547s
user	0m57,906s
sys	0m14,246s
```

On a LargeObject, the `swift copy` command returns a **413 error**:

```bash
swift copy -d /<destination_container> <container> <largeobject>
created container <cdestination_container>
Object COPY failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<container>/<largeobject> 413 Request Entity Too Large [first 60 chars of response] b'<html><h1>Request Entity Too Large</h1><p>The body of your r'
```

So we need to start by moving the segments:

```bash
for obj in $(swift list <container_segments>);do swift copy -d /<destination_container_segments> <container_segments> $obj;done
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000000 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000000
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000001 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000001
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000002 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000002
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000003 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000003
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000004 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000004
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000005 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/0000000005
```

Then retrieve the manifest, adapt it and re-upload it

```bash
$(swift auth)
curl -s -X GET "$OS_STORAGE_URL/<container>/<largeobject>?multipart-manifest=get" -H "X-Auth-Token:$OS_AUTH_TOKEN" | jq '.' ><largeobject>.json

sed -i 's/name/path/g' <largeobject>.json
sed -i 's/bytes/size_bytes/g' <largeobject>.json
sed -i '/hash/d' <largeobject>.json
sed -i '/last_modified/d' <largeobject>.json
sed -i '/content_type/d' <largeobject>.json
sed -i '/path/s/,$//g' <largeobject>.json

curl -i -X PUT -H "X-Auth-Token:$OS_AUTH_TOKEN" -T <largeobject>.json "$OS_STORAGE_URL/<destination_container>/<largeobject>?multipart-manifest=put"
```

### Get the space used in a container

```bash
swift list --lh -t <container>
8.4G
```

There is no concept of a folder in a container, however we can use the prefixes:

```bash
swift list -p <prefix> <container>
<prefix>/1.jpg
<prefix>/10.jpg
<prefix>/11.jpg
<prefix>/12.jpg
<prefix>/13.jpg
<prefix>/14.jpg
<prefix>/15.jpg
<prefix>/16.jpg
<prefix>/17.jpg
<prefix>/18.jpg
<prefix>/2.jpg
<prefix>/3.jpg
<prefix>/4.jpg
<prefix>/5.jpg
<prefix>/6.jpg
<prefix>/7.jpg
<prefix>/8.jpg
<prefix>/9.jpg
```

```bash
swift list --lh -t -p <prefix> <container>
685K
```

### Get user id

```bash
openstack user show --format json "${OS_USERNAME}" | jq -r '.id'
openstack token issue -f json | jq -r '.user_id'
```

### Get cluster limits

```bash
swift capabilities
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
