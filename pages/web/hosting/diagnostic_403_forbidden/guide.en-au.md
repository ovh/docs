---
title: What do I do if I have a 403 forbidden page?
excerpt: How to get your website back online if it displays a 403 forbidden page
slug: diagnostic-403-forbidden
section: Diagnostic
Order: 08
---

**Last updated 16th June 2022**

## Objective

Changes to the access rights to your website files, editing the **.htaccess** file or the installation of a security plugin can sometimes result in a "**403 forbidden**" page.

It may also be the case that our security robots have temporarily blocked access to files on your hosting after detecting a safety-related anomaly. This type of automatic blocking is designed to prevent malicious code being sent to other entities and to protect you legally.

![403error](images/403error.png){.thumbnail}

**This guide explains how to unblock access to your website if you receive a "403 forbidden" message.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialised service provider](https://partner.ovhcloud.com/en-au/) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#gofurther) section of this guide.
>


## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-au/web-hosting/)
- having the [login details](../log-in-to-storage-ftp-web-hosting/#step-1-retrieve-your-login-information) to access your hosting plan’s storage space
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

## Instructions

### Step 1: Analyse the situation

If the page "**403 forbidden**" appeared following an incorrect modification of your site, restore all or part of your [hosting storage space](../restoring-ftp-filezilla-control-panel/) to an earlier date.

If the backups available do not allow you to restore access to your site, contact a [specialised service provider](https://partner.ovhcloud.com/en-au/).

If the page "**403 forbidden**" did appear without a modification on your website, check your inbox for an email notifying you that your hosting has been closed due to security reasons. If you have received such a message from our system, skip to [step 2](#step2).

If the page "**403 forbidden**" appeared without any action on your part and you have not received any emails from our hosting services on this subject, contact a [specialised service provider](https://partner.ovhcloud.com/en-au/).

### Step 2: Apply security measures on your side <a name="step2"></a>

First, verify the security of your devices and services:

- Perform security updates;
- Also check that an antivirus software is installed, update it and run a complete scan. If you do not have such software, consult a [specialised service provider](https://partner.ovhcloud.com/en-au/) before installing it;
- Change all your personal passwords, including the ones of your email accounts, in accordance with these [best practices](https://docs.ovh.com/au/en/customer/manage-password/#generate-a-strong-password);
- Change the passwords for all of your OVHcloud services, including your [databases](../change-password-database/) and access to your [FTP storage space](../modify-ftp-user-password/).

> [!warning]
>
> Before changing the password for your website’s database in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), update your website’s configuration file so that it will stay connected to the database with the new password.
>
> Otherwise, changing your database password will result in your website and any services accessing it being blocked.
>
> If you have any doubts about how to do this, contact a [specialised service provider](https://partner.ovhcloud.com/en-au/).
>

### Step 3: Intervene on your hosting

First, take note of the date on which the OVHcloud email regarding the deactivation of your hosting and the list of folder(s) containing the detected illegitimate files.

#### Case no. 1: Your Web Hosting plan has been disabled for less than two weeks

If your Web Hosting plan was closed less than two weeks ago and only contains one website, restore your storage space following the instructions in this [guide](../restoring-ftp-filezilla-control-panel/#restore-the-storage-space-via-the-ovh-control-panel).

If your Web Hosting plan was closed less than two weeks ago and contains multiple websites, only restore the folder(s) containing the suspicious files as described in this [guide](../restoring-ftp-filezilla-control-panel/#restore-a-file-using-a-software-program-or-interface).

> [!warning]
>
> Restoring your storage space alone will not be enough to correct potential security vulnerabilities already present on your site.
> To identify these security vulnerabilities, you can analyse your hosting system’s ["web logs"](https://docs.ovh.com/au/en/hosting/shared_view_my_websites_logs_and_statistics/#logs), or contact a [specialised service provider](https://partner.ovhcloud.com/en-au/) to perform a security audit on your solutions.
>

#### Case no. 2: Your Web Hosting plan has been disabled for more than two weeks

If your Web Hosting plan was closed more than two weeks ago, contact a [specialised service provider](https://partner.ovhcloud.com/en-au/). 

### Step 4: Reactivate your Web Hosting plan

> [!warning]
>
> We recommend that you carry out a security audit **before** reopening your Web Hosting plan in any case. You might be held legally responsible for any malicious code originating from your hosting, regardless of intent.
>

#### Reactivating your hosting with FileZilla

> [!primary]
>
> If you want to install the **FileZilla** software to manipulate your website files, follow the instructions in this [guide](../web_hosting_filezilla_user_guide/).
>

Open the FileZilla application, then [log in to your FTP storage space](../web_hosting_filezilla_user_guide/#ftp-connection). Click on `Server`{.action} in the menu bar then on `Enter custom command`{.action} (the button may be differently labelled, depending on which version of FileZilla you are using):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

In the window that pops up, enter and validate the command below:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

The response "**200 Permissions changed on /**" confirms that the change was successful. To check, try accessing your site again.

#### Reactivating your hosting via your web browser with the FTP Explorer ("net2ftp")

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), go to the `Web Cloud`{.action} section, then open `Hosting plans`{.action} and switch to the `FTP-SSH`{.action} tab of the Web Hosting plan concerned.

Click on the `FTP Explorer`{.action} button and log in to your storage space, following the instructions in this [guide](../log-in-to-storage-ftp-web-hosting/#1-log-in-via-ftp-explorer). Click the `Advanced`{.action} button and then click the `Go`{.action} button next to "Send arbitrary FTP commands to the FTP server".

![net2ftp](images/net2ftp.png){.thumbnail}

At the top of the page, enter the command `SITE CHMOD 705 /` and click on the green "check mark" button.

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

The response "**200 Permissions changed on /**" confirms that the change was successful. To check, try accessing your site again.

## Go further <a name="gofurther"></a>

[What to do if your WordPress site is hacked](../what_to_do_if_your_wordpress_site_is_hacked/)

[Activating the application firewall](../web_hosting_activating_an_application_firewall/)

[Changing a Web Hosting plan’s PHP version](../how_to_configure_php_on_your_ovh_web_hosting_package_2014/)

For specialised services (SEO, development, etc.), contact your [OVHcloud partners](https://partner.ovhcloud.com/en-au/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-au/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
