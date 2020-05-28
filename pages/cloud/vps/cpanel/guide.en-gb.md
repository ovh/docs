---
title: 'Deploying cPanel on VPS 2020'
slug: cpanel
excerpt: 'Find out how to instantiate a VPS with the pre-installed cPanel application'
section: 'Advanced usage'
---

**Last updated 28th May 2020**

## Objective

cPanel is a control panel designed for web hosting. Web hosting tasks are simplified, as it is made up of a graphical interface that allows the automation of settings.

**Learn how to deploy cPanel with pre-installed applications on a VPS 2020**

## Requirements

In order to install your cPanel server, you will first need to order a VPS with a cPanel distribution.

![horizon](images/cpanel_order.png)

When your VPS is ready, you will receive an email providing the information to connect to your cPanel server:

>Your application(s):
>
>You can connect to cPanel from https://*hostname*:2087/*session_parameters*

If you already have a VPS and want to have cPanel on it, you can reinstall the VPS from your control panel with the "CentOS 7 + cPanel" template.

> [!warning]
>
> If you reinstall a VPS, all data stored on the VPS will be lost.
>


## Instructions

### First connection

Once you received the email with the unique link, please proceed to the link to do the initial setup. 

> [!primary]
>
> If the link has expired already, please reinstall the VPS again with cPanel.
>

The URL above allows you to log in without credentials (user and password) to your WHM manager.

1. First read and accept the terms of cPanel

![horizon](images/license_validation.png)

2. Provide your email and nameservers you wish to set on the VPS

![horizon](images/setup_config_cpanel.png)

3. Set root password

![horizon](images/change_root.png)

Now you should be able to login to WHM and SSH using the root user with the password that was just set.

### Securing your service

We recommend that you take further additional steps to ensure you secure your WHM & VPS. For this we recommend reading the recommendations provided by cPanel [here](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/).

Furthermore we recommend setting up the [OVHcloud network firewall](https://docs.ovh.com/gb/en/dedicated/firewall-network/) and [setup a backup solution](https://docs.ovh.com/gb/en/vps/tips-for-securing-a-vps/#backing-up-your-system-and-your-data) on your VPS.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
