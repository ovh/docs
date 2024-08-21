---
title: Creating an OVHcloud DNS zone for a domain name
excerpt: Find out how to create an OVHcloud DNS zone for your domain name via the OVHcloud Control Panel
updated: 2024-06-26
---

## Objective

The **DNS** (**D**omain **N**ame **S**ystem) zone is a domain name’s configuration file. It consists of DNS **records** that map the domain name to various services and functions.

For more information, please refer to our guides:

- [Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)
- [Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)
- [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

For a number of reasons, you may need to create a DNS zone for your domain name at OVHcloud.

**This guide explains how to create an OVHcloud DNS zone for your domain name via the OVHcloud Control Panel.**

## Requirements

- You have adminstrative access to manage your domain name.
- The domain name concerned does not already have an active or inactive DNS zone with OVHcloud, nor is it the subject of an operation or order in progress with OVHcloud.
- You have access your [OVHcloud Control Panel](/links/manager).

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

Log in to your [OVHcloud Control Panel](/links/manager){.external} then go to the `Web Cloud`{.action} section. In the left-hand column, click on `Order`{.action} then on the `DNS zone`{.action} icon.

On the page that appears, enter the domain name (*domain.tld*), for which you would like to create an OVHcloud DNS zone. You will need to wait a few moments for the tool to carry out its checks on the domain name.

If a message appears notifying you that the DNS zone cannot be created, check that the domain name meets the necessary requirements, or ask the person managing it to do this for you. Once everything is correct, try again.

![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}

Once the verification is complete, choose whether to enable the minimum records for the DNS zone you are going to create. This choice is not definitive, as you can always [edit DNS zone records](/pages/web_cloud/domains/dns_zone_edit) later.

![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}

|Enable minimal entries?|Details|
|---|---|
|Yes|Select this option if you would like to customise the DNS zone yourself at a later stage.</br>![minimal-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
|No|Select this option if you plan to use OVHcloud services as a [web hosting](/links/web/hosting){.external}, with the zone preconfigured for this purpose.</br>![no-minimum-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|

Once you have chosen your DNS zone, follow the steps until you have created it.

### Step 2: Edit the DNS zone (optional)

Now that your domain name’s DNS zone has been created, you can edit it. This step is optional, but it may be necessary if you want to ensure that the services associated with your domain name remain available (e.g. your website and/or emails).

To edit this DNS zone, please read our guide on [Editing a DNS zone at OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!primary]
>
> If you have just created the DNS zone and the domain name does not yet appear in your list of services (under `Domain names`{.action} in the `Web Cloud`{.action} section of the OVHcloud Control Panel), wait 15 to 20 minutes, then reload the page.
>

### Step 3: Modify the domain name’s DNS servers

Once the OVHcloud DNS zone is ready to be used, it needs to be activated by declaring the corresponding DNS servers. To do this, first retrieve the names of the OVHcloud **DNS servers** on which your domain name’s DNS zone was created.

Log in to your [OVHcloud Control Panel](/links/manager){.external} then go to the `Web cloud`{.action} section. In the left-hand column, click on `Domain names`{.action} then select the relevant DNS zone. It is named after your domain name and has a globe-shaped logo labelled *DNS* on its left.

> [!primary]
> At this point, if you only see the globe-shaped logo (without the label *DNS*), the domain name is already managed in your OVHcloud Control Panel. 
>
> If you are the *Administrator* contact of the latter, you can directly change the **DNS servers** using [our guide](/pages/web_cloud/domains/dns_server_edit) on the subject.
>
> As a reminder, please check that the configuration of the new DNS zone meets your expectations before changing the **DNS servers** registered with your domain name.
>

On the page that appears, the DNS servers that you need to use with your domain name to enable the OVHcloud DNS zone will appear below `Name Servers`{.action}.

![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/name-servers.png){.thumbnail}

Once you have the information, **edit your domain name’s DNS servers in the interface of the service provider managing your domain name**. Once you have configured your domain name, you will need to allow a maximum of **48 hours** for the changes to propagate fully.

> [!primary]
>
> As a reminder, please check that the configuration of the new DNS zone meets your expectations before changing the **DNS servers** registered with your domain name.
>

> [!success]
>
> If you would like to customise the names of the DNS servers associated with your domain name’s active DNS zone, please read our guide "[Customising a domain name’s DNS servers (Glue Records)](/pages/web_cloud/domains/glue_registry)".
>

## Go further

[Everything you need to know about DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)

[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community). 
