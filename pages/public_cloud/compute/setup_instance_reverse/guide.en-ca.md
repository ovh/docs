---
title: Configuring the reverse DNS of a Public Cloud instance
excerpt: Find out how to set up the reverse DNS resolution
updated: 2021-11-12
---


## Objective

Reverse DNS (*rDNS*) is the complement to "forward" DNS resolution which resolves domain names into IP addresses. With reverse DNS resolution, an IP address can resolve into the domain name (or host name) it is mapped to. This means that DNS queries of the associated IP address will return this domain name.

Configuring the reverse DNS resolution for an instance is especially useful when sending emails. A mail server's validation by spam protection systems will improve if a DNS lookup of the IP address resolves properly.

**This guide explains how to configure the reverse DNS path for the IP address(es) of your Public Cloud instance.**

## Requirements

- A [Public Cloud instance](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account
- A domain name with its `A` record pointing to the instance
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)

## Instructions

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) and open the `IP`{.action} section in the left-hand menu.

In the table on this page, your eligible services will be listed. You can filter for your Public Cloud project ID using the drop-down menu under **Services**.

![Reverse DNS](images/reversecp01.png){.thumbnail}

Click on `...`{.action} in the row of the IP address concerned and select `Modify the reverse path`{.action}.

![Reverse DNS](images/reversecp02.png){.thumbnail}

In the new window, enter your reverse path and click on `Confirm`{.action}.

You can also edit the reverse path directly via the icon in the **Reverse DNS** column of the table.

> [!primary]
>
If the modification does not work as expected, verify that the `A` record is correctly configured in the DNS zone of your domain name. Bear in mind that it might take up to 24 hours for DNS zone changes to be effective, in case you have only recently edited the `A` record.
>
If the domain name is managed by OVHcloud as its registrar and it uses OVHcloud DNS servers, you can refer to [our DNS zone guide](/pages/web_cloud/domains/dns_zone_edit).
>

## Go further <a name="gofurther"></a>

[First steps with Public Cloud instances](/pages/public_cloud/compute/public-cloud-first-steps)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

Join our community of users on <https://community.ovh.com/en/>.
