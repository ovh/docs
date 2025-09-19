---
title: How to wipe your data on a Dedicated Server
excerpt: Learn how to securely erase your data on OVHcloud Bare Metal Cloud services in compliance with NIST SP 800-88 Revision 1.
updated: 2025-09-18
---

## Objective

This guide explains how to securely wipe your data from OVHcloud Dedicated Servers in accordance with [NIST Special Publication 800-88 Revision 1](https://csrc.nist.gov/pubs/sp/800/88/r1/final).  
Wiping ensures that your data cannot be recovered when you reinstall, transfer, or decommission your server.

> [!warning]
> Once a wipe is performed, **your data cannot be recovered**. Always make backups of any information you want to keep before continuing.
>

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) in your OVHcloud account with administrative access
- Access to the [OVHcloud Control Panel](/links/manager)

## Concepts from NIST 800-88r1

- **Clear**: overwrites storage using the standard interface (for example, through a reinstallation).  
- **Purge**: more thorough sanitization that protects against advanced forensic recovery (for example, secure erase on SSD/NVMe).  
- **Destroy**: physical destruction of the media.

On Bare Metal Cloud, you will most often use **Clear** (via reinstallation) or **Purge** (via secure erase in rescue mode).

## Instructions

### Method 1 — Reinstallation (Clear)

1. Log in to the [OVHcloud Control Panel](https://www.ovh.com/manager).  
2. Go to `Bare Metal Cloud` > `Servers`.  
3. Select your server.  
4. Click **Reinstall**.  
5. Choose your operating system or template.  
6. Enable the **Erase existing partitions** option.  
7. Confirm the reinstallation.  
   - This overwrites existing partitions and user-accessible data (*Clear*).

### Method 2 — Secure Erase (Purge)

If you require a stronger wipe:

1. Boot your server into **Rescue Mode** from the Control Panel. You can find out how to access Rescue Mode in [this guide](/pages/bare_metal_cloud/dedicated_servers/rescue_mode). 
2. Connect to the server via SSH, or using the Remote KVM feature.
3. Identify your disks with:  

```bash
lsblk
```

4. Run a secure erase command depending on the disk type:  

**For HDD/SSD:**  
```bash
shred -vzn 3 /dev/sdX
```

This command uses several arguments:
   - *-v* : verbose, increases the detail in the output.
   - *-z* : adds a final overwrite with all zeros.
   - *-n 3* : overwrite three times (default). Can be set to 1 (faster, less secure) or up to 25 (maximum number of overwrite patterns).


**For NVMe:**  
```bash
nvme format /dev/nvme0n1 --verbose --ses=1
```

This command uses several arguments:
   - *--verbose* : increases the detail in the output.
   - *--ses=1* : performs a User Data Erase, overwriting the data with a fixed pattern determined by the storage device's firmware (e.g., all zeros). Can be set to 2 to perform a Cryptographic Erase instead, which deletes the encryption key, effectively rendering the data inaccessible.

5. Exit rescue mode and reboot the server.

## Verification

- After reinstallation, connect to the server to ensure the system boots with a fresh OS and no old data remains.  
- After secure erase, check the disk with `lsblk` — the drive should appear unallocated or with a new filesystem.  

## Go further

Join our [community of users](/links/community).