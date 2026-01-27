---
title: "Backup Agent - Known Restrictions"
excerpt: "Discover the restrictions and limitations of the Backup Agent product"
updated: 2026-01-27
---

## Objective

This guide details the known restrictions and limitations of the Backup Agent product that you should be aware of before using the service.

## Known Restrictions

### Backup Policy

- The backup policy is restricted, you cannot modify it.
- You cannot configure a backup only on a list of files or folders.
- You cannot modify the date and time of backup triggers (this will be the subject of a future improvement).

### VSPC Access

- The user you receive is read-only, you cannot make modifications directly on the VSPC.

### Vault

- You cannot create additional vaults, they will be created automatically to ensure that your data is not hosted in the same datacenter where your Bare Metal server is located.
- You cannot change the vault on an agent.

### OS Limitations

- You can find the list of compatible OS for the Veeam Agent [here](https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13).

### Compatibility with other OVHcloud products

- Currently, the Backup Agent product is only compatible with Dedicated Servers, you cannot use your agent on other products.

## Go further

Join our [community of users](/links/community).

