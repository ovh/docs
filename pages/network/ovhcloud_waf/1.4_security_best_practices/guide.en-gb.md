---
title: "OVHcloud Web Application Firewall — security best practices"
excerpt: "Apply recommended settings to tune the OVHcloud Web Application Firewall for reliable detection with a low false-positive rate."
updated: 2026-05-20
---

## Objective

The OVHcloud Web Application Firewall ships with sensible defaults, but a production deployment benefits from a deliberate rollout, a chosen Paranoia Level, and disciplined tuning. The recommendations below distil the operational guidance from the OVHcloud Web Application Firewall Admin UI (OWAF Admin UI) into a prescriptive checklist that operators can apply article by article.

**This guide explains how to tune the OVHcloud Web Application Firewall for reliable detection with a low false-positive rate.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Roll out in Detection mode first

Always start a new deployment in **Detection** mode. In Detection, every rule is still evaluated and every event is logged, but no request is blocked, so legitimate users are never impacted while you observe how the rules behave against your real traffic.

Monitor the **Stats** page for **24 to 48 hours** before switching to Blocking. That window — recommended in the alpha onboarding procedure — gives the **Blocked Requests by Category** chart enough samples to reveal which rule categories are noisy on your application, and lets you tune or disable the offending rules before they start returning `403 Forbidden` to real users.

Only switch the WAF to **Blocking** once the per-category breakdown is stable and the pass rate stays above the green threshold.

| Mode | Behaviour | Recommended use |
|---|---|---|
| **Blocking** | Requests that exceed the anomaly threshold are rejected with `403 Forbidden`. | Production traffic, once Detection-mode tuning is complete. |
| **Detection** | All rules are evaluated and events are logged, but every request is forwarded to the backend. | Initial rollout, regression testing after a rules change, or any pre-production assessment. |
| **Disabled** | The WAF is bypassed and all traffic is forwarded without inspection. | Short, targeted debugging only — never as a steady state. |

## Choose a Paranoia Level that matches your application

The Paranoia Level (PL) controls how many built-in rules are active. Choose the lowest level that gives you the coverage your application requires: each step up activates additional rules and increases the chance of false positives.

| Level | Name | Recommended for |
|---|---|---|
| **1** | Basic | Most public web applications and APIs. Lowest false-positive rate; covers the most common and reliable attack patterns. Use this as the default during initial rollout. |
| **2** | Standard | Applications that need broader detection coverage than PL 1 and can tolerate a moderate amount of tuning to handle the additional false positives. |
| **3** | Strict | High-security applications such as administrative back ends or authenticated APIs that handle sensitive data. Expect more false positives. |
| **4** | Paranoid | Security-critical environments only. Will produce many false positives and requires careful, ongoing tuning. |

Remember that only rules at or below the current Paranoia Level are active: at PL 1 only PL 1 rules evaluate traffic, at PL 3 the PL 1, PL 2, and PL 3 rules are all active. When you need stricter coverage, raise the PL one step at a time and observe the **Stats** dashboard between each change. Why: jumping straight to PL 4 typically floods the **Blocked Requests by Category** chart with false positives that obscure the genuine attacks you are trying to catch.

## Tune the anomaly threshold deliberately

Each matching rule adds its score to the request's total anomaly score. The request is blocked when the total score reaches or exceeds the **anomaly threshold**. The default threshold is `5`. Lower values are stricter (the request is blocked after fewer or lower-scored rule matches); higher values are more permissive.

Keep the default threshold of `5` during the initial rollout. Why: the default is calibrated against the built-in OWASP Core Rule Set scores and the threshold is the single setting that has the largest blast radius on pass rate. Only adjust it after you have analysed which rules are firing on the **Stats** page and confirmed that the false positives are driven by aggregated low-score matches rather than by a small number of identifiable rules. In that specific case, prefer raising the threshold over disabling individual rules.

If a small number of rules are responsible for the false positives, tune those rules directly (disable them, switch their action to **log**, or lower their PL) instead of relaxing the threshold for every request.

## Harden header handling

Request-header rules on the **Proxy** page transform headers before forwarding to the backend. Treat them as part of your security policy, not as a convenience.

- Always strip headers that an internal service would trust but a client should never set. Use the **Strip internal headers** preset to remove `X-Internal-Role` and `X-Internal-User-Id` from inbound requests, and add any other `X-Internal-*` headers your backend recognises. Why: without this, a client can forge internal identity headers and bypass application-level authorisation.
- Rotate credentials at the WAF rather than forwarding the client's `Authorization` header to the backend. Apply the **Credential rotation (auth token)** preset, which moves the inbound `Authorization` header to `X-Forwarded-Authorization` and then sets a fresh service token in `Authorization`. Why: the backend receives a token under your control while the original client token remains available for audit in `X-Forwarded-Authorization`.
- Set tenant or trust headers server-side using the **Set value** action. For example, use the **Add tenant header** preset to set `X-Tenant` from the WAF rather than trusting whatever value the client supplied. Why: any header the client controls must be considered untrusted input.
- Re-order rules so that **Remove** actions run before **Set value**, **Move to**, or **Copy to** actions. Header rules are applied in order from top to bottom, so stripping first guarantees that the values you then set or move are not derived from a header the client injected.

## Configure CORS conservatively

