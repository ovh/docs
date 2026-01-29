---
title: "Backup Agent - Product Overview"
excerpt: "Overview of the Backup Agent product features and benefits"
updated: 2026-01-28
---

## Objective

This guide will help you understand how the Backup Agent works and its advantages for your Bare Metal services.

## Product presentation

The Backup Agent product allows you to back up your Bare Metal servers using an agent that will, according to a backup policy you have chosen, send your server data to an external storage point.

The Backup Agent product is based on two products from the Veeam software publisher:

- The Veeam Service Provider Console (VSPC)
- The Veeam Agent

The Veeam Agent is a software created by Veeam, which installs on your operating system on Linux and Windows, and allows you to back up your system.

The VSPC allows you to downgrade the backup policies to the agents stored on them, and allows you to give each agent the storage and credentials information when starting the backup.
Find out how to browse the VSPC interface via [this guide](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation).

When you order the product, you will receive an email confirming that the service has been delivered, as well as the access credentials to your tenant in the VSPC. This account is read-only and will give you access to views of your backups and agents.

Once the agent obtains the information, it sends the data directly to the storage point without ever transitioning through the VSPC infrastructure.

## Key aspects

There are several key advantages to this solution:

- First automatic backup policy with 14 days retention.
- Possibility to increase to 30 days of retention.
- The policy makes a full backup of your server.
- 14 days of immutability on our buckets.
- The period for automatic backups is between 10 p.m. and 6 a.m. (CET time zone for Europe - EST time zone for Canada and Asia).
- Encryption managed by OVHcloud of the storage hosting your backup data.
- Live sending of backup data to the bucket without placing a copy on our infrastructure.
- Storage point always distant from the location of your Bare Metal server (if you are in Roubaix, your storage point will be in Gravelines).

It is also important to keep in mind that:

- The backup policy is restricted, you cannot modify it.
- You cannot configure a backup only on a list of files or folders.
- You cannot modify the date and time of backup triggers (this is considered as an improvement in the future).

## Infrastructure

The basic diagram is as follows:

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Please note that:

- The VSPC infrastructure is hosted in OVHcloud datacentres and does not send data to Veeam servers.
- Storage is based on [OVHcloud Object Storage](/links/public-cloud/object-storage) technology, which is hosted in OVHcloud datacenters.

Upon delivery, you receive:

- A Backup Tenant, generally named `backup-tenant-xxxx`, which is a virtual container that can be used to group all your Backup services together.
- A VSPC Tenant, generally named `vspc-tenant-xxxx`, which is your “company” in the VSPC, allowing access to your dashboards and connecting your agents.
- A Vault, generally named `backup-vault-xxxx`, which is your storage space where your backup data is sent with each backup.

We recommend reading our other guides to find out more about the product.

## Anti-affinity

Backups are performed offsite, via the default Vault configuration, with a storage location in a geographically separate area from the Bare Metal server. This anti-affinity mechanism enhances the resilience of backup data.

Mapping of backup areas:

| Bare Metal Localisation | Vault Affinity |
| ----------------------- | -------------- |
| BHS                     | TOR            |
| SGP                     | SYD            |
| MUM                     | SGP            |
| SYD                     | SGP            |
| RBX                     | GRA            |
| GRA                     | SBG            |
| LIM                     | SBG            |
| PAR                     | RBX            |
| ERI                     | LIM            |
| WAR                     | LIM            |
| SBG                     | RBX            |
| TOR                     | BHS            |

## Go further

Join our [community of users](/links/community).