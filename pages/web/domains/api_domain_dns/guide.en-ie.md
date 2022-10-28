---
title: "Configure the DNS of your Domain Name"
slug: api-dns
excerpt: "Use the OVHcloud public API to configure the DNS of your domain name"
section: "Domains API"
order: 08
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
- [Configure the Display of Contact Data in the Whois](../api-whois)
- **Configure the DNS of your Domain Name**
- [Transfer a Domain Name](../api-transfer)
<!-- End TOC -->

## Introduction

This page describes the information related to the DNS resolution of domain names. This includes:

- the name servers declaration;
- glue records.

## DNS Setup Types

On a domain name, DNS setup type can be either `hosted` or `external`.

The `hosted` type means that the DNS zone is managed automatically by OVHcloud, which means that you don't have to create your own name server.
Of course, you have control over the content of this zone, but the choice of servers on which the zone is hosted cannot be modified.
In return, OVHcloud will take care of the declaration of these servers to the registry and manage the DNSSEC.

### Retrieve the DNS Setup Type of a Domain Name

Using the following API will allow you to retrieve the name server type defined on your domain name:

> [!api]
>
> @api {GET} /domain/{serviceName}

| Parameter     | Required | Description              |
| ------------- | -------- | ------------------------ |
| `serviceName` | true     | The domain name involved |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> {
>>   "parentService": null,
>>   "domain": "test.com",
>>   "offer": "gold",
>>   "dnssecSupported": true,
>>   "owoSupported": true,
>>   "transferLockStatus": "locked",
>>   "whoisOwner": "123456",
>>   "hostSupported": true,
>>   "glueRecordIpv6Supported": true,
>>   "glueRecordMultiIpSupported": true,
>>   "lastUpdate": "2021-11-02T12:01:13+01:00",
>>   "nameServerType": "hosted"
>> }
>> ```

As we can see from the example above, the DNS setup type can be retrieved in the field `nameServerType`.

We can also see from the `hostSupported` field, that the hosts are supported as entities by the domain name registry. This will be important later on, if you decide to declare **glue records** on your domain name.

### Update the Domain Name DNS Setup Type

The following API allows to update some domain name setup, including the name server type.

> [!api]
>
> @api {PUT} /domain/{serviceName}

| Parameter               | Required | Description                                |
| ----------------------- | -------- | ------------------------------------------ |
| `serviceName`           | yes      | The domain name involved                   |
| `nameServerType` (body) | yes      | DNS type to setup (`hosted` or `external`) |

<!-- prettier-ignore -->
> [!tabs]
> Request example
>> ```js
>> {
>>   "nameServerType": "external" // (hosted or external)
>> }
>> ```

As we can see from the example above, the DNS configuration type has been changed to `external`.

It is important to know that:

- To change from `external` to `hosted`, you need to have a DNS zone at OVHcloud to make the change. It is possible to order one on your OVHcloud Control Panel.
- To change from `hosted` to `external`, you first have to do the modification, and then change the name servers declaration of the domain name as explained in the following section.

## Name Servers Declaration

When the `nameServerType` of a domain name is `external`, it is necessary to set up the name servers on the registry, in order to resolve them.
If the `nameServerType` is `hosted`, it is possible to check the name servers declared on a domain name thanks to the `GET` APIs below.

Be careful, however, not to confuse the declaration of name servers with the management of DNS zones.
The management of your OVHcloud zones must be done using the route:

> [!api]
>
> @api {GET} /domain/zone/{zoneName}

### Retrieve the Name Servers Declared on a Domain Name

Using the following API will allow you to retrieve the IDs of the name servers defined on a domain name:

> [!api]
>
> @api {GET} /domain/{serviceName}/nameServer

| Parameter     | Required | Description              |
| ------------- | -------- | ------------------------ |
| `serviceName` | yes      | The domain name involved |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> [
>>   33578504,
>>   33578505
>> ]
>> ```

As we can see from the example above, this call will only retrieve the identifiers corresponding to the DNS servers declared on a domain name.

To get the details of a name server, you need to call the following API:

> [!api]
>
> @api {GET} /domain/{serviceName}/nameServer/{id}

| Parameter     | Required | Description                                           |
| ------------- | -------- | ----------------------------------------------------- |
| `serviceName` | yes      | The domain name involved                              |
| `id`          | yes      | The ID of the name server declared on the domain name |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> {
>>   "id": 33578504,
>>   "host": "ns16.ovh.net",
>>   "ip": null,
>>   "isUsed": true,
>>   "toDelete": false
>> }
>> ```

This call allows to get the technical details of the name server, like the `host` or the associated `ip` if it is a **glue record** (cf. [glue records declaration](#glue-records-declaration_1)).
More information is also available through the following API:

> [!api]
>
> @api {GET} /domain/{serviceName}/nameServer/{id}/status

| Parameter     | Required | Description                                           |
| ------------- | -------- | ----------------------------------------------------- |
| `serviceName` | yes      | The domain name involved                              |
| `id`          | yes      | The ID of the name server declared on the domain name |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> {
>>   "state": "ok",
>>   "type": "hosted",
>>   "usedSince": "2021-11-02T11:59:13.177558+01:00"
>> }
>> ```

