---
title: "Comparison and resilience of Deployment Modes - Understanding 3-AZ / 1-AZ / Local Zones (EN)"
excerpt: "Explore OVHcloud's deployment modes"
updated: 2025-03-21
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

OVHcloud offers several deployment models to meet different needs in terms of resilience, availability, performance and latency. This guide provides an overview of the main features of the deployment options available: 1-AZ, 3-AZ and Local Zones. It details their specific features, benefits and limitations to help you make the best strategic choices for your cloud deployments.

By offering a clear and detailed comparison, this guide will enable users to make an informed decision based on their specific priorities, whether it's ensuring high availability for critical applications, minimizing costs while providing fault tolerance, or meeting local compliance and ultra-low latency requirements.

Additionally, we will highlight the real-world challenges users may face, such as impacts on business continuity, scalability of services, and cost management in each deployment mode. This guide is particularly useful for cloud architects, IT managers, and developers looking to optimize their infrastructure based on specific business and technical needs.

## Concepts

What is an **AZ** ?

An Availability Zone (AZ) is a unit of infrastructure made up of one or more isolated or separate data centres located in a specific geographical region where public cloud services are hosted and operated.

OVHcloud provides a robust and adaptable infrastructure, designed to meet a wide variety of use cases through deployment models that balance cost-effectiveness, redundancy and fault tolerance. These different options allow users to choose the approach best suited to their resilience, availability and performance requirements.

1. **1-AZ Region**: These single-zone regions are ideal for workloads where cost optimisation is a priority. They are ideally suited to general needs such as storage, backup or applications whose availability requirements do not call for multi-zone redundancy. They offer a good compromise between reliability, performance and cost control.
2. **3-AZ Region**: This model is designed for mission-critical applications requiring high availability and resilience. By replicating data across three distinct availability zones, 3-AZ regions significantly reduce the risk of downtime, guaranteeing business continuity even in the event of incidents affecting one or more zones. This level of redundancy is particularly well suited to demanding production environments. Find out more [here](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture).
3. **Local Zones**: These infrastructures are specifically designed to meet needs requiring ultra-low latency or strict geographical constraints. By placing resources close to end-users, Local Zones are ideal for use cases such as high-end computing, video games, content delivery or solutions requiring local regulatory compliance.

Each of these options is based on the fundamental principles of resilience, performance and fault tolerance.

## Deployment modes

> [!primary]
>
> OVHcloud offers a number of regional deployment models, designed to meet the varying needs of businesses by offering different levels of redundancy, fault tolerance and geographical distribution. These options provide flexibility, scalability and resilience, enabling customers to align their infrastructure with their operational and strategic priorities.

### 1-AZ Region

#### Infrastructure and Redundancy

A 1-AZ region is **a single availability zone made up of one or several data centres in the same geographical area**. It uses redundancy on the infrastructure side (power, network, and cooling). However, this configuration remains vulnerable to failures affecting the entire data centre.

Services and data are protected against localised incidents thanks to effective internal redundancy, but a major or total breakdown of a data centre could compromise the availability of services. Note that each OVHcloud data centre has redundant power and network supply to avoid those breakdowns. 

![1az_region_schema](images/1az_region_schema.png){.thumbnail}

> [!primary]
>
> In a 1AZ region, your instances or other resources can be distributed across several data centres within the same availability zone. This architecture allows you to benefit from local redundancy, while remaining in the same availability zone.

#### Characteristics

- **Erasure Coding:** Implements mechanisms such as replication or erasure coding (depending on the service) to ensure continuity in case of hardware failures. Data is distributed across multiple servers and storage units within the availability zone to mitigate the impact of localized issues.
- **Cost-Effectiveness:** This deployment model is cost-efficient, ideal for general-purpose workloads, development environments, and backups. It prioritizes affordability over enhanced fault tolerance provided by multi-AZ configurations.
- **Operational simplicity**: A single zone of availability facilitates management while offering minimal tolerance to internal failures.

#### Limitations

**Risk of outage:** Dependence on a single availability zone can affect critical services if the data centre suffers a complete outage.
**No regional redundancy**: Unlike multi-AZ deployments, there is no replication of data or services between different availability zones in the region.

