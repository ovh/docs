---
title: 'Public Cloud Instances - Key concepts'
excerpt: 'Learn the fundamentals of Public Cloud Compute: how instances work, available families and flavors, multi-AZ deployments, image management, SSH security, backup mechanisms, public/private networking, and Savings Plans benefits.'
updated: 2025-12-05
---

## Objectives

This guide aims at giving you a clear understanding of the core concepts required to create, configure, and manage your first OVHcloud Public Cloud Compute instances. You will learn how instances work, how to choose the right instance type, and how key elements such as images, availability zones, networking, security, and backups fit together within the OVHcloud ecosystem.

## What Is an Instance (Virtual Machine)?

An instance, or Virtual Machine (VM), is a fully isolated server running on OVHcloud’s shared physical infrastructure. It functions like a traditional server but offers the flexibility and scalability of the cloud. You choose the operating system, define the CPU, RAM, and storage resources, and deploy your applications, websites, or development environments.

Public Cloud Compute instances provide:

- On-demand creation and flexible sizing – scale resources up or down as needed.
- Pay-as-you-go billing – charged hourly or monthly based on actual usage.
- Seamless integration with OVHcloud services – including Object Storage, Networking, Backup, and more.

Instances can be managed through the OVHcloud Control Panel, the Horizon interface, API endpoints, or via automation and orchestration tools such as the OVHcloud CLI and Terraform.

## Types of Instances

OVHcloud offers multiple instance families designed to meet different workload requirements. Each family provides a range of flavors (sizes) to precisely match your resource needs.

| Types of instances | Description                      | Typical use cases                                                                                                                                                        |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| General Purpose    | Balanced CPU and Memory          | Suitable for development servers, web applications, and general business workloads. Provides a balanced ratio of CPU and RAM.                                            |
| CPU Optimized      | High Processor Performance       | Ideal for compute-intensive applications, parallel processing tasks, CI/CD pipelines, or microservices requiring high CPU frequency.                                     |
| Memory Optimized   | High Memory Capacity             | Designed for data analysis, big data workloads, and database caching. Features high RAM-to-CPU ratios and accelerated IOPS. vCores are clocked at 2 GHz or higher.       |
| Storage Optimized  | High IOPS Performance            | Equipped with NVMe storage for ultra-fast disk I/O, perfect for databases and big data applications.                                                                     |
| GPU                | Hardware-Accelerated Graphics    | Provides exceptional parallel computing performance, up to 1,000× faster than CPU for certain workloads. Suitable for AI, deep learning, and 3D rendering.               |
| Discovery          | Cost-Effective, Shared Resources | Entry-level instances with shared resources, offering stable performance at an affordable price. Great for testing environments, training, or proof-of-concept projects. |

Each instance family includes multiple sizes (flavors) to help you tailor the instance to your application’s specific resource requirements.

## Localization and Availability Zones

OVHcloud Compute instances are deployed across [multiple datacenters worldwide](/links/infrareg), ensuring high availability and proximity to your users. Examples of regions include:

- GRA – Gravelines, France
- BHS – Beauharnois, Canada
- DE – Frankfurt, Germany

**Availability Zone Types:**

| Types of zones                  | Description                                                                    | Recommended use                                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 1-AZ (Single Availability Zone) | Instances are deployed within a single zone.                                   | Simple environments, development, testing, or non-critical workloads.                                  |
| 3-AZ (Triple Availability Zone) | Instances are distributed across three redundant zones within the same region. | Production workloads requiring high availability and fault tolerance.                                  |
| Local Zones                     | Edge locations closer to end-users to reduce latency.                          | Latency-sensitive applications such as real-time data processing, gaming, or interactive web services. |

> [!primary]
> 
> **Best Practice:** For critical workloads, prefer a [multi-AZ deployment](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture) to ensure service resilience and continuity.
>

## Available System Images

When creating an instance, you select an image that includes the operating system and, optionally, pre-installed applications. OVHcloud provides a variety of images to meet diverse needs:

