---
title: 'Comprehensive Guide to OVHcloud Managed Rancher Service'
excerpt: 'A complete guide including release calendar, supported versions, responsibility model, and lifecycle policies for OVHcloud Managed Rancher Service.'
updated: 2024-09-02
---

## Objective

**This guide explains how to use and manage OVHcloud Managed Rancher Service with our comprehensive documentation.**

## Instructions

### Step 1: Rancher Release Calendar

The following documentation provides an overview of the estimated release schedule for each supported OVHcloud Managed Rancher Service (MRS) version. This schedule is subject to change and is provided for informational purposes only. Exact release dates may vary based on development requirements, testing, and other factors.

| Rancher version | Upstream release date | MRS release date | End of life |
|-----------------|-----------------------|------------------|-------------|
| 2.9             | 2024-07-30            | Q4-2024          | Q1-2026     |
| 2.8             | 2023-12-13            | 2024-03-25       | Q3-2025     |
| 2.7             | 2023-08-15            | 2023-12-06       | Q4-2024     |

**MRS release date:** Estimated date when this Rancher version is available for OVHcloud Managed Rancher Service.

**End of life:** When a Rancher instance is running a version that has reached its End of Life date, OVHcloud will auto-upgrade the instance to the next minor version (n+1). For more details, see the [MRS minor version lifecycle](#).

**Notes:**

- The **Date format** follows the [international standard for numeric dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates). Dates listed by [quarter year](https://en.wikipedia.org/wiki/Calendar_year#Quarter_year) are estimates and will be updated once specific dates are known.
- The abbreviation **TBD** is used when a date is to be determined.

### Step 2: MKS Supported Version Matrix in MRS

Depending on the version of Rancher, the following versions of the Managed Kubernetes Service (MKS) driver are supported:

- **Rancher 2.7.9** -> MKS 1.26
- **Rancher 2.8.5** -> MKS 1.27 to 1.28

For more details on compatibility, refer to the [SUSE support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-8-5/).

### Step 3: MRS Lifecycle Policies

OVHcloud's Managed Rancher Service adheres to strict lifecycle policies to ensure the reliability and security of your Kubernetes clusters. New stable versions are regularly released and certified by the Cloud Native Computing Foundation (CNCF). Older versions may reach their End-of-Sale (EoS) or End-of-Life (EoL) status based on the lifecycle of underlying community support. Understanding these policies helps customers plan for upgrades and transitions to newer versions.

**End-of-Sale (EoS):** The point at which a specific Rancher version is no longer available for new installations.

**End-of-Life (EoL):** The point at which a specific Rancher version is no longer supported by OVHcloud. Clusters running EoL versions will be automatically upgraded to the next supported version.

## Go Further

Join our community of users on <https://community.ovh.com/en/>.
