---
title: Tutorial - Using Zonemaster
updated: 2023-06-06
---

> [!warning]
>
> OVHcloud provides services that you are responsible for with regard to their configuration and management. It is therefore your responsibility to ensure that they function properly.
>
> This tutorial is designed to help you with common tasks. Nevertheless, we recommend contacting a [specialist provider](https://partner.ovhcloud.com/en-ie/) if you encounter any difficulties. We will not be able to assist you. You can find more information in the [Go further](#go-further) section of this guide.
>

## Objective

[Zonemaster](https://zonemaster.net/en/run-test) is a tool created by the collaboration between [AFNIC](https://www.afnic.fr/en/) (French registry) and [The Swedish Internet Foundation](https://internetstiftelsen.se/en/) (Swedish registry). It allows you to analyse the Domain Name System (DNS) configuration of a domain name and identify what can be improved or corrected.

> [!primary]
>
> To get a better understanding of DNS, please read the introduction to our guide on [configuring a DNS zone](/pages/web/domains/dns_zone_edit).


## Requirements

- A [domain name](https://www.ovhcloud.com/en-ie/domains/)

## Instructions

### Input field

The Zonemaster tool allows you to check a DNS configuration in place on a domain name or to test a preconfigured DNS zone on future DNS servers.

To check the current configuration of a domain name, enter your domain name, then click `Run`{.action}.

![Screenshot of the Zonemaster input form. The domain "mydomain.ovh" has been entered and is now ready to be tested.](images/zonemaster01.png){.thumbnail}

To check a DNS configuration that has been prepared but not yet applied to the domain name concerned, select the `Options`{.action} box, and then enter the following information:

- **Nameservers**: Enter the information for the DNS server associated with a domain name. Click the `+`{.action} button to add additional nameservers. Entering an IP address is optional.
- **Delegation Signers (DS records)**: If DNSSEC protection applies, enter the DS record items here. Click `+`{.action} to add additional DS records. If the DNS servers do not use the DNSSEC protocol, you can leave these fields empty. If a zone is signed with DNSSEC, this feature allows to check that the zone works correctly with a validating resolver, with the DS records that are about to be published, before their publication.

You can also force checks on a specific IP protocol by using the `Disable IPv6` and `Disable IPv4` checkboxes.

> **Example**:<br><br> You have the domain name mydomain.ovh, which currently uses the DNS servers "dns19.ovh.net" and "ns19.ovh.net".
>
> You have configured a DNS zone for this domain name on the DNS servers "mydns.test.ovh" and "mydns2.test.ovh".<br>
> Before you change the DNS servers, you can perform an advanced search by enabling `Options`{.action}, then entering "mydns.test.ovh" and "mydns2.test.ovh" into the `Nameservers` fields.<br>
> Zonemaster will perform a test as if you were using the servers "mydns.test.ovh" and "mydns2.test.ovh" on mydomain.ovh.<br>
> ![Screenshot of the advanced options of Zonemaster form. The two nameservers "mydns.test.ovh" and "mydns2.test.ovh" have been entered in the Nameservers section of the form.](images/zonemaster02.png){.thumbnail}

> [!primary]
>
> When you enter a domain name and click on `Fetch NS from parent zone`{.action} and `Fetch DS from parent zone`{.action}, the DNS servers associated with the domain name will appear, along with the DS record information (DNSSEC) if it has been configured.
> ![Screenshot of the advanced options of Zonemaster form. The "Fetch NS from parent zone" button is highlighted and the nameservers of the domain "mydomain.ovh" are prefilled in the Nameservers section of the form.](images/zonemaster03.png){.thumbnail}

### Result

Once the form has been validated, the results are grouped by type of test. Tests are sorted by severity level:

- **Error**: This part contains errors or missing elements that may cause a malfunction.
- **Warning**: This part is functional, but deserves special attention. The tool has detected that this parameter has characteristics that do not fit within its category, without blocking its operation.
- **Info**: This part is functional and meets the standard criteria in its category.
- **Notice**: This is merely information, with no particular consequences for the functioning of the domain name.

For each test, it is possible to get more details, for instance, to understand why a test failed.

![Screenshot of the result page of Zonemaster for the domain "mydomain.ovh". The "Address" section is expanded.](images/zonemaster04.png){.thumbnail}

### Useful information

If you have any additional questions about Zonemaster, see the [FAQ](https://zonemaster.net/en/faq) on <https://zonemaster.net/>.

## Go further <a name="go-further"></a>

[Editing the DNS servers for an OVHcloud domain name](/pages/web/domains/dns_server_general_information)

[Editing an OVHcloud DNS zone](/pages/web/domains/dns_zone_edit)

[Securing your domain name with DNSSEC](/pages/web/domains/dns_dnssec)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-ie/) .

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-ie/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.
