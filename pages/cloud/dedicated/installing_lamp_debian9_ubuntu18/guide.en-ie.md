---
title: Setting up a web server (LAMP) on Debian or Ubuntu
slug: setup-lamp-debian-ubuntu
excerpt: Find out how to configure a LAMP-based web server
section: Tutorials
updated: 2023-05-10
---

## Introduction 

Setting up a web server and related software enables your cloud server to host dynamic web pages or web applications. Installing a *LAMP stack* is a proven approach to achieve this with open-source applications. LAMP stands for **L**inux (OS), **A**pache (web server), **M**ariaDB (database management system) and **P**HP (programming language). 

**This tutorial explains how to set up a LAMP web server on your OVHcloud service.**


## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-ie/bare-metal/), a [VPS](https://www.ovhcloud.com/en-ie/vps/) or a [Public Cloud instance](https://www.ovhcloud.com/en-ie/public-cloud/) in your OVHcloud account (excluding Windows systems)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)
- Administrative access to your service via SSH


> [!warning]
> This tutorial will show you how to use one or more OVHcloud solutions with external tools, and the changes you need to make in specific contexts. You may need to adapt the instructions according to your situation.
>
> We recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-ie/directory/) or reach out to [our community](https://community.ovh.com/en/) if you face difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Instructions

If a current Debian or Ubuntu distribution is not already installed on your server, carry out a reinstallation first in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie). This is the best way to have a clean system for your web server and the applications running on it.

Follow the respective guide to install an operating system on your OVHcloud service and connect to it via [SSH](/pages/cloud/dedicated/ssh_introduction):

- [Dedicated server](/pages/cloud/dedicated/getting-started-with-dedicated-server)
- [VPS](/pages/cloud/vps/starting_with_a_vps)
- [Public Cloud instance](/pages/platform/public-cloud/public-cloud-first-steps)


> [!primary]
>
> The following instructions are verfied for Debian 11. Since Ubuntu is based on Debian, the tutorial should work for a current Ubuntu distribution as well.


### Step 1: Updating the system

After logging in to your server with SSH, ensure that all packages are up-to-date:

```shell-session
sudo apt update && sudo apt upgrade -y
```

Now you can install the current LAMP packages.

> [!primary]
>
> Since software packages are regularly updated, you might need to adjust the following instructions according to the latest versions.


### Step 2: Installing Apache

Install the Apache packages (including documentation):

```shell-session
sudo apt install -y apache2 apache2-doc
```

You can verify the installation with the following command:

```shell-session
sudo systemctl status apache2
```

You can also open `http://server_IP` in a web browser. The "Apache2 Debian Default Page" should appear.


### Step 3: Installing the database server and PHP

Install the packages of MariaDB and PHP:

```shell-session
sudo apt install -y php php-pdo php-mysql php-zip php-gd php-mbstring php-curl php-xml php-pear php-bcmath mariadb-server
```

### Step 4: Configuring the database server <a name="sqlconf"></a>

MariaDB provides a script to assist with the initial configuration and to apply some security-related settings.

To run it, enter this command:

```shell-session
sudo mysql_secure_installation
```

Confirm the first prompt by pressing `Enter`{.action}.

Next you can choose a method to secure access to the database server. 

```console
Switch to unix_socket authentication [Y/n]
```

It is recommended to use the proposed authentication method (*unix_socket*) instead of the access via root password. Press `y`{.action} and then `Enter`{.action}. (If you decide to use root user access instead, choose `n`{.action} and then set a root password at the next prompt.)

Enter `n`{.action} at the next prompt:

``` { .console }
Change the root password? [Y/n]
```

Since the subsequent prompts concern security measures, confirm them all with `y`{.action} until the script is finished.

``` { .console }
Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

If you have configured MariaDB access in the recommended way (*unix_socket*), you now have automatic admin access (*root*) to it whenever you are logged on to the server as a user with with elevated permissions (*sudo*).


> [!primary]
>
> To prepare a database for use with a software, you can follow the section below. You will need to provide the database credentials (database name, user, password) during the installation of an application such as a CMS (e.g WordPress, Drupal). For a best practice approach, avoid using the same database for different applications.
> 
> To install WordPress on a server, you can follow [this tutorial](/pages/platform/public-cloud/install_wordpress_on_an_instance).

#### Creating your first database and a database user (optional)

Open the MariaDB shell:

```shell-session
sudo mariadb
```

``` { .mysql }
MariaDB [(none)]> 
```

Create a database:

```sql
MariaDB [(none)]> CREATE DATABASE database_name;
```

Create a "user" with a name of your choice and grant it all rights on this database. This account can then access the database and carry out all operations for the application using this database. Replace `database_name` with the name of your database, `user_name` with a name of your choice and `password` with a strong password.

``` { .sql }
MariaDB [(none)]> GRANT ALL ON database_name.* TO 'user_name'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

