---
title: "Web Hosting: How to change your solution?"
excerpt: "Find out how to change the subscription offer for your OVHcloud Web Hosting"
updated: 2024-10-03
---

## Objective

In your [OVHcloud Control Panel](/links/manager), you can increase the capacity of your [web hosting plans](/links/web/hosting). A subscription upgrade provides the following advantages:

- More powerful hosting
- More FTP storage space
- Additional databases
- Additional email accounts
- Additional features such as [mailing lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) (from [the Professional offer](/links/web/hosting-professional-offer)) or the [Web Cloud Databases service](/links/web/databases){.external} (included in [the Performance offers](/links/web/hosting-performance-offer))

**This guide explains how to upgrade your OVHcloud hosting plan without any service interruptions.**

## Requirements

- An [OVHcloud web hosting plan](/links/web/hosting)
- Access to the [OVHcloud Control Panel](/links/manager) with the required permissions to manage the Web Hosting plan ([Administrator contact](/pages/account_and_service_management/account_information/managing_contacts))

## Instructions

> [!warning]
>
> **Before** you make any changes to your current subscription, please check if you are affected by any of these questions:
>
> - [How do I upgrade my free 100M hosting plan to a web hosting plan?](#100m)
> - [How do I get a temporary performance boost on my Performance hosting plan?](#boost)
> - [Will I lose the time remaining on my current hosting plan when I change plans?](#billing)
> - [Can I downgrade my current plan?](#checks)
>

### Modifying your web hosting plan <a name="modify"></a>

To modify your subscription, go to your [OVHcloud Control Panel](/links/manager) in the `Web Cloud`{.action} section. Click `Hosting plans`{.action} and select the hosting plan concerned.

In the `Plan` box, click the `...`{.action} button to the right of `Solution`, then `Change plan`{.action}.

![change_plan](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/pro-change-plan.png){.thumbnail}

Then select your new subscription and its duration. Confirm the corresponding contracts, then click `Send`{.action}.

### Checking that your web hosting plan is compatible with a lower range solution <a name="checks"></a>

> [!warning]
>
> You can only change your subscription to a lower range plan if it is the **next lower plan**.
> For example, you cannot switch from a *Performance 2* plan to a *Pro* plan in a single operation.
> You will **first** need to downgrade your web hosting plan from the *Performance 2* plan to the *Performance 1* plan, and **then** to the *Pro* plan.

**Before changing to a lower range**, please check the following 6 points:

#### 1 - Start SQL databases

Make sure there are enough [databases](/links/web/hosting-options-startsql) in the new plan. Also check that they are of sufficient size.

Otherwise, delete unused databases and reduce the amount of data in them, if necessary. This quantity must not exceed the maximum database size for the new solution. If you need assistance with how to proceed, please contact [OVHcloud partners](/links/partner).

Once you have deleted data from your databarrrrrses, recalculate the quota used. To do this, log in to your [OVHcloud Control Panel](/links/manager) and go to the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action} , then select the Web Hosting plan concerned. On the page that pops up, go to the `Databases`{.action} tab, then click the `...`{.action} button to the right of the database concerned, then `Recalculate the quota`{.action}.

![quota](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/recalculate-quota.png){.thumbnail}

> [!primary]
>
> Recalculating your database quota may take up to **15 minutes**. Refresh the page in your web browser if the recalculated quota does not appear after that time.
>

#### 2 - Web Cloud Databases

If you are using the [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) solution included with your web hosting plan [Performance](/links/web/hosting-performance-offer), and you want to change your web hosting plan to a [Pro](/links/web/hosting-professional-offer) solution, you will need to detach the Web Cloud Databases solution from your web hosting plan.<br>
To do this, log in to your [OVHcloud Control Panel](/links/manager) and go to the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action} , then select the Web Hosting plan concerned. On the page that pops up, stay in the `General information`{.action} tab. In the central `Configuration` column, click the `...`{.action}' button to the right of the `Web Cloud Databases`{.action} heading, then `Detach`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/wcdb-detach.png){.thumbnail}

With this action, you can order a Web Cloud Databases solution that is independent of your *Performance* subscription. Your server data will be stored.

If you do not want to keep this data, you can also delete your Web Cloud Databases solution before switching to the *Pro* solution: 

1. Back up your data by following the instructions in this [guide](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).<br>
2. Delete your Web Cloud Databases server via your [OVHcloud Control Panel](/links/manager). To do this, log in to your [OVHcloud Control Panel](/links/manager), click on your name in the top right-hand corner, then on the `Products and services`{.action} icon. Next, click the `...`{.action} button to the right of the line for the Web Cloud Databases/Private SQL solution concerned, then `Delete my Private SQL hosting plan`{.action}.

#### 3 - FTP storage space

Make sure that the new solution offers enough [FTP storage space](/pages/web_cloud/web_hosting/ftp_connection) for you to be able to import files from your current hosting plan.

To check the FTP storage space quota used on your web hosting plan, log in to your [OVHcloud Control Panel](/links/manager) then go to the `Web Cloud`{.action} section. In the left-hand column, click `Web Hosting`{.action} , then select the Web Hosting plan concerned. On the `General information`{.action} page that pops up, you will find the quota under the heading `Disk space`.

![ftp](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}

#### 4 - Email accounts

Check that your new solution has a sufficient number of available email accounts. Otherwise, delete any unused email accounts after you have [saved](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) their content, if necessary.

If you would like to keep the same number of mailboxes and **before downgrading your web hosting plan to a lower plan**, you can also order a new **MX Plan** email solution. To do this, log in to your [OVHcloud Control Panel](/links/manager) and go to the `Web Cloud`{.action} section. In the left-hand column, click `Emails`{.action}, then select the email solution concerned. On the page that opens, in the `Subscription`{.action} box, to the right of `Solution`{.action}, click the `...`{.action} button, then `Change solution`{.action}.

![mxplan](/pages/assets/screens/control_panel/product-selection/web-cloud/emails/general-information/change-solution.png){.thumbnail}

>[!primary]
>
> If the `...`{.action} button is unavailable on your email solution, you can unlink the email solution from your web hosting plan. To do this, stay connected to your [OVHcloud Control Panel](/links/manager) in the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action}, then select the Web Hosting plan concerned. On the `General information`{.action} page that appears, and in the `Configuration`{.action} box, click the `...`{.action} button to the right of `Email addresses`{.action}, then click `Detach my email option`{.action}.
>

#### 5 - Mailing lists

The [Mailing lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) feature is optional on [Personal](/links/web/hosting-personal-offer) hosting plans.

To upgrade your web hosting plan to a [Personal] plan (/links/web/hosting-personal-offer), you will first need to delete the mailing lists, or order an email solution that includes this feature (**MX Plan 100** or **MX Plan Full**) from your [OVHcloud Control Panel](/links/manager).

To do this, log in to your [OVHcloud Control Panel](/links/manager) and go to the `Web Cloud`{.action} section. In the left-hand column, click `Emails`{.action}, then select the email solution concerned. On the page that opens, in the `Subscription`{.action} box, to the right of `Solution`{.action}, click the `...`{.action} button, then `Change solution`{.action}.

>[!primary]
>
> If the `...`{.action} button is unavailable on your email solution, you can unlink the email solution from your web hosting plan. To do this, stay connected to your [OVHcloud Control Panel](/links/manager) in the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action} , then select the Web Hosting plan concerned. On the `General information`{.action} page that appears, and in the `Configuration`{.action} box, click the `...`{.action} button to the right of `Email addresses`{.action} , then click `Detach my email option`{.action}.
>

