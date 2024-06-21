---
title: Network - How to share a private network between 2 public cloud projects
excerpt: Learn how to share a private network between two public cloud projects on OVH Cloud
updated: 2024-06-20
---

## Objective

This guide will show you how to connect two projects on an internal network. It allows you to synchronize production and preproduction environments across several projects.

## Capabilities and limitations

### Prerequisites

- Have 2 or more projects.

### Procedure

#### On our first project

1. List the project IDs:
 ```sh
   openstack project list -c ID -f value
```
Example output:

```sh
d7b8d09e392c4f26a3c6499c114ac242
```

2. Create the network that will be shared:
   
```sh
openstack network create <SHARED_NETWORK_NAME>
```

3. Create two subnets, one for instances on our project and one shared with another project:

For the Project 1
```sh
openstack subnet create --subnet-range <LOCAL_NETWORK_RANGE> --network <SHARED_NETWORK_NAME> --allocation-pool start=<LOCAL_NETWORK_DHCP_START>,end=<LOCAL_NETWORK_DHCP_END> <LOCAL_SUBNET_NAME>
```
For the Project 2 :
```sh
openstack subnet create --subnet-range <SHARED_NETWORK_RANGE> --network <SHARED_NETWORK_NAME> --allocation-pool start=<SHARED_NETWORK_DHCP_START>,end=<SHARED_NETWORK_DHCP_END> <SHARED_SUBNET_NAME>
```

4. Share this network (and associated subnets) with the second project:
```sh
NETWORK_ID=$(openstack network list --name <SHARED_NETWORK_NAME> -c ID -f value)
openstack network rbac create --target-project <TARGET_PROJECT_ID> --action access_as_shared --type network ${NETWORK_ID}
```
5. Create a port on the local subnet and an instance associated with it:
```sh
openstack port create --network <SHARED_NETWORK_NAME> --fixed-ip subnet=<LOCAL_SUBNET_NAME> <LOCAL_PORT_NAME>
openstack server create --port <LOCAL_PORT_NAME> --security-group default --key-name <KEY_NAME> <INSTANCE_NAME>
```

To switch projects via the OpenStack CLI, use the OS_PROJECT_ID or OS_PROJECT_NAME environment variables depending on whether you prefer to use the project ID or name. Here's how to change the project:

Change project using project name:

```sh
export OS_PROJECT_NAME=project_B
```

Or using the project ID:

```sh
export OS_PROJECT_ID=1234567890abcdef
```

On our second (or more) project :

1. List the project IDs:
   
```sh
openstack project list -c ID -f value
```

```sh
33a2d1e1914348868cd0bd6a2b7d2412
```
2. Create a port on the shared network:
```sh
openstack port create --network <SHARED_NETWORK_NAME> --fixed-ip subnet=<SHARED_SUBNET_NAME> <SHARED_PORT_NAME>
```

3. Create a port on the shared network:

```sh
openstack network create <SHARED_NETWORK_NAME>
```

We also connect our instance to the external network to simplify access through the Internet.

As you can see, both instances are connected through their local IP.

Example:

```sh
root@public_instance:~# ping -c1 192.168.200.109
PING 192.168.200.109 (192.168.200.109) 56(84) bytes of data.
64 bytes from 192.168.200.109: icmp_seq=1 ttl=64 time=0.292 ms

--- 192.168.200.109 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.292/0.292/0.292/0.000 ms
```

## Go further
 
Join our community of users on <https://community.ovh.com/en/>.
   
