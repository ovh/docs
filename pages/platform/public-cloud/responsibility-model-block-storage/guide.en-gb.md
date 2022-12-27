---
title: RACI for Public Cloud Block Storage
slug: raci-block-storage-public-cloud
section: General Information
excerpt: "Shared responsibilities between OVHcloud and the customer for Public Cloud Block Storage"
order: 6
---

**Last update 23rd December 2022**

## Objectif

The RACI below details shared responsibilities between OVHcloud and the customer for the Public Cloud Block Storage service. This shared model can help relieve the customer’s operational burden.

| Roles |
| --- |
|R : Is in charge of carrying out the process|
|A : Accountable for the successful completion of the process|
|C : Is consulted during the process|
|I : Is informed of the results of the process|

### 1. Before subscription

#### 1.1. Specify service as needed

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Choose the Block Storage scale following business needs (Classic, High speed, ...) | RA | I |
| Provide personal data needed for service subscription | RA | I |
| Choose service location aligned with location of Instances | RA | I |

### 2. Service availability

#### 2.1. Install the service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical Instances and hosting buldings | I | RA |

#### 2.2. Modèle de réversibilité

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Import format images supported by OpenStack infrastructure | RA | I |

#### 2.3. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Choose the volume type and storage sizing adapted to the need | RA | CI |
| Install softwares needed | RA |  |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage data security hosted on the service (confidentiality, integrity, backups, …) |RA |  | 
| Manage network accessibility of storage volumes whithin attached Instances   |  | RA |
| Decide to add / remove a Block Storage option (resizing, create a snapshot, create a backup volume) | RA | I |
| Carry out to add / remove a Block Storage option (resizing, create a snapshot, create a backup volume) | I | RA |
| Install needed security bricks and tools | RA |  |
| Administrate storage service | I | RA  |
| Administrate data | RA |   |
| Manage backups | RA |  |
| Manage backups following Customer request (optional) | CI | RA |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access rights to the OVHcloud Control Panel | RA | I |
| Manage physical and logical access to infrastructures for OVHcloud teams | I | RA |
| Manage access and security policy for service users | RA |  |

##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage and monitor physical servers capacity in support of Public Cloud services |  | RA |
| Monitor Block Storage clusters' performances | I | RA |
| Retain logs of control plane for Instances monitoring (API, hypervisor)
| Retain logs of Information System hosted on Instances
| Monitor the proper functioning of physical devices (utilities) in support of the service
| Create, modify, control, restore, delete jobs of backups
| Create jobs of backups following subscription to Automated backups option | AI | R |
| Maintain storage and backups devices used for the service |  | RA |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage data encryption of storage space allocated | RA |  |

##### **3.1.5. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide inventory of storage volumes used | I | RA |
| Manage the security of management infrastructure (API, control plane) |   | RA |
| Manage security of OS, softwares and middlewares installed on Instances | RA |  |
| Manage physical security of equipments and hosted infrastructures | I | RA |
| Manage data security hosted on storage volumes | RA |  |

##### **3.1.6. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Perform periodic restoration tests | RA |  |
| Maintain a business continuity and disaster recovery plan for IS hosted | RA | C |
| Manage automatic management systems for the infrastructure provided | I | RA |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Process hardware and network incidents (tickets and contacts) | AI | RA |
| Process other incidents| RA |  |
| Replace faulty hardware on physical servers and hard disks | I | RA |
| Restore backups of data volumes | RA |  |
| Realize backup recovery in case of subscription to an option managed by OVHcloud | A | R |

#### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy updates and patches of OS, softwares, middlewares and Information System hosted on Instances | RA |  |

### 4. Reversibility

#### 4.1. Reversibility Model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Plan reversibility operations | RA |  |
| Choose fallback infrastructures | RA | CI |
| Export data in QCOW2 format | RA | I |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage reversibility operations | RA |  |
| Migrate/transfer data | RA |  |

### 5. End of service

#### 5.1. Destroy configurations

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Destroy configurations at end of service following contract termination |  | RA |

#### 5.2. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Destroy data hosted on volumes storage |  | RA |
| Destroy end-of-life storage devices |  | RA |
