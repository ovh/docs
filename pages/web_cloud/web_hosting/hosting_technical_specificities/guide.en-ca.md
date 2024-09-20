---
title: "Technical specifications of Web Hostings"
excerpt: "Find out details about the technical capabilities of your Web Hosting plan"
updated: 2023-12-08
---

## Objective

OVHcloud Web Hosting plans are shared. As a result, the configuration of these solutions contains certain technical specifications. We recommend that you familiarize yourself with these details *before* using your OVHcloud Web Hosting plan.

**This guide collects some technical details about the OVHcloud Web Hosting infrastructure, based on frequently asked questions.**

## Requirements

- An [OVHcloud Web Hosting plan](/links/web/hosting)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) or the software publisher if you encounter any difficulties. OVHcloud cannot provide you with technical support in this regard. You can find more information in the [Go further](#go-further) section of this guide.
> 

### FTP

- Use **passive mode** for FTP connections. Make sure that your script or FTP client is configured accordingly.

- If you encounter the access error "530 login authentication failed" when connecting to your FTP storage space: Make sure that the access information to your FTP space is correct. To do this, log in to your [OVHcloud Control Panel](/links/manager) and go to the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action}, then select the Web Hosting plan concerned. On the page that opens, click on the `FTP - SSH`{.action} tab.

It will contain all of the information required to log in to your FTP storage space, with the exception of the password.

Passwords are never displayed, but they can be changed.

You can find more information on this in our guide on "[Logging in to your Web Hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)".

### Emails <a name="emails"></a>

In order to guarantee a good quality of service on the entire shared infrastructure and thus facilitate the sending of your emails to your recipients, we apply sending quotas on our Web Hosting services.

Over a rolling period of 3600 seconds (1 hour), your Web Hosting plan will allow you to send the following email quotas:

|Offers|Starter|Personal|Pro|Performance|
|---|---|---|---|---|
|Maximum number of emails sent per hour and per service|20|100|200|2000|

> [!primary]
>
> These limitations apply to emails sent using the PHP *mail()* function **only**, and do not apply to other email solutions (SMTP sending).
>

With the exception of suspected spamming or phishing, your emails may be delayed from being sent. Your emails will be kept in a queue until the number of emails sent in the last hour is less than the quota.

In the event of abuse or proven risk, your service may be suspended (in accordance with the GTCS/Terms and Conditions of your offer) and you will be notified by email. If this is the case, consult the following guides:

