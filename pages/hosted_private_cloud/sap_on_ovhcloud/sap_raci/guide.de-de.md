---
title: "Shared responsibility for SAP on OVHcloud solutions"
excerpt: "Shared responsibility between OVHcloud and the customer for using SAP on OVHcloud solutions"
updated: 2023-12-14
---

## Objective

The RACI below details the division of responsibilities between OVHcloud and the customer for SAP on OVHcloud solutions. This model can help the customer get the most out of SAP on OVHcloud solutions. It supplements the [Dedicated Servers RACI](/pages/account_and_service_management/responsibility_sharing/dedicated-servers) that applies to the SAP HANA on Bare Metal service, and the [VMware on OVHcloud RACI](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/responsibility-sharing) that applies to the SAP HANA on Private Cloud service. The acronym "SLES4SAP BYOL" is used for "SUSE Linux Enterprise Server for SAP Applications Bring Your Own License".

| Roles |
| --- |
|R : Is in charge of carrying out the process|
|A : is Accountable for the successful completion of the process|
|C : Is Consulted during the process|
|I : Is Informed of the results of the process|

### 1. Before subscription

#### 1.1. Specify the service as needed

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Choose to subscribe to the [Dedicated Server](/pages/account_and_service_management/responsibility_sharing/dedicated-servers) service or to the [VMware on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/responsibility-sharing) service depending on your needs, and follow the associated responsibility models | RA | CI |
| X | X | Subscribe to SUSE for the OS license required to use the SLES4SAP BYOL image | RA |  |
| X | X | Owning the license rights for the SAP software deployed on the infrastructure | RA |  |
| X | X | Subscribe to the OVHcloud Object Storage offer if it is planned to use the OVHcloud Backint Agent for SAP HANA for backups | RA | CI |

### 2. Service availability

#### 2.1. Install the service

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Provide the subscribed service and available features (OVHcloud Backint Agent for SAP HANA, OS image SLES4SAP BYOL) | I | RA |
|  | X | Provide the subscribed service and available features (Terraform modules for deploying SAP infrastructure as code, SAP HANA pre-installation) | I | RA |
| X | X | Inform SUSE of the deployment of a SLES4SAP BYOL OS | I | RA |
| X | X | Provide configuration guides for SAP options and features provided by OVHcloud | I | RA |
|  | X | Provide SAP HANA installation sources in an OVHcloud Object Storage bucket | RA | I |

#### 2.2. Reversibility model

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Manage the migration of a machine with the SLES4SAP OS to OVHcloud | RA |  |
| X | X | Manage migration of SAP applications to OVHcloud | RA |  |

#### 2.3. Installing the client IS

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Deploy the OS | RA |  |
| X | X | Deploy the IT system as needed | RA |  |
| X | X | Choose to configure SAP HANA backups with "OVHcloud Backint Agent for SAP HANA" | RA |  |
|  | X | Choose to launch the deployment of SAP infrastructure as code | RA |  |
| X | X | Verify compliance of the SAP installation, underlying infrastructure, and associated best practices | RA |  |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Administer selected and installed components | RA |  |
| X | X | Schedule SAP HANA backups, including via the "OVHcloud Backint Agent for SAP HANA" | RA |  |

##### **3.1.2. Access management**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Manage user accounts, their access to all SAP elements, including the SAP HANA database and operating systems | RA |  |

##### **3.1.3. Monitoring**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Monitor the execution of SAP HANA backups and other installed SAP software | RA |  |

##### **3.1.4. Storage**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Encrypt SAP HANA backups, including those made with the "OVHcloud Backint Agent for SAP HANA" | RA |  |

##### **3.1.5. Connectivity**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Manage network configurations of the entire SAP architecture | RA |  |

##### **3.1.6. Management**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Manage risks associated with installed SAP software | RA |  |
| X | X | Manage risks related to underlying infrastructure delivered by OVHcloud |  | RA |
| X | X | Maintain installed SAP software in operational and security conditions | RA |  |

##### **3.1.7. Business continuity**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Perform periodic restore tests of all SAP components, including the SAP HANA database | RA |  |
| X | X | Maintain a disaster recovery and business continuity plan on the installed IS | RA |  |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Analyze and correct proven development issues (bugs, faults, etc.) of the 'OVHcloud Backint Agent' | I | RA |
| X | X | Handle incidents related to the SLES4SAP OS in BYOL mode and open tickets with the SUSE company if necessary | RA |  |
| X | X | Manage incidents related to SAP solutions | RA |  |

#### **3.2.2. Changes**

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Manage the OS SLES4SAP lifecycle, perform patching and version upgrades | RA |  |
| X | X | Manage the lifecycle of SAP solutions, perform patching and version upgrades, including for the SAP HANA database | RA |  |

### 4. Reversibility

#### 4.1. Reversibility model

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Choose fallback infrastructure | RA |  |

#### 4.2. Data recovery

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Choose to migrate the data either according to the migration model of the underlying infrastructure, or use the migration tools of the SP publisher (example OS / DB migration or other ) | RA |  |

### 5. End of service

#### 5.1. Destroy configurations

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Deletion of SAP HANA backups, including those made by the "OVHcloud Backint Agent for SAP HANA" on the OVHcloud Object Storage service | RA |  |
| X | X | Cancel underlying services in support of installed SAP software | RA | I |
| X | X | Decommission configurations linked to the services provided | I | RA |

#### 5.2. Data destruction

| **SAP HANA on Bare Metal** | **SAP HANA on Private Cloud** | **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- | --- | --- |
| X | X | Destroy storage media that has reached the end of its life or where the secure destruction process generates errors |  | RA |