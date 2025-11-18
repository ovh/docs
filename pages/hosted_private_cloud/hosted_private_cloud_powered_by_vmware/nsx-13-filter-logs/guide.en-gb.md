---
title: 'How to read and filter NSX-T logs'
excerpt: 'Learn how to access and filter NSX-T firewall logs to troubleshoot blocked traffic on your Hosted Private Cloud.'
updated: 2025-10-15
---

## Objective

This guide explains how to extract and analyze key information from NSX-T logs to troubleshoot blocked traffic or monitor firewall activity on your Hosted Private Cloud.

## Requirements

- Access to the vSphere interface
- Access to the [OVHcloud Control Panel](/links/manager) with NSX-T enabled, or to your Syslog/log aggregation system
- Basic understanding of NSX-T firewalling and network traffic

## Instructions

### Step 1: Identify useful log fields

When inspecting logs, focus on the following elements:

| Field          | Description                                            |
|----------------|--------------------------------------------------------|
| Timestamp      | Time when the event occurred                           |
| Action         | Whether traffic was allowed or dropped (ALLOW or DROP) |
| Rule ID        | ID of the NSX-T rule that matched the traffic          |
| Source IP      | Origin IP address                                      |
| Destination IP | Target IP address                                      |
| Protocol       | Protocol used such as TCP, UDP, or ICMP                |

> [!primary]
> The mentioned fields are usually sufficient to identify the most common connectivity issues.

*Optional: Source and destination ports can help identify application specific issues.*

### Step 2: Access the logs from a Syslog server

If NSX-T is configured to forward logs externally:

1. Connect to your Syslog or log aggregation platform
2. Filter entries using fields such as `DROP`, `ruleId`, `src`, `dst`, `proto`, or `dport`

Example log lines:

```bash
ALLOW ruleId=202 src=10.0.0.15 dst=192.168.2.20 proto=UDP dport=53
DROP ruleId=101 src=192.168.1.10 dst=10.0.0.5 proto=TCP dport=44
```

### Step 3: Filter and analyze logs

Depending on your toolchain:

- Use `Log Insight`{.action} to create filters and dashboards
- In tools like Graylog, ELK, or Splunk, build queries to focus on dropped traffic or specific rule IDs
- From CLI exports, filter using:

```bash
grep "DROP" nsx-logs.log | awk '{print $1, $3, $5, $7}'
```

### Advanced: Improving readability in Graylog

To make NSX-T firewall logs easier to read and closer to the simplicity of NSX-V format, you can configure Graylog extractors and dashboards:

1. **Create a dedicated input stream**

    Configure a Graylog stream to capture only NSX-T firewall logs (`facility=local6` and `comp="nsx-edge"`) to isolate them from other system messages.

2. **Normalize timestamps and hosts**

    Use Graylog extractors to clean the raw syslog format, keeping only the event timestamp (e.g. `2024-03-18T06:29:50.837Z`) and source hostname (e.g. `edge27-857b.rbx1a.pcc.ovh.net`).

3. **Parse firewall action and rule ID**

    Apply a Grok or regex extractor to split entries such as `INET TERM PASS 2025 OUT TCP` into structured fields:

    - `Action = PASS / DROP`
    - `Rule ID = 2025`
    - `Direction = OUT`
    - `Protocol = TCP`

4. **Extract source and destination fields**

    Parse the IPs and ports (e.g. `10.216.242.234/61790 -> 10.216.240.19/3128`) into structured Graylog fields:

    - `src_ip`, `src_port`
    - `dst_ip`, `dst_port`

5. **Drop useless metadata**

    Remove verbose attributes such as `[nsx@6876 comp="nsx-edge" ...]` that do not help troubleshooting. This keeps logs leaner and more readable.

6. **Build a simplified log view/dashboard**

    Create a Graylog dashboard showing only the essential fields (Date, Action, Rule ID, Source, Destination, Protocol).

    This replicates the clarity of NSX-V logs and speeds up troubleshooting.

## Go further

- [VMware NSX-T official documentation](https://docs.vmware.com/en/VMware-NSX-T-Data-Center/index.html)
- [How to configure Syslog in NSX-T](https://kb.vmware.com/s/article/74656)

If you require training or technical assistance in implementing our solutions, contact your sales representative or [click here](/links/professional-services) for a quote and request a custom analysis of your project from our Professional Services team experts.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord channel](https://discord.gg/ovhcloud).

Join our [community of users](/links/community).