---
title: Public Cloud Network Services - FAQ (EN)
excerpt: Frequently Asked Questions on Public Cloud Network Services
updated: 2024-09-03
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

Here are the most frequently asked questions about Public Cloud Network Services.

## Load Balancer

/// details | The Load Balancer offer is priced according to the bandwidth capacity. How can this be set/changed?

Load Balancer is offered in different sizes (S/M/L) to best fit our customer needs. These different sizes are defined via flavours. As of today, to change the size of your Load Balancer, you will need to spawn a new one, configure it the same way (with the same backends as the old one) and reconnect the Floating IP to the new one. Then the old Load Balancer can be deleted.

///

/// details | Can I use my Load Balancer with bare metal servers as backends? Can I use my Load Balancer with backends in different Public Cloud regions?

Yes, provided you configure the network connectivity between the Load Balancer and your bare metal server (either through the private network (vRack) or through the public IP).
If your network is configured correctly, a Load Balancer can redirect traffic to members in different Public Cloud regions.

///

/// details | Can I connect my Load Balancer to my Managed Kubernetes Service (MKS)?

A beta is ongoing to provide integration with Managed Kubernetes Service. Please reach out on the [Discord community](https://discord.gg/ovhcloud) on the channel **#beta-lb-for-k8s**

///

/// details | I want to monitor my Public Cloud Load Balancer. Is it possible to enable metrics automatically on Load Balancer?

Yes this [feature](https://docs.openstack.org/octavia/latest/user/guides/monitoring.html) is available since we rolled out Zed version in June 2023. You can find more information on [this page](/pages/public_cloud/public_cloud_network_services/technical-resources-02-octavia-monitoring-prometheus).

///

/// details | How is the redundancy implemented for each type of service plan? Are the Amphoras configured in a ACT/STBY mode?

Yes, we offer Active/Standby mode for all plans S/M/L.

///

/// details | Can the Load Balancer be used with Additional IPs (IP Failover)?

No. A new type of IP has been introduced for this purpose, Floating IP. It's more flexible and working on a pay-as-you-go model for automation purposes. With Floating IP, you can use a single Floating IP per Load Balancer service.

///

/// details | Can I use multiple protocols (UDP, TCP, HTTP) on one Load Balancer?

Yes, multiple listeners (frontends) and pool (backends) can be configured. There is only a limitation of a single Floating IP per Load Balancer.

///

/// details | What's happening if our Public Cloud Load Balancer receives more requests than indicated? Will the price increase? Will I be notified?

First of all, the values shown are only a rough estimate of the Load Balancer's capabilities. The price will not increase. Pricing is linked to the flavors (small, medium, large) and we cannot change the flavor at this time. This is up to customers' orchestration services. 

It is up to the customer to monitor the load balancer using the metrics feature and to change the flavor accordingly.

///

/// details | In a Public to Public architecture, which component shall be sized for the outbound traffic?

In a Public to Public architecture, the outbound traffic is managed by the Gateway component. If you use that architecture, you should size Gateway accordingly.

///

## Gateway

/// details | What is Gateway? How does it fit into the OpenStack ecosystem?

Gateway is the product name for the Distributed Virtual Router (DvR) component in OpenStack. It is offered with High Availability and a Service Level Agreement.

///

/// details | The Gateway solution is priced according to the bandwidth capacity. How can this be set/changed?

Gateway is offered in different sizes (S/M/L) to best fit our customer needs. These different sizes are defined via QoS policies. As of today, to change the size of Gateway, a change of QoS policy between S/M/L can be done.

///

/// details | Can the Gateway be used with instances of Load Balancer in other regions?

No, a Gateway can be used only in one region.

If you have a private network that spreads over multiple regions (thanks to the same VLAN id), you need to spawn a Gateway in each region.

For instance, the following architecture can be used:

| Region | Private Network VLAN id | Subnet CIDR | DHCP | Gateway IP | Subnet DHCP Allocation Pool |
|--------|-------------------------|-------------|------|------------|-----------------------------|
| GRA11  | 42                      | 10.0.0.0/8  | true | 10.0.0.1   | 10.0.0.2 - 10.0.0.254       |
| SGB5   | 42                      | 10.0.0.0/8  | true | 10.0.1.1   | 10.0.1.2 - 10.0.1.254       |
| BHS5   | 42                      | 10.0.0.0/8  | true | 10.0.2.1   | 10.0.2.2 - 10.0.2.254       |

///

/// details | Can the L3 virtual router (Gateway) help me if I would like to have a gateway to access the Internet for all my VMs in my vRack?

Yes, that's exactly the use case for Gateway (L3 router with SNAT option). Currently, only instances in **private mode** of networking that are connected to a single-region private network are supported. For more information, please refer to our [concept guide on Public Cloud Networking](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

///

/// details | Can I use a L3 router to route traffic between different subnets inside a Public Cloud region?

Yes, you can use a L3 router without SNAT option through the Openstack GUI / CLI / Terraform. In that case, the bandwidth limits are driven by the quality of service on the instance private bandwidth. Hence, choosing an `S` flavor would not impact the performances.

///

/// details | Can I use an L3 router to route traffic between different subnets in multiple Public Cloud regions?

No the inter-region routing is not supported.

///

/// details | Will a Gateway be provided with a public IP and port?

It depends on the usage:

- For outbound use cases we offer a public IP which is included in the Gateway price. This IP is associated to the instantiated Gateway and **cannot be moved from one gateway to another one**. In other words, the IP used for outbound traffic is not a 'Floating IP'. 
The only use case where this IP is kept is when the gateway size is changed (e.g. from `S`to `M`).
If this is creating friction for your use case, please upvote for this [roadmap item](https://github.com/ovh/public-cloud-roadmap/issues/448).
- For inbound use cases (to expose a service running on a private instance to the Internet) you need to have a Floating IP to attach via Gateway to your instance or network service.

///

/// details | How can I spawn a private instance to be used with Gateway and SNAT option?

You can create a private network in a selected region and attach Gateway to it. Then, while creating an instance, select "Attach to private network" and confirm it using the button "Yes, I want my instance to be fully-private".

///

/// details | Is the Gateway outbound public IP protected against DDoS attacks?

Yes, the [OHVcloud Anti-DDoS infrastructure](https://www.ovhcloud.com/es/security/anti-ddos/) is activated on all those IPs. You can view that information in the `Bare Metal Cloud > Network > IP` section of the Control Panel. 

///

/// details | I created an instance in private mode (it only has private ports). How can I connect to it?

Two options can be used: 

- Using a "jump host" (SSH proxy): You need to use another instance that has Floating IP (allowing for external access) and a private port in the same private network that your new instance is in. Log on to it and connect via SSH to the private IP of your new instance.
- Attaching a Floating IP address (at least for the time of maintenance) to your newly created instance and connect to it using that Floating IP, then detach the Floating IP.

///

## Floating IPs

/// details | When I try to associate the Floating IP to the port on the Ext-Net network, I get the following error: "External network ... is not reachable from subnet .... Therefore, cannot associate Port ... with a Floating IP."

A Floating IP is a flexible public IP address that can be associated to a private port only (port on private network in vRack). You will need also a Gateway for it to work.

///

/// details | I have VMs communicating in a private network and I want to associate a Floating IP to one of these VMs. What is the pool to choose for the Floating IP?

The pool for a Floating IP must be "Ext-Net" and you can associate it to a port on the private network.

///

/// details | Are the Floating IPs protected against DDoS attacks?

Yes, the [OHVcloud Anti-DDoS infrastructure](https://www.ovhcloud.com/es/security/anti-ddos/) is activated on all the Floating IPs. You can view that information in the `Bare Metal Cloud > Network > IP` section of the Control Panel. 

///

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
