---
title: "Harden the OVHcloud Web Application Firewall"
excerpt: "Apply a hardening checklist to the OVHcloud Web Application Firewall to tighten access, header handling, rules, and monitoring."
updated: 2026-05-20
---

## Objective

Once the OVHcloud Web Application Firewall is in place and serving traffic, the next step is to ensure that the configuration itself is not the weakest link. This guide walks an operator through a hardening checklist that covers Admin UI access, request header handling, rule hygiene, CORS exposure, and day-to-day monitoring of the OVHcloud Web Application Firewall.

**This guide explains how to harden the OVHcloud Web Application Firewall after the initial deployment.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

This guide is the procedural counterpart to the conceptual article [Security best practices](../1.4_security_best_practices/guide.en-gb.md). Use that article as the *why*; use this one as the *how*.

## Requirements

- A signed-in session in the **OVHcloud Web Application Firewall** Admin UI (OWAF Admin UI) — see [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).
- The proxy already configured with the correct upstream — see [Configure the proxy](../3.3_configure_proxy/guide.en-gb.md).
- A defined WAF Mode and Paranoia Level — see [Configure WAF mode and Paranoia Level](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md).
- Network-level control of the perimeter in front of the OWAF instance (upstream firewall, security group, or jump host).
- An access-management system in which to record Bearer-token holders and configuration changes.

## Hardening checklist

The table below summarises every step performed in this guide. Work through it top-to-bottom for a new deployment, or re-run the **Required** rows after every significant change.

| Category | Action | Priority | Verification |
|---|---|---|---|
| Access control | Rotate the Bearer token | Required | New token in use; previous holder revoked in your access log |
| Access control | Restrict port `8443` to operator workstations | Required | Connection attempts from any other source are blocked at the perimeter |
| Access control | Sign out of the OWAF Admin UI after each session | Required | `Logout`{.action} clicked; the sign-in screen is shown |
| Header handling | Apply the **Strip internal headers** preset | Required | Two `Remove` rules listed on the **Proxy** page |
| Header handling | Apply the **Credential rotation (auth token)** preset where token rotation is needed | Required | `Move to` plus `Set value` rules on the **Proxy** page |
| Header handling | Never trust client-supplied internal headers | Required | No backend code consumes `X-Internal-*` headers without verification |
| Rules | Keep WAF Mode at `Blocking` in production | Required | **Stats** `WAF MODE` card shows `Blocking` |
| Rules | Set Paranoia Level appropriate to risk | Required | Paranoia Level slider reflects the agreed baseline |
| Rules | Scope custom `allow` rules with **Path Prefix** | Required | Every `allow` custom rule has a non-empty Path Prefix |
| CORS | Avoid `Access-Control-Allow-Origin: *` for credentialed APIs | Recommended | The field on the **Proxy** page shows an explicit origin |
| CORS | Enable OPTIONS preflight passthrough when browsers report preflight failures | Recommended | The checkbox on the **Proxy** page is ticked |
| Monitoring | Review the **Stats** page daily | Recommended | Daily review entry recorded in your operations log |
| Monitoring | Raise alerts on prolonged Pass Rate below `95%` | Recommended | Alerting rule exists in your monitoring system |
| Monitoring | Document every configuration change | Recommended | Change-management entry for each Save Changes / Save Rule |

## Instructions

### Step 1 — Access control

The first hardening boundary is the OWAF Admin UI itself. The Admin UI is reached on port `8443` and is authenticated by a Bearer token issued during onboarding; both must be protected with the same care as any other administrative entry point. See [Security best practices](../1.4_security_best_practices/guide.en-gb.md) for the underlying rationale.

1. Confirm that port `8443` is reachable only from your operator workstations or jump host. Port `8443` access is listed in the prerequisites of the OVHcloud Web Application Firewall, so the restriction must be enforced at your upstream firewall, security group, or VPN concentrator — not inside the Admin UI itself.

   > [!primary]
   >
   > The OVHcloud Web Application Firewall does not provide a built-in IP allowlist for the Admin UI in the alpha. Perform this restriction at your network perimeter.

2. Rotate the Bearer token whenever a holder leaves the team or a compromise is suspected. During the alpha, token rotation is requested through your OVHcloud alpha contact — follow the procedure described in [Respond to an OVHcloud Web Application Firewall incident](../3.10_incident/guide.en-gb.md).
3. Sign out of the OWAF Admin UI after each session by clicking `Logout`{.action} in the sidebar footer. The sidebar footer also displays the masked token and the WAF version, so signing out prevents both from being read by anyone walking past the workstation.
4. Do not paste the Bearer token into shared chat tools, email threads, ticket attachments, or source-controlled files. Treat it like any other long-lived production credential.

