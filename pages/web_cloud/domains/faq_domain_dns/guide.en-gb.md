---
title: "Domain names & DNS FAQ"
excerpt: "Find the answers to the most frequently asked questions on domain names, DNS servers and DNS zones"
updated: 2025-12-16
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

**Click on the questions below to view the explanations.**

## Domain Name Subscription

/// details | How can I subscribe to a domain name with OVHcloud?

Follow these steps:

1. Go to the [OVHcloud website](/links/website).
2. On the displayed page and in the designated field, enter the domain name you wish to reserve (e.g., `domain.tld`), then click the `Search`{.action} button.
3. On the new page that appears, our interface will indicate whether the chosen domain name is available for purchase. If it is already reserved with the syntax you entered, modify it and initiate a new availability search.
4. Once you find an available domain name, click the `Buy`{.action} button, then click the `Continue Order`{.action} button in the right column.
5. Select any additional options or services you wish to subscribe to alongside your domain name, then click `Continue`{.action} until the order process prompts you to authenticate or create an OVHcloud customer account.
6. Once authenticated with your OVHcloud customer account, you can customize the contact information (owner/registrant, administrator, technical) for your domain name. Click the `Continue`{.action} button to access the order summary.
7. On the `Order Summary` page and if necessary, you can modify the DNS configuration that will apply to your domain name by clicking the `Modify Configuration`{.action} link. Once your changes are complete, click the `Pay`{.action} button to proceed to the final step of your order.

Pay for your order to initiate the reservation of your domain name and the installation of the services and options you have subscribed to.

A few moments later, you will receive a confirmation email for your order.  
You can then manage your domain name by logging into your [OVHcloud Control Panel](/links/manager).

Do not hesitate to create a support ticket from the [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) if needed.

///

/// details | How can I purchase a domain name on the secondary market?

Purchasing a domain name on the secondary market follows the same process as subscribing to a domain name.

Follow these steps:

1. Go to the [OVHcloud website](/links/website).
2. On the displayed page and in the designated field, enter the domain name you wish to reserve (e.g., `domain.tld`), then click the `Search`{.action} button.
3. On the new page that appears, our interface will indicate whether the chosen domain name is available for purchase. If it is already reserved with the syntax you entered, modify it and initiate a new availability search.
4. Once you find an available domain name, click the `Buy`{.action} button, then click the `Continue Order`{.action} button in the right column.
5. Select any additional options or services you wish to subscribe to alongside your domain name, then click `Continue`{.action} until the order process prompts you to authenticate or create an OVHcloud customer account.
6. Once authenticated with your OVHcloud customer account, you can customize the contact information (owner/registrant, administrator, technical) for your domain name. Click the `Continue`{.action} button to access the order summary.
7. On the `Order Summary` page and if necessary, you can modify the DNS configuration that will apply to your domain name by clicking the `Modify Configuration`{.action} link. Once your changes are complete, click the `Pay`{.action} button to proceed to the final step of your order.

Pay for your order to initiate the reservation of your domain name and the installation of the services and options you have subscribed to.

A few moments later, you will receive a confirmation email for your order.  
You can then manage your domain name by logging into your [OVHcloud Control Panel](/links/manager).

Do not hesitate to create a support ticket from the [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) if needed.

///

## Domain Name Management

/// details | How can I know if my domain name is registered with OVHcloud?

To do this, you can perform a [WHOIS](/links/web/domains-whois) query to find out where your domain name is registered and to verify that you are indeed declared as the owner of the domain name.

Each registry (such as OVHcloud) has the option to choose how to display information related to a domain name in the WHOIS.

Once the WHOIS query is performed, look in the result for at least one of the following lines:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

If you see at least one of these lines in the result, your domain name is indeed registered with OVHcloud.

Otherwise, your domain name is registered with another registry. Then look for the lines related to the `Registrar` to identify the registry where your domain name is registered.

///

/// details | How can I find out the expiration date of a domain name?

