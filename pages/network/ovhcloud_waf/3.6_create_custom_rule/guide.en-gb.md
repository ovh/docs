---
title: "Create custom OVHcloud Web Application Firewall rules"
excerpt: "Write custom rules in the OVHcloud Web Application Firewall to allow trusted IPs, block bad bots, and tighten policies on sensitive paths."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall lets you complement the built-in OWASP Core Rule Set with your own custom rules. Custom rules cover the gaps that generic signatures cannot address, such as allowlisting trusted operator workstations, blocking a specific bot, or enforcing stricter policies on a sensitive path. Each custom rule is created, edited, and deleted from a single page in the OVHcloud Web Application Firewall Admin UI (OWAF Admin UI).

**This guide explains how to create, edit, and delete custom rules from the OWAF Admin UI.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- A signed-in OWAF Admin UI session — see [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).
- WAF Mode and Paranoia Level already configured — see [Configure WAF mode and Paranoia Level](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md).
- Familiarity with rule targets, operators, and categories — see [Rule targets, operators, and categories reference](../ovhcloud_waf-rule-targets-and-operators/guide.en-gb.md).

## Instructions

### Step 1 — Open the Add Rule form

1. In the OWAF Admin UI sidebar, click **Rules**.
2. Click `+ Add Rule`{.action} in the top-right corner.

The Add Rule form opens above the Rules table.

<!-- DRAFT: To screenshot — capture the Add Rule form open in the OWAF Admin UI, showing every field from Rule ID through Enabled/Disabled. -->

![OWAF Add Rule form](images/add-rule-form.png){.thumbnail}

### Step 2 — Fill in the rule fields

Complete the following fields. Required fields are Name, Targets, Operator, Pattern, and Action.

| Field | Description |
|---|---|
| **Rule ID** | Auto-assigned starting from `200001`. You can change it if needed. |
| **Name** | A descriptive name (for example, `Block bad bot`). |
| **Targets** | What part of the request to inspect. Select one or more: `ARGS` (query/body parameters), `REQUEST_PATH`, `REQUEST_URI`, `REQUEST_HEADERS`, `REQUEST_COOKIES`, `REQUEST_BODY`, `REMOTE_ADDR`. Use **Select all** to check all targets. |
| **Operator** | How to match the pattern: `rx` (regex), `contains`, `streq` (exact match), `ipmatch` (IP list), `gt`/`lt` (greater/less than), `detectsqli`, `detectxss`. |
| **Pattern** | The pattern to match against (regex, string, or comma-separated IPs for `ipmatch`). |
| **Category** | The attack category (`custom`, `sqli`, `xss`, `rce`, `lfi`, and so on). |
| **Score** | Anomaly score added when the rule matches. Higher means more severe. |
| **Severity** | Auto-calculated from the score, or set manually: `critical`, `error`, `warning`, `notice`. |
| **Action** | What to do on match: `block` (reject request), `allow` (let through), `log` (record only). |
| **Paranoia Level** | Which Paranoia Level activates this rule (1 to 4). |
| **Path Prefix** | Optional. Only apply this rule to URLs starting with this prefix (for example, `/api/`). |
| **Enabled/Disabled** | Toggle whether the rule is active immediately. |

> [!primary]
>
> Custom rule IDs auto-start at `200001`. Change the value only if you have an internal numbering scheme that does not collide with the built-in `9xxxxx` range.

> [!primary]
>
> Use the **Select all** option on Targets only when the rule truly applies across the entire request — over-broad targets increase false positives.

> [!primary]
>
> The Score determines how much the rule contributes to the anomaly total. The default Severity is calculated from the Score but can be set manually.

### Step 3 — Save the rule

1. Review the values entered in the Add Rule form.
2. Click `Save Rule`{.action}.

The new rule appears in the **Rules** table with TYPE `CUSTOM`, and the rules summary bar at the top of the page updates the total and active counters. To discard the form without creating a rule, click `Cancel`{.action} instead.

### Step 4 — Worked example: allow a trusted IP

To let a known operator workstation or vetted egress IP bypass detection, create an `allow` rule on `REMOTE_ADDR`.

