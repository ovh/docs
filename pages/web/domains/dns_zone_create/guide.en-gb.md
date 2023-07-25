---
title: Creating an OVHcloud DNS zone for a domain name
excerpt: Find out how to create an OVHcloud DNS zone for your domain name via the OVHcloud Control Panel
updated: 2023-07-21
---

## Objective

The **DNS** (**D**omain **N**ame **S**ystem) zone is a domain name’s configuration file. It consists of DNS **records** that map the domain name to various services and functions, for example:

- The IP address (DNS records of type *A* and *AAAA*) of your web hosting must be provided in the zone in order to display your website when entering the domain name in a browser.
- The email servers (DNS records of type *MX*) that should receive emails sent to addresses of this domain name. By configuring MX records, you can receive emails through custom email addresses using your domnain name.
- Information related to the security/authentication of services (web hosting, web server, email server, etc.) associated with your domain name (DNS records of type *SPF*, *DKIM*, *DMARC*, etc.).


For more information on DNS zones and how to edit them in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), refer to [our DNS documentation](/pages/web/domains/dns_zone_edit).

A DNS zone is hosted/registered on **DNS servers**. **DNS servers** must be declared on the domain name's configuration in order to use the DNS zone they host.

**DNS servers** usually work in pairs:

- A *primary* DNS server: It redirects the requests received by the domain name to the DNS zone it hosts for the domain name. This way, you can perform *DNS resolution* to redirect traffic to the correct services (servers, website, emails, etc.) associated with the domain name.
- A *secondary* DNS server: This *backup* server is used if the *primary* server is saturated with requests, unavailable, or responds less quickly than the *secondary* server.

Some DNS providers offer 3 **DNS servers** or more to declare with your domain name, in order to activate the DNS zone they host for your domain name.

For more details on **DNS servers**, see [our guide](/pages/web/domains/dns_server_general_information) on this topic.

For a number of reasons, you may need to create a DNS zone for your domain name at OVHcloud.

**This guide explains how to create an OVHcloud DNS zone for your domain name via the OVHcloud Control Panel.**

## Requirements

- You have adminstrative access to manage your domain name.
- The domain name concerned does not already have an active or inactive DNS zone with OVHcloud, nor is it the subject of an operation or order in progress with OVHcloud.
- You have access your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).

## Instructions

> [!warning]
>
> You can create multiple DNS zones (from different DNS/hosting providers) for the same domain name. However, you can only have one active DNS zone for your domain name. This restriction is designed to avoid *DNS conflicts*.
>
> You can activate/deactivate a DNS zone by declaring the **DNS servers** of your domain name. You can change this declaration and change the **DNS servers** of a domain name at: 
>
> - The *registrar* registered your domain name.
> - The service provider that manages it, if you use a specialised service provider to manage your domain name.
>
> By modifying the **DNS servers** of a domain name, you disable the configuration of the old DNS zone applied in favour of the configuration of the new DNS zone (present on the new **DNS servers** declared).
>
> Therefore, please check that the configuration of the new DNS zone meets your expectations before changing the **DNS servers** registered with your domain name.
>

### Step 1: Create the DNS zone via the OVHcloud Control Panel

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} then go to the `Web Cloud`{.action} section. In the left-hand column, click on `Order`{.action} then on the `DNS zone`{.action} icon.

On the page that appears, enter the domain name (*domain.tld*), for which you would like to create an OVHcloud DNS zone. You will need to wait a few moments for the tool to carry out its checks on the domain name.

If a message appears notifying you that the DNS zone cannot be created, check that the domain name meets the necessary requirements, or ask the person managing it to do this for you. Once everything is correct, try again.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Once the verification is complete, choose whether to enable the minimum records for the DNS zone you are going to create. This choice is not definitive, as you can always [edit DNS zone records](/pages/web/domains/dns_zone_edit) later.

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

|Enable minimal entries?|Details|
|---|---|
|Yes|Select this option if you would like to customise the DNS zone yourself at a later stage.</br>![minimal-dns-entries](images/minimal.png){.thumbnail}|
|No|Select this option if you plan to use OVHcloud services as a [web hosting](https://www.ovhcloud.com/en-gb/web-hosting/){.external}, with the zone preconfigured for this purpose.</br>![no-minimum-dns-entries](images/no_minimal.png){.thumbnail}|

Once you have chosen your DNS zone, follow the steps until you have created it.

### Step 2: Edit the DNS zone (optional)

Now that your domain name’s DNS zone has been created, you can edit it. This step is optional, but it may be necessary if you want to ensure that the services associated with your domain name remain available (e.g. your website and/or emails).

To edit this DNS zone, please read our guide on [Editing a DNS zone at OVHcloud](/pages/web/domains/dns_zone_edit).

> [!primary]
>
> If you have just created the DNS zone and the domain name does not yet appear in your list of services (under `Domain names`{.action} in the `Web Cloud`{.action} section of the OVHcloud Control Panel), wait 15 to 20 minutes, then reload the page.
>

### Step 3: Modify the domain name’s DNS servers

Once the OVHcloud DNS zone is ready to be used, it needs to be activated by declaring the corresponding DNS servers. To do this, first retrieve the names of the OVHcloud **DNS servers** on which your domain name’s DNS zone was created.

Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} then go to the `Web cloud`{.action} section. In the left-hand column, click on `Domain names`{.action} then select the relevant DNS zone. It is named after your domain name and has a globe-shaped logo labelled *DNS* on its left.

> [!primary]
> At this point, if you only see the globe-shaped logo (without the label *DNS*), the domain name is already managed in your OVHcloud Control Panel. 
>
> If you are the *Administrator* contact of the latter, you can directly change the **DNS servers** using [our guide](/pages/web/domains/dns_server_general_information) on the subject.
>
> As a reminder, please check that the configuration of the new DNS zone meets your expectations before changing the **DNS servers** registered with your domain name.
>

On the page that appears, the DNS servers that you need to use with your domain name to enable the OVHcloud DNS zone will appear below `Name Servers`{.action}.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Once you have the information, **edit your domain name’s DNS servers in the interface of the service provider managing your domain name**. Once you have configured your domain name, you will need to allow a maximum of **48 hours** for the changes to propagate fully.

> [!primary]
>
> As a reminder, please check that the configuration of the new DNS zone meets your expectations before changing the **DNS servers** registered with your domain name.
>

## Go further

[Editing an OVHcloud DNS zone](/pages/web/domains/dns_zone_edit)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
