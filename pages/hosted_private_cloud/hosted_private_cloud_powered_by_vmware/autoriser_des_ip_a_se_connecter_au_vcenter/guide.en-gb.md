---
title: 'Authorising IP addresses for vCenter access'
excerpt: 'Find out how to manage IP address access restrictions for vCenter'
updated: 2023-01-25
---

## Objective

Access to your vCenter is restricted only to authorized IP addresses.

**This guide explains how to authorise IP addresses for vCenter access in the OVHcloud Control Panel.**

## Requirements

- A [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/)

<!-- CP-NAV-START:privatecloud-vmware-vsphere -->
---

### OVHcloud Control Panel Access

- **Direct link:** [VMware vSphere](/links/control-panel/privatecloud-vmware-vsphere)
- **Navigation path:** `Hosted Private Cloud`{.action} > `Managed VMware vSphere`{.action} > Select your vSphere service

---
<!-- CP-NAV-END:privatecloud-vmware-vsphere -->

## Instructions

Go to the `Security`{.action} tab and click `Add a new IP address range`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

In the new Window, enter an IP address (range) that should be allowed access. You can also add a description to make the organisation of the whitelist easier.

![vCenter](images/restrictIP2.JPG){.thumbnail}

Click on `Next`{.action} when you have filled in the fields, then click on `Confirm`{.action} to apply your changes. Connections from this IP address (range) will now be possible.

> [!primary]
>
> Please note that for security reasons, you will only be able to allow a maximum of 2048 IP addresses to connect to your vCenter.
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