1. Click `+ Add Rule`{.action}.
2. **Name:** `Allow trusted IP`.
3. **Targets:** `REMOTE_ADDR`.
4. **Operator:** `ipmatch`.
5. **Pattern:** the IP address or addresses, comma-separated — for example `10.0.0.1,10.0.0.2`.
6. **Action:** `allow`.
7. Click `Save Rule`{.action}.

> [!warning]
>
> `allow` rules override matching detection. Use them only for known, trusted operator workstations or vetted egress IPs.

### Step 5 — Worked example: block a bot or user-agent

To reject traffic from a specific automated client, create a `block` rule on `REQUEST_HEADERS` with a regex matching the user-agent string.

1. Click `+ Add Rule`{.action}.
2. **Name:** `Block bad bot`.
3. **Targets:** `REQUEST_HEADERS`.
4. **Operator:** `rx` (regex).
5. **Pattern:** the bot's user-agent regex — for example `(?i)badbot`.
6. **Category:** `custom`.
7. **Action:** `block`.
8. **Score:** `5`.
9. Click `Save Rule`{.action}.

The next request whose `User-Agent` header matches the pattern receives a `403 Forbidden` response (when the WAF is in Blocking mode) and is counted on the **Stats** page under the `custom` category.

### Step 6 — Edit or delete a custom rule

Only rules with TYPE `CUSTOM` can be edited or deleted. Built-in rules can only be enabled, disabled, or have their action and Paranoia Level changed inline.

- **Edit:** click `Edit`{.action} on a custom rule row, modify the fields (Rule ID cannot be changed), then click `Save Rule`{.action}.
- **Delete:** click `Delete`{.action} on a custom rule row. The rule is removed permanently.

> [!alert]
>
> Deleting a custom rule is permanent — there is no undo in the alpha. If you might need the rule again, disable it (set STATUS to `DISABLED`) instead of deleting.

## Verify

Confirm that your custom rule was created, applied, and is producing the expected effect.

| Check | Expected result |
|---|---|
| Rule created | A new row with TYPE `CUSTOM` appears at the bottom of the **Rules** table; the rules summary bar increments. |
| Allow rule effective | A request from a trusted IP that previously triggered a block now passes; the **Stats** page shows the request under `allowed`. |
| Block rule effective | A request matching the user-agent pattern returns `403 Forbidden`; the **Stats** page shows it under the matching category. |
| Edit applied | Re-opening the rule shows the new values. |
| Delete applied | The rule no longer appears in the **Rules** table or anywhere else in the Admin UI. |

## Troubleshooting

| Issue | Cause | Resolution |
|---|---|---|
| Rule does not match expected requests | Target list too narrow or regex incorrect | Use **Select all** to widen targets during testing; review the pattern. |
| Rule shows `PL X — INACTIVE` | The rule's PL is above the global Paranoia Level | Lower the rule's PL, or raise the global PL on **Configuration**. |
| Cannot create rule | You have reached the alpha cap of `500` custom rules | Delete unused rules first. |
| `Save Rule` button greyed out | A required field is empty | Provide values for Name, Targets, Operator, Pattern, and Action. |
| `allow` rule leaks unsafe traffic | Pattern matches too broadly | Tighten the pattern; restrict by **Path Prefix**. |

## Best practices

- Start every new rule with action `log` in **Detection** mode to verify the match scope before promoting it to `block` or `allow`.
- Use **Path Prefix** to scope rules to sensitive routes (for example `/admin/`, `/api/v1/payments/`) rather than applying them globally.
- Document each custom rule's purpose in your change-management system so that future operators understand why the rule exists.
- Periodically prune custom rules that are no longer needed, especially given the alpha cap of `500`.

Programmatic configuration of the OVHcloud Web Application Firewall is planned for general availability and is not available during the alpha programme.

## Go further

- [Manage built-in OWASP CRS rules](../3.5_manage_built_in_rules/guide.en-gb.md)
- [Transform request headers before forwarding](../3.7_configure_request_headers/guide.en-gb.md)
- [Security best practices](../1.4_security_best_practices/guide.en-gb.md)
- [Rule targets, operators, and categories reference](../ovhcloud_waf-rule-targets-and-operators/guide.en-gb.md)

Join our [community of users](/links/community).
