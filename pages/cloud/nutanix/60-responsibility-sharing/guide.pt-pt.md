---
title: Partilha de responsabilidades - Hosted Private Cloud powered by Nutanix (EN)
slug: raci-hosted-private-cloud-nutanix
routes:
    canonical: 'https://docs.ovh.com/gb/en/nutanix/raci-hosted-private-cloud-nutanix/'
section: RACI
excerpt: "Shared responsibility between OVHcloud and the customer for the use of the Hosted Private Cloud powered by Nutanix product"
kb: Hosted Private Cloud
category_l1: Hosted Private Cloud powered by Nutanix
category_l2: Responsibility sharing
---

**Last updated 11th April 2022**

## Objective

The RACI below details shared responsibilities between OVHcloud and the customer for the Hosted Private Cloud service powered by Nutanix. This model is designed to help the customer make the best use of the Hosted Private Cloud powered by Nutanix service.


| Roles |
| --- |
| R: Is in charge of carrying out the process |
| A: Guarantees the successful completion of the process |
| C: Is consulted during the process |
| I: Is informed of the results of the process |

### 1. Before subscription

#### 1.1. Specify service as needed

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Choose the location of your dedicated servers | RA | I |
| Choose Nutanix licence pack as needed | RA | I |
| Sizing dedicated servers according to needs | RA | I |
| Choose dedicated server configuration options as needed | RA | I |

### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver and maintain physical machines and hosting buildings | CI | RA |
| Install and configure the functional building blocks internal to the dedicated server that are necessary for maintaining operational conditions and security conditions (firmware, BIOS, BMC, IPMI, etc.). |  | RA |
| Purchase and own the licenses and rights of use for the OS used | I | RA  |
| Deploy initial network configuration to devices | I | RA |
| Install the Nutanix cluster | I | RA |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Ensure network accessibility of the Dedicated Server |  | RA |
| Manage the applications installed on the Dedicated Server | RA |  |
| Decide to add/remove an option on the Dedicated Server, request the replacement of defective hardware on the Dedicated Server | RA | I |
| Add/remove options/hardware on the Dedicated Server | I | RA |
| Configure the Nutanix software  | RA |  |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
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