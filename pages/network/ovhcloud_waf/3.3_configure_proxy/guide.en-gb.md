---
title: "Configure the OVHcloud Web Application Firewall proxy"
excerpt: "Configure the OVHcloud Web Application Firewall to forward inspected traffic to your backend, with host-header and CORS options."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall sits between your end users and your backend application, inspecting every request before deciding whether to forward it. The **Proxy** page of the OVHcloud Web Application Firewall Admin UI (OWAF Admin UI) is where you declare which backend receives the inspected traffic and how the OVHcloud Web Application Firewall rewrites the request on its way through.

**This guide explains how to configure the OVHcloud Web Application Firewall proxy and upstream URL.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- A signed-in OWAF Admin UI session — see [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).
- The HTTP or HTTPS address of your backend. The value must start with `http://` or `https://`.
- End-user traffic routed to the OVHcloud Web Application Firewall instance on port `8084`. This is typically achieved via DNS, an existing load balancer, or a CDN origin override.

## Instructions

### Step 1 — Open the Proxy page

1. In the OWAF Admin UI sidebar, click **Proxy**.

The Proxy page opens with the **Upstream URL** field at the top, the Routing options below it, the Request Header Rules section in the middle, and the CORS Settings section at the bottom. A single `Save Changes`{.action} button at the bottom of the page commits every change made on the page.

<!-- DRAFT: To screenshot — capture the OWAF Admin UI Proxy page showing Upstream URL, Preserve Host header, Request Header Rules section, and CORS Settings section -->
![OWAF Admin UI Proxy page](images/proxy-page.png){.thumbnail}

### Step 2 — Set the Upstream URL

The **Upstream URL** tells the OVHcloud Web Application Firewall where to forward every request that is not blocked by a rule.

1. In the **Upstream URL** field, enter the backend address. For example `http://145.239.127.191` or `https://my-backend.example.com`.
2. Confirm the value starts with `http://` or `https://`. Any other scheme is rejected when you save the page.

> [!primary]
>
> Changes to the Upstream URL are hot-reloaded. The OVHcloud Web Application Firewall instance does not need to be restarted for the new value to take effect.

### Step 3 — Decide whether to preserve the Host header

When **Preserve Host header** is checked, the original `Host` header sent by the client is forwarded unchanged to the backend. When it is unchecked, the OVHcloud Web Application Firewall replaces the `Host` header with the host part of the **Upstream URL**.

Use the following table to choose the correct setting for your deployment:

| Setting | When to use it |
|---|---|
| **Preserve Host header** enabled | The backend uses virtual hosting and routes incoming requests by the `Host` header. |
| **Preserve Host header** disabled | The **Upstream URL** already targets the correct site on the backend, and no further Host-based routing is needed. |

### Step 4 — Review the Request Header Rules (overview)

The **Request Header Rules** section lets you transform HTTP request headers before the OVHcloud Web Application Firewall forwards them to the backend. Each row is a single rule made of a header name, an action, and a value or destination header. The four available actions are summarised below:

| Action | Effect |
|---|---|
| Set value | Set or overwrite the header with the specified value. |
| Remove | Strip the header from the request. |
| Move to | Rename the header — remove the source and create the destination with the same value. |
| Copy to | Duplicate the header value to a new header and keep the original. |

Rules are applied in order from top to bottom. Use the **up/down arrows** on a row to reorder it within the list, the **X** button to delete a rule, and `+ Add rule`{.action} to append a new empty row at the bottom.

Three one-click **Presets** are also available on the Proxy page: **Credential rotation (auth token)**, **Strip internal headers**, and **Add tenant header**. Each preset adds a predefined set of rules that you can then adjust to your needs.

For detailed header-rule patterns, including the presets and ordering best practices, see [Transform request headers before forwarding](../3.7_configure_request_headers/guide.en-gb.md).

### Step 5 — Review the CORS Settings (overview)

The **CORS Settings** section controls how the OVHcloud Web Application Firewall handles Cross-Origin Resource Sharing on every response, including block pages. Three fields are exposed:

- **Access-Control-Allow-Origin** — the origin value the OVHcloud Web Application Firewall injects on responses. Leave it empty to keep CORS headers off.
- **Access-Control-Allow-Headers** — the list of headers the OVHcloud Web Application Firewall declares as allowed on preflight responses. Leave it empty to use the built-in default.
- **OPTIONS preflight passthrough** — a checkbox that controls how `OPTIONS` preflight requests are handled.

When **OPTIONS preflight passthrough** is enabled, the OVHcloud Web Application Firewall answers preflight requests immediately with `204 No Content`, without inspection and without forwarding them to the backend.

For detailed CORS guidance, see [Configure CORS on the OVHcloud Web Application Firewall](../3.8_configure_cors/guide.en-gb.md).

### Step 6 — Save changes

Once the **Upstream URL**, **Preserve Host header**, header rules, and CORS settings reflect the configuration you want, click `Save Changes`{.action} at the bottom of the Proxy page.

> [!success]
>
> The new proxy configuration applies immediately. No restart is required.

## Verify

Use the following checks to confirm that the proxy configuration is in effect:

| Check | Expected result |
|---|---|
| Upstream URL accepted | The Proxy page reloads with no error and the new URL is visible in the **Upstream URL** field. |
| Traffic reaching the backend | On the **Stats** page, the **TOTAL REQUESTS** card increases as you send test traffic. The **ACTIVE CONNECTIONS** card is non-zero during a sustained load. |
| Host header preserved (if enabled) | The backend access log shows the original client `Host` header rather than the host part of the **Upstream URL**. |
| Hot reload effective | Saving the page does not interrupt established connections. |

## Troubleshooting

| Issue | Possible cause | Resolution |
|---|---|---|
| Save fails on the Proxy page. | The **Upstream URL** does not start with `http://` or `https://`. | Fix the URL so it starts with `http://` or `https://`, then click `Save Changes`{.action} again. |
| The backend does not receive any traffic. | End-user traffic is not routed to port `8084` of the OVHcloud Web Application Firewall instance, or the WAF Mode is set to `Disabled`. | Update DNS, your load balancer, or the CDN origin so that traffic reaches the OVHcloud Web Application Firewall on port `8084`. If needed, switch the WAF Mode to `Detection` or `Blocking` on the [WAF mode guide](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md). |
| The backend serves the wrong site. | **Preserve Host header** is disabled, but the backend routes by `Host` header. | Enable **Preserve Host header** on the Proxy page and click `Save Changes`{.action}. |
| Preflight requests are blocked by WAF rules. | The OVHcloud Web Application Firewall inspects `OPTIONS` preflight requests and a rule rejects them. | Enable **OPTIONS preflight passthrough** in CORS Settings. See [Configure CORS on the OVHcloud Web Application Firewall](../3.8_configure_cors/guide.en-gb.md). |

## Go further

- [Configure the WAF mode, Paranoia Level and Anomaly Threshold](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md)
- [Transform request headers before forwarding](../3.7_configure_request_headers/guide.en-gb.md)
- [Configure CORS on the OVHcloud Web Application Firewall](../3.8_configure_cors/guide.en-gb.md)
- [Monitor the OVHcloud Web Application Firewall](../3.9_monitor/guide.en-gb.md)

Join our [community of users](/links/community).
