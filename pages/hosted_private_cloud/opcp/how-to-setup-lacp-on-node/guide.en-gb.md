---
title: "OPCP - How to setup LACP on a Node"
excerpt: Learn how to setup a node in OpenStack to use LACP (Link Aggregation Control Protocol)
updated: 2025-11-10
---

## Objective
  
LACP configuration must be applied to the node before deploying an instance so that the network interfaces are properly aggregated.

**This guide explains how to configure a node (physical server) in OPCP to enable LACP (Link Aggregation Control Protocol)**.

We will also see how to configure **bonding** (logical grouping of multiple network interfaces into a single virtual interface) within your instance to fully leverage **LACP**.

> [!warning]
> Standard users cannot setup LACP by themselves.  
> You must be an **admin**, or have **available nodes** in your OpenStack project.
>
> It is recommended to setup LACP **before** deploying an instance.  
> This guide **does not cover** configuring a node that is already in production.

## Why Use LACP?

LACP can be used in two specific use cases:

- **Increase network capacity:** By aggregating multiple network cards, you can add the bandwidth of each NIC to the aggregate, for the same networks.
- **Increase resilience:** Each OPCP server has 4×25 G interfaces and is connected to two network switches (A & B) to ensure resilience in case of hardware failure. LACP allows you to create virtual interfaces that remain available in the event of hardware failure by aggregating two NICs connected to different switches.

## Requirements

Before starting, make sure you have the following:

- An active [OPCP service](/links/hosted-private-cloud/onprem-cloud-platform).
- **[Configured OpenStack CLI access](/pages/hosted_private_cloud/opcp/how-to-use-api-and-get-credentials)** with the necessary permissions (`clouds.yaml` or environment variables).
- The **admin** role and/or transferred nodes within your project.

LACP is an advanced networking configuration requiring system and networking expertise. Apply this guide only if you are already familiar with: configuring nodes in OpenStack Ironic, managing ports in OpenStack Neutron, and using the OpenStack CLI.

## Instructions

### Node Configuration

#### 1. List Nodes

The list of available nodes in your project can be displayed with the following command:

```bash
openstack baremetal node list
```

**Example output:**

```bash
+--------------------------------------+----------------+--------------------------------------+-------------+--------------------+-------------+
| UUID                                 | Name           | Instance UUID                        | Power State | Provisioning State | Maintenance |
+--------------------------------------+----------------+--------------------------------------+-------------+--------------------+-------------+
| 88830859-5b16-4935-8f41-d381b754cbe5 | SERVER-1       | None                                 | power off   | available          | False       |
| 726bb7e9-3b20-4a44-99d7-2af747983781 | SERVER-2       | None                                 | power off   | available          | False       |
| af711edf-a579-491e-b474-3c03639ed99b | SERVER-3       | 83b7083b-bbdd-4327-941c-ee91197818c5 | None        | active             | True        |
+--------------------------------------+----------------+--------------------------------------+-------------+--------------------+-------------+
```

#### 2. Transfer Node Ownership (Admin Only)

An admin can transfer node ownership to a specific project:

```bash
openstack baremetal node set <node-id> --owner <project-id>
```

#### 3. List Network Ports

Each physical network interface card (NIC) of a node is represented in OpenStack as a port.

To list the ports associated with a node:

```bash
openstack baremetal port list --node <node-id>
```

**Example output:**

```bash
+--------------------------------------+-------------------+
| UUID                                 | Address           |
+--------------------------------------+-------------------+
| 068a06b2-ebf9-48c9-a3c3-94016ca5e3da | 85:32:f2:87:29:da |
| 4937d704-7517-4525-86d1-abecb94a7ce9 | 85:32:f2:87:29:db |
| 422eece6-dcfa-40cd-975d-ba8bb11c774e | 85:32:f2:89:66:f8 |
| 34073903-92ad-47d1-a751-15aa96991415 | 85:32:f2:89:66:f9 |
+--------------------------------------+-------------------+
```

To view detailed information about a port, including physical connection info:

This is particularly useful if you plan to configure a **2x2 LACP bonding**, distributing NICs across two switches for **better redundancy and fault tolerance**.

```bash
openstack baremetal port show <port-id>
```

**Example output:**

