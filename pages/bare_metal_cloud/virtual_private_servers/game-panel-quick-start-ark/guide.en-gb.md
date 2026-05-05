---
title: "Deploy an ARK Survival Evolved server on the Game Panel"
excerpt: "Deploy an ARK: Survival Evolved server on the OVHcloud Game Panel with automated port configuration and real-time installation logs."
updated: 2026-04-29
---

## Objective

The OVHcloud Game Panel allows you to deploy an ARK: Survival Evolved server in a few steps. The panel handles the installation automatically, including port configuration.

**This guide explains how to deploy and connect to an ARK: Survival Evolved server on the OVHcloud Game Panel.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- Access to the Game Panel. Refer to our guide on [Log in to the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

## Instructions

### Step 1 — Access the Game Panel

Log in to your OVHcloud Game Panel.

### Step 2 — Create a new server instance

Click `Add Game Server`{.action} and select **ARK: Survival Evolved**.

<!-- SCREENSHOT-STATUS: as-is -->
![Selecting ARK: Survival Evolved from the game list](images/select-ark.png){.thumbnail}

> [!primary]
>
> If this is your first ARK server on the Game Panel and the default Game Port is available, all required ports will be automatically configured during installation. No manual setup is needed in this case.

### Step 3 — Monitor installation progress

Once installation starts, a confirmation screen appears. Click `Open Logs`{.action} to follow the installation progress in real time.

While the server is installing, the status displays **Installing**. Track detailed progress directly in the logs panel.

<!-- SCREENSHOT-STATUS: playwright -->
<div class="todo-image">🚧 Image pending</div>
![Monitoring ARK server installation in the logs panel](images/installation-logs.png){.thumbnail}

### Step 4 — Confirm installation is complete

Once installation is finished, the server status changes to **Running**.

<!-- SCREENSHOT-STATUS: playwright -->
<div class="todo-image">🚧 Image pending</div>
![ARK server with Running status](images/server-running.png){.thumbnail}

### Step 5 — Retrieve connection information

Once your server status is **Running**, copy the connection information from the Game Panel.

<!-- SCREENSHOT-STATUS: playwright -->
<div class="todo-image">🚧 Image pending</div>
![Connection details for the ARK server](images/connection-details.png){.thumbnail}

### Step 6 — Join your server in ARK

1. Open **ARK: Survival Evolved**.
2. Go to **Join Game**.
3. Use one of the following methods:

    - **Direct Connect**: paste `gamepanel.ovh:PORT`.
    - Or search your server name in the list.

## Go further

- [Getting started with the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Managing users on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-manage-users)
- [Creating a backup on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-create-backup)

Join our [community of users](/links/community).