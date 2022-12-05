---
title: Creating a CNAME record to add an associated domain
excerpt: Find out about the purpose of a CNAME record, and how to add one at OVHcloud
slug: exchange_20132016_how_to_add_a_cname_record
section: 'Getting started with Exchange'
order: 05
---

**Last updated 22nd January 2018**

## Objective

When you add a domain name to your Exchange service, you may be required to configure the CNAME entry in your DNS zone. This configuration ensures that you have admin rights for the domain name in question.

**Find out about the purpose of a CNAME record, and how to add one at OVHcloud.**

## Requirements

- You must be logged in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- You need to have admin rights for the Exchange service on your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- You need to have added a domain name to your Exchange service before requesting the addition of a CNAME record.
- You must have the right to modify your domain name’s configuration (via its DNS zone).

## Instructions

### Step 1: Understand the CNAME diagnostic at OVHcloud

The **CNAME** (Canonical Name) diagnostic box appears in certain cases when you declare a domain name on your Exchange service.

Its purpose is to prove that you are the admin of the domain name you would like to declare.

This diagnostic can appear for the following situations:

- The domain name is not registered with OVHcloud.
- The domain name is not administrated by your NIC handle.
- The domain name declared is not configured to use OVHcloud's DNS servers.

![Exchange](images/cname_exchange_diagnostic.png){.thumbnail}

### Step 2: Retrieve the OVHcloud CNAME information

Go to the `Associated domains`{.action} tab, and click on the red `CNAME`{.action} box to retrieve the information required.

The target of the CNAME record will appear above.

![Exchange](images/cname_exchange_informations.png){.thumbnail}

At this point, there will be two options:

- **If your domain uses the OVHcloud configuration**, you can make the changes listed below through your OVHcloud Control Panel.

- **If your domain name does not use the OVHcloud configuration**, you must carry out the modifications through whichever interface you use to manage your domain name.

> [!primary]
>
> If your domain name is registered with OVHcloud, you can check if it is using the OVHcloud configuration in your Control Panel. To do this, go to the `DNS servers`{.action} tab, and select the domain name concerned.
>

### Step 3: Create the CNAME record in the OVHcloud configuration

Click `Domains`{.action} in the Control Panel, then on the domain name concerned. Then select the `DNS zone`{.action} tab.

A table should appear. This will display your OVHcloud domain’s configuration. It is made up of several DNS records, one per row in the table.

To add a CNAME record, click `Add an entry`{.action}.

![Exchange](images/cname_exchange_add_entry_step1.png){.thumbnail}

In the window that opens, you will be offered several DNS record type. Select `CNAME`{.action}, then add the target from your earlier Exchange diagnostic.

![Exchange](images/cname_add_entry_dns_zone.png){.thumbnail}

Once you have entered this information, click `Next`{.action}. Check that the information you have entered is correct, then click `Confirm`{.action}.

> [!primary]
>
> These changes can take 4-24 hours to fully propagate.
>

To check that your CNAME record is correct, go back to the `Associated domains`{.action} table for your Exchange service. If the diagnosis box has turned green, your record is correct. If not, then the configuration changes you have made may not have fully propagated.

![Exchange](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
