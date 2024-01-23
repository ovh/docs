---
title: File Storage services - Responsibility model
excerpt: 'Shared responsibilities between OVHcloud and the customer for NAS-HA and Enterprise File Storage solutions'
updated: 2024-01-22
---

The RACI below details shared responsibilities between OVHcloud and the customer for the following File Storage solutions:

- NAS-HA 
- Enterprise File Enterprise Storage

This shared model can help relieve the customer’s operational burden.

## RACI definition

| Roles |
| --- |
| R: Is in charge of carrying out the process |
| A: Accountable for the successful completion of the process |
| C: Is consulted during the process |
| I: Is informed of the results of the process |

### 1. Before subscription

#### 1.1. Specify service as needed

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Learn about the capabilities and limitations of the Services detailed in the OVHcloud documentation | RA | CI |
| Choose service location | RA | I |
| Size services as needed | RA | I |

### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical machines, virtual machines and hosting buildings |  | RA |
| Buy and hold licences and usage rights for software provided by OVHcloud |  | RA |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Import/Export data in format supported by the hypervisor or an NFS-compatible distribution  | RA | C |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Decide to divide resources of the existing service | RA | I |
| Manage snapshot policy| RA | I |
| Define a data rentention policy following legal requirements | RA |  |
| Manage storage volumes and access lists (ACL) | RA | I |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access to the OVHcloud Control Panel and the storage service using user interface, API, ACL | RA | I |
| Manage OVHcloud teams’ physical access to infrastructures |  | RA |
| Manage OVHcloud teams’ logical access to infrastructures | I | RA |

##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Monitor service performances like IOPS, volumes sizing (64 MB/TB or 4000 IOPS/TB) for NFS service |   | RA |
| Monitor service performances (bandwidth, IOPS, volumes sizing, etc) | RA | I |
| Retain logs of control plane for service monitoring |  | RA |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage content hosted on storage service  | RA | I |
| Manage data continuity (snapshots and/or backups)| RA | |
| Perform storage and snapshot device maintenance  on management infrastructure|  | RA |
| Manage data encryption at rest | RA |  |

##### **3.1.5. Connectivity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Operate automatic network management systems (architecture, implementation, software and hardware maintenance for deployed public and private networks) | I | RA |
| Manage IP addressing plan using OVHcloud IP adresses | RA |   |

##### **3.1.6. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide inventory of storage volumes used | I | RA |
| Manage the security of management infrastructures (API, Control Panel) following security standards like ISO 2700x, SOC 2 type 2 and HDS |  | RA |
| Manage security of the operating systems (major updates and upgrades) and software installed following service delivery | I | RA |
| Manage physical security of equipment and infrastructures hosted at OVHcloud | I | RA |

##### **3.1.7. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage automatic management systems for the provided infrastructure | I | RA |
| Maintain a business continuity and disaster recovery plan for hosted services | RA | I |
| Perform periodic restoration tests | RA |  |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Process hardware and network incidents (tickets and contacts) | AI | RA |

##### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Comply with the service Lifecycle Policy (EoL) | I | RA |
| Deploy patches, update software on the management infrastructure of the service |  | RA |
| Perform preventive interventions on managed elements of the service |  | AR |

### 4. Reverting

#### 4.1. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Schedule reversibility operations | RA |  |
| Choose fallback infrastructures | RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage reversibility operations : Manual extraction, API, Import/Export data in format supported by the hypervisor or an NFS-compatible distribution  | RA | I |
| Migrate/transfer data | RA |

### 5. End of service

#### 5.1. Destroy configurations

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Delete storage services (with API or user interface ) | RA | I |
| Decommission of the client service following contract termination  | I | RA |

#### 5.2. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Operate a secure data erasure on storage media |  | RA |

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-au/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
