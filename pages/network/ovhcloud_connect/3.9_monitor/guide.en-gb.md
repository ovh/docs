---
title: 'Monitor Your OVHcloud Connect'
excerpt: 'Discover the tools and metrics available to monitor your OVHcloud Connect service'
updated: 2026-02-18
---

## Objective

Monitoring your OVHcloud Connect service ensures that the connection is healthy, performant, and meeting your expectations. This guide covers the tools and metrics available.

## Monitoring tools

### OVHcloud Control Panel

The primary interface for monitoring your connection:

1. Log in to the [OVHcloud Control Panel](https://www.ovh.com/manager/).
2. Navigate to **Network** → **OVHcloud Connect**.
3. Select your service.

You can view:

| Metric | Description |
|---|---|
| **Connection status** | Whether the physical link is up or down |
| **BGP session status** | Whether BGP peering is Established, Active, or Idle |
| **Bandwidth usage** | Current and historical throughput (inbound/outbound) |
| **Port status** | Physical interface state and error counters |
| **Service details** | PoP, bandwidth tier, vRack association, configuration |

### OVHcloud API

For programmatic monitoring and integration with your own tools:

```python
import ovh

client = ovh.Client(endpoint='ovh-eu')

service_name = "your-occ-service-uuid"

# Get service status
service = client.get(f"/ovhCloudConnect/{service_name}")
print(f"Status: {service['status']}")

# Get PoP configuration and BGP state
pop_config = client.get(f"/ovhCloudConnect/{service_name}/config/pop")
print(pop_config)
```

> Full API reference: [eu.api.ovh.com/console](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1)

### Your own monitoring tools

Complement OVHcloud's monitoring with your own infrastructure:

- **SNMP** — Poll your router's interfaces for traffic counters, error rates, and interface status.
- **BGP monitoring** — Use tools like `bgpstream`, `exabgp`, or your router's built-in monitoring to track BGP session stability and prefix changes.
- **Ping / latency probes** — Set up regular pings or latency measurements between your on-premises network and OVHcloud resources.
- **Third-party platforms** — Tools like Datadog, Zabbix, PRTG, or Grafana can aggregate metrics from both your infrastructure and OVHcloud's API.

## On-demand diagnostics

You can launch on-demand diagnostics from the OVHcloud Control Panel to get a point-in-time status report of your OVHcloud Connect service. Each diagnostic runs in real time against the OVHcloud-side equipment and returns a result you can view or download.

### Available diagnostics

**Layer 3 mode:**

| Diagnostic | Description |
|---|---|
| **BGP Peering Test** | Fetches the BGP session state and related information. |
| **Routes** | Fetches the routing table learned by OVHcloud via BGP (routes received from your side). |
| **Advertised-Routes** | Fetches the routing table advertised by OVHcloud to your side. |

**Layer 2 mode:**

| Diagnostic | Description |
|---|---|
| **MAC Address** | Fetches the list of MAC addresses seen on the Layer 2 segment between your network devices and the vRack. |

### Launch a diagnostic

1. Log in to the [OVHcloud Control Panel](/links/manager).
2. Go to **Network** > `OVHcloud Connect`{.action} and open the service you want to diagnose.
3. At the bottom of the "POP Configuration" panel, in the "Diagnostic POP" segment, click the ellipsis button `...`{.action}.
4. Select the diagnostic to run — for example `BGP Peering Test`{.action} in Layer 3 mode, or `Get the list of my MAC addresses`{.action} in Layer 2 mode.
5. Confirm by clicking `Launch diagnostic`{.action}.

### Retrieve a result

1. Open the `Diagnostics`{.action} tab of the service. Each diagnostic is listed with its ID and timestamp.
2. Click the ellipsis button `...`{.action} next to the entry.
3. Select `See result`{.action} to open the output in a new window, or `Download result`{.action} to save a `.txt` file.

### Limits

| Limit | Value |
|---|---|
| **Retention** | Only diagnostics initiated **within the last seven days** are accessible. Download and archive the ones you need to keep. |
| **Rate limit** | **10 diagnostics per type, per service, per 24 hours.** This applies independently to each diagnostic type (BGP Peering Test, Routes, Advertised-Routes, MAC Address). |

> [!primary]
>
> Diagnostics are also available programmatically through the OVHcloud API under the `/ovhCloudConnect/{serviceName}/diagnostic/...` endpoints. Refer to the [API console](/links/api) for the full list.
>

## Key metrics to watch

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 220" font-family="Arial, sans-serif" font-size="12">
  <rect width="700" height="220" fill="#f8f9fa" rx="8"/>

  <rect x="20" y="20" width="150" height="80" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="95" y="48" text-anchor="middle" font-weight="bold" fill="#2e7d32">Link Status</text>
  <text x="95" y="68" text-anchor="middle" fill="#555" font-size="10">Up / Down</text>
  <text x="95" y="83" text-anchor="middle" fill="#555" font-size="10">Error counters</text>

  <rect x="190" y="20" width="150" height="80" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="265" y="48" text-anchor="middle" font-weight="bold" fill="#1565c0">BGP State</text>
  <text x="265" y="68" text-anchor="middle" fill="#555" font-size="10">Session status</text>
  <text x="265" y="83" text-anchor="middle" fill="#555" font-size="10">Prefix count</text>

  <rect x="360" y="20" width="150" height="80" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="435" y="48" text-anchor="middle" font-weight="bold" fill="#e65100">Throughput</text>
  <text x="435" y="68" text-anchor="middle" fill="#555" font-size="10">Bandwidth in/out</text>
  <text x="435" y="83" text-anchor="middle" fill="#555" font-size="10">Peak vs. average</text>

  <rect x="530" y="20" width="150" height="80" rx="6" fill="#fce4ec" stroke="#c62828" stroke-width="1.5"/>
  <text x="605" y="48" text-anchor="middle" font-weight="bold" fill="#c62828">Latency</text>
  <text x="605" y="68" text-anchor="middle" fill="#555" font-size="10">Round-trip time</text>
  <text x="605" y="83" text-anchor="middle" fill="#555" font-size="10">Jitter</text>

  <rect x="20" y="120" width="320" height="80" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="180" y="148" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Alerts to configure</text>
  <text x="180" y="168" text-anchor="middle" fill="#555" font-size="10">Link down · BGP flap · Bandwidth &gt; 80% · Latency spike · Prefix change</text>
  <text x="180" y="185" text-anchor="middle" fill="#555" font-size="10">Notify by email, SMS, or integration with your incident system</text>
</svg>
```

### Critical alerts (set these up immediately)

| Alert | Trigger | Action |
|---|---|---|
| **Link down** | Physical port state changes to "down" | Check cross-connect, SFP, and contact data centre or provider |
| **BGP session down** | BGP session state changes from "Established" | Check router configuration, peer reachability, and firewall rules |
| **High bandwidth usage** | Throughput exceeds 80% of provisioned capacity | Plan a bandwidth upgrade or optimise traffic |
| **Latency spike** | RTT increases significantly above baseline | Run traceroute and check for congestion or routing changes |
| **Prefix count change** | Unexpected increase or decrease in received/sent prefixes | Investigate route leaks or configuration changes |

## Monitoring commands on your router

### Cisco IOS

```
show interfaces GigabitEthernet0/0
show ip bgp summary
show ip bgp neighbors 192.0.2.1 received-routes
show ip bgp neighbors 192.0.2.1 advertised-routes
show ip route bgp
```

### Juniper JunOS

```
show interfaces terse
show bgp summary
show route receive-protocol bgp 192.0.2.1
show route advertising-protocol bgp 192.0.2.1
show route protocol bgp
```

## Best practices

- **Monitor from both sides** — Check metrics on your router and in the OVHcloud Control Panel.
- **Baseline your metrics** — Record normal bandwidth, latency, and prefix counts so you can detect anomalies.
- **Automate alerting** — Don't rely on manual checks. Set up automated notifications for critical events.
- **Review regularly** — Check monitoring dashboards weekly to spot trends (growing bandwidth, increasing latency).
- **Test failover** — If you have a Multi-AZ setup, periodically test failover and verify that monitoring detects the switch.

## What's next?

- [Forward your OVHcloud Connect logs](../3.12_log_forwarding/guide.en-gb.md) to Logs Data Platform for long-term storage and analysis
- [Declare and follow up on an incident](../3.10_incident_followup/guide.en-gb.md) if you detect a problem
- Review [SLAs](../1.7_slas/guide.en-gb.md) to understand uptime guarantees

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
