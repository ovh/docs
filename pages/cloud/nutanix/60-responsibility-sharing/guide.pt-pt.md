---
title: Partilha de responsabilidades - Nutanix on OVHcloud (EN)
routes:
    canonical: '/pages/cloud/nutanix/60-responsibility-sharing'
excerpt: "Shared responsibility between OVHcloud and the customer for the use of the Nutanix on OVHcloud product"
kb: Hosted Private Cloud
category_l1: Nutanix on OVHcloud
category_l2: Responsibility sharing
updated: 2023-07-13
---

## Objective

The RACI below details shared responsibilities between OVHcloud and the customer for the Hosted Private Cloud service Nutanix on OVHcloud. This model is designed to help the customer make the best use of the Nutanix on OVHcloud service.


| Roles |
| --- |
| R: Is in charge of carrying out the process |
| A: Is Accountable for the successful completion of the process |
| C: Is consulted during the process |
| I: Is informed of the results of the process |

### 1. Before subscription

#### 1.1. Specify service as needed

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Learn about the capabilities and limitations of the Services detailed in the OVHcloud documentation (website, Particular Conditions, etc.) | RA | CI |	
| Choose the location of your Nutanix cluster | RA | I |
| Choose Nutanix licence pack provided by OVHcloud following needs or import your own licences | RA | I |
| Choose the model and range of dedicated servers following needs and defined criteria | RA | I |
| Choose dedicated server configuration options as needed | RA | I |
| Choose additional Nutanix cluster configuration options as needed (Fault Tolerance Domain, Replication Factor, Erasure Coding feature) | RA | I |

### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical machines and hosting buildings | I | RA |
| Install and configure the functional building blocks internal to the dedicated server that are necessary for maintaining operational conditions and security conditions (firmware, BIOS, BMC, IPMI, etc.) | I | RA |
| Deploy initial network configuration to devices (vRack, IPLB and Nutanix cluster nodes) | I | RA |
| Install the Nutanix Acroplis Operating System (AOS) | I | RA |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Import virtual machines from any source compatible with Nutanix technology (VMware, Hyper-V, AHV) manually or by using Nutanix Move tool | RA | I |

#### 2.3. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Create new virtual machines | RA |  |
| Purchase and own the licenses and rights of use for OS | RA |  |
| Install OS on virtual machines | RA |  |
| Install and configure softwares and middlewares on the cluster | RA |  |
| Modify default network configurations to secure internal and external cluster connections | RA |  |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage network accessibility of the Dedicated Server |  | RA |
| Configure and administrate Nutanix solution | RA |  |  
| Administrate applications installed on Nutanix virtual layer | RA |  |
| Request the replacement of defective hardware on the Dedicated Server | RA | CI |
| Add/remove options/hardware on the Dedicated Server | CI | RA |
| Manage risks of IS installed | RA |  |
| Deploy and ensure the functioning of the backup policy in client's IS | RA |  |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access to the OVHcloud Control Panel | RA | I |
| Manage users' accesses to Nutanix cluster (ex.: Prism Administration interface, SSH, CLI) | RA |  |
| Manage users' accesses and security policy on IS | RA |  |
| Managing physical access to infrastructures for OVHcloud teams | I | RA |


##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Monitor the proper functioning of physical devices (utilities) supporting the Dedicated Server | I | RA |
| Monitor physical resource performance | RA | CI |
| Keep logs related to administration activities of the cluster made available with Nutanix tools (ex.: Prism, SSH, CLI) or with any external tool and those of hosted IS | RA |  |
| Keep logs of the Control Plane that monitors and administrate Nutanix service |  | RA |
| Monitor the performance of Nutanix cluster (incident alerts, usage report, etc.) and other softwares installed by the client on the IS | RA |  |
| Monitor the performance of IPLB service usage integrated into the Nutanix offer (using performance graphs) | RA | I |


##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Create, modify, control, restore, delete backup jobs | RA |  |
| Manage content hosted on infrastructures | RA |  |
| Manage data continuity and sustainability | RA |  |
| Carry out maintenance on the storage and backup tools installed by the client | RA |  |
| Carry out maintenance on the storage and backup devices provided by OVHcloud | CI | RA |

##### **3.1.5. Connectivity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage the functioning of automatic network management systems (architecture, implementation, software and hardware maintenance for deployed public and private networks, primary IP of dedicated server) | I | RA |
| Implement a network architecture adapted as needed (vRack, IPLB, access to public and private networks, etc.) | RA | I |
| Manage private IP addressing plan of the client on the Nutanix cluster | RA |  |
| Manage public IP addressing plan provided by OVHcloud Nutanix service | CI | RA |

##### **3.1.6. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide inventory of infrastructures and services used | I | RA |
| Manage the security of management infrastructures (Control Plane) |  | RA |
| Manage the security of Nutanix software, softwares and Middleware installed on the cluster | RA |  |
| Manage the security of data stored by the customer on the infrastructure | RA |  |
| Manage the physical security of equipment and infrastructures hosted at OVHcloud | I | RA |
| Maintain Nutanix software solution and its extensions | RA |  |

##### **3.1.7. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage automatic management systems for the infrastructure provided | I | RA |
| Maintain a business continuity and disaster recovery plan for the hosted IS | RA |  |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Open tickets for incidents related to Nutanix software (in case of subscription to packaged offer and dysfunction of Nutanix software) | RA | I |
| Open tickets for incidents related to Bring Your Own licence offer (related to dysfunction of hardware elements in the Dedicated Server) | RA | I |
| Replace the defective hardware elements of the Dedicated Server following incident qualification | I | RA |
| Process other incidents | RA |  |
| Restore virtual machine backups | RA |  |

#### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy patches, update and configure the Nutanix software, softwares, middlewares and hosted IS | RA |  |
| Provide the new firmware version of the dedicated server | I | RA |
| Update virtual machines | RA |  |
| Approve change requests of defective hardware elements submitted by OVHcloud | A | R |
| Schedule changes requested by customer | RA | RI |

### 4. Reversibility

#### 4.1. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Schedule reversibility operations | RA | I |
| Choose fallback infrastructures | RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Export virtual machines from any source compatible with Nutanix technology (VMware, Hyper-V, AHV) manually or by using Nutanix Move tool | RA | C |
| Migrate/transfer data | RA |  |

### 5. End of service

#### 5.1. Destroying configurations

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Uncommission client-related configurations following contract termination | I | RA |

#### 5.2. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Securely erase data on storage media |  | RA |
| Destroy storage media that have reached their end of life or on which the secure destruction process generates errors |  | RA |
| Provide a certificate of destruction (upon request) | I | RA |
