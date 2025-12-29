---
title: How to extend a private OVHcloud network across Public Cloud regions
excerpt: Learn how to configure a multi-region OVHcloud private network, manage VLANs and IP pools to prevent conflicts, and integrate with other OVHcloud products
updated: 2025-12-29
---

## Objective

The objective of this guide is to help OVHcloud users configure and extend a private network across multiple Public Cloud regions, while avoiding IP conflicts and ensuring network stability. It covers best practices for:

- Assigning separate IP pools per region.
- Managing VLANs across regions or other OVHcloud products.
- Using DHCP as a service for additional infrastructure, such as Bare Metal servers.
- Providing step-by-step instructions using the OVHcloud Control Panel, Horizon, OpenStack CLI, and Terraform.

**By following this guide, users will be able to deploy a secure and reliable multi-region private network with OVHcloud.**

## Background and Solution Overview

### Challenges

When extending a private network across multiple OVHcloud Public Cloud regions or connecting it to other OVHcloud products through a vRack, a major challenge arises from the way IP addressing is handled.

Public Cloud instances automatically receive their private IP addresses via OpenStack DHCP or cloud-init, and this mechanism cannot be disabled. At the same time, all private networks using the same VLAN inside a vRack must share a common address space. This means that, without proper planning, the same VLAN can end up assigning overlapping or identical IP addresses across regions or between different OVHcloud services.

To illustrate this issue, the following diagram shows an example of what must be avoided:

![problematic image](images/problematic_image.png){.thumbnail}

In this example, two Public Cloud instances in different regions and one Bare Metal server all share the same VLAN ID and have been assigned the same IP address.

When multiple machines share the same IP on the same VLAN, the network becomes unstable. Packets cannot reliably determine which machine they should reach. For example, any traffic sent to 10.1.0.2 may land on an unpredictable host, resulting in inconsistent connectivity, routing errors, and service disruption.

This problem becomes more severe as environments scale across multiple regions or products. Therefore, a structured approach to IP allocation such as dividing the subnet into dedicated per-region pools is essential to maintaining a stable, predictable and conflict-free vRack network.

### Solution Overview

To prevent IP conflicts and ensure stable communication across a stretched vRack network, each Public Cloud region must use a dedicated IP pool within the same private subnet. By segmenting the subnet into non-overlapping allocation ranges, OVHcloud ensures that OpenStack DHCP services in different regions never assign duplicate IP addresses even when all networks share the same VLAN ID.

The diagram below illustrates the corrected configuration:

![solution image](images/solution_image.png){.thumbnail}

Each region uses the same VLAN ID but draws IPs from a distinct allocation pool within the shared subnet, eliminating any risk of overlap.

With this approach:

- All regions remain part of the same L2 private network through the vRack.
- DHCP continues to function normally in each region, as OpenStack assigns IPs only from its designated pool.
- Additional OVHcloud products (such as Bare Metal, Dedicated Servers, or Private Cloud) can join the same VLAN without creating address conflicts.
- Multi-region workloads, migrations, and hybrid deployments operate reliably on a unified private network.

This solution preserves the flexibility of a single stretched VLAN while enforcing predictable, conflict-free IP management. This guide explains how to configure this setup using the OVHcloud Control Panel, Horizon, OpenStack CLI, or Terraform.

## Use case examples

Here are some practical scenarios where extending a OVHcloud private network across regions or integrating with other OVHcloud products can solve real-world challenges.

- **Database on Bare Metal & Application on Public Cloud:** Connect a Bare Metal database server with applications running in Public Cloud regions using the same VLAN without IP conflicts.
- **DHCP as a Service for Bare Metal Servers:** Assign IPs from Public Cloud networks to Bare Metal servers via DHCP for seamless integration.
- **Migration Between Public Cloud Regions:** Move workloads from one region to another while keeping the private network consistent and avoiding IP conflicts.
- **Multi-Region Services:** Run distributed services across multiple Public Cloud regions with a unified private network for secure communication.
- **Integration with Other OVHcloud Products:** Connect Public Cloud instances with Private Cloud, Dedicated Servers, or other OVHcloud services through vRack.

## Requirements

