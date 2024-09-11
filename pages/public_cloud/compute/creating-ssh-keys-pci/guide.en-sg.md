---
title: How to create and use SSH keys for Public Cloud instances
excerpt: Find out how to create SSH key pairs on your local device and use them to establish secure connections to your instance
updated: 2024-09-02
---

## Objective

Using the SSH protocol enables a secure channel over an unsecured network in a client-server architecture, connecting an SSH client with an SSH server. Creating an SSH key set provides you with a public and a private key. You can place the public key on a server, and then connect to it with a client that has the corresponding private key. If the public and private SSH keys match up, you will be logged in without needing a password.

This is usually the most secure and convenient connection method and the default on Public Cloud instances.

**This guide explains how to create and manage SSH keys on your local device to connect to Public Cloud instances.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- An SSH client application (command line or GUI)

> [!primary]
> This guide is not applicable for standard **Windows Server** installations since they rely on the `Remote Desktop Protocol` (RDP) for connections.
>
> You can find more information in our [guide on how to get create a Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps).
>

## Instructions

<a name="create-ssh-key"></a>

### Creating an SSH key pair

The following instructions cover two methods of using SSH keys:

- [Creating an **Open SSH** key pair and connecting to a server from the command line SSH client](#openssh)
- [Creating a `PuTTY` key pair and connecting to a server from the `PuTTY` SSH client](#useputty)

You can use both methods side by side but keep in mind that `PuTTY` stores key files in a specific format which makes them incompatible with SSH key files created with the **Open SSH** client. This means that a private key created with the command line SSH client will have to be [converted to the `PuTTY` format](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) first and vice versa.

<a name="openssh"></a>

#### Creating an SSH key pair from the command line 

From a **Mac** computer or a device with a **Linux OS** installed, open the command line application (`Terminal`).

Verify that you have a folder named `.ssh` in your `$HOME` directory. If the folder does not exist, create it:

```bash
mkdir ~/.ssh
```

On a current **Windows OS**, open the `Command Prompt` by typing "cmd" into the search bar (or open `PowerShell` from the menu).

Go to the directory `.ssh` for your active **Windows** user (by default: `C:\Users\WindowsUsername\.ssh`):

```bash
cd .ssh
```

<a name="createnewkey"></a>

Use the following command to create a 4096 bit RSA key:

```bash
ssh-keygen -b 4096
```

Using the option `-t` with this command allows you to specify a different encryption method, for example:

```bash
ssh-keygen -t ed25519 -a 256
```

The command line will prompt you to save the newly created key in the standard file:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

You can confirm with `Enter` to accept the proposed file name or enter an individual name. This is relevant if more than one key pair is placed in the `.ssh` directory. You can find more information about this in the section [Managing multiple SSH keys](#multiplekeys).  
This example uses the standard file names `id_rsa` and `id_rsa.pub`.

You can protect your SSH key with a passphrase at the next prompt. This is recommended for added security.

> [!warning]
>
> Remote access to your instance is only as secure as the client device storing the private key. Protecting your device and files from unauthorized access is therefore crucial when using SSH keys.
> 
> For convenience and security purposes, consider using a password manager on your device, such as the open source solution `KeePass`.
> 

All SSH keys should be stored in the `.ssh` directory. The public key files will have `.pub` added to the filename.

```console
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

<a name="publickey"></a>

In order to view and export your public key, use the command `cat` on your `.pub` key file. Copy this key string to [add it to a new instance](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) or to [import it into the OVHcloud Control Panel](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

```bash
cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

> [!primary]
>
> In a **MacOS** Terminal you can use the commands `pbcopy` and `pbpaste` to handle key strings faster. For example, use this command to copy the key from the file `id_rsa.pub` to the clipboard:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

On a **Windows OS**, you can open the file with the `Notepad` application from the `File Explorer` (`right-click` on the file and select `Open with`) or use one of the following commands (in `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copy this key string to [add it to a new instance](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) or to [import it into the OVHcloud Control Panel](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

> [!primary]
>
> **Clipboard usage**
>
> When working from a **Windows** command line, you can use a `right-click` to **paste** the content of your clipboard into the command line window. To **copy** a string from the command line window, highlight it, then press `Enter`. You can also find these functions via a `right-click` on the menu bar.
>

<a name="useputty"></a>

#### Creating an SSH key pair with PuTTY

[PuTTY](https://putty.org/){.external} is an open source SSH client software with a graphical user interface, available for **Windows** and other operating systems. It provides a companion software to create SSH keys: `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> The main purpose of `PuTTY` is managing SSH connections from a **Windows** client device to a **GNU/Linux** remote host. `PuTTY` stores key files in a **specific format** that is incompatible with SSH key files created with the **Open SSH** client natively included in most contemporary operating systems.
>
> If necessary, keys generated from the command line as explained above can be [converted into the `PPK` format](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) in order to use them with the `PuTTY` client. For the most convenient use of SSH keys, decide on an option and stick to it (**Open SSH** private keys or `PuTTY` private keys).
>

If it is not already installed (check your applications list or use the search function), download `PuTTY` from [the official website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html). The recommended standard installation package contains `PuTTYgen` but it is available as a standalone file on the website as well.

Open `PuTTYgen` and select a supported encryption algorithm. This example uses RSA. Enter 4096 as the number of bits in the bottom right corner, then click on the button `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_01.png){.thumbnail}

Move your mouse cursor freely about the area below the progress bar:

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_02.gif){.thumbnail}

The key is ready when the progress bar is full.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_03.png){.thumbnail}

Copy this key string to [add it to a new instance](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) or to [import it into the OVHcloud Control Panel](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

Save both keys as files by clicking the corresponding buttons and also enter a passphrase to protect them.

> [!warning]
>
> Remote access to your instance is only as secure as the client device storing the private key. Protecting your device and files from unauthorized access is therefore crucial when using SSH keys.
> 
> For convenience and security purposes, consider using a password manager on your device, such as the open source solution `KeePass`.
>

One advantage of using `PuTTY` is the ability to save different connections as `Sessions`. Find further information below in the section [Managing multiple SSH keys on your local device](#puttykeys).

<a name="multiplekeys"></a>

### Managing multiple SSH keys on your local device

You might want to use multiple SSH key pairs to connect to different remote hosts.

> [!primary]
>
> If you are using `PuTTY`, skip to [the corresponding section](#puttykeys) below.
>

Since all keys should be placed in the folder `.ssh` on your local device, the file names have to be different. When you [create a new key pair](#createnewkey) and you are asked to provide a file name, enter a name of your choice. Match it to the name of your instance for example.

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

When connecting to the corresponding server, specify the name of the key file in addition to the user and server details:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Example:
    
```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

As noted in previous sections, the same instructions will work on a **Windows** client. Only replace `~/` with the file path of your **Windows** user folder, by default `C:\Users\WindowsUsername\`. (Example: `ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100`)

#### Using the "config" file

The alternative to adding the option `-i` each time is to edit a file named `config` inside the folder `~/.ssh` (`\Users\Username\.ssh` for **Windows**). You can use it to configure details for different connections (username, port, key file, optional parameters, etc.)

If this file exists inside `.ssh`, it probably contains some information already. Depending on your working environment, consider creating a backup copy of the original first.

Example of `.ssh` folder content:
    
```bash
ls ~/.ssh/
```

```console
config	id_rsa	id_rsa.pub	known_hosts	 known_hosts.old
```

With the `config` file, multiple SSH connections can be stored along with their individual parameters, in addition to standard values. Using the full potential of this file can become complex, since it is most useful for experienced users managing multiple servers on a regular basis.

Following is a simple example to explain how to configure an SSH connection to an instance.  
Open the file and add the following lines at the top:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

You can then connect to the instance with the alias name you have defined as `Host`:

```bash
ssh ubuntu@instance
```

Only the server IP and the key file were specified in the previous example but more details can be added.  
To configure an SSH connection to a second server with the username "rocky", the modified SSH port "49160" and the private key in the file "myserver_rsa", extend the file content as shown in this example:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

You can then connect to this server by entering:

```bash
ssh myserver
```

You can read the [corresponding `man` page](https://manpages.org/ssh_config/5) for more information.

<a name="puttykeys"></a>

#### Using PuTTY

`PuTTY` can save credentials and parameters of an SSH connection as a `Session`. This also enables you to connect to different servers using individual keys.

Open `PuTTY` and expand the subsection `SSH` in the left-hand menu, then click on `Auth` and `Credentials`.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_04.png){.thumbnail}

Click on the `Browse`{.action} button and select the `PuTTY` private key file (`keyfile.ppk`) from the folder in which you have saved it.

The key file is now associated with the current SSH session. Switch to `Session` in the left-hand menu and enter your login credentials for the server (`username@IPv4_address`).

Enter a name for this connection under `Saved Sessions` and click on `Save`{.action} to add it to the list.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_05.png){.thumbnail}

From now on, you can click on this `Session` item and open a connection to your server. To test it, click on `Open`{.action}. If you have protected the key file with a passphrase, you have to enter it at this point.

#### Adding additional public keys to your instance

To add SSH keys for other users accessing your instance, repeat the key creation steps but use the appropriate `$HOME` folder or **Windows** `Users` directory of the user in question to create and store the SSH keys (or execute the commands on this person's dedicated device).

Use our [dedicated guide](/pages/public_cloud/compute/configuring_additional_ssh_keys) for a detailed explanation of these steps.

<a name="gofurther"></a>

## Go further

[How to create a Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps)

[Getting started with SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[How to configure additional SSH keys on an instance](/pages/public_cloud/compute/configuring_additional_ssh_keys)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).