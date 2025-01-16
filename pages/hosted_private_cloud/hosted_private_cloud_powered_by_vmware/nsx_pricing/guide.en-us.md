---
title: Pricing and Management of OVHcloud NSX Edges
excerpt: Learn about pricing options, configuration, and customization of NSX Edges for VMware on OVHcloud
updated: 2025-01-15
---

## Objective

This documentation aims to explain the configuration options for NSX Edges and the steps to manage them within a VMware on OVHcloud environment. It also outlines technical limitations and provides guidance on how to adapt these configurations to specific needs.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager) to manage your NSX Edges.
- Use of **VMware NSX 4.1.1** to access customization options.
- A basic understanding of VMware concepts and NSX Edge features.

## General Overview

### Default Configuration

When creating a VMware environment, OVHcloud automatically provides:

- **2 Medium NSX Edges**:
   - 4 vCPU.
   - 8 GB RAM.

This default configuration meets most standard requirements for connectivity and network security.

### Customization

You can adapt your infrastructure to meet your specific needs:

1. **NSX Edge Sizes**:
   - Medium: 4 vCPU, 8 GB RAM.
   - Large: 8 vCPU, 32 GB RAM.
   - XL: 16 vCPU, 64 GB RAM.
2. **Number of NSX Edges**:
   - Minimum: 2 (default configuration).
   - Maximum: Up to **10 NSX Edges per cluster**.

### Limitations

- **1 NSX Edge cluster per vDC**.
- **10 NSX Edges maximum per cluster** (Broadcom/VMware limitation).
- NSX version 4.0.1 does not support:
   - Ordering new vDCs under NSX 4.1.1.
   - Modifying or adding NSX Edges.

## Instructions

### Steps to Customize NSX Edges

1. **Order new NSX Edges**:
   - Log in to the [OVHcloud Control Panel](/links/manager).
   - Navigate to the `Network`{.action} section of the Datacenter dashboard, then access `NSX Edges`{.action}.
   - Click on `Add an Edge`{.action} and select the desired size. All Edges must be the same size: when adding a new Edge, it will automatically match the size of existing Edges.
2. **Modify the size of existing NSX Edges**:
   - Access the list of NSX Edges in the OVHcloud Control Panel.
   - Select the Edge you want to modify.
   - Choose a new size (Medium, Large, or XL) and apply the changes.
3. **Remove unused NSX Edges**:
   - Identify the Edge to be removed in the OVHcloud Control Panel.
   - Click on `Delete`{.action} and confirm the action. **Note**: The Edge must be in resilience mode before deletion to ensure no ongoing traffic is affected.

## Go further

- For detailed information on NSX Edge features, consult the [VMware NSX technical documentation](https://www.vmware.com/products/nsx.html).
- Pricing details for NSX Edges are not included in this documentation. To access up-to-date pricing or request a quote, visit the [OVHcloud website](/links/hosted-private-cloud/vmware-prices) or contact support via the [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our [community of users](/links/community).