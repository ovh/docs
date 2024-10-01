---
title: How to configure user accounts and root access on a server
excerpt: Find out how to get started with the administration of user accounts on a GNU/Linux operating system
updated: 2024-02-19
---

## Objective

With the delivery of an OVHcloud dedicated server or a VPS, you will gain "**root access**" to your service. In basic terms, this means that you are the system's administrator and have the highest permission level on it.

Even if the server is not used for a purpose that requires the administration of actual users, managing **user accounts** is a security-related topic that should not be underestimated. This guide provides basic advice to get started with the following topics:

- How to configure system user accounts with different permission levels
- Best practices to manage access to your server and execute commands with elevated permissions


## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) or a [VPS](https://www.ovhcloud.com/en-gb/vps/) with a Linux-based OS in your OVHcloud account
- Login credentials received via email after the installation


## Instructions

The following examples presume that you are connected to your server via SSH.<br>
For more detailed instructions on this topic, please refer to our guide "[Getting started with SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)".

Be sure to consult our "Getting started" guides as well:

- For a [dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- For a [dedicated server of the **Eco** product line](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- For a [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](/links/partner) or reach out to [our community](https://community.ovh.com/en/) if you face difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

> [!primary]
>
> The instructions in this guide are based on a Debian/Ubuntu server OS and not exhaustive. The examples below are intended to provide a starting point and help to prevent easily exploitable security flaws. With a basic understanding of user account management and related best practices, you can go further with the topics that are most relevant to your use case.
>
> It is recommended to consult the **system manual pages** for each command you are using. You can do this from the command line by entering `man` followed by a the name of command, function or system file.
>

### Content overview

- [User account management](#accounts)
    - [Creating an unprivileged user account](#unprivileged)
    - [Creating a user account with root privileges](#privileged)
    - [Executing commands as an administrator ("sudo")](#sudo)
    - [Disabling a user account](#disable)
    - [Enabling a user account](#enable)
    - [Deleting a user account](#delete)
    - [Switching user accounts](#switch)
    - [Switching to the "root" account ("root shell")](#rootshell)
- [Activating login for the user "root"](#enableroot)
    - [Enabling the "root" account](#rootstep1)
    - [Editing the file "sshd_config"](#rootstep2)
    - [Restarting the SSH service](#rootstep3)


<a name="accounts"></a>

### User account management

Note that server security policies can be adjusted to different use cases and user environments. The steps described below offer basic explanations about user account management with a focus on convenience and security and do not claim universal validity.

After a new installation of your server (with an OVHcloud template), you start with these conditions:

- A user account with elevated permissions is created and named after the operating system, for example "ubuntu", "rocky", etc.
- You have received the initial password for this account with your installation email.
- You can use an SSH client to log on to the server with these credentials.

The command prompt after login will vary, depending on your service type and the distribution installed, for example: 

```text
ubuntu@ns9356771:~$
```

Note that the command line examples below will keep using "ubuntu" to refer to the preconfigured `user account`.

You can see in the output of the following command that this account is already added to the `sudo group`:

```bash
id
```

```text
27(sudo)
```

You can also enter `groups` to only see the groups the current user account is a member of.

This means that the user you are currently logged in with can execute all commands by preceding them with the `sudo` command (`root privileges`). You can find more detailed information in the [corresponding guide section below](#sudo).

> [!primary]
> 
> **Definition of terms**
> 
> For the purpose of this guide, the following definitions will apply:
> 
> - `administrator`: A person who is allowed to execute all commands on a server (server administrator).
> - `sudo user`: User account used by an administrator. This account is a member of the `sudo group`. Other knowledge resources and tutorials might label such a user differently, e.g. `sudoer`, `superuser`, `root user`, `admin`, etc.
> - `sudo group`: The `user group` with the necessary permissions to execute all commands on a server (`root privileges`, details of which are defined by the OS security policy).
> - `user group` / `group`: A technical entity compartmentalising `user accounts` for security management.
> - `root` / `root user` / `root account`: User account with `root privileges` that exists by default on GNU/Linux systems and is used for specific purposes.
>
> To learn the details and the settings that apply to your system, you can start with the `man` pages for `sudo` and `sudoers`.
>

<a name="unprivileged"></a>

#### Creating an unprivileged user account

Even if you do not need to grant other persons access to your server, creating a user account without any special permissions (possibly referred to as `normal user` or `regular user` as well) can be useful for security purposes. For example, there is no danger of accidentally damaging the system by deleting or altering server configuration files when executing commands or processes from a user account without elevated permissions.

Another best practice example is to create a user account dedicated to an application hosted on your server. Even if the user account becomes compromised through this application, the lack of elevated permissions will prevent greater harm.

Create a new user account (replace `username` with the actual name of the user account, for example the name of an application):

```bash
sudo adduser username
```

You have to provide a password for the new account. Then you are prompted to enter details for the new user, which is optional.

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Note: On a GNU/Linux distribution, **a password prompt will not display your keyboard inputs**.

- Relevant `man` pages: `adduser`, `useradd`

<a name="privileged"></a>

#### Creating a user account with root privileges

In this section, a new user account for an `administrator` is created and granted elevated permissions on the server (`root privileges`).

Create a new user account (replace `username` with the actual name of the user account):

```bash
sudo adduser username
```

Add the new user account to the `sudo group`:

```bash
sudo usermod -aG sudo username
```

You can verify `group` membership with the following command: 

```bash
groups username
```

Example:

```bash
groups ubuntu
```

```text
ubuntu sudo users
```

The new user account is now a `sudo user` and can execute all commands. 

This is configured by the default setting for the `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

The corresponding configurations can be found in `/etc/sudoers` and the directory `/etc/sudoers.d` respectively.

> [!primary]
>
> The appropriate administration of users including user authentication methods are dependent on the work environment and other factors. If you need to manage user accounts and groups on a server, please refer to the official documentation of your operating system and the corresponding knowledge bases.
>

<a name="sudo"></a>

#### Executing commands as an administrator ("sudo")

Any action that requires elevated permissions will be rejected unless the `sudo` command is used.

For example, to change a password for **any user account**, type `sudo passwd` followed by the `username`:

```bash
sudo passwd ubuntu
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

The system will frequently ask for the password of the `sudo user` you are logged in as when executing `sudo`.

- Relevant `man` pages: `sudo_root`, `sudo`, `sudoers`

<a name="disable"></a>

#### Disabling a user account

To disable a `user account`, enter:

```bash
sudo passwd -dl username
```

This will lock the account (i.e. prevent logging in via password) and set it "passwordless", effectively disabling the account.

<a name="enable"></a>

#### Enabling a user account

To reenable a passwordless locked `user account`, use the following commands (replace `initialpassword` with a temporary password):

```bash
sudo usermod username -p initialpassword
```

```bash
sudo passwd -u username
```

For security reasons, change the initial password for this user again:

```bash
sudo passwd username
```

- Relevant `man` pages: `passwd`, `usermod`

<a name="delete"></a>

#### Deleting a user account

A simple method to remove an account and its files is the following command:

```bash
sudo userdel -r -f username
```

- Relevant `man` pages: `userdel`, `deluser`

<a name="switch"></a>

#### Switching user accounts

As a `sudo user`, you can switch to any other user account (without having to know the password):

```bash
sudo su username
```

Your command prompt will change accordingly:

```text
ubuntu@ns9356771:~$ sudo su username
username@ns9356771:/home/ubuntu$
```

To return to your previous user account, switch again or use `exit`.

<a name="rootshell"></a>

#### Switching to the "root" account ("root shell")

After a new installation of your server (with an OVHcloud template), the `root account` (user account named `root`) can be used but it has no password.

For security reasons, the `root account` should only be used when required and it should **only be accessed from the system itself**.

You can switch to the `root account` with the following command:

```bash
sudo -s
```

Your command prompt will change accordingly:

```text
ubuntu@ns9356771:~$ sudo -s
root@ns9356771:/home/ubuntu#
```

The character `#` at the end of the command prompt indicates a `root shell`, as opposed to a prompt ending with `$`.

Use the following command to return to the previous user account:

```bash
exit
```

**Executing commands as the `root user` is usually not necessary and may even be counterproductive.**

A common misconception is the assumption that you need to use the actual `root account` in order to execute commands that require elevated permissions (`root privileges`) on a system.

However, as configured by default in the `/etc/sudoers` policy, the permission level of `root` is identical to the one of the `sudo group`:

```text
# Allow members of group sudo to execute any command
%sudo   ALL=(ALL:ALL) ALL
```

```text
# User privilege specification
root    ALL=(ALL:ALL) ALL
```

> [!primary]
>
> Be aware that tutorials and user documentations might not always follow a consistent terminology. Unless you have verified that using the actual `root account` is required for your intended action, the best practice is to execute `sudo` commands instead. Manipulating files and settings as `root` can have unexpected consequences for the system.
>

<a name="enableroot"></a>

### Activating login for the user "root"

> [!warning]
>
> Permitting the `root account` to log in via SSH is regarded as a security vulnerability and is therefore not recommended.
>
> Take measures to secure your system first with the help of our guides: 
>
> - [Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)
> - [Securing a dedicated server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)
> 

<a name="rootstep1"></a>

#### Step 1: Enable the "root" account

Enter the following command, then provide a password at the prompt:

```bash
sudo passwd root
```

You can undo this action by entering:

```bash
sudo passwd -d root
```

<a name="rootstep2"></a>

#### Step 2: Edit the file "sshd_config"

Use a text editor such as `vim` or `nano` to edit this configuration file:

```bash
sudo nano /etc/ssh/sshd_config
```

You can find the following line:

```text
#PermitRootLogin prohibit-password
```

The leading character `#` turns the entire line into a "comment" string and it is therefore disregarded by any application reading the file.

This means that if there is no other instruction, logging in with the user account `root` is **not enabled**.

Add the following line:

```text
PermitRootLogin yes
```

This will allow server logins with `root` and the corresponding password.

Save the file and exit the editor. To revoke this type of access, repeat the steps and remove the line.

<a name="rootstep3"></a>

#### Step 3: Restart the SSH service

Restart the SSH service with one of the following commands:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

This should be sufficient to apply the changes. Otherwise reboot the server from the command line (`sudo reboot`).


## Go further

[Securing a dedicated server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Join our [community of users](/links/community).
