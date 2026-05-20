---
title: "Stop using the OVHcloud Web Application Firewall alpha"
excerpt: "Restore direct backend traffic and close out your OVHcloud Web Application Firewall alpha instance cleanly when the alpha trial ends."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall alpha programme runs outside the OVHcloud Control Panel, so there is no self-service cancellation flow. Exiting the alpha is a coordinated handover with the OVHcloud team: you reroute production traffic away from the OWAF instance, capture any configuration you want to keep, and then ask OVHcloud to decommission the instance.

**This guide explains how to stop using the OVHcloud Web Application Firewall alpha and request decommissioning of your instance.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- A signed-in session in the **OVHcloud Web Application Firewall** Admin UI (OWAF Admin UI). See [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).
- Administrative access to your DNS, load balancer, or CDN so that you can redirect traffic away from the OWAF instance.
- Your OVHcloud alpha contact (the person or address that issued your Bearer token during onboarding).

## Before you stop using the alpha

> [!warning]
>
> Once the OWAF instance is decommissioned by OVHcloud, the Admin UI and the WAF proxy at port `8084` become unreachable. Traffic that still resolves to the instance address will fail. Switch your upstream routing **before** asking for decommissioning.

## Instructions

### Step 1 — Decide what to keep

The alpha does not provide a configuration export endpoint, so any record of your current setup must be captured manually before the instance is removed. Work through the following checklist:

- **Custom rules** — export by taking a screenshot or transcribing the **Rules** page (filtered to `TYPE = CUSTOM`), since the alpha does not offer a configuration export endpoint.
- **Header-rule presets and custom rules** — capture the **Proxy** page configuration similarly, including any preset you applied (credential rotation, strip internal headers, add tenant header) and the order of the rules.
- **WAF Mode, Paranoia Level, and Anomaly Threshold** — capture from the **Configuration** page.
- **Stats baselines** — capture the **TOTAL REQUESTS**, **BLOCKED**, **PASS RATE**, and per-category chart from the **Stats** page so you keep a record of WAF activity at the moment you exit the alpha.

> [!primary]
>
> Programmatic export of rules and configuration is planned for general availability and is not available during the alpha programme.

### Step 2 — Redirect traffic away from OWAF

1. Update DNS, your load balancer, or your CDN so that end-user traffic flows directly to the backend (or to a different security layer) instead of to the OWAF instance on port `8084`.
2. Verify the change at low risk. For example, shift a small percentage of traffic first if your routing layer supports weighted upstreams.
3. Monitor your backend access logs to confirm that requests are arriving directly from the new upstream rather than from the OWAF instance.

### Step 3 — Confirm OWAF no longer carries traffic

1. Open the **Stats** page in the OWAF Admin UI.
2. Confirm that `TOTAL REQUESTS` is no longer increasing. The Stats page auto-refreshes every 15 seconds, so leave it open for several refresh cycles.
3. Confirm that `ACTIVE CONNECTIONS` is at or near zero for a sustained period — longer than the upstream cache and connection lifetimes of your routing layer.

### Step 4 — Notify the OVHcloud team and request decommissioning

1. Send a short note to your OVHcloud alpha contact summarising the following: you have rerouted traffic, the date and time you intend to stop using the OWAF instance, and that you are requesting decommissioning.
2. Include any feedback you want to share about the alpha programme — particularly limits encountered, features requested for general availability, and any incidents you observed during the alpha. Cross-reference any incident reports you raised by following [Declare an incident](../3.10_incident/guide.en-gb.md).
3. Wait for confirmation from the OVHcloud team that the instance has been decommissioned before proceeding to the final clean-up.

### Step 5 — Final clean-up

1. Remove the Bearer token from your secrets vault and from any operator workstation that stored it.
2. Remove the OWAF instance URL from any internal runbook, monitoring dashboard, or routing configuration so that it cannot be reintroduced by mistake.
3. Archive the configuration captures from Step 1 with the rest of your change-management records.

## Verify

| Check | Expected result |
|---|---|
| Traffic at backend | Backend access logs show requests arriving directly from the new upstream. |
| OWAF Stats | `TOTAL REQUESTS` and `ACTIVE CONNECTIONS` are static. |
| Decommissioning confirmation | OVHcloud alpha contact confirms the instance has been removed. |
| Credentials revoked | The Bearer token no longer authenticates against the (now-decommissioned) Admin UI URL. |

## Troubleshooting

| Symptom | Likely cause | Resolution |
|---|---|---|
| Traffic still hitting OWAF after DNS change | DNS or CDN cache TTL | Wait for TTL expiry, flush caches, and verify the new upstream points to the backend, not back to OWAF. |
| You forgot to capture a custom rule | The Admin UI is still reachable | Re-open the OWAF Admin UI and capture the rule before requesting decommissioning. |
| Backend overloaded after cutover | Direct traffic now bypasses the WAF, so legitimate but bursty traffic is no longer rate-shaped | Implement equivalent protections at the new upstream layer (rate limiting, application firewall) before completing the cutover. |

## Go further

- [Declare an incident](../3.10_incident/guide.en-gb.md)
- [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md)
- [Security best practices](../1.4_security_best_practices/guide.en-gb.md)

Join our [community of users](/links/community).
