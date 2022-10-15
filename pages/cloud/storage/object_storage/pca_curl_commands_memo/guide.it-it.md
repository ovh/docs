---
title: Object Storage Swift - Curl Command Memo (EN)
slug: pca/curl-commands-memo
routes:
    canonical: 'https://docs.ovh.com/gb/en/storage/pca/curl-commands-memo/'
excerpt: Find here the main curl commands for managing your Public Cloud Archive object containers
section: OpenStack Swift Archive Storage Class Specifics
order: 060
---

**Last updated 27th October 2021**

## Objective

In this guide, you can find the main curl commands for managing your Public Cloud Archive object containers.

## Requirements

Load the following environment variables:

> `export OS_AUTH_URL=https://auth.cloud.ovh.net/v3/`  
> `export OS_STORAGE_URL=https://storage.<region>.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf`  
> `export OS_USERNAME=user-xxxxxx`  
> `export OS_PASSWORD=xxx`  
> `export OS_TENANT_ID=702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf`  
> `export OS_AUTH_TOKEN=$(curl -is -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "id": "'$OS_TENANT_ID'", "domain": { "id": "default" } } } } }' | grep '^X-Subject-Token' | cut -d" " -f2 | tr -d "\r")`

## Instructions

### Create a PCA container

```bash
curl -i "${OS_STORAGE_URL}/<container>" -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Storage-Policy: PCA"
```

### View account information

```bash
curl -i "${OS_STORAGE_URL}" -X HEAD -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### View container information

```bash
curl -i "${OS_STORAGE_URL}/<container>" -X HEAD -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### View object information

```bash
curl -i "${OS_STORAGE_URL}/<container>/<object>" -X HEAD -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### List the container(s) related to an account

```bash
curl "${OS_STORAGE_URL}" -X GET -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### List the contents of a container

```bash
curl "${OS_STORAGE_URL}/<container>" -X GET -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Upload an object smaller than 5GB

```bash
curl -i "${OS_STORAGE_URL}/<container>/<object>" -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "Content-Type: application/octet-stream" -d "@<object>"
```

### Upload an object higher than 5GB in SLO mode

```bash
FILE=/datas/6gb.img
CONTAINER=pcs-test
OBJECT=6gb.img
CHUNK_SIZE=500M

# Create a temporary folder for chunks
TMPDIR="$(mktemp -d)"
cd "${TMPDIR}"

# Divide file into chunks
split -d -b "${CHUNK_SIZE}" "${FILE}" "$(basename $FILE)_"

# Create containers
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Storage-Policy: PCA" "${OS_STORAGE_URL}/${CONTAINER}"
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Storage-Policy: PCA" "${OS_STORAGE_URL}/${CONTAINER}_segments"

# Upload of chunks
for chunk in *; do
    curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -T "${chunk}" "${OS_STORAGE_URL}/${CONTAINER}_segments/${OBJECT}/${chunk}"
done
```

Create the manifest in json format based on the following attributes:

- **path** (Required)
  eg: `pcs-test_segments/6gb.img_01`
- **etag** (Optional)
  Segment's MD5 checksum. This value is available in the segment's `Etag` metadata via: `curl -i -X HEAD "$OS_STORAGE_URL/<container>/<object>" -H "X-Auth-Token:$OS_AUTH_TOKEN"`
- **size_bytes** (Optional)
  Segment size. This value is available in the segment's `Content-Length` metadata via:  `curl -i -X HEAD "$OS_STORAGE_URL/<container>/<object>" -H "X-Auth-Token:$OS_AUTH_TOKEN"`

Here is an example manifest:

```json
[
  {
    "path":"pcs-test_segments/myLargeObject_00",
    "etag":"11a3e229084349bc25d97e29393ced1d",
    "size_bytes":"10485760"
  },
  {
    "path":"pcs-test_segments/myLargeObject_01",
    "etag":"6ccef1b25ea58fb8be3ca1a1a744ea53",
    "size_bytes":"10485760"
  },
  {
    "path":"pcs-test_segments/myLargeObject_02",
    "etag":"82c16692a7f9040f3a6eb6a6a3f3c141",
    "size_bytes":"10485760"
  }
  [...]
]
```

```bash
# Upload of manifest file
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -T manifest.json "$OS_STORAGE_URL/$CONTAINER/$OBJECT?multipart-manifest=put"

# Cleanup
cd
rm -rf "${TMPDIR}"
```

### Upload an object higher than 5GB in DLO mode

```bash
FILE=/datas/6gb.img
CONTAINER=pcs-test
OBJECT=6gb.img
CHUNK_SIZE=500M

# Create a temporary folder for chunks
TMPDIR="$(mktemp -d)"
cd "${TMPDIR}"

# Divide file into chunks
split -d -b "${CHUNK_SIZE}" "${FILE}" "$(basename $FILE)_"

# Create containers
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Storage-Policy: PCA" "${OS_STORAGE_URL}/${CONTAINER}"
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Storage-Policy: PCA" "${OS_STORAGE_URL}/${CONTAINER}_segments"

