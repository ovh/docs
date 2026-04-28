---
title: "Changing an FTP user password"
excerpt: "Find out how to change the password for an FTP user created on your OVHcloud Web Hosting plan"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

OVHcloud web hosting plans provide access to an online file storage space, which you can use via the **FTP** protocol: FTP storage space.

You can access this space using an **FTP user** and its associated password.

This access allows you to [put your website online](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online).

**This guide explains how to change the password for an FTP user created on your OVHcloud Web Hosting plan.**

> [!warning]
>
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](/links/partner) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the ["Go further"](#go-further) section of this guide.
>

## Requirements

- An OVHcloud [Web Hosting plan](/links/web/hosting)

<!-- CP-NAV-START:web-hosting -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Hosting plans](/links/control-panel/web-hosting)
- **Navigation path:** `Web Cloud`{.action} > `Hosting plans`{.action} > Select your web hosting plan

---
<!-- CP-NAV-END:web-hosting -->

## Instructions

### Modify the FTP user password

> [!primary]
>
> For more information on password management best practices, please refer to the guide "[Setting and managing an account password](/pages/account_and_service_management/account_information/manage-ovh-password)".

Depending on which OVHcloud [Web Hosting plan](/links/web/hosting) you have, there are two different ways to change your FTP user password.

**Click on your plan to view the content.**

<!-- CP-STEPS-START:change-ftp-password-perso -->
/// details | Personal and 100M free hosting plans (single FTP user)

Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `FTP - SSH`{.action} tab.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Step 3**
>>
>> A table will display the *FTP users* created on your Web Hosting plan. Click on the *pencil icon* in the `Password`{.action} column, enter the new password **in accordance with the password policy**, then confirm the change by clicking on the *green* validation button.
>>
>> ![change-ftp-password-step1-perso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-perso.png){.thumbnail}

///
<!-- CP-STEPS-END:change-ftp-password-perso -->

<!-- CP-STEPS-START:change-ftp-password-pro-performance -->
/// details | Pro and Performance plans (multiple FTP users)

Click on the tabs below to view each of the **3** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Hosting plans](/links/control-panel/web-hosting) page, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `FTP - SSH`{.action} tab.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Step 3**
>>
>> A table will display the *FTP users* created on your Web Hosting plan. Click on the `...`{.action} button to the right of the FTP user concerned, then `Change password`{.action}. In the window that pops up, enter the new password you want **by following the password policy**, enter it again and click the `Confirm`{.action} button.
>>
>> ![change-ftp-password-pro](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/change-password-pro.png){.thumbnail}

///
<!-- CP-STEPS-END:change-ftp-password-pro-performance -->

> [!primary]
>
> Your new password must respect the following **password policy**:
>
> - Minimum 9 characters
> - Maximum 30 characters
> - At least one capital letter
> - At least one lower-case letter
> - At least one number
> - Be composed only of numbers and letters

Then go to the `Ongoing tasks`{.action} tab and refresh the page regularly. Your change will be effective within a few minutes.

### Access your storage space

To access your FTP storage space, please refer to our guide ["Logging in to your Web Hosting plan’s storage space"](/pages/web_cloud/web_hosting/ftp_connection).

## Go further <a name="go-further"></a>

[Setting and managing an account password](/pages/account_and_service_management/account_information/manage-ovh-password)

[Logging in to your Web Hosting plan’s storage space](/pages/web_cloud/web_hosting/ftp_connection)

[Put your website online](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).