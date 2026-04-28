---
title: 'OVHcloud Connect - Providers'
excerpt: 'Discover the third-party network providers that partner with OVHcloud to offer managed connectivity'
updated: 2026-02-18
---

## Objective

Providers are third-party network operators that partner with OVHcloud to offer managed connectivity in OVHcloud's Points of Presence (PoPs). Using a provider is an alternative to managing your own physical cross-connect (Direct connection).

## Why use a provider?

| Benefit | Description |
|---|---|
| **No co-location required** | You don't need equipment in the same data centre as OVHcloud. The provider bridges the gap. |
| **Simplified ordering** | The provider handles the physical connection, cross-connects, and often provides a portal to manage everything. |
| **Dynamic provisioning** | Many providers offer on-demand connections that can be set up in minutes through their platform. |
| **Multi-cloud connectivity** | Many providers also connect to AWS, Azure, GCP, and others — ideal for multi-cloud architectures. |
| **Managed services** | Providers may offer additional support, monitoring, and SLAs on top of OVHcloud's own guarantees. |

## Choosing the right provider

Consider the following:

- **Geography** — Is the provider present at your location and at the OVHcloud PoP you want to use?
- **Existing relationship** — Do you already use a provider for other cloud connections? Consolidating simplifies management.
- **Connection speed** — Confirm the bandwidth options available (typically from 50 Mbps to 50 Gbps).
- **Provisioning model** — Some providers offer instant, portal-based provisioning; others require manual coordination.
- **Additional services** — Look for monitoring, SLA guarantees, and multi-cloud features.

## Supported providers

OVHcloud partners with the global network providers listed below.

> **Note:** The list of supported providers may evolve over time. Check the [OVHcloud Connect Webpage](https://www.ovhcloud.com/en/network/ovhcloud-connect/) for the most current list.

### BSO (formerly Intercloud)
---
#### Description

BSO is a global financial network and technology provider specializing in ultra-low latency connectivity and cloud access for capital markets, enterprises, and trading firms. Following the acquisition of Intercloud, BSO expanded its cloud connectivity portfolio to offer direct, private connections to major cloud providers including OVHcloud.

BSO's network is optimised for performance-critical applications, with a focus on financial services, media, and data-intensive industries. Their solutions combine high-performance networking with cloud on-ramps and managed services.

#### Useful links

- **Website:** [bso.co/network/cloud-connectivity](https://www.bso.co/network/cloud-connectivity)
- **Documentation:** [bso.co/resources](https://www.bso.co/resources)

### Console Connect
---
#### Description

Console Connect is an on-demand Software-Defined Interconnection platform that simplifies connectivity to clouds, data centres, and networks. The platform allows enterprises to establish private Layer 2 connections, deploy a CloudRouter or last-mile connectivity through a user-friendly web portal without the need for physical hardware or long lead times.

Console Connect leverages PCCW Global's extensive subsea and terrestrial fibre network, providing reliable global reach with strong presence in Asia-Pacific, Europe, and the Americas.

#### Useful links

- **Website:** [consoleconnect.com](https://www.consoleconnect.com/clouds/connect-to-ovhcloud/)
- **Documentation:** [docs.consoleconnect.com](https://docs.consoleconnect.com/)
- **API Documentation:**  [api.consoleconnect.com](https://api.consoleconnect.com/docs/)

### Digital Realty
---
#### Description

Digital Realty is a global provider of data centre, colocation, and interconnection solutions, serving enterprises, cloud providers, and network operators. Through their ServiceFabric platform, Digital Realty offers direct, secure connectivity to major cloud and network service providers, including OVHcloud.

With over 300 data centres across six continents, Digital Realty provides high-density colocation combined with scalable interconnection options for hybrid and multi-cloud deployments.

#### Useful links

- **Website:** [digitalrealty.com/data-center-solutions/servicefabric](https://www.digitalrealty.com/platform-digital/connectivity/service-fabric/connect)

### Equinix Fabric
---
#### Description

Equinix Fabric is a global interconnection platform that provides software-defined networking to connect distributed infrastructure and digital ecosystems. Part of Equinix's Platform Equinix offering, Fabric enables secure, direct, and dynamic connections between enterprises, network service providers, and cloud providers.

With presence in over 70 metros worldwide and direct access to more than 2,900 clouds and networks, Equinix Fabric is a powerful solution for enterprises requiring low-latency, high-performance interconnection at scale.

#### Useful links

- **Website:** [equinix.com/interconnection-services/fabric](https://www.equinix.com/products/digital-infrastructure-services/equinix-fabric)
- **Documentation:** [docs.equinix.com/en-us/Content/Interconnection/Fabric/Fabric-landing-main.htm](https://docs.equinix.com/fabric/)
- **API Documentation:** [developer.equinix.com/catalog/fabricv4](https://developer.equinix.com/catalog/fabricv4)

### Megaport
---
#### Description

Megaport is a leading global Network-as-a-Service (NaaS) platform that enables businesses to rapidly connect their network to cloud service providers and data centres through software-defined networking. Their solutions include:
- Virtual Cross Connects (VXC) for point-to-point connectivity, 
- Megaport Cloud Router (MCR) for advanced multi-cloud routing without physical hardware,
- Megaport Virtual Edge (MVE) for deploying network virtualized functions (NFV).

Megaport's network spans over 700 enabled data centres across North America, Europe, and Asia-Pacific, providing extensive reach for hybrid and multi-cloud architectures.

#### Useful links

- **Website:** [megaport.com/ovhcloud](https://www.megaport.com/ecosystem/ovhcloud/)
- **Documentation:** [docs.megaport.com](https://docs.megaport.com/)
- **API Documentation:** [dev.megaport.com](https://dev.megaport.com/)

### Orange Business Services
---
#### Description

Orange Business Services is the enterprise division of Orange, one of Europe's leading telecommunications operators. They provide managed network solutions including SD-WAN, MPLS, Internet, and cloud connectivity services tailored for large enterprises and multinational corporations.

Orange Business Services operates a global network reaching 166 countries and territories, with strong presence in Europe, Africa, and the Middle East. Their solutions integrate traditional WAN services with modern cloud connectivity, enabling seamless hybrid architectures.

#### Useful links

- **Website:** [orange-business.com/en/products/galerie](https://www.orange-business.com/en/solutions/cloud/galerie)

### Risq
---
#### Description

Risq is a Quebec-based network service provider offering secure, high-performance connectivity solutions for enterprises, financial institutions, and cloud service providers. Risq operates a carrier-grade network with a strong presence in Quebec and Canada, providing direct cloud on-ramps, MPLS, Internet, and dark fibre services.

Risq positions itself as a premium connectivity partner for businesses requiring dedicated bandwidth, low latency, and stringent security and compliance standards, particularly in regulated industries and the Canadian market.

#### Useful links

- **Website:** [risq.quebec](https://www.risq.quebec/)

## How it works

1. **You order** a connection to OVHcloud through the provider's portal or with OVHcloud (who gives you a **pairing key**).
2. **The provider provisions** the link between your location and the OVHcloud PoP.
3. **You configure** BGP and VLAN settings on your side (or the provider handles Layer 3 routing for you).
4. **Traffic flows privately** between your network and OVHcloud through the provider's backbone.

## What's next?

- Check [PoP Locations & Regions](../1.4_pop_locations_regions/guide.en-gb.md) to find where you can connect
- Follow the [Quick Start with a Provider](../2.2_quick_start_provider/guide.en-gb.md) to get started

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
