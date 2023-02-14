---
title: Avoid IP spoofing with the SpoofGuard service
slug: spoofguard
excerpt: Set up policies to detect IP spoofing
section: NSX
order: 10
updated: 2021-02-12
---

**Last Updated on 12/02/2021**

## Objective

SpoofGuard protects against IP spoofing by maintaining a reference table of VM names and IP addresses. SpoofGuard maintains this reference table by using the IP addresses that the NSX Manager retrieves from VMware Tools when a VM initially starts.

**This guide explains how to setup Spoofguard policies.**

## Requirements

- being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- a user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- an enabled [Distributed Firewall](https://docs.ovh.com/gb/en/private-cloud/nsx-distributed-firewall-configuration/)

## Instructions

In the vSphere interface menu, go to the `Networking and Security`{.action} dashboard.

![Menu](images/en01dash.png){.thumbnail}

On the left side, navigate to the `Spoofguard`{.action} section.<br>
Click on `+ Add`{.action} to create a new policy.

> [!primary]
> You could edit the default policy as well instead.

![SPOOF](images/en02spoof.png){.thumbnail}

Name and enable the policy.<br>
Choose the mode you wish to use:

- Automatically trust IP assignments on their first use
- Manually inspect and approve all IP assignment before use

> [!warning]
>
> Manual mode will block all traffic from your VMs until you validate the vNIC/IP combinations.
>

For convenience, you can also allow local address as valid address in namespace.

Click `Next`{.action}.

![POLICY](images/en03settings.png){.thumbnail}

Select the Network objects the policy will apply to and click `Finish`{.action}.

![POLICY](images/en04network.png){.thumbnail}

The policy is now on the list end enabled.<br>
If there are alerts and/or pending actions for you, you will be able to click on the number in the `Pending Approval` and `Conflicted IPs columns`.

![DONE](images/en05done.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
