---
title: Public Cloud Network Services - FAQ
slug: faq
excerpt: Frequently Asked Questions on Public Cloud Network Services
section: Getting started
order: 03
---

**Last updated 2nd November 2022**

## Objective

Here are the most frequently asked questions about Public Cloud Network Services.

## Load Balancer

### The Load Balancer offer is priced according to the bandwitdth capacity. How can this be set/changed?

Load Balancer is offered in different sizes (S/M/L) to best fit our customer needs. These different sizes are defined via flavours. As of today, to change the size of your Load Balancer, you will need to spawn a new one, configure it the same way (with the same backends as the old one) and reconnect the Floating IP to the new one. Then the old Load Balancer can be deleted.

### Can I use my Load Balancer with bare metal servers as a backends? Can I use my Load Balancer with backends in different Public Cloud regions?

Currently, we don't support these modes. For public-to-private loadbalancing, the Gateway products needed to be linked together. As of today, Gateway supports only single-region scope in private networks. It also means that it is limited to Public Cloud and this is the only suggested scope for production-grade architectures.<br>
As of today, other setups (including cross-universe usage with baremetal servers or cross-region) are not supported.

### Can I connect my Load Balancer to my Managed Kubernetes cluster?

Yes, please read [this documentation](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/octavia-ingress-controller/using-octavia-ingress-controller.md#get-started-with-octavia-ingress-controller-for-kubernetes).

### Does the Load Balancer account use bandwidth?

No, it doesn't.

### I'm deploying Octavia Load Balancer for use in a Kubernetes Managed stack and I want to monitor Octavia Load Balancer. Is it possible to enable [metrics](https://docs.openstack.org/octavia/latest/user/guides/monitoring.html) automatically on Load Balancer?

This feature comes from the Octavia Load Balancer component in the Yoga release which is not currently available. We are working on upgrading Octavia and Barbican from Victoria to Yoga. Once this is done, we will share this update on [this page](https://www.ovhcloud.com/en/public-cloud/regions-availability/).

### How is the redundancy implemented for each type of service plan? Are the Amphoras configured in a ACT/STBY mode?

Yes, we offer Active/Standby mode for all plans S/M/L.

### Can the Load Balancer be used with Additional IPs (IP Failover)?

No. A new type of IP has been introduced for this purpose, Floating IP. It's more flexible and working on a pay-as-you-go model for automation purposes. With Floating IP, you can use a single Floating IP per Load Balancer service.

### Can I use multiple protocols (UDP, TCP, HTTP) on one Load Balancer?

Yes, mulitple listeners (frontends) and backends can be configured. There is only a limitation of a single Floating IP per Load Balancer.

### What's happening if our Octavia Load Balancer receives more requests than indicated? Will the price increase? Will I be notified?

First of all, the values shown are only a rough estimate of the Load Balancer's capabilities. The price will not increase. Pricing is linked to the flavors (small, medium, large) and we cannot change the flavor at this time. This is up to customers' orchestration services. 

We do not inform you when you reach the estimated values. However, when you exceed them (entirely depending on the workload), the Load Balancer will reach its maximum performance and will not be able to accept new connections.

### I don't see the Load Balancer interface in the OVHcloud Control Panel. Where can I create services and modify settings?

Load Balancer is available through the OpenStack CLI, Horizon UI and OVHcloud APIv6. The user interface in the OVHcloud Control Panel will be available soon.

### I use Load Balancer with my Managed Kubernetes cluster, but get an error "failed to find Octavia endpoint for region gra: No suitable endpoint could be found in the service catalog.". What's wrong?

Please check if the region is the same between Octavia Load Balancer and Managed Kubernetes.

### While setting Load Balancer with my Managed Kubernetes cluster, I get an error "Flavor '...' is not compatible with provider 'Octavia'". What's wrong?

Please use the provider name "amphora" instead of Octavia to fix this.

## Gateway

### What is Gateway? How does it fit into the OpenStack ecosystem?

Gateway is the product name for the Distributed Virtual Router (DvR) component in OpenStack. It is offered with HA and SLA.

### The Gateway solution is priced according to the bandwitdth capacity. How can this be set/changed?

Gateway is offered in different sizes (S/M/L) to best fit our customer needs. These different sizes are defined via QoS policies. As of today, to change the size of Gateway, a change of QoS policy between S/M/L can be done.

### Can the Gateway be used with instances of Load Balancer in other regions?

We don't support this mode currently. For the moment, Gateway supports only single-region private networks and this is the only suggested private-network scope for production-grade setups with this product. This also includes the public-to-private Load Balancer use case that requires Gateway. Other setups (including usage with bare metal servers or cross-region) are not supported.

### Can the L3 virtual router (Gateway) help me if I would like to have a gateway to access the Internet for all my VMs in my vRack?

Yes, that's exactly the use case for Gateway (L3 router with SNAT option). Currently, only instances in **private mode** of networking that are connected to a single-region private network are supported. For more information, please refer to our [concept guide on Public Cloud Networking](https://docs.ovh.com/us/en/publiccloud/network-services/networking-concepts/).

### Will Gateway be provided with a public IP and port?

It depends on the usage:

- For outbound use cases we offer a shared public IP on Gateway which is included.
- For inbound use cases (to expose a service running on a private instance to the Internet) you need to have a Floating IP to attach via Gateway to your instance or network service.

### How can I spawn a private instance to be used with Gateway and SNAT option?

You can create a private network in a selected region and attach Gateway to it. Then, while creating an instance, select "Attach to private network" and confirm it using the button "Yes, I want my instance to be fully-private".

### I created an instance in private mode (it only has private ports). How can I connect to it?

Two options can be used: 

- Using a "jump host" (SSH proxy): You need to use another instance that has Floating IP (allowing for external access) and a private port in the same private network that your new instance is in. Log on to it and connect via SSH to the private IP of your new instance.
- Attaching a Floating IP address (at least for the time of maintenance) to your newly created instance and connect to it using that Floating IP.

## Floating IPs

### When I try to associate the Floating IP to the port on the Ext-Net network, I get the following error: "External network ... is not reachable from subnet .... Therefore, cannot associate Port ... with a Floating IP."

A Floating IP is a flexible public IP address that can be associated to a private port only (port on private network in vRack). You will need also a Gateway for it to work.

### I have VMs communicating in a private network and I want to associate a Floating IP to one of these VMs. What is the pool to choose for the Floating IP?

The pool for a Floating IP must be "Ext-Net" and you can associate it to a port on the private network.

## Go further

Join our community of users on <https://community.ovh.com/en/>.