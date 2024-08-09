---
title: How to share a private network between 2 Public Cloud projects
excerpt: Find out how to share a private network between two OVHcloud Public Cloud projects
updated: 2024-07-31
---

## Objective

This tutorial will show you how to connect two projects on an internal network. It allows you to synchronize production and preproduction environments across several projects.

## Requirements

- You have 2 or more Public Cloud projects.
- Refer to [Getting started with the OpenStack API](/pages/public_cloud/compute/starting_with_nova).
- Refer to [Attaching a Floating IP to a Public Cloud instance](/pages/public_cloud/public_cloud_network_services/getting-started-03-attach-floating-ip-to-instance).
- Refer to [Managing firewall rules and port security on networks using OpenStack CLI ](/pages/public_cloud/compute/security_group_private_network).

## Instructions

### In the first project

#### 1. List the project IDs

```sh
openstack project list -c ID -f value
```

Example output:

```sh
abc123def456ghi789jkl0mnopqr1234
```

#### 2. Create the network that will be shared

```sh
openstack network create shared_private_network
```

Example output:

```sh
+---------------------------+--------------------------------------+
| Field                     | Value                                |
+---------------------------+--------------------------------------+
| admin_state_up            | UP                                   |
| id                        | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| name                      | shared_private_network               |
| project_id                | abc123def456ghi789jkl0mnopqr1234     |
+---------------------------+--------------------------------------+
```

#### 3. Create two subnets, one for instances on our project and one shared with another project

**For project 1 (local):**

```sh
openstack subnet create --subnet-range 10.0.2.0/24 --network shared_private_network --allocation-pool start=10.0.2.2,end=10.0.2.254 local_subnet_v2
```

Example output:

```sh
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| allocation_pools     | 10.0.2.2-10.0.2.254                  |
| cidr                 | 10.0.2.0/24                          |
| id                   | aa5d399a-6acf-4328-a7a8-e962fa16b792 |
| name                 | local_subnet_v2                      |
| network_id           | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| project_id           | abc123def456ghi789jkl0mnopqr1234     |
+----------------------+--------------------------------------+
```

**For project 2 (shared):**

```sh
openstack subnet create --subnet-range 10.0.3.0/24 --network shared_private_network --allocation-pool start=10.0.3.2,end=10.0.3.254 shared_subnet_v2
```

Example output:

```sh
+----------------------+--------------------------------------+
| Field                | Value                                |
+----------------------+--------------------------------------+
| allocation_pools     | 10.0.3.2-10.0.3.254                  |
| cidr                 | 10.0.3.0/24                          |
| id                   | 441d0d65-2e1b-413c-ad28-2876f1c14025 |
| name                 | shared_subnet_v2                     |
| network_id           | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| project_id           | abc123def456ghi789jkl0mnopqr1234     |
+----------------------+--------------------------------------+
```

#### 4. Share this network (and associated subnets) with the second project

```sh
NETWORK_ID=$(openstack network list --name shared_private_network -c ID -f value)
openstack network rbac create --target-project def456ghi789jkl0mnopqr1234 --action access_as_shared --type network ${NETWORK_ID}
```

Example output:

```sh
+-------------------+--------------------------------------+
| Field             | Value                                |
+-------------------+--------------------------------------+
| action            | access_as_shared                     |
| id                | 890c123d-4567-89ef-gh12-3456789ijkl0 |
| object_id         | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| target_project_id | def456ghi789jkl0mnopqr1234           |
| type              | network                              |
+-------------------+--------------------------------------+
```

####  5. Create a port on the local subnet and an instance associated with it

```sh
openstack port create --network shared_private_network --fixed-ip subnet=local_subnet_v2 local_port_v2
```

Example output:

```sh
+-------------------------+--------------------------------------+
| Field                   | Value                                |
+-------------------------+--------------------------------------+
| id                      | 99cb41a8-3639-4717-81e0-e75618bd7775 |
| name                    | local_port_v2                        |
| network_id              | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| fixed_ips               | ip_address='10.0.2.185', subnet_id='aa5d399a-6acf-4328-a7a8-e962fa16b792' |
+-------------------------+--------------------------------------+
```

```sh
openstack server create --port 99cb41a8-3639-4717-81e0-e75618bd7775 --security-group default --key-name my_key --flavor d2-2 --image "Ubuntu 22.04" local_instance
```

### In the second project

#### 1. Switch to the second project
   
```sh
export OS_PROJECT_ID=def456ghi789jkl0mnopqr1234
```

#### 2. List the project IDs

```sh
openstack project list -c ID -f value
```

Example output:

```sh
def456ghi789jkl0mnopqr1234
```

#### 3. Create a port on the shared network

```sh
openstack port create --network shared_private_network --fixed-ip subnet=shared_subnet_v2 shared_port
```

Example output:

```sh
+-------------------------+--------------------------------------+
| Field                   | Value                                |
+-------------------------+--------------------------------------+
| id                      | f6446f46-ce57-47c4-b3bc-42fa28e7d4ff |
| name                    | shared_port                          |
| network_id              | 3d2ee28e-88a9-46ff-b768-3bf6734b8742 |
| fixed_ips               | ip_address='10.0.3.12', subnet_id='441d0d65-2e1b-413c-ad28-2876f1c14025' |
+-------------------------+--------------------------------------+
```

#### 4. Create an instance on the shared network

```sh
openstack server create --port f6446f46-ce57-47c4-b3bc-42fa28e7d4ff --security-group default --key-name my_key --flavor d2-2 --image "Ubuntu 22.04" pong_server
```

Example output:

```sh
+--------------------------------------+-----------------------------------------------------+
| Field                                | Value                                               |
+--------------------------------------+-----------------------------------------------------+
| id                                   | b8212ec4-5fff-4e31-8969-164ce33e7380                |
| name                                 | pong_server                                         |
| status                               | BUILD                                               |
+--------------------------------------+-----------------------------------------------------+
```

### Verify connectivity

####  1. Connect to the first instance

```sh
ssh -i ~/.ssh/id_rsa ubuntu@<floating_ip>
```

#### 2. Ping the second instance from the first instance

```sh
ping -c1 10.0.3.12
```

Example output:

```sh
PING 10.0.3.12 (10.0.3.12) 56(84) bytes of data.
64 bytes from 10.0.3.12: icmp_seq=1 ttl=64 time=0.292 ms

--- 10.0.3.12 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.292/0.292/0.292/0.000 ms
```
 
## Go further
 
Join our [community of users](/links/community).
