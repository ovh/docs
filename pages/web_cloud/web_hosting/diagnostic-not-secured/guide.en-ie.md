---
title: What to do if you get a "Your connection is not private" error?
excerpt: How to react to a security error message on your website
updated: 2021-07-08
---

## Objective <a name="objective"></a>

Several error messages may appear if your website is inaccessible. The examples below indicate that your web hosting plan does not contain any [SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting) (if your website does not display one of the anomalies described in this guide, please refer to the "[Go further](#go-further)" section):

|Browser|Error message concerned|
|-|---|
|Chrome:<br>"Your connection is not private"|![notsecured_chrome](/pages/assets/screens/other/browsers/errors/notsecured-chrome.png){.thumbnail}|
|Firefox:<br>"Warning: Potential Security Risk Ahead"|![notsecured_firefox](/pages/assets/screens/other/browsers/errors/notsecured-firefox.png){.thumbnail}|
|Edge:<br>"Your connection isn't private"|![notsecured_edge](/pages/assets/screens/other/browsers/errors/notsecured-edge.png){.thumbnail}|
|Safari:<br>"This Connection is Not Private"|![notsecured_safari](/pages/assets/screens/other/browsers/errors/notsecured-safari.png){.thumbnail}|

**Find out how to solve SSL-related error messages on your website.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the "[Go further](#go-further)" section of this guide.
>

## Requirements

- Administrative rights to manage your domain name’s [DNS servers](/pages/web_cloud/domains/dns_server_general_information) and [DNS zone](/pages/web_cloud/domains/dns_zone_general_information)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

To solve this issue, you will need to:

1. Determine the hosting plan to which your domain name is linked, in order to intervene on the correct server.
2. Create, activate or renew a [SSL certificate](/pages/web_cloud/web_hosting/ssl_on_webhosting) for your domain name on the concerned hosting plan.

### Step 1: check the hosting plan attached to your domain name

#### Check the hosting IP address

The error messages mentioned [above](#objective) do not necessarily mean that your website is hosted on one of our [Web Cloud offers](/links/web/hosting). For this reason, you will need to check the IP address of the server your [domain name](/links/web/domains) is attached to.

To find the IP address of your [OVHcloud hosting plan](/links/web/hosting), click on `Web Cloud`{.action} in the top of your [OVHcloud Control Panel](/links/manager), then on `Hosting plans`{.action} .

In the `General information`{.action} tab, note the IPV4 and/or IPV6 address of your Web hosting.

![hosting-general-informations](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

#### Check the IP address in the DNS zone

You now need to check that the IP address listed in the [DNS zone](/pages/web_cloud/domains/dns_zone_edit) corresponds to the one of your [Web Cloud hosting plan](/links/web/hosting).

Click on `Domain names`{.action} of your [OVHcloud Control Panel](/links/manager) and select your website’s domain name.

Select the `DNS Zone`{.action} tab and note the target of the `A` record for your domain name:

![zone-dns-ip](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

#### Perform the necessary actions

|Scenario|What to do|
|---|---|
|The IP address listed in the [DNS Zone](/pages/web_cloud/domains/dns_zone_edit) corresponds to your Web Hosting plan’s IP address.|Proceed to [Step 2](#step2).|
|The IP address listed in the zone does not concern any of the Web Hosting plans within your [OVHcloud account](/links/manager), but appears in the [list of our Web Cloud servers](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|Check that you do not have a hosting plan with this IP address within one of your other [OVHcloud customer accounts](/links/manager), if you have several of them. Contact your webmaster or the [OVHcloud partners](/links/partner) for further information.|
|The IP address entered in the zone is not your hosting plan’s one, nor does it appear on the [list of our Web Cloud servers](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|Contact your webmaster or the [OVHcloud partners](/links/partner) for further information.|
|In the `DNS Zone`{.action} tab, a warning indicates that your domain name uses other [DNS](/pages/web_cloud/domains/dns_zone_edit) servers. These appear as "ns **?** .ovh.net" or "dns **?** .ovh.net" (replace "**?**" with the relevant DNS server number):<br><br>![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|You must modify your domain's DNS servers to match the `NS` records of the DNS zone. To perform this operation, follow the instructions of [this guide](/pages/web_cloud/domains/dns_server_edit).|
|In the `DNS Zone`{.action} tab, a message indicates that your domain uses other [DNS](/pages/web_cloud/domains/dns_zone_edit) servers and these do not appear as "ns **?** .ovh.net" or "dns **?**.ovh.net" :<br><br>![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}|Contact your webmaster or the [OVHcloud partners](/links/partner) for further information.|
|Your domain name does not appear in the `Domain names`{.action} section of your [OVHcloud Control Panel](/links/manager).<br><br>Or your domain's `DNS Zone`{.action} tab appears as follows:<br><br>![dns](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}|It means that your domain name is not managed from your [OVHcloud Control Panel](/links/manager).<br><br>Check if it is managed from one of your other [OVHcloud customer accounts](/links/manager), if you have created more than one of them.<br><br>You can also check the registrar of your domain name and its actual DNS servers with our [WHOIS tool](https://www.ovh.co.uk/support/tools/check_whois.pl).<br><br>If necessary, contact your webmaster or the [OVHcloud partners](/links/partner) about this.|

### Step 2: check your hosting plan’s SSL certificate <a name="step2"></a>

In the `General information`{.action} tab of the concerned hosting plan within your [OVHcloud Control Panel](/links/manager), check the `SSL certificate` section:

![ssl-certificate-in-general-tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}

#### Scenario 1: your web hosting plan does not contain any SSL certificate

Activate an [SSL certificate](/links/web/hosting-options-ssl) on your Web Hosting plan by following the instructions in this [guide](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Scenario 2: the SSL certificate on your Web hosting plan does not work

If you generated a **Let's Encrypt SSL certificate**, click on the `Multisite`{.action} tab and follow the instructions of this [guide](/pages/web_cloud/web_hosting/ssl_on_webhosting#enabling-ssl-on-a-multisite) to activate and/or generate the SSL option.

If you **ordered a SSL certificate** of our partner [SECTIGO](https://sectigo.com/){.external}, check if you have received an e-mail offering to renew it.
<br>If necessary, contact the [SECTIGO support team](https://sectigo.com/support){.external} for more informations.

If you **imported a SSL certificate** from another provider, contact its support team.

> [!primary]
>
> To check all the e-mails sent by OVHcloud teams, click on the top right-hand corner of your [OVHcloud Control Panel](/links/manager), then on `Service emails`{.action}:
>
>![right-menu-email-button](/pages/assets/screens/control_panel/product-selection/right-column/right-menu-email-button.png){.thumbnail}
>

## Go further <a name="go-further"></a>

[Managing SSL certificates on a Web Hosting plan](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Activating HTTPS on your website with an SSL certificate](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Resolving a “Site not installed” error](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Fixing the 500 Internal Server Error](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Resolving the most common 1-click module errors](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)
 
For specialized service providers (SEO, IT development, etc.), contact [OVHcloud partners](/links/partner).

If you need assistance using and configuring your OVHcloud solutions, please refer to our [support offers page](/links/support).

Join our [community of users](/links/community).