---
title: What do I do if I have a 403 forbidden page?
excerpt: How to get your website back online if it displays a 403 forbidden page
slug: diagnostic-403-forbidden
section: Troubleshooting
order: 08
updated: 2023-06-09
---

**Last updated 09th June 2023**

## Objective

A "**403 forbidden**" page may appear in the following cases:

- FTP access rights (CHMOD) are insufficient or restricted. Access to the file/folder/website you want to access via your browser is then denied by the web server of your web hosting plan.

- The **.htaccess** file contains an access restriction rule.

- A security plugin protects web browser access to your files/folder/websites.

- An application firewall is enabled.

Following the detection of suspicious operation, our security robots may temporarily block access to files on your web hosting plan. This is supposed to prevent:

- The progress of any potential hacking of your data stored on your web hosting plan.

- Sending malicious code to other entities/websites, which could then lead to their being hacked.

- Carrying out illegal operations.
 
This device also legally protects you from actions resulting from a possible hack of your web hosting towards other organisations/websites. 
 
*If you are affected by this type of blocking, you will be sent a notification via the email address of the “administrator” contact for your Web Hosting plan*.

![403error](images/403error.png){.thumbnail}

**Find out how to unblock access to your website if you see a "403 forbidden" page.**

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-ca/directory/) or reach out to the [OVHcloud community](https://community.ovh.com/en/) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

## Requirements


- An [OVHcloud web hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- The login details to access [your web hosting plan’s FTP storage space](/pages/web/hosting/ftp_connection)

## Instructions

### Step 1: Analyse the situation

If the page "**403 forbidden**" appeared following a modification of your website, [restore all or part of the FTP storage space of your hosting](/pages/web/hosting/ftp_save_and_backup) to an earlier date.

If the available backups do not allow you to restore access to your website, contact a [specialised provider](https://partner.ovhcloud.com/en-ca/directory/).

If the page "**403 forbidden**" did not appear following a modification of your website, check your inbox. If you have received an email from OVHcloud notifying you that your web hosting plan has been closed for security reasons, please skip directly to [step 2](#step-2) of this guide.

If the page "**403 forbidden**" appeared without any action on your part and you have not received any email from our services about it, check the FTP access rights (CHMOD) of your files and folders as well as the code contained in your **.htaccess** file(s). Also check if the restriction is caused by a security plugin or application firewall. If necessary, contact a [specialised provider](https://partner.ovhcloud.com/en-ca/directory/).

### Step 2: Apply security measures on your side <a name="step-2"></a>

First, check the security of your computers and devices:

- Perform security updates for all your devices.

- Check that an antivirus software is installed, update it and run a full scan. If you do not have one, consult a [specialised provider](https://partner.ovhcloud.com/en-ca/directory/) before installing.

- Change all of your account passwords, including those of your email accounts, following the **best practices** specified in [this guide](/pages/account/customer/manage-ovh-password).

- Change the passwords for all of your OVHcloud services, including your [database](/pages/web/hosting/sql_change_password) and your [FTP storage](/pages/web/hosting/ftp_change_password).

> [!warning]
>
> Before changing the password for your website’s database in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca), update your website’s configuration file so that it connects to the database with the new password.
>
> Otherwise, changing your database password will result in your website and any services accessing it being blocked.
>
> If you have any doubts about the changes to be made, contact [OVHcloud partners](https://partner.ovhcloud.com/en-ca/directory/).
>

### Step 3: Intervene on your web hosting plan

First, take note of the date on which the OVHcloud email regarding the deactivation of your hosting and the list of folder(s) containing the malicious files detected.

> [!primary]
>
> Our security robots can apply two levels of access restriction to your web hosting plan: 
>
> - Access permissions are set to **CHMOD 700** at the FTP root of your web hosting plan
> - Access permissions are set to **CHMOD 000** at the FTP root of your web hosting plan.
>
> If you wish to revert **CHMOD 000** permissions, please contact our [support teams](https://www.ovhcloud.com/en-ca/support-levels/) to check the status of your issue before following the steps in this guide. 
>
> Depending on your situation, access restrictions can be changed from **CHMOD 000** to **CHMOD 700** to allow you access to your web hosting plan’s FTP space.
>

#### Case no. 1: Your web hosting plan has been disabled for less than two weeks

If access to your hosting plan was blocked less than two weeks ago and it contains only one website, restore your FTP storage space to an earlier date. If your web hosting contains multiple websites, only restore the folder or folders containing the illegitimate files.

To restore all or part of your FTP storage space, see [our guide](/pages/web/hosting/ftp_save_and_backup) on this topic.

> [!warning]
>
> Restoring only your FTP storage space is not sufficient to correct potential security vulnerabilities previously present on your website.
> To identify these security vulnerabilities, analyse the [web logs](/pages/web/hosting/logs_and_statistics) of your web hosting plan, or contact a [specialised provider](https://partner.ovhcloud.com/en-ca/directory/) to perform a security audit on your websites.
>

#### Case no. 2: Your web hosting plan has been disabled for more than two weeks

If your hosting plan was closed more than two weeks ago, please contact a [specialist provider](https://partner.ovhcloud.com/en-ca/directory/) to perform a security audit on your websites.

> [!success]
>
> If you would like more details on the previous [steps 2 and 3](#step-2), please refer to our tutorial on [what to do if your website is hacked](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked).
>

### Step 4: Reactivate your web hosting plan <a name="reactivate-web-hosting"></a>

> [!warning]
>
> We recommend that you carry out a security audit **before** reopening your web hosting plan. Any malicious actions originating from your web hosting plan may result in your being held legally responsible.
>

#### Reactivating your web hosting with FileZilla

> [!primary]
>
> If you want to install the **FileZilla** software to manipulate your website files, follow the instructions in this [guide](/pages/web/hosting/ftp_filezilla_user_guide).
>

Open the FileZilla application, then [log in to your FTP storage space](/pages/web/hosting/ftp_connection). Click on `Server`{.action} in the menu bar then on `Enter custom command`{.action} (the button may be differently labelled, depending on which version of FileZilla you are using):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

In the window that pops up, enter and validate the command below:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

The response "**200 Permissions changed on /**" confirms that the change was successful. To check, try accessing your site again.

> [warning]
>
> You may need to wait a few minutes (maximum 20 minutes) for the change to be visible in your web browser.
>
> Depending on your website, you may also need to clear your browser’s cache.
>

If the above command does not work, you can try this command:

```
SITE CHMOD 705.
```

#### Reactivating your hosting via your web browser with the FTP Explorer ("net2ftp")

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca), go to the `Web Cloud`{.action} section, then open `Hosting plans`{.action} and switch to the `FTP-SSH`{.action} tab of the web hosting plan concerned.

Click on the button `FTP Explorer`{.action} and log in to your [FTP storage](/pages/web/hosting/ftp_connection).

Click on the `Advanced`{.action} button and then click the `Go`{.action} button next to "Send arbitrary FTP commands to the FTP server".

![net2ftp](images/net2ftp.png){.thumbnail}

At the top of the page, enter the command below:

```
SITE CHMOD 705 /
```

Then click on the green "check mark" button.

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

The response "**200 Permissions changed on /**" confirms that the change was successful. To check, try accessing your site again.

> [warning]
>
> You may need to wait a few minutes (maximum 20 minutes) for the change to be visible in your web browser.
>
> Depending on your website, you may also need to clear your browser’s cache.
>

## Go further <a name="go-further"></a>

[What to do if your WordPress site is hacked](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked)

[Activating the application firewall](/pages/web/hosting/multisites_activating_application_firewall)

[Changing a web hosting plan’s PHP version](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ca/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ca/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
