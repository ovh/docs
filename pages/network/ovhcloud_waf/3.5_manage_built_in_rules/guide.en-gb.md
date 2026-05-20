---
title: "Manage built-in OWASP CRS rules in the OVHcloud WAF"
excerpt: "Browse, search, disable, and tune built-in OWASP Core Rule Set rules in the OVHcloud Web Application Firewall Admin UI."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall ships with more than 900 built-in rules derived from the OWASP Core Rule Set (CRS), covering SQL injection, cross-site scripting, remote code execution, local file inclusion, scanner detection, and other common attack patterns. The **Rules** page of the OVHcloud Web Application Firewall Admin UI (OWAF Admin UI) is where you browse, search, and fine-tune those rules without writing a single line of code. This guide focuses on what you can do with the built-in catalogue — disabling noisy rules, switching their action between `block`, `allow`, and `log`, and pinning their individual Paranoia Level.

**This guide explains how to browse, search, disable, and tune the built-in OWASP CRS rules of the OVHcloud Web Application Firewall from the OWAF Admin UI.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- A signed-in OWAF Admin UI session — see [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).
- The proxy already configured to forward traffic to your backend — see [Configure the proxy](../3.3_configure_proxy/guide.en-gb.md).
- A defined WAF Mode and Paranoia Level on the **Configuration** page — see [Configure WAF mode, Paranoia Level, and Anomaly Threshold](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md).

## Instructions

### Step 1 — Open the Rules page

1. In the OWAF Admin UI sidebar, click **Rules**. This is the default landing page after sign-in, so you are most likely already there.

Above the rules table you will see the rules summary bar with:

- the **total rules** count,
- the **active rules** count,
- the **current Paranoia Level** (for example, "Paranoia Level 1").

A note in the summary bar reminds you that any rule with a Paranoia Level higher than the current global setting is marked as inactive.

<!-- DRAFT: To screenshot — capture the OWAF Admin UI Rules page with built-in rules visible, summary bar at the top, table populated below -->
![OWAF Admin UI Rules page](images/rules-page.png){.thumbnail}

### Step 2 — Read the rules table

Each rule is rendered as a row in the rules table. The columns are:

| Column | Description |
|---|---|
| RULE | Rule name and ID number (for example "SQL Injection Detected #942100"). |
| CATEGORY | Attack category: `sqli`, `xss`, `rce`, `lfi`, `scanner_detection`, etc. |
| SEVERITY | Risk level: `CRITICAL`, `ERROR`, `WARNING`, or `NOTICE`. |
| ACTION | What happens when the rule matches: `block`, `allow`, or `log`. Can be changed inline via the dropdown. |
| PHASE | When the rule is evaluated: "Request headers" or "Request body". |
| PL | Paranoia Level (1–4). Can be changed inline for built-in rules. |
| TYPE | `BUILT-IN` (shipped with the OVHcloud Web Application Firewall) or `CUSTOM` (user-created). |
| STATUS | `ENABLED`, `DISABLED`, or `PL X — INACTIVE` (inactive due to Paranoia Level). |
| ACTIONS | Buttons to enable or disable. Custom rules also expose `Edit`{.action} and `Delete`{.action}. |

> [!primary]
>
> A built-in rule can be in one of three statuses:
>
> - `ENABLED` — the rule is active and evaluates incoming traffic.
> - `DISABLED` — the rule has been manually disabled from the **Rules** page and does not evaluate traffic.
> - `PL X — INACTIVE` — the rule's Paranoia Level is higher than the current global Paranoia Level, so the engine does not run it. For example, at Paranoia Level 1, a rule with PL 2 shows `PL 2 — INACTIVE`.

### Step 3 — Search and filter built-in rules

The rules catalogue contains more than 900 entries, so use search and filtering to find what you need before making any change.

1. Use the **search box** to filter by rule name, rule ID, or category.
2. Use the **category dropdown** to show only rules of one category (`sqli`, `xss`, `rce`, `lfi`, `scanner_detection`, etc.).
3. Click `Refresh`{.action} to reload the rules list from the WAF engine.

> [!primary]
>
> The TYPE column tells you whether a row is `BUILT-IN` or `CUSTOM`. If you are tuning the OWASP CRS catalogue, ignore rows tagged `CUSTOM` — they are managed from the [Create a custom rule](../3.6_create_custom_rule/guide.en-gb.md) workflow.

### Step 4 — Disable or re-enable a built-in rule

A built-in rule that produces too many false positives can be disabled at any time. The change is hot-reloaded — the WAF engine applies it immediately without restarting.

1. Locate the rule using search and the category filter.
2. In the ACTIONS column, click `Disable`{.action} to deactivate the rule, or `Enable`{.action} to reactivate a previously disabled rule.
3. Disabled built-in rules appear in the read-only **Disabled Rules** list on the **Configuration** page. That list is informational only — you cannot re-enable a rule from there.

