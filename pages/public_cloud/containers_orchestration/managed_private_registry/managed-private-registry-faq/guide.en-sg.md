---
title: 'FAQ Managed Private Registry (MPR)'
updated: 2025-09-04
---

## Objective

Here are the most frequently asked questions about Managed Private Registry (MPR).

### In which regions is the Private Registry solution available?

Private Registry is currently available in the following regions:

| Region      |    City     | Country |   Continent   | Availability Zones |
|-------------|:-----------:|:-------:|:-------------:|:------------------:|
| BHS         | Beauharnois | Canada  | North America |        1-AZ        |
| DE          |  Frankfurt  | Germany |    Europe     |        1-AZ        |
| EU-WEST-PAR |    Paris    | France  |    Europe     |        3-AZ        |
| GRA         | Gravelines  | France  |    Europe     |        1-AZ        |

### What are the differences between a 1-AZ region and 3-AZ region

#### Deployment in 1 AZ region

All service components are hosted within a single Availability Zone.

Storage is based on **S3 Standard**.

#### Deployment in 3 AZ region

The service is replicated and distributed across multiple distinct Availability Zones (up to 3), depending on the chosen plan.

* **Plans Medium and Large** run in active-active mode across at least 2 AZs: traffic is load-balanced, and data is simultaneously available in multiple zones, ensuring increased resilience.
* **Plan Small** runs in active-passive mode across 2 AZs: one primary zone is continuously used, while a secondary zone can take over in case of an issue.

Storage is based on **S3 Standard 3AZ**, which ensures durability and high availability of artifacts.

### What are the Managed Private Registry service dependencies?

The MPR (Managed Private Registry) service is managed by our teams relying on compute resources and network from Public Cloud and on Object Storage (Standard class). Those dependencies are neither visible, nor billed.

Find below the exact locations of the dependencies:

| Region      | Public Cloud Compute region  | Object Storage (Standard class) |
|-------------|:----------------------------:|:-------------------------------:|
| BHS         |             BHS5             |               BHS               |
| DE          |             DE1              |               DE                |
| EU-WEST-PAR |         EU-WEST-PAR          |           EU-WEST-PAR           |
| GRA         |          GRA7/GRA9           |               GRA               |

### What version of Harbor is offered?

All new Private Registry services expose Harbor **2.12.2**. We regularly backport security and performance patches from the latest versions and will regularly propose new feature upgrades.

#### Tips and Tricks

All traffic to and from the registry is completely **free**.

### What service levels are included in the Private Registry service?

Private Registry is covered by a service level (SLA) that guarantees very high availability to give you the assurance of a high efficiency of your developments and deployments. **M** and **L** plans have an SLA that also covers components such as the user interface and vulnerability scanning. You will find all the details in the [Special Conditions for OVHcloud Public Cloud Service](/links/terms-conditions-contracts).

### Do I have to use the OVHcloud Managed Kubernetes Service with Private Registry?

No, because by subscribing to the Private Registry service you will have your own Docker Registry and your own [Harbor](https://goharbor.io/) (API and GUI). Once you receive your IDs, you will be able to use the Private Registry service with any container or orchestrator tool, the OVHcloud Kubernetes solution or another one.

### As a Private Registry user, do I have the option to switch plans?

You can migrate to a plan with larger capacity at any time. As soon as you notify us of your wish for evolution, the new limits are taken into account in tens of seconds **without any data loss** or configuration changes required.

#### Tips and Tricks

If you create, edit or delete your service during the month, you will be billed only for the hours actually used. Depending on your choice of plan, you can have up to 5 TB of storage capacity. For each of the plans, unlimited traffic is included, regardless of its destination.

## Go further

Join our [community of users](/links/community).
