---
title: FAQ SecNumCloud Connectivity
slug: secnumcloud-connectivity-faq
section: SecNumCloud Connectivity
order: 05
---

**Last updated 23rd November, 2021**

## FAQ SecNumCloud Connectivity

Here are the most frequently asked questions about SecNumCloud Connectivity.

### What is the SecNumCloud Private Network ?

SecNumCloud Private Network (SPN) is a SecNumCloud compliant private network that allow to connect all your SecNumCloud services together. It is specifically designed for SecNumCloud compliance. It is located in a dedicated area and is physically separated from vRack, OVHcloud standard private network. The SPN is a Layer 3 private network, allowing you to segment your network according to standard practice, by using common concepts such as subnet and routing.

The SPN has a regional scope and can be interconnected with other SPNs from other DCs. Interconnection of SPN from different DCs needs SPN Inter-DC product.

### How can I access my SecNumCloud Private Network from the outside world ?

You should use SecNumCloud VPN Gateway to access your SecNumCloud Private Network form the outside. SecNumCloud VPN gateway which uses authenticated and encrypted tunnels to satisfy with SecNumCloud rules.

Custom-build VPN access solution are also possible (e.g. NSX).

### Can I use the same network architecture than the one I currently have on my non SecNumCloud platform ?

SPN is a layer 3 private network, meaning that traffic is routed accross logical segments of your architecture, both within the same region and between regions.

If you are currently using a L2 architecture (no routing) on your non SecNumCloud platform, then some architectural changes are needed, to allow your platform to run on a routed private network.

### What is the capacity for my VPN gateway ?

VPN Gateway capacity ranges are : 2x1 Gbps, 2x2 Gbps, 2x5 Gbps (coming soon), 2x10 Gbps (coming soon).

VPN Gateway is a HA service and has 1+1 redundancy, meaning the service actually uses two gateways, allowing you to mount tunnels on each gateway. Capacity is expressed per gateway.

Capacity is to be shared among tunnels, and the maximum number of tunnel per gateway is 10.

### How do I setup HA for my VPN gateway ?

You will need to mount 2 tunnels, 1 with each gateway.

### Is my Inter DC link resilient ?

Yes. The Inter DC link is redundant, meaning that two DCs are actually connected with 2 links with distinct optical path, for maximum resiliency. If one of the link fails, traffic is redirected to the other link.

### How is my Inter DC link complies with SecNumCloud rules ?

The Inter DC link relies on MACsec technology and hence is end-to-end encrypted.

### What is the SLA for the SPN ?

The SPN satisfies SecNumCloud Hosted Private Cloud SLA, which guarantees 99,99% availability rate of the Hosted Private Cloud hosts.

### What is the SLA for my Inter DC link ?

The Inter DC link satisfies SecNumCloud Hosted Private Cloud SLA, which guarantees 99,99% availability rate of the Hosted Private Cloud hosts.

### What is the SLA for the VPN gateway ?

VPN Gateway SLA guarantees a 99,9% availability rate on the service (customer needs to use 2 redundant tunnels to achieve that SLA).

### How do I order and setup SPN, VPN Gateway, and Inter DC ? Is there a dedicated section of the customer portal or API ?

Please contact your Account Manager. For now, order and setup of SecNumCloud Connectivity product cannot be done via customer portal or API.

### How is my network connectivity compliant with Sec Num Cloud standards ?

SecNumCloud Connectivity products have been specifically designed with ANSSI recommandations as fundamental requirements.

### Does encryption used in VPN Gateway and Inter DC SPN have impact on connection latency ?

There is no impact on latency.

## Go further

Join our community of users on <https://community.ovh.com/en/>.