> [!primary]
>
> Built-in rules cannot be deleted. Disabling them is the safe way to silence a noisy rule while remaining able to revert. To restore a disabled built-in rule, come back to the **Rules** page and click `Enable`{.action} on the corresponding row.

### Step 5 — Change the action of a built-in rule inline

The ACTION column lets you change what the engine does when a built-in rule matches, without leaving the rules table.

1. In the ACTION column for the built-in rule you want to tune, open the dropdown.
2. Select `block`, `allow`, or `log`.
3. The change applies immediately.

The three actions behave as follows:

| Action | Effect |
|---|---|
| block | Reject the request and serve a `403 Forbidden` response (in Blocking mode). |
| allow | Let the request through even if other rules match. |
| log | Record the match but do not block. |

> [!warning]
>
> Setting a built-in rule's action to `allow` overrides all detection logic for matching requests. Use `allow` only as a deliberate exception (for example a vetted bypass for a specific URL pattern), not as a way to silence false positives — switch the action to `log` for that purpose.

### Step 6 — Change the Paranoia Level of a built-in rule inline

Each rule ships with a Paranoia Level between 1 and 4. The engine activates a rule only if its PL is at or below the global Paranoia Level configured on the **Configuration** page. You can override a built-in rule's individual PL inline.

1. In the PL column for the built-in rule, change the value to a number between `1` and `4`.
2. The change applies immediately.

> [!primary]
>
> Only rules with a PL at or below the **global** Paranoia Level are active. Changing a rule's PL inline lets you keep a useful rule active at a low global PL, or pin a noisy rule to PL 4 so it only runs under a Paranoid global setting.

## Verify

Use the rules table itself to confirm each change took effect. Combine the STATUS, ACTION, and PL columns with traffic on the **Stats** page when you need end-to-end proof.

| Change | What to check |
|---|---|
| Rule disabled | The STATUS column shows `DISABLED`. The rule appears in the read-only **Disabled Rules** list on the **Configuration** page. |
| Rule re-enabled | The STATUS column shows `ENABLED`. The rule no longer appears in the **Disabled Rules** list on the **Configuration** page. |
| Action changed | A test request that previously triggered `block` now matches the new action — for example, switching to `log` no longer returns `403 Forbidden`, while the match is still visible on the **Stats** page. |
| PL changed inline | If the new PL is above the global Paranoia Level, the STATUS column shows `PL X — INACTIVE`. If it is at or below the global PL, the STATUS column shows `ENABLED`. |

## Troubleshooting

| Issue | Cause | Resolution |
|---|---|---|
| The built-in rule row has no `Delete`{.action} button. | Built-in rules cannot be deleted, only disabled. | Click `Disable`{.action} in the ACTIONS column instead. |
| A disabled rule still seems to fire. | The browser cached the previous state of the rules table. | Click `Refresh`{.action} on the **Rules** page to reload the catalogue from the WAF engine. |
| A disabled rule never re-runs. | The rule is listed in the read-only **Disabled Rules** section of the **Configuration** page. | Re-enable it from the **Rules** page only, by clicking `Enable`{.action} in the ACTIONS column. |
| A built-in rule shows `PL X — INACTIVE` immediately after you raised its PL. | The new PL is above the global Paranoia Level. | Lower the rule's PL back to or below the global PL, or raise the global Paranoia Level on the **Configuration** page. |
| Changes do not appear on the **Stats** page. | Stats auto-refresh every 15 seconds and depend on live traffic. | Wait one refresh cycle, replay a representative test request, then re-check the **Stats** page. |

## Best practices

- Prefer changing a built-in rule's action to `log` rather than disabling it during tuning. You keep visibility on the **Stats** page and can revert to `block` once you have validated the request pattern.
- Document any built-in rules you disable, including the reason and the date. Review that list periodically so disabled rules do not silently outlive their justification.
- Keep the search box and the category dropdown handy during incident response. Filtering by category (`sqli`, `xss`, `rce`, `lfi`, `scanner_detection`) is the fastest way to find rules in the same family when triaging a wave of similar requests.
- Tune one rule at a time when you suspect a false positive. Inline changes are hot-reloaded, so a single targeted edit makes cause and effect easy to attribute on the **Stats** page.
- Resist the temptation to lower the global Paranoia Level just because one rule is noisy. Pin that single rule to a higher PL instead, so the rest of the PL cohort remains active.

Programmatic configuration of the OVHcloud Web Application Firewall is planned for general availability and is not available during the alpha programme.

## Go further

- [Configure WAF mode, Paranoia Level and Anomaly Threshold](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md)
- [Create, edit, and delete custom rules](../3.6_create_custom_rule/guide.en-gb.md)
- [Security best practices](../1.4_security_best_practices/guide.en-gb.md)
- [Monitor the OVHcloud Web Application Firewall](../3.9_monitor/guide.en-gb.md)
- [Rule targets, operators, and categories reference](../ovhcloud_waf-rule-targets-and-operators/guide.en-gb.md)

Join our [community of users](/links/community).
