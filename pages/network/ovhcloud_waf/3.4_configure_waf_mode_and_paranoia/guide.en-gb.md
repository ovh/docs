---
title: "Configure WAF mode, paranoia level, and anomaly threshold"
excerpt: "Set the operating mode, Paranoia Level, and Anomaly Threshold of the OVHcloud Web Application Firewall on the Configuration page."
updated: 2026-05-20
---

## Objective

The **Configuration** page of the OVHcloud Web Application Firewall Admin UI controls the global behaviour of the WAF engine. From this page, you choose the operating mode that determines whether requests are blocked or only logged, the Paranoia Level that decides which rules are active, and the Anomaly Threshold that sets the score at which a request is rejected. Tuning these three settings together is the primary way to balance security coverage against false positives.

**This guide explains how to configure the WAF Mode, Paranoia Level, and Anomaly Threshold of the OVHcloud Web Application Firewall, and to review the read-only Disabled Rules list on the Configuration page.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- A signed-in OVHcloud Web Application Firewall Admin UI (OWAF Admin UI) session — see [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md).
- The proxy already configured with a valid Upstream URL — see [Configure the proxy](../3.3_configure_proxy/guide.en-gb.md).
- Familiarity with WAF terminology — see the [Glossary](../1.2_glossary/guide.en-gb.md).

## Instructions

### Step 1 — Open the Configuration page

1. In the OWAF Admin UI sidebar, click **Configuration**.

The page displays the WAF Mode buttons, the Paranoia Level slider, the Anomaly Threshold field, and the read-only Disabled Rules list.

<!-- DRAFT: To screenshot — capture the OWAF Admin UI Configuration page showing the WAF Mode buttons, Paranoia Level slider, Anomaly Threshold field, and Disabled Rules list -->
![OWAF Admin UI Configuration page](images/configuration-page.png){.thumbnail}

### Step 2 — Set the WAF Mode

The WAF Mode controls how the OVHcloud Web Application Firewall handles incoming traffic that matches a rule. Three modes are available, and only one is active at a time. The mode applies globally to all requests processed by the WAF.

| Mode | Behaviour | Recommended use |
|---|---|---|
| **Blocking** | Requests matching rules are blocked and receive a `403 Forbidden` response. | Recommended for production. |
| **Detection** | Rules are evaluated and events are logged, but all requests are allowed through. | Recommended for initial rollout and rule tuning. |
| **Disabled** | The WAF is completely bypassed. All traffic is forwarded to the backend without inspection. | Use only for debugging. |

To change the mode:

1. Click the button for the desired mode.
2. Click `Save Changes`{.action} at the bottom of the page.

The new mode applies immediately to all subsequent requests, without restarting the WAF.

> [!warning]
>
> Setting WAF Mode to `Disabled` removes all attack protection. Use this mode only when you need to rule out the WAF as the cause of an issue, and restore protection as soon as the test ends.

### Step 3 — Adjust the Paranoia Level

The Paranoia Level controls how aggressively the WAF detects attacks. Each built-in rule is tagged with a Paranoia Level from 1 to 4. Only rules with a Paranoia Level lower than or equal to the global Paranoia Level are active. Use the slider on the Configuration page to select the level.

| Level | Name | Description | Recommended for |
|---|---|---|---|
| **1** | Basic | Most common and reliable attack patterns. Lowest false-positive rate. | Most deployments and initial rollout. |
| **2** | Standard | Broader detection coverage. May produce some false positives. | Established applications with some tuning capacity. |
| **3** | Strict | Aggressive detection. Expect more false positives. | High-security applications with dedicated tuning capacity. |
| **4** | Paranoid | Maximum detection. Will produce many false positives. | Security-critical environments with careful tuning. |

To change the Paranoia Level:

1. Use the slider to select the desired level.
2. Click `Save Changes`{.action}.

> [!primary]
>
> Only rules at or below the current Paranoia Level are active. For example, at Paranoia Level 1 only PL 1 rules are active; at Paranoia Level 3, PL 1, PL 2 and PL 3 rules are all active.

