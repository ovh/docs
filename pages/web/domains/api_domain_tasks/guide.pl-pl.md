---
title: "Tasks Management"
slug: api-tasks
excerpt: "How asynchronous tasks on domain names work"
section: "Domeny API"
order: 4
routes:
  canonical: "https://docs.ovh.com/gb/en/domains/api-tasks/"
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
- **Tasks Management**
- [Manage Contacts of a Domain Name](../api-contact)
- [Managing Eligibility Rules](../api-rules)
- [Configure the Display of Contact Data in the Whois](../api-whois)
- [Configure the DNS of your Domain Name](../api-dns)
- [Transfer a Domain Name](../api-transfer)
<!-- End TOC -->

## Task management

Most of the actions carried out on domain names result in modifications on the registrar's side (OVHcloud), as well as on the registry.
For the sake of robustness and performance, they are launched asynchronously.

To allow tracking of these asynchronous changes, actions are abstracted as **tasks**. When an asynchronous action is launched
a **task** is created and allows to retrieve a status, to modify some data in case of error or to restart actions after a failure.

Historically, OVHcloud tasks are handled via two distinct API paths:

1. [`/me/task/domain`](https://api.ovh.com/console/#/me/task/domain~GET) and its children
2. [`/domain/{serviceName}/task`](https://api.ovh.com/console/#/domain/%7BserviceName%7D/task~GET) and its children

The available routes handle the same tasks but offer different actions.

## Tasks workflow

The nominal life cycle of a task is the following:

- `todo`: the task has been created but is not being processed. Most tasks (`DomainCreate`, `DomainRenew`, etc.) are executed within a minute, and finalized within 5 to 10 minutes.
- `doing`: the task is being processed. This phase usually lasts a few seconds.
- `done`: the task has been successfully processed. This is a final status.

The following statuses can also occur in non-nominal cases:

- `cancelled`: the task has been cancelled, either by the customer or by OVHcloud. This is a final status.
- `error`: an error occurred during the execution of the task. Two cases are possible:
    1. An information provided by the customer is invalid or missing: in this case you will have the possibility to correct the problematic data and to restart the task.
    2. A problem has occurred on OVHcloud's side: in this case you will not be able to restart the task yourself. The task will be restarted periodically in an automatic way, but you will have to open a support request if the problem persists.

## View pending tasks <a name="view-pending-tasks"></a>

To list your tasks, you can use the following API:

> [!api]
>
> @api {GET} /me/task/domain

| Parameter  | Mandatory | Description                              |
| ---------- | :-------: | ---------------------------------------- |
| `domain`   |    no     | Filter tasks related to this domain name |
| `function` |    no     | Type of tasks to retrieve                |
| `status`   |    no     | Status of tasks to retrieve              |

This API call will return the list of task IDs corresponding to your filters.

To retrieve the details related to a particular task, you can use the following API:

> [!api]
>
> @api {GET} /me/task/domain/{id}

The most interesting fields in the answer are the following:

- `status`: corresponds to the statuses presented in the previous section.
- `comment`: contains detailed information about the status of the task. In particular, if the task is in `error` status, this field will contain a message to help you fix the problem.
- `canRelaunch`: indicates whether it is possible for you to relaunch a task. This will be useful if the task is in `error` status.
- `todoDate`: the approximate date and time when the task should be executed next. This only applies if the task is in `todo` status. It is possible to make this date closer using the [`POST /me/task/{id}/accelerate`](https://eu.api.ovh.com/console/#/me/task/domain/%7Bid%7D/accelerate~POST) API, but this is rarely necessary.

## Fix and relaunch a task in error <a name="fix-and-relaunch-a-task-in-error"></a>

If your task is in `error` status and the `canRelaunch` field indicates that it can be restarted, you will probably have to correct some data. General correction information will be given in the `comment` field.

Let's take an example regarding a creation task (`DomainCreate`) of a `.fr` domain name in `error` status:

<!-- prettier-ignore -->
> [!tabs]
> Sample response
>>```json
>> {
>>   "id": 1000,
>>   "function": "DomainCreate",
>>   "domain": "example.fr",
>>   "status": "error",
>>   "comment": "You have to explain in a few words how you'd like to use this domain name (AFNIC will use it to decide if you can register this domain)",
>>   "creationDate": "2022-01-01T12:00:00+01:00",
>>   "todoDate": "2022-01-01T13:00:00+01:00",
>>   "lastUpdate": "2022-01-01T12:40:00+01:00",
>>   "doneDate": null,
>>   "canAccelerate": false,
>>   "canRelaunch": true,
>>   "canCancel": false
>> }
>> ```

The commentary explains that Afnic (registry of domain names in `.fr`) asks for a justification for the use of this domain name. In practice this can happen for `.fr` domain names matching the name of a city. The `canRelaunch` field indicates that the client has the possibility to relaunch this task, and thus implicitly to correct it.

To correct it, it is possible to list the fields to be modified using the following API:

> [!api]
>
> @api {GET} /me/task/domain/{id}/argument

In our example, it will only return a single field:

```json
["legitimacyAfnic"]
```

You can list more information about how to fill this field and its current value using the API:

> [!api]
>
> @api {GET} /me/task/domain/{id}/argument/{key}

<!-- prettier-ignore -->
> [!tabs]
> Sample response
>> ```json
>> {
>>   "key": "legitimacyAfnic",
>>   "description": "Update legitimacyAfnic with valid content",
>>   "type": "string",
>>   "value": null,
>>   "acceptedValues": null,
>>   "readOnly": false,
>>   "minimumSize": null,
>>   "maximumSize": null,
>>   "fields": null,
>>   "template": null,
>>   "acceptedFormats": null
>> }
>> ```

To modify the `legitimacyAfnic` field, you will have to use the following API by entering its new value:

> [!api]
>
> @api {PUT} /me/task/domain/{id}/argument/{key}

<!-- prettier-ignore -->
> [!tabs]
> Simplified sample request
>> ```sh
>> curl -XPUT /me/task/domain/example.fr/argument/legitimacyAfnic -d '{
>>   "value": "I am the mayor of the city Example."
>> }'
>> ```

Once the value is modified, you can, if you wish, reuse the API:

> [!api]
>
> @api {GET} /me/task/domain/{id}/argument/{key}

to verify that it has been taken into account.

Finally, all that remains is to relaunch the task via the API:

> [!api]
>
> @api {POST} /me/task/domain/{id}/relaunch

The task should be executed in the next few minutes and end correctly.

## Task types

There are many different types of tasks (more than thirty), all with their own specificities. As a customer, you will rarely have to intervene on these. However, the most common ones are the following:

- `DomainCreate`: creation of a domain name. Errors will generally be related to eligibility requirements, especially in the case of ccTLDs.
- `DomainIncomingTransfer`, `DomainAfterMarket`: transfer of a domain name from another registrar or from an aftermarket. Errors will generally be related to the `auth code` allowing the validation of the transfer.
- `DomainTrade`: change of owner contact. Errors will usually be related to eligibility incompatibilities on the receiving contact.
- `DomainContactUpdate`: modification of contact information. Errors will generally be related to semantically invalid information, formatting errors or eligibility incompatibilities.
- `DomainDnsUpdate`: changes regarding DNS configuration. Errors will generally be related to invalid DNS servers, or glue record configuration.
- `DomainDsUpdate`: changes regarding DNSSEC keys. Errors will generally be related synchronizations issues between our system and the registry.
