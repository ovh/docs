---
title: Creating a secondary DNS on a Dedicated Server
slug: secondary-dns
excerpt: This guide will show you how to create a secondary DNS and add it to your Dedicated Server
section: Network Management
---

**Last updated 2020/07/13**

## Objective

If you want to use your [Dedicated Server](https://www.ovh.com/asia/dedicated-servers/){.external} as the primary DNS for your domain, you can add the domain as a secondary DNS to your server.

**This guide will show you how to create a secondary DNS, and add it to your Dedicated Server.**

## Requirements

* a [Dedicated Server](https://www.ovh.com/asia/dedicated-servers/){.external} with Windows installed
* a domain name
* access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager){.external}


## Instructions

### Obtain a domain verification code

Click the `Dedicated`{.action} menu, then click `Dedicated Servers`{.action} to expand the list of servers in your account:

![Secondary DNS](images/dns2-01_2020.png){.thumbnail}

Next, select the `Secondary DNS`{.action} tab, and click `Add a domain`{.action}:

![Secondary DNS](images/dns2-02_2020.png){.thumbnail}

Enter your domain in the `Domain` field, then click `Next`{.action}:

![Secondary DNS](images/dns2-03_2020.png){.thumbnail}

You will now see a message instructing you to create a TXT record for your domain. Make a note of the sub-domain and target in the instructions, then click `Cancel`{.action}:

![Secondary DNS](images/dns2-04a_2020.png){.thumbnail}

### Verify your domain

Now that you have the details for domain verification, please log into your account with your domain registrar and and create a TXT record with the details in the last step.


### Add the secondary DNS to your server

Click the `Dedicated`{.action} menu, and then click `Dedicated Servers`{.action} to expand the list of servers in your account:

![Secondary DNS](images/dns2-01_2020.png){.thumbnail}

Next, select the `Secondary DNS`{.action} tab, and click `Add a domain`{.action}:

![Secondary DNS](images/dns2-02_2020.png){.thumbnail}

Enter your domain in the `Domain` field, then click `Next`{.action}:

![Secondary DNS](images/dns2-03_2020.png){.thumbnail}

Since the TXT record for your domain has already been created, just click `Next`{.action} to continue:

![Secondary DNS](images/dns2-04b_2020.png){.thumbnail}

Finally, click `Add`{.action} to confirm your entry:

![Secondary DNS](images/dns2-05_2020.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
