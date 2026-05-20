---
title: "Monitor the OVHcloud Web Application Firewall"
excerpt: "Monitor live traffic, blocked attack categories, and operational health on the OVHcloud Web Application Firewall Stats page."
updated: 2026-05-20
---

## Objective

The **Stats** page of the OVHcloud Web Application Firewall Admin UI (OWAF Admin UI) provides a live monitoring dashboard for every instance. It surfaces the metrics you need to confirm that traffic is flowing, to spot attack waves early, and to validate the impact of any configuration change.

**This guide explains how to monitor the OVHcloud Web Application Firewall from the Stats page of the OWAF Admin UI.**

> [!warning]
>
> The OVHcloud Web Application Firewall is currently in **closed alpha**. The feature set, limits, and Admin UI described in this guide may change before general availability. Access is granted on a case-by-case basis via the [OVHcloud Labs](https://labs.ovhcloud.com/en/) page.

## Requirements

- A signed-in OWAF Admin UI session (see [Sign in to the OWAF Admin UI](../3.2_sign_in_to_admin_ui/guide.en-gb.md)).
- Live traffic flowing through the OVHcloud Web Application Firewall instance on port `8084`. Without traffic, every counter remains at zero.

## Instructions

### Step 1 — Open the Stats page

1. In the OWAF Admin UI sidebar, click **Stats**.

The Stats page opens and starts auto-refreshing every `15 seconds`. The last refresh timestamp is shown below the page title (for example, `refreshed 2:40:51 PM`).

<!-- DRAFT: To screenshot — capture the OWAF Admin UI Stats page with all summary cards and both charts visible -->
![OWAF Admin UI Stats page](images/stats-page.png){.thumbnail}

### Step 2 — Read the summary cards

The top row of the Stats page displays eight key metrics at a glance. Use them to build a quick mental picture of the WAF state before drilling into the charts.

| Card | What it shows |
|---|---|
| TOTAL REQUESTS | Total number of requests processed since the WAF started. |
| BLOCKED | Number of requests blocked by WAF rules (shown in red when > 0). |
| PASS RATE | Percentage of requests allowed through (shown in red when < 95%, green otherwise). |
| ACTIVE CONNECTIONS | Number of currently active connections. |
| WAF MODE | Current operating mode: Blocking, Detection, or Disabled. |
| ACTIVE RULES | Number of currently active rules. |
| UPTIME | How long the WAF has been running. |
| VERSION | Current OVHcloud Web Application Firewall version. |

In prose, the eight cards are referred to as `TOTAL REQUESTS`, `BLOCKED`, `PASS RATE`, `ACTIVE CONNECTIONS`, `WAF MODE`, `ACTIVE RULES`, `UPTIME`, and `VERSION`.

### Step 3 — Interpret the Blocked Requests by Category chart

The **Blocked Requests by Category** bar chart shows how many requests were blocked by each attack category, such as `Lfi`, `Rce`, `Xss`, and `SqlInjection`. Use it to understand what types of attacks your application is receiving and to identify which categories — and therefore which rules — are doing the most work.

> [!primary]
>
> When a category dominates the chart, drill into the **Rules** page filtered by that category. If you see legitimate traffic in the dominant category, switch the offending rule's action to `log` while you investigate — see [Manage built-in OWASP CRS rules](../3.5_manage_built_in_rules/guide.en-gb.md).

### Step 4 — Interpret the Requests by Action chart

The **Requests by Action** bar chart shows the distribution of requests between `allowed` and `blocked`. Use it to spot sudden shifts in the allow/block ratio that may indicate a new attack wave, a scraping campaign, or a misconfigured rule that has just started over-matching legitimate traffic.

Pair this chart with the `PASS RATE` card: a falling pass rate and a rising blocked bar typically point to the same root cause, while a falling pass rate with a stable blocked bar suggests an issue upstream of the WAF.

### Step 5 — Refresh and audit cadence

The Stats page is designed for continuous observation, but the refresh behaviour is worth knowing in detail:

- Stats auto-refresh every `15 seconds`.
- The last refresh time is shown below the page title.
- Click `Refresh`{.action} to manually trigger a refresh.
- The sidebar status panel refreshes every `30 seconds`.

A recommended monitoring cadence is as follows:

- Continuously: leave the Stats page open during incident triage or rollout windows.
- Daily: review the pass rate and the per-category chart for sustained changes.
- Weekly: review the `WAF MODE` and `ACTIVE RULES` cards against your change-management log.

## Verify

Use the following checks to confirm that the Stats page is reporting accurate data:

- Live counters increment as you generate test traffic against the OVHcloud Web Application Firewall on port `8084`.
- `BLOCKED` stays at `0` when `WAF MODE` is `Detection`, because rules log but do not block in that mode.
- The **Blocked Requests by Category** chart populates the categories that match the test attacks you send (for example, an SQLi payload appears under `SqlInjection`).
- The value shown on the `WAF MODE` card matches the value selected on the **Configuration** page.

## Customer-side monitoring

In addition to the built-in Stats page, you can correlate the OWAF figures with customer-side telemetry — for example, backend access logs, application performance monitoring, and CDN logs upstream of the OVHcloud Web Application Firewall instance. Cross-checking these sources is the best way to confirm that a drop in traffic seen on the WAF reflects a real change in client behaviour rather than a routing issue.

The README does not enumerate any external integrations during the alpha. Programmatic access (API, log shipping, exporters) is planned for general availability — see [Prerequisites and limitations](../1.3_prerequisites_and_limitations/guide.en-gb.md).

*Programmatic configuration of the OVHcloud Web Application Firewall is planned for general availability and is not available during the alpha programme.*

## Troubleshooting

| Issue | Cause | Resolution |
|---|---|---|
| Stats not refreshing | Session expired | Sign out and back in (see [Troubleshooting](../1.5_troubleshooting/guide.en-gb.md)). |
| `TOTAL REQUESTS` stays at zero | Traffic is not reaching the WAF on port `8084`, or `WAF MODE` is `Disabled` while DNS still points elsewhere | Check upstream routing; switch the WAF mode out of `Disabled` on the **Configuration** page. |
| `PASS RATE` shown in red persistently | Many rules are firing on legitimate traffic | Drill into the per-category chart and tune the noisy rules — see [Security best practices](../1.4_security_best_practices/guide.en-gb.md). |
| `ACTIVE CONNECTIONS` stays at zero under load | End-user traffic is not reaching port `8084` | Verify DNS or upstream routing so that clients land on the OWAF instance. |

## Best practices

- Keep the Stats page open during the first hour after any major configuration change so that you can revert quickly if the pass rate degrades.
- Treat a pass rate consistently below `95%` as an investigation signal — it is shown in red by design.
- Cross-check the `ACTIVE RULES` card with the rules summary bar on the **Rules** page when troubleshooting unexpected results.
- Capture screenshots or counter values during incidents for post-incident review, since the OVHcloud Web Application Firewall does not yet ship historical analytics in alpha.

## Go further

- [Security best practices](../1.4_security_best_practices/guide.en-gb.md)
- [Declare and follow up on an incident](../3.10_incident/guide.en-gb.md)
- [Manage built-in OWASP CRS rules](../3.5_manage_built_in_rules/guide.en-gb.md)
- [Troubleshooting](../1.5_troubleshooting/guide.en-gb.md)

Join our [community of users](/links/community).
