---
title: "Web hosting: how to manage FTP users?"
excerpt: "Find out how to create, modify or delete FTP users on your OVHcloud web hosting plan"
updated: 2024-10-07
---

## Objective

OVHcloud web hosting plans provide access to an FTP storage space. You can use this FTP space to put your website or application files online, for example. You can access this space via an FTP or SSH user account, and the associated password. As part of your business, you may need to have several FTP users for your various employees.

**Find out how to create, modify or delete FTP users on your OVHcloud web hosting plan.**

> [!primary]
>
> This guide is only valid for **Professional** or **Performance** web hosting plans. Only these 2 solutions allow you to activate multiple FTP users.

## Requirements

- a compatible [OVHcloud Web Hosting](/links/web/hosting) plan.
- You must be logged in to your [OVHcloud Control Panel](/links/manager), in the `Web Cloud`{.action} section.

## Instructions

### Create a new FTP user on your web hosting plan <a name="create-ftp-user"></a>

To create a new FTP user on your web hosting plan via the OVHcloud Control Panel, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} dropdown menu.
4. Select the web hosting plan concerned.
5. On the page that appears, click on the `FTP-SSH`{.action} tab.
6. To create a new FTP user, click the `Create User`{.action} button on the right. Depending on the resolution of your screen, the button may be on the bottom of the page.

![FTP-SSH create user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user.png){.thumbnail}

The following window will appear:

![FTP-SSH create user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-1.png){.thumbnail}

Enter the settings for the new FTP user by defining the following elements/forms:

- *User* : corresponds to the full FTP username that you will define for your employee. They will need to use it to log in to your Web Hosting plan’s FTP storage space. Whichever FTP user you create on your Web Hosting plan, the name you choose will always be preceded by your Web Hosting plan’s main FTP login, followed by a hyphen.
- For example, if your primary FTP login is `FTPLogin` and you want to create a new FTP user `user1`, your new user’s FTP login will be `FTPLogin-user1`.

- *Root folder* : is the name of the directory or subdirectory in which the FTP user will be able to log in to the FTP storage space.
- For example, if your employee needs to access all of your web hosting plan’s FTP storage space, leave this form empty. Otherwise, specify the name of the directory to which they will be authorized to access (examples: `www`, `blog`, `website1`, `www/development`, etc.).

- *Connection protocol*: Allows you to define the protocol(s) that the FTP user can use to log in to your web hosting plan’s FTP storage space.
- For example, if you select the third choice (the **FTP**,**SFTP** and **SSH** protocols), the FTP user will be able to connect using all three protocols. This way, the employee using this FTP user can choose to log in via the **SSH** protocol, and manage FTP content using the same protocol.

Once you have set the parameters, click `Next`{.action} to go to step 2 of creating the new FTP user:

![FTP-SSH create user step 2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-2.png){.thumbnail}

In this second step, you only need to set and confirm the password for the new FTP user in the two forms. Follow the password policy listed just below the 2 forms to proceed to step 3.

Once you have chosen and confirmed your password, click `Next`{.action} to go to step 3 of creating the new FTP user:

![FTP-SSH create user step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/create-user-step-3.png){.thumbnail}

This final step summarizes the settings you have chosen for your new FTP user. If these settings correspond to what you want, click `Confirm`{.action} to complete the request to create a new FTP user on your web hosting plan.

> [!primary]
>
> Once the creation request has been validated, it can take up to 15 minutes for the new user to be properly registered on your web hosting plan.

If necessary, test this new FTP user using our guide “[Logging in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)”.

### Modify an FTP user

To edit an FTP user, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} dropdown menu.
4. Select the web hosting plan concerned.
5. On the page that appears, click on the `FTP-SSH`{.action} tab.
6. In the table at the bottom of the page, on the right-hand side of the line corresponding to the FTP user concerned, click the `...`{.action} button, then click `Edit`{.action}.

![FTP-SSH edit user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-user1.png){.thumbnail}

The following window will appear:

![FTP-SSH edit user step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/modify-a-user-step1.png){.thumbnail}

With the exception of the FTP user name and password, you can modify the *root folder* and the *connection protocols* defined for the FTP user here. If you need more information on the *root folder* and *connection protocols*, please refer to the [Create a new FTP user on your web hosting plan](#create-ftp-user) section earlier in this guide.

You can also *disable the user* if necessary by ticking the box provided. This option is useful if you want to prevent a worker from accessing your FTP space without deleting the FTP and SSH logs associated with them. These logs will allow you to determine what operations your employee has performed if you notice any unwanted interventions on your web hosting plan.

Once you have made the modifications, click `Next`{.action} to go to step 2. Then check your change requests, and click `Confirm`{.action} to complete the FTP user change request on your web hosting plan.

> [!primary]
>
> If you only want to change the FTP user password, please refer to our guide on "[Changing an FTP user password](/pages/web_cloud/web_hosting/ftp_change_password)".
>
> If you would like to change the FTP username, please note that this feature is unavailable. You must [create a new FTP user](#create-ftp-user) with the new username you want. You are then free to [delete the old FTP user](#delete-ftp-user) if required.

### Delete an FTP user <a name="delete-ftp-user"></a>

To delete an FTP user, perform the following steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. At the top of the Control Panel, click on the `Web Cloud`{.action} tab.
3. In the left-hand column, click on the `Hosting plans`{.action} dropdown menu.
4. Select the web hosting plan concerned.
5. On the page that appears, click on the `FTP-SSH`{.action} tab.
6. In the table at the bottom of the page, on the right-hand side of the line corresponding to the FTP user concerned, click the `...`{.action} button, then click `Delete`{.action}.

![FTP-SSH delete user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1.png){.thumbnail}

The following window will appear:

![FTP-SSH delete user confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/delete-user1-confirmation.png){.thumbnail}

Click `Confirm`{.action} to permanently delete the FTP user from your web hosting plan.

## Go further

[Logging in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection).

[Changing an FTP user password](/pages/web_cloud/web_hosting/ftp_change_password)

[Accessing a web hosting plan via SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Using PuTTy for Windows](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Tutorial - Using FileZilla with your OVHcloud hosting](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Tutorial - Using Cyberduck with your OVHcloud hosting](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).