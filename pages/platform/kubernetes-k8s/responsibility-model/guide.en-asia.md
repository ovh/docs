---
title: Managed Kubernetes - Responsibility model
excerpt: 'Shared responsibilities between OVHcloud and the customer'
updated: 2023-07-06
---

The RACI below details shared responsibilities between OVHcloud and the customer for the Managed Kubernetes service.
This shared model can help relieve the customer’s operational burden.

## RACI definition

| Roles |
| --- |
| R: Is in charge of carrying out the process |
| A: Accountable for the successful completion of the process|
| C: Is consulted during the process |
| I: Is informed of the results of the process |

### 1. Before subscription

#### 1.1. Specify service as needed

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Choose the Public Cloud project where the Kubernetes cluster will be created  | A | I |
| Choose the private or public network where the Kubernetes cluster will be executed | A | I |
| Choose the service location | RA | I |
| Decide which Kubernetes version to use | A | IR |
| Design applications running on the Kubernetes cluster to not store important peristant data locally (nodes are managed as cattle), example : use persitant volume CINDER   | A | I |

### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Install Kubernetes cluster following first configuration instructions requested by the client | I | RA |
| Adapt service configuration following the first delivery | RA |  |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Use Kubernetes native API to import/export (create, delete) data on the cluster (format file YAML or JSON) | RA |  |

#### 2.3. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Create the YAML file for container configuration | RA |  |
| Launch containerized software  | RA |  |
| Inject data in containers   | RA |  |
| Modify network default configuration to secure internal and external connections to the Kubernetes cluster | RA |  |

### 3. Service usage

#### 3.1. Operations

##### 3.1.1. Daily operations

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage accessibility and functionning of the Managed Kubernetes service |  | RA |
| Manage accessibility and functionning of the installed IS | RA |  |
| Implement a backup policy for data hosted in the IS | RA |  |

##### 3.1.2. Access management

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access to the OVHcloud Control Panel whithin a Public Cloud project | RA | I |
| Manage OVHcloud teams’ physical and logical access to infrastructures |  | RA |
| Manage access to resources inside Kubernetes Managed service |  | RA |

##### 3.1.3. Monitoring

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Monitor performances of the service | I  | RA |
| Adapt allocated resources of Kubernetes control panel following the managed infrastructure by Kubernetes service |  | RA |
| Adjust the managed infrastructure by Kubernetes service following resources' needs of installed software  | RA | I |
| Monitor the IS deployed with Kubernetes Managed service  | RA |  |
| Keep logs of the deployed IS | RA |  |
| Monitor the backup policy | RA |  |

##### 3.1.4. Storage

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Encrypt sensitive data of the IS in the Kubernetes cluster  | RA |  |


##### 3.1.5. Connectivity

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Filter administrators and users accesses on the Kubernetes Managed service | RA | I |
| Route packets inside the project managed by the Kubernetes Managed service  | RA |  |
| Apply security measures adapted to internal and external flows of the IS  | RA |  |
| Apply security measures adapted to flows destined to the service Control Panel (FQDN routing, TLS certificates) |  | RA |

##### 3.1.6. Management

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide inventory of infrastructures and services used under the Managed Kubernetes service | I | RA |
| Manage risks related to the provided service infrastructure |  | RA |
| Manage risks related to the IS hosted and managed by the Kubernetes Managed service |  | RA |
| Force updates of Kubernetes service versions which are no longer maintained by OVHcloud | I | RA |
| Provide patches and upgrade versions of the Managed Kubernetes service to be installed | I | RA |
| Apply necessary updates following update policy defined  | RA |  |
| Maintain the IS managed in operational and security conditions | RA |  |

##### 3.1.7. Business continuity

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy the continuity policy of the Kubernetes Managed service |  | RA |
| Perform periodical restoration tests on the service  |  | RA |
| Deploy the continuity policy of the IS installed| RA |  |
| Perform periodical restoration tests of the IS installed | RA |  |

#### 3.2. Event management

##### 3.2.1. Incidents

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Notify incidents wihin the service using support channels (tickets, telephone)  | RA | I |
| Manage and notify incidents detected on the Managed service infrastructure in case of impact on customer side| I | RA |
| Intervene whithin an incident impacting the service   |  | RA |
| Intervene whithin incidents caused by bad service configurations (bad network configuration, bad workload distribution, overconsumption of Kubernetes Control Panel, etc .;)    | RA | CI |
| Intervene whithin an incident impacting the IS hosted  | RA |  |

##### 3.2.2. Changes

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy patches and maintenances necessary on the Kubernetes service (API, infrastructure, storage needs, etc ..)   | I | RA |
| Deploy necessary updates on managed containers  | RA |  |
| Request modifications of allocated resources to the Kubernetes Managed service  | RA | I |
| Apply resources' modifications requested by the client | I | RA |

### 4. Reverting

#### 4.1. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Use Kubernetes native API to import/export (create, delete) data on the cluster (format file YAML or JSON) | RA |  |
| Create and deploy the reversibility plan of installed IS| RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage reversibility operations | RA | I |
| Migrate/transfer data | RA |  |

### 5. End of service

#### 5.1. Destroying configurations

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Delete the Kubernetes cluster inside the Public Cloud project  | RA | I |
| Destroy Managed Kubernetes configurations related to the client following service resiliation  |  | RA |

#### 5.2. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Destroy client's data at the end of service |   | RA |
| Destroy cluster's external data (ex : persistant volume) |  RA |  |
| Destroy data related to the configuration of the Managed Kubernetes service |   | RA |

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our private registry services.

Join our community of users on <https://community.ovh.com/en/>.
