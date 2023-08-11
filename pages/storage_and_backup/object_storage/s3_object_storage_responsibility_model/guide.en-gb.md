---
title: "Object Storage - Shared Responsibility"
excerpt: "Shared responsibilities between OVHcloud and the customer for Public Cloud Object Storage"
updated: 2023-03-20
---

**Last update 20th March 2023**

## Objectif

The RACI below details shared responsibilities between OVHcloud and the customer for the Public Cloud Object Storage service. This shared model can help relieve the customer’s operational burden for the following service ranges : 

- Standard Object Storage-S3 API
- High Performance Object Storage-S3 API
- Standard Object Storage-Swift API

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
| Choose the Object Storage container service range following business needs (SWIFT, S3 High Speed, S3 Standard, ...) | RA | I |
| Provide personal data needed for service subscription | RA | I |
| Choose service location| RA | I |

### 2. Service availability

#### 2.1. Install the service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical Instances and hosting buldings | I | RA |

#### 2.2. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Create S3 credentials for an OpenStack user | RA |  |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide and manage Containers and objects' accessibility  |  | RA |
| Manage Containers and objects' security created (object lock, SSE-C, etc ...  | RA |  |
| Administrate service storage | I | RA |   
| Administrate data | RA |   |
| Manage backups | RA |  |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access rights to the OVHcloud Control Panel | RA | I |
| Manage physical and logical access to infrastructures for OVHcloud teams |  | RA |
| Manage S3 security policy of containers and object created | RA |  |

##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage and monitor physical servers in support of the Object Storage service |  | RA |
| Retain logs of the Object Storage service   |   | RA |
| Monitor the proper functioning of physical devices (utilities) in support of the service | I | RA |
| Create, modify, control, restore, delete backups | RA  |  |
| Maintain storage devices used for the service |  | RA |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage data encryption before importing in the Object Storage | RA |  |
| Manage data encryption on the allowed storage space using SSE-C and with encryption keys provided by the Client | A | R |

##### **3.1.5. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide inventory of containers and objects used | I | RA |
| Manage the security of management infrastructure (API, control plane) |   | RA |
| Manage physical security of equipments and hosted infrastructures | I | RA |

##### **3.1.6. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Perform periodic restoration tests | RA |  |
| Maintain a business continuity and disaster recovery plan for the hosted IS | RA |  |
| Manage automatic management systems for the infrastructure provided | I | RA |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Process incidents on the service (tickets and contacts) | AI | RA |
| Replace faulty hardware on physical servers of Object Storage clusters |  | RA |

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
| Migrate/transfer data | RA |  |

### 5. End of service

#### 5.1. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Destroy data from the Object Storage Containers Service via API S3 | RA |  |
| Destroy end-of-life storage devices |  | RA |


## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>