The CORS settings on the **Proxy** page inject headers on every response, including `403 Forbidden` block pages. Misconfigured CORS is both a security risk and a common source of mysterious browser failures.

- Leave **Access-Control-Allow-Origin** empty unless your application is genuinely consumed cross-origin. An empty value disables CORS header injection entirely and is the safest default. Why: enabling CORS when it is not needed widens the attack surface for cross-origin requests against authenticated endpoints.
- When CORS is required, prefer an explicit origin such as `https://app.example.com` over the wildcard `*`. Why: an explicit origin scopes the relaxation to the single front-end you control, whereas `*` allows any site to call your API from the browser.
- Enable **OPTIONS preflight passthrough** when preflight `OPTIONS` requests are being blocked by WAF rules. With passthrough enabled, the OVHcloud Web Application Firewall answers preflight requests directly with `204 No Content`, without inspection and without forwarding them to the backend. Why: preflight requests carry no application payload and only exist to advertise the upcoming request; passing them through the rules engine is needless cost and a common false-positive source.

## Use custom rules for allowlisting and blocklisting

Custom rules complement the built-in OWASP Core Rule Set with policies specific to your application. Use the following patterns as a starting point.

- **Allowlist a trusted IP** — target `REMOTE_ADDR`, operator `ipmatch`, pattern set to the comma-separated IP list, action `allow`. Why: the `allow` action short-circuits further rule evaluation for the request, so monitoring tools and known operator workstations are never blocked by aggressive built-in rules.
- **Block a known bad user-agent** — target `REQUEST_HEADERS`, operator `rx`, pattern set to a case-insensitive regex such as `(?i)badbot`, category `custom`, action `block`, score `5`. Why: matching at the header phase rejects abusive crawlers before their request body is inspected, which saves CPU and avoids inflating the per-category statistics for genuine attack categories.
- **Apply stricter policies to sensitive routes** — populate the **Path Prefix** field with the route prefix (for example `/admin/`). The rule then only evaluates URLs starting with that prefix. Why: it lets you tighten the policy on a small, high-value surface — a back office or an internal API — without raising the global Paranoia Level for the whole application.
- **Stay well under the alpha limit of `500` custom rules.** Why: in alpha there is only one tenant per instance and rule evaluation is global, so a sprawling custom rule set is harder to audit and slower to evaluate than a small, deliberate one.

## Keep built-in rules under review

Built-in rules cannot be deleted, but every built-in rule can be disabled and its action and Paranoia Level can be changed inline from the **Rules** page. The full list of currently disabled rule IDs is visible on the **Configuration** page in the **Disabled Rules** section.

Review that list periodically. Why: a rule that was disabled during initial tuning because it was noisy against a then-current application version may now be silent and useful again — for example after a deployment that removed a legitimate request pattern matching the rule. Re-enable any rule that no longer produces false positives so that you retain the broadest coverage the OWASP Core Rule Set provides.

When a built-in rule remains noisy, prefer switching its action from `block` to `log` over disabling it outright. The rule continues to contribute to the **Stats** dashboard and to the anomaly score, which is more informative than removing it from evaluation entirely.

## Monitor continuously

The **Stats** page is the primary feedback loop for tuning. Make it a habitual review point.

- Watch the **PASS RATE** card. The Admin UI marks a pass rate below `95%` in red and a healthy pass rate in green. A red pass rate either means you are under attack or that a recent change has introduced false positives — both require immediate investigation.
- Watch the **Blocked Requests by Category** bar chart. A sudden spike in a single category (for example `SqlInjection` or `Xss`) typically indicates a new attack wave; a broad rise across many categories more often indicates that a new application route is triggering false positives.
- Use the **ACTIVE RULES** and **WAF MODE** cards as a sanity check after every configuration change, to confirm that the change you intended is the change that took effect.

The page auto-refreshes every `15 seconds`, and the last refresh time is shown below the page title. For ad-hoc verification immediately after a change, use the manual `Refresh`{.action} button rather than waiting for the next automatic cycle.

## Treat the Admin UI as a privileged surface

The OWAF Admin UI controls every rule, every header transformation, and the upstream URL. Protect it accordingly.

- The bearer token used to sign in grants full configuration rights over the OVHcloud Web Application Firewall instance. If you suspect a token compromise, contact OVHcloud to rotate it. Why: a leaked token allows an attacker to disable the WAF entirely, change the upstream URL, or inject malicious header rules.
- Restrict network access to port `8443` (Admin UI) to operator workstations or jump hosts. Why: the Admin UI must not be exposed to the public internet — only the WAF proxy on port `8084` should be reachable from end users.
- Sign out of the Admin UI at the end of each session using the **Logout** button in the sidebar footer. Why: leaving the session open on a shared workstation is functionally equivalent to leaving the bearer token written down next to the machine.

## Go further

- [Troubleshooting](../1.5_troubleshooting/guide.en-gb.md)
- [Configure WAF mode, Paranoia Level and Anomaly Threshold](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md)
- [Create, edit, and delete custom rules](../3.6_create_custom_rule/guide.en-gb.md)
- [Transform request headers before forwarding](../3.7_configure_request_headers/guide.en-gb.md)
- [Harden the OVHcloud Web Application Firewall](../3.11_harden/guide.en-gb.md)

Join our [community of users](/links/community).
