---
title: "Configure dynamic DNS (DynHost/DynDNS) for your domain name"
excerpt: "Find out how to configure a dynamic DNS record for your OVHcloud domain name"
updated: 2023-06-29
---

## Objective

The **DNS** (**D**omain **N**ame **S**ystem) zone is a domain name’s configuration file. It consists of DNS **records** that map the domain name to various services and functions, for example:

- The IP address (DNS records of type *A* and *AAAA*) of your web hosting must be provided in the zone in order to display your website when entering the domain name in a browser.
- The email servers (DNS records of type *MX*) that should receive emails sent to addresses of this domain name. By configuring MX records, you can receive emails through custom email addresses using your domnain name.
- Information related to the security/authentication of services (web hosting, web server, email server, etc.) associated with your domain name (DNS records of type *SPF*, *DKIM*, *DMARC*, etc.).

For more information on DNS zones and how to edit them in your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), refer to [our DNS documentation](/pages/web/domains/dns_zone_edit).

Dynamically updating a DNS record can prevent interruptions of your web services, in case you do not use a static IP address.

For example, the **DynHost** can be used for a self-hosted game server (located on your company premises or at your home) without a static IP address, meaning an **I**nternet **S**ervice **P**rovider (**ISP**) assigns a new IP address regularly.

**This guide explains how to configure a dynamic DNS record (DynHost) for your OVHcloud domain name.**

## Requirements

- You have access to manage the domain name in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB).
- The domain name has OVHcloud DNS servers configured as its nameservers.
- The DynHost record you are about to create must not already exist as an "A" record in your domain name’s OVHcloud DNS zone.

> [!warning]
>
> - If your domain name does not use OVHcloud DNS servers, please contact the service provider managing its DNS configuration to find out how to proceed.
> 
> - If your domain name is registered with OVHcloud, you can check if it is using our configuration. To do this, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} then go to the `Web Cloud`{.action} section. In the left-hand column, click on the `Domain names`{.action} tab, then select the domain name concerned. On the page that appears, click on the `DNS servers`{.action} tab to view the DNS servers used by your domain name. 
>
> OVHcloud DNS servers have the following name formats: 
>
> - **dnsXX.ovh.net.** and **nsXX.ovh.net.** (where **XX** stands for the number of the specific nameserver) if you do not use the *Anycast DNS* option
> - **dns200.anycast.me.** and **ns200.anycast.me** if you are using the *Anycast DNS* option
> 
> If required, please refer to our [guide on DNS servers](/pages/web/domains/dns_server_general_information) for more information.
>

## Instructions

### Step 1: Create a DynHost username <a name="step1"></a>

To create a DynHost user, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} then go to the `Web Cloud`{.action} section. In the left-hand column, click on the `Domain names`{.action} tab, then select the domain name concerned. On the page that appears, click on the `DynHost`{.action} tab.

![dynhost](images/use-dynhost-step1.png){.thumbnail}

Click on the `Manage access`{.action} button, then `Create a username`{.action}. In the popup window, enter the following information:

|Information|Description|
|---|---|
|Username suffix|Define a suffix for the DynHost username you are creating.|
|Subdomain|Specify the subdomain you want to create the dynamic DNS record for. If you want to manage all the subdomains with a single identifier, just specify `*` in the entry form.|
|Password|Define a password for the DynHost username, then confirm it.|

Once you have filled in all of the required fields, click `Confirm`{.action}. The username will then appear in the table on the current page. Repeat this step if you need additional DynHost usernames.

![dynhost](images/use-dynhost-step2.png){.thumbnail}

### Step 2: Create the dynamic DNS record (DynHost) <a name="step2"></a>

This second step involves creating the DNS record that must be updated dynamically. As a reminder, it must not already exist in your domain name’s OVHcloud DNS zone as an "A" record. For advice on how to check this and delete the A record if necessary, please read our guide "[Editing an OVHcloud DNS zone](/pages/web/domains/dns_zone_edit)".

Once you are ready to create the DynHost record, go to the `DynHost`{.action} tab, then click `Add a DynHost`{.action}. In the popup window, enter the following information:

|Information|Description|
|---|---|
|Subdomain|Enter the subdomain that the DNS record must be dynamically updated for. This subdomain must be identical to the one you entered when you created the DynHost username.|
|Target IP|Enter the IP address (IPv4 only) currently mapped in the DNS record. This is usually the public IP address of your Internet access box or your self-hosted server. In accordance with the DynHost principle, the IP will from now on be updated automatically.|

> [!primary]
>
> Only one **IPv4** address can be used to set up a DynHost. **IPv6** is currently unavailable.
>

Once you have filled in all of the required fields, click `Confirm`{.action}. The DynHost record will then appear in the table on the current page. Repeat this step if you need additional DynHost records.

![dynhost](images/use-dynhost-step3.png){.thumbnail}

### Step 3: Automate the DynHost update

Once you have created the [user](#step1) and the [DynHost record](#step2), you need to automate DNS record updates so that they are performed dynamically. To do this, you will need to use a client software that regularly checks if the destination IP address has changed in order to update it automatically.

> [!warning]
>
> The installation and configuration of software and your devices must be done according to your own knowledge. Below is some information on how to proceed. However, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-gb/directory/) if you encounter any difficulties. We will not be able to assist you in this regard. 
> Find more information in the ["Go further"](#go-further) section of this guide.
>

There are several possibilities for the client software: 

- It can be installed on your server or computer.
- It may already be available in the interface of your Internet router/box if it is compatible. If you experience any difficulties with this configuration, contact the support of your **ISP**.

Once the client has been chosen and installed, you will need to configure it using the information from the DynHost user created earlier in the OVHcloud Control Panel.

Depending on the client you are using, an update URL may be required, in addition to the DynHost username and subdomain concerned. If this is the case, use the URL below, taking care to replace the generic information:

`https://www.ovh.com/nic/update?system=dyndns&hostname=**$HOSTNAME**&myip=**$IP**`

|Information|Replace with|
|---|---|
|$HOSTNAME|The subdomain you are modifying the DNS configuration for|
|$IP|The new target IPv4 address|

You can check if the destination IP address has been updated. To do this, log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external} then go to the `Web Cloud`{.action} section. In the left-hand column, click on the `Domain names`{.action} tab, then select the domain name concerned. On the page that appears, click on the `DynHost`{.action} tab. Check the IP address that appears in the `Target`{.action} column.

> [!warning]
>
> Any changes made to a domain name’s active DNS zone can take between 4 and 24 hours to propagate.
>

![dynhost](images/use-dynhost-step4.png){.thumbnail}

## Go further <a name="go-further"></a>

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>. 
