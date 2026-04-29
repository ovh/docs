---
title: "Install Fabric or NeoForge on a Minecraft server"
excerpt: "Install Fabric or NeoForge on your Minecraft server via the Game Panel to run modded content with custom mod loaders."
updated: 2026-04-29
---

## Objective

Fabric and NeoForge are mod loaders for Minecraft servers. Installing one of them on a Minecraft server hosted on the Game Panel lets you run modded gameplay with extended features.

**This guide explains how to install Fabric or NeoForge on a Minecraft server on the Game Panel and add mods.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- A Minecraft server deployed on the Game Panel. Refer to our guide on [Deploy a Minecraft server on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-quick-start-minecraft).
- SFTP enabled on your server. Refer to our guide on [Enabling SFTP on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-enable-sftp).
- An SFTP client such as [FileZilla](https://filezilla-project.org/).

## Instructions

### Step 1 — Disable automatic updates

To prevent conflicts with mod loaders, disable automatic updates before making any changes:

1. Go to your server `Settings`{.action}.
2. Open the `Game Config`{.action} tab.
3. Disable automatic updates.

### Step 2 — Stop the server

From the Game Panel, stop your Minecraft server before making any further changes.

### Step 3 — Download and upload the installer

Download the installer for your chosen mod loader:

- **Fabric**: [https://fabricmc.net/use/server/](https://fabricmc.net/use/server/)
- **NeoForge**: [https://neoforged.net/](https://neoforged.net/)

Once downloaded, connect to your server via SFTP and upload the `.jar` file to the `serverfiles` directory.

### Step 4 — Run the installer

Open the SSH terminal from the Game Panel and run the appropriate command for your mod loader.

For **Fabric**:

```bash
java -jar fabric-installer-X.X.X.jar server --downloadMinecraft
```

This downloads the Minecraft server files, installs the Fabric loader, and generates the Fabric server launch file.

For **NeoForge**:

```bash
java -jar neoforge-X.X.X-installer.jar --installServer
```

This installs NeoForge, downloads the Minecraft server files, and generates the server launch files.

### Step 5 — Configure LinuxGSM

Tell LinuxGSM which executable to use, depending on your mod loader.

For **Fabric**:

```bash
printf '\nexecutable="./fabric-server-launch.jar"\n' >> /data/config-lgsm/mcserver/common.cfg
```

For **NeoForge**:

```bash
printf '\npreexecutable=""\nexecutable="./run.sh"\nstartparameters="nogui"\n' >> /data/config-lgsm/mcserver/common.cfg
```

> [!warning]
>
> When using NeoForge with `run.sh`, the **Max RAM** setting in the Game Config is no longer applied. Edit `/data/serverfiles/user_jvm_args.txt` instead. Example:
>
> ```
> -Xms2G
> -Xmx4G
> ```

### Step 6 — Start the server

Set the correct permissions before starting the server:

```bash
sudo chown -R linuxgsm:linuxgsm /data/serverfiles
```

Then start the server from the Game Panel and check the server logs to confirm a successful launch.

### Step 7 — Add mods

To install mods on your modded server:

1. Download Fabric- or NeoForge-compatible mods.
2. Connect to your server via SFTP.
3. Upload the mod `.jar` files to `serverfiles/mods`.
4. Reset permissions:

    ```bash
    sudo chown -R linuxgsm:linuxgsm /data/serverfiles
    ```

5. Restart the server. Check the logs to confirm the mods are loaded.

## Go further

- [Deploy a Minecraft server on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-quick-start-minecraft)
- [Install a PaperMC server and add plugins on the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-install-papermc)

Join our [community of users](/links/community).