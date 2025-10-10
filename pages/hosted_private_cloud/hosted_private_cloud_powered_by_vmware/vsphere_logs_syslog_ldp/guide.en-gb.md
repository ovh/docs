---
title: "Activating Syslog and LDP subscription for vSphere logs"
excerpt: "Learn how to forward vSphere logs to your own syslog server or subscribe to the OVHcloud Log Data Platform (LDP) service"
updated: 2025-10-09
---

## Objective

This guide explains how to activate vSphere log forwarding through two different methods:

- **Syslog Forward**, to export NSX-T logs to your own syslog server.
- **LDP subscription**, to centralise VMware logs within the OVHcloud Log Data Platform (LDP).

It also helps you select the most appropriate solution depending on your Hosted Private Cloud configuration (SNC, PCI-DSS, or standard).

## Prerequisites

- A [Hosted Private Cloud service](/links/hosted-private-cloud) running vSphere version 6.5 or higher
- Access to the [OVHcloud API](/links/api)
- The `syslogForward` security option enabled on your PCC
- A valid destination for the logs:
    - **Customer syslog server**, reachable via your private VLAN (RFC 5424 compliant)
    - **OVHcloud Log Data Platform (LDP)** stream with the same NIC as your PCC
- Administrative rights to create or modify log forwarding rules

## Step 1. Compare Syslog and LDP forwarding methods

| Method | Logs available | Network | Certification | Cost | Ideal for |
|:--|:--|:--|:--|:--|:--|
| **Syslog Forward** | NSX-T logs only | Private VLAN (no public for SNC) | PCI-DSS / SNC compatible | Free | Private, secure log export |
| **LDP subscription** | ESXi, vCenter, NSX-T (filtered) | Public | Not PCI-DSS / SNC | Paid | Centralised log correlation and observability |

> [!primary]
> Syslog Forward is enabled on demand during the subscription to the **Log to Customer** service.
> Only about 13 % of Hosted Private Cloud customers use LDP forwarding.

## Step 2. Activate Syslog Forward

1. Log in to the [OVHcloud API](/links/api).

2. Create a new syslog forwarder using the following route:

> [!api]
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/syslogForward/forwarder

3. Fill in the required parameters:

| Parameter | Description |
|:--|:--|
| `ip` | Destination IP address of your syslog server |
| `port` | Listening port (default: 6514 for TLS) |
| `protocol` | `tcp` or `tls` |
| `sourceType` | Example: `nsxtEdge`, `nsxtManager` |
| `logLevel` | `error`, `warning`, or `info` |

4. Validate the configuration.

5. You can verify your server configuration using a compatible syslog daemon such as **syslog-ng**, **rsyslog**, or **fluentd**.

<<Screenshot placeholder – Syslog activation form in vSphere Manager>>

### Example configurations

#### Syslog-ng (TLS)

```bash
source s_syslog_server {
    network(ip("0.0.0.0") port(7514)
        transport("tls")
        tls(
            key_file("/etc/ssl/private/syslog.key")
            cert_file("/etc/ssl/certs/syslog.pem")
            peer-verify(optional-trusted)
        )
    );
};
destination d_syslog_server {
    file("/var/log/syslog-ng-server/test.log");
};
log {
    source(s_syslog_server);
    destination(d_syslog_server);
};
```

#### Rsyslog (TLS)

```bash
module(load="imtcp"
StreamDriver.Name="gtls"
StreamDriver.Mode="1"
StreamDriver.Authmode="anon"
)

global(
DefaultNetstreamDriver="gtls"
DefaultNetstreamDriverCertFile="/etc/ssl/certs/syslog.pem"
DefaultNetstreamDriverKeyFile="/etc/ssl/private/syslog.key"
)
input(type="imtcp" port="7514" ruleset="syslog_tls")
```

<<Screenshot placeholder – Example syslog server configuration>>

## Step 3. Activate LDP subscription

If you prefer to consume VMware logs directly through the **Log Data Platform (LDP)**, you can subscribe to an existing LDP stream.

1. Make sure your PCC has the `syslogForward` option enabled.

2. Your LDP stream must use the same NIC as your PCC and offer equivalent security.

3. Subscription is available for **non-SNC and non-PCI-DSS** clusters only.

Logs available through LDP:

| Source | Log type |
|:--|:--|
| ESXi | `app.hostd`, `app.dfw` |
| vCenter | `vpxd` |
| NSX-T | `app.nsx` |

<<Screenshot placeholder – LDP subscription form>>

### API route to create an LDP subscription

> [!api]
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/logForward/ldp/subscription

| Parameter | Description |
|:--|:--|
| `ldpStream` | Name of the target LDP stream |
| `securityLevel` | Must match your PCC configuration |
| `filter` | Optional log filters |
| `activation` | `true` to start forwarding immediately |

## Step 4. Monitoring and troubleshooting

Each log forward is monitored automatically via **Zabbix** using discovery rules.

Monitored checks:
- Syslog server accessibility (telnet to `ip:port`)
- SSL certificate thumbprint validity

If an issue is detected:
- A **self-healing process** will try to re-establish the connection.
- If the problem persists, the system triggers an incident for further investigation.
- Customers receive an automatic email if the issue comes from their configuration.

Example notification:

> **Subject:** Configuration issue on your log server
> “We were unable to reach your syslog server or its SSL certificate thumbprint does not match the expected value. Please update it using the following API route.”

> [!api]
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/syslogForward/forwarder/{logForwardId}/changeProperties

<<Screenshot placeholder – Monitoring view in Manager>>

## Step 5. Disable or remove a Syslog Forward

> [!api]
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/syslogForward/forwarder/{logForwardId}

This route removes the existing forwarding configuration and stops log export to the target syslog server.

## Go further

- [Managing granular rights on vSphere objects](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/manage_granular_rights)
- [Monitoring and alerting in Hosted Private Cloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/monitoring_and_alerts)
- [OVHcloud Log Data Platform documentation](https://help.ovhcloud.com/csm/fr-vmware-log-forward-ldp?id=kb_article_view&sysparm_article=KB0063705)

If you need training or technical assistance to implement our solutions, please contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalised analysis of your project from our Professional Services team.

Join our [community of users](/links/community).