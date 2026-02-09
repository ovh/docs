# PoP Locations & Regions

A **Point of Presence (PoP)** is a physical location where OVHcloud operates networking equipment that allows you to connect to OVHcloud's backbone. When setting up OVHcloud Connect, you choose one or more PoPs as the hand-off point between your network or your provider's network, and OVHcloud.

## Understanding Regions and PoPs

### Regions

OVHcloud organises its infrastructure into **regions** — geographical areas where data centres and services are hosted. Each region may contain one or more PoPs where OVHcloud Connect is available.

### Points of Presence (PoP)

OVHcloud PoPs are located inside major carrier-neutral data centre campuses (such as Equinix, Interxion/Digital Realty, Telehouse, and others). If you are ordering a **Direct** connection, you need to be present (or arrange a circuit) in the same campus to install a cross-connect.

If you are using a **Provider**, the provider handles the physical connectivity and may reach the PoP from a different facility.

> **Note:** OVHcloud regularly adds new locations. Always check the [OVHcloud Connect webpage](https://www.ovhcloud.com/en-ie/network/ovhcloud-connect/) for the most up-to-date list.

## How to choose a PoP

When selecting a PoP for your OVHcloud Connect service, consider:

### 1. Proximity (latency)

Choose the PoP that is geographically closest to your infrastructure to minimise network delay. For example, if your data centre is in Paris, a French PoP will provide the lowest latency.

### 2. Provider availability

If you are using OVHcloud Connect Provider, verify that your chosen provider has a presence at the PoP. Not all providers are available at every PoP.

### 3. Redundancy

For high-availability architectures, select **two PoPs in different locations** so that a single site failure does not take down your connection. Follow on of the resilient architecture tutorial for details :
- [On-prem](../4.1.2_onprem_resilient/guide.en-gb.md)
- [WAN](../4.2.2_wan_resilient/guide.en-gb.md)
- [AWS](../4.3.2_aws_resilient/guide.en-gb.md)
- [Azure](../4.4.2_azure_resilient/guide.en-gb.md)
- [GCP](../4.5.2_gcp_resilient/guide.en-gb.md)

### 4. Regulatory / data residency requirements

Some industries or countries require data to stay within a specific geography. Choose a PoP and region that comply with your data residency obligations.

### 5. Target OVHcloud region

To ensure the best performance, your OVHcloud Connect service should terminate in the region where your OVHcloud workloads are running (or will run). Verify that the PoP serves the region you need.



## What's next?

- Understand [Multi-AZ](1.5_multi_az.md) for resilient architectures
- Review [PoP configuration and BGP](3.5_define_pop_bgp.md) for technical setup
