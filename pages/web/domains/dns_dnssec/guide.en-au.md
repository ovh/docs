---
title: 'Securing your domain name with DNSSEC'
excerpt: 'Protect your domain name from cache poisoning by activating DNSSEC'
legacy_guide_number: g609
updated: 2023-07-26
---

## Objective 

A DNS server hosts one or more DNS zones. A DNS zone contains the DNS configuration of a domain name. This configuration links your domain name to the various services associated with it (hosting server for your website, servers for your custom email addresses with your domain name, etc.).

In some cases, data streams that pass through DNS servers can be intercepted by hackers.
To achieve this, they manipulate the DNS server cache to apply their own DNS configuration to your domain name. This is called *cache poisoning*.
This way, they can redirect incoming traffic for your domain name to their websites and email addresses.

The **D**omain **N**ame **S**ystem **SEC**ecurity Extensions (**DNSSEC**) protect your domain name’s DNS configuration against *cache poisoning* by verifying and authenticating DNS responses.

**Find out how to enable DNSSEC for your domain name to protect it against *cache poisoning*.**

For more information on how **DNSSEC** works, please visit our page “[Understanding DNSSEC](https://www.ovhcloud.com/en-au/domains/dnssec/){.external}”.

You can also refer to our guides on [OVHcloud DNS servers](/pages/web/domains/dns_server_general_information) and on [editing an OVHcloud DNS zone](/pages/web/domains/dns_zone_edit) if you would like more information on these topics.

## Requirements

- You have a domain name registered with OVHcloud.
- The domain name extension is compatible with DNSSEC.
- You have access to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au){.external} in the `Web Cloud`{.action} section.

## Instructions

You can enable **DNSSEC** in two ways:

- **Your domain name uses OVHcloud DNS servers**: Activation is done in one click from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au){.external} (if it is not already activated by default).

- **Your domain name does not use OVHcloud DNS servers**: Contact the service provider managing your domain name’s DNS configuration to ask for their settings. Log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au){.external} , then go to the `Web Cloud`{.action} section. In the left-hand column, click `Domain names`{.action}, then choose the domain name concerned from the list.</br>
Select the `DS records`{.action} tab, click the `Edit`{.action} button on the right-hand side, then click the `+`{.action} button that pops up.</br>
You can now enter the 4 fields “Key Tag”, “Flag”, “Algorithm”, “Public key (encoded in base64)” with the data communicated by your current provider.

> [!primary]
>
> To check if your domain name uses the OVHcloud DNS configuration, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au){.external} , then go to the `Web Cloud`{.action} section. In the left-hand column, click `Domain names`{.action}, then choose the domain name concerned from the list. Select the `DNS servers`{.action} tab.
>
> If the DNS server names end with *ovh.net*, *ovh.ca* or *anycast.me*, your domain name is using the OVHcloud DNS servers.
>

### Step 1: Access the domain name management <a name="step1"></a>

To activate the **DNSSEC** solution for your domain name, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com.au/&ovhSubsidiary=au){.external} then go to the `Web Cloud`{.action} section. In the left-hand column, click `Domain names`{.action}, then choose the domain name concerned from the list.

The page that appears will display general information about the service. 

### Step 2: Manage the DNSSEC of your domain name

In the `General information`{.action} tab, following [step 1](#step1), you can see the activation status of the **DNSSEC** on your domain name: Check the status next to "Secured Delegation - DNSSEC" inside the box "Security".

![dnssec](images/activate-dnssec-step2.png){.thumbnail}

With the activation button above `Secured Delegation - DNSSEC`{.action}, you can activate or deactivate **DNSSEC** on your domain name. When you perform these actions, a new window will appear in which you can validate the change.

![dnssec](images/activate-dnssec-step3.png){.thumbnail}

> [!primary]
>
> The activation/deactivation of **DNSSEC** takes **24** hours to be effective.
>
> Note that if you want to change the DNS servers associated with your domain name, the DNS servers will not be modified on the OVHcloud side until **DNSSEC** has been disabled. After this, an additional period of **24** to **48** hours will be required for the DNS propagation of the modification.
>
> In total, the modification of a domain name’s DNS servers with **DNSSEC** enabled will be fully effective after **48** to **72** hours.
>

## Go further

[General information on OVHcloud DNS servers](/pages/web/domains/dns_server_general_information)

[Edit an OVHcloud DNS zone](/pages/web/domains/dns_zone_edit)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-au/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-au/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
