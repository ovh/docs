---
title: "Object Storage - Lifecycle and replication use cases"
excerpt: "Find out how to combine Object Storage lifecycle policies and asynchronous replication to address advanced data management use cases"
updated: 2026-04-29
---

## Objective

OVHcloud Object Storage offers two powerful automation features that, when combined, can address a wide range of production data management challenges:

- **Lifecycle policies** automate transitions between storage classes (Standard → Infrequent Access → Active Archive → Cold Archive) and the expiration (deletion) of objects based on rules you define.
- **Asynchronous replication** automatically copies objects from a source bucket to one or more destination buckets, within the same region or across different regions.

Used in isolation, each feature already provides significant value. Used together, they unlock architectures that are simultaneously cost-efficient, resilient, and compliant.

This guide covers 7 production-ready use cases combining both features:

1. [Regulatory archiving and compliance](#use-case-1-regulatory-archiving-and-compliance)
2. [Disaster recovery](#use-case-2-disaster-recovery)
3. [Data lake and automated tiering](#use-case-3-data-lake-and-automated-tiering)
4. [Geographic content distribution](#use-case-4-geographic-content-distribution)
5. [Dev/Staging environment management](#use-case-5-devstaging-environment-management)
6. [Logs and observability](#use-case-6-logs-and-observability)
7. [SaaS multi-tenant backup](#use-case-7-saas-multi-tenant-backup)

## Requirements

- An active [OVHcloud Public Cloud project](/links/public-cloud/public-cloud).
- Object Storage buckets created in one or more OVHcloud regions. Refer to our guide [Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) if needed.
- A working understanding of OVHcloud storage classes. Refer to our guide [Choosing the right storage class for your needs](/pages/storage_and_backup/object_storage/s3_choosing_the_right_storage_class_for_your_needs).
- A working understanding of lifecycle policies. Refer to our guide [Object Storage - Managing object lifecycle](/pages/storage_and_backup/object_storage/s3_bucket_lifecycle).
- A working understanding of asynchronous replication. Refer to our guide [Object Storage - Mastering asynchronous replication across your buckets](/pages/storage_and_backup/object_storage/s3_asynchronous_replication).
- **For CLI steps only**: the AWS CLI installed and configured with your OVHcloud Object Storage credentials and endpoint. Refer to our guide [Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).

> [!primary]
> Every step can be performed via the **OVHcloud Control Panel** or the **AWS CLI**. Both approaches are described for each step. CLI examples use the OVHcloud endpoint format:
> ```bash
> --endpoint-url https://s3.<region>.io.cloud.ovh.net
> ```
> Replace `<region>` with your actual region slug (e.g. `gra`, `sbg`, `de`, `uk`), and replace all placeholder bucket names and prefixes with your own values.

## Storage class mapping reference

All CLI examples in this guide use the S3<sup>1</sup> API `StorageClass` values as required for **write operations** (PUT, lifecycle transitions, replication destination) on the OVHcloud `.io` endpoint. The mapping differs between **3-AZ regions** and **1-AZ regions**.

> [!primary]
> The mapping below reflects the current state as of **2026-01-03**. Refer to the [Object Storage - Endpoints and geoavailability](/pages/storage_and_backup/object_storage/s3_location) guide for the full and up-to-date reference.

**3-AZ regions (e.g. Paris `eu-west-par`, Milan `eu-south-mil`)**

| S3 API `StorageClass` value | OVHcloud storage tier |
|---|---|
| `EXPRESS_ONEZONE` | High Performance |
| `STANDARD` (also `INTELLIGENT_TIERING` or default) | Standard |
| `STANDARD_IA` (also `ONEZONE_IA`) | Infrequent Access |
| `GLACIER_IR` (also `GLACIER`) | Active Archive |
| `DEEP_ARCHIVE` | Cold Archive |

**1-AZ regions (e.g. GRA, SBG, DE, UK, BHS, WAW, ...)**

| S3 API `StorageClass` value | OVHcloud storage tier |
|---|---|
| `EXPRESS_ONEZONE` | High Performance |
| `STANDARD` (also `INTELLIGENT_TIERING` or default) | Standard |
| `STANDARD_IA` (also `ONEZONE_IA`, `GLACIER_IR`, `GLACIER`, `DEEP_ARCHIVE`) | Infrequent Access |

> [!warning]
> In **1-AZ regions**, `GLACIER_IR`, `GLACIER`, and `DEEP_ARCHIVE` all map to **Infrequent Access** — there are no deeper archive tiers available. Cold Archive is currently available in 3-AZ regions only, and only in Paris (`eu-west-par`).

> [!warning]
> This mapping applies to the `.io` endpoint only. The legacy `.perf` endpoint uses a different mapping and is maintained for backward compatibility purposes only.

## Use case 1 - Regulatory archiving and compliance

### Context

Organisations in regulated industries (finance, healthcare, legal) must retain certain data for legally mandated periods — often 5 to 10 years — while keeping storage costs under control and ensuring data is available in a secondary jurisdiction if required. A typical requirement combines:

- Automatic transition to cheaper storage classes as data ages
- A compliant copy in a geographically separate region

### Architecture

| Bucket | Region | Role |
|--------|--------|------|
| `compliance-primary-<region>` | e.g. GRA | Receives all new objects; applies the lifecycle transitions |
| `compliance-archive-<region2>` | e.g. DE | Replication destination; receives a copy of every object for long-term retention |

The lifecycle policy on the **primary bucket** handles cost optimisation. Asynchronous replication to the **secondary bucket** handles geographic redundancy and jurisdiction requirements. The secondary bucket can have its own, independent lifecycle policy for long-term retention.

### Step 1 - Enable versioning on both buckets

Asynchronous replication requires versioning to be enabled on both the source and destination buckets.

**Via the OVHcloud Control Panel**

Go to the [Public Cloud](/links/control-panel/publiccloud-projects) section of your OVHcloud Control Panel and select your project. Click `Object Storage`{.action} in the left-hand menu, then click the name of your source bucket (`compliance-primary-<region>`) from the `My containers`{.action} tab. In the `General information`{.action} tab, enable versioning and click `Confirm`{.action}. Repeat this operation for the destination bucket (`compliance-archive-<region2>`).

**Via the AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket compliance-primary-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket compliance-archive-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

### Step 2 - Configure replication on the primary bucket

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your source bucket, then select the `Replication`{.action} tab. Click `Add a replication rule`{.action}. Set the destination bucket to `compliance-archive-<region2>`, set the destination storage class to **Standard**, enable **Replicating delete markers**, and click `Create`{.action}.

**Via the AWS CLI**

Create a file named `replication-compliance.json`:

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "replicate-all-to-compliance-region",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {},
      "DeleteMarkerReplication": { "Status": "Enabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::compliance-archive-<region2>",
        "StorageClass": "STANDARD"
      }
    }
  ]
}
```

Apply it:

```bash
aws s3api put-bucket-replication \
  --bucket compliance-primary-<region> \
  --replication-configuration file://replication-compliance.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 3 - Apply the lifecycle policy on the primary bucket

This configuration transitions objects through Infrequent Access, Active Archive, and Cold Archive as data ages. Archive tiers are only available in 3-AZ regions.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your source bucket and select the `Lifecycle`{.action} tab. Click `Create a rule`{.action}. Leave the prefix filter empty. For **3-AZ regions**, add three transition actions: **Infrequent Access** at day 30, **Active Archive** at day 90, and **Cold Archive** at day 365. For **1-AZ regions**, add only the **Infrequent Access** transition at day 30. Click `Create rule`{.action}.

**Via the AWS CLI**

Create a file named `lifecycle-compliance.json`:

> [!primary]
> The example below targets a **3-AZ region** (e.g. Paris `eu-west-par`). It uses `GLACIER_IR` for Active Archive and `DEEP_ARCHIVE` for Cold Archive, both available in 3-AZ only. For **1-AZ regions**, remove both archive transitions — only `STANDARD_IA` is available.

```json
{
  "Rules": [
    {
      "ID": "compliance-tiering",
      "Status": "Enabled",
      "Filter": {},
      "Transitions": [
        { "Days": 30,  "StorageClass": "STANDARD_IA" },
        { "Days": 90,  "StorageClass": "GLACIER_IR" },
        { "Days": 365, "StorageClass": "DEEP_ARCHIVE" }
      ]
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket compliance-primary-<region> \
  --lifecycle-configuration file://lifecycle-compliance.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 4 - Apply a long-term retention lifecycle on the secondary bucket

This configuration retains objects for 7 years (2555 days) before expiration.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your destination bucket and select the `Lifecycle`{.action} tab. Click `Create a rule`{.action}. Leave the prefix filter empty. Add an expiration action set to **2555 days**. Click `Create rule`{.action}.

**Via the AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "long-term-retention",
      "Status": "Enabled",
      "Filter": {},
      "Expiration": { "Days": 2555 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket compliance-archive-<region2> \
  --lifecycle-configuration file://lifecycle-archive.json \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

> [!primary]
> Replication copies the object at the time of its creation. If the object transitions to a cheaper storage class on the primary bucket, the replica in the secondary bucket retains its own storage class independently. This means you can optimise costs differently on each side.

## Use case 2 - Disaster recovery

### Context

A disaster recovery (DR) strategy for Object Storage requires a copy of all data in a remote region, with a recovery time objective (RTO) and recovery point objective (RPO) that align with your SLA. The typical pattern is:

- **Primary bucket**: short retention, Standard storage class, low cost
- **DR bucket**: full copy in a remote region, longer retention in Infrequent Access class to reduce standby cost

Asynchronous replication ensures the DR bucket stays up to date (approximately 15 minutes lag). Lifecycle policies on the primary bucket keep costs down by expiring objects that are already safely replicated.

### Architecture

| Bucket | Region | Role |
|--------|--------|------|
| `dr-primary-<region>` | e.g. GRA | Production data; short retention lifecycle |
| `dr-backup-<region2>` | e.g. UK | DR replica; Infrequent Access class; longer retention |

### Step 1 - Enable versioning on both buckets

**Via the OVHcloud Control Panel**

Go to the [Public Cloud](/links/control-panel/publiccloud-projects) section of your OVHcloud Control Panel and select your project. Click `Object Storage`{.action} in the left-hand menu. For each bucket (`dr-primary-<region>` and `dr-backup-<region2>`), click its name from the `My containers`{.action} tab, then in the `General information`{.action} tab, enable versioning and click `Confirm`{.action}.

**Via the AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket dr-primary-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket dr-backup-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

### Step 2 - Configure replication to the DR bucket

Replicated objects are stored directly in Infrequent Access on the DR side to reduce standby storage costs.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your primary bucket and select the `Replication`{.action} tab. Click `Add a replication rule`{.action}. Set the destination to `dr-backup-<region2>`, set the destination storage class to **Infrequent Access**, disable **Replicating delete markers** to protect the DR copy from accidental deletions, and click `Create`{.action}.

**Via the AWS CLI**

Create a file named `replication-dr.json`:

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "dr-replication",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {},
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::dr-backup-<region2>",
        "StorageClass": "STANDARD_IA"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket dr-primary-<region> \
  --replication-configuration file://replication-dr.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 3 - Apply a short-retention lifecycle on the primary bucket

Objects expire after 60 days; non-current versions are cleaned up after 7 days.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your primary bucket and select the `Lifecycle`{.action} tab. Click `Create a rule`{.action}. Leave the prefix empty. Add an expiration action set to **60 days** and a non-current version expiration set to **7 days**. Click `Create rule`{.action}.

**Via the AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "primary-short-retention",
      "Status": "Enabled",
      "Filter": {},
      "Expiration": { "Days": 60 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 7 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket dr-primary-<region> \
  --lifecycle-configuration file://lifecycle-dr-primary.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 4 - Apply a longer retention lifecycle on the DR bucket

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your DR bucket and select the `Lifecycle`{.action} tab. Click `Create a rule`{.action}. Leave the prefix empty. Set expiration to **365 days** and non-current version expiration to **30 days**. Click `Create rule`{.action}.

**Via the AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "dr-retention",
      "Status": "Enabled",
      "Filter": {},
      "Expiration": { "Days": 365 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 30 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket dr-backup-<region2> \
  --lifecycle-configuration file://lifecycle-dr-backup.json \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

> [!warning]
> **Replicating delete markers** is disabled in the DR replication rule above. This prevents deletions on the primary bucket from propagating to the DR bucket, protecting the replica against accidental or malicious deletions. Adjust this setting if your use case requires full consistency between both buckets.

## Use case 3 - Data lake and automated tiering

### Context

Data lake architectures generate large volumes of objects that are queried frequently when fresh (hot), occasionally after a few weeks (warm), and rarely beyond a few months (cold). Storing everything at the same storage class is unnecessarily expensive. The combination of lifecycle tiering on a central bucket and replication to an analytics-dedicated bucket enables:

- Automatic cost reduction as data ages on the primary lake bucket
- A stable, always-Standard copy available to analytics tools in another region, unaffected by the tiering transitions

### Architecture

| Bucket | Region | Role |
|--------|--------|------|
| `datalake-main-<region>` | e.g. GRA | Primary data lake; tiered lifecycle |
| `datalake-analytics-<region2>` | e.g. DE | Analytics replica; remains in Standard class |

### Step 1 - Enable versioning on both buckets

**Via the OVHcloud Control Panel**

Go to the [Public Cloud](/links/control-panel/publiccloud-projects) section of your OVHcloud Control Panel and select your project. Click `Object Storage`{.action} in the left-hand menu. For each bucket, click its name from the `My containers`{.action} tab, then in the `General information`{.action} tab, enable versioning and click `Confirm`{.action}.

**Via the AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket datalake-main-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket datalake-analytics-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

### Step 2 - Configure replication to the analytics bucket

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your main data lake bucket and select the `Replication`{.action} tab. Click `Add a replication rule`{.action}. Leave the prefix filter empty. Set the destination to `datalake-analytics-<region2>`, set the destination storage class to **Standard**, disable **Replicating delete markers**, and click `Create`{.action}.

**Via the AWS CLI**

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "replicate-to-analytics",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {},
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::datalake-analytics-<region2>",
        "StorageClass": "STANDARD"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket datalake-main-<region> \
  --replication-configuration file://replication-datalake.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 3 - Apply prefix-based tiering lifecycle on the main bucket

This configuration applies different tiering schedules to raw data and processed data using prefix filters.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your main bucket and select the `Lifecycle`{.action} tab. Use `Create a rule`{.action} to add two rules separately:

- **Rule 1** - prefix `raw/`: transitions to **Infrequent Access** at day 30, **Active Archive** at day 90, **Cold Archive** at day 365 (3-AZ only)
- **Rule 2** - prefix `processed/`: transitions to **Infrequent Access** at day 60, **Active Archive** at day 180 (3-AZ only)

**Via the AWS CLI**

> [!primary]
> `GLACIER_IR` maps to Active Archive and `DEEP_ARCHIVE` maps to Cold Archive — both are available in **3-AZ regions** only. For **1-AZ regions**, use only `STANDARD_IA`.

```json
{
  "Rules": [
    {
      "ID": "tier-raw-data",
      "Status": "Enabled",
      "Filter": { "Prefix": "raw/" },
      "Transitions": [
        { "Days": 30,  "StorageClass": "STANDARD_IA" },
        { "Days": 90,  "StorageClass": "GLACIER_IR" },
        { "Days": 365, "StorageClass": "DEEP_ARCHIVE" }
      ]
    },
    {
      "ID": "tier-processed-data",
      "Status": "Enabled",
      "Filter": { "Prefix": "processed/" },
      "Transitions": [
        { "Days": 60,  "StorageClass": "STANDARD_IA" },
        { "Days": 180, "StorageClass": "GLACIER_IR" }
      ]
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket datalake-main-<region> \
  --lifecycle-configuration file://lifecycle-datalake.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

> [!primary]
> The analytics replica keeps all objects in Standard class regardless of transitions applied on the source. Your analytics tools always access immediately available data without retrieval delays or additional restore costs.

## Use case 4 - Geographic content distribution

### Context

Organisations distributing static assets (media files, software packages, firmware updates, documentation) to users in multiple regions benefit from keeping copies close to their end users. The combination of replication and lifecycle gives you:

- Automatic propagation of new content to regional buckets
- Automatic expiration of outdated versions locally, preventing storage drift over time

### Architecture

| Bucket | Region | Role |
|--------|--------|------|
| `content-origin-<region>` | e.g. GRA | Master origin; all content is uploaded here |
| `content-eu-west-<region2>` | e.g. UK | Regional edge replica |
| `content-eu-central-<region3>` | e.g. DE | Regional edge replica |

### Step 1 - Enable versioning on all buckets

**Via the OVHcloud Control Panel**

Go to the [Public Cloud](/links/control-panel/publiccloud-projects) section of your OVHcloud Control Panel and select your project. Click `Object Storage`{.action} in the left-hand menu. For each of the three buckets, click its name from the `My containers`{.action} tab, then in the `General information`{.action} tab, enable versioning and click `Confirm`{.action}.

**Via the AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket content-origin-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket content-eu-west-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket content-eu-central-<region3> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region3>.io.cloud.ovh.net
```

### Step 2 - Configure multi-destination replication on the origin bucket

OVHcloud Object Storage supports multiple replication rules on a single bucket.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your origin bucket and select the `Replication`{.action} tab. Click `Add a replication rule`{.action}. Leave the prefix empty, set the destination to `content-eu-west-<region2>`, enable **Replicating delete markers**, and click `Create`{.action}. Click `Add a replication rule`{.action} again to add a second rule with destination `content-eu-central-<region3>` and the same settings.

**Via the AWS CLI**

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "replicate-to-eu-west",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": {},
      "DeleteMarkerReplication": { "Status": "Enabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::content-eu-west-<region2>",
        "StorageClass": "STANDARD"
      }
    },
    {
      "ID": "replicate-to-eu-central",
      "Status": "Enabled",
      "Priority": 2,
      "Filter": {},
      "DeleteMarkerReplication": { "Status": "Enabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::content-eu-central-<region3>",
        "StorageClass": "STANDARD"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket content-origin-<region> \
  --replication-configuration file://replication-content.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 3 - Apply expiration lifecycle on the regional buckets

Remove non-current versions after 30 days to prevent accumulation of stale content.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of a regional bucket and select the `Lifecycle`{.action} tab. Click `Create a rule`{.action}. Leave the prefix empty. Set non-current version expiration to **30 days** and abort incomplete multipart upload cleanup to **7 days**. Click `Create rule`{.action}. Repeat for the other regional bucket.

**Via the AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "expire-noncurrent-versions",
      "Status": "Enabled",
      "Filter": {},
      "NoncurrentVersionExpiration": { "NoncurrentDays": 30 },
      "AbortIncompleteMultipartUpload": { "DaysAfterInitiation": 7 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket content-eu-west-<region2> \
  --lifecycle-configuration file://lifecycle-regional.json \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net

aws s3api put-bucket-lifecycle-configuration \
  --bucket content-eu-central-<region3> \
  --lifecycle-configuration file://lifecycle-regional.json \
  --endpoint-url https://s3.<region3>.io.cloud.ovh.net
```

> [!primary]
> With **Replicating delete markers** enabled, when you delete an object on the origin bucket, the delete marker propagates to all regional replicas. The `NoncurrentVersionExpiration` rule then cleans up the superseded version data after 30 days automatically — no manual cleanup is required.

## Use case 5 - Dev/Staging environment management

### Context

Development and staging environments often need a realistic copy of production data to run meaningful tests. Without automation, data synchronisation is manual and error-prone. The combination of replication and aggressive lifecycle policies enables:

- Automatic one-way sync from production to staging using replication
- Automatic cleanup of staging data using short lifecycle expiration rules, preventing cost accumulation on non-production environments

### Architecture

| Bucket | Region | Role |
|--------|--------|------|
| `prod-data-<region>` | e.g. GRA | Production bucket; standard lifecycle |
| `staging-data-<region>` | e.g. GRA (same region) | Staging replica; aggressive expiration |

> [!primary]
> Replication between two buckets in the same region is supported and incurs no egress cost. This is the typical configuration for dev/staging use cases where geographic separation is not required.

### Step 1 - Enable versioning on both buckets

**Via the OVHcloud Control Panel**

Go to the [Public Cloud](/links/control-panel/publiccloud-projects) section of your OVHcloud Control Panel and select your project. Click `Object Storage`{.action} in the left-hand menu. For each bucket, click its name from the `My containers`{.action} tab, then in the `General information`{.action} tab, enable versioning and click `Confirm`{.action}.

**Via the AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket prod-data-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket staging-data-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 2 - Configure replication from production to staging

Only the `datasets/` prefix is replicated to limit the volume of data copied to staging.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your production bucket and select the `Replication`{.action} tab. Click `Add a replication rule`{.action}. Set the prefix filter to `datasets/`, set the destination to `staging-data-<region>`, leave the storage class as **Standard**, disable **Replicating delete markers**, and click `Create`{.action}.

**Via the AWS CLI**

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "prod-to-staging",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": { "Prefix": "datasets/" },
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::staging-data-<region>",
        "StorageClass": "STANDARD"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket prod-data-<region> \
  --replication-configuration file://replication-staging.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 3 - Apply aggressive expiration on the staging bucket

Objects expire after 14 days; non-current versions are cleaned up after 3 days.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your staging bucket and select the `Lifecycle`{.action} tab. Click `Create a rule`{.action}. Leave the prefix empty. Set expiration to **14 days**, non-current version expiration to **3 days**, and abort incomplete multipart upload cleanup to **1 day**. Click `Create rule`{.action}.

**Via the AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "staging-cleanup",
      "Status": "Enabled",
      "Filter": {},
      "Expiration": { "Days": 14 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 3 },
      "AbortIncompleteMultipartUpload": { "DaysAfterInitiation": 1 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket staging-data-<region> \
  --lifecycle-configuration file://lifecycle-staging.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

> [!warning]
> **Replicating delete markers** is disabled in the replication rule above. This ensures that deletions in the production bucket do not propagate to staging, allowing staging environments to continue working with their local copy of the data even after production objects have been removed.

## Use case 6 - Logs and observability

### Context

Log data has heterogeneous retention requirements depending on its type:

- **Access logs**: short retention (30 days), high volume, low value after a few weeks
- **Application error logs**: medium retention (90 days), useful for incident post-mortems
- **Audit and security logs**: long retention (1 to 7 years), required for compliance

The combination of prefix-based lifecycle policies with replication to a centralised SIEM or security bucket enables granular, automated retention management without manual intervention.

### Architecture

| Bucket | Region | Role |
|--------|--------|------|
| `logs-primary-<region>` | e.g. GRA | Receives all logs under typed prefixes |
| `logs-security-<region2>` | e.g. DE | Security/SIEM replica; receives only audit logs |

### Step 1 - Enable versioning on both buckets

**Via the OVHcloud Control Panel**

Go to the [Public Cloud](/links/control-panel/publiccloud-projects) section of your OVHcloud Control Panel and select your project. Click `Object Storage`{.action} in the left-hand menu. For each bucket, click its name from the `My containers`{.action} tab, then in the `General information`{.action} tab, enable versioning and click `Confirm`{.action}.

**Via the AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket logs-primary-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket logs-security-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

### Step 2 - Configure selective replication for audit logs only

Only the `audit/` prefix is replicated to the security bucket.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your primary logs bucket and select the `Replication`{.action} tab. Click `Add a replication rule`{.action}. Set the prefix filter to `audit/`, set the destination to `logs-security-<region2>`, set the destination storage class to **Infrequent Access**, disable **Replicating delete markers**, and click `Create`{.action}.

**Via the AWS CLI**

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "replicate-audit-to-security",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": { "Prefix": "audit/" },
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::logs-security-<region2>",
        "StorageClass": "STANDARD_IA"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket logs-primary-<region> \
  --replication-configuration file://replication-logs.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 3 - Apply differentiated lifecycle policies on the primary bucket

Apply separate expiration and transition rules per log type using prefix filters.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your primary logs bucket and select the `Lifecycle`{.action} tab. Use `Create a rule`{.action} to create three rules:

- **Rule 1** - prefix `access/`: expiration at **30 days**
- **Rule 2** - prefix `errors/`: transition to **Infrequent Access** at day 30, expiration at **90 days**
- **Rule 3** - prefix `audit/`: transition to **Infrequent Access** at day 90, **Active Archive** at day 365 (3-AZ only), **Cold Archive** at day 730 (3-AZ only), expiration at **2555 days**

**Via the AWS CLI**

> [!primary]
> `GLACIER_IR` (Active Archive) and `DEEP_ARCHIVE` (Cold Archive) are available in **3-AZ regions** only. For **1-AZ regions**, use only `STANDARD_IA` for the `audit/` rule.

```json
{
  "Rules": [
    {
      "ID": "expire-access-logs",
      "Status": "Enabled",
      "Filter": { "Prefix": "access/" },
      "Expiration": { "Days": 30 }
    },
    {
      "ID": "expire-error-logs",
      "Status": "Enabled",
      "Filter": { "Prefix": "errors/" },
      "Transitions": [
        { "Days": 30, "StorageClass": "STANDARD_IA" }
      ],
      "Expiration": { "Days": 90 }
    },
    {
      "ID": "archive-audit-logs",
      "Status": "Enabled",
      "Filter": { "Prefix": "audit/" },
      "Transitions": [
        { "Days": 90,  "StorageClass": "STANDARD_IA" },
        { "Days": 365, "StorageClass": "GLACIER_IR" },
        { "Days": 730, "StorageClass": "DEEP_ARCHIVE" }
      ],
      "Expiration": { "Days": 2555 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket logs-primary-<region> \
  --lifecycle-configuration file://lifecycle-logs.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 4 - Apply long-term retention on the security bucket

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your security bucket and select the `Lifecycle`{.action} tab. Click `Create a rule`{.action}. Leave the prefix empty. For **3-AZ regions**, add transitions: **Infrequent Access** at day 90, **Active Archive** at day 365, and **Cold Archive** at day 730. For **1-AZ regions**, add only the **Infrequent Access** transition at day 90. Set expiration to **2555 days**. Click `Create rule`{.action}.

**Via the AWS CLI**

> [!primary]
> `GLACIER_IR` (Active Archive) and `DEEP_ARCHIVE` (Cold Archive) are available in **3-AZ regions** only. For **1-AZ regions**, use only `STANDARD_IA`.

```json
{
  "Rules": [
    {
      "ID": "security-long-term-retention",
      "Status": "Enabled",
      "Filter": {},
      "Transitions": [
        { "Days": 90,  "StorageClass": "STANDARD_IA" },
        { "Days": 365, "StorageClass": "GLACIER_IR" },
        { "Days": 730, "StorageClass": "DEEP_ARCHIVE" }
      ],
      "Expiration": { "Days": 2555 }
    }
  ]
}
```

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket logs-security-<region2> \
  --lifecycle-configuration file://lifecycle-security.json \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

> [!primary]
> By structuring your log pipeline with typed prefixes (`access/`, `errors/`, `audit/`), you can apply precise lifecycle rules to each category independently. Adding a new log type only requires a new prefix and a new lifecycle rule — no pipeline refactoring is needed.

## Use case 7 - SaaS multi-tenant backup

### Context

SaaS platforms serving multiple tenants often need to provide per-tenant backup and data isolation guarantees. Common requirements include:

- Per-tenant data isolation (each tenant's data stored under a dedicated prefix)
- Per-tenant retention policies reflecting contractual SLAs
- Offsite replication of tenant data for resilience and compliance

This use case demonstrates a **prefix-per-tenant** model within a shared bucket, combined with tag-based lifecycle rules to enforce per-tenant policies.

### Architecture

| Bucket | Region | Role |
|--------|--------|------|
| `saas-tenants-<region>` | e.g. GRA | Primary multi-tenant bucket; per-prefix data isolation |
| `saas-backup-<region2>` | e.g. DE | Offsite backup replica for all tenants |

Objects are stored under `tenants/<tenant-id>/` prefixes. Each tenant's objects are tagged at upload time with a `tenant-tier` tag (e.g. `standard` or `premium`), enabling differentiated lifecycle policies.

### Step 1 - Enable versioning on both buckets

**Via the OVHcloud Control Panel**

Go to the [Public Cloud](/links/control-panel/publiccloud-projects) section of your OVHcloud Control Panel and select your project. Click `Object Storage`{.action} in the left-hand menu. For each bucket, click its name from the `My containers`{.action} tab, then in the `General information`{.action} tab, enable versioning and click `Confirm`{.action}.

**Via the AWS CLI**

```bash
aws s3api put-bucket-versioning \
  --bucket saas-tenants-<region> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net

aws s3api put-bucket-versioning \
  --bucket saas-backup-<region2> \
  --versioning-configuration Status=Enabled \
  --endpoint-url https://s3.<region2>.io.cloud.ovh.net
```

### Step 2 - Upload objects with tenant metadata tags

Objects must be tagged at upload time so that tag-based lifecycle rules can identify them correctly.

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your tenants bucket. Select the `Objects`{.action} tab and click `Add objects`{.action}. Before confirming the upload, expand the **Tags** section. Add a tag with key `tenant-id` and value `tenant-abc123`, and a second tag with key `tenant-tier` and value `premium`. Select your file and click `Import`{.action}.

**Via the AWS CLI**

```bash
aws s3api put-object \
  --bucket saas-tenants-<region> \
  --key "tenants/tenant-abc123/backup-2025-04-15.tar.gz" \
  --body backup-2025-04-15.tar.gz \
  --tagging "tenant-id=tenant-abc123&tenant-tier=premium" \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 3 - Configure replication to the backup bucket

**Via the OVHcloud Control Panel**

From the `My containers`{.action} tab, click the name of your tenants bucket and select the `Replication`{.action} tab. Click `Add a replication rule`{.action}. Set the prefix filter to `tenants/`, set the destination to `saas-backup-<region2>`, set the destination storage class to **Infrequent Access**, disable **Replicating delete markers**, and click `Create`{.action}.

**Via the AWS CLI**

```json
{
  "Role": "",
  "Rules": [
    {
      "ID": "replicate-all-tenants",
      "Status": "Enabled",
      "Priority": 1,
      "Filter": { "Prefix": "tenants/" },
      "DeleteMarkerReplication": { "Status": "Disabled" },
      "Destination": {
        "Bucket": "arn:aws:s3:::saas-backup-<region2>",
        "StorageClass": "STANDARD_IA"
      }
    }
  ]
}
```

```bash
aws s3api put-bucket-replication \
  --bucket saas-tenants-<region> \
  --replication-configuration file://replication-saas.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

### Step 4 - Apply tag-based lifecycle policies for differentiated retention

> [!primary]
> Tag-based lifecycle filters are currently configurable via the AWS CLI. For tag-based rules in the OVHcloud Control Panel, check the `Lifecycle`{.action} tab of your bucket — support for tag filters may have been added since this guide was published.

**Via the AWS CLI**

```json
{
  "Rules": [
    {
      "ID": "standard-tier-retention",
      "Status": "Enabled",
      "Filter": {
        "Tag": { "Key": "tenant-tier", "Value": "standard" }
      },
      "Transitions": [
        { "Days": 30, "StorageClass": "STANDARD_IA" }
      ],
      "Expiration": { "Days": 90 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 7 }
    },
    {
      "ID": "premium-tier-retention",
      "Status": "Enabled",
      "Filter": {
        "Tag": { "Key": "tenant-tier", "Value": "premium" }
      },
      "Transitions": [
        { "Days": 60,  "StorageClass": "STANDARD_IA" },
        { "Days": 180, "StorageClass": "GLACIER_IR" },
        { "Days": 365, "StorageClass": "DEEP_ARCHIVE" }
      ],
      "Expiration": { "Days": 730 },
      "NoncurrentVersionExpiration": { "NoncurrentDays": 30 }
    }
  ]
}
```

> [!primary]
> `GLACIER_IR` (Active Archive) and `DEEP_ARCHIVE` (Cold Archive) in the `premium` rule are available in **3-AZ regions** only. For **1-AZ regions**, use only `STANDARD_IA`.

```bash
aws s3api put-bucket-lifecycle-configuration \
  --bucket saas-tenants-<region> \
  --lifecycle-configuration file://lifecycle-saas.json \
  --endpoint-url https://s3.<region>.io.cloud.ovh.net
```

> [!warning]
> Tag-based lifecycle rules require that each object is tagged correctly at upload time. Consider enforcing this at the application layer to ensure consistency across all tenant uploads. If a tenant's tier changes, re-tagging existing objects will cause the appropriate lifecycle rule to apply going forward.

## Summary

The table below provides a quick reference for the key configuration choices across all 7 use cases:

| Use case | Replication scope | Replicating delete markers | Primary lifecycle | Secondary lifecycle |
|----------|------------------|--------------------------|-------------------|---------------------|
| Regulatory archiving | All objects | Enabled | Tiering (30 → 90 → 365 days) | Expiration at 7 years |
| Disaster recovery | All objects | Disabled | Expiration at 60 days | Expiration at 1 year |
| Data lake tiering | All objects | Disabled | Tiering by prefix | None (Standard class retained) |
| Geo content distribution | All objects | Enabled | None on origin | Noncurrent version expiration |
| Dev/Staging sync | Prefix filter (`datasets/`) | Disabled | Standard | Expiration at 14 days |
| Logs & observability | Prefix filter (`audit/`) | Disabled | Per-prefix differentiated expiration | Long-term retention + tiering |
| SaaS multi-tenant | Prefix filter (`tenants/`) | Disabled | Tag-based differentiated retention | Infrequent Access (all tenants) |

> [!warning]
> Object Storage lifecycle rules are evaluated once per day. There may be a delay of up to 24 hours between the moment an object meets the criteria for a transition or expiration and the moment the action is actually performed. During this delay, objects continue to be billed at their current storage class rate.

## Go further

- [Object Storage - Managing object lifecycle](/pages/storage_and_backup/object_storage/s3_bucket_lifecycle)
- [Object Storage - Mastering asynchronous replication across your buckets](/pages/storage_and_backup/object_storage/s3_asynchronous_replication)
- [Object Storage - Choosing the right storage class for your needs](/pages/storage_and_backup/object_storage/s3_choosing_the_right_storage_class_for_your_needs)
- [Object Storage - Getting started with Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage)
- [Object Storage - Endpoints and geoavailability](/pages/storage_and_backup/object_storage/s3_location)

Join our [community of users](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
