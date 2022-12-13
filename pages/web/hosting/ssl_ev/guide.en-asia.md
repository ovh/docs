---
title: "Use an EV SSL certificate for your website"
slug: ssl-ev
excerpt: "Find out how to order and install an EV SSL certificate on an OVHcloud Web Hosting plan"
section: SSL
order: 03
---

**Last updated 13th December 2022**
  
## Objective

You can use Secure Socket Layer (SSL) certificates to encrypt any data exchanged on or from your website. This prevents a malicious person or robot from “listening” clearly to requests sent or sent with your website.

OVHcloud offers several types of SSL certificates on our [OVHcloud shared hosting](https://www.ovhcloud.com/asia/web-hosting/) solutions. They are set out in our guide on [Managing an SSL certificate on a Web Hosting plan](https://docs.ovh.com/asia/en/hosting/ssl-certificates-on-web-hosting-plans/). SSL certificates are essential for the security of your website.

There are three types of SSL certificates:

- Domain Validation (DV)
- Organisation validation (OV)
- Extended Validation (EV)

SSL encryption levels are the same between these three certificate types.

The main difference lies in the level of checks that will be carried out by the Certificate Authority (CA) that issues the SSL certificate and attests to its authenticity.

EV SSL certificates are those for which the verification and security levels are highest. Generally, the EV SSL certificate is used for very large websites or sensitive websites. This certificate will provide the highest level of identification available.

For OVHcloud web hosting plans, the certification authority delivering EV SSL certificates is [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> EV SSL certificates are not available for everyone. To check if you are eligible to sign up for a subscription **before** ordering it, please use the information listed in the [requirements](#requirements) section of this guide.
>
> Please note that once the order has been initiated and sent to our Sectigo certificate provider/certification authority, **no refund will be possible**.
>

**Find out how to order and install an EV SSL certificate on an OVHcloud Web Hosting plan**
    
## Requirements <a name="requirements"></a>

- Acces into your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia).
- Order or have a [OVHcloud shared hosting](https://www.ovhcloud.com/asia/web-hosting/) on which no SSL certificate is already installed.
- Order or have a [domain name](https://www.ovhcloud.com/asia/domains/) and have exclusive rights to use it. The domain name must not already be linked to an SSL certificate.
- Be an organisation (company, government agency, etc.) registered with an official registry.
- Have your organisation’s permission to order an EV SSL certificate.
- Be able to provide an accurate account of your organisation's information and contact details.

To check if you are eligible to subscribe to an EV SSL certificate, go to [this link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.
  
## Instructions

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
> 
> This guide is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/asia/) if you encounter any difficulties. We will not be able to provide you with assistance **for all verification steps directly performed with the Sectigo certification authority**. You can find more information in the [Go further](#go-further) section of this guide.
>

### Step 1: order the EV SSL certificate

#### 1.1 - For a domain and a hosting already existing at OVHcloud

Read our guide on how to [manage an SSL certificate on your Web Hosting plan](https://docs.ovh.com/asia/en/hosting/ssl-certificates-on-web-hosting-plans/) and select the **EV SSL Certificate** once you have reached the order tunnel.

Fill in the information requested by **Sectigo** before you receive the EV SSL certificate. 

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Click `Continue`{.action} after **all items** have been entered correctly.

Proceed with the order until payment in order to confirm the request to create the SSL certificate.

> [!alert]
>
> Once the order has been confirmed, the EV SSL certificate request is sent to the **Sectigo** certification authority.
>
> You must ensure that you are eligible to subscribe to an EV SSL certificate **before paying for the certificate**.
>
> In fact, no refund of the EV SSL will be possible, **even if the verification procedure with Sectigo does not succeed**.
>

#### 1.2 - For a new domain name and a new hosting

If you have not yet ordered your domain name and associated hosting package, go to our [OVHcloud homepage](https://www.ovhcloud.com/asia/), enter a domain name in the **search form** and click `Search`{.action} to start your order.

![SSL EV select domain](images/ssl_ev_order_1.png){.thumbnail}

Then select your domain name, choose your hosting package and your options until you reach the step `Configure your web hosting package`.

Select your choices for installing `1-click module`{.action} and `CDN`{.action}, then scroll down the page to the section `Secure your website with our SSL certificates`{.action}.

![SSL EV order](images/ssl_ev_order.png){.thumbnail}

Choose `Sectigo EV SSL`{.action} then click `Continue`{.action}.

On the new page that pops up, enter exactly the information requested by **Sectigo** before the EV SSL certificate is delivered to you:

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Click `Continue`{.action} after **all items** have been entered correctly.

Proceed with your order until payment to begin installing your services.

> [!alert]
>
> Once the order has been confirmed, the EV SSL certificate request is sent to the **Sectigo** certification authority. 
>
> You must ensure that you are eligible to subscribe to an EV SSL certificate **before paying for the certificate**.
>
> In fact, no refund of the EV SSL will be possible, **even if the verification procedure with Sectigo does not succeed**.
>

### Step 2: verifications with Sectigo Certification Authority (CA)

All of the actions described in this step can be performed over several days. The time frame **depends** on the checks performed by Sectigo.

> [!warning]
>
> In this step, the entire process depends on the **Sectigo** certificate provider and the information entered when you ordered your EV SSL certificate. 
>
> Only **Sectigo** can intervene on this stage and OVHcloud cannot act at this level.
>
> Indeed, the role of the AC Sectigo is to independently and impartially certify your organisation's information to integrate it into the EV SSL certificate.
>
> **Sectigo** decides whether or not to issue an EV SSL certificate and not OVHcloud. Sectigo is by definition the only one with authority over the certification.
>

#### 2.1 - Sectigo received the confirmation email

Once your order has been placed, Sectigo will send you an email containing a validation link and a procedure to follow.
Check your information and confirm your request by following the instructions in this email. 

To ensure that email exchanges with Sectigo are going well, also check the validity of the email address entered in the form when you ordered the EV SSL, as well as the contact email address associated with your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia).

#### 2.2 - Sectigo Certification Authority Verifications

Sectigo will then check that your organisation exists and is registered with the official registers.

> [!primary]
>
> Sectigo may not be able to verify all information with official registries. Sectigo's services can then contact you by phone at the number you entered when ordering, or at the official phone number of your organisation.
>

Sectigo will then check if you have exclusive authority over the ownership and use of the domain with which you will use the EV SSL certificate.

#### 2.3 - Last phone checks with Sectigo

Once the checks have been done by Sectigo, you will be contacted by their services by phone in order to finalise the subscription of your EV SSL certificate.

> [!success]
>
> For more details on the operations described in **Step 2** above, see the [Sectigo official documentation](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external} on the subject.
>

### Step 3: Installing an EV SSL certificate with your OVHcloud domain and hosting plan

Once Sectigo has carried out all the checks, their services generate the EV SSL certificate and send us the elements required for its installation on your hosting.

You will only need to [activate HTTPS on your website](https://docs.ovh.com/asia/en/hosting/activate-https-website-ssl/) to fully use your EV SSL certificate.

## Go further <a name="go-further"></a>

[Sectigo official website](https://sectigostore.com){.external}

[Description of checks made by Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}

[Managing an SSL certificate on a Web Hosting plan](https://docs.ovh.com/asia/en/hosting/ssl-certificates-on-web-hosting-plans/)

[Activate HTTPS on your website](https://docs.ovh.com/asia/en/hosting/activate-https-website-ssl/)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/asia/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/asia/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.