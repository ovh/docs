---
title: "OPCP - How to Deploy an Instance via OpenStack APIs"
excerpt: "Learn how to deploy an OPCP instance via OpenStack APIs by configuring networks, subnets, instances, and SSH keys"
updated: 2025-11-18
---

## Objective

This guide details the steps to install an OPCP node by creating an instance through the OpenStack APIs. 
Before deploying services on your OPCP clusters, you must have at least one installed and active node.

## Requirements

- Have an active [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) service.
- Have a user account with sufficient rights to access the OpenStack APIs.
- [Prepare the environment to use the OpenStack API](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
- [Load the environment variables for the project](/pages/hosted_private_cloud/opcp/how-to-use-api-and-get-credentials).

## Instructions

You can obtain a list of available OpenStack commands using the following command:

```bash
openstack command list
```

You can filter the displayed commands by specifying a group:

```bash
openstack command list --group compute
```

You can also get information about a specific command by adding `help` before it:

```bash
openstack help flavor list 

usage: openstack flavor list [-h] [-f {csv,json,table,value,yaml}] [-c COLUMN]
                             [--quote {all,minimal,none,nonnumeric}] [--noindent]
                             [--max-width <integer>] [--fit-width] [--print-empty]
                             [--sort-column SORT_COLUMN]
                             [--sort-ascending | --sort-descending] [--public | --private | --all]
                             [--min-disk <min-disk>] [--min-ram <min-ram>] [--long]
                             [--marker <flavor-id>] [--limit <num-flavors>]

List flavors ...
```

> [!success]
>
> Check the OpenStack client documentation directly on the [OpenStack website](https://docs.openstack.org/python-openstackclient/latest/cli/index.html).
>

### Retrieve the Parameters Needed to Create an Instance

#### Create a Private Network and a Subnet

**Step 1: Create the Private Network**

Before deploying your instance, it is generally necessary to create a **private network** so that it is accessible within your local infrastructure.
If you already have a network with a subnet in your project that you want to use, you can skip this creation step and directly list your networks to get the name or ID of the desired network.

```bash
openstack network create $NETWORK_NAME
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| availability_zone_hints   |                                      |
| availability_zones        |                                      |
| created_at                | 2025-11-05T15:18:06Z                 |
| description               |                                      |
| dns_domain                | None                                 |
| id                        | da5ed9ae-65c2-441b-99f4-75d8eb87c214 |
| ipv4_address_scope        | None                                 |
| ipv6_address_scope        | None                                 |
| is_default                | False                                |
| is_vlan_transparent       | None                                 |
| mtu                       | 1500                                 |
| name                      | opcp-docs                            |
| port_security_enabled     | True                                 |
| project_id                | 057ac6e82ade49078a5c66f4371eaf22     |
| provider:network_type     | vlan                                 |
| provider:physical_network | physnet1                             |
| provider:segmentation_id  | 2140                                 |
| qos_policy_id             | None                                 |
| revision_number           | 1                                    |
| router:external           | Internal                             |
| segments                  | None                                 |
| shared                    | False                                |
| status                    | ACTIVE                               |
| subnets                   |                                      |
| tags                      |                                      |
| updated_at                | 2025-11-05T15:18:06Z                 |
+---------------------------+--------------------------------------+
```

By default, a network is visible only to the project that created it (as well as to administrator users).
If you want to create a network **shared across all your projects**, you can use the `--share` parameter.
To share a network only with specific projects, you must use OpenStack's **Role-Based Access Control (RBAC)** mechanism: [Neutron RBAC Documentation](https://docs.openstack.org/neutron/pike/admin/config-rbac.html).

Additionally, if you want to create the network in a **specific VLAN**, you can specify it with the following parameters:

- `--provider-network-type vlan`
- `--provider-physical-network physnet1`
- `--provider-segment $VLAN_ID`

For example, if you want to create a shared private network in VLAN 2025 named `opcpdocs`:

```bash
openstack network create --share --provider-network-type vlan --provider-physical-network physnet1 --provider-segment 2025 opcpdocs
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| availability_zone_hints   |                                      |
| availability_zones        |                                      |
| created_at                | 2025-11-05T15:34:30Z                 |
| description               |                                      |
| dns_domain                | None                                 |
| id                        | 2a92f464-e1c0-4daa-8ecd-b3ba6b3b96da |
| ipv4_address_scope        | None                                 |
| ipv6_address_scope        | None                                 |
| is_default                | False                                |
| is_vlan_transparent       | None                                 |
| mtu                       | 1500                                 |
| name                      | opcpdocs                             |
| port_security_enabled     | True                                 |
| project_id                | 07f0c728fe844d778cda63ca28547937     |
| provider:network_type     | vlan                                 |
| provider:physical_network | physnet1                             |
| provider:segmentation_id  | 2025                                 |
| qos_policy_id             | None                                 |
| revision_number           | 1                                    |
| router:external           | Internal                             |
| segments                  | None                                 |
| shared                    | True                                 |
| status                    | ACTIVE                               |
| subnets                   |                                      |
| tags                      |                                      |
| updated_at                | 2025-11-05T15:34:30Z                 |
+---------------------------+--------------------------------------+
```

Once the network is created, you can list it using the command:

```bash
openstack network list --name $NETWORK_NAME
+--------------------------------------+-----------+---------+
| ID                                   | Name      | Subnets |
+--------------------------------------+-----------+---------+
| 2a92f464-e1c0-4daa-8ecd-b3ba6b3b96da | opcp-docs |         |
+--------------------------------------+-----------+---------+
```

If needed, you can list all networks by removing the `--name` argument.

**Step 2: Create the Subnet**

By default, the only required information to create a subnet on your network is the CIDR you want to configure and the network you just created:

```bash
openstack subnet create --network $NETWORK_NAME --subnet-range 192.168.120.0/24 $SUBNET_NAME
```

However, if you want to specify an allocation pool, you can define it using various parameters.<br>
For example, to create a subnet with CIDR 192.168.120.0/24, allocating only 50 IP addresses from the CIDR, and using a specific gateway, you can use the following command:

```bash
openstack subnet create --network opcpdocs --subnet-range 192.168.120.0/24 --allocation-pool start=192.168.120.11,end=192.168.120.60 --gateway 192.168.120.8 opcpdocs-subnet
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| allocation_pools     | 192.168.120.11-192.168.120.60        |
| cidr                 | 192.168.120.0/24                     |
| created_at           | 2025-11-05T16:17:58Z                 |
| description          |                                      |
| dns_nameservers      |                                      |
| dns_publish_fixed_ip | None                                 |
| enable_dhcp          | True                                 |
| gateway_ip           | 192.168.120.8                        |
| host_routes          |                                      |
| id                   | b532e25f-3aae-4396-99e9-ad6811a03a6e |
| ip_version           | 4                                    |
| ipv6_address_mode    | None                                 |
| ipv6_ra_mode         | None                                 |
| name                 | opcpdocs-subnet                      |
| network_id           | 2a92f464-e1c0-4daa-8ecd-b3ba6b3b96da |
| project_id           | 07f0c728fe844d778cda63ca28547937     |
| revision_number      | 0                                    |
| segment_id           | None                                 |
| service_types        |                                      |
| subnetpool_id        | None                                 |
| tags                 |                                      |
| updated_at           | 2025-11-05T16:17:58Z                 |
+----------------------+--------------------------------------+
```

This subnet can be used to deploy an instance, allowing OpenStack to assign an IP address to it during installation.

#### Adding a Public SSH Key

First, you need to add a public SSH key to connect to your instances.

- List the SSH key-related commands:

```bash
openstack help | grep keypair
  keypair create  Create new public or private key for server ssh access
  keypair delete  Delete public or private key(s)
  keypair list    List key fingerprints
  keypair show    Display key details
```

- Add the public SSH key:

```bash
openstack keypair create --public-key ~/.ssh/id_rsa.pub $SSHKEY
```

- List available SSH keys:

```bash
openstack keypair list
+---------------+-------------------------------------------------+------+
| Name          | Fingerprint                                     | Type |
+---------------+-------------------------------------------------+------+
| SSHKEY        | 5c:fd:9d:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:3a | ssh  |
+---------------+-------------------------------------------------+------+
```

#### List Instance Flavors

Next, retrieve the ID or name of the flavor you want to use:

```bash
openstack flavor list
+--------------------------------------+---------------------+---------+------+-----------+-------+-----------+
| ID                                   | Name                |     RAM | Disk | Ephemeral | VCPUs | Is Public |
+--------------------------------------+---------------------+---------+------+-----------+-------+-----------+
| 4e731d33-4c1e-4286-bc63-68c2cba3bc59 | gpu                 |     400 |  900 |         0 |   128 | True      |
| 8bc6b1e0-dfdd-44d8-83fb-cef5e8fb6ec2 | scale-2             |     256 | 4000 |         0 |    32 | True      |
| f975e49a-fd75-4a7e-868e-2842972e82e2 | hsm                 |     512 | 4000 |         0 |   128 | True      |
| fcd2c556-9a16-4532-a5c8-e9d9275ba78f | scale-1             |     128 | 2000 |         0 |    24 | True      |
| ff5b4d7d-46c9-4bf5-b300-f1f465661e64 | scale-3             |     256 | 4000 |         0 |    48 | True      |
+--------------------------------------+---------------------+---------+------+-----------+-------+-----------+
```

#### List Available Images

Finally, get the ID or name of the image to use for the instance:

```bash
openstack image list
+--------------------------------------+-----------------------------------------------+--------+
| ID                                   | Name                                          | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 6540686f-0150-496b-a894-03d95ef8bc7e | ironic-agent.initramfs                        | active |
| 5f6d4237-023b-4a25-8ceb-7051ffc6d632 | ironic-agent.kernel                           | active |
| 7600f9fc-fc1f-4fb8-aaa3-878bb9399d26 | CentOS 9 OPCP                                 | active |
| ebabdaaa-a52d-4246-9790-e77ba5c49519 | Debian 12 LVM OPCP                            | active |
+--------------------------------------+-----------------------------------------------+--------+
```

### Instance Installation

With the previously gathered information, you can create an instance to deploy an operating system along with your SSH public key on the desired flavor:

```bash
openstack server create --key-name OPCPdocs2 --flavor scale-1 --image "Debian 12 LVM OPCP" --network opcpdocs OPCPdocs-server
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                               | Value                                                                                                                                                                                                                                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| OS-DCF:diskConfig                   | MANUAL                                                                                                                                                                                                                                         |
| OS-EXT-AZ:availability_zone         | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:host                | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:hostname            | opcpdocs-server                                                                                                                                                                                                                                |
| OS-EXT-SRV-ATTR:hypervisor_hostname | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:instance_name       | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:kernel_id           | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:launch_index        | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:ramdisk_id          | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:reservation_id      | r-900xkw3k                                                                                                                                                                                                                                     |
| OS-EXT-SRV-ATTR:root_device_name    | None                                                                                                                                                                                                                                           |
| OS-EXT-SRV-ATTR:user_data           | None                                                                                                                                                                                                                                           |
| OS-EXT-STS:power_state              | N/A                                                                                                                                                                                                                                            |
| OS-EXT-STS:task_state               | scheduling                                                                                                                                                                                                                                     |
| OS-EXT-STS:vm_state                 | building                                                                                                                                                                                                                                       |
| OS-SRV-USG:launched_at              | None                                                                                                                                                                                                                                           |
| OS-SRV-USG:terminated_at            | None                                                                                                                                                                                                                                           |
| accessIPv4                          | None                                                                                                                                                                                                                                           |
| accessIPv6                          | None                                                                                                                                                                                                                                           |
| addresses                           | N/A                                                                                                                                                                                                                                            |
| adminPass                           | VbRFzvGnk9rP                                                                                                                                                                                                                                   |
| config_drive                        | None                                                                                                                                                                                                                                           |
| created                             | 2025-11-05T16:41:32Z                                                                                                                                                                                                                           |
| description                         | None                                                                                                                                                                                                                                           |
| flavor                              | description=, disk='2000', ephemeral='0', extra_specs.:architecture='bare_metal', extra_specs.resources:CUSTOM_DISCOVERED='1', extra_specs.resources:DISK_GB='0', extra_specs.resources:MEMORY_MB='0', extra_specs.resources:VCPU='0',         |
|                                     | extra_specs.trait:CUSTOM_SCALE1='required', id='scale-1', is_disabled=, is_public='True', location=, name='scale-1', original_name='scale-1', ram='128', rxtx_factor=, swap='0', vcpus='24'                                                    |
| hostId                              | None                                                                                                                                                                                                                                           |
| host_status                         | None                                                                                                                                                                                                                                           |
| id                                  | 2f9c2e41-b4dc-4787-a3ef-9b2b2d686dbb                                                                                                                                                                                                           |
| image                               | Debian 12 LVM OPCP (ebabdaaa-a52d-4246-9790-e77ba5c49519)                                                                                                                                                                                     |
| key_name                            | OPCPdocs2                                                                                                                                                                                                                                      |
| locked                              | None                                                                                                                                                                                                                                           |
| locked_reason                       | None                                                                                                                                                                                                                                           |
| name                                | OPCPdocs-server                                                                                                                                                                                                                                |
| pinned_availability_zone            | None                                                                                                                                                                                                                                           |
| progress                            | None                                                                                                                                                                                                                                           |
| project_id                          | 07f0c728fe844d778cda63ca28547937                                                                                                                                                                                                               |
| properties                          | None                                                                                                                                                                                                                                           |
| security_groups                     | name='default'                                                                                                                                                                                                                                 |
| server_groups                       | None                                                                                                                                                                                                                                           |
| status                              | BUILD                                                                                                                                                                                                                                          |
| tags                                |                                                                                                                                                                                                                                                |
| trusted_image_certificates          | None                                                                                                                                                                                                                                           |
| updated                             | 2025-11-05T16:41:32Z                                                                                                                                                                                                                           |
| user_id                             | b1481b3f72e8aecda9a623b215085227f9d85170f4fc4524b3a4ab1a0b97dfde                                                                                                                                                                               |
| volumes_attached                    |                                                                                                                                                                                                                                                |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

By default, the instance to be installed is automatically selected from the pool of nodes in `Available` status, for which the **required traits** of the flavor match the requested installation. This means a physical server meeting the constraints described by the **traits** will be selected.

After a few minutes, the instance is deployed, and you can list your installed instances using the following command:

```bash
openstack server list
+--------------------------------------+-----------------+--------+-------------------------+---------------------+---------+
| ID                                   | Name            | Status | Networks                | Image               | Flavor  |
+--------------------------------------+-----------------+--------+-------------------------+---------------------+---------+
| 2f9c2e41-b4dc-4787-a3ef-9b2b2d686dbb | OPCPdocs-server | ACTIVE | opcpdocs=192.168.120.59 | Debian 12 LVM OPCP  | scale-1 |
+--------------------------------------+-----------------+--------+-------------------------+---------------------+---------+
```

If you want to install the instance on a specific node, you can specify the node ID in your command:

```bash
openstack server create --flavor $flavor_ID --image $image_ID --network $network_ID --key-name $your_keyname --availability-zone nova::$baremetal_node_ID $server_name
```

You must ensure that the node is `Available` and has the required **traits** to deploy the desired flavor.

To check the current state of a node and retrieve its ID, you can consult our documentation: [OPCP Node Lifecycle](/pages/hosted_private_cloud/opcp/node-lifecycle).

#### Deleting an Instance

You can delete an instance with the following command:

```bash
openstack server delete $INSTANCE_ID
```

Your node will go into `Cleaning` state. This step involves a hardware reset of the physical server and erasure of the data on its disks.
During this step, the instance will no longer appear in the instance list; however, the node will not be immediately available for a new installation. Please consider this delay during your maintenance operations.
The operation may take several minutes before the node is `Available` again and ready for a new deployment.

### References

- [OpenStack Official Documentation - Client](https://docs.openstack.org/python-openstackclient/latest/cli/index.html)
- [OpenStack Official Documentation - Network](https://docs.openstack.org/python-openstackclient/pike/cli/command-objects/network.html)

## Go further

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to request a quote and have your project analyzed by our Professional Services team experts.

Join our [community of users](/links/community).