> [!success]
>
> To improve resilience for critical applications in a 1-AZ Region, consider using asynchronous replication for added protection. This can help reinforce both application and data resiliency. Another option to mitigate this risk is using a [**3-AZ deployment mode**](#3azregion).

#### Redundancy Specifications for 1-AZ

| Specification         | Description                                                               |
|-------------------|---------------------------------------------------------------------------|
| **Redundancy Type**   | Redundancy on the infrastructure side (power, network, and cooling).<br> Local data replication within the zone for resilience.                                        |
| **Fault Tolerance**   | Protects against disk and server failures, but not against total data centre failure.           |
| **Data protection** | Data replicated within the AZ to guarantee local resilience.                                    |
| **Limits** | No inter-regional or inter-zone protection; dependent on a single AZ.                                    |

#### Scaling

In a 1-AZ Region, scaling options are somewhat limited due to the single availability zone. Here's how scaling works in this setup:

- **Vertical scaling:** Increasing the capacity of existing resources (CPU, memory) is a common solution, but it does not guarantee increased fault tolerance.
- **Horizontal scaling:** Although this is possible within the AZ, it does not provide redundancy between several availability zones.
- **Geographical constraint:** All resources remain confined to the same availability zone.

#### Architecture example

/// details | Internal management application

> [!primary]
>
> **Scenario:**
>
> An organization utilizes the 1-AZ Region mode for its internal management application and backup services. This setup is ideal for applications that do not require high availability 24/7, but still need redundancy to protect against hardware failures.

Architecture:

- **Single Availability Zone (AZ):** Made up of several interconnected data centres, it guarantees resilience in the face of localised breakdowns, while at the same time providing a model suited to moderate application requirements.
- **Internal replication:** Data is replicated internally to protect against disk or server failures within the zone.
- **Backup integration:** The application uses object storage for regular backups, ensuring that data can be restored if necessary.
- **Compute Instances:** Basic application tasks are handled by compute instances in the same AZ, with auto-scaling for resource management.

///

### 3-AZ Region

#### Infrastructure and Redundancy

> [!warning]
>
> Deploying instances in a 3AZ configuration requires a manual intervention to configure each instance. Ensure that each instance is correctly configured in the respective availability zones to guarantee optimal distribution and redundancy.

A 3-AZ region consists of **three independent** and distinct availability zones, designed according to strict separation standards. Each zone has isolated power, cooling and network systems, guaranteeing true fault isolation. These zones are geographically distributed at an optimised distance (30 km) to prevent any impact of a regional disaster on several zones simultaneously.

This configuration ensures high availability of services, even in the event of the complete failure of an availability zone. Thanks to this separation, the architecture enables efficient replication of data and services between zones, while maintaining low latency to guarantee optimum application performance. So if one zone fails, the others continue to process traffic and maintain performance.

![3az_region_schema](images/3az_region_schema.png){.thumbnail}

#### Characteristics

- **High Availability:** Data remains available for both read and write operations, even in the event of a zone failure. This architecture is ideal for applications requiring fault tolerance, as the data is replicated across all three availability zones. Even in the event of a disruption in one zone, regional service continuity is maintained. Zonal services can be leveraged for high availability.
- **Fault isolation:** Each availability zone is independent in terms of power, networking, and cooling, which means issues in one zone won’t directly impact the others. This leads to a higher level of redundancy and ensures that service interruptions are minimized.
- **Optimised latency:** Low latency between zones ensures fast, reliable communications, ideal for demanding workloads.

#### Limits

- **Higher cost:** This configuration requires a higher initial investment, due to the duplication of services and the implementation of inter-zone replication mechanisms.
- **Not resilient to a complete regional failure:** Although robust in the face of local failures, a 3-AZ Region does not guarantee tolerance in the event of a failure affecting the entire region.
- **Management complexity:** Workloads must be designed to take advantage of this architecture, which may require additional expertise and effort.

#### Redundancy Specifications for 3-AZ

| Specification         | Description                                                               |
|-------------------|---------------------------------------------------------------------------|
| **Type of redundancy**      | Infrastructure redundancy (power, network and cooling) on 3 separate sites using the 3AZ model, increasing availability and fault tolerance. <br> Enable inter-zone data replication for resilience                 |
| **Fault tolerance** | Guarantees resilience against the loss of an entire zone, with automatic failover.                      |
| **Data protection** | Data replicated synchronously between zones to guarantee continuous availability. |
| **Limits** | Does not protect against complete regional failure; requires multi-regional architecture for maximum resilience. |

**Inter-zone replication:**

In this architecture, resources are tripled (3N) and distributed between three distinct availability zones (AZ). Data can be replicated synchronously between zones, guaranteeing total resilience against the loss of an entire zone thanks to automatic failover. However, this architecture does not protect against a complete regional failure.

#### Scaling

In a 3-AZ Region, scaling is more flexible, offering the ability to scale horizontally across multiple availability zones. Here’s what you can expect:

- **Optimized horizontal scaling:** With replication and distribution of services across three independent zones, horizontal scaling becomes more seamless, ensuring high availability, optimal performance, and efficient resource distribution.
- **Optimized load balancing:** With multiple availability zones, load balancing and traffic distribution are optimized, ensuring better performance and resilience.
- **Increased resilience:** The ability to scale between zones means you can meet growing demand while maintaining fault tolerance.

#### Architecture example

/// details | E-commerce platform

> [!primary]
>
> **Scenario:**
>
> An e-commerce platform that demands high availability and performance. This deployment mode ensures service continuity even in the event of a failure in one entire availability zone.

Architecture:

- **Three availability zones (AZs):** Each zone is geographically isolated to avoid the impact of a local disaster.
- **Data replication:** Synchronous replication of data between the three zones can be implemented to guarantee continuous availability.
- **Distributed instances:** Application instances are deployed in each zone, ensuring redundancy and high availability.
- **Load balancers:** Load balancers manage user traffic by distributing requests between zones, even in the event of a failure.
- **Regional backups:** Backups are outsourced to a regional S3 solution to protect against total data loss.

///

### Local Zones

#### Infrastructure and design

Local Zones bring OVHcloud services closer to some end users, reducing latency and enabling data to be processed locally. They are designed to offer optimal performance for applications requiring low latency and proximity to users, while meeting local compliance requirements.

Each Local Zone operates as a single availability zone with a limited set of services, making it ideal for scenarios where latency is a priority, but multi-AZ redundancy is not essential.

![localzone_schema](images/localzone_schema.png){.thumbnail}

#### Characteristics

- **Reduced latency:** Local Zones ensure fast response times to users close to them, ideal for real-time applications such as online gaming or video conferencing.
- **Local compliance:** Data can be processed and stored in specific locations, making it easier to comply with location and regulatory requirements.
- **Regional extension:** Local Zones can be used as an extension of the 1-AZ or 3-AZ regions to complete critical workloads locally, while benefiting from additionnal services available in the regions.

#### Limits

- **No inter-zone redundancy:** Unlike multi-AZ regions, Local Zones do not offer redundancy between several zones, which limits service continuity in the event of a failure.
- **Single zone limitation:** Local Zones operate within a single availability zone, making them vulnerable to local failures.
- **Limited set of services:** Local Zones only offer a limited set of Public Cloud services (essentially Compute and Storage).

#### Redundancy Specifications for Local Zones

| Advantage        | Description                                           |
|------------------|-------------------------------------------------------|
| **Type of redundancy**      | Redundancy on the infrastructure side (power, network, and cooling). <br> Local data replication within the zone for resilience.             |
| **Fault tolerance**  | Guarantees continuity of operations in the event of a disk or server failure within the zone, but does not protect against a total failure of the availability zone. |
| **Data protection**| Data replicated in the zone to guarantee local availability. |
| **Limits**| No protection against global or regional failures, dependent on a single Local Zone. |

#### Scaling

In Local Zones, scaling is designed to meet the demands of low-latency applications while being restricted to a single availability zone. Here’s how scaling is structured:

- **Horizontal and vertical scalability options:** Local Zones support instance scaling, but are limited by local capacity and the lack of additional zones for load balancing.
- **Ultra-low latency:** Scaling is focused on keeping latency to a minimum, ideal for real-time workloads.
- **Planning required:** Because it is limited to a single zone, careful planning is essential to avoid saturating available resources and guarantee stable performance.

#### Architecture example

/// details | Online gaming platform or video streaming service

> [!primary]
>
> **Scenario:**
>
> A real-time online gaming platform or a video streaming service that requires ultra-low latency and high performance for users within a specific geographic region.

Architecture:

- **Local Zones:** located near the user base, significantly reducing latency and improving overall performance.
- **Internal replication:** Critical data is replicated locally within the zone to ensure resilience in the event of hardware failure.
- **Localized processing:** Application and processing servers are deployed in Local Zones to deliver optimal performance.
- **Regulated Data:** Stored within the Local Zones for compliance with data localization laws, reducing bandwidth costs.
- **Load balancers:** Traffic redirected to other Local Zones (if available) or regions to ensure minimum service continuity in the event of a local failure.

///

### Comprehensive Comparison Table

| Characteristics        | 1-AZ Region                         | 3-AZ Region                     | Local Zones                              |
|------------------------|-------------------------------------|---------------------------------|------------------------------------------|
| **Deployment Structure**   | Single availability zone            | Three independent availability zones | Single availability zone                |
| **Service available**      | All or most Public Cloud services   | All or most Public Cloud services   | Most Compute and storage services        |
| **Redundancy**             | Redundancy on the infrastructure and local data replication | Cross-zone redundancy (resources replicated between zones) and inter-zone data replication for resilience | Redundancy on the infrastructure and local data replication               |
| **Data Availability**      | Limited during data center outages, protected against server/disk failures | Maintained across zones, resilient to zone outages | Limited during data center outages, protected against server/disk failures |
| **Latency**                | Low for close end-users                            | Low for close end-users and ultra low between availability zones   | Low for close end-users |
| **Ideal Use Cases**        | Development, staging environments, cost-sensitive applications, non-critical services | High-availability applications, critical business services, disaster recovery, and mission-critical workloads | Real-time applications, edge computing, gaming, video streaming, regulatory-compliant services |
| **Cost**                   | Lower                               | Higher due to increased redundancy | Dependent on the specific Local Zones |

## Go Further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case.

Join our [community of users](/links/community) and visit our [Discord channel](https://discord.gg/ovhcloud).