- [Monitoring and managing automated emails from your Web Hosting plan](/pages/web_cloud/web_hosting/mail_function_script_records)
- [Use cases - Tips following your website hacking](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

### Database/SQL

#### Simultaneous database connections

On Web Hosting plans (shared databases), there is a limit of 30 concurrent connections per database (this limit increases to 200 if you use a [Web Cloud Databases](/links/web/databases) offer). See the [details of our Web Hosting plans](/links/web/hosting) to find out the options available in each Web Hosting plan.

You can also order additional [Web Cloud Databases](/links/web/databases) solutions, which have customization options:

- *max_connections*: 100 by default, with the option of increasing to 200.
- *max_user_connections*: 50 by default, with the option of increasing to 200.

To find out more, read the details of our [Web Hosting plans](/links/web/hosting) and our guide “[Getting started with your Web Cloud Databases solution](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)”.

#### Connections from an external server

For security reasons, it is not possible to connect from an external server to a database included in an OVHcloud Web Hosting plan. Only servers that contain OVHcloud Web Hosting plans can connect to shared database servers. Any other connection will cause the following error:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```

Only [Web Cloud Databases](/links/web/databases) database servers allow external servers to connect to them. This is because you have previously authorized your external server’s IP address on your database server. If necessary, please refer to our guide on "[Getting started with your Web Cloud Databases solution](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Shared SQL server variables

To find out its variables, log in to your database via the *PhpMyAdmin* interface. Once you have logged in, click on the `SQL` tab at the top of the page, then enter the following query in the central form to check the MySQL server variables:

```bash
SHOW VARIABLES;
``` 

> [!primary]
>
> The MySQL version cannot be modified for databases included in the Web Hosting plan.
>

For more information on database management and connections to the *phpMyAdmin* interface, please refer to our guide on "[Creating a database on your Web Hosting plan](/pages/web_cloud/web_hosting/sql_create_database)".

### PHP

We recommend referring to our [Web Hosting plans](/links/web/hosting-programming-language) to ensure that the Web Hosting plan you want to order is right for you.

> [!warning]
>
> Editing the **php.ini** file is not available on Web Hosting plans. This is because the PHP configuration is global to the entire shared infrastructure.
>
> However, you can modify certain elements, such as the *PHP runtime environment*, the *runtime environment* or even the *PHP version* of your Web Hosting plan.
>
> Find more details on this topic in our guide on [Web hosting: environment, PHP version, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)
>

You can also check the configuration details for your Web Hosting plan. To do this, please read the [Technical information on your Web Hosting plan](#technical-infos-web-hosting) section at the bottom of this guide.

#### PHP-FPM

PHP-FPM is enabled by default on the Web Hosting infrastructure in order to speed up PHP responses. Please note that it might not be active if you are running an older version of a Web Hosting plan which you have not upgraded (services ordered before 2014).

*Some variables are different without PHP-FPM:*

|Variable|Without PHP-FPM|With PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

#### PHP scripts

Once you are connected to your hosting server via SSH, outgoing traffic will be blocked for security reasons. We therefore recommend to use PHP scripts. Please refer to our [SSH guide](/pages/web_cloud/web_hosting/ssh_on_webhosting) for more information. You can consult the official [PHP manual](https://www.php.net/manual/en/function.system.php) on how to execute commands and perform other tasks.

For example, you can use the function *gethostbyaddr()* to retrieve the hostname:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```

> [!warning]
>
> OVHcloud does not force PHP updates on Web Hostings. Customers are fully responsible for keeping their services secure and for ensuring that any installed software is updated regularly.
>

### Technical information on your Web Hosting plan <a name="technical-infos-web-hosting"></a>

Find the libraries, languages and versions available for your Web Hosting plan on this page: <https://webhosting-infos.hosting.ovh.net>.

### Automatic backup information <a name="backup"></a>

> [!warning]
>
> OVHcloud provides an automatic data backup service, as well as the provision of these backups. However, this function is *non-contractual* and is provided in addition to your services. It remains your responsibility to set up your own restoration policy, and to determine restore points at times you deem appropriate.
>

#### Disk space/FTP storage space

All of our Web Hosting plans located in:

- Gravelines (GRA), France have automatic backups at D-1 / D-2 / D-3 / D-7 / D-14. These backups are also stored in the Roubaix (RBX) data centre in France.

- Beauharnois (BHS), Canada have automatic backups on D-1 / D-2 / D-3 / D-7 / D-14. These backups are also stored in the Beauharnois (BHS) data centre in Canada.

Find out how to [log in to your Web Hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection) or [restore your Web Hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup) in our documentation.

#### Database/SQL

> [!warning]
>
> OVHcloud provides an automatic data backup service, as well as the provision of these backups. However, this function is *non-contractual* and is provided in addition to your services. It remains your responsibility to set up your own restoration policy, and to determine restore points at times you deem appropriate.
>

For shared databases (included in your Web Hosting plan) or database servers (Web Cloud Databases) offered in Gravelines (GRA), France and Beauharnois (BHS), Canada, the databases are backed up every day. These backups are accessible via the [OVHcloud Control Panel](/links/manager){.external} or via the [OVHcloud API](https://api.ovh.com/). Backups are also stored on another infrastructure. This data is replicated in a data centre in Strasbourg (SBG). The backup retention policy is 30 days.

Find out how to [Retrieve a backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export) in our documentation.

#### Email

> [!warning]
>
> OVHcloud provides an automatic data backup service. However, this function is *non-contractual* and is provided in addition to your services. It remains your responsibility to set up your own restoration policy, and to determine restore points at times you deem appropriate.
>

For shared email accounts (included in your Web Hosting plan), a daily automatic backup is created and copied to another data centre.

### Cookie usage policy

**Cookies and trackers used in the provision of the Shared Hosting service.**

In order to ensure the proper functioning of websites hosted on the Shared Hosting service, a "SERVER ID" cookie for those websites is placed on the end user's device. The "SERVER ID" cookie enables a service for allocating incoming traffic between the different infrastructures used for hosting the website (OVHcloud Load Balancer). It allows the user to stay on the same host server for the duration of the session. This helps to maintains and preserve the consistency of the user experience.

> [!success]
>
> A "session" is defined as a given period during which a device (computer, smartphone, etc.) interacts with a server.
>

This helps to maintain and preserve the consistency of the user experience.

The "SERVER ID" cookie is a file stored on the end user's device that indicates the instance (server) of the infrastructure with which the user interacts. The cookie is anonymous in that no personal data of the user is processed.

The "SERVER ID" cookie is placed on the user's terminal for less than 24 hours.

This cookie type is:

 - Necessary for the operation of the Web Hosting service.
 - Anonymous.

It is therefore not liable to the prior consent of the website visitor within the meaning of the General Data Protection Regulation (GDPR).

### Information about statistical tools

**OVHcloud Web Statistics**

OVHcloud makes available to the client statistics on website visitors and audience measurement of the website(s) hosted as part of the Hosting service(s) (hereinafter "OVHcloud Web Statistics"). OVHcloud Web Statistics helps to identify the geographical area of users of these websites, the characteristics of the devices used to access the website(s), the page views and HTTP codes. OVHcloud Web Statistics is enabled by default as part of the Shared Hosting service and can be readily disabled at the customer's request by contacting the technical support. In order to provide "OVHcloud Web Statistics", OVHcloud performs data processing.

OVHcloud Web Statistics reports are compiled from anonymised traffic data, such as the IP address and logs of users of the website, the URL of the request, the duration of the request and the "user agent".

In order to be used as part of OVHcloud Web Statistics, the aforementioned data is anonymised and aggregated using algorithms operated by OVHcloud on its own infrastructure. In particular, in order to be processed and analysed to determine the geolocation of the user (limited to a region), the IP address of the user, present in the above mentioned traffic data, is extracted in anonymised form. Thus, no personal data allowing the identification, direct or indirect, of the website users is stored as part of OVHcloud Web Statistics.

## Go further <a name="go-further"></a>

[Log in to your Web Hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_connection)

[Activating HTTPS on your website with an SSL certificate](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Optimizing your website’s performance](/pages/web_cloud/web_hosting/optimise_your_website_performance)

[Restoring your Web Hosting plan’s FTP storage space](/pages/web_cloud/web_hosting/ftp_save_and_backup)

[Retrieving the backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).