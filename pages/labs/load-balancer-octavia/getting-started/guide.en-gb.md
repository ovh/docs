---
title: Getting started with Load Balancer on Public Cloud (Beta)
slug: getting-started-with-load-balancer-public-cloud
excerpt: Discover how to launch a Load Balancer on Public Cloud
section: Getting started
order: 1
---

**Last updated 5th May 2021**

## Objective

Our new Load Balancer as a Service (LBaaS) solution is based on [OpenStack Octavia](https://wiki.openstack.org/wiki/Octavia) and will be fully integrated into the Public Cloud universe.

**Learn how to configure an OVHcloud Load Balancer with the help of this guide.**

## Requirements

- a [Public Cloud project](https://www.ovhcloud.com/en-gb/public-cloud/) in your OVHcloud account
- You need to have activated the GRA9 region in your project
- Using the OpenStack command line environment ([Tutorial](https://docs.ovh.com/gb/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/))
- You need to have the OpenStack client set up

## Instructions

### Configuring your private network

Before creating a Load Balancer, you will need to set up a private network:

```
openstack network create my_network

openstack subnet create my_subnet --subnet-range <my_private_ip_range/mask> --network my_network --no-dhcp

openstack router create my_router

openstack router add subnet my_router my_subnet

openstack router set --external-gateway Ext-Net my_router
```

> [!warning]
>
> Since this guide only concerns the Beta version of the service, the network must be deployed at least at GRA9 and must not be part of the subnet 10.224.0.0/16. (These restrictions will be lifted with general availability.)

You can now attach your instances to the new network. We recommend following our guide to [integrate an instance into vRack](https://docs.ovh.com/gb/en/public-cloud/public-cloud-vrack/#step-3-integrating-an-instance-into-vrack_1). List the addresses of your instances in your network with the following command.

```
openstack server list
```

In the next step, configure the network interfaces of your instances according to this output.

### Creating the Load Balancer

You can view a list of the different Load Balancer flavors we offer with this command:

```
openstack loadbalancer flavor list
```

You can now create your Load Balancer with the following command. In this example, we will create a "Small" Load Balancer.

```
openstack loadbalancer create --name my_load_balancer --flavor small --vip-subnet-id my_subnet
```

Your Load Balancer will be configured with an IP address of the private network. If you want to have access from the internet, you will need to attach a Floating IP address.

### Attaching a Floating IP address to a Load Balancer

This is how to attach a Floating IP address to a Load Balancer:

```
openstack floating ip create Ext-Net
openstack floating ip set --port <my_load_balancer_vip_port_id> <floating_ip>
```

> [!primary]
>
> To retrieve the VIP port ID of your Load Balancer, use `openstack loadbalancer show my_load_balancer`.


### Configuring your Load Balancer

In this example we will configure a HTTP Load Balancer. In order to listen on port 80 of the Load Balancer, create a Listener with this command:

```
openstack loadbalancer listener create --name my_listener_http --protocol HTTP --protocol-port 80 my_loadbalancer
```

Once the Listener has been created, you need to add each instance that can respond to external requests. To do this, you must create an Instance Pool:

```
openstack loadbalancer pool create --name my_pool_http --lb-algorithm ROUND_ROBIN --listener my_listener --protocol HTTP
```

Add your instances to the Instance Pool:

```
openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_1> --protocol-port 80 my_pool
openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_2> --protocol-port 80 my_pool
```

You can now access your Load Balancer via the Floating IP or private IP address from an instance in your private network.

## Go further

[Official documentation of OpenStack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook OpenStack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

Discover other pages about [Load Balancer on Public Cloud](../)

Join our community of users on <https://community.ovh.com/en/>.

**Join [our Gitter room](https://gitter.im/ovh/octavia-loadbalancer) to discuss with the OVHcloud team and other users of this lab.**
