---
title: 'Getting started with a Windows instance'
slug: get-started-with-windows-instance
excerpt: 'Find out how complete the installation of a Public Cloud instance on Windows'
legacy_guide_number: 1995
section: Getting started
order: 6
hidden: true
---

**Last updated 4th Febuary 2022**

## Objective

A Windows Public Cloud instance can be used for hosting applications that are only compatible with Windows or websites running on Microsoft IIS. Unlike other instance types, Windows instances are not created with a pre-configured SSH key. The installation process therefore needs to be completed by connecting to the instance via the OVHcloud VNC console.

**This guide explains how to set up your Windows instance after it is created.**

## Requirements

- A newly deployed [Public Cloud Windows instance](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and switch to the `Public Cloud`{.action} section. After selecting your project, open `Instances`{.action} in in the left-hand menu.

Once your Windows instance is ready (status `Activated`), click on the instance name to open the dashboard.

Switch to the tab `VNC console`{.action}. The initial setup page of the Windows installation should be displayed.

### Step 1: Configure your password.

- Select your preferred language and keyboard information, then enter your chosen password:

![windowsinstance](images/firststepswindows3.png){.thumbnail}

> [!primary]
>
> Some keys on the VNC console keyboard do not correspond to the keys on AZERTY keyboards. If you are using an AZERTY keyboard, please double-check your password before you confirm.
>

![windowsinstance](images/firststepswindows4.png){.thumbnail}

### Step 2: Access the remote desktop.

Once you have set your password, you can access your Windows instance via a remote desktop connection.

To connect via a Windows desktop:

![windowsinstance](images/firststepswindows5.png){.thumbnail}

To connect via a Linux desktop, enter the following command:

```
rdesktop 12.34.56.789 -u administrator
```
 
### Step 3: Improve internet browsing.

Internet Explorer enhanced security is enabled by default. When you browse the web, a warning message will appear a number of times to flag security risks and block downloads: 

![windowsinstance](images/firststepswindows6.png){.thumbnail}

To stop this from happening, you can disable enhanced security via your server manager.

- Open **Server Manager**, then select the `Local Server`{.action} tab (1).

![windowsinstance](images/firststepswindows7.png){.thumbnail}

- Click `On`{.action} (2) next to **Internet Explorer enhanced security configuration** to switch off the option.

![windowsinstance](images/firststepswindows8.png){.thumbnail}

## Go further

[Access and Security in Horizon](https://docs.ovh.com/gb/en/public-cloud/access_and_security_in_horizon/){.external}


Join our community of users on <https://community.ovh.com>.
