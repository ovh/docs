---
title: "Deploy a Valheim server on the Game Panel"
excerpt: "Learn how to deploy a Valheim server on the OVHcloud Game Panel, track installation progress, and join your server from the Valheim client."
updated: 2026-05-05
---

## Objective

The OVHcloud Game Panel lets you deploy a Valheim server with automated installation and port configuration.

**This guide explains how to deploy and connect to a Valheim server on the OVHcloud Game Panel.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- Access to the Game Panel. Refer to our guide on [Log in to the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

## Instructions

### Step 1 — Access the Game Panel

Log in to your OVHcloud Game Panel.

### Step 2 — Create a new server instance

Click `Add Game Server`{.action} and select **Valheim**.

![Selecting Valheim from the game list](images/select-valheim.png){.thumbnail}

> [!primary]
>
> If this is your first Valheim server on the Game Panel and the default Game Port is available, all required ports will be automatically configured during installation. No manual setup is needed in this case.

### Step 3 — Monitor installation progress

Once the installation starts, you will see a confirmation screen. Click `Open Logs`{.action} to follow the installation progress in real time.

![Monitoring Valheim server installation](images/installation-logs.png){.thumbnail}

### Step 4 — Confirm installation is complete

Once the installation is finished, a notification will appear: **Server status is now: Running**.

![Valheim server with Running status](images/server-running.png){.thumbnail}

### Step 5 — Retrieve connection information

Once your server status is **Running**, copy the connection information from the Game Panel. Valheim uses two UDP ports: `2456` (Game) and `2457` (Query).

> [!primary]
>
> A server password is generated automatically during installation. Open the `File Manager`{.action} from your server `Settings`{.action} and look in `config-lgsm` > `vhserver` > `secrets-common.cfg` to retrieve it.

### Step 6 — Join your server in Valheim

1. Open **Valheim**.
2. Click `Start`{.action}, then `Join game`{.action}.
3. Click `Add server`{.action}.
4. Enter your VPS IP along with the port (e.g., `serv8.gamepanel.ovh:2456`).
5. Enter the password and click `Connect`{.action}.

## Go further

- [Getting started with the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Creating a backup on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-create-backup)

Join our [community of users](/links/community).