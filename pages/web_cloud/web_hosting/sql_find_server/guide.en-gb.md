---
title: "How to identify your database server"
excerpt: "Discover how to find the name of the server hosting your shared database, accessible with your web hosting"
updated: 2026-02-12
---

## Objective

During the use of your services, you may need to know the name of the SQL server on which your database is located (either included or ordered as an additional service via your [web hosting](/links/web/hosting)).

> [!warning]
>
> This guide does not apply to databases hosted on a [Web Cloud Databases](/links/web/databases) solution.

**Discover how to find the name of the server hosting your shared database, accessible with your web hosting.**

## Requirements

- An OVHcloud [Web Hosting plan](/links/web/hosting)
- Access to the [OVHcloud Control Panel](/links/manager)
- A database included or [ordered as an additional service](/links/web/hosting-options-startsql) via your web hosting

## Instructions

Click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Hosting plans`{.action} menu, then select the Web Hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that pops up, click on the `Databases`{.action} tab.
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>>
> **Step 4**
>>
>> In the table, locate the **Server** column.
>>
>> ![database-server](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}
>>
>> For the relevant database, you will find the name of the SQL server (e.g., **mysqlXXX.euXXX**) in this column, on which your shared database is hosted.
>>
>> > [!warning]
>> >
>> > Do not confuse the **Server** with the **Server address**:
>> >
>> > - The **Server address** is part of the login credentials specific to your database and allows your website to connect to it.
>> > - The **Server** represents the infrastructure hosting your database, as well as other databases. The server name allows you to check whether it is affected by a maintenance operation or an incident reported on our [Web Cloud Status](https://web-cloud.status-ovhcloud.com/) page.

## Go further <a name="go-further"></a>

[Troubleshooting common database errors](/pages/web_cloud/web_hosting/diagnosis_database_errors)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).