---
title: "Manage Contacts of a Domain Name"
slug: api-contact
excerpt: "Use the OVHcloud public API to manage contacts for your domain names"
section: "API dominios"
order: 5
routes:
  canonical: "https://docs.ovh.com/gb/en/domains/api-contact/"
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
- **Manage Contacts of a Domain Name**
- [Managing Eligibility Rules](../api-rules)
- [Configure the Display of Contact Data in the Whois](../api-whois)
- [Configure the DNS of your Domain Name](../api-dns)
- [Transfer a Domain Name](../api-transfer)
<!-- End TOC -->

## Contact Types

Contact handling is an essential part of domain names management.
It is important to note the differences between _nichandles_ (Nic or OVHcloud accounts) and registry/Whois _contacts_ (data stored on registry, published on Whois).

### Registry/Whois Contacts

For most extensions, there are 3 different contacts which can be configured on the registry:

- **Administrator**: contact managing the domain (owner and technical contacts management). They are the main contact points of the registrar.
- **Technical**: contact managing the technical side of the domain (in particular, the DNS zone).
- **Owner**: physical or legal person owning the domain name, sometimes called the **registrant**. They are constrained by [eligibility rules](../api-rules). They are legally responsible of the domain name.

For example, John contacts a web agency to create his small company's website. In this case, the web agency will organize contacts as follows:

- Administrator: the web agency
- Technical: the web agency
- Owner: John

The technical contact is often the same as the administrator.
As for the owner, it has to be John. In case of dispute with the web agency, the fact that he is the owner will be legally acknowledged and will allow to recover management of his domain name.

### OVHcloud Nichandle

OVHcloud nichandles represent OVHcloud accounts which can be used to connect to OVHcloud website and API.
A nichandle may be associated to any OVHcloud service (domain, DNS, server, other...) as:

- **Nic admin**: service administrator, who can perform any possible action on the service;
- **Nic tech**: designated by the service Nic admin, they can update some technical service data;
- **Nic billing**: in charge of the payment of the service.

By default if not set otherwise, a Nic admin is Nic tech and Nich billing of a service as well.

### Relation between OVHcloud Nichandles and Registry/Whois Contacts

#### Administrator and Technical Nichandles

The administrator and technical OVHcloud nichandles, and registry/Whois administrator and technical contacts are strongly related.
Any update in the nichandles data triggers an automatic modification of registry/Whois contacts.

The converse is not true, however. If an administrator or technical contact is updated (using a registry UI for example), the corresponding OVHcloud nichandle will not be modified.

#### Billing Nichandle

The billing nichandle is not defined on the registry/Whois.
This contact is used only for billing purposes, for the related OVHcloud service representing the domain name.

#### Owner Contact

The registry/Whois owner contact is not related to any nichandle.
As a consequence, it cannot be used to connect to the OVHcloud website or API.

It is represented in the OVHcloud API by another entity, the `domain.Contact` object.

## Administrator and Technical Nichandles Management

### Creation of a New Nichandle

The following API route can be used to create an OVHcloud nichandle.

> [!api]
>
> @api {POST} /newAccount

The creation rules can also be fetched with the API.

> [!api]
>
> @api {GET} /newAccount/creationRules

Once created, all actions associated with the new nichandle can be performed with API routes starting with `/me/*`.

### Retrieve and Update a Nichandle

Nichandle information may be retrieved and changed with these API routes.

> [!api]
>
> @api {GET} /me
> @api {PUT} /me

### Nichandle Change on a Domain Service

