---
title: Concepts - Security overview
excerpt: Public Cloud Databases security overview
slug: concepts-security-overview
section: General information
order: 010
---

**Last updated October 26, 2022**

## Objective

OVHcloud Public Cloud Databases allow you to focus on building and deploying cloud applications while OVHcloud takes care of the database infrastructure and maintenance.

**This guide lists and explains security measures implemented for the Cloud Databases services.**

## Certifications & Compliance

OVHcloud Public Cloud Databases as a whole are [ISO/IEC 27001, 27017 and 27018](https://www.ovhcloud.com/en-ie/enterprise/certification-conformity/iso-27001-27017-27018/) and [HDS](https://www.ovhcloud.com/en-ie/enterprise/certification-conformity/hds/) certified.<br> Those certifications assure you that our solutions meet highest security standards.<br>Learn more about certified services at OVHcloud [here](https://www.ovhcloud.com/en-ie/enterprise/certification-conformity/).
<br>In addition, the service is GDPR compliant.

![HDS certification badge](images/certificate_badge_hds.png){.align-center}
![ISO certification badge](images/certificate_badge_iso.png){.align-center}
![GDPR compliance badge](images/compliance_badge_gdpr.png){.align-center}

Those certifications cover all DBMS in the Public Cloud Databases offer, you can find the complete list on the [Public Cloud Databases web page](https://www.ovhcloud.com/en-gb/public-cloud/databases/).

## Infrastructure & software

### High-availability

When choosing Business and Enterprise service plan, your data is replicated across multiple nodes, ensuring high availability of your data.

### Automatic daily backups

Public Cloud Databases services are backed up on a daily basis. Those backups are encrypted and uploaded to a remote, replicated storage backend, in a different datacenter from the database service. In case of a catastrophic failure of one of our datacenters,you will still be able to recover your data, with a 24 hours data loss maximum. Backup frequency and retention may vary depending on DBMS and service plan selected.

### Disk encryption

In order to provide the Public Cloud Databases offer, dedicated virtual machines are used. All customer data stored on disk is encrypted using [LUKS](https://en.wikipedia.org/wiki/Linux_Unified_Key_Setup). A unique key is generated for each database service and is never reused.

### CVE monitoring

The operation team in charge of the maintenance of the Public Cloud Databases services is constantly monitoring CVE on the different DBMS available. This monitoring is done through different channels, official mailing lists, security community, internal security check...

We are also in constant communication with MongoDB team, in order to provide fast and smooth transition to the latest security version of MongoDB.

## Network

### Private network

Public Cloud Databases provide interconnection with your private network. This option allows you to connect your database to other services in your private network, isolating your service from the outside.

### IP restriction

All database services are IP restricted. By default, services are not accessible. Users can specify unique IP or IP blocks from which the service will accept connections. IP restriction prevents all attacks from the outside of a specific information system.

### TLS end-to-end encryption

To ensure your data is safe, all inbound and outbound traffic to your database services is TSL encrypted.

## Go further

[Public Cloud Databases documentation](https://docs.ovh.com/ie/en/publiccloud/databases/)

Visit our dedicated Discord channel: <https://discord.gg/PwPqWUpN8G>. Ask questions, provide feedback and interact directly with the team that builds our databases services.
