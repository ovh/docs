---
title: Getting started with a VPS
excerpt: Learn the basics of using a VPS
slug: getting-started-vps
section: Getting started
order: 1
---

**Last updated 15th June 2019**

## Objective

A virtual private server (VPS) is a virtualised dedicated server. Unlike web hosting plans (described as “shared”), which are technically managed by OVH, you are fully responsible for administrating your VPS.

**This guide will give you a few tips to help you manage your newly delivered and installed VPS.**


> [!warning]
>
> While OVH provides you with the devices, the responsibility rests solely in your hands. Keep in mind that OVH is an IAAS (Infrastructure As A Service), then you are the only one who can access your server(s), as you are administrators. For this reason, you are the only responsible for your service’s software and security.
This guide is designed to help you with the most common tasks. However, we recommend contacting a specialized service provider if you experience any difficulties or have any doubts about managing, using and securing a server. You can find more information in the “Go further” section of this guide.
>


## Requirements

- You need to have purchased a VPS on the [OVH website](https://www.ovh.co.uk/vps/){.external}.
- You need to have received the email with your access ID after the installation (validated during your order).


## Instructions

Once you have logged in to your [Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, you simply need to read the information about your VPS, go to the `Server`{.action} section, then to `VPS`{.action} in the left-hand column. In this section, you will see everything about your VPS:

### Logging in to a VPS

When you install (or reinstall) your VPS, you will get an email containing your password for root access. Root access lets you connect via SSH to your VPS. SSH is a secure communication protocol. You can access your server through a command terminal (Linux or MAC) or through third-party software on Windows (e.g.: PuTTy).

Once you have opened the terminal, type the following command to log in to your VPS, replacing the text after the @ symbol with the information required (IPv4 address or VPS reference name):

```sh
ssh root@IPv4_of_your_VPS
```

Or:

```sh
ssh root@your_VPS_reference_name
```

The reference name of your VPS always starts with vpsXXXX.ovh.net (where XXXX is a series of numbers).


### Installing or reinstalling your VPS

You can carry out any reinstallations directly in your Control Panel. Simply click `Reinstall my VPS`{.action}:

![Reinstalling the VPS](images/reinstall_manager.png){.thumbnail}

A window will open, and you will be asked to choose:

- Your operating system from the drop-down list
- The language
- [An SSH Key](https://docs.ovh.com/gb/en/dedicated/ssh-introduction/){.external}


![Reinstallation menu](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Some operating systems or platforms such as Plesk or Windows require a licence to be purchased prior to installation. You can buy this licence from OVH, or from a reseller. You will then need to integrate it manually, or through your Control Panel. You can manage your licences under `Dedicated`{.action}, then `Licences`{.action}.
In this section, you can also order licences (via the `Order`{.action} button on the right), or add your own SPLA Windows or SPLA SQL server licence (via the `Actions`{.action} button on the right).
>

A progress bar will appear in your Control Panel, for the reinstallation - please note that installation can take up to 30 minutes.

### Securing your VPS

As explained in the “Objective” section of this guide, you are the administrator of your VPS. As such, you are responsible for your data and its security.

Please refer to the guide on [Securing a VPS](https://docs.ovh.com/gb/en/vps/tips-for-securing-a-vps/) if you wish to get some basic tips.


### Securing a domain with an SSL certificate

Once you have installed and secured your VPS, you may want to secure your domain name and your website. To do this, you will need to install an SSL certificate, which will allow you to display your website in *https* as opposed to *http* only.

You can install this SSL certificate yourself manually, directly on the VPS. Please refer to the official documentation that you have been using.

For a more automated process, OVH also offers the [SSL Gateway](https://www.ovh.co.uk/ssl-gateway/). For more information, please refer to the [product page](https://www.ovh.co.uk/ssl-gateway/){.external} or [guide documents](https://docs.ovh.com/gb/en/ssl-gateway/){.external} on this solution.

## Go further

[Introduction to SSH](https://docs.ovh.com/gb/en/dedicated/ssh-introduction/){.external}

Join our community of users on <https://community.ovh.com/en/>.
