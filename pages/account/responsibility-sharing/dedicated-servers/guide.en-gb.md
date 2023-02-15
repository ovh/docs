---
title: RACI Dedicated servers
slug: raci-dedicated-server
section: RACI Bare Metal Cloud
excerpt: RACI between OVHcloud and the customer for Dedicated Servers
updated: 2021-12-01
---

**Last updated December 1st, 2021**

## Objective

The RACI below details shared responsibilities between OVHcloud and the customer for Dedicated Servers services. This shared model can help relieve the customer’s operational burden.

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
| Choose the location of dedicated servers | RA | I |
| Size dedicated servers as needed | RA | I |
| Choose options as needed | RA | I |

### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, transport, deliver and maintain physical machinery and buildings | CI | RA |
| Install and configure the internal functional building blocks to the dedicated server that are required to keep it in operational conditions and secure conditions (firmware, BIOS, BMC, IPMI, etc.). |  | RA |
| Buy and hold licences and usage rights for the OS used | RA |  |
| Deploy initial network configuration to devices | I | RA |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |

#### 2.3. Customers information system setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Install the OS | RA | RI |
| Install the software on your dedicated server | RA |  |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Ensure network accessibility of the Dedicated Server |  | RA |
| Manage the software installed on the Dedicated Server | RA |  |
| Decide to add/remove an option on the Dedicated Server, request the replacement of defective hardware on the Dedicated Bare Server | RA | I |
| Add/remove options/hardware on the Dedicated Server | I | RA |
| Adapt the OS configuration to the hardware resources in use | RA |  |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access and security policy for Service users | RA |  |
| Manage physical and logical access to infrastructures for OVHcloud teams | I | RA |
| Manage access to the manager | RA | I |

##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Monitor the proper functioning of physical devices (utilities) that are part of the Dedicated Server | I | RA |
| Monitor physical resource performance | RA | R |
| Process and clear alarms from Dedicated Server managed devices | I | RA |
| Keep logs of the information system hosted on the Dedicated Server | RA |  |
| Keep logs of the Control Plane that manages the Dedicated Server |  | RA |
| Monitor the performance of services installed on the Dedicated Server | RA |  |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Create, modify, control, restore, delete backup jobs | RA |  |
| Manage content hosted on infrastructures | RA |  |
| Ensure data continuity and sustainability | RA |  |
| Carry out maintenance on the storage and backup devices provided by OVHcloud |  | RA |

##### **3.1.5. Connectivity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Ensure that automatic network management systems works (architecture, implementation, software and hardware maintenance for deployed public and private networks, primary IP of dedicated server) | I | RA |
| Manage IP addressing plan | RA | I |

##### **3.1.6. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Ensure the security of management infrastructures (API, control plane) | R | RA |
| Ensure the security of OS, software and middleware installed on Dedicated Servers | RA |  |
| Manage the security of data stored by the Customer on Dedicated Servers | RA |  |
| Manage the physical security of equipment and infrastructures hosted at OVHcloud | I | RA |

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
| Handle hardware and network incidents (tickets and telephone contacts) | AI | RA |
| Process other incidents | RA |  |
| Restore machine backups | RA |  |

##### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy patches, update and configure the OS, software, middleware and information systems hosted on Dedicated Servers | RA |  |
| Schedule changes requested by customer | RA | RI |

### 4. Reverting

#### 4.1. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Schedule reversibility operations | RA |  |
| Choose new infrastructures to use after reversibility | RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage reversibility operations | RA |  |
| Migrate/transfer data | RA |  |

### 5. End of service

#### 5.1. Configuration destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Terminate service contract | RA | I |
| Decommission client-related configurations |  | RA |

#### 5.2. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Securely destroy data on storage media |  | RA |
| Destroy storage media that has reached their end of life or when the secure destruction processes are generating errors |  | RA |
| Provide a certificate of destruction (upon request) | I | RA |
