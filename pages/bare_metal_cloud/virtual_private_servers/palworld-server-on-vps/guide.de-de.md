---
title: 'How to create a Palworld compatible server (EN)'
excerpt: 'Find out how to install your own Palworld-compatible server on an OVHcloud VPS or Dedicated Server'
updated: 2024-02-23
---

## Objective

Developed by Pocket Pair, Palworld is a video game that blends elements of survival, object-making and adventure, all in an open world populated by creatures called “Pals”. 
Having your own server to play a game such as Palworld offers several advantages, such as complete control over the gaming environment and community, improved performance and gaming experience, and the ability to host special events.

**This tutorial describes how to create a Palworld-compatible server on a VPS or a Dedicated Server using LinuxGSM. The installation time is estimated to be less than 10 minutes.**

## Requirements

- A [VPS](https://www.ovhcloud.com/de/vps/) or a [dedicated server](https://www.ovhcloud.com/de/bare-metal/) in your OVHcloud account
- A GNU/Linux operating system installed on the server
- Administrative (sudo) SSH access to your server
- Basic understanding of GNU/Linux administration

> [!warning]
>
> If you are unfamiliar with using a VPS, please read our [Getting started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) guide.
>
> For installation on a dedicated server, make sure to first read our [Getting started with a dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) guide.

## Instructions

Once you have installed the operating system, log in to your VPS via SSH, as described in the [Getting started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) guide.<br>
If you are using a dedicated server, follow the instructions of our [Getting started with a dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) guide.

### Check your operating system compatibility

Before you begin, make sure that your operating system is compatible. Please check the "Compatibility" section on [LinuxGSM](https://linuxgsm.com/servers/pwserver/).

### Install dependencies

On [LinuxGSM](https://linuxgsm.com/servers/pwserver/), go to the "Dependencies" section to install all the necessary dependencies depending on your operating system.

> [!warning]
>
> If you encounter an error of the type: `E: Package 'netcat' has no installation candidate`, install `netcat-traditional` with the following command: `sudo apt install netcat-traditional`.
>

### Install the server

Before you continue, ensure that all dependencies have been installed.

#### Create a new user

To avoid creating vulnerabilities in your system, create a user named "pwserver" that will perform the server actions:

```sh
~$ sudo adduser pwserver
```

For security reasons, enter a strong password.

You will be asked to provide several additional information. Press the `Enter`{.action} key to confirm.

Once you have created a new user, switch to it:

```sh
~$ sudo su - pwserver
```

#### Download linuxgsm.sh

To download linuxgsm.sh, run the following commands: 

```sh
~$ curl -Lo linuxgsm.sh https://linuxgsm.sh && chmod +x linuxgsm.sh && bash linuxgsm.sh pwserver
```

#### Launch the installation

To complete the server installation, run the following command:

```sh
~$ ./pwserver install
```

Follow the instructions on the screen and press the `Enter`{.action} key to confirm.

> [!warning]
>
> It is possible that an error of the type `missing dependencies: distro-info libsdl2-2.0-0:i386 netcat-openbsd` is displayed. In this example, it is indicated that the `distro-info libsdl2-2.0-0:i386 netcat-openbsd` dependencies are missing and must be installed manually. 
>
> Switch to your sudo user with the `su - <user>` command. Install the missing dependencies with the command: `sudo apt install distro-info libsdl2-2.0-0:i386 netcat-openbsd`. Switch back to your `pwserver` user and run the installation again: `./pwserver install`
>

Your Palworld-compatible server is now installed on your OVHcloud server. Now it's up to you to play the game!

For a list of available commands, see the "Basic Usage" section of [LinuxGSM](https://linuxgsm.com/servers/pwserver/).

## Go further

[Deploy a Palworld game server](https://linuxgsm.com/servers/pwserver)

[OVHcloud VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

Join our community of users on <https://community.ovh.com/en/>.
