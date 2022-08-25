---
title: 'First steps with pre-installed applications'
slug: pre-installed-applications
excerpt: Find out how to deploy pre-installed applications on your VPS
section: 'Getting started'
order: 8
---

**Last updated 25th August 2022**

## Objective

OVHcloud offers VPS customers pre-installed application images for quick and easy deployment of applications with few clicks only. 

**This guide will provide the first steps for each and every pre-installed application image on our VPS.**

## Requirements

- A [VPS](https://www.ovhcloud.com/en-gb/vps/) in your OVHcloud account

## Instructions

### Install your chosen pre-installed application

Using the [OVHcloud Control Panel](../getting-started-vps/) / API, install your chosen application on your VPS.

#### cPanel

This section will explain the first steps specifically for the cPanel pre-installed image. Steps marked with \* will have FAQ at the end of the steps.

1. Open the email from us which contains your application login details.
2. Click on the URL for cPanel in the email.

> [!primary]
>
> If the link has expired already, please connect to your VPS via SSH using the CentOS user and execute the "sudo whmlogin" command to generate a new link.
>

<ol start="3">
  <li>Read and accept the terms of cPanel.</li>
  <li>Provide your email and nameservers you wish to set on the server *.</li>
  <li>Set your root password which you will use the next time you log in to WHM *.</li>
</ol>

![horizon](images/change_root.png){.thumbnail}

No further steps are necessary to complete the first configuration of this application.

> [!faq]
>
> Can I use my own nameservers?
>> Yes, you can. But you need to make sure you create glue records with your domain registrar. For example if you want "ns1.mydomain.com" and "ns2.mydomain.com", you must set up glue records for both which must point to the IP of your server. If your domain is registered with OVHcloud, you can follow [this guide](../../domains/glue_registry/#step-1-add-the-glue-records). Please note that this can take 24 hours to create.
> Why set root password?
>> WHM by default uses the root user for authentication and the one time link allows access to complete first setup and change root password. Next time you log in to WHM you must use the root user and the password you have set.
> Where is my licence for cPanel?
>> You can purchase a licence from OVHcloud for your VPS via the [OVHcloud Control Panel](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Plesk

This section will explain the first steps specifically for the Plesk pre-installed image. Steps marked with \* will have FAQ at the end of the steps.

1. Open the email from OVHcloud which contains your application login details.
2. Click on the URL for Plesk in the email.
3. Log in using the username and password provided in the email.
4. Once logged in, Plesk will ask you to provide:  
    a) Your contact information  
    b) A new password for the "admin" user which you will use for login on the Plesk panel  
    c) Licence information*  
    d) Read and accept their end-user licence agreement  

No further steps are necessary to complete the first configuration of this application.

> [!faq]
>
> Where is my licence for Plesk?
>> You can purchase a licence from OVHcloud for your VPS via the [OVHcloud Control Panel](https://www.ovh.com/manager/dedicated/#/configuration/license/order).

#### Docker

This section will explain the first steps specifically for the Docker pre-installed image.

1. SSH into the server using the login details sent in the email to you.
2. Check that Docker is working using the "docker run hello-world" command.

No further steps are necessary to complete the first configuration of this application.

### Let's Encrypt SSL

This section only applies to WordPress, Drupal, Joomla! and PrestaShop installations. It will not work for other installations.

1. You must create or edit two `A` records in the OVHcloud Control Panel which point to the IP address of your server. For example if your domain name is "personaldomain.ovh" then you need to create `A` records for:
    - personaldomain.ovh
    - www.personaldomain.ovh

If your domain is registered with OVHcloud you can follow [this guide](../../domains/web_hosting_how_to_edit_my_dns_zone/).
<br>If your domain is registered with another company you will need to contact them for assistance to set up your `A` records.

<ol start="2">
<li>You may need to wait 24 hours before the two records propagate fully. You can always check it with <a href="https://mxtoolbox.com/DnsLookup.aspx">mxtoolbox</a>. If the IP for your domain is showing on mxtoolbox the same as your server's IP address then you can proceed to the next step.</li>
<li>SSH into your server with the CentOS user and execute the following commands to install Certbot.</li>
</ol>

> [!warning]
>
> Replace personaldomain.ovh in the commands with your own domain name.
>

```sh
sudo -i
dnf install -y epel-release
dnf install -y certbot python3-certbot-apache mod_ssl
echo "ServerName personaldomain.ovh;" >> /etc/httpd/conf/httpd.conf
systemctl restart httpd
```

<ol start="4">
<li>Generate your SSL using Certbot (follow the on screen instructions).</li>
</ol>

```sh
certbot certonly -d personaldomain.ovh --webroot
```

When asked about "Input the webroot", you need to enter something like "/var/www/wordpress". If you are installing Joomla!, you need to replace "wordpress" with "joomla".

Now you need to get Certbot to also place it into the ssl.conf file. To trigger this, enter:

```sh
certbot -d personaldomain.ovh --apache
```

When prompted, answer the first prompt with "1" and also the second prompt with "1".

You should get the following output if your SSL has been generated:

```sh
IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/personaldomain.ovh/privkey.pem
   Your cert will expire on 2020-11-12. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot again
   with the "certonly" option. To non-interactively renew *all* of
   your certificates, run "certbot renew"
```

## Go further

Join our community of users on <https://community.ovh.com/en/>.
