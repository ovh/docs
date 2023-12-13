---
title: "Configure a custom iPXE script to boot your server from the OVHcloud API"
excerpt: Find out how to configure a custom iPXE script to boot your server from the OVHcloud API
updated: 2023-08-24
---

## Objective

> [!warning]
>
> This article is intended for experimented users that have at least basic knowledge about [Preboot Execution Environment (PXE)](https://en.wikipedia.org/wiki/Preboot_Execution_Environment) and its implementation being used at OVHcloud: [iPXE](https://ipxe.org/).
>

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg), it is possible to specify a boot mode among a predefined list: primary disk or rescue.<br>
With the [OVHcloud API](https://ca.api.ovh.com/), you can define custom scripts.

Using a custom script can be interesting in the following use cases:

- You are using a volatile OS that you don't want to install on disk and that remains only in memory.
- You have a multi-cloud strategy and one of the other cloud providers you use doesn't offer the OS you want to install, nor does it offer an alternative solution such as [BringYourOwnImage](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image). You want a unique and standard installation process whatever the cloud provider is, so you have built your own rescue installation image to fully manage the complete OS installation of your dedicated server.

## Requirements

- A [dedicated server](https://www.ovhcloud.com/en-sg/bare-metal/) **ready to be booted/rebooted** in your OVHcloud account.
- Access to the [OVHcloud API](https://ca.api.ovh.com/).

> [!warning]
>
> Restarting a dedicated server can cause outage of all services that only depend on this dedicated server.
>

> [!warning]
>
> This feature is only available for `UEFI` servers. We are working on adding this feature to `LEGACY` boot servers as well.
>

## Instructions

### Generate an iPXE script for your dedicated server <a name="manageIpxeScript"></a>

#### Change server iPXE script <a name="changeIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Specify your script within the `bootScript` attibute directly.

#### Get the server iPXE script <a name="getIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

You can see your script within the `bootScript` attibute.

For example:

```json
{
    "noIntervention": false,
    "name": "nsXXXXXXX.ip-XXX-XXX-XXX.eu",
    "rack": "SXXXBXX",
    "commercialRange": "fs",
    "os": "debian11_64",
    "rootDevice": null,
    "rescueMail": null,
    "linkSpeed": 1000,
    "bootScript": "#!ipxe\necho Boot first local hdd in LEGACY mode\nsanboot --no-describe --drive 0x80\nexit 1\n",
    "reverse": "nsXXXXXXX.ip-XXX-XXX-XXX.eu",
    "state": "ok",
    "ip": "XXX.XXX.XXX.XXX",
    "bootId": null,
    "newUpgradeSystem": false,
    "datacenter": "sbg3",
    "professionalUse": false,
    "supportLevel": "pro",
    "serverId": 123456,
    "powerState": "poweron",
    "monitoring": false
}
```

You can now reboot your server and it will use your [iPXE](https://ipxe.org/) to boot.

### Changing boot modes <a name="leaveIpxeScript"></a>

You can now switch back to disk or rescue boot from the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/sg/&ovhSubsidiary=sg) (see our guide on [Activating and using rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)), or the [OVHcloud API](https://ca.api.ovh.com/).

#### Switch to disk <a name="switchToDisk"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Specify `1` in the `bootId` attribute.

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

You can now see that the attribute value `bootScript` is null.

## Go further <a name="gofurther"></a>

[Restarting your dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#reboot)

[Activating and using rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[iPXE - open source boot firmware](https://ipxe.org/)

Join our community of users on <https://community.ovh.com/en/>.
