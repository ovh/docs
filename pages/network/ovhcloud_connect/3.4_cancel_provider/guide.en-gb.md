---
title: 'Cancel OVHcloud Connect Provider'
excerpt: 'Learn how to cancel an OVHcloud Connect Provider service and coordinate with your provider'
updated: 2026-02-18
---

## Objective

This guide explains how to cancel an OVHcloud Connect Provider service. Since a provider connection involves both OVHcloud and a third-party network operator, you need to coordinate the cancellation with both parties.

## Before you cancel

- **Traffic disruption** — All traffic over this connection will be permanently interrupted.
- **Provider contract** — Check your provider's terms for minimum commitment, notice periods, and early termination fees.
- **OVHcloud contract** — Check your OVHcloud commitment period and billing cycle.
- **Alternative connectivity** — Ensure workloads are migrated or an alternative path is available.

<!-- CP-NAV-START:network-ovhcloud-connect -->
---

### OVHcloud Control Panel Access

- **Direct link:** [OVHcloud Connect](/links/control-panel/network-ovhcloud-connect)
- **Navigation path:** `Network`{.action} > `OVHcloud Connect`{.action}

---
<!-- CP-NAV-END:network-ovhcloud-connect -->

## Steps to cancel

### 1. Remove dependent configurations on OVHcloud

1. **Remove the vRack association** — Dissociate the OVHcloud Connect service from your vRack in the Control Panel.
2. **Remove PoP/BGP configuration** — Delete BGP sessions and PoP configuration for this service.
3. **Update routing** — Ensure your network no longer depends on routes from this connection.

### 2. Cancel on the OVHcloud side

1. Select the **Provider connection** you want to cancel.
2. Click **Cancel** (or **Terminate service**).
3. Confirm and note the effective cancellation date.

### 3. Cancel on the provider side

**This is essential.** If you only cancel on OVHcloud but not with your provider, the provider may continue billing you.

| Provider | How to cancel |
|---|---|
| **Megaport** | Delete the VXC in the [Megaport Portal](https://portal.megaport.com/). |
| **Equinix Fabric** | Delete the connection in [Equinix Fabric](https://fabric.equinix.com/). |
| **Console Connect** | Cancel the connection in [Console Connect](https://app.consoleconnect.com/). |

> Contact your provider's support if you have questions about their cancellation process or timelines.

### 4. Verify clean-up

- Confirm the OVHcloud Connect service shows as cancelled in the OVHcloud Control Panel.
- Confirm the VXC/connection is deleted in your provider's portal.
- Verify that billing has stopped on both OVHcloud and the provider side.
- Update your network configuration to remove any stale routes or BGP peers.

## Important reminders

- **Cancel on both sides** — OVHcloud and the provider are separate services with separate billing. Cancelling one does not automatically cancel the other.
- **Keep records** — Save cancellation confirmation emails from both OVHcloud and the provider.
- **Cross-connect clean-up** — If the provider installed a physical cross-connect on your behalf, coordinate with them to ensure it is removed from the data centre.

## What's next?

- [Cancel OVHcloud Connect Direct](../3.3_cancel_direct/guide.en-gb.md) (if you also have a direct connection)
- [Order a new connection](../3.2_order_provider/guide.en-gb.md) if you need a replacement

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
