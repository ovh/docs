---
title: Public Cloud Network Services - FAQ
excerpt: Frequently Asked Questions on Public Cloud Network Services
updated: 2024-01-30
---

## Objective

Here are the most frequently asked questions about Public Cloud Network Services.

## Load Balancer

### The Load Balancer offer is priced according to the bandwidth capacity. How can this be set/changed?

Load Balancer is offered in different sizes (S/M/L) to best fit our customer needs. These different sizes are defined via flavours. As of today, to change the size of your Load Balancer, you will need to spawn a new one, configure it the same way (with the same backends as the old one) and reconnect the Floating IP to the new one. Then the old Load Balancer can be deleted.

### Can I use my Load Balancer with bare metal servers as a backends? Can I use my Load Balancer with backends in different Public Cloud regions?

Currently, we don't support these modes. For public-to-private loadbalancing, the Gateway products needed to be linked together. As of today, Gateway supports only single-region scope in private networks. It also means that it is limited to Public Cloud and this is the only suggested scope for production-grade architectures.<br>
As of today, other setups (including cross-universe usage with baremetal servers or cross-region) are not supported.

### Can I connect my Load Balancer to my Managed Kubernetes Service (MKS)?

A beta is ongoing to provide integration with Managed Kubernetes Service. Please reach out on the [Discord community](https://discord.gg/ovhcloud) on the channel **#beta-lb-for-k8s**

### I want to monitor my Public Cloud Load Balancer. Is it possible to enable [metrics](https://docs.openstack.org/octavia/latest/user/guides/monitoring.html) automatically on Load Balancer?

Yes this feature is available since we rolled out Zed version in June 2023. You can find more information on [this page](/pages/public_cloud/public_cloud_network_services/technical-resources-02-octavia-monitoring-prometheus).

### How is the redundancy implemented for each type of service plan? Are the Amphoras configured in a ACT/STBY mode?

Yes, we offer Active/Standby mode for all plans S/M/L.

### Can the Load Balancer be used with Additional IPs (IP Failover)?

No. A new type of IP has been introduced for this purpose, Floating IP. It's more flexible and working on a pay-as-you-go model for automation purposes. With Floating IP, you can use a single Floating IP per Load Balancer service.

### Can I use multiple protocols (UDP, TCP, HTTP) on one Load Balancer?

Yes, multiple listeners (frontends) and pool (backends) can be configured. There is only a limitation of a single Floating IP per Load Balancer.

### What's happening if our Public Cloud Load Balancer receives more requests than indicated? Will the price increase? Will I be notified?

First of all, the values shown are only a rough estimate of the Load Balancer's capabilities. The price will not increase. Pricing is linked to the flavors (small, medium, large) and we cannot change the flavor at this time. This is up to customers' orchestration services. 

It is up to the customer to monitor the load balancer using the metrics feature and to change the flavor accordingly.

### I don't see the Load Balancer interface in the OVHcloud Control Panel. Where can I create services and modify settings?

Load Balancer is available through the OpenStack CLI, Horizon UI and OVHcloud APIv6. The user interface in the OVHcloud Control Panel will be available soon.

## Gateway

### What is Gateway? How does it fit into the OpenStack ecosystem?

Gateway is the product name for the Distributed Virtual Router (DvR) component in OpenStack. It is offered with High Availability and a Service Level Agreement.

### The Gateway solution is priced according to the bandwidth capacity. How can this be set/changed?

Gateway is offered in different sizes (S/M/L) to best fit our customer needs. These different sizes are defined via QoS policies. As of today, to change the size of Gateway, a change of QoS policy between S/M/L can be done.

### Can the Gateway be used with instances of Load Balancer in other regions?

We don't support this mode currently. For the moment, Gateway supports only single-region private networks and this is the only suggested private-network scope for production-grade setups with this product. This also includes the public-to-private Load Balancer use case that requires Gateway. Other setups (including usage with bare metal servers or cross-region) are not supported.

### Can the L3 virtual router (Gateway) help me if I would like to have a gateway to access the Internet for all my VMs in my vRack?

Yes, that's exactly the use case for Gateway (L3 router with SNAT option). Currently, only instances in **private mode** of networking that are connected to a single-region private network are supported. For more information, please refer to our [concept guide on Public Cloud Networking](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

### Can I use a L3 router to route traffic between different subnets inside a Public Cloud region ?

Yes, you can use a L3 router without SNAT option through the Openstack GUI / CLI / Terraform. In that case, the bandwidth limits are driven by the quality of service on the instance private bandwidth. Hence, choosing an `S` flavor would not impact the performances.

### Will Gateway be provided with a public IP and port?

It depends on the usage:

- For outbound use cases we offer a public IP which is included in the Gateway price. This IP is associated to the instantiated Gateway and cannot be moved to another one. In other words, the IP used for outbound traffic is not a 'Floating IP'. If this is creating friction for your use case, please upvote for this [roadmap item](https://github.com/ovh/public-cloud-roadmap/issues/448).
- For inbound use cases (to expose a service running on a private instance to the Internet) you need to have a Floating IP to attach via Gateway to your instance or network service.

### How can I spawn a private instance to be used with Gateway and SNAT option?

You can create a private network in a selected region and attach Gateway to it. Then, while creating an instance, select "Attach to private network" and confirm it using the button "Yes, I want my instance to be fully-private".

### Is the Gateway outbound public IP protected against DDoS attacks?

Yes, the [OHVcloud Anti-DDoS infrastructure](https://www.ovhcloud.com/en-gb/security/anti-ddos/) is activated on all those IPs. You can view that information in the `Bare Metal Cloud > Network > IP` section of the Control Panel. 

### I created an instance in private mode (it only has private ports). How can I connect to it?

Two options can be used: 

- Using a "jump host" (SSH proxy): You need to use another instance that has Floating IP (allowing for external access) and a private port in the same private network that your new instance is in. Log on to it and connect via SSH to the private IP of your new instance.
- Attaching a Floating IP address (at least for the time of maintenance) to your newly created instance and connect to it using that Floating IP, then detach the Floating IP.

## Floating IPs

### When I try to associate the Floating IP to the port on the Ext-Net network, I get the following error: "External network ... is not reachable from subnet .... Therefore, cannot associate Port ... with a Floating IP."

A Floating IP is a flexible public IP address that can be associated to a private port only (port on private network in vRack). You will need also a Gateway for it to work.

### I have VMs communicating in a private network and I want to associate a Floating IP to one of these VMs. What is the pool to choose for the Floating IP?

The pool for a Floating IP must be "Ext-Net" and you can associate it to a port on the private network.

### Are the Floating IPs protected against DDoS attacks?

Yes, the [OHVcloud Anti-DDoS infrastructure](https://www.ovhcloud.com/en-gb/security/anti-ddos/) is activated on all the Floating IPs. You can view that information in the `Bare Metal Cloud > Network > IP` section of the Control Panel. 

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
