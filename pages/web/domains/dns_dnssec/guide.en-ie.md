---
title: 'Securing your domain name with DNSSEC'
excerpt: 'Protect your domain name from cache poisoning by activating DNSSEC'
slug: secure_your_domain_with_dnssec
legacy_guide_number: g609
section: 'Protection and security'
order: 01
---

**Last updated 19th October 2022**

## Objective

DNS servers store DNS configurations for domain names. DNS records are usually used to link your domain name to the server (or servers) that host your website and email addresses. In a conventional use, this configuration allows you to link your domain name to the server(s) that host your website and email addresses. In recent years, hackers have developed methods to poison DNS servers, allowing them to divert traffic to other servers. There is a way to protect your domain name from these actions: DNSSEC.

**Learn how to enable DNSSEC on your domain name to protect it against Cache Poisoning.**

To understand how this protection works, we recommend reading this page: [Understanding the DNSSEC service](https://www.ovhcloud.com/en-gb/domains/dnssec/){.external}.

## Requirements

- a domain name registered with OVHcloud
- The domain name concerned must have an extension compatible with DNSSEC.
- access to the `Web Cloud`{.action} section of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}

## Instructions

DNSSEC can be activated in two ways:

- **If your domain name uses OVHcloud DNS servers**, activation is done in one click from the OVHcloud Control Panel.

- **If your domain name does not use OVHcloud DNS servers**, you will need to contact the service provider managing its DNS configuration and ask them all the parameters. Then go to the `Web Cloud`{.action} section. Click `Domain names`{.action}, then choose the domain name concerned from the list.
Open the `DS records`{.action} tab, click the `Edit`{.action} button on the right then click the  `+`{.action} button.
You can now fill in the 4 fields, "Key tag", "Flag", "Algorithm", "Public key (encoded in base64)", with the data provided by your current service provider.

> [!primary]
>
> To check if your domain name is using the OVHcloud DNS configuration: in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, select the domain, and go to the `DNS servers`{.action} tab.
>

### Step 1: Access the domain name management section.

To start with, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, and go to the `Web Cloud`{.action} section. Click `Domains`{.action}, then choose the domain name concerned from the list.

The page that appears displays the general information. 

### Step 2: Manage your domain name’s DNSSEC service.

In the `General Information`{.action} tab, you can check the activation status of DNSSEC on your domain name.

To do this, in the "Security" box, check the status next to "Secure Delegation - DNSSEC".

![dnssec](images/activate-dnssec-step2.png){.thumbnail}

By moving the activation button, you can activate or deactivate the DNSSEC service on your domain name. A new window will then appear, where you will need to confirm the change.

![dnssec](images/activate-dnssec-step3.png){.thumbnail}

### Step 3: Wait during the activation or deactivation.

Once you have decided to activate or deactivate DNSSEC on your domain name, you will need to wait a maximum of 24 hours for the change to take effect. 

## Go further

Join our community of users on <https://community.ovh.com/en/>.
