---
title: 'How to install an SSL certificate on a VPS'
excerpt: 'Find out how to install an SSL certificate on an OVHcloud VPS'
updated: 2025-01-24
---

## Objective

Securing your website is essential to protect your users' sensitive data and improve their trust. With an SSL certificate (**S**ecure **S**ockets **L**ayer), you can encrypt the exchanges between your visitors and your website, while strengthening its credibility. This guide documents the use of **Let's Encrypt**, a free and automated service.

**Find out how to install an SSL certificate on an OVHcloud VPS.**

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> We offer this tutorial to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) and/or the service's publisher if you encounter any difficulties. We will not be able to assist you. More information in the [Go further](#go-further) section of this tutorial.
>

## Requirements

- A [Virtual Private Server](/links/bare-metal/vps) in your OVHcloud account
- Administrative access (sudo) via SSH to your server
- A functional website accessible in `HTTP`

## Instructions

### Summary

- [Step 1 - Log in to your OVHcloud VPS](#step1)
- [Step 2 - Install Certbot](#step2)
- [Step 3 - Get an SSL certificate with Let's Encrypt](#step3)
- [Step 4 - Configure your web server](#step4)
- [Step 5 - Enable automatic renewal](#step5)

### Step 1 - Log in to your OVHcloud VPS <a name="step1"></a>

1. Download an SSH client like [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) or use your operating system's built-in terminal.
2. Log in to your OVHcloud VPS with the login information provided:

```bash
ssh root@<vps_ip>
```

Replace `<vps_ip>` with the IP address of your OVHcloud VPS.

### Step 2 - Install Certbot <a name="step2"></a>

Certbot is a tool to automatically manage Let's Encrypt certificates. Follow the steps below to install Certbot according to your Linux distribution.

> [!tabs]
> **Ubuntu/Debian**
>>
>> ```bash
>> sudo apt update
>> sudo apt install certbot
>> ```
>>
> **CentOS**
>>
>> ```bash
>> sudo yum install epel-release
>> sudo yum install certbot
>> ```
>>
> **Fedora**
>>
>> ```bash
>> sudo dnf install certbot
>> ```

Verify that Certbot is properly installed by running the following command:

```bash
certbot --version
```

This should show the version of Certbot installed.

### Step 3 - Get an SSL certificate with Let's Encrypt <a name="step3"></a>

> [!primary]
>
> If you have set up your web server (Nginx or Apache), we recommend using Certbot plugins to automate SSL configuration and enable `HTTPS` redirections. These plugins simplify the installation by directly managing the configuration files of the web server.

#### Automatic use with Certbot Nginx or Apache plugins (recommended)

Depending on your web server, use the corresponding command lines:

> [!tabs]
> **Nginx**
>>
>> Install the Certbot Nginx plugin:
>>
>> ```bash
>> sudo apt install python3-certbot-nginx -y
>> ```
>>
>> Generate the SSL certificate:
>>
>> ```bash
>> sudo certbot --nginx -d your_domain
>> ```
>>
> **Apache**
>>
>> Install the Apache Certbot plugin:
>>
>> ```bash
>> sudo apt install python3-certbot-apache -y
>> ```
>>
>> Generate the SSL certificate:
>>
>> ```bash
>> sudo certbot --apache -d your_domain
>> ```

Certbot will automatically configure the SSL certificate and `HTTPS` redirection. Check that your website is accessible in `HTTPS`.

#### Standalone usage

If you prefer to configure your server manually, use Certbot in standalone mode. This mode uses a temporary server built into Certbot to validate your domain name and generate an SSL certificate.

Use the following command to request a certificate:

```bash
sudo certbot certonly --standalone -d your_domain
```

Replace `your_domain` with your domain name.

> [!warning]
> This method temporarily stops any service using port 80 (for example, another web server).

Once the certificate has been generated, the files are available in `/etc/letsencrypt/live/your_domain/`:

- `fullchain.pem`: the full certificate.
- `privkey.pem`: the private key.

### Step 4 - Configure your web server <a name="step4"></a>

> [!primary]
> If you have used the automatic solution (with Certbot plugins) before ([Step 3](#step3)) and your website is accessible in `HTTPS`, go directly to the [Step 5](#step5) of this guide.

#### Example for Nginx

1\. Open your website's configuration file (for example, `/etc/nginx/sites-available/your_domain.conf`).

2\. Add the following lines to activate SSL:

```nginx
server {
    listen 443 ssl;
    server_name your_domain;

    ssl_certificate /etc/letsencrypt/live/your_domain/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your_domain/privkey.pem;

    # Additional security settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # HTTP to HTTPS redirection
    location / {
        try_files $uri $uri/ =404;
    }
}
```

3\. Add an automatic `HTTP` to `HTTPS` redirection:

```nginx
server {
    listen 80;
    server_name your_domain;
    return 301 https://$host$request_uri;
}
```

4\. Test and restart Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Check that your website is accessible in `HTTPS`.

#### Example for Apache

1\. Enable SSL modules and headers:

```bash
sudo a2enmod ssl
sudo a2enmod headers
```

2\. Modify your website's configuration (e.g. `/etc/apache2/sites-available/your_domain.conf`) to include:

```apache
<VirtualHost *:80>
    ServerName your_domain
    DocumentRoot /var/www/your_domain

    Redirect permanent / https://your_domain/

    <Directory /var/www/your_domain>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ssltest_error.log
    CustomLog ${APACHE_LOG_DIR}/ssltest_access.log combined
</VirtualHost>

<VirtualHost *:443>
    ServerName your_domain
    DocumentRoot /var/www/your_domain

    # Enable SSL
    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/your_domain/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/your_domain/privkey.pem

    # Additional security settings
    SSLProtocol all -SSLv3 -TLSv1 -TLSv1.1
    SSLCipherSuite HIGH:!aNULL:!MD5
    SSLHonorCipherOrder on

    <Directory /var/www/your_domain>
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/ssltest_error.log
    CustomLog ${APACHE_LOG_DIR}/ssltest_access.log combined
</VirtualHost>
```

3\. Test and restart Apache:

```bash
sudo apachectl configtest
sudo systemctl restart apache2
```

Check that your website is accessible in `HTTPS`.

### Step 5 - Enable automatic renewal <a name="step5"></a>

Let's Encrypt certificates are valid for 90 days. Configure automatic renewal with Certbot:

Test automatic renewal:

```bash
sudo certbot renew --dry-run
```

Certbot automatically configures a `cron` task or a systemd timer to manage renewal. Check its status with:

```bash
sudo systemctl list-timers | grep certbot
```

## Go further <a name="go-further"></a>

For specialized services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).