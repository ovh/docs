---
title: 'Order OVHcloud Connect Direct'
excerpt: 'Learn how to order a direct physical connection to OVHcloud through the Control Panel or the API'
updated: 2026-02-18
---

## Objective

This guide explains how to order a **direct physical connection** to OVHcloud through the OVHcloud Control Panel or the API.

## What you will need

Before starting the order, prepare the following:

| Information | Description |
|---|---|
| **PoP location** | The data centre where you want to connect (see [PoP Locations](../1.4_pop_locations_regions/guide.en-gb.md)) |
| **Bandwidth** | The speed of the connection (e.g. 1 Gbps or 10 Gbps) |
| **Your ASN** | Your Autonomous System Number (public or private) for BGP peering |
| **IP plan** | The prefixes you intend to advertise and the peering subnet |
| **Contact details** | Technical and billing contacts for the order |
| **Cross-connect instructions** | Cage/cabinet references if you have your own space in the data centre |

<!-- CP-NAV-START:network-ovhcloud-connect -->
---

### OVHcloud Control Panel Access

- **Direct link:** [OVHcloud Connect](/links/control-panel/network-ovhcloud-connect)
- **Navigation path:** `Network`{.action} > `OVHcloud Connect`{.action}

---
<!-- CP-NAV-END:network-ovhcloud-connect -->

## Order via the OVHcloud Control Panel

1. Click **Order a new connection**.
2. Select **Direct Connection**.
3. Choose your **PoP location** from the list of available sites.
4. Select the desired **bandwidth** (1 Gbps or 10 Gbps).
5. Fill in the **technical details**:
   - Your ASN
   - Preferred VLAN ID (if applicable)
   - Contact information for LOA delivery
   - Any special instructions for the data centre cross-connect
6. Review the **pricing and contract terms** (minimum commitment period, monthly fee).
7. **Confirm** the order.

You will receive an email confirmation with your order reference and estimated delivery timeline.

## Order via the API

You can also order programmatically using the [OVHcloud API](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1).

```python
import ovh

client = ovh.Client(endpoint='ovh-eu')

# Example: list your existing OVHcloud Connect services
# Check the API console for the exact endpoint and parameters
result = client.get('/ovhCloudConnect')
print(result)
```

> Refer to the [Automation guide](../1.6_automation/guide.en-gb.md) for API setup instructions.

## What happens after ordering

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 120" font-family="Arial, sans-serif" font-size="11">
  <rect width="750" height="120" fill="#f8f9fa" rx="8"/>

  <rect x="15" y="35" width="140" height="50" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="85" y="55" text-anchor="middle" fill="#1565c0" font-weight="bold">Order confirmed</text>
  <text x="85" y="72" text-anchor="middle" fill="#555" font-size="10">Email received</text>

  <rect x="195" y="35" width="140" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="265" y="55" text-anchor="middle" fill="#e65100" font-weight="bold">LOA sent</text>
  <text x="265" y="72" text-anchor="middle" fill="#555" font-size="10">Within minutes</text>

  <rect x="375" y="35" width="140" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="445" y="55" text-anchor="middle" fill="#e65100" font-weight="bold">Cross-connect</text>
  <text x="445" y="72" text-anchor="middle" fill="#555" font-size="10">Installed by DC operator</text>

  <rect x="555" y="35" width="140" height="50" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="625" y="55" text-anchor="middle" fill="#2e7d32" font-weight="bold">Port active</text>
  <text x="625" y="72" text-anchor="middle" fill="#555" font-size="10">Ready to configure</text>

  <line x1="155" y1="60" x2="195" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a4)"/>
  <line x1="335" y1="60" x2="375" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a4)"/>
  <line x1="515" y1="60" x2="555" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a4)"/>

  <defs>
    <marker id="a4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

1. **Order confirmed** — You receive an email with your order reference.
2. **LOA delivered** — OVHcloud issues the Letter of Authorization **within minutes** of the order. The LOA contains the data centre details needed to install the cross-connect.
3. **Cross-connect installed** — Give the LOA to your data centre operator. They install the fibre patch cable. Timing depends on the facility (a few days to 2 weeks).
4. **Port becomes active** — Once the cross-connect is in place and OVHcloud detects light, the port becomes active and the service is delivered. You can now configure BGP and associate with your vRack.

> [!warning]
>
> After the order, you have **60 days** to finalize the interconnection (order the cross-connect and connect your equipment). Beyond 60 days — even without detected light — the service is considered operational and **billing starts**.
>

## Pricing and billing

- OVHcloud Connect Direct is billed **monthly**.
- Pricing depends on the PoP location and bandwidth tier.
- A **minimum commitment period** may apply (check during ordering).
- Cross-connect fees from the data centre operator are separate and billed by the operator.

## What's next?

- [Receive and use your LOA](../3.11_cross_connect_loa/guide.en-gb.md)
- [Configure OCC L3 with BGP](../3.7_occ_l3_bgp/guide.en-gb.md)
- [Associate with your vRack](../3.5_associate_vrack/guide.en-gb.md)

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
