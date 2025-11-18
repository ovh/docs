---
title: "Dedicated Server Security Specifications"
updated: 2025-07-02
---

## Objective

In addition to the [responsibility model between OVHcloud and the customer on the Dedicated Server service](/pages/account_and_service_management/responsibility_sharing/dedicated-servers), this sheet aims to present the specific features and security features of this service. It also highlights best practices that will enable the customer to make the most of it.

## 1 - Certifications

- ISO/IEC 27001
- ISO/IEC 27701
- ISO/IEC 27017
- ISO/IEC 27018
- HDS
- SOC 1 type II
- SOC 2 type II
- CSA type II
- C5 type II
- CISPE

## 2 - Best practices to deploy on the service

### 2.1 - Recommendations for getting started

Once the service has been delivered, and after receiving the login credentials for connecting to its Dedicated Server, OVHcloud recommends that the customer change their credentials
and harden its operating system. Hardening references and guides are discussed in [9.1 OS Image Delivery
and hardening](#os-images) of this page.<br>
Other guides are available in [the guide on Dedicated Servers](/products/bare-metal-cloud-dedicated-servers) to assist the customer with the transfer
control and operation of the service.

### 2.2 - Vulnerability Scan

The customer is authorized to carry out vulnerability scans on the service they have subscribed to at OVHcloud from any service. OVHcloud does not need
to be notified prior to the tests. The security measures deployed by OVHcloud (especially network protections) cannot be deactivated, even more so
Reason for conducting such audits which should establish a clear view of the security of the customer’s infrastructure.
The customer is not authorized to use their service to scan other infrastructure.

## 3 - Service Guarantees

### 3.1 - SLA

Recovery of the SLAs of the specific conditions by service component.

| **Component** | **SLA** | **Calculation method** | **Compensation** |
| --- | --- | --- | --- |
| Dedicated Server | 99.9% minimum (depending on the range) | The total number of minutes in the month, less the number of minutes of downtime in the month, divided by the total number of minutes in the month. For calculating compensation, the downtime is calculated from the moment the incident ticket is opened, until the issue is resolved. | Credit of 5% of the monthly cost of Dedicated Servers that are unavailable, in increments of 30 minutes of downtime beyond the SLA, up to a limit of 50% of the monthly cost. |

### 3.2 - GIT

| **Incident type** | **Intervention time** | **Recovery time** | **Compensation** |
| --- | --- | --- | --- |
| Level 1 incident: total unavailability of the service **detected by OVHcloud** | 1 hour | 1 hour from the beginning of the intervention | Incident detection by OVHcloud | Credit of 5% of the monthly cost of Dedicated Servers that are unavailable, in increments of 30 minutes of downtime beyond the SLA, up to a limit of 50% of the monthly cost. |
| Level 1 incident: total service unavailability **reported by customer** | 1 hour | 1 hour from the beginning of the intervention | Creation of ticket by the customer | Credit of 5% of the monthly cost of Dedicated Servers that are unavailable, in increments of 30 minutes of downtime beyond the SLA, up to a limit of 50% of the monthly cost. |
| Level 2 incident: substantial degradation of Dedicated Server performance | 1 hour | Ø | Creation of ticket by the customer | Credit of 5% of the monthly cost of Dedicated Servers that are unavailable, in increments of 30 minutes of downtime beyond the SLA, up to a limit of 50% of the monthly cost. |

## 4 - Backups

### 4.1 - Technical backups

Technical backups are the backups taken by OVHcloud to ensure the service levels stipulated in the contract. These backups are not intended to be enabled at the customer's request. These backups do not contain any business data deposited by customers on their own dedicated servers.

These are backups of infrastructure configurations that deliver the service to customers such as: router configuration, vRack configurations, IP allocation, etc.

### 4.2 - Business backups

List of features and backup options adapted to the service:

| **Option name** | **Granularity** | **RTO** | **RPO** | **Documentation and tutorials**|
| --- | --- | --- | --- | --- |
| - FTP backup or Backup Storage is a 500GB storage space made available to the customer following subscription to the service.<br> - The service must be activated by the customer.<br> - No backup routine is configured by OVHcloud. | At the customer's choice | Depends on customer choice | N/A | [Use Backup Storage on a dedicated server](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage) |
| - Backup Storage is an additional storage option that allows you to have up to 10TB of additional disk space to deposit backups. | At the customer's choice | Depends on customer choice | N/A | [Use Backup Storage on a dedicated server](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage) |

## 5 - Logs

> [!primary]
> Read the guide [Getting started with OVHcloud APIs](/pages/manage_and_operate/api/first-steps) to get familiar with using OVHcloud APIv6.


| **Source** | **Content** | **Links** |
| --- | --- | --- |
| Control Plane | Logs on all interactions made via API calls, launched by admin, technical or billing contacts, on the services they have access to. |- <https://ca.api.ovh.com/console/#/me> (see `/me/api/logs` calls)<br>- [List of API calls done with your account](https://ca.api.ovh.com/console/#/me/api/logs/self~GET)<br>- [List of API calls done on services you have access to](https://ca.api.ovh.com/console/#/me/api/logs/services~GET) |
| Service | List of tasks launched on a given server | [Dedicated Servers ToDos](https://ca.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/task~GET)|
| Service | List of interventions launched on a given server | [Technical interventions history](https://ca.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/intervention~GET) |

Tasks are actions launched by the client on a Dedicated Server: installing the OS, rebooting the OS, activating 'rescue' mode, etc ...

Interventions are actions carried out by OVHcloud teams in the Datacentres on the physical servers: checking the state of the equipment, changing CPU, RAM or defective disk, etc.

## 6 - API

| **Name** | **Capabilities** | **Links** |
| --- | --- | --- |
| Control Plan and service | Manipulating customer accounts and services on which the account has service management rights | [API calls for Dedicated Servers](https://ca.api.ovh.com/console/#/dedicated/server) |

## 7 - User accounts

### 7.1 - Control Plane

Via the OVHcloud Control Panel, the customer can manage the service using [three typical contacts](/pages/account_and_service_management/account_information/managing_contacts#definition).

To reference each customer who has subscribed to one or more services, OVHcloud uses a proprietary account with an internal NIC handle.

To increase access to the customer account, the customer can enable [two-factor authentication (2FA)](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) or [single sign-on (SSO)](/products/account-and-service-management-account-information-users) by linking their account to an external Active Directory.

### 7.2 - Data Plane

Once the service has been delivered, at the OS installation stage, the customer has the choice between [using an SSH key](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) (for Linux distributions) to access their server, or a single password, generated automatically by OVHcloud if they have not configured an SSH key.

The client is autonomous in creating user accounts on its OS, once it has administrative rights on its server.

## 8 - Anti-virus

OVHcloud does not support installing antivirus software when installing the operating system.
The customer is responsible for deploying security measures on the dedicated servers they operate.

## 9 - Services available when the Service is installed

### 9.1 - Providing OS images and hardening <a name="os-images"></a>

> [!primary]
> Read the guide [Getting started with OVHcloud APIs](/pages/manage_and_operate/api/first-steps) to get familiar with using OVHcloud APIv6.

OVHcloud offers a catalog of operating systems, and is committed to providing operating systems that were last updated less than 30 days ago.

- [List of operating systems available at OVHcloud](https://ca.api.ovh.com/console/#/dedicated/installationTemplate/templateInfos~GET)
- [List of operating systems available for a given business reference](https://ca.api.ovh.com/console/#/dedicated/server/osAvailabilities~GET)
- [List of operating systems available for a given server](https://ca.api.ovh.com/console/#/dedicated/server/%7BserviceName%7D/install/compatibleTemplates~GET)

The hardening of the operating systems provided is that of a nominal installation of the publisher. For advanced hardening, OVHcloud recommends referring to each publisher’s documentation .

| **Publisher** | **Hardening Documentation** |
| --- | --- |
| Debian | <https://wiki.debian.org/Hardening> |
| Redhat | <https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/security_hardening/overview-of-security-hardening-security-hardening> |
| Ubuntu | <https://ubuntu.com/security/certifications/docs/usg> |
| Windows | <https://docs.microsoft.com/en-gb/windows/security/threat-protection/windows-security-configuration-framework/windows-security-baselines> |

### 9.2 - Bring Your Own Image

Bring Your Own Image is a feature that allows the customer to import an image of their choice to a server outside of the catalog offered by OVHcloud.
Prerequisites and instructions are available on [this link](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image).

### 9.3 - OVHcloud Monitoring

A monitoring service is activated by default by OVHcloud to monitor the status of customers' servers, via the ICMP protocol. Customers can track the status of their own servers or disable this service, via their OVHcloud Control Panel or via an API call.

The client can also enable monitoring of other network services that are disabled by default.

It is the customer’s responsibility to follow the tightening guidelines of the OS publishers and to restrict ICMP flows to what is strictly necessary.

In order to continue to benefit from the OVHcloud monitoring service, the customer must configure [filtering rules](/pages/bare_metal_cloud/dedicated_servers/network_ip_monitoring) on their servers’ internal firewall, and select the other services whose status they want to track.

OVHcloud offers a feature called [OVHcloud Link Aggregation](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) that can be activated by the customer and which allows them to benefit from a high-speed, redundant private network for their Dedicated Servers.

If the customer activates this feature, the monitoring carried out by OVHcloud will be disabled.

## 10 - Reversibility

To ensure data portability and reversibility on the service, OVHcloud allows the customer to export and import their data autonomously.
OVHcloud’s portability principles are described in its own [portability policy](/pages/account_and_service_management/reversibility/00-global-reversibility-policy), and those specific to the Dedicated Servers service are set out in its [specific policy](/pages/account_and_service_management/reversibility/01-dedicated-servers-reversibility-policy).

### 10.1 - Business Data Erasure

Following the customer’s decommission of the service and prior to the removal of the hard drive from the rack, an erasing robot applies a secure data erasure procedure based on the NIST SP 800-88 r1 level ‘Purge’.
In case of technical constraints or limitations on certain ranges of hard drives and when the level 'Purge' cannot be applied, the erase at the level 'Clear' will run.

### 10.2 - Technical data erasure

Following the customer’s decommission of the service, OVHcloud frees up the resources allocated to them, such as the IP addresses and deletes the configurations made during service delivery.

## 11. HDS guarantee representation

> [!primary]
>
> This table is published prior to OVHcloud's effective certification on the 2024 version of the HDS repository. It allows OVHcloud customers to fuel their own compliance approach with the HDS version 2024 framework. OVHcloud has created and published this table in an effort to apply the different requirements of the repository as closely as possible. The versions audited by the auditors were posted online before February 2024.
>

| **Company name of the actor** | **Role in hosting service** | **HDS certified** | **SecNumCloud 3.2 Qualified** | **Hosting activities on which the player intervenes** | **HDS Repository Requirement #29** | **HDS Repository Requirement #30** |
| --- | --- | --- | --- | --- | --- |--- |
| OVHcloud | Web hosting provider | Yes | No | 1° The provision and maintenance in operational condition of the physical sites used to host the hardware infrastructure of the information system used for the processing of healthcare data.<br>2° The provision and maintenance in operational condition of the hardware infrastructure of the information system used for the processing of healthcare data.<br>3° The provision and maintenance in operational condition of the virtual infrastructure of the information system used for the processing of healthcare data.<br>4° The provision and maintenance in operational condition of the platform for hosting applications of the information system.<br>6° The backup of healthcare data. | No, no access to data from a third country in the European Economic Area | No(1) |

(1) : OVHcloud complies with all the requirements of Chapter 19.6 of the SecNumCloud framework for protection against non-European law.