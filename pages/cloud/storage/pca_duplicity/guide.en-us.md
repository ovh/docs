---
title: Manage your archives with duplicity
slug: pca/duplicity
excerpt: Archive your data in PCA with duplicity
section: Public Cloud Archive
---


## Introduction
Duplicity is a backup solution supporting a wide range of storage services as backends. It supports many features like encryption, compression, filtering, signing etc. As an extremely cheap cold storage solution, [PCA](https://www.ovhcloud.com/en/public-cloud/cloud-archive/){.external} is a first class choice for archiving backups.


## How duplicity works
Duplicity produces three kinds of information:

**Manifests**

They contain the list of files stored in volumes.

**Signatures**

They contain metadata about these files (checksums) and help detecting content change.

**Volumes**

They hold the actual data. Their size is configured by the user.


## Hot vs Cold storage
While hot storage permits accessing data immediately, cold storage introduces a latency in the retrieval process. In order to work, duplicity requires manifests and signatures to be always available. As a consequence, data to be stored must be split according to the expected availability level. Volume files, representing the largest part of a backup, and the bigger in size, will be pushed to PCA while other lightweight information will be stored in [PCS](https://www.ovhcloud.com/en/public-cloud/object-storage/){.external}. This is possible to accomplish with duplicity's multibackend feature.


## Duplicity version
The features described in the rest of this guide uses the (not yet released) [0.8 version](https://code.launchpad.net/~duplicity-team/duplicity/0.8-series){.external} of duplicity.


## Install duplicity
**Requirements**

Adapt the following command and package names to your environment.

```
$ apt install -y bzr gcc librsync-dev python python-dev python-pip
```
**Get the project's sources**

To clone duplicity sources locally, you have to use bzr (pronounced *bazaar*), launchpad's VCS.

```
$ bzr branch lp:duplicity
```
**Install duplicity development version**

```
$ pip install setuptools wheel
$ pip install -r requirements.txt
$ python setup.py install
```

## Multibackend setup

Put the following completed information in a config.json file:


```json
[
    {
        "description": "Cold storage",
        "url": "pca://duplicity_cold",
        "env": [
            {
                "name": "PCA_AUTHURL",
                "value": "https://auth.cloud.ovh.net/v3"
            },
            {
                "name": "PCA_AUTHVERSION",
                "value": "3"
            },
            {
                "name": "PCA_PROJECT_DOMAIN_NAME",
                "value": "Default"
            },
            {
                "name": "PCA_TENANTID",
                "value": "<your_tenant_id>"
            },
            {
                "name": "PCA_USERNAME",
                "value": "<your_username>"
            },
            {
                "name": "PCA_PASSWORD",
                "value": "<your_password>"
            },
            {
                "name": "PCA_REGIONNAME",
                "value": "<region_name>"
            }
        ],
        "prefixes": ["cold_"]
    },
    {
        "description": "Hot storage",
        "url": "swift://duplicity_hot",
        "env": [
            {
                "name": "SWIFT_AUTHURL",
                "value": "https://auth.cloud.ovh.net/v3"
            },
            {
                "name": "SWIFT_AUTHVERSION",
                "value": "3"
            },
            {
                "name": "SWIFT_PROJECT_DOMAIN_NAME",
                "value": "Default"
            },
            {
                "name": "SWIFT_TENANTID",
                "value": "<your_tenant_id>"
            },
            {
                "name": "SWIFT_USERNAME",
                "value": "<your_username>"
            },
            {
                "name": "SWIFT_PASSWORD",
                "value": "<your_password>"
            },
            {
                "name": "SWIFT_REGIONNAME",
                "value": "<region_name>"
            }
        ],
        "prefixes": ["hot_"]
    }
]
```


## Run backups
To run your first full backup:


```bash
duplicity \
--file-prefix-manifest 'hot_' \
--file-prefix-signature 'hot_' \
--file-prefix-archive 'cold_' \
full \
/what/to/backup 'multi:///path/to/config.json?mode=mirror&onfail=abort'
```

Then you can make incremental backups of the same path by replacing full with incremental in the previous command.