---
title: "How to create a subdomain?"
excerpt: "Find out how to define a subdomain, and how to create one at OVHcloud"
updated: 2023-11-28
---

## Objective <a name="goal"></a>

The internet is made up of *servers* and *devices* that interact with each other via a global network. When these *servers* and their *devices* are connected to the internet, they are assigned a *public IP address* (equivalent to a postal address). With this *IP address*, you can connect to a server or device remotely. As a result, a user can access a website by entering this *IP address* using the web browser installed on their computer.

**Domain names** were introduced to make it easier for users of the internet to access a website. Indeed, it is easier to remember a name composed of a string of chosen characters (example: ovhcloud.com), rather than a series of numbers that make up an *IP address* (example: 54.39.46.56).

A **domain name** is made up of levels. These levels are usually separated by a `.` (with the exception of some **extensions** of the *first level* such as the *.co.uk*, *.gouv.fr* or *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): represents the *top level* domains. We call them **extensions**. There are currently 4 types of top-level domains: 

    - The **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): composed of two characters, they correspond to the different countries of the world. For example, the extensions *.ie*, *.es*, *.it* or *.pl* are ccTLDs;
    - The **g**eneric **T**op **L**evel **D**omains (**gTLDs**): consisting of at least three characters, they represent more general themes or business areas. For example, the extensions *.com*, *.net*, *.org* or *.info* are gTLDs;
    - The **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**):
    New extensions created in 2012 by the **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) in order to meet the sharp increase in domain name applications. They can correspond to generic themes, brands, regions or cities. For example, the extensions *.love*, *.ovh* or *.paris* are new gTLDs;
    - The **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): this is actually a sub-category of the new GTLDs. Upon request to the **ICANN**, companies or organizations can request the creation of their own TLD. For example, the *.ovh* extension is a CorpTLD created by OVHcloud a few years ago.

- **S**econd **L**evel **D**omain (**SLD**): represents *second level* domains. We call them **labels**. When you order a domain name, you can freely set the **label** (provided that it has not already been registered by another user on the same extension and within the limit of 63 characters). For example, *ovhcloud* corresponds to the domain name label *ovhcloud.com*.

- Third Level Domain (**subdomain**): it is from this third level that we speak *subdomain*. In this guide, we will describe its definition, and explain how you can implement it with your various services.

![URL content](images/url-composition.png){.thumbnail}
  
**Find out more about sub-domains and how to create one with OVHcloud.**

## Requirements

- at least one [domain name](https://www.ovhcloud.com/en-ca/domains/);
- an active DNS zone for your domain name. If you need further guidance, please refer to our guide on "[Creating an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)";
- You must be logged in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca);
- You must have sufficient rights to all of the services concerned. You can find more information in our guide [Managing contacts for your services](/pages/account_and_service_management/account_information/managing_contacts).
  
## Instructions

### Definition of a subdomain

