---
title: Migrating a Block Storage volume to an encrypted LUKS volume
excerpt: "Learn how to migrate a Block Storage volume from non-encrypted to encrypted (LUKS), keeping your data secure throughout the process"
updated: 2025-10-21
---

## Objective

OVHcloud now offers Block Storage volumes encrypted with LUKS. Currently, it is not possible to directly convert an existing volume to a LUKS encrypted one using the retype option, nor to back up and restore it as a LUKS volume.

This guide explains how to migrate your data from a standard Block Storage volume to a new LUKS encrypted volume by creating a new volume and copying your data across safely.

## Requirements

- A [Public Cloud instance](/links/public-cloud/compute) in your OVHcloud account
- An existing Block Storage volume (source)
- Administrator (root or sudo) access to your instance

## Instructions

### Step 1: Create a LUKS volume

In your [OVHcloud Control Panel](/links/manager), create a new Block Storage volume and select the `LUKS` type.

> [!primary]
> 
> Once attached to your instance, the LUKS volume behaves like a standard volume. All encryption and unlocking are handled automatically by the OVHcloud infrastructure.
>

### Step 2: Attach the volumes to your instance

1. Attach both volumes to your instance:

    - Source volume (non encrypted)
    - Target volume (LUKS encrypted)

2. Verify that both volumes are visible on your instance:

    ```bash
    lsblk
    ```

    Example output:

    ```bash
    /dev/vdb # source volume 
    /dev/vdc # target LUKS volume
    ```

### Step 3: Prepare the LUKS (encrypted) volume

1. Format the LUKS volume with the filesystem of your choice (for example, ext4):

    ```bash
    sudo mkfs.ext4 /dev/vdc
    ```

2. Mount the target volume:

    ```bash
    sudo mkdir -p /mnt/luks_target
    sudo mount /dev/vdc /mnt/luks_target
    ```

### Step 4: Mount the source volume

If not already mounted, mount the source volume to your instance:

```bash
sudo mkdir -p /mnt/source_volume
sudo mount /dev/vdb /mnt/source_volume
```

### Step 5: Copy the data

Use `rsync` to copy your data from the source volume to the LUKS encrypted target volume while preserving permissions and attributes:

```bash
# Copy data while preserving permissions and attributes
sudo rsync -aAXHv /mnt/source_volume/ /mnt/luks_target/

# Or, with progress display for large volumes
sudo rsync -aAXHv --progress /mnt/source_volume/ /mnt/luks_target/
```

### Step 6 (Optional): Verify and detach

1. Verify that your data has been copied successfully. You can use commands like `ls`, `du`, or `rsync --dry-run` for quick checks.

2. Unmount both volumes:

    ```bash
    sudo umount /mnt/source_volume
    sudo umount /mnt/luks_target
    ```

3. Detach the source volume if it is no longer needed.

### Step 7 (Optional): Update your mount points

If the LUKS volume should be used permanently, add an entry to `/etc/fstab` to mount it automatically at boot.

Example:

```bash
UUID=<UUID_of_volume> /mnt/data ext4 defaults 0 2
```

> [!primary]
>
> **Notes:**
>
> Replace <UUID_of_volume> with the actual UUID of your LUKS volume (obtain it with `sudo blkid /dev/vdc`).
>
> Ensure the mount point `/mnt/data` exists before boot or the system may fail to mount the volume.
>

## Go further

Join our [community of users](/links/community).