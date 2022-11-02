---
title: Deploying an Octavia Load Balancer
slug: octavia-lbaas-in-openstack-env-deep-dive
excerpt: Find out how to configure the Octavia LBaaS for Public Cloud
section: Technical resources
order: 01
---

**Last updated 2nd November 2022**

## Objective

This tutorial explains the following Load Balancer configurations:

- Deploying a basic HTTP Load Balancer Private → Private
- Deploying a basic HTTP Load Balancer Public → Private

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account
- A [private network](https://docs.ovh.com/asia/en/public-cloud/public-cloud-vrack/) configured in your project
- [OpenStack Octavia client](https://docs.openstack.org/python-octaviaclient/latest/install/index.html) installed

## Instructions

### Load Balancer within your Private Network (Private → Private)

When you create a Load Balancer, by default it gets a private IP in the private network selected during its creation.

We want to balance the load between the two backends: `backend--1` and `backend--2`.

```bash
(os_client) ~ openstack server list     

+--------------------------------------+------------+--------+-----------------------------------------------------------------------+--------------+--------+
| ID                                   | Name       | Status | Networks                                                              | Image        | Flavor |
+--------------------------------------+------------+--------+-----------------------------------------------------------------------+--------------+--------+
| 5b8c722b-57d0-460a-b2c0-b0a681bf4e52 | backend--2 | ACTIVE | priv-net=10.0.111.243                                                 | Ubuntu 20.04 | d2-4   |
| 9a43ce4c-e0fe-4a54-81f5-aad3ac6f8e88 | backend--1 | ACTIVE | priv-net=10.0.112.172                                                 | Ubuntu 20.04 | d2-4   |
| 67b9372e-bf08-4c57-9945-42b07dbfcd36 | bastion    | ACTIVE | Ext-Net=2001:48f0:163:100::1662, 169.254.10.150; priv-net=10.0.109.243 | Ubuntu 20.04 | d2-8   |
+--------------------------------------+------------+--------+-----------------------------------------------------------------------+--------------+--------+
```

**Step 1: Create the Load Balancer**

```bash
openstack loadbalancer create --name loadbalancer_private_to_private --vip-subnet-id <private_subnet_id>
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| admin_state_up      | True                                 |
| availability_zone   | None                                 |
| created_at          | 2022-06-29T12:24:35                  |
| description         |                                      |
| flavor_id           | 2d4bc92c-38fc-4b50-9484-8351ab0c4e69 |
| id                  | 4db76fce-f8f7-435f-8031-716f82a7f1dc |
| listeners           |                                      |
| name                | loadbalancer_private_to_private      |
| operating_status    | OFFLINE                              |
| pools               |                                      |
| project_id          | 96575fa614c14aa7b001c7e121d772f2     |
| provider            | amphora                              |
| provisioning_status | PENDING_CREATE                       |
| updated_at          | None                                 |
| vip_address         | 10.0.3.50                            |
| vip_network_id      | d20943ed-5159-4805-b48a-2375dd93e480 |
| vip_port_id         | 631f240c-16f7-483f-b1c4-6eff7a8adcf4 |
| vip_qos_policy_id   | None                                 |
| vip_subnet_id       | 4ecfca39-6e87-496a-8692-2e7f43bf7767 |
| tags                |                                      |
+---------------------+--------------------------------------+
```

> [!warning] **Octavia Flavors**
> 
> If you do not provide the parameter `--flavor` during the creation, the Load Balancer will be of a small size.
> 

Use the following command to display the Octavia flavors in OpenStack:

```bash
❯ openstack loadbalancer flavor list
+--------------------------------------+--------+--------------------------------------+---------+
| id                                   | name   | flavor_profile_id                    | enabled |
+--------------------------------------+--------+--------------------------------------+---------+
| 2d4bc92c-38fc-4b50-9484-8351ab0c4e69 | small  | e9970d43-695e-4947-8005-38be80bc966a | True    |
| 4d6a92af-d4c8-4e81-8596-e3b14159e232 | medium | 24559467-a4dd-4712-9981-93276400fa17 | True    |
| fd43698c-0a2f-4124-9695-478f9114a07c | large  | 3ded4565-7bc7-40b3-9a2c-83077035b134 | True    |
+--------------------------------------+--------+--------------------------------------+---------+
```

> [!warning] **Octavia status**
>
> The Octavia Load Balancer creation will take some time, mainly to create the instance and to configure the network.
>
> For the next configuration, you will have to wait until the `provisioning_status` becomes `ACTIVE`.

You can already see when creating our Load Balancer that it is associated with a Virtual IP address (VIP).

```console
| vip_address | 10.0.3.50 |
```

This will be our Load Balancer IP inside our Private Network.


**Step 2: Create a listener**

```bash
openstack loadbalancer listener create --protocol-port 80 --protocol HTTP --name listener <loadbalancer_id>
+-----------------------------+--------------------------------------+
| Field                       | Value                                |
+-----------------------------+--------------------------------------+
| admin_state_up              | True                                 |
| connection_limit            | -1                                   |
| created_at                  | 2022-06-29T12:34:37                  |
| default_pool_id             | None                                 |
| default_tls_container_ref   | None                                 |
| description                 |                                      |
| id                          | e2e67b80-61e6-43bd-b1f1-703ab1abc7af |
| insert_headers              | None                                 |
| l7policies                  |                                      |
| loadbalancers               | 4db76fce-f8f7-435f-8031-716f82a7f1dc |
| name                        | listener                             |
| operating_status            | OFFLINE                              |
| project_id                  | 96575fa614c14aa7b001c7e121d772f2     |
| protocol                    | HTTP                                 |
| protocol_port               | 80                                   |
| provisioning_status         | PENDING_CREATE                       |
| sni_container_refs          | []                                   |
| timeout_client_data         | 50000                                |
| timeout_member_connect      | 5000                                 |
| timeout_member_data         | 50000                                |
| timeout_tcp_inspect         | 0                                    |
| updated_at                  | None                                 |
| client_ca_tls_container_ref | None                                 |
| client_authentication       | NONE                                 |
| client_crl_container_ref    | None                                 |
| allowed_cidrs               | None                                 |
| tls_ciphers                 | None                                 |
| tls_versions                | None                                 |
| alpn_protocols              | None                                 |
| tags                        |                                      |
+-----------------------------+--------------------------------------+
```

**Step 3: Create the pool**
 
```bash 
❯ openstack loadbalancer pool create --name pool --lb-algorithm ROUND_ROBIN --listener <listener_id> --protocol HTTP
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| admin_state_up       | True                                 |
| created_at           | 2022-06-29T12:41:52                  |
| description          |                                      |
| healthmonitor_id     |                                      |
| id                   | f0c833f7-53bb-46b7-8818-637d89a68089 |
| lb_algorithm         | ROUND_ROBIN                          |
| listeners            | e2e67b80-61e6-43bd-b1f1-703ab1abc7af |
| loadbalancers        | 4db76fce-f8f7-435f-8031-716f82a7f1dc |
| members              |                                      |
| name                 | pool                                 |
| operating_status     | OFFLINE                              |
| project_id           | 96575fa614c14aa7b001c7e121d772f2     |
| protocol             | HTTP                                 |
| provisioning_status  | PENDING_CREATE                       |
| session_persistence  | None                                 |
| updated_at           | None                                 |
| tls_container_ref    | None                                 |
| ca_tls_container_ref | None                                 |
| crl_container_ref    | None                                 |
| tls_enabled          | False                                |
| tls_ciphers          | None                                 |
| tls_versions         | None                                 |
| tags                 |                                      |
| alpn_protocols       | None                                 |
+----------------------+--------------------------------------+
```

**4. Add the servers**
 
```bash
❯ openstack loadbalancer member create --subnet-id <private_subnet_id> --address <server_ip_address>  --protocol-port 80 <pool_id>
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| address             | 10.0.3.123                           |
| admin_state_up      | True                                 |
| created_at          | 2022-06-29T12:48:55                  |
| id                  | fbe34622-2538-4896-bda3-d92ca66f7a30 |
| name                |                                      |
| operating_status    | NO_MONITOR                           |
| project_id          | 96575fa614c14aa7b001c7e121d772f2     |
| protocol_port       | 80                                   |
| provisioning_status | PENDING_CREATE                       |
| subnet_id           | 4ecfca39-6e87-496a-8692-2e7f43bf7767 |
| updated_at          | None                                 |
| weight              | 1                                    |
| monitor_port        | None                                 |
| monitor_address     | None                                 |
| backup              | False                                |
| tags                |                                      |
+---------------------+--------------------------------------+
```

**5. Use your Load Balancer**

```bash
root@bastion:~# curl http://10.0.3.50/backend.txt
Backend 1
root@bastion:~# curl http://10.0.3.50/backend.txt
Backend 2
```

### Load Balancer with a public IP (Public → Private)

We will be using the Octavia Load Balancer previously deployed in a private network and use an OpenStack Floating IP.

We will need to create a Floating IP address on the public network (Ext-Net), and then associate it to the Load Balancer's VIP port.

In order to use a Floating IP, we will need to create an L3 router and configure an external Gateway on it.

#### What is the role of a Floating IP?

Floating IP addresses are used in the OpenStack universe to expose resources (Neutron port) to the Internet. You can associate a Floating IP to a private network port **only**.

You can expose two types of resources:

- An instance with a private port
- An Octavia Load Balancer Virtual IP address (VIP)

Floating IP currently does not support IPv6.

You can read more about it on our dedicated [Concepts page](https://docs.ovh.com/asia/en/publiccloud/network-services/additional-ip-vs-floating-ip/).

**Step 1: Create the router**

```bash
openstack router create <router_name>
```

**Step 2: Add an external Gateway on your router**

```bash
openstack router set --external-gateway Ext-Net <router_name>
```

**Step 3: Attach the router to your Private Network**

```bash
openstack router add subnet <router_id> <subnet_id>
```

Now we can create a Floating IP on the public network: Ext-Net

```bash
openstack floating ip create Ext-Net
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| created_at          | 2022-06-29T13:19:10Z                 |
| description         |                                      |
| dns_domain          | None                                 |
| dns_name            | None                                 |
| fixed_ip_address    | None                                 |
| floating_ip_address | 169.254.10.250                       |
| floating_network_id | b2c02fdc-ffdf-40f6-9722-533bd7058c06 |
| id                  | 5f1ad04e-f341-457b-a174-a1204ee4feef |
| name                | 169.254.10.250                       |
| port_details        | None                                 |
| port_id             | None                                 |
| project_id          | 96575fa614c14aa7b001c7e121d772f2     |
| qos_policy_id       | None                                 |
| revision_number     | 0                                    |
| router_id           | None                                 |
| status              | DOWN                                 |
| subnet_id           | None                                 |
| tags                | []                                   |
| updated_at          | 2022-06-29T13:19:10Z                 |
+---------------------+--------------------------------------+
```

Associate its ID to the Load Balancer's VIP address:

```bash
openstack floating ip set --port <load_balancer_vip_port_id> <floating_ip_id>
```

**Using your Load Balancer with its public IP**

```bash
❯ curl http://169.254.10.250/backend.txt
Backend 2
❯ curl http://169.254.10.250/backend.txt
Backend 1
❯ curl http://169.254.10.250/backend.txt
Backend 2
❯ curl http://169.254.10.250/backend.txt
Backend 1
❯ curl http://169.254.10.250/backend.txt
Backend 2
```

#### Where to place the public Gateway

The public Gateway is defined by an L3 router attached to a private network with an external Gateway.

![diagram](images/topology.png){.thumbnail}


## Go further

[Getting started with Load Balancer on Public Cloud](https://docs.ovh.com/asia/en/publiccloud/network-services/getting-started-with-load-balancer-public-cloud/)

[Official documentation of OpenStack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook OpenStack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

[OpenStack Floating IP](https://docs.openstack.org/ocata/user-guide/cli-manage-ip-addresses.html)

Join our community of users on <https://community.ovh.com/en/>.

Join our [Discord](https://discord.gg/PwPqWUpN8G) to discuss with the OVHcloud team and other users.