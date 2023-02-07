---
title: Responsability sharing - VMware on OVHcloud
slug: vmware-on-ovhcloud-raci
section: FAQ
excerpt: "Shared responsibility between OVHcloud and the customer for the use of the VMware on OVHcloud product"
kb: Hosted Private Cloud

---

**last update on the 07/02/2023**

## Objective

The RACI below details shared responsibilities between OVHcloud and the customer. This model is designed to help the customer make the best use of the VMware on OVHcloud service

| Roles |
| --- |
|R : Is in charge of carrying out the process|
|A : Guarantees the successful completion of the process|
|C : Is consulted during the process|
|I : Is informed of the results of the process|

### 1. Before subscription

#### 1.1. Specify service as needed

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Choose the location of the vCenter | RA | I |
| Choose the VMware on OVHcloud service level as needed | RA | I |
| Sizing servers as needed | RA | I |
| Choose VMware software as needed (vSphere, vROps, vScope, vSAN, NSX, TKG…) | RA | I |
| Decide versions of the VMware software to use | I | RA |

### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical machines and hosting buildings | I | RA |
| Install and configure the functional building blocks internal to the dedicated server that are necessary for maintaining operational conditions and security conditions (firmware, BIOS, BMC, IPMI, etc.). |  | RA |
| Purchase and own the licenses and rights of use for the OS used | I | RA  |
| Deploy initial network configuration to devices | I | RA |
| Install the vCenter | I | RA |
| Supply TKGm templates  | I | RA |
| Adapt the service configuration after its initial delivery | RA |  |

#### 2.1. Customer's IS installation

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy containers | RA |  |
| Deploy softwares inside containers | RA |  |
| Supply data to containers | RA |  |
| Configure network in order to have a functional IS | RA |  |

### 3. Service Usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Ensure network accessibility of the vCenter |  | RA |
| Manage the applications installed on the vCenter | RA |  |
| Decide to add/remove an option on the vCenter, request the replacement of defective hardware on the vCenter | RA | I |
| Add/remove options/hardware on the vCenter | I | RA |
| Configure the vCenter | RA |  |
| Ensuring accessibility and proper functioning of the service TKGm | RA |  |
| Ensuring accessibility and proper functioning of the customer's IS | RA |  |
| Deploy a backup policy on the data processed by the installed IS | RA |  |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access and security policy for Service users | RA |  |
| Manage access to the manager | RA | I |
| Manage access to resources within the vCenter | RA |  |
| Managing physical and logical access to infrastructures for OVHcloud teams | I | RA |

##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Monitor the proper functioning of physical devices (utilities) supporting the vCenter | I | RA |
| Monitor physical resource performance | RA | R |
| Process and clear alarms from managed devices on the vCenter | I | RA |
| Keep logs of the information system hosted on the vCenter |  | RA |
| Keep logs of the Control Plane that monitors the vCenter |  | RA |
| Monitor the performance of the services installed on the vCenter | RA |  |
| Monitor the performance of the service TKGm | RA |  |
| Adapt resources allocated as per the measured performances and expectations | RA | I |
| Supply infrastructure's log (API, hypervisor, cluster, kubernetes) | I | RA |
| Verify the right application of backup policies | RA |  |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Create, modify, control, restore, delete backup jobs | RA |  |
| Managing content hosted on infrastructures | RA |  |
| Ensuring data continuity and sustainability | RA |  |
| Carry out maintenance on the storage and backup devices provided by OVHcloud |  | RA |
| Encrypt sensitive data | RA |  |
| Veeam Managed Backup – subscribe to the option | RA | I |
| Veeam Managed Backup - Upgrade the Veeam solution |  | RA |
| Veeam Managed Backup - Licensing |  | RA |
| Veeam Managed Backup - Monitoring and availability of Veeam components |  | RA |
| Veeam Managed Backup - Job creation | RA |  |
| Veeam Managed Backup - Job deletion | RA |  |
| Veeam Managed Backup - Job modification | RA |  |
| Veeam Managed Backup - Backup restore | RA |  |


##### **3.1.5. Connectivity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Ensure the functioning of automatic network management systems (architecture, implementation, software and hardware maintenance for deployed public and private networks) | I | RA |
| Manage IP addressing plan | RA | I |

##### **3.1.6. Gestion**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Ensure the security of management infrastructures (API, control plane) | R | RA |
| Ensure the security of VMware softwares, and of softwares, middlewares install on the vCenter | R | RA |
| Managing the physical security of equipment and infrastructures hosted at OVHcloud | I | RA |
| Managing the security of data stored by the Customer on vCenter | RA |  |
| Provide an inventory of the infrastructures and services implemented in the vCenter | I | RA |
| Manage risks related to the infrastructure provided in the vCenter |  | RA |
| Manage risks related to the hosted IS managed in vCenter | RA |  |
| Maintain in operational and security conditions the vCenter service (includes minor/major update of hosts, vCenter, NSX, vROps, vSAN and application of security patches. Non exhaustive list | RI | RA |
| Maintain in operational and security conditions the managed IS | RA | R |

##### **3.1.7. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage automatic management systems for the infrastructure provided | I | RA |
| Maintain a business continuity and disaster recovery plan for the hosted IS | RA |  |
| Realize periodic tests of the IS restauration | RA |  |
| Zerto - setup a Disaster Recovery Plan | RA | I |
| Zerto - Setup of the solution between 2 Private Cloud | I | RA |
| Zerto - Licensing | I | RA |
| Zerto - Configure VPG and RPO | RA | I |
| Zerto - Monitoring and availability of Zerto components | I | RA |

##### **3.1.7. NSX**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy, configure, maintain, update NSX Controller |  | RA |
| Deploy, configure, maintain, update NSX Edges | I | RA |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Replace the defective hardware elements of the vCenter | I | RA |
| Open tickets for incidents related to a hardware malfunction on the vCenter | RA | I |
| Open VMware's softwares incident tickets | RA | I |
| Handle hardware, network or VMware's softwares incidents (tickets and telephone contacts) | AI | RA |
| Report an incident on the vCenter | R | RA |
| Respond to an incident affecting the vCenter | I | RA |
| Respond to an incident affecting the managed IS | RA |  |

#### **3.2.2. Change**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy patches, update and configure the vCenter and its components | I | RA |
| Request changes to the resources allocated to the vCenter | RA | I |
| Carry out the modifications to the allocated resources requested by the Customer | RA | I |

### 4. Reversibility

#### 4.1. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Create and deploy the managed IS reversibility plan | RA |  |
| Schedule reversibility operations | RA |  |
| Choose fallback infrastructures | RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage reversibility operations | RA |  |
| Migrate/transfer data | RA |  |

### 5. End of service

#### 5.1. Destroying configurations

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Terminate service contract | RA | I |
| Uncommission client-related configurations |  | RA |

#### 5.2. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Securely destroy data on storage mediaSecurely destroy data on storage media |  | RA |
| Destroy the vCenter configuration data |  | RA |
| Provide a certificate of destruction (upon request) | I | RA |