A [domain name](https://www.ovhcloud.com/en-ca/domains/) can be associated with several types of services (email, website, etc.).

However, a domain name can only be associated with one website at a time.

However, some users or organizations need to segment their websites or email services while keeping the same domain name.

Sub-domains (sometimes called **prefixes**) meet the need to segment a domain name. They offer the owner the ability to choose from several subcategories of web services associated with their domain name, without having to sign up to a new domain name.

In other words, sub-domains make it easy to structure all of the web services (DNS servers, website, intranet, email, etc.) associated with the same domain name.

As detailed above in the “[Objective](#goal)” section, sub-domains correspond to the third level (*Third Level Domain*) of a domain name. The most well-known sub-domain of internet users is, to date, the sub-domain **W**orld **W**ide **W**eb (**www**). Indeed, many websites still use this subdomain to be consulted on the Internet.

For example, *www.ovhcloud.com* is a sub-domain of the *ovhcloud.com* domain.

You can create an infinite number of sub-domains from a single domain name.

For example, if you have the domain name *example.com*, you can create the following subdomains:

- *dns1.example.com* and *dns2.example.com* to customize your DNS servers using [GLUE records](/pages/web_cloud/domains/glue_registry);
- *www.example.com* to display your website;
- *preprod.example.com* to test your website in new versions. This will not affect your users' access to your current website;
- *intranet.example.com* so that your employees can talk to each other on your internal website;
- *forum.example.com* or *community.example.com* so that your community of users can exchange and share their experience;
- *app.example.com* to access your online application or download it directly;
- *recruitment.example.com* to allow job seekers to apply on your own recruitment interface;
- *sav.example.com*, *sales.example.com*, *legal.example.com* to enable your customers to contact different internal structures within your company or to prioritize your employees according to the internal services to which they belong;
- etc.

Beyond the third level of domain, these are also considered **sub-domains**. To use one of the examples above, you can create the subdomain *preprod.app.example.com* to test the new version of your web application. This will not interrupt access to the current version of your application on *app.example.com*.

### Create a subdomain

[Domain names](https://www.ovhcloud.com/en-ca/domains/) all need a **DNS zone** to work. The DNS zone consists of technical information, called *DNS records*. It's kind of like a referral center.

For more details on DNS zones, please read our guide on “[Creating an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)” and “[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)”.

**All sub-domains are configured in the domain name’s active DNS zone. You can do this by adding DNS records**

#### 1 - Identify where your domain name’s active DNS zone is located

There are two possible scenarios:

- Your domain name’s active DNS zone is present at OVHcloud;
- Your domain name’s active DNS zone is hosted elsewhere.

> [!warning]
>
> The active DNS zone for your domain name is not necessarily managed by the same provider as your domain name.
>
> 1: To identify the location of the active DNS zone for a domain name registered with OVHcloud, you can use our guide “[Modifying the DNS servers for an OVHcloud domain name](/pages/web_cloud/domains/dns_server_general_information)”.
>
> 2: If your domain name is not registered with OVHcloud, contact your domain name’s current *registrar* to find out where their active DNS zone is hosted.
>

If the DNS servers declared for your domain name have one of the following two forms:

- *dnsXX.ovh.net* and *nsXX.ovh.net* (where each of the "X" represents a number);
- *dns200.anycast.me* and *ns200.anycast.me*.

This means that your domain name’s active DNS zone is active with OVHcloud.

Otherwise, contact your DNS provider to create subdomains with your domain name.

#### 2 - Create the DNS records for your sub-domains

To add your sub-domains to your domain name’s active DNS zone, please read our guide on "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)".

For example, you can add:

- The IP address (DNS records of type *A* and *AAAA*) of your web hosting plan to display one of your websites with a subdomain.
- The email servers (DNS records of type *MX*) to which your subdomain must redirect the emails it receives. This allows you to view them on your custom email address(es) with your subdomain.
- Information related to the security/authentication of your services (web hosting, web server, email, etc.) associated with one of your sub-domains (DNS records of type *SPF*, *DKIM*, *DMARC*, etc.).

> [!primary]
>
> Modifying a DNS zone associated with a domain name will take between **4** and **24** hours to propagate fully.
>
> In addition, as with a domain name as such, simply creating a DNS record for a subdomain is generally not enough to make it work with the *target* service you have defined for it in the DNS record. 
>
> For security reasons, you will also need to authorize the subdomain to access the *target* service (web hosting plan, email address, etc.).
>

In the next part, find out how to authorize a subdomain to access the various services in the “Web cloud” universe (Web Hosting, Exchange server, etc.) offered by OVHcloud.

> [!warning]
>
> If you would like to configure a subdomain for a service hosted elsewhere than with OVHcloud, we will not be able to provide you with assistance on this subject. Please contact your external service provider to continue configuring your service. 
>

### Associate, authorize and configure your subdomain with an OVHcloud service

Several services from the "Web cloud" universe can be used with a subdomain. The association procedures are similar to those you would need to perform with a domain name. We will only cover the most common cases.

For services that are not mentioned, please refer to the documentation for the service concerned. This is to identify if the domain can be used with a subdomain.

#### Case 1: Display a website on my OVHcloud web hosting plan with a sub-domain

As with a domain name, and to authorize a subdomain to display the contents of a *target* folder on a web hosting plan, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external} and select `Web Cloud`{.action}. Click on `Hosting plans`{.action} in the left-hand column, select the plan concerned where your website is located, then select the `Multisite`{.action} tab.

This is where you authorize your subdomain to access your web hosting plan, where your website is located.

For more details on setting up a domain or subdomain on a web hosting plan, please read our guide on [Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite). The procedure is the same whether you are using a domain name or a subdomain.

> [!warning]
>
> Adding a domain or subdomain to a multisite may require a validation *token* to be set up. For a subdomain, the same *token* is not taken into account and must be added not for the subdomain but for the domain name. In this case, you can add the *token* as a TXT record for the domain name in your domain name’s active DNS zone.
>

#### Case 2 - Create Exchange email addresses with a subdomain

To unblock the creation of custom Exchange email addresses with a subdomain, log in to your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external} and select `Web Cloud`{.action}. Click `Microsoft`{.action} in the left-hand column, then `Exchange`{.action}. Then select the Exchange platform you want to use with your subdomain. On the page that pops up, go to the `Associated domains`{.action} tab, then click the `Add a domain`{.action} button on the right.

You can then declare your subdomain on your Exchange platform.

For more details on configuring an Exchange platform, please refer to the following guides:

- [Getting started with the Hosted Exchange service](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)
- [Add a domain name on an email platform](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- [Add a CNAME record to validate your domain on your email solution](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

## Go further <a name="go-further"></a>

[Create an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_create)

[Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[Modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_general_information)

[Hosting multiple websites on your web hosting plan](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Getting started with the Hosted Exchange service](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Add a domain name on an email platform](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

[Add a CNAME record to validate your domain on your email solution](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ca/directory/).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ca/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.