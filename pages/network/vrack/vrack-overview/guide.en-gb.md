---
title: "OVHcloud vRack - Overview and Key Concepts"
excerpt: "Understand what the OVHcloud vRack is, how it connects your cloud services through a private network, and what you can build with it"
updated: 2026-03-04
---

## Objective

This guide introduces the OVHcloud vRack, its core concepts, and its role as the backbone of private networking across OVHcloud infrastructure. You will learn what a vRack is, which services it connects, what technical capabilities it offers, and how to get started with common use cases.

## Introduction to the OVHcloud vRack

The OVHcloud vRack (virtual rack) is a free private network solution that allows you to connect multiple OVHcloud services to each other through a secure, isolated Layer 2 network. Regardless of their physical location across OVHcloud data centres, eligible services grouped within the same vRack can communicate over private IP addressing — as if they were connected to the same physical switch.

A vRack is delivered within minutes and is identified by a name in the format `pn-xxxxxx`.

### Which services does the vRack connect?

The vRack acts as a bridge between OVHcloud's major product families:

- **Dedicated Servers** — Bare metal servers (High Grade, Scale, Advance ranges) communicate privately within the vRack. Each server's vRack interface is identified by its MAC address in the OVHcloud Control Panel.
- **Public Cloud** — Instances, including those deployed via Terraform or the OpenStack CLI, can be attached to a vRack private network. New Public Cloud projects are automatically delivered with a vRack.
- **Hosted Private Cloud powered by VMware** — When a Hosted Private Cloud infrastructure is delivered, its datacenter is automatically included in a vRack. vRack-capable VLANs appear as Distributed Port Groups in the vSphere client.
- **Managed Bare Metal** — Similar to Hosted Private Cloud, Managed Bare Metal infrastructures are automatically included in a vRack and come with 11 default VLANs (VLAN10 through VLAN20).
- **Nutanix on OVHcloud** — Each Nutanix cluster is delivered with its own vRack. Clusters can be moved to a different vRack to interconnect with other OVHcloud services.
- **Managed Kubernetes** — OVHcloud Managed Kubernetes clusters can be placed inside a vRack private network at cluster creation time.

### How the vRack leverages other OVHcloud network products

Beyond connecting compute resources, the vRack integrates with other OVHcloud network services:

- **OVHcloud Connect** — Extends the vRack to your on-premises infrastructure or to other cloud providers (AWS, Azure, GCP) via dedicated private links. See the [OVHcloud Connect guides](/pages/network/ovhcloud_connect_revamp/4.1_simple) for architecture options.
- **OVHcloud Load Balancer** — Can be placed inside a vRack to load-balance traffic across backend servers using private IP addresses. Configuration is done via the OVHcloud APIv6.
- **Additional IP** — Public IP address blocks (IPv4 and IPv6) can be routed through the vRack port, allowing you to assign public IPs to services across multiple servers within the same vRack.

