---
title: "Reversibility Policy for the Unified Data Platform product"
updated: 2025-07-08
---

**Objective**

This document describes the reversibility policy for the Unified Data Platform product covering the OVHcloud Data Platform offer.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## List of features

The features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
1. **OVHcloud implementations** that require adaptation to a new migration environment.
1. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

### 1 - Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Data Catalog | Integration of more than 60 connectors to centralize data sources | CSV, JSON, XML, Parquet, Avro, JDBC, Kafka, REST, FTP, etc. | **Inbound**: configuration of standard connectors via web interface.<br> **Outbound**: export metadata and data via API.| [Data Catalog documentation](https://docs.dataplatform.ovh.net/#/en/product/data-catalog/index) |
| Lakehouse Manager | Unified storage based on Apache, Iceberg and Trino | Parquet, ORC, Avro, Iceberg | **Inbound**: manual configuration via a web interface   <br> **Outbound**: export via Trino, Spark, or API. | [Lakehouse Manager documentation](https://docs.dataplatform.ovh.net/#/en/product/lakehouse-manager/index) |
| Data Processing Engine | ETL/ELT pipeline orchestration with Spark and Python. | Python, PySpark | **Inbound**: manual configuration via web interface or git repository connection. <br> **Outbound**: export workflows via Git or API. | [Data processing engine documentation](https://docs.dataplatform.ovh.net/#/en/product/dpe/index) |
| Analytics Manager | Create dashboards with no-code or SQL (Trino) editor. | SQL, JSON | **Inbound**: manual configuration via the web interface. <br> **Outbound**: export requests/visualizations via API. | [Analytics Manager documentation](https://docs.dataplatform.ovh.net/#/en/product/am/index) |
| Applications Services | Web application deployment and APIs (Node.js, Python, Docker). | Node.js, Python, Docker, REST | **Inbound**: manual configuration via web interface or via git repository. <br> **Outbound**: export via Git or API | [Applications services documentation](https://docs.dataplatform.ovh.net/#/en/product/app-manager/index) |

### 2 - OVHcloud implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Data Processing Engine | ETL/ELT pipeline orchestration with Spark and Python. | OVHcloud platform-specific format, no standards deployed | **Inbound**: Data imported from data catalog with manual or automatic configuration of jobs <br> **Outbound**: No export possible | [Data processing engine documentation](https://docs.dataplatform.ovh.net/#/en/product/dpe/index) |
| Identity and access management | Account management and user access on the platform | NA | **Inbound**: Configuration via the web interface <br> **Outbound**: Export user accounts in CSV format | [DATAP IAM documentation](https://docs.dataplatform.ovh.net/#/en/getting-further/project-toolkit?id=user-management) |

### 3 - Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Integrated monitoring | Monitoring and centralized performance management developed by OVHcloud.| NA | **Inbound**: Default integrated tracking interface on platform <br> **Outbound**: Logs and monitoring information cannot be exported | [Control center documentation](https://docs.dataplatform.ovh.net/#/en/product/cc/index) |

## List of architectures

OVHcloud Unified Data Platform service is based on open-source technologies such as Trino, Apache Iceberg, and Kubernetes. It is compatible with OVHcloud Public Cloud architectures.

## Partner Services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**Data center expansion and migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Costs and fees

Features described in the tables are available at no cost, unless otherwise specified and are freely usable.

OVHcloud uses pay-as-you-go pricing, with no egress fee. Billing is interrupted immediately when the service is canceled, allowing flexible cost control.

## Data retention after service termination

Once the service is canceled, all data are irreversibly deleted. It is the client’s responsibility to carry out a full backup or migration before termination.