<!-- DRAFT: To screenshot — sidebar footer with masked token and Logout button -->

### Step 2 — Header handling

The Admin UI exposes a request-header transformation pipeline on the **Proxy** page. The same pipeline that lets you inject service tokens can leak internal trust headers if it is misused. The two hardening presets shipped with the OVHcloud Web Application Firewall close the most common gaps.

1. Open the **Proxy** page and scroll to **Request Header Rules**.
2. Apply the **Strip internal headers** preset. This inserts two rules that `Remove` the `X-Internal-Role` and `X-Internal-User-Id` headers, preventing a client from spoofing internal authorisation context.
3. If your backend uses Bearer-token authentication, apply the **Credential rotation (auth token)** preset. This adds a `Move to` rule that relocates the client's `Authorization` header to `X-Forwarded-Authorization`, followed by a `Set value` rule that places your backend service token into `Authorization`.
4. Reorder the rules with the up and down arrows so that `Remove` actions run before any later `Set value` or `Move to` actions that depend on the same header. Rules are applied in order from top to bottom — see [Transform request headers before forwarding](../3.7_configure_request_headers/guide.en-gb.md) for the full ordering rationale.
5. Click `Save Changes`{.action}. Header rule changes are hot-reloaded; no restart is required.

<!-- DRAFT: To screenshot — Request Header Rules table with both presets applied and the resulting Remove / Move to / Set value rows -->

> [!primary]
>
> Never trust an `X-Internal-*` header on the backend without verifying it against a source you control. The header pipeline is the WAF's contribution to that defence-in-depth — it does not replace authentication in your application.

### Step 3 — Rule hygiene

The rules engine is the core of the OVHcloud Web Application Firewall, and rule drift is one of the most common causes of a WAF being silently bypassed.

1. Open the **Configuration** page. Set the **WAF Mode** to `Blocking` for production traffic; in this mode requests that exceed the anomaly threshold receive a `403 Forbidden` response. Use `Detection` only for tuning, and never leave `Disabled` in place outside of a documented break-glass window.
2. Set the Paranoia Level using the slider. Start at `Basic` (PL 1) for new deployments. Raise the level one step at a time and observe the **Stats** page between each change — moving from PL 1 to PL 4 in a single edit will almost always produce a flood of false positives.
3. Open the **Rules** page and filter by `ACTION = allow`. Review every custom rule with action `allow`: each one is, by definition, a hole in the WAF policy. For every rule that does not strictly need to apply across the whole site, add a **Path Prefix** to scope it to the smallest URL pattern that still solves the problem (for example `/api/healthcheck/`).
4. Return to the **Configuration** page and review the read-only **Disabled Rules** list. Re-enable any rule that was disabled for tuning if the noisy traffic pattern that justified disabling it no longer exists. See [Manage built-in rules](../3.5_manage_built_in_rules/guide.en-gb.md) for the workflow.
5. Track every rule change (creation, edit, deletion, enable/disable, action change, Paranoia Level change) in your change-management system. Pair each entry with the rule ID, the operator who made the change, and the business reason.

> [!info]
>
> Built-in rules can be disabled and can have their action or Paranoia Level changed inline, but they cannot be deleted. Treat any inline change to a built-in rule as a configuration change that must be reviewed.

### Step 4 — CORS

CORS settings on the **Proxy** page are applied to every response, including the `403 Forbidden` pages produced by the WAF in `Blocking` mode. A permissive setting therefore leaks across both legitimate traffic and block pages.

1. Open the **Proxy** page and scroll to **CORS Settings**. For credentialed APIs, set **Access-Control-Allow-Origin** to an explicit origin such as `https://app.example.com`. Avoid `*` outside of testing — a wildcard origin combined with credentialed requests is a known browser misconfiguration vector.
2. Set **Access-Control-Allow-Headers** to exactly the headers your client sends, comma-separated (for example `authorization, content-type, x-requested-with`). Leave the field empty only if the built-in default is sufficient.
3. Tick **OPTIONS preflight passthrough** if your browser console reports preflight failures. When enabled, the OVHcloud Web Application Firewall answers OPTIONS preflight requests directly with `204 No Content`, bypassing WAF inspection so that legitimate preflights are not blocked by an over-zealous rule. Full guidance is in [Configure CORS](../3.8_configure_cors/guide.en-gb.md).
4. Click `Save Changes`{.action}.

<!-- DRAFT: To screenshot — CORS Settings section showing an explicit origin and the OPTIONS preflight passthrough checkbox -->

