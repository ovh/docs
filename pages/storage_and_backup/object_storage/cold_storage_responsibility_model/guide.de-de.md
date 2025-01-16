---
title: "Cold Storage - Shared Responsibility for archive and restoration services (EN)"
excerpt: "Shared responsibilities between OVHcloud and the customer on Cold Storage for archive and retoration services"
updated: 2024-02-26
---

## Objectif

The RACI below details shared responsibilities between OVHcloud and the customer on Cold Storage for archive and restoration services delivered.

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
| Learn about capabilities and limitations related to the service | RA | C |
| Provide personal data needed for service subscription | RA | I |
| Host the service at the following locations : Tours, Bordeaux, Croix, Grenoble |  | RA |

### 2. Service availability

#### 2.1. Install the service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical and virtual Instances for service hosting | I | RA |
| Create Object Storage credentials for an OpenStack user | RA |  |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Use Object Storage API to import data in bucket | RA |  |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide access to the service by providing first ID credentials  | I | RA |
| Manage Containers and objects' security created at server entry with SSE-C feature following keys delivery by the client  | R | A |
| Administrate service storage |  | RA |
| Administrate data | RA |   |
| Activate data archive command and manage backups following needs | RA |  |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access rights to the OVHcloud Control Panel | RA | I |
| Manage physical and logical access to infrastructures for OVHcloud teams |  | RA |
| Manage Object Storage security policy of containers and object created before activating data archive command | RA |  |

##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage and monitor physical and virtual servers in support of archive and restoration services |  | RA |
| Retain logs of management infrastructure services   |   | RA |
| Retain logs using the dedicated feature (activating cold storage on a stream)  |   | RA |
| Create, modify, control, restore, delete archives and backups | RI  | A |
| Maintain storage devices used for the service |  | RA |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage data encryption before importing in the Object Storage allocated by using SSE-C feature and following keys delivery by the client  | AI | R |
| Define a retention policy for data according to legal requirements | RA |  |

##### **3.1.5. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide inventory of containers and objects used | I | RA |
| Manage the security of management infrastructure (API, control plane) |   | RA |
| Manage physical security of equipments and hosted infrastructures |  | RA |

##### **3.1.6. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Perform restoration tests for archives | RA | I |
| Maintain a business continuity and disaster recovery plan for the hosted IS | RA |  |
| Manage automatic management systems for the infrastructure provided |  | RA |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Process incidents on the service (tickets and contacts) | AI | RA |

### 4. Reversibility

#### 4.1. Reversibility Model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Plan reversibility operations | RA |  |
| Choose fallback infrastructures | RA | CI |
| Choose data format to export | RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage reversibility operations | RA |  |
| Migrate/transfer data using Object Storage API | RA |  |

### 5. End of service

#### 5.1. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Destroy data from the Object Storage Containers Service via Object Storage API | RA |  |
| Release allocated resources following service termination |  | RA |

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