- A [Public Cloud project](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) in your OVHcloud account
- Basic networking knowledge
- Access to the [OVHcloud Control Panel](/links/manager)
- Access to the [Horizon interface](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

## Instructions

This section provides step-by-step instructions to configure a private network stretched across multiple OVHcloud Public Cloud regions. You can use the OVHcloud Control Panel & Horizon, OpenStack CLI, or Terraform.

### Configuration for Public Cloud

Add the public cloud project to a vRack:

![Add Public Cloud project to Vrack](images/add_pcp_to_vrack.png){.thumbnail}

> [!tabs]
> Via the OVHcloud Control Panel and Horizon
>> **\. Create private networks in each region**
>>
>> Create a private network in each desired region using the same VLAN ID.
>>
>> ![Add Public Cloud project to Vrack](images/add_pcp_to_vrack.png){.thumbnail}
>>
>> > [!tabs]
>> >
>> > **Note:** At this stage, using the same VLAN ID across regions without separate IP pools is exactly what must be avoided.
>> >
>>
>> **2\. Configure subnets and IP pools**
>>
>> Edit each subnet in Horizon, configure the gateway reserved IP and the IP pool.
>>
>> **- First region:**
>>
>> ![Edit subnet region 1](images/configure_subnet_region1.png){.thumbnail}
>>
>> ![Edit subnet region 1 - 2](images/configure_subnet_region1_2.png){.thumbnail}
>>
>> **- Second region:**
>>
>> ![Edit subnet region 2](images/configure_subnet_region2.png){.thumbnail}
>>
>> ![Edit subnet region 2 - 2](images/configure_subnet_region2_2.png){.thumbnail}
>>
>> **3\. Refresh network status**
>>
>> Go back to the OVHcloud Control Panel and refresh the network page.
>>
>> ![Refresh vrack list page](images/refresh_vrack_list_page.png){.thumbnail}
>>
>> You should now see a single VLAN stretched across multiple regions, each with its own IP pool.
>>
> Via the OpenStack CLI
>> > [!primary]
>> >
>> > **Required:** OpenStack authentication configured in your environment variables
>> >
>>
>> **1\. Load OpenStack credentials:**
>>
>> ```bash
>> source openrc.sh
>> ```
>>
>> **2\. Select the first region**
>>
>> ```bash
>> export OS_REGION_NAME=RBX-A
>> openstack network create --provider-network-type vrack --provider-segment 1 stretch-private-network-vlan-1
>> openstack subnet create --network stretch-private-network-vlan-1 --subnet-range 10.1.0.0/16 --dhcp \
>> --allocation-pool start=10.1.1.2,end=10.1.1.254 --dns-nameserver 213.186.33.99 --gateway 10.1.1.1 stretch-private-subnet
>> ```
>>
>> **3\. Select the second region**
>>
>> ```bash
>> export OS_REGION_NAME=GRA11
>> openstack network create --provider-network-type vrack --provider-segment 1 stretch-private-network-vlan-1
>> openstack subnet create --network stretch-private-network-vlan-1 --subnet-range 10.1.0.0/16 --dhcp \
>> --allocation-pool start=10.1.2.2,end=10.1.2.254 --dns-nameserver 213.186.33.99 --gateway 10.1.2.1 stretch-private-subnet
>> ```
>>
> Via Terraform
>> > [!primary]
>> >
>> > **Required:** OVHcloud application key configured in your environment variables.
>> >
>>
>> **1\. Create a main Terraform configuration file (e.g., `main.tf`) with the following content:**
>>
>> ```hcl
>> resource "ovh_cloud_project_network_private" "private-net" {
>>  name    = "stretch-private-network-vlan-${var.private_network_vlan_id}"
>>  vlan_id = var.private_network_vlan_id
>>  regions = var.regions
>> }
>>
>> resource "ovh_cloud_project_network_private_subnet_v2" "private-subnet" {
>>   count             = length(var.regions)
>>   name              = "stretch-private-subnet-vlan-${var.private_network_vlan_id}"
>>   network_id        = tolist(ovh_cloud_project_network_private.private-net.regions_attributes[*].openstackid)[count.index]
>>   region            = element(var.regions, count.index)
>>   gateway_ip        = "10.${var.private_network_vlan_id}.${count.index + 1}.1"
>>   cidr              = "10.${var.private_network_vlan_id}.0.0/16"
>>   dns_nameservers   = ["213.186.33.99"]
>>   dhcp              = true
>>   enable_gateway_ip = true
>>
>>   allocation_pools {
>>     start = "10.${var.private_network_vlan_id}.${count.index + 1}.2"
>>     end   = "10.${var.private_network_vlan_id}.${count.index + 1}.254"
>>   }
>> }
>> ```
>>
>> **2\. Create a variables file (e.g., `variables.tf`) with the following content:**
>>
>> ```hcl
>> variable regions {
>>   type    = list
>>   default = ["RBX-A", "GRA11"]
>> }
>>
>> variable private_network_vlan_id {
>>   type    = string
>>   default = "1"
>> }
>> ```
>>
>> **3\. Apply the configuration:**
>>
>> ```bash
>> terraform apply
>> ```
>>
>> Terraform will create the private network, subnets, and IP allocation pools in each region as defined.
>>

### DHCP for Bare Metal Servers (DHCP as a Service)

This section explains how to provide Public Cloud DHCP IP addresses to Bare Metal servers by integrating them into a stretched private network.

The Public Cloud project and Bare Metal server must be added to the same vRack:

![Add Bare Metal server to Vrack](images/add_baremetal_to_vrack.png){.thumbnail}

> [!tabs]
> Via the OVHcloud Control Panel and Horizon
>> **1\. Create a Public Cloud private network**
>>
>> ![Create Public Cloud private network](images/create_private_network.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > **Note:** Use the same VLAN ID that will be used for the Bare Metal server.
>> >
>>
>> **2\. Obtain the MAC address of the Bare Metal server’s private interface.**
>>
>> ![Obtain mac address](images/obtain_mac_address.png){.thumbnail}
>>
>> **3\. Create a virtual port on the Public Cloud private network using the MAC address of the Bare Metal server.**
>>
>> ![Create virtual port](images/create_virtual_port.png){.thumbnail}
>>
>> **4\. Install an operating system on the Bare Metal server (e.g., Ubuntu 24.04).**
>>
>> ```bash
>> cat <<EOF | sudo tee /etc/netplan/90-private-interface.yaml
>> network:
>>   version: 2
>>   ethernets:
>>     privint:
>>       match:
>>         macaddress: "74:56:3c:85:7e:40"
>>       dhcp4: false
>>       dhcp6: false
>>   vlans:
>>     vlan1:
>>       id: 1
>>       link: privint
>>       dhcp4: true
>> EOF
>>
>> sudo chmod 600 /etc/netplan/90-private-interface.yaml
>> sudo netplan apply
>> ```
>>
>> > [!warning]
>> >
>> > **Note:** Post-installation scripts may need to be updated with the correct MAC address and VLAN ID.
>> >
>>
> Via the OpenStack CLI
>> > [!primary]
>> >
>> > **Required:** OpenStack atuthentication configured in your environment variables.
>> >
>>
>> **1\. Load OpenStack credentials:**
>>
>> ```bash
>> source openrc.sh
>> ```
>>
>> **2\. Select the region:**
>>
>> ```bash
>> export OS_REGION_NAME=RBX-A
>> ```
>>
>> **3\. Create the private network and subnet:**
>>
>> ```bash
>> openstack network create --provider-network-type vrack --provider-segment 1 stretch-private-network-vlan-1
>>
>> openstack subnet create --network stretch-private-network-vlan-1 --subnet-range 10.1.0.0/16 --dhcp \
>> --allocation-pool start=10.1.0.2,end=10.1.254.254 --dns-nameserver 213.186.33.99 --gateway 10.1.0.1 stretch-private-subnet
>> ```
>>
>> **4\. Create a virtual port for the Bare Metal server:**
>>
>> ```bash
>> openstack port create --network stretch-private-network-vlan-1 <BARE_METAL_MAC_ADDRESS> bare_metal_port
>> ```
>>
>> **5\. Install the OS on the Bare Metal server (Ubuntu 24.04 used in this example):**
>>
>> ```bash
>> cat <<EOF | sudo tee /etc/netplan/90-private-interface.yaml
>> network:
>>   version: 2
>>   ethernets:
>>     privint:
>>       match:
>>         macaddress: "74:56:3c:85:7e:40"
>>       dhcp4: false
>>       dhcp6: false
>>   vlans:
>>     vlan1:
>>       id: 1
>>       link: privint
>>       dhcp4: true
>> EOF
>>
>> sudo chmod 600 /etc/netplan/90-private-interface.yaml
>> sudo netplan apply
>> ```
>>
>> > [!warning]
>> >
>> > **Note:** Post-installation scripts may need to be updated with the correct MAC address and VLAN ID.
>> >
>>
> Via Terraform
>> > [!primary]
>> >
>> > **Required:** OVHcloud application key configured in your environment variables.
>> >
>>
>> **1\. Create Terraform variable file `variables.tf`**
>>
>> Define all variables needed for the deployment:
>>
>> ```hcl
>> variable "region" {
>>   type    = string
>>   default = "RBX-A"
>> }
>>
>> variable "private_network_vlan_id" {
>>   type    = string
>>   default = "1"
>> }
>>
>> variable "bare_metal_server_name" {
>>   type    = string
>>   default = "ns3044214.ip-162-19-106.eu"
>> }
>>
>> variable "ssh_public_key" {
>>   type = string
>> }
>> ```
>>
>> **2\. Create the private network file `private-network.tf`**
>>
>> ```hcl
>> resource "ovh_cloud_project_network_private" "private-net" {
>>   name    = "stretch-private-network-vlan-${var.private_network_vlan_id}"
>>   vlan_id = var.private_network_vlan_id
>>   regions = [var.region]
>> }
>>
>> resource "ovh_cloud_project_network_private_subnet_v2" "private-subnet" {
>>   name              = "stretch-private-subnet-vlan-${var.private_network_vlan_id}"
>>   network_id        = tolist(ovh_cloud_project_network_private.private-net.regions_attributes[*].openstackid)[0]
>>   region            = var.region
>>   gateway_ip        = "10.${var.private_network_vlan_id}.0.1"
>>   cidr              = "10.${var.private_network_vlan_id}.0.0/16"
>>   dns_nameservers   = ["213.186.33.99"]
>>   dhcp              = true
>>   enable_gateway_ip = true
>>
>>   allocation_pools {
>>     start = "10.${var.private_network_vlan_id}.0.2"
>>     end   = "10.${var.private_network_vlan_id}.254.254"
>>   }
>> }
>> ```
>>
>> > [!primary]
>> >
>> > This file ensures a private network and subnet are created in the specified region, with DHCP enabled and a dedicated allocation pool.
>> >
>>
>> **3\. Create the Bare Metal file `bare-metal.tf`**
>>
>> ```hcl
>> data "ovh_dedicated_server" "server" {
>>   service_name = var.bare_metal_server_name
>> }
>>
>> resource "openstack_networking_port_v2" "bare_metal_port" {
>>   name           = "bare-metal-${var.bare_metal_server_name}-port"
>>   region         = var.region
>>   network_id     = tolist(ovh_cloud_project_network_private.private-net.regions_attributes[*].openstackid)[0]
>>   mac_address    = data.ovh_dedicated_server.server.vnis[index(data.ovh_dedicated_server.server.vnis.*.mode, "vrack")].name
>>   admin_state_up = "true"
>>
>>   depends_on = [ovh_cloud_project_network_private_subnet_v2.private-subnet]
>> }
>>
>> data "ovh_dedicated_installation_template" "template" {
>>   template_name = "ubuntu2404-server_64"
>> }
>>
>> resource "ovh_dedicated_server_reinstall_task" "server_reinstall" {
>>   service_name = data.ovh_dedicated_server.server.service_name
>>   os           = data.ovh_dedicated_installation_template.template.template_name
>>
>>   customizations {
>>     hostname                 = data.ovh_dedicated_server.server.name
>>     post_installation_script = base64encode(templatefile("templates/custom-bare-metal.tftpl", {
>>       mac_address = data.ovh_dedicated_server.server.vnis[index(data.ovh_dedicated_server.server.vnis.*.mode, "vrack")].name
>>       vlan_id     = var.private_network_vlan_id
>>     }))
>>     ssh_key                  = var.ssh_public_key
>>   }
>> }
>> ```
>>
>> > [!primary]
>> >
>> > This configuration attaches the Bare Metal server to the private network via a virtual port and executes a post-installation script to configure networking.
>> >
>>
>> **4\. Create the post-installation template `templates/custom-bare-metal.tftpl`**
>>
>> ```bash
>> cat <<EOF | sudo tee /etc/netplan/90-private-interface.yaml
>> network:
>>   version: 2
>>   ethernets:
>>     privint:
>>       match:
>>         macaddress: "${mac_address}"
>>       dhcp4: false
>>       dhcp6: false
>>   vlans:
>>     vlan${vlan_id}:
>>       id: ${vlan_id}
>>       link: privint
>>       dhcp4: true
>> EOF
>>
>> sudo chmod 600 /etc/netplan/90-private-interface.yaml
>> sudo netplan apply
>> ```
>>
>> > [!primary]
>> >
>> > This script creates a netplan configuration for the private VLAN interface, enabling DHCP to assign an IP from the Public Cloud network.
>> >
>>
>> **5\. Apply the configuration**
>>
>> ```bash
>> terraform apply
>> ```
>>
>> > [!warning]
>> >
>> > Running the Terraform script may reinstall your Bare Metal server, so ensure you have backups or are prepared for a reinstall.
>> >
>>

## Notes / Best Practices

- Verify the VLAN ID matches between the Public Cloud network and Bare Metal server.
- Confirm the Bare Metal server receives an IP from the Public Cloud DHCP service after installation.
- Each server should use a dedicated IP allocation pool to avoid conflicts.

## Go further

Join our [community of users](/links/community).