# Upload of chunks
for chunk in *; do
    curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -T "${chunk}" "${OS_STORAGE_URL}/${CONTAINER}_segments/${OBJECT}/${chunk}"
done

# Create Manifest
curl -X PUT -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Object-Manifest: ${CONTAINER}_segments/${OBJECT}/" --data-binary "" "${OS_STORAGE_URL}/${CONTAINER}/${OBJECT}"

# Cleanup
cd
rm -rf "${TMPDIR}"
```

### Download an object

```bash
curl "${OS_STORAGE_URL}/<container>/<object>" -X GET -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -o <output_file>
```

### Delete an empty container

```bash
curl "${OS_STORAGE_URL}/<container>" -X DELETE -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Delete a non-empty container with fewer than 10000 objects

> [!primary]
>
> If the container contains LargeObjects, you will need to manually delete the container: `<container_segments>`
>

```bash
OBJECTS=$(curl -s "${OS_STORAGE_URL}/<container>" -X GET -H "X-Auth-Token: ${OS_AUTH_TOKEN}")
for obj in $OBJECTS
do
  curl "${OS_STORAGE_URL}/<container>/$obj" -X DELETE -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
done
curl "${OS_STORAGE_URL}/<container>" -X DELETE -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Empty a container with more than 10,000 objects

> [!primary]
>
> If the container contains LargeObjects, you will need to manually delete the container: `<container_segments>`
>


```bash
#!/bin/bash

START_TIME=$(date '+%s')
RENEW_TOKEN_AFTER=72000 # = 20h
CONTAINER="pcs-test"
OS_STORAGE_URL="https://storage.${OS_REGION_NAME,,}.cloud.ovh.net/v1/AUTH_${OS_TENANT_ID}/${CONTAINER}"
unset OS_AUTH_TOKEN

get_token(){
  export OS_AUTH_TOKEN=$(curl -is -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type: application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD'" } } }, "scope": { "project": { "id": "'$OS_TENANT_ID'", "domain": { "id": "default" } } } } }' | grep '^X-Subject-Token' | cut -d" " -f2 | tr -d "\r") && wait
}
delete_objects(){
  while : ;
  do
    CURRENT_TIME=$(date '+%s')
    if [ $(($CURRENT_TIME - $START_TIME)) -gt $RENEW_TOKEN_AFTER ]
    then
      get_token
    fi
    OBJECTS=$(curl -s "${OS_STORAGE_URL}" -X GET -H "X-Auth-Token:$OS_AUTH_TOKEN")
    if [[ ! -z $OBJECTS ]]
    then
      for obj in $OBJECTS
      do
        echo "DELETING OBJECT: $obj"
        curl -s "${OS_STORAGE_URL}/$obj" -X DELETE -H "X-Auth-Token:$OS_AUTH_TOKEN" && wait
      done
    else
      break
    fi
  done
}

if [[ -z $OS_AUTH_TOKEN ]]
then
  get_token
fi
while [ $(curl -is "${OS_STORAGE_URL}" -X HEAD -H "X-Auth-Token:$OS_AUTH_TOKEN" | awk -F ": " '/X-Container-Object-Count/ {print $2}' | tr -d "\r") -ne 0 ]
do
  delete_objects
done

```

### Delete an object

```bash
curl "${OS_STORAGE_URL}/<container>/<object>" -X DELETE -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

### Delete an object larger than 5Gb

```bash
curl "${OS_STORAGE_URL}/<container>/<object>?multipart-manifest=delete" -X DELETE -H "X-Auth-Token: ${OS_AUTH_TOKEN}"
```

> [!primary]
>
> Without the `?multipart-manifest=delete` argument, this will only delete the manifest file without the segments.
>

### Add a metadata to a container

```bash
curl "${OS_STORAGE_URL}/<container>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Container-Meta-Access-Control-Allow-Origin:http://example.com"
```

### Add metadata to an object

```bash
curl "${OS_STORAGE_URL}/<container>/<object>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Object-Meta-my-custom-key:value"
```

### Delete a metadata from a container

```bash
curl "${OS_STORAGE_URL}/<container>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Remove-Container-Meta-Access-Control-Allow-Origin"
```

### Delete a metadata from an object

```bash
curl "${OS_STORAGE_URL}/<container>/<object>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Remove-Object-My-Custom-Key"
```

### Set Read ACL on a container

```bash
curl "${OS_STORAGE_URL}/<container>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Container-Read:${OS_TENANT_ID}:*"
```

### Set write ACL on a container

```bash
curl "${OS_STORAGE_URL}/<container>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Container-Write:${OS_TENANT_ID}:*"
```

### Delete the read ACL on a container

```bash
curl "${OS_STORAGE_URL}/<container>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Remove-Container-Read:x"
```

### Delete write ACL on a container

```bash
curl "${OS_STORAGE_URL}/<container>" -X POST -H "X-Auth-Token: ${OS_AUTH_TOKEN}" -H "X-Remove-Container-Write:x"
```

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
