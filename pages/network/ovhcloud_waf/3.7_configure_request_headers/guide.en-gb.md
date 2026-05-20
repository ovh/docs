---
title: "Transform request headers in the OVHcloud Web Application Firewall"
excerpt: "Set, remove, rename, or copy HTTP request headers in the OVHcloud Web Application Firewall before they reach your backend."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall can rewrite HTTP request headers before forwarding traffic to your backend. Header transformation is useful for rotating service tokens, stripping headers that clients should not be allowed to set, and tagging requests with tenant or routing information. Rules are evaluated in order, hot-reload on save, and run after WAF inspection but before the request leaves the proxy.

**This guide explains how to transform HTTP request headers in the OVHcloud Web Application Firewall Admin UI.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- A signed-in **OVHcloud Web Application Firewall** Admin UI (OWAF Admin UI) session — see [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).
- The proxy already configured with a valid Upstream URL — see [Configure the proxy](../3.3_configure_proxy/guide.en-gb.md).

## Instructions

### Step 1 — Open the Request Header Rules section

1. In the OWAF Admin UI sidebar, click **Proxy**.
2. Scroll to the **Request Header Rules** section.

<!-- DRAFT: To screenshot — capture the Request Header Rules section of the Proxy page, showing the rule table, the action drop-down, the up/down arrows, the X button, and the three preset buttons. -->
![Request Header Rules section](images/header-rules.png){.thumbnail}

Rules are evaluated **in order, from top to bottom**. Header transformation runs after the OVHcloud Web Application Firewall has finished inspecting the request but before the request is forwarded to your backend. This means that:

- A rule cannot stop a request from being blocked by the WAF — inspection has already happened.
- Rules can rely on the headers the client sent, because the request still carries them when the first rule runs.
- A later rule sees the result of every earlier rule, so the order in which you arrange the list determines the final set of headers your backend receives.

All changes are hot-reloaded on save, so the new header pipeline applies to the next request without restarting the WAF.

### Step 2 — Understand the four available actions

Each rule combines one **HEADER** name with one **ACTION** and, when needed, a **VALUE / DESTINATION**. The four available actions are:

| Action | Effect | When to use |
|---|---|---|
| `Set value` | Sets the header to the specified value. Creates it if absent, overwrites if present. | When the backend requires a constant header value, for example a tenant identifier or a service token. |
| `Remove` | Strips the header from the request entirely. | When you want to prevent clients from injecting trusted internal headers such as `X-Internal-Role` or `X-Internal-User-Id`. |
| `Move to` | Renames the header — removes the original and creates the destination with the same value. | When you want to preserve a client-supplied value under a different name, for example `Authorization` to `X-Forwarded-Authorization`. |
| `Copy to` | Duplicates the header value to another header name and keeps the original. | When the backend needs the same value under two names, for example for tracking or compatibility. |

> [!info]
>
> The **VALUE / DESTINATION** field is used for `Set value` (header value), `Move to` (destination header name), and `Copy to` (destination header name). For `Remove`, the field is unused.

### Step 3 — Add a rule

1. Click `+ Add rule`{.action} to add a new empty row at the bottom of the rule list.
2. In the **HEADER** field, type the source header name, for example `Authorization`.
3. In the **ACTION** field, select one of `Set value`, `Remove`, `Move to`, or `Copy to`.
4. In the **VALUE / DESTINATION** field, enter either:
   - the new header value, for `Set value`,
   - or the destination header name, for `Move to` and `Copy to`.

   For `Remove`, leave this field empty.
5. Repeat the previous steps for any additional rules you want to chain.
6. Click `Save Changes`{.action} at the bottom of the page. The new rules apply to the next request the WAF processes.

> [!primary]
>
> Header names are case-insensitive in HTTP, but it is good practice to keep a consistent casing convention across all your rules — for example, `Authorization`, `X-Forwarded-Authorization`, `X-Tenant`. Consistency makes the rule list easier to audit later.

### Step 4 — Use a preset

The OWAF Admin UI ships with three preset buttons that pre-populate the rule list with a known-good combination of rules. Use them as a starting point and adjust the values to your environment.

| Preset | What it does |
|---|---|
| `Credential rotation (auth token)` | Moves the client's `Authorization` header to `X-Forwarded-Authorization`, then sets a new service token in `Authorization`. |
| `Strip internal headers` | Removes `X-Internal-Role` and `X-Internal-User-Id` to prevent clients from spoofing internal headers. |
| `Add tenant header` | Sets an `X-Tenant` header to identify the tenant. |

