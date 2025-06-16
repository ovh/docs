**Managed Message Broker (MDB) Reversibility Policy**

**Objective**

This document is the Managed Kafka product line reversibility policy[.](https://www.ovhcloud.com/fr/enterprise/products/secnumcloud/)

This policy aims to implement the general principles of reversibility and our compliance with the [SWIPO IaaS Code of Conduct for cloud providers](https://swipo.eu/download-section/copyrighted-downloads/).

**List of features**

The functionalities of the â€œProductâ€ are divided into three categories:

* The main [features for which we guarantee you the possibility to migrate.](https://help.ovhcloud.com/csm)
* OVHcloud is currently in operation, and [the migration will require adaptations to a new environment.](https://help.ovhcloud.com/csm)
* Specified functionalities whose migration as such is impossible to guarantee because they are linked to the OVHcloud environment or specific developments.

**Main features**

| **Functionality** | **Description** | **Formats**  **Available** | **Migration model** | **Documentation available** |
| --- | --- | --- | --- | --- |
| High availability message streaming | Reliable and distributed data transmission in real time | Avro, JSON, Protobuf, Texte | **Incoming migration:** loading via Kafka producers;  **Outbound migration:** export via Kafka consumers or replay tools | [OVH KAFKA](https://docs.ovh.com/gb/en/databases/kafka/) |
| Kafka open-source compatibility | Uses the unmodified Apache Kafka engine | Native Kafka (standard API) | Incoming: direct integration with existing Kafka tools; Sortante : export standard Kafka | [Kafka](https://kafka.apache.org/documentation/) |
| Partitioning and replication | Management of partitions and replicas for fault tolerance | N/A | **Incoming migration:** configure partitions/replicas to import;  **Outbound migration:** export topology | [OVH](https://docs.ovh.com/gb/en/databases/kafka/) |
| Configurable retention | Custom definition of the retention time for messages | N/A | **Inbound migration:** parameter adjustment;  **Outbound migration:** migration limited to messages still stored | [Kafka](https://kafka.apache.org/documentation/%23configuration) |
| Kafka Schema registry | Central repository for storing data schemas | Karapace native format | **Migration entrante** : N/A  **Migration sortante** : N/A | [Schema registry](https://help.ovhcloud.com/csm/en-public-cloud-databases-kafka-capabilities?id=kb_article_view&sysparm_article=KB0048930) |

**OVHcloud Implementation**

| **Functionality** | **Description** | **Available formats** | **Migration model** | **Documentation available** |
| --- | --- | --- | --- | --- |
| OVHcloud Dashboard | Management of topics, ACL and monitoring via web interface | N/A | **Incoming** : configuration via dashboard;  **Outgoing** : access removed at termination | [OVH Kafka](OVH%20Kafka) |
| Integrated monitoring | Performance dashboards built into the OVHcloud interface | N/A | **Incoming** : metrics configuration;  **Outgoing**: configuration to be recreated | [Ovh Kafka](https://docs.ovh.com/gb/en/databases/kafka/) |
| Secure access | Access via IP allowed and SASL/SSL authentication | IP, SASL/SSL | **Incoming** : configuration of rules;  **Output** : export of ACLs to replicate | [OVH Kafka](https://docs.ovh.com/gb/en/databases/kafka/) |

**Specific features**

| **Function** | **Description** | **Available formats** | **Migration model** | **Documentation available** |
| --- | --- | --- | --- | --- |
| Private network OVHcloud (vRack) | Connection to OVHcloud services via private network | N/A | **Incoming** : configuration via vRack; **Outgoing** : feature not available outside OVH | [OVH Kafka vRack](https://docs.ovh.com/gb/en/network/vRack/) |
| Version managed by OVHcloud | Automatic updates managed by OVHcloud | N/A | **Incoming** : check compatibility;  **Outgoing** : responsibility of the client | [Kafka](https://docs.ovh.com/gb/en/databases/kafka/) |
| Configurable storage | Storage space configurable according to customer needs | N/A | N/A |  |
| Anti-DDoS | Anti-DDoS is a set of equipment and means put in place to absorb denial-of-service attacks. It includes traffic analysis, â€œaspirationâ€ to a specialized network and OVHcloud.mitigation, provided by VAC technology developed by | N/A | **Incoming migration**: The anti-DDoS system is a component of our infrastructure, enabled by default. No action required.   **Outbound migration**: Order and configure an anti-DDoS with the new provider. | [OVHcloudDDoS Protection](https://www.ovh.com/fr/anti-ddos/) |

**List of architectures**

Managed Kafka is based on a distributed architecture with Kafka brokers spread across multiple availability zones. High availability is ensured through the replication of partitions, with integrated monitoring for message flow stability.

2 plans: Business 3 knots, enterprise 6 knots

**Partner services**

OVHcloud partners are listed with the keyword â€œCloud Migrationâ€ in the [dedicated directory](https://partner.ovhcloud.com/fr/directory/).

OVH also has a dedicated service: [OVHcloud Professional Services](https://www.ovhcloud.com/fr/professional-services/)

**Cost and costs**

The features described in the tables are available free of charge, unless otherwise stated, and are freely usable by the customer.

The service is billed based on resources used: selected instance and storage. No termination fee applies, but it is imperative to export the data before termination/decommission of the service.

**Data retention after termination of the contract**

After service termination, all Kafka messages and configurations are permanently deleted. The customer must complete a full export before termination, with OVHcloud not retaining any data.

OVH does not guarantee the use and availability of backups to restore customer data after termination of the service.

Primary instances are deleted immediately and backups are kept between 2 days and one month depending on the options specified in the contract.
