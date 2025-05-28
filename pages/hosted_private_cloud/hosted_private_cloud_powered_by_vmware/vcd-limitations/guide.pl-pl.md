---
title: "Technical capabilities and limitations of Public VCF aaS (aka Managed VCD)"
excerpt: "Learn about the technical capabilities and limitations of Public VCF aaS (aka Managed VCD)"
updated: 2025-05-13
---

## Objective

**This guide explains the technical capabilities and limitations of Public VCF aaS (aka Managed VCD), including resource constraints and configuration restrictions.**

## Requirements

Before getting started, review the following guides to better understand VMware Cloud Director:

- [VMware Cloud Director - Fundamental Concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts)
- [VMware Cloud Director - Network Concepts](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts)
- [Creating a VM on VMware Cloud Director](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-first-vm-creation)
- [Creating network components via VCD](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation)


## Instructions

### General limitations

| Resource | Standard | Advanced | Premium | Comments |
|----------|---------|----------|---------|----------|
| vCPU (per VM) | 32 | 32 | 32 | Number of available vCPUs per VM. |
| RAM (per VM) | 128 GB | 128 GB | 128 GB | Maximum RAM per VM (min. 0.5 GB). |
| Network Cards (per VM) | 10 | 10 | 10 | Maximum number of network adapters per VM. |
| Edge Gateway (per organization) | N/A | 5 | 5 | Maximum number of Edge Gateways per organization. |
| Public IPs (per vDC) | N/A | 2 | 2 | Number of available public IPs per vDC. |
| Snapshots (per VM) | 3 | 3 | 3 | Maximum of 3 snapshots per VM. |
| VMs (per vApp) | 128 | 128 | 128 | Maximum number of VMs allowed per vApp. |
| VMs (per organization) | 2000 | 4000 | 4000 | Maximum number of VMs per organization. |
| vApps (per organization) | 10,000 | 10,000 | 10,000 | Maximum number of vApps per organization. |

> **Note**: When creating a snapshot that includes the VM's memory, storage usage can quickly add up.
> For example, if you have 1 VM with 1 GB of RAM and a 10 GB disk, and you create a snapshot that includes memory, your storage usage will be:  
> 10 GB (disk) + 1 GB (VM swap) + up to 10 GB (disk snapshot) + 1 GB (memory snapshot) = **22 GB total**.

### Hardware limitations

| Resource | Standard | Advanced | Premium | Comments |
|----------|---------|----------|---------|----------|
| vCPU Frequency Min | 1 GHz | 1 GHz | 1 GHz | Depends on Baremetal hardware. |
| vCPU Frequency Max | 3 GHz | 3 GHz | 3 GHz | Depends on Baremetal hardware. |
| Storage per VM (VMDK) | 1.5 TB | 1.5 TB | 1.5 TB | Storage limit on VMDK. |

## Go further

If you need training or technical assistance to implement our solutions, please contact your Technical Account Manager or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) channel.

Join our [community of users](/links/community).
