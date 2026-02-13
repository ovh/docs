---
title: Cloud Archive Swift - Swift Command Memo
excerpt: Find here the main swift commands to manage your Public Cloud Archive object containers
updated: 2021-09-21
---

## Objective

You can use the OpenStack API to generate various scripts to automate your actions on your Public Cloud instances.

The OpenStack swiftclient allows you to interact with and manage your containers and objects. For example, you can send files regularly to your containers, in order to back them up.

**In this guide, you can find the main swift commands for managing your object containers using python-swiftclient.**

## Requirements

- [Prepare the environment to use the OpenStack API](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api) by installing python-swiftclient.
- [Load the OpenStack environment variables](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables).

## Instructions

### Create a PCA container

```bash
swift post -H "X-Storage-Policy: PCA" <container_name>
```

### View account information

```bash
swift stat
```

### View container information

```bash
swift stat <container_name>
```

### View object information

```bash
swift stat <container_name> <object_name>
```

### List the container(s) related to an account

```bash
swift list
```

### List the contents of a container

```bash
swift list <container_name>
```

### Upload an object smaller than 5GB

```bash
swift upload <container_name> <file_name>
```

### Upload an object larger than 5GB in SLO mode

```bash
swift upload --use-slo --segment-size 1G <container_name> <file_name>
```

### Upload an object larger than 5GB in DLO mode

```bash
swift upload --segment-size 1G <container_name> <file_name>
```

### Aborting the upload of a Large Object

```bash
swift upload --use-slo --segment-size 500M <container_name> <file_name>
```

```text
^C Aborted
```

```bash
swift list
```

```text
<container_name>
<container_segments_name>
```

```bash
swift list <container_segments_name>
```

```text
<object_name>/slo/1628738591.297565/6442450944/524288000/00000000
<object_name>/slo/1628738591.297565/6442450944/524288000/00000001
<object_name>/slo/1628738591.297565/6442450944/524288000/00000002
<object_name>/slo/1628738591.297565/6442450944/524288000/00000003
<object_name>/slo/1628738591.297565/6442450944/524288000/00000004
<object_name>/slo/1628738591.297565/6442450944/524288000/00000005
<object_name>/slo/1628738591.297565/6442450944/524288000/00000006
<object_name>/slo/1628738591.297565/6442450944/524288000/00000007
<object_name>/slo/1628738591.297565/6442450944/524288000/00000008
<object_name>/slo/1628738591.297565/6442450944/524288000/00000009
```

> It is recommended that you delete the `<container_segments_name>` container (or at least the segments corresponding to the dropped object).

### Download an object

```bash
swift download <container_name> <object_name>
```

### Delete an empty container

```bash
swift delete <container_name>
```

### Delete a non-empty container

```bash
swift delete <container_name>
```

### Delete an object

```bash
swift delete <container_name> <object_name>
```

### Delete prefix objects

```bash
swift delete --prefix <prefix> <container_name>
```

### Add a metadata to a container

```bash
swift post -H "X-Container-Meta-Access-Control-Allow-Origin:http://example.com" <container_name>
```

### Add metadata to an object

```bash
swift post -m "my-custom-key:value" <container_name> <object_name>
```

### Delete a metadata from a container

```bash
swift post -H "X-Container-Meta-Access-Control-Allow-Origin:" <container_name>
```

### Delete a metadata from an object

```bash
swift post -m "my-custom-key:" <container_name> <object_name>
swift post -H "X-Remove-Object-My-Custom-Key:" <container_name> <object_name>
```

### Set Read ACL on a container

```bash
swift post <container_name> -r "${OS_TENANT_ID}:*"
```

### Set write ACL on a container

```bash
swift post <container_name> -w "${OS_TENANT_ID}:*"
```

### Delete the read ACL on a container

```bash
swift post <container_name> -r ""
```

### Delete write ACL on a container

```bash
swift post <container_name> -w ""
```

### Move objects from one container to another

```bash
swift copy -d /<destination_container_name> <container_name> <object_name>
```

#### LargeObjects

> [!primary]
>
> In this example, the LargeObject was uploaded in SLO mode.
> See the [Curl command memo](/pages/storage_and_backup/object_storage/pca_curl_commands_memo) documentation for the manifest upload.
>

On a LargeObject, the `swift copy` command returns a **413 error**:

```bash
swift copy -d /<destination_container> <container> <largeobject>
created container <destination_container>
Object COPY failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<container>/<largeobject> 413 Request Entity Too Large  [first 60 chars of response] b'<html><h1>Request Entity Too Large</h1><p>The body of your r'
```

So we need to start by moving the segments:

> [!warning]
>
> You must first create the `<destination_container_segments>`.
>

```bash
for obj in $(swift list <container_segments>);do swift copy -d /<destination_container_segments> <container_segments> $obj;done
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000000 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000000
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000001 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000001
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000002 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000002
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000003 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000003
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000004 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000004
created container <destination_container_segments>
<container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000005 copied to /<destination_container_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000005
```

Then retrieve the manifest, adapt it and re-upload it:

