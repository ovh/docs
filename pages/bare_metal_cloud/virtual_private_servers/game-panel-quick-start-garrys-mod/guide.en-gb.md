---
title: "Deploy a Garrys Mod server on the Game Panel"
excerpt: "Deploy a Garrys Mod server on the Game Panel with automated deployment, port configuration, and console connect steps."
updated: 2026-04-29
---

## Objective

The Game Panel lets you deploy a Garry's Mod server with automated installation and port configuration.

**This guide explains how to deploy and connect to a Garry's Mod server on the Game Panel.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- Access to the Game Panel. Refer to our guide on [Log in to the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

## Instructions

### Step 1 — Access the Game Panel

Log in to your Game Panel. Go to the **Game Servers** section in the left-hand menu.

<!-- SCREENSHOT-STATUS: playwright -->
![Game Servers section with Add Game Server button](images/game-servers-list.png){.thumbnail}

### Step 2 — Create a Garry's Mod server

Click `Add Game Server`{.action} and select **Garrys Mod** from the list.

<!-- SCREENSHOT-STATUS: playwright -->
![Selecting Garrys Mod from the game list](images/select-garrys-mod.png){.thumbnail}

Configure the installation:

- `Server Name`: Give your server a name (e.g., `Garrys Mod Server`).
- `Network Ports`: Leave the default ports or add more if needed in the advanced section. Garry's Mod typically uses ports around `27015`.

### Step 3 — Launch the installation

Click `Install`{.action}. The deployment will start automatically. Wait a few minutes while:

- The image is being downloaded.
- The server is being installed.

Then click the launch button to start the server.

### Step 4 — Verify the server is running

Check that the server status displays **Running** and that CPU/RAM activity is visible.

<!-- SCREENSHOT-STATUS: playwright -->
![Garrys Mod server with Running status](images/garrys-mod-running.png){.thumbnail}

Available actions:

- `Console`{.action}: Open the console to monitor startup.
- `Logs`{.action}: Check logs if there are any issues.
- `Settings`{.action} > `Game Config`{.action}: Access game settings (startup map, tickrate, gamemode, player limit, RCON password, Workshop collection, GSLT).

<!-- SCREENSHOT-STATUS: playwright -->
![Garrys Mod Game Config settings](images/garrys-mod-game-config.png){.thumbnail}

### Step 5 — Connect to the server

In the `Connection`{.action} column, you will find the IP address and port (e.g., `xxx.xxx.xxx.xxx:27015`).

In Garry's Mod:

1. Open the console (`~`).
2. Type:

    ```console
    connect IP:PORT
    ```

> [!primary]
>
> To go further, add mods or Workshop collections, adjust tickrate and performance settings, or restrict access with a password or whitelist.

## Go further

- [Getting started with the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Managing users on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-manage-users)

Join our [community of users](/links/community).