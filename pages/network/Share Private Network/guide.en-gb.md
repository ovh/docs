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
openstack network create shared_private_network
 ```

3. Create two subnets, one for instances on our project and one shared with another project:
For the Project 1 (local)

 ```sh
openstack subnet create --subnet-range 10.0.1.0/24 --network shared_private_network --allocation-pool start=10.0.1.2,end=10.0.1.254 local_subnet
 ```

For the Project 2 (shared):

 ```sh
openstack subnet create --subnet-range 10.0.0.0/24 --network shared_private_network --allocation-pool start=10.0.0.2,end=10.0.0.254 shared_subnet
 ```

4. Share this network (and associated subnets) with the second project:

 ```sh
NETWORK_ID=$(openstack network list --name shared_private_network -c ID -f value)
openstack network rbac create --target-project <TARGET_PROJECT_ID> --action access_as_shared --type network ${NETWORK_ID}
 ```
Replace <TARGET_PROJECT_ID> with the target project ID (e.g., 9b8e59df41c142559f50c17b844970f9).

5. Create a port on the local subnet and an instance associated with it:

 ```sh
openstack port create --network shared_private_network --fixed-ip subnet=local_subnet local_port
openstack server create --port local_port --security-group default --key-name <KEY_NAME> local_instance
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

On our second (or more) project:
1. List the project IDs:

 ```sh
openstack project list -c ID -f value
 ```

Example output:

 ```sh
33a2d1e1914348868cd0bd6a2b7d2412
 ```
2. Create a port on the shared network:

 ```sh
openstack port create --network shared_private_network --fixed-ip subnet=shared_subnet shared_port
 ```

3. Create a port on the shared network:

 ```sh
openstack server create --flavor d2-2 --image "Ubuntu 22.04" --network shared_private_network --key-name <KEY_NAME> pong_server
 ```

We also connect our instance to the external network to simplify access through the Internet.

As you can see, both instances are connected through their local IP.

Example:

 ```sh
root@public_instance:~# ping -c1 10.0.1.116
PING 10.0.1.116 (10.0.1.116) 56(84) bytes of data.
64 bytes from 10.0.1.116: icmp_seq=1 ttl=64 time=0.292 ms

--- 10.0.1.116 ping statistics ---
1 packets transmitted, 1 received, 0% packet loss, time 0ms
rtt min/avg/max/mdev = 0.292/0.292/0.292/0.000 ms
 ```

## Go Further

Join our community of users on <https://community.ovh.com/en/>.
