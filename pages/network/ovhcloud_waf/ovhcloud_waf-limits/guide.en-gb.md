---
title: "OVHcloud Web Application Firewall — alpha limits"
excerpt: "Reference the technical limits, capabilities, and known issues that apply to the OVHcloud Web Application Firewall during the alpha."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall ships with a defined set of limits, capabilities, and default values during the alpha programme. This appendix gathers those reference values in one place so that you can size deployments and rule sets without re-reading the long-form guides.

**This guide explains the alpha limits, capabilities, default values, and known issues of the OVHcloud Web Application Firewall.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

This is a quick-reference appendix. For the narrative explanation of these constraints and how they affect deployment planning, see [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

## Alpha limits

| Limit | Value |
|---|---|
| Tenants per instance | 1 (multi-tenancy planned for GA) |
| Maximum request body inspected | 128 KB |
| Custom rules | Up to 500 |
| Supported protocols | HTTP/1.1, HTTP/2 |
| High availability | Single node (HA planned for GA) |
| API rate limiting | Not yet included |
| Rules save | Not yet included |

## Capabilities

| Capability | Status |
|---|---|
| Inspect inbound HTTP/HTTPS requests (headers, body, URI, cookies, query parameters) | Available |
| Block or log on OWASP CRS rules (900+) | Available |
| Custom rules with regex / exact match / IP match / SQL or XSS detectors | Available |
| Three operating modes (Blocking, Detection, Disabled) | Available |
| Anomaly scoring | Available |
| Paranoia Levels 1–4 | Available |
| Proxy header manipulation (Set / Remove / Move to / Copy to) | Available |
| CORS handling on responses including block pages | Available |
| Live statistics dashboard (per-category, per-action, summary cards) | Available |
| Hot reload of configuration | Available |

## Ports

| Port | Purpose |
|---|---|
| 8443 | Admin UI (`https://<instance>:8443/control-plane`) |
| 8084 | WAF proxy (inbound traffic to be inspected) |

## Rule attributes

| Attribute | Allowed values |
|---|---|
| Targets | ARGS, REQUEST_PATH, REQUEST_URI, REQUEST_HEADERS, REQUEST_COOKIES, REQUEST_BODY, REMOTE_ADDR |
| Operators | rx, contains, streq, ipmatch, gt, lt, detectsqli, detectxss |
| Categories | sqli, xss, rce, lfi, scanner_detection, custom (additional categories may exist for built-in rules; this list reflects the categories explicitly mentioned in the README) |
| Severities | critical, error, warning, notice |
| Actions | block, allow, log |
| Paranoia Level | 1, 2, 3, 4 |
| Custom rule ID starting value | 200001 |

## Refresh intervals

| Item | Interval |
|---|---|
| Stats page auto-refresh | Every 15 seconds |
| Sidebar status panel auto-refresh | Every 30 seconds |
| Configuration changes | Hot-reloaded (no restart required) |

## Default values

| Setting | Default |
|---|---|
| Anomaly Threshold | 5 |
| Custom rule starting ID | 200001 |
| Block response status | 403 Forbidden |
| OPTIONS preflight passthrough response | 204 No Content |

## Browser compatibility

The OWAF Admin UI is supported on the latest two versions of Chrome, Firefox, Edge, or Safari.

## Known issues (alpha)

- API rate limiting is not yet included.
- Persistent rules save is not yet included; configuration is hot-reloaded but persistence behaviour may evolve before general availability.
- High availability is not available; single-node deployment only.
- There is no built-in Admin UI IP allowlist — restrict access at the network perimeter (see [Harden the OWAF Admin UI](../3.11_harden/guide.en-gb.md)).
- There is no formal SLA for the alpha programme.
- No public OVHcloud API or Terraform provider resource for the OVHcloud Web Application Firewall is available in alpha.

## Go further

- [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md)
- [Rule targets, operators, and categories reference](../ovhcloud_waf-rule-targets-and-operators/guide.en-gb.md)

Join our [community of users](/links/community).
