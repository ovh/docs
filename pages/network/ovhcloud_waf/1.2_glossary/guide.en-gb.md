---
title: "OVHcloud Web Application Firewall glossary"
excerpt: "Find definitions for every domain-specific term used across the OVHcloud Web Application Firewall documentation set."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall documentation set uses a focused vocabulary drawn from the WAF engine, the OWASP Core Rule Set, and the OWAF Admin UI. This glossary gathers those terms in a single alphabetical reference so you can look up any concept while reading the other guides.

**This guide explains the domain-specific vocabulary used throughout the OVHcloud Web Application Firewall documentation set.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Terms

The following table defines the terms used across the OVHcloud Web Application Firewall documentation set.

| Term | Definition |
|------|------------|
| **Action** | What a rule does when it matches a request. The available actions are `block` (reject the request), `allow` (let the request through), and `log` (record the event without acting on the request). |
| **Admin UI** | The OVHcloud Web Application Firewall Admin UI (OWAF Admin UI). It is served by the WAF instance on port `8443` at the path `/control-plane` and is the only interface used to configure the WAF during the alpha programme. |
| **Anomaly score** | The score added to a request by a matching rule. Higher scores indicate more severe matches and contribute more to the request's cumulative anomaly score. |
| **Anomaly scoring** | The cumulative-score system used by the WAF to decide whether to block a request. Each matching rule adds its score to the request; the request is blocked once the total reaches the anomaly threshold. |
| **Anomaly threshold** | The total anomaly score at which a request is blocked. Lower values are stricter, higher values are more permissive. The default value is `5`. |
| **Bearer token** | The credential issued by the OVHcloud team during alpha onboarding. It is used to authenticate to the OWAF Admin UI and can be entered with or without the `Bearer ` prefix on the sign-in screen. |
| **Block page** | The `403 Forbidden` response that the WAF returns when a request is blocked in Blocking mode. CORS response headers, when configured, are injected on this response as well. |
| **Blocking mode** | The WAF operating mode in which requests reaching the anomaly threshold are rejected with a `403 Forbidden` response. This is the recommended mode for production traffic. |
| **Built-in rule** | A rule shipped with the OVHcloud Web Application Firewall, based on the OWASP Core Rule Set. Built-in rules cannot be edited or deleted but can be disabled or have their action and Paranoia Level changed inline. |
| **Category** | The class of attack or rule grouping that a rule belongs to. Examples include `sqli`, `xss`, `rce`, `lfi`, `scanner_detection`, and `custom`. |
| **CORS** | Cross-Origin Resource Sharing. The WAF can inject `Access-Control-Allow-Origin` and `Access-Control-Allow-Headers` response headers on every response, including block pages, and can answer `OPTIONS` preflight requests directly with a `204 No Content`. |
| **CRS** | The OWASP Core Rule Set. The industry-standard open-source WAF rule set that the OVHcloud Web Application Firewall is built on. |
| **Custom rule** | A user-created rule defined through the OWAF Admin UI. Custom rules can be fully edited and deleted, and their IDs start at `200001`. |
| **Detection mode** | The WAF operating mode in which rules are evaluated and events are logged but all requests are forwarded to the backend. Use this mode to test rules without affecting production traffic. |
| **Disabled mode** | The WAF operating mode in which the WAF is completely bypassed and all traffic is forwarded to the backend without inspection. Intended for debugging only. |
| **Hot reload** | Configuration changes applied by the WAF without restarting the engine. All settings exposed by the Admin UI, including proxy and rule changes, take effect immediately on save. |
| **HTTP/1.1 and HTTP/2** | The HTTP protocol versions supported by the WAF for inbound client traffic during the alpha programme. |
| **LFI** | Local File Inclusion. An attack class that attempts to read files from the server through the application. |
| **Operator** | The matching function used by a rule to evaluate its pattern against a target. The available operators are `rx` (regular expression), `contains`, `streq` (exact string match), `ipmatch`, `gt`, `lt`, `detectsqli`, and `detectxss`. |
| **OWASP** | The Open Worldwide Application Security Project. The community organisation that publishes and maintains the Core Rule Set used by the WAF. |
| **Paranoia Level (PL)** | A setting from `1` to `4` (Basic, Standard, Strict, Paranoid) that controls how many rules are active. Only rules with a Paranoia Level less than or equal to the global Paranoia Level evaluate traffic; rules above it appear with the `PL X — INACTIVE` status. |
| **Pass rate** | The summary card on the Stats page that shows the percentage of requests allowed through. It is shown in red when below 95 percent and in green otherwise. |
| **Path Prefix** | An optional filter on a custom rule that restricts the rule to URLs starting with a given prefix, for example `/api/`. |
| **Phase** | The stage at which a rule is evaluated. The possible values are `Request headers` and `Request body`. |
| **Preserve Host header** | A proxy option that, when enabled, forwards the original `Host` header from the client to the upstream. Use it when the backend relies on virtual hosting. |
| **Preset** | A one-click template that adds a predefined set of request header rules for a common scenario, such as credential rotation, stripping internal headers, or adding a tenant header. |
| **RCE** | Remote Code Execution. An attack class that attempts to run commands on the server hosting the application. |
| **Rule ID** | The numeric identifier of a rule. Built-in rule IDs come from the OWASP Core Rule Set, and custom rule IDs are auto-assigned starting from `200001`. |
| **Score** | The anomaly score value configured on a rule. When the rule matches a request, this value is added to the request's cumulative anomaly score. |
| **Severity** | The risk level associated with a rule. The possible values are `CRITICAL`, `ERROR`, `WARNING`, and `NOTICE`. For custom rules, the severity can be auto-calculated from the score or set manually. |
| **SPOE** | Stream Processing Offload Engine. A protocol used to integrate with external HAProxy instances. |
| **SQLi** | SQL Injection. An attack class that injects malicious SQL queries through the application. |
| **SSTI** | Server-Side Template Injection. An attack class that targets server-side template engines. |
| **Status** | The state of a rule in the Rules table. The possible values are `ENABLED`, `DISABLED`, and `PL X — INACTIVE` (the rule is inactive because its Paranoia Level is higher than the current global setting). |
| **Target** | The element of the request that a rule inspects. The available targets are `ARGS`, `REQUEST_PATH`, `REQUEST_URI`, `REQUEST_HEADERS`, `REQUEST_COOKIES`, `REQUEST_BODY`, and `REMOTE_ADDR`. |
| **Tenant** | An isolated configuration scope on a WAF instance. During the alpha programme, each instance hosts a single tenant; multi-tenancy is on the roadmap for general availability. |
| **Upstream (Upstream URL)** | The backend server that the WAF forwards legitimate traffic to, identified by an HTTP or HTTPS URL configured on the Proxy page. |
| **WAF** | Web Application Firewall. A security layer that inspects and filters HTTP traffic before it reaches the backend application. |
| **XSS** | Cross-Site Scripting. An attack class that injects malicious scripts into pages rendered by the application. |

## Go further

- [What is the OVHcloud Web Application Firewall?](../1.1_what_is_owaf/guide.en-gb.md)
- [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md)
- [Rule targets, operators, and categories reference](../ovhcloud_waf-rule-targets-and-operators/guide.en-gb.md)

Join our [community of users](/links/community).
