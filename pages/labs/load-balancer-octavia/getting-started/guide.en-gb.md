---
title: Getting started with Load Balancer on Public Cloud
slug: getting-started-with-load-balancer-public-cloud
excerpt: Discover how to start a Load Balancer on Public Cloud
section: Getting started
order: 1
---

**Last updated 30/04/2021**

## Objective

You want to discover our new Load Balancer solution, integrated into the Public Cloud. They are based on [Openstack Octavia](https://wiki.openstack.org/wiki/Octavia) service.

**Discover how to start a Load Balancer on Public Cloud.**

## Requirements

- A project in [Public Cloud](https://www.ovhcloud.com/en-gb/public-cloud/)
- You need to have activated the GRA9 region in your project
- Use the Openstack command line environment ([Tutorial](https://docs.ovh.com/gb/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/))
- You need to have the Openstack client

## In practice

### Configuring your private network

Before you start using a Load Balancer, you will need to create a private network in the region.

```
openstack network create my_network

openstack subnet create my_subnet --subnet-range <my_private_ip_range/mask> --network my_network --no-dhcp

openstack router create my_router

openstack router add subnet my_router my_subnet

openstack router set --external-gateway Ext-Net my_router
```

> [!alert]
>
> Warning, the network must be deployed at least at GRA9 and must not be part of subnet 10.224.0.0/16 (should be functional when generally available)

You can now attach your instances to this new network. We recommend following this guide to [attach your instance to your network](https://docs.ovh.com/gb/en/public-cloud/prepare_the_environment_for_using_the_openstack_api/). Take note of the addresses of your instances in your network with the following command.

```
openstack server list
```

You now need to configure your instances to have their IP addresses configured on their interfaces.

### Creating the Load Balancer

You can view a list of the different Load Balancer flavors we offer with this command.

```
openstack loadbalancer flavor list
```

You can now create your Load Balancer with this command. In this example, we will create a Small Load Balancer.

```
openstack loadbalancer create --name my_load_balancer --flavor small --vip-subnet-id my_subnet
```

Your Load Balancer will be configured with an IP address in the private network. If you want to have access from the internet, you will need to attach a Floating IP address.

### Attach a Floating IP address to a Load Balancer

This is how to attach a Floating IP address to a Load Balancer.

```
openstack floating ip create Ext-Net

openstack floating ip set --port <my_load_balancer_vip_port_id> <floating_ip>
```

> [!primary]
>
> To retrieve the VIP port ID of your Load Balancer, you can do `openstack loadbalancer show my_load_balancer`.

### Configuring your Load Balancer

In this example, we will just make an HTTP Load Balancer. To do this, you first need to create a Listner. You can use it to listen on port 80 of the Load Balancer.

```
openstack loadbalancer listner create --name my_listener_http --protocol HTTP --protocol-port 80 my_loadbalancer
```

Once the Listener has been created, you need to add the different instances that can respond to customer requests. To do this, you must create an Instance Pool.

```
openstack loadbalancer pool create --name my_pool_http --lb-algorithm ROUND_ROBIN --listener my_listener --protocol HTTP
```

And you can now add your instances to the Pool.

```
openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_1> --protocol-port 80 my_pool
openstack loadbalancer member create --subnet-id my_subnet --address <private_ip_instance_2> --protocol-port 80 my_pool
```

You can now access your Load Balancer via the Floating IP or private IP address from an instance in your private network.

## Go further

[Discover other pages about Load Balancer on Public Cloud](../../load-balancer-octavia)

[Official documentation of Openstack Octavia](https://docs.openstack.org/octavia/latest/)

[Cookbook Openstack Octavia](https://docs.openstack.org/octavia/latest/user/guides/basic-cookbook.html)

Join our community of users on <https://community.ovh.com>.

**Join [out Gitter room ](https://gitter.im/ovh/octavia-loadbalancer) to discuss with the OVHcloud team and other users of this lab.**