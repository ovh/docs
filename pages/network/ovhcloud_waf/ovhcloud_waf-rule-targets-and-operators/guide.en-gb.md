---
title: "OVHcloud Web Application Firewall — rule targets and operators"
excerpt: "Reference the targets, operators, categories, and rule attributes available when writing OVHcloud Web Application Firewall rules."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall rules engine combines a small set of inspection targets, matching operators, and rule attributes. This appendix lists every value that the OVHcloud Web Application Firewall Admin UI (OWAF Admin UI) accepts in the Add Rule form, so you can pick the right combination without leaving the page open in a second tab.

**This guide explains how to look up the targets, operators, categories, severities, actions, phases, statuses, and Paranoia Levels available when writing OVHcloud Web Application Firewall rules.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

This page is a quick lookup for anyone writing or tuning rules in the OWAF Admin UI. For the end-to-end workflow of creating, editing, or deleting a rule, follow the [Create, edit, and delete custom rules](../3.6_create_custom_rule/guide.en-gb.md) guide.

## Targets

A target tells the OVHcloud Web Application Firewall which part of the incoming HTTP request to inspect. The Add Rule form exposes the following seven targets.

| Target | Inspects | Typical use |
|---|---|---|
| `ARGS` | Query-string parameters and request body parameters | Filtering by parameter name or value (for example detecting `id=1' OR 1=1--`). |
| `REQUEST_PATH` | The path component of the URI (no scheme, host, or query) | Restricting rules to specific URL paths. |
| `REQUEST_URI` | The full request URI including the query string | Detecting suspicious patterns anywhere in the URI. |
| `REQUEST_HEADERS` | All request headers | User-agent filtering, custom-header detection, scanner detection. |
| `REQUEST_COOKIES` | All cookie values | Session-related rule checks. |
| `REQUEST_BODY` | The request body (subject to the alpha 128 KB inspection cap) | Detecting payloads in POST/PUT bodies. |
| `REMOTE_ADDR` | The remote IP address of the client | Allowlisting trusted IPs (with `ipmatch`) or blocking known bad ranges. |

> [!primary]
>
> The Add Rule form lets you tick multiple targets. **Select all** is available but should be used sparingly — narrow targets reduce false positives.

## Operators

An operator defines how the rule pattern is compared against the selected target. The OWAF Admin UI accepts the following eight operators.

| Operator | Matches | Typical pattern |
|---|---|---|
| `rx` | Regular expression | `(?i)badbot` (case-insensitive substring of the user-agent) |
| `contains` | Substring match | `' OR 1=1` |
| `streq` | Exact-string equality | `admin` |
| `ipmatch` | IP address or CIDR list | `10.0.0.1,10.0.0.2` (comma-separated) |
| `gt` | Greater-than numeric comparison | `1024` |
| `lt` | Less-than numeric comparison | `5` |
| `detectsqli` | Built-in SQL-injection detector | No pattern required |
| `detectxss` | Built-in cross-site-scripting detector | No pattern required |

## Categories

The category classifies a rule by attack type. It controls how the rule is grouped in the **Rules** page filter dropdown and in the **Blocked Requests by Category** chart on the **Stats** page.

| Category | Description |
|---|---|
| `sqli` | SQL injection rules |
| `xss` | Cross-site scripting rules |
| `rce` | Remote code execution rules |
| `lfi` | Local file inclusion rules |
| `scanner_detection` | Reconnaissance and scanner detection rules |
| `custom` | User-created custom rules |

Additional categories may exist for built-in rules; this list reflects the categories explicitly mentioned in the README. For an exhaustive list, filter the **Rules** page by Category.

## Severities

Severity is the risk label shown in the **SEVERITY** column of the **Rules** table. The OWAF Admin UI accepts four values, listed here from highest risk to lowest.

| Severity | Risk |
|---|---|
| `critical` | Highest risk (auto-applied when the Score is high enough) |
| `error` | High risk |
| `warning` | Moderate risk |
| `notice` | Lowest risk |

Severity is auto-calculated from the Score when creating a custom rule, but can be set manually in the Add Rule form.

## Actions

Action is what the OVHcloud Web Application Firewall does when a rule matches. It can be changed inline from the **ACTION** dropdown on the **Rules** page, or set in the Add Rule form when creating a custom rule.

| Action | Effect |
|---|---|
| `block` | Reject the request and serve a `403 Forbidden` response (in Blocking mode). |
| `allow` | Let the request through even if other rules match. |
| `log` | Record the match but do not block. |

## Phases

The phase determines at which point of the request lifecycle the rule is evaluated. The value is displayed in the **PHASE** column of the **Rules** table.

| Phase | Evaluation point |
|---|---|
| `Request headers` | The rule is evaluated when the request headers are parsed. |
| `Request body` | The rule is evaluated when the request body has been received and parsed (subject to the alpha 128 KB inspection cap). |

## Status values

The status reflects whether a rule is currently evaluating traffic. It is displayed in the **STATUS** column of the **Rules** table.

| Status | Meaning |
|---|---|
| `ENABLED` | The rule is active and evaluates incoming traffic. |
| `DISABLED` | The rule has been manually disabled and does not evaluate traffic. |
| `PL X — INACTIVE` | The rule's Paranoia Level is above the current global Paranoia Level. |

## Paranoia Levels

Each rule is assigned a Paranoia Level. The global Paranoia Level set on the **Configuration** page determines which rules are active.

| Level | Name |
|---|---|
| `1` | Basic |
| `2` | Standard |
| `3` | Strict |
| `4` | Paranoid |

Only rules at or below the global Paranoia Level are active. At Paranoia Level 1, only PL 1 rules evaluate traffic; at Paranoia Level 3, rules at PL 1, 2, and 3 are all active.

## Common patterns

The following patterns combine a target, an operator, a pattern value, and an action into a complete rule body. They reproduce the worked examples from the README and can be used as a starting point in the Add Rule form.

| Pattern | Targets | Operator | Pattern | Action |
|---|---|---|---|---|
| Allow trusted IP | `REMOTE_ADDR` | `ipmatch` | `10.0.0.1,10.0.0.2` | `allow` |
| Block bad bot user-agent | `REQUEST_HEADERS` | `rx` | `(?i)badbot` | `block` |

For the full workflow — including naming the rule, setting the score, choosing a Paranoia Level, and saving — follow the [Create, edit, and delete custom rules](../3.6_create_custom_rule/guide.en-gb.md) guide.

## Go further

- [Manage built-in OWASP CRS rules](../3.5_manage_built_in_rules/guide.en-gb.md)
- [Create, edit, and delete custom rules](../3.6_create_custom_rule/guide.en-gb.md)
- [Glossary](../1.2_glossary/guide.en-gb.md)
- [Alpha limits and known issues](../ovhcloud_waf-limits/guide.en-gb.md)

Join our [community of users](/links/community).
