---
title: "Changing the MTU size for machines reaching the OVHcloud Gateway SSL (EN)"
excerpt: "Find out how to check your current MTU size and set it up to the OVHcloud recommended value"
updated: 2023-08-22
---

## Objective

The Maximum Transmission Unit (MTU) on a network level is a measure representing the largest data packet that a device connected to the network can accept.
We recommend setting your MTU to **1500**, not only on the outbound interface as this needs to be configured end-to-end in your infrastructure which is communicating with the OVHcloud on VMware infrastructure. This will prevent you from having communication/network issues when using a backup software for example.

If your current MTU value is higher than 1500, you may encounter timeouts due to network packetsnot received on the Private Gateway on OVHcloud side.

**Find out how to check your current MTU size and set it up to the OVHcloud recommended value.**

## Requirements

- a [VMware on OVHcloud infrastructure](https://www.ovhcloud.com/es-es/hosted-private-cloud/vmware/)

## Instructions

### Checking the current MTU value

To check the MTU value that is currently used on your network interface, you can use the following command:

#### Linux

```bash
ifconfig | grep mtu
```

#### Windows

```bash
netsh int ipv4 show subinterface
```

### Setting up the new MTU size

#### Linux

To change the MTU temporarily:

```bash
ifconfig **<Interface_name>** mtu **<mtu_size>** up
```

To change the MTU permanently:

- In dynamic IP addressing, the MTU size is set by DHCP. You will need to configure the DHCP configuration file located at `/etc/dhcp/dhclient.conf`.
- For static IP addresses, you will need to edit the network interface configuration file located at `/etc/network/interfaces`.

#### Windows:

```bash
netsh int ipv4 set subinterface **<Interface_name>** mtu=**<mtu_size>** store=persistent
```

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es-es/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
