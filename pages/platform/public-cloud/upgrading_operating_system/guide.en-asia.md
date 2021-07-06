---
title: 'Upgrading your operating system'
slug: upgrading-operating-system
excerpt: Find out how to upgrade your end of life operating system
section: 'Tutorials'
order: 14
---

**Last updated 2nd July 2021**

## Objective

This tutorial will provide you with the steps to upgrade an end of life operating system to a new version.

> [!alert]
> Warning: As with any major release upgrade of an operating system there is risk of failure, data loss or broken software configuration. 
> Therefore, OVHcloud strongly recommends to [backup your server](../save_an_instance) and conduct extensive testing on your applications to make sure they work on the new operating system version prior to following this tutorial.
>

> [!primary]
> To avoid problems mentioned above, it is recommended to install a new server with the new operating system you are upgrading to and migrate the data instead. 
> You may still need to review differences in your application, but the operating system will likely have greater stability.
>

## Requirements

- Root access to the server
- Backup must be taken before starting

## Instructions

### Ubuntu

Before starting with the major release upgrade, make sure that you update to the latest versions of all packages installed on the current release:

```sh
$ sudo apt-get update
```

Next, you must upgrade your installed packages to their latest versions:

```sh
$ sudo apt-get upgrade -y
```

Once it has finished, you are ready to do dist-upgrade which will perform further upgrades that may need to be done:

```sh
$ sudo apt-get dist-upgrade -y
```

Finally, you are now ready for the major release upgrade. Ubuntu is now providing a tool called "do-release-upgrade" which makes upgrading safer and easier. Let's start with the upgrade:

```sh
$ sudo do-release-upgrade
```

Follow the instructions which will mainly consist of confirming you wish to proceed with specific actions.

Please note:

1. You could be asked by the tool to restart your server first before doing the upgrade. To do this, just type "reboot" and press enter.
2. You will be advised that doing this over an SSH connection is not recommended. Since there is no physical access to the server, SSH is the primary way to access your server. Ubuntu will start a new SSH service on another port so that in case of failure you still have another access. Furthermore, you will still be able to access the server through the console if you are completely locked out by SSH.
3. During the upgrade, you may be asked to confirm the removal of packages that are no longer being supported. You need to double check this has no impact on your applications before continuing.

Once the upgrade has completed, the server will reboot itself and you will lose connection until it boots up again. 
Few minutes later you should be able to log in and see a message similar as the following (the version will be the next available version compared to your previous version):

```sh
$ Welcome to Ubuntu 18.04.5 LTS (GNU/Linux 4.15.0-147-generic x86_64)
```

> [!primary]
> The new version will not be reflected on the OVHcloud Control Panel / API and on the Horizon / OpenStack API when you upgrade the operating system instead of reinstalling it.
>

Now verify if your applications are working as expected. In case there are issues, we recommend restoring your backup that was taken prior to the upgrade.

### Fedora

Before starting with the major release upgrade, you first need to ensure that you will update to the latest versions of all packages installed on the current release. Enter this command:

```sh
$ sudo dnf upgrade --refresh
```

Now reboot the server:

```sh
$ reboot
```

Once the server is rebooted, install the upgrade package:

```sh
$ sudo dnf install dnf-plugin-system-upgrade
```

Now that you have the required package, you can perform the upgrade. System upgrades are only officially supported and tested over 2 releases at most (e.g. from 32 to 34). 
In this example we will upgrade from Fedora 32 to 33:

```sh
$ sudo dnf system-upgrade download --releasever=33
$ sudo dnf system-upgrade reboot
```

Once the version is downloaded and the upgrade process has been initiated, the server will reboot to complete the upgrade. 
<br>It may take a while before you an connect again to the server as the upgrade takes a while to be completed.

Verify if your applications are working as expected. In case there are issues, we recommend restoring your backup that was taken prior to the upgrade.

> [!primary]
> If you encounter any issues, you may find answers to your questions on the [Fedora Docs](https://docs.fedoraproject.org/en-US/quick-docs/dnf-system-upgrade/){.external}.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