### Step 4 — Set the Anomaly Threshold

The OVHcloud Web Application Firewall uses an anomaly score model. Each rule that matches an incoming request adds its score to the total anomaly score for that request. If the total score reaches or exceeds the Anomaly Threshold, the request is blocked when the WAF Mode is set to **Blocking**, or logged when it is set to **Detection**. The default threshold is `5`.

| Value | Effect |
|---|---|
| Lower than default (`< 5`) | Stricter — blocks on fewer rule matches. |
| Default (`5`) | Recommended for initial rollout. |
| Higher than default (`> 5`) | More permissive — requires more rule matches to block. |

To change the Anomaly Threshold:

1. Enter the desired threshold in the field.
2. Click `Save Changes`{.action}.

The new threshold applies immediately to all subsequent requests.

### Step 5 — Review the Disabled Rules list

The **Disabled Rules** section on the Configuration page is read-only. It displays the IDs of rules that have been manually disabled from the **Rules** page. The list refreshes from the Rules page state and cannot be edited directly on the Configuration page.

To re-enable a rule that appears in this list:

1. Go to the **Rules** page.
2. Find the rule by ID using the search box.
3. Click the `Enable`{.action} button on the rule row.

For full built-in and custom rule management, see [Manage built-in OWASP CRS rules](../3.5_manage_built_in_rules/guide.en-gb.md) and [Create, edit, and delete custom rules](../3.6_create_custom_rule/guide.en-gb.md).

## Verify

After clicking `Save Changes`{.action} on the Configuration page, check that each setting has been applied.

| Check | How |
|---|---|
| WAF Mode applied | The **WAF MODE** card on the **Stats** page shows the new value within `15 seconds`. |
| Paranoia Level applied | Open the **Rules** page; rules with PL above the new level show `PL X — INACTIVE`. |
| Active rules count updated | The **ACTIVE RULES** card on the **Stats** page reflects the new count. |
| Anomaly Threshold applied | No UI indicator; verify by sending a test request that matches a low-score rule (it should pass or block depending on the new threshold). |
| Changes hot-reloaded | Saving does not interrupt connections and applies immediately. |

## Troubleshooting

If the settings do not behave as expected after saving, work through the table below before raising an alpha-programme support request.

| Issue | Cause | Resolution |
|---|---|---|
| Save fails silently. | Browser session expired. | Sign out and sign back in. |
| Many legitimate requests now blocked. | Paranoia Level raised too high, or threshold lowered too far. | Reduce PL by one and/or restore the threshold to `5`. |
| Built-in rules unexpectedly all INACTIVE. | Paranoia Level set too low (PL 1 with rules at PL 2+). | Raise PL or adjust individual rule PL on the Rules page. |
| Disabled Rules list still shows a rule you re-enabled. | The list is read-only and refreshes from the Rules page state. | Refresh the page. |

## Best practices

- Always start in **Detection** mode for at least `24 to 48 hours`, then switch to **Blocking** once you have reviewed the Stats page and confirmed there are no false positives that would affect legitimate traffic.
- Raise Paranoia Level one step at a time and review the Stats page after each change. Jumping from PL 1 to PL 4 in a single step makes it difficult to identify which rules cause new false positives.
- Keep the Anomaly Threshold at its default of `5` during initial rollout. Only adjust the threshold after you have data from the Stats page that justifies the change.
- Document Paranoia Level and Threshold changes in your change-management process so that false-positive incidents can be correlated with the configuration that caused them.

Programmatic configuration of the OVHcloud Web Application Firewall is planned for general availability and is not available during the alpha programme.

## Go further

- [Security best practices](../1.4_security_best_practices/guide.en-gb.md)
- [Manage built-in OWASP CRS rules](../3.5_manage_built_in_rules/guide.en-gb.md)
- [Create, edit, and delete custom rules](../3.6_create_custom_rule/guide.en-gb.md)
- [Monitor the OVHcloud Web Application Firewall](../3.9_monitor/guide.en-gb.md)

Join our [community of users](/links/community).
