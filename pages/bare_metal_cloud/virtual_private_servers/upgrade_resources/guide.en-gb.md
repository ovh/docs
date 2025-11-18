---
title: "How to upgrade the resources of a VPS"
excerpt: "Find out how to upgrade your RAM, vCPU, or storage in the OVHcloud Control Panel"
updated: 2025-09-08
---

<style> details>summary { color:rgb(33, 153, 232) !important; cursor: pointer; } details>summary::before { content:'\25B6'; padding-right:1ch; } details[open]>summary::before { content:'\25BC'; } </style>

## Objective

Our VPS services offer flexibility, reliability, and performance for a variety of hosting needs. You can proceed with upgrading your RAM, vCPU, or storage in the [OVHcloud Control Panel](/links/manager).

**Learn how to add vCores, memory, and storage to your VPS service.** 

## Requirements

- A [Virtual Private Server](/links/bare-metal/vps) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

Log in to the [OVHcloud Control Panel](/links/manager), go to the `Bare Metal Cloud`{.action} section and select your server from `Virtual private servers`{.action}.

> [!primary]
>
> The upgrade options available in your Control Panel depend on the range and model of the selected VPS. The screenshots below are for the purpose of illustration and do not refer to a concrete VPS upgrade scenario.

From here you can upgrade your vCores (`1`), memory (`2`), or storage (`3`).

![Upgrade resources](images/vps_upgrade01.png){.thumbnail}

### 1. To add **vCores**

Under the **Home** tab in the **Your configuration** panel, click `Add vCores by upgrading to the higher range`{.action}.

Choose a new model and click `Next`{.action}.

![Upgrade resources](images/vps_upgrade02.png){.thumbnail}

Choose your memory and storage options and click `Next`{.action}.

![Upgrade resources](images/vps_upgrade03.png){.thumbnail}

Accept (`☑`{.action}) the **Terms & conditions** and click `Next`{.action}.

![Upgrade resources](images/vps_upgrade04.png){.thumbnail}

Review your changes and click `Order`{.action}.

![Upgrade resources](images/vps_upgrade05.png){.thumbnail}

### 2. To upgrade **Memory**

Under the **Home** tab in the **Your configuration** panel, click on the amount of memory you want. The options available depend on the VPS range you currently have.

In the pop‑up window, click `Confirm and pay`{.action} to finalize your order.

![Upgrade resources](images/vps_upgrade06.png){.thumbnail}

### 3. To upgrade **Storage**

Under the **Home** tab in the **Your configuration** panel, click on the amount of storage you want. The options available depend on the VPS range you currently have.

In the pop‑up window, click `Confirm and pay`{.action} to finalize your order.

![Upgrade resources](images/vps_upgrade07.png){.thumbnail}

See our dedicated guide for the next steps: [How to repartition a VPS after a storage upgrade](/pages/bare_metal_cloud/virtual_private_servers/upsize_vps_partition)

## FAQ

/// details | Will I have the same IP address?

Yes, you will keep the same IP address after upgrading your VPS.

///

/// details | Do I keep my data on the server?

Yes, after an upgrade you will still have your data. When upgrading your drive you may have to expand the partitions.

///

/// details | What happens to the backup/snapshot? Can I use it on the new VPS?

Yes. After upgrades you will still have access to your backups and snapshots.

///

/// details | What happens to the software license on the old VPS? Can they be automatically moved over to the new VPS?

If you have an active license, it will remain attached to the VPS. The pricing may change based on the license agreement or requirements with the provider.  
If there are any changes to the license, they will be explained before upgrading the VPS.

///

/// details | Would the bandwidth change?

In some cases the bandwidth may change, specifically when moving from a lower‑tier VPS to the next tier.

///

/// details | Would this upgrade be immediate, or would I have time to use both at the same time (configure, transfer data, etc.)?

The upgrade will be effective immediately, keeping all of your data. Upgrading will allocate more resources to your existing VPS.

///


## Go further

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

Join our [community of users](/links/community).