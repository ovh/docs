---
title: 'Securing a VPS'
slug: tips-for-securing-a-vps
section: 'Getting started'
excerpt: 'Find out the basics of securing your VPS'
order: 2
---

**Last updated 5th May 2022**

## Objective

When you order your VPS, you can choose a distribution or operating system to pre-install. The server is therefore ready to use after delivery but it will be up to you as the administrator to implement measures which ensure the security and stability of your system.

**This guide provides some general tips for securing a GNU/Linux-based server.**

 
> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and security. Since we have no administrative access to your devices, it is your responsibility to manage the software and to ensure they function correctly.
> 
> This guide is designed to help you with the most common tasks. Nevertheless, we recommend that you contact a specialised service provider if you have difficulties or doubts concerning the administration, usage or implementation of security measures on a server.
>


## Requirements

- A [Virtual Private Server](https://www.ovhcloud.com/en-au/vps/) in your OVHcloud account
- Administrative access (root) via SSH to your server

## Instructions

> [!primary]
>
> Bear in mind that this is a general guide based on an Ubuntu server OS. Some commands need to be adapted to the distribution or operating system you are using and some tips will advise you to use third-party tools. Please refer to the official documentation for these applications if you require assistance.
>
> If you are configuring your first OVHcloud VPS, we recommend to consult our guide on [getting started with a VPS](../getting-started-vps/) before continuing.
>

The following examples presume that you are logged in as a user with elevated permissions.

### Updating your system

Developers of distributions and operating systems offer frequent software package updates, very often for security reasons. Ensuring that your distribution or operating system is updated is a key point for securing your VPS.

This update will take place in two steps:

- Updating the package list

```bash
sudo apt update
```

- Updating the actual packages

```bash
sudo apt upgrade
```

This operation needs to be performed regularly to keep a system up-to-date.


### Changing the default SSH listening port

One of the first things to do on your server is configuring the SSH service's listening port. It is set to **port 22** by default, therefore server hacking attempts by robots will target this port. Modifying this setting by using a different port is a simple measure to harden your server against automated attacks.

To do this, modify the service configuration file with a text editor of your choice (`nano` used in this example):

```bash
~$ sudo nano /etc/ssh/sshd_config
```

You should find the following or similar lines:

```console
# What ports, IPs and protocols we listen for
Port 22
```

Replace the number **22** with the port number of your choice. **Please do not enter a port number already used on your system**. To be safe, use a number between 49152 and 65535. <br>Save and exit the configuration file.

Restart the service:

```bash
sudo systemctl restart sshd
```

This should be sufficient to apply the changes. Alternatively, reboot the VPS (`~$ sudo reboot`).

Remember that you will have to indicate the new port any time you request an SSH connection to your server, for example:

```bash
ssh username@IPv4_of_your_VPS -p NewPortNumber
```

### Changing the password associated with the user "root"

It is strongly recommended that you modify the password of the root user as to not leave it at default value on a new system. Please refer to the information in [this guide](../root-password/) for details.

### Creating a user with restricted rights

In general, tasks that do not require root privileges should be performed via a standard user. You can create a new user with the following command:

```bash
sudo adduser CustomUserName
```

Then fill in the information requested by the system (password, name, etc.).

The new user will be allowed to log in via SSH. When establishing a connection, use the specified credentials.

Once you are logged in, type the following command to perform operations that require root permissions:

```bash
su root
```

Type the password when prompted and the active login will be switched to the root user.

### Disabling server access via the root user

The root user is created by default on GNU/Linux systems. Root access means having the highest level of permissions on an operating system. It is not advisable and even dangerous to leave your VPS accessible only via root, as this account can perform irreversibly damaging operations.

We recommend that you disable direct root user access via the SSH protocol. Remember to create another user before following the steps below.

You need to modify the SSH configuration file in the same way as described above:

```bash
sudo nano /etc/ssh/sshd_config
```

Locate the following section:

```console
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Replace **yes** with **no** on the line `PermitRootLogin`.

For this modification to be taken into account, you need to restart the SSH service:

```bash
sudo systemctl restart sshd
```

Afterwards, connections to your server via root user (`ssh root@IPv4_of_your_VPS`) will be rejected.

### Configuring the internal firewall (iptables)

Common GNU/Linux distributions come with a firewall service named iptables. By default, this service does not have any active rules. You can verify this by typing the following command:

```bash
iptables -L
```

You can learn more about iptables in our [Firewall guide](../../dedicated/firewall-iptables/).

It is recommended that you create and adjust firewall rules according to your needs. For more detailed information on the variety of manipulations that are possible, please refer to the relevant section in the official documentation of the distribution used.

### Installing Fail2ban

Fail2ban is an intrusion prevention software framework designed to block IP addresses from which bots or attackers try to penetrate your system. This software package is recommended, even essential in some cases, to guard your server against "Brute Force" or "Denial of Service" attacks.

To install the software package, use the following command:

```bash
sudo apt install fail2ban
```

You can customise the Fail2ban configuration files to protect services that are exposed to the public Internet from repeated login attempts.

As recommended by Fail2ban, create a local configuration file for your services by copying the "jail" file:

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Then open the file with a text editor:

```bash
sudo nano /etc/fail2ban/jail.local
```

Be certain to read the information at the top of the file, especially the comments under `[DEFAULT]`.

The `[DEFAULT]` settings are global and will therefore be applied to all services that are set to `enabled` in this file. 

It is important to know that the global settings will be taken into account only if there are no differing values set in the services sections (`JAILS`) further below in the file.

For example, consider these lines under `[DEFAULT]`:

```console
bantime  = 10m
maxretry = 5
enabled = false
```

This means that an IP address from which a host tries to connect will be blocked for ten minutes after the fifth unsuccessful login attempt.<br>
However, all settings specified by `[DEFAULT]` and in subsequent sections stay disabled unless the line `enabled = true` is added for a service (listed below `# JAILS`).

As an example of usage, having the following lines in the section `[sshd]` will activate restrictions only for the OpenSSH service:

```console
[sshd]
enabled = true
port = ssh
filter = sshd
maxretry = 3
findtime = 5m
bantime  = 30m
```

In this example, any SSH login attempt that fails three times within five minutes will result in an IP ban period of 30 minutes.

You can replace "ssh" with the actual port number in case you have changed it.

The best practice approach is to enable Fail2ban only for the services that are actually running on the server. Each customised setting added under `# JAILS` will then be prioritised over the defaults.

Once you have completed your changes, save the file and close the editor.

Restart the service to make sure it runs with the customisations applied:

```bash
sudo service fail2ban restart
```

Fail2ban has many settings and filters for customisation as well as preset options, for example when you want to add a layer of protection to an Nginx web server.

For any additional information and recommendations concerning Fail2ban, please refer to the [official documentation](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} of this tool.


### Configuring the OVHcloud Network Firewall 

OVHcloud solutions include the option of enabling a firewall at the entry point to the infrastructure, called the Network Firewall. Configuring it correctly allows connections to be blocked before they even arrive on your server.

Please refer to the [Network Firewall guide](../../dedicated/firewall-network/) if you would like to activate it.

### Backing up your system and your data

The concept of security is not limited to protecting a system against attacks.

Securing your data is a key element, which is why OVHcloud offers you several backup options as a service:

- The `Snapshot` option allows you to create a manual snapshot.
- The `Automated Backup` option enables you to keep regular backups of your VPS (excluding additional disks).

You can find all information on the available backup solutions for your service on the [product page](https://www.ovhcloud.com/en-au/vps/options/) and in the [respective guides](../).

## Go further

[Network Firewall guide](../../dedicated/firewall-network/)

Join our community of users on <https://community.ovh.com/en/>.