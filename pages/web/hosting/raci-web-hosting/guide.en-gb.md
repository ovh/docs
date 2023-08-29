---
title: Responsibility sharing for Web hosting service
excerpt: "Shared responsibility between OVHcloud and the customer for the use of the Web hosting service"
updated: 2023-08-28
---

## Objective

The RACI below details shared responsibilities between OVHcloud and the customer for Web Hosting Service. This shared model can help relieve the customer’s operational burden

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
| Choose the adapted service for your usages | RA |  |
| Decide the domain name you will use for the web site you want to host | RA |  |
| Choose if a one click module need to be installed on the hosting | RA |  |
| Add the relevant options if needed (CDN, DNS Anycast, WebCloud DB...) | RA |  |
| Choose SSL certificate type | RA |  |


### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Produce, route, deliver, configure and maintain physical infrastructure, platform and manage resource availability |  | RA |
| Install, configure (initial configuration) and deliver resources to customer in accordance with the service subscribed | I | RA |
| Send the initial access means to the customer | I | RA |
| Personalize the access credentials | RA |  |
| Choose service location | I | RA |

#### 2.2. Reversibility model


| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Choose how you will install the web application in accordance with your reversibility objectives | RA |  |
| Install manually your web application | RA |  |
| Install with 1-click module your web application | A | R |
| Provide standard protocols and according documentation for importing and exporting data | I | RA |
| Import data using standard protocol | RA |  |

#### 2.3. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Setup your web application (database link, admin session of the web application...) | RA |  |
| Setup the terms and conditions of your web application | RA |  |
| Update service configuration following needs, using OVHcloud manager or API | RA |  |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Publish content on your web application| RA |  |
| Provide the relevant informations to the users about cookies, and their personal data usage when relevant | RA |  |
| Manage platform availability with enough resource to provide service subscribed by customer |  | RA |
| Manage updates of the plateform (security and others) |  | RA |
| Manage updates of web application (security and others) | RA |  |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Create, modify, remove accounts in your web application for your customers | RA |  |
| Create, modify, remove technical accounts in OVHcloud manager | RA | I |
| Create, modify, remove FTP/SSH accounts in OVHcloud manager | RA | I |


##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Check the ressources used for your web application | RA |  |
| Check the content of your web application | RA |  |
| Check the overall plateform availability and performance |  | RA |
| Provide service logs with retention defined in service informations |  | RA |
| Save & keep logs according to legal retention depends on running Web application | RA |  |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Check if the storage allowed is enough for your web application | RA |  |
| Perform technical backup of storage and device maintenance |  | RA |


##### **3.1.5. Connectivity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Check if the servers used for your web application are online |  | RA |
| Manage gateway (emails, web) availability |  | RA |
| Check if the web application is up and running | RA |  |


##### **3.1.6. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage the personal data processing register | RA |  |
| Ensure content in your web application comply with law and regulations of your country and users country | RA |  |
| Manage security of the platform (intrusion, malware, security update..) |  | RA |
| Manage security of the Web app (intrusion, malware, security update..) | RA |  |
| Ensure that the content provided by the customer trough the service respect law & OVHcloud terms and conditions | RA |  |


##### **3.1.7. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage the platform (hardware, OS) |  | RA |
| Maintain a business continuity and disaster recovery plan for hosted services in accordance with the business criticity of the web application | RA |  |
| Manage automatic management systems for the infrastructure provided |  | RA |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Mitigate DDoS attack | I | RA |
| Restore the web application after a defacing or any other content attack | RA |  |
| Restore the service in case of server farm deficiency | I | RA |

#### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Update the server farm (low level, OS, platform) |  | RA |
| Comply with Web Hosting lifecycle policy of software used to provide the service |  | RA |
| Update the web application | RA |  |

### 4. Reversibility

#### 4.1. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Schedule reversibility operations | RA |  |
| Manage continuity of your web application | RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Migrate/transfer data | RA |  |
| Manage reversibility operations | RA |  |

### 5. End of service

#### 5.1. Destroying configurations

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Delete web and database servers configuration  | I | RA |

#### 5.2. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Destroy web application data |  | RA |
| Destroy metadata |  | RA |
