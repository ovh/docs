---
title: "Introduction"
slug: api
excerpt: "General presentation of the OVHcloud public API for domain names"
section: "API dominios"
order: 1
routes:
  canonical: "https://docs.ovh.com/gb/en/domains/api/"
---

**Last updated 5th May 2022**

<!-- Begin TOC -->

## Table of Contents

- **Introduction**
- [Order a Domain Name](../api-order)
- [Tasks Management](../api-tasks)
- [Manage Contacts of a Domain Name](../api-contact)
- [Managing Eligibility Rules](../api-rules)
- [Configure the Display of Contact Data in the Whois](../api-whois)
- [Configure the DNS of your Domain Name](../api-dns)
- [Transfer a Domain Name](../api-transfer)
<!-- End TOC -->

## Connection to the API

Before reading this documentation, make sure you have read the following page.
It describes the test environment setup and the OVHcloud API connection process, and also helps understanding requests signature.

- [First Steps with the OVHcloud APIs](https://docs.ovh.com/es/api/first-steps-with-ovh-api/)

## Available SDKs

We have released SDKs for several languages, to help you use the API:

- Node.js: [https://github.com/ovh/node-ovh](https://github.com/ovh/node-ovh)
- Python: [https://github.com/ovh/python-ovh](https://github.com/ovh/python-ovh)
- Go : [https://github.com/ovh/go-ovh](https://github.com/ovh/go-ovh)
- C#: [https://github.com/ovh/csharp-ovh](https://github.com/ovh/csharp-ovh)
- PHP: [https://github.com/ovh/php-ovh](https://github.com/ovh/php-ovh)
- Perl: [https://github.com/ovh/perl-ovh](https://github.com/ovh/perl-ovh)
- Swift: [https://github.com/ovh/swift-ovh](https://github.com/ovh/swift-ovh)

<!-- prettier-ignore -->
> [!tabs]
> JavaScript
>> ```javascript
>> var client = require("ovh")({
>>   endpoint: "ovh-eu",
>>   appKey: APPLICATION_KEY,
>>   appSecret: APPLICATION_SECRET,
>>   consumerKey: APPLICATION_CONSUMER_KEY,
>> });
>> ```
> Python
>> ```python
>> import ovh
>>
>> client = ovh.Client(
>>     endpoint = 'ovh-eu',
>>     application_key = APPLICATION_KEY,
>>     application_secret = APPLICATION_SECRET,
>>     consumer_key = APPLICATION_CONSUMER_KEY,
>> )
>> ```
> Go
>> ```go
>> package main
>>
>> import (
>> 	"fmt"
>> 	"github.com/ovh/go-ovh/ovh"
>> )
>>
>> func main() {
>> 	client, err :=  ovh.NewClient(
>> 		"ovh-eu",
>> 		APPLICATION_KEY,
>> 		APPLICATION_SECRET,
>> 		APPLICATION_CONSUMER_KEY,
>> 	)
>> 	if err != nil {
>> 		fmt.Printf("Error: %q\n", err)
>> 		return
>> 	}
>> }
>> ```

## Glossary

We are going to use the following terms throughout this documentation.

- **Registry**: owner of an extension. For example, `.fr` belongs to Afnic, `.com` and `.net` to Verisign.
- **Registrar**: domain names reseller. The registry necessarily sells domain names to final customers through a registrar. OVHcloud is a registrar.
- **Registrant**: owner of a domain name. They are legally responsible of what the domain name is used for, and have all possible rights on the domain name.
- **gTLD** (_Generic Top Level Domain_): generic extension, used world-wide, regulated by an independent third-party authority, called [ICANN](https://www.icann.org/). Extensions `.com` and `.net` are gTLDs.
- **ccTLD** (_Country Code Top Level Domain_): country-specific extension, regulated by the country itself. Due to that, [eligibility rules](../api-rules), or even the selling mode or the lifecycle of domains, may totally differ from an extension to the other. It is the registrar's role to abstract this for the final customer. ccTLDs are the only extensions made from 2 letters exactly: for example, `.fr` for France, `.io` for the British Indian Ocean territory (though it is frequently used by web applications, because of the acronym I/O meaning _Input/Output_).
