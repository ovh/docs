---
title: 'Logging in to your Web Hosting plan’s storage space'
slug: log-in-to-storage-ftp-web-hosting
excerpt: 'Find out how to log in to your OVHcloud Web Hosting plan’s storage space'
section: 'FTP and SSH'
order: 02
---

**Last updated 19th January 2022**

## Objective

OVHcloud Web Hosting plans provide you with access to a storage space you can use to put your website and application files online. You can access this space using an FTP or SSH user account and password.

**Find out how to log in to your OVHcloud Web Hosting plan’s storage space.**

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/){.external}
- access to the `Web Cloud`{.action} section of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}

## Instructions

### Step 1: Retrieve your login information.

To log in to your storage space, you will need the following:

- an active FTP or SSH user account
- the FTP or SSH user password
- the server address
- the server connection port

> [!primary]
>
> This information is contained in the email confirming that your Web Hosting plan has been set up, and can be accessed via the OVHcloud Control Panel.
>
> **If you already have this information**, you can continue directly to step 2: "[Access your storage space](./#step-2-access-your-storage-space)".
> 

If you don’t have this information, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}, go to the `Web Cloud`{.action} section, then click on `Hosting`{.action}. Select the name of the Web Hosting plan concerned, and click on the `FTP - SSH`{.action} tab. 

The information about your storage space will appear, along with a table listing the FTP and SSH users created on your Web Hosting plan.

![ftpconnect](images/connect-ftp-step1.png){.thumbnail}

With this information, you should be able to find the items you need to log in to the storage space. If you are having trouble identifying this information, you can use the table below. Please note that some information may not appear, depending on which [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/){.external} you are using.

- **FTP and SFTP** server: This is the server address that allows you to access your storage space using FTP software via FTP or SFTP protocol.

> The standard connection port is port 21. Use port "22" for a connection via SFTP (if it is enabled)

- **SSH** server: This is the server address that allows you to access your storage space using a terminal via the SSH protocol.
- **Main** login: This is the primary FTP username (S)created on your hosting. You can find all of your web hosting plan’s FTP users in the "Login" column of the table.

If you have forgotten the password for an FTP or SSH user, depending on which Web Hosting plan you have, click either the pencil icon or the `...`{.action} button, then `Change password`{.action}. For further support, please refer to our guide to [Modifying a FTP user password](../modify-ftp-user-password/).

![ftpconnect](images/connect-ftp-step2.png){.thumbnail}

You should now have everything you need to log in to your storage space.

### Step 2: Access your storage space.

There are several ways you can access your storage space. We recommend reading this guide, and focusing on the method you wish to follow.

[1. Log in via FTP Explorer](#ftpexplorer): Gives you access to your storage space via your web browser.

[2. Log in via an FTP program](#ftpsoftware): Gives you access to your storage space via a program (e.g. FileZilla or Cyberduck). You will need to install the program on your computer beforehand.

[3. Log in via SSH](#ssh): Gives you access to your storage space via SSH. More advanced knowledge and a specific [OVHcloud web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/){.external} are required to use this method.

#### 1. Log in via FTP Explorer <a name="ftpexplorer"></a>

To log in to the storage space via FTP Explorer, log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=GB){.external}, then go to the `Web Cloud`{.action} section and click on `Hosting plans`{.action}, click on the name of the Web Hosting plan concerned. 

Go to the `FTP - SSH`{.action} tab, and click `FTP Explorer`{.action}. 

![ftpconnect](images/connect-ftp-step3.png){.thumbnail}

On the new page that opens, enter the FTP username and password, then log in. If the information you provide is correct, you can now interact with your storage space.

![ftpconnect](images/connect-ftp-step4.png){.thumbnail}

#### 2. Logging in via FTP software <a name="ftpsoftware"></a>

After you have installed the FTP program you want to use (e.g. FileZilla or Cyberduck), open it. 

You should be able to enter your login details. Since the method and layout will vary depending on which program and version you are using, we cannot detail all of them in this documentation.

As a reminder, you will need to enter the following information:

- **FTP and SFTP** server: This is the server address that allows you to access your storage space using FTP software via FTP or SFTP protocol.

> The standard connection port is port 21. Use port "22" for a connection via SFTP (if it is enabled)

- **SSH** server: This is the server address that allows you to access your storage space using a terminal via the SSH protocol.
- **Main** login: This is the primary FTP username created on your hosting. You can find all of your web hosting plan’s FTP users in the "Login" column of the table.

If the information is correct, the program you are using should display the contents of your storage space. A message (also called "status") may appear to confirm that the content has been successfully listed by your program.

#### 3. SSH connection <a name="ssh"></a>

To log in via SSH, use a terminal to interact directly with your storage space via command lines. 

This tool is installed by default on macOS or Linux. For a Windows environment, you will need to install a program like PuTTY, or add the "OpenSSH" feature. Since this method will vary, depending on the operating system you are using, we cannot cover it in this guide.

Once the SSH connection has been established using your chosen method, there are two ways of logging in: 

- **Via a program.** You will need to enter your login details in to the text fields.
- **Via a command line.** You will need to use a specific syntax.

If you are logging in via the command line, the commands you will need to use are listed below. You will need to replace "sshlogin", "sshserver" and "connectionport" with your own SSH login details. Once the command has been sent, you will be prompted to enter the SSH user password.

```ssh
ssh sshlogin@sshserver -p connectionport
```

If the information you have entered is correct, then you can interact with your storage space. If you need further support in this regard, please refer to the following guide: [Web Hosting: SSH on web hosting packages](../web_hosting_ssh_on_web_hosting_packages/).

![ftpconnect](images/connect-ftp-step5.png){.thumbnail}

## Go further

[Modifying an FTP user password](../modify-ftp-user-password/){.external}.

[Web hosting: SSH on web hosting packages](../web_hosting_ssh_on_web_hosting_packages/).

Join our community of users on <https://community.ovh.com/en/>.