To apply a preset:

1. Click the preset button you want to apply.
2. The corresponding rule rows are populated in the table.
3. Edit the populated values if needed — for example, set the actual tenant name in the `Add tenant header` preset, or paste the real service token in the `Credential rotation (auth token)` preset.
4. Click `Save Changes`{.action}.

> [!primary]
>
> Presets append or update the rule list — they do not wipe what is already there. Review the rule order after applying a preset, especially if you combine more than one.

### Step 5 — Reorder and delete rules

Because rules are evaluated top to bottom, the order is part of the configuration:

- To reorder a rule, click the **up arrow** or **down arrow** on its row to move it one position up or down.
- To delete a rule, click the **X** button on the right of its row. The row is removed from the table.
- After any reorder or deletion, click `Save Changes`{.action} for the new order to take effect.

> [!primary]
>
> Order matters. Rules apply top to bottom — if you remove a header and then try to copy it in a later rule, the copy will find nothing. Group `Remove` rules before `Set value` and `Copy to` rules when the same header is involved, so that the order stays safe.

### Step 6 — Save and verify

Click `Save Changes`{.action} at the bottom of the **Proxy** page. Header changes are hot-reloaded: the next request through the OVHcloud Web Application Firewall uses the new rule list, and existing connections continue without interruption. No restart is required.

## Verify

Use the following checks to confirm that your request header rules behave as intended. Inspect your backend access log or a tracing tool that surfaces the headers the backend actually received.

| Check | Expected result |
|---|---|
| Rule added | The **Request Header Rules** section shows the new rule after save. |
| `Set value` rule effective | The backend access log shows the new header with the expected value. |
| `Remove` rule effective | The header is absent from the backend access log, even when the client sent it. |
| `Move to` rule effective | The destination header carries the client value, and the source header is absent at the backend. |
| `Copy to` rule effective | Both the source header and the destination header carry the same value at the backend. |
| Hot reload effective | Saving does not interrupt existing connections, and the new rules apply to the next request. |

## Troubleshooting

| Issue | Cause | Resolution |
|---|---|---|
| The client's header still reaches the backend after a `Remove` rule. | A later rule in the list set the same header again. | Reorder the list so the `Remove` rule runs after any `Set value` for that header, or delete the conflicting rule. Click `Save Changes`{.action}. |
| A `Move to` rule leaves both the source and the destination headers at the backend. | The **HEADER** source field was empty or did not match the actual client header name. | Confirm the **HEADER** field is set to the exact source name. Save again. |
| The backend rejects the request after a token rotation. | The new service token in the `Set value` rule is wrong or expired. | Update the value in the `Set value` rule. The change is hot-reloaded — no restart needed. |
| Saving the page appears to do nothing. | The browser session expired and the Bearer token is no longer accepted. | Sign out and sign back in — see [Troubleshooting](../1.5_troubleshooting/guide.en-gb.md). |
| A preset overwrites a header you wanted to keep. | The preset appended a `Set value` rule for a header you had already configured. | Delete the duplicate rule, or reorder so your rule runs after the preset. Save again. |

## Best practices

- Rotate credentials with a `Move to` rule followed by a `Set value` rule, not with `Remove` followed by `Set value`. The `Move to` action preserves the original client value under a forwarded header name (for example `X-Forwarded-Authorization`), which is useful for audit and for backends that need to know the client's original token.
- Use `Remove` to strip every `X-Internal-*` header your backend uses for trust decisions. Without this, a client can spoof internal-only headers and bypass authorisation logic in your application.
- Document each rule's intent (audit, trust, tenant identification, credential rotation) in your change-management process. The Admin UI does not store comments on rules, so the audit trail must live in your own records.
- Limit `Set value` rules to constant non-sensitive values when you can. Avoid encoding long-lived secrets directly in the OWAF configuration; prefer values that can be rotated quickly through the Admin UI.
- Group rules that act on the same header next to each other in the list, so that the cumulative effect on that header is easy to read at a glance.
- Review the rule order after applying any preset, especially when you combine more than one preset on the same page.

## Go further

- [Configure the proxy and Upstream URL](../3.3_configure_proxy/guide.en-gb.md)
- [Configure CORS](../3.8_configure_cors/guide.en-gb.md)
- [Security best practices](../1.4_security_best_practices/guide.en-gb.md)
- [Harden the OVHcloud Web Application Firewall](../3.11_harden/guide.en-gb.md)

Join our [community of users](/links/community).
