---
title: Responsibility sharing - Nutanix on OVHcloud
excerpt: "Shared responsibility between OVHcloud and the customer for the use of the Nutanix on OVHcloud product"
kb: Hosted Private Cloud
category_l1: Nutanix on OVHcloud
category_l2: Responsibility sharing
updated: 2022-07-13
---

**Last updated 13th July 2023**

## Objective

The RACI below details shared responsibilities between OVHcloud and the customer for the Hosted Private Cloud service powered by Nutanix. This model is designed to help the customer make the best use of the Nutanix on OVHcloud service.


| Roles |
| --- |
| R: Is in charge of carrying out the process |
| A: is Accountable for the successful completion of the process |
| C: Is consulted during the process |
| I: Is informed of the results of the process |

### 1. Before subscription

#### 1.1. Specify service as needed

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Learn about the capabilities and limitations of the Services detailed in the OVHcloud documentation (web site, Particular Conditions, etc ..)| RA | CI |	
| Choose the location of your Nutanix cluster | RA | I |
| Choose Nutanix licence pack provided by OVHcloud following needs or import your own licences | RA | I |
| Choose the model et range of dedicated servers following needs and defined criteria | RA | I |
| Choose dedicated server configuration options as needed | RA | I |
| Choose additionnal Nutanix cluster configuration options as needed (Fault Tolerance Domain,  Replication Factor, Erasure Coding feature) | RA | I |

### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical machines and hosting buildings | I | RA |
| Install and configure the functional building blocks internal to the dedicated server that are necessary for maintaining operational conditions and security conditions (firmware, BIOS, BMC, IPMI, etc.). | I | RA |
| Deploy initial network configuration to devices (Vrack, IPLB and Nutanix cluster nodes) | I | RA |
| Install the Nutanix Acroplis Operating System (AOS)  | I | RA |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Import virtual machines from any source compatible with Nutanix technology (VMware, Hyper-V, AHV) manually or by using Nutanix Move tool  | RA | I |

#### 2.3. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Create new virtual machines | RA |  |
| Purchase and own the licenses and rights of use for OS  | RA |  |
| Install OS on virtual machines | RA |  |
| Install and configure softwares and middlewares on the cluster | RA |  |
| Modify default network configurations to secure internal and external connexions of the cluster | RA |  |

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
| Manage risks of IS installed  | RA |  |
| Deploy and ensure the functioning ofthe backup policy in client's IS   | RA |  |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access to the OVHcloud Control Panel  | RA | I |

| Manage access and security policy for Service users | RA |  |
| Managing physical and logical access to infrastructures for OVHcloud teams | I | RA |
| Manage access to the manager | RA | I |

##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Monitor the proper functioning of physical devices (utilities) supporting the Dedicated Server  | I | RA |
| Monitor physical resource performance | RA | R |
| Process and clear alarms from managed devices on the Dedicated Server  | I | RA |
| Keep logs of the information system hosted on the Dedicated Server | RA |  |
| Keep logs of the Control Plane that monitors the Dedicated Server |  | RA |
| Monitor the performance of the services installed on the Dedicated Server. | RA |  |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Create, modify, control, restore, delete backup jobs | RA |  |
| Managing content hosted on infrastructures | RA |  |
| Ensuring data continuity and sustainability | RA |  |
| Carry out maintenance on the storage and backup devices provided by OVHcloud |  | RA |

##### **3.1.5. Connectivity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Ensure the functioning of automatic network management systems (architecture, implementation, software and hardware maintenance for deployed public and private networks, primary IP of dedicated server) | I | RA |
| Manage IP addressing plan | RA | I |

##### **3.1.6. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Ensure the security of management infrastructures (API, control plane) | I | RA |
| Ensure the security of Nutanix software, software and Middleware installed on Dedicated Servers |RA |  |
| Managing the security of data stored by the Customer on Dedicated Servers | RA |  |
| Managing the physical security of equipment and infrastructures hosted at OVHcloud | I | RA |

##### **3.1.7. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage automatic management systems for the infrastructure provided | I | RA |
| Maintain a business continuity and disaster recovery plan for the hosted IS | RA |  |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Replace the defective hardware elements of the Dedicated Server | I | RA |
| Open tickets for incidents related to a hardware malfunction on the Dedicated Server |RA | I |
| Open Nutanix software incident tickets |RA | I |
| Handle hardware and network incidents (tickets and telephone contacts) | AI |RA |
| Handle Nutanix software incidents (tickets and phone contacts) | AI |RA |
| Process other incidents |RA |  |
| Restore machine backups |RA |  |

#### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy patches, update and configure Nutanix |RA |  |
| Schedule changes requested by customer |RA | RI |

### 4. Reversibility

#### 4.1. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Schedule reversibility operations |RA |  |
| Choose fallback infrastructures |RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage reversibility operations |RA |  |
| Migrate/transfer data |RA |  |

### 5. End of service

#### 5.1. Destroying configurations

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Terminate service contract |RA | I |
| Uncommission client-related configurations |  |RA |

#### 5.2. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Securely destroy data on storage media |  |RA |
| Destroy storage media that have reached their end of life or on which the secure destruction process generates errors |  |RA |
| Provide a certificate of destruction (upon request) | I |RA |
