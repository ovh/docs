---
title: 'Web Cloud Databases - How to manage logs'
excerpt: 'Find out how to manage the logs for your databases hosted on your Web Cloud Databases server'
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

A log is an event recorded on a computer system (server, computer, application, website, database, network, etc.).
For example, a log can record and contain one or more of the following elements:

- The timestamp (date, hour, minute, second, etc.) of the event.
- The nature of the event (connection, disconnection, error, download, upload, alert, etc.).
- Additional information about the event (page or file accessed, application launched, remote server called, name of a file uploaded or downloaded, etc.).
- The origin of the event (user ID, source IP address, source program, etc.).
- The state of the system where the event occurs (available resources, remaining memory, CPU usage, etc.).

Most of the time, logs are generated directly by the computer systems where the events take place.
They are stored and recorded in text files also known as log files.

As a result, log files allow you to:

- Analyse the behaviour of the computer system generating the logs.
- Identify errors that have occurred on the system.
- Resolve errors encountered on the system.
- Optimise and improve the system's performance.

Your [Web Cloud Databases](/links/web/databases) solution generates its own logs.

In certain situations, you may need to view or retrieve the logs:

- From your Web Cloud Databases server.
- For one of the databases hosted on your Web Cloud Databases server.

**Find out how to view and manage the logs of your Web Cloud Databases solution.**

## Requirements

- A [Web Cloud Databases instance](/links/web/databases).

<!-- CP-NAV-START:web-cloud-databases -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigation path:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Select your database service

---
<!-- CP-NAV-END:web-cloud-databases -->

## Instructions

> [!warning]
>
> We provide this tutorial to help you with common tasks. However, we recommend contacting a [specialist provider](/links/partner) if you experience any difficulties. We will not be able to assist you with interpreting the logs available with your Web Cloud Databases solution. More information in the [Go further](#go-further) section of this tutorial.

### Viewing real-time logs for your Web Cloud Databases

Click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Logs`{.action} tab.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab.png){.thumbnail}
>>
>> This built-in console displays the logs for your Web Cloud Databases solution in real time.
>>
>> > [!primary]
>> >
>> > Logs are only available here in real time. They will only appear if they are generated while you are on the `Logs`{.action} tab.
>> >
>> > If you leave the `Logs`{.action} tab and return to it later, the previously displayed history will have disappeared.

### Retrieving the log history for your Web Cloud Databases solution

To retrieve the log history for your Web Cloud Databases solution, you need to connect to it via SFTP.

> [!warning]
>
> Before connecting, check that the public IP address of the device you are using is authorised on your Web Cloud Databases server, with the `SFTP` option ticked.
>
> To check this, retrieve the public IP address of your internet access point, then refer to the **Authorise an IP address** section of [this guide](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

To find the SFTP connection details for your Web Cloud Databases solution, click on the tabs below to view each of the **2** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> In the `General information`{.action} tab, find the **Connection information** section. Below the `SFTP`{.action} label, you will find the details needed to connect via SFTP.
>>
>> > [!primary]
>> >
>> > If you do not know the `Server password`, click the `...`{.action} button to the right to change it.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Once you have the SFTP login details, connect using an FTP client (FileZilla, Cyberduck, WinSCP, etc.).

For FileZilla, go to the top left menu `File`{.action}, then click `Site Manager`{.action}.

Click `New Site`{.action} and enter the details noted previously.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

The log file, named `stdout.log`, is located at the root.

Download it to your device to view it.

> [!primary]
>
> An additional log file named `slow-query.log` may appear at the SFTP root of your Web Cloud Databases server.
> This file contains the history of slow queries that were executed on your Web Cloud Databases server.
>
> By default, the value is set to 1 second on Web Cloud Databases solutions in the **long_query_time** variable.
>
> Using this file, you can optimise your scripts and database content to improve the performance of your associated services.

### Subscribing your Web Cloud Databases logs to Logs Data Platform <a name="wcdb-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) is a platform for managing your logs. It facilitates log aggregation and management, particularly for infrastructures generating a high volume of logs.

It works by retrieving logs generated by your infrastructure, websites, or applications, for example to:

- Store them.
- Display them in real-time dashboards.
- Allow users to perform complex queries.
- Filter them by date, application, type, or content.

For more details on Logs Data Platform, refer to our guide on [Introduction to Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Since [Web Cloud Databases](/links/web/databases) solutions can be used with many services (shared hosting, VPS, dedicated servers, etc.), they can, in addition to the real-time logs already available, be subscribed to Logs Data Platform via data streams.

To subscribe your Web Cloud Databases solution to a data stream on Logs Data Platform, 2 scenarios may apply.

**Click on each case to view the content.**

<a name="wcdb-ldp-case1"></a>

/// details | Case 1 - Subscribe to an existing data stream on your Logs Data Platform solution

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Logs`{.action} tab, then on the `Subscribe`{.action} button to the right of the real-time logs area.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Step 3**
>>
>> If you have several Logs Data Platform solutions, select the desired reference from the dropdown list below the `Add a data stream`{.action} button.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Step 4**
>>
>> The existing data stream appears in the table at the bottom of the page. Click the `Subscribe`{.action} button to the right of the corresponding line.
>>
>> After a few seconds, a message confirms that the subscription was successfully created.

///

/// details | Case 2 - Subscribe to a new data stream on your Logs Data Platform solution

Click on the tabs below to view each of the **5** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [Web Cloud Databases](/links/control-panel/web-cloud-databases) page, then select the solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Logs`{.action} tab, then on the `Subscribe`{.action} button to the right of the real-time logs area.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Step 3**
>>
>> If you have several Logs Data Platform solutions, select the desired reference from the dropdown list below the `Add a data stream`{.action} button.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Step 4**
>>
>> Since the data stream does not exist yet, click the `Add a data stream`{.action} button. You will be redirected to a page where you can create a new data stream on your Logs Data Platform solution.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}
>>
>> If needed, refer to our guides on [Introduction to Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN) and [Quick start with Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN).
>>
> **Step 5**
>>
>> Once the forms are completed, click `Save`{.action}. You will be redirected to the `Data streams` tab of your Logs Data Platform solution.
>>
>> To subscribe your Web Cloud Databases solution to this new data stream, go back to the `Logs`{.action} tab of your Web Cloud Databases solution, then follow [Case 1](#wcdb-ldp-case1) described above.

///

## Go further <a name="go-further"></a>

[Getting started with your Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Introduction to Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Quick start with Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).
