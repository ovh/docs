---
title: "Web Hosting - How to activate a Sectigo EV SSL certificate"
excerpt: "Find out how to order and install a Sectigo EV SSL certificate for an OVHcloud web hosting plan"
updated: 2025-06-16
---

## Objective

You can use Secure Socket Layer (SSL) certificates to encrypt any exchange of data on your website. This prevents unauthorized persons and malicious bots from viewing requests to or from your website.

OVHcloud offers several types of SSL certificates for [OVHcloud web hosting solutions](/links/web/hosting). They are set out in our guide on [Managing an SSL certificate on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting). SSL certificates are essential for the security of your website.

There are three types of SSL certificates:

- Domain Validation (DV)
- Organisation Validation (OV)
- Extended Validation (EV)

SSL encryption levels are the same between these certificate types.

The main difference lies in the level of checks that will be carried out by the Certificate Authority (CA) that issues the SSL certificate and attests to its authenticity.

EV SSL certificates are those for which the verification and security levels are highest. Generally, the EV SSL certificate is used for very large websites or  websites processing sensitive data. This certificate will provide the highest level of identification available.

For OVHcloud web hosting plans, the certification authority delivering EV SSL certificates is [Sectigo](https://sectigostore.com).

> [!warning]
>
> EV SSL certificates are not available for everyone. To check if you are eligible to sign up for a subscription, please use the information listed in the [requirements](#requirements) section of this guide **before** ordering it.
>
> Please note that once the order has been initiated and sent to our certificate provider / certification authority Sectigo, **no refund will be possible**.
>

**Find out how to order a Sectigo EV SSL certificate and install it on an OVHcloud web hosting plan.**
    
## Requirements <a name="requirements"></a>

- You have access to the [OVHcloud Control Panel](/links/manager).
- You plan to order or have an [OVHcloud web hosting plan](/links/web/hosting).
- You manage a [domain name](/links/web/domains) for which you have exclusive rights. The domain name must not already be linked to an SSL certificate.
- You represent an organisation (company, government agency, etc.) registered with an official registry.
- You have your organisation’s permission to order a Sectigo EV SSL certificate.
- You are able to provide an accurate account of your organisation's information and contact details.

To check if you are eligible to subscribe to a Sectigo EV SSL certificate, go to [this web page](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-).
  
## Instructions

> [!warning]
>
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist service provider](/links/partner) if you encounter any difficulties. We will not be able to assist you with **all verification steps of the Sectigo certification authority**. You can find more information in the [Go further](#go-further) section of this guide.
>

### 1 - Order the Sectigo EV SSL certificate

> [!warning]
>
> Sectigo EV SSL certificates offered at OVHcloud are only valid for one of the following two cases on your web hosting plan:
>
>- A single domain name including the www subdomain (e.g. `domain.tld` and `www.domain.tld`)
>- One subdomain (e.g. `sub.domain.tld`)
>
> If other domain names or sub-domains are declared on your web hosting plan, and you also want to assign them an SSL certificate, you can either:
>
> - [Activate a free Let's Encrypt SSL certificate](/pages/web_cloud/web_hosting/ssl_letsencrypt) (if not already the default).
> - Activate one or more other paid SSL certificate(s) ([Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) or [Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)).
> - [Install your own SSL certificate](/pages/web_cloud/web_hosting/ssl_custom).

**Before you continue**, please check that **the domain name and/or subdomain** covered by your future Sectigo EV SSL certificate:

- Points to the IP address of your web hosting plan.
- Is declared as a multisite on your web hosting plan.
- Does not already have an active SSL certificate.

To check if this is the case, please refer to our guides below:

- [Hosting multiple websites on your Web Hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)
- [Web Hosting - List of IP addresses by cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
- [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
- [Web Hosting - How to configure an SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting), part **Disable an SSL certificate on a web hosting plan**

> [!primary]
>
> If you would like to subscribe to a Sectigo EV SSL certificate for a domain name (e.g. `domain.tld`), please check that its www subdomain (e.g. `www.domain.tld`) also points to the IP address of your web hosting plan, and is correctly declared as a multisite.
>
> If you order a Sectigo EV SSL certificate without checking the previous points, you will need to make a correction at a later date. You will then need to delete the Sectigo EV SSL certificate you have previously subscribed to **without being able to receive a refund**, then order a new one. The goal is for the new Sectigo EV SSL certificate to include both your domain name `domain.tld` and its subdomain in “www” `www.domain.tld`.
>
> As a reminder, if you subscribe to a Sectigo EV SSL certificate directly for a subdomain (example: `sub.domain.tld`), you are not affected by this situation.

#### 1.1 - For a domain name and a hosting already existing at OVHcloud

Click on the tabs below to view each of the **6** steps in succession:

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Hosting plans`{.action} menu, then select the web hosting plan concerned.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Step 3**
>>
>> On the page that pops up, click on the `SSL certificates`{.action} tab.
>>
>> ![SSL certificates](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Step 4**
>>
>> When the content of the tab appears, click `Order a Sectigo SSL certificate`{.action}.
>>
>> ![Sectigo SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Step 5**
>>
>> In the new window that opens, select the domain or subdomain concerned using the dropdown menu, then click `Confirm`{.action} to be redirected to the purchase order for your Sectigo EV SSL certificate.
>>
>> ![SSL Sectigo domain selection](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
> **Step 6**
>>
>> Select the **Sectigo EV SSL certificate**, then continue with the order.
>>
>> Fill in the information requested by **Sectigo** before you receive the Sectigo EV SSL certificate.
>>
>> ![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}
>>
>> Click `Continue`{.action} after **all items** have been entered correctly.
>>
>> Proceed with the order until payment in order to confirm the request to create the SSL certificate.

> [!alert]
>
> Once the order has been confirmed, the Sectigo EV SSL certificate request is sent to the **Sectigo** certification authority.
>
> You must ensure that you are eligible to subscribe to a Sectigo EV SSL certificate **before paying for the certificate**.
>
> No refund of the Sectigo EV SSL payment will be possible, **even if the verification procedure with Sectigo does not succeed**.
>

#### 1.2 - For a new domain name and a new web hosting

If you have not yet ordered your domain name and associated hosting plan, go to our [OVHcloud homepage](/links/website), enter a domain name in the **search form** and click `Search`{.action} to start the order process.

![SSL EV select domain](/pages/assets/screens/website/order/ssl-ev-search-bar.png){.thumbnail}

Then select your domain name, choose your hosting plan and your options until you reach the step `Configure your web hosting`.

Select your choices for installing `1-click module`{.action} and `CDN`{.action}, then scroll down the page to the section `Secure your website with our SSL certificates`{.action}.

![SSL EV order](/pages/assets/screens/website/order/ssl-ev-selection.png){.thumbnail}

Choose `Sectigo EV SSL`{.action} then click `Continue`{.action}.

On the new page that pops up, enter exactly the information requested by **Sectigo** before the Sectigo EV SSL certificate is delivered to you:

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Click `Continue`{.action} after **all items** have been entered correctly.

Proceed with your order until payment to begin installing your services.

> [!alert]
>
> Once the order has been confirmed, the Sectigo EV SSL certificate request is sent to the **Sectigo** certification authority.
>
> You must ensure that you are eligible to subscribe to a Sectigo EV SSL certificate **before paying for the certificate**.
>
> No refund of the Sectigo EV SSL will be possible, **even if the verification procedure with Sectigo does not succeed**.
>

### 2 - Verifications with Sectigo Certification Authority (CA)

All of the actions described in this step might be performed over several days. The time frame **depends** on the checks performed by Sectigo.

> [!warning]
>
> In this step, the entire process depends on the **Sectigo** certificate provider and the information entered when you ordered your Sectigo EV SSL certificate.
>
> Only **Sectigo** can intervene on this stage and OVHcloud cannot act.
>
> The role of the Sectigo CA is to independently and impartially certify your organisation's information to integrate it into the Sectigo EV SSL certificate.
>
> **Sectigo**, not OVHcloud decides whether or not to issue a Sectigo EV SSL certificate. Sectigo is by definition the only one with authority over the certification.
>

#### 2.1 - Sectigo received the confirmation email

Once your order has been placed, Sectigo will send you an email containing a validation link and a procedure to follow.
Check your information and confirm your request by following the instructions in this email.

To ensure that email exchanges with Sectigo are going well, also check the validity of the email address entered in the form when you ordered the Sectigo EV SSL, as well as the contact email address associated with your [OVHcloud Control Panel](/links/manager).

> [!primary]
>
> In parallel and in order to certify the ownership of your domain with Sectigo, a *.txt* file is automatically set up in the FTP space of your web hosting plan. This file will be deleted when it is no longer needed by Sectigo.
>
> Please note that some restrictions applied on your side (e.g. in a .htaccess file) may prevent this verification.
> If the FTP access rights `CHMOD` are also restricted or insufficient, the verification can also be blocked.
>
> We also recommend that you **do not** enable or leave the [application firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall), available with our web hosting plans, active for the duration of your EV SSL certificate installation.
>

#### 2.2 - Sectigo Certification Authority verifications

Sectigo will then check that your organisation exists and is registered with the official registries.

> [!primary]
>
> Sectigo may not be able to verify all information with official registries. Sectigo's services may then contact you by phone at the number you entered when ordering, or at the official phone number of your organisation.
>

Sectigo will then check if you have exclusive authority over the ownership and use of the domain name with which you will use the Sectigo EV SSL certificate.

#### 2.3 - Final phone checks with Sectigo

Once the checks have been done by Sectigo, you will be contacted by their services by phone in order to finalise the subscription of your Sectigo EV SSL certificate.

> [!success]
>
> For more details on the operations described in **Step 2** above, see the [Sectigo official documentation](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-) on the subject.
>

### 3 - Installing a Sectigo EV SSL certificate with your OVHcloud domain name and hosting plan

Once Sectigo has carried out all the checks, their services generate the Sectigo EV SSL certificate and send us the elements required for its installation on your web hosting.

You will only need to [activate HTTPS on your website](/pages/web_cloud/web_hosting/ssl-activate-https-website) to fully use your Sectigo EV SSL certificate.

## Go further <a name="go-further"></a>

[Sectigo official website](https://sectigostore.com)

[Description of checks made by Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-)

[Managing an SSL certificate on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Activating HTTPS on your website](/pages/web_cloud/web_hosting/ssl-activate-https-website)

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