```bash
$(swift auth)
curl -s -X GET "$OS_STORAGE_URL/<container>/<largeobject>?multipart-manifest=get" -H "X-Auth-Token:$OS_AUTH_TOKEN" | jq '.' > <largeobject>.json

sed -i 's/name/path/g' <largeobject>.json
sed -i 's/bytes/size_bytes/g' <largeobject>.json
sed -i '/hash/d' <largeobject>.json
sed -i '/last_modified/d' <largeobject>.json
sed -i '/content_type/d' <largeobject>.json
sed -i '/path/s/,$//g' <largeobject>.json

curl -i -X PUT -H "X-Auth-Token:$OS_AUTH_TOKEN" -T <largeobject>.json "$OS_STORAGE_URL/<destination_container>/<largeobject>?multipart-manifest=put"
```

### Rename a container

You cannot rename a container. To do this, create a new container and re-upload the objects in it. However, swift has the `copy` feature, which seems to provide better performance.

Time to upload 2 GB (1500 objects of 1 MB and 1 object of 500 MB):

```bash
time swift upload <container_name> ./*
```

```text
real    69m26,159s
user    0m20,017s
sys     0m3,689s
```

```bash
swift list --lh -t <container_name>
```

```text
2.0G
```

```bash
swift list
```

```text
<container_name>
```

```bash
time for obj in $(swift list <container_name>); do swift copy -d /<other_container_name> <container_name> "$obj"; done
```

```text
real    54m43,898s
user    12m38,060s
sys     1m34,394s
```

```bash
swift list
```

```text
<other_container_name>
<container_name>
```

```bash
swift list --lh -t <other_container_name>
```

```text
2.0G
```

We notice that for small objects, this does not change much. However, for objects of a slightly larger size (500M):

```bash
time swift upload <container_name> <file_name> --object-name <object_name_2>
```

```text
<object_name_2>

real    15m51,525s
user    0m4,245s
sys     0m0,848s
```

```bash
time swift copy -d /<other_container_name> <container_name> <object_name_2>
```

```text
created container <other_container_name>
<container_name>/<object_name_2> copied to /<other_container_name>/<object_name_2>

real    0m11,924s
user    0m0,464s
sys     0m0,091s
```

#### LargeObject

> [!primary]
>
> In this example, the LargeObject was uploaded in SLO mode.
> See the [Curl command memo](/pages/storage_and_backup/object_storage/pca_curl_commands_memo) documentation for the manifest upload.
>

```bash
time swift upload --use-slo --segment-size 1G <container_name> <large_object_name>
```

```text
<large_object_name> segment 4
<large_object_name> segment 2
<large_object_name> segment 0
<large_object_name> segment 1
<large_object_name> segment 5
<large_object_name> segment 3
<large_object_name>

real    190m55,547s
user    0m57,906s
sys     0m14,246s
```

On a LargeObject, the `swift copy` command returns a **413 error**:

```bash
swift copy -d /<destination_container_name> <container_name> <large_object_name>
```

```text
created container <destination_container_name>
Object COPY failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<container_name>/<large_object_name> 413 Request Entity Too Large  [first 60 chars of response] b'<html><h1>Request Entity Too Large</h1><p>The body of your r'
```

So we need to start by moving the segments:

> [!warning]
>
> You must first create the `<destination_container_segments_name>` container.
>

```bash
for obj in $(swift list <container_segments_name>); do swift copy -d /<destination_container_segments_name> <container_segments_name> "$obj"; done
```

```text
created container <destination_container_segments_name>
<container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000000 copied to /<destination_container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000000
created container <destination_container_segments_name>
<container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000001 copied to /<destination_container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000001
created container <destination_container_segments_name>
<container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000002 copied to /<destination_container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000002
created container <destination_container_segments_name>
<container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000003 copied to /<destination_container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000003
created container <destination_container_segments_name>
<container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000004 copied to /<destination_container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000004
created container <destination_container_segments_name>
<container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000005 copied to /<destination_container_segments_name>/<large_object_name>/slo/1629978906.614903/6442450944/1073741824/00000005
```

Then retrieve the manifest, adapt it and re-upload it:

```bash
swift auth
curl -s -X GET "$OS_STORAGE_URL/<container_name>/<large_object_name>?multipart-manifest=get" -H "X-Auth-Token:$OS_AUTH_TOKEN" | jq '.' > <large_object_name>.json

sed -i 's/name/path/g' <large_object_name>.json
sed -i 's/bytes/size_bytes/g' <large_object_name>.json
sed -i '/hash/d' <large_object_name>.json
sed -i '/last_modified/d' <large_object_name>.json
sed -i '/content_type/d' <large_object_name>.json
sed -i '/path/s/,$//g' <large_object_name>.json

curl -i -X PUT -H "X-Auth-Token:$OS_AUTH_TOKEN" -T <large_object_name>.json "$OS_STORAGE_URL/<destination_container_name>/<large_object_name>?multipart-manifest=put"
```

### Get the space used in a container

```bash
swift list --lh -t <container_name>
```

```text
8.4G
```

There is no folder concept in a container, however we can use the prefixes:

```bash
swift list -p <prefix> <container_name>
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
swift list --lh -t -p <prefix> <container_name>
```

```text
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

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
