---
title: Migrate a datastore between two PCCs
slug: migration-datastore
excerpt: Find out how to migrate a datastore from one PCC to another via the OVHcloud APIs
section: OVHcloud features
hidden: true
---

**Last updated 24th March 2021**

## Objective

Following the incident that occurred in the SBG datacentre, you can migrate the datastores from a PCC concerned by the incident to a destination PCC.

**Find out how to migrate a datastore from one PCC to another via the OVHcloud APIs**

## Requirements

- access to the [OVHcloud [API](https://api.ovh.com/)
- access to your [vSphere interface](../login-vsphere-interface/)

> [!warning]
>
> If your source PCC has [HDS](https://www.ovhcloud.com/en-gb/enterprise/certification-conformity/hds/) or [PCI-DSS](https://www.ovhcloud.com/en-gb/enterprise/certification-conformity/pci-dss/) certification, your destination PCC must have the same certification in order to retrieve the datastore.
>
> For more information, please refer to our guide on [Healthcare (HDS) or payment services (PCI DSS) compliance activation](../activate-pci-dss-option/).
>

## Instructions

If you are not familiar with OVHcloud APIs, please refer to our [First Steps with the OVHcloud APIs](../../api/first-steps-with-ovh-api/) guide.

### Step 1: retrieving the filer from the datastore

You must first target the filerId to migrate.

Log in to [https://api.ovh.com/](https://api.ovh.com/) and use the following call:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer

Enter the variables:

- serviceName: the name of the PCC located at sbg1a.
- datacenterId: the source datacentre ID

### Step 2: migrating datastore

> [!warning]
>
> The destination PCC must be located in a different zone to sbg1a.
>

Once the filerId has been identified, use the following call to migrate the datastore to the destination PCC:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/linkFilerFromSbg

Enter the variables:

- serviceName: the name of the destination PCC
- filerId: the filerId retrieved in the previous step.

Data replication can take several hours. When the migration is complete, you will receive an email confirming that the migration has been successful.

### Step 3: accessing the datastore from vSphere

In your [vSphere interface](../login-vsphere-interface/), go to the `Storage`{.action} view.

Replication will then appear on all hosts in the destination datacentre under the name `restore-000xxx` (xxx being the source datastore number).

> [!warning]
>
> The recovered datastore is read-only.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
