---
title: 'OVHcloud Connect - Frequently Asked Questions (FAQ)'
excerpt: 'Find answers to the most common questions about OVHcloud Connect'
updated: 2026-02-18
---

## General

### What is OVHcloud Connect?

OVHcloud Connect (OCC) is a dedicated, private network connection between your infrastructure and OVHcloud. It bypasses the public internet, providing **lower latency, higher bandwidth, and improved security** compared to VPN or internet-based connections.

See [What is OVHcloud Connect?](1.1_what_is_ovhcloud_connect.md) for a full overview.

### What is the difference between Direct and Provider?

| | OVHcloud Connect Direct | OVHcloud Connect Provider |
|---|---|---|
| Physical connection | You manage the cross-connect at the PoP | Provider manages the last-mile connection |
| Speed | 1 Gbps or 10 Gbps | 1 Gbps or 10 Gbps |
| Lead time | Days–weeks (cross-connect provisioning) | Minutes–hours (provider virtual circuit) |
| Best for | Organisations with colocation presence | Multi-cloud, remote sites, faster deployment |

### Which providers are supported?

OVHcloud Connect Provider works with:

- **Megaport** — VXC and MCR (Cloud Router)
- **Equinix Fabric** — Virtual connections
- **Console Connect** (PCCW Global) — On-demand connections

See [Providers](1.3_providers.md) for details.

### Where is OVHcloud Connect available?

OVHcloud Connect is available in major PoP locations across Europe, North America, and Asia-Pacific. See [PoP locations and regions](1.4_pop_locations_regions.md) for the full list.

---

## Ordering & billing

### How do I order OVHcloud Connect?

- **Direct**: [Order a Direct connection](3.1_order_direct.md)
- **Provider**: [Order a Provider connection](3.2_order_provider.md)

You can order through the OVHcloud Control Panel, the API, or Terraform.

### How is OVHcloud Connect billed?

OVHcloud Connect is billed monthly based on:

- **Connection type** (Direct or Provider)
- **Bandwidth** (1 Gbps or 10 Gbps)
- **Number of services**

