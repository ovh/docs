---
title: "Backup Agent - How Vault Works"
excerpt: "Learn how the Vault system works and the location of your backup data"
updated: 2026-01-23
---

## Objective

This guide explains how the Vault system works in the Backup Agent product and how your data is located and stored according to the location of your Bare Metal servers.

## Requirements
- Have ordered a Backup Agent service when ordering your Bare Metal server or later via the `Backup Agent`{.action} menu in your Control Panel.

## Instructions
### Vault Overview

A Vault is your storage space where your backup data is sent with each backup. Vaults are created automatically by OVHcloud to ensure that your data is not hosted in the same datacenter as your Bare Metal server.

This is based on our Object Storage buckets, which you can find at this [link](/links/public-cloud/object-storage)

You can find your Vaults in your Manager, in the Vaults section.
![Backup Agent Vault List](images/01-backup-agent-vault-list.png){.thumbnail}

### Location Principle

**Important rule:** Backup data is always sent to a Vault located in a different datacenter from where your Bare Metal server is located. This ensures the resilience and security of your data.

### Use Cases

Here are different scenarios illustrating how the Vault system works:

![Backup Agent Vault Use Cases](images/01-backup-agent-vault-use-cases.png){.thumbnail}

### Use Case 1: One Bare Metal Server in RBX

If you have a Bare Metal server located in **Roubaix (RBX)** and you order the Backup Agent:

- Your Bare Metal server with the Backup Agent installed is located in **RBX**.
- Your backup data is automatically sent to a Vault created in **Gravelines (GRA)**, named **backup-vault-gra1**.
- This ensures that your data is stored in a different datacenter from your server.

### Use Case 2: Two Bare Metal Servers in RBX and GRA

If you have two Bare Metal servers, one in **Roubaix (RBX)** and the other in **Gravelines (GRA)**:

- The Bare Metal server in **RBX** sends its data to **backup-vault-sbg-1** in **Gravelines**.
- The Bare Metal server in **GRA** sends its data to **backup-vault-gra-1** in **Strasbourg (SBG)**.
- Each server uses a Vault in a different datacenter from its own.

### Use Case 3: Three Bare Metal Servers in RBX, GRA and LIM

If you have three Bare Metal servers in different datacenters:

- The server in **RBX** sends its data to **backup-vault-gra-1** in **GRA**.
- The server in **GRA** sends its data to **backup-vault-sbg-1** in **SBG**.
- The server in **Limburg (LIM)** sends its data to **backup-vault-sbg-1** in **SBG**.
- Each server ensures that its data is stored in a distant datacenter.

### Use Case 4: Bare Metal Server in BHS with EU NIC

If you have a Bare Metal server in **Beauharnois (BHS)** with a European network interface:

- Your Bare Metal server is located in **BHS**.
- Your backup data is sent to **backup-vault-tor-1** in **Toronto (TOR)**.
- The Vault location is determined based on your server's network configuration.

## Important Points

- Vaults are created automatically by OVHcloud, you cannot create them manually.
- You cannot change the Vault for an agent once it is configured.
- The Vault location is always different from that of your Bare Metal server to ensure resilience.
- The Vault name generally follows the convention: `backup-vault-<location>-<number>`.

## Go further

Join our [community of users](/links/community).

