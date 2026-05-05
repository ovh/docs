---
title: "Hosted Private Cloud VMware Lifecycle Policy"
excerpt: "Discover the lifecycle policy for VMware on OVHcloud services, including maintenance, sunset, and end of support phases"
updated: 2026-04-20
---

> [!warning]
>
> This page is for general information purposes only and OVHcloud does not guarantee that the information will be complete or up-to-date. The contracts governing this product (notably the general and specific terms of use, which can be found in the client account) and the specific communications sent by OVHcloud to the clients will prevail over any information displayed in this web page.
>

## Objective

**This page provides an overview of the lifecycle policy of Hosted Private Cloud VMware on OVHcloud services.**

Hosted Private Cloud VMware on OVHcloud services proposes dedicated infrastructure based on SDDC technologies as well as other editors' technologies (such as Veeam or Zerto).

OVHcloud has a lifecycle policy for the service to take into account several factors, such as:

- the lifecycle policy of integrated software components as determined by their editors (VMware, Veeam, Zerto, etc.);
- the lifecycle of the hardware components;
- the compatibility between hardware and/or software components;
- any factor affecting the quality of the service.

This lifecycle policy is provided to help clients understand the underlying reasons for version or range changes and the impact of each phase of the lifecycle on the service, and anticipate and prepare the transition to a newer version or range.

### Commercial range concerned

**Hosted Private Cloud VMware on OVHcloud Products**:

- Public VMware Cloud Foundation as-a-Service
- Managed VMware vSphere
- Private VMware Cloud Foundation as-a-Service - 1AZ
- Private VMware Cloud Foundation as-a-Service - Stretched Cluster 3AZ

## Lifecycle timeframe and definitions

### Definitions

#### Maintenance Mode

As we continue to innovate and improve our offers, we've made the decision to focus our development efforts on newer, more advanced solutions. As a result, the following services and capabilities will be transitioning to a Maintenance mode. 

What this means for you:

- Existing customers who are currently using these capabilities will continue to receive support, including critical security and availability updates, and can rest assured that we'll keep them running smoothly.
- However, we won't be adding new features or enhancements to these services.
- New customers will no longer be able to sign up for these specific services.

Our team is committed to helping you navigate this transition and ensuring a seamless experience.

#### Sunset Mode

Sunset mode is a phase in the product lifecycle where a service or feature is nearing the end of its supported life. At this stage, the service or feature is still available for use, but it will no longer receive regular updates, new features, or significant bug fixes.

During this phase, OVHcloud will provide support to help customers migrate to alternative services or solutions that meet their evolving needs. Our goal is to ensure a seamless transition and minimize disruption to your business.

While the service or feature is in the Sunset mode phase, customers can expect:

- Continued access to the service or feature, but with limited support and no new development
- Assistance from OVHcloud in migrating to other services or solutions
- Regular communication about the upcoming Support Expiration date and recommended next steps
- Access to documentation and resources to help with the migration process

#### End of Support

The following services and features have reached end of support and are no longer available.

### Timeline

![Typical lifecycle of a VMware on OVHcloud service](images/01_lifecycle_pcc.png){.thumbnail}

## OVHcloud Commercial Range Status

### Products (Platforms)

|                   Commercial Range                    | General Availability | Maintenance Mode | Sunset Mode | End of Support |
|:-----------------------------------------------------:|:--------------------:|:------------:|:-------------:|:-----------:|
|     Managed VMware vSphere                            |          2016        |  2027-05-31  |  2027-10-31   | 2027-10-31  |
|  Public VMware Cloud Foundation as-a-Service          |          2025        |              |               |             |
|Private VMware Cloud Foundation as-a-Service - 1AZ                  |          2027        |              |               |             |
|Private VMware Cloud Foundation as-a-Service - Stretched Cluster 3AZ|          2027        |              |               |             |

### Managed VMware vSphere Hosts (compute)

For the Managed VMware vSphere product, a specific hardware lifecycle applies:

- **Sales** refers to the date when new cluster creation is discontinued. Past this date, customers will not be able to start a service on the discontinued hardware.
- **Growth** refers to the date when the growth for an existing cluster is discontinued. Past this date, customers will not be able to order this hardware generation anymore. However, this does not affect contractual service commitments for running clusters as the product is still supported (updates, spares, SLA).

|                   Hardware Generation                 | General Availability |     Sales    |    Growth     | End of Support |
|:-----------------------------------------------------:|:--------------------:|:------------:|:-------------:|:-----------:|
| SDDC2014 & SDDC2016 (Intel Ivy Bridge, Intel Haswell) |          2016        |  2017-04-30  |  2026-06-01   | 2027-05-31  |
|              SDDC2018 (Intel Broadwell)               |          2018        |  2018-11-30  |  2026-06-01   | 2027-05-31  |
|             Essentials (Intel Broadwell)              |          2020        |  2026-06-01  |  2026-06-01   | 2027-05-31  |
|               Premier (Intel Xeon Gold)               |          2020        |  2026-05-29  |  2027-03-30   | 2027-10-31  |
|           Premier2026 (Intel Emerald Rapids)          |          2026        |  2027-06-30  |               |             |
|           Premier2027 (Intel Granite Rapids)          |          2027        |              |               |             |

## Integrated Software

### VMware lifecycle policy

For the VMware product lifecycle policy, refer to the editor's page:

[VMware Lifecycle](https://support.broadcom.com/group/ecx/productlifecycle)

### Veeam Backup & Replication lifecycle policy

For the Veeam product lifecycle policy, refer to the editor's page:

- [Veeam Lifecycle](https://www.veeam.com/product-lifecycle.html)

### Zerto lifecycle policy

For the Zerto product lifecycle policy, refer to the editor's page:

- [Zerto Virtual Replication Product Version Lifecycle Matrix](https://help.zerto.com/bundle/Lifecycle.Matrix.HTML/page/Content/Lifecycle_Matrix/Lifecycle_Matrix.htm#zerto_virtual_replication_product_version_lifecycle_matrix_r_893035264_1010900)

## Go further

Join our [community of users](/links/community).
