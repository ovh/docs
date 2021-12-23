---
title: 'Accessing a web hosting plan via SSH'
slug: web_hosting_ssh_on_web_hosting_packages
excerpt: 'Find out how to connect and use SSH access on an OVHcloud web hosting plan'
section: 'FTP and SSH'
---

**Last updated 18th August 2020**

## Objective

OVHcloud web hosting plans provide you with access to a storage space you can use to put your website and application files online. You can access this space using an FTP or SSH user account and password.

**Find out how to connect and use SSH access on an OVHcloud web hosting plan.**

## Requirements

- an [OVHcloud web hosting plan](https://www.ovhcloud.com/en/web-hosting/){.external} with SSH access
- the login credentials required to connect to your storage space via SSH
- access to the `Web Cloud`{.action} section of the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we){.external}

## Instructions

### Step 1: Ensure that SSH access is enabled.

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we){.external}, go to the `Web Cloud`{.action} section, then click on `Hosting`{.action} in the services bar on the left-hand side. Select the name of the web hosting plan, and click on the `FTP - SSH`{.action} tab. The information associated with your storage space will now appear. 

Find the table in the ‘SSH’ column to check if the SSH user (or ‘SSH login’) concerned has SSH access enabled. A ‘Disabled’ label will be present if this is not the case.

![usessh](images/use-ssh-step1.png){.thumbnail}

If SSH access is disabled, click `...`{.action} to the right of the user concerned, then `Modify`{.action}. In the window that pops up, enable SSH access, then confirm the modification. If you cannot enable it, ensure that your [OVHcloud web hosting plan](https://www.ovhcloud.com/en/web-hosting/){.external} offers SSH access.

### Step 2: Retrieve your connection information.

To connect to your storage space via SSH, you will need the following information to hand. If you do not have all this information, you can find it in the `FTP - SSH`{.action} tab.

|Element|Where to find it|
|---|---|
|Enabled SSH user|You will find it in the ‘SSH login’ column of the table. As a reminder, the [user’s SSH access must be enabled](./#step-1-ensure-that-ssh-access-is-enabled).|
|The SSH user password|If you have forgotten this password, you can change it by clicking `...`{.action}, then `Change password`{.action}.|
|The SSH server address|Click on the “SSH access to cluster” note. In the element that appears, the SSH server address starts with “ssh://”, and ends before the “:”.|
|The SSH server connection port|Click on the “SSH access to cluster” note. In the element that appears, the port number is mentioned after the “:”.|

Here is an example of what it will look like: `ssh://ssh.cluster023.hosting.ovh.net:22/`. In this example, “ssh.cluster023.hosting.ovh.net” is the SSH server address, and “22” is the SSH connection port.

![usessh](images/use-ssh-step2.png){.thumbnail}

### Step 3: Log in to your storage space via SSH.

To log in via SSH, use a terminal to interact directly with your storage space via command lines. 

This tool is installed by default on macOS, Linux, and Windows 10. With an older Windows environment, you will need to install a program like PuTTY, or add the OpenSSH feature. Since this aspect will vary depending on which operating system you are using, we cannot provide any further details in this guide.

There are now two ways of connecting to your storage space, depending on the method you use:

#### 3.1 From a terminal.

> [!warning]
> There is no superuser (or root) access via SSH on our shared hosting plans.

Once the terminal is open, use the following command, replacing ‘sshlogin’, ‘sshserver’ and ‘connectionport’ with your own SSH credentials. 

```ssh
ssh sshlogin@sshserver -p connectionport
```

When you run the command, you will be prompted to enter the SSH user password. Once you have connected, follow the next step: [Interact with your storage space via SSH](./#step-4-interact-with-your-storage-space-via-ssh_1).

![usessh](images/use-ssh-step3.png){.thumbnail}

#### 3.2 From a software application.

Open your software application (e.g. PuTTY), and enter your SSH connection details. This action will vary depending on the application you choose to use, so we cannot go into further detail on this in the guide. As a reminder, you will need to enter the following information:

|Information to enter|Details|
|---|---|
|SSH server|Enter the SSH server address you retrieved during [step 2](./#step-2-retrieve-your-connection-information). Depending on which software you are using, the field may be labelled as "Server address" or "Host Name".|
|Connection port|Enter the SSH connection port you retrieved during [step 2](./#step-2-retrieve-your-connection-information).|
|SSH login|Enter the SSH user. Depending on the software application you use, this field may be labelled as “Login” or “Username”.|
|SSH user password|Enter the password associated with the SSH login.<br><br> Depending on which software you are using, the field should be labelled as "Password".|

Once you have connected, move on to the next step.

### Step 4: Interact with your storage space via SSH.

To interact with your storage space, you can use commands, which each have a direct meaning. Use the list below if you need to. Please note that **this list is not exhaustive**.

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

You can also run a command to launch a script using a specific PHP version. E.g. for PHP version 7.1, use the following command, and adapt the elements to match your details.

```sh
/usr/local/php7.1/bin/php myscript.php
```

Depending on the PHP version you want to use, the runtime environment may need to be modified to ensure that there are no compatibility issues. Please refer to our documentation.

## Go further

[Modifying the configuration of a Web Hosting plan](../modify_your_web_hosting_systems_runtime_environment/)

[Configuring the .ovhconfig file of your Web Hosting plan](../configuring-file-ovhconfig/)

Join our community of users on <https://community.ovh.com/en/>.