Ensure the changes made are applied and then exit the MariaDB shell:

```mysql
MariaDB [(none)]> FLUSH PRIVILEGES;
```

```mysql
MariaDB [(none)]> exit;
```


### Step 5: Configuring the firewall (optional)

[Configuring a firewall](https://docs.ovh.com/ie/en/dedicated/firewall-iptables/) (*iptables*) will enhance the security of your server. This process can be simplified by using the frontend "Uncomplicated Firewall" (UFW) and its preset of profiles. Install UFW:

``` { .shell-session }
sudo apt install ufw
```

The relevant profiles are labelled as "WWW" in the application list:

``` { .shell-session }
sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

By choosing "WWW Full", both secure connections (port 443) and not-secured *http* requests (port 80) to the web server will be allowed.

To see which ports are affected by a particular profile, enter `sudo ufw app info "profile name"`.

By entering the following command, the ports defined by the profile "WWW Full" will be opened:

```bash
sudo ufw allow 'WWW Full'
```

Since all ports not explicitly allowed will be **blocked** after enabling the firewall, make sure to allow SSH connections (port 22 in a default configuration) as well:

``` { .bash }
sudo ufw allow 'SSH'
```

Finally, activate the firewall rules and verify the configuration:

```shell-session
sudo ufw enable
```

```shell-session
sudo ufw status
```

```console
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
80,443/tcp (WWW Full)      ALLOW IN    Anywhere                  
22/tcp (SSH)               ALLOW IN    Anywhere                  
80,443/tcp (WWW Full (v6)) ALLOW IN    Anywhere (v6)             
22/tcp (SSH (v6))          ALLOW IN    Anywhere (v6)       
```


You can go further with UFW, for example if you want to restrict *denial of service* (DOS) attacks or prevent requests by certain IP address ranges. Please refer to the [official UFW documentation](https://help.ubuntu.com/community/UFW).


### Step 6: DNS configuration (optional)

In order to access your web server installation via a domain name, you need to attach it to your service. This is done by editing the DNS zone which you can do in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie), provided OVHcloud is your domain registrar **and** the domain name uses OVHcloud DNS servers.

Please refer to our guide on [Editing a DNS zone](/pages/web/domains/dns_zone_edit) for further instructions. If the domain name is currently in use, only configure DNS after your website or application is ready.

### Step 7: Enabling secure connections with Let’s Encrypt (optional)

> [!primary]
>
> In order to establish secure connections (`https`), the web server has to be secured via an official Certificate Authority such as "[Let’s Encrypt](https://letsencrypt.org/)" which offers free certificates. You will need to install a client tool (such as "Certbot") and configure Apache accordingly. Without this step, your website or application can only accept unencrypted `http` requests.
> 
> As an alternative, OVHcloud offers the solution [SSL Gateway](https://www.ovh.co.uk/ssl-gateway/). Refer to the [guide pages](/pages/web/ssl-gateway/order-ssl-gateway) as well for further information.
> 

First make sure that your domain name has the correct records in the DNS zone, i.e. is mapped to the IP address of your server.

> [!warning]
> The following command will install a functioning but outdated version of Certbot (*certbot 1.12.0*). In order to install the latest version, the additional package manager *snappy* must be used. You can find installation instructions on the [Certbot website](https://certbot.eff.org/instructions?ws=apache&os=debianbuster).
>

Install the required packages for the Certbot client:

```shell-session
sudo apt install -y certbot python3-certbot-apache
```

Obtain the certificate for your domain name and the "www" subdomain:

```shell-session
sudo certbot --apache -d domainname.ovh -d www.domainname.ovh
```

You will need to enter a valid email address and accept the terms of service.

Certbot will automatically renew the certificates. There are no further steps needed. However, you can look into the available options to learn more about the capabilities of Certbot.

## Go further

[UFW documentation](https://help.ubuntu.com/community/UFW)

[Apache documentation](https://httpd.apache.org/docs/)

[MariaDB documentation](https://mariadb.com/kb/en/documentation/)

[Let’s Encrypt documentation](https://httpd.apache.org/docs/)

[Certbot documentation](https://eff-certbot.readthedocs.io/en/stable/)

[NGINX documentation](https://nginx.org/en/docs/) (Apache alternative)

Join our community of users on <https://community.ovh.com/en/>.
