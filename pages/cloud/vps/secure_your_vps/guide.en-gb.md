---
title: Securing a VPS
slug: tips-for-securing-a-vps
section: Getting started
order: 1
---

**Last updated 2nd April, 2019**

## Objective

When you order your VPS, a distribution or operating system is pre-installed, but no security protocol is implemented natively. It is therefore up to you to secure your VPS, an aspect in which OVH cannot intervene.

**This guide offers some general tips for securing your server.**

 
> [!warning]
>
> OVH is providing you with machines that you will be responsible for. We have no access to these machines, and therefore cannot manage them. You are responsible for your own software and security management. This guide is designed to assist you in common tasks as much as possible. However, we recommend that you call upon a specialised service provider if you experience any issues or doubts when it comes to managing, using or securing your server.
> 


## Requirements

- You need to be connected via SSH to your VPS (root access).


## Instructions

Please note that this is a general guide. Some commands need to be adapted to the distribution or operating system you are using. Some tips will advise you to use third-party tools. Please refer to the official documentation for these third-party tools, for any help you might need.

### Update your system

Distribution and operating system developers offer frequent software package updates, very often for security reasons. Keeping your distribution or operating system up-to-date is a key point for securing your VPS.

This update will take place in two steps:

- Updating the package list

```sh
apt-get update
```

- Updating the packages themselves

```sh
apt-get upgrade
```

Once this step is complete, your system is up-to-date. This operation needs to be performed regularly.


### Change the default SSH listening port

One of the first things to do on your server is configure the SSH service listening port. By default, listening is set to **port 22**. It is, therefore, advisable to change it and not to leave it set to default values. This is because most server hacking attempts are made by robots that target port 22 by default. By modifying this setting, you make it harder for these robots to hack you, and your server will be a more difficult target.

Here is the command to modify the service configuration file:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> The command `nano` is given as an example; you can use the `vim` command, or any other command that allows you to edit the sshd_config file.
>

You then need to find the following line:

```sh
# What ports, IPs and protocols we listen for
Port 22
```

Replace the number **22** with the port number of your choice. **Please do not enter a port number already used on your system**. Save, and exit the configuration file.

You then need to restart your service:

```sh
/etc/init.d/ssh restart
```

Now, when you request an SSH connection on your machine, you will have to indicate the new port:

```sh
ssh root@YourVps.ovh.net -p NewPort
```

### Change the password associated with the user "root"

When a distribution or operating system is installed, a password is automatically created for root access. It is strongly recommended that you customise it by modifying it. To do this, once you are logged in, simply enter the following command:

```sh
passwd root
```

Your system will then ask you to enter your new password twice to validate it. Please note - for security reasons, **the password will not be displayed when you are typing it**. You will, therefore, not be able to see the characters you type.

Once this is done, you must enter the new password the next time you log in to the system.

### Creating a user with restricted rights, and intervening in the system with root rights

You can create a new user with the following command:

```sh
adduser CustomUserName
```

Then fill in the information requested by the system (password, name, etc.).

This user will be allowed to log in to your system via SSH, with the password specified when the account was created.

Once you are logged in to your system with these credentials, if you want to perform operations that require root rights, simply type the following command:

```sh
su root
```

You must then enter the password associated with the root user to validate the operation.

### Disable server access via the root user

The root user is created by default on UNIX systems, and is the user with the most rights on your system. It is not advisable and even dangerous to leave your VPS accessible only through this user, as this account can perform irreversible operations on your server.

We recommend that you disable direct root-user access via the SSH protocol.

To perform this operation, you need to modify the SSH configuration file in the same way you did previously when you modified the access port to your VPS:

```sh
nano /etc/ssh/sshd_config
```

Then locate the following section:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Replace the **yes** with **no** on the line `PermitRootLogin`.

For this modification to be taken into account, you need to restart the SSH service:

```sh
/etc/init.d/ssh restart
```

Now, in order to log in to your system, use the account credentials (user) you have just created.


### Install and configure the Fail2ban package

Fail2ban is an intrusion prevention software framework designed to block unknown IP addresses that are trying to penetrate your system. This software package is recommended, even essential, to guard against any brute force attacks on your services.

To install the software package, use the following command:

```sh
apt-get install fail2ban
```

Once the software package is installed, you need to modify its configuration file to customise it to your usage. Before you make any changes, we would recommend that you make a backup of the configuration file by entering the following command:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Then make your changes to the file:

```sh
nano /etc/fail2ban/jail.conf
```

Once you have completed these changes, restart the service using this command:

```sh
/etc/init.d/fail2ban restart
```

For any additional queries and information concerning Fail2Ban, please refer to the [official documentation](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} for this tool.

### Configure the internal firewall: iptables

Linux and UNIX distributions come with a firewall service named iptables. By default, this service does not have any active rules. You can verify this by typing the following command:

```sh
iptables -L
```

It is recommended that you create and adjust rules on this firewall, to fit your needs. For more detailed information on the variety of manipulations that are possible, please refer to the relevant section in the official documentation of the distribution used.

### Configuring the OVH Firewall Network

OVH solutions include a firewall at the entrance to the infrastructure, called the Firewall Network. Its implementation and configuration allow protocols to be blocked before they even arrive on your server.

We also have a guide on [configuring this firewall network](https://docs.ovh.com/gb/en/dedicated/firewall-network/){.external}.

### Backing up your system and your data

The concept of security is not limited to protecting a system against attacks.

Securing your data is a key element, which is why OVH offers you three backup options:

- The `Snapshot` option, which allows you to create a manual snapshot of your virtual machine (available on VPS SSD, Cloud and Cloud RAM);
- The `Automated Backup` option allows you to make a regular backup of your VPS (excluding additional disks) on a daily basis, exported and replicated three times before being available from your Control Panel (available only on Cloud VPS and Cloud RAM VPS);
- The `Backup Storage` option that allows you to manually deposit and recover files on a dedicated disk space. The available file transfer protocols are FTP, NFS and CIFS, to ensure compatibility with the file access methods of all operating systems and distributions used. This allows you to keep your data safe in case of service interruption (only available on Cloud VPS and Cloud RAM VPS).

You will find all information on our VPS backup solutions here: <https://www.ovh.co.uk/vps/backup-vps.xml>.

## Go further

[Firewall Network Guide](https://docs.ovh.com/gb/en/dedicated/firewall-network/){.external}

Join our user community on <https://community.ovh.com/en/>.
