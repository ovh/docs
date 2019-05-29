---
title: 'Creating a CNAME record to add an associated domain'
slug: exchange_20132016_how_to_add_a_cname_record
excerpt: 'Find out about the purpose of a CNAME record, and how to add one at OVH'
section: 'Getting started'
---

**Last updated 26th March 2019**

## Objective

When you add a domain name to your email solution, you may be required to configure the CNAME record in your DNS zone. This configuration ensures that you have admin rights for the domain name in question.

**Find out about the purpose of a CNAME record, and how to add one at OVH.**

## Requirements

- an OVH email solution
- a domain name added to your email solution requesting the addition of a CNAME record
- the right to modify your domain name’s configuration (via its DNS zone)
- access to the `Web`{.action} section of the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}

## Instructions

### Step 1: Understand the CNAME diagnostic at OVH.

The **CNAME** (Canonical Name) diagnostic box appears in some specific cases, when you declare a domain name on your email solution.

Its purpose is to prove that you are the admin of the domain name you would like to declare.

This diagnostic can appear for the following reasons:

- The domain name is not registered with OVH.
- The domain name is not administrated by your NIC handle.
- The domain name declared does not use OVH configuration (on its DNS servers).

![cnamedomainemail](images/cname_exchange_diagnostic.png){.thumbnail}

### Step 2: Retrieve the OVH CNAME information.

Go to the `Associated domains`{.action} tab, and click on the red `CNAME`{.action} box to retrieve the information required.

The CNAME record will appear on the image.

![cnamedomainemail](images/cname_exchange_informations.png){.thumbnail}

At this point, there will be two options:

- **If your domain uses OVH configuration**, you can make the changes listed below in the OVH Control Panel.

- **If your domain name does not use OVH configuration**, you must carry out the modifications in the interface you use to manage your domain name’s configuration.

> [!primary]
>
> If your domain name is registered with OVH, you can check if it is using the OVH configuration in the OVH Control Panel. To do this, go to the `DNS servers`{.action} tab, and select the domain name concerned.
>

### Step 3: Create the CNAME record in the OVH configuration.

Click `Domains`{.action} in the left-hand services bar in the OVH Control Panel, then on the domain name concerned. Then select the `DNS zone`{.action} tab.

A table should appear. This will display your OVH domain’s configuration. It is made up of several DNS records, one per row in the table.

To add a CNAME record, click `Add an entry`{.action}.

![cnamedomainemail](images/cname_exchange_add_entry_step1.png){.thumbnail}

In the window that opens, you will be offered several DNS records. Click `CNAME`{.action}, then replace the records with information taken from the diagnostic.

![cnamedomainemail](images/cname_add_entry_dns_zone.png){.thumbnail}

Once you have entered this information, click `Next`{.action}. Check that the information you have entered is correct, then click `Confirm`{.action}.

> [!primary]
>
> The change can take between 4 and a maximum of 24 hours to propagate fully.
>

To check that your CNAME record is correct, go back to the `Associated domains`{.action} table for your email solution. If the box has turned green, your domain name is correctly added. If not, then the configuration changes you have made may not have propagated fully.

![cnamedomainemail](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.