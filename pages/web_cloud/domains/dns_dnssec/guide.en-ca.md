---
title: "Securing your domain name with DNSSEC"
excerpt: "Find out how to protect your domain name from Cache Poisoning by enabling DNSSEC"
updated: 2025-03-04
---

## Objective 

A DNS server hosts one or more DNS zones. A DNS zone contains the DNS configuration of a domain name. This configuration links your domain name to the various services associated with it (hosting server for your website, servers for your custom email addresses with your domain name, etc.).

In some cases, data streams that pass through DNS servers can be intercepted by hackers.  
To achieve this, they manipulate the DNS server cache to apply their own DNS configuration to your domain name. This is called *cache poisoning*.
This way, they can redirect incoming traffic for your domain name to their websites and email addresses.

The **D**omain **N**ame **S**ystem **SEC**ecurity Extensions (**DNSSEC**) protect your domain name’s DNS configuration against *cache poisoning* by verifying and authenticating DNS responses.

**This guide explains how to enable DNSSEC for your domain name to protect it against *cache poisoning*.**

> [!primary]
>
> The DNSSEC option is currently unavailable for domain names registered with OVHcloud that have the extension **.it**.
>

For more information on how **DNSSEC** works, please visit our page “[Understanding DNSSEC](/links/web/domains-dnssec)”.

You can also refer to our guides on [OVHcloud DNS servers](/pages/web_cloud/domains/dns_server_general_information) and on [editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit) if you would like more information on these topics.

## Requirements

- A domain name with an extension compatible with DNSSEC
- Access to your [OVHcloud Control Panel](/links/manager)

## Instructions

To check if your domain name uses the OVHcloud DNS configuration, click on the tabs below to view each of the **3** steps.

> [!warning]
>
> **These 3 steps are only valid if your domain name is registered with OVHcloud.** Otherwise, you will need to check with your domain name registrar.
>
> If the DNS server names end with *ovh.net* (with the exception of the *snds2.ovh.net* server), *ovh.ca* or *anycast.me*, your domain name will use OVHcloud DNS servers.
>

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Domain names`{.action} menu, then choose the domain name concerned.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 3** 
>>
>> Select the `DNS servers`{.action} tab once you have clicked on the domain concerned.
>>
>> If the DNS server names end with *ovh.net* (with the exception of the *snds2.ovh.net* server), *ovh.ca* or *anycast.me*, your domain name will use OVHcloud DNS servers.

> [!primary]
>
> The activation/deactivation of **DNSSEC** takes **24** hours to be effective.
>
> If you would like to change the DNS servers associated with your domain name at a later stage, the DNS servers will only be modified on the OVHcloud side after the **DNSSEC** has been disabled. After this, an additional period of **24** to **48** hours will be required for the DNS propagation of the modification.
>
> In total, the modification of a domain name’s DNS servers with the **DNSSEC** active solution will be fully effective after **48** at **72** hours.
>

You can enable **DNSSEC** in three scenarios detailed below.

### Case 1 - Your domain name is registered with OVHcloud and uses OVHcloud DNS servers

To enable (or disable) the **DNSSEC** solution for your domain name, click on the tabs below to view each of the **4** steps.

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Domain names`{.action} menu, then choose the domain name concerned.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 3** 
>>
>> The page that appears will display general information about your domain name. You can check the activation status of the **DNSSEC** on it.
>>
>> In the `Security` box, check the status next to `Secured Delegation - DNSSEC`.
>>
>> ![Secured Delegation DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec.png){.thumbnail}
>>
> **Step 4** 
>>
>> With the activation button above `Secured Delegation - DNSSEC`{.action}, you can activate or deactivate **DNSSEC** on your domain name. When you do this, a new window will appear, where you can confirm the change.
>>
>> ![Enable DNSSEC](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/activate-dnssec-confirmation.png){.thumbnail}

### Case 2 - Your domain name is registered with OVHcloud and does not use OVHcloud DNS servers

Once you have retrieved these 4 parameters, click on the tabs below to view each of the **5** steps.

> [!tabs]
> **Step 1**
>>
>> Log in to the [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Click the `Domain names`{.action} menu, then choose the domain name concerned.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 3** 
>>
>> On the page that appears, click on the `DS records`{.action} tab. **This tab will only appear if your domain name uses external DNS servers**.
>>
> **Step 4**
>>
>> In the new page that appears, click the `Edit`{.action} button on the right, then the `+`{.action} button.
>>
> **Step 5**
>>
>> Fill in the 4 forms `Key Tag`, `Flag`, `Algorithm` and `Public key (encoded in base64)` with the data communicated by your current provider.
>>
>> ![DS records](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ds-records/edit-plus-dashboard.png){.thumbnail}
>>
>> Once you have filled in the 4 forms, click on the blue `Confirm`{.action} button to the right of the table.

### Case 3 - Your domain name is not registered with OVHcloud and uses OVHcloud DNS servers

> [!warning]
>
> Before you proceed, please check with your domain name’s current registrar to make sure that there are no DNSSEC options already enabled for it.

Unlike **case 2**, you will need to retrieve the DNSSEC activation settings ("Key Tag" / "Flag" / "Algorithm" / "Public key (encoded in base64)") from the OVHcloud side.

To do this, you will need to use the [OVHcloud APIs](/pages/manage_and_operate/api/first-steps) and perform the following actions:

- Go to our website [OVHcloud API](/links/api) (check that you are on `https://eu.api.ovh.com` if your services are hosted in Europe, and on `https://ca.api.ovh.com` if they are hosted outside Europe).
- On the page that pops up, middle-click `Explore the OVHcloud API`{.action}.
- On the new page that appears, and on the left-hand side of the page, use the dropdown menu to the right of the form `v1`{.action}, then select/enter the choice `/domain`.
- From the list of APIs that appears below in the left-hand column, locate and click on the following node: **POST /domain/zone/{zoneName}/dnssec**. You can also click on this link to access it:

> [!api]
>
> @api {v1} /domain POST /domain/zone/{zoneName}/dnssec
>

- On the right-hand side of the page, you will then see the various forms to fill in.
- Click the button in the top right-hand corner labeled `Authenticate`{.action}, then the `Login with OVHcloud SSO`{.action} button.
- The interface for connecting to your [OVHcloud Control Panel](/links/manager) will open.
- Log in to your account, then click `Authorize`{.action} to use the OVHcloud API with the services in your Control Panel.
- You will then be automatically redirected to the previous page of the **POST /domain/zone/{zoneName}/dnssec** API, where you will now be authenticated.
- On the right-hand side of the page, you will then see the form to fill in.
- Fill in the form in the `PATH PARAMETERS` section as follows:
- `zoneName`: Enter the domain name concerned (e.g. `domain.tld`).

![API](/pages/assets/screens/api/post-domain-zone-zonename-dnssec.png){.thumbnail}

Once you have filled in the form, click on the blue `EXECUTE`{.action} button in the bottom right-hand corner of the previously filled-in section.

After a few minutes, you will receive an email from OVHcloud to the contact email address of your OVHcloud DNS zone.  
This email will contain the 4 parameters ("Key Tag" / "Flag" / "Algorithm" / "Public key (encoded in base64)") required to activate DNSSEC with your domain name registrar.

> [!success]
>
> Check your spam folder if you have not received the email within an hour.

Finally, contact your domain name registrar with the 4 settings to enable the DNSSEC option for them.

## Go further

[General information on OVHcloud DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[First Steps with the OVHcloud APIs](/pages/manage_and_operate/api/first-steps)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).