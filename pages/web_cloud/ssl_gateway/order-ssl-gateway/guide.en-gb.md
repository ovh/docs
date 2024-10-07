---
title: 'How to order an SSL Gateway'
excerpt: 'Find out how to secure connections to your website'
updated: 2024-10-01
---

## Objective

The SSL Gateway solution is designed to give you an SSL certificate for your domain name and hosting service (VPS, mail server, dedicated server, etc.).

> [!warning]
>
> SSL Gateways are not compatible with [OVHcloud web hosting](/links/web/hosting) offers. If you would like to use an SSL certificate for this type of solution, please read our guide on [Managing SSL certificates on a web hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting).
>

**This guide explains how to order an SSL Gateway.**

## Requirements

- An active [domain name](/links/web/domains) or subdomain
- Access to the domain name’s DNS zone

## Instructions

### Order

To order our SSL Gateway solution, [click here](/links/web/ssl-gateway).

Choose your solution, then click `Order now`{.action}.

![order ssl gateway](/pages/assets/screens/website/order/configure-my-ssl-gateway.png){.thumbnail}

On the new page, enter the domain name or subdomain concerned in the `Search for your domain name`{.action} form, then click on the magnifying glass icon on the right.

> [!warning]
>
> - Free offer: Only domain names up to 3 levels (www.domain.tld) are authorized.
>
> - Advanced offer: 4th level domain names (blog.www.domain.tld) and higher are authorized.
>

Our system will then automatically detect your website’s IP address(es) configured on your domain name or subdomain. If you have several IPs, choose one.

> [!warning]
>
> - Even if you have several IP addresses for your website, you can only choose one IP when ordering.
> - If you have the Advanced offer, you can then add up to 2 additional IPs from your [OVHcloud Control Panel](/links/manager).
>

Then choose the location of the data centre where you want to install the SSL Gateway, from the 2 available.

If you wish, and if it is available during the order, tick the `I manage the DNS zone of this domain and authorize OVHcloud to automatically modify the required DNS record`{.action}. The DNS zone associated with your domain name or subdomain will then be automatically updated with the SSL Gateway IP address.

> [!warning]
>
> Any changes to your DNS zone may take up to 24 hours to work, due to the caching on the ISPs.
>

Check that all of your choices are correct on the order page, then click `Continue`{.action}.

Finally, please follow the steps until you pay for your purchase order.

### Configuration of your DNS zone

Once your purchase order has been validated, and if you have not ticked the option `I manage the DNS zone of this domain and authorize OVHcloud to automatically modify the required DNS record`{.action}, you will be sent an email asking you to point your domain name or subdomain to the OVHcloud infrastructure within 3 days.

> [!warning]
>
> Without modifying your DNS zone within 3 days, your order will be cancelled.
>

> [!faq]
>
> Case 1: Your DNS zone is managed by OVHcloud shared DNS servers.
>>
>> - If your NIC handle is an *administrator* or *technical* contact for this DNS zone, you will need to modify it in your [OVHcloud Control Panel](/links/manager).
>> - If you are not an *administrator* or *technical* contact for this DNS zone, contact the person in charge of this DNS zone to modify it.
>>
>> Refer to the instructions in the guide “[Creating an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)” if necessary.
>>
>
> Case 2: Your DNS zone is not managed by OVHcloud shared DNS servers.
>>
>> - In this case, modify the IP in your DNS zone by using your service provider’s interface or configure it on your appropriate DNS server.
>>
>

Once your modification has been processed by our infrastructure, you will receive a confirmation email.

> [!warning]
>
> Any changes to your DNS zone may take up to 24 hours to work, due to the caching on the ISPs.
>

## Go further
 
For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).
 
If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).
 
Join our [community of users](/links/community).
