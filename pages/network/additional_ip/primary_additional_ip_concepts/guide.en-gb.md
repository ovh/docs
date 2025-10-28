---
title: Concepts - Primary IP and Additional IP
excerpt: Understand the differences between Primary IP and Additional IP addresses, and learn about their use cases
updated: 2025-09-22
---

## Objective

This document aims to clarify the distinctions between Primary IP and Additional IP addresses within the OVHcloud ecosystem. You will learn the unique characteristics and appropriate use cases for each, enabling you to make informed decisions for your network architecture, whether for basic connectivity, high-availability, or scalable service deployment.

In the Bare Metal universe, you can use the Primary IP addresses of your services, or configure Additional IP addresses, which provide a flexible way to manage public access to your services. They can stay infrastructure-agnostic and be scaled up or migrated whenever needed.

## IP Addresses in OVHcloud: Primary, Additional

OVHcloud offers various types of IP addresses, each designed for specific use cases and offering different levels of flexibility and functionality. Understanding the distinctions between Primary IP and Additional IP is crucial for effective network management and service deployment.

In the Public Cloud universe, we also offer Floating IP addresses that are cloud-native, with a pay-as-you-go billing model.

You can find more information about the differences between Floating IP and Additional IP in [this guide](/pages/public_cloud/public_cloud_network_services/concepts-02-additional-ip-vs-floating-ip).

### Primary IP Addresses

Primary IP addresses are fundamental to OVHcloud services, providing immediate connectivity and reachability upon service deployment.

#### Characteristics

- **Pre-configured**: Primary IP addresses come pre-attached to your OVHcloud services, and serve as their default IP address, simplifying initial setup.
- **Purpose**: Its main purpose is to enable easy communication and ensure reachability for the associated service.
- **Availability**: Both IPv4 and IPv6 primary addresses are available with many OVHcloud products. Refer to specific product pages for detailed availability.
- **Configuration**: IPv4 and IPv6 addresses configuration details, such as address, prefix size, or default gateway, can be found within the [OVHcloud Control Panel](/links/manager), usually in the `Network`{.action} tab of the given product.

#### Use Cases

- Default network interface for a server or service.
- Basic connectivity and management access.

> [!success]
> **Related Guide** :
> - [Configuring IPv6 on dedicated servers](/pages/bare_metal_cloud/dedicated_servers/network_ipv6)

### Additional IP Addresses

Additional IP addresses offer enhanced flexibility and are infrastructure-agnostic, meaning they are not tied to any specific underlying hardware or solution. This allows for dynamic reassignment between different services within the same region (with an exception for the eu-west-gra, eu-west-sbg and eu-west-rbx regions).

For more information about moving Additional IP, please check [this guide](/pages/bare_metal_cloud/dedicated_servers/move-failover-ip).

#### Characteristics

- **Flexibility**: Offer greater flexibility compared to Primary IPs.
- **Infrastructure-Agnostic**: Not tied to specific hardware, allowing dynamic reassignment.
- **Dynamic Reassignment**: Can be dynamically reassigned between different services within the same region.
- **Availability**:
    - **IPv4**: Can be used with multiple products.
    - **IPv6**: Support for Additional IPv6 when used with a vRack.

#### Attachment Methods

Additional IP addresses can be attached to OVHcloud services in two primary ways (availability may vary):

1.  **Via the public interface**:

    - Available for Additional IPv4 only.
    - An Additional IPv4 address (or a block of addresses) can be used similarly to the Primary IP of a server.
    - Refer to your product’s specifications for network/gateway settings details.

2.  **Via vRack Private Network**:

    - Supports both Additional IPv4 and Additional IPv6.
    - Available for products compatible with vRack.
    - **Advantages of using with vRack**:
        - **Crossing Regional Boundaries**: While Additional IP addresses can only be moved between products within the region they were issued, using them over a vRack allows customers to define the gateway's region (where public traffic enters and leaves the vRack network), while backend services can be utilized in any location that supports vRack network.
        - **IPv6 Subnet Routing**: This feature is available only for Additional IPv6 when used over a vRack network, enabling more granular control over IPv6 traffic within your private network.
        - **Automated Failover with VRRP/CARP**: VRRP (*Virtual Router Redundancy Protocol*) and CARP (*Common Address Redundancy Protocol*) on a vRack network allow for automatic failover. The Additional IP is attached to a master server, with backup servers that take over instantly if the master fails. This creates a resilient, self-healing, high-availability infrastructure without requiring manual intervention.

#### Use Cases

- **Manual and Automated Failover**: Quickly reassign IP addresses to backup services in case of main services failure, either manually or automatically VRRP or CARP;
- **Load Balancing**: Attach an Additional IP to your OVHcloud Load Balancer, and seamlessly redirect traffic to a standby Load Balancer during maintenance of failover;
- **IP aliasing**: Assign several IP addresses to the same network interface, and host multiple websites or services on a single server;
- **Service Migration**: Migrate services between servers without changing the public-facing IP address.
- **IP Geolocation**: Present a local IP address to customers in different regions, to improve latency and user experience.

> [!success]
> **Related Guides** :
> - [Configuring an Additional IPv6 block in a vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack)
> - [Configuring an Additional IP block in a vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)
> - [Moving an Additional IP](/pages/bare_metal_cloud/dedicated_servers/move-failover-ip)
> - [Configuring Additional IPs in bridge mode on your virtual machines](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

## Go further

Join our [community of users](/links/community).