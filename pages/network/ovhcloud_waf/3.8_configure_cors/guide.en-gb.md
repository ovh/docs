---
title: "Configure CORS on the OVHcloud WAF"
excerpt: "Configure CORS headers and OPTIONS preflight handling in the OVHcloud Web Application Firewall to support cross-origin web clients."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall can inject Cross-Origin Resource Sharing (CORS) headers on every response it returns, including 403 block pages, and can short-circuit OPTIONS preflight requests so they never reach the WAF rules engine. This is essential when a browser-based front-end calls a protected backend hosted on a different origin.

**This guide explains how to configure CORS headers and OPTIONS preflight handling in the OWAF Admin UI.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- A signed-in session on the **OVHcloud Web Application Firewall** Admin UI (OWAF Admin UI). See [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).
- The proxy already configured with an Upstream URL. See [Configure the proxy](../3.3_configure_proxy/guide.en-gb.md).
- A list of front-end origins that need to call the protected backend (for example `https://app.example.com`).

## Instructions

### Step 1 — Open the CORS Settings section

CORS handling lives on the **Proxy** page of the OWAF Admin UI. When `Access-Control-Allow-Origin` is configured, the OVHcloud Web Application Firewall injects the resulting CORS headers on every response it returns, **including 403 block pages**. This ensures that even blocked cross-origin requests carry the headers the browser expects, so they fail with a clear status code rather than with an opaque CORS error.

1. In the OWAF Admin UI sidebar, click **Proxy**.
2. Scroll to the **CORS Settings** section.

<!-- DRAFT: To screenshot — capture the CORS Settings section -->
![CORS Settings section](images/cors-settings.png){.thumbnail}

### Step 2 — Set Access-Control-Allow-Origin

The `Access-Control-Allow-Origin` field controls which origins are allowed to call the protected backend through the OVHcloud Web Application Firewall.

| Setting | Behaviour |
|---|---|
| Empty | CORS headers are not injected. The protected application's own CORS behaviour (if any) is unaffected. |
| `*` | Allows any origin. |
| An explicit origin (for example `https://app.example.com`) | Only that origin is allowed. |

1. Enter the value in the **Access-Control-Allow-Origin** field.
2. Click `Save Changes`{.action} at the bottom of the page.

> [!warning]
>
> Use `*` only for testing or for fully public APIs without credentials. For credentialed cross-origin requests, specify an explicit origin.

### Step 3 — Set Access-Control-Allow-Headers

The `Access-Control-Allow-Headers` field declares which request headers the browser is allowed to send on cross-origin calls.

- Leave the field empty to use the built-in default.
- Specify a comma-separated list of headers when the client sends custom headers in cross-origin requests, for example `authorization, content-type, x-requested-with`.

1. Enter the value in the **Access-Control-Allow-Headers** field.
2. Click `Save Changes`{.action}.

### Step 4 — Enable OPTIONS preflight passthrough

When **OPTIONS preflight passthrough** is checked, the OVHcloud Web Application Firewall answers OPTIONS preflight requests immediately with `204 No Content`, without inspecting them through the WAF rules and without forwarding them to the backend. This prevents preflights from being accidentally blocked by WAF rules that match on headers, URI patterns, or anomaly score.

1. Check the **OPTIONS preflight passthrough** checkbox.
2. Click `Save Changes`{.action}.

> [!primary]
>
> Enable OPTIONS preflight passthrough when you see browser console errors about CORS preflight requests being blocked — the WAF will then short-circuit preflights to `204 No Content`.

## Verify

| Check | Expected result |
|---|---|
| `Access-Control-Allow-Origin` injected | The browser's network panel shows the configured origin header on responses, including on a deliberately blocked request (`403 Forbidden`). |
| `Access-Control-Allow-Headers` accepted by the client | The cross-origin request completes without a "missing header" error in the browser console. |
| Preflight passthrough effective | The browser's network panel shows the OPTIONS request resolves with `204 No Content` and is not visible in the WAF **Stats** page (no inspection has run). |

## Troubleshooting

| Issue | Cause | Resolution |
|---|---|---|
| Browser console shows a CORS error | `Access-Control-Allow-Origin` is empty or does not match the calling origin | Set the field to the exact origin or to `*`, then click `Save Changes`{.action}. |
| Preflight returns `403 Forbidden` | **OPTIONS preflight passthrough** is disabled and a WAF rule matched the OPTIONS request | Check the **OPTIONS preflight passthrough** checkbox and click `Save Changes`{.action}. |
| Custom client header rejected | The header is missing from `Access-Control-Allow-Headers` | Add the header to the comma-separated list and click `Save Changes`{.action}. |
| Block page lacks CORS headers | `Access-Control-Allow-Origin` is empty | Configure an explicit origin or `*`, then click `Save Changes`{.action}. |

## Best practices

- Prefer an explicit origin over `*`, especially for credentialed requests.
- Enable preflight passthrough whenever you have legitimate browser clients calling the protected backend cross-origin.
- Keep `Access-Control-Allow-Headers` synchronised with the headers your client actually sends. Do not list more headers than necessary.

## Go further

- [Configure the proxy and Upstream URL](../3.3_configure_proxy/guide.en-gb.md)
- [Transform request headers before forwarding](../3.7_configure_request_headers/guide.en-gb.md)
- [Troubleshooting](../1.5_troubleshooting/guide.en-gb.md)

Programmatic configuration of the OVHcloud Web Application Firewall is planned for general availability and is not available during the alpha programme.

Join our [community of users](/links/community).
