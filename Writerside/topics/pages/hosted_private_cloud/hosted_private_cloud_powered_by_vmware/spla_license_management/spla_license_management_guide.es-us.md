---
title: How to manage Windows licenses for virtual machines on your Hosted Private Cloud infrastructure
excerpt: Find out how to manage Windows licenses for virtual machines on your OVHcloud Hosted Private Cloud infrastructure
updated: 2024-05-03
---

## Objective

This guide explains how to manage Windows licenses for your virtual machines hosted on your Hosted Private Cloud infrastructure.

> [!warning]
>
> OVHcloud allows you to ease the management and billing of your Windows licenses by allowing you to tell us which virtual machines require the use of a license.
> 
> However, you remain responsible for the accuracy of the data you provide to us, and OVHcloud cannot be held liable for any unauthorized use of a Windows system on your part.

## Requirements

- [Windows licenses activated](manager_ovh_private_cloud#licence-windows.) in your [OVHcloud Control Panel](manager.)

## Instructions

### List virtual machines with a license

You can quickly check which virtual machines in your infrastructure are licensed via the OVHcloud API:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vmLicensed
>

*Return example:*

```json
[
    {
        "vmId": 1074,
        "name": "my-win2019-vm",
        "guestOsFamily": "windows2019srv_64Guest",
        "license": "windows 2019 Standard Core"
    }
]
```

### Verify the license of a virtual machine

You can check the license currently associated with one of your virtual machines via the OVHcloud API:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

If no license is attached to it, the `license` field value will be `null`.

*Return example:*

```json
{
    // ...
    "guestOsFamily": "windows2019srv_64Guest",
    "license": "windows 2019 Standard"
}
```

### Update the license of a virtual machine

You can update the license associated with one of your virtual machines via the OVHcloud API:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/setLicense
>

> [!primary]
>
> Virtual machines deployed from [VMware content libraries](how_to_use_content_library1.) are automatically attached to a corresponding Windows license.

> [!warning]
>
> In order to avoid the incorrect allocation of a Windows license on a virtual machine, the API call above will return an error in the case where the virtual machine has been configured for a different operating system from your vSphere interface. 
>
> You can resolve this by changing the VM settings or you can choose to ignore this error by passing the option `bypassGuestOsFamilyCheck`.

### Unlicense a virtual machine

You can delete the license associated with one of your virtual machines via the OVHcloud API:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}/removeLicense
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
