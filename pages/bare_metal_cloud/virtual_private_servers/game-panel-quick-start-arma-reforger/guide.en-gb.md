---
title: "Deploy an Arma Reforger server on the Game Panel"
excerpt: "Deploy an Arma Reforger server on the Game Panel with automated port configuration and real-time installation logs."
updated: 2026-04-29
---

## Objective

The Game Panel lets you deploy an Arma Reforger server in a few steps. The panel handles the installation automatically, including port configuration.

**This guide explains how to deploy and connect to an Arma Reforger server on the Game Panel.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- Access to the Game Panel. Refer to our guide on [Log in to the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

## Instructions

### Step 1 — Access the Game Panel

Log in to your Game Panel.

### Step 2 — Create a new server instance

Click `Add Game Server`{.action} and select **Arma Reforger**.

<!-- SCREENSHOT-STATUS: as-is -->
![Selecting Arma Reforger from the game list](images/select-arma-reforger.png){.thumbnail}

> [!primary]
>
> If this is your first Arma Reforger server on the Game Panel and the default Game Port is available, all required ports will be automatically configured during installation. No manual setup is needed in this case.

### Step 3 — Monitor installation progress

Once installation starts, a confirmation screen appears. Click `Open Logs`{.action} to follow the installation progress in real time.

<!-- SCREENSHOT-STATUS: playwright -->
![Arma Reforger installation started screen with Open Logs button](images/arma-installation-started.png){.thumbnail}

While the server is installing, the status displays **Installing**. Track detailed progress directly in the logs panel.

<!-- SCREENSHOT-STATUS: playwright -->
![Arma Reforger server with Running status and installation logs](images/arma-installation-logs.png){.thumbnail}

### Step 4 — Confirm installation is complete

Once installation is finished, the server status changes to **Running**.

### Step 5 — Retrieve connection information

Once your server status is **Running**, copy the connection information from the Game Panel.

<!-- SCREENSHOT-STATUS: playwright -->
![Connection details for the Arma Reforger server](images/arma-connection-details.png){.thumbnail}

### Step 6 — Join your server in Arma Reforger

1. Open **Arma Reforger** and access the main menu.
2. Click `Multiplayer`{.action}.
3. Select `Direct Join`{.action} or press `v`.
4. Enter the IP address and port, then click `Join`{.action}.

## Go further

- [Getting started with the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Managing users on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-manage-users)
- [Creating a backup on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-create-backup)

Join our [community of users](/links/community).