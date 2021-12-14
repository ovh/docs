---
title: 'Securing a VPS'
slug: tips-for-securing-a-vps
section: 'Getting started'
excerpt: 'Find out the basics of securing your VPS'
order: 2
---

**Last updated 15th January 2021**

## Objective

When you order your VPS, you can choose a distribution or operating system to pre-install. The server is therefore ready to use after delivery but it will be up to you as the administrator to implement measures which ensure the security and stability of your system.

**This guide provides some general tips for securing a GNU/Linux-based server.**

 
> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and security. Since we have no administrative access to your devices, it is your responsibility to manage the software and to ensure they function correctly.
> 
> This guide is designed to help you with the most common tasks. Nevertheless, we recommend that you contact a specialised service provider if you have difficulties or doubts concerning the administration, usage or implementation of security measures on a server.
>


## Requirements

- A [Virtual Private Server](https://www.ovhcloud.com/en-ca/vps/) in your OVHcloud account
- Administrative access (root) via SSH to your server

## Instructions

> [!primary]
>
> Bear in mind that this is a general guide. Some commands need to be adapted to the distribution or operating system you are using and some tips will advise you to use third-party tools. Please refer to the official documentation for these applications if you require assistance.
>
> If you are configuring your first OVHcloud VPS, we recommend to consult our guide on [getting started with a VPS](../getting-started-vps/) first.
>


### Updating your system

Developers of distributions and operating systems offer frequent software package updates, very often for security reasons. Ensuring that your distribution or operating system is updated is a key point for securing your VPS.

This update will take place in two steps:

- Updating the package list

```sh
apt-get update
```

- Updating the actual packages

```sh
apt-get upgrade
```

This operation needs to be performed regularly to keep a system up-to-date.


### Changing the default SSH listening port

One of the first things to do on your server is configuring the SSH service's listening port. It is set to **port 22** by default, therefore server hacking attempts by robots will target this port. Modifying this setting by using a different port is a simple measure to harden your server against automated attacks.

To do this, modify the service configuration file:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> The command `nano` is used as an example; you can also use `vim` or any other command that allows you to edit configuration files.
>

You should find the following or similar lines:

```sh
# What ports, IPs and protocols we listen for
Port 22
```

Replace the number **22** with the port number of your choice. **Please do not enter a port number already used on your system**. To be safe, use a number between 49152 and 65535. <br>Save and exit the configuration file.

Restart the service:

```sh
systemctl restart sshd
```

This should be sufficient to apply the changes. Alternatively, reboot the VPS (`~$ reboot`).

Remember that you will have to indicate the new port any time you request an SSH connection to your server, for example:

```sh
username@IPv4_of_your_VPS -p NewPortNumber
```

### Changing the password associated with the user "root"

It is strongly recommended that you modify the password of the root user as to not leave it at default value on a new system. Please refer to the information in [this guide](../root-password/) for details.

### Creating a user with restricted rights

In general, tasks that do not require root privileges should be performed via a standard user. You can create a new user with the following command:

```sh
adduser CustomUserName
```

Then fill in the information requested by the system (password, name, etc.).

The new user will be allowed to log in via SSH. When establishing a connection, use the specified credentials.

Once you are logged in, type the following command to perform operations that require root permissions:

```sh
su root
```

Type the password when prompted and the active login will be switched to the root user.

### Disabling server access via the root user

The root user is created by default on GNU/Linux systems. Root access means having the most permissions on an operating system. It is not advisable and even dangerous to leave your VPS accessible only via root, as this account can perform irreversibly damaging operations.

We recommend that you disable direct root user access via the SSH protocol. Remember to create another user before following the steps below.

You need to modify the SSH configuration file in the same way as described above:

```sh
nano /etc/ssh/sshd_config
```

Locate the following section:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Replace **yes** with **no** on the line `PermitRootLogin`.

For this modification to be taken into account, you need to restart the SSH service:

```sh
systemctl restart sshd
```

Afterwards, connections to your server via root user (`ssh root@IPv4_of_your_VPS`) will be rejected.


### Installing Fail2ban

Fail2ban is an intrusion prevention software framework designed to block unknown IP addresses that are trying to penetrate your system. This software package is recommended, even essential, to guard against any brute force attacks on your services.

To install the software package, use the following command:

```sh
apt-get install fail2ban
```

Once the software package is installed, you need to modify its configuration file to customise it to your usage. Before you make any changes, we recommend that you create a backup of the configuration file by entering the following command:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Then open and edit the file:

```sh
nano /etc/fail2ban/jail.conf
```

Once you have completed these changes, restart the service using this command:

```sh
/etc/init.d/fail2ban restart
```

For any additional information and recommendations concerning Fail2ban, please refer to the [official documentation](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} for this tool.

### Configuring the internal firewall (iptables)

GNU/Linux distributions come with a firewall service named iptables. By default, this service does not have any active rules. You can verify this by typing the following command:

```sh
iptables -L
```

It is recommended that you create and adjust firewall rules according to your needs. For more detailed information on the variety of manipulations that are possible, please refer to the relevant section in the official documentation of the distribution used.

### Configuring the OVHcloud Network Firewall 

OVHcloud solutions include the option of enabling a firewall at the entry point to the infrastructure, called the Network Firewall. Configuring it correctly allows connections to be blocked before they even arrive on your server.

Please refer to the [Network Firewall guide](../../dedicated/firewall-network/) if you would like to activate it.

### Backing up your system and your data

The concept of security is not limited to protecting a system against attacks.

Securing your data is a key element, which is why OVHcloud offers you several backup options as a service:

- The `Snapshot` option allows you to create a manual snapshot.
- The `Automated Backup` option enables you to keep regular backups of your VPS (excluding additional disks).

You can find all information on the available backup solutions for your service on the [product page](https://www.ovhcloud.com/en-ca/vps/options/) and in the [respective guides](../).

## Go further

[Network Firewall guide](../../dedicated/firewall-network/)

Join our community of users on <https://community.ovh.com/en/>.