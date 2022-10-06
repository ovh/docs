---
title: Using SVN
slug: use-svn
excerpt: Find out how to use SVN via SSH on your Web Hosting plan
section: FTP and SSH
order: 09
---

**Last updated 6th January 2021**

## Objective

SVN, which stands for "subversion," is a version management system. 

**This guide explains how to use SVN over an SSH connection on your Web Hosting plan.**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

## Requirements

- a [Web Hosting plan](https://www.ovhcloud.com/asia/web-hosting/) that allows an SSH connection (**from the Professional plan onwards**)
- access to your Web Hosting plan via SSH (see our guide on [accessing a Web Hosting plan via SSH](../web_hosting_ssh_on_web_hosting_packages/))

## Instructions

### Creating the repository

Once you have logged in via [SSH on your hosting](../web_hosting_ssh_on_web_hosting_packages/), first create the root directory of your SVN repositories, then the repository.

To do this, simply type these commands:

```bash
mkdir svn
```

```bash
svnadmin create svn/depot_test
```

You can then check that the directories have been created with the following command:

```bash
ls -la
```

You should see the directories as shown in the following image:

![hosting](images/3078.png){.thumbnail}

### Creating public/private keys

Before you continue, it is necessary to create a pair of SSH keys from the desktop you will use to connect to the SVN repository.

In order to create a key pair, please follow our guide on [Creating SSH keys](../../public-cloud/create-ssh-keys/). You can ignore the step regarding the import of your SSH key to the OVHcloud Control Panel.

### Adding the public key to the Web Hosting plan

Once you have obtained your key, add it in the ".ssh/authorised_keys2" file by typing the commands below:

```bash
mkdir .ssh
chmod 700 .ssh
vi .ssh/authorized_keys2
```

The new file opens for editing. Insert the following line, followed by the previously created key. Make sure that the whole string is on the same line.

```bash
command="/usr/bin/svnserve --root=/homez.XXX/loginFTP/svn --tunnel --tunnel-user=john",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

> [!primary]
>
> Replace "/home.XXX/loginFTP" and "john" with your SSH credentials.
> To find out the correct numbers to use inside "/home.XXX/loginFTP", type the command "pwd" at the command line.
>
> You can also find this information in our guide on [Accessing a Web Hosting plan via SSH](../web_hosting_ssh_on_web_hosting_packages/}.
> 

![hosting](images/3080.png){.thumbnail}

You can retrieve the contents of the repository without directly logging in via SSH on the hosting.

> [!warning]
>
> The same key must not be used for SVN and the SSH connection.
> 

### Examples

#### On Linux

You can run a test from the computer connecting to the SVN repository by typing the following line:

```bash
svn checkout svn+ssh://loginFTP@clusterXXX/depot_test
```

#### On Windows with TortoiseSVN

- Download and install TortoiseSVN ([http://tortoisesvn.net/downloads](http://tortoisesvn.net/downloads){.external})
- Right-click the private key. An icon appears in the bottom right-hand corner, and the key is loaded into the authentication agent.
- Create a directory, right-click on it and select "SVN Checkout". 
- Enter `svn+ssh://loginFTP@xxplan.ovh.net/depot_test` in the “URL of repository” field and click `OK`.

![hosting](images/3081.png){.thumbnail}

Please also read the documentation for Subversion: [http://svnbook.red-bean.com/en/1.5/index.html](http://svnbook.red-bean.com/en/1.5/index.html){.external}

### Specific cases

#### Creating multiple accounts

First, you need to create SSH key pairs for each user. Then add the public key to the hosting as explained above:

```bash
command="/usr/bin/svnserve --root=/home.XXX/loginFTP/svn --tunnel --tunnel-user=username",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Replace "username" with your respective identifiers and repeat the command to add multiple users.

Note that it is also possible to grant a read-only access by adding this parameter:

```bash
--read-only.
```

#### Checking locally on the server

If you want to perform a local check, the examples provided will not work. You will need to use the command like this:

```bash
svn+ssh://login@ftp.name-of-site.tld/home.XXX/login/svn/depot_test
```

## Go further

[Accessing a Web Hosting plan via SSH](../web_hosting_ssh_on_web_hosting_packages/){.external}

Join our community of users on <https://community.ovh.com/en/>.
