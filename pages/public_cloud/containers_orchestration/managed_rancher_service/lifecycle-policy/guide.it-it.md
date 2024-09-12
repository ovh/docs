---
title: 'Managed Rancher Service supported versions and lifecycle policy'
excerpt: 'A complete guide including lifecycle policy, release calendar, and supported versions for OVHcloud Managed Rancher Service'
updated: 2024-09-12
---

## Objective

**This guide details Managed Rancher Service lifecycle policy, supported versions and release calendar.** 

### Managed Rancher Service lifecycle policies

OVHcloud's Managed Rancher Service adheres to lifecycle policies to ensure the reliability and security of your managed service. New stable versions are regularly tested and released to provide the latest security patches and feature sets.
Older versions may reach their End-of-Support (EoS) and then End-of-Life (EoL) status based on our lifecycle policy. Understanding these policies helps customers plan for upgrades and transitions to newer versions.

As a general rule, OVHcloud will support Rancher minor versions for 12 months after their upstream release date.

#### End-of-Support (EoS)

The End-of-Support (EoS) is the point in time at which a specific Rancher version is no longer officially covered by OVHcloud support nor available for new installations.<br>
When a Rancher instance is running a version that has reached its End-of-Support date, OVHcloud will not force a version upgrade for the last version that reached End-of-Support. Keep in mind that while we will keep them running, they will no longer be covered by OVHcloud support.
In the unlikely event that one of these versions exposes a security breach that puts its own infrastructure at risk, OVHcloud may force a minor update of the service or deactivate the service if the forced minor update does not succeed.

As a general rule, OVHcloud will continue offering minor-version upgrades for all unsupported versions to a supported version to ensure that customers can, at their own pace, move to an OVHcloud-supported minor version.<br>
The customer is solely responsible for ensuring that their configuration and related software, including Kubernetes versions of downstream clusters, are compliant with the new version they are upgrading to. Please refer to the [Downstream clusters Kubernetes supported version matrix](#supportmatrix) section.

As soon as a minor version reaches its End-of-Support by OVHcloud, it will simultaneously reach its End-of-Sales, meaning that OVHcloud will stop offering the minor version for installation on the Managed Rancher Service.

At any time, customers can find the currently supported versions in the [dedicated section](#versions).

#### End-of-Life (EoL)

The point at which a specific Rancher version will be auto-upgraded by the OVHcloud team to the next minor version (n+1).
As a general rule, OVHcloud will move Rancher versions to EoL 3 months after they have reached their EoS date.

### Rancher Release Calendar and supported versions <a name="versions"></a>

The following table provides an overview of the estimated release schedule for each supported OVHcloud Managed Rancher Service (MRS) version.
This schedule is subject to change and is provided for informational purposes only. Exact release dates may vary, depending on development requirements, testing, and other factors.

| Rancher version | Upstream release date | MRS release date | MRS End of support | MRS End of life |
|-----------------|-----------------------|------------------|--------------------|----------------|
| 2.9             | 2024-07-30            | Q4-2024          | 2025-08            | 2025-11        |
| 2.8             | 2023-12-13            | 2024-03-25       | 2024-12            | 2025-04        |
| 2.7             | 2022-11-16            | 2023-12-06       | 2024-10            | 2025-01        |

**MRS release date:** Estimated date when this Rancher version is available for OVHcloud Managed Rancher Service. 

- The **Date format** follows the [international standard for numeric dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates). Dates listed by [quarter year](https://en.wikipedia.org/wiki/Calendar_year#Quarter_year) are estimates and will be updated once specific dates are known.
- The abbreviation **TBD** is used when a date is to be determined.
- Due to Managed Rancher Service private alpha and public beta phases (early 2024), the release schedules for versions 2.7 and 2.8 do not conform to our Lifecycle Policy.

### Downstream clusters Kubernetes supported version matrix <a name="supportmatrix"></a>

To get the list of supported Kubernetes versions for each Rancher minor version, please refer to the [SUSE support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions).

### OVHcloud Managed Kubernetes Service (MKS) drivers supported version matrix

Depending on the version of Rancher, the OVHcloud Managed Kubernetes Service (MKS) drivers will support the following versions:

- **Rancher 2.7.9** -> MKS 1.26
- **Rancher 2.8.5** -> MKS 1.27 to 1.28
- **Rancher 2.9.x** -> MKS 1.28 to 1.30

## Go Further

Our team remains available on our dedicated Discord Channel, do not hesitate to join and reach us : <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our Container and Orchestration services.

Join our [community of users](/links/community).
