---
title: "Web Hosting - Copy files using SCP command"
excerpt: "Find out how to use the Secure Copy Protocol (SCP) command in SSH to copy files to and from your web hosting plan"
updated: 2024-01-22
---

## Objective

With Secure Copy Protocol (SCP), you can securely copy data between two devices (using SSH protocol). You can copy content:

- present locally from your computer to a remote device;
- from a remote device to your computer;
- from one server to another (unavailable between two OVHcloud web hosting plans).

It allows you to copy a file or folder containing one or more files from a terminal using a Linux command.

> [!warning]
>
> OVHcloud provides services that you are responsible for configuring, managing and managing. It is therefore up to you to ensure that it works properly.
> 
> We have provided you with this guide in order to help you with common tasks. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-ca/directory/) if you experience any difficulties. We will not be able to assist you. You can find more information in the ["Go further"](#go-further) section of this guide.
>

**Find out how to use the Secure Copy Protocol (SCP) command in SSH to copy files to and from your Web Hosting plan.**

## Requirements

- a terminal compatible with Linux and SSH commands (for example, the *terminal* of MacOS or the *Ubuntu* emulator on Windows)
- Familiarity with Linux and SSH commands
- You must have a [web hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/) with SSH access
- access to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}

## Instructions

This guide will provide a non-exhaustive list of the features available with the `scp` command. Please feel free to chat with our community of users on <https://community.ovh.com/en/> if you would like to learn more about this order.

### Step 1 - Retrieve SSH access from your web hosting plan

To find the SSH access for your web hosting plan, please read our guide on [Using SSH access for your web hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting) .

### Step 2 - Retrieve the full path to your web hosting plan’s FTP storage space<a name="step2"></a>

Open your terminal and connect to your web hosting plan via SSH.

Once you have logged in to your web hosting plan via SSH, enter the following command: 

```ssh
cd ..
```


Confirm the command using the `enter`(↲) key on your keyboard, then enter the following command:

```ssh
ls
```

Confirm this second command using the `enter` key (↲) on your keyboard.

In your terminal, a result similar to our example below will appear:

```ssh
FTP-login@ssh0X.cluster0XX.xxx.hosting.ovh.net (php/X.X/production/legacy) /homez.XXX $
FTP-main-login
```

In our example:

- `FTP-login`: the name of one of the FTP users (primary or non-primary) of your web hosting plan.
- `/homez.XXX`: *filer* on which your web hosting plan is located.
- `FTP-main-login`: directory path of your web hosting plan’s FTP storage space. This directory is usually named the same as your web hosting plan’s main FTP login.

In our example, the full path to the FTP storage space to access the web hosting plan’s FTP root is: `/homez.XXX/FTP-main-login`.

Only from a directory equivalent to the directory `FTP-main-login` of our example will you be authorized to use the `scp` command.

When you log in to a web hosting plan’s FTP space in the usual way, you can log in directly from the folder equivalent to the `FTP-main-login` folder in our example.

This is where your web hosting plan’s `www` folder and `.ovhconfig` file are located by default.

### Step 3 - Use the ‘scp’ command with your web hosting plan

> [!success]
>
> All of the commands below are carried out from your device/computer's terminal **locally**. You do not need to be connected via SSH in your terminal on your web hosting plan.
>
> If you want to copy content to your web hosting plan, position your **local** user far enough upstream of the files/folders you want to copy to your web hosting plan.
>
> If you would like to retrieve a copy of the files/folders stored on your web hosting plan locally on your device/computer, please position your **local** user far enough upstream of the folder that will retrieve the copy of your hosted data.
>

Remember to replace all of the following general settings with your own:

- `FTP-login`: FTP login for your web hosting plan.
- `ssh.cluster0XX.hosting.ovh.net`: replace the `XX` with the cluster number where your web hosting plan is located. If you need any further information, please refer to our guide on [Using SSH access on your web hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting) to find this information.
- `/homez.XXX/FTP-main-login/`: modify the `XXX` by the number of the *filer* and the `FTP-main-login` by the parameters retrieved in [step 2](#step2) of this guide.
- `source_folder`: The name of the source folder to be copied or in which the file to be copied is located. *If the tree corresponds to a succession of nested folders, you will need to specify all the folder names separated by a `/`*.
- `target_folder`: The name of the target folder that will receive the local folder or file to copy. *If the tree corresponds to a succession of nested folders, you will need to specify all the folder names separated by a `/`*.
- `file`: The name of the file to be copied using the `scp` command. Please also remember to specify the extension of this file (examples: *.html*, *.css*, *.php*, *.txt*, etc.).

#### Copy content locally on your device to your web hosting plan

To copy a single local file to your web hosting plan, use the following command:

```ssh
scp source_folder/file FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder
```

To copy a local folder and all of its contents to your web hosting plan, use the following command:

```ssh
scp -r source_folder FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder 
```

#### Copy content from your web hosting plan to your local device

To copy a single file from your web hosting plan to your local device, use the following command:

```ssh
scp FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main/login/source_folder/file target_folder 
```

To copy a folder on your web hosting plan and all of its content to your local device, use the following command:

```ssh
scp -r FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/source_folder target_folder
```

#### Copying content from your OVHcloud web hosting plan to another OVHcloud web hosting plan

For security reasons, the `scp` command has been refused in SSH by the OVHcloud web hosting infrastructure up to now when two web hosting plans try to copy content between them.

### Step 4 - Make sure the content has been copied

To check that content on your computer has been copied to your web hosting plan, you can [log in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection), then go to the target directory where the content is supposed to be copied.

To check that content on your Web Hosting plan has been copied locally on your computer, go to the target directory on your device/computer, then check that the content that is supposed to be copied is there.

## Go further <a name="go-further"></a>

[Use SSH access on your web hosting plan](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Log in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ca/directory/).

Join our community of users on <https://community.ovh.com/en/>.