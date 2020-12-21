---
title: Use SVN
slug: use-svn
excerpt: Find out how to use SVN in SSH on your web hosting plan
section: FTP and SSH
---

**Last updated 28/10/2020**

## Objective

SVN, which stands for "subversion," is a version management system. 

**Find out how to use SVN in SSH on your web hosting plan**

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a specialised provider and/or the software publisher for the service if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the “Go further” section of this guide.
>

## Requirements

- a  [web hosting plan](https://www.ovh.com/sg/web-hosting/) that allows an SSH connection (**from the Pro plan onwards**)
- access to your web hosting plan via SSH (see our guide on [accessing a web hosting plan via SSH](../web_hosting_ssh_on_web_hosting_packages/))

## Instructions

### Creating the repository

Once you have logged in via [SSH on your hosting plan](../web_hosting_ssh_on_web_hosting_packages/), create the root directory of your SVN repositories, then create the repository.

To do this, simply type the command:

```bash
mkdir svn
```

and

```bash
svnadmin create svn/depot_test
```

You can then check that the directories have been created with the following command:

```bash
ls -la
```

You should get the directories as shown in the following image:

![hosting](images/3078.png){.thumbnail}

### Creating public/private keys

Before you continue, you will need to create a pair of SSH keys from the desktop you will use to connect to the SVN repository.

Please follow our guide on [Creating SSH keys](https://docs.ovh.com/sg/en/public-cloud/create-ssh-keys/). You don't need to follow the [Importing your SSH key in the OVHcloud Control Panel](https://docs.ovh.com/sg/en/public-cloud/create-ssh-keys/#importing-your-ssh-key-into-the-ovhcloud-control-panel_1) step in this guide.

### Adding the public key to the hosting plan

Once you have obtained your key, add it to your web hosting plan in the .ssh/authorised_keys2 file. To do this, type the command line below:

```bash
mkdir .ssh
chmod 700 .ssh
vi .ssh/authorized_keys2
```

Once the file is open, insert the following line:

```bash
command="/usr/bin/svnserve --root=/homez.XXX/loginFTP/svn --tunnel --tunnel-user=john",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

Followed by the previously created key, all on the same line.

> [!primary]
>
> Replace "/home.XXX/loginFTP" and "john" with your SSH credentials.
> To find out the numbers to use to replace "/home.XXX/loginFTP", type the command "pwd" in SSH.
>
> You can also find this information in our guide on [Accessing a web hosting plan via SSH](../web_hosting_ssh_on_web_hosting_packages/}.
> 

![hosting](images/3080.png){.thumbnail}

You can retrieve the contents of the repository without logging in directly via SSH on the machine.

> [!warning]
>
> Warning: the same key must not be used for SVN and SSH in command line
> 

### Examples

#### On Linux

You can test from the computer connecting to the SVN repository by typing the following line:

```bash
svn checkout svn+ssh://loginFTP@clusterXXX/depot_test
```

#### On Windows with TortoiseSVN

- Download and install TortoiseSVN ([http://tortoisesvn.net/downloads](http://tortoisesvn.net/downloads){.external})
- Right-click the private key. An icon appears in the bottom right-hand corner, and the key is loaded into the authentication agent.
- Create a directory, right-click on it and select "SVN Checkout". 
- Enter `svn+ssh://loginFTP@xxplan.ovh.net/depot_test` in the “URL of repository” field and click `OK`:

![hosting](images/3081.png){.thumbnail}

Pease read the documentation for Subversion: [http://svnbook.red-bean.com/en/1.5/index.html](http://svnbook.red-bean.com/en/1.5/index.html){.external}

### Specific cases

#### Creating multiple accounts

First, you need to have created several SSH keys. Then when adding the public key to the hosting:

```bash
command="/usr/bin/svnserve --root=/home.XXX/loginFTP/svn --tunnel --tunnel-user=marc",no-port-forwarding,no-agent-forwarding,no-X11-forwarding,no-pty
```

You must change the setting below by adding your different users:

```bash
--tunnel-user
```

Note that it is also possible to grant a read-only access by adding the parameter:

```bash
--read-only.
```

#### Checking locally from the server

When you want to do a local check, the examples provided will not work. You will need to use:

```bash
svn+ssh://login@ftp.nom-du-site.tld/home.XXX/login/svn/depot_test
```

## Go further

[Accessing a web hosting plan via SSH](../web_hosting_ssh_on_web_hosting_packages/){.external}

Join our community of users on <https://community.ovh.com/en/>.