The fastest solution is to perform a [WHOIS](/links/web/domains-whois) query on the domain name. Once the query is performed, look in the result for the line corresponding to the expiration date (e.g., `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, etc.).

If your domain name is registered with OVHcloud, you can also follow these steps:

1. Log in to the [OVHcloud Control Panel](/links/manager).
2. Click on your name in the top right corner and select `My offers and services`{.action}.
3. In the table that appears, find the line corresponding to your domain name, then note the date in the `Date of effect` column. This date corresponds to the expiration date of your domain name.

///

/// details | How can I change the annual expiration date of a domain name?

The annual expiration date of a domain name (e.g., September 24) is pre-set based on the registration (creation) date of the domain name.

Typically, the annual expiration date of a domain name is the same as the date you registered the domain name.

Therefore, it is not possible to change the annual expiration date of a domain name.

///

<br>

/// details | How can I correct a typo in my domain name?

Once a domain name is subscribed, it is registered based on the characters you defined during your order. The registration is processed by the registry for your domain name's extension (e.g., the *.com registry), and reservation fees apply on the side of the registry (such as OVHcloud).

A domain name is a unique address on the Internet, for example: `ovhcloud.com`.  
Every change to this name, whether a character or an extension (.com, .fr, .net, etc.), makes it a completely different domain name.

Therefore, if you made a typo during your order, it cannot be modified or corrected. You will need to order a new domain name independently of the previous one (provided the new desired spelling is not already reserved by someone else).

Domain names are considered custom products because they are registered specifically for a registrant and blocked for others from the moment of the order. This is why, once registered, they cannot be refunded.

///

/// details | How can I modify an already subscribed domain name?

Once a domain name is subscribed, it is registered based on the characters you defined during your order. The registration is processed by the registry for your domain name's extension (e.g., the *.com registry), and reservation fees apply on the side of the registry (such as OVHcloud).

A domain name is a unique address on the Internet, for example: `ovhcloud.com`.  
Every change to this name, whether a character or an extension (.com, .fr, .net, etc.), makes it a completely different domain name.

Therefore, if you made a typo during your order, it cannot be modified or corrected. You will need to order a new domain name independently of the previous one (provided the new desired spelling is not already reserved by someone else).

Domain names are considered custom products because they are registered specifically for a registrant and blocked for others from the moment of the order. This is why, once registered, they cannot be refunded.

///

/// details | How can I delete a domain name?

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. Click on your name in the top right corner and select `My offers and services`{.action}.
3. In the table that appears, locate the line corresponding to your domain name, click the `...`{.action} button on the right, then select `Cancel my subscription`{.action}.
4. On the page that appears, select the cancellation mode (immediately or at the service's expiration date) and click the `Yes, cancel`{.action} button at the bottom.

Your domain name will then be suspended on its expiration date. After this date, it will be permanently deleted within a maximum of 60 days. This delay is defined by the **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) to ensure the domain name is fully deleted and becomes available for registration by another owner/registrant.

> [!primary]
>
> Once cancellation is requested, you can expedite the deletion by creating a support ticket from the [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help). Supporting documents will need to be provided to accelerate this deletion.

> [!success]
>
> Find all the details in our guide "[How to cancel my OVHcloud services](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)".

///

/// details | I received an email about validating the information associated with my domain name's registrant. What should I do?

First, if you have doubts about the legitimacy of the received email, consult our guide "[Beware of scams – recognising fraudulent email and phishing](/pages/account_and_service_management/account_information/phishing_care)".

According to a directive from the **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) dated 01/09/2014, domain name registrars (e.g., OVHcloud) are required to verify the validity of the contact details of domain name registrants/owners. OVHcloud then sends an email to the registrant/owner of the domain name registered at the contact email address declared with OVHcloud.

You will receive this email when you perform one of the following actions:

- Registration of a new domain name.
- Transfer of a domain name.
- Modification of the contact details associated with your domain name.

This email contains a link to quickly verify your contact details as the legal owner/registrant of the domain name.

**Important:** This verification must be completed within 15 days. If not, the domain name will be technically suspended. It will remain contractually under your name but will no longer be accessible on the Internet. An error message will appear for visitors to your website.

You may receive the following emails during the first 15 days:

- **Day 0**: Immediately after ordering the domain name or modifying its contact details, you (or the person registered as the owner/registrant of the domain name) will receive the first email with a verification link.
- **Days 4, 9, and 13 (reminder emails)**: If you have not yet verified the domain name, you will receive the email again.
- **Day 14**: If you still have not verified the domain name, the email is sent once more. Additionally, an email is also sent to the administrator/registrant's email address to inform them that their contact details have not been confirmed.
- **Day 15**: If the owner/registrant of the domain name has not yet responded, we send an email to the domain name administrator to inform them of the situation and the deactivation of the domain name.

Beyond these 15 days, the system sends additional emails (up to 9 emails) before deleting your domain name. This deletion will occur 60 days after Day 0.

> [!warning]
>
> Depending on the domain name extension (e.g., *.com*, *.net*, etc.), some of the deadlines mentioned above may vary. We strongly recommend completing the verification process for contact control with the registry of your domain name's extension.

///

/// details | I did not receive the email to validate the information associated with my domain name and it is suspended. What should I do?

If you did not receive the validation email for your domain name's owner, check the following points:

1. The email address declared for the domain name owner is valid and operational.
2. The validation email is not in your spam/junk folder.

After confirming the two points above, if you still cannot retrieve the owner validation email, we recommend opening a support ticket from the [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) to request the email to be resent.

///

/// details | What is an IDN (Internationalized Domain Name)?

Initially, domain names could only contain specific **ASCII** characters (such as the 26 Latin alphabet letters). An **I**nternationalized **D**omain **N**ame (**IDN**) allows the use of special or accented characters, as well as other alphabets (e.g., *Cyrillic*).

With OVHcloud, it is entirely possible to order IDNs and use them as regular domain names with our other services (web hosting, DNS zones, etc.<sup>1</sup>).

Once subscribed, IDNs appear in your [OVHcloud Control Panel](/links/manager) in the **xn--** format.

Even though your domain is displayed in [internationalized notation (IDN)](https://en.wikipedia.org/wiki/Internationalized_domain_name) in your [OVHcloud Cotrol Panel](/links/manager), it will function and display normally elsewhere. Your website address will appear as requested. Your email addresses will also display as intended to your contacts.

> [!alert]
>
> <sup>1</sup>: It is not recommended to use an email address with an IDN domain from an email client (Outlook, macOS Mail, etc.). Some email clients do not yet support domain names with accented characters, which blocks email transmission. When a sender tries to email you, they receive an automatic message stating that your email address does not exist.
>
> **We recommend reserving the same domain name without accented characters in addition to your accented domain name to avoid email compatibility issues.**

///

/// details | How can I correct an IDN (Internationalized Domain Name)?

Like regular domain names, once a domain name or IDN is subscribed, it is registered based on the characters you defined during your order.

Therefore, if you made a typo during your order, it cannot be corrected. You will need to order a new domain name independently of the previous one (provided the new desired spelling is not already reserved by someone else).

///

/// details | How can I renew a single domain name in an Alldom pack?

To do this, you must be at least declared as the [billing contact](/pages/account_and_service_management/account_information/managing_contacts) for the concerned domain name. You will then need to change the renewal mode of the domain name to **automatic renewal**.

To do this, follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager).
2. Click on your name in the top right corner and select `My offers and services`{.action}.
3. In the table that appears and to the right of the concerned domain name, click the `...`{.action} button in the `Actions` column, then click `Configure Renewal`{.action}. You can then configure the renewal of this domain name in **automatic renewal** mode.

> [!primary]
>
> If you have an old web hosting offer that includes a free domain name and you modify this hosting offer, this may cancel the domain name's free status in some cases.
>
> If in doubt, we recommend opening a support ticket from the [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) specifying the domain name and the concerned web hosting.

> [!success]
>
> Find all the details in our guide "[How to renew OVHcloud services](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

///

## Domain Name Transfer

/// details | Is my domain name transferable after a change of owner?

The **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) has implemented security measures to prevent unauthorized or abusive transfers or changes of ownership of domain names.

ICANN has defined an incompressible period of **60** days between each operation that can occur on a domain name (creation, change of owner, transfer).

The rules defined by ICANN must be strictly respected by registrars (such as OVHcloud).

You will therefore have no choice but to wait until the end of the 60-day period to transfer your domain name after changing its owner.

///

/// details | My domain name is locked against transfer for 60 days. What should I do?

The **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) has implemented security measures to prevent unauthorized or abusive transfers or changes of ownership of domain names.

ICANN has defined an incompressible period of **60** days between each operation that can occur on a domain name (creation, change of owner, transfer).

The rules defined by ICANN must be strictly respected by registrars (such as OVHcloud).

You will therefore have no choice but to wait until the end of the 60-day period to perform a new operation (change of owner or transfer) on your domain name.

///

/// details | I cannot find my domain name in my customer area. What should I do?

First, perform a [WHOIS](/links/web/domains-whois) query to find out where your domain name is registered and verify that you are declared as the owner of the domain name.

**Case 1.A - Your domain name is registered with OVHcloud and you are declared as the owner:**

Perform a [contact recovery procedure](/links/transversal/procedure-contact-change) to have your domain name fully managed in your [OVHcloud Control Panel](/links/manager). This way, you will no longer need to contact the person who previously managed your domain name.

**Case 1.B - Your domain name is registered with OVHcloud and you are not declared as the owner:**

In accordance with the **G**eneral **D**ata **P**rotection **R**egulation (**GDPR**), OVHcloud cannot provide information about the person or organization managing the domain name with OVHcloud.

However, you can try to contact the person or organization managing it by following the instructions in [this form](/links/web/contact-domain-owner).

**Case 2 - Your domain name is not registered with OVHcloud:**

Contact the registrar (specified in the lines starting with the term `Registrar`) of your domain name directly to continue your search. Indeed, if the domain name is not registered with OVHcloud, we will not be able to assist you on this topic.

///

/// details | I cannot contact the person managing my domain name. What should I do?

First, perform a [WHOIS](/links/web/domains-whois) query to verify that you are declared as the owner of the domain name.

**Case 1 - You are declared as the owner of the domain name:**

Perform a [contact recovery procedure](/links/transversal/procedure-contact-change) to have your domain name fully managed in your [OVHcloud Control Panel](/links/manager). This way, you will no longer need to contact the person who previously managed your domain name.

**Case 2 - You are not declared as the owner of the domain name:**

In accordance with the **G**eneral **D**ata **P**rotection **R**egulation (**GDPR**), OVHcloud cannot provide information about the person or organization managing the domain name with OVHcloud.

However, you can try to contact the person or organization managing it by following the instructions in [this form](/links/web/contact-domain-owner).

///

/// details | Can I sell my domain name?

Currently, OVHcloud does not directly support the sale of already registered domain names. We do not offer this type of service.

However, if you wish to put your domain name up for sale on a secondary market, contact one of our partners:

- [Afternic](https://www.afternic.com)
- [Sedo](https://sedo.com)

If you wish to sell your domain name, you can add it to these platforms. Once added, the authorized providers will offer your domain name at the price you set on one of the platforms above.

///

## DNS Zone

> [!primary]
>
> Modifying a DNS zone is a sensitive operation and can cause interruptions to services associated with your domain name (web hosting, email, etc.). If in doubt, do not hesitate to contact a [specialized provider](/links/partner).

/// details | What is a DNS zone?

A DNS zone for a domain name contains a configuration applicable to it. It consists of technical information called *DNS records*. The DNS zone acts as a routing center, directing traffic to the correct services associated with the domain.

For example, you can specify:

- The IP address (DNS records of type *A* and *AAAA*) of your web hosting to display your website using your domain name.
- The email servers (DNS records of type *MX*) to which your domain name should redirect the emails it receives.
- Information related to the security/authentication of your services (web hosting, web server, email server, etc.) associated with your domain name (DNS records of type *SPF*, *DKIM*, *DMARC*, etc.).

A DNS zone is hosted/registered on **DNS servers**. These **DNS servers** must be declared to the domain name registrar to use the DNS zone they host.

> [!success]
>
> Find all the details in our guide "[Everything you need to know about DNS zone](/pages/web_cloud/domains/dns_zone_general_information)".

///

/// details | What is a DNS record?

DNS records are used, for example, to:

- Associate a domain name with an IP address, allowing users to access a website or remote server.
- Associate a domain name with other online resources using a domain name (easier to remember) instead of an IP address.
- Validate configurations for association or security, particularly for email services and shared hosting.

Many DNS records exist. They all have a specific purpose in DNS resolution. At OVHcloud, they are categorized into three parts:

- **Pointer records**: `A`, `AAAA`, `NS`, `CNAME`, and `DNAME`.
- **Extended records**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB`, and `HTTPS`.
- **Mail records**: `MX`, `SPF`, `DKIM`, and `DMARC`.

> [!success]
>
> Find more details in the following guides:
>
> - General information:
>     - [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)
> - DNS pointer records:
>     - [How to add a DNS A record for a domain name](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [How to add a DNS AAAA record for a domain name](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [How to add a DNS CNAME record for a domain name](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Extended DNS records:
>     - [How to add a DNS TXT record for a domain name](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Email DNS records:
>     - [Configure an MX record for email management](/pages/web_cloud/domains/dns_zone_mx)
>     - [How to improve email security with an SPF record](/pages/web_cloud/domains/dns_zone_spf)
>     - [How to improve email security with an DKIM record](/pages/web_cloud/domains/dns_zone_dkim)
>     - [How to improve email security with an DMARC record](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | What DNS records are available in an OVHcloud DNS zone?

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click on the `DNS Zones`{.action} menu, then select the domain name in question.
3. On the right or below the table, click `Add an entry`{.action}.

Here, you will see all the DNS records you can add via the OVHcloud configuration assistant.

Using this assistant, you can add the following types of DNS records:

- **Pointer fields**: `A`, `AAAA`, `NS`, `CNAME`, and `DNAME`.
- **Extended fields**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB`, and `HTTPS`.
- **Email fields**: `MX`, `SPF`, `DKIM`, and `DMARC`.

> [!primary]
>
> If you want to add a DNS record not listed, close the window that opened after clicking the `Add an entry`{.action} button and click the `Change in text format`{.action} button on the right or below the table.
>
> You can then manually add your chosen DNS record.

> [!success]
>
> Find more details in the following guides:
>
> - General information:
>     - [Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)
> - DNS pointer records:
>     - [How to add a DNS A record for a domain name](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [How to add a DNS AAAA record for a domain name](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [How to add a DNS CNAME record for a domain name](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Extended DNS records:
>     - [How to add a DNS TXT record for a domain name](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Email DNS records:
>     - [Configure an MX record for email management](/pages/web_cloud/domains/dns_zone_mx)
>     - [How to improve email security with an SPF record](/pages/web_cloud/domains/dns_zone_spf)
>     - [How to improve email security with an DKIM record](/pages/web_cloud/domains/dns_zone_dkim)
>     - [How to improve email security with an DMARC record](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Can I change the DNS servers declared in my OVHcloud DNS zone?

Manually modifying NS-type DNS records for a domain name in an OVHcloud DNS zone is not recommended, as this would prevent the corresponding DNS zone from resolving.

If you want to modify the configuration of NS-type DNS records for your domain name, it is likely because you want to change the declared DNS servers for it.

> [!primary]
>
> To change the DNS servers for your domain name at OVHcloud, a DNS zone must already exist on the desired new DNS servers.
> Additionally, you must verify in this same DNS zone that the NS-type DNS records correspond to the appropriate DNS servers.

To do this, follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click on the `Domain names`{.action} menu, then select the domain name in question.
3. Select the `DNS Servers`{.action} tab once you are on the domain name page.
4. To modify the DNS servers, click the `Modify DNS Servers`{.action} button located to the right of the "DNS Servers" table. Depending on your screen resolution, the button may be below the table.

You can modify the DNS servers for your domain name on the page that appears.

> [!primary]
>
> The propagation of changes to declared DNS servers for a domain name can take up to **48** hours.

If you encounter an error, we recommend opening a support ticket from the [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help), specifying the following information:

- The names of the DNS servers you want to configure.
- The error message encountered.

> [!success]
>
> Find all the details in our guide "[How to modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | What is the difference between an A (IPv4) and AAAA (IPv6) DNS record?

The Internet has operated since the early 1990s using the IPv4 standard. This standard assigns an IP address in the format X.X.X.X (where each "X" is a number between 0 and 255) to every device connected to the Internet (servers, computers, smartphones, tablets, etc.). However, this standard limits the number of connected devices to approximately 4 billion.

To address this limitation, the IPv6 protocol was introduced, allowing up to 340 sextillion devices to connect to the Internet.

IPv4 addresses are now less available, making it harder to add new devices to the Internet using IPv4. However, IPv6 connections are only useful if, for example, your website is also accessible via this protocol.

A and AAAA DNS records are two types of resource records used to associate a domain name with an IP address.

Their main differences lie in the type of IP address they use:

- **A Record** (also called a "host record"): Associates a domain name with an IPv4 address (e.g., 213.0.113.0). IPv4 addresses are 32-bit addresses, typically written in dotted decimal notation.
- **AAAA Record** (also called a "quad A record"): Associates a domain name with an IPv6 address (e.g., 2001:db8:1:1b00:213:0:113:0). IPv6 addresses are 128-bit addresses, typically written in hexadecimal notation.

In other words, A records are used for IPv4 addresses, while AAAA records are used for IPv6 addresses. Both types of records are used to direct traffic to a specific IP address, but they are used for different versions of the Internet protocol.

Note that a domain can have both A and AAAA records, allowing it to be accessible on both IPv4 and IPv6 networks. This is known as "dual stack", a common practice for websites and services aiming to be accessible to users on both IPv4 and IPv6 networks.

> [!success]
>
> Find more details in the following guides:
>
> - [How to add a DNS A record for a domain name](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [How to add a DNS AAAA record for a domain name](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [Configuring IPv6 for your website](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | How can I configure a PTR record for my external IP at OVHcloud?

At OVHcloud, **Pointer (PTR)** record configurations cannot be managed directly within our DNS zones.

To configure a reverse/PTR record for an external IP address, contact your **I**nternet **S**ervice **P**rovider (**ISP**), as they are responsible for managing reverse DNS records for the IP addresses they allocate.

> [!success]
>
> Find all the details in our guide "[Everything you need to know about DNS records](/pages/web_cloud/domains/dns_zone_records)".

///

/// details | How can I change the default TTL in my OVHcloud DNS zone?

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
3. On the right or below the table, click `Modify default TTL`{.action}.
4. In the window that opens, adjust the value under the `Default TTL` label according to your needs, then click `Modify`{.action}.

> [!primary]
>
> The propagation of DNS zone changes can take up to **24** hours.

///

/// details | What is an SOA DNS record?

The **S**tart **O**f **A**uthority (**SOA**) DNS record provides a set of elements related to the DNS configuration of a domain name.

Below is the result of an SOA query for the domain name `domain.tld`.

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

|Element in the result|Description|Correspondence in the example above|
|---|---|---|
|**NS (Name Server)**|Primary DNS server declared for the domain name `domain.tld`.|`dns200.anycast.me.`|
|**Email address**|Email address of the DNS zone administrator.|`tech.ovh.net.` (the dot between `tech` and `ovh` must be replaced by an `@`)|
|**Serial number**|Unique number that increments with each DNS zone modification.<br>It is typically composed of the update date in `YYYYMMDD` format followed by the number of updates made that day.|`2025091801` : Here, 2 updates (`00` for 1, `01` for 2, etc.) were made on 18th September 2025.|
|**Refresh time**|Interval (in seconds) between each refresh of secondary DNS servers (part of the DNS network) with the primary DNS server.|`86400` (24 hours)|
|**Retry time**|Interval (in seconds) between each retry to refresh the settings of secondary DNS servers (part of the DNS network) with the primary DNS server if it does not respond or is unavailable.|`3600` (1 hour)|
|**Expire time**|Time (in seconds) after which secondary DNS servers (part of the DNS network) stop responding to DNS queries if the primary DNS server no longer updates them.|`3600000` (1000 hours, 41.67 days)|
|**Minimum TTL**|Minimum time-to-live (in seconds) during which DNS records in the zone are cached on secondary DNS servers (part of the DNS network).|`300` (5 minutes)|

///

<br>

/// details | How can I verify my DNS zone configuration?

Here are several methods to verify your DNS zone configuration:

- **An online verification tool**: Several online tools can verify your DNS zone configuration. Use a web browser (Chrome, Edge, Firefox, Safari, etc.) to search for appropriate keywords (e.g., "verify DNS propagation") in a search engine.

- **The "dig" command**: If you have access to a *terminal* on a Linux or macOS system, you can use the `dig` command to verify your DNS zone configuration on the DNS network.

- **The "nslookup" command**: The `nslookup` command is available on most operating systems and can also be used to verify your DNS zone configuration.

- **From your OVHcloud Control Panel**: If the active DNS zone for your domain name is managed by OVHcloud, follow these steps:
    1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
    2. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
    3. In the table on the displayed page, you will see all the DNS records declared for your domain name.

> [!success]
>
> Find all the details in our guide "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | How can I check the propagation of changes made in my DNS zone?

> [!primary]
>
> Before proceeding, note that:
>
> - The propagation of a change made in a DNS zone can take up to **24** hours.
> - The propagation of a DNS server change for a domain name can take up to **48** hours.

You can verify that DNS propagation is occurring correctly using the **S**tart **O**f **A**uthority (**SOA**) DNS record.

First, open a compatible terminal on your computer and execute the following command (replace `domain.tld` with your own domain name):

```bash
dig domain.tld soa
```

> [!primary]
>
> Linux and macOS operating systems natively support a compatible terminal for executing this command. If you are using another operating system, such as Windows, you will need to install a compatible terminal beforehand to execute the command.
>
> Additionally, note that there are also online tools available to verify DNS propagation.

After executing the command, you will receive a result similar to the following:

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

In this result, retrieve the **serial number** (in our example: `2025091801`).

It follows the format `YYYYMMDDRR` where:

- `YYYYMMDD`: Represents the date (year, month, and day) of the last propagated DNS update for the domain name.
- `RR`: Represents the number of updates made on the indicated date. For example, if only one update was made in a day, it will have the value `00`. If two updates were made on the same day, it will have the value `01`, and so on.

Once the serial number is retrieved, follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
3. On the right or below the table, click `Change in text format`{.action}.
4. In the window that opens, locate the second line, which in our example would be equivalent to: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
5. Compare the serial number retrieved via the terminal with the one displayed in your OVHcloud Control Panel.

**Case 1 - The two serial numbers match:**

This means DNS propagation is occurring correctly. You have nothing further to do.

**Case 2 - The two serial numbers are different:**

This means either:

- DNS propagation of your changes is not yet complete (you are still within the standard propagation time frame). In this case, wait until DNS propagation is fully completed (**24** hours for a zone DNS change and **48** hours for a DNS server change), then repeat the process.
- DNS propagation is not occurring correctly. In this case, from the `Change in text format`{.action} window opened in step **4**, click directly **without making any changes** on the `Next`{.action} button, then on `Confirm`{.action}. A new DNS propagation will then be initiated.

///

/// details | How can I restore a DNS zone?

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
3. On the right or below the table, click `View your DNS zone history`{.action}.
4. In the table on the displayed page, identify the line corresponding to the DNS zone backup you want to restore, then click the icon in the `Restore`{.action} column. The current configuration of the DNS zone will be replaced by the selected backup.

> [!primary]
>
> DNS zone modification propagation can take up to **24** hours.

> [!success]
>
> Find all the details in our guide "[Managing the history of a DNS zone](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | How can I retrieve a copy of my DNS zone?

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
3. On the right or below the table, click `View your DNS zone history`{.action}.
4. In the table on the displayed page, identify the line corresponding to the DNS zone backup you want to retrieve, then click the icon in the `Download`{.action} column. The DNS zone copy will be downloaded in *.txt* format.

> [!success]
>
> Find all the details in our guide "[Managing the history of a DNS zone](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Can I create a DNS zone for a subdomain?

You can create a DNS zone for a subdomain.

To do this, follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click on the `DNS Zones`{.action} menu, then click the `Order`{.action} button in the top right corner of the displayed table.
3. On the page that appears, enter the subdomain (e.g., *www.domain.tld*) for which you want to create an OVHcloud DNS zone. Wait a few moments while the tool checks the subdomain.
4. Once the verification succeeds, choose whether to activate or not the minimal entries for the DNS zone you are about to create. This choice is not final, as you can always [edit the DNS zone records](/pages/web_cloud/domains/dns_zone_edit) later.
5. Once your choice is made, proceed through the steps until the DNS zone is created.

This DNS zone will be installed on 2 OVHcloud DNS servers. You must declare the names of these two servers in the active DNS zone of the domain name from which your subdomain originates (e.g., *www.domain.tld* is a subdomain of the domain name *domain.tld*).

To retrieve the names of the 2 DNS servers, follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
3. In the top left corner of the displayed page, retrieve the 2 DNS server names listed under the `Name Servers` label. These have one of the following two formats:

- `dnsXXX.ovh.net` and `nsXXX.ovh.net` **or** `dnsXXX.ovh.ca` and `nsXXX.ovh.ca` (where each `X` represents a digit between `0` and `9`).
- `dns200.ovh.me` and `ns200.anycast.me`.

Once you have the 2 DNS servers, declare them using two `NS` DNS records in the active DNS zone of the domain name from which your subdomain originates.

**Case 1 - The active DNS zone of the domain name from which your subdomain originates is with OVHcloud:**

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
3. On the right or below the table, click `Add an entry`{.action}, then select the `NS`{.action} DNS record type to declare a DNS server.
4. In the window that opens, enter the subdomain in the `Sub-domain *`{.action} field (e.g., write **only** *www* if your domain name is *domain.tld* and your full subdomain is *www.domain.tld*). In the `Target *`{.action} field, enter **one** of the 2 DNS servers.
5. Click `Next`{.action}, then `Validate`{.action}.

Repeat the process for the second DNS server to declare.

**Case 2 - The active DNS zone of the domain name from which your subdomain originates is not with OVHcloud:**

You must declare the 2 DNS servers for your subdomain directly with your domain name's DNS provider (from which your subdomain originates).

> [!primary]
>
> In both cases, DNS zone modification propagation can take up to **24** hours.

> [!success]
>
> Find more details in the following guides:
>
> - [Creating an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)
> - [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

///

/// details | How can I redirect all subdomains of the same domain name to the same IP address?

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
3. On the right or below the table, click `Add an entry`{.action}, then select the `A`{.action} DNS record type for an IPv4 (e.g., `203.0.113.0`) or the `AAAA`{.action} DNS record type for an IPv6 (e.g., `2001:db8:1:1b00:203:0:113:0`).
4. In the window that opens and in the `Sub-domain *`{.action} field, enter the value `*`. The asterisk `*` will represent all subdomains (e.g., `www.domain.tld` or `ovhcloud.domain.tld`) of your domain name. Complete the `Target *`{.action} field with the desired IP address.
5. Click `Next`{.action}, then `Confirm`{.action}.

> [!primary]
>
> DNS zone modification propagation can take up to **24** hours.

> [!success]
>
> Find all the details in our guide "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Can I set up a wildcard in my DNS zone?

It is possible to set up a wildcard in an OVHcloud DNS zone.

To do this, follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click the `DNS zones`{.action} menu, then choose the domain name concerned.
3. On the right or below the table, click `Add an entry`{.action}, then select the DNS record type for which you want to set up a wildcard.
4. In the window that opens and in the `Sub-domain *`{.action} field, enter the value `*`. The asterisk `*` will represent all subdomains (e.g., `www.domain.tld` or `ovhcloud.domain.tld`) of your domain name. Complete the other fields with the desired values.
5. Click `Next`{.action}, then `Confirm`{.action}.

> [!primary]
>
> DNS zone modification propagation can take up to **24** hours.

> [!success]
>
> Find all the details in our guide "[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)".

///

<br>

/// details | I accidentally deleted my DNS zone and want to restore it, what should I do?

OVHcloud sends an email containing a text copy of the DNS zone once your DNS zone is deleted, so you can restore it later if needed.  
This email is sent to the email address associated with your OVHcloud customer account.

> [!success]
>
> If you did not receive this email, check your spam folder or follow these steps:
>
> 1. Log in to your [OVHcloud Control Panel](/links/manager), click on your name in the top right corner, then on `Access my Account`{.action}.
> 2. On the displayed page, click the `Emails received`{.action} tab.
> 3. In the table that appears and among the list of received emails, click on the relevant email to view its content.

To restore your DNS zone, follow these steps:

1. Download the file containing the DNS zone from the received email.
2. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
3. Click on the `Domain names`{.action} menu, then choose the domain name concerned.
4. Select the `DNS Zone`{.action} tab once positioned on the domain name in question. **If the DNS zone is inactive, activate it from this tab.**
5. On the right or below the table, click `Change in text format`{.action}.
6. In the window that opens, replace all the displayed content with the copy of the deleted DNS zone. Click `Next`{.action}, then `Confirm`{.action}.

> [!primary]
>
> DNS zone modification propagation can take up to **24** hours.

> [!success]
>
> Find more details in the following guides:
>
> - [Creating an OVHcloud DNS zone for a domain name](/pages/web_cloud/domains/dns_zone_create)
> - [Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
> - [Managing the history of a DNS zone](/pages/web_cloud/domains/dns_zone_history)

///

/// details | How to cancel a DNS zone deletion request?

For each service deletion request, an email requesting confirmation of deletion is sent to the email address associated with your OVHcloud customer account.

If you have not clicked on the confirmation link in this email, your DNS zone will not be deleted.

Otherwise, the deletion is initiated and cannot be cancelled anymore. The deletion process may take up to 3 days before you can recreate an OVHcloud DNS zone for your domain name.

///

/// details | I cannot activate a DNS zone for my domain name, what should I do?

This situation occurs when a DNS zone already exists for your domain name with OVHcloud.

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click on the `DNS Zones`{.action} menu, then check if the concerned domain name appears.

Case #1 - The concerned domain name appears in the list:

This means the DNS zone for the domain name already exists in your [OVHcloud Control Panel](/links/manager). You can manage it directly from there.

Case #2 - The concerned domain name does not appear in the list:

This means the DNS zone for the domain name is managed by another OVHcloud customer account.

In accordance with the **General Data Protection Regulation (GDPR)**, the customer account ID where the DNS zone is located will remain confidential.

In this situation and if you do not know this other customer account ID, we recommend opening a support ticket from the [help center](https://help.ovhcloud.com/csm?id=csm_get_help) to regain management of the DNS zone.

///

/// details | Why can't I find the GLUE tab in my OVHcloud Control Panel?

This feature is not available for all domain name extensions.
If the tab does not appear in your [OVHcloud Control Panel](/links/manager), it means the GLUE option is unavailable for your domain name.

> [!success]
>
> Find all details in our guide "[Customising a domain name’s DNS servers (Glue Records)](/pages/web_cloud/domains/glue_registry)".

///

## DNS Servers

> [!primary]
>
> Modifying DNS servers is a sensitive operation and may cause interruptions in services associated with your domain name (web hosting, email, etc.). If in doubt, do not hesitate to contact a [specialized provider](/links/partner).

/// details | How to modify my DNS servers?

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click on the `Domain names`{.action} menu, then select the concerned domain name.
3. Once positioned on the concerned domain name, select the `DNS Servers`{.action} tab.
4. To modify the DNS servers, click the `Modify DNS Servers`{.action} button located to the right of the "DNS Servers" table. Depending on your screen resolution, the button may be located below the table.

You will be able to modify the DNS servers for your domain name on the page that appears.

> [!primary]
>
> The propagation of changes to the DNS servers declared for a domain name may take up to **48** hours.

> [!success]
>
> Find all details in our guide "[How to modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | How to customize my DNS servers?

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click on the `Domain names`{.action} menu, then select the concerned domain name.
3. Once positioned on the concerned domain name, select the `DNS Servers`{.action} tab.
4. To modify the DNS servers, click the `Modify DNS Servers`{.action} button located to the right of the "DNS Servers" table. Depending on your screen resolution, the button may be located below the table.

You will be able to customize the DNS servers for your domain name on the page that appears.

> [!primary]
>
> The propagation of changes to the DNS servers declared for a domain name may take up to **48** hours.

> [!success]
>
> Find all details in our guide "[How to modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | How to replace my DNS servers with those provided by OVHcloud?

Follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click on the `Domain names`{.action} menu, then select the concerned domain name.
3. Once positioned on the concerned domain name, select the `DNS Servers`{.action} tab.
4. To modify the DNS servers, click the `Modify DNS Servers`{.action} button located to the right of the "DNS Servers" table. Depending on your screen resolution, the button may be located below the table.

You will be able to replace the DNS servers for your domain name with OVHcloud's on the page that appears.

> [!primary]
>
> The propagation of changes to the DNS servers declared for a domain name may take up to **48** hours.

> [!success]
>
> Find all details in our guide "[How to modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | In my Control Panel, I have an error message indicating that I am not using OVHcloud's DNS servers for my domain name, what should I do?

In your [OVHcloud Control Panel](/links/manager), this message simply indicates that the DNS zone created for your domain name is not its active DNS zone.

In other words, this means that the configuration present in this DNS zone is not the one currently applied to your domain name.

However, make sure that the DNS servers mentioned in the error message are indeed the ones you want to apply to your domain name. Then check the configuration of the DNS zone declared on these same DNS servers with your DNS provider.

If you want to use OVHcloud's DNS servers for your domain name, you can prepare the DNS configuration of the DNS zone present at OVHcloud so that it matches your needs, and then activate it for your domain name.

> [!success]
>
> Find more details in the following guides:
>
> - [How to edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)
> - [How to modify the DNS servers of an OVHcloud domain name](/pages/web_cloud/domains/dns_server_edit)

///

/// details | I cannot modify the DNS servers of a domain name from my OVHcloud Control Panel, what should I do?

This means that you only have management of the DNS zone of the domain name but not the domain name itself.

To verify this, follow these steps:

1. Log in to your [OVHcloud Control Panel](/links/manager), then go to the `Web Cloud`{.action} section.
2. Click on the `Domain names`{.action} menu, then check if the concerned domain name appears.

Case #1 - The domain name does not appear in the list:

This means that the domain name is not managed from your [OVHcloud Control Panel](/links/manager). Perform a [WHOIS](/links/web/domains-whois) request with it to find out where it is registered.

You can then perform one of the following actions (if you are the registrant declared in the WHOIS of the domain name):

- The domain name is registered with OVHcloud: You can perform a [contact recovery procedure](/links/transversal/procedure-contact-change) so that your domain name is managed in your [OVHcloud Control Panel](/links/manager).
- The domain name is not registered with OVHcloud: You can perform an [incoming transfer](/pages/web_cloud/domains/transfer_incoming_generic_domain) to OVHcloud so that your domain name is managed in your [OVHcloud Control Panel](/links/manager).

Case #2 - The domain name appears in the list:

This means that you do not have sufficient rights to manage the domain name from your [OVHcloud Control Panel](/links/manager). Perform a [WHOIS](/links/web/domains-whois) request to verify that you are indeed declared as the owner of the domain name.

You can then perform a [contact recovery procedure](/links/transversal/procedure-contact-change) so that your domain name is fully managed in your [OVHcloud Control Panel](/links/manager).

///

## Go further <a name="go-further"></a>

[OVHcloud emails FAQ ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Web Hosting FAQ](/pages/web_cloud/web_hosting/faq-web_hosting)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).
