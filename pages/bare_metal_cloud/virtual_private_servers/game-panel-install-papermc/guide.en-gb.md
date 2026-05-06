---
title: "Install a PaperMC server and add plugins on the Game Panel"
excerpt: "Install a PaperMC Minecraft server on the Game Panel and add plugins via SFTP for extended gameplay features."
updated: 2026-05-05
---

## Objective

PaperMC is a high-performance Minecraft server implementation that supports plugins for extending gameplay. The Game Panel lets you deploy a PaperMC server in a few clicks and customise it by uploading plugins.

**This guide explains how to install a PaperMC server on the Game Panel and add plugins.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- Access to the Game Panel. Refer to [Log in to the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).
- SFTP enabled on your server. Refer to [Enable SFTP on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp).
- An SFTP client such as [FileZilla](https://filezilla-project.org/).

## Instructions

### Step 1 — Install a PaperMC server

From the main Game Panel page, click `Add Game Server`{.action}, locate **PaperMC**, and click `Install`{.action}.

For more details on server installation, refer to [Getting started with the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started).

### Step 2 — Download plugins

Download plugins from a trusted source such as the [PaperMC Hangar](https://hangar.papermc.io/) repository.

### Step 3 — Upload plugins via SFTP

Connect to your PaperMC server using SFTP. Once connected, navigate to the `serverfiles` folder, open the `plugins` directory, and upload your plugin files.

### Step 4 — Restart the server

From the main Game Panel page, restart your server using the dedicated button.

> [!primary]
>
> Monitor the server logs to confirm that the server starts correctly and that the plugins are loaded.

## Go further

- [Deploy a Minecraft server on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-quick-start-minecraft)
- [Install Fabric or NeoForge on a Minecraft server](/pages/bare_metal_cloud/virtual_private_servers/game-panel-install-fabric-neoforge)

Join our [community of users](/links/community).