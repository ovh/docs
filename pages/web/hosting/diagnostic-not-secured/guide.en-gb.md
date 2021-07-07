---
title: What to do if you get a "Your connection is not private" error?
slug: site-unsafe-connection
excerpt: How to react to a security error message on your website
section: Diagnostic
---

**Last updated 06/07/2021**
 
## Objective <a name="objective"></a>

Several error messages may appear if your website is inaccessible. The examples below indicate that your web hosting plan does not contain any [SSL certificate](../ssl-certificates-on-web-hosting-plans/) (if your website does not display one of the anomalies described in this guide, please refer to the "[Go further](#aller-plus-loin)" section of this guide): 

|Browser|Error message concerned|
|-|---|
|On Chrome:<br>"Your connection is not private"|![notsecured_chrome](images/notsecured_chrome.png){.thumbnail}|
|On Firefox:<br>"Warning: Potential Security Risk Ahead"|![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}|
|On Edge:<br>"Your connection isn't private"|![notsecured_edge](images/notsecured_edge.png){.thumbnail}|
|On Safari:<br>"This Connection is Not Private"|![notsecured_safari](images/notsecured_safari.png){.thumbnail}|

**Find out how to solve SSL-related error messages on your website.**

> [!warning]
>
> OVHcloud provides services which you are responsible for with regard to their configuration and management. You are therefore responsible for ensuring they function correctly.
>
> We have provided you with this guide in order to help you with common tasks. Nevertheless, we recommend contacting a specialist provider and/or the service’s software publisher if you encounter any difficulties. We will not be able to assist you ourselves. You can find more information in the "[Go further](#gofurther)" section of this guide.
>

## Requirements

- You must have control over your domain name’s servers and [DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/#understanding-dns)
- access to the [OVHcloud Control Panel]([OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))

## Instructions

To solve this issue, you will need to:

1. determine the hosting plan to which your domain name is linked, in order to intervene on the correct server;
2. create, activate or renew a [SSL certificate](../ssl-certificates-on-web-hosting-plans/) for your domain name on the concerned hosting plan.

### Step 1: check the hosting plan attached to your domain name

#### Check the hosting IP address

The error messages mentioned [above](#objective) do not necessarily mean that your website is hosted on one of our [Web Cloud offers](https://www.ovh.com/fr/hebergement-web/). For this reason, you will need to check the IP address of the server your [domain name](https://www.ovh.co.uk/domains/) is attached to.

To find the IP address of your [OVHcloud hosting plan](https://www.ovh.co.uk/web-hosting/), click on `Web Cloud`{.action} in the top of your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), then on `Hosting plans`{.action} in the left-hand menu.

In the `General information`{.action} tab, note the IPV4 and/or IPV6 address of your Web hosting.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### Check the IP address in the DNS zone

You now need to check that the IP address listed in the [DNS zone](../../domains/web_hosting_how_to_edit_my_dns_zone/) corresponds to the one of your [Web Cloud hosting plan](https://www.ovh.co.uk/web-hosting/).

Click on `Domain names`{.action} in the top left-hand corner of your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and select your website’s domain name.

Select the `DNS zone`{.action} tab and note the target of the `A` record for your domain name:

![zone-dns-ip](images/zone-dns-ip.png){.thumbnail}

#### Perform the necessary actions

|Scenario|What to do|
|---|---|
|The IP address listed in the DNS zone corresponds to your web hosting plan’s IP address.|Proceed to [Step 2](#step2).|
|The IP address entered in the zone is not your hosting plan’s one, nor does it appear in the [list of our Web Cloud servers](../list-of-ip-addresses-of-web-hosting-clusters/).|Contact your webmaster or [OVHcloud partners](https://partner.ovhcloud.com/en-gb/) for more informations.|
|The IP address listed in the zone does not apply to any hosting services within your [OVHcloud account](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), but does appear in the [list of our Web Cloud servers](../list-of-ip-addresses-of-web-hosting-clusters/).|Check that you do not have a hosting plan with this IP address in one of your other [OVHcloud customer accounts](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), if you have several of them. Contact your webmaster or [OVHcloud partners](https://partner.ovhcloud.com/en-gb/) for further information.|
|This warning appears in the `DNS zone`{.action} tab:<br><br>![avertissement_zonedns_pas_sur_srv_dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|For this reason, you will need to modify your domain’s DNS servers so that they match the DNS records for the zone’s `NS` type. To do this, follow the instructions in [this guide](../../domains/generalites-serveurs-dns/).|
|Your domain name does not appear in the `Domains`{.action} section of your ><br>Or your domain's DNS `Zone`{.action} tab will appear as follows:<br><br>![zonedns_ndd_pas_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|This means that your domain is not managed from your OVHcloud Control Panel.<br><br>Determine your registrar using our ><br>You can find and modify the relevant DNS zone accordingly, following [this guide](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe).|
|DNS `Servers`{.action} do not appear as ns **?** .ovh.net\` or \`dns **?** .ovh.net\` (replace the \`?**\`** \`by the relevant DNS server number).<br><br>This means that your domain’s active DNS `zone`{.action} is not located on your ><br>![external-dns-servers](images/external-dns-servers.png){.thumbnail}|Contact your webmaster or OVHcloud[ ](https://partner.ovhcloud.com/en-gb/)partners for more information.|

### Step 2: check your hosting plan’s SSL certificate <a name="step2"></a>

In the General `information`{.action} tab of your OVHcloud hosting plan, check the `SSL` certificate section:

![ssl-certificate-in-general-tab](images/ssl-certificate-in-general-tab.png){.thumbnail}

#### Scenario 1: your web hosting plan does not contain an SSL certificate

Activate an SSL [certificate](https://www.ovh.com/fr/ssl/) on your Web Hosting plan by following the instructions in this [guide](../les-certificats-ssl-sur-les-hebergements-web/).

#### Scenario 2: the SSL certificate on your Web Hosting plan does not work

If you have generated a Let's Encrypt SSL **certificate**, activate the SSL option in your Web Hosting plan's `Multisite`{.action}, following the instructions in this [guide](../les-certificats-ssl-sur-les-hebergements-web/#activer-un-certificat-ssl-sur-un-multisite).

If you have an imported** SSL **certificate and it does not work, contact its provider.

If you have ordered one of our partner's paid** SSL **certificates >If needed, contact SECTIGO [support](https://sectigo.com/support){.external} for this.

> [!primary]
>
> To find all emails sent by our services, click on the top right-hand corner of your OVHcloud Control [Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), then on Service `emails`{.action}:
>
>![right-menu-email-button](images/right-menu-email-button.png){.thumbnail}
>

## Go further <a name="gofurther"></a>

[Managing an SSL certificate on a Web Hosting plan](../les-certificats-ssl-sur-les-hebergements-web/)

[Activating HTTPS on your website with an SSL certificate](../passer-site-internet-https-ssl/)

[Resolve the “Website not installed” error](../erreur-site-non-installe/)

[How to diagnose a blank page?](../comment-diagnostiquer-page-blanche/)

[What do I do if I get a 500 Internal Server Error?](../erreur-500-internal-server-error/)

[Resolve the most common 1-click module errors](../erreurs-frequentes-modules-en-1-clic/)
 
For specialised services (SEO, development, etc.), contact [OVHcloud](https://partner.ovhcloud.com/en-gb/) partners.

If you would like assistance using and configuring your OVHcloud solutions, please refer to our support [offers](https://www.ovhcloud.com/fr/support-levels/).

Join our community of users on <https://community.ovh.com>.