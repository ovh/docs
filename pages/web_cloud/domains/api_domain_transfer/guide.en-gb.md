---
title: "Transfer a Domain Name"
excerpt: "Use the OVHcloud public API to transfer your domain names"
updated: 2022-07-21
---

<!-- Reminder to put at the beginning of each page -->

> [!primary]
>
> To follow this guide, make sure you are connected to OVHcloud API. You may find more information on the [API introduction](/pages/web_cloud/domains/api_domain_intro) page if needed.

<!-- Begin TOC -->

## Table of Contents

- [Introduction](/pages/web_cloud/domains/api_domain_intro)
- [Order a Domain Name](/pages/web_cloud/domains/api_domain_order)
- [Tasks Management](/pages/web_cloud/domains/api_domain_tasks)
- [Manage Contacts of a Domain Name](/pages/web_cloud/domains/api_domain_contacts)
- [Managing Eligibility Rules](/pages/web_cloud/domains/api_domain_rules)
- [Configure the Display of Contact Data in the Whois](/pages/web_cloud/domains/api_domain_whois)
- [Configure the DNS of your Domain Name](/pages/web_cloud/domains/api_domain_dns)
- **Transfer a Domain Name**
<!-- End TOC -->

## Incoming transfer

An incoming transfer corresponds to transferring the domain name management from another registrar to OVHcloud.
This is pretty much the same as a new domain name order, except that the domain is not listed as available since it is already owned.

If you are the domain owner, you may transfer its management to OVHcloud as follows.

1. **Fetch the confidential authorization code** (sometimes referred to as "auth code" or "auth info") associated to your domain name on your current registrar dashboard.

2. **Order a transfer**: this will consist in the same steps as [ordering a new domain name](/pages/web_cloud/domains/api_domain_order).

    - Only the [offer](/pages/web_cloud/domains/api_domain_order#fetch-available-offers) will differ, since the available action will be `transfer` (instead of `create`) and the pricing mode will be `transfer-default`.

    - Do not forget to add the authorization code to your order, as the `AUTH_INFO` [configuration value](/pages/web_cloud/domains/api_domain_order#add-configuration).

    When the order is complete, it will generate a new `DomainIncomingTransfer` task.

3. **Monitor** the evolution of the `DomainIncomingTransfer` task using the [task API](/pages/web_cloud/domains/api_domain_tasks#view-pending-tasks).

4. If you did not add the authorization code to your order, or if it was invalid, the `DomainIncomingTransfer` task may result in error.

    In that case, use the [task API](/pages/web_cloud/domains/api_domain_tasks#fix-and-relaunch-a-task-in-error) to send the valid code with the `authInfo` argument key, then relaunch the task.

The transfer should be completed by the registry after a few days.

## Outgoing transfer

We talk about outgoing transfer when a customer wishes to delegate the management of his domain name from OVHcloud to another regitrar. The following instructions describe the most common way to execute this transfer. However, this procedure may vary for some ccTLDs like .lu, .uk, .hk, ans so on...
In this case, please consult registrar documentation.

### Domain lock

A domain lock is a security that prevents your domain from being the target of attempts to transfer to another regitrar.
It means that if this option is activated on your domain name, it cannot be transferred without first being unlocked.
You can check what state your domain name is in by using the following route:

> [!api]
>
> @api {v1} /domain GET /domain/{serviceName}

| Parameter     | Required | Default | Description |
| ------------- | -------- | ------- | ----------- |
| `serviceName` | yes      |         | Domain name |

#### Example

```text
GET /domain/xxx.ovh
```

<!-- prettier-ignore -->
> [!tabs]
> Response
>> ```json
>> {
>>    "transferLockStatus": "locked",
>>    "parentService": null,
>>    "nameServerType": "hosted",
>>    "offer": "gold",
>>    "whoisOwner": "12345678",
>>    "owoSupported": true,
>>    "lastUpdate": "2022-03-10T14:00:40+01:00",
>>    "glueRecordIpv6Supported": true,
>>    "domain": "xxx.ovh",
>>    "glueRecordMultiIpSupported": true,
>>    "dnssecSupported": true
>>}
>> ```

To put your domain name in an `unlocked` state, use the same route with a `PUT` method, adding the `transferLockStatus` to `unlocked`:

> [!api]
>
> @api {v1} /domain PUT /domain/{serviceName}

| Parameter            | Required | Default | Description   |
| -------------------- | -------- | ------- | ------------- |
| `serviceName`        | yes      |         | Domain name   |
| `transferLockStatus` | yes      |         | Desired state |

Actions on theses routes are not instantaneous, which is why when re-executing a [`GET /domain/{serviceName}`](https://api.ovh.com/console/#/domain/%7BserviceName%7D~GET), you may see a `transferLockStatus` in `unlocking` or `locking` state.

### Authcode

After unlocking your domain, you need an authcode to ensure that you own it, in order to transfer out. You will have to provide this code to your new registrar.

The following route allows you to retrieve it:

> [!api]
>
> @api {v1} /domain GET /domain/{serviceName}/authInfo

| Parameter     | Required | Default | Description |
| ------------- | -------- | ------- | ----------- |
| `serviceName` | yes      |         | Domain name |

Your new registrar will then proceed with the transfer.

> [!primary]
>
> For .uk domain names, please refer to the [dedicated documentation](/pages/web_cloud/domains/transfer_incoming_couk).

> [!warning]
>
> If the domain name has been suspended or expired, you will need to [create a support ticket](https://www.ovh.com/manager/dedicated/#/support/tickets/new) from your OVHcloud Control Panel.