---
title: 'Configuring OVHcloud Secondary DNS on a dedicated server'
slug: secondary-dns
excerpt: 'Find out how to add a secondary DNS server for your domain'
section: 'Advanced use'
---

**Last updated 10th December 2020**

## Objective

If you are configuring your dedicated server as a DNS server, you can make use of the OVHcloud Secondary DNS service to host a secondary zone. This way, DNS for your domain will remain available even if the primary DNS server should become unresponsive.

**This guide will explain how to add your domain in the OVHcloud Control Panel in order to utilise an OVHcloud Secondary DNS server.**

## Requirements

- a domain name to which you have administrative access
- a [dedicated server](https://www.ovhcloud.com/en-ie/bare-metal/) in your OVHcloud account
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager)

> [!warning]
>OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
>This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a specialist service provider if you have difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Instructions

### Adding a domain <a name="addingdomain"></a>

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager), go to the `Bare Metal Cloud`{.action} section and then select your server from **Dedicated Servers** in the left-hand sidebar.

Switch to the tab `Secondary DNS`{.action} and click on the button `Add a domain`{.action}.

![Secondary DNS](images/cp-01.png){.thumbnail}

Enter your IP address and the domain to add, then click `Next`{.action}.

![Secondary DNS](images/cp-02.png){.thumbnail}

Confirming with `Next`{.action} in this step will trigger the domain verification check. If you have not already fulfilled this requirement by adding a TXT record to your DNS zone, follow the instructions in the [guide section below](#verifyingdomain) first. Otherwise, continue by clicking on `Next`{.action}.

![Secondary DNS](images/cp-03.png){.thumbnail}

After clicking on `Add`{.action} in the last window, the domain will be added to the OVHcloud Secondary DNS server.

Added domains will be listed in this tab and can be deleted by clicking on the `...`{.action} button. The name of the secondary DNS server will be displayed next to the domain.

![Secondary DNS](images/cp-05.png){.thumbnail}


> [!primary]
>
> Other actions required to configure your own DNS for your domain(s) usually include:
>
> - configuring a DNS service (such as *BIND*)
> - configuring GLUE records
> - authorising zone transfers
>
> Please refer to the corresponding manuals and external knowledge resources if you need further instructions for these administrative tasks.


### Verifying authorisation for the domain <a name="verifyingdomain"></a>

It is necessary to confirm your authorisation to manage the concerned domain before it can be added to OVHcloud Secondary DNS. This is achieved via a DNS lookup on a "ownercheck" subdomain for which a unique TXT value is generated. If the domain is managed by an external registrar or uses external DNS servers at this point, go to the control panel of your provider and add the TXT record for the "ownercheck" subdomain with the value provided in the OVHcloud Control Panel.

If the domain is managed by OVHcloud as its registrar and it uses OVHcloud DNS servers, close the window by clicking on `Cancel`{.action} first. Then you can follow the instructions in [this guide](../../domains/web_hosting_how_to_edit_my_dns_zone/) to add the TXT record in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager).

![Secondary DNS](images/cp-04.png){.thumbnail}

After successfully adding the TXT record to the domain's DNS zone, repeat the [steps above](#addingdomain) and finish the process.

## Go further

Join our community of users on <https://community.ovh.com/en/>.