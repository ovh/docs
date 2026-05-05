---
title: 'OVHcloud Connect - SLAs'
excerpt: 'Learn about the Service Level Agreements for OVHcloud Connect and how to achieve higher availability'
updated: 2026-02-18
---

## Objective

A **Service Level Agreement (SLA)** is a contractual commitment from OVHcloud that defines the guaranteed level of service for OVHcloud Connect. SLAs give you confidence that your connection will meet specific performance and availability targets.

## What the SLA covers

OVHcloud Connect SLAs typically address the following areas:

| Area | What it means |
|---|---|
| **Availability (uptime)** | The percentage of time the service is operational over a given period (e.g. 99.9% monthly uptime). |
| **Latency** | The maximum acceptable delay for traffic traversing the OVHcloud Connect link. |
| **Support response time** | How quickly OVHcloud acknowledges and begins working on a reported issue. |
| **Resolution time** | The target timeframe for restoring service after an incident. |

## SLA levels and connection type

The level of SLA you can achieve depends on your architecture:

| Architecture | Typical availability | Notes |
|---|---|---|
| **Single connection** (one PoP, one link) | Up to 99.9% | Covers the OVHcloud-managed portion of the link. A single physical path remains a point of failure. |
| **Redundant connections** (Multi-AZ, two PoPs) | Up to 99.99% | Multiple independent paths protect against single-link and single-site failures. Higher SLA tiers may apply. |
| **Provider connection** | Varies | The end-to-end SLA depends on both OVHcloud's SLA and your provider's SLA. Check both. |

> **Important:** SLA guarantees apply to the OVHcloud-managed portion of the service. Third-party elements (your router, provider links, cross-connects managed by data centre operators) are not covered under OVHcloud's SLA.

## SLA prerequisites

For the SLA to be valid, you must:

1. **Follow OVHcloud's configuration guidelines** — Incorrect BGP configuration or unsupported setups may void the SLA.
2. **Report incidents promptly** — Use the official support channels (see [Declare and follow up upon an incident](../3.10_incident_followup/guide.en-gb.md)).
3. **Accept scheduled maintenance** — OVHcloud may perform maintenance windows. Downtime during announced maintenance is typically excluded from SLA calculations.
4. **Use a supported architecture** — Higher SLA tiers require redundant connections. A single connection cannot claim the 99.99% SLA.

## Remedies and service credits

If OVHcloud fails to meet the SLA targets, you may be entitled to:

- **Service credits** — A percentage of your monthly fee credited back to your account, proportional to the downtime experienced.
- **Priority support** — Accelerated handling for unresolved issues.

The exact credit calculation and claim process are described in the OVHcloud Connect specific conditions, available in your contract or on the OVHcloud website.

## Monitoring SLA compliance

To track whether your connection meets the SLA:

- Use the **OVHcloud Control Panel** to view connection status, uptime, and historical metrics.
- Set up **alerts** for link-down events, BGP session drops, and latency spikes.
- Use the **OVHcloud API** to query status programmatically and integrate with your monitoring tools.

See [Monitor your OVHcloud Connect](../3.9_monitor/guide.en-gb.md) for detailed monitoring guidance.

## What's next?

- Review [Prerequisites & Limitations](../1.8_prerequisites_limitations/guide.en-gb.md)
- Set up [monitoring](../3.9_monitor/guide.en-gb.md) for your connection
- Learn how to [declare and follow up on incidents](../3.10_incident_followup/guide.en-gb.md)

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
