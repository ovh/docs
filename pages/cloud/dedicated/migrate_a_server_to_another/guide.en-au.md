---
title: Migrate data from one dedicated server to another
slug: migrate-data-from-one-dedicated-server-to-another
excerpt: Find out how to migrate data from one dedicated server to another
section: Getting started
order: 5
---

**Last updated 16th September 2021**

## Objective

As your needs and OVHcloud ranges are constantly evolving, it is sometimes necessary to change servers and migrate the data as a result.

**The purpose of this guide is to centralize the steps for migrating data from one server to another.**

> [!warning]
>
> OVHcloud is providing you with services for which you are responsible, with regard to their configuration and security. Since we have no administrative access to your devices, it is your responsibility to manage the software and to ensure they function correctly.
>
> This guide is designed to help you with the most common tasks. Nevertheless, we recommend that you contact a [specialist service provider](https://partner.ovhcloud.com/en-au/directory/) if you have difficulties or doubts concerning the administration, usage or implementation of security measures on a server.
>

## Requirements

- Two dedicated servers (the old one and a new one) with the OS installed
- Administrative access to your servers
- System administration skills

## Instructions

> [!warning]
>
> Some of the options mentioned in this guide may not be available on your server range, or they may be located in another section in your Control Panel (Kimsufi, So you Start).
>

### Preparing your environment

Once the new server has been delivered to your account, the first step will be to create an environment (OS, software, security...) identical to the previous environment, or at least as much as possible.

If an OS or software version change is required, make sure the locations of the files remain the same, as well as the compatibility of the data between versions.

### Migrating the data

Data migration usually involves copying files from one server to another. There are several solutions for this:

- The easiest way is to use a suitable software such as [SFTP](https://docs.ovh.com/au/en/dedicated/store-retrieve-data-via-sftp/).
- The other option is to [synchronise the two servers with each other](https://docs.ovh.com/au/en/dedicated/copy-data-server-rsync/).

### Using the backup storage (available only on OVHcloud and So you Start)

With the [Backup Storage](https://www.ovhcloud.com/en-au/bare-metal/backup-storage/) option, you can store data on a service that is external to your server. It is only linked to the service you ordered it from.

> [!warning]
>
> The Backup Storage can only be accessed from OVHcloud servers and IPs located in the same zone.
>
> For example, if a server located in the SBG data center has Backup Storage enabled, servers located in the GRA or RBX data centers can access it. However, servers located in BHS or WAW data centers will not have access to this storage.
>

You can authorise access to the Backup Storage from your new server. This way, you will have a gateway for transferring your data.

See our guide on [using Backup Storage on a dedicated server](https://docs.ovh.com/au/en/dedicated/using-backup-storage/){.external} for more information.

### Migrating an Additional IP (only available on OVHcloud and So you Start)

> [!warning]
>
> - The primary IP address of a server can't be migrated to a new one.
>
> - You can migrate an Additional IP from a So you Start account to an OVHcloud account. This operation is billed as a new IP creation.
>
> - It is not possible to migrate an IP from an OVHcloud account to a So you Start account.
>

If the reputation of your IP addresses is important, we strongly recommend using [Additional IPs](https://www.ovhcloud.com/en-au/bare-metal/ip/), as they can be kept if you migrate.

Once you have these IPs, you simply need to move them to the new server.
To do this, please refer to our dedicated guide: [Moving an Additional IP](https://docs.ovh.com/au/en/dedicated/ip-fo-move/).

> [!alert] Deleting the original server, on which one or more options have been ordered (Backup Storage, Additional IP), will permanently delete these options.
>
> It is therefore necessary to make all the changes before deleting the service.
>

Once the data is available on the new server, you may need to modify your DNS configuration, for example if the primary IP address was used.

For more information, please read our documentation on [domains and Dns](https://docs.ovh.com/au/en/domains/).

## Go further

If you would like assistance migrating your server, please contact our network of [OVHcloud partners](https://partner.ovhcloud.com/en-au/).

Join our community of users on <https://community.ovh.com/en/>.
