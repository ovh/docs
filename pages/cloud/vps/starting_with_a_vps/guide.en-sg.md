---
title: 'Getting started with a VPS'
excerpt: 'Find out the first steps of using a VPS'
slug: getting-started-vps
section: 'Getting started'
order: 1
---

**Last updated 15th June 2020**

## Objective

A virtual private server (VPS) is a virtualised dedicated server. Unlike Web Hosting plans (also described as “shared hosting”), which are managed on the technical level by OVHcloud, you are fully responsible for administrating your VPS.

**This guide provides some basic information for getting started with a VPS.**


> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.


## Requirements

- a [Virtual Private Server](https://www.ovhcloud.com/en-sg/vps) in your OVHcloud account
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)
- login credentials received via email after the installation


## Instructions

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager), go to the `Server`{.action} section and select your server from the list in the left-hand navigation under `VPS`{.action}. This dashboard contains important information about your service and allows you to perform essential operations. It will appear differently, depending on the product range of your VPS solution. 

- If you have just ordered a VPS, its reference name will look like this: *vps-XXXXXXX.vps.ovh.net* (where *X* stands for numbers and letters). 

- If you are managing an older VPS, you will notice that the reference name is structured differently: *vpsXXXX.ovh.net* (in which *X* stands for numbers). 

For the current VPS range, please continue with the next section, **First steps (current VPS range)**. For an older VPS model, skip to [**First steps (older VPS range)**](./#first-steps-older-vps-range_1) in this guide.

### First steps (current VPS range)

#### Connecting to your VPS

At the first installation or when reinstalling from the Control Panel, a user with elevated permissions will be created and you will be sent an email containing the login credentials. The username will be chosen according to the operating system, for example "ubuntu" or "debian".

You can now connect to your VPS via SSH with username and password. (SSH is a secure communication protocol. Find out more in [this guide about SSH on dedicated servers](../../dedicated/ssh-introduction/)). You can access your server through a command line terminal (Linux or MAC) or through third-party software on Windows (we can recommend PuTTy).

Using PuTTy for example, simply open the application and enter the servername or its IPv4 address to establish a connection. You will be prompted for username and password and then you can proceed with the command line interface (CLI).

![puttyconnect](images/putty1.png){.thumbnail}

Once you have opened the terminal, type the following command to log in to your VPS with the information provided in the email (username and IPv4 address):

```sh
ssh username@IPv4_of_your_VPS
```

Since you are now logged in with root privileges (a sudo user), you can enter commands to perform administrative tasks. It is recommendable to first change your password:

```sh
$ sudo passwd
New password:
Retype new password:
passwd: password updated successfully
```
Note that passwords are not displayed. Next, switch to the "root" user and set your admin password:

```sh
$ sudo su -
# passwd
New password:
Retype new password:
passwd: password updated successfully
```

#### Installing or reinstalling your VPS

You can carry out any reinstallations directly in your Control Panel. From the "Home" tab, look for "OS/Distribution" in the box **Your VPS**. Click on `...`{.action} and then on `Reinstall my VPS`{.action}.

![VPSnewreinstallation](images/2020panel_02.png){.thumbnail}

In the popup window, you will be asked to choose:

- your operating system from the drop-down list
- [an SSH Key](../../dedicated/creating-ssh-keys-dedicated/) (optional)


![VPSnewreinstallation](images/2020panel_01.png){.thumbnail}

> [!primary]
>
> Some proprietary operating systems or platforms such as Plesk or cPanel require licences which generate additional fees. Licences can be managed from the OVHcloud Control Panel: go to the `Server`{.action} section, then click on  `Licences`{.action} in the left-hand navigation.
>
In order to have a **Windows** operating system running on a VPS, it has to be **selected in the order process**. A VPS with another OS installed cannot be reinstalled with Windows in the described way.
>

A progress bar for the reinstallation will appear in your Control Panel - please note that installation can take up to 30 minutes.

### First steps (older VPS range)


#### Connecting to your VPS (for older ranges)

When you install (or reinstall) your VPS, you will be sent an email containing your password for root access. Root access lets you connect via SSH to your VPS. SSH is a secure communication protocol. You can access your server through a command terminal (Linux or MAC) or through third-party software on Windows (we can recommend PuTTy).

Using PuTTy for example, simply open the application and enter the servername or its IPv4 address to establish a connection. You will be prompted for username and password and then you can proceed with the command line interface (CLI).

![puttyconnect](images/putty1.png){.thumbnail}

Once you have opened the terminal, type the following command to log in to your VPS, replacing the text after the @ symbol with the information required (IPv4 address or VPS reference name):

```sh
ssh root@IPv4_of_your_VPS
```

Or:

```sh
ssh root@your_VPS_reference_name
```

#### Installing or reinstalling your VPS (for older ranges)

You can carry out any reinstallations directly in your Control Panel. Simply click `Reinstall my VPS`{.action} in the "Home" tab:

![Reinstalling the VPS](images/reinstall_manager.png){.thumbnail}

A window will open, and you will be asked to choose:

- your operating system from the drop-down list
- the language
- [an SSH Key](../../dedicated/creating-ssh-keys-dedicated/) (optional)


![Reinstallation menu](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Some proprietary operating systems or platforms such as Plesk or cPanel require licences which generate additional fees. Licences can be managed from the OVHcloud Control Panel: go to the `Server`{.action} section, then click on  `Licences`{.action} in the left-hand navigation.
>
In order to have a **Windows** operating system running on a VPS, it has to be **selected in the order process**. A VPS with another OS installed cannot be reinstalled with Windows in the described way.
>

A progress bar for the reinstallation will appear in your Control Panel - please note that installation can take up to 30 minutes.

### Securing your VPS

As explained in the “Objective” section of this guide, you are the administrator of your VPS. As such, you are responsible for your data and its security.

Please refer to the guide on [Securing a VPS](../tips-for-securing-a-vps/) if you would like some basic tips.


### Securing a domain with an SSL certificate

Once you have installed and secured your VPS, you may want to secure your domain name and your website. To do this, you will need to install an SSL certificate, which will allow you to display your website in *https* as opposed to *http* only.

You can install this SSL certificate yourself manually, directly on the VPS. Please refer to the official documentation that you have been using.


## Go further

[Introduction to SSH](../../dedicated/ssh-introduction/)

Join our community of users on <https://community.ovh.com/en/>.