```bash
openstack baremetal port show 71899d54-546d-4fdd-8d8b-52ad986bf425
+-----------------------+------------------------------------------------------------------------------------------------+
| Field                 | Value                                                                                          |
+-----------------------+------------------------------------------------------------------------------------------------+
| address               | 85:32:f2:89:66:f9                                                                              |
| created_at            | 2025-01-06T10:43:38.020574+00:00                                                               |
| extra                 | {}                                                                                             |
| internal_info         | {}                                                                                             |
| is_smartnic           | False                                                                                          |
| local_link_connection | {'switch_id': 'c0:00:15:8c:33:78', 'port_id': 'Ethernet25/2', 'switch_info': 'demo-tor1b-a70'} |
| node_uuid             | ddc7c763-74fc-4900-b9e6-5463233836b0                                                           |
| physical_network      | None                                                                                           |
| portgroup_uuid        | c3d3fcb3-7a92-4257-b944-736d222e8c4a                                                           |
| pxe_enabled           | False                                                                                          |
| updated_at            | 2025-11-06T09:52:46.355883+00:00                                                               |
| uuid                  | 71899d54-546d-4fdd-8d8b-52ad986bf425                                                           |
+-----------------------+------------------------------------------------------------------------------------------------+
```

#### 4. Enable Maintenance Mode

Before any network configuration change, the node must be placed in **maintenance mode** to prevent deployment during the operation:

```bash
openstack baremetal node maintenance set <node-id>
```

#### 5. Create a Port Group (LACP Bond)

A **port group** allows enabling LACP aggregation between multiple network interfaces.

Use the `--mode 802.3ad` parameter to enable LACP. If you don’t specify a MAC address with `--address`, one of the ports’ addresses will be used automatically.

> [!success]
> You can create:<br>
> - a **single port group** for a 1×4 bond, or<br>
> - two **port groups** for 2×2 bonds.

**Example:**

```bash
openstack baremetal port group create \
  --node 88830859-5b16-4935-8f41-d381b754cbe5 \
  --name portgroup-lacp \
  --mode 802.3ad \
  --address 00:00:00:20:00:01
```

**Example output:**

```bash
+----------------------------+-------------------------------------------+
| Field                      | Value                                     |
+----------------------------+-------------------------------------------+
| uuid                       | d082c2ab-5960-44e3-920d-3d6dfb6811e9      |
| address                    | 00:00:00:20:00:01                         |
| node_uuid                  | 88830859-5b16-4935-8f41-d381b754cbe5      |
| name                       | portgroup-lacp                            |
| mode                       | 802.3ad                                   |
| standalone_ports_supported | True                                      |
+----------------------------+-------------------------------------------+
```

#### 6. Associate Ports to the Group

Each port on the node must be linked to the created port group:

```bash
openstack baremetal port set --port-group <port-group-id> <port-id>
```

**Example:**

```bash
openstack baremetal port set --port-group d082c2ab-5960-44e3-920d-3d6dfb6811e9 068a06b2-ebf9-48c9-a3c3-94016ca5e3da
openstack baremetal port set --port-group d082c2ab-5960-44e3-920d-3d6dfb6811e9 4937d704-7517-4525-86d1-abecb94a7ce9
openstack baremetal port set --port-group d082c2ab-5960-44e3-920d-3d6dfb6811e9 422eece6-dcfa-40cd-975d-ba8bb11c774e
openstack baremetal port set --port-group d082c2ab-5960-44e3-920d-3d6dfb6811e9 34073903-92ad-47d1-a751-15aa96991415
```

#### 7. Disable Maintenance Mode

Once configuration is complete, disable maintenance mode:

```bash
openstack baremetal node maintenance unset <node-id>
```

#### 8. Create an Instance on the configured Node

After configuring your node with LACP, you can deploy an instance.

By default, OpenStack selects a host based on the **flavor** and **scheduler rules**, which doesn’t guarantee it will use the node you just configured.

To ensure your instance is deployed on that specific node, target it using its **availability zone**:

```bash
openstack server create --availability-zone "nova::<node-id>"
```

**Example:**

```bash
openstack server create --image <image-name> \
   --nic net-id=NETWORK1,v4-fixed-ip=198.18.56.200 \
   --flavor <flavor-id> \
   --key-name <keypair-name>  \
   --availability-zone "nova::<node-id>" \
   <instance-name>
```

