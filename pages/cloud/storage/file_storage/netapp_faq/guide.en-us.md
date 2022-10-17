---
title: Enterprise File Storage - FAQ
excerpt: 'Enterprise File Storage FAQ'
slug: netapp/faq
section: Enterprise File Storage
order: 7
---

**Last updated 21st March 2022**

## Objective

Here are the most frequently asked questions about OVHcloud Enterprise File Storage.

## General questions

### What is OVHcloud Enterprise File Storage?

OVHcloud Enterprise File Storage is a highly available storage volume where you can store your files. This product is based on NetApp&#174; ONTAP Select Software-Defined Storage solution and is fully managed by OVHcloud.

### What can I do with Enterprise File Storage?

Enterprise File Storage can be used to respond to a number of practical cases for modernising your enterprise data storage infrastructure, thanks to the integration of the NFS protocol.<br>
For example, it can be used to outsource shared storage for your virtual machines or Linux-based servers for various workloads (critical applications, business databases, CRM, ERP...) in order to increase your infrastructure’s overall resilience and quality of service (QoS).<br>
Enterprise File Storage can be used to meet the simple use cases of shared file servers for which the service must offer high performance, high availability, and guaranteed and included bandwidth.

This solution can also be used to address more complex, practical cases, such as on-premises workload overflows and cloud migration. But also examples of backing up data in the cloud as part of resilience plans, both as a good market practice for data management and sustainability but also to optimise operational costs (hot on-premises data and warm/cold data in the cloud).

### Can Enterprise File Storage be managed from the OVHcloud Control Panel?

Yes, you can access this service directly from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) by going to the `Bare Metal Cloud`{.action} section, then `Storage and Backup`{.action}.

## Availability

### What level of reliability and redundancy can I achieve with Enterprise File Storage?

Enterprise File Storage is a highly available storage service and is redundant by design. Its active/active architecture secures this redundancy by powering two different file servers in two racks in one data centre. The service automatically replicates your data on the two servers in the event of a failure. The failover will usually happen in case of failure of the active server or during a planned maintenance.

### Which SLA comes with Enterprise File Storage?

Enterprise File Storage comes with a 99.99% availability rate.

## IP and Security

### What file transfer protocols are currently supported on Enterprise File Storage?

Enterprise File Storage supports file transfer through NFS (NFSv3).

### Which OVHcloud services can I push data from?

Enterprise File Storage is a service that can receive data from all existing OVHcloud services: Bare Metal, Public Cloud, Hosted Private Cloud (Dedicated server/VPS/Public Cloud/Hosted Private Cloud/So you Start/Kimsufi/DSL).

### Can the service be connected with a Microsoft Active Directory (AD)?

No.

### What certifications are associated with Enterprise File Storage?

Our Enterprise File Storage is compliant with several leading industry standards, including ISO27001, GDPR, and several countries' healthcare data policies.

### Can I access Enterprise File Storage from a vRack private network?

Not for now, but this feature will be available soon (vRack endpoint).

## On-premises access

### Can I access Enterprise File Storage from outside the OVHcloud network?

By definition, Enterprise File Storage is only available on the OVHcloud network.<br>
However, it is possible to mount an architecture that can link to an infrastructure outside this network.<br>
Please contact our sales or technical support team to design an infrastructure that is adapted to your ecosystem and solution. 

## Capacity and Performance

### What storage capacity options are available?

The minimum size of a service is 1TiB, and the maximum size is 58TiB. The granularity is 1TiB.

### How many Enterprise File Storage services can I create from my customer account?

There is no limit to the number of services per customer account.

### What is the maximum number of volumes per service?

You can create up to 10 volumes per service. The minimum size is 100GiB and the maximum size is 29TiB.

### What level of performance is available with Enterprise File Storage?

Enterprise File Storage comes with a guaranteed throughput service level objective (SLO) of 64MB/s per TiB and 4000 IOPS per TiB.

For example, when a 10 TiB pool is delivered, you get 640 MB/s bandwidth and 40,000 IOPS.

## Snapshots and backups

### How can I restore files from a previous version?

Snapshots are available in a directory designated for this purpose (.snapshots).

### Which backup policy is associated with Enterprise File Storage?

Customers are responsible for managing their own backup solution and policy. However, for resiliency and security, OVHcloud performs a daily backup of your service to a remote server. In case of failure or attack, OVHcloud can restore data from the previous day. If necessary, you can request a restoration as a paid service option.

### Are snapshots included in the capacity of a service?

Snapshots are allocated a minimum of 5% of the storage space. For example, on a 5TiB service, 250GiB are reserved for snapshots.

### What is the maximum number of snapshots per service?

200

### What is the maximum number of snapshots per volume?

200

### How many snapshot policies can I create per volume?

1

### How many rules can I create per snapshot policy?

4

### Where are snapshots stored?

Your snapshots are stored at the same level as your service. Snapshots are replicated on two separate servers in two different racks. In parallel, OVHcloud takes a daily snapshot at a remote site.

### How do I track the usage of pools and volumes?

There are no integrated metrics for monitoring pool and volume usage yet. 

## Pricing

### What type of pricing is linked to the service?

Enterprise File Storage is a service that is billed monthly by volume (from 1 TB to 58 TB in 1 TB increments). Optionally, you can also sign up for a duration of use (12, 24 or 36 months).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
