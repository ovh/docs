---
title: "My website is slow. What to do?"
excerpt: "Identify the cause of your website's slowdowns and find out how to improve this situation"
slug: slow-website-fix
section: Troubleshooting
order: 01
---

**Last updated 17th November 2022**

## Objective

A slowdown on your site results from an excessively long loading time when displaying all or certain parts of your site. 

If the loading time is too long, the request made from your browser can then reach the maximum execution time allowed by the server where your hosting is located. In this case, the server returns the code **504 Gateway Timeout** to notify the visitor that the variable `max_execution_time` has been reached, which also stops the execution of the request.

The slowness has mainly two origins:

- An overload on the shared infrastructure on which your website is hosted
- A request too long or too heavy to execute on the shared infrastructure where your site is hosted

The vast majority of delays are actually caused by the website and not its shared hosting. We have created this guide to help you in this situation.

In rare cases, the slow display may also be caused by your Internet service provider or by low Internet connection speeds. Check your network connectivity **before** you continue with your diagnostics.

**Find out how to diagnose the cause of your website's slowdowns, and take appropriate action.**

> [!primary]
>
> **When you have completed all of the diagnostics listed in this guide** and found out that the hosting infrastructure was responsible, we remind you that it is shared between multiple users.
>
> Users share the resources of the web hosting infrastructure their websites are using. If one of them overloads the shared infrastructure, this can have consequences for the other hosting services on the same infrastructure.
>
> Our shared hosting plans do not have a Service Level Agreement (SLA).
>
> If you need a service with a guaranteed availability rate higher than 99%, we recommend that you consider using a [Virtual Private Server (VPS)](https://www.ovhcloud.com/en-gb/vps/) or a [Dedicated Server](https://www.ovhcloud.com/en-gb/bare-metal/).
>
> Furthermore, the performance of OVHcloud shared hosting infrastructures is monitored 24/7. This is to enable a general high availability, and where applicable, a quick recovery of your services in the event of an overload.
>

## Requirements

- A website hosted on an [OVHcloud web hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/)
- A [domain name](https://www.ovhcloud.com/en-gb/domains/)
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) or reach out to the OVHcloud community if you encounter any difficulties. We will not be able to assist you with issues **not caused by the relevant hosting infrastructure itself**. You can find more information in the [Go further](#go-further) section of this guide.
>

> [!success]
>
> We recommend noting your diagnostic results as you progress in this guide. This data will prove useful for resolving your issue, whatever the cause of the slowness.
>

### Understanding the notion of Time To First Byte (TTFB)

*Time To First Byte* (TTFB) is the time it takes for your hosting to send the first byte of data back to your browser, following a request made by your browser to display your website.

When there is no overload on the shared hosting infrastructure and your website is optimised to the maximum, the TTFB does not exceed 800ms.

**A high TTFB does not automatically mean that latency is caused by your shared hosting infrastructure.**

For Content Management Systems (CMS) such as WordPress, Joomla!, PrestaShop or Drupal, the page called from your web browser can generate additional requests internally on your hosting. Your web hosting will not send anything back to your browser until these internal requests are finalised.

> **Example**:
>
> Your browser requests to display the home page of your website. The request will therefore call your website’s **index.php** file by default.
>
> Once the request reaches the **index.php** file, the request is executed by the web server of your hosting plan. 
>
> When it is run, the **index.php** file must retrieve information from the other files that make up your website, or even from elements in your database. 
>
> Each of these information requests generates an internal query on your hosting service. 
>
> The file **index.php** will wait to receive the result of all internal requests it has made **before** returning the first byte of data to your web browser.
>
> If your **index.php** file generates slow or heavy queries, the TTFB will be high and your site will take several seconds to display. The performance of your hosting plan is not the cause.

Online diagnostic tools allow you to retrieve the TTFB of your hosting. However, most of them function as web browsers and their results should therefore be relativized.<br>
These tools are not able to take into account the internal requests by the file you have called via your browser, as in the example above with the file **index.php**.

### Step 1 - Determine if the delays are caused by the web hosting or your website

In this first step, you can determine whether the delays are caused by:

- Your website, due to its internal functioning.
- The shared hosting infrastructure where your website is located.

All diagnostics in step 1 must be performed **without exception** to determine whether the slowdowns are caused by your web hosting services or the website you are hosting on them.

#### 1.1 - Check the status of your OVHcloud services

To ensure that your services (shared hosting **and** database) are not undergoing maintenance or an incident, retrieve the cluster and filer information of your web hosting as well as the general information relating to your database. You can then check their status at [status.ovhcloud.com](https://web-cloud.status-ovhcloud.com/).

To find out the cluster and filer of your hosting, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), go to the `Web Cloud`{.action} section, click on `Hosting plans`{.action} then select the web hosting plan concerned. In the `General information`{.action} tab you can see the `Datacenter` and `Filer` of your web hosting.

![Retrieve Filer](images/DropFilerCluster1.png){.thumbnail}

Then click on the `Multisite`{.action} tab to retrieve the cluster number where your shared hosting is located.

![Recover cluster](images/DropFilerCluster2.png){.thumbnail}

> [!success]
>
> If an incident or maintenance is reported on the infrastructure on which your shared hosting is located, wait until they are resolved by our administrators. **No further action is required on your side**.
>
> You can subscribe to the incident or maintenance updates with your email address, in order to receive an email notification of the progress of the operations.
>
> Once the incident or maintenance status has been marked as **resolved**, the accumulated load stabilisation may require a maximum of **3 hours** to take effect.
>

If no incidents or maintenance are reported, continue with your diagnostic.

#### 1.2 - Test the website on multiple devices

Test your website from another device/computer, then from another Internet access point. Empty your browser cache each time, so that your website loads directly from your web hosting plan.

#### 1.3 - Test the hosting with a file independent from your website

Place a file called **phpinfo.php** at the root of your website in the [FTP storage space on your shared hosting](https://docs.ovh.com/gb/en/hosting/log-in-to-storage-ftp-web-hosting/).

In this file, insert the following code:

```bash
<?php
phpinfo();
?>
```

> [!warning]
>
> In some cases, the **.htaccess** files in the upstream directories/folders or at the same level as where you placed your **phpinfo.php** file may affect the display of the **phpinfo.php** in an Internet browser.
>
> Changes to a **.htaccess** file may affect your website’s display. Contact a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) if you have difficulty in doing the following.
>
> If it does not appear and **only for informed users**, rename your files **.htaccess** to **.htaccess_OLD** so that the server does not run them for your test. Rename them correctly after your diagnostic.
>

**Example**: if your website’s domain name is “domain.tld” and the file **phpinfo.php** has been placed in the document root folder of your website, you can access it via the following URL: `http://domain.tld/phpinfo.php` (or `https://domain.tld/phpinfo.php`).

> [!primary]
>
> If the call to the file **phpinfo.php*** displays a configuration table **instantly**, this means that the slowdowns do not come from the shared hosting where your website is located. Otherwise, this file will appear as slowly as your other pages. 
>
> In other words, if the delays are only present on some pages or content of your website, this means that the shared hosting **is not the cause of the delays** encountered on your website.
>

#### 1.4 - Test your database connectivity

Log in to your database by following **step 3** in our guide on [web hosting databases](https://docs.ovh.com/gb/en/hosting/creating-database/).

If you are using a database of a **Web Cloud Databases** solution, please refer to our guide on [Web Cloud Databases databases](https://docs.ovh.com/gb/en/clouddb/connecting-to-database-on-database-server/).

If the connection is successful, you will land on the following interface:

![PHPMyAdmin](images/pma.png){.thumbnail}

> [!warning]
>
> If you encounter an error, please refer to our documentation on [common errors encountered with a database](https://docs.ovh.com/gb/en/hosting/database-frequent-errors/). Then use the guide above to resolve the issue, and try connecting to your database again.
>

#### 1.5 - Interpretation of diagnostics performed

**Case 1**

**All** of the following statements apply:

- At least one page, script, or file (including the **phpinfo.php** file) loaded quickly during the tests in step 1.
- The connection to your database was successful during the tests in step 1.

> This means that the delays you encounter come directly from the scripts that make up your website. You can skip to [step 2](#step2) to follow the optimisation tips to resolve the delays.

**Case 2**

**All** of the following statements apply:

- **No incidents or maintenance** are reported on our website [status-ovhcloud.com](https://web-cloud.status-ovhcloud.com/) or have been reported as **resolved** less than three hours ago, for your web hosting services .
- **Case 1** detailed above does not match your configuration.

> OVHcloud investigations will be necessary. Contact our Web Cloud support to confirm the cause of the slowdowns you are experiencing.

### Step 2 - Identify the source of the delays on your website <a name="step2"></a>

At this point, you know that slowdowns are generated by the pages/scripts/files that make up your website.

> [!warning]
>
> If you have any difficulties taking the following actions, you can contact a [specialised service provider](https://partner.ovhcloud.com/en-gb/directory/). OVHcloud cannot assist with developing or optimising the content on your website.
>

Below, you will find the actions you need to take to identify the source(s) of the slowdowns, and optimise your website.

#### 2.1 - Check your web hosting plan’s configuration

Check the PHP engine, PHP version and runtime environment used on your Web Hosting plan, using our guide to [configuring your Web Hosting plan](https://docs.ovh.com/gb/en/hosting/modify_your_web_hosting_systems_runtime_environment/).

If you are using an outdated PHP version on your web hosting plan, the **PHP CGI** engine and/or the **legacy** environment, and **if your website is compatible**, you should use the **PHP** engine (PHP FPM), the **stable** or **stable64** environment, with the most recent PHP version possible.

To compare the available PHP versions depending on the runtime environment you are using, see **Step 2** in the guide on [configuring the PHP version on your web hosting](https://docs.ovh.com/gb/en/hosting/how_to_configure_php_on_your_ovh_web_hosting_package_2014/).

Using a recent PHP version, the **stable** or **stable64** runtime environment with the **PHP** engine (PHP FPM) makes your website much smoother and faster. As a guide, the **PHP** engine (PHP FPM) can be up to 50 times more efficient than the **PHP CGI** engine to perform its tasks.

#### 2.2 - Analyse outgoing connections / TCP connections made by your web hosting plan

Outgoing connections are very resource intensive. When these connections are numerous, not execute correctly or when they stay active too long, they monopolise so many resources in your web hosting plan that there are not enough left to keep the rest of your website running normally.

This results in slowdowns or even **504 Gateway Timeout** codes.

To analyse outgoing connections to your hosting plan, please read its **OUT** logs. You can use our documentation on [web hosting logs](https://docs.ovh.com/gb/en/hosting/shared_view_my_websites_logs_and_statistics/).

If you notice that there are a lot of outgoing connections on your hosting, compare your **OUT** logs with your **WEB** logs by using their timestamps. This will help you identify the script(s) responsible for this situation.

If you are using a Content Management System (CMS) such as WordPress, Joomla!, PrestaShop or Drupal, identify the plugin(s) and/or theme generating this outgoing connection stream.

#### 2.3 - Analyse the flow of HTTP requests made to your web hosting plan

To do this, please refer to your web hosting plan’s **WEB** logs using our guide on [how to view your hosting plan’s logs](https://docs.ovh.com/gb/en/hosting/shared_view_my_websites_logs_and_statistics/).

The most resource intensive requests are HTTP requests like **POST**, then HTTP requests like **PUT**. These files make changes and inserts, respectively.

HTTP requests like **GET** only retrieve elements from the hosting, and display them in your web browser. They are generally not resource intensive. However, they can cause slowdowns if several hundred are requested every second over a period of several minutes.

If you see any of the following in your logs:

- **POST** or **PUT** requests made several times per minute and permanently
- **POST** or **PUT** requests executed several times per minute on the same file

Identify and optimise the script/file in question to reduce the flow of HTTP requests.

The lower the number of requests, the less resources will be required for your web hosting plan.

> [!success]
>
> To identify the slowly loading items on one of the pages of your website, you can perform a network analysis using the **Firefox** browser, for example. 
>
> To do this, press the `F12` key in the Firefox browser and then select the `Network` tab. Reload your web page with the `Ctrl + Shift + R` keys so that the tool will show you the queries that were executed to load your page. Identify the elements taking the longest to load and then optimise them.
>
>![Firefox Network Scan](images/F12.png){.thumbnail}
>

To reduce the flow of requests each time your pages load, you can also set up a Content Delivery Network (CDN). This will cache the static content of your website. Your web hosting plan will receive fewer requests, and have more resources for handling the requests that cannot be cached.

> [!primary]
>
> OVHcloud offers several [CDN options](https://www.ovhcloud.com/en-gb/web-hosting/options/). If you would like to use or activate one for your web hosting plan, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) then read our guide on [Using the OVHcloud CDN](https://docs.ovh.com/gb/en/hosting/guide_to_using_the_geocache_accelerator_on_a_web_hosting_package/).
>

#### 2.4 - Optimise your database

> [!warning]
>
> The actions you carry out in your database can have irreversible consequences if they are not carried out methodically and correctly. Contact a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) if you are unsure about what you need to do. 
>

Check to see if a significant number of queries are made to your database.<br>
This situation can lead to over-solicitation and slowdowns, or even **504 Gateway Timeout** codes.

Also check the size of your tables in your database.<br>
If a table is called regularly and it is large, loading the table can be slower and result in slow queries.<br>
The accumulation of these slow requests can result in slow access to the site, or even a **504 Gateway Timeout** code.

If you have large tables or large database query flows, optimise your tables and implement solutions to reduce query flows to your database.

If you find that your database contains unused or obsolete data, clean the database to improve daily performance.

#### 2.5 - Optimise your images

For example, if an image on your website has a 1000x2000 resolution but is displayed at a maximum of 100x200 pixels on your website's page, this generates a resource consumption on the hosting side that can be optimised.

The server will need to resize the image, then display it at the requested size on the website.

If your website contains a lot of images, this may represent a significant resource consumption in terms of the resources allocated to your hosting.

Resize all of your images to minimise resource consumption.

#### 2.6 - Optimise the rest of your website

See our guide on [optimising performance for your website](https://docs.ovh.com/gb/en/hosting/web_hosting_optimise_your_website_performance/).

You can find optimisation suggestions for your site by analysing it at [gtmetrix.com](https://gtmetrix.com){.external} (not affiliated with OVHcloud).

> [!success]
>
> Regardless of the loading speed, optimising your website will imrove its search engine ranking (SEO).

### Conclusion

If your web hosting plan and your **database are not affected** and your website continues to be slow, despite completing **all of the steps** in this guide, this probably means that the solution you are using to host your website is not or is no longer adapted to your needs.

You might consider a more capable [shared hosting offer](https://www.ovhcloud.com/en-gb/web-hosting/) or a dedicated infrastructure such as a [Virtual Private Server (VPS)](https://www.ovhcloud.com/en-gb/vps/) or [Dedicated Server](https://www.ovhcloud.com/en-gb/bare-metal/). 

## Go further <a name="go-further"></a>

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
