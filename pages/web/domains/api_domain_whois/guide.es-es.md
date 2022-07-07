---
title: "Configure the Display of Contact Data in the Whois"
slug: api-whois
excerpt: "Use the OVHcloud public API to configure the display of your contact data in the Whois"
section: "API dominios"
order: 7
routes:
  canonical: "https://docs.ovh.com/gb/en/domains/api-whois/"
---

**Last updated 5th May 2022**

<!-- Reminder to put at the beginning of each page -->

> [!primary]
>
> To follow this guide, make sure you are connected to OVHcloud API. You may find more information on the [API introduction](../api) page if needed.

<!-- Begin TOC -->

## Table of Contents

- [Introduction](../api)
- [Order a Domain Name](../api-order)
- [Tasks Management](../api-tasks)
- [Manage Contacts of a Domain Name](../api-contact)
- [Managing Eligibility Rules](../api-rules)
- **Configure the Display of Contact Data in the Whois**
- [Configure the DNS of your Domain Name](../api-dns)
- [Transfer a Domain Name](../api-transfer)
<!-- End TOC -->

## Introduction

The Whois is a search service that provides information about a domain name.
This information can have various uses but is often used to find and contact the owner of a domain name.
This information is displayed as a non-standardized text, which was displayed in plain text until recently.

RDAP was designed as a successor to Whois and has several advantages over it, including:

-   Support for internationalization
-   Standardization of the data format
-   The ability to provide distinguished access to the data

This section is dedicated to API routes used to set up the disclosure and obfuscation of
the various contact data of a domain name in the Whois and the RDAP.

## Information disclosure (optin)

Since the implementation of the RGPD, the Whois data concerning `admin`, `tech`, `billing` and `owner` contacts are hidden by default
if they are natural persons.
However, it is possible to disclose some or all of the data according the optin rules applied to the domain name.

### Retrieving optin rules

The following API allows you to retrieve the disclosure rules applicable to a domain name.

> [!api]
>
> @api {GET} /domain/{serviceName}/rules/optin

| Parameter     | Required | Description              |
| ------------- | -------- | ------------------------ |
| `serviceName` | true     | The domain name involved |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> [
>>   {
>>     "type": "tech",
>>     "fields": []
>>   },
>>   {
>>     "type": "owner",
>>     "fields": [
>>       "address",
>>       "city",
>>       "country",
>>       "email",
>>       "fax",
>>       "name",
>>       "organisation",
>>       "phone",
>>       "province",
>>       "zip"
>>     ]
>>   }
>> ]
>> ```

<br/>

The following response shows the three different types of rules that can be found:

-   The `admin` contact is omitted in the response, which means that it is not possible to configure the disclosure of its data.
-   The `tech` contact with an empty `field` table means that it is possible to disclose its information. However, the choice of the disclosed information is not customizable (it is all or nothing).
-   The `owner` contact has the most customizable rule. The list in the `field` node indicates that it is possible to choose from it the fields that will be disclosed in the Whois.

### Retrieving the optin configuration of a domain name

The following API is used to retrieve the disclosure configuration applied to a domain name.

> [!api]
>
> @api {GET} /domain/{serviceName}/configurations/optin

| Parameter     | Required | Description              |
| ------------- | -------- | ------------------------ |
| `serviceName` | true     | The domain name involved |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> [
>>   {
>>     "type": "tech",
>>     "fields": []
>>   },
>>   {
>>     "type": "owner",
>>     "fields": ["email", "phone"]
>>   }
>> ]
>> ```

<br/>

The above response can be read as follows:

-   The `admin` and `billing` contacts are not included in the response, which means that no information about them will be displayed in the Whois.
-   The `tech` contact with an empty array in the `fields` field means that the contact's information must be disclosed and will be displayed in the Whois.
-   About the `owner` contact, we can see that only the `email` and `phone` are configured to be disclosed and will be displayed in the Whois.

### Updating the optin configuration

The following API allows you to update the disclosure configuration applied to a domain name.

> [!api]
>
> @api {PUT} /domain/{serviceName}/configurations/optin

| Parameter      | Required | Default | Description              |
| -------------- | -------- | ------- | ------------------------ |
| `serviceName`  | true     |         | The domain name involved |
| `optin` (body) | true     | []      | Disclosure configuration |

