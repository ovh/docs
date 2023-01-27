---
title: Concepts overview
slug: secnumcloud-connectivity-overview-concept
excerpt: 'SecNumCloud Connectivity - Concepts overview'
section: SecNumCloud Connectivity
order: 01
updated: 2021-11-18
---

**Last updated 18th November, 2021**

## What is SNC Connectivity ?

OVHcloud SecNumCloud products need a secured connection to meet compliancy requirements. Such connection is secured using IPsec protocol from vRack for external connectivity and through a secured link between SecNumCloud zones.

## Benefits

### Network extension

From vRack, IPsec tunnels can be extended with any OVHcloud product in vRack, including, and not limited, OVHcloud Connect for remote IPsec endpoints.

### Performance

OVHcloud use dedicated hardware appliance to achieve best performance and provide high bandwidth connection, from external and between SecNumCloud zones.

### High Availability

IPsec connection is provided through two devices (per SecNumCloud zone) and BGP in IPsec tunnels enable maximum resiliency.

## Components

![SNC Network Global Overview](images/SNC-Global-Network.svg){.thumbnail}

### Subnet

* A subnet is composed of one IPv4 prefix. Maximum supported size: /24
* SecNumCloud products are attached to subnets.
* A subnet is only available in one SecNumCloud zone, it can not be strechted between datacenters or between SecNumCloud and non-SecNumCloud zones.

### SPN

SPN means Secure Private Network. It is the routing instance containing subnets.

### SPN Connector

Its purpose is to route trafic between SPN. By default, an SPN Connector is local to a SecNumCloud zone and can be upgraded to global on several SecNumCloud zones.

### VPN-SPN

The VPN-SPN manages the external network connectivity through the IPsec protocol.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
