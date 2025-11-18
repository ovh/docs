---
title: "Technical capabilities and limitations of Public VCF as-a-Service"
excerpt: "Learn about the technical capabilities and limitations of Public VCF aaS (aka Public VCF as-a-Service)"
updated: 2025-09-25
---

## Objective

**This guide explains the technical capabilities and limitations of Public VCF aaS (aka Public VCF as-a-Service), including resource constraints and configuration restrictions.**

## Requirements

Before getting started, review the following guides to better understand Public VCF as-a-Service:

- [Public VCF as-a-Service - Fundamental Concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts)
- [Public VCF as-a-Service - Network Concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts)
- [Creating a VM on Public VCF as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-first-vm-creation)
- [Creating network components via Public VCF as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation)


## Instructions

### General limitations

| Resource | Standard | Advanced | Premium | Comments |
|----------|---------|----------|---------|----------|
| vCPU (per VM) | 32 | 32 | 32 | Number of available vCPUs per VM. |
| RAM (per VM) | 128 GB | 128 GB | 128 GB | Maximum RAM per VM (min. 0.5 GB). |
| Network Cards (per VM) | 10 | 10 | 10 | Maximum number of network adapters per VM. |
| Edge Gateway (per organization) | N/A | 5 | 5 | Maximum number of Edge Gateways per organization. |
| Public IPs (per vDC) | N/A | 2 | 2 | Number of available public IPs per vDC. |
| Snapshots (per VM) | 1 | 1 | 1 | Maximum of 1 snapshots per VM. |
| VMs (per vApp) | 128 | 128 | 128 | Maximum number of VMs allowed per vApp. |
| VMs (per organization) | 2000 | 4000 | 4000 | Maximum number of VMs per organization. |
| vApps (per organization) | 10,000 | 10,000 | 10,000 | Maximum number of vApps per organization. |
| Segments (per organization) | 40 | 40 | 40 | Maximum number of segments per organization. |

> **Note**: When creating a snapshot that includes the VM's memory, storage usage can quickly add up.
> For example, if you have 1 VM with 1 GB of RAM and a 10 GB disk, and you create a snapshot that includes memory, your storage usage will be:
> 10 GB (disk) + 1 GB (VM swap) + up to 10 GB (disk snapshot) + 1 GB (memory snapshot) = **22 GB total**.

### Hardware limitations

| Resource | Standard | Advanced | Premium | Comments |
|----------|---------|----------|---------|----------|
| vCPU Frequency Min | 1 GHz | 1 GHz | 1 GHz | In Roadmap. |
| vCPU Frequency Max | 3 GHz | 3 GHz | 3 GHz | By Default. |
| Storage per VM (VMDK) | 1.5 TB | 1.5 TB | 1.5 TB | Storage limit on VMDK. |

## Limitations of integration with external applications

### Backup Solution

With Public VCF as-a-Service, you cannot use a backup tool other than our managed Veeam for VCD tool. Refer to the following guide for more information: [Public VCF as-a-Service - Backups with Veeam Data Platform](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-backup).

### VMware API

Third-party products relying on vSphere APIs to function (such as Naviko, Rubrik or Zerto (non-exhaustive list)) are currently not usable within the Public VCF as-a-Service product.

### Certifications

At the launch of the service, no specific certification will be applicable to the Public VCF as-a-Service by OVHcloud.
However, supporting HDS, ISO27001, SOC2, or PCI-DSS certifications is one of the objectives of our roadmap.

## Go further

If you need training or technical assistance to implement our solutions, please contact your Technical Account Manager or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) channel.

Join our [community of users](/links/community).
