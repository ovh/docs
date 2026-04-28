---
title: 'Declare and Follow Up Upon an Incident'
excerpt: 'Learn how to report an OVHcloud Connect incident, provide diagnostic information, and track resolution'
updated: 2026-02-18
---

## Objective

If you experience a service degradation or outage on your OVHcloud Connect link, follow this guide to report the incident, provide the right diagnostic information, and track resolution.

## Step 1 — Gather diagnostic information

Before contacting support, collect the following information to speed up diagnosis:

### Incident triage checklist

| Information | How to collect it |
|---|---|
| **Timestamp (UTC)** | Note exactly when the issue started and its duration |
| **Affected service** | OVHcloud Connect service name/ID, PoP, VLAN ID |
| **Symptoms** | Link down, BGP session drop, packet loss, high latency, etc. |
| **Interface status** | `show interfaces` (Cisco) or `show interfaces terse` (Juniper) |
| **BGP status** | `show ip bgp summary` (Cisco) or `show bgp summary` (Juniper) |
| **Traceroute** | Run from your side to an OVHcloud resource, and vice versa |
| **MTR output** | If available, run `mtr` for a combined ping + traceroute with loss % |
| **Recent changes** | Any configuration changes, maintenance, or updates before the incident |

### Example diagnostic commands

**Cisco IOS:**
```
show ip bgp summary
show interfaces GigabitEthernet0/0
show ip route
traceroute 172.16.1.10
```

**Juniper JunOS:**
```
show bgp summary
show interfaces terse
show route
traceroute 172.16.1.10
```

**From a Linux host in OVHcloud:**
```bash
ping -c 10 10.0.0.1
traceroute 10.0.0.1
mtr -r -c 50 10.0.0.1
```

## Step 2 — Check for known issues

Before opening a ticket, verify whether the issue is already known:

- **OVHcloud status page** — Check the OVHcloud status and scheduled maintenance pages (accessible from the Control Panel).
- **Provider status page** — If using a provider (Megaport, Equinix, Console Connect), check their status/maintenance pages.
- **Your own monitoring** — Confirm the issue is not on your side (local router failure, ISP outage, etc.).

## Step 3 — Open a support ticket

1. Log in to the [OVHcloud Control Panel](https://www.ovh.com/manager/).
2. Go to **Support** → **Create a ticket** (or navigate to the support section).
3. Select the category related to **Network** / **OVHcloud Connect**.
4. Provide a clear **subject line** (e.g. "OVHcloud Connect — BGP session down since 14:30 UTC").
5. In the description, include:
   - Your OVHcloud Connect **service name/ID**
   - **Timestamp** of the issue (UTC)
   - **Symptoms** observed
   - **Diagnostic outputs** (paste BGP summary, interface status, traceroute)
   - **Impact** on your business (number of users affected, critical services down)
6. Attach any **screenshots** or log files.
7. Submit the ticket and note the **ticket number**.

> **Tip:** The more detailed your initial report, the faster the support team can diagnose the issue.

## Step 4 — Follow up

| Action | When |
|---|---|
| **Check ticket status** | Regularly, through the OVHcloud Control Panel |
| **Respond to requests** | If support asks for additional information, provide it promptly |
| **Escalate if needed** | For critical business impact, request priority handling or escalation |
| **Keep a chronology** | Maintain a timeline of events, communications, and status changes |

### Escalation

If the issue is **business-critical** and you are not getting a timely response:

1. Reference the SLA terms in your contract (see [SLAs](../1.7_slas/guide.en-gb.md)).
2. Request an escalation through the support portal.
3. Contact your OVHcloud account manager for priority handling.

## Step 5 — Post-incident

After the incident is resolved:

1. **Request a Root Cause Analysis (RCA)** — Ask OVHcloud support for a post-incident report explaining what happened and what measures are being taken to prevent recurrence.
2. **Update your runbooks** — Document the incident, resolution steps, and lessons learned.
3. **Implement mitigations** — If the incident revealed a gap (e.g. missing redundancy, inadequate monitoring), plan improvements.
4. **Verify SLA compliance** — If the incident caused downtime beyond the SLA commitment, you may be eligible for service credits (see [SLAs](../1.7_slas/guide.en-gb.md)).

## Summary: incident response flow

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 120" font-family="Arial, sans-serif" font-size="11">
  <rect width="750" height="120" fill="#f8f9fa" rx="8"/>

  <rect x="10" y="35" width="120" height="50" rx="6" fill="#fce4ec" stroke="#c62828" stroke-width="1.5"/>
  <text x="70" y="55" text-anchor="middle" fill="#c62828" font-weight="bold">Detect</text>
  <text x="70" y="72" text-anchor="middle" fill="#555" font-size="9">Alert or user report</text>

  <rect x="155" y="35" width="120" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="215" y="55" text-anchor="middle" fill="#e65100" font-weight="bold">Diagnose</text>
  <text x="215" y="72" text-anchor="middle" fill="#555" font-size="9">Collect logs &amp; data</text>

  <rect x="300" y="35" width="120" height="50" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="360" y="55" text-anchor="middle" fill="#1565c0" font-weight="bold">Report</text>
  <text x="360" y="72" text-anchor="middle" fill="#555" font-size="9">Open support ticket</text>

  <rect x="445" y="35" width="120" height="50" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="505" y="55" text-anchor="middle" fill="#2e7d32" font-weight="bold">Resolve</text>
  <text x="505" y="72" text-anchor="middle" fill="#555" font-size="9">Fix &amp; verify</text>

  <rect x="590" y="35" width="140" height="50" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="660" y="55" text-anchor="middle" fill="#6a1b9a" font-weight="bold">Post-incident</text>
  <text x="660" y="72" text-anchor="middle" fill="#555" font-size="9">RCA &amp; improvements</text>

  <line x1="130" y1="60" x2="155" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a8)"/>
  <line x1="275" y1="60" x2="300" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a8)"/>
  <line x1="420" y1="60" x2="445" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a8)"/>
  <line x1="565" y1="60" x2="590" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a8)"/>

  <defs>
    <marker id="a8" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## What's next?

- Set up proactive [monitoring](../3.9_monitor/guide.en-gb.md) to detect issues before they impact your users
- Review your [SLA](../1.7_slas/guide.en-gb.md) commitments

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
