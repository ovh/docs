# Reversibility Policy for the â€œManaged Data Visualizationâ€ Product

## Objective

This document outlines the reversibility policy for the product line (Product Name).

This policy aims to implement general reversibility principles and our compliance with the SWIPO IaaS Code of Conduct for cloud providers.



## List of Features

The features of the â€œProductâ€ are divided into three categories:

- **Core features** for which we guarantee migration capability.
- **OVHcloud implementations** that require adaptation to a new environment for migration.
- **Specific features** that cannot be guaranteed for migration as they are tied to the OVHcloud environment or involve custom developments.



## Core Features

| Feature                         | Description                                                                                          | Formats Available        | Migration Model                                                                                                                                             | Technology |
|---------------------------------|------------------------------------------------------------------------------------------------------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| **Platform as a Service**      | Platform enabling the setup of dashboards and dynamic visualizations.                                               | JSON, YAML           | Incoming: Direct API connection to import dashboards/configurations. <br> Outgoing: Export resources via REST API to any Grafana-compatible environment. | [OVH - Managed Data Visualization](https://www.ovhcloud.com/fr/public-cloud/grafana/)
| **Standard Plugins**           | Open source plugins (Prometheus, Loki, etc.) that can be activated.                                                | Official Grafana plugins | Incoming: Activate plugins compatible with the target version. <br> Outgoing: Plugins can be reused if supported by the new environment. | [Grafana Plugins](https://grafana.com/grafana/plugins/all-plugins/)
| **Dashboards and Alerts**      | Manual creation of dashboards and alert rules via Grafana interface.                                               | JSON                 | Incoming: Import JSON files via API or GUI. <br> Outgoing: Export dashboards/alerts in JSON for migration.   | [Dashboards - CapacitÃ©s et limitations ](https://help.ovhcloud.com/csm/fr-public-cloud-databases-grafana-capabilities?id=kb_article_view&sysparm_article=KB0048852)
| **Manual Backups**             | Manual backup generation via external tools (e.g., `grr`).                                                          | JSON, SQLite         | Incoming: Restore from JSON or SQLite file. <br> Outgoing: Manual export of data for migration outside OVHcloud. | [OVH - Manual backup](https://help.ovhcloud.com/csm/fr-documentation-public-cloud-data-analytics-grafana?id=kb_browse_cat&kb_id=574a8325551974502d4c6e78b7421938&kb_category=804a1cf0b1e312981e118a746c410dfb&spa=1) <br>[Grafana - Manual backup](https://grafana.com/docs/grafana-cloud/security-and-account-management/migration-guide/)



## OVHcloud Implementation

| Feature| Description| Formats Available| Migration Model |Documentation Available |
|------------------------|--------------------------------------------------------------------------------------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| **vRack**              | The vRack, or virtual rack, is a private VLAN technology that enables interconnection between OVHcloud services. | N/A                    | **Inbound:** Managed Grafana services are included by default in vRack.  <br> **Outbound:** Note the network architecture and replicate it using VLANs. | [V(x)LAN creation](https://help.ovhcloud.com/csm/fr-vmware-vlan-creation?id=kb_article_view&sysparm_article=KB0045480)<br>[Public Cloud Databases](https://help.ovhcloud.com/csm/fr-public-cloud-databases-configure-vrack?id=kb_article_view&sysparm_article=KB0048824) |
| **Logs**| Log storage in OVHcloud-managed OpenSearch.                                                      | JSON (OpenSearch)      | **Inbound:** Not applicable.  <br> **Outbound:** Manually export logs via OpenSearch API, then reindex in the target environment.                     | [Using Grafana with Logs Data Platform](https://help.ovhcloud.com/csm/fr-logs-data-platform-using-grafana-with-logs?id=kb_article_view&sysparm_article=KB0037695)  |
| **OVH Automatic Backups** | Backups managed by OVHcloud, not directly exportable outside the OVH ecosystem.              | Internal snapshots      | **Inbound:** Not applicable for direct import.  <br> **Outbound:** Requires restoration on an OVHcloud instance, then manual export (e.g., SQL dump) for migration. | [Public Cloud Databases - Sauvegardes automatiques ](https://help.ovhcloud.com/csm/fr-public-cloud-databases-backups?id=kb_article_view&sysparm_article=KB0048707)  |
| **OVHcloud ACLs**      | Access rights management via the OVHcloud interface.                                             | N/A                    | **Inbound:** Manually recreate rules using the OVHcloud interface.  <br> **Outbound:** Convert ACL rules to the format required by the new provider.  | [Public Cloud Databases - Sauvegardes automatiques ](https://help.ovhcloud.com/csm/fr-public-cloud-databases-backups?id=kb_article_view&sysparm_article=KB0048707)  |



## Specific Features

| Function               | Description                                                                           | Formats Available | Migration Model                                                                                   | Documentation Available |
|------------------------|---------------------------------------------------------------------------------------|--------------------|----------------------------------------------------------------------------------------------------|--------------------------|
| **Infrastructure as Code** | Automated deployment via OVHcloud-specific Terraform modules                           | N/A                | **Inbound migration:** Scripts need to be adapted for other providers.  <br> **Outbound migration:** Configuration rewrite required for Terraform.                             | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs)                      |
| **Managed Updates by OVHcloud** | Grafana version management handled by OVHcloud. | N/A | **Inbound:** Check compatibility. <br> **Outbound:** Migration is the clientâ€™s responsibility. |[Public Cloud Databases - Sauvegardes automatiques ](https://help.ovhcloud.com/csm/fr-public-cloud-databases-backups?id=kb_article_view&sysparm_article=KB0048707)  |
| **Anti-DDoS** | Anti-DDoS is a set of tools and mechanisms designed to absorb denial-of-service attacks. It includes traffic analysis, "scrubbing" through a specialized network, and mitigation handled by the VAC technology developed by OVHcloud.                                                  | N/A                | **Inbound migration:** The anti-DDoS system is part of our infrastructure and is enabled by default. No action is required.  <br> **Outbound migration:** Order and configure an anti-DDoS service with the new provider.             | [Anti-DDoS Protection](https://www.ovh.com/fr/anti-ddos/)<br>[Anti-DDoS technologie](https://www.ovh.com/fr/anti-ddos/technologie-anti-ddos.xml)                        |



## List of Architectures

Managed Grafana is deployed in **single-node mode** (Essential plan).  
Integration with other OVHcloud services (e.g., OpenSearch, databases) is natively supported through **vRack**.  
Supported architectures include:

- **Vertical scalability**: Increase CPU/RAM resources via the OVHcloud interface.
- **Cross-service integration**: Centralization of logs and metrics into OVHcloud-managed OpenSearch.


## Partner Services

OVHcloud partners are listed under the keyword **"Cloud Migration"** in the dedicated partner directory.

OVHcloud also offers a dedicated service: [**OVHcloud Professional Services**](https://www.ovhcloud.com/fr/professional-services/).



## Cost and Fees

- **No termination fees**: There are no additional charges related to data migration by default.
- Billing stops as soon as the service is terminated.



## Data Retention After Contract Termination

OVHcloud **does not retain any data** after a Managed Data Visualization cluster is deleted.  
Both **automatic and manual snapshots are permanently deleted**.  
A **manual export** must be performed in advance if data needs to be preserved.


