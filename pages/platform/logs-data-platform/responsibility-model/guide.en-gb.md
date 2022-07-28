---
title: Responsibility model
excerpt: 'Shared responsibilities between OVHcloud and the customer'
slug: responsibility-model
section: Get Started
order: 3
---

**Last updated July 28th, 2022**

The Logs Data Platform is an interface for collecting, indexing and analyzing logs. Wherever your logs come from, you can use the platform to choose different entry points depending on the protocol, security level and format. You can analyze and use data with a variety of different APIs and web interfaces.

The RACI below details shared responsibilities between OVHcloud and the customer for Logs Data Platform services.
This shared model can help relieve the customer’s operational burden.

## RACI definition

| Roles |
| --- |
| R: Is in charge of carrying out the process |
| A: Guarantees the successful completion of the process |
| C: Is consulted during the process |
| I: Is informed of the results of the process |

For your information, a **Log forwarder agent** is considered as a tool (full software, script or library) that is required to forward logs to LDP.

### 1. Before subscription

#### 1.1. Specify service as needed

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Learn about the capabilities and limitations of the service detailed in the OVHcloud documentation or commercial page | RA | I |
| Choose service location | RA | I |
| Choose service offer: standard or enterprise | RA | I |

### 2. Service availability

#### 2.1. Install service

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Install, configure, and deliver functional components of the service | I | RA |
| Produce, route, deliver and maintain physical machines, virtual machines and hosting buildings |  | RA |

#### 2.2. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Offer standard solutions and protocols for importing and exporting data using API for logs and dashboards | I | RA |
| Decide to use [ldp-archive-mirror](https://github.com/ovh/ldp-archive-mirror){.external} for data export and local analysis  | RA |  |

#### 2.3. Customer Information System setup

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Choose service options following business needs | RA | I |
| Order and configure streams on Logs Data Platform | RA | I |
| Define retention policy following legal requirements (for hot storage and cold storage) | RA |  |
| Install and configure the log forwarder agent and adapt its buffer following needs and purpose of the processing | RA |  |

### 3. Service usage

#### 3.1. Operations

##### **3.1.1. Daily operations**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Ensure network accessibility of the Platform |  | RA |
| Decide to add/delete resources to the existing service |  | RA |
| Manage confidentiality, integrity of data hosted on the service | RA |  |
| Manage risks of the log forwarder agent | RA |  |
| Manage backups on the service (logs and dashboards) | RA |  |
| Manage backups on service management infrastructure |  | RA |
| Adapt log forwarder agent configuration following IS evolution | RA |  |

##### **3.1.2. Access management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage OVHcloud teams’ physical access to infrastructures |  | RA |
| Manage OVHcloud teams’ logical access to infrastructures | I | RA |
| Manage access to the OVHcloud Control Panel (Manager, network acls, MFA, API, token, ..) | RA | I |
| Manage access to management interfaces specific to Logs Data Platform (streams, dashboards,...) | RA | I |
| Manage security risks of the log forwarding configuration (transport, protocols, ...) | RA |  |
| Manage network configuration of the subscribed data gathering tool(s) | RA | I |

##### **3.1.3. Monitoring**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Monitor the proper functioning of log forwarder agent | RA |  |
| Monitor physical (e.g. devices) and virtual resource performance |   | RA |
| Manage hardware sizing on the service |   | RA |
| Monitor service performance |   | RA |
| Keep logs of the Control Plane that manages Logs Data Platform |   | RA |

##### **3.1.4. Storage**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Keep the content sent to Logs Data Platform adequate, relevant and appropriate | RA |  |
| Ensure data immutability | I | RA |
| Perform storage device maintenance |  | RA |
| Create, modify, control, restore, delete internal backup jobs on management infrastructure | I | RA |

##### **3.1.5. Connectivity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Operate network management systems (architecture, implementation, software and hardware maintenance for deployed public and private networks) |  | RA |
| Manage IP addressing plan on hosted data gathering tools | RA | I |
| Manage IP addressing plan on dedicated clusters (enterprise) | RA | I |

##### **3.1.6. Management**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Provide inventory of the service used | I | RA |
| Manage service register following legal requirements | RA |  |
| Manage the physical security of equipment and infrastructures hosted at OVHcloud | I | RA |
| Maintain Standard Logs Data Platform services and their extensions | I | RA |
| Maintain Enterprise Logs Data Platform services and their extensions | CI | RA |
| Ensure that external tools remain compatible with the Logs Data Platform major updates | RA |  |

##### **3.1.7. Business continuity**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage automatic management systems for the infrastructure provided | I | RA |
| Maintain a business continuity and disaster recovery plan for hosted services (logs, dashboards, ...) | RA | I |

#### 3.2. Event management

##### **3.2.1. Incidents**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Intervene with Logs Data Platform managed elements | I | RA |
| Manage incidents and their consequences on log forwarder agent component | RA |  |
| Notify incidents on the LDP service with ticketing system | RA | I |

##### **3.2.2. Changes**

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Deploy patches, update software and information systems hosted in Logs Data Platform (standard) | I | RA |
| Deploy patches, update software and information systems hosted in Logs Data Platform (enterprise) | CI | RA |
| Deploy patches, update and configure the log forwarder agent using Logs Data Platform | RA |  |
| Perform preventive interventions on managed elements of Logs Data Platform | I | RA |

### 4. Reverting

#### 4.1. Reversibility model

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Schedule reversibility operations | RA |  |
| Choose fallback infrastructures | RA |  |

#### 4.2. Data recovery

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Manage reversibility operations : manual extract, using API, [ldp-archive-mirror](https://github.com/ovh/ldp-archive-mirror){.external} | RA |  |
| Migrate/transfer data | RA |  |

### 5. End of service

#### 5.1. Configuration destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Delete Logs Data Platform objects configuration (streams, dashboards, index, ...) | RA | I |
| Decommission log forwarder agent | RA |  |
| Decommission of the client service following contract termination | I | RA |

#### 5.2. Data destruction

| **Activity** | **Customer** | **OVHcloud** |
| --- | --- | --- |
| Destroy indexed activity | I | RA |
| Destroy long term archives | I | RA |
| Destroy configuration data | I | RA |

## Go further

- Getting Started: [Quick Start](../quick-start){.ref}
- Documentation: [Guides](../){.ref}
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs)){.external}