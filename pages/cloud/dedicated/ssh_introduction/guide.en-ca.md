---
title: Introduction to SSH
slug: ssh-introduction
excerpt: Learn how to use the SSH service to access your server 
section: SSH and SSH key
order: 1
---

**Last updated on 2018/01/18**

## Objective

SSH (Secure Shell) communication protocol is natively installed on all OVHcloud servers (VPS, dedicated servers, Public Cloud instances).

**Learn how to use the SSH service to access your server.**

## Requirements

- SSH is installed on all machines. You can use it to connect securely to your server, and have full control over it.


## Instructions

### Compatible software

Many software applications enable you to connect via SSH. To help you, here are some examples.

#### On Windows

- [PuTTy](http://www.putty.org/){.external} (Free)
- [MobaXterm](https://mobaxterm.mobatek.net/) (free version and paid version)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (Paid)

For the latest Windows 10 and Windows Server versions, developer mode gives you access to a bash console. Here is a link to the Microsoft documentation: <https://msdn.microsoft.com/en-gb/commandline/wsl/install-win10>.

#### On Mac

- The `Terminal`{.action} tool is delivered with Mac OS X, and is systematically installed on the machine.


#### On Linux

- The `Console`{.action} or `Terminal`{.action} tool is natively installed, and can be used to connect.
- For managing multiple tabs, the `Terminator`terminal emulator can be installed. You can read an Ubuntu manual page for Terminator here: <http://manpages.ubuntu.com/manpages/zesty/man1/terminator.1.html>.
- [OpenSSH](http://www.openssh.com){.external} (Free).


### Steps for connecting via SSH

#### Step 1: Connecting for the first time

To connect to your machine via SSH, you will need two details:

- the server’s IPv4 address or name;
- the server’s root password (received by email when it was set up).


You can connect using the following command:

```sh
ssh root@server_IP
```

Or this:

```sh
ssh root@server_name
```

The following message will appear:

```sh
The authenticity of host servername (server_IP) can’t be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
[!warning] Permanently added servername, server_IP (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

When you first connect, your SSH client will receive an RSA key fingerprint, which is a fingerprint of the server you are connecting to. This is verified for each new connection. If the fingerprint changes, you will be informed, and this will mean something has changed:

- the machine has been reinstalled;
- the SSH server has been reinstalled;
- you are connecting to another machine.

When you first connect, you must accept the fingerprint that will be saved onto your desktop by your SSH client.


#### Step 2: the manual

On Linux distributions, you will have access to a manual with all of the commands available, and their arguments.

```sh
man bash
```

#### Step 3: updates

Both your SSH client and your distribution must be kept up-to-date. You can check this with the following command:

```sh
ssh -V
```

If you have any doubts, please refer to the documentation for the SSH client you are using.


## Go further

Join our user community on <https://community.ovh.com/en/>.
