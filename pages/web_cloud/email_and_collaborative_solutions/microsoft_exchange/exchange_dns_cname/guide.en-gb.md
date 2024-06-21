---
title: Creating a CNAME record to validate your domain name on your email solution
excerpt: Find out how to validate your domain name for your email service by adding a CNAME record
updated: 2023-08-29
---

## Objective

When you add a domain name to your email service, you may be asked to configure a CNAME record in the DNS zone. The purpose of this procedure is to ensure that the domain name concerned is legitimate for use on the email service.

> [!primary]
>
> If the domain name, i.e. its DNS zone, is managed in the same customer account as the email service, configuring the CNAME record is not necessary.

**Find out how to validate your domain name for your email service by adding a CNAME record.**

## Requirements

- Access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)
- An [Exchange](https://www.ovhcloud.com/en-gb/emails/) or [Email Pro](https://www.ovhcloud.com/en-gb/emails/email-pro/) solution
- A domain name linked to your email service, see [Adding a domain name to an email service](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)
- Administrative rights to [configure the DNS zone](/pages/web_cloud/domains/dns_zone_edit) for the domain name concerned (in the OVHcloud Control Panel or an external management interface)

## Instructions

### Why create a CNAME record?

The CNAME record is used here as an alias, it points to a target that itself points to an IP address. This record is not mapped to an email service.

The CNAME record is used as a validation code (token) for our [**Hosted Exchange**](https://www.ovhcloud.com/en-gb/emails/hosted-exchange/) and [**Email Pro**](https://www.ovhcloud.com/en-gb/emails/email-pro/) solutions. It is added to the DNS zone of the domain name you want to validate for use with your emails. The purpose is to check that the user of the email service is authorised to use the domain name they are adding.

In the diagram below, the email service ([Exchange](https://www.ovhcloud.com/en-gb/emails/) or [Email Pro](https://www.ovhcloud.com/en/emails/email-pro/)) is represented by the contents of the green frame.<br>
You have created accounts (**contact**, **john.smith** and **mary.johnson** in this example) that will have email addresses associated with them.<br>
The domain name **mydomain.ovh** has been added to the email service (please refer to the guide on [Adding a domain name to your email service](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)).<br>
The email service generates a unique validation code (“**abcd1-check**” in our example).<br>
If the DNS zone for the domain name **mydomain.ovh** is not managed in the same OVHcloud customer account, or is managed from an external interface, this code must then be added as a CNAME record. This record is represented by the blue box in the example.<br>
The email service automatically checks the DNS records of the domain name **mydomain.ovh** for the validation code.

![email](images/email-dns-conf-cname01.png){.thumbnail}

As soon as the email service reads the validation code in the DNS zone of the domain name **mydomain.ovh**, it becomes possible to use the addresses **contact@mydomain.ovh**, **john.smith@mydomain.ovh** and **mary.johnson@mydomain.ovh**.

### Step 1 - Understand the OVHcloud CNAME diagnostic <a name="step1"></a>

The **CNAME** diagnostic box will appear in the `Associated domains`{.action} tab of your email service after you have added your domain name.

![cnamedomainemail](images/cname_exchange_diagnostic.png){.thumbnail}

In the example above, the box is red. Here are the possible reasons for this state:

- **The domain name declared is not managed in the same OVHcloud customer account as your email service**. Access the Control Panel of the OVHcloud account in which the domain name’s DNS zone is managed and follow [step 3](#step3) of this guide.
- **The domain name declared uses DNS servers not provided by OVHcloud**. The domain name is registered with OVHcloud, but it uses custom DNS servers. To check this, select the domain name in the `Domain names`{.action} section on the left-hand column. In the `General information`{.action} tab, check the status below “DNS servers”. If it says `Custom`{.action}, you have declared external servers in the `DNS servers`{.action} tab. Log in to the management interface of your DNS provider in order to edit the CNAME record.

![email](images/email-dns-conf-cname02.png){.thumbnail}

- **The domain name declared is not registered with OVHcloud and does not use OVHcloud DNS servers**. Your domain name is registered at another registrar. You will need to contact your domain name provider to verify how to access the DNS zone configuration.

### Step 2 - Retrieve the validation code <a name="step2"></a>

Go to the `Associated domains`{.action} tab, and click on the red `CNAME` box in the “diagnostic” column to retrieve the information required.

The CNAME record is displayed in the dialog box that appears.

![cnamedomainemail](images/cname_exchange_informations.png){.thumbnail}

The middle line consists of the verification code and the target (`a1bcd-check.mydomain.ovh to ovh.com.` in the example above) for the CNAME record.

### Step 3 - Create the CNAME record <a name="step3"></a>

Select the tab that corresponds to the interface you are using:

> [!tabs]
> **In the OVHcloud Control Panel**
>> In the `Web Cloud`{.action} section, click `Domain names`{.action}, then select the domain name concerned. Switch to the `DNS zone`{.action} tab.<br>
>> Your DNS zone configuration will appear. To add a CNAME record, click on the button `Add Entry`{.action} on the right.<br>
>> In the new window, you can select the type of DNS record to add. Click `CNAME`{.action} and fill in the fields according to the information retrieved in [step 2](#step2) of this guide.<br>
>> For example, if the validation code is “**a1bcd-check**”, this must be entered into the “Sub-domain” field. Enter “**ovh.com.**” as the “target” and make sure to keep the trailing “**.**”.
>>
>> ![cnamedomainemail](images/cname_add_entry_dns_zone.png){.thumbnail}
>>
>> Once you have entered this information, click `Next`{.action}. Verify that the information displayed is correct, then click `Confirm`{.action}.<br>
>>
>> > [!warning]
>> >
>> > The modification is usually applied within a few minutes but might require a propagation time up to 24 hours.
>>
> **From an interface external to OVHcloud**
>>
>> Log in to the interface that manages the domain name’s DNS zone and add a CNAME record to it, with the following settings:
>>
>> - **Sub-domain**: Enter the value in the form “**xxxxx-check**”, replacing “**xxxxx**” with the unique code listed in [step 2](#step2) of this guide.
>> - **Target**: Enter the value “**ovh.com.**”, keeping in mind the trailing “**.**” (if your input interface has not added it automatically).
>>
>> Confirm this change in your DNS zone.
>>
>> > [!warning]
>> >
>> > The modification is usually applied within a few minutes but might require a propagation time up to 24 hours.
>> >
>>
>> Here is an example of a DNS response after adding a validation CNAME record:
>>
>> ```text
>> ab1cd-check.mydomain.ovh. 3600	IN	CNAME	ovh.com.
>> ```

To check that the CNAME record configuration has been successfully queried by your OVHcloud email service, open it in the Control Panel and go to the tab `Associated domains`{.action}. If the `CNAME` box is no longer present in the “diagnostic” column, the domain name was associated with your service. If not, then your configuration changes may not have propagated fully.

![cnamedomainemail](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
