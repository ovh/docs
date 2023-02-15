---
title: Global Reversibility Policy
slug: global-reversibility-policy
section: Reversibility policies
order: 1
updated: 2021-05-05
---

**Last updated 5th May 2021**

## Objective

Reversibility is one of OVHcloud SMART (Simple, Mulit-local, Accessible, Reversible, Transparent) cloud commitments. We promote an open and interoperable ecosystem to ensure our customers' freedom of choice. As such, we affirm our compliance with the [SWIPO (SWItching and POrting)](https://swipo.eu/download-section/copyrighted-downloads/){.external} IaaS code of conduct for Cloud Providers, designed with the European Commission.

Our principles for implementing reversibility are as follows: an open, standard environment, in which our customers have very broad control over their systems and data; detailed customer documentation to best facilitate ingress and egress migration.

## OVHcloud General Reversibility Model

### Infrastructure control by our customers

Our model as an *Infrastructure as a Service* provider is to give customers extended administrative rights over their infrastructures. In particular, a customer must have the freedom to migrate independently, for example, to import items, or to export data to other providers' infrastructures.

As a result, we consider that our responsibility is to provide a stable and standardized technical environment, and that the effective implementation of reversibility is largely a matter of customer responsibility. Actions whithin the customer responsibility include capacity planning, volume forecasting, effective export and import of data, securing data transfers...

In addition, we do not involve third parties in the provision of our services; this provision and the resulting technical responsibilities (possibility of accessing or intervening on customer infrastructures, maintenance in operational condition, etc.) remain OVHcloud's responsibility.

### Standard formats and tools

The widespread use of standard tools and formats is both a historical choice of OVHcloud and a key point for reversibility. Our infrastructures are aligned with standard market bricks, either open or created and maintained by a recognized software company. As such, it must always be possible to migrate the core functionalities of an architecture.

However, we do not guarantee the possibility of migrating all the features of OVHcloud products. Indeed, some additional features are built based on the specific characteristics of the OVHcloud environment and cannot be migrated as such; it might be necessary to rebuild equivalents. Replicating some of the features developed by OVHcloud may be difficult and require a dedicated project team.

We therefore distinguish between:

- The **core features** of a product (for example, hosting a website, running virtual machines and storage spaces) for which we guarantee the ability to migrate.
- The **OVHcloud implementation** (for example the OVHcloud API, network equipments configuration), whose migration will require adaptations to a new environment.
- **Specific functionalities** (e. g. anti-DDoS, IPMI gateway, the client management interface/manager, etc.), whose migration as such is impossible to guarantee.

### Documentation of migration procedures

Reversibility-oriented product documentations have two objectives: first, the documentation should remove any potential barriers to migration. For example, it explains specific configurations or implicit prerequisites. Second, the documentation can help reduce the skills required to implement a migration, make it available to more customers, and reduce the time and resources investment required to complete the migration. In other words, the role of the documentation is to ensure that a technically possible migration is also possible to put into practice in a concrete project.

The documentation should, in the same way as other reversibility features, consider all migration scenarios:

- From OVHcloud to another cloud provider
- From OVHcloud to client on premises infrastructure
- From another cloud provider to OVHcloud
- From Client on premises infrastructure to OVHcloud

These documents also highlight :

- The distinction between features that belong to the core, implementation or specific OVHcloud.
- Possible implementation characteristic, dependencies on an environment or technology implemented at OVHcloud.
