---
title: NSX - FAQ (EN)
excerpt: Frequently asked questions on NSX
updated: 2023-06-12
routes:
    canonical: 'https://help.ovhcloud.com/csm/en-gb-vmware-nsx-faq?id=kb_article_view&sysparm_article=KB0058349'
---

## Objective

**Find below the frequently asked questions about NSX.**

## FAQ

<a name="bgp"></a>

### Is it possible to do BGP?

It is not possible to do Public BGP.

Though it is possible to do BGP in the vRack, a documentation will be available soon to detail this workaround.

<a name="addt0gw"></a>

### How can I add another Tier-0 Gateway?

It is currently not possible to add a new working tier-0 Gateway.

<a name="publicgateway"></a>

### The "Edit" button in NSX for Tier-0 is disabled, how do I configure the public gateway?

It is not possible by default. The Tier-0 gateways are each hosted in a different host, HA (High Availability) is enabled and a VIP is configured between the 2 EDGES in order to maintain service continuity. The HA part is already preconfigured by OVHCloud.

<a name="t0gwdoublebw"></a>

### Can I configure an active-active Tier-0 Gateway in order to have a double bandwidth (10+10=20Gb/s guarantee and 25+25Gb/s "theoretical")?

No, it is not possible by default, the configuration is managed by OVHcloud and is done in active/passive mode with a VIP (10 Gbp/s guaranteed bandwidth).

<a name="t0commandline"></a>

### Is it possible to connect to the Tier-0 from the command line to perform debugging or packet capture?

No, this is not possible for Tier-0.

<a name="nsxedgeaddition"></a>

### Is it possible to modify or add NSX Edge VMs?

No, Edges are managed by OVHCloud. Customers cannot modify them or add more.

<a name="t1interfacecapacity"></a>

### What is the maximum number of interfaces (connected segments) on a Tier-1 Gateway?

This information can be found in NSX > Inventory > Capacity.

Regarding the Edges, we refer to the Gateways and the Tier-0 and Tier-1. Tier-0 is already deployed and uses 3 public IPs to route between the active/backup Gateways and uses the concept of a VIP that is in front of the 2 internal public IPs. This is used for failover and redundancy.

NSX and NSX-v are different and at the moment you cannot break the current Tier-0 configuration and deploy others.

<a name="t1commandline"></a>

### Is it possible to connect to the Tier-1 from the command line to perform debugging or packet capture?

No, this is not possible for Tier-1. Different tools are available in NSX to address these needs.

<a name="addpublicip"></a>

### How can I add more Public IPs?

As indicated in [this guide](/pages/cloud/private-cloud/nsx-01-first-steps#displaying-the-ha-vip-virtual-ip-address), at the moment it is not possible to create new virtual IP addresses, but this feature should be available soon.

<a name="ipblockdistribution"></a>

### Can IP address blocks be used/distributed between two VMware DCs in the same PCC?

IP address blocks are PCC-dependent, not vDC-dependent. Therefore it is possible to use the same IP address block between multiple virtual data centres (without any changes).

<a name="internetoutput"></a>

### Is the Internet output configurable? In other words, can I deploy the interface?

It is not possible to manage the Internet output in NSX as the Edge is managed by OVHcloud, but you can configure the network on your VM (vSPHERE).

<a name="vrackaccess"></a>

### Will the compute cluster have access to vRack ? Or will the vRack be connected only to Edge Node ?

The NSX cluster is fully compatible with vRack. You can add the NSX service in your PCC vRack. Find more information about vRack on [this page](/pages/cloud/private-cloud/vrack_and_hosted_private_cloud).

<a name="ha"></a>

### Can I configure High Availability (HA)?

No, NSX Edges are configured by OVHcloud following VMware best practices regarding HA.

<a name="lb"></a>

### Is it possible to use NSX Advanced Load Balancer?

This feature is coming soon.

<a name="api"></a>

### Can I use the OVHcloud API to configure and use NSX?

Yes, it it possible to do so.

<a name="nsxterraform"></a>

### Why is NSX management via Terraform done via a separate `https://nsxt` endpoint?

The NSX API is dedicated and not linked to the vSphere API. That's why we created a dedicated endpoint to reach it.

<a name="veeamzerto"></a>

### What about my Veeam and Zerto options? Are they still compatible with NSX?

Yes but you will have to reconfigure them after vDC migration.

<a name="nsxedge"></a>

### Is it possible to communicate an NSX edge between 2 PCC?

Yes, it's possible.

## Go further <a name="gofurther"></a>

[Getting started with NSX](/pages/cloud/private-cloud/nsx-01-first-steps)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/es-es/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