#### 6 - FTP users

Make sure that the new plan offers enough FTP users.

You can view the number of FTP users in your OVHcloud Control Panel. Once you have logged in, go to the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action} , then select the Web Hosting plan concerned. On the page that pops up, click on the `FTP-SSH`{.action} tab.

At the bottom of the page that pops up, a table will appear listing all of the FTP users created for your Web Hosting plan.

To delete FTP users, click the `...`{.action} button to the right of the FTP user you want to delete, then `Delete`{.action}.

![user FTP deletion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-ftp-user-2.png){.thumbnail} 

#### Finalisation

Once these 6 points have been verified, you can complete your [solution change](#modify).

### Special cases

#### You have a free 100M hosting plan <a name="100m"></a>

If you are changing your plan from a [100M free hosting](/pages/web_cloud/web_hosting/activate_start10m) plan, only [the Personal plan](/links/web/hosting-personal-offer) will be available. However, after changing to the Personal plan, you can upgrade it to all of our [web hosting plans](/links/web/hosting).

Follow [these instructions](#modify) to change your solution.

#### Temporarily boost your Performance hosting <a name="boost"></a>

With the [Boost option](/links/web/hosting-options-boost), available on our *Performance* plans, you can temporarily increase your web hosting plan’s CPU and RAM resources to absorb a one-off increase in traffic. If this increase continues over time, you can also [switch to the higher-level Performance plan](#modify) so that you have these resources permanently.

> [!warning]
>
> When you choose to enable the Boost option, it will remain active and billed **until you disable it**.

If the **Boost** option is right for you, please find instructions below on how to **enable** or **disable** this option on your web hosting plan.

> [!tabs]
> **Enable the Boost option**
>>
>> To enable the Boost option, log in to your [OVHcloud Control Panel](/links/manager) then go to the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action}, then select the Web Hosting plan concerned. In the `General information` box on the page that opens, click the `...`{.action} button to the right of `Boost`, then `Boost my hosting plan`{.action}.<br><br>
>>![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/boost-my-hosting-plan.png){.thumbnail}<br>
>>
> **Disable the Boost option**
>>
>> To disable the Boost option, log in to your [OVHcloud Control Panel](/links/manager) then go to the `Web Cloud`{.action} section. In the left-hand column, click `Hosting plans`{.action}, then select the Web Hosting plan concerned. On the page that pops up, go to the `More` tab, then click `Boost my hosting plan`{.action}.<br>
>> The usage table for the Boost option will appear. Click `Disable boost plan`{.action}.<br><br>
>>![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/boost-my-hosting-plan/deactivate-the-boost-plan.png){.thumbnail}<br>

#### Billing when you change plans <a name="billing"></a>

**Case 1**: When you upgrade your plan to a higher plan, a *pro rata* calculation will be applied until the next renewal date for this initial subscription.
This calculation is the price difference between your original plan and your new plan.

> **Example:**
>
> You subscribed to a [Personal](/links/web/hosting-personal-offer) subscription on 1 January 2024.
>
> On October 31, 2024, you upgrade this **Personal** plan to the [Pro](/links/web/hosting-professional-offer) plan.
>
> Therefore, the amount corresponding to the remaining duration on the **Personal** subscription (2 months, from 01 November 2024 to 01 January 2025) is automatically deducted from the cost of the new **Pro** subscription, until 01 January 2025. You will only pay the difference.  
> From 01 January 2025, the **Pro** subscription will then be billed at its current price.

Follow [these instructions](#modify) to change your solution.

**Case 2**: When you downgrade your original plan, the remaining subscription time for the original plan is permanently lost. No refund will be made for this remaining time, even if the subscription has several months left. As a result, you will need to pay the full price for your new plan at the time of the downgrade.

> **Example:**
>
> You subscribed to a [Pro](/links/web/hosting-professional-offer) subscription on 1 January 2024.
>
> On October 31, 2024, you downgrade this **Pro** plan to the [Personal](/links/web/hosting-personal-offer) plan.
>
> As a result, the amount corresponding to the remaining duration on the **Pro** subscription (2 months, from 01 November 2024 to 01 January 2025) is lost.  
> From 01 November 2024, the **Personal** subscription is billed at the current price (even if you had paid for the remaining 2 months of the **Pro** offer).

Follow [these instructions](#modify) to change your solution.

## Go further <a name="go-further"></a>

[Accessing a website’s logs and statistics on a web hosting](/pages/web_cloud/web_hosting/logs_and_statistics)

[Optimising your website’s performance](/pages/web_cloud/web_hosting/optimise_your_website_performance)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
