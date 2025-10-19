---
title: Tutorial - How to install a Rust server on a Dedicated game server or VPS game server
excerpt: Learn how to install your own Rust server
updated: 2025-xx-xx
---

## Objective

Rust is the ultimate game for fans of post-apocalyptic survival with a multiplayer element.

You can set it up yourself on a [VPS](/links/bare-metal/vps) or on a [dedicated server](/links/bare-metal/bare-metal). This will reduce the cost and give you full control over your game instance.

Having a Rust dedicated server offers many advantages, as well as a unique gaming experience. As the administrator, you have total control. You choose which type of server you want to use: the original game (vanilla), roleplay (RP), player versus player (PvP) or even open-world exploration.

**This tutorial explains how install the Rust game on an OVHcloud Dedicated game server or VPS game server**

> [!warning]
> This guide will show you how to use one or more OVHcloud solutions with external tools, and will describe the actions to be carried out in a specific context. ou may need to adapt the instructions according to your situation.
>
> If you encounter any difficulties performing these actions, please contact a [specialist service provider](/links/partner) and/or discuss the issue with our community. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- A game [dedicated server](/links/bare-metal/game) or a game [VPS]() in your OVHcloud account
- A GNU/Linux or Windows distribution installed on the server
- Administrative access via SSH or remote desktop (Windows) to your server
- A basic understanding of GNU/Linux administration or Windows


### Minimum configuration requirements

To work properly, a Rust server requires a minimum of 8 GB of RAM. However, we recommend at least 16 GB of RAM to get the best performance for the game.

The following operating systems are compatible: Windows (versions 10 and 11) or Linux (CentOS, Debian, Fedora, Ubuntu). To manage several dozen players connected simultaneously, you need a server with at least 16 GB of RAM.

For minimum requirements and recommended game VPS, consult this [page](https://www.ovhcloud.com/en-ca/vps/rust-vps/).

## Instructions

> [!primary]
> All our Game dedicated servers have the Game Anti-DDoS intergrated. This is an additional network attack protection specifically designed to secure gaming applications against targeted attacks, ensuring stability and accessibility for gamers.
>
> You can find the list of protected games [here](/links/security/ddos)
>
> If you chose to host your game on a VPS (game or not) or any other solution, note that you will not benefit from this protection.


### Server configuration

When you order your server, you choose the operating system you want to use. Windows Server and Linux distributions are compatible with Rust. It is worth keeping in mind that you can always reinstall another operating system after your server has been delivered. For more information, consult the following guidesif necessary:

- [Getting started guide for a Dedicated server](pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#install)
- [Getting started guide for VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps#reinstallvps) 

### Installing Rust game on a Windows server

Before installing Rust, make sure you have created a [steam](https://store.steampowered.com/join/) account and added the game to your steam library.

#### Prepare the server

1. Log on to your server via a remote desktop connection.
2. Create a folder on your disk (for example, C:\steamcmd).
3. Download [SteamCMD](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) for Windows.
4. Extract the content of the file to your new folder.

This file, when executed, will download, install and update to the lastest version of SteamCMD.

Once the process is complete, you should have the following in your command prompt:

```powershell
Steam>
```

When next you want to start steam, you can run the following. Replace the values with your own:

```powershell
cd C:\steamcmd
steamcmd
```

Next, run the following command to create a folder were you want to install Rust. Replace `path` with the location and name of the folder:

```powershell
Steam>force_install_dir <path>
```

Example:

```powershell
Steam>force_install_dir c:\rustgame
```

"c:" is the letter of the local Disk and "rustgame" is the name of the folder we want to create.

Next, log into your steam account with your username:

```powershell
Steam>login username
```

You will then be prompted to enter a password and all other security requirements.

You are now connected via the Steam Console Client. Retrieve the "Steam Application ID" for Rust [here](https://steamdb.info/).

image

Once you have retrieved the ID, run the following command. Replace APP_ID with the ID.

```powershell
app_update APP_ID validate
```

Once the installation is done, run the following command:

```powershell
quit
```

You have now successfully installed the Rust game on your server.

> [primary]
> Please note to run the server, you need to create atleast one batchs cript file, this is a text document that stores a list of commands to be run in sequence. For more information please consult the appropriate documentation.
>


#### Installing Rust game on a Linux server

Before installing the Rust game, make sure you have created a [steam]() account and added the game to your steam library.

> [warning]
> Make sure you are not the root user while running the `steamcmd` command.
>

#### Prepare the server

Log into your server via SSH and create a Steam user:

```sh
sudo useradd -m steam
```

Access the directory of the newly created user:

```sh
cd /home/steam
```

Next, install SteamCMD, according to your distribution:

**Ubuntu/Debian**

```sh
sudo apt install steamcmd
```

**Red Hat/CentOS**

```sh
sudo yum install steamcmd
```

**Arch linux**

```sh
git clone https://aur.archlinux.org/steamcmd.git
cd steamcmd
makepkg -si
```

Next, run the following command to link the SteamCMD executable:

```sh
ln -s /usr/games/steamcmd steamcmd
```

This supposes that SteamCMD is installed in /usr/games/steamcmd. Modify the source path if your installation is different.

#### Opening the ports

For your players to connect to the Rust game from your server, you will need to open certain ports on your machine:

   - TCP: 28015-28016
   - UDP: 28015-28016

If you have a firewall configured, you will need to open these ports through it. Consult the following guides for additional information:

- [Configuring the firewall on Windows ](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win).
- [Configuring the firewall on Linux with iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable/).

> [!primary]
> For dedicated Game servers, these ports also need to be configured in the Game firewall with a rule to allow UDP traffic. For more information, consult this guide [How to protect a Game server with the application firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos).
> 

Once you have completed all of the installation steps for your Rust dedicated server, log in to the Steam account that has a copy of the game, and launch it. Next, go to “Community” to access your private server using the name you have set, or the IP address. You are now ready to use your Rust server!

#### A few command lines for your Rust server

| Settings | Default Value | Function |
|----------|---------------|----------|
| +server.ip | 0.0.0.0 | Sets the server’s IP address. Leave the default value if you only use one IP. |
| +server.port | 28015 | Determines the UDP port used by the server. |
| +rcon.ip | 0.0.0.0 | Sets the RCON IP address. |
| +rcon.port | 28016 | Port used by RCON. |
| +server.tickrate | 10 | Server refresh rate. We do not recommend going beyond 30. |
| +server.hostname | ‘Your Server Name’ | Your server’s name. |
| +server.identity | ‘my_server_identity’ | Corresponds to your server’s data access path. Useful if you are using multiple instances. |
| +server.maxplayers | 50 | Maximum number of players allowed to connect simultaneously to your server. |
| +server.worldsize | 3,000 | Determines the size of the map that will be generated. Minimum value 1,000, maximum value 6,000. |
| +server.seed | 50,000 | Map generator seed number. |
| +server.saveinterval | 600 | The rate in seconds that server backups are started. |
| +rcon.password | ‘YourPassword’ | Sets the RCON password. |
| -silent-crashes | - | Will not display an error message in the event of a failure, and will restart automatically if the server is installed as a service. |

