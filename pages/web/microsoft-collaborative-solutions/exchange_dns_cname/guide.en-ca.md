---
title: Creating a CNAME record to add an associated domain
excerpt: Find out about the purpose of a CNAME record, and how to add one at OVHcloud
slug: exchange-add-cname-record-dns
section: 'Getting started with Exchange'
order: 05
---

**Last updated 2018/10/05**

## Objective

When you add a domain name to your Exchange service, you may be required to configure the CNAME entry in your DNS zone. This configuration ensures that you have admin rights for the domain name in question.

**Find out about the purpose of a CNAME record, and how to add one at OVHcloud.**

## Requirements

- You must be logged in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}.
- You need to have admin rights for the Exchange service on your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}.
- You need to have added a domain name to your Exchange service before requesting the addition of a CNAME record.
- You must have the right to modify your domain name’s configuration (via its DNS zone).

## Instructions

### Step 1: Understand the CNAME diagnostic at OVHcloud

The **CNAME** (Canonical Name) diagnostic box appears in certain cases when you declare a domain name on your Exchange service.

Its purpose is to prove that you are the admin of the domain name you would like to declare.

![Exchange](images/cname_exchange_diagnostic.png){.thumbnail}

### Step 2: Retrieve the OVHcloud CNAME information

Go to the `Associated domains`{.action} tab, and click on the red `CNAME`{.action} box to retrieve the information required.

The target of the CNAME record will appear above.

![Exchange](images/cname_exchange_informations.png){.thumbnail}

You must carry out the modifications through whichever interface you use to manage your domain name. Once you have entered this information, know that these changes can take 4-24 hours to fully propagate.

To check that your CNAME record is correct, go back to the `Associated domains`{.action} table for your Exchange service. If the diagnosis box has turned green, your record is correct. If not, then the configuration changes you have made may not have fully propagated.

![Exchange](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.