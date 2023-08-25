---
title: 'Changing the hostname of a Public Cloud instance'
excerpt: 'Find out how to change the hostname of a Public Cloud instance'
legacy_guide_number: g1928
updated: 2018-09-18
---


## Objective

With the cloud-init module, you can configure your [Public Cloud instance](https://www.ovh.com/asia/public-cloud/instances/){.external} when you create it, and each time you reboot it. If you wish to reconfigure your hostname in order to fix an error creating your instance, or reconfigure your email server, you will need to disable the cloud-init module. This will configure the hostname so that it is not re-established.

**This guide will show you how to reconfigure cloud-init so that you can modify your instance’s hostname.**

> [!warning]
>
> OVHcloud provides services which you are responsible for.  In fact, as we do not have administrative access to these machines, we are not administrators and we cannot provide you with support. This means that it is up to you to manage the software and security daily.
>
> We have provided you with this guide in order to help you with common tasks. However, we advise contacting a specialist provider if you experience any difficulties or doubts about administration, usage or server security. You can find more information in the "Go further" section in this guide.
>


## Requirements

- An [OVHcloud Public Cloud instance](https://www.ovh.com/asia/public-cloud/instances/){.external}
- [Root access](/pages/public_cloud/compute/public-cloud-first-steps#step-4-connecting-to-your-instance/){.external} (via SSH) to the instance


## Instructions

### Disable the cloud-init module.

To disable cloud-init, you will need to start by modifying the configuration file:

```sh
sudo vim /etc/cloud/cloud.cfg
```

Simply add the following two lines, or modify them if they already exist:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Modify the hostname.

The first step involves modifying the hostname:

```sh
sudo vim /etc/hostname
webserver
```

Next, you will need to modify the `/etc/hosts` file:

```sh
sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

You will then need to reboot the instance:

```bash
sudo reboot
```

After you reboot it, the hostname modifications will be properly applied:

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Go further 

Join our community of users on <https://community.ovh.com/en/>.
