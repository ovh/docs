---
title: "Managing Eligibility Rules"
slug: api-rules
excerpt: "Description of the technical format of the domain name eligibility rules"
section: "API dominios"
order: 6
routes:
  canonical: "https://docs.ovh.com/us/en/domains/api-rules/"
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
- **Managing Eligibility Rules**
- [Configure the Display of Contact Data in the Whois](../api-whois)
- [Configure the DNS of your Domain Name](../api-dns)
- [Transfer a Domain Name](../api-transfer)
<!-- End TOC -->

<!-- Reminder to put at the beginning of each CA/US/AU/ASIA/SG page (API CA) -->

We remind you that the given API routes links lead to European API.
Do not forget to replace [https://eu.api.ovh.com](https://eu.api.ovh.com) with [https://ca.api.ovh.com](https://ca.api.ovh.com) in API URLs to use it with your identifier.

## Introduction

Obtaining and owning a domain name is accompanied by legal obligations such as:

- the rules for using a domain name: a `.travel` must necessarily be related to the tourism industry.
- the eligibility rules: the address of the contact who owns a `.eu` must be within the European Union.

These rules are set by the extension operator, the registry, and vary by extension. They also evolve over time.

Regarding the eligibility rules, they relate to elements known to the registrar, such as the domain name, contacts or the registration procedure. These eligibility rules apply to:

- the data of the **owner contact**, **administrator contact** and **technical contact**. For example, the owner address must be within the European Union for a `.eu` domain.
- the data related to the **procedure** for requesting creation, transfer and change of owner. For example, the reason for creating a `.fr` domain representing a city name.

With a growing number of extensions each year, it becomes necessary to automate the management of these rules in order to guarantee reasonable processing times and avoid additional setup fees.
By defining a description of these different rules in a technical format, it is possible to automate the generation of the different required forms as well as the validation of the data entered.

## Technical representation

The eligibility requirements for a domain name can be represented as a **recursive** JSON object.

Here is the example of the JSON representation of `.com` that can be obtained via the following API:

> [!api]
>
> @api {GET} /domain/configurationRule

The rule format will be explained and detailed in the following sections.

<!-- prettier-ignore -->
> [!tabs]
> Hide
>> Click "Show" to see the JSON
> Show: Example rule in JSON format
>> ```json
>> {
>>   "and": [
>>     {
>>       "label": "OWNER_CONTACT",
>>       "type": "contact",
>>       "fields": {
>>         "and": [
>>           {
>>             "label": "address.city",
>>             "type": "string",
>>             "description": "Represents the city of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.country",
>>             "type": "string",
>>             "description": "Represents the country of the owner contact.",
>>             "placeholder": "FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "AC",
>>                   "AD",
>>                   "AE",
>>                   "AF",
>>                   "AG",
>>                   "AI",
>>                   "AL",
>>                   "AM",
>>                   "AO",
>>                   "...",
>>                   "YT",
>>                   "ZA",
>>                   "ZM",
>>                   "ZW"
>>                 ]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "email",
>>             "type": "string",
>>             "description": "Represents the email of the owner contact.",
>>             "placeholder": "lorem@ovh.com",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "firstName",
>>             "type": "string",
>>             "description": "Represents the first name of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "language",
>>             "type": "string",
>>             "description": "Represents the language of the owner contact.",
>>             "placeholder": "fr_FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "fr_FR",
>>                   "pl_PL",
>>                   "de_DE",
>>                   "es_ES",
>>                   "en_GB",
>>                   "it_IT",
>>                   "pt_PT",
>>                   "nl_NL",
>>                   "cs_CZ",
>>                   "en_IE",
>>                   "lt_LT",
>>                   "fi_FI",
>>                   "fr_SN",
>>                   "fr_TN",
>>                   "fr_MA",
>>                   "en_AU",
>>                   "en_CA",
>>                   "fr_CA",
>>                   "en_US",
>>                   "es_ES"
>>                 ]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "lastName",
>>             "type": "string",
>>             "description": "Represents the last name of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "legalForm",
>>             "type": "string",
>>             "description": "Represents the legal status of owner.",
>>             "placeholder": "individual",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": ["association", "corporation", "individual", "other"]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.line1",
>>             "type": "string",
>>             "description": "Represents the address of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "organisationName",
>>             "type": "string",
>>             "description": "Represents the organisation of the owner contact",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "ne",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "phone",
>>             "type": "string",
>>             "description": "Represents the phone of the owner contact.",
>>             "placeholder": "+33.612345678",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.zip",
>>             "type": "string",
>>             "description": "Represents the zip of the owner contact.",
>>             "placeholder": "12345",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "address.country",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "notcontains",
>>                         "values": [
>>                           "IE",
>>                           "AZ",
>>                           "DJ",
>>                           "LA",
>>                           "CI",
>>                           "AN",
>>                           "HK",
>>                           "BO",
>>                           "PA",
>>                           "HN",
>>                           "NI",
>>                           "SV",
>>                           "CO"
>>                         ]
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           }
>>         ],
>>         "constraints": []
>>       },
>>       "description": "Rule related to the domain owner",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     },
>>     {
>>       "label": "OWNER_LEGAL_AGE",
>>       "type": "bool",
>>       "description": "The owner must be of legal age to acquire a domain name.",
>>       "placeholder": "true",
>>       "constraints": []
>>     }
>>   ],
>>   "constraints": []
>> }
>> ```

## Format of objects that constitute an eligibility

- `rule`: primary object representing eligibility requirements. It contains the other objects described below.
- `description`: detailed information about the field.
- `label`: indicates on which element a rule applies: `authInfo`, `OWNER_CONTACT`, `vat`, `firstName`, `lastName`, etc. An exhaustive list is available in the [Labels](#labels) section.
- `type`: specifies the expected format of a label: `string`, `number`, `bool`, `contact`, etc. An exhaustive list is available in the [Types](#types) section.
- `constraint`: represents constraints applied to the value of a label.
    - `operator`: represents the constraint type applied to the label. An exhaustive list is available in the [Constraints](#constraints) section.
- `condition`: specifies the conditions as a `rule` of a label or constraint. If the condition is met, then the associated rule must be applied.
- `fields`: rules to be applied to the fields constituting a contact or domain element.
- `placeholder`: example of possible value.
- `and`, `or`: used to combine rules.

#### Labels <a name="labels"></a>

| Label               | Suggested Representation | Description                                               |
| ------------------- | ------------------------ | --------------------------------------------------------- |
| `ACCEPT_CONDITIONS` | Check box                | Special conditions to accept                              |
| `REASON`            | Multi-line text field    | Reason for purchasing the domain name                     |
| `CLAIMS_NOTICE`     | Check box                | Information about the _claim notice_ to be accepted       |
| `PROTECTED_CODE`    | Text field               | Code requested when a domain is protected by the registry |
| `AUTH_INFO`         | Text field               | Domain-related code for a transfer request                |
| `DOMAIN_CONFIG`     | Form                     | List of fields linked to a domain                         |
| `OWNER_CONTACT`     | Form                     | List of fields linked to the owner contact                |
| `ADMIN_ACCOUNT`     | Form                     | List of fields linked to the administrative contact       |
| `TECH_ACCOUNT`      | Form                     | List of fields linked to the technical contact            |
| `OWNER_LEGAL_AGE`   | Check box                | The owner must be of legal age                            |

#### Types <a name="types"></a>

| Type           | Suggested Representation | Description                                              |
| -------------- | ------------------------ | -------------------------------------------------------- |
| `string`       | Text field               | -                                                        |
| `string[]`     | Text field list          | -                                                        |
| `text`         | Multi-line text field    | -                                                        |
| `bool`         | Check box                | -                                                        |
| `number`       | Numeric field            | -                                                        |
| `ISO8601_date` | Date field               | Format [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) |
| `contact`      | Form                     | Contains the fields linked to the contact                |
| `domain`       | Form                     | Contains the fields linked to the domain                 |

> [!primary]
>
> The `domain` type is currently used only for the `ac.uk` and `gov.uk` extensions.
> These domains have a very specific process of creation, conditions of appropriation and conditions of use.

#### Constraints <a name="constraints"></a>

| Constraint     | Suggested Representation | Comment                                                               |
| -------------- | ------------------------ | --------------------------------------------------------------------- |
| `required`     | red asterisk             | The field is required                                                 |
| `readonly`     | grey field               | The field is read-only                                                |
| `eq`           | -                        | The field must be equal to the associated value                       |
| `ne`           | -                        | The field must be different from the associated value                 |
| `gt`           | -                        | The field must be greater than the associated value                   |
| `lt`           | -                        | The field must be less than the associated value                      |
| `minlength`    | -                        | Field length must be greater than the associated value                |
| `maxlength`    | -                        | Field length must be less than the associated value                   |
| `between`      | -                        | Field length must be between associated values                        |
| `contains`     | -                        | The field must be at least one of the associated values               |
| `notcontains`  | -                        | The field must not be equal to any of the associated values           |
| `empty`        | -                        | The field must be empty                                               |
| `notempty`     | -                        | The field must not be empty                                           |
| `match`        | -                        | The field must satisfy the regular expression in the associated value |
| `shouldbetrue` | check box                | field must be set to `true`, `1` or `"1"`                             |

## Step-by-step explanations

### Constraint on a primitive label

Let's start with an example imposing only one rule for ordering a domain name. This rule requires us to accept special conditions.

<!-- prettier-ignore -->
> [!tabs]
> Rule for acceptance of special conditions
>> ```json
>> {
>>   "label": "ACCEPT_CONDITIONS",
>>   "type": "bool",
>>   "description": "The registry has some special conditions that must be accepted.",
>>   "placeholder": "true",
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     },
>>     {
>>       "operator": "shouldbetrue"
>>     }
>>   ]
>> }
>> ```

With this rule, when ordering, the domain must have a [configuration](../api-order/#configurations-management) labelled `ACCEPT_CONDITIONS` with a boolean value of `true`, `1` or `"1"`.

### The operators "and" and "or"

Let’s start with a sample rule for two labels: `ACCEPT_CONDITIONS` and `REASON`.
Both rules can be written individually as follows:

<!-- prettier-ignore -->
> [!tabs]
> Rule for acceptance of special conditions
>> ```json
>> {
>>   "label": "ACCEPT_CONDITIONS",
>>   "type": "bool",
>>   "description": "The registry has some special conditions that must be accepted.",
>>   "placeholder": "true",
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     },
>>     {
>>       "operator": "shouldbetrue"
>>     }
>>   ]
>> }
>> ```

<!-- prettier-ignore -->
> [!tabs]
> Justification rule
>> ```json
>> {
>>   "label": "REASON",
>>   "type": "text",
>>   "description": "The purchase of this domain name must be justified",
>>   "placeholder": "I am the mayor of OVHcity and I want a domain name for my city",
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     }
>>   ]
>> }
>> ```

These two rules can be combined using the `and` operator of the `rule` object. The operator requires all labels to respect their respective constraints. For example:

<!-- prettier-ignore -->
> [!tabs]
> Rules merged into one with an `and` operator
>> ```json
>> {
>>   "and": [
>>     {
>>       "label": "ACCEPT_CONDITIONS",
>>       "type": "bool",
>>       "description": "The registry has some special conditions that must be accepted.",
>>       "placeholder": "true",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         },
>>         {
>>           "operator": "shouldbetrue"
>>         }
>>       ]
>>     },
>>     {
>>       "label": "REASON",
>>       "type": "text",
>>       "description": "Reason for purchase",
>>       "placeholder": "I am the mayor of OVHcity and I want a domain name for my city",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     }
>>   ]
>> }
>> ```

The `or` operator, similarly, requires at least one of the labels to meet its respective constraints for the rule to be valid.

### Constraint on a label with a complex type

Constraint handling on a complex type (`contact`, `domain`) applies to a set of primitive fields (a contact consists of a last name, first name, etc.).
To represent rules on an object, the `fields` node is used. Each field is represented by a `rule` object. An object of this type contains several fields that are always applied using the `and` operator. Here is an example rule on a contact object:

<!-- prettier-ignore -->
> [!tabs]
> Hide
>> Click "Show" to see the JSON
> Show: Constraint on the fields of a `contact`
>> ```json
>> {
>>   "label": "OWNER_CONTACT",
>>   "description": "Owner contact rule",
>>   "type": "contact",
>>   "fields": {
>>     "and": [
>>       {
>>         "label": "firstName",
>>         "type": "string",
>>         "description": "Represents the first name of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "lastName",
>>         "type": "string",
>>         "description": "Represents the last name of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "email",
>>         "type": "string",
>>         "description": "Represents the email address of the owner contact.",
>>         "placeholder": "lorem@ovh.com",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "legalForm",
>>         "type": "string",
>>         "description": "Represents the legal form of the owner contact.",
>>         "placeholder": "individual",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": ["association", "corporation", "individual", "other"]
>>           },
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.country",
>>         "type": "string",
>>         "description": "Represents the country of the owner contact.",
>>         "placeholder": "FR",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": ["FR", "DE", "CA"]
>>           },
>>           {
>>             "operator": "required"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.line1",
>>         "type": "string",
>>         "description": "Represents the address of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.zip",
>>         "type": "string",
>>         "description": "Represents the zip code of the owner contact.",
>>         "placeholder": "12345",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       }
>>     ],
>>     "constraints": []
>>   },
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     }
>>   ]
>> }
>> ```

This rule states:

- That an `OWNER_CONTACT` configuration is required
- That it must include all the following fields:
    - `firstName` with a maximum size of 255 characters
    - `lastName` with a maximum size of 255 characters
    - `email` with a maximum size of 255 characters
    - `legalForm` with one of the values `association`, `corporation`, `individual` or `other`
    - `address.country` with one of the values `FR`, `DE` or `CA`
    - `address.line1` with a maximum size of 255 characters
    - and `address.zip` with a maximum size of 255 characters

> [!primary]
>
> The `"constraints": []` field just states that no additional constraints apply on the node.

### Conditions

Sometimes we need to specify under what circumstances a rule applies. For example, the organisation name (`organisationName`) is required for a non-individual contact (`legalForm` other than `individual`). To do this, we will use a condition. This is a `rule` that, if valid, activates the rule it's conditioning.

#### Simple example

Here is a simple fictional example: a registry wants specific conditions (`ACCEPT_CONDITIONS`) to be accepted only if there is no reason (`REASON`) provided.

<!-- prettier-ignore -->
> [!tabs]
> Example of a rule with a condition
>> ```json
>> {
>>   "label": "ACCEPT_CONDITIONS",
>>   "type": "bool",
>>   "description": "The registry has special conditions that must be accepted",
>>   "constraints": [
>>     {
>>       "operator": "required",
>>       "conditions": {
>>         "label": "REASON",
>>         "type": "text",
>>         "description": "Reason for purchase",
>>         "placeholder": "I am the mayor of OVHcity and I want a domain name for my city",
>>         "constraints": [
>>           {
>>             "operator": "empty"
>>           }
>>         ]
>>       }
>>     }
>>   ]
>> }
>> ```

This rule indicates that the `ACCEPT_CONDITIONS` configuration is mandatory (constraint `required`) only if the `REASON` configuration is not filled (constraint `empty`). The `ACCEPT_CONDITIONS` configuration becomes optional but can still be filled in.

#### Example on a contact

Let's now take the more concrete example explained at the beginning of this section: organisation name is required for a business/associative contact (`legalForm` other than `individual`).

<!-- prettier-ignore -->
> [!tabs]
> Hide
>> Click "Show" to see the JSON
> Show: Example condition on a `contact` field
>> ```json
>> {
>>   "label": "OWNER_CONTACT",
>>   "type": "contact",
>>   "fields": {
>>     "and": [
>>       {
>>         "label": "legalForm",
>>         "type": "string",
>>         "description": "Represents the legal status of owner.",
>>         "placeholder": "individual",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": ["association", "corporation", "individual", "other"]
>>           },
>>           {
>>             "operator": "required"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "organisationName",
>>         "type": "string",
>>         "description": "Represents the organisation of the owner contact",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required",
>>             "conditions": {
>>               "label": "OWNER_CONTACT",
>>               "type": "contact",
>>               "fields": {
>>                 "label": "legalForm",
>>                 "type": "string",
>>                 "constraints": [
>>                   {
>>                     "operator": "ne",
>>                     "value": "individual"
>>                   },
>>                   {
>>                     "operator": "required"
>>                   }
>>                 ]
>>               },
>>               "constraints": [
>>                 {
>>                   "operator": "required"
>>                 }
>>               ]
>>             }
>>           }
>>         ]
>>       }
>>     ],
>>     "constraints": []
>>   },
>>   "description": "Rule related to the domain owner",
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     }
>>   ]
>> }
>> ```

## Real examples

Following this first part explaining the technical representation of the eligibility rules, here are some concrete and real examples.

### Generic rules

Most extensions (mainly gTLDs and newGTLDs) share the same eligibility rules. You can get most of the extensions available for sale if you have a contact that respects them.

#### Creation of a domain name

<!-- prettier-ignore -->
> [!tabs]
> Hide
>> Click "Show" to see the JSON
> Show: Domain name creation rule
>> ```json
>> {
>>   "and": [
>>     {
>>       "label": "OWNER_CONTACT",
>>       "type": "contact",
>>       "fields": {
>>         "and": [
>>           {
>>             "label": "address.city",
>>             "type": "string",
>>             "description": "Represents the city of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.country",
>>             "type": "string",
>>             "description": "Represents the country of the owner contact.",
>>             "placeholder": "FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "AC",
>>                   "AD",
>>                   "AE",
>>                   "AF",
>>                   "AG",
>>                   "...",
>>                   "ZA",
>>                   "ZM",
>>                   "ZW"
>>                 ]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "email",
>>             "type": "string",
>>             "description": "Represents the email of the owner contact.",
>>             "placeholder": "lorem@ovh.com",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "firstName",
>>             "type": "string",
>>             "description": "Represents the first name of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "language",
>>             "type": "string",
>>             "description": "Represents the language of the owner contact.",
>>             "placeholder": "fr_FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "fr_FR",
>>                   "pl_PL",
>>                   "de_DE",
>>                   "es_ES",
>>                   "en_GB",
>>                   "it_IT",
>>                   "pt_PT",
>>                   "nl_NL",
>>                   "cs_CZ",
>>                   "en_IE",
>>                   "lt_LT",
>>                   "fi_FI",
>>                   "fr_SN",
>>                   "fr_TN",
>>                   "fr_MA",
>>                   "en_AU",
>>                   "en_CA",
>>                   "fr_CA",
>>                   "en_US",
>>                   "es_ES"
>>                 ]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "lastName",
>>             "type": "string",
>>             "description": "Represents the last name of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "legalForm",
>>             "type": "string",
>>             "description": "Represents the legal status of owner.",
>>             "placeholder": "individual",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": ["association", "corporation", "individual", "other"]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.line1",
>>             "type": "string",
>>             "description": "Represents the address of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "organisationName",
>>             "type": "string",
>>             "description": "Represents the organisation of the owner contact",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "ne",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "phone",
>>             "type": "string",
>>             "description": "Represents the phone of the owner contact.",
>>             "placeholder": "+33.612345678",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.zip",
>>             "type": "string",
>>             "description": "Represents the zip of the owner contact.",
>>             "placeholder": "12345",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "address.country",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "notcontains",
>>                         "values": [
>>                           "IE",
>>                           "AZ",
>>                           "DJ",
>>                           "LA",
>>                           "CI",
>>                           "AN",
>>                           "HK",
>>                           "BO",
>>                           "PA",
>>                           "HN",
>>                           "NI",
>>                           "SV",
>>                           "CO"
>>                         ]
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           }
>>         ],
>>         "constraints": []
>>       },
>>       "description": "Rule related to the domain owner",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     },
>>     {
>>       "label": "OWNER_LEGAL_AGE",
>>       "type": "bool",
>>       "description": "The owner must be of legal age to acquire a domain name.",
>>       "placeholder": "true",
>>       "constraints": []
>>     }
>>   ],
>>   "constraints": []
>> }
>> ```

#### Domain name transfer

<!-- prettier-ignore -->
> [!tabs]
> Hide
>> Click "Show" to see the JSON
> Show: Domain name transfer rule
>> ```json
>> {
>>   "and": [
>>     {
>>       "label": "OWNER_CONTACT",
>>       "type": "contact",
>>       "fields": {
>>         "and": [
>>           {
>>             "label": "address.city",
>>             "type": "string",
>>             "description": "Represents the city of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.country",
>>             "type": "string",
>>             "description": "Represents the country of the owner contact.",
>>             "placeholder": "FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": ["AC", "AD", "AE", "AF", "...", "ZA", "ZM", "ZW"]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "email",
>>             "type": "string",
>>             "description": "Represents the email of the owner contact.",
>>             "placeholder": "lorem@ovh.com",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "firstName",
>>             "type": "string",
>>             "description": "Represents the first name of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "language",
>>             "type": "string",
>>             "description": "Represents the language of the owner contact.",
>>             "placeholder": "fr_FR",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "fr_FR",
>>                   "pl_PL",
>>                   "de_DE",
>>                   "es_ES",
>>                   "en_GB",
>>                   "it_IT",
>>                   "pt_PT",
>>                   "nl_NL",
>>                   "cs_CZ",
>>                   "en_IE",
>>                   "lt_LT",
>>                   "fi_FI",
>>                   "fr_SN",
>>                   "fr_TN",
>>                   "fr_MA",
>>                   "en_AU",
>>                   "en_CA",
>>                   "fr_CA",
>>                   "en_US",
>>                   "es_ES"
>>                 ]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "lastName",
>>             "type": "string",
>>             "description": "Represents the lastname of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "eq",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "legalForm",
>>             "type": "string",
>>             "description": "Represents the legal status of owner.",
>>             "placeholder": "individual",
>>             "constraints": [
>>               {
>>                 "operator": "contains",
>>                 "values": ["association", "corporation", "individual", "other"]
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.line1",
>>             "type": "string",
>>             "description": "Represents the address of the owner contact.",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "organisationName",
>>             "type": "string",
>>             "description": "Represents the organisation of the owner contact",
>>             "placeholder": "lorem",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "legalForm",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "ne",
>>                         "value": "individual"
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "phone",
>>             "type": "string",
>>             "description": "Represents the phone of the owner contact.",
>>             "placeholder": "+33.612345678",
>>             "constraints": [
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.zip",
>>             "type": "string",
>>             "description": "Represents the zip of the owner contact.",
>>             "placeholder": "12345",
>>             "constraints": [
>>               {
>>                 "operator": "required",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "label": "address.country",
>>                     "type": "string",
>>                     "constraints": [
>>                       {
>>                         "operator": "notcontains",
>>                         "values": [
>>                           "IE",
>>                           "AZ",
>>                           "DJ",
>>                           "LA",
>>                           "CI",
>>                           "AN",
>>                           "HK",
>>                           "BO",
>>                           "PA",
>>                           "HN",
>>                           "NI",
>>                           "SV",
>>                           "CO"
>>                         ]
>>                       },
>>                       {
>>                         "operator": "required"
>>                       }
>>                     ]
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           }
>>         ],
>>         "constraints": []
>>       },
>>       "description": "Rule related to the domain owner",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     },
>>     {
>>       "label": "OWNER_LEGAL_AGE",
>>       "type": "bool",
>>       "description": "The owner must be of legal age to acquire a domain name.",
>>       "placeholder": "true",
>>       "constraints": []
>>     }
>>   ],
>>   "constraints": []
>> }
>> ```

#### Update owner contact

<!-- prettier-ignore -->
> [!tabs]
> Hide
>> Click "Show" to see the JSON
> Show: Update owner contact rule
>> ```json
>> {
>>     "label": "OWNER_CONTACT",
>>     "type": "contact",
>>     "fields": {
>>         "and": [
>>             {
>>                 "label": "address.city",
>>                 "type": "string",
>>                 "description": "Represents the city of the owner contact.",
>>                 "placeholder": "lorem",
>>                 "constraints": [
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "address.country",
>>                 "type": "string",
>>                 "description": "Represents the country of the owner contact.",
>>                 "placeholder": "FR",
>>                 "constraints": [
>>                     {
>>                         "operator": "contains",
>>                         "values": [
>>                             "AC",
>>                             "AD",
>>                             "AE",
>>                             "AF",
>>                             "AG",
>>                             "...",
>>                             "YT",
>>                             "ZA",
>>                             "ZM",
>>                             "ZW"
>>                         ]
>>                     },
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "address.country",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "contains",
>>                                         "values": [
>>                                             "AD",
>>                                             "AE",
>>                                             "AF",
>>                                             "AG",
>>                                             "WS",
>>                                             "YT",
>>                                             "ZA",
>>                                             "ZM"
>>                                         ]
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "email",
>>                 "type": "string",
>>                 "description": "Represents the email of the owner contact.",
>>                 "placeholder": "lorem@ovh.com",
>>                 "constraints": [
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "email",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "firstName",
>>                 "type": "string",
>>                 "description": "Represents the first name of the owner contact.",
>>                 "placeholder": "lorem",
>>                 "constraints": [
>>                     {
>>                         "operator": "required",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "legalForm",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "eq",
>>                                         "value": "individual"
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "and": [
>>                                 {
>>                                     "label": "OWNER_CONTACT",
>>                                     "type": "contact",
>>                                     "fields": {
>>                                         "label": "legalForm",
>>                                         "type": "string",
>>                                         "constraints": [
>>                                             {
>>                                                 "operator": "eq",
>>                                                 "value": "individual"
>>                                             },
>>                                             {
>>                                                 "operator": "required"
>>                                             }
>>                                         ]
>>                                     },
>>                                     "constraints": [
>>                                         {
>>                                             "operator": "required"
>>                                         }
>>                                     ]
>>                                 },
>>                                 {
>>                                     "label": "OWNER_CONTACT",
>>                                     "type": "contact",
>>                                     "fields": {
>>                                         "label": "firstName",
>>                                         "type": "string",
>>                                         "constraints": [
>>                                             {
>>                                                 "operator": "required"
>>                                             }
>>                                         ]
>>                                     },
>>                                     "constraints": [
>>                                         {
>>                                             "operator": "required"
>>                                         }
>>                                     ]
>>                                 }
>>                             ],
>>                             "constraints": []
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "language",
>>                 "type": "string",
>>                 "description": "Represents the language of the owner contact.",
>>                 "placeholder": "fr_FR",
>>                 "constraints": [
>>                     {
>>                         "operator": "contains",
>>                         "values": [
>>                             "fr_FR",
>>                             "pl_PL",
>>                             "de_DE",
>>                             "es_ES",
>>                             "en_GB",
>>                             "it_IT",
>>                             "pt_PT",
>>                             "nl_NL",
>>                             "cs_CZ",
>>                             "en_IE",
>>                             "lt_LT",
>>                             "fi_FI",
>>                             "fr_SN",
>>                             "fr_TN",
>>                             "fr_MA",
>>                             "en_AU",
>>                             "en_CA",
>>                             "fr_CA",
>>                             "en_US",
>>                             "es_ES"
>>                         ]
>>                     },
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "lastName",
>>                 "type": "string",
>>                 "description": "Represents the last name of the owner contact.",
>>                 "placeholder": "lorem",
>>                 "constraints": [
>>                     {
>>                         "operator": "required",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "legalForm",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "eq",
>>                                         "value": "individual"
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "and": [
>>                                 {
>>                                     "label": "OWNER_CONTACT",
>>                                     "type": "contact",
>>                                     "fields": {
>>                                         "label": "legalForm",
>>                                         "type": "string",
>>                                         "constraints": [
>>                                             {
>>                                                 "operator": "eq",
>>                                                 "value": "individual"
>>                                             },
>>                                             {
>>                                                 "operator": "required"
>>                                             }
>>                                         ]
>>                                     },
>>                                     "constraints": [
>>                                         {
>>                                             "operator": "required"
>>                                         }
>>                                     ]
>>                                 },
>>                                 {
>>                                     "label": "OWNER_CONTACT",
>>                                     "type": "contact",
>>                                     "fields": {
>>                                         "label": "lastName",
>>                                         "type": "string",
>>                                         "constraints": [
>>                                             {
>>                                                 "operator": "required"
>>                                             }
>>                                         ]
>>                                     },
>>                                     "constraints": [
>>                                         {
>>                                             "operator": "required"
>>                                         }
>>                                     ]
>>                                 }
>>                             ],
>>                             "constraints": []
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "legalForm",
>>                 "type": "string",
>>                 "description": "Represents the legal status of owner.",
>>                 "placeholder": "individual",
>>                 "constraints": [
>>                     {
>>                         "operator": "contains",
>>                         "values": [
>>                             "association",
>>                             "corporation",
>>                             "individual",
>>                             "other"
>>                         ]
>>                     },
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "legalForm",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "contains",
>>                                         "values": [
>>                                             "association",
>>                                             "corporation",
>>                                             "individual",
>>                                             "other"
>>                                         ]
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "address.line1",
>>                 "type": "string",
>>                 "description": "Represents the address of the owner contact.",
>>                 "placeholder": "lorem",
>>                 "constraints": [
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "organisationName",
>>                 "type": "string",
>>                 "description": "Represents the organisation of the owner contact",
>>                 "placeholder": "lorem",
>>                 "constraints": [
>>                     {
>>                         "operator": "required",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "legalForm",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "ne",
>>                                         "value": "individual"
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "readonly",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "organisationName",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "phone",
>>                 "type": "string",
>>                 "description": "Represents the phone of the owner contact.",
>>                 "placeholder": "+33.612345678",
>>                 "constraints": [
>>                     {
>>                         "operator": "required"
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             },
>>             {
>>                 "label": "address.zip",
>>                 "type": "string",
>>                 "description": "Represents the zip of the owner contact.",
>>                 "placeholder": "12345",
>>                 "constraints": [
>>                     {
>>                         "operator": "required",
>>                         "conditions": {
>>                             "label": "OWNER_CONTACT",
>>                             "type": "contact",
>>                             "fields": {
>>                                 "label": "address.country",
>>                                 "type": "string",
>>                                 "constraints": [
>>                                     {
>>                                         "operator": "notcontains",
>>                                         "values": [
>>                                             "IE",
>>                                             "AZ",
>>                                             "DJ",
>>                                             "LA",
>>                                             "CI",
>>                                             "AN",
>>                                             "HK",
>>                                             "BO",
>>                                             "PA",
>>                                             "HN",
>>                                             "NI",
>>                                             "SV",
>>                                             "CO"
>>                                         ]
>>                                     },
>>                                     {
>>                                         "operator": "required"
>>                                     }
>>                                 ]
>>                             },
>>                             "constraints": [
>>                                 {
>>                                     "operator": "required"
>>                                 }
>>                             ]
>>                         }
>>                     },
>>                     {
>>                         "operator": "maxlength",
>>                         "value": "255"
>>                     }
>>                 ]
>>             }
>>         ],
>>         "constraints": []
>>     },
>>     "description": "Rule related to the domain owner",
>>     "constraints": [
>>         {
>>             "operator": "required"
>>         }
>>     ]
>> }
>> ```

#### Owner change

<!-- prettier-ignore -->
> [!tabs]
> Hide
>> Click "Show" to see the JSON
> Show: Owner change rule
>> ```json
>> {
>>   "label": "OWNER_CONTACT",
>>   "type": "contact",
>>   "fields": {
>>     "and": [
>>       {
>>         "label": "address.city",
>>         "type": "string",
>>         "description": "Represents the city of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.country",
>>         "type": "string",
>>         "description": "Represents the country of the owner contact.",
>>         "placeholder": "FR",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": [
>>               "AC",
>>               "AD",
>>               "AE",
>>               "AF",
>>               "...",
>>               "ZA",
>>               "ZM",
>>               "ZW"
>>             ]
>>           },
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "email",
>>         "type": "string",
>>         "description": "Represents the email of the owner contact.",
>>         "placeholder": "lorem@ovh.com",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "firstName",
>>         "type": "string",
>>         "description": "Represents the first name of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required",
>>             "conditions": {
>>               "label": "OWNER_CONTACT",
>>               "type": "contact",
>>               "fields": {
>>                 "label": "legalForm",
>>                 "type": "string",
>>                 "constraints": [
>>                   {
>>                     "operator": "eq",
>>                     "value": "individual"
>>                   },
>>                   {
>>                     "operator": "required"
>>                   }
>>                 ]
>>               },
>>               "constraints": [
>>                 {
>>                   "operator": "required"
>>                 }
>>               ]
>>             }
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "language",
>>         "type": "string",
>>         "description": "Represents the language of the owner contact.",
>>         "placeholder": "fr_FR",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": [
>>               "fr_FR",
>>               "pl_PL",
>>               "de_DE",
>>               "es_ES",
>>               "en_GB",
>>               "it_IT",
>>               "pt_PT",
>>               "nl_NL",
>>               "cs_CZ",
>>               "en_IE",
>>               "lt_LT",
>>               "fi_FI",
>>               "fr_SN",
>>               "fr_TN",
>>               "fr_MA",
>>               "en_AU",
>>               "en_CA",
>>               "fr_CA",
>>               "en_US",
>>               "es_ES"
>>             ]
>>           },
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "lastName",
>>         "type": "string",
>>         "description": "Represents the last name of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required",
>>             "conditions": {
>>               "label": "OWNER_CONTACT",
>>               "type": "contact",
>>               "fields": {
>>                 "label": "legalForm",
>>                 "type": "string",
>>                 "constraints": [
>>                   {
>>                     "operator": "eq",
>>                     "value": "individual"
>>                   },
>>                   {
>>                     "operator": "required"
>>                   }
>>                 ]
>>               },
>>               "constraints": [
>>                 {
>>                   "operator": "required"
>>                 }
>>               ]
>>             }
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "legalForm",
>>         "type": "string",
>>         "description": "Represents the legal status of owner.",
>>         "placeholder": "individual",
>>         "constraints": [
>>           {
>>             "operator": "contains",
>>             "values": [
>>               "association",
>>               "corporation",
>>               "individual",
>>               "other"
>>             ]
>>           },
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.line1",
>>         "type": "string",
>>         "description": "Represents the address of the owner contact.",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "organisationName",
>>         "type": "string",
>>         "description": "Represents the organisation of the owner contact",
>>         "placeholder": "lorem",
>>         "constraints": [
>>           {
>>             "operator": "required",
>>             "conditions": {
>>               "label": "OWNER_CONTACT",
>>               "type": "contact",
>>               "fields": {
>>                 "label": "legalForm",
>>                 "type": "string",
>>                 "constraints": [
>>                   {
>>                     "operator": "ne",
>>                     "value": "individual"
>>                   },
>>                   {
>>                     "operator": "required"
>>                   }
>>                 ]
>>               },
>>               "constraints": [
>>                 {
>>                   "operator": "required"
>>                 }
>>               ]
>>             }
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "phone",
>>         "type": "string",
>>         "description": "Represents the phone of the owner contact.",
>>         "placeholder": "+33.612345678",
>>         "constraints": [
>>           {
>>             "operator": "required"
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       },
>>       {
>>         "label": "address.zip",
>>         "type": "string",
>>         "description": "Represents the zip of the owner contact.",
>>         "placeholder": "12345",
>>         "constraints": [
>>           {
>>             "operator": "required",
>>             "conditions": {
>>               "label": "OWNER_CONTACT",
>>               "type": "contact",
>>               "fields": {
>>                 "label": "address.country",
>>                 "type": "string",
>>                 "constraints": [
>>                   {
>>                     "operator": "notcontains",
>>                     "values": [
>>                       "IE",
>>                       "AZ",
>>                       "DJ",
>>                       "LA",
>>                       "CI",
>>                       "AN",
>>                       "HK",
>>                       "BO",
>>                       "PA",
>>                       "HN",
>>                       "NI",
>>                       "SV",
>>                       "CO"
>>                     ]
>>                   },
>>                   {
>>                     "operator": "required"
>>                   }
>>                 ]
>>               },
>>               "constraints": [
>>                 {
>>                   "operator": "required"
>>                 }
>>               ]
>>             }
>>           },
>>           {
>>             "operator": "maxlength",
>>             "value": "255"
>>           }
>>         ]
>>       }
>>     ],
>>     "constraints": []
>>   },
>>   "description": "Rule related to the domain owner",
>>   "constraints": [
>>     {
>>       "operator": "required"
>>     }
>>   ]
>> }
>> ```

### Specific rules

Some ccTLDs have specific eligibility rules, in particular on the domain owner's country of residence.

#### Case of `.berlin`

The case of `.berlin` is interesting because it has special eligibility rules. To have a `.berlin`, the administrative **or** the owner contact of the domain must be resident in Berlin.

To do this, we _condition_ the _constraint_ of the _value_ of the `address.country` and `address.city` fields of the owner contact to the values of the `address.country` and `address.city` fields of the administrator, and vice versa.

This is represented by the following rule. For the sake of clarity, the rules on other fields and labels have been withdrawn.

<!-- prettier-ignore -->
> [!tabs]
> Hide
>> Click "Show" to see the JSON
> Show: Eligibility rule of `.berlin`
>> ```json
>> {
>>   "and": [
>>     {
>>       "label": "ADMIN_ACCOUNT",
>>       "type": "contact",
>>       "fields": {
>>         "and": [
>>           {
>>             "label": "address.country",
>>             "type": "string",
>>             "description": "Represents the country of the admin contact.",
>>             "placeholder": "DE",
>>             "constraints": [
>>               {
>>                 "operator": "eq",
>>                 "value": "DE",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "or": [
>>                       {
>>                         "label": "address.country",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "DE"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       },
>>                       {
>>                         "label": "address.city",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "Berlin"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       }
>>                     ],
>>                     "constraints": []
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.city",
>>             "type": "string",
>>             "description": "Represents the city of the admin contact.",
>>             "placeholder": "Berlin",
>>             "constraints": [
>>               {
>>                 "operator": "eq",
>>                 "value": "Berlin",
>>                 "conditions": {
>>                   "label": "OWNER_CONTACT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "or": [
>>                       {
>>                         "label": "address.country",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "DE"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       },
>>                       {
>>                         "label": "address.city",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "Berlin"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       }
>>                     ],
>>                     "constraints": []
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           }
>>         ],
>>         "constraints": []
>>       },
>>       "description": "Rule related to the admin domain",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     },
>>     {
>>       "label": "OWNER_CONTACT",
>>       "type": "contact",
>>       "fields": {
>>         "and": [
>>           {
>>             "label": "address.city",
>>             "type": "string",
>>             "description": "Represents the city of the owner contact.",
>>             "placeholder": "Berlin",
>>             "constraints": [
>>               {
>>                 "operator": "eq",
>>                 "value": "Berlin",
>>                 "conditions": {
>>                   "label": "ADMIN_ACCOUNT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "or": [
>>                       {
>>                         "label": "address.country",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "DE"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       },
>>                       {
>>                         "label": "address.city",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "Berlin"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       }
>>                     ],
>>                     "constraints": []
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           },
>>           {
>>             "label": "address.country",
>>             "type": "string",
>>             "description": "Represents the country of the owner contact.",
>>             "placeholder": "FR",
>>             "constraints": [
>>               {
>>                 "operator": "eq",
>>                 "value": "DE",
>>                 "conditions": {
>>                   "label": "ADMIN_ACCOUNT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "or": [
>>                       {
>>                         "label": "address.country",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "DE"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       },
>>                       {
>>                         "label": "address.city",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "ne",
>>                             "value": "Berlin"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       }
>>                     ],
>>                     "constraints": []
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "required"
>>               },
>>               {
>>                 "operator": "contains",
>>                 "values": [
>>                   "AC",
>>                   "AD",
>>                   "AE",
>>                   "AF",
>>                   "AG",
>>                   "AI",
>>                   "AL",
>>                   "...",
>>                   "XK",
>>                   "YE",
>>                   "YT",
>>                   "ZA",
>>                   "ZM",
>>                   "ZW"
>>                 ],
>>                 "conditions": {
>>                   "label": "ADMIN_ACCOUNT",
>>                   "type": "contact",
>>                   "fields": {
>>                     "or": [
>>                       {
>>                         "label": "address.country",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "eq",
>>                             "value": "DE"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       },
>>                       {
>>                         "label": "address.city",
>>                         "type": "string",
>>                         "constraints": [
>>                           {
>>                             "operator": "eq",
>>                             "value": "Berlin"
>>                           },
>>                           {
>>                             "operator": "required"
>>                           }
>>                         ]
>>                       }
>>                     ],
>>                     "constraints": []
>>                   },
>>                   "constraints": [
>>                     {
>>                       "operator": "required"
>>                     }
>>                   ]
>>                 }
>>               },
>>               {
>>                 "operator": "maxlength",
>>                 "value": "255"
>>               }
>>             ]
>>           }
>>         ]
>>       },
>>       "description": "Rule related to the domain owner",
>>       "constraints": [
>>         {
>>           "operator": "required"
>>         }
>>       ]
>>     }
>>   ],
>>   "constraints": []
>> }
>> ```

## API endpoints

There are two interfaces you can use to manage and validate domain name rules:

- One to retrieve the eligibility rules of a domain for an action (creation, transfer...).
- One to validate data for a domain and for an action.

### Retrieving an eligibility rule

Let’s start with the API used to retrieve an eligibility rule. The return value corresponds to the JSON rule format seen in the previous section.

> [!api]
>
> @api {GET} /domain/configurationRule

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| `action`  | yes      | The desired action (`create`, `transfer`, `trade`, `update`) |
| `domain`  | yes      | The domain name concerned                                    |

- `create` is used when creating a domain name
- `transfer` is used when transferring a domain name from another registrar
- `trade` is used when changing the owner contact of a domain name
- `update` is used when updating a domain name or contact information

### Validating an eligibility rule

Although it is possible to check the rules on the client side, you can also use the API below to check that the configuration for a given action complies with the eligibility rules.

> [!api]
>
> @api {POST} /domain/configurationRule/check

| Parameter | Required | Description                                                  |
| --------- | -------- | ------------------------------------------------------------ |
| `action`  | yes      | The desired action (`create`, `transfer`, `trade`, `update`) |
| `domain`  | yes      | The domain name concerned                                    |

The request body is a JSON that can contain the following objects:

| Body           | Description                                         |
| -------------- | --------------------------------------------------- |
| `owner`        | Object representing owner contact data              |
| `adminAccount` | Object representing the administrative contact data |
| `techAccount`  | Object representing the technical contact data      |
| `domain`       | Domain name data                                    |
| `extras`       | Additional data                                     |

> [!primary]
>
> For more information on the contact types, please consult the [relevant documentation](../api-contact)

Each of these objects is optional. If the rule engine needs one of them to check a rule, an error will be returned.
A special feature of the `trade` and `transfer` actions is that if a required object is missing, it will be retrieved automatically from the currently existing service.

> [!primary]
>
> If you want to test that a domain already registered on your account complies with its eligibility rules, you can use this API on the `update` action with an empty body. The rule engine will perform a validation using the current service data.

The validation API returns an HTTP status code 200 if the rule is respected. Otherwise, it returns a 400 HTTP status code with a detailed error in the following format:

<!-- prettier-ignore -->
> [!tabs]
> Validation error response
>> ```json
>> {
>>   "class": "Client::BadRequest::DOMDOCRuleNotRespected",
>>   "message": "7 constraints of rules are not respected",
>>   "details": {
>>     "_date": "2021-10-16 21:51:10.476352775 +0000 UTC",
>>     "_id": "mMzaS8iOJ",
>>     "_message": "Input data does not respect the rule",
>>     "owner.city": "Field \"city\" is required",
>>     "owner.country": "Field \"country\" is required",
>>     "owner.email": "Field \"email\" is required",
>>     "owner.language": "Field \"language\" is required",
>>     "owner.legal_form": "Field \"legal_form\" is required",
>>     "owner.line1": "Field \"line1\" is required",
>>     "owner.phone": "Field \"phone\" is required"
>>   }
>> }
>> ```
