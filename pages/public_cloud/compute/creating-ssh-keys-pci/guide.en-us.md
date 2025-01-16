---
title: How to create and use authentication keys for SSH connections to Public Cloud instances
excerpt: Find out how to create key pairs for OpenSSH on your local device and use them to establish secure connections to your instance
updated: 2024-12-09
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

The SSH protocol enables a secure communication channel over public networks in a client-server architecture. Key pairs can be used to authenticate these SSH connections between two trusted hosts, for example a desktop client and a remote server.

A key set consists of a public key that can be shared and a private key that remains secret. Placed on a server, the public key allows any client that has the corresponding private key to connect to it without the need to enter a password.

This method is usually the best compromise between security and convenience and the default for Public Cloud instances.

**This guide explains how to create and manage authentication key pairs on your local device and use them to connect to Public Cloud instances.**

## Requirements

- A [Public Cloud project](/links/public-cloud/public-cloud) in your OVHcloud account
- A remote connection client application compatible with the OpenSSH protocol

> [!primary]
> This guide is not applicable for connections to standard **Windows Server** operating systems since they rely on the `Remote Desktop Protocol` (RDP) by default.
>
> You can find more information in our [guide on how to create a Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps).
>

## Instructions

### Creating key pairs for OpenSSH connections

The following instructions will explain how to create and manage key pairs for remote connections with **OpenSSH** from the **command line**. Most current operating systems include this feature without needing to install additional software.

If you prefer a graphical user interface, you can find many software applications for every type of OS that enable you to connect to remote hosts via the OpenSSH protocol.

