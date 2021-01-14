---
title: 'Getting started with a dedicated server'
slug: getting-started-dedicated-server
excerpt: 'Find out how to proceed after the delivery of your dedicated server'
section: 'Getting started'
order: 1
---

**Last updated 13th January 2021**

## Objective

A dedicated server is a physical server located in one of our data centres. Unlike Web Hosting plans (also referred to as "shared hosting"), which are technically managed by OVHcloud, you are fully responsible for administrating your dedicated server.

**This guide will give you a few tips to help you manage your new dedicated server.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/I2G6TkKg0gQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)
- a [dedicated server](https://www.ovhcloud.com/en-gb/bare-metal/) in your OVHcloud account
- administrative access (root) via SSH or remote desktop (Windows) to your server


## Instructions

When your dedicated server is first set up, you can select which operating system will be installed.

### Installing or reinstalling your dedicated server

You can easily reinstall your server and choose a different OS template in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager). From the `General information`{.action} tab, click on `...`{.action} next to the operating system and then click `Install`{.action}.

![Reinstall button](images/reinstalling-your-server-00.png){.thumbnail}

On the next screen, select either `Install from an OVH template`{.action} (to use one of our installation templates) or `Install one of your templates`{.action} (to use your own), then click `Next`{.action}.

![Template selection](images/reinstalling-your-server-02.png){.thumbnail}

Select the operating system you want to install and click `Next`{.action}.

![Operating selection](images/reinstalling-your-server-03.png){.thumbnail}

If you need to modify the partioning scheme of your operating system, check the box "Customise the partition configuration" before clicking on `Next`{.action}.

![Customise the partition configuration](images/SSH_02.png){.thumbnail}

After you have finished your adjustments, click `Next`{.action} to arrive at the summary page.

### Adding an SSH key (optional)

If you are installing a Linux-based operating system, you can add your SSH key in the last step of the installation process.

![Customise the partition configuration](images/SSH_03.png){.thumbnail}

If you already have an SSH key registered, it will be listed in the drop-down menu under "SSH keys" at the bottom. Otherwise, you will need to add one in the "My services" section first.

To achieve this, open the sidebar navigation by clicking on your name in the top right corner and use the shortcut `Products and services`{.action}.

![Customise the partition configuration](images/SSH_13.png){.thumbnail}

In "My services", switch to the `SSH keys`{.action} tab and click on `Add an SSH key`{.action}.

![Customise the partition configuration](images/SSH_14.png){.thumbnail}

As we are installing a dedicated server (or a VPS), make sure to select "Dedicated" from the drop-down menu.

In the new window, enter an ID (a name of your choice) and the key itself (of type RSA, ECDSA or Ed25519) into the respective fields.

![Customise the partition configuration](images/SSH_12.png){.thumbnail}

For a detailed explanation on how to generate SSH keys, please refer to [this guide](../../public-cloud/create-ssh-keys).


> [!primary]
>
> Some operating systems or platforms, such as Plesk and Windows, require a licence to be purchased prior to installation. You can buy this [licence from OVHcloud](https://www.ovhcloud.com/en-gb/bare-metal/os/), or from a reseller. You will then need to integrate it manually, through the operating system itself, or through your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager).
>
You can manage your licences in the Control Panel in the `Bare Metal Cloud`{.action} section under `Licences`{.action}. In this section, you can also order licences or add your own SPLA Windows or SPLA SQL server licence (via the `Actions`{.action} button).
>


### Logging on to your server

#### Linux

Once the installation is completed, you will get an email containing your password for root access. Root access lets you connect to your server via SSH, which is a secure communication protocol. You can access your server through a command terminal (Linux or MAC), or through third-party software on Windows (e.g.: PuTTy).

Once you have opened the terminal, type the following command to log on to your server, replacing the text after the @ symbol with the information required (IP address or server reference name). Your server's reference name will always start with *ns*.

**Example using an IP address**

```sh
ssh root@IPv4_of_your_server
```

**Example using a server reference**

```sh
ssh root@your_server_reference_name
```

#### Windows

Once the installation is completed, you will get an email containing your password for administrative (root) access. You will need to use these credentials to connect to the server via RDP (**R**emote **D**esktop **P**rotocol). Once you've connected, Windows will guide you through an intial setup.


### Securing your dedicated server

As explained in the “Objective” section of this guide, you are the administrator of your dedicated server. As such, you are responsible for your data and its security. However, the following tips will help you to secure it:

- Keep your operating system up to date
- Keep your software up to date
- Change your default SSH port (port 22) to another port
- Change your root password
- Create a new system user with restricted access for day-to-day use

### Network configuration

#### Network bridging

Network bridging is the action taken by network equipment to create an aggregate network from either two or more communication networks, or two or more network segments. Bridging is distinct from routing, which allows the networks to communicate independently while remaining separate.

The Network Bridge configuration is most commonly used in the context of virtualisation, to allow each Virtual Machine to have its own public IP address.

For more information on network bridging, please refer to our guide: [Network Bridging](../network-bridging/){.external}.

#### IP aliasing

IP aliasing is the process of associating two or more IP addresses to the same network interface. This allows your server to establish multiple connections to a network, each serving a different purpose.

For detailed instructions on how to configure IP aliasing, please refer to [this guide](../network-ipaliasing).

#### IPv6 configuration

All OVHcloud dedicated servers are delivered with a /64 IPv6 block. To use the addresses in this block, you will need to make some network configuration changes. Please refer to our guide: [IPv6 Configuration](../network-ipv6/).


### Troubleshooting

OVHcloud deploys all its dedicated servers with an IPMI (Intelligent Platform Management Interface) console, which runs in your browser or from a Java applet, and enables you to connect directly to your server, even if it has no network connection. This makes it good for troubleshooting issues that may have taken your server offline.

For more information, please refer to our guide: [Using the IPMI with dedicated servers](../use-ipmi-dedicated-servers).

### Rescue mode

For any kind of issue the first general troubleshooting step to take is rebooting your server into rescue mode from your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager). It is important to identify server issues in this mode to exclude software-related problems before contacting our support teams.

Please refer to the [rescue mode guide](../ovh-rescue/).


## Go further

Join our community of users on <https://community.ovh.com/en/>.
