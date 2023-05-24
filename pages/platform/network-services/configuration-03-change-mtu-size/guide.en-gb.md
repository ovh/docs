---
title: Change MTU Size For Existing Network Using OpenStack CLI/API
excerpt: Find out how to change the mtu size for existing public cloud network using OpenStack CLI/API
updated: 2023-05-24
---

## Objective

> [!primary]
> Jumbo frames are Ethernet frames with more than 1500 bytes of payload. They can carry up to 9000 bytes of payload. Using them minimizes routing processing time. In the case of vRack, this will optimize traffic on it.
But if connectivity from a fully private instance to outside networks (Internet) is done in the network, the MTU have to be set to 1500 bytes of payload.
MTU size will be the same for all services using IPs in the same network.

**This guide explains how to change the mtu on a Public Cloud Network.**

## Pre-requisites

- A [Public Cloud project](https://docs.ovh.com/gb/en/public-cloud/create_a_public_cloud_project/) in your OVHcloud account.

Before proceeding, it is recommended that you consult these guides:

- [Preparing an environment to use the OpenStack API](https://docs.ovh.com/gb/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/)
- [Setting OpenStack environment variables](https://docs.ovh.com/gb/en/public-cloud/set-openstack-environment-variables/)
- [Managing tokens](https://help.ovhcloud.com/csm/en-public-cloud-compute-managing-tokens?id=kb_article_view&sysparm_article=KB0050965)

## Instructions

### Step 1: List Networks available in the Public Cloud project

List Networks available in the Public Cloud project

```sh
openstack network list
 
+--------------------------------------+------------+-------------------------------------+
| ID                                   | Name       | Subnets                             |
+--------------------------------------+------------+-------------------------------------+
| 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
| 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | openstack  | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
+--------------------------------------+------------+-------------------------------------+
```
> [!primary]
> You can grab the ID of your private Network. ( Ext-Net is a public network used for public IP address and is managed by OVH )

### Step 2: Show private network parameters

Show private network parameters

```sh
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

### Step 3: Setting new MTU size

To modify the MTU size via the OpenStack CLI

```bash
openstack network set --mtu 1500 <networkid>
```

To change the MTU size using the OpenStack API

```bash
TOKEN=$(openstack token issue -c id -f value)
curl -s -H "X-Auth-Token: $TOKEN" -H "Content-Type: application/json"  -H "Accept: application/json" -X PUT -d '{"network": {"mtu": 1500}}' https://network.compute.<region>.cloud.ovh.net/v2.0/networks/<networkid>
```

### Step 4: Verify the changes

Show private network parameters to verify change is applied

```bash
openstack network show <network>
```

### Step 5: Restart the services

Updating the mtu value for an existing network with instances plugged into it requires either a hard reboot of those instances with port in this network:
<br> - Public cloud instances
<br> - Managed Kubernetes Node(s) if you [use a custom gateway deployed in vRack with a Managed Kubernetes cluster](https://help.ovhcloud.com/csm/fr-managed-kubernetes-k8s-vrack-k8s-custom-gateway?id=kb_article_view&sysparm_article=KB0056027) .  

## Go further

Join our community of users on <https://community.ovh.com/en/>.