Provider connections may also incur charges from the provider (Megaport, Equinix, etc.). Check the [OVHcloud pricing page](https://www.ovhcloud.com/en/network/ovhcloud-connect/) for current rates.

### Can I upgrade bandwidth without downtime?

No. Bandwidth changes require ordering a new service at the desired speed and migrating traffic. Plan the migration during a maintenance window.

### How do I cancel a service?

- **Direct**: [Cancel a Direct connection](3.3_cancel_direct.md)
- **Provider**: [Cancel a Provider connection](3.4_cancel_provider.md)

> **Important:** Always remove the provider virtual circuit and BGP configuration before cancelling the OVHcloud service to avoid routing issues.

---

## Technical

### What BGP ASN does OVHcloud use?

OVHcloud uses ASN **35540** for OVHcloud Connect BGP peering. You must configure your side with a different ASN (typically a private ASN in the 64512–65534 range).

### What is the maximum number of BGP prefixes?

OVHcloud supports a maximum of **100 prefixes** per BGP session. Aggregate your routes to stay within this limit. If you need more, contact OVHcloud support.

### Does OVHcloud Connect support IPv6?

Currently, OVHcloud Connect primarily supports **IPv4**. Check with OVHcloud support for the latest IPv6 availability.

### What MTU is supported?

The default MTU is **1500 bytes**. Jumbo frames (9000 bytes) may be supported on Direct connections depending on the PoP — confirm with OVHcloud support before configuring.

### Can I use OVHcloud Connect with Hosted Private Cloud (VMware)?

Yes. Associate your OVHcloud Connect service with a vRack, then add your Hosted Private Cloud service to the same vRack. VMware VMs can use the private connection via vRack-attached port groups.

### Can I use OVHcloud Connect with Public Cloud instances?

Yes. Attach your Public Cloud project to the same vRack as your OVHcloud Connect service. Assign a vRack private network to your instances to route traffic through the OCC link.

### What happens if my BGP session goes down?

If you have a single OVHcloud Connect link, traffic between your network and OVHcloud will stop flowing until BGP is re-established. For production workloads, always use a [resilient architecture](1.5_multi_az.md) with two links and BGP failover.

### Can I use BFD (Bidirectional Forwarding Detection)?

BFD support depends on the OVHcloud Connect type and PoP. Contact OVHcloud support to confirm BFD availability for your service. BFD can significantly reduce failover times from ~90 seconds to under 1 second.

---

## Multi-cloud

### Can I connect AWS, Azure, and GCP to OVHcloud simultaneously?

Yes. Order separate OVHcloud Connect Provider services and bridge each to the respective cloud:

- [AWS via Direct Connect](4.3.1_aws_simple.md)
- [Azure via ExpressRoute](4.4.1_azure_simple.md)
- [GCP via Interconnect](4.5.1_gcp_simple.md)

All can be associated with the same vRack, allowing traffic to flow between all clouds through OVHcloud.

### Can cloud-to-cloud traffic transit through OVHcloud?

Technically, if all cloud connections share the same vRack and BGP prefixes are exchanged, traffic could transit through OVHcloud. However, this is **not recommended** for production — use dedicated cloud-to-cloud interconnects (e.g., AWS ↔ Azure) for direct inter-cloud traffic.

### Do I need a separate vRack for each cloud connection?

No. You can associate multiple OVHcloud Connect services with the **same vRack**. This allows all connected networks (on-premises, AWS, Azure, GCP) to communicate through the shared vRack.

---

## Resilience & SLA

### What SLA does OVHcloud Connect offer?

SLA levels depend on your architecture:

| Architecture | Typical SLA |
|---|---|
| Single link, single AZ | ~99.9% |
| Dual links, Multi-AZ | ~99.95%–99.99% |

See [SLAs](1.7_slas.md) for full details and conditions.

### How do I set up a resilient connection?

Order two OVHcloud Connect services at **different PoPs**, associate both with the same vRack, and configure BGP failover with Local Preference and AS-path prepending.

Tutorials:
- [On-premises resilient](4.1.2_onprem_resilient.md)
- [WAN resilient](4.2.2_wan_resilient.md)
- [AWS resilient](4.3.2_aws_resilient.md)
- [Azure resilient](4.4.2_azure_resilient.md)
- [GCP resilient](4.5.2_gcp_resilient.md)

### How long does BGP failover take?

With default BGP timers (hold time = 90 seconds), failover can take **30–90 seconds**. With aggressive timers or BFD enabled, failover can be **under 1 second**.

---

## Troubleshooting

### My connection is ordered but not active

| Possible cause | Action |
|---|---|
| Cross-connect not completed (Direct) | Contact your colocation provider; check LOA status |
| Provider VXC not provisioned (Provider) | Check provider portal; ensure pairing key is correct |
| BGP not configured | [Configure BGP](3.5_define_pop_bgp.md) |
| vRack not associated | [Associate vRack](3.7_associate_vrack.md) |

### I can see the BGP session but have no reachability

- Verify that **routes are being exchanged** (check `show ip bgp summary` or the OVHcloud API).
- Ensure **subnets are correct** and non-overlapping.
- Check for **firewall rules** blocking traffic on either side.
- Verify **VLAN tagging** matches between your equipment and OVHcloud.

### Traffic is slow or experiencing packet loss

- Check interface errors and CRC counts on your router.
- Verify the **bandwidth** of your OVHcloud Connect matches your traffic load.
- Look for **MTU mismatches** causing fragmentation.
- Use the [monitoring guide](3.8_monitor.md) to check link health.

### How do I open a support ticket?

1. Go to the [OVHcloud Control Panel](https://www.ovh.com/manager/).
2. Click **Support** → **Create a ticket**.
3. Select **Network** → **OVHcloud Connect**.
4. Include your service name, error details, and any diagnostic output.

See [Incident follow-up](3.9_incident_followup.md) for detailed escalation procedures.

---

## Automation

### Can I manage OVHcloud Connect with Terraform?

Yes. Use the [OVHcloud Terraform provider](https://registry.terraform.io/providers/ovh/ovh/latest) (version ≥ 2.7.0) to manage OVHcloud Connect resources. See [Automation](1.6_automation.md) for examples.

### Is there an API for OVHcloud Connect?

Yes. The OVHcloud API provides full lifecycle management:

- **EU endpoint**: `https://eu.api.ovh.com/v1/ovhCloudConnect/`
- **CA endpoint**: `https://ca.api.ovh.com/v1/ovhCloudConnect/`

Explore the API at [api.ovh.com/console](https://api.ovh.com/console/#/ovhCloudConnect).

See [Automation](1.6_automation.md) for SDK and API examples.

---

## Still have questions?

- Browse the [full documentation](1.1_what_is_ovhcloud_connect.md)
- Check the [OVHcloud Community](https://community.ovh.com/)
- Contact [OVHcloud Support](https://www.ovh.com/manager/) via the Control Panel

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
