---
title: Changing an FTP user password
excerpt: Find out how to change the password for an FTP user created on your OVHcloud Web Hosting plan
updated: 2023-05-29
---

**Last updated 29th May 2023**

## Objective

OVHcloud web hosting plans provide access to an online file storage space, which you can use via the **FTP** protocol: FTP storage space.

You can access this space using an **FTP user** and its associated password.

This access allows you to [put your website online](/pages/web/hosting/hosting_how_to_get_my_website_online/).

**This guide explains how to change the password for an FTP user created on your OVHcloud Web Hosting plan.**

> [!warning]
>
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-ca/directory/) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the ["Go further"](#gofurther) section of this guide.
>

## Requirements

- An OVHcloud [Web Hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)

## Instructions

### Step 1: Access the FTP user management interface

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca). Go to the `Web Cloud`{.action} section, click on `Hosting plans`{.action}, then select the service concerned. Click on the `FTP-SSH`{.action} tab.

A table will display the *FTP users* created on your Web Hosting plan. These users allow you to access your FTP storage space to put your website files online. When you set up your Web Hosting plan, a user account will be created automatically.

### Step 2: Modify the FTP user password

> [!primary]
>
> For more information on password management best practices, follow the instructions in this [guide](/pages/account/customer/manage-ovh-password/).
>

Your new password must respect the following **password policy**:

- Minimum 8 characters
- Maximum 30 characters
- At least one capital letter
- At least one lower-case letter
- At least one number
- Be composed only of numbers and letters

Depending on which OVHcloud [Web Hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/) you have, there are two different paths for changing your FTP user password user via the `FTP-SSH`{.action} tab:

- **For Web Hosting plans that do not allow you to create a second FTP user** (*Personal hosting*): Click on the *pencil icon* in the `Password`{.action} column of the table that appears, enter the new password **in accordance with the password policy**, then confirm the change by clicking on the *green* validation button.

![change-ftp-password-step1-perso](images/change-ftp-password-step1-perso.png){.thumbnail}

- **For plans that allow you to create multiple FTP users** (*Professional* and *Performance*): Click on the `...`{.action} button to the right of the FTP user concerned, then `Change password`{.action}. In the window that pops up, enter the new password you want **by following the password policy**, enter it again and click the `Confirm`{.action} button.

![change-ftp-password-step1-pro](images/change-ftp-password-step1-pro.png){.thumbnail}

Then go to the `Ongoing Jobs`{.action} tab and refresh the page regularly. Your change will be effective within a few minutes.

### Step 3: Access your storage space

To access your FTP storage space, please refer to our guide ["Logging in to your Web Hosting plan’s storage space"](/pages/web/hosting/ftp_connection/).

## Go further <a name="gofurther"></a>

[Setting and managing an account password](/pages/account/customer/manage-ovh-password/)

[Logging in to your Web Hosting plan’s storage space](/pages/web/hosting/ftp_connection/)

[Put your website online](/pages/web/hosting/hosting_how_to_get_my_website_online/)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ca/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ca/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
