---
title: Securing a dedicated server
slug: securing-a-dedicated-server
excerpt: This guide offers some general tips for securing your server.
section: Getting started
order: 2
---

**Last updated 2018/06/20**

## Objective

When you order your dedicated server, no security protocols are implemented natively. It is therefore up to you to secure your server, something which OVHcloud takes no responsibility for.

**This guide offers some general tips for securing your server.**

> [!warning]
>
> While OVHcloud provides you with the devices, the responsibility for their security rests solely in your hands. Since we have no access to these machines, we are not their administrators. It is your responsibility to manage the software, and apply proper security measures on an ongoing basis. 
> 
> This guide is designed to help you with the most common tasks. Nevertheless, we recommend that you contact a specialist service provider if you have difficulties or doubts concerning the administration, usage or implementation of security measures on a server.
>

## Requirements

* a [dedicated server](https://www.ovh.com/asia/dedicated-servers/){.external}
* a SSH access as administrative (root)

## Instructions

> [!primary]
>
> Please note that this is a general guide. Some commands need to be adapted to the distribution or operating system you are using. Some tips will advise you to use third-party tools. Please refer to the official documentation for these third-party tools if you require any further guidance.
>

### Update your system

Distribution and operating system developers offer frequent software package updates, very often for security reasons. Keeping your distribution or operating system up-to-date is a key aspect of securing your server.

This is a two-part process, which involves updating the package list (the list of installed software applications) and updating the packages themselves using the code below:

#### Step 1: Update the package list

Update the list of packages on your server with the following code:

```sh
apt-get update
```

#### Step 2: Update the packages

Update the packages on your server with the following code:

```sh
apt-get upgrade

```

Once the updates are complete, your system will be fully up-to-date. This operation needs to be performed regularly.

### Change the default SSH listening port

One of the first things to do on your server is configure the SSH service by changing the listening port. By default, the listening port is set up on port 22. This is an industry standard, so it's advisable to change it to something other than the default value. Also, most server hacking attempts are made by robots that target port 22, so by modifying this setting, you'll make it harder for these robots to hack you, making your server a more difficult target.

> [!primary]
>
> In the following example, we use the Linux text editor called **Nano**, but you can use any text editor that allows you to edit the config file.
>

Below is the command to modify the service configuration file:

```sh
nano /etc/ssh/sshd_config

```

Now find the following line in the file:

```sh
# What ports, IPs and protocols we listen for Port 22
```

Replace number **22** with the port number of your choice then save and close the configuration file. **Ensure that you don't enter a port number that's already in use**. When you have finished, reboot your server.

Now, when you request an SSH connection on your machine, you will have to indicate the new port:

```sh
ssh root@YourServer.ovh.net -p NewPort
```

> [!warning]
>
> Please note that changing the default port for SSH or any other protocol is a potential risk. You may find that some services cannot be configured to use with non-standard ports and will not work if the default port is changed.
>

### Change the password associated with the “root” user

When a distribution or operating system is installed, a password is automatically created for root access. It is strongly recommended that you change this password. To do this, open an SSH connection to your server and enter the following command:

```sh
passwd root
```

You will then be asked to enter your new password twice. Please note - for security reasons, **the password will not be displayed when you are typing it**. You will, therefore, not be able to see the characters you type.

Once this is done, you must enter the new password the next time you log in to the system.

### Create a user with restricted rights

It's best practice to create a user account with restricted access to your server for everyday use. You can create a new user with the following command:

```sh
adduser CustomUserName
```

You should then fill in the information requested by the system (password, name, etc).

This user will be allowed to log in to your system via SSH, with the password specified when the account was created. Once you are logged in to your system with these credentials, if you want to perform operations that require admin rights, simply type the following command:

```sh
su root
```

You must then enter the password associated with the root user to validate the operation.

### Disable server access via the root user

The root user is created by default on UNIX systems, like Linux. The root user has all administrative rights to your system. It's not advisable, and may even be dangerous, to leave your Dedicated Server accessible only through this user, as this account can perform irreversible operations on your server.

We recommend that you disable direct root-user access via the SSH protocol. To perform this operation, you need to modify the SSH configuration file in the same way you did previously when you modified the access port to your server.

To start, please open an SSH connection to your server and then enter the following command. This will open your SSH configuration file for editing.

```sh
nano /etc/ssh/sshd_config
```

Next, locate the following section and replace yes with no in the PermitRootLogin line, as shown below:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

After saving and closing the configuration file, restart the SSH service to apply the changes, using this command:

```sh
/etc/init.d/ssh restart
```

You can now log in to your server using the new user account you created.

### Install and configure the Fail2ban package

Fail2ban is an intrusion prevention software framework, designed to block unknown IP addresses that are trying to penetrate your system. This software package is recommended to help guard against any brute force attacks on your server.

To install *Fail2ban*, use the following command:

```sh
apt-get install fail2ban
```

Once the software package is installed, you need to modify its configuration file to customise it for your usage. Before you make any changes, it's recommended that you make a backup of the configuration file by entering the following command:

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

For any additional queries and information concerning Fail2Ban, please refer to the official documentation for this tool: <https://www.fail2ban.org/wiki/index.php/Main_Page>.

### Configure the internal firewall: iptables

The bare-metal distribution comes with a firewall service named iptables. By default, this service does not have any active rules. You can verify this by typing the following command:

```sh
iptables -L
```

It is recommended that you create and adjust the rules on this firewall to fit your needs. For more detailed information on how to configure the iptables, please refer to the official documentation of your Linux distribution.

### Configure the OVHcloud Network Firewall

OVHcloud servers include a firewall at the entrance to the infrastructure, called the Network Firewall. Its implementation and configuration allow protocols to be blocked before they even arrive on your server.

We also have a guide to configuring the [Network Firewall](../firewall-network){.external}.

### Back up your system and your data

The concept of security is not limited to protecting a system against attacks. Securing your data is a key element, which is why OVHcloud offers you 500GB of free backup storage with your server. You can activate this backup storage in your Control Panel, and access it using the following protocols:

* FTP
* FTPS
* NFS
* CIFS.

You will need a third-party backup solution to replicate your data and transfer it to your backup storage.

For more information on our backup storage solutions, please see our [backup storage guide](../using-backup-storage/){.external}.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
