---
title: "Geolocating your website in a specific country"
excerpt: "Find out how to geolocate your website using our geolocated IP addresses"
updated: 2022-12-22
---

  
## Objective

Search engines (Google, Bing, Yahoo, etc.) use robots in order to index and rank websites. They prioritise geolocated sites in the country you are searching from.

**Example**: If you search through a search engine and are located in England, geolocated websites in England will show up higher in search results than other websites.

This geolocation is based on the IP address of the hosting plan where your website is located.

The geolocation option on your hosting can be useful for SEO if your website is mainly visited in a country different from where your shared hosting is located.

**This guide explains how to geolocate your website using our geolocated IP addresses.**

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager)
- An [OVHcloud Web Hosting plan](/links/web/hosting){.external}
- One or more [domain names](/links/web/domains){.external}

## Instructions

For websites hosted on the OVHcloud shared hosting infrastructure which are mainly accessed by international visitors, we offer a geolocation by IP address option. It allows for a better search ranking in the country where the IP address you have selected is located.

To use the IP geolocation option, log in to your [OVHcloud Control Panel](/links/manager){.external}.

Once you have logged in, go to the `Web Cloud`{.action} section, click on `Hosting plans`{.action} then select the relevant hosting plan from the list.<br>
Then click on the `Multisite`{.action} tab and the `...`{.action} to the right of your domain name in the table. Finally, click `Modify domain`{.action}.

![hosting multisites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain.png){.thumbnail}

In the window that pops up, tick the `Country IP`{.action} box to open the drop-down menu.

![geolocation option](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/country-ip-selection.png){.thumbnail}

Choose the IP address of the country for which you want to geolocate your site, from the 12 countries offered: *Czech Republic, Finland, France, Germany, Ireland, Italy, Lithuania, Netherlands, Poland, Portugal, Spain, United Kingdom*.

Click `Next`{.action} and then click `Confirm`{.action} from the summary window.

>[!primary]
>
> If your domain name’s active DNS zone is managed in your [OVHcloud Control Panel](/links/manager), the A record in your domain name’s DNS zone will automatically change. You can check that the IP address has been updated using our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).
>
> Otherwise, you will need to make the change manually with the provider that manages your domain name’s active DNS zone. Find [here](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) the documentation that lists all the IP addresses in our OVHcloud shared hosting infrastructure.
>
> In any case, you will need to wait between **4 and 24 hours** for the changes to propagate fully, and be visible on the internet.
>

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).