---
title: Manage your archives with duplicity
slug: pca/duplicity
excerpt: Archive your data in PCA with duplicity
section: Public Cloud Archive
---


## Introduction
Duplicity is a backup solution supporting a wide range of storage services as backends. It supports many features like encryption, compression, filtering, signing etc. As an extremely cheap cold storage solution, [PCA](https://www.ovh.com/us/public-cloud/storage/cloud-archive/){.external} is a first class choice for archiving backups.


## How duplicity works
Duplicity produces three kinds of information:

**Manifests**

They contain the list of files stored in volumes.

**Signatures**

They contain metadata about these files (checksums) and help detecting content change.

**Volumes**

They hold the actual data. Their size is configured by the user.


## Hot vs Cold storage
While hot storage permits accessing data immediately, cold storage introduces a latency in the retrieval process. In order to work, duplicity requires manifests and signatures to be always available. As a consequence, data to be stored must be split according to the expected availability level. Volume files, representing the largest part of a backup, and the bigger in size, will be pushed to PCA while other lightweight information will be stored in [PCS](https://www.ovh.com/us/public-cloud/storage/object-storage/){.external}. This is possible to accomplish with duplicity's multibackend feature.


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
1. [
2.     {
3.         "description": "Cold storage",
4.         "url": "pca://duplicity_cold",
5.         "env": [
6.             {
7.                 "name": "PCA_AUTHURL",
8.                 "value": "https://auth.cloud.ovh.net/v3"
9.             },
10.             {
11.                 "name": "PCA_AUTHVERSION",
12.                 "value": "3"
13.             },
14.             {
15.                 "name": "PCA_PROJECT_DOMAIN_NAME",
16.                 "value": "Default"
17.             },
18.             {
19.                 "name": "PCA_TENANTID",
20.                 "value": "<your_tenant_id>"
21.             },
22.             {
23.                 "name": "PCA_USERNAME",
24.                 "value": "<your_username>"
25.             },
26.             {
27.                 "name": "PCA_PASSWORD",
28.                 "value": "<your_password>"
29.             },
30.             {
31.                 "name": "PCA_REGIONNAME",
32.                 "value": "<region_name>"
33.             }
34.         ],
35.         "prefixes": ["cold_"]
36.     },
37.     {
38.         "description": "Hot storage",
39.         "url": "swift://duplicity_hot",
40.         "env": [
41.             {
42.                 "name": "SWIFT_AUTHURL",
43.                 "value": "https://auth.cloud.ovh.net/v3"
44.             },
45.             {
46.                 "name": "SWIFT_AUTHVERSION",
47.                 "value": "3"
48.             },
49.             {
50.                 "name": "SWIFT_PROJECT_DOMAIN_NAME",
51.                 "value": "Default"
52.             },
53.             {
54.                 "name": "SWIFT_TENANTID",
55.                 "value": "<your_tenant_id>"
56.             },
57.             {
58.                 "name": "SWIFT_USERNAME",
59.                 "value": "<your_username>"
60.             },
61.             {
62.                 "name": "SWIFT_PASSWORD",
63.                 "value": "<your_password>"
64.             },
65.             {
66.                 "name": "SWIFT_REGIONNAME",
67.                 "value": "<region_name>"
68.             }
69.         ],
70.         "prefixes": ["hot_"]
71.     }
72. ]
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