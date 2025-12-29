---
title: "Choosing the right OVHcloud Managed Kubernetes Plan: Free or Standard"
excerpt: "Explore OVHcloud Managed Kubernetes plans: Free and Standard. Discover which plan suits your cloud projects and get started quickly."
updated: 2025-12-01
---

## Objective

This guide provides an overview of OVHcloud Managed Kubernetes Service (MKS) plans, aiming to present the available plan options **Free** and **Standard** and their primary characteristics. It is intended to help readers understand the purpose of each plan and navigate the differences without making recommendations.

## Free vs Standard Plan Comparison

OVHcloud Managed Kubernetes Service (MKS) offers two plans, **Free Plan** and **Standard Plan**, designed to address different workloads and use cases. This section highlights their key differences, focusing on architecture, availability, and scalability.

### Control Plane

The control plane orchestrates the Kubernetes cluster, handling scheduling, scaling, and API requests. The Free plan provides a single zone managed control plane suitable for development or small projects. In contrast, the Standard plan includes cross-availability-zone (AZ) resilience, ensuring the cluster continues to operate even if one AZ experiences an outage.

Example: A Standard plan cluster can remain fully functional during an AZ failure, whereas a Free plan cluster relies on a single zone.

### Availability

Availability measures the expected uptime of the service. The Free plan offers a 99.5% SLO, appropriate for non critical workloads. The Standard plan provides a 99.99% SLA at General Availability, making it suitable for production environments that require high reliability.

Example: A Free plan cluster may experience roughly 43 minutes of downtime per month, while a Standard plan cluster reduces this to about 4 minutes.

### etcd Storage

etcd maintains cluster state and configuration. The Free plan uses a shared etcd storage with a maximum capacity of 400 MB, which suffices for small deployments. The Standard plan uses dedicated etcd storage up to 8 GB, supporting larger clusters and heavier workloads.

### Maximum Cluster Size

Cluster size defines the number of worker nodes in the Kubernetes cluster. The Free plan supports up to 100 nodes, suitable for learning, testing, or small-scale projects. The Standard plan scales up to 500 nodes, enabling medium to large production deployments.

### Regional availability

Regional availability determines the number of zones on which the cluster is deployed. The Free plan is limited to a single zone, while the Standard plan is deployed across three availability zones, improving resilience and minimising the impact of outages at the zone level.

Example: A cluster with the Standard plan can maintain application continuity if a zone goes down, while a cluster with the Free plan would go down.

### Summary

The following table summarizes the key differences between the Free plan and the Standard plan of OVHcloud Managed Kubernetes Service (MKS):

| Plan                  | Free                                                | Standard                                  |
| --------------------- | --------------------------------------------------- | ----------------------------------------- |
| ControlPlane          | Managed                                             | Managed & Cross-AZ resilient              |
| Availability          | 99,5% SLO                                           | 99,99 SLA (at General Availability stage) |
| etcd                  | Shared, up to 400MB                                 | Dedicated, up to 8GB                      |
| Max cluster size      | Up to 100 nodes                                     | Up to 500 nodes                           |
| Regional availability | Single-zone regions for now                         | 3-AZ region for now                       |

This summary provides a quick overview of the differences between the Free plan and the Standard plan, highlighting architecture, availability, storage, cluster size, and regional deployment.

## Go further

To have an overview of the OVHcloud Managed Kubernetes service, visit the [OVHcloud Managed Kubernetes page](/links/public-cloud/kubernetes).

To explore detailed quotas, resource limits, and regional restrictions for the Free plan and Standard plan, consult our [Known limits](/pages/public_cloud/containers_orchestration/managed_kubernetes/known-limits) guide. This guide provides in-depth technical specifications to help you plan and scale your Kubernetes clusters effectively.

To deploy your first application on your Kubernetes cluster, we invite you to follow our guides to [configure default settings for kubectl](/pages/public_cloud/containers_orchestration/managed_kubernetes/configuring-kubectl-on-an-ovh-managed-kubernetes-cluster) and to [deploy a Hello World application](/pages/public_cloud/containers_orchestration/managed_kubernetes/deploying-hello-world).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).