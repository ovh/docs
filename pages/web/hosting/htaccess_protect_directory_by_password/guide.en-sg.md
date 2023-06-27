---
title: "Tutorial - Protect a directory or administration interface of your website with .htaccess and .htpasswd files"
excerpt: "Find out how to protect a directory or administration interface by authenticating with .htaccess and .htpasswd files"
updated: 2023-06-01
---

**Last updated 1st June 2023**

## Objective

This tutorial explains how to set up user/password authentication to access all or part of your website via an internet browser. 

You can do this by using two Apache configuration files (HTTP) to place in [the FTP space](/pages/web/hosting/ftp_connection) of your web hosting plan: 

- "**.htaccess**": For more information on the functionalities of this file, please read our tutorial on [Operations achievable with a .htaccess file](/pages/web/hosting/htaccess_what_else_can_you_do).
- "**.htpasswd**": In addition to this tutorial, please refer to the [official Apache documentation](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) for this file.

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-sg/directory/) and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you. You can find more information in the ["Go further"](#go-further) section of this guide.
>
> The following examples should be set up in files named ".htaccess" and ".htpasswd". Please note that the rules you define in this file have a direct impact on your website. Always check the rules you add before applying them to your website. 
> 


**Find out how to protect a directory or the administration part of your website by authenticating with the .htaccess and .htpasswd files.**

## Requirements

- An [OVHcloud web hosting plan](https://www.ovhcloud.com/en-sg/web-hosting/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)
- The login details to access [your web hosting plan’s FTP storage space](/pages/web/hosting/ftp_connection)

## Instructions

> [!primary]
>
> The security solution proposed here is only one technical possibility. 
>
> For example, if you use a **C**ontent **M**anagement **S**ystem (**CMS**), other security solutions exist.
>
> If you are using a WordPress CMS, OVHcloud also provides a tutorial on how to [use the .htaccess file with WordPress](/pages/web/hosting/htaccess_how_to_protect_wordpress).
>
> If you have any questions regarding the creation, use or programming of your website, OVHcloud support will not be able to provide you with assistance in this regard.
>
> To do this, contact our [user community](https://community.ovh.com/en/) or [OVHcloud partners](https://partner.ovhcloud.com/en-sg/directory/).
>

We will explain the 4 main steps to take to protect access to a directory or all or part of your website:

- Create “crypt.php”, “.htaccess” and “.htpasswd” files
- Generate encrypted passwords with the “crypt.php” file
- Define encrypted users and passwords with the “.htpasswd” file
- Configure rules in the “.htaccess” file and delete the “crypt.php” file

> [!warning]
>
> The steps that follow will optimise the security of your hosted data.
> Therefore, if your websites are compatible, we strongly recommend that you use the most recent PHP version possible.
> 
> To modify the PHP version of your websites on your web hosting plan, please refer to the following guides:
> 
> - [Modify your web hosting plan’s configuration](/pages/web/hosting/ovhconfig_modify_system_runtime)
> - [Change the PHP version of your web hosting plan](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014/)
>
> The scripts and information described below in this tutorial only work with a runtime environment and a recent PHP version.
> 
> Otherwise, we recommend that you optimise your website to make it compatible before setting up the following. This will further reduce the risk of security vulnerabilities being exploited to hack into your website.
>

### Step 1: Create the files "crypt.php", ".htaccess" and ".htpasswd"

Log in to [the FTP storage space](/pages/web/hosting/ftp_connection) of your web hosting plan. Open the [root folder](/pages/web/hosting/multisites_configure_multisite) that your domain name points to.

Create a "crypt.php" file in this root folder.

![root_folder](images/root_folder.png){.thumbnail}

Open or create the website folder you want to protect. In our example below, it will be the "admin" folder. Create a ".htpasswd" file and a ".htaccess" file in this directory.

![folder_admin](images/folder_admin.png){.thumbnail}

To use the ".htaccess" and ".htpasswd" files correctly, you need to follow the following rules:

- Create **Only one** “.htaccess” and **only one** “.htpasswd” per directory or subdirectory, to avoid conflicts between different “.htaccess” files and different “.htpasswd” files.
- The ".htaccess" and ".htpasswd" files are not visible to users visiting your website.
- The rules declared in a ".htaccess" file apply to the entire directory where the ".htaccess" file is located, as well as to all subdirectories in that same directory.
- The ".htpasswd" and ".htaccess" files can be in different folders. One ".htpasswd" file can be used for several ".htaccess" files.

### Step 2: Complete the “crypt.php” file

Go back to the root folder where you created the file `crypt.php`. Click `Edit`{.action} and place the following lines:

```php
<?php
$string = password_hash("plain_text_password", PASSWORD_BCRYPT);

echo nl2br("$string");
 ?>
```

Replace only `plain_text_password` with the **clear** password you want to encrypt.

**You can adapt the script depending on the number of passwords you want to encrypt.**

- Example where the PHP script will encrypt 3 passwords in a single operation:

```php
<?php
$string_1 = password_hash("plain_text_password1", PASSWORD_BCRYPT);
$string_2 = password_hash("plain_text_password2", PASSWORD_BCRYPT);
$string_3 = password_hash("plain_text_password3", PASSWORD_BCRYPT);

echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Replace `plain_text_password1`, `plain_text_password2` and `plain_text_password3` with the **clear** passwords you want to encrypt.

> [!primary]
>
> The two scripts above use, to date, the most secure encryption method via the **bcrypt** algorithm recommended by Apache.
>
> For more information on this subject, see the [official Apache documentation](https://httpd.apache.org/docs/2.4/en/misc/password_encryptions.html){.external}.
>

If you have a [Pro](https://www.ovhcloud.com/en-sg/web-hosting/professional-offer/) or [Performance](https://www.ovhcloud.com/en-sg/web-hosting/performance-offer/) hosting plan, then log in with [SSH](/pages/web/hosting/ssh_on_webhosting) to your web hosting. Go to the **root folder** where your script “crypt.php” is located.

To do this, use the following command:

```bash
cd Name_of_your_root_folder
```

Replace `Name_of_your_root_folder` with the full path to the location of your script "crypt.php".

For example, if your file "crypt.php" is in a subfolder of your root folder use the following command:

```bash
cd Name_of_your_root_folder/sub_folder
```

Replace `Name_of_your_root_folder` with the name of your "root folder" and `sub_folder` with the subfolder where your script 'crypt.php' is located.

Once you are at the level where your script "crypt.php" is located, run the following command:

```bash
php crypt.php
```

> [!warning]
>
> For security reasons, SSH is recommended. However, if you have a [Personal](https://www.ovhcloud.com/en-sg/web-hosting/personal-offer/) hosting plan where SSH is unavailable, you can also run the "crypt.php" file via your web browser.
>
> To do this, enter the URL `https://domain.tld/crypt.php` and replace `domain.tld` by your own domain name. This is done directly in the address bar of your web browser.
>

Retrieve the encrypted passwords **without copying** the part “&#60;br />” after running the command “*php crypt.php*” via SSH:

```bash
encrypted_password1
encrypted_password2
encrypted_password3
```

For example, the values `encrypted_password1`, `encrypted_password2` and `encrypted_password3` should look like the format of the following line:

```text
$2y$10$8eO7Iq3rh.u3CXvhuhKq.Om.nQJN.Z1sBT2jvOqVKCGzP42T/4LBC
```

Only make sure that your encrypted passwords start with `$2y$`. This will confirm that your passwords have been encrypted using the secure **bcrypt** algorithm.

### Step 3: Set encrypted users and passwords with the .htpasswd file

The ".htpasswd" file contains the respective encrypted passwords belonging to each of the users declared in the file. Only these users will be allowed to connect to the directory for which you want to protect access.

For **each user**, add a line indicating their username and encrypted password in this file:

```bash
user1:encrypted_password1
user2:encrypted_password2
user3:encrypted_password3
```

Replace the values `user1`, `user2` and `user3` in our example with your own user names.

Also replace the `encrypted_password1`, `encrypted_password2` and `encrypted_password3` with your own previously retrieved encrypted passwords.

### Step 4: Configure rules in the .htaccess file

#### Blocking access to an entire directory

In the directory to be protected, create a ".htaccess" file with the following code:

```bash
AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user
```

In the script above, replace the following with your own values:

- `Indicates your login(s)`: This is the user (or users) authorised to access the full directory. If you have multiple users, separate them only with a *space*.
- `your_ftp_login`: The FTP username used to log in to your FTP storage space. To retrieve your FTP login, please refer to our guide on [logging in to your FTP space](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: Directory path from the FTP root of your web hosting plan to the ".htpasswd" file to be used to authenticate users authorised by the rule in your ".htaccess" file.

#### Blocking access to one or more files

To block access to one or more specific files, add a [Files directive](https://httpd.apache.org/docs/2.4/eb/mod/core.html#files){.external} to the ".htaccess" file:

```bash
<Files test.php>

AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user

</Files>
```

In the script above, replace the following with your own values:

- `test.php`: The name of the specific file or filegroup that contains, in our example, **test.php** (the text string for which the access restriction should apply).
- `Indicates your login(s)`: This is the user (or users) authorised to access files whose names contain **test.php**. If you have several users, separate them with a *space*.
- `your_ftp_login`: The FTP username used to log in to your FTP storage space. To retrieve your FTP login, please refer to our guide on [logging in to your FTP space](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: Directory path from the FTP root of your web hosting plan to the ".htpasswd" file to be used to authenticate users authorised by the rule in your ".htaccess" file.

> [!warning]
>
> You will need to specify a [Files directive](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} for **each file** to be protected.
>
> `Files` directives apply to all files with the same name or ending with the specified name. This is provided that they are contained in the same directory as the ".htaccess" or in one of its subdirectories.
>
> In the above configuration, because "new_test.php" contains **test.php** in its name, the `Files` directive would also apply to a file named "new_test.php" contained in a subdirectory of the "admin" folder.
>
> Furthermore, until you authenticate yourself to access the files affected by the directive, they may not appear and therefore cannot be "listable" via an "index of" page.
>

> [!alert]
>
> Once you have finished setting up your ".htaccess" and ".htpasswd" files, delete the "crypt.php" encryption file from your web hosting plan.
>

## Go further <a name="go-further"></a>

[Official Apache documentation](https://httpd.apache.org/docs/2.4/){.external}

[Logging in to your Web Hosting plan’s FTP space](/pages/web/hosting/ftp_connection)

[Tutorial - Operations achievable with a .htaccess file](/pages/web/hosting/htaccess_what_else_can_you_do)

[Tutorial - How do I block access to my website for certain IP addresses via a .htaccess file?](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website)

[Tutorial - Rewrite the URL for accessing your website](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-sg/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-sg/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
