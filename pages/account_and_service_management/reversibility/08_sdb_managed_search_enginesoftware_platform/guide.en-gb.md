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

| Feature                  | Description                                  | Formats       | Migration Model                                                                                                                                           | Documentation Available |
|--------------------------|----------------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| **Platform as a Service**     | Fully managed NoSQL engine for indexing, content search, and data analysis managed by OVHcloud.                         | JSON (S3 snapshots)    | Incoming: Create a source snapshot, migrate via RFS to Managed OpenSearch.<br>Outgoing: OVHcloud snapshot exportable to any compatible OpenSearch cluster via RFS or native tools. | [Opensearch - Getting Started](https://docs.opensearch.org/docs/2.18/migration-assistant/deploying-migration-assistant/getting-started-data-migration/)<br>[Managed OpenSearch - Getting started](https://support.us.ovhcloud.com/hc/en-us/articles/21890623420947-OpenSearch-Getting-started) |
| **Standard REST API Access** | Access via OpenSearch REST API (port 9200).                                                                             | JSON                   | Incoming: Direct connection from existing tools/applications.<br>Outgoing: Data extraction via API for migration to another cluster. | [API OVH - Opensearch](https://eu.api.ovh.com/console/?section=%2Fcloud&branch=v1#get-/cloud/project/-serviceName-/database/opensearch) |
| **Manual Snapshots**          | Manual snapshot creation via API or Dashboard.                                                                          | JSON (S3, external storage) | Incoming: Restore from an external snapshot.<br>Outgoing: Snapshot exportable to any OpenSearch environment.  | [API OVH - Opensearch](https://eu.api.ovh.com/console/?section=%2Fcloud&branch=v1#get-/cloud/project/-serviceName-/database/opensearch) |
| **Standard Plugins**          | List of open source plugins (ICU Analysis, Phonetic Analysis, etc.) activatable/deactivatable, compatible with Managed OpenSearch. | Official OpenSearch plugins | Incoming: Activate plugins compatible with target version.<br>Outgoing: Reusable plugins if supported by new environment. | [OVH plugins comptibility](https://help.ovhcloud.com/csm/en-public-cloud-databases-opensearch-capabilities?id=kb_article_view&sysparm_article=KB0049264#opensearch-clients-and-plugins-compatibility) |


## OVHcloud Implementation

| Feature         | Description                                                                                                       | Available Formats | Migration Model                                                                                                                          | Documentation Available |
|------------------|-------------------------------------------------------------------------------------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| **OVH Automatic Backups**      | Daily backups managed by OVHcloud (retention period varies depending on the offer).                      | Internal OVHcloud Snapshots | Incoming: Not applicable.<br>Outgoing: Create a new service, perform a local restore from OVHcloud snapshot, then manually export to the new environment. | [Public Cloud Databases - Automatic backups](https://help.ovhcloud.com/csm/fr-public-cloud-databases-configure-vrack?id=kb_article_view&sysparm_article=KB0048824)
| **vRack**              | The vRack, or virtual rack, is a private VLAN technology that enables interconnection between OVHcloud services. | N/A                    | **Inbound:** Managed Grafana services are included by default in vRack.  <br> **Outbound:** Note the network architecture and replicate it using VLANs. | [V(x)LAN creation](https://help.ovhcloud.com/csm/fr-vmware-vlan-creation?id=kb_article_view&sysparm_article=KB0045480)<br>[Public Cloud Databases](https://help.ovhcloud.com/csm/fr-public-cloud-databases-configure-vrack?id=kb_article_view&sysparm_article=KB0048824) |
| **Metrics**                    | Metrics collection integrated into the OVHcloud infrastructure.                                           | Prometheus metrics        | Incoming: Not applicable.<br>Outgoing: Metrics export is possible, but reconfiguration is needed on the new platform.                        |[OpenSearch - Surveillez votre infra](https://help.ovhcloud.com/csm/fr-public-cloud-databases-opensearch-logstash?id=kb_article_view&sysparm_article=KB0049298) |
| **OVHcloud ACLs**              | Access control management via OVHcloud interface.                                                        | N/A                       | Incoming: Manually recreate rules via OVHcloud interface.<br>Outgoing: Convert ACL rules to the target providerâ€™s format.                     | [Access Control List](https://help.ovhcloud.com/csm/fr-public-cloud-databases-opensearch-capabilities?id=kb_article_view&sysparm_article=KB0049278#access-control-acl) |


## Specific Features

| Function               | Description                                                                           | Formats Available | Migration Model                                                                                   | Documentation Available |
|------------------------|---------------------------------------------------------------------------------------|--------------------|----------------------------------------------------------------------------------------------------|--------------------------|
| **Infrastructure as Code** | Automated deployment via OVHcloud-specific Terraform modules                           | N/A                | **Inbound migration:** Scripts need to be adapted for other providers.  <br> **Outbound migration:** Configuration rewrite required for Terraform.                             | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs)                      |
| **Managed Updates by OVHcloud** | OpenSearch version management handled by OVHcloud. | N/A | **Inbound:** Check compatibility. <br> **Outbound:** Migration is the clientâ€™s responsibility. |[OVH capabilities and limitations](https://help.ovhcloud.com/csm/fr-public-cloud-databases-opensearch-capabilities?id=kb_article_view&sysparm_article=KB0049278)  |
| **Anti-DDoS** | Anti-DDoS is a set of tools and mechanisms designed to absorb denial-of-service attacks. It includes traffic analysis, "scrubbing" through a specialized network, and mitigation handled by the VAC technology developed by OVHcloud.                                                  | N/A                | **Inbound migration:** The anti-DDoS system is part of our infrastructure and is enabled by default. No action is required.  <br> **Outbound migration:** Order and configure an anti-DDoS service with the new provider.             | [Anti-DDoS Protection](https://www.ovh.com/fr/anti-ddos/)<br>[Anti-DDoS technologie](https://www.ovh.com/fr/anti-ddos/technologie-anti-ddos.xml)                        |



## List of Architectures

Managed OpenSearch offers multi-node clusters (up to 3 nodes with the Business plan), with data replication for high availability. Automatic sharding is managed via the number of replicas configured per index. Architectures include:

- **Dedicated Cluster**: Logical resource isolation by project.
- **vRack Integration**: Secure interconnection with other OVHcloud services.
- **Vertical Scalability**: Node upgrades (RAM, storage) through the OVHcloud interface.



## Partner Services

OVHcloud partners are listed under the keyword **"Cloud Migration"** in the dedicated partner directory.

OVHcloud also offers a dedicated service: [**OVHcloud Professional Services**](https://www.ovhcloud.com/fr/professional-services/).



## Cost and Fees

- **No termination fees**: There are no additional charges related to data migration by default.
- Billing stops as soon as the service is terminated.



## Data Retention After Contract Termination

OVHcloud does not retain any data after the deletion of a Managed OpenSearch cluster. Snapshots (automatic or manual) are permanently deleted. A prior manual export is mandatory to preserve the data.

Primary instances are deleted immediately, and backups are retained for a period ranging from 2 days to one month, depending on the options specified in the contract.
> **Important:** Clients cannot rely on these backups for data restoration.  
> OVH does not guarantee the usability or availability of backups for restoring customer data after the termination of the service.

