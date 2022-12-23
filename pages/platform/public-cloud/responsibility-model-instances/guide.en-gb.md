---
title: RACI for Public Cloud Instances
slug: raci-instances-public-cloud
section: General information
excerpt: "Shared responsibilities between OVHcloud and the customer for Public Cloud Instances"
order: 5
---

**Last update 22/12/2022**

## Objectif

The RACI below details shared responsibilities between OVHcloud and the customer for Public Cloud Instances Service. This shared model can help relieve the customer’s operational burden.

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
| Choose the Instance scale following business needs (CPU, RAM, General Purpose ...)  | RA | I |
| Provide personal data needed for service subscription | RA | I |
| Choose Service location | RA | I |

### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical Instances and hosting buldings | I | RA |
| Install internal functionnal bricks needed to maintain in operational and security conditions the Service (firmware, BIOS) | I | RA |
| Deploy the first network configuration on the Service  | I | RA |
| Buy and hold licences and usage rights for Microsoft OS available on OVHcloud cathalog | CI | RA |
| Buy and hold licences and usage rights for others OS used | RA |  |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Import format images supported by OpenStack infrastructure | RA | C |

#### 2.3. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Install OS | RA | RI |
| Install other softwares needed  | RA |  |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage data security hosted on the service (confidentiality, integrity, backups, …) |RA |  | 
| Manage network accessibility of Instances |  | RA |
| Decide to add / remove options on Instances | RA | I |
| Carry out addition / deletion of options or material on Instances | I | RA |
| Install security briks and tools needed following needs | RA |  |
| Administrate applications installed on Instances | RA |   |
| Manage backups | RA |  |
| Manage backups following Customer request (optionnal) | CI | RA |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access rights to OVHcloud Control Panel | RA | I |
| Manage physical and logical access to infrastructures for OVHcloud teams | I | RA |
| Manage accesses et users'security policy using the service  | RA |  |

##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage and monitor physical servers capacity in support of Public Cloud services |  | RA |
| Manage and monitor Public Cloud services capacity | RA |  |
| Monitor the functionning of softwares installed on Instances | RA |  |
| Retain logs of control plane for Instances monitoring (API, hyperviseur) |  | RA |
| Retain logs of Information System hosted on Instances| RA |  |
| Monitor the proper functioning of physical devices (utilities) in support of the service | I | RA |
| Create, modify, control, restore, delete jobs of backups | RA |  |
| Create jobs of backups following subsrciption to Automated backups option | AI | R |
| Maintain storage and backups devices used for the service |  | RA |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage data encryption of storage space allocated | RA |  |

##### **3.1.5. Connectivity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage IP addressing plan and choose appropriate network protocols | RA | I |
| Filter network accesses to Instances | RA | I |
| Operate automatic network management systems (architecture, implementation, software and hardware maintenance for deployed public and private networks) | I | RA |


##### **3.1.6. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide inventory of services used | I | RA |
| Manage the security of management infrastructure  (API, control plane) |   | RA |
| Manage security of OS, softwares and middlewares installed on Instances | RA |  |
| Manage physical security of equipements and hosted infrastructures | I | RA |
| Manage data security hosted on Instances service | RA |  |

##### **3.1.7. Business continuity**
| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Perform periodic restoration tests | RA |  |
| Maintain a business continuity and disaster recovery plan for IS hosted | RA | C |
| Manage automatic management systems for the infrastructure provided | I | RA |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Intervene with network and materials incidents (tickets and contacts) | AI | RA |
| Intervene with other incidents | RA |  |
| Change deficient hardware in support of Instances | I | RA |
| Realize backup recovery of Instances | RA |  |
| Realize backup recovery in case of subscription to an option managed by OVHcloud | A | R |

#### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy updates and patches of OS, softwares, middlewares and Information System hosted on Instances | RA |  |

### 4. Reverting

#### 4.1. Reversibility Model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Plan reversibility operations | RA |  |
| Choose fallback infrastructures | RA |  |
| Export data following QCOW2 format  | RA | I |

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
| Destroy data hosted on Instances |  | RA |
| Destroy end-of-life storage devices  |  | RA |
