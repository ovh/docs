---
title: Changing the MTU size for existing networks using OpenStack CLI/API (EN)
excerpt: Find out how to change the MTU size for an existing public cloud network using OpenStack CLI/API
updated: 2023-05-24
routes:
    canonical: 'https://help.ovhcloud.com/csm/en-gb-public-cloud-network-change-mtu-size?id=kb_article_view&sysparm_article=KB0058185'
---

## Objective

Jumbo frames are Ethernet frames with more than 1500 bytes of payload. They can carry up to 9000 bytes of payload. Using them minimizes routing processing time. In the case of vRack, this will optimize traffic on it.<br>
But if connectivity from a fully private instance to outside networks (Internet) is done in the network, the MTU has to be set to 1500 bytes of payload.<br>
The MTU size will be the same for all services using IPs in the same network.

**This guide explains how to change the MTU size for an existing network using OpenStack CLI/API.**

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/pl/public-cloud/) in your OVHcloud account
- Using the [OpenStack command line environment](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)
- The [OpenStack Command Line Interface](https://docs.openstack.org/newton/user-guide/common/cli-install-openstack-command-line-clients.html) tool installed on your working environment

Before proceeding, it is recommended that you read these guides:

- [Preparing an environment to use the OpenStack API](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)
- [Setting OpenStack environment variables](/pages/platform/public-cloud/loading_openstack_environment_variables)
- [Managing tokens](/pages/platform/public-cloud/managing_tokens)

## Instructions

### Step 1: Listing networks available in the Public Cloud project

List available networks in the region:

```bash
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| ed85c4df-5ba6-48fb-a7d3-xxxxxxxxxxxx | openstack  | 10d5fe8b-0596-4525-a387-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```

> [!primary]
> You can grab the ID of your private network ( Ext-Net is a public network used for public IP addresses and is managed by OVHcloud).

### Step 2: Displaying private network parameters

Use the following command to display the private network parameters:

```bash
openstack network show ed85c4df-5ba6-48fb-a7d3-xxxxxxxxxxxx
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| availability_zone_hints   |                                      |
| availability_zones        | nova                                 |
| created_at                | 2023-01-13T08:45:06Z                 |
| description               |                                      |
| dns_domain                | None                                 |
| id                        | ed85c4df-5ba6-48fb-a7d3-xxxxxxxxxxxx |
| ipv4_address_scope        | None                                 |
| ipv6_address_scope        | None                                 |
| is_default                | None                                 |
| is_vlan_transparent       | None                                 |
| l2_adjacency              | True                                 |
| mtu                       | 9000                                 |
| name                      | openstack                            |
| port_security_enabled     | True                                 |
| project_id                | f6e0b44aa5104f689870xxxxxxxxxxxx     |
| provider:network_type     | vrack                                |
| provider:physical_network | None                                 |
| provider:segmentation_id  | 0                                    |
| qos_policy_id             | None                                 |
| revision_number           | 5                                    |
| router:external           | Internal                             |
| segments                  | None                                 |
| shared                    | False                                |
| status                    | ACTIVE                               |
| subnets                   | 10d5fe8b-0596-4525-a387-xxxxxxxxxxxx |
| tags                      |                                      |
| tenant_id                 | f6e0b44aa5104f689870bxxxxxxxxxxx     |
| updated_at                | 2023-01-13T13:43:27Z                 |
+---------------------------+--------------------------------------+
```

### Step 3: Setting the new MTU size

- Using the OpenStack CLI:

```bash
openstack network set --mtu 1500 <networkid>
```

- Using the OpenStack API:

```bash
TOKEN=$(openstack token issue -c id -f value)
curl -s -H "X-Auth-Token: $TOKEN" -H "Content-Type: application/json"  -H "Accept: application/json" -X PUT -d '{"network": {"mtu": 1500}}' https://network.compute.<region>.cloud.ovh.net/v2.0/networks/<networkid>
```

### Step 4: Verifying the changes

Display the private network parameters to verify that the change is applied:

```bash
openstack network show <network>
```

### Step 5: Restarting the services

Updating the MTU value for an existing network with instances plugged into it requires a hard reboot of those instances which have a port in this network:

- Public cloud instances
- Managed Kubernetes Node(s) if you [use a custom gateway deployed in vRack with a Managed Kubernetes cluster](/pages/platform/kubernetes-k8s/vrack-k8s-custom-gateway).

## Go further

Join our community of users on <https://community.ovh.com/en/>.
