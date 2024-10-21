---
title: "Web Hosting - Activating an EV SSL certificate"
excerpt: "Find out how to order and install an EV SSL certificate for an OVHcloud web hosting plan"
updated: 2024-10-10
---

## Objective

You can use Secure Socket Layer (SSL) certificates to encrypt any exchange of data on your website. This prevents unauthorised persons and malicious robots from viewing requests to or from your website.

OVHcloud offers several types of SSL certificates for [OVHcloud web hosting solutions](/links/web/hosting). They are set out in our guide on [Managing an SSL certificate on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting). SSL certificates are essential for the security of your website.

There are three types of SSL certificates:

- Domain Validation (DV)
- Organisation Validation (OV)
- Extended Validation (EV)

SSL encryption levels are the same between these certificate types.

The main difference lies in the level of checks that will be carried out by the Certificate Authority (CA) that issues the SSL certificate and attests to its authenticity.

EV SSL certificates are those for which the verification and security levels are highest. Generally, the EV SSL certificate is used for very large websites or  websites processing sensitive data. This certificate will provide the highest level of identification available.

For OVHcloud web hosting plans, the certification authority delivering EV SSL certificates is [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> EV SSL certificates are not available for everyone. To check if you are eligible to sign up for a subscription, please use the information listed in the [requirements](#requirements) section of this guide **before** ordering it.
>
> Please note that once the order has been initiated and sent to our certificate provider / certification authority Sectigo, **no refund will be possible**.
>

**Find out how to order an EV SSL certificate and install it on an OVHcloud web hosting plan.**
    
## Requirements <a name="requirements"></a>

- You have access to the [OVHcloud Control Panel](/links/manager).
- You plan to order an SSL secured [OVHcloud web hosting plan](/links/web/hosting) or you have a web hosting plan in your customer account without an SSL certificate installed.
- You manage a [domain name](/links/web/domains) for which you have exclusive rights. The domain name must not already be linked to an SSL certificate.
- You represent an organisation (company, government agency, etc.) registered with an official registry.
- You have your organisation’s permission to order an EV SSL certificate.
- You are able to provide an accurate account of your organisation's information and contact details.

To check if you are eligible to subscribe to an EV SSL certificate, go to [this web page](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.
  
## Instructions

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](/links/partner) if you encounter any difficulties. We will not be able to provide you with assistance **for all verification steps directly performed with the Sectigo certification authority**. You can find more information in the [Go further](#go-further) section of this guide.
>

### Step 1: Order the EV SSL certificate

#### 1.1 - For a domain name and a hosting already existing at OVHcloud

Read our guide on how to [manage an SSL certificate on your web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting) and select the **EV SSL Certificate** once you have reached the order process.

Fill in the information requested by **Sectigo** before you receive the EV SSL certificate.

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Click `Continue`{.action} after **all items** have been entered correctly.

Proceed with the order until payment in order to confirm the request to create the SSL certificate.

> [!alert]
>
> Once the order has been confirmed, the EV SSL certificate request is sent to the **Sectigo** certification authority.
>
> You must ensure that you are eligible to subscribe to an EV SSL certificate **before paying for the certificate**.
>
> No refund of the EV SSL payment will be possible, **even if the verification procedure with Sectigo does not succeed**.
>

#### 1.2 - For a new domain name and a new hosting

If you have not yet ordered your domain name and associated hosting package, go to our [OVHcloud homepage](/links/website), enter a domain name in the **search form** and click `Search`{.action} to start the order process.

![SSL EV select domain](/pages/assets/screens/website/order/ssl-ev-search-bar.png){.thumbnail}

Then select your domain name, choose your hosting package and your options until you reach the step `Configure your web hosting`.

Select your choices for installing `1-click module`{.action} and `CDN`{.action}, then scroll down the page to the section `Secure your website with our SSL certificates`{.action}.

![SSL EV order](/pages/assets/screens/website/order/ssl-ev-selection.png){.thumbnail}

Choose `Sectigo EV SSL`{.action} then click `Continue`{.action}.

On the new page that pops up, enter exactly the information requested by **Sectigo** before the EV SSL certificate is delivered to you:

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Click `Continue`{.action} after **all items** have been entered correctly.

Proceed with your order until payment to begin installing your services.

> [!alert]
>
> Once the order has been confirmed, the EV SSL certificate request is sent to the **Sectigo** certification authority. 
>
> You must ensure that you are eligible to subscribe to an EV SSL certificate **before paying for the certificate**.
>
> No refund of the EV SSL will be possible, **even if the verification procedure with Sectigo does not succeed**.
>

### Step 2: Verifications with Sectigo Certification Authority (CA)

All of the actions described in this step might be performed over several days. The time frame **depends** on the checks performed by Sectigo.

> [!warning]
>
> In this step, the entire process depends on the **Sectigo** certificate provider and the information entered when you ordered your EV SSL certificate. 
>
> Only **Sectigo** can intervene on this stage and OVHcloud cannot act at this level.
>
> Indeed, the role of the Sectigo CA is to independently and impartially certify your organisation's information to integrate it into the EV SSL certificate.
>
> **Sectigo**, not OVHcloud decides whether or not to issue an EV SSL certificate. Sectigo is by definition the only one with authority over the certification.
>

#### 2.1 - Sectigo received the confirmation email

Once your order has been placed, Sectigo will send you an email containing a validation link and a procedure to follow.
Check your information and confirm your request by following the instructions in this email.

To ensure that email exchanges with Sectigo are going well, also check the validity of the email address entered in the form when you ordered the EV SSL, as well as the contact email address associated with your [OVHcloud Control Panel](/links/manager).

> [!primary]
>
> In parallel and in order to certify the ownership of your domain with Sectigo, a *.txt* file is automatically set up in the FTP space of your web hosting plan. This file will be deleted when it is no longer needed by Sectigo.
>
> Please note that some restrictions applied on your side (e.g. in a .htaccess file) may prevent this verification.
> If the FTP access rights `CHMOD` are also restricted or insufficient, the verification can also be blocked.
>
> We also recommend that you **do not** enable or leave the [application firewall](/pages/web_cloud/web_hosting/multisites_activating_application_firewall), available with our web hosting plans, active for the duration of your EV SSL certificate installation.
>

#### 2.2 - Sectigo Certification Authority Verifications

Sectigo will then check that your organisation exists and is registered with the official registries.

> [!primary]
>
> Sectigo may not be able to verify all information with official registries. Sectigo's services may then contact you by phone at the number you entered when ordering, or at the official phone number of your organisation.
>

Sectigo will then check if you have exclusive authority over the ownership and use of the domain name with which you will use the EV SSL certificate.

#### 2.3 - Final phone checks with Sectigo

Once the checks have been done by Sectigo, you will be contacted by their services by phone in order to finalise the subscription of your EV SSL certificate.

> [!success]
>
> For more details on the operations described in **Step 2** above, see the [Sectigo official documentation](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external} on the subject.
>

### Step 3: Installing an EV SSL certificate with your OVHcloud domain name and hosting plan

Once Sectigo has carried out all the checks, their services generate the EV SSL certificate and send us the elements required for its installation on your hosting.

You will only need to [activate HTTPS on your website](/pages/web_cloud/web_hosting/ssl-activate-https-website) to fully use your EV SSL certificate.

## Go further <a name="go-further"></a>

[Sectigo official website](https://sectigostore.com){.external}

[Description of checks made by Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}

[Managing an SSL certificate on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Activate HTTPS on your website](/pages/web_cloud/web_hosting/ssl-activate-https-website)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).