### Modify the Name Servers Declared on a Domain Name

As a reminder, you can only change the declaration of your name servers if the `nameServerType` of the domain name is `external`.
If it is the case, there are several APIs available which we describe in this section.

The following API allows you to add new name servers on your domain name:

> [!api]
>
> @api {POST} /domain/{serviceName}/nameServer

| Parameter           | Required | Description              |
| ------------------- | -------- | ------------------------ |
| `serviceName`       | yes      | The domain name involved |
| `nameServer` (body) | yes      | The name servers to add  |

<!-- prettier-ignore -->
> [!tabs]
> Request example
>> ```js
>> {
>>   "nameServer": [
>>     {
>>       // When a registry like eurid (.eu) doesn't support hosts, we declare the glue records directly here
>>       "host": "ns1.test.eu",
>>       "ip": "140.2.113.151"
>>     },
>>     {
>>       "host": "ns1.other-domain.eu"
>>     }
>>   ]
>> }
>> ```
> Response example
>> ```js
>> {
>>   "id": 414283125,
>>   "status": "todo",
>>   "function": "DomainDnsUpdate",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

This route will add the new name servers on the domain name and trigger a `DomainDnsUpdate` synchronisation task on the registry side. You will be able to track this task via the [dedicated APIs](../api-tasks/#view-pending-tasks).

It is also possible to completely replace the name servers declaration of a domain name through the following API:

> [!api]
>
> @api {POST} /domain/{serviceName}/nameServers/update

| Parameter           | Required | Description                                    |
| ------------------- | -------- | ---------------------------------------------- |
| `serviceName`       | yes      | The domain name involved                       |
| `nameServer` (body) | yes      | The name servers to declare on the domain name |

<!-- prettier-ignore -->
> [!tabs]
> Request example
>> ```js
>> {
>>   "nameServer": [
>>     { "host": "ns1.other-domain.com" },
>>     { "host": "ns2.other-domain.com" }
>>   ]
>> }
>> ```
> Response example
>> ```js
>> {
>>   "id": 414283126,
>>   "status": "todo",
>>   "function": "DomainDnsUpdate",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

This route will replace the name servers declaration on the domain name and, as the previous route, trigger a `DomainDnsUpdate` synchronisation task with the registry.
You will be able to track this task via the [dedicated APIs](../api-tasks/#view-pending-tasks).

It is also possible to delete a name server declared on a domain name through the following API:

> [!api]
>
> @api {DELETE} /domain/{serviceName}/nameServer/{id}

| Parameter     | Required | Description                                           |
| ------------- | -------- | ----------------------------------------------------- |
| `serviceName` | yes      | The domain name involved                              |
| `id`          | yes      | The ID of the name server declared on the domain name |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> {
>>   "id": 414283127,
>>   "status": "todo",
>>   "function": "DomainDnsUpdate",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

This route will delete the name server declared on your domain name and trigger a `DomainDnsUpdate` update task on the registry.
You will be able to track this task via the [dedicated APIs](../api-tasks/#view-pending-tasks).

## Glue Records Declaration

A **glue record** is used to define the **IP address** of a **name server**, to allow the domain name to be resolved if this one uses **name servers** hosted under this same domain name.

For instance, if you want to declare the name server `ns1.test.com` on the domain name `test.com`, an IP must be provided to the registry so that the resolution does not loop.
If no IP was provided, during `test.com` DNS resolution, the DNS resolver would try to resolve the `ns1.test.com` name server by fetching the resolution from `test.com`, creating an infinite resolution loop.

There are two ways to manage glue records declared on a domain name.
Depending on the registry, the glue records can be:

- declared via dedicated **host** objects, used as entities in their own right.
    In this case, it will be necessary to use the APIs dedicated to **glue records**.

    > [!api]
    >
    > @api {GET} /domain/{serviceName}/glueRecord

- declared together with the name servers by providing an IP.
    In this case you will have to use the name server APIs.

    > [!api]
    >
    > @api {GET} /domain/{serviceName}/nameServer

To know which APIs to use, it is necessary to retrieve the information via [the DNS setup](#retrieve-the-DNS-setup-type-of-a-domain-name) of the domain name, in the `hostSupported` field.

### Retrieve the Glue Records Declared on a Domain Name

If the `hostSupported` field of the DNS setup of the domain name is set to `false`, the data retrieving will be done via the [name servers APIs](#retrieve-the-name-servers-declared-on-a-domain-name) described above.

If the `hostSupported` field of the DNS setup of the domain name is set to `true`, you will be able to modify the **hosts** declared on a domain name via the following APIs:

> [!api]
>
> @api {GET} /domain/{serviceName}/glueRecord

| Parameter     | Required | Description              |
| ------------- | -------- | ------------------------ |
| `serviceName` | yes      | The domain name involved |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> [
>>   "ns1.test.com",
>>   "ns2.test.com"
>> ]
>> ```

To get the details of a **glue record**, you will have to retrieve the host and use the following API:

> [!api]
>
> @api {GET} /domain/{serviceName}/glueRecord/{host}

| Parameter     | Required | Description                  |
| ------------- | -------- | ---------------------------- |
| `serviceName` | yes      | The domain name involved     |
| `host`        | yes      | The host we want to retrieve |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> {
>>   "host": "ns1.test.com",
>>   "ips": [
>>       "140.2.113.151"
>>   ]
>> }
>> ```

### Modify the Glue Records Declared on a Domain Name

If the `hostSupported` field of the DNS setup of the domain name is set to `false`, data is fetched and updated via the [name servers APIs](#modify-the-name-servers-declared-on-a-domain-name) described above.

If the `hostSupported` field of the DNS setup of the domain name is set to `true`, it is possible to handle the **hosts** declared on a domain name via the **glue records** dedicated APIs.

#### Create a New Glue Record

The following API allows you to add a **glue record** on your domain name:

> [!api]
>
> @api {POST} /domain/{serviceName}/glueRecord

| Parameter     | Required | Description                    |
| ------------- | -------- | ------------------------------ |
| `serviceName` | yes      | The domain name involved       |
| `host` (body) | yes      | The glue record host to create |
| `ips` (body)  | yes      | The glue record IP addresses   |

<!-- prettier-ignore -->
> [!tabs]
> Request example
>> ```js
>> {
>>   "host": "ns1.test.com",
>>   "ips": [
>>     "140.2.113.151"
>>   ]
>> }
>> ```
> Response example
>> ```js
>> {
>>   "id": 414283128,
>>   "status": "todo",
>>   "function": "DomainHostCreate",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

This route will trigger a `DomainHostCreate` task to create the **host** on the domain name registry.
You will be able to track this task via the [dedicated APIs](../api-tasks/#view-pending-tasks).

> [!warning]
>
> Once the **host** is created on registry side, you have to declare it on your domain name via the [name servers APIs](#modify-the-name-servers-declared-on-a-domain-name).

#### Update an Existing Glue Record

It is also possible to update a **glue record** through the following API:

> [!api]
>
> @api {POST} /domain/{serviceName}/glueRecord/{host}

| Parameter     | Required | Description                    |
| ------------- | -------- | ------------------------------ |
| `serviceName` | yes      | The domain name involved       |
| `host`        | yes      | The host involved              |
| `host` (body) | yes      | The glue record host to modify |
| `ips` (body)  | yes      | The glue record IP addresses   |

<!-- prettier-ignore -->
> [!tabs]
> Request example
>> ```js
>> {
>>   "host": "ns1.test.`com",
>>   "ips": [
>>     "140.2.113.152"
>>   ]
>> }
>> ```
> Response example
>> ```js
>> {
>>   "id": 414283129,
>>   "status": "todo",
>>   "function": "DomainHostUpdate",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

This route will trigger a `DomainHostUpdate` task to modify the **host** on the domain name registry.
You will be able to track this task via the [dedicated APIs](../api-tasks/#view-pending-tasks), and you will not have to re-declare the name server on the domain name.

#### Delete an Existing Glue Record

It is also possible to delete a **glue record**, but you will have to remove the **host** from the domain name first, using the [name servers APIs](#modify-the-name-servers-declared-on-a-domain-name).

Then you can call the following API to delete the **glue record**:

> [!api]
>
> @api {DELETE} /domain/{serviceName}/glueRecord/{host}

| Parameter     | Required | Description                                         |
| ------------- | -------- | --------------------------------------------------- |
| `serviceName` | yes      | The domain name involved                            |
| `host`        | yes      | The host corresponding to the glue record to delete |

<!-- prettier-ignore -->
> [!tabs]
> Response example
>> ```js
>> {
>>   "id": 414283130,
>>   "status": "todo",
>>   "function": "DomainHostDelete",
>>   "creationDate": "2022-04-07T15:56:01.593746+02:00",
>>   "todoDate": "2022-04-07T15:56:01+02:00",
>>   "lastUpdate": "2022-04-07T15:56:01+02:00",
>>   "doneDate": null,
>>   "canRelaunch": false,
>>   "canAccelerate": false,
>>   "canCancel": true
>> }
>> ```

This route will trigger a `DomainHostDelete` task to delete the **host** on the domain name registry.
You will be able to track this task via the [dedicated APIs](../api-tasks/#view-pending-tasks).
