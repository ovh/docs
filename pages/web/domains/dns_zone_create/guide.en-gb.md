---
title: Create a DNS zone for a domain which is not registered at OVH.
excerpt: Create a DNS zone for a domain which is not registered at OVH.
slug: create_a_dns_zone_for_a_domain_which_is_not_registered_at_ovh
legacy_guide_number: g2229
---


## Prerequisites
To create a DNS zone for a domain which is not registered at OVH, make sure that it meets the following criteria:


- You must not have any existing purchase orders or operations for this domain at OVH
- The domain must exist
- The domain's SOA must be included in its DNS zone




## Step 1: Domain verification

- In the domain section of your control panel, click on "Add DNS zone".



![](images/img_4295.jpg){.thumbnail}
In the "Domain name" section, specify the domain for which you want to create the zone.

![](images/img_4296.jpg){.thumbnail}

## Please note:

- If the domain specified does not meet the prerequisites, you will not be able to create a DNS zone



![](images/img_4297.jpg){.thumbnail}

## Tip:
If you have a domain which does not have a DNS server that you can enter, OVH will let your use temporary DNS servers in order to add the * DNS zone:

- parking1.ovh.net
- parking2.ovh.net

(*) There may be a 48 hour delay before DNS servers are propagated.



## Step 2: Choose zone type
You then have to choose the DNS zone type:

- Minimal: DNS zone with the minimum records that it needs to work (A, MX, CNAME, ...)
- Normal: DNS zone with additional records (CNAME towards POP/IMAP/SMTP server, ...)



![](images/img_4298.jpg){.thumbnail}


## Step 3: Confirmation

- Tick the box "I have read and understood the terms and conditions".
- Then click "Generate purchase order".



![](images/img_4299.jpg){.thumbnail}

- Then click "Settle".



![](images/img_4300.jpg){.thumbnail}

- Once you are on the purchase order, click "Continue".



![](images/img_4301.jpg){.thumbnail}

## Information:
It is completely free to create a DNS zone.

- Enter the security code and confirm.



![](images/img_4302.jpg){.thumbnail}


## Step 4: Confirm the order
You can then see if your purchase order has been validated.

![](images/img_4303.jpg){.thumbnail}

## Information:
After validating your purchase order, there will be a necessary delay of 30 minutes prior to installation.

