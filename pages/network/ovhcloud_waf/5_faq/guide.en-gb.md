---
title: "OVHcloud Web Application Firewall — frequently asked questions"
excerpt: "Find answers to common questions about the OVHcloud Web Application Firewall alpha — access, rules, modes, automation, and limits."
updated: 2026-05-20
---

## Objective

This FAQ collects the questions raised most often by alpha participants of the OVHcloud Web Application Firewall. Each answer is short and points to the dedicated guide where the topic is documented in detail.

**This guide explains how to find quick answers about the OVHcloud Web Application Firewall alpha.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## General

This section covers high-level questions about what the OVHcloud Web Application Firewall is and what it protects.

### What is the OVHcloud Web Application Firewall?

The OVHcloud Web Application Firewall is a high-performance reverse proxy built by OVHcloud that inspects, filters, and blocks malicious HTTP and HTTPS traffic before it reaches your backend application. It ships with a rules engine based on the OWASP Core Rule Set and exposes the **OVHcloud Web Application Firewall** Admin UI (OWAF Admin UI) for real-time configuration and monitoring. For a full overview, see [What is the OVHcloud Web Application Firewall?](../1.1_what_is_owaf/guide.en-gb.md).

### What does the OVHcloud Web Application Firewall protect against?

The OVHcloud Web Application Firewall protects web applications and APIs against the most common web attack vectors covered by the OWASP Core Rule Set, including SQL injection, cross-site scripting, remote code execution, local file inclusion, server-side template injection, and scanner detection. More than 900 built-in rules ship with the product and can be enabled or disabled individually. See [What is the OVHcloud Web Application Firewall?](../1.1_what_is_owaf/guide.en-gb.md) for the full scope.

### Is the OVHcloud Web Application Firewall generally available?

