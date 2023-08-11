---
title: Responsibility sharing - Domain Name service
excerpt: "Shared responsibility between OVHcloud and the customer for the use of the Domain Name service"
updated: 2023-08-11
---

## Objective

The RACI below details shared responsibilities between OVHcloud and the customer for the Domain Name service. This shared model can help relieve the customer’s operational burden.

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

Domain Names are fully reversible by design. DNS Zones may be backuped in txt files and deployed on any new DNS server.

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
| Manage the availability of the DNS service |  | RA |


##### **3.1.6. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage domain and sub-domains | RA |  |

##### **3.1.7. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage business continuity of OVHcloud DNS servers |  | RA |
| Install or subscribe secondary DNS services (not useful excepting highly specific cases) | RA |  |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Restore the DNS service |  | RA |
| Restore the DNS entries | RA |  |

#### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Give the contacts data required by DNS registering | RA | I |
| Update the contacts data in the registry in accordance with local regulations / GDPR |  | RA |

### 4. Reversibility

#### 4.1. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Document the services that depend on some DNS registerings | RA |  |
| Plan the DNS zone migration in accordance with the security requirements of DNS dependant services | RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Copy the DNS zone configuration | RA |  |

### 5. End of service

#### 5.1. Destroying configurations

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Remove the DNS zone from OVHcloud DNS servers | I | RA |

#### 5.2. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Remove the customers recordings from OVHcloud systems when recording deadlines are exceeded |  | RA |
