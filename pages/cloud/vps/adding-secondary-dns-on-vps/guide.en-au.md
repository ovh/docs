---
title: Configuring OVHcloud Secondary DNS on a VPS
slug: secondary-dns-vps
excerpt: Find out how to add a secondary DNS server for your domain
section: Advanced usage
---

**Last updated 12th January 2022**

## Objective

If you are configuring your VPS as a DNS server, you can make use of the OVHcloud Secondary DNS service to host a secondary zone. This way, DNS for your domain will remain available even if the primary DNS server should become unresponsive.

**This guide explains how to add your domain name in the OVHcloud Control Panel in order to utilise an OVHcloud Secondary DNS server.**

## Requirements

- A domain name to which you have administrative access
- A [Virtual Private Server](https://www.ovhcloud.com/en-au/vps/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au)

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a specialist service provider if you have difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Instructions

### Step 1: Retrieving the validation code <a name="retrievecode"></a>

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au), go to the `Bare Metal Cloud`{.action} section and then select your server from **Virtual Private Servers**.

Switch to the tab `Secondary DNS`{.action} and click on the button `Add a domain`{.action}.

![Secondary DNS](images/sec-01.png){.thumbnail}

Enter the domain name you want to add, then click `Confirm`{.action}.

![Secondary DNS](images/sec-02.png){.thumbnail}

A message will be displayed in your Control Panel regarding the verification process.

![Secondary DNS](images/sec-03.png){.thumbnail}

It is necessary to confirm your authorisation to manage the domain name before it can be added to OVHcloud Secondary DNS. This is achieved via an automated DNS lookup on the subdomain *ownercheck.yourdomainname*. An individual string of characters is generated for this purpose and displayed inside the red notification box. Copy this validation code for use in the next step.

### Step 2: Verifying authorisation for the domain name <a name="verifyingdomain"></a>

The required action is different, depending on where the DNS of your domain name is managed.

- If the domain name is managed by an external registrar **or** it uses external DNS servers at this point, log in to the control panel of your DNS provider and add a DNS zone record of the type TXT with the subdomain "ownercheck" and the value provided by executing [step 1](#retrievecode).

- If the domain is managed by OVHcloud as its registrar **and** it uses OVHcloud DNS servers, add the TXT record in the `Web Cloud`{.action} section of your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au). You can follow the instructions in our [DNS zone guide](../../domains/web_hosting_how_to_edit_my_dns_zone/) if you are not familiar with this process.

![Secondary DNS](images/sec-04.png){.thumbnail}

### Step 3: Adding the domain name

As soon as the TXT record is present in the domain name's DNS zone, repeat the [steps described in the first part of this guide](#retrievecode) to add the domain name to the OVHcloud Secondary DNS server.

Clicking on `Confirm`{.action} will trigger the automatic owner verification by querying the TXT record. A message in your Control Panel will confirm the successful DNS check. You can now delete the TXT record.

Added domain names will be listed in this tab with the corresponding **name of the secondary DNS server**. (Refresh the page in your browser after adding a domain name.)

![Secondary DNS](images/sec-05.png){.thumbnail}

Domain names can be removed by clicking on the `...`{.action} button in the table.


> [!primary]
>
> Other actions required to configure your own DNS for your domain name(s) usually include:
>
> - Configuring a DNS service (such as *BIND*)
> - Configuring GLUE records
> - Authorising zone transfers
>
> Please refer to the corresponding manuals and external knowledge resources if you need further instructions for these administrative tasks.


## Go further

Join our community of users on <https://community.ovh.com/en/>.