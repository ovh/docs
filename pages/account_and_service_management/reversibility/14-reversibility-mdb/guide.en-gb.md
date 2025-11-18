---
title: "Reversibility Policy for the Managed Message Broker product"
updated: 2025-06-19
---

## Objective

This document describes the reversibility policy of the Managed Message Broker product covering the OVHcloud Managed Kafka offer.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## List of features

The features of the Managed Document Database product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
1. **OVHcloud implementations** that require adaptation to a new migration environment.
1. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

### 1 - Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| High-availability message streaming | Reliable and distributed transmission of real-time data. | Avro, JSON, Protocol, Text | **Incoming**: Loading via Kafka producers . <br> **Outgoing**: Export via Kafka consumers or replay tools. | [Kafka - Capabilities and limitations](/pages/public_cloud/public_cloud_databases/kafka_01_capabilities)|
| Open-source Kafka compatibility | Use the standard Apache Kafka engine without modification. | Native Kafka (standard API) | **Incoming**: Direct integration with existing Kafka tools.<br> **Outgoing**: Standard Kafka export|[Kafka getting started documentation](https://kafka.apache.org/documentation/) |
| Partitioning and replication | Manage partitions and replicas for fault tolerance | N/A | **Incoming**: Configure partitions/replicas on import. <br> **Outbound**: Export and deploy to another cluster. | [Kafka - Capabilities and limitations](/pages/public_cloud/public_cloud_databases/kafka_01_capabilities) |
| Configuring data retention | Custom message retention duration setting | NA | **Incoming**: Adjusting parameters. <br> **Outgoing**: Migration limited to messages that are still stored. | [Kafka - Advanced settings references](/pages/public_cloud/public_cloud_databases/kafka_03_advanced_parameters_references)|
| Data Schema Registry | Central repository for storing data schemas | Karapace Native Format | **Inbound**: NA.<br> **Outbound**: NA. | [Schema registry](/pages/public_cloud/public_cloud_databases/kafka_01_capabilities)|

### 2 - OVHcloud implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| OVHcloud Dashboard | Manage topics, ACLs and monitor via web interface. | N/A | **Incoming**: Initial configuration via API and web interface.<br> **Outbound**: Administration interrupted after termination. Reproduce configurations manually in target environment | [Dashboards - Capabilities and limitations](/pages/public_cloud/public_cloud_databases/grafana_01_capabilities)<br> [Dashboards - Advanced settings references](/pages/public_cloud/public_cloud_databases/grafana_03_advanced_parameters_references)|
| Integrated monitoring | Performance dashboards integrated into the OVHcloud interface. | N/A | **Inbound**: Metrics Configuration.<br> **Outbound**: Configuration to recreate in the target environment. | [Analytics - Kafka](/products/public-cloud-data-analytics-kafka) |
| Network Security (ACL) | IP filtering and SSL/SASL authentication. | IP, SASL/SSL | **Incoming**: Rule configuration. <br> **Outbound**: Export ACLs to replicate. | [Kafka - Getting started](/pages/public_cloud/public_cloud_databases/kafka_02_getting_started)|

### 3 - Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| OVHcloud private network (vRack) | Connect to other OVHcloud services via a private network. | N/A | **Incoming**: vRack configuration. <br> **Outgoing**: Non-transferable feature. | [vRack](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |
| Anti-DDoS | Anti-DDoS is a set of tools and mechanisms designed to absorb denial of service attacks. It includes traffic analysis, "clean-up" via a specialized network, and mitigation using VAC technology developed by OVHcloud. | N/A | **Incoming**: The anti-DDoS system is part of our infrastructure and is enabled by default. No action is required.<br> **Outgoing**: Order and configure an anti-DDoS solution from the new provider. | [OVHcloud DDoS Protection](/links/security/antiddos) |

## List of architectures

The Managed Kafka service is based on a distributed architecture with Kafka brokers distributed across several availability zones. High availability is ensured via partition replication, with integrated monitoring for message flow stability. Two architecture plans are offered: a Business plan based on three nodes and an Enterprise plan based on six nodes.

## Partner Services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory ](/links/partner) under the "**cloud migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Costs and fees

The features described in the tables are available at no cost, unless otherwise specified, and are freely usable by the customer.
The service is billed according to the resources used: the selected instance and the storage. No cancellation fee will be applied, but you will need to export the data before cancelling/decommissioning the service.

## Data retention after termination of contract

After the service has been cancelled, all Kafka messages and configurations are permanently deleted. The customer must perform a full export before termination, as OVHcloud does not store any data.
