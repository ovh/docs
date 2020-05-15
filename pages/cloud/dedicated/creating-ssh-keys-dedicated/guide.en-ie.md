---
title: 'Creating SSH keys'
slug: creating-ssh-keys-dedicated
excerpt: 'Find out how to create SSH keys for a secure connection to your dedicated server'
section: 'Getting started'
order: 4
---

**Last updated 15th April 2020**

## Objective

Using the SSH protocol enables a secure channel over an unsecured network in a client-server architecture, connecting an SSH client with an SSH server. Creating an SSH key set provides you with a public and a private key. You can place the public key on any server, and then unlock it by connecting to it with a client that already has your private key stored on it. If the SSH key sets match up, you will be logged in without needing a password.

**This guide explains how to create SSH keys and then use them to securely access your server.**

> [!primary]
>
Please note that SSH keys are not used for authentication on servers running the Windows operating system. For Windows servers, you will still need to use a username and password.
>

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)
- a [dedicated server](https://www.ovh.ie/dedicated_servers/) in your OVHcloud account
- administrative access (root) via SSH

## Instructions

### Creating an SSH key on Linux and Mac

On a Mac or Linux machine, open the Terminal (command line) app.

Verify that you have a ".ssh" folder in your $HOME directory. If the folder does not exist, create it:

```sh
# mkdir ~/.ssh
```

Use the following command to create a 4096 bit RSA key:

```sh
# ssh-keygen -b 4096
```
Using the "-t" option with this command allows you to specify a different encryption method, for example:

```sh
# ssh-keygen -t ed25519 -a 256
```

The command will prompt you to save the newly created key:

```sh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Confirm, and you will now have the option to enter a passphrase to password-protect your SSH key. This is recommended for added security.

Your SSH keys should be stored in the ".ssh" directory.

```ssh
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

> [!warning]
>
> The private key should always be kept safe, and access to it strictly limited to authorised people only.
> 

In order to read and export your public key, use the "cat" command on your key file and copy the output:

```ssh
# cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

### Creating an SSH key using PuTTY (for Windows)

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) is a popular SSH client for Windows. You can use it to remotely connect to a Linux server. Its companion software [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe) can be used to create SSH keys.

First, download the [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe) software, which we will use to generate the key.

Next, run the software and select the key type. In our example, we choose a 4096 bit RSA key. Click the `Generate`{.action} button to start the creation process.

![putty key](images/puttygen_01.png){.thumbnail}

Randomly move your mouse cursor around the area underneath the progress bar, as shown below.

![putty key](images/puttygen_02.gif){.thumbnail}

Keep moving the mouse until the bar is full. Your key is now created and ready to use.

![putty key](images/puttygen_03.png){.thumbnail}


### Adding SSH keys to your server

Navigate to your $HOME directory and create the ".ssh" folder (if it does not exist):

```ssh
$ mkdir ~/.ssh
```

To store the key for the current user, open a file named "authorized_keys" with your preferred text editor:

```ssh
$ nano ~/.ssh/authorized_keys
```

Copy and paste your **public key** into this new file. Save the file and exit the editor. Reboot your server or only restart the OpenSSH daemon (the appropriate command may vary depending on your OS):

```ssh
$ systemctl restart sshd
```

To verify that your key has been set up properly, attempt to access your server via SSH using the following command. Replace "IP_ADDRESSorHOSTNAME" with the IP address or hostname of the server you are trying to access:

```ssh
$ ssh user@IP_ADDRESSorHOSTNAME
```

#### Adding additional keys to your server

To add SSH keys for additional users, simply repeat the previous steps but use the appropriate $HOME directory to create that user's unique key.

#### Removing authorised keys from your server

Delete the key which corresponds to the user having their access revoked from your "authorized_keys" file. Upon removing the key, save the file and exit the text editor.

### Importing your SSH key into the OVHcloud Control Panel

The OVHcloud Control Panel allows you to store public keys created using one of the supported encryption types (currently RSA, ECDSA, ED25519). 

Open the sidebar navigation by clicking on your name in the top right corner and use the shortcut `Products and services`{.action}.

![SSH key control panel](images/SSH_keys_panel_1.png){.thumbnail}

In "My services", switch to the `SSH keys`{.action} tab and click on `Add an SSH key`{.action}.

![SSH key control panel](images/SSH_keys_panel_2.png){.thumbnail}

Select "Dedicated" from the drop-down menu.

In the new window, enter an ID (a name of your choice) for the key. Paste the key string (copied from your ".pub" file) into the "Key" field.

![SSH key control panel](images/SSH_keys_panel_3.png){.thumbnail}

If you have copied the full output, the identifier after the key should already be included. Note that in order to store your key, you will need to always specify your identifier after the pasted key. This is a requirement of the OVHcloud Control Panel. (See the example format above.) Click `Confirm`{.action} to store your public key.

> [!primary]
>
> Any keys saved in the "Dedicated" section will be usable for your VPS services as well. Regarding SSH keys for Public Cloud services, please refer to [this guide](../../public-cloud/create-ssh-keys).
>


## Go further

Join our community of users on <https://community.ovh.com/en/>.