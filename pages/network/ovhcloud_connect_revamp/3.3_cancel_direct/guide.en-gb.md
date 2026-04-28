---
title: 'Cancel OVHcloud Connect Direct'
excerpt: 'Learn how to cancel an OVHcloud Connect Direct service and decommission the physical connection'
updated: 2026-02-18
---

## Objective

This guide explains how to cancel an OVHcloud Connect Direct service and decommission the physical connection.

## Before you cancel

Consider the following before proceeding:

- **Traffic disruption** — Cancelling the service will permanently interrupt all traffic flowing through this connection. Ensure you have migrated workloads or set up alternative connectivity.
- **Minimum contract term** — Check whether your contract has a minimum commitment period. Early cancellation may incur fees.
- **Cross-connect removal** — The physical cross-connect in the data centre needs to be decommissioned separately.
- **Billing** — Understand the billing cycle. Cancellation typically takes effect at the end of the current billing period.

## Steps to cancel

### 1. Remove dependent configurations

Before cancelling the OVHcloud Connect service:

1. **Remove the vRack association** — Dissociate the OVHcloud Connect service from your vRack in the OVHcloud Control Panel.
2. **Remove PoP/BGP configuration** — Delete the PoP configuration and BGP sessions associated with the service.
3. **Update your routing** — Ensure your network no longer relies on routes learned through this connection.

### 2. Request cancellation in the OVHcloud Control Panel

1. Log in to the [OVHcloud Control Panel](https://www.ovh.com/manager/).
2. Navigate to **Network** → **OVHcloud Connect**.
3. Select the **Direct connection** you want to cancel.
4. Click **Cancel** (or **Terminate service**).
5. Confirm the cancellation. You may be asked to provide a reason.
6. You will receive a **confirmation email** with the effective cancellation date.

### 3. Decommission the cross-connect

After OVHcloud confirms the cancellation:

1. Contact your **data centre operator** and request the removal of the cross-connect.
2. Provide any required documentation (some facilities require an LOA for removal — see [Cross Connect LOA](../3.11_cross_connect_loa/guide.en-gb.md)).
3. Confirm with the data centre that the physical cable has been removed.

> **Tip:** Keep a copy of all cancellation confirmations and LOAs for your records.

### 4. Verify clean-up

- Confirm the service no longer appears as active in the OVHcloud Control Panel.
- Verify that billing has stopped (check your next invoice).
- Ensure your network routing has been updated to remove references to the cancelled connection.

## Cancellation via the API

You can also manage cancellation programmatically:

```python
import ovh

client = ovh.Client(endpoint='ovh-eu')

service_name = "your-occ-service-uuid"

# Terminate the service
client.post(f"/ovhCloudConnect/{service_name}/terminate")
```

> Refer to the [OVHcloud API Console](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1) for available cancellation endpoints.

## What's next?

- [Cancel OVHcloud Connect Provider](../3.4_cancel_provider/guide.en-gb.md) (if you also have a provider connection)
- [Order a new connection](../3.1_order_direct/guide.en-gb.md) if you need to replace the service

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
