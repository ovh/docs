---
title: "Responsibility model for Data Processing"
excerpt: "Shared responsibilities between OVHcloud and the customer for the Data Processing service"
updated: 2024-06-03
---

## Objective

The RACI below details shared responsibilities between OVHcloud and the customer on the Data Processing service.

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
| Learn about the capabilities and limitations of the Services detailed in the OVHcloud documentation and particular conditions | RA | CI |
| Choose the service location | RA | I |
| Set up your cluster following business needs | RA | I |
| Add a storage container  | RA | CI |
| Provide personal data needed for service subscription | RA | I |

### 2. Service availability

#### 2.1. Install the service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical machines, virtual machines and hosting buildings |  | RA |
| Buy and hold licences and usage rights for software provided by OVHcloud (Apache Spark) |  | RA |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Import your job code following extensions supported by Apache Spark technology, including Amazon S3 or SWIFT technology for data storage by using API calls  | RA | I |

#### 2.3. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Launch jobs once you have  retrieved your API v6 token | RA | I |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage security of processed data (access, storage encryption, etc ..) | RA |  |
| Manage security risks and administrate the management infrastructure of the service |  | RA |
| Plan versionning and backups for stored data | RA |  |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access rights to the OVHcloud Control Panel | RA | I |
| Define users' roles and permissions to your jobs | RA |  |
| Manage OVHcloud teams accesses to management infrastructure |  | RA |

##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Monitor the functioning of physical and virtual devices in support of your platform.sh projects|  | RA |
| Monitor the functionning of resources available (jobs execution) with Grafana or any other monitoring tool | RA |  |
| Retain logs of the management infrastructure service |  | RA |
| Retain logs of your jobs execution | RA | I |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage the content hosted on the service | RA |  |
| Define a retention policy for data according to legal requirements | RA |  |
| Perform storage and backup to maintain the service |  | RA |
| Manage data security and encryption on on storage container  | RA |  |

##### **3.1.5. Connectivity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Operate automatic network management systems (architecture, implementation, software and hardware maintenance for deployed public network) |  | RA |


##### **3.1.6. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide inventory of resources and services used | I | RA |
| Maintain the management infrastructure in operational and security conditions |  | RA |

##### **3.1.7. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Maintain a business continuity and disaster recovery plan for the management infrastructure of the service |  | RA |
| Maintain a business continuity and disaster recovery plan of your data plan | RA |  |
| Perform restoration tests of your data | RA |  |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Notify incidents for the service platform availability | A | I |
| Process incidents on the service platform dysfunctioning (opened tickets and contacts) | I | RA |

##### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy patches, update softwares available on the service |  | RA |

### 4. Reversibility

#### 4.1. Reversibility Model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Schedule reversibility operations | RA | CI |
| Choose fallback infrastructures | RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage reversibility operations | RA |  |
| Migrate/transfer data (job code, processed data, logs)  following extensions supported by Apache Spark technology, including Amazon S3 or SWIFT technology for data storage by using API calls | RA |  |

### 5. End of service

#### 5.1. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Delete your project and decommission the service | RA | I |
| Release allocated resources following service termination |  | RA |

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
