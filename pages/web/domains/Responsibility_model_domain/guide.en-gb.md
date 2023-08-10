---
title: Responsibility sharing - Domain Name service
excerpt: "Shared responsibility between OVHcloud and the customer for the use of the Domain Name service"
kb: Hosted Private Cloud
category_l1: Domain Name
updated: 2023-08-10
---

## Objective

The RACI below details shared responsibilities between OVHcloud and the customer for Domain Name Service. This shared model can help relieve the customer’s operational burden.


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
| Choose the name of the service | RA |  |	
| Define the list of TLD you want to cover with the name | RA |  |
| Define the close domain names you want to protect against malicious uses | RA |  |


### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Check the availability of the domains you want | RA |  |
| Register the mark of your service if needed | RA |  |
| Register the domain | I | RA |
| Generate the customer interface to manage its DNS zone | I | RA |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Know the services that depend on some DNS registerings | RA |  |

#### 2.3. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy the configuration on the DNS zone in full autonomy | RA |  |
| Deploy the configuration on the DNS zone with the help of OVHcloud automatization tools | RI | AI |


### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Perform the DNS modifications for services deployed in full autonomy | RA |  |
| Perform the DNS modifications for services deployed via OVHcloud automatization tools | RI | RA |  

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage access to the DNS zone configuration tool | RA | I |


##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Monitor the DNS servers |  | RA |
| Monitor the DNS zone entries | A |  |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Store the DNS zone |  | RA |


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
