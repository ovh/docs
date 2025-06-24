---
title: 'Changing the hostname of a Public Cloud instance'
excerpt: 'Find out how to change the hostname of a Public Cloud instance'
updated: 2025-03-20
---

## Objective

With the cloud-init module, you can configure your [Public Cloud instance](/links/public-cloud/public-cloud){.external} when you create it, and each time you reboot it. Consequently, if you wish to reconfigure your hostname, because of an error when creating your instance or to reconfigure your email server, you will need to disable the Cloud-init module. This will configure the hostname so that it is not re-established.

**This guide will show you how to reconfigure cloud-init so that you can modify your instance’s hostname.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. If you encounter any difficulties performing these actions, please contact a [specialist service provider](/links/partner) and/or discuss the issue with our community on <https://community.ovh.com/en/>. OVHcloud cannot provide you with technical support in this regard.
>
> This guide is for instances based on Linux distributions **only**.
>

## Requirements

- An [OVHcloud Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps)
- SSH access (sudo) to the instance

## Instructions

### Disable the cloud-init module

> [!primary]
>
> For this guide we will use the file editor **vi** because it is present by default on Linux distributions. You can of course use the editor of your choice.
>
> Basic use of vi:
>
> - Press **i** to enter text insertion mode.
> - Press **Esc** (Esc) to exit insertion mode.
> - Type **:wq** then **Enter** to save and exit.
> - Type **:q!** then **Enter** to exit without saving.

To disable cloud-init, you will need to start by modifying the configuration file:

```sh
sudo vi /etc/cloud/cloud.cfg
```

Simply add the following two lines, or modify them if they already exist:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Modify the hostname

The first step involves modifying the hostname. In this example, we will change the hostname to **webserver**. You can of course edit as it suits your preference:

```sh
sudo vi /etc/hostname
```

Add or replace content by:

```sh
webserver
```

Next, you will need to modify the `/etc/hosts` file:

```sh
sudo vi /etc/hosts
```

Add or replace content by:

```sh
127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

You will then need to reboot the instance:

```bash
sudo reboot
```

After the reboot, the hostname modifications will be properly applied:

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Go further 

Join our [community of users](/links/community).
