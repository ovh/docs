---
title: "Upload a custom world to your Minecraft server"
excerpt: "Upload a custom Minecraft map to your game server via SFTP, configure the world folder name in Game Config, and switch between multiple maps."
updated: 2026-05-05
---

## Objective

The OVHcloud Game Panel lets you upload a custom Minecraft world by transferring files via SFTP and adjusting the world folder configuration.

**This guide explains how to upload a custom world to your Minecraft server on the OVHcloud Game Panel.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- A Minecraft server deployed on the Game Panel. Refer to [Deploy a Minecraft server on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-quick-start-minecraft).
- SFTP enabled on the Game Panel. Refer to [Enable SFTP on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp).
- An SFTP client such as [FileZilla](https://filezilla-project.org/).

> [!warning]
>
> Make sure your Minecraft server is **stopped** before performing any of the following actions.

## Instructions

### Step 1 — Connect to your server via SFTP

Connect to your Minecraft server using SFTP. Refer to [Enable SFTP on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp) for setup instructions.

### Step 2 — Locate the world folder

Once connected to your server via FileZilla, on the right side (remote server), navigate to:

```
data > serverfiles
```

Inside this directory, you will see a folder named `world`. This folder contains your current Minecraft map and is created by default.

![The default world folder in the server file structure](images/world-folder.png){.thumbnail}

### Step 3 — Prepare the server for your new map

Before uploading your own map, you need to free up the `world` folder name. You have three options:

- **Delete it** (right-click > `Delete`{.action}) if you no longer need it.
- **Rename it** (right-click > `Rename`{.action}) to keep it as a backup.
- **Download it locally** by dragging and dropping the folder from the right panel (server) to the left panel (your computer).

### Step 4 — Upload your custom map

In FileZilla, locate your map folder on the left side (your computer) and drag it into `data > serverfiles` on the right side (remote server).

### Step 5 — Configure the world name (if needed)

If your map folder is not named `world`, you must update the server configuration:

1. Go back to the Game Panel.
2. Open your server `Settings`{.action}.
3. Navigate to the `Game Config`{.action} tab.
4. Locate the option **World folder name**.
5. Enter the exact name of your map folder.

![Configuring the world folder name in Game Config](images/world-folder-name-config.png){.thumbnail}

> [!primary]
>
> **Using multiple maps**: You can store multiple maps on your server and switch between them easily. Change the **World folder name** in the Game Config section to load a different map. Do not forget to restart the server after changing the setting.

### Step 6 — Start the server

Restart your server from the Game Panel. Your custom Minecraft map is now ready to use.

## Go further

- [Deploy a Minecraft server on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-quick-start-minecraft)
- [Create a backup on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-create-backup)

Join our [community of users](/links/community).