- **Linux Distributions:** Ubuntu, Debian, CentOS, AlmaLinux, Rocky Linux, and others. These images are ready to use for web servers, development environments, and general-purpose workloads.
- **Windows Server:** Versions with integrated licenses, allowing immediate deployment for Microsoft-based applications and enterprise workloads.
- **Pre-configured Applications:** Images that come with softwares such as cPanel, Plesk, Docker, or NVIDIA GPU Cloud (NGC). They simplify deployment and accelerate time-to-production.
- **[Custom Images](/pages/public_cloud/compute/upload_own_image):** You can import your own images in QCOW2 or RAW format, providing full control over your environment and enabling migrations, standardized templates, or specialized configurations.

**Lifecycle and Support:** OVHcloud regularly updates the image catalog. Always consult the lifecycle and end-of-support announcements to ensure your images remain secure and supported. See [here](/pages/public_cloud/compute/image-life-cycle).

## SSH Keys

SSH keys provide a secure way to access your instances without using passwords. They consist of two components:

- **Public Key:** Installed on the instance to allow access.
- **Private Key:** Kept securely on your local machine and used to authenticate the connection.

SSH authentication ensures encrypted and reliable access to your servers.

Best Practices:

- Never share your private key.
- Use a unique key for each user.
- Store your keys in a secure manager or vault.

For detailed instructions on creating and using SSH keys, refer to the [OVHcloud SSH guide](/pages/public_cloud/compute/creating-ssh-keys-pci).

## Backups

Backups protect your data and configurations against accidental loss or errors. OVHcloud provides several backup mechanisms to ensure your instances and data remain safe:

- **Backup Types:**
    - Manual Backups: Take a snapshot of your disk at any time.
    - Automatic Backups: Scheduled backups created at regular intervals.
    - Instance Creation and Restoration: Deploy a new instance directly from an existing backup.
- **Backup Locations:**
    - Local Backup: Stored within the same region as your instance.
    - Remote Backup: Automatically creates a copy of the local backup in a different region of your choice.

> [!primary]
>
> **Best Practice:** Backups are not a substitute for a [resilient architecture](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture). For critical environments, combine backups with multi-AZ replication to ensure maximum data protection and service availability.
>

## Public and Private Networks

OVHcloud Compute instances can be connected to different types of networks depending on your application needs.

| Types of networks       | Description                                                                                   | Use Cases                                                                            |
| ------------------------| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Public Network          | Instances are connected to the Internet via a public IP address.                              | Hosting websites, APIs, or providing remote access to your servers.                  |
| Private Network (vRack) | A private interconnection between your OVHcloud resources, isolated from the public Internet. | Connecting databases, backend services, or internal communication between instances. |

The vRack enables you to create a secure, isolated network, even across different regions or projects.

**Example:** Host your database on a private network while exposing only your web server on the public network.

For more detailed guidance on configuring Public Cloud networks, refer to the official [OVHcloud networking guide](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

## Savings Plans

Savings Plans let you reduce your Public Cloud Compute costs in exchange for a commitment to consistent usage over a defined period from 1 month up to 3 years.

**Key Benefits:**

- **Lower Costs:** More cost-effective than pay-as-you-go billing.
- **Automatic Application:** Savings are applied automatically to all compatible instances.
- **Flexible:** You can change instance types or sizes while keeping the benefits of your plan.

**Ideal Use Cases:**

- Stable and predictable workloads, such as production applications or business servers.
- Services with consistent resource demands that benefit from cost optimization.

Saving Plans help you optimize your budget while maintaining the performance and reliability of your cloud environment. For more details, refer to the official [OVHcloud Savings Plans guide](/pages/public_cloud/public_cloud_cross_functional/savings_plans).

## Go further

Once you are familiar with the core concepts of OVHcloud Public Cloud Compute, you can explore more advanced operations and management tasks.

- [How to create a Public Cloud instance and connect to it](/pages/public_cloud/compute/public-cloud-first-steps)
- [Managing your Public Cloud instances](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)
- [Starting an instance on an bootable volume](/pages/public_cloud/compute/start_instance_on_attached_volume)
- [Shelve or pause an instance](/pages/public_cloud/compute/suspend_or_pause_an_instance)
- [First steps with preinstalled applications](/pages/public_cloud/compute/apps_first_steps)
- [Adding cloud credit](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project)

Join our [community of users](/links/community).