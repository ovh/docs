---
title: OVHcloud API and OS Installation (EN)
excerpt: Use OVHcloud API to install or re-install an OS on your dedicated server
updated: 2024-04-04
---

## Objective

Fully automating OS installation or reinstallation on a [dedicated server](https://www.ovhcloud.com/pl/bare-metal/) with the [OVHcloud API](/pages/manage_and_operate/api/first-steps) can be interesting in various situations.

## Requirements

- A [dedicated server](https://www.ovhcloud.com/pl/bare-metal/) in your OVHcloud account
- Access to the [OVHcloud API](/pages/manage_and_operate/api/first-steps)

> [!warning]
>
> A new installation will erase all the data on the server.
>

## Instructions

### OS Compatibility <a name="os-compatibility"></a>

Log in to the [API console](https://api.ovh.com/) and go to the `/dedicated/server`{.action} section.

You can list all your [dedicated servers](https://www.ovhcloud.com/pl/bare-metal/) with the following API call:

> [!api]
>
> @api {v1} /dedicated/server GET  /dedicated/server
>

To list all compatible OSs for a specific dedicated server, you can use the following API call:

> [!api]
>
> @api {v1} /dedicated/server GET  /dedicated/server/{serviceName}/install/compatibleTemplates
>

In the response, look at the contents of the `ovh` key: this is the list of OSs in the OVHcloud catalog that you can install on this server.

### OS Details informations <a name="os-details"></a>

In the `/dedicated/installationTemplate`{.action} section, you can display the details for a specific OS:

> [!api]
>
> @api {v1} /dedicated/installationTemplate GET  /dedicated/installationTemplate/{templateName}
>

You can find interesting information such as the following:

|Attribute|Description|
|---|---|
|distribution|OS Name|
|description|OS Display Name|
|endOfInstall|OVHcloud OS end of availability date¹|
|usage,category,family|Usage, category, and OS family|
|project/os|Information about OS governance, version, release notes and project URL|
|project/usage|Same as project/os, but at the software layer if applicable|
|license/os|Information about OS license: licensing contract URL and licensing type|
|license/usage|Same as license/os, but at the software layer if applicable|
|filesystems|Compatible file systems types|
|hardRaidConfiguration,softRaidOnlyMirroring,lvmReady|Compatibility with hardware raids, software raids and LVM²|
|inputs|OS specific questions (see explanation below)|

¹ Customers that don't use images from the OVHcloud catalogue (installation from a custom image ([BYOI](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image)/[BYOLinux](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-linux)), installation over the network, or manually via IPMI) are not affected by this limitation.<br />
² For more details, see [partitioning customization](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh).<br />

> [!primary]
>
> If you need to see this information for all available OSs in the catalog, you should consider using the API call `/dedicated/installationTemplate/templateInfos`{.action} instead.
>

> [!api]
>
> @api {v1} /dedicated/installationTemplate GET  /dedicated/installationTemplate/templateInfos
>

### OS Questions <a name="os-inputs"></a>

Some OSs can have a list of specific questions. If that is the case, the `inputs` key contains a list of questions.

Example of specific questions for Debian 12 (Bookworm):

```json
{
    "inputs": [
        {
            "default": "",
            "name": "sshKey",
            "mandatory": false,
            "enum": [],
            "description": "SSH Public Key",
            "type": "sshPubKey"
        }
    ]
}
```

Example of specific questions for Windows Server 2022 Standard (Core):

```json
{
    "inputs": [
        {
            "default": "en-us",
            "mandatory": false,
            "type": "enum",
            "name": "language",
            "description": "Display Language",
            "enum": [
                "en-us",
                "fr-fr"
            ]
        }
    ]
}
```

Each question has the following attributes:

|Attribute|Description|
|---|---|
|default|If no answer is provided, this value will be used|
|mandatory|If this question is mandatory¹|
|type|Value type expected in the answer|
|name|Question name (used as identifier)|
|description|Question description|
|enum|Possible values (only applicable for `enum` `type`)|

¹ If a mandatory question without default value is not answered, the API will return an error.

### Disk Groups <a name="disk-group"></a>

Some [dedicated servers](https://www.ovhcloud.com/pl/bare-metal/) have multiple groups of disks. For example, one group with SATA disks and another group with SSD disks. Those servers are sometimes also called **hybrid servers**.

To list the disk groups and their disks, you can use the following API call in order to identify the disk group on which you want the OS to be installed:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/hardware
>

Example reply:

```json
{
  "bootMode": "uefi",
  "defaultHardwareRaidSize": null,
  "description": "SCALE-7 - AMD Epyc 7763",
  "expansionCards": null,
  "threadsPerProcessor": 128,
  "memorySize": {
    "unit": "MB",
    "value": 524288
  },
  "defaultHardwareRaidType": null,
  "diskGroups": [
    {
      "defaultHardwareRaidType": null,
      "numberOfDisks": 2,
      "diskGroupId": 1,
      "diskType": "SSD",
      "defaultHardwareRaidSize": null,
      "diskSize": {
        "unit": "GB",
        "value": 480
      },
      "description": "2 X Disk SSD 480 GB, JBOD",
      "raidController": null
    },
    {
      "defaultHardwareRaidType": null,
      "numberOfDisks": 2,
      "diskGroupId": 2,
      "diskType": "NVME",
      "defaultHardwareRaidSize": null,
      "diskSize": {
        "unit": "GB",
        "value": 1920
      },
      "raidController": null,
      "description": "2 X Disk NVME 1920 GB, JBOD"
    }
  ],
  "processorArchitecture": "x86_64",
  "coresPerProcessor": 64,
  "processorName": "Epyc7763",
  "formFactor": "1u",
  "motherboard": "S8036-M",
  "numberOfProcessors": 1,
  "usbKeys": null
}
```

In this example, there are 2 disk groups:

- the first one (diskGroupId=1) contains 2 x 480 GB disks.
- the second one (diskGroupId=2) contains 2 x 1,9 TB disks.

> [!primary]
>
> By default, the OS will be installed on diskGroupId 1.
>

### Create an OS installation task <a name="install-task"></a>

When you have gathered all the information that you need, you can create the OS installation task with the following API call:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/install/start
>

With the following parameters:

|Parameter|Value|Required|
|---|---|---|
|serviceName|Server name|✅|
|templateName|OS to install|✅|
|diskGroupId|Id of the disk group on which the OS will be installed|❌|
|customHostname|Custom hostname|❌|
|userMetadata|Answers to the OS specific questions|❌|

`userMetadata` contains a list of key/value with the answers to the OS-specific questions:

- Key must be the `name` of the question.
- Value must be the answer to the question, in the requested `type`.

Payload example to install Debian 12 (Bookworm) with SSH key based authentication:

```json
{
  "details": {
    "customHostname": "mon-tux"
  },
  "templateName": "debian12_64",
  "userMetadata": [
    {
      "key": "sshKey",
      "value": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAgQC9xPpdqP3sx2H+gcBm65tJEaUbuifQ1uGkgrWtNY0PRKNNPdy+3yoVOtxk6Vjo4YZ0EU/JhmQfnrK7X7Q5vhqYxmozi0LiTRt0BxgqHJ+4hWTWMIOgr+C2jLx7ZsCReRk+fy5AHr6h0PHQEuXVLXeUy/TDyuY2JPtUZ5jcqvLYgQ== my-nuclear-power-plant"
    }
  ]
}
```

Payload example to install Windows Server 2022 Standard (Core) in French:

```json
{
  "details": {
    "customHostname": "ma-fenetre"
  },
  "templateName": "win2022core-std_64",
  "userMetadata": [
    {
      "key": "language",
      "value": "fr-fr"
    }
  ]
}
```

Example reply:

```json
{
    "taskId": 123456789,
    "ticketReference": null,
    "lastUpdate": "2024-01-26T17:57:10+01:00",
    "needSchedule": false,
    "startDate": "2024-01-26T17:57:10+01:00",
    "status": "init",
    "doneDate": null,
    "tags": null,
    "comment": "Start dedicated server installation",
    "plannedInterventionId": null,
    "note": null,
    "function": "reinstallServer"
}
```

`123456789` is the OS installation task ID. You can follow the OS installation task status with the following API call:

> [!api]
>
> @api {v1} /dedicated/server GET  /dedicated/server/{serviceName}/task/{taskId}
>

You can also monitor the progress of the installation process with the following API call which displays a detailed list of steps:

> [!api]
>
> @api {v1} /dedicated/server GET  /dedicated/server/{serviceName}/install/status
>

## Go further

[Getting started with a dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)

[Getting started with a Kimsufi, So You Start or Rise dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)

[Bring Your Own Image (BYOI)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image)

[Bring Your Own Linux (BYOLinux)](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-linux)

[OVHcloud API & Partitioning](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing software RAID](/pages/bare_metal_cloud/dedicated_servers/raid_soft)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

Join our user community on <https://community.ovh.com/en/>.