<!-- prettier-ignore -->
> [!tabs]
> Request example
>> ```js
>> [
>>   {
>>     "type": "tech",
>>     "fields": []
>>   },
>>   {
>>     "type": "owner",
>>     "fields": ["email", "phone"]
>>   }
>> ]
>> ```
> Response example
>> ```js
>> [
>>   {
>>     "type": "tech",
>>     "fields": []
>>   },
>>   {
>>     "type": "owner",
>>     "fields": ["email", "phone"]
>>   }
>> ]
>> ```

## Email obfuscation

Beyond the disclosure of data on the Whois, OVHcloud gives the possibility to obfuscate the email addresses
of the contacts in the Whois.

Since the implementation of the RGPD, this feature is activated by default for all domains.
However, it is possible to disable this obfuscation depending on the domain name.

### Retrieving email obfuscation rules

The following API allows to know the email obfuscation rules that apply on a domain name.

> [!api]
>
> @api {GET} /domain/{serviceName}/rules/emailsObfuscation

| Parameter     | Required | Description              |
| ------------- | -------- | ------------------------ |
| `serviceName` | true     | The domain name involved |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> [
>>   "admin",
>>   "tech",
>>   "billing",
>>   "owner"
>> ]
>> ```

<br/>

The answer above indicates that email addresses can be obfuscated on the `admin`, `tech`, `billing` and `owner` contacts.

### Retrieving the email obfuscation configuration for a domain name

The following API allows to retrieve the obfuscation configuration applied on a domain name.

> [!api]
>
> @api {GET} /domain/{serviceName}/configurations/obfuscatedEmails

| Parameter     | Required | Description              |
| ------------- | -------- | ------------------------ |
| `serviceName` | true     | The domain name involved |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> [
>>   {
>>     "value": "317ab3c7-6c58-4d6e-827c-2c2b3e82084d@v.o-w-o.info",
>>     "type": "admin",
>>     "status": "todo"
>>   },
>>   {
>>     "value": "c657476c-d55a-4412-a6dc-b0b3a4f8dbe5@i.o-w-o.info",
>>     "type": "tech",
>>     "status": "done"
>>   },
>>   {
>>     "value": "d2dd143a-46f2-4ffe-b52b-187fbca31478@g.o-w-o.info",
>>     "type": "owner",
>>     "status": "done"
>>   }
>> ]
>> ```

<br/>

The above response can be read as follows:

-   The `billing` contact is not present in the response, which means that no email obfuscation is applied to this contact.
-   The `tech` and `owner` contacts have a `status` at `done` and a non-zero `value`, this indicates that both of these contacts have their email obfuscated using this value and the email redirection is active.
-   About the `admin` contact, we can see that the `value` exists but that the `status` is at `todo`, which means that the contact is configured to be obfuscated but the email address redirection is not yet active.

### Updating the configuration of email obfuscation

The following API allows to update the email obfuscation configuration applied on a domain name.

> [!api]
>
> @api {PUT} /domain/{serviceName}/configurations/obfuscatedEmails

| Parameter         | Required | Default | Description                                                |
| ----------------- | -------- | ------- | ---------------------------------------------------------- |
| `serviceName`     | true     |         | The domain name involved                                   |
| `contacts` (body) | true     | []      | List of contact types on which obfuscation must be applied |

<!-- prettier-ignore -->
> [!tabs]
> Request example
>> ```js
>> [
>>   "tech",
>>   "admin",
>>   "owner"
>> ]
>> ```
> Response example
>> ```js
>> [
>>   {
>>     "value": "09ea1006-4ef9-4f76-b886-c6a333e3b000@v.o-w-o.info",
>>     "type": "tech"
>>   },
>>   {
>>     "value": "5db6354f-380b-46df-b09d-711c2eda3584@i.o-w-o.info",
>>     "type": "admin"
>>   },
>>   {
>>     "value": "1c59a37a-4148-4f34-a088-b02c35464482@g.o-w-o.info",
>>     "type": "owner"
>>   }
>> ]
>> ```

### Regeneration of obfuscated emails

The following API allows you to regenerate obfuscated emails of a domain name.

> [!api]
>
> @api {POST} /domain/{serviceName}/configurations/obfuscatedEmails/refresh

| Parameter         | Required | Default | Description                                                    |
| ----------------- | -------- | ------- | -------------------------------------------------------------- |
| `serviceName`     | true     |         | The domain name involved                                       |
| `contacts` (body) | true     | []      | List of contact types on which obfuscation must be regenerated |

<!-- prettier-ignore -->
> [!tabs]
> Request example
>> ```js
>> [
>>   "tech",
>>   "admin",
>>   "owner"
>> ]
>> ```
> Response example
>> Status 200
