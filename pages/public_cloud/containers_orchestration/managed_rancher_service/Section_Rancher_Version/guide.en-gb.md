---
title: 'Managed Rancher supported versions and lifecycle policiy'
excerpt: 'A complete guide including lifecycle policy, release calendar and supported versions for OVHcloud Managed Rancher Service.'
updated: 2024-09-09
---

## Objective

**This guide details Managed Rancher lifecycle policy, supported versions and release calendar.** 

### Managed Rancher Service lifecycle policies

OVHcloud's Managed Rancher Service adheres to lifecycle policies to ensure the reliability and security of your managed service. New stable versions are regularly tested and released in order to provide the lastest securtity patchs and features set. 
Older versions may reach their End-of-Support (EoS) and then End-of-Life (EoL) status based on our lifecycle policy. Understanding these policies helps customers plan for upgrades and transitions to newer versions.

As a general rule, OVHcloud will support Rancher minor versions during 12 months after their upstream release date. 

#### End-of-Support (EoS):
The point at which a specific Rancher version is no longer officially covered by OVHcloud support nor available for new installations.
When a Rancher instance is running a version that has reached its End of support date, as a general rule, OVHcloud will not force a version upgrade for the last version that reached End-of-Support. Keep in mind that though we will keep them running, they will no longer be covered by OVHcloud support. In the unlikely case that one of these versions exposes a security breach that puts its own infrastructure at risk, OVHcloud may force the minor update of the service or deactivate the service if the forced minor update did not go through.

As a general rule, OVHcloud will keep offering minor-version upgrade for all unsupported versions to a supported verion to ensure that the customer can, on its own pace move to a OVHcloud supported minor version. The customer is solely responsible for making sure his configuration and related software, including Kubernetes versions of downstream clusters are compliant with the new version he is upgrading to. Please refer to the [Downstream clusters Kubernetes supported version matrix ](#supportmatrix) section. 

As soon as a minor version reaches End-of-Support by OVHcloud, it will simultaneously reach End-Of-Sales, meaning that OVHcloud will stop proposing the minor version upon installation for Managed Rancher Service.

At any time, the customer can find the currently supported versions on the [dedicated section](#versions).

#### End-of-Life (EoL):  
The point at which a specific Rancher version will be auto-upgraded by OVHcloud team to the next minor version (n+1). As a general rule OVHcloud will move Rancher versions to EoL 3 months after they reached their EoS date.

### Rancher Release Calendar and supported versions <a name="versions"></a>

The following table provides an overview of the estimated release schedule for each supported OVHcloud Managed Rancher Service (MRS) version. This schedule is subject to change and is provided for informational purposes only. Exact release dates may vary based on development requirements, testing, and other factors.

| Rancher version | Upstream release date | MRS release date | MRS End of support | MRSEnd of life |
|-----------------|-----------------------|------------------|--------------------|----------------|
| 2.9             | 2024-07-30            | Q4-2024          | Q1-2026            | Q1-2026        |
| 2.8             | 2023-12-13            | 2024-03-25       | 2024-12            | 2025-04        |
| 2.7             | 2022-11-16            | 2023-12-06       | 2024-10            | 2025-01        |

**MRS release date:** Estimated date when this Rancher version is available for OVHcloud Managed Rancher Service. 

- The **Date format** follows the [international standard for numeric dates](https://en.wikipedia.org/wiki/ISO_8601#Week_dates). Dates listed by [quarter year](https://en.wikipedia.org/wiki/Calendar_year#Quarter_year) are estimates and will be updated once specific dates are known.
- The abbreviation **TBD** is used when a date is to be determined.
- Due to Managed Rancher private alpha and public beta phases (early 2024), versions 2.7 and 2.8 release schedule is not conform with our Lifecycle Policy.

### Downstream clusters Kubernetes supported version matrix <a name="supportmatrix"></a>

To get the list of supported Kubernetes versions for each Rancher minor version, please refer to the [SUSE support matrix](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions) .

### OVHcloud Managed Kubernetes Service (MKS) drivers supported version Matrix

Depending on the version of Rancher, the OVHcloud Managed Kubernetes Service (MKS) drivers will support the following versions:

- **Rancher 2.7.9** -> MKS 1.26
- **Rancher 2.8.5** -> MKS 1.27 to 1.28
- **Rancher 2.9.x** -> MKS 1.28 to 1.30

## Go Further

Join our community of users on <https://community.ovh.com/en/>.
