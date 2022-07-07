---
title: 'Tutorial - How to create a Minecraft server on a VPS'
slug: create-minecraft-server-on-vps
excerpt: 'Find out how to install your own Minecraft server'
section: Tutorial
---

**Last updated 29th June 2021**

## Objective

Minecraft is a popular sandbox video game. It needs to be hosted on a server if you wish to play in multiplayer.

You can rent a pre-built Minecraft server or you can set it up yourself on a [VPS](https://www.ovhcloud.com/en-au/vps/) or on a [dedicated server](https://www.ovhcloud.com/en-au/bare-metal/){.external}. This will reduce the cost and give you full control over your game instance.

**This tutorial explains how to launch a Minecraft Java Edition server on an OVHcloud VPS and test its connectivity.**

> [!warning]
>This guide will show you how to use one or more OVHcloud solutions with external tools, and will describe the actions to be carried out in a specific context. ou may need to adapt the instructions according to your situation.
>
>If you encounter any difficulties performing these actions, please contact a specialised service provider and/or discuss the issue with our community. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- A [Virtual Private Server](https://www.ovhcloud.com/en-au/vps/) in your OVHcloud account
- A GNU/Linux distribution installed on the server
- Administrative access (root) via SSH to your server
- A basic understanding of GNU/Linux administration

## Instructions

> [!primary]
> This tutorial is based on version "1.17" of Minecraft Java Edition and OpenJDK version "16.0.1".
>


### Step 1: Prepare the server

The first step is to set up your VPS for a Minecraft installation.
<br>It is recommended to order a new VPS or reinstall an existing one from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), using the latest available release of Ubuntu or Debian. Please refer to our [Getting started guide](../getting-started-vps/#reinstallvps) if necessary.

Once the OS is installed, connect to your VPS with SSH as described in the [Getting started guide](../getting-started-vps/). 

First update the packages to their latest versions:

```sh
~$ sudo apt update
```

```sh
~$ sudo apt full-upgrade
```

Use the following command to ensure all required packages are installed. 

```sh
~$ sudo apt install screen nano wget git
```

Install the Java package:

```sh
~$ sudo apt install openjdk-16-jdk
```

To avoid security vulnerabilities on your system, create a user named "minecraft" who will carry out the server actions:

```sh
~$ sudo adduser minecraft --disabled-login --disabled-password
```

Simply press the `Enter`{.action} key to skip filling in the usual account information.

The user is now created. Note that no password was specified for this user. This is normal because the account is only accessible when already connected via SSH with your own user account.

Switch to the new user:

```sh
~$ sudo su - minecraft
```

> [!primary]
>
> The following commands need to be executed by the user "minecraft".
> 

To complete the setup preparations, create a folder named `server`.

```sh
~$ mkdir ~/server && cd ~/server
```

### Step 2: Install your Vanilla Minecraft server

> [!primary]
> 
> A "Vanilla" server is an instance without any add-ons or plugins. You will experience the game the way it was created by the developers.
>

First you will need to copy/paste the download link for the server software. On the official [Minecraft website](https://minecraft.net/download/server), right-click on the download link and select `Copy Link Location`{.action} from the context menu.

![Server download](images/download_jar.png){.thumbnail}

Back in your command line terminal, make sure you are still in the `server` folder and use `wget` to download the file. Replace `download_link` with the actual URL from your clipboard.

```sh
~/server$ wget download_link
```

Before launching the server, you need to agree to the End User License Agreement. To achieve this, enter the following command.

```sh
~/server$ echo "eula=true" > eula.txt
```

A file named `eula.txt` is now located at the root level of your server, containing the line `eula=true`. This will tell the software that you accept the Minecraft EULA. We invite you to review the terms and conditions on the [Minecraft website](https://www.minecraft.net/).

Your server can now be started.

During step 1, we installed the `screen` package which allows opening multiple sessions of the terminal (*shell*). We will start Minecraft in a new session that can run in the background. Using `screen` can be very handy since it gives you the possibility to launch multiple Minecraft servers simultaneously.

First, we will create a new shell named `minecraft1`:

```sh
~/server$ screen -S minecraft1
```

The active terminal window will switch to a new shell session. You can create multiple shells; list them with this command:

```sh
~/server$ screen -ls
```

To detach from the shell (and keep it running), press `Ctrl`{.action}, then `a`{.action}, then `d`{.action} on your keyboard.

To switch from one shell to another, use this command:

```sh
~/server$ screen -x name_of_shell
```

You can also press `Ctrl`{.action}, then `a`{.action}, then `n`{.action} on your keyboard.

In the previously created `minecraft1` shell, launch the Minecraft server with the following command. (Use `ls` to verify the filename in case it differs.) 

```sh
~/server$ java -jar server.jar
```

To shut down your server, enter the command `stop`.

### Step 3: Connect to the server

Your server instance is now functional. To play the game, download the Minecraft client from the official [Minecraft website](https://www.minecraft.net/).

Install and launch the client for your operating system and sign in.

![Server connection](images/login_minecraft.png){.thumbnail}

On the next screen, enter the server name in the field `Server Name`, and the IP address of the server in the field `Server Address`.

![Server information](images/minecraft_server_login.png){.thumbnail}

By default, no port needs to be specified.

## Conclusion

Your Vanilla Minecraft server is now installed on your VPS.

Please note that this installation guide should also work on an OVHcloud [dedicated server](https://www.ovhcloud.com/en-au/bare-metal/) or a [Public Cloud](https://www.ovhcloud.com/en-au/public-cloud/). instance. With those services, you will have the advantage of better stability since the hardware is dedicated.

## Go further <a name="gofurther"></a>

For add-ons, mods and to personalise your Minecraft experience, please consult this official documentation: <https://help.mojang.com/>.

Join our community of users on <https://community.ovh.com/en/>.
