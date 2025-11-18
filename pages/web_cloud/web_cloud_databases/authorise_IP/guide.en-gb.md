---
title: "Web Cloud Databases - How to authorize an IP address?"
excerpt: "Find out how to authorize one or more IP addresses to access your Web Cloud Databases solution"
updated: 2025-07-10
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

[Web Cloud Databases](/links/web/databases) solutions can be used with OVHcloud services, or external to OVHcloud.

By default, and for security reasons, on these solutions:

- Only IP addresses linked to our shared hosting infrastructure are authorized to access the contents of the databases.
- Access to the solution logs is not restricted depending on the IP addresses. You can access them via a computer, for example.

Need to change these permissions/restrictions?

**Find out how to authorize one or more IP addresses to access your Web Cloud Databases solution.**

## Requirements

- A [Web Cloud Databases](/links/web/databases) solution
- The IP address (or IP address range) to authorize on your solution
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Authorize an IP address or IP address range

> [!primary]
>
> As a reminder, if you have just activated your [Web Cloud Databases](/links/web/databases) solution, and you only want to use its databases for an [OVHcloud web hosting](/links/web/hosting) solution, the IP addresses of these solutions are already authorized by default.

Click on the tabs below to view each of the **5** steps.

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Web Cloud Databases`{.action} menu, then choose the Web Cloud Databases solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that opens, click on the `Authorised IPs`{.action} tab.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Step 4**
>>
>> On the page that appears, click the `Add an IP address/mask`{.action} button above the table.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > If you want to modify an IP address or an IP address range that is already authorized, click the `...`{.action} button in the line corresponding to the IP address or IP address range you want to modify, then click `Edit the whitelist`{.action}.
>>
> **Step 5**
>>
>> In the window that opens, you will need to enter the following information:
>>
>> ![Add an IP address or mask](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP/mask *`{.action}: Enter here the IP address (e.g.: `203.0.113.44`) or IP address range (e.g.: `203.0.113.0/24` representing all IP addresses from `203.0.113.0` to `203.0.113.255`) that you would like to authorize on your Web Cloud Databases solution.
>> - `Description`{.action} (optional): For example, you can add information about the role of the IP address or IP address range concerned.
>> - `Databases`{.action}: Tick this box if you want the IP address or IP address range to be authorized to access the databases on your Web Cloud Databases solution.
>> - `SFTP`{.action}: Tick this box to authorize the IP address or IP address range to access the logs of your Web Cloud Databases solution.
>>
>> > [!warning]
>> >
>> > It is strongly recommended not to tick the `Databases`{.action} box to authorize the IP address range `0.0.0.0/0` to access your databases.
>> >
>> > This would grant access to your databases to all IPv4 addresses.
>>
>> Once you have entered the information, click `Confirm`{.action}.

### Special cases

**Click on the cases below to view the information.**

/// details | IP address range 0.0.0.0/0

When you activate your Web Cloud Databases solution, a line for the IP address range `0.0.0.0/0` is already present by default, to authorize **SFTP** access to the solution.

This authorization is voluntarily set up to allow you to access the log files of your Web Cloud Databases solution without having to declare the IP address of your Internet access point.

This IP address can change regularly, depending on the ISP.

In addition, we recommend that you **do not** modify this authorization, and do not authorize blanket access to the databases on your Web Cloud Databases solution.

Effectively, this would allow all existing IPv4 addresses to have access to your databases, which represents a risk for your data security.

///


/// details | Authorizing access to OVHcloud web hosting plans

When you activate your Web Cloud Databases solution, authorization to access OVHcloud web hosting plans is activated by default.

If you would like to disable this authorization because you are not using a web hosting plan with your Web Cloud Databases solution, follow the **4** steps below:

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click on the `Web Cloud Databases`{.action} menu, then choose the Web Cloud Databases solution concerned.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that pops up, click on the `Authorised IPs`{.action} tab.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Step 4**
>>
>> On the page that appears, untick the box `Authorise OVHcloud web hosting plans to access the database`{.action}.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}

///

## Go further
 
For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).
