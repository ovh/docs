---
title: "Declare an incident on the OVHcloud WAF alpha"
excerpt: "Collect diagnostic information and report an incident affecting the OVHcloud Web Application Firewall during the closed alpha."
updated: 2026-05-20
---

## Objective

During the closed alpha programme, the OVHcloud Web Application Firewall is supported directly by the OVHcloud team. When you observe an unexpected behaviour — blocked legitimate traffic, an unreachable Admin UI, or any other regression — you need to collect a minimal diagnostic bundle and route it to the right contact. A well-prepared report shortens triage and helps the team reproduce the issue.

**This guide explains how to declare an incident affecting the OVHcloud Web Application Firewall during the alpha programme.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- A signed-in session on the OVHcloud Web Application Firewall Admin UI (OWAF Admin UI). See [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).
- Your OVHcloud alpha contact — the person or distribution list provided to you during onboarding.
- The ability to capture screenshots of the Admin UI (browser screenshot tool or operating system shortcut).

## Instructions

### Step 1 — Confirm the symptom

Before you declare an incident, narrow down what you are seeing. Most issues observed during the alpha fall into a small number of categories, and the dedicated guides for each of them resolve the common causes without any intervention from the OVHcloud team.

- Legitimate traffic blocked or a high false-positive rate, see [Troubleshooting](../1.5_troubleshooting/guide.en-gb.md).
- The backend is not receiving traffic, see [Configure the proxy](../3.3_configure_proxy/guide.en-gb.md).
- Sign-in fails or the Admin UI is unreachable, see [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).

> [!primary]
>
> If a customer-side change (DNS, upstream proxy, application deployment) coincides with the symptom, document it — it shapes the diagnosis.

### Step 2 — Gather diagnostic information

Collect the items below before you contact the OVHcloud team. The more complete the bundle, the faster the triage.

| Information | How to collect it |
|---|---|
| Timestamp (UTC) | Note the time the symptom first appeared, in UTC. |
| Affected URL or path | The exact request URL on the protected application that exhibits the symptom. |
| Sample of blocked requests | Screenshots of the **Stats** page Blocked Requests by Category chart and of the per-action chart (Requests by Action). |
| WAF Mode and Paranoia Level | Visible on the **Configuration** page and on the Stats `WAF MODE` summary card. |
| Anomaly Threshold | Visible on the **Configuration** page (default value: `5`). |
| Active rules count | Visible on the Stats `ACTIVE RULES` summary card. |
| Total requests and pass rate | Visible on the Stats `TOTAL REQUESTS` and `PASS RATE` summary cards. |
| WAF version | Visible in the OWAF Admin UI sidebar footer (for example, `1.8.0`). |
| Recent configuration changes | Anything you changed on the **Rules**, **Configuration**, or **Proxy** pages within the past `48 hours`. |
| Recent application changes | Deployments, DNS or routing changes upstream of the OVHcloud Web Application Firewall. |
| Customer-side logs | Backend access logs around the timestamp, including the `Host` header observed (especially if `Preserve Host header` is enabled on the **Proxy** page). |

<!-- DRAFT: To screenshot — the Stats page with the Blocked Requests by Category and Requests by Action charts visible, plus the summary cards. -->

### Step 3 — Attempt a non-destructive mitigation

While you wait for the OVHcloud team to acknowledge the incident, you may apply a non-destructive mitigation to reduce the impact on the protected application. Each of the following actions is reversible and leaves the WAF engaged.

- Switch the WAF Mode to `Detection` to unblock traffic while you continue to investigate. See [Configure the WAF Mode and Paranoia Level](../3.4_configure_waf_mode_and_paranoia/guide.en-gb.md).
- Lower the Paranoia Level by one step on the **Configuration** page (for example, from `2` to `1`).
- Switch the action of a noisy rule to `log` so that it continues to score but no longer blocks. See [Manage built-in rules](../3.5_manage_built_in_rules/guide.en-gb.md).

> [!warning]
>
> Switching the WAF Mode to `Disabled` removes all attack protection from the protected application. Avoid this option in production — prefer `Detection`, which keeps the rule engine running while letting traffic pass.

### Step 4 — Contact your OVHcloud alpha contact

Send the diagnostic bundle from Step 2 directly to your OVHcloud alpha contact, using the channel agreed during onboarding (email, Teams, Slack, or any other channel `[TODO: alpha contact channel as provided by OVHcloud]`). Keep the message focused and structured so that the team can triage quickly.

Include the following elements in the message:

- A short subject line in the form `[OWAF alpha] <one-line symptom>`.
- The diagnostic bundle assembled in Step 2.
- The mitigation already applied (if any), with the timestamp at which you applied it.
- The expected impact on the protected application (for example, a percentage of users affected, a specific endpoint, or a business-critical workflow).

> [!primary]
>
> The alpha programme channels feedback through the OVHcloud team. Do not open a standard OVHcloud support ticket for OVHcloud Web Application Firewall issues during the alpha unless your contact instructs you to.

### Step 5 — Follow up and document

Once the report has been sent, keep the loop tight with the OVHcloud team and record the outcome for your own organisation.

1. Track the OVHcloud team's responses in the same channel you used to declare the incident.
2. Apply any configuration changes they recommend, validating each change against the Stats page before moving on to the next one.
3. Once the incident is resolved, capture the resolution and any rule changes in your change-management system.
4. If you suspect a recurring issue, raise it in the next alpha feedback session so the OVHcloud team can prioritise it on the roadmap.

## What to include in the report (template)

Copy the block below into your message to the OVHcloud team and fill each field. It mirrors the diagnostic bundle from Step 2 and gives the team everything it needs in one pass.

```text
Subject: [OWAF alpha] <symptom>

When: <timestamp UTC>
Affected: <host, path, environment>
Symptom: <short description of what the user or application sees>

Diagnostic bundle:
- WAF Mode: <Blocking | Detection | Disabled>
- Paranoia Level: <1 | 2 | 3 | 4>
- Anomaly Threshold: <value>
- Active rules: <count>
- Total requests / Pass rate: <values from the Stats page>
- WAF version: <value from the sidebar footer>
- Screenshots: <Stats Blocked Requests by Category, Requests by Action>
- Backend logs: <attached or summarised, with Host header observed>

Mitigation applied: <what you changed and when, in UTC>
Suspected cause: <your hypothesis or "unknown">
Recent changes: <WAF, application, DNS, or upstream changes in the past 48 hours>

Contact: <your name, role, time zone, preferred reply channel>
```

## Post-incident

Once the OVHcloud team marks the incident as resolved, close the loop on your side so that the next alpha report builds on what you learned.

- Request a written summary from your OVHcloud contact so it can be reviewed at your end and stored alongside the report.
- Update internal runbooks with anything you learned (new symptoms, new mitigations, new contacts).
- Add new rules or tuning changes to your change-management log, including the rationale and the date of the change.
- Flag any limit, bug, or roadmap gap you encountered for the next alpha feedback round.

## Go further

- [Troubleshooting](../1.5_troubleshooting/guide.en-gb.md)
- [Monitor the OVHcloud Web Application Firewall](../3.9_monitor/guide.en-gb.md)
- [Prerequisites and alpha limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md)

Join our [community of users](/links/community).
