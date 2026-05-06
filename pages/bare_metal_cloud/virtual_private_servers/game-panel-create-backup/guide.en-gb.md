---
title: "Create a backup on the Game Panel"
excerpt: "Create a backup of your game server instance using the OVHcloud Game Panel to save your server state and restore it if needed."
updated: 2026-05-05
---

## Objective

The OVHcloud Game Panel lets you create backups of your game server instances, so you can restore your server to a previous state if needed.

**This guide explains how to create a backup of your game server on the OVHcloud Game Panel.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- A game server instance deployed on the Game Panel. Refer to [Getting started with the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started).

## Instructions

### Step 1 — Log in to the Game Panel

Log in to your Game Panel. If you need help, refer to [Log in to the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

### Step 2 — Access backup settings

Once logged in:

1. Select your game server.
2. Click `Settings`{.action}.
3. Go to the `Backup`{.action} tab.

![The backup settings tab](images/backup-tab.png){.thumbnail}

### Step 3 — Create a backup

Click `Create backup now`{.action}.

> [!primary]
>
> We recommend keeping the **Stop server before backup** option enabled to ensure consistent saves.

![Creating a backup with the stop server option](images/create-backup.png){.thumbnail}

Once the backup is complete, the file is available for download in the same settings section.


## Go further

To restore a backup, refer to [Upload a backup on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-upload-backup).

Join our [community of users](/links/community).