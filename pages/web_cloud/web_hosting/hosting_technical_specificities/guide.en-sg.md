---
title: "Technical specifications of Web Hostings"
excerpt: "Find out details about the technical capabilities of your Web Hosting plan"
updated: 2023-11-29
---

## Objective

OVHcloud web hosting plans are shared. As a result, the configuration of these solutions contains certain technical specifications. We recommend that you familiarize yourself with these details *before* using your OVHcloud Web Hosting plan.

**This guide collects some technical details about the OVHcloud Web Hosting infrastructure, based on frequently asked questions.**

## Requirements

- an [OVHcloud Web Hosting plan](https://www.ovhcloud.com/en-sg/web-hosting/)
- access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg)

## Instructions

> [!warning]
>
> OVHcloud provides services that you are responsible for configuring, managing and managing. It is therefore up to you to ensure that it works properly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-sg/directory/) and/or the service’s publisher if you encounter any difficulties. We will not be able to assist you. You can find more information in the "[Go further](#go-further)" section of this guide.
>

### FTP

- Use **passive mode** for FTP connections. Make sure that your script or FTP client is configured accordingly.

- If you encounter the access error "530 login authentication failed" when connecting to your FTP storage space: Make sure that the access information to your FTP space is correct. To do this, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg) and go to the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action} , then select the Web Hosting plan concerned. On the page that opens, click on the `FTP - SSH`{.action} tab.

It will contain all of the information required to log in to your FTP storage space, with the exception of the password.

Passwords are never displayed, but they can be changed.

You can find more information on this in our guide on "[Logging in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)".

### Emails <a name="emails"></a>

In order to guarantee a good quality of service on the entire shared infrastructure and thus facilitate the sending of your emails to your recipients, we apply sending quotas on our web hosting services.

Over a rolling period of 3600 seconds (1 hour), your Web Hosting plan will allow you to send the following email quotas:

|Offers|Starter|Personal|Pro|Performance|
|---|---|---|---|---|
|Maximum number of emails sent per hour and per service|20|100|200|2000|

> [!primary]
>
> These limitations apply to **only** emails sent using the PHP *mail()* function, and do not apply to other email solutions (SMTP sending).
>

With the exception of suspected spamming or phishing, your emails may be delayed from being sent. Your emails will be kept in a queue until the number of emails sent in the last hour is less than the quota.

In the event of abuse or piracy, some or all of your service may be suspended (in accordance with the GTCS/Terms and Conditions of your offer). You will be notified by email that it has been suspended. If this is the case, use the following guides:

