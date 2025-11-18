---
title: "Reversibility Policy for the Dedicated PoD-SecNumCloud product"
updated: 2025-08-06
---

## Objective

This document describes the reversibility policy for the Dedicated PoD-SecNumCloud product covering the OVHcloud offer Bare Metal PoD qualified SecNumCloud.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## List of features

Features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
2. **OVHcloud implementations** that require adaptation to a new migration environment.
3. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

### 1. Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Bare Metal Provisioning | Direct deployment of operating systems via Ironic (openstack open-source component) on physical servers | JSON, Rest API | **Inbound**: import configurations via CLI / API <br>**Outbound**: export configuration via CLI / API | [Getting started with a dedicated server ](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) |
| Dedicated hardware and network isolation | Exclusive access to the physical infrastructure (servers, network, racks) without shared hosting, compatible with several bare metal offers | Any type of data format | **Inbound**: OS installation, backup recovery, workload migration via standard tools (PXE, rsync, etc.). <br>**Outbound**: data export, images, VMs via standard tools, migration to any other dedicated environment |[How to secure a dedicated server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server) |
| Network configuration | Network management via Neutron (OpenStack) | JSON, Rest API | **Inbound**: definition and import of network configurations, subnets, security groups <br>**Outbound**: export of reusable network configurations to any other cloud compatible with OpenStack technology | [How to secure a dedicated server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server) |


### 2. OVHcloud Implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
|Identity and Access Management | Identity and access management via Keycloak, roles, policies, audit logs | JSON, YAML (policies) | **Inbound**: manual roles and policy adaptation during the import <br>**Outbound**: export configurations and required adaptation depending on the target's IAM model (OpenStack Keystone or other). Provision of logs following request| [Configuring Keycloak for production](https://www.keycloak.org/server/configuration-production). |
|VPN Gateway|An IPsec VPN gateway that connects external networks to the SecNumCloud infrastructure through an encrypted funnel |N/A|**Inbound**: subscribe to and use the VPN Gateway service included in the qualified scope. <br><br>**Outbound**: use the vRack service included with other OVHcloud services, or take note of the network architecture and replicate it with VLANs and another encrypted funnel.|[Introduction to SecNumCloud Connectivity](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-overview)<br><br>[VPN-SPN concept overview](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-vpn-spn)<br><br>[Personalized VPN via NSX](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx_configurer_un_vpn_via_une_gateway_edge)|
|SPN|A private network that connects the resources and services available in the SecNumCloud infrastructure to one or more sites in the SecNumCloud zone. You can also use it to connect other OVHcloud services or services hosted with a third party via the VPN Gateway.|N/A|**Inbound**: subscribe to and use the SPN service included in the qualified scope.<br><br>**Outbound**: take note of the network architecture and replicate it with the concepts of subnets and routing.|[SPN introduction and concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn)<br><br>[SPN connector](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn-connector)|
|SPN Inter-DC|An encrypted link between two sites hosting the SecNumcloud infrastructure, enabling SPNs to be connected.|N/A|**Incoming**: subscribe to and use the Inter-DC SPN service included in the qualified scope.<br><br>**Outbound**: configure your IP routing between two sites hosting the SecNumcloud infrastructure outside of OVHcloud.|[SPN InterDC option](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-spn)|

### 3. Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| OpenStack Horizon web interface | Manage an OpenStack infrastructure that provides visual dashboards for interacting with different OpenStack services. | HTML | **Incoming**: NA. User interface available by default. <br>**Outgoing**: no resource to export, dashboards are static | [Introduction to Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon) |

## List of architectures

The service offer is based on a sovereign private cloud architecture, deployed in 1, 2 or 3 physically distinct datacentres in France with physical and logical isolation. 
Each customer has one rack, network and dedicated servers, managed through a proprietary software layer and OpenStack API. The architecture supports compliance with the ANSSI SecNumCloud framework. The product requires public connectivity to enable migration of incoming or outgoing data.

Today, public connectivity is made through an additional Managed Dedicated Cloud - SecNumCloud which is a temporary solution while dedicated public connectivity will be in place.

## Partner services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**Data center expansion and Migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

No specific cancelation fees applied: deleting the service will stop the billing immediately. Any associated OVHcloud credits cannot be transferred. It is the customer’s responsibility to export their data, images, configurations and logs before deletion, as deletion is irreversible.

The default subscription period for the service is 12 months. Data can be exported before the end of this period.

## Data retention after contract termination 

After service decommission or contract termination, OVHcloud permanently deletes all data, images, volumes, configurations and logs on the service. It is therefore imperative to export all necessary data before deletion, as no restoration is possible after the fact. At the end of the service, OVHcloud performs a secure erase. This deletion will be subject to 21 calendar days’ notice.
