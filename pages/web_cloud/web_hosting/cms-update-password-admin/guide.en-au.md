---
title: "How to change the admin password of a CMS"
excerpt: "Find out how to change your CMS admin password directly via the CMS admin interface, or by using phpMyAdmin in the OVHcloud Control Panel"
updated: 2024-10-15
---

## Objective

Have you lost access to your WordPress, PrestaShop, Joomla! or Drupal administration interface? Or would you just like to increase your website’s security by changing your admin password? In this guide, you can find step-by-step instructions on how to do this, either directly via the CMS administration interface, or by using phpMyAdmin in the OVHcloud Control Panel.

**Find out how to change your admin password on WordPress, PrestaShop, Joomla! and Drupal CMS, to guarantee security and optimal access to your website.**

## Requirements

- A [web hosting plan](/links/web/hosting) that allows you to install a 1-click module.
- A 1-click module on your web hosting plan (if you have not done this already, follow the instructions from this [guide](/pages/web_cloud/web_hosting/cms_install_1_click_modules)).
- Accesss to the [OVHcloud Control Panel](/links/manager) (only for the phpMyAdmin part of this guide).

## Instructions

There are several ways of changing the admin password for your CMS, depending on your situation:

- [via automatic email (forgot password)](#via-email)
- [via your CMS administration interface](#via-cms)
- [via phpMyAdmin via the OVHcloud Control Panel](#via-phpmyadmin)

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This tutorial is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or the publisher of the CMS you have chosen to install if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this tutorial.
>
> Find below the links to the respective official pages of the CMS mentioned above:
>
> - [WordPress](https://wordpress.com/support/){.external}
> - [Joomla!](https://www.joomla.org/){.external}
> - [Drupal](https://www.drupal.org/){.external}
> - [PrestaShop](https://www.prestashop.com/en/support){.external}

### Change your admin password via automatic email (forgotten password) <a name="via-email"></a>

Do you still have access to your emails and the login interface? This method is the fastest, by avoiding accessing the CMS settings or passing through phpMyAdmin.

> [!tabs]
> WordPress
>>
>> To change your WordPress admin password via the "Forgotten your password" option, follow the steps from the "[Through the automatic emailer](https://wordpress.org/documentation/article/reset-your-password/#through-the-automatic-emailer)" section of the official WordPress documentation.
>>
> PrestaShop
>>
>> Access your website’s PrestaShop login interface (e.g. `https://your-domain.com/admin/`), then click "Forgotten your password" to receive an email prompting you to reset your password.
>>
> Joomla!
>>
>> To change your Joomla! admin password via the "Forgotten your password" option, follow the steps from the "[Frontend](https://docs.joomla.org/Resetting_a_user_password/en)" section of the official Joomla! documentation.
>>
> Drupal
>>
>> To change your Drupal admin password via the "Forgotten your password" option, follow these steps:
>>
>> - Access the admin login interface.
>> - Click on the "Request a new password" link.
>> - In the dialog box that appears, enter either the username or the email address associated with the administrator account.
>> - Click "Send new password" or "Email new password".
>> - Open the email you have received and click on the link provided.
>> - Enter your new password and confirm.
>> - Go back to the Drupal login page and log in with the new password you have just set.

### Change your admin password via the CMS <a name="via-cms"></a>

Do you have access to the CMS administration interface and know your current password? Change your password directly from your admin account settings.

> [!tabs]
> WordPress
>> To change your WordPress admin password via the CMS management interface, follow the steps from the "[To Change Your Password](https://wordpress.org/documentation/article/reset-your-password/#to-change-your-password)" section of the official WordPress documentation.
>>
> PrestaShop
>>
>> The PrestaShop official documentation doesn't explain how to change the administrator password via the login interface. Please refer to [PrestaShop official documentation](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password) to find another way to update your password.
>>
> Joomla!
>>
>> To change your Joomla! admin password via the admin interface, follow the steps from the "[Backend](https://docs.joomla.org/Resetting_a_user_password/en)" section of the official Joomla! documentation.
>>
> Drupal
>>
>> The official Drupal documentation does not explain how to change the admin password via the login interface. Refer to [official Drupal documentation](https://www.drupal.org/node/44164) for an alternative method of updating your password.

### Change your admin password via phpMyAdmin in the OVHcloud Control Panel <a name="via-phpmyadmin"></a>

Do you no longer have access to the CMS administration interface, or can't use the "Forgotten your password" feature because the associated email address can't be accessed? Use phpMyAdmin from your [OVHcloud Control Panel](/links/manager) to reset the password directly from the database.

Log in to your [OVHcloud Control Panel](/links/manager) then select `Web Cloud`{.action}. Click `Hosting`{.action} and select the solution concerned. In the `Databases`{.action} tab, identify the database used by your CMS, click the `...`{.action} button, then `Go to phpMyAdmin`{.action}.

Enter the database credentials (username and password) that you defined when you created the database. Once you have logged in to phpMyAdmin, click on the relevant tab below.

> [!tabs]
> WordPress
>>
>> Follow the steps from the "[Through phpMyAdmin](https://wordpress.org/documentation/article/reset-your-password/#through-phpmyadmin)" section of the official WordPress documentation.
>>
> PrestaShop
>>
>> Follow the steps from the "[You do not have access to your e-mail address](https://help-center.prestashop.com/hc/en-us/articles/10799006732818-Recover-your-admin-password)" section of the PrestaShop official documentation.
>>
> Joomla!
>>
>> Follow the steps from the "[Resetting in phpMyAdmin](https://docs.joomla.org/Resetting_a_user_password/en)" section of the official Joomla! documentation.
>>
> Drupal
>>
>> Once you have logged in to phpMyAdmin, follow these steps:
>>
>> - Select the database Drupal uses for your website.
>> - Locate the `users_field_data` table (for Drupal 8 and later versions) or users table (for Drupal 7 and earlier versions).
>> - Find the admin user with `uid = 1`.
>> - Click `Modify`.
>> - In the `pass` field, select `MD5` in the `Function` column to the right of the field.
>> - Enter a new password in the value column.
>> - Commit and save the changes.

## Go further <a name="go-further"></a>

[Managing your CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

[Tutorial - Install WordPress manually](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Manually install Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Manually install Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Install PrestaShop manually](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).