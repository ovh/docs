---
title: "Web Hosting - How to use SSH access"
excerpt: "Find out how to log in and use SSH access on an OVHcloud Web Hosting plan"
updated: 2025-09-08
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

OVHcloud web hosting plans provide you with access to a storage space you can use to put your website and application files online. You can access this space via FTP or SSH credentials.

**Find out how to connect and use SSH access on an OVHcloud web hosting plan.**

## Requirements

- An [OVHcloud web hosting plan](/links/web/hosting) with SSH access.
- Access to the `Web Cloud`{.action} section of the [OVHcloud Control Panel](/links/manager).

> [!warning]
> 
> SSH access to an OVHcloud web hosting plan is possible from the [Pro plan](/links/web/hosting-compare) and above.

## Instructions

To log in and use SSH access to your web hosting plan, you will need the following:

- the active SSH user;
- the password associated with this SSH user;
- the SSH server address of your web hosting plan;
- the connection port to your web hosting plan’s SSH server.

### 1 - Make sure that SSH access is enabled for the SSH user you have chosen <a name="user-ssh-enablement"></a>

Click on the tabs below to view each of the **4** steps in succession.

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that pops up, click on the `FTP - SSH`{.action} tab.
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Step 4**
>>
>> On the new page, the information related to your storage space will appear.
>>
>> In the table, locate the `SSH` column to check that the SSH user (in the `Login` column of the table) concerned has SSH access enabled. If this is not the case, the words `Disabled` will appear.
>>
>> ![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}
>>
>> If the SSH access of the user concerned is `Disabled` in the table, perform the following steps:
>>
>> - 1 : Click the `...`{.action} button to the right of the user’s line, then `Edit`{.action}.
>> - 2 : In the window that pops up, in the `Connection protocols` section, select the `FTP, SFTP and SSH`{.action} choice, then click `Next`{.action}.
>> - 3: Check the summary of the requested change, then click `Confirm`{.action}.
>>
>> > If you cannot enable it, please ensure that [your OVHcloud web hosting plan](/links/web/hosting) has SSH access.

### 2 - Retrieve the information you need to log in via SSH <a name="sshlogin"></a>

Click on the tabs below to view each of the **4** steps in succession.

>> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that pops up, click on the `FTP - SSH`{.action} tab.
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Step 4**
>>
>> On the new page, retrieve the elements described in the following table:
>>
>> |Element|Description|
>> |---|---|
>> |**SSH server address**| Locate `SSH server`. It is in the form `ssh.clusterXXX.hosting.ovh.net` (where each of the 3 `X` corresponds to a number between `0` and `9`).|
>> |**SSH server connection port**| Locate `SSH port`. The default SSH port number is `22`.|
>> |**Active SSH user**| In the table at the bottom of the page, find them in the `Login` column.<br>As a reminder, this user must [have active SSH access](#user-ssh-enablement).|
>> |**SSH user password**| If you have forgotten this password, click the `...`{.action} button to the right of the row corresponding to the user concerned in the table at the bottom of the page, then `Change password`{.action}.|

### 3 - Log in to your Web Hosting plan’s storage space via SSH

To connect via SSH, use a terminal to interact directly with your storage space via command lines.

> [!primary]
>
> Command terminals are installed by default on macOS, Linux and Windows 10. An older Windows environment will require the installation of software such as [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) or the addition of OpenSSH functionality.

There are now two ways of connecting to your web hosting plan via SSH. 

**Please click on your preferred connection method below to see explanations.**

/// details | From a terminal

> [!warning]
>
> There is no superuser (or root) access via SSH on our shared hosting plans.

Once the terminal is open, use the following command, replacing the `yourlogin`, `ssh.clusterXXX.hosting.ovh.net` and `22` elements with those corresponding to your SSH credentials.

```bash
ssh yourlogin@ssh.clusterXXX.hosting.ovh.net -p 22
```

After sending the command, you will be prompted to enter the SSH user password.

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

///

/// details | From a software application

Once you have opened the software (e.g. PuTTY), enter your SSH connection details. Since this procedure involves several steps, we cannot detail this in this documentation. Here is a reminder of the information you will need to enter:

- **SSH server**: Enter the SSH server address retrieved in the [part 2](#sshlogin). Depending on the software you are using, the domain name may look like “Server Address” or “Hostname”.
- **Connection port**: Enter the SSH connection port retrieved in [part 2](#sshlogin).
- **SSH login**: Enter the SSH user. Depending on the software you are using, the domain name may look like “ID”, “Login” or even “Username”.
- **SSH user password**: Enter the password associated with the SSH login.

///

Once you have logged in, continue to the next section.

### 4 - Interact with your storage space via SSH <a name="ssh-using"></a>

To interact with your storage space, you will need to use commands. These have a direct meaning derived from English. Use the list below if you need to. Important: **this information is not exhaustive**.

|Command|Meaning|Description| 
|---|---|---|
|pwd|Print working directory|Displays the working directory you are in.| 
|cd `arg`|Change directory|Enables you to change the working directory to the one entered, replacing `arg`.|
|cd `..`|Change directory|Enables you to change the working directory, one level up in the tree-view of your directories.|
|cd|Change directory|If you do not specify an argument, you can move to the root of your storage space (home).|
|ls|List|Lists the contents of your working directory. Add the attributes to modify the result of the command (like `ls -ulhG`).| 
|chmod `droit` `arg`|Change mode|Change the rights of the file or directory mentioned as an `arg` argument.| 
|mkdir `arg`|Make directory|Enables you to create a directory with the argument name `arg`.| 
|touch `arg`|Touch|Creates an empty file with the name mentioned in the `arg` argument, if a file with this name does not already exist.|
|rm `arg`|Remove|Removes the file mentioned in the `arg` argument.| 
|rm -r `arg`|Remove|Removes the directory mentioned as an `arg` argument, as well as all of its contents, recursively.| 
|mv `arg1` `arg2`|Move|Renames or moves an element (specified as `arg1`) to a new area (specified as `arg2`).|

You can also launch a script using a specific PHP version. For example, for PHP version 7.1, use the following command. Adapt its elements to your personal situation.

```sh
/usr/local/php7.1/bin/php myscript.php
```

Depending on the PHP version you want to use, the runtime environment may need to be modified for compatibility reasons. Refer to our documentation “[Web Hosting - Environment, PHP version, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)” to find out more.

> [!primary]
>
> Files and/or folders can also be copied using the **S**ecure **C**opy **P**rotocol (**SCP**).
> This protocol uses SSH protocol to securely duplicate content between:
>
> - a local computer/device and a remote server
> - two remote servers
>
> Find more information on using the `scp` command with our OVHcloud web hosting plans in our guide “[Web Hosting - Copy files using SCP command](/pages/web_cloud/web_hosting/using-scp-command)”.

## Go further

[Web Hosting - Environment, PHP version, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community). 