---
title: "Troubleshooting the OVHcloud Web Application Firewall"
excerpt: "Diagnose and resolve common issues with the OVHcloud Web Application Firewall, from blocked legitimate traffic to Admin UI sign-in failures."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall is designed to inspect inbound HTTP and HTTPS traffic and to block malicious requests before they reach your backend. When something does not behave as expected, a structured diagnosis based on the OVHcloud Web Application Firewall Admin UI (OWAF Admin UI) lets you isolate the cause and apply the right remediation.

**This guide explains how to diagnose and resolve the most common issues encountered with the OVHcloud Web Application Firewall during the alpha programme.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- Access to the OVHcloud Web Application Firewall Admin UI
- The Admin UI URL (`https://<instance>:8443/control-plane`) and the Bearer token issued by the OVHcloud team during onboarding
- The ability to send a test HTTP request to the OWAF instance on port `8084` (for example using `curl`)

## Identify the issue

Use the table below to map each symptom to the relevant sub-section in `## Instructions`.

| Symptom | Go to |
|---|---|
| Legitimate traffic is being blocked | [Legitimate traffic is being blocked](#legitimate-traffic-is-being-blocked) |
| The backend is not receiving traffic | [The backend is not receiving traffic](#the-backend-is-not-receiving-traffic) |
| CORS preflight requests are blocked or returning errors in the browser | [CORS preflight requests are blocked or returning errors in the browser](#cors-preflight-requests-are-blocked-or-returning-errors-in-the-browser) |
| You cannot sign in to the Admin UI | [You cannot sign in to the Admin UI](#you-cannot-sign-in-to-the-admin-ui) |
| The Admin UI is unreachable | [The Admin UI is unreachable](#the-admin-ui-is-unreachable) |
| The Stats page is not refreshing or shows stale numbers | [The Stats page is not refreshing or shows stale numbers](#the-stats-page-is-not-refreshing-or-shows-stale-numbers) |
| A newly created custom rule is not taking effect | [A newly created custom rule is not taking effect](#a-newly-created-custom-rule-is-not-taking-effect) |
| A built-in rule is shown as "PL X — INACTIVE" | [A built-in rule is shown as PL X — INACTIVE](#a-built-in-rule-is-shown-as-pl-x--inactive) |

## Instructions

### Legitimate traffic is being blocked

A user reports that a request returns `403 Forbidden`, or you observe a non-zero **BLOCKED** counter on the **Stats** page combined with a **PASS RATE** below 95%. The cause is usually a rule that flags valid input as an attack — a classic false positive.

**Diagnosis**

| Check | Where |
|---|---|
| Identify which attack category is firing | **Stats** page > Blocked Requests by Category chart |
| Find the offending rule | **Rules** page > search by category (for example `sqli`, `xss`) |
| Confirm the rule's action and severity | **Rules** table > ACTION and SEVERITY columns |
| Check the current Paranoia Level | **Configuration** page > Paranoia Level slider |

**Resolution**

1. From the **Configuration** page, lower the **Paranoia Level** using the slider (for example from `Standard` to `Basic`) to deactivate the strictest rules, then click `Save Changes`{.action}.
2. If a single rule is responsible, return to the **Rules** page and change its ACTION inline from `block` to `log` so that the rule keeps generating events without rejecting traffic.
3. As an alternative, click `Disable`{.action} on the rule row to deactivate it entirely.
4. If you prefer to keep all rules active but require more evidence before a block, raise the **Anomaly Threshold** on the **Configuration** page above the default value of `5`, then click `Save Changes`{.action}.
5. Re-send the legitimate request and confirm it is no longer blocked.

### The backend is not receiving traffic

Requests reach the OVHcloud Web Application Firewall on port `8084` but never appear in the backend access logs, or end users see connection errors instead of your application.

**Diagnosis**

| Check | Where |
|---|---|
| Upstream URL is set and well formed | **Proxy** page > Upstream URL (must start with `http://` or `https://`) |
| WAF Mode is not `Disabled` | **Configuration** page > WAF Mode (note that `Disabled` still proxies to the upstream but bypasses inspection) |
| End-user traffic actually reaches the OWAF instance on port `8084` | DNS records, load balancer rules, or upstream routing on your side |
| Virtual-hosted backends receive the correct `Host` header | **Proxy** page > **Preserve Host header** |

**Resolution**

1. On the **Proxy** page, correct the **Upstream URL** so that it points to a reachable backend and starts with `http://` or `https://`.
2. If your backend routes by `Host` header, enable **Preserve Host header**. If the upstream URL already points to a single site, leave it unchecked.
3. Click `Save Changes`{.action}. Configuration changes are hot-reloaded, so no restart is required.
4. Re-test by sending a request to the OWAF instance on port `8084` and confirm that the backend access log records it.

### CORS preflight requests are blocked or returning errors in the browser

A browser displays a CORS error in the developer tools console, or an `OPTIONS` request to the OWAF instance is returned as `403 Forbidden` instead of `204 No Content`.

**Diagnosis**

| Check | Where |
|---|---|
| The failing `OPTIONS` request | Browser developer tools > Network tab |
| OPTIONS preflight passthrough | **Proxy** page > CORS Settings > **OPTIONS preflight passthrough** |
| Access-Control-Allow-Origin value | **Proxy** page > CORS Settings > **Access-Control-Allow-Origin** |
| Access-Control-Allow-Headers value | **Proxy** page > CORS Settings > **Access-Control-Allow-Headers** |

**Resolution**

1. On the **Proxy** page, enable **OPTIONS preflight passthrough** so that the OVHcloud Web Application Firewall answers preflights immediately with `204 No Content` without WAF inspection or forwarding to the backend.
2. Set **Access-Control-Allow-Origin** to the exact origin of your front-end application (for example `https://app.example.com`). Use `*` only for testing — never in production.
3. Populate **Access-Control-Allow-Headers** with the headers your client sends (for example `authorization, content-type, x-requested-with`).
4. Click `Save Changes`{.action} and reload the failing page in the browser.

### You cannot sign in to the Admin UI

You reach the login form at `https://<instance>:8443/control-plane` but the `Sign in`{.action} button does not authenticate you.

**Diagnosis**

| Check | Where |
|---|---|
| The Bearer token is the one issued by the OVHcloud team | Onboarding email or alpha contact |
| The token is pasted correctly | Either form is accepted: with or without the `Bearer ` prefix |
| The Admin UI URL matches the one provided | The URL has the form `https://<instance>:8443/control-plane` |
| The browser is supported | Chrome, Firefox, Edge or Safari — latest two versions |

**Resolution**

1. Re-copy the Bearer token from the onboarding message, taking care not to include leading or trailing whitespace.
2. Paste it into the login field and click `Sign in`{.action}. Either form (with or without the `Bearer ` prefix) is accepted.
3. If the token is rejected, clear your browser cookies for the Admin UI domain and try again.
4. If sign-in still fails, try one of the other supported browsers.
5. If none of these steps work, request fresh credentials from your OVHcloud alpha contact.

### The Admin UI is unreachable

The browser cannot load `https://<instance>:8443/control-plane` at all — for example it times out or returns a network error before the login page renders.

**Diagnosis**

| Check | Where |
|---|---|
| Network reachability from your client to the OWAF instance on port `8443` | Local network or VPN |
| Corporate firewall is not blocking outbound port `8443` | Your network team |
| The instance address is correct | Onboarding email or alpha contact |

**Resolution**

1. Ask your network team to open outbound TCP port `8443` from your client to the OWAF instance address.
2. If you connect through a VPN, confirm that the VPN route covers the OWAF instance subnet.
3. If the instance address itself appears incorrect or no longer responds, contact your OVHcloud alpha contact to confirm the URL.

### The Stats page is not refreshing or shows stale numbers

The **Stats** page should auto-refresh every `15 seconds`, and the sidebar status panel every `30 seconds`. If neither updates, the Admin UI session has most likely expired.

**Diagnosis**

| Check | Where |
|---|---|
| The "refreshed HH:MM:SS" timestamp under the page title | **Stats** page header |
| The sidebar status panel updates | Sidebar, every `30 seconds` |
| Browser console errors | Browser developer tools > Console tab |

**Resolution**

1. On the **Stats** page, click `Refresh`{.action} to force a manual reload of the counters.
2. If the timestamp does not advance, sign out from the sidebar footer and sign back in with your Bearer token.
3. If counters remain stale after a successful sign-in, contact your OVHcloud alpha contact with the diagnostic bundle described in [Escalation](#escalation).

### A newly created custom rule is not taking effect

You created a custom rule with `+ Add Rule`{.action}, saved it, but the rule does not appear to influence traffic — matching requests are not blocked, logged or counted.

**Diagnosis**

| Check | Where |
|---|---|
| The rule's STATUS is `ENABLED` | **Rules** page > STATUS column |
| The rule's PL is at or below the global Paranoia Level | **Rules** page > PL column and **Configuration** page > Paranoia Level |
| The Path Prefix matches the URLs under test | **Rules** page > Edit > Path Prefix |
| The rule was actually saved | **Rules** page > the rule row is present after a `Refresh`{.action} |

**Resolution**

1. On the **Rules** page, find the new rule and confirm that STATUS shows `ENABLED`. If it shows `DISABLED`, click `Enable`{.action}.
2. If STATUS shows `PL X — INACTIVE`, either lower the rule's Paranoia Level inline in the PL column, or raise the global Paranoia Level on the **Configuration** page and click `Save Changes`{.action}.
3. Click `Edit`{.action} on the rule and verify that **Path Prefix** matches the URLs you are testing — for example, an `/api/` prefix will not match requests to `/admin/`.
4. Click `Save Rule`{.action} to confirm any changes, then re-send the test request.

### A built-in rule is shown as "PL X — INACTIVE"

A built-in rule appears in the **Rules** table with STATUS `PL X — INACTIVE`, where `X` is greater than the current global Paranoia Level. The rule is loaded but not evaluating traffic.

**Diagnosis**

The Paranoia Level assigned to the rule is higher than the global Paranoia Level set on the **Configuration** page. For example, a rule with `PL 2` will appear as `PL 2 — INACTIVE` when the global Paranoia Level is `1 (Basic)`.

**Resolution**

1. On the **Configuration** page, move the **Paranoia Level** slider up so that the rule's PL is at or below the global value, then click `Save Changes`{.action}. Be aware that higher Paranoia Levels increase the false positive rate.
2. As an alternative, on the **Rules** page, change the rule's PL inline from the PL column to a value at or below the global Paranoia Level. Use this approach when the rule should always run at a lower PL.
3. Refresh the **Rules** page and confirm that STATUS now shows `ENABLED`.

## Escalation

If the steps above do not resolve the issue, gather a diagnostic bundle and contact your OVHcloud alpha contact. During the closed alpha, feedback is channelled through the OVHcloud team that onboarded you rather than the standard support ticketing flow.

1. Gather the following diagnostic information:
   - Timestamps in UTC for the start and end of the symptom.
   - The URL or path that fails and a sample request (method, headers, body excerpt within the `128 KB` body inspection limit).
   - Sample blocked requests visible in the Blocked Requests by Category chart on the **Stats** page.
   - The current **WAF Mode** and **Paranoia Level** read from the **Configuration** page.
   - The OWAF version displayed in the Admin UI sidebar footer.
   - A screenshot of the symptom (browser error, Admin UI message or Stats panel).
2. Contact your OVHcloud alpha contact directly with the diagnostic bundle. Do not open a standard support ticket — alpha feedback is handled by the OVHcloud team that issued your Bearer token.

## Go further

- [Security best practices](../1.4_security_best_practices/guide.en-gb.md)
- [Configure WAF mode, Paranoia Level and Anomaly Threshold](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md)
- [Monitor the OVHcloud Web Application Firewall](../3.9_monitor/guide.en-gb.md)
- [Declare and follow up on an incident](../3.10_incident/guide.en-gb.md)

Join our [community of users](/links/community).