### Architecture overview

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 420" font-family="Arial, sans-serif" font-size="11">
  <rect width="820" height="420" fill="#f8f9fa" rx="8"/>

  <!-- vRack central -->
  <rect x="280" y="150" width="260" height="120" rx="12" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2.5"/>
  <text x="410" y="185" text-anchor="middle" font-weight="bold" fill="#2e7d32" font-size="16">OVHcloud vRack</text>
  <text x="410" y="210" text-anchor="middle" fill="#555" font-size="10">Private L2 Network</text>
  <text x="410" y="228" text-anchor="middle" fill="#555" font-size="10">Up to 4,000 VLANs</text>
  <text x="410" y="246" text-anchor="middle" fill="#555" font-size="10">pn-xxxxxx</text>

  <!-- Dedicated Servers -->
  <rect x="20" y="40" width="180" height="70" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="110" y="65" text-anchor="middle" font-weight="bold" fill="#1565c0">Dedicated Servers</text>
  <text x="110" y="85" text-anchor="middle" fill="#555" font-size="10">Bare Metal · VLANs · Jumbo Frames</text>

  <!-- Public Cloud -->
  <rect x="620" y="40" width="180" height="70" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="710" y="65" text-anchor="middle" font-weight="bold" fill="#1565c0">Public Cloud</text>
  <text x="710" y="85" text-anchor="middle" fill="#555" font-size="10">Instances · Kubernetes</text>

  <!-- Hosted Private Cloud -->
  <rect x="20" y="300" width="180" height="70" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="110" y="325" text-anchor="middle" font-weight="bold" fill="#1565c0">Hosted Private Cloud</text>
  <text x="110" y="345" text-anchor="middle" fill="#555" font-size="10">VMware · Nutanix</text>

  <!-- Managed Bare Metal -->
  <rect x="620" y="300" width="180" height="70" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="710" y="325" text-anchor="middle" font-weight="bold" fill="#1565c0">Managed Bare Metal</text>
  <text x="710" y="345" text-anchor="middle" fill="#555" font-size="10">vSphere · Distributed Port Groups</text>

  <!-- OVHcloud Connect -->
  <rect x="20" y="165" width="180" height="55" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="110" y="190" text-anchor="middle" font-weight="bold" fill="#e65100">OVHcloud Connect</text>
  <text x="110" y="205" text-anchor="middle" fill="#555" font-size="9">On-premises · AWS · Azure · GCP</text>

  <!-- Load Balancer -->
  <rect x="310" y="340" width="200" height="55" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="410" y="365" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Load Balancer</text>
  <text x="410" y="380" text-anchor="middle" fill="#555" font-size="9">Private backend farms</text>

  <!-- Additional IP -->
  <rect x="620" y="165" width="180" height="55" rx="6" fill="#fce4ec" stroke="#c62828" stroke-width="1.5"/>
  <text x="710" y="190" text-anchor="middle" font-weight="bold" fill="#c62828">Additional IP</text>
  <text x="710" y="205" text-anchor="middle" fill="#555" font-size="9">Public IP blocks via vRack</text>

  <!-- Arrows to vRack -->
  <line x1="200" y1="75" x2="280" y2="170" stroke="#555" stroke-width="1.5" marker-end="url(#av)"/>
  <line x1="620" y1="75" x2="540" y2="170" stroke="#555" stroke-width="1.5" marker-end="url(#av)"/>
  <line x1="200" y1="192" x2="280" y2="200" stroke="#555" stroke-width="1.5" marker-end="url(#av)"/>
  <line x1="620" y1="192" x2="540" y2="200" stroke="#555" stroke-width="1.5" marker-end="url(#av)"/>
  <line x1="200" y1="335" x2="280" y2="250" stroke="#555" stroke-width="1.5" marker-end="url(#av)"/>
  <line x1="620" y1="335" x2="540" y2="250" stroke="#555" stroke-width="1.5" marker-end="url(#av)"/>
  <line x1="410" y1="270" x2="410" y2="340" stroke="#555" stroke-width="1.5" marker-end="url(#av)"/>

  <defs>
    <marker id="av" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## What you can do with the OVHcloud vRack

### VLANs and network segmentation

The vRack supports up to **4,000 VLANs** (VLAN IDs 0 to 4000), allowing you to segment traffic between different environments, applications, or tenants within the same vRack.

