---
title: 'Associate an OVHcloud Connect to Your vRack'
excerpt: 'Learn how to associate your OVHcloud Connect service with a vRack for private connectivity'
updated: 2026-02-18
---

## Objective

The **vRack** is OVHcloud's private networking service. To allow your OVHcloud resources (servers, VMs, etc.) to communicate through your OVHcloud Connect link, you must associate the OVHcloud Connect service with a vRack.

## What the association does

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 170" font-family="Arial, sans-serif" font-size="12">
  <rect width="700" height="170" fill="#f8f9fa" rx="8"/>

  <!-- OVHcloud Connect -->
  <rect x="20" y="50" width="160" height="70" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="100" y="80" text-anchor="middle" font-weight="bold" fill="#e65100">OVHcloud Connect</text>
  <text x="100" y="100" text-anchor="middle" fill="#555" font-size="10">Private link to your network</text>

  <!-- vRack -->
  <rect x="240" y="30" width="190" height="110" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
  <text x="335" y="55" text-anchor="middle" font-weight="bold" fill="#1565c0" font-size="14">vRack</text>
  <text x="335" y="75" text-anchor="middle" fill="#555" font-size="10">Private network fabric</text>
  <rect x="255" y="85" width="160" height="40" rx="4" fill="#fff" stroke="#90caf9"/>
  <text x="335" y="110" text-anchor="middle" fill="#555" font-size="10">VLANs &amp; Subnets</text>

  <!-- Services -->
  <rect x="490" y="20" width="180" height="130" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="580" y="45" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud Services</text>
  <text x="580" y="70" text-anchor="middle" fill="#555" font-size="10">Bare Metal Servers</text>
  <text x="580" y="90" text-anchor="middle" fill="#555" font-size="10">Public Cloud VMs</text>
  <text x="580" y="110" text-anchor="middle" fill="#555" font-size="10">Hosted Private Cloud</text>
  <text x="580" y="130" text-anchor="middle" fill="#555" font-size="10">Managed Kubernetes</text>

  <!-- Arrows -->
  <line x1="180" y1="85" x2="240" y2="85" stroke="#555" stroke-width="1.5" marker-end="url(#a7)"/>
  <line x1="430" y1="85" x2="490" y2="85" stroke="#555" stroke-width="1.5" marker-end="url(#a7)"/>

  <defs>
    <marker id="a7" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

When you associate OVHcloud Connect with a vRack:

- Traffic from your external network (on-premises, cloud, WAN) can reach OVHcloud services attached to the same vRack.
- OVHcloud services in the vRack can send traffic back through OVHcloud Connect to your network.
- All communication stays **private** — it never touches the public internet.

## Prerequisites

- An **OVHcloud Connect** service that is active (physical link up or provider connection active).
- A **vRack** service provisioned on your OVHcloud account. If you don't have one, you can create it from the Control Panel (it's free).
- At least one OVHcloud service (server, VM, etc.) attached to the vRack.

## Steps to associate

### Via the OVHcloud Control Panel

1. Log in to the [OVHcloud Control Panel](https://www.ovh.com/manager/).
2. Navigate to **Network** → **vRack**.
3. Select your vRack.
4. Click **Add a service**.
5. From the list of eligible services, find your **OVHcloud Connect** service and select it.
6. Click **Add** to confirm.

The association is typically effective within a few minutes.

### Via the API

> [!api]
>
> @api {v1} GET /vrack/{serviceName}/ovhCloudConnect
>

```python
import ovh

client = ovh.Client(endpoint='ovh-eu')

vrack_service_name = "pn-12345"
occ_service_id = "your-occ-service-uuid"

# Associate OVHcloud Connect with a vRack
client.post(f"/vrack/{vrack_service_name}/ovhCloudConnect",
            ovhCloudConnect=occ_service_id)
```

> See the [OVHcloud API Console](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1) for the complete list of vRack-related endpoints.

### Via Terraform

```hcl
resource "ovh_vrack_ovhcloudconnect" "association" {
  service_name      = "pn-abc123"      # Your vRack service name
  ovh_cloud_connect = "ovhcc-xyz789"   # Your OVHcloud Connect service ID
}
```

> Check the [OVH Terraform provider documentation](https://registry.terraform.io/providers/ovh/ovh/latest/docs) for the exact resource name and attributes.

## Verify the association

After associating:

1. In the **vRack** section of the Control Panel, confirm that OVHcloud Connect appears in the list of associated services.
2. Check that the **VLAN configuration** is consistent: the VLAN ID used in your OVHcloud Connect PoP configuration should match the VLAN used by your OVHcloud resources in the vRack.
3. **Test connectivity**: ping an OVHcloud resource from your external network to confirm end-to-end private communication.

## Removing the association

If you need to dissociate OVHcloud Connect from a vRack:

1. Go to **Network** → **vRack** in the Control Panel.
2. Select your vRack.
3. Find the OVHcloud Connect service and click **Remove**.
4. Confirm the removal.

> **Warning:** Removing the association will immediately interrupt private traffic between your external network and OVHcloud resources in that vRack.

## What's next?

- [Monitor your OVHcloud Connect](../3.9_monitor/guide.en-gb.md)
- [Set up your vRack network](../3.6_vrack_network_setup/guide.en-gb.md) to set up subnets properly

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