No. The OVHcloud Web Application Firewall is currently in closed alpha, and access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page. The feature set, limits, and Admin UI may change before general availability. See [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

### Does the OVHcloud Web Application Firewall require code changes in my application?

No. The OVHcloud Web Application Firewall runs as an inline reverse proxy in front of your backend, so you do not need to modify your application code. You only need to point the OWAF instance at your backend URL and update your DNS or load balancer to send traffic through the OVHcloud Web Application Firewall. See [What is the OVHcloud Web Application Firewall?](../1.1_what_is_owaf/guide.en-gb.md).

### Is the OVHcloud Web Application Firewall based on ModSecurity or another engine?

The OVHcloud Web Application Firewall uses the OWASP Core Rule Set as the basis of its built-in detection logic. [TODO: confirm engine details from product team], including the specific rules engine that evaluates the Core Rule Set inside OWAF. See [What is the OVHcloud Web Application Firewall?](../1.1_what_is_owaf/guide.en-gb.md).

## Access and onboarding

This section answers questions about joining the alpha and signing in to the Admin UI for the first time.

### How do I request access to the alpha?

Submit a request via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page with your OVHcloud NIC handle, a short description of your use case, and the URL of the application you want to protect. Access is reviewed and granted on a case-by-case basis by the OVHcloud team. See the [Quick start](../2.1_quickstart/guide.en-gb.md) for the full onboarding flow.

### What credentials will OVHcloud send me?

Once your request is approved, the OVHcloud team sends two things: the OWAF instance URL in the form `https://<instance>:8443/control-plane`, and a Bearer token that authenticates you to the OWAF Admin UI. Keep both values confidential. See the [Quick start](../2.1_quickstart/guide.en-gb.md).

### Do I sign in via the OVHcloud Control Panel?

No. The OWAF Admin UI is a separate web application accessed via your dedicated instance URL, not the OVHcloud Control Panel. You authenticate by pasting the Bearer token into the login field on the Admin UI and clicking `Sign in`{.action}. See the [Quick start](../2.1_quickstart/guide.en-gb.md).

### Can I have multiple tenants on the same instance?

No. During the alpha there is exactly one tenant per OWAF instance, so each customer or environment requires its own instance. Multi-tenancy is on the roadmap for general availability. See [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

### What browsers are supported?

The OWAF Admin UI supports the latest two versions of Chrome, Firefox, Edge, and Safari. Older browsers may load the interface, but they are not tested and may behave unexpectedly. See [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

## Configuration and rules

This section answers questions about configuring the WAF engine and managing rules.

### What is the difference between Blocking and Detection mode?

In Blocking mode, requests that exceed the anomaly threshold are rejected with a `403 Forbidden` response. In Detection mode, the same rules are evaluated and events are logged, but every request is forwarded to the backend; this is the recommended mode when rolling out the OVHcloud Web Application Firewall for the first time. See [Configure WAF mode, Paranoia Level and Anomaly Threshold](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md).

### Can I disable a built-in rule?

Yes. Built-in rules can be disabled at any time, and their inline action and Paranoia Level can be changed from the **Rules** page, but they cannot be deleted because they ship with the product. Disabled rules appear in the **Disabled Rules** list on the **Configuration** page. See the [guide on managing built-in rules](../3.5_manage_built_in_rules/guide.en-gb.md).

### How do I write a custom rule?

Open the **Rules** page in the OWAF Admin UI and click `+ Add Rule`{.action} in the top-right corner. Fill in the rule form (name, targets, operator, pattern, category, action, Paranoia Level, optional path prefix) and click `Save Rule`{.action} to persist it. See the [guide on creating custom rules](../3.6_create_custom_rule/guide.en-gb.md).

### What targets can a rule inspect?

A rule can inspect one or more of the following request elements: `ARGS`, `REQUEST_PATH`, `REQUEST_URI`, `REQUEST_HEADERS`, `REQUEST_COOKIES`, `REQUEST_BODY`, and `REMOTE_ADDR`. You can also select all targets in a single click from the rule form. See the [rule targets and operators reference](../ovhcloud_waf-rule-targets-and-operators/guide.en-gb.md).

### What operators are available?

Custom rules support the following operators: `rx` (regex), `contains`, `streq` (exact match), `ipmatch` (IP list), `gt` and `lt` (greater than and less than), and the built-in attack detectors `detectsqli` and `detectxss`. The right operator depends on the target and on whether you are matching a pattern, an exact string, or an IP range. See the [rule targets and operators reference](../ovhcloud_waf-rule-targets-and-operators/guide.en-gb.md).

### How does the anomaly threshold work?

Each rule that matches a request adds its score to the request's total anomaly score. When that total reaches or exceeds the anomaly threshold, the request is blocked; the default threshold is `5`. Lowering the threshold makes the OVHcloud Web Application Firewall stricter, while raising it requires more rule matches before a request is blocked. See [Configure WAF mode, Paranoia Level and Anomaly Threshold](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md).

### How do I allow a trusted IP?

Create a custom rule on the **Rules** page with target `REMOTE_ADDR`, operator `ipmatch`, your IP address or comma-separated list as the pattern, and action set to `allow`. The rule is hot-reloaded as soon as you click `Save Rule`{.action}, so the allowlisted IP starts bypassing the WAF immediately. See the [guide on creating custom rules](../3.6_create_custom_rule/guide.en-gb.md).

## Operations and monitoring

This section covers day-to-day operation of the OVHcloud Web Application Firewall.

### Where do I see live statistics?

Open the **Stats** page in the OWAF Admin UI. The dashboard shows summary cards (total requests, blocked, pass rate, active connections, mode, active rules, uptime, version), a per-category breakdown of blocked requests, and the allowed-versus-blocked distribution. The page auto-refreshes every `15 seconds`. See [Monitor traffic and statistics](../3.9_monitor/guide.en-gb.md).

### Why is my pass rate shown in red?

The **PASS RATE** card turns red when the percentage of allowed requests falls below `95%`, which usually indicates that a large share of traffic is being blocked. Use the per-category bar chart on the same page to identify whether the spike is malicious traffic or a noisy rule producing false positives. See [Monitor traffic and statistics](../3.9_monitor/guide.en-gb.md).

### Do configuration changes require a restart?

No. All configuration changes — WAF mode, Paranoia Level, anomaly threshold, custom rules, proxy settings — are hot-reloaded by the OVHcloud Web Application Firewall and apply immediately. You only need to click `Save Changes`{.action} or `Save Rule`{.action} for the change to take effect. See [Configure proxy settings](../3.3_configure_proxy/guide.en-gb.md) and [Configure WAF mode, Paranoia Level and Anomaly Threshold](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md).

### What happens to existing connections when I change configuration?

Hot reload applies the new configuration without interrupting established connections, so in-flight requests continue to be served and new requests use the updated rules and proxy settings. You do not need to schedule a maintenance window to update the OVHcloud Web Application Firewall. See [Configure proxy settings](../3.3_configure_proxy/guide.en-gb.md).

## Limits and roadmap

This section covers current alpha limits and items that are planned for general availability.

### Is there a public OVHcloud API for OWAF?

No. Programmatic configuration of the OVHcloud Web Application Firewall is planned for general availability and is not available during the alpha programme. All configuration is performed through the OWAF Admin UI. See [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

### Is there a Terraform provider resource for OWAF?

No. There is no `ovh_waf*` Terraform resource during the alpha; Terraform support is planned for general availability alongside the public OVHcloud API. See [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

### What is the maximum request body OWAF inspects?

The OVHcloud Web Application Firewall inspects up to `128 KB` of the request body. Larger bodies are forwarded to the backend, but the portion beyond that limit is not evaluated by the rules engine. See [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

### How many custom rules can I create?

Each OWAF instance accepts up to `500` custom rules during the alpha. Built-in rules from the OWASP Core Rule Set do not count against this limit. See [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

### What HTTP protocols are supported?

The OVHcloud Web Application Firewall supports HTTP/1.1 and HTTP/2 between the client and the WAF, and forwards traffic to your backend over HTTP or HTTPS. See [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

### Is high availability available?

No. During the alpha, each OWAF instance is a single node, and high-availability deployment is on the roadmap for general availability. Do not place a production-critical workload behind an alpha instance without an out-of-band failover plan. See [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

### Is there a formal SLA?

No. There is no formal service level agreement during the alpha programme; availability targets will be defined for general availability. Report any incident or degradation directly to your OVHcloud alpha contact. See [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

## Security

This section covers security hygiene for your OWAF instance.

### How do I handle a Bearer-token compromise?

If you suspect the Bearer token used to access the OWAF Admin UI has been disclosed, rotate it immediately by contacting your OVHcloud alpha contact and requesting a fresh token. The old token must no longer be considered trusted, even if no abuse has been observed yet. See the [guide on rotating credentials and incident response](../3.11_harden/guide.en-gb.md).

### Should I strip internal headers from incoming requests?

Yes. Apply the **Strip internal headers** preset on the **Proxy** page so that headers such as `X-Internal-Role` and `X-Internal-User-Id` are removed from inbound requests, which prevents clients from spoofing internal identity headers. The preset adds the required header rules in a single click. See [Configure proxy header rules](../3.7_configure_request_headers/guide.en-gb.md) and the [guide on rotating credentials and incident response](../3.11_harden/guide.en-gb.md).

### Should I use `Access-Control-Allow-Origin: *`?

Only for testing or for fully public APIs that do not handle credentials. For any cross-origin request that carries cookies or an `Authorization` header, set **Access-Control-Allow-Origin** to an explicit origin such as `https://app.example.com`, because wildcard origins are incompatible with credentialed requests. See the [guide on configuring CORS](../3.8_configure_cors/guide.en-gb.md).

### Where do I report a security advisory or a suspected bug in OWAF?

During the alpha, contact your OVHcloud alpha contact directly with the details of the issue, including reproduction steps and any relevant request samples. Do not open a ticket through the standard OVHcloud support flow, as alpha issues are routed through a dedicated channel. See the [guide on reporting issues and feedback](../3.10_incident/guide.en-gb.md).

## Go further

- [What is the OVHcloud Web Application Firewall?](../1.1_what_is_owaf/guide.en-gb.md)
- [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md)
- [Quick start](../2.1_quickstart/guide.en-gb.md)
- [Configure WAF mode, Paranoia Level and Anomaly Threshold](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md)
- [Troubleshooting](../1.5_troubleshooting/guide.en-gb.md)

Join our [community of users](/links/community).
