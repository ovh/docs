---
title: What to do if you get a "Your connection is not private" error?
excerpt: How to react to a security error message on your website
updated: 2021-07-08
---

## Objective <a name="objective"></a>

Several error messages may appear if your website is inaccessible. The examples below indicate that your Web Hosting plan does not contain any [SSL certificate](ssl_on_webhosting1.) (if your website does not display one of the anomalies described in this guide, please refer to the "[Go further](diagnostic-not-secured_#go-further.)" section): 

|Browser|Error message concerned|
|-|---|
|Chrome:<br>"Your connection is not private"|![notsecured_chrome](notsecured-chrome.png){.thumbnail}|
|Firefox:<br>"Warning: Potential Security Risk Ahead"|![notsecured_firefox](notsecured-firefox.png){.thumbnail}|
|Edge:<br>"Your connection isn't private"|![notsecured_edge](notsecured-edge.png){.thumbnail}|
|Safari:<br>"This Connection is Not Private"|![notsecured_safari](notsecured-safari.png){.thumbnail}|

**Find out how to solve SSL-related error messages on your website.**

> [!warning]
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend that you contact a [specialist service provider](partner.) and/or discuss the issue with our community on if you have difficulties or doubts. You can find more information in the [Go further](diagnostic-not-secured_#go-further.) section of this guide.
>

## Requirements

- control over your domain name’s servers and [DNS zone](dns_zone_edit#understanding-dns.)
- access to the [OVHcloud Control Panel](manager.)

## Instructions

To solve this issue, you will need to:

1. determine the hosting plan to which your domain name is linked, in order to intervene on the correct server;
2. create, activate or renew a [SSL certificate](ssl_on_webhosting1.) for your domain name on the concerned hosting plan.

### Step 1: check the hosting plan attached to your domain name

#### Check the hosting IP address

The error messages mentioned [above](#objective.) do not necessarily mean that your website is hosted on one of our [Web Cloud offers](hosting.). For this reason, you will need to check the IP address of the server your [domain name](domains.) is attached to.

To find the IP address of your [OVHcloud hosting plan](hosting.), click on `Web Cloud`{.action} in the top of your [OVHcloud Control Panel](manager.), then on `Hosting plans`{.action}.

In the `General information`{.action} tab, note the IPv4 and/or IPv6 address of your web hosting.

![hosting-general-informations](find-ipv4-and-ipv6.png){.thumbnail}

#### Check the IP address in the DNS zone

You now need to check that the IP address listed in the [DNS zone](dns_zone_edit1.) corresponds to the one of your [OVHcloud Web Hosting plan](hosting.).

Click on `Domain names`{.action} of your [OVHcloud Control Panel](manager.) and select your website’s domain name.

Select the `DNS zone`{.action} tab and note the target of the `A` record for your domain name:

![zone-dns-ip](dashboard-entry-a.png){.thumbnail}

#### Perform the necessary actions

|Scenario|What to do|
|---|---|
|The IP address listed in the [DNS Zone](dns_zone_edit1.) corresponds to your Web Hosting plan’s IP address.|Proceed to [Step 2](diagnostic-not-secured_#step2.).|
|The IP address listed in the zone does not concern any of the Web Hosting plans within your [OVHcloud account](manager.), but appears in the [list of our Web Cloud servers](clusters_and_shared_hosting_IP1.).|Check that you do not have a hosting plan with this IP address within one of your other [OVHcloud customer accounts](manager.), if you have several of them. Contact your webmaster or the [OVHcloud partners](partner.) for further information.|
|The IP address entered in the zone is not your hosting plan’s one, nor does it appear on the [list of our Web Cloud servers](clusters_and_shared_hosting_IP1.).|Contact your webmaster or the [OVHcloud partners](partner.) for further information.|
|In the `DNS Zone`{.action} tab, a warning indicates that your domain name uses other [DNS](dns_zone_edit#understanding-dns.) servers. These appear as "ns **?** .ovh.net" or "dns **?** .ovh.net" (replace the "**?**" with the relevant DNS server number):<br><br>![warning_other_ovh_dns_srv](message-other-ovh-dns-servers.png){.thumbnail}|You must modify your domain's DNS servers to match the `NS` records of the DNS zone. To perform this operation, follow the instructions of [this guide](dns_server_general_information#modifying-dns-servers.).|
|In the `DNS Zone`{.action} tab, a message indicates that your domain uses other [DNS](dns_zone_edit#understanding-dns.) servers and these do not appear as "ns **?** .ovh.net" or "dns **?**.ovh.net" :<br><br>![warning_external_dns_srv](message-external-dns-servers.png){.thumbnail}|Contact your webmaster or the [OVHcloud partners](partner.) for further information.|
|Your domain name does not appear in the `Domain names`{.action} section of your [OVHcloud Control Panel](manager.).<br><br>Or your domain's `DNS Zone`{.action} tab appears as follows:<br><br>![dns](zone-without-domain-top-of-the-page.png){.thumbnail}|It means that your domain name is not managed from your [OVHcloud Control Panel](manager.).<br><br>Check if it is managed from one of your other [OVHcloud customer accounts](manager.), if you have created more than one of them.<br><br>You can also check the registrar of your domain name and its actual DNS servers with our [WHOIS tool](https://www.ovh.co.uk/support/tools/check_whois.pl).<br><br>If necessary, contact your webmaster or the [OVHcloud partners](partner.) about this.|

### Step 2: check your Web Hosting plan’s SSL certificate <a name="step2"></a>

In the `General information`{.action} tab of the concerned hosting plan within your [OVHcloud Control Panel](manager.), check the `SSL certificate` section:

![ssl-certificate-in-general-tab](no-ssl-certificate.png){.thumbnail}

#### Scenario 1: your Web Hosting plan does not contain any SSL certificate

Activate an [SSL certificate](hosting-options-ssl.) on your Web Hosting plan by following the instructions in this [guide](ssl_on_webhosting1.).

#### Scenario 2: the SSL certificate on your Web Hosting plan does not work

If you have **generated a Let's Encrypt SSL certificate**, click on the `Multisite`{.action} tab and follow the instructions of this [guide](ssl_on_webhosting#enabling-ssl-on-a-multisite.) to activate and/or regenerate the SSL option.

If you **ordered a SSL certificate** of our partner [SECTIGO](https://sectigo.com/){.external}, check if you have received an email offering to renew it.
<br>If necessary, contact the [SECTIGO support team](https://sectigo.com/support){.external} for more information.

If you have **imported a SSL certificate** from another provider, contact the appropriate support team.

> [!primary]
>
> To check all the emails sent by OVHcloud teams, click on the top right-hand corner of your [OVHcloud Control Panel](manager.), then on `Service emails`{.action}:
>
>![right-menu-email-button](right-menu-email-button.png){.thumbnail}
>

## Go further <a name="go-further"></a>

[Managing SSL certificates on a Web Hosting plan](ssl_on_webhosting1.)

[Activating HTTPS on your website with an SSL certificate](ssl-activate-https-website1.)

[Resolving a “Site not installed” error](multisites_website_not_installed1.)

[Fixing the 500 Internal Server Error](diagnostic_fix_500_internal_server_error1.)

[Resolving the most common 1-click module errors](diagnostic_errors_module1clic1.)
 
For specialised services (SEO, development, etc.), contact the [OVHcloud partners](partner.).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](support.).

Join our community of users on <https://community.ovh.com/en/>.