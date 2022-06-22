---
title: Changing a FTP user password
slug: modify-ftp-user-password
excerpt: Find out how to change the password for a FTP user created on your OVHcloud Web Hosting plan
section: FTP and SSH
order: 2
---

**Last updated 24th January 2022**

## Objective

OVHcloud Web Hosting plans provide you with access to an online file storage space, which you can use via the **FTP** protocol.<br>You can access this space with a FTP user account and the password associated with it.
<br>This access will allow you to [put your website online](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/).

**This guide explains how to change the password for a FTP user created on your OVHcloud Web Hosting plan.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-gb/directory/) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- An OVHcloud [Web Hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

### Step 1: Access the FTP user management interface

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Go to the `Web Cloud`{.action} section, click on `Hosting plans`{.action}, then select the service concerned. Click on the `FTP-SSH`{.action} tab.

A table will display the FTP users created on your Web Hosting plan. These users allow you to access your FTP storage space to put your website files online. When you set up your Web Hosting plan, a user account will be created automatically.

### Step 2: Modify the FTP user password

> [!primary]
>
> For more information on password management best practices, follow the instructions in this [guide](https://docs.ovh.com/gb/en/customer/manage-password/).
>

Depending on which OVHcloud [Web Hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/) you have, there are two different paths for changing your FTP user password user via the `FTP-SSH`{.action} tab:

- **For Web Hosting plans that do not allow you to create a second FTP user** (Start 10M and Personal hosting): Click on the pencil icon in the `Password`{.action} column, enter the new password, then confirm the change by clicking on the green button.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **For plans that allow you to create multiple FTP users** (Professional and Performance): Click on the three dots to the right of the concerned FTP user, then on `Change password`{.action}. Enter your new password in the window that pops up, enter it again and click on `Confirm`{.action}.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Choose the new password for your database. In both cases, they must meet the following conditions:

- Minimum 8 characters
- Maximum 30 characters
- At least one capital letter
- At least one lower-case letter
- At least one number
- Be composed only of numbers and letters

Then go to the `Ongoing Jobs`{.action} tab and refresh the page regularly. Your change will be effective within a few minutes.

### Step 3: Access your storage space

There are several ways you can log in to your hosting space to access the files:

- **FTP Explorer**: You can access this software via the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). To use it, click on the `FTP Explorer`{.action} button in the `FTP-SSH`{.action} tab.

- **FTP software**: You will need to install FTP-compatible software on your computer (for example, [FileZilla](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/)).

- **SSH access** (only on Professional and Performance plans): Please read our guide on "[Accessing a web hosting plan via SSH](https://docs.ovh.com/gb/en/hosting/web_hosting_ssh_on_web_hosting_packages/)" to use this connection protocol.

> [!primary]
>
> For more information, please refer to our guide on "[Logging in to your Web Hosting plan’s storage space](https://docs.ovh.com/gb/en/hosting/log-in-to-storage-ftp-web-hosting/)".
>

## Go further <a name="gofurther"></a>

[Setting and managing an account password](https://docs.ovh.com/gb/en/customer/manage-password/)

For specialised services (SEO, development, etc.), contact your [OVHcloud partners](https://partner.ovhcloud.com/en-gb/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
