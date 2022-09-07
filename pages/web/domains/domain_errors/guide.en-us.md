---
title: Troubleshooting a domain name error
slug: domain-errors
section: Common tasks
order: 01
---

**Last updated 1st September 2022**

## Objective

Creating a domain name, transfering it, or changing its owner are technical operations which may produce errors. A manual intervention may then be necessary.

**Find out what to do when an error occurs on a domain name.**

## Requirements

- One or more domain names 
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)
- Being up-to-date in the [payments](https://docs.ovh.com/us/en/billing/manage-ovh-bills/#pay-bills) and [renewals](https://docs.ovh.com/us/en/billing/how-to-use-automatic-renewal-at-ovh/#renewal-management) of related services (domain name and web hosting plan)

## Instructions

In your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), go to the `Web Cloud`{.action} section, then `Domain names`{.action}. Click on `Ongoing operations`{.action} above the list of domain names.

The table on this page displays all currrent domain name operations in your Control Panel.

![domain](images/domain-error-table01.png){.thumbnail}

- `Domain`: The domain name concerned by the operation
- `Operation`: The domain name operation in progress
- `Comment`: Details of the current operation and instructions
- `Processing date`: Date the operation was created
- `Date of update`: Timestamp for updating the current operation
- `End date`: The end date of the operation
- `Status`: The current status of the operation

Not all of the operations listed in this table require your intervention for them to proceed normally.<br>
In this guide, we will focus on **error** operations, using examples of recurring issues.

![domain](images/domain-error-table02.png){.thumbnail}

### Examples

> [!primary]
>
> The list of examples below is not exhaustive. If you encounter an error that is not detailed in this guide, carry out the following actions:
>
> - Verify that you are up to date with [payments](https://docs.ovh.com/us/en/billing/manage-ovh-bills/#pay-bills) and domain name [renewals](https://docs.ovh.com/us/en/billing/how-to-use-automatic-renewal-at-ovh/#renewal-management).
> - Check if you can resolve the issue by clicking the `...`{.action} button to the right of the operation concerned.
> - Read the descriptive message and see if it helps you resolve the error.
>
> If, despite these checks, you are unable to complete the domain name operation, please open a support ticket via the OVHcloud Control Panel.
>

#### Document requests

Some domain name extensions require you to justify their registration by providing documents. If this is the case, you will need to submit the documents from the `Ongoing Operations`{.action} page.

![domain](images/domain-error01.png){.thumbnail}

To provide the necessary document(s), click on the `...`{.action} button to the right of the operation concerned.<br>
The window below will appear. The `Description` section provides details regarding the required document as well as a button to upload your file.

![domain](images/domain-error02.png){.thumbnail}

#### Missing information

When you register your domain name, it is sometimes necessary to fill in the contact data. If these details do not match the criteria for the domain name, you might receive the error below.

![domain](images/domain-error03.png){.thumbnail}

Click the `...`{.action} button to the right of the operation.<br>
In the window below, fill in the fields with the contact information.

![domain](images/domain-error04.png){.thumbnail}

#### Wrong transfer code 

When you transfer your domain name to OVHcloud, you must enter a transfer code (**authInfo**) when you place your order. If this code is incorrect, the operation will be suspended, but you can retry it by entering the correct code.

![domain](images/domain-error05.png){.thumbnail}

Click the `...`{.action} button to the right of the operation.<br>
The window below will appear. Enter the transfer code (**authInfo**), and run the operation again.

![domain](images/domain-error06.png){.thumbnail}

#### DNS server error

An error may occur if the DNS servers you attach to a domain name are not working.<br>
In the example below, the IP address of the DNS server is not responding.

![domain](images/domain-error07.png){.thumbnail}

In the `Domain names`{.action} section, select the domain name concerned, then click the `DNS servers`{.action} tab. In this tab, [edit your DNS servers](https://docs.ovh.com/us/en/domains/web_hosting_general_information_about_dns_servers/). 

#### Error on a **.ie**, **.de** or **.it** domain name after a DNS update

When you modify your DNS servers, the registry may check the new DNS servers and the associated DNS zone, and block the domain name if the configuration is not compliant.

> [!warning]
>
> This type of blocking is initiated by the registry and not by OVHcloud. So even if the domain name is blocked by the registry, its DNS servers will appear as `Active` in your OVHcloud Control Panel.

To check if your domain name is blocked, go to the `Ongoing operations`{.action} table.

![domain](images/domain-error08.png){.thumbnail}

To check your domain name, we recommend that you use the verification tool issued by the registry, for example:

- For a **.de** domain name: <https://nast.denic.de/>
- For a **.it** domain name: <https://dns-check.nic.it/>

> [!primary]
>
> If your registry does not provide a DNS server verification tool, you can query your new DNS servers via the `nslookup` command at a Windows command prompt, or via the `dig` command at a Linux or macOS terminal. 
>
> If your DNS servers are reachable, the tool will return their IP addresses.
>
> In any case, check with the DNS server administrator that the DNS servers are correctly configured to host your domain name’s DNS zone.

Once you have identified the origin of the error and corrected it, you can click on the `...`{.action} button to the right of the operation concerned and retry the DNS verification operation.

#### OVHcloud internal error

You may encounter an error with the comment “internal error”. This error does not allow any action on your part.<br>
First, check that your domain name and DNS servers are active. 

If you notice an anomaly that is not related to the configuration of the DNS servers or the DNS zone, please open a support ticket with OVHcloud support to identify the cause of the malfunction.

![domain](images/domain-error09.png){.thumbnail}

## Go further

[Transferring a domain name to OVHcloud](https://docs.ovh.com/us/en/domains/transfer-generic-domain/)

[Transferring a domain name to another registrar](https://docs.ovh.com/us/en/domains/outgoing-transfer-of-generic-or-geographical-domain-name/)

[Editing the DNS servers for an OVHcloud domain name](https://docs.ovh.com/us/en/domains/web_hosting_general_information_about_dns_servers/)
 
Join our community of users on <https://community.ovh.com/en/>.
