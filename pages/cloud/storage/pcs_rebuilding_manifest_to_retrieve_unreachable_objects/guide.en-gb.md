---
title: Rebuilding manifests to retrieve inaccessible objects
slug: pcs/rebuild-manifests
section: Object Storage Standard (Swift)
hidden: true
---

**Last updated 3rd April 2021**

## Objective

Following the SBG incident, a very small proportion of the objects contained in the Object Storage (PCS) in the SBG region were irretrievably lost. Customers in this situation received a communication with the list of their non-recoverable objects.

For each of the listed objects, there are four situations:

1. The object listed is a simple object: the impact is limited to the object itself.
2. The object listed is a segment referenced by an SLO manifest: when downloading the Large Object, you will encounter a "409 Conflict" error.
3. The listed object is a segment referenced by a DLO manifest: downloading the Large Object will return an incomplete object of the segment in question. The Large Object will be corrupted.
4. The object listed is a SLO or DLO manifest: if you are able to reconstruct the contents of the manifest, the object will be accessible provided that no segment objects have been destroyed (see points 2 and 3).

**Find out how to regenerate DLO and SLO-type manifests to make “Larges Objects” accessible again, for which all fragments are still available.**

## Requirements

- [Generating a Keystone token](https://docs.ovh.com/gb/en/public-cloud/managing_tokens/#step-2-getting-the-token-id-and-endpoint-publicurl-variables)
- [Preparing the environment to use the OpenStack API](https://docs.ovh.com/gb/en/public-cloud/getting_started_with_the_swift_api/)

## Instructions

### Regenerating a DLO manifest

Let's assume that the missing manifest is located in the container named `container` and concerns the object named `large_file`.

- List the remaining segments:

```bash
$ swift list container_segments —prefix large_file

large_file/1617355176.707751/5242880/2097152/00000000
large_file/1617355176.707751/5242880/2097152/00000001
large_file/1617355176.707751/5242880/2097152/00000002
```

- Upload the new DLO manifest:

```bash
$ TOKEN="xxx"

$ curl -i -H "X-Auth-Token: $TOKEN" -X PUT -H "Content-Length: 0" -H "x-object-manifest: container_segments/large_file/1617355176.707751/5242880/2097152/" https://storage.sbg.pcs.ovh.net:443/v1/AUTH_XXX/container/large_file
```

- Download the `large_file` object:

```bash
$ swift download container large_file
```

### Regenerating an SLO manifest

Let's assume that the missing manifest is located in the container named `container` and concerns the object named `large_file`.

- List the remaining segments:

```bash
$ swift list container_segments —prefix large_file

large_file/slo/1617355964.943691/5242880/2097152/00000000
large_file/slo/1617355964.943691/5242880/2097152/00000001
large_file/slo/1617355964.943691/5242880/2097152/00000002
```

- Generate a **manifest** file containing the following json:

```bash
$ cat manifest.json
[
{ "path": "/container_segments/large_file/slo/1617355964.943691/5242880/2097152/00000000" },
{ "path": "/container_segments/large_file/slo/1617355964.943691/5242880/2097152/00000001" },
{ "path": "/container_segments/large_file/slo/1617355964.943691/5242880/2097152/00000002" }
]
```

- Upload the SLO manifest:

```bash
$ TOKEN="xxx"

$ curl -i -H "X-Auth-Token: $TOKEN" -X PUT -d@manifest.json "https://storage.sbg.pcs.ovh.net:443/v1/AUTH_XXX/container/large_file?multipart-manifest=put"
```

- Download the `large_file` object:

```bash
$ swift download container large_file
```

## Go further

[Official OpenStack documentation](https://docs.openstack.org/swift/latest/overview_large_objects.html){.external}

Join our community of users on <https://community.ovh.com/en/>.