- On **Dedicated Servers**, the default VLAN is **0**. Creating additional VLANs requires the `8021q` kernel module on Linux or NIC Teaming on Windows. See [Creating multiple VLANs in a vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
- On **Hosted Private Cloud** and **Managed Bare Metal**, OVHcloud delivers **11 VLANs by default** (VLAN10 through VLAN20). Additional VLANs can be created via the vSphere client.
- On **Public Cloud**, VLAN IDs are set at the infrastructure level via the OVHcloud Control Panel or APIv6. There is no need to tag a VLAN directly on a Public Cloud instance.

> [!primary]
>
> For a Public Cloud instance and a Dedicated Server to communicate over the vRack, they must be tagged with the **same VLAN ID**. The default VLAN ID for Dedicated Servers is 0.
>

### IP addressing

You can use any **private IP address range** within the vRack. The default DHCP range for Public Cloud private networks is `10.0.0.0/16`, but custom ranges are supported. IP address pools should be separated by region (e.g., `192.168.0.x` for SBG1, `192.168.1.x` for GRA1).

In addition to private addressing, **public IP blocks** (Additional IP) can be routed through the vRack port. Once added to the vRack, an IP block is no longer attached to a physical server — its IPs can be distributed across any server in the same vRack.

- [Configuring an IP block in a vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)
- [Configuring an IPv6 block in a vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack)
- [Configuring a public IP block in a vRack on a Public Cloud instance](/pages/public_cloud/public_cloud_network_services/configuration-06-configure-ip-block-vrack-to-instance)

### Jumbo Frames

The vRack supports **Jumbo Frames** with an MTU of up to **9,000 bytes**, reducing routing overhead and optimising throughput for high-bandwidth workloads.

> [!warning]
>
> The MTU size must be **identical on all hosts in the same subnet**. Mismatched MTU settings will cause fragmentation and packet loss.
>

See [Configuring Jumbo Frames in vRack](/pages/bare_metal_cloud/dedicated_servers/VRACK_MTU_Jumbo_Frames).

### Private bandwidth

Compatible Dedicated Servers have a **guaranteed minimum private bandwidth of 1 Gbps** on the vRack. This can be upgraded (or downgraded) via the OVHcloud API.

> [!primary]
>
> Dedicated Servers in the **APAC region** already come with **unmetered 25 Gbps private bandwidth** and are not eligible for bandwidth changes.
>

See [Upgrade and downgrade private bandwidth (vRack) via the OVHcloud API](/pages/bare_metal_cloud/dedicated_servers/manage_bandwidth_vRack_api).

### IP block announcement zone

The announcement zone (region) of an IP block within a vRack can be changed via the OVHcloud API. This controls which OVHcloud data centre location the IP block is announced from.

See [Change the announcement of an IP block in vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_change_zone_announce).

### Management interfaces

The vRack can be administered through multiple interfaces:

| Interface | Capabilities |
|---|---|
| **OVHcloud Control Panel** | Order vRack, add/remove services, create private networks, manage VLANs |
| **OVHcloud APIv6** | Full lifecycle management: order, attach projects, create VLANs/subnets, manage bandwidth |
| **OpenStack API / Horizon** | Deploy instances with vRack interfaces, attach/detach network interfaces |
| **OpenStack CLI** | Create private networks and subnets via Neutron commands |
| **Terraform** | Deploy vRack-connected infrastructure using the OpenStack provider |
| **vSphere client** | Manage VLANs and Distributed Port Groups for Hosted Private Cloud and Managed Bare Metal |

> [!warning]
>
> VLANs are managed at the OVHcloud infrastructure level. They **cannot** be created or modified through Horizon or the OpenStack APIs — only through the OVHcloud Control Panel or OVHcloud APIv6.
>

### High-level workflow

Setting up a vRack follows this general workflow:

1. **Order a vRack** — Free of charge. Order via the OVHcloud Control Panel (`Bare Metal Cloud` > `Network` > `vRack`) or via the OVHcloud APIv6. Delivery takes a few minutes.
2. **Add eligible services** — Select the Dedicated Servers, Public Cloud projects, Hosted Private Cloud datacenters, or other compatible services to include in the vRack.
3. **Create private networks and VLANs** — Define the VLANs, subnets, and DHCP settings for your private networks.
4. **Configure network interfaces** — Set up private IP addresses on each server or instance at the OS level (static or DHCP).
5. **Test connectivity** — Verify private communication between services using `ping` and confirm routing with `traceroute`.

For detailed step-by-step procedures, refer to the product-specific guides:

- [Configuring the vRack on your Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)
- [Configuring vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)
- [Configuring vRack for Public Cloud using the OVHcloud API](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api)
- [Using Private Cloud within a vRack](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/using_private_cloud_in_vrack)
- [Using Managed Bare Metal within a vRack](/pages/bare_metal_cloud/managed_bare_metal/using-vrack)

### Limitations

- The vRack is a **global L2 network** and does not support zone or region-level resilience.
- **Local zones** do not support the vRack.
- vRack features may be **unavailable or limited** on servers of the **Eco** product line.
- **Security groups** are not supported on vRack private networks in Public Cloud.
- Once an **OVHcloud Load Balancer** is linked to a vRack, its farms can **no longer communicate with servers via public IP addresses** — only private IP addresses within the vRack.
- In **Hosted Private Cloud**, VM Network-to-VM Network or VM Network-to-vRack vDC connections within the **same geographical zone** across different Hosted Private Cloud services are not supported. See [vRack compatibility with Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vrack_and_hosted_private_cloud).

## Use cases

### 1. Hybrid infrastructure: Public Cloud instances and Dedicated Servers

Connect Public Cloud instances and Dedicated Servers in the same vRack to build a hybrid infrastructure. For example, run compute-intensive workloads on bare metal while using Public Cloud instances for web frontends — all communicating over a private network without traversing the internet.

- [Configuring the vRack between the Public Cloud and a Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)
- [Configuring vRack for Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack)

### 2. Private Kubernetes cluster with backend database

Deploy a Managed Kubernetes cluster inside the vRack and connect it to a Public Cloud instance running a database. Application pods communicate with the database over the private network, eliminating public network exposure and reducing latency.

- [Using vRack Private Network with Managed Kubernetes](/pages/public_cloud/containers_orchestration/managed_kubernetes/using-vrack)
- [Working with vRack example - Managed Kubernetes and Public Cloud instances](/pages/public_cloud/containers_orchestration/managed_kubernetes/vrack-example-k8s-and-pci)

### 3. Multi-site Hosted Private Cloud with on-premises connectivity

Interconnect multiple Hosted Private Cloud datacenters or Nutanix clusters across OVHcloud regions using the vRack, and extend the private network to your on-premises infrastructure with OVHcloud Connect. This enables private VM migration, disaster recovery, and hybrid cloud operations.

- [Using Private Cloud within a vRack](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/using_private_cloud_in_vrack)
- [Interconnect Nutanix clusters through the vRack](/pages/hosted_private_cloud/nutanix_on_ovhcloud/45-vrack-interconnection)
- [OVHcloud Connect - Simple architecture](/pages/network/ovhcloud_connect_revamp/4.1_simple)

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our [community of users](/links/community).
