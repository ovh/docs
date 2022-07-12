---
title: Sichern des Prism Central-Webzugriffs (EN)
slug: nutanix-prism-web-ui-security
routes:
    canonical: 'https://docs.ovh.com/gb/en/nutanix/nutanix-prism-web-ui-security/'
excerpt: Find out how to restrict Prism Central Web access
section: Netzwerk und Sicherheit
order: 05
---

**Last updated 11th January 2022**

## Objective

After delivery, Prism Central is accessible on the public Internet. Access restriction to one or more IP addresses can be achieved through the [OVHcloud Load Balancer](https://www.ovh.de/loesungen/load-balancer/){.external}.

**This guide explains how to secure access to Prism Central.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en/directory/) if you have difficulties or doubts concerning the administration, usage or implementation of services on a server.
>

## Requirements

- A Nutanix cluster in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)

## Instructions

### Step 1: Find the relevant Load Balancer

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) and open the Nutanix cluster vRack configuration page.

Identify the name of your Load Balancer.

![vRack image](images/vRack1.png){.thumbnail}

### Step 2: Access your Load Balancer front-ends

Select your Load Balancer identified in the previous step.

![IPLB Access](images/iplb1.png){.thumbnail}

Open the `Front-ends`{.action} tab.

![IPLB Front-Ends](images/iplb2.png){.thumbnail}

### Step 3: Edit the Prism Central front-end

Click on the `...`{.action} button in the table and select `Edit`{.action}.

![edit Front-End Prism Central](images/iplb3.png){.thumbnail}

### Step 4: Add the authorised IPs

In the advanced settings, you can now add your public ISP IP address or any IP addresses from which acesss should be granted to Prism Central Web.

![edit Front-End Prism Central](images/iplb4.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