### Step 5 — Monitoring

A hardened configuration that is never observed is indistinguishable from a permissive one. The final hardening step is to confirm that you can see what the OVHcloud Web Application Firewall is doing.

1. Open the **Stats** page after applying the steps above. Confirm that **TOTAL REQUESTS** continues to increase (traffic is still flowing) and that **PASS RATE** is at or above `95%` — the value is shown in green when the threshold is met and in red when it falls below.
2. Capture a baseline screenshot of the **Blocked Requests by Category** chart, the **TOTAL REQUESTS** value, and the **PASS RATE** value. This is the artefact you compare against on the next review.
3. Schedule a daily review of the **Stats** page. The dashboard auto-refreshes every `15 seconds`, but the production signal should not depend on someone having the browser tab open. Wire the equivalent customer-side telemetry into your alerting system — see [Monitor the OVHcloud Web Application Firewall](../3.9_monitor/guide.en-gb.md).
4. Document the baseline values in your operations log: the active **WAF Mode**, the **Paranoia Level**, the **Anomaly Threshold** (default `5`), and the **ACTIVE RULES** count shown on the **Stats** page. Any future deviation from these values is a change that warrants review.

> [!success]
>
> When the **Stats** page shows the expected mode, a stable Pass Rate at or above `95%`, and a category breakdown consistent with your baseline, the hardening pass is complete for this iteration.

## Verify hardening

Run through the following table at the end of the procedure. Every row should resolve to "yes" before the deployment is considered hardened.

| Check | Expected result |
|---|---|
| Bearer-token holders documented | A current list of token holders exists in your access-management system, and the previous holder of any rotated token has been revoked. |
| Port `8443` restricted at the perimeter | Connection attempts from any source other than your operator workstations or jump host are blocked upstream of the OWAF instance. |
| Strip-internal-headers preset applied | On the **Proxy** page, two rules `Remove X-Internal-Role` and `Remove X-Internal-User-Id` are present in the Request Header Rules table. |
| Credential rotation in place (if applicable) | A `Move Authorization to X-Forwarded-Authorization` rule and a `Set value Authorization <service token>` rule are present, in that order. |
| Blocking mode active | The **Stats** `WAF MODE` card shows `Blocking`. |
| Paranoia Level recorded | The Paranoia Level slider matches the value written in your operations log. |
| Custom `allow` rules scoped | Every custom rule with action `allow` has a non-empty **Path Prefix**. |
| CORS origin explicit | **Access-Control-Allow-Origin** on the **Proxy** page is an explicit origin for credentialed APIs, not `*`. |
| Pass Rate healthy | The **Stats** `PASS RATE` card is shown in green (at or above `95%`). |
| Baseline captured | Screenshots of the **Stats** page (cards plus the per-category chart) are stored alongside the change-management entry. |

## Best practices

- Re-run this checklist after every major application change, after rotating any of the operator workstations, and after every Bearer-token rotation.
- Treat any deviation from the documented baseline (WAF Mode, Paranoia Level, Anomaly Threshold, active rule count) as a change that requires review, even if the deviation looks benign.
- Capture the **Stats** baseline — the per-category chart, **TOTAL REQUESTS**, and **PASS RATE** — before and after each hardening step. The before-and-after pair is the only reliable way to attribute a change in traffic shape to a specific configuration change.
- Keep an offline copy of the rule list (rule ID, action, Paranoia Level, Path Prefix) so that a missing rule can be spotted at a glance. The OVHcloud Web Application Firewall alpha does not yet offer a rules export — see the limits in [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).
- Never share a Bearer token between two human operators. Request a separate token per holder so that revocation does not break someone else's access.
- Programmatic configuration of the OVHcloud Web Application Firewall is planned for general availability and is not available during the alpha programme.

## Go further

- [Security best practices](../1.4_security_best_practices/guide.en-gb.md) — the conceptual companion to this hardening procedure.
- [Create, edit, and delete custom rules](../3.6_create_custom_rule/guide.en-gb.md) — when the rule-hygiene step uncovers a gap that needs a new custom rule.
- [Transform request headers before forwarding](../3.7_configure_request_headers/guide.en-gb.md) — the full reference for the header pipeline used in Step 2.
- [Configure CORS](../3.8_configure_cors/guide.en-gb.md) — for the CORS detail that backs Step 4.
- [Monitor the OVHcloud Web Application Firewall](../3.9_monitor/guide.en-gb.md) — to wire the **Stats** signal into customer-side observability.

Join our [community of users](/links/community).