- [Monitor and manage automated emails from your web hosting plan](/pages/web_cloud/web_hosting/mail_function_script_records);
- [Use cases - Tips following your website hacking](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

### Database/SQL

#### Simultaneous database connections

On Web Hosting plans (shared databases), there is a limit of 30 concurrent connections per database (this limit increases to 200 if you use a [Web Cloud Databases](https://www.ovhcloud.com/en-sg/web-cloud/databases/) offer). See the [details of our web hosting plans](https://www.ovhcloud.com/en-sg/web-hosting/) to find out the options available in each web hosting plan.

You can also order additional [Web Cloud Databases](https://www.ovhcloud.com/en-sg/web-cloud/databases/) solutions, which have customization options:

- *max_connections*: 100 by default, with the option of increasing to 200;
- *max_user_connections*: 50 by default, with the option of increasing to 200.

To find out more, read the details of our [web hosting plans](https://www.ovhcloud.com/en-sg/web-hosting/) and our guide “[Getting started with your Web Cloud Databases solution](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)”.

#### Connections from an external server

For security reasons, it is not possible to connect from an external server to a database included in an OVHcloud Web Hosting plan. Only servers that contain OVHcloud web hosting plans can connect to shared database servers. Any other connection will cause the following error:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```

Only [Web Cloud Databases](https://www.ovhcloud.com/en-sg/web-cloud/databases/) database servers allow external servers to connect to them. This is because you have previously authorized your external server’s IP address on your database server. If necessary, please refer to our guide on "[Getting started with your Web Cloud Databases solution](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Shared SQL server variables

To find out its variables, log in to your database via the *PhpMyAdmin* interface. Once you have logged in, click on the `SQL` tab at the top of the page, then enter the following query in the central form to check the MySQL server variables:

```bash
SHOW VARIABLES;
``` 

> [!primary]
>
> The MySQL version cannot be modified for databases integrated into the Web Hosting plan.
>

For more information on database management, and on connecting to the *phpMyAdmin* interface, please refer to our guide on "[Creating a database on your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database)".

### PHP

We recommend referring to our [web hosting plans](https://www.ovhcloud.com/en-sg/web-hosting/uc-programming-language/) to ensure that the web hosting plan you want to order is right for you.

> [!warning]
>
> Editing the **php.ini** file is not available on web hosting plans. This is because the PHP configuration is global to the entire shared infrastructure.
>
> However, you can modify certain elements, such as the *PHP runtime environment*, the *runtime environment* or even the *PHP version* of your web hosting plan.
>
> Find more details on this topic in our guide on [Web hosting: environment, PHP version, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)
>

You can also check the configuration details for your web hosting plan. To do this, please read the [Technical information on your Web Hosting plan](#technical-infos-web-hosting) section at the bottom of this guide.

#### PHP-FPM

PHP-FPM is enabled by default on the web hosting infrastructure, in order to speed up PHP responses. Please note that it may not be active if you are running an old web hosting plan that you have not updated (services ordered before 2014).

*Some variables are different without PHP-FPM:*

|Variable|Without PHP-FPM|With PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

#### PHP scripts

Once you have logged in to your web hosting plan via SSH, outgoing traffic will be blocked for security reasons. We therefore recommend using PHP scripts. For more information, please refer to our [SSH guide](/pages/web_cloud/web_hosting/ssh_on_webhosting). You can refer to the [PHP manual](https://www.php.net/manual/en/function.system.php) regarding command execution.

For example, you can use the *gethostbyaddr()* function to retrieve the host name:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```

> [!warning]
>
> OVHcloud does not automatically change the PHP version on your hosting plan when a new version is implemented. You are in charge of the security of the content and services, and of their regular updating.
>

### Technical information on your web hosting plan <a name="technical-infos-web-hosting"></a>

Find and check the libraries, languages and versions available for your web hosting plan on this page: <https://webhosting-infos.hosting.ovh.net>

For the technical specifications of the Cloud Web solution, please visit this page: <https://cloudweb-infos.hosting.ovh.net/>.

### Automatic backup information <a name="backup"></a>

> [!warning]
>
> OVHcloud provides an automatic data backup service, as well as the provision of these backups. However, it remains *non-contractual* and is provided in addition to your services. It is indeed your responsibility to set up your own restoration policy, and to determine restore points at times you deem appropriate.
>

#### Disk space/FTP storage space

All of our web hosting plans are located:

- in Gravelines (GRA), France, have automatic backups at D-1 / D-2 / D-3 / D-7 / D-14. These backups are also stored in the Roubaix (RBX) datacentre in France;

- Beauharnois (BHS), Canada, have automatic backups on D-1 / D-2 / D-3 / D-7 / D-14. These backups are also stored in the Beauharnois (BHS) datacentre in Canada.

Find out how to [log in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection) or [restore your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup) in our documentation.

#### Database/SQL

> [!warning]
>
> OVHcloud provides an automatic data backup service, as well as the provision of these backups. However, it remains *non-contractual* and is provided in addition to your services. It is indeed your responsibility to set up your own restoration policy, and to determine restore points at times you deem appropriate.
>

For shared databases (included in your Web Hosting plan) or database servers (Web Cloud Databases) offered in Gravelines (GRA), France and Beauharnois (BHS), Canada, the databases are backed up every day. These backups are accessible (via the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg){.external} or via the [OVHcloud APIs](https://api.ovh.com/). Backups are also stored on another infrastructure. This data is replicated in 3 different locations in France: Roubaix(RBX), Strasbourg(SBG), and Gravelines(GRA). The backup retention policy is 30 days.

Find out how to [Retrieve a backup of a web hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export) in our documentation.

#### Email

> [!warning]
>
> OVHcloud provides an automatic data backup service. However, it remains *non-contractual* and is provided in addition to your services. It is indeed your responsibility to set up your own restoration policy, and to determine restore points at times you deem appropriate.
>

For shared email accounts (included in your Web Hosting plan), a daily automatic backup is created and copied to another datacentre.

### Cookie usage policy

**Cookies and trackers used to provide the web hosting service.**

To ensure that websites hosted as part of the shared web hosting service work properly, the SERVER ID cookie is placed on the devices of visitors to these websites. The "SERVER ID" cookie ensures a service for load balancing incoming traffic between the different infrastructure used to host the website (OVHcloud Load Balancer). It allows the user to remain on the same host server for the entire duration of their session. 

> [!success]
>
> In computer language, a "session" is a given period during which a device (computer, smartphone, etc.) interacts with a server.
>

This makes it possible to maintain and preserve the consistency of the user journey.

The "SERVER ID" cookie is a write on the user's terminal that indicates the instance (server) of the infrastructure with which the user interacts. The cookie is anonymous in the sense that no personal data of the user is used.

The "SERVER ID" cookie is placed on the user's terminal for less than 24 hours.

If this is a cookie:

 - 1 : necessary for the operation of the web hosting service;
 - 2: anonymous.

It is not affected by the prior collection of the consent of the website visitor within the meaning of the General Data Protection Regulation (GDPR).

### Statistics Tools Information

**OVHcloud Web Statistics**

OVHcloud provides the customer with statistics on traffic and audience measurement for the website(s) hosted as part of the shared hosting service. (“OVHcloud Web Statistics”). “OVHcloud Web Statistics” allows you to identify the geographical zone of visitors to websites hosted as part of a shared web hosting service, the characteristics of their terminals, page views and HTTP codes. "OVHcloud Web Statistics" is enabled by default as part of the shared hosting service and can be disabled upon request by the customer by contacting technical support. In order to provide “OVHcloud Web Statistics”, OVHcloud operates data processing.

“OVHcloud Web Statistics” reports are based on anonymised traffic data, such as the IP address and user logs of websites hosted as part of a shared hosting plan, the request URL, the duration of the request, and the “useragent”.

To be used as part of “OVHcloud Web Statistics,” the aforementioned data is anonymised and aggregated using algorithms operated by OVHcloud, on its own infrastructure. In particular, the visitor’s IP address present in the traffic data, in order to be processed and analyzed to determine their geolocation (limited to a regional level), is extracted in anonymised form. Thus, no personal data allowing direct or indirect identification of the aforementioned visitors is stored as part of “OVHcloud Web Statistics”.  

## Go further <a name="go-further"></a>

[Log in to your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)

[Switch your website to HTTPS with SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Optimizing your website’s performance](/pages/web_cloud/web_hosting/optimise_your_website_performance)

[Restore your web hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup)

[Retrieve the backup of a web hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-sg/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-sg/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.