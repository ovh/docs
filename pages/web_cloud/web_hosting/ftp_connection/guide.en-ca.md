---
title: "Logging in to your web hosting plan’s FTP storage space"
excerpt: "Find out how to log in to your OVHcloud web hosting plan’s FTP storage space"
updated: 2023-06-01
---


## Objective

OVHcloud web hosting plans provide you with access to an FTP storage space, which you can use to put your website and application files online. You can access this space via an FTP or SSH user account with their associated passwords.

**Find out how to log in to your OVHcloud web hosting plan’s FTP storage space.**

## Requirements

- An [OVHcloud web hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/){.external}
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}

> [!primary]
> Only **Pro** and **Performance** web hosting plans allow SSH connections and multiple FTP users to be activated.
>

## Instructions

### Step 1: Retrieve the information required to log in

To connect to your FTP storage space, you will need the following:

- The active FTP or SSH user account
- The password associated with this FTP or SSH user account
- The FTP or SSH server address of your web hosting plan
- The connection port of the FTP or SSH server on your Web Hosting plan

> [!primary]
>
> These elements were sent to you in the email informing you that your web hosting plan has been set up after completing your order. You can access them via your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}.
>
> **If you already have these items**, proceed directly to step 2 "[Access your storage space](#ftp_storage_access)" in this guide.
>

If you do not have this information at hand, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external} then go to the `Web Cloud`{.action} section. Click on the `Hosting plans`{.action} section in the left-hand column. Select the name of the web hosting plan concerned, then go to the `FTP - SSH`{.action} tab. 

The information associated with your storage space will then appear, along with a table listing the FTP and SSH users created on your web hosting plan.

![ftpconnect](images/connect-ftp-step1.png){.thumbnail}

> [!primary]
>
> If you want to create a new FTP/SSH user in this tab, click the `Create User`{.action} button on the right.
> Define the name extension for this new `User`{.action} and the `Root Folder`{.action} that this user can access and click `Next`{.action}.
> Choose a password for this new user account, click `Next`{.action} and then click `Confirm`{.action}.
>

All the elements required to log in to the FTP storage space are present on this page.

Below is a description of the essential information displayed on the `FTP-SSH` page:

- **FTP and SFTP server**: FTP server address of your web hosting plan to access your FTP storage space. You can do this by using, for example, client software capable of the (S)FTP protocol.

> The standard connection port is "21". Use port "22" for a connection via SFTP (if it is enabled).

- **SSH Server**: SSH server address of your web hosting plan to access your FTP storage space. This is done using a terminal via SSH protocol.

> The SSH connection port is "22".

- **Main login**: Primary FTP username created on your web hosting plan. You can find all of your web hosting plan’s FTP users in the “Login” column of the table.

> [!primary]
>
> Depending on which OVHcloud [web hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/){.external} you have, some of the information listed above (particularly concerning SSH) may not appear.
>

If you have forgotten your FTP or SSH user password, please refer to our guide on [Modifying a FTP user password](/pages/web_cloud/web_hosting/ftp_change_password).

![ftpconnect](images/connect-ftp-step2.png){.thumbnail}

At this stage, you have everything you need to log in to your FTP storage space.

### Step 2: Access your FTP storage space <a name="ftp_storage_access"></a>

There are several ways you can access your FTP storage space. We recommend reading this guide, and focusing on the method you wish to follow.

- [1. Logging in via FTP Explorer](#ftpexplorer): Allows you to access your FTP storage space from your browser.

- [2. Logging in via FTP software](#ftpsoftware): Allows you to access your FTP storage space via software (e.g. [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) or [Cyberduck](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)). 
You must first install the FTP client/software you have chosen on your computer.

- [3. Connecting via SSH access](#ssh): Allows you to access your FTP storage space via SSH. You will need advanced knowledge and an [OVHcloud web hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/){.external} **Pro** or **Performance** to use this access type.

#### 1. Log in via FTP Explorer <a name="ftpexplorer"></a>

To log in to your FTP storage space via FTP Explorer, log in to [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=GB){.external} then go to the `Web Cloud`{.action} section.

Click on the `Hosting`{.action} section in the left-hand column. Select the name of the web hosting plan concerned, go to the `FTP - SSH`{.action} tab, then click the `FTP Explorer`{.action} button.

![ftpconnect](images/connect-ftp-step3.png){.thumbnail}

On the new page that pops up, enter your FTP username and password, then log in. If the information is correct, your storage space will appear.

![ftpconnect](images/connect-ftp-step4.png){.thumbnail}

#### 2. Logging in via FTP software <a name="ftpsoftware"></a>

Once you have installed the FTP software of your choice on your computer (e.g. [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) or [Cyberduck](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)), start it. 

You should find specific fields where you can enter your login details. 

> [!warning]
>
> Since this procedure depends on your software as well as the version you are using, this documentation cannot detail all options.
>

Here is a reminder of the information you will need to enter:

- **FTP and SFTP server**: FTP server address for accessing your FTP storage space. Depending on the software you are using, the identifier may be: "Server", "Server address", "Host name", or "Host".
- **Main login**: Username to access your FTP storage space. Depending on the software you are using, the identifier may be: "User", "Login", or "Username".
- **FTP user password**: The password associated with the FTP login.
- **Connection port**: This is usually filled in automatically by the software. If you need to enter it:
    - Use port "21" for a connection using FTP protocol
    - Use port "22" for a connection using SFTP (if it is enabled).

If the information is correct, the software you are using will display the content of your FTP storage space. A message (also called "status") may appear to confirm that the content has been successfully listed by your FTP software.

#### 3. SSH connection <a name="ssh"></a>

To connect via SSH, use a terminal to interact directly with your FTP storage space via command lines.

You can find more information on SSH in our guide on [using SSH with your OVHcloud web hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting)

An SSH client is installed by default on *macOS*, *Linux* and *Windows 10*. An older Windows environment will require the installation of software such as [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) or the addition of the *OpenSSH* feature. 

> [!warning]
> 
> Since this step is specific to the operating system you are using, we cannot detail it in this documentation.
>

Once the SSH connection has been established using the method chosen, there are two ways of logging in: 

- **From software**: The text boxes must be filled in with the login information.
- **From the command line**: A specific syntax must be used.

At the command line, use the following syntax:

```bash
ssh sshlogin@sshserver -p connectionport
```

Replace the elements `sshlogin`, `sshserver` and `connectionport` with your own information. 

Once the command has been sent, you will be prompted to enter the SSH user password.

If the information you have entered is correct, you will be logged in to your FTP storage space. 

Please refer to our guide on [Using an SSH connection on a web hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting) if you need help with this.

![ftpconnect](images/connect-ftp-step5.png){.thumbnail}

## Go further

[Changing an FTP user password](/pages/web_cloud/web_hosting/ftp_change_password)

[Accessing a web hosting plan via SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Using PuTTy for Windows](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Tutorial - Using FileZilla with your OVHcloud hosting](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[Tutorial - Using Cyberduck with your OVHcloud hosting](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ca/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ca/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
