---
title: "Reversibility Policy for the AI Managed Container  product"
updated: 2025-07-10
---

## Objective

This document describes the reversibility policy for the AI Managed Container product covering the OVHcloud AI Deploy and AI Training offers.

This policy aims to implement the general reversibility principles and our compliance with the SWIPO IAAS Code of Conduct for cloud providers.

## List of features

Features of the product line fall into three categories:

1. **Core features** for which we guarantee migration capacity.
2. **OVHcloud implementations** that require adaptation to a new migration environment.
3. **Specific features** that cannot be guaranteed for migration as they are related to the OVHcloud environment or involve custom developments.

### 1. Core features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| OCI container deployment and management | AI models deployment or workloads via standard Docker/OCI images, orchestrated on a native Kubernetes cluster or compatible API | OCI, Docker, YAML, JSON | **Inbound**: direct import of OCI/Docker images via API, CLI (Docker, Kubectl, Helm, etc.), or via CI/CD pipeline. <br>**Outbound**: Export of OCI/Docker images, YAML/JSON manifests and configurations which can be used on any Kubernetes cluster or OCI platform. | [Build & use a custom Docker image](/pages/public_cloud/ai_machine_learning/deploy_tuto_12_build_custom_image) |
| Standard API usage | Manage workloads, services, configurations and monitoring via the Kubernetes API (kubectl, Helm, etc.) | YAML, JSON, OCI | **Inbound**: Direct deployment of manifests, charts, AI models via standard API. <br>**Outbound**: Export of manifests, charts and configurations via kubectl that can be used on any compatible Kubernetes cluster. | [Build & use a custom Docker image](/pages/public_cloud/ai_machine_learning/deploy_tuto_12_build_custom_image) |
| OCI/Docker Image Registry | Using public/private registries for container images and AI models | OCI, Docker | **Inbound**: Pull/extract images from any compatible registry. <br>**Outbound**: Push/export images to any other compatible registry. | [Portfolio of AI apps and models](/pages/public_cloud/ai_machine_learning/deploy_guide_05_app_portfolio) |
| Using API, CLI and Infrastructure as Code | Deployment, management and automation via the OVHcloud API, CLI or Infrastructure as Code (Terraform) | YAML, JSON, HCL | **Inbound**: Configurations, scripts and templates. <br>**Outbound**: Export scripts, templates and configurations that are reusable on other target environments | [Features, Capabilities and Limits](/pages/public_cloud/ai_machine_learning/deploy_guide_01_capabilities) |

### 2. OVHcloud Implementations

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Access and secret management | Kubernetes RBAC model and secret management or use of OVHcloud solutions | YAML, JSON | **Inbound**: Adapt roles, secrets and permissions to the environment <br>**Outbound**: Export configurations, adaptation required according to the target environment | [AI Training - Getting started](/pages/public_cloud/ai_machine_learning/training_guide_02_howto_submit_job) |
| Managed auto-scaling and load balancing | Horizontal and vertical auto-scaling, integrated OVHcloud load balancing | YAML, JSON | **Inbound**: Adaptation of auto-scaling and loadbalancing parameters in the environment <br>**Outbound**: Export configurations, adaptation to auto-scaling and loadbalancing in the target environment | [AI Deploy - Scaling strategies](/pages/public_cloud/ai_machine_learning/deploy_guide_04_scaling_strategies) |
| Integrated monitoring and logging | Integrated supervision (Prometheus, Grafana, Loki, etc.) via OVHcloud managed services | Prometheus metrics, logs, JSON | **Inbound**: Adapt dashboards and agents <br>**Outbound**: Export metrics, logs and reconfigure the new environment | [AI Deploy -Features, Capabilities and Limits](/pages/public_cloud/ai_machine_learning/deploy_guide_01_capabilities)<br><br>[AI Training - Features, capabilities and limitations](/pages/public_cloud/ai_machine_learning/training_guide_01_capabilities/) |
| Managed Persistent Storage | OVHcloud Block storage, Object Storage integration, specific storage classes | PVC, YAML, JSON | **Inbound**: Adapt PersistentVolumeClaims to the environment. <br>**Outbound**: Export data via snapshot. Export, adapt volumes to the target (e.g. migration via CSI driver or rsync) | [AI Deploy - Features, Capabilities and Limits](/pages/public_cloud/ai_machine_learning/deploy_guide_01_capabilities) |

### 3. Specific features

| **Function** | **Description** | **Available formats** | **Migration model** | **Available documentation** |
| --- | --- | --- | --- | --- |
| Infrastructure as a Code | Automated deployment via Terraform modules specific to OVHcloud | NA | **Inbound**: Adapt scripts <br>  **Outbound**: Rewrite Terraform configurations required | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs){.external} |
| Anti-DDoS protection| Anti-DDoS is a set of tools and mechanisms designed to absorb denial of service attacks. It includes traffic analysis, "clean-up" via a specialized network, and mitigation using VAC technology developed by OVHcloud. | N/A | **Inbound**: The anti-DDoS system is part of our infrastructure and is enabled by default. No action is required. <br> **Outbound**: Order and configure an anti-DDoS solution from the new provider. | [Anti-DDoS OVHcloud](/links/security/antiddos) |

## List of architectures

The product is based on managed Kubernetes clusters, with full orchestration of AI workloads (deployment, scaling, monitoring). Architectures support horizontal and vertical auto-scaling, integrated load balancing, high availability, GPU/CPU integration for training and inference and access to persistant storage services (Block storage, Object Storage). CI/CD integration, multi-model management, and access governance are native.

## Partner services

The OVHcloud partners concerned are listed in the [OVHcloud partners directory](/links/partner) under the "**Data center expansion and Migration**" keywords.

OVHcloud also has a dedicated service: [OVHcloud Professional Services](/links/professional-services).

## Cost and fees

Billing on a pay-per-use basis. It stops when the customer no longer consumes resources. No specific cancellation fees apply: deleting the service will stop the billing immediately. Any associated OVHcloud credits cannot be transferred.
After the service has been cancelled, OVHcloud frees up its resources, making it impossible to retrieve the data. It is the client’s responsibility to export his configurations, manifests and images prior to termination, due to the release of resources.

## Data retention after contract termination

After deleting the service or contract termination, OVHcloud deletes permanently all images, models, logs, metrics and configurations stored on its environment. Automatic backups and logs are also deleted. It is therefore imperative to export all the necessary data before deletion, as you cannot restore it after these actions.
