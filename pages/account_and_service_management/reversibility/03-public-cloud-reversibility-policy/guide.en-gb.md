---
title: Public Cloud Reversibility Policy
updated: 2021-05-05
---

**Last updated 5th May 2021**

## Objective

This document is the reversibility policy for the Public Cloud [Compute](https://www.ovhcloud.com/en-gb/public-cloud/compute/), [Object Storage](https://www.ovhcloud.com/en-gb/public-cloud/object-storage/) and [Block Storage](https://www.ovhcloud.com/en-gb/public-cloud/block-storage/) activities.

This policy aims at implementing the global reversibility principles and requirements of [SWIPO IaaS Code of Conduct for Cloud Providers](https://swipo.eu/download-section/copyrighted-downloads/){.external}.

## Features map

Public cloud features are divided into three categories:

- The [core features](#core-features) for which we guarantee the ability to migrate
- The [OVHcloud implementation](#ovhcloud-implementation), whose migration will require adaptations to a new environment.
- [Specific functionalities](#specific-functionalities), whose migration as such is impossible to guarantee as they are tied to OVHcloud environment or specific developments.

### Core features <a name="core-features"></a>

|Feature|Description|Available formats|Migration model|Available documentation|
|---|---|---|---|---|
|Compute|Start and run instances based on multiple system images and flavors available.|qcow2|Snapshot instances, convert them to images, export the images.|[Create and use OpenStack snapshots](https://www.ovh.com/blog/create-and-use-openstack-snapshots/)<br><br>[Transfer an Instance backup from one datacentre to another](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another)<br><br>[Gestion des snapshots d’une instance dans horizon](/pages/public_cloud/compute/managing_snapshots_in_horizon) (FR)|
|Swift - Public cloud storage|Store files accessible through openstack swift API or S3 API. Enable the use of metadata for objects.|**Every format** - customers may upload any file on the object storage|Use any synchronisation tool compatible with either S3 or swift API. As an example, we recommend rclone.|[Getting started with the Swift S3 API](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_s3_api)<br><br>[Getting started with the Swift API](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)|
|Swift - Public cloud archive|Long-term file storage|**Every format** - customers may upload any file on the object storage|Use any synchronisation tool compatible with either S3 or swift API. As an example, we recommend rclone.|[Getting started with the Swift S3 API](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_s3_api)<br><br>[Getting started with the Swift API](/pages/storage_and_backup/object_storage/pcs_getting_started_with_the_swift_api)|
|Ceph - Block storage|Attach volumes for additional storage to public cloud instances|**Every format** - customers may upload any file on the object storage|Convert the volume to an image, export images|[Transfer a volume backup from one datacentre to another](/pages/public_cloud/compute/transfer_volume_backup_from_one_datacentre_to_another)|
|Horizon - WebUI Service|Web control panel and management interface|N/A|No migration per se, this is just an interface above resources|N/A|
|Mistral - Workflow management|Describe and execute processes as a set of tasks and their transitions.|Yaml|Export workflows files and run them in the new environment|N/A|

### OVHcloud implementation <a name="ovhcloud-implementation"></a>

|Feature|Description|Available formats|Migration model|Available documentation|
|---|---|---|---|---|
|Public image catalog|Catalog of classic system images, optimised by OVHcloud|qcow2|Setup new instances using a similar offer on another provider|N/A|

### Specific functionalities <a name="specific-functionalities"></a>

|Feature|Description|Available formats|Migration model|Available documentation|
|---|---|---|---|---|
|Keystone - Identity service|Client authentication, service discovery and authorization|N/A|Rebuild a new service|N/A|

### Architecture listing

All components of Public Cloud products are accessible through the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). This allows to visualize and manage the instances, volumes, object containers ... as well as the features that are attached to these components.

Horizon webUI also allows to view architecture components.

### Partner services

OVHcloud Partners are listed with the "Cloud Migration" keyword in the dedicated [directory](https://partner.ovhcloud.com/en-gb/directory/).

### Cost and fees

No additional billing is planned from OVHcloud for the migration features listed here.

### Retention of data after contract termination

On object storage, the data is retained 7 days after the termination of the service and then deleted permanently.
