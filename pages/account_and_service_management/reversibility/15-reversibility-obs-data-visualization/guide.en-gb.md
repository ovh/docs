---
title: "Reversibility Policy for the Managed Data Visualization product"
updated: 2025-06-19
---

## Objective

This document describes the reversibility policy for the Managed Data Visualization product covering the OVHcloud Managed Grafana offer.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## List of features

The features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
1. **OVHcloud implementations** that require adaptation to a new migration environment.
1. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

### 1 - Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Platform As A Service | Platform for implementing dynamic dashboards and graphics. | JSON, YAML | **Incoming**: Direct connection via API to import dashboards/configurations. <br> **Outbound**: Export resources via REST API to any compatible Grafana environment. | [Offer presentation](/links/public-cloud/dashboards) |
| Standard plugins | Open-source plugins (Prometheus, Loki, etc.) that can be activated. | Official Grafana plugins | **Incoming**: Enable plugins compatible with the target version. <br> **Outgoing**: Reusable plugins if supported by the new environment. |[Grafana Plugins](https://grafana.com/grafana/plugins/all-plugins/)|
| Dhasboards and alerts | Manual creation of dashboards and alert rules via the Grafana interface | JSON | **Inbound**: Import JSON files via API or interface. <br> **Outgoing**: Export dashboards/alerts to JSON for migration. | [Dashboards - Capabilities and limitations](/pages/public_cloud/public_cloud_databases/grafana_01_capabilities) |
| Manual backups | Manual backup generation via external tools (e.g. grr) | JSON, SQLite | **Incoming**: Restoring from a JSON or SQLite file. <br> **Outgoing**: Manually exporting data for migration outside of an OVHcloud hosting environment. | [Grafana documentation](/products/public-cloud-data-analytics-grafana) |

### 2 - OVHcloud implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| OVHcloud private network (vRack) | The vRack, or virtual rack, is a private VLAN technology that enables the connection between OVHcloud services | N/A | **Inbound**: Network Connection Configuration <br> **Outbound**: Note the network architecture and reproduce it with VLANs | [vRack](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |
| Logs traceability | Log storage in OVHcloud Managed OpenSearch | JSON (OpenSearch) | **Incoming**: NA <br> **Outgoing**: Manually export logs via OpenSearch API, then re-index into the target environment. | [Using Grafana with Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana)|
| Automatic backups | Backups managed by OVHcloud, that cannot be exported directly outside the ecosystem. | Internal snapshots | **Incoming**: Not applicable for direct import. <br> **Outgoing**: Requires a restore on an OVHcloud instance, then manual export (SQL dump) to migrate to another environment. | [Public Cloud Databases - Automatic backups](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) |


### 3 - Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Infrastructure As a Code | Automated deployment via Terraform modules specific to OVHcloud | N/A | **Incoming**: Scripts to be adapted for other providers.<br> **Outbound**: Terraform configurations need to be rewritten. | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs) |
| Anti-DDoS | Anti-DDoS is a set of tools and mechanisms designed to absorb denial of service attacks. It includes traffic analysis, "clean-up" via a specialized network, and mitigation using VAC technology developed by OVHcloud. | N/A | **Incoming**: The anti-DDoS system is part of our infrastructure and is enabled by default. No action is required. <br> **Outgoing**: Order and configure an anti-DDoS solution from the new provider. | [OVHcloud DDoS Protection](/links/security/antiddos) |

## List of architectures

Managed Grafana service offer is deployed in single-node mode (essential plan). Integration with other OVHcloud services (OpenSearch, databases) is native via vRack.Architectures include:

- Vertical scalability: Increase resources (CPU/RAM) via the OVHcloud interface.
- Cross-service integration: Centralize logs and metrics in managed OpenSearch.

## Partner Services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**cloud migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Costs and fees

No termination fee: No extra billing linked to the default data migration. Billing stops as soon as the service is terminated.
Features described in the tables are available at no cost, unless otherwise specified, and are freely usable by the customer.

## Retention of data after termination of contract

> [!warning]
>
> OVHcloud does not guarantee the use and availability of backups to restore customer data after termination of the service.

OVHcloud does not store any data after deleting a Managed Data Visualization cluster.
Automatic and manual snapshots are irreversibly deleted. A manual export is required to preserve the data.
