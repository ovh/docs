---
title: "Protecting your website's administration interface with a .htaccess file"
slug: how_to_password_protect_a_directory_on_your_website
excerpt: "Find out how to protect access to your website's administration with a .htaccess file"
section: Redirection and authentication
---

**Last updated 20th September 2021**

## Objective

You may need to protect access to part of your website with login credentials. You can set up a file named ".htaccess" to protect access to its administration interface.

**Find out how to protect the access to the admin section of your website with a .htaccess file.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a specialist service provider and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](#gofurther) section of this guide.
>

## Requirements

- An [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en/web-hosting/)
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)
- The [login details](../log-in-to-storage-ftp-web-hosting/#step-1-retrieve-your-login-information) to access your hosting plan’s storage space

## Instructions

> [!primary]
>
> The solution proposed here is only one technical possibility among others to set up an administrator space on your website. You can also use the [1-click Module](../web_hosting_web_hosting_modules/) feature offered by [OVHcloud](https://www.ovhcloud.com/en/).
>
> If you have any question regarding the creation or programming of your site, please contact our [community of users](https://community.ovh.com/en/) or [OVHcloud partners](https://partner.ovhcloud.com/en/directory/). We will not be able to assist you with these matters.
>

### Step 1: Create the file path

Log in to your [Web Hosting plan’s storage space](../log-in-to-storage-ftp-web-hosting/) and open your site's [root folder](../multisites-configuring-multiple-websites/#step-21-adding-an-ovhcloud-registered-domain).<br>
Create a file named "crypter.php".

![root_folder](images/root_folder.png){.thumbnail}

Open or create the folder that contains the admin section of your site. Create a ".htpasswd" file and a ".htaccess" file there.

![folder_admin](images/folder_admin.png){.thumbnail}

> [!primary]
>
> The ".htpasswd" and ".htaccess" files can be in different folders. A single ".htpasswd" file can be used for several ".htaccess" files.
>
> The settings defined by a ".htaccess" file apply to the directory where it is located and to all its subdirectories.
>

### Step 2: Edit the file "crypter.php"

In the "crypter.php" file previously created, enter the following lines (to be adjusted depending on the number of passwords you need to generate):

```php
<?php
$string_1 = crypt('non_encrypted_password_1');
$string_2 = crypt('non_encrypted_password_2');
$string_3 = crypt('non_encrypted_password_3');
echo nl2br(`$string_1 \n $string_2 \n $string_3`);
 ?>
```

If you have a [Professional](https://www.ovhcloud.com/en/web-hosting/professional-offer/) or [Performance](https://www.ovhcloud.com/en/web-hosting/performance-offer/) Web Hosting plan, log in to your hosting via [SSH](../web_hosting_ssh_on_web_hosting_packages/). Run the following command:

```bash
php crypter.php
```

> [!warning]
>
> For security reasons, using SSH in this case is recommended. However, if you have a [Personal](https://www.ovhcloud.com/en/web-hosting/personal-offer/) offer and you do not want to upgrade it to a [Professional](https://www.ovhcloud.com/en/web-hosting/professional-offer/) or [Performance](https://www.ovhcloud.com/en/web-hosting/performance-offer/) one, you can also run the "crypter.php" file with your web browser (by simply opening the URL, for example: https://your-domain-name.ovh/crypter.php).
>
> For any additional questions on how to encrypt your passwords, please contact our [community of users](https://community.ovh.com/en/) or [OVHcloud partners](https://partner.ovhcloud.com/en/directory/). We will not be able to assist you with this matter.
>

Retrieve the encrypted passwords (Do not copy the "&#60;br />" if you run the "php crypter.php" command in SSH):

```bash
encrypted_password_1
encrypted_password_2
encrypted_password_3
```

### Step 3: Edit the ".htpasswd" file

The ".htpasswd" file contains the list of users authorised to log in to your website's administration interface and their encrypted passwords.

Enter one line in this file **for each user** indicating their username and encrypted password:

```bash
user1:encrypted_password_1
user2:encrypted_password_2
user3:encrypted_password_3
```

### Step 4: Edit the ".htaccess" file

#### Blocking access to an entire directory

In the directory to be protected, create a ".htaccess" file with the following code:

```bash
AuthName `Please enter your admin username and password`
AuthType Basic
AuthUserFile `/home/your_login_ftp/root_folder/admin/.htpasswd`
Require valid-user
```

> [!warning]
>
> In this example, replace "your_login_ftp" with your [FTP username](../log-in-to-storage-ftp-web-hosting/#step-1-retrieve-your-login-information). In the `Hosting plans`{.action} section, you will find it in the `FTP-SSH`{.action} tab of the hosting plan concerned.
>
> In the example below, replace "root_folder" with the name of the [folder containing your site files](../multisites-configuring-multiple-websites/#step-21-adding-an-ovhcloud-registered-domain).
>

#### Blocking access to one or more files

To block access to one or more specific files, add a ["Files" directive](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} to the ".htaccess" file:

```bash
<Files test.php>

AuthName `Enter your login details`
AuthType Basic
AuthUserFile `/home/your_login_ftp/root_folder/admin/.htpasswd`
Require valid-user

</Files>
```

> [!warning]
>
> You will need to specify a ["Files" directive](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} **for each file** to be protected.
>
> The "Files" directives apply to all files with the same name or ending with the specified name, that are contained in the same directory as the ".htaccess" or in one of its subdirectories. (For example, if you apply the configuration shown here, the "Files" directive would apply to a file named "new_test.php" located in a subdirectory of the folder "admin").
>

## Go further <a name="gofurther"></a>

[What else can you do with the .htaccess file?](../what_else_can_you_do_with_the_htaccess_file/)

For specialised services (SEO, development, etc.), contact your [OVHcloud partners](https://partner.ovhcloud.com/en/directory/).

Join our community of users on <https://community.ovh.com/en/>.
