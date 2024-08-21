---
title: "Improving your website's security with the MainWP plugin for WordPress"
excerpt: "Find out how to control the security of your websites from a single interface using MainWP"
updated: 2024-01-25
---

## Objective

Maintaining the security of your websites is crucial for the development of your brand. Optimum security for your websites can protect your company's data, as well as your customers' data, thereby preserving your company's image and trust. With extensions to the WordPress MainWP plugin, you can control the security of your websites from a single interface.

**This guide will show you how to improve website security via the MainWP dashboard**

## Requirements

- A [Web Cloud hosting plan](/links/web/hosting).
- Access to your MainWP dashboard.

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This tutorial is designed to help you with common tasks. However, we recommend contacting a [specialist provider](/links/partner) or [the publisher of the MainWP plugin](https://mainwp.com/support/){.external} if you experience any difficulties. We will not be able to assist you. More information in the ["Go further"](#go-further) section of this tutorial.
>

## Instructions

### Install the Sucuri extension

> [!primary]
> If you have never installed a MainWP extension, you can find out how to install one in [this guide](/pages/web_cloud/web_hosting/mainwp_general).
>

To find all the security-related extensions, go to the [security](https://mainwp.com/mainwp-extensions/extension-category/security/) section of MainWP. You can also search for an extension by clicking `Extensions`{.action} in the MainWP main menu, then `Install Extensions`{.action}.

Click on the `Security`{.action} tab to view the list of security-related extensions. In this example, we choose the free Sucuri extension, but you are free to choose the extension of your choice. Once you have selected the extension, click `Install Selected Extensions`{.action}.

In the MainWP main menu, click `Extensions`{.action} then `Manage Extensions`{.action}. The previously installed Sucuri extension appears.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/sucuri_extension.png){.thumbnail}

If you have not already done so, click `Enable`{.action}, then `License`{.action} to use the extension.

### Perform a security scan

In the main menu of MainWP, click `Sites`{.action} then select the child site of your choice. At the top of the screen, click on the `Security`{.action} tab.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/security_tab.png){.thumbnail}

To perform a security scan on your website, click `Scan Website`{.action}.

![mainWP](/pages/assets/screens/other/cms/wordpress/mainwp/sucuri_scanner.png){.thumbnail}

Once the security scan is complete, a new line will appear, corresponding to the security scan report.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/report_security_line.png){.thumbnail}

Click `Show Report`{.action} to view the security report.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/security_report_details.png){.thumbnail}

The security scan report provides a lot of important information about the security of your website:

- presence of viruses and malicious software
- anomaly detection
- dangerous links
- SPAM attempts
- etc.

Remember to carry out regular security scans. With Sucuri, you can enable a reminder. At the bottom of the list of your security reports, click on the dropdown list to the right of `Remind me if I don't scan my child site for`{.action}. For example, if you choose `1 week`{.action}, Sucuri will remind you every week to carry out a security scan.

### Identify and resolve security issues

In the main menu of MainWP, click `Sites`{.action} then select the child site of your choice. At the top of the screen, click the `Security`{.action} tab. On the dashboard that pops up, you can see if any security issues have been identified by Sucuri.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/security_overview.png){.thumbnail}

In our example, Sucuri tells us that three security issues have been identified. Click `Fix all issues`{.action} to resolve all security issues. If you would like to find out more about the issues identified, click the `Security`{.action} tab at the top of the interface. A list of security issues is displayed.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/security_list.png){.thumbnail}

To resolve an issue, identify the corresponding line and click the `Fix`{.action} button to the right of the line.

![mainWP security](/pages/assets/screens/other/cms/wordpress/mainwp/security_unfix.png){.thumbnail}

Once the problem has been resolved, you can cancel the changes made by clicking the `Unfix`{.action} button.

## Go further <a name="go-further"></a>

[Manage multiple WordPress websites with the MainWP plugin](/pages/web_cloud/web_hosting/mainwp_general)

[Manage customers for your websites with MainWP](/pages/web_cloud/web_hosting/mainwp-client-management)

[Backing up your websites with MainWP](/pages/web_cloud/web_hosting/mainwp-backup)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

Join our [community of users](/links/community).