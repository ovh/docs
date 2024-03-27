---
title: "Responsibility model for DevOps using Plateform.sh"
excerpt: "Shared responsibilities between OVHcloud and the customer for DevOps using Plateform.sh"
---

## Objectif

The RACI below details shared responsibilities between OVHcloud and the customer on DevOps product using plateform.sh
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
| Host the service in Gravelines  | I | RA |
| Choose and upgrade the service plan following needs   | RA | I |
| Add options following business needs (Boost, storage, licences, environments )  | RA | CI |
| Provide personal data needed for service subscription | RA | I |


### 2. Service availability

#### 2.1. Install the service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical machines, virtual machines and hosting buildings |  | RA |
| Buy and hold licences and usage rights for software provided by OVHcloud (plateform.sh software) |  | RA |
| Buy and hold licences and usage rights for softwares provided by the customer | RA |  |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Import your data on .plateform.app.yaml file according to file extension supported by selected framework and application | RA |  |

#### 2.3. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Select the framework, language and start your CI/CD project | RA | I |
| Provide access to the service by providing first ID credentials | I | RA |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Generate SSH keys and renew it to access to your service  | RA |  |
| Configure and administrate the security of your projects and data inside the plateform  | RA |  |
| Manage security risks and administrate the management infrastructure of the service |  | RA |
| Plan backups on a second site different from your nominal production site | RA |   |


##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access rights to the OVHcloud Control Panel | RA | I |
| Define users' roles and permissions to each environment under your project (using your admin account) | RA |  |
| Restrict the use of SSH keys to defined admin accounts | RA |  |
| Manage OVHcloud teams accesses to management infrastructure  |  | RA |


##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Monitor the functioning of physical and virtual devices in support of your plateform.sh projects|  | RA |
| Monitor the functionning of ressources available (jobs execution, disk space, certificate provisioning etc) | RA  |  |
| Retain logs of management infrastructure service   |   | RA |
| Retain logs of your web applications available in /var/log directory  |  RA |  |


##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage the content hosted in the plateform service  | RA |  |
| Define a retention policy for data according to legal requirements | RA |  |
| Perform storage and backup to maintain the service |  | RA |
| Manage data security and encryption on databases | RA |  |



##### **3.1.5. Connectivity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Operate automatic network management systems (architecture, implementation, software and hardware maintenance for deployed public network) |  | RA |
| Manage IP adressing plan and filter connections using Outband firewall | RA  |  |


##### **3.1.6. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide inventory of ressources and services used | I | RA |
| Operate intrusion tests on your applications |   | RA |
| Maintain in operational and security conditions the management infrastructure |  | RA |
| Maintain in operational and security conditions your applications |  | RA |

##### **3.1.7. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Maintain a business continuity and disaster recovery plan for the management infrastructure of the service |  | RA |
| Maintain a business continuity and disaster recovery plan of your applications | RA |  |
| Perform restoration tests of your applications | RA |  |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Notify incidents for the service plateform availability | A | I |
| Process incidents on the service plateform dysfunctioning (opened tickets and contacts) | I | RA |
| Process incidents on your applications | RA |  |

##### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy patches, update softwares available on the plateform  |  | RA |
| Add and allocate necessary ressources to the plateform service following customer requests  | I | RA |
| Perform a "protective block" on customer website in case of detection of critical vulnerability  | I | RA |
| Apply patches and upgrades following "Protective block" launching  | RA | I |


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
| Migrate/transfer data and files defined in your .platform.app.yaml | RA |  |

### 5. End of service

#### 5.1. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Delete your projects and decommisionnate the service | RA | I |
| Release allocated resources following service termination |  | RA |

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-ie/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>
