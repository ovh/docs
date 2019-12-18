---
title: 'Getting started with a Windows instance'
slug: get-started-with-windows-instance
excerpt: 'Find out how to install a Windows instance and connect to it for the first time'
legacy_guide_number: 1995
section: 'Knowledge base'
---

**Last updated 17th December 2019**

## Objective

You can use a Public Cloud instance if you would like to host websites using IIS, or if you want to host applications that are only compatible with Windows. Our instances can be installed on [Windows Desktop](https://www.ovh.co.uk/public-cloud/prices/){.external} operating systems.

Once you have deployed your instance, you will need to complete the installation via the VNC console.

**This guide will outline the procedure to follow in order to access your Windows instance after it is installed.**

## Requirements

- a Public Cloud project
- an instance [created via the OVHcloud Control Panel](https://docs.ovh.com/gb/en/public-cloud/create_an_instance_in_your_ovh_customer_account/) with a Windows Desktop operating system

## Instructions

### Step 1: Configure your password.

Unlike a Linux instance, a Windows instance is not installed with a pre-configured SSH key. 

For this reason, you will need to complete the installation via the VNC console:

- Click on the `...`{.action} to the right of your instance, then `Instance details`{.action}:

![windowsinstance](images/firststepswindows1.png){.thumbnail}

- Go to the `VNC console`{.action} tab:

![windowsinstance](images/firststepswindows2.png){.thumbnail}

- Select your prefferred language and keyboard information, then enter your chosen password:

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