For example, [PuTTY](https://putty.org/) is an open-source SSH client software with many useful features. Find out how to use it for connections to OVHcloud servers and instances in our detailed tutorial:

- [How to use PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

> [!primary]
>
> If you receive error messages when trying to connect, ensure you are using the correct paramaters and login details and that your system and the installed applications are properly updated. If you receive a warning message of the type `REMOTE HOST IDENTIFICATION HAS CHANGED`, consult our [SSH introduction page](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>

#### How to configure key pairs from a GNU/Linux distribution or macOS

/// details | Unfold this section

Open the command line application (`Terminal`) on your local device.

Verify that you have a folder named `.ssh` in your `$HOME` directory. If the folder does not exist, create it:

```bash
mkdir ~/.ssh
```

Use the command `ssh-keygen` to create a key pair. The option `-t` allows you to specify the encryption method.

> [!primary]
>
> `Ed25519` is considered the most secure but `RSA` is a valid alternative. Both methods are compatible with the [OVHcloud Control Panel](/pages/public_cloud/compute/public-cloud-first-steps).

Examples:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

The next prompt allows to name the newly created key or use the standard file name:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

If you confirm with `Enter`{.action} without entering a name, the standard file name will be used (`id_rsa` in this example).

If you plan to use more than one key pair in the future, enter an individual file name to identify the key. You can find more information about this below in the section **Managing multiple authentication keys on your local device**.

The example outputs below will keep using the file names `id_rsa` and `id_rsa.pub` for illustration purposes.

You can protect your SSH key with a passphrase at the next prompt. This is recommended for added security.

> [!warning]
>
> Remote access to your instance is only as secure as the client device storing the private key. Protecting your device and the key files stored on it from unauthorized access is therefore crucial.
> 
> For increased convenience and security, store passphrases in a password manager on your device, such as the open-source solution **KeePass**.
>

All SSH keys are stored in the `.ssh` directory by default. The public key files will have `.pub` added to the filename.

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

In order to view and export your public key, use the command `cat` on your `.pub` key file or open it with a text editor.

```bash
cat ~/.ssh/id_rsa.pub
```

```console
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

Copy this key string to [add it to a new instance or to import it into the OVHcloud Control Panel](/pages/public_cloud/compute/public-cloud-first-steps).

> [!primary]
>
> In a **macOS** Terminal you can use the commands `pbcopy` and `pbpaste` to handle key strings faster. For example, use this command to copy the key from the file `id_rsa.pub` to the clipboard:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

#### Managing multiple authentication keys on your local device

You might want to use multiple SSH key pairs to connect to different remote hosts or local network devices.

Since all key files should be placed inside the folder `.ssh` of your user's `home` directory, the file names have to be different. When you create a new key pair and you are asked to provide a file name, enter a name of your choice, for example the name of your instance. 

Output example:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

When connecting to the corresponding instance, specify the name of the private key file in addition to the connecting user and server details:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Example:
    
```bash
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

##### Using the "config" file

The alternative to adding the option `-i` each time is to edit a file named `config` inside the folder `~/.ssh`. You can use it to configure details for different connections (username, port, key file, optional parameters, etc.)

If this file exists inside `.ssh`, it probably contains some information already. Depending on your working environment, consider creating a backup copy of the original first.

Example output of listing the `.ssh` folder content:
    
```bash
ls ~/.ssh/
```

```console
config	id_rsa	id_rsa.pub	known_hosts	 known_hosts.old
```

The `config` file allows to store multiple SSH connections along with their individual parameters, in addition to standard values. Using the full potential of this file can become complex, since it is most useful for experienced users managing multiple servers.

Following is a simple example to explain how to configure an SSH connection to an instance.  
Open the file and add the following lines at the top:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Be sure to use the correct IP address and key file name. The first line, beginning with `Host`, defines the name of this connection (`instance` in this example).

You can then log in to the instance by replacing the instance IP address with the alias name identifying this connection (`Host`):

```bash
ssh username@connection_name
```

Example:

```bash
ssh ubuntu@instance
```

Only the instance IP and the key file were specified in the previous example but more details can be added.  
To configure an SSH connection to a second remote host with the username "rocky", the modified SSH port "49160" and the private key in the file "myserver_rsa", extend the file content as shown in this example:

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

You can then connect to this second host by entering:

```bash
ssh myserver
```

Consult the [corresponding `man` page](https://manpages.org/ssh_config/5) for more information on the `config` file.

///


#### How to configure key pairs from a Windows device

/// details | Unfold this section

Open the Command Prompt application by typing "cmd" into the search bar (or open PowerShell from the "Start" menu).

Open the directory `.ssh` of your active Windows user account (default path: `C:\Users\WindowsUsername\.ssh`):

```bash
cd .ssh
```

Use the command `ssh-keygen` to create a key pair. The option `-t` allows you to specify the encryption method.

> [!primary]
>
> `Ed25519` is considered the most secure but `RSA` is a valid alternative. Both methods are compatible with the [OVHcloud Control Panel](/pages/public_cloud/compute/public-cloud-first-steps).

Examples:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

The next prompt allows to name the newly created key or use the standard file name:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa):
```

If you confirm with `Enter`{.action} without entering a name, the standard file name will be used (`id_rsa` in this example).

If you plan to use more than one key pair in the future, enter an individual file name to identify the key. You can find more information about this below in the section **Managing multiple authentication keys on your local device**.

The example outputs below will keep using the file names `id_rsa` and `id_rsa.pub` for illustration purposes.

You can protect your SSH key with a passphrase at the next prompt. This is recommended for added security.

> [!warning]
>
> Remote access to your instance is only as secure as the client device storing the private key. Protecting your device and the key files stored on it from unauthorized access is therefore crucial.
> 
> For increased convenience and security, store passphrases in a password manager on your device, such as the open-source solution **KeePass**.
>

All SSH keys are stored in the `.ssh` directory by default. The public key files will have `.pub` added to the filename.

```console
Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.
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

Vou can open the key file with a text editor (Notepad, Notepad++, etc.). From the Windows File Explorer, right-click on the file and select `Open with`.  
You can also use one of the following commands (when in the directory `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Copy this key string to [add it to a new instance or to import it into the OVHcloud Control Panel](/pages/public_cloud/compute/public-cloud-first-steps).

> [!primary]
>
> **Clipboard usage**
>
> When working from a **Windows** command line, you can use a right-click to **paste** the content of your clipboard into the command line window. To **copy** a string from the command line window, highlight it, then press `Enter`{.action}. You can also find these functions via a right-click on the menu bar of the command line window.
>

#### Managing multiple authentication keys on your local device

You might want to use multiple SSH key pairs to connect to different remote hosts or local network devices.

Since all key files should be placed inside the folder `.ssh` of your Windows user directory, the file names have to be different. When you create a new key pair and you are asked to provide a file name, enter a name of your choice, for example the name of your instance. 

Output example:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in KeyFileName_rsa.
Your public key has been saved in KeyFileName_rsa.pub.
```

When connecting to the corresponding instance, specify the name of the private key file in addition to the connecting user and server details:

```bash
ssh -i C:\Users\Username\.ssh/KeyFileName user@IP_ADDRESS
```

Example:
    
```bash
ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100
```

##### Using the "config" file

The alternative to adding the option `-i` each time is to edit a file named `config` inside the folder `C:\Users\Username\.ssh`. You can use it to configure details for different connections (username, port, key file, optional parameters, etc.)

If this file exists inside `.ssh`, it probably contains some information already. Depending on your working environment, consider creating a backup copy of the original first.

Example output of listing the `.ssh` folder content:
    
```bash
C:\Users\Username\.ssh>dir /B
```

```console
config
id_rsa
id_rsa.pub
known_hosts	
known_hosts.old
```

The `config` file allows to store multiple SSH connections along with their individual parameters, in addition to standard values. Using the full potential of this file can become complex, since it is most useful for experienced users managing multiple servers.

Following is a simple example to explain how to configure an SSH connection to an instance.  
Open the file and add the following lines at the top:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Be sure to use the correct IP address and key file name. The first line, beginning with `Host`, defines the name of this connection (`instance` in this example).

You can then log in to the instance by replacing the instance IP address with the alias name identifying this connection (`Host`):

```bash
ssh username@connection_name
```

Example:

```bash
ssh ubuntu@instance
```

Only the instance IP and the private key file were specified in the previous example but more details can be added.  
To configure an SSH connection to a second remote host with the username "rocky", the modified SSH port "49160" and the private key in the file "myserver_rsa", extend the file content as shown in this example:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile C:\Users\Username\.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile C:\Users\Username\.ssh/myserver_rsa
```

You can then connect to this second host by entering:

```bash
ssh myserver
```

Consult the [corresponding `man` page](https://manpages.org/ssh_config/5) for more information on the `config` file.

///


### Adding additional public keys to a running instance

To add SSH keys for other users accessing your instance, repeat the key creation steps but use the appropriate `$HOME` folder or Windows `Users` directory of the user in question to create and store the SSH keys (or execute the commands on this person's dedicated device).

Use our [dedicated guide](/pages/public_cloud/compute/configuring_additional_ssh_keys) for a detailed explanation of these steps.

## Go further

[How to create a Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps)

[How to get started with SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[How to add authentication keys to your instance](/pages/public_cloud/compute/configuring_additional_ssh_keys)

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).