In this section, we will see how a Nic (admin, tech or billing) can be updated on a given domain name.
It works in the same way as any other OVHcloud service. More details explaining the workflow, as well as how to do this, can be found on [this page](https://docs.ovh.com/es/customer/gestion-de-los-contactos/).

Using the following API route, we are going to initiate a "task" which will allow the former and the new Nic to accept or refuse the change.

> [!api]
>
> @api {POST} /domain/{serviceName}/changeContact

| Body parameter   | Description                 |
| ---------------- | --------------------------- |
| `contactAdmin`   | New administrator nichandle |
| `contactTech`    | New technical nichandle     |
| `contactBilling` | New billing nichandle       |

This endpoint returns a list of task identifiers (one per nichandle).

A nichandle change task is used to send an email to the old and to the new Nic.
These emails contain a validation token used to finalize the process.

These tasks can be monitored or updated by calling the following API routes:

> [!api]
>
> @api {GET} /me/task/contactChange
> @api {GET} /me/task/contactChange/{id}
> @api {POST} /me/task/contactChange/{id}/accept
> @api {POST} /me/task/contactChange/{id}/refuse
> @api {POST} /me/task/contactChange/{id}/resendEmail

## Owner Contact Management

The owner contact is represented and handled by routes `/me/contact` and `/domain/contacts`.
In the domain names context, we stronly recommend the exclusive use of `/domain/contacts` routes.

> [!primary]
>
> Both endpoints share the same identifiers.
> Historically, all actions could be performed using `/me/contact`. However, some business rules related only to domain names have forced us to deploy specific API endpoints under the `/domain/contact` root URL.
> They add a domain-specific layer to `/me/contact` data, to add extra fields necessary for some extensions.

When ordering a domain name, a **new owner contact** is created using the provided data, in order to always have a **unique identifier** per domain name.
This makes subsequent updates easier, avoiding to change another domain name data without wanting to.

### Contact Handling

The following API routes can be used to handle domain contacts.

> [!api]
>
> @api {POST} /domain/contact
> @api {GET} /domain/contact
> @api {GET} /domain/contact/{contactId}
> @api {PUT} /domain/contact/{contactId}

> [!primary]
>
> The update payload of a contact (PUT) must always satisfy [eligibility rules](../api-rules).

> [!primary]
>
> Some fields being read-only, a contact change procedure may be required to modify them.

### Owner Contact Change

Deciding whether to change the owner depends on two things.

- The extension is regulated by ICANN rules (gTLDs and NewgTLDs), or by a country's administration (ccTLDs).
- The legal status of the owner (individual, company, …).

The simplest situation is the one of gTLDs, regulated by ICANN. In that case, any of the following data change is considered an owner change:

- first/last name for a physical person, or organization name for a legal person;
- email address.

As a consequence, these fields are read-only if the contact is associated to at least a domain name.
Changing the owner on a gTLD is free.

For the other extensions, the [eligibility rules](../api-rules) API will return each field status.
For the sake of consistency, we still consider that an email address change is an owner change.

> [!primary]
>
> According to the extension (and to the registry rules), an owner change may have several consequences on a domain name.
> Indeed, in some cases, changing the owner of a domain name automatically renews it for 1 year, which is why sometimes you may have to pay for an owner change request.
> Some others may need manual validation of the owner data.

In order to preserve a consistent usage of the OVHcloud API, we have chosen to represent owner change as a dedicated, orderable product.
In most cases, this order will be free, but it allows a unique initialization process for all extensions.

This process consists in two main steps.

1. Owner change order
    1. Price selection
    2. Cart creation
    3. Addition of the owner change action to the cart
    4. Creation of the new owner contact, association with the domain name
    5. Order validation and payment
2. Owner change processing
    1. Creation of the `DomainTrade` task
    2. Emails are sent to the old and new owners
    3. Validation tokens are confirmed by both owners
    4. Owner data change on the registry and Whois

#### Owner Change Order

The following steps are described with more details in the [domain name order](../api-order) documentation page.

##### Step 1: Owner change information fetch

> [!api]
>
> @api {GET} /order/cartServiceOption/domain/{serviceName}

<!-- prettier-ignore -->
> [!tabs]
> Response
>> ```javascript
>> [
>>     {
>>       "exclusive": true,
>>       "mandatory": false,
>>       "family": "trade",
>>       "productName": ".com",
>>       "productType": "delivery",
>>       "planCode": "com-trade",
>>       "prices": [
>>         {
>>           "interval": 0,
>>           "minimumQuantity": 1,
>>           "description": "Creation of a .com domain name - 1 year",
>>           "minimumRepeat": 1,
>>           "priceInUcents": 0,
>>           "pricingMode": "create-default",
>>           "capacities": [
>>             "installation"
>>           ],
>>           "duration": "P0D",
>>           "maximumRepeat": 1,
>>           "pricingType": "purchase",
>>           "price": {
>>             "text": "0.00 €",
>>             "value": 0,
>>             "currencyCode": "EUR"
>>           },
>>           "maximumQuantity": 1
>>         }
>>       ]
>>     },
>>     {
>>       // ...
>>     }
>>   ]
>> ```

The main elements of this object are:

- `prices` : owner change price
- `family` : value `"trade"` indicates that the product represents an owner change
- `planCode` : commercial plan for the owner change, should equal `"$extension-trade"`
- `pricingMode` : commercial sub-plan for the owner change

##### Step 2: Cart creation, addition of the product to the cart

Cart creation can be performed with:

> [!api]
>
> @api {POST} /order/cart

Then, the owner change product can be added to the cart:

> [!api]
>
> @api {POST} /order/cartServiceOption/domain/{serviceName}

| Body parameter | Description                                             |
| -------------- | ------------------------------------------------------- |
| `serviceName`  | Domain name                                             |
| `cartId`       | Cart identifier                                         |
| `duration`     | Duration, always **P0Y** for an owner change            |
| `planCode`     | Code fetched with the step-1 GET (`"$extension-trade"`) |
| `pricingMode`  | Pricing mode fetched with the GET                       |
| `quantity`     | Quantity, always **1** for an owner change              |

##### Step 3: Add required configurations

To know which configurations are required, call the following API route:

> [!api]
>
> @api {GET} /order/cart/{cartId}/item/{itemId}/requiredConfiguration

| Parameter | Required | Default | Description              |
| --------- | -------- | ------- | ------------------------ |
| cartId    | yes      | ""      | Cart identifier          |
| itemId    | yes      | ""      | Inserted item identifier |

<!-- prettier-ignore -->
> [!tabs]
> Response
>> ```json
>> [
>>   {
>>     "label": "OWNER_CONTACT",
>>     "type": "/me/contact"
>>   }
>> ]
>> ```

> [!primary]
>
> Here, the `OWNER_CONTACT` label represents a "resource" API, of type `/me/contact`.
> We remind you that if you used the `/domain/contact` routes previously, you may use the same identifier on the `/me/contact` routes.

The desired contact is added to the order process using this API.

> [!api]
>
> @api {POST} /order/cart/{cartId}/item/{itemId}/configuration

| Parameter | Required | Default | Description              |
| --------- | -------- | ------- | ------------------------ |
| `cartId`  | yes      | ""      | Cart identifier          |
| `itemId`  | yes      | ""      | Inserted item identifier |

| Body parameter | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `label`        | `"OWNER_CONTACT"` configuration                              |
| `value`        | Contact identifier `/me/contact/$id` (ex: `/me/contact/123`) |

<!-- prettier-ignore -->
> [!tabs]
> Response
>> ```json
>> {
>>   "id": 123456,
>>   "label": "OWNER_CONTACT",
>>   "value": "/me/contact/123"
>> }
>> ```
>>

##### Step 4: Check cart and visualize purchase order

This step is probably the most important of the order process, and can be performed with this API call.

> [!api]
>
> @api {GET} /order/cart/{cartId}/checkout

It allows to get the final purchase order, without generating it (it is a "dry-run").

This call also checks that eligibility rules are satisfied by the owner data.

##### Step 5: Order validation

> [!api]
>
> @api {POST} /order/cart/{cartId}/checkout

| Parameter                           | Required | Default | Description                                                                             |
| ----------------------------------- | -------- | ------- | --------------------------------------------------------------------------------------- |
| `autoPayWithPreferredPaymentMethod` | yes      | ""      | Used to automatically pay the purchase order with the default payment method of the Nic |
| `waiveRetractationPeriod`           | yes      | ""      | Required for a domain name, it is used to waive your right to retract                   |

#### Owner Change Processing

Once the purchase order has been validated and paid, the order is handled internally until an owner change task named `DomainTrade` is eventually created.
This task can be found using the following API route:

> [!api]
>
> @api {POST} /domain/{serviceName}/task

More details about task management can be seen [on this page](../api-tasks).

The `DomainTrade` task is in charge of sending emails to the former and to the new owners, to confirm that the process can take place.
These emails contain a validation link (secured with a private token).

Once these tokens are validated, the task will perform the owner change and update the registry and/or the Whois with the new owner data.
