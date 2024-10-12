---
title: "Managing SSL certificates on a web hosting plan"
excerpt: "Find out how to configure your SSL certificate on an OVHcloud web hosting plan"
updated: 2023-12-14
---

## Objective

You can manage an SSL certificate on your web hosting plan. You can either order a certificate through OVHcloud, or you can order one elsewhere and import it on to your web hosting plan. Once you have set it up, it will provide one or more of your websites with a secure SSL connection, enabling the websites to work in HTTPS. 

**Find out how to manage an SSL certificate on an OVHcloud web hosting plan.**

## Requirements

- An [OVHcloud web hosting plan](/links/web/hosting)
- At least one [domain name](/links/web/domains)
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

You will need to follow several steps to generate an SSL certificate on your OVHcloud web hosting plan. We recommend following the 3 steps below **in order**.

[1. Enabling SSL on a multisite](#multisite): You can give several of your multisites a secure SSL connection, depending on the web hosting plan and the certificate type.

[2. Enabling SSL on your web hosting plan](#enablessl): Helps you activate an SSL certificate on your web hosting plan. This can be a free or paid certificate ordered from OVHcloud, or you can import your own SSL certificate ordered from another provider.

[3. Regenerating SSL certificates on a web hosting plan](#regeneratessl): Helps you regenerate a Let's Encrypt SSL certificate on your web hosting plan when you activate SSL on one or more multisites. 

You can also [delete the SSL certificate on a web hosting plan](#deletessl). **Please note that this may pose a risk if one of your websites is currently using the certificate you intend to delete**.

### 1. Enabling SSL on a multisite <a name="multisite"></a>

Depending on which [SSL certificate](/links/web/hosting-options-ssl){.external} you would like to order, you can activate a secure SSL connection on one or more of your multisites. To do this, log in to the [OVHcloud Control Panel](/links/manager) and switch to `Web Cloud`{.action}. Click `Hosting Plans`{.action} and select the plan concerned. Click on the `Multisite`{.action} tab.

The table displayed will contain all of the domain names that have been added to your web hosting plan. In the "SSL" column, you will see the activation status for secure SSL connections on your multisites. 

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

There are three status types that may appear:

|Status|Description|
|---|---|
|Enabled|An SSL certificate has already been activated for this multisite. However, if your website is not available via HTTPS, please refer to the instructions listed in our guide on [Activating HTTPS on your website with an SSL certificate](/pages/web_cloud/web_hosting/ssl-activate-https-website).|
|To generate|An SSL certificate has been activated for this website, but it is still not technically active. To activate the SSL certificate properly, you will need to [regenerate the certificate](#regeneratessl), in order to include the new domain names.|
|Disabled|An SSL certificate has not been activated for this multisite. To activate it, follow the steps listed below.|

To activate SSL on a multisite, click on `...`{.action} icon to the right of the multisite concerned, then `Modify domain`{.action}. In the window that pops up, tick the `SSL`{.action} box. You can also tick the option to include the www subdomain when you modify the corresponding domain name. Then follow the steps until you confirm the change.

> [!warning]
>
> You can only assign an SSL certificate to a multisite entry via the “multisite” table if you have ordered the free SSL certificate **Let's Encrypt** provided by OVHcloud.
>
> Paid SSL certificates from **Sectigo** (DV and EV) are only valid for one domain name (and its subdomain *www*). *Enabled* will therefore not appear to the right of other multisites declared on the web hosting plan.
>
> Some **External** SSL certificates may be valid for several domain names at once. If you use one of them, the *Enabled* comment will not appear for all of your domain names declared in the “multisite” table. However, your SSL certificate will still be valid for the domain names it *includes*.
>

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Once you have submitted the activation request, the SSL secure connection status for the multisite concerned should refresh in a few seconds, with the status changed to "To generate". Repeat this action as necessary if you would like to activate SSL for other multisites. 

> [!primary]
>
> You can have two situations in this state:
>
> - **You do not have a certificate.**  
> Go to the section [Enabling SSL on a multisite](#enablessl) and choose "Free certificate (Let's Encrypt)" which supports multisites.
>
> - **SSL certificate is active, but have you added more multisites.**  
> Proceed to [Regenerating SSL certificates on a web hosting plan](#regeneratessl) to regenerate the SSL certificate for the remaining multisites.
>

### 2. Enabling SSL on your web hosting plan <a name="enablessl"></a>

Before you configure this, make sure that the previous step of [Activating an SSL certificate on a multisite](#multisite) was done correctly - at least one domain must have the SSL option `Enabled` or in the status `To generate` to successfully activate the Let's Encrypt SSL certificate.<br>
**This information does not apply if you select `Paid certificate`{.action} or `Import your own certificate`{.action}.**

> [!warning]
>
> Before you continue, please also ensure that the multisite record(s) for which you are enabling the SSL option point to the web hosting plan’s IP address. This configuration is automatically offered when you add or modify a multisite entry, but must be done manually for a domain name that is not managed in your control panel.<br>
> - Find the IP address of your hosting from the tab `General information`{.action}, under the mention `IPv4`.
>
> ![manager](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4.png){.thumbnail}
>
> - Configure the DNS zone of the domain name declared in multisite, in the section `Domains`{.action}, tab `DNS zone`{.action}. Modify or add an `A` record corresponding to your multisite entry and enter your hosting plan’s IP address in the `Target`.
>
> ![manager](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-an-entry.png){.thumbnail}
>
> For more details, please refer to our guides [on configuring a multisite record](/pages/web_cloud/web_hosting/multisites_configure_multisite) or [on configuring a DNS zone](/pages/web_cloud/domains/dns_zone_edit).

With an OVHcloud web hosting plan, you can choose from a range of [SSL certificate solutions](/links/web/hosting-options-ssl){.external}:

- A free Let's Encrypt SSL certificate ([included with compatible web hosting plans](/links/web/hosting-options-ssl){.external})
- A paid SSL certificate ([available as an option with compatible web hosting plans](/links/web/hosting-options-ssl){.external})
- Importing an SSL certificate ordered from another provider

To start activating your certificate, log in to the [OVHcloud Control Panel](/links/manager) and switch to `Web Cloud`{.action}. Click `Hosting Plans`{.action} and select the plan concerned. Click on the `General information`{.action} tab. Beneath "SSL certificate", the word "No" should be visible, showing that no SSL certificates have been set up on your web hosting plan.

Click on `...`{.action} next to "SSL certificate", then `Order an SSL certificate`{.action}.

If the word "Yes" is visible, an SSL certificate has already been set up on the web hosting plan. As a result, you will not be able to order another certificate while the existing one is active.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

In the window that appears, select the SSL certificate you would like to order. Depending on the [web hosting plan](/links/web/hosting){.external} you have ordered and its configuration, it may be the case that none of the solutions listed below are available. Once you have selected an option, click on the `Next`{.action} button.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

Depending on which solution you have selected, there may be additional steps.

- **If you have selected a free SSL certificate:** You will not need to take any further actions, unless there is a technical element stopping the SSL certificate from being activated (a message will then appear in the OVHcloud Control Panel listing the elements you need to check) or a domain name validation for SSL certificate delivery. In this case, you would be notified in advance, and should follow the instructions sent to you.

- **If you have selected a paid SSL certificate:** You will need to complete the order process in order to receive a certificate. Special validation may be required for certain SSL certificate types. You may receive one or more emails regarding this validation. If this is the case, please read the information included in these emails and follow any instructions provided in order to complete the setup.

- **If you have chosen to import an SSL certificate:** You will need to enter the certificate details into the boxes that appear. Please refer to the information sent by the service provider you ordered the certificate from. Usually they provide 3 files: `certificate.crt`, `private.key` and `ca_bundle.crt`. After selecting `Import your SSL certificate`{.action}, click `Next`{.action}. In the first section "Copy the content of your certificate (Only RSA)", enter the content of the file "certificate.crt". In the second section "Copy the content of your private key (not encrypted)", paste the content of the file "private.key" and in the third section "Copy the content of your certificate chain", paste the content of the file "ca_bundle.crt". Then click on `Confirm`{.action}.

Certificate setup may take between several minutes and several days, depending on the type of certificate you have chosen. To check if the SSL certificate has been set up on your web hosting plan, go to the `General information`{.action} tab in the OVHcloud Control Panel. The word "Yes" should then appear below "SSL certificate". 

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

### 3. Regenerating SSL certificates on a web hosting plan <a name="regeneratessl"></a>

> [!primary]
>
> This operation only applies to Let's Encrypt free SSL certificates [included with compatible web hosting plans](/links/web/hosting-options-ssl) that enable a secure SSL connection for multiple multisites.
>

Once you have activated a secure SSL connection across one or more of your multisites, the status will then change to `To generate`. This generation is essential for adding the domain names concerned to the SSL certificate on your web hosting plan. 

To do this, log in to the [OVHcloud Control Panel](/links/manager) and switch to `Web Cloud`{.action}. Click `Hosting Plans`{.action} and select the plan concerned. Click on the `General information`{.action} tab. Then click on `...`{.action} next to "SSL certificate", then `Regenerate SSL certificate`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Read the information listed in the window that appears, then click `Confirm`{.action}. Then wait for your SSL certificate to be regenerated. This may take several hours.

Please note that Let's Encrypt, the authority that delivers the SSL certificate offered free with your web hosting plan, has a [limit of five regenerations per week](https://letsencrypt.org/docs/rate-limits/){.external}. As a result, we advise taking care with regenerations over a short-term period, so you can avoid being temporarily blocked.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

### Deleting SSL certificates on a web hosting plan <a name="deletessl"></a>

You can also delete an SSL certificate that has been set up on your web hosting plan. Before you start making any changes, **we strongly advise ensuring that the certificate deletion will not render your websites inaccessible**. Please keep in mind that your web users will see a security error when they try to access a website that works in HTTPS, but does not have a secure SSL connection. 

Since this verification involves checking your website settings, we recommend contacting a [specialist service provider](/links/partner) if you experience any difficulties in this regard. We will not be able to assist you with this ourselves. 

Once you are ready to delete the SSL certificate, log in to the [OVHcloud Control Panel](/links/manager) and switch to `Web Cloud`{.action}. Click `Hosting Plans`{.action} and select the plan concerned. Click on the `General information`{.action} tab. Then click on `...`{.action} next to "SSL certificate", then `Delete SSL`{.action}.

On the page that appears, confirm the deletion. The deletion will take effect within a few hours. 

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

> [!warning]
>
> The deletion of a paid **Sectigo** SSL certificate (DV or EV) is permanent, even if the certificate has not yet expired. The remaining time will not be refunded. If you would like to reinstall a paid **Sectigo** SSL certificate (DV or EV), you will need to order a new one.
>

### Correcting errors with SSL certificates offered on web hosting plans

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

This message indicates that you have already activated an SSL certificate. You do not need to install a new SSL certificate (Let's Encrypt) on your web hosting plan.

Refer to the “[Activating an SSL certificate on a multisite](#multisite)” section of this guide to continue.

#### "No attached domain with SSL enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

There are three possible reasons for this notification.

- 1: The domain name associated with your website points to the IP address of your web hosting plan’s CDN, with no CDN option enabled on your web hosting plan:

To resolve this situation, map your domain name to the correct web hosting plan IP address (non-CDN) in your domain name's DNS zone.

To retrieve the IP address of your web hosting plan, please refer to our guide on [List of IP addresses for clusters and web hosting plans](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
To edit your domain name’s active DNS zone, please read our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

- 2: The domain name associated with your website does not point to the IP address of your web hosting plan:

To resolve this situation, map your domain name to the correct web hosting plan IP address in your domain name's DNS zone.
If you have enabled a CDN option on your web hosting plan, you can also use the web hosting plan’s IP address with CDN.

To retrieve the IP address of your web hosting plan, please refer to our guide: [List of IP addresses for clusters and web hosting plans](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
To edit your domain name’s active DNS zone, please read our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

- 3: None of the domain names listed in the Multisite tab display the active SSL option as active:

To resolve the situation, activate the SSL certificate for the domain name(s). Refer to the section “[Activating an SSL certificate on a multisite](#multisite)” of this guide to continue with your actions.

### The SSL certificate is active on your web hosting plan, but the message "Your connection is not private" appears on your website

This message appears in the following cases:

- 1: The redirection rule to your URL in HTTPS is misconfigured or does not exist in the .htaccess file:

To correct this, read our tutorial “[Rewrite the URL for accessing my website using mod_rewrite via the .htaccess file](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)” or contact a [specialist provider](/links/partner) if you experience any difficulties.

- 2: Some elements of the web page are not redirected correctly to elements encrypted in HTTPS:

To correct this, you need to ensure that your entire website is accessed via the HTTPS protocol.
If you need help with this, please refer to our tutorial [web hosting: switching your website to HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website), or contact a [specialist provider](/links/partner) if you experience any difficulties.

> [!success]
>
> The elements concerned on the web page can be identifed from the SSL information of the web browser, by consulting the *details of the certificate*.
>

#### You have ordered a Sectigo EV SSL along with your web hosting plan, but the certificate is not yet active and the web hosting plan is not working properly

This situation is linked to the steps you need to take to activate SSL EV on your web hosting plan.

Please refer to our guide on [Using an EV SSL certificate for your website](/pages/web_cloud/web_hosting/ssl_ev) to resolve this situation.

> [!primary]
>
> If the EV SSL certificate is not fully active, the order cannot be completed and will not generate an invoice. As a result, the web hosting service will not work properly.
>

#### After the Sectigo SSL Certificate (DV or EV) expires, you receive the error "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

This error occurs whenever the Sectigo SSL Certificate (activated directly from the web hosting plan) expires and the IP address of the web hosting plan changes. For this reason, you will need to point your domain name to the correct IP address (type A record), in your domain name’s active DNS zone.

To retrieve the IP address of your web hosting plan, please refer to our guide: [List of IP addresses for clusters and web hosting plans](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
To edit your domain name’s active DNS zone, please read our guide on [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit).

## Go further

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).