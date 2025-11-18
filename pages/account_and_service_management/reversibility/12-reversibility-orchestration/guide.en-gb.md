---
title: Orchestration product reversibility policy
updated: 2025-06-16
---

## Objective

This document outlines the reversibility policy for the Managed Orchestration product, covering the following OVHcloud offers: Managed Kubernetes Service (MKS) and Managed Rancher Service (MRS).

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## Feature List

The characteristics of the Managed Orchestration product are divided into three categories:

- **Main features** for which we guarantee migration capacity.
- **OVHcloud implementations** that require adaptation to a new migration environment.
- **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

### Main features

| Functionality| Description | Formats | Migration model | Documentation available |
| --- | --- | --- | --- | --- |
| **Orchestration via Kubernetes** | Cluster management via Kubernetes API (kubectl, Helm, CI/CD, etc.), CNCF compliant| YAML, JSON, OCI | **Inbound**: Deploy manifests, Helm charts, OCI images via the standard Kubernetes API.<br>**Outbound**: Export manifests, Helm charts, images via the standard API, reusable on any compatible Kubernetes cluster. | [Creating a cluster](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster)|
| **Orchestration via Rancher** | Container orchestration simplifies the deployment, management, and scaling of containerised applications. | YAML, JSON, OCI | **Inbound**: Import manifests, Helm charts, OCI images or cluster via API and user interface.<br>**Outbound**: Export manifests, Helm charts, images via API, reusable on any compatible Kubernetes cluster. | [Getting Started with Managed Rancher Service](/pages/public_cloud/containers_orchestration/managed_rancher_service/getting-started) |
| **Export/Import manifests** | Resource deployment, export and migration via standard Kubernetes YAML/JSON files | YAML, JSON | **Inbound**: Import existing manifests directly.<br>**Outbound**: Export manifests via `kubectl get -o yaml/json`, which can be used on any compatible Kubernetes cluster. |[Deploying an application](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-an-application)|
| **IAM** | Rancher management of identity and access to cluster resources via an external identity provider. | Active Directory, LDAP, OpenLDAP, Azure AD... | **Inbound**: Import or create roles and access policies via API or user interface..<br>**Outbound**: Export configurations via API or user interface. | [Configuring authentication](https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config)|

### OVHcloud implementation

| Functionality| Description | Formats | Migration model | Documentation available |
| --- | --- | --- | --- | --- |
| **Link between Identity Provider and cluster** | Connection between identity provider and cluster | JSON | **Incoming**: Configuration adaptation in OVH format before import via CLI or IHM.<br>**Outgoing**: Export configurations in OVH format, adaptation to the target environment required. | [Configuring the OIDC provider on an OVHcloud Managed Kubernetes cluster](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-oidc-provider-config) |
| **Control Plane Configuration**| Ability to change certain settings to customize the cluster. | N/A | **Incoming**: Configuration of certain Kubernetes Control Plane settings via an OVHcloud-specific API.<br>**Outgoing**: Not directly exportable, rewriting settings in the target environment.| [Creating a cluster](/pages/public_cloud/containers_orchestration/managed_kubernetes/creating-a-cluster) |
| **Private network and vRack** | The vRack, or virtual rack, is a private VLAN technology that enables the connection between OVHcloud services available on the Managed Kubernetes service dataplane | N/A | **Inbound**: Managed Kubernetes services are included by default in vRack.<br>**Outbound**: Take note of the network architecture and reproduce it with VLANs.| [Using vRack Private Network ](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-vrack) |
| **Logging** | Action tracking in Kubernetes. Rancher logs are not accessible to the customer.| N/A | **Incoming**: N/A<br>**Outgoing**: Logs forwarding can be configured with the need to integrate with the OVHcloud Logs Data Platform service. | [Managed Kubernetes Service Audit Logs Forwarding](/pages/public_cloud/containers_orchestration/managed_kubernetes/forwarding-audit-logs-to-logs-data-platform) |
| **Add-ons and specific operators** | Some operators/add-ons deployed via the OVHcloud Marketplace or specific to OVHcloud | YAML, JSON, Helm | **Inbound**: Installation possible if compatible.<br>**Outbound**: Adaptation or replacement by equivalents on the target (limitation to Standard Rancher for Rancher). |
| **Node pool** | Ability to create a node pool.| N/A | **Inbound**: Configure the node pool via the OVHcloud interface.<br>**Outbound**: Reuse the node pool format in an equivalent environment |[Managing nodes and node pools](/pages/public_cloud/containers_orchestration/managed_kubernetes/managing-nodes) |

### Specific features

| Functionality | Description | Formats | Migration model | Documentation available |
| --- | --- | --- | --- | --- |
| **OVHcloud Control Panel/API**| Managed via OVHcloud Control Panel/API| N/A | **Inbound**: N/A<br>**Outbound**: Scripts and APIs to be rewritten for the target environment, manual management required. | [OVHcloud API Specification](https://api.ovh.com/console/?section=%2FallDom&branch=v1)|
| **Rancher OVHcloud Edition** | Rancher Limited Use Offer in OVHcloud. | N/A | **Inbound**:: Feature configuration if available.<br>**Outbound**: Scripts/API to rewrite for the target, manual management required.| [Managed Rancher Service](/links/public-cloud/rancher) |
| **Infrastructure as Code** | Automated deployment via OVHcloud-specific Terraform modules for managed services, or via Terraform Kubernetes or Rancher modules for open-source services. | N/A | **Inbound:** Scripts to be adapted for other providers <br> **Outbound:** Terraform configurations need to be rewritten. | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs) |
| **Anti-DDoS** | Anti-DDoS is a set of equipment and means put in place to absorb denial of service attacks. It includes traffic analysis, “vacuuming” to a specialized network, and mitigation, powered by VAC technology developed by OVHcloud. | N/A | **Incoming:** The anti-DDoS system is a component of our infrastructure, enabled by default. No action is required. <br> **Outgoing:** Order and configure an anti-DDoS solution with the new provider.| [Anti-DDoS infrastructure](/links/security/ddos) |

## List of architectures

OVHcloud Managed Orchestration is based on managed, multi-node Kubernetes clusters with high availability, auto-scaling, centralized management, and private network integration (vRack). The main monitoring, logging and CI/CD tools are integrated. Architectures support multi-cloud migration and hybrid deployment.

The managed orchestration service runs in a single region from among several regions, available from OVHcloud. You can manage multiple clusters in multiple regions (provided by OVHcloud or other providers) via the Managed Rancher Service running in a single region.

## Partner Services

OVHcloud partners are listed under the keyword **“Migrate to the cloud”** in the [Dedicated Partner directory](/links/partner).

OVHcloud also offers a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

Billing on a pay-per-use basis. It stops when the customer no longer consumes resources. No specific cancellation fees apply: deleting the service will stop the billing immediately. Any associated OVHcloud credits cannot be transferred.

After the service has been cancelled, OVHcloud frees up its resources, making it impossible to retrieve the data. It is the customer’s responsibility to export their configurations, manifests and images prior to termination, due to the release of resources.

If Managed Rancher Service is used, the billing will include a minimum amount, even if it does not orchestrate any clusters.

## Data retention after termination of contract

After deleting the service or terminating the contract, OVHcloud frees the cluster resources. It is therefore imperative to export all necessary data and configurations before deletion, as no post-removal restore is possible.
