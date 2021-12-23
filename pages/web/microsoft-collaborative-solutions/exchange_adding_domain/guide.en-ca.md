---
title: Adding a domain name to your Exchange service
slug: adding-domain-exchange
excerpt: Find out how to add a domain name to your Exchange service
section: Getting started with Exchange
order: 4
---

**Last updated 2018/10/05**

## Objective

To use the accounts included with an Exchange service, you will need to add a domain name to it. You can also add several domain names to an Exchange service. 

**Find out how to add a domain name to your Exchange service.**

## Requirements

- You must have an [Exchange solution](https://www.ovhcloud.com/en-ca/emails/hosted-exchange/){.external}.
- You must have one or several domain names.
- You must have the right to modify your domain name’s configuration (via its DNS zone).
- You must be logged in to your [OVH Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}.

## Instructions

### Step 1: Log in to your service’s interface

Once your Exchange service has been created and is available, you can manage it from your [OVH Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}.

To do this, log in and click `Microsoft`{.action}, then `Exchange`{.action} in the left-hand services bar. Then select the name of the Exchange service concerned.

> [!primary]
>
> The name of an Exchange service in your OVH Control Panel starts with **hostedbhs-**, contains a part of your NIC handle, and ends with a figure (1 for the first Hosted installed, 2 for the second, etc.).
>

### Step 2: Add a domain name

To add a domain name, click on the `Associated domains`{.action} tab. The table shows the domain names currently associated with your Exchange service. To add a new domain name to it, click `Add a domain`{.action}.

> [!warning]
>
> In the directory, all of the addresses created on your Exchange service can view all other addresses associated with it, including those that have different domain names. To stop different domain names from being displayed this way, you will need to order a new [Exchange solution](https://www.ovhcloud.com/en-ca/emails/hosted-exchange/){.external} for the domain name(s) concerned.
>

![Exchange](images/add_domain_exchange_step1.png){.thumbnail}

In the window, enter the domain name of your choice. You should be able to modify the domain name’s configuration (its DNS zone) so that the service can function correctly.

Once you have made this choice, click on the `Next`{.action} button.

![Exchange](images/add_domain_exchange_step2-ca.png){.thumbnail}

The window will then show information on configuring modes and domain name configuration. The mode choice is not definitive, and can be modified from the OVH Control Panel later on.

|Mode|Description|
|---|---|
|Authoritative|Choose this if you only use the Exchange solution with your domain name. In authoritative mode, you cannot use another email solution with your Exchange service.|
|Nonauthoritative|Choose this if you use your Exchange solution domain name with another email solution. You must enter details on your other email solution’s server.|

Click on the `Next`{.action} button to continue adding the domain.

![Exchange](images/add_domain_exchange_step3-ca.png){.thumbnail}

At the end of the configuration process, we will ask you to check the information entered, then click on the `Confirm`{.action} button to confirm that you wish to add the domain. Repeat this step as many times as required, if you wish to add several domain names.

### Step 3: Configure the domain name (DNS)

Once the domain name has been added as an associated domain, go back to the `Associated domains`{.action} table for your Exchange service. A red box will show that the domain name is correctly configured.

Click on the red `CNAME`{.action} box to retrieve the information required. The target of the CNAME record will appear above. You must carry out the modifications through whichever interface you use to manage your domain name. Once you have entered this information, know that these changes can take 4-24 hours to fully propagate. 

![Exchange](images/add_domain_exchange_step4-ca.png){.thumbnail}

To check that your CNAME record is correct, go back to the `Associated domains`{.action} table for your Exchange service. If the diagnosis box has turned green, your record is correct.

If the box is red, click on it to view the modifications that you must make. You must carry out the modifications in the interface you use to manage your domain name’s configuration.

To check that your domain name is correctly configured, go back to the `Associated domains`{.action} table for your Exchange service. If the box has turned green, your domain name is correctly configured. If not, then the configuration changes you have made may not have propagated fully.

![emailpro](images/add_domain_exchange_step5-ca.png){.thumbnail}

### Step 4: Configure and use the accounts

Now that you have added the domain names to your Exchange service, you can configure your Exchange accounts to be linked to them. You can do this from the `Email accounts`{.action} tab. If needed, you can order additional accounts using the `Order accounts`{.action} or `Add an account`{.action} buttons.

As a reminder, all of the addresses created on your Exchange service can view all other associated addresses, including those that have different domain names.

Once you have finished configuring your accounts, you can now start using them. To do this, OVH offers the *webmail* **Outlook Web Application** (OWA) which you can access via the following link: <https://ex.mail.ovh.ca/>. To optimise the way you use your Exchange email address on an email client, ensure that it is compatible with the service. If you would like to configure your email address on an email client, a device such as a smartphone or tablet, or if you would like assistance regarding Exchange features, please refer to the documentation accessible via this portal: <https://docs.ovh.com/ca/en/microsoft-collaborative-solutions/>.

## Go further

Join our community of users on <https://community.ovh.com/en/>.