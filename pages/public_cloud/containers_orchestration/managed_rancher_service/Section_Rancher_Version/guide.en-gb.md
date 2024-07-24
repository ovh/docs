---
title: 'Comprehensive Guide to OVH Rancher'
excerpt: 'A complete guide including release calendar, supported versions, responsibility model, and lifecycle policies for OVH Rancher.'
updated: 2023-12-08
---

## Objective

**This guide explains how to use and manage OVH Rancher with our comprehensive documentation.**

## Instructions

### Step 1: Rancher Release Calendar

The Rancher release calendar is as follows:

| Kubernetes version | Upstream release date | MKS release date | End of support | End of life |
|--------------------|-----------------------|------------------|----------------|-------------|
| 1.30               | 2024-04-17            | Q4-2024          | TBD            | TBD         |
| 1.29               | 2023-12-13            | 2024-03-25       | TBD            | TBD         |
| 1.28               | 2023-08-15            | 2023-12-06       | TBD            | TBD         |
| 1.27               | 2023-04-11            | 2023-08-31       | TBD            | TBD         |
| 1.26               | 2022-12-06            | 2023-05-09       | Q4-2024        | Q1-2025     |
| 1.25               | 2022-08-23            | 2022-12-08       | Q4-2024        | Q1-2025     |
| 1.24               | 2022-05-03            | 2023-08-19       | 2023-12-06     | 2024-06-19  |


*MKS release date:* Estimated date when this Kubernetes version is available for OVHcloud Managed Kubernetes Service.

*End of support:* For clusters running minor versions that have reached End of Support, OVHcloud will not provide any technical assistance and will advise you to upgrade your cluster to a supported version. Please note that versions that have reached their End of Support date are not available for MKS Cluster creation.

*End of life:* When a cluster is running a minor version that has reached its End of Life date, OVHcloud will auto-upgrade the cluster to the next minor version (n+1). For more information, see the MKS minor version lifecycle [link-to-put].

**Notes:**

The **Date format** follows the [international standard for numeric dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates). The dates listed by [quarter year](https://en.wikipedia.org/wiki/Calendar_year#Quarter_year) are estimates and will be updated once a specific date is known.

**TBD** abbreviation is used when a date is to be determined.

### Step 2: MKS Supported Version Matrix

The supported versions of MKS are as follows:

- Rancher 2.7.9 -> MKS 1.26
- Rancher 2.8.5 -> MKS 1.27 to 1.28

For more details, refer to the [SUSE support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-8-5/).

### Step 3: Responsibility Model

The responsibility model for OVHcloud's Managed Kubernetes service details shared responsibilities between OVHcloud and the customer. This model helps to reduce the customer's operational burden by clarifying the roles and responsibilities for various activities related to the installation, management, and maintenance of Kubernetes clusters.

The RACI below details shared responsibilities between OVHcloud and the customer for the Managed Kubernetes service. This shared model can help relieve the customer’s operational burden.

#### RACI Definition

- **R**: Responsible for carrying out the process
- **A**: Accountable for the successful completion of the process
- **C**: Consulted during the process
- **I**: Informed of the results of the process

For more details, see the full responsibility model [here](https://help.ovhcloud.com/csm/en-ie-public-cloud-kubernetes-responsibility-model?id=kb_article_view&sysparm_article=KB0058760).

### Step 4: MRS Lifecycle Policies

OVHcloud's Managed Kubernetes Service offers software-compliant Kubernetes, certified by the CNCF. New stable versions are provided regularly by the CNCF. Earlier versions provided by OVHcloud may reach their End-of-Sale (EoS) or End-of-Life (EoL) due to the lifecycle of the underlying support from the Kubernetes community. This policy helps customers understand the lifecycle of the OVHcloud Managed Kubernetes Service and prepare for transitions to newer versions.

For more details, see the MRS lifecycle policies [here](https://help.ovhcloud.com/csm/en-ie-public-cloud-kubernetes-eos-eol-policies?id=kb_article_view&sysparm_article=KB0049743).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