#### Summary of Steps

| Step | Action | Command |
|------|---------|----------|
| 1 | List nodes | `openstack baremetal node list` |
| 2 | Transfer ownership | `openstack baremetal node set <node-id> --owner <tenant-id>` |
| 3 | List ports | `openstack baremetal port list --node <node-id>` |
| 4 | Enable maintenance mode | `openstack baremetal node maintenance set <node-id>` |
| 5 | Create LACP group | `openstack baremetal port group create --node <node-id> --name <port-group-name> --mode 802.3ad` |
| 6 | Associate ports | `openstack baremetal port set --port-group <port-group-id> <port-id>` |
| 7 | Disable maintenance mode | `openstack baremetal node maintenance unset <node-id>` |
| 8 | Create instance | `openstack server create --image <image-name> --nic net-id=<network-1> --flavor <flavor-id> --key-name <keypair-name> --availability-zone "nova::<node-id>" <instance-name>` |

### Instance Operating System Configuration

After configuring your node in OpenStack and deploying an OS, you need to configure networking to leverage **bonding**, which aggregates multiple NICs for higher performance and redundancy.

#### Check Bonding Configuration

On some images (like **Debian 12** or **Ubuntu 22.04**), **bonding** is automatically detected and configured. However, other distributions may require manual adjustments.

**1. Check Active Bonds**

```bash
ls /proc/net/bonding/
bond0
```

**2. Check Member Interfaces**

```bash
cat /proc/net/bonding/bond0 | grep Interface
Slave Interface: ens22f1np1
Slave Interface: ens22f0np0
Slave Interface: ens21f1np1
Slave Interface: ens21f0np0
```

**3. Check Transmit Hash Policy**

```bash
cat /proc/net/bonding/* | grep Trans
Transmit Hash Policy: layer2 (0)
```

> [!warning]  
> To fully utilize available bandwidth, configure the policy to `layer3+4` (some OSes default to `layer2`, which is less efficient).
> For more information: [Ubuntu Bonding Documentation](https://help.ubuntu.com/community/UbuntuBonding).

#### Modify Configuration

**1. Temporary Change (Non-Persistent)**

To test your configuration manually:

```bash
sudo ip link set bond0 type bond xmit_hash_policy layer3+4
```

Note: This configuration will reset on reboot.

**2. Persistent Change (Example with Netplan and cloud-init)**

Create the configuration file (e.g. `/etc/cloud/cloud.cfg.d/99-custom-network.cfg`) and include:

```yaml
network:
  version: 2
  ethernets:
    ens21f0np0: {}
    ens21f1np1: {}
    ens22f0np0: {}
    ens22f1np1: {}
  bonds:
    bond0:
      dhcp4: true
      interfaces:
        - ens21f0np0
        - ens21f1np1
        - ens22f0np0
        - ens22f1np1
      macaddress: 00:00:00:20:00:23
      parameters:
        mode: 802.3ad
        transmit-hash-policy: layer3+4
        lacp-rate: fast
        mii-monitor-interval: 100
```

Then apply the configuration by rebooting the instance.

#### 3. Test Bandwidth with `iperf3`

To properly test LACP, you need **two nodes** in the **same network**, both configured with LACP.

**Iperf3 Server (Node 1)**

```bash
iperf3 -s
```

**Iperf3 Client (Node 2)**

Use `-P` to generate multiple parallel streams to reach maximum throughput.

```bash
iperf3 -c <node-ip> -P 64
```

**Example Result:**

```bash
[SUM] 0.0000-10.0121 sec   110 GBytes  94.0 Gbits/sec
```

With a 4×25 Gbps link, you should achieve around **100 Gbps**. Some system tuning might be required to fully reach this capacity.

## Conclusion

You have successfully configured:

- **LACP (802.3ad)** at the OpenStack Baremetal node level;
- **Bonding configuration** within the guest OS;
- And validated **network performance** using `iperf3`.

Your instance is now ready to leverage the full available bandwidth of the aggregated link.

## Go further

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to request a quote and have your project analyzed by our Professional Services team experts.

Join our [community of users](/links/community).
