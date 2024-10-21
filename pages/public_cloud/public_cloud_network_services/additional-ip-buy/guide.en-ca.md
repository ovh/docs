---
title: Buying an Additional IP
excerpt: "Find out how to order Additional IP addresses for your instances"
updated: 2023-01-04
---

> [!primary]
>
> Since October 6th, 2022 our service "Failover IP" is named [Additional IP](https://www.ovhcloud.com/en-ca/network/additional-ip/). This renaming has no effect on its technical features.
>

## Objective

You may need to configure an Additional IP address on your instances for different reasons. For example, you may be:

- Hosting several websites on your instance.
- Hosting international projects.

To meet these needs, you can order an Additional IP address for your Public Cloud instances.

These Additional IP addresses can only be migrated to instances in the same project.

**This guide explains how to obtain an Additional IP for an OVHcloud Public Cloud project.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}
- A [Public Cloud instance](/pages/public_cloud/compute/public-cloud-first-steps) in your Public Cloud project

> [!warning]
> This feature is currently not available for Metal instances.
>

## Instructions

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) and open your `Public Cloud`{.action} project.

In the left-hand menu, open `Public IPs`{.action} under `Network`.

Open the `Additional IP`{.action} tab and click on the `Actions`{.action} button. Select `Add a new IP`{.action}.

![Adding IP](images/buyaddIP_01.png){.thumbnail}

In step 1 of the order process, click on `Next`{.action}.

![Adding IP](images/buyaddIP_02.png){.thumbnail}

Step 2 allows you to select a country for the new IP address.

![Adding IP](images/buyaddIP_03.png){.thumbnail}

The following countries are available for IP geolocation:

|          |          |          |           |                |
|:--------:|:--------:|:--------:|:---------:|:--------------:|
| Belgium  | Finland  | France   | Germany   | Czech Republic |
| Ireland  |  Italy   | Lithuania | Netherlands | United Kingdom    |
| Portugal |  Spain   |  Poland |  Switzerland |                 |

> [!primary] **Availability**
> 
> Some of these countries may not be listed, depending on the current availability of IPv4 addresses.
> 

> [!primary] **Location**
>
> IP geolocation is solely based on benchmark organisations.
> 
> For example, [RIPE NCC](https://www.ripe.net/){.external} is serving Europe as the Regional Internet Registry.
>
> If you need to verify geolocation otherwise, contact the concerned organisations directly. OVHcloud cannot be involved in this regard.

Once you have selected a country, click on `Next`{.action}.

In the final step, select your instance from the drop-down menu. Then click on `Generate purchase order`{.action}.

![Adding IP](images/buyaddIP_04.png){.thumbnail}

The purchase order will open automatically for you to complete your purchase.

See our guide on [managing OVHcloud orders](/pages/account_and_service_management/managing_billing_payments_and_services/managing_ovh_orders) for more details.

You can also find the purchase order in your Control Panel, by going to the `Dashboard`{.action} section and clicking on `View my orders`{.action}.

The next step will be the IP configuration in your OS; please refer to our [guide](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance).

## Go further

[Configuring an Additional IP](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ca/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
