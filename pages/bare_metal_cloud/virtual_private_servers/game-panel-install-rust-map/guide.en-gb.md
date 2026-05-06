---
title: "Install a custom map on a Rust server with the Game Panel"
excerpt: "Install a custom Rust map on your game server by editing the server configuration file via SFTP and FileZilla."
updated: 2026-05-05
---

## Objective

The Game Panel lets you customise your Rust server by installing a custom map. The map file is hosted externally and referenced from your server configuration.

**This guide explains how to install a custom map on a Rust server hosted on the Game Panel.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- A Rust server deployed on the Game Panel.
- SFTP enabled on your server. Refer to [Enable SFTP on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp).
- An SFTP client such as [FileZilla](https://filezilla-project.org/).
- A custom map file in `.map` format.

## Instructions

### Step 1 — Prepare your custom map

1. Stop your Rust server from the Game Panel.
2. Make sure your custom map is in the `.map` format.
3. Upload the map to a file-sharing service.
4. Copy the resulting download link and save it — you will need it later.

> [!warning]
>
> Dropbox is not suitable for this purpose. Use another file-sharing service.

### Step 2 — Connect to your server via SFTP

Connect to your Rust server using SFTP. Refer to [Enable SFTP on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp) for setup instructions.

This guide uses [FileZilla](https://filezilla-project.org/) as the SFTP client.

> [!warning]
>
> Make sure your Rust server is **stopped** before performing any of the following actions.

### Step 3 — Edit the server configuration

1. In FileZilla, on the right side (remote server), navigate to:

    ```
    /serverfiles/server/rustserver/cfg
    ```

2. Locate the `server.cfg` file, right-click it and select `Edit`{.action}.
3. Find the line starting with `levelURL=` and paste the download link you saved earlier after the `=` sign.
4. Make sure the link ends with `dl=1` (not `dl=0`). Edit it if necessary.
5. Find the line starting with `serverLevel=` and enter the same level type that was used to generate the custom map:

    - `Procedural Map`
    - `Barren`
    - `Craggy Island`
    - `Savas Island`

6. Save your changes.

### Step 4 — Restart the server

Close the SFTP client, then start your Rust server again from the Game Panel.

## Go further

- [Getting started with the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started)
- [Enable SFTP on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp)

Join our [community of users](/links/community).