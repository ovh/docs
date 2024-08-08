---
title: "Web Hosting - Copy files using SCP command"
excerpt: "Find out how to use the Secure Copy Protocol (SCP) command in SSH to copy files to and from your web hosting plan"
updated: 2024-01-30
---

## Objective

With the Secure Copy Protocol (SCP), you can securely copy data between two devices (using SSH protocol). You can copy content:

- Present locally from your computer to a remote device.
- From a remote device to your computer.
- From one server to another (unavailable between two OVHcloud web hosting plans).

It allows you to copy a file or folder containing one or more files from a terminal using a Linux command.

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist service provider](/links/partner) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

**This guide explains how to use the Secure Copy Protocol (SCP) command in SSH to copy files to and from your Web Hosting plan.**

## Requirements

- A terminal compatible with Linux and SSH commands (for example, the *terminal* of MacOS or the *Ubuntu* emulator on Windows)
- Familiarity with Linux and SSH commands
- A [web hosting plan](/links/web/hosting) with SSH access
- Access to your [OVHcloud Control Panel](/links/manager){.external}

## Instructions

This guide will provide a non-exhaustive list of the features available with the `scp` command. Please feel free to chat with our [community of users](/links/community) if you would like to learn more.

### Step 1 - Retrieve SSH access from your web hosting plan

To find the SSH access for your web hosting plan, please read our guide on [Using SSH access for your web hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting).

### Step 2 - Retrieve the full path to your web hosting plan’s FTP storage space<a name="step2"></a>

Open your terminal and connect to your web hosting plan via SSH.

Once you have logged in to your web hosting plan via SSH, enter the following command: 

```bash
cd ..
```

Confirm the command using the `Enter`(↲) key on your keyboard, then enter the following command:

```bash
ls
```

Confirm this second command using the `Enter` key (↲) on your keyboard.

In your terminal, a result similar to our example below will appear:

```console
FTP-login@ssh0X.cluster0XX.xxx.hosting.ovh.net (php/X.X/production/legacy) /homez.XXX $
FTP-main-login
```

In our example:

- `FTP-login`: The name of one of the FTP users (primary or non-primary) of your web hosting plan.
- `/homez.XXX`: *filer* on which your web hosting plan is located.
- `FTP-main-login`: Directory path of your web hosting plan’s FTP storage space. This directory is usually named the same as your web hosting plan’s main FTP login.

In our example, the full path to the FTP storage space to access the web hosting plan’s FTP root is: `/homez.XXX/FTP-main-login`.

Only from a directory equivalent to the directory `FTP-main-login` of our example will you be authorised to use the `scp` command.

When you log in to a web hosting plan’s FTP space in the usual way, you can log in directly from the folder equivalent to the `FTP-main-login` folder in our example.

This is where your web hosting plan’s `www` folder and `.ovhconfig` file are located by default.

### Step 3 - Use the "scp" command with your web hosting plan

> [!success]
>
> All of the commands below are carried out from your device's terminal **locally**. You do not need to first establish an SSH connnection to your web hosting plan.
>
> The file path used with the `scp` command is relative to the current local directory. To transfer data to your web hosting or from the web hosting to your local device, be sure to execute your commands from the local parent directory, as shown in the examples below.
>

Remember to replace all of the following general settings with your own:

- `FTP-login`: FTP login for your web hosting plan.
- `ssh.cluster0XX.hosting.ovh.net`: Replace `XX` with the cluster number where your web hosting plan is located. If you need any further information, please refer to our guide on [Using SSH access on your web hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting).
- `/homez.XXX/FTP-main-login/`: Replace `XXX` with the number of the *filer* and the `FTP-main-login` by the parameters retrieved in [step 2](#step2) of this guide.
- `source_folder`: The name of the source folder to be copied or in which the file to be copied is located. *If the file path contains nested folders, specify all the folder names separated by a `/`*.
- `target_folder`: The name of the target folder that will receive the local folder or file to copy. *If the file path contains nested folders, specify all the folder names separated by a `/`*.
- `file`: The name of the file to be copied using the `scp` command. Please also remember to specify the extension of this file (examples: *.html*, *.css*, *.php*, *.txt*, etc.).

#### Copy content from your local device to your web hosting plan

To copy a single local file to your web hosting plan, use the following command:

```bash
scp source_folder/file FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder
```

To copy a local folder and all of its contents to your web hosting plan, use the following command:

```bash
scp -r source_folder FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder 
```

#### Copy content from your web hosting plan to your local device

To copy a single file from your web hosting plan to your local device, use the following command:

```bash
scp FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main/login/source_folder/file target_folder 
```

To copy a folder on your web hosting plan and all of its files to your local device, use the following command:

```bash
scp -r FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/source_folder target_folder
```

#### Copying content from your OVHcloud web hosting plan to another OVHcloud web hosting plan

For security reasons, the `scp` command is refused by the OVHcloud web hosting infrastructure when trying to move data from one hosting to another.

### Step 4 - Make sure the content has been copied

To check that content on your computer has been copied to your web hosting plan, you can [log in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection), then go to the target directory where the content is supposed to be.

To check that content on your web hosting plan has been copied locally on your computer, go to the target directory on your device/computer, then check that the content that is supposed to be copied is there.

## Go further <a name="go-further"></a>

[Accessing a web hosting plan via SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Logging in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).