---
title: "Activating the 100M free hosting plan"
excerpt: "Find out how to activate your 100M free hosting plan"
updated: 2023-12-18
---

## Objective

With [100M free hosting](domains-free-hosting.){.external}, OVHcloud offers you a 100 MB web hosting plan, and an email account with 5 GB of storage. This guide will show you how to activate a 100M free hosting on your [domain name](domains.){.external}.

> [!warning]
>
> This 100 MB free hosting plan is suitable for a simple webpage presentation, it **does not include a database**.
> It is also suitable if you do not need several "MX plan" email accounts. 
> If you would like to set up a website with several pages and require a database, such as a CMS (WordPress, Joomla!, PrestaShop, Drupal, etc.), please order one of [our web hosting plans](hosting.) directly from our website or your [OVHcloud Control Panel](manager.){.external}.
>

**Find out how to activate your 100M free hosting plan**

## Requirements

- A [domain name](domains.){.external} in your OVHcloud Control Panel, detached from any web hosting plan, and with no associated [MX Plan](email_generalities1.).
- Access to the [domain name](domains.){.external} in your [OVHcloud Control Panel](manager.){.external}

## Instructions

Log in to the [OVHcloud Control Panel](manager.){.external}, click `Domain names`{.action}, then choose the domain name concerned.

In the **General information** box , you will see *Free web hosting and email*. Click `...`{.action} on the right-hand side, then `Enable`{.action}.

![enable 100m](https://raw.githubusercontent.com/ovh/docs/develop/templates/control-panel/product-selection/web-cloud/domain-dns/general-information/enable-100m.png){.thumbnail}

The activation window will appear. **Step 1** will detail the plan and its price — click `Next`{.action}. For **step 2**, choose the changes you need to make to your DNS zone:

![activate100m](https://raw.githubusercontent.com/ovh/docs/develop/templates/control-panel/product-selection/web-cloud/order/order-100m-step-2.png){.thumbnail}

> [!warning]
>
> If you tick one or both of the `DNS A record` and `DNS MX record` boxes, this will overwrite the configuration originally set up in your domain's DNS zone.
>
> If your DNS zone is not managed in your [OVHcloud Control Panel](manager.){.external}, you will need to make the modifications manually in your external DNS zone.
>
> For more details, please refer to our guide on [Editing an OVHcloud DNS zone](dns_zone_edit1.).
>

| Choice                                       	| Description                                                                                                               								|
|--------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| DNS A record                         	| The domain name will point to the IP address of the 100M free hosting plan.                                               								|
| MX DNS record 	| The email servers (`mx1.mail.ovh.net`, `mx2.mail.ovh.net`, `mx3.mail.ovh.net`, etc.) of OVHcloud will be applied to the domain name. 	|

> [!primary]
>
> If your project will quickly evolve to a hosting plan with a database, larger storage space or more email accounts, you can switch directly and only from 100M free hosting to a **Personal** hosting plan from your [OVHcloud Control Panel](manager.){.external}.
>
> To switch to the **Pro** or **Performance** plan, you will need to switch from the 100M free hosting plan to the **Personal** plan beforehand.
>
> You can also choose to delete the free offer after backing up your hosting data and the contents of your email account.
>
> For more details, see our [hosting offers](hosting.).
>

**Step 3** reminds you of the pricing of the offer. 

During **step 4**, you must read the contracts and confirm your order.

Once your order has been confirmed, you will be sent an email with the information for [FTP connection](ftp_connection1.){.external} to your 100M free hosting plan.

Please refer to our guide on [Creating an MX Plan email account](email_creation1.){.external} to take advantage of the email account included with your 100M free hosting plan.

## Go further

[Logging in to your Web Hosting plan’s storage space](ftp_connection1.){.external}

[Creating an email address with an MX Plan solution](email_creation1.){.external}

[Managing SSL certificates on a Web Hosting plan](ssl_on_webhosting1.)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](partner.).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](support.).

Join our community of users on <https://community.ovh.com/en/>.