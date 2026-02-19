---
title: "OPCP - How to set up Trunk ports on a Node"
excerpt: Learn how to configure Neutron Trunk ports in OPCP for multi-network vlan connectivity on bare metal or virtual machine instances
updated: 2026-02-19
---

## Objective

Trunk ports allow a single instance (bare metal or virtual machine) to send and receive traffic on multiple Neutron networks using vlan tagging, through a single physical interface or an [LACP bond](/pages/hosted_private_cloud/opcp/how-to-setup-lacp-on-node).

**This guide explains how to configure Neutron Trunk ports in OPCP to enable multi-network (vlan) connectivity on a bare metal node or a virtual machine.**

This guide also shows how to configure **vlan sub-interfaces** within your instance to access each network attached to the trunk.

> [!warning]
> Trunk creation requires the **admin** role. A project user cannot create trunks.<br>
> Adding sub-ports to a trunk also requires admin rights by default, but this can be delegated by your administrator.
>
> It is recommended to configure the trunk **before** deploying an instance.<br>
> This guide **does not cover** configuring a trunk on an instance that is already in production.

## Why Use Trunk Ports?

Trunk ports can be used in three specific use cases:

- **Multi-network access from a single instance:** Trunk ports allow a bare metal server or a virtual machine to communicate on multiple isolated Neutron networks using vlan tagging, without needing separate ports for each network.
- **Overcome physical interface limits on bare metal:** On a bare metal server, the number of Neutron networks is normally limited by the number of physical network interfaces. With trunk ports, you can connect to more networks than available physical interfaces by multiplexing multiple vlans over a single interface or LACP bond.
- **Simplified network management:** Instead of provisioning multiple ports and attaching them individually, you create a single trunk with sub-ports, each tagged with a specific vlan ID. This keeps the network topology clean and manageable.

## Requirements

Before starting, ensure you have the following:

- An active [OPCP service](/links/hosted-private-cloud/onprem-cloud-platform).
- **[Configured OpenStack CLI access](/pages/hosted_private_cloud/opcp/how-to-use-api-and-get-credentials)** with the necessary permissions (`clouds.yaml` or environment variables).
- The **admin** role (required for trunk creation and sub-port management).
- At least **two Neutron networks** already created in your project (one for the parent port and one or more for sub-ports).
- An available bare metal node or virtual machine project.

Trunk port configuration is an advanced networking feature requiring familiarity with OpenStack Neutron networking concepts, vlan tagging, and the OpenStack CLI.

## Instructions

### Network and Trunk Configuration

#### 1. Identify Your Networks

Before creating the trunk, identify the networks your instance needs access to. List the available networks in your project:

```bash
openstack network list
```

**Example output:**

```bash
+--------------------------------------+--------------------+--------------------------------------+
| ID                                   | Name               | Subnets                              |
+--------------------------------------+--------------------+--------------------------------------+
| 3fa85f64-5717-4562-b3fc-2c963f66afa6 | primary-network    | a1b2c3d4-e5f6-7890-abcd-ef1234567890 |
| 7c9e6679-7425-40de-944b-e07fc1f90ae7 | network-1          | b2c3d4e5-f6a7-8901-bcde-f12345678901 |
| 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d | network-2          | c3d4e5f6-a7b8-9012-cdef-123456789012 |
+--------------------------------------+--------------------+--------------------------------------+
```

#### 2. Create the Parent Port

Create a Neutron port that will serve as the **parent port** of the trunk. This port is required by the Neutron trunk model to anchor the trunk to the instance.

```bash
openstack port create --network <network-name> <parent-port-name>
```

**Example:**

```bash
openstack port create --network primary-network primary-port
```

**Example output:**

```bash
+-------------------------+--------------------------------------+
| Field                   | Value                                |
+-------------------------+--------------------------------------+
| id                      | f47ac10b-58cc-4372-a567-0e02b2c3d479 |
| mac_address             | fa:16:3e:aa:bb:cc                    |
| name                    | primary-port                         |
| network_id              | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| status                  | DOWN                                 |
+-------------------------+--------------------------------------+
```

> [!warning]
> On **bare metal instances**, the parent port is a **dummy port**. It exists in the Neutron database but has **no effect on the network fabric**. The network assigned to the parent port will **not** carry any traffic to the instance. All actual network connectivity must be configured through **sub-ports** (see steps 4 and 5).
>
> On **virtual machines**, the parent port carries the parent network as **untagged** traffic on the base interface. Sub-port networks are delivered as tagged vlan traffic.

#### 3. Create the Trunk

Create a Neutron trunk using the parent port created in the previous step:

```bash
openstack network trunk create --parent-port <parent-port-name> <trunk-name>
```

**Example:**

```bash
openstack network trunk create --parent-port primary-port my-trunk
```

**Example output:**

```bash
+----------------+--------------------------------------+
| Field          | Value                                |
+----------------+--------------------------------------+
| id             | 550e8400-e29b-41d4-a716-446655440000 |
| name           | my-trunk                             |
| parent_port_id | f47ac10b-58cc-4372-a567-0e02b2c3d479 |
| status         | DOWN                                 |
| sub_ports      |                                      |
+----------------+--------------------------------------+
```

> [!primary]
> At this point, the trunk exists but is not attached to any server. The parent port is a standard Neutron port that will be referenced when creating the instance.

#### 4. Create a Sub-Port

Create a Neutron port on each network you want to make accessible through the trunk:

```bash
openstack port create --network <network-name> <sub-port-name>
```

**Example:**

```bash
openstack port create --network network-1 sub-port-1
```

#### 5. Add Sub-Port to the Trunk

Attach the sub-port to the trunk, specifying the segmentation type (`vlan`) and the segmentation ID matching the network's vlan tag:

```bash
openstack network trunk set \
  --subport port=<sub-port-name>,segmentation-type=vlan,segmentation-id=<vlan-id> \
  <trunk-name>
```

**Example:**

```bash
openstack network trunk set \
  --subport port=sub-port-1,segmentation-type=vlan,segmentation-id=100 \
  my-trunk
```

> [!warning]
> The behaviour of `segmentation-id` differs depending on the instance type:
>
> - **Bare metal:** the `segmentation-id` **must match** the segmentation ID of the network assigned to the sub-port. Neutron does not verify this value, but if it does not match, traffic will not reach the instance.
> - **Virtual machines:** the `segmentation-id` can be **any value** you choose. The hypervisor handles the translation between the sub-port vlan tag and the network's actual segmentation ID.

> [!primary]
> To add more networks, repeat steps 4 and 5 for each additional network. For bare metal instances, use the matching `segmentation-id` of each network.

#### 6. Verify the Trunk Configuration

Confirm the trunk is properly configured with all expected sub-ports:

```bash
openstack network trunk show <trunk-name>
```

**Example:**

```bash
openstack network trunk show my-trunk
```

**Example output:**

```bash
+----------------+------------------------------------------------------------------------------------------------+
| Field          | Value                                                                                          |
+----------------+------------------------------------------------------------------------------------------------+
| id             | 550e8400-e29b-41d4-a716-446655440000                                                           |
| name           | my-trunk                                                                                       |
| parent_port_id | f47ac10b-58cc-4372-a567-0e02b2c3d479                                                           |
| status         | DOWN                                                                                           |
| sub_ports      | [{"port_id": "...", "segmentation_id": 100, "segmentation_type": "vlan"}]                      |
+----------------+------------------------------------------------------------------------------------------------+
```

#### 7. Deploy an Instance Using the Trunk

Create the instance referencing the **parent port**. OpenStack will configure the trunk during provisioning.

```bash
openstack server create \
  --image <image-name> \
  --flavor <flavor> \
  --port <parent-port-name> \
  --key-name <keypair-name> \
  <instance-name>
```

**Bare metal example:**

```bash
openstack server create \
  --image ubuntu-22.04 \
  --flavor baremetal \
  --port primary-port \
  --key-name my-keypair \
  --availability-zone "nova::88830859-5b16-4935-8f41-d381b754cbe5" \
  my-trunk-instance
```

**Virtual machine example:**

```bash
openstack server create \
  --image ubuntu-22.04 \
  --flavor m1.large \
  --port primary-port \
  --key-name my-keypair \
  my-trunk-instance
```

> [!warning]
> You **must** use `--port` (referencing the parent port) rather than `--nic net-id=...`. Using `--nic` would create a new port and bypass the trunk configuration entirely.

#### Summary of Steps

| Step | Action | Command |
|------|--------|---------|
| 1 | List networks | `openstack network list` |
| 2 | Create parent port | `openstack port create --network <network-name> <parent-port-name>` |
| 3 | Create trunk | `openstack network trunk create --parent-port <parent-port-name> <trunk-name>` |
| 4 | Create sub-port | `openstack port create --network <network-name> <sub-port-name>` |
| 5 | Add sub-port to trunk | `openstack network trunk set --subport port=<sub-port-name>,segmentation-type=vlan,segmentation-id=<vlan-id> <trunk-name>` |
| 6 | Verify trunk | `openstack network trunk show <trunk-name>` |
| 7 | Deploy instance | `openstack server create --port <parent-port-name> --flavor <flavor> ...` |

### Instance Operating System Configuration

After deploying your instance, you need to configure **vlan sub-interfaces** inside the guest OS to access each network attached through the trunk sub-ports.

> [!warning]
> Automatic trunk configuration via cloud-init is **not possible**. OpenStack does not pass trunk metadata to the instance userdata. You must configure vlan sub-interfaces manually or through a post-deployment provisioning tool.

> [!warning]
> On **bare metal instances**, since the parent port is a dummy port with no effect on the network fabric, the base network interface will **not** have any network connectivity by default. All networks must be accessed through vlan sub-interfaces matching the `segmentation-id` assigned to each sub-port.
>
> On **virtual machines**, the base interface carries the parent network as untagged traffic. Only sub-port networks require vlan sub-interfaces.

#### 1. Identify the Main Network Interface

Connect to your instance and identify the primary network interface:

```bash
ip link show
```

Look for the main interface (e.g., `ens3`, `ens21f0np0`, or `bond0` if LACP is configured). This is the physical interface carrying the trunk.

#### 2. Create vlan Sub-Interfaces (Temporary)

For each sub-port, create a vlan sub-interface matching the `segmentation-id` you assigned. This is a non-persistent method for testing:

```bash
sudo ip link add link <main-interface> name <main-interface>.<vlan-id> type vlan id <vlan-id>
sudo ip link set <main-interface>.<vlan-id> up
sudo ip addr add <ip-address>/<cidr> dev <main-interface>.<vlan-id>
```

**Example:**

```bash
sudo ip link add link ens3 name ens3.100 type vlan id 100
sudo ip link set ens3.100 up
sudo ip addr add 192.168.1.10/24 dev ens3.100
```

> [!warning]
> This configuration will not survive a reboot. See the next step for a persistent configuration.

#### 3. Persistent Configuration (Netplan Example)

For a persistent vlan sub-interface configuration using Netplan (Ubuntu/Debian with cloud-init), create a configuration file (e.g., `/etc/netplan/60-vlans.yaml`):

```yaml
network:
  version: 2
  vlans:
    ens3.100:
      id: 100
      link: ens3
      addresses:
        - 192.168.1.10/24
    ens3.200:
      id: 200
      link: ens3
      addresses:
        - 10.0.0.10/24
```

Then apply the configuration:

```bash
sudo netplan apply
```

> [!primary]
> If your instance uses LACP bonding (see [LACP guide](/pages/hosted_private_cloud/opcp/how-to-setup-lacp-on-node)), replace `ens3` with your bond interface name (e.g., `bond0`). The vlan sub-interfaces then become `bond0.100`, `bond0.200`, etc.

#### 4. Verify Connectivity

Check that your vlan sub-interfaces are up and have the correct IP addresses:

```bash
ip addr show <main-interface>.<vlan-id>
```

Then test connectivity:

```bash
ping <gateway-or-peer-on-vlan>
```

**Example:**

```bash
ip addr show ens3.100
ping 192.168.1.1
```

> [!success]
> If the ping succeeds, your vlan sub-interface is correctly configured and the trunk is carrying traffic for the corresponding network.

## Conclusion

You have successfully configured:

- **Neutron Trunk ports** at the OpenStack level, connecting an instance to multiple networks via vlan tagging;
- **vlan sub-interfaces** within the guest OS to access each network attached through trunk sub-ports;
- And verified **network connectivity** on each vlan.

Your instance can now communicate on multiple isolated networks through a single trunk configuration.

## Go further

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to request a quote and have your project analyzed by our Professional Services team experts.

Join our [community of users](/links/community).