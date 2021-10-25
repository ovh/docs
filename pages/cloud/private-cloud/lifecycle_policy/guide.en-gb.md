---
title: Hosted Private Cloud VMware Lifecycle Policy
slug: lifecycle-policy
excerpt: 'Lifecycle policy for Hosted Private Cloud VMware'
section: FAQ
order: 3
---

**Last updated 25th October 2021**

> [!warning]
>
> This page is for general information purpose only and OVHcloud does not guarantee that the information will be complete or up-to-date. The contracts governing this product (notably the general and specific terms of use, which can be found in the client account) and the specific communications sent by OVHcloud to the clients will prevail over any information displayed in this web page.
>

## Objective

**This page provides an overview of the lifecycle policy of OVHcloud Hosted Private Cloud VMware services.**

OVHcloud's Hosted Private Cloud VMware service proposes dedicated infrastructure based on VMware SDDC technologies as well as other editors' technologies (such as Veeam or Zerto).

OVHcloud has a lifecycle policy for the service in order to take into account several factors, such as:
- the lifecycle policy of integrated software components as determined by their editors (VMware, Veeam, Zerto, etc.);
- the lifecycle of the hardware components;
- the compatibility between hardware and/or software components;
- any factor affecting the quality of the service.

This lifecycle policy is provided to help clients understand the underlying reasons for version or range changes and the impact of each phase of the lifecycle on the service, and anticipate and prepare the transition to newer version or range.

### Commercial range concerned

Hosted Private Cloud
    DC2011 & DC2013 (AMD Opteron, AMD Bulldozer)
    DC2014 & DC2016 (AMD PileDriver)
    SDDC2014 & SDDC2016 (Intel Ivy Bridge, Intel Haswell)
    SDDC2018 (Intel Broadwell, Intel Haswell)
    Premier (Intel Cascade Lake)
Managed Bare Metal
    Essentials (Intel Broadwell)

## Lifecycle timeframe and definitions

### Definitions

#### End of Sales

This refers to the date when the sales of new service for a version or range is discontinued. Past this date, clients will not be able to start a service on the discontinued version or range anymore.

After the End of Salesfor a specific Service generation, the Client will still be able to use and grow existing instances of the Service and add additional individual Host Servers. The Packs from that previous generation or any other generation before it will not be available anymore for ordering new instances of the Service. The Packs will be sold for the new Service generation launched on the market only.

The End of Sales are usually announced with a thirty (30) days minimum warning.

A range will typically reach its End of Sales three (3) years after the beginning of the General Availability phase.

#### End of Growth

This refers to the date when the growth for a version or range is discontinued. Past this date, clients will not be able to order the discontinued version or range anymore.

The End of Sales are usually announced with a thirty (30) days minimum warning.

A range will typically reach its End of Growth five(5) years after the beginning of the General Availability phase.

#### End of Support

This refers to the date when a version or range ceases to have support from OVHcloud.

The End of Life may involve the unapplicability of SLAs, and the absence of support services, limited availability of spares, hardware delivery without any guaranteed specific timeframe.

The End of Support are usually announced with a thirty (30) days minimum warning.

A range will typically reach its End of Support five (5) years after the beginning of the General Availability phase.

#### End of Life

This refers to the date when a version or range is being shut down

The End of Life may involve the unapplicability of SLAs, and the absence of support services, the absence of spares.

Following the End of Life, the servers concerned will be shut down definitively. OVHcloud may offer a grace period of a few months to allow for the last clients using servers of this range to move onto newer ranges.

Clients should anticipate the range change by testing in advance and making sure their configuration and software are compatible with the range they are upgrading to.

### Timeframe

![Typical lifecycle](images/01_lifecycle_pcc.png){.thumbnail}

### Summary

This table presents a summary of the different phases of the lifecycle of the service. The impact for each commercial range may differ.

| Phases | General Availability | General Support | Deprecated | Decommissionning / Grace Period |
|:-----:|:-----:|:-----:|:-----:|:-----:|
| Sales (start new services) | X |  |  |  |
| Growth (existing services) | X | X |  |  |
| Maintenance updates and upgrades | X | X |  |  |
| Support | X | X |  |  |
| SLA | X | X |  |  |
| bug fixes | X | X | X |  |
| Hardware support (spares) | X | X | X |  |
| Security patches | X | X | X | X |
| Knowledge Base | X | X | X | X |

## OVHcloud Commercial Range status

### Hosts (compute)

| Commercial Range | General Availability | End of Sales | End of Growth | End of Support | End of Life |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| DC2011 | 2011 | 28/02/2015 | 28/02/2022 | 30/06/2022 | 31/07/2022 |
| DC2013 | 2013 | 28/02/2015 | 28/02/2022 | 30/06/2022 | 31/07/2022 |
| DC2014 | 2014 | 31/08/2017 | 28/02/2022 | 30/06/2022 | 31/07/2022 |
| DC2016 | 2016 | 30/11/2018 | 28/02/2022 | 30/06/2022 | 31/07/2022 |
| SDDC2016 | 2016 | 30/04/2017 | 28/02/2023 | 30/06/2023 | 31/08/2023 |
| SDDC2018 | 2018 | 30/11/2018 | 28/02/2024 | 30/06/2024 | 31/08/2024 |
| Premier | 20/07/2020 |  |  |  |  |
| Essentials | 18/11/2020 |  |  |  |  |

### Datastores (storage)

| Datastore | General Availability | End of Sales | End of Growth | End of Support | End of Life |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| 300Gb | 2013 | 28/02/2015 | 30/11/2018 | 30/06/2022 | 31/08/2022 |
| 600Gb | 2013 | 28/02/2015 | 30/11/2018 | 30/06/2022 | 31/08/2022 |
| 900Gb | 2016 | 31/08/2017 | 30/11/2018 | 30/06/2022 | 31/08/2022 |
| 1200Gb | 2016 | 30/11/2018 | 30/11/2018 | 30/06/2022 | 31/08/2022 |
| 3000Gb | 2020 |  |  |  |  |
| 6000Gb | 2020 |  |  |  |  |
| 9000Gb | 2020 |  |  |  |  |
| 18000Gb | 2020 |  |  |  |  |
| 36000Gb | 2020 |  |  |  |  |

## Integrated Software

### VMware lifecycle policy

To know the lifecycle policy of VMware products, please refer to the editor's publication accessible at the following url :
<https://lifecycle.vmware.com/#/>

### Veeam Backup & Replication lifecycle policy

To know the lifecycle policy of Veeam products, please refer to the editor's publications accessible at the following urls :
<https://www.veeam.com/product-lifecycle.html and <https://www.veeam.com/releasestatus_rn.pdf>

### Zerto lifecycle policy

To know the lifecycle policy of Zerto products, please refer to the editor's publication accessible at the following url :
<http://s3.amazonaws.com/zertodownload_docs/Latest/Zerto+Virtual+Replication+Product+Version+Lifecycle+Matrix.pdf>

## Go further

Join our community of users on <https://community.ovh.com/en/>.