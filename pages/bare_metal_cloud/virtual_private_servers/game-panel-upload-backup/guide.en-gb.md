---
title: "Uploading a backup on the Game Panel"
excerpt: "Restore a game server backup on the OVHcloud Game Panel by downloading the archive, extracting it, and uploading the serverfiles folder via SFTP."
updated: 2026-04-29
---

## Objective

The OVHcloud Game Panel lets you restore a backup by downloading an archive, extracting it, and uploading the files via SFTP.

**This guide explains how to restore a backup on your OVHcloud Game Panel server.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- A game server instance deployed on the Game Panel.
- An SFTP client such as [FileZilla](https://filezilla-project.org/). Refer to our guide on [Enabling SFTP on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp).
- An existing backup. Refer to our guide on [Creating a backup on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-create-backup).

## Instructions

### Step 1 — Log in to the Game Panel

Log in to your Game Panel. If you need help, refer to our guide on [Log in to the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

### Step 2 — Access backup settings

Once logged in:

1. Select your game server.
2. Click `Settings`{.action}.
3. Go to the `Backup`{.action} tab.

### Step 3 — Download a backup

At the bottom of the page, find the list of available backups. Click `Download`{.action} next to the backup you want to restore.

If no backup is available, you must first create one. Refer to our guide on [Creating a backup on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-create-backup).

<!-- SCREENSHOT-STATUS: playwright -->
![Downloading a backup from the list](images/download-backup.png){.thumbnail}

### Step 4 — Extract the backup

Once the backup has been downloaded, extract the archive on your computer. After extraction, you should see the backup files and folders, including the `serverfiles` directory.

### Step 5 — Connect to your server via SFTP

Connect to your game server via SFTP. Refer to our guide on [Enabling SFTP on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp) for setup instructions.

### Step 6 — Stop the server

Before continuing, ensure your game server is fully stopped from the Game Panel. This prevents file corruption or conflicts during the restore.

### Step 7 — Replace the remote serverfiles folder

Once connected through SFTP, locate the remote `serverfiles` folder on your server.

<!-- SCREENSHOT-STATUS: manual-edit | reason: local OS file manager view, third-party UI -->
![Serverfiles directory on the server](images/serverfiles.png){.thumbnail}

Before uploading the backup, you should either:

- **Delete it** (right-click > `Delete`{.action}) if you no longer need it.
- **Rename it** (right-click > `Rename`{.action}) to keep it as a backup.
- **Download it locally** by dragging and dropping the folder from the right panel (server) to the left panel (your computer).

### Step 8 — Upload the backup files

Upload the local `serverfiles` folder from the extracted backup to the server.

For most games, restoring the `serverfiles` folder is sufficient. However, some games may store configuration files in other locations. If the game configuration was modified, it is also recommended to restore the `config-lgsm` folder when available.

### Step 9 — Start the server

Once the upload is complete, restart your server from the Game Panel. Your server should now run using the restored backup environment.

## Go further

- [Creating a backup on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-create-backup)
- [Enabling SFTP on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp)

Join our [community of users](/links/community).