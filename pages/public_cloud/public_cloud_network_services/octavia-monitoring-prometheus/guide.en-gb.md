---
title: Octavia LoadBalancer monitoring with Prometheus
excerpt: ""
updated: 2023-12-06
---

## Objective

Octavia provides multiple ways to monitor your load balancers. You can query statistics via the Octavia API or directly from your load balancer.

This guide will discuss the various options available to monitor your Octavia load balancer.

## Instructions

### Monitoring Using the Octavia API

Octavia collects key metrics from all load balancers, including load balancers built with third party provider drivers that support collecting statistics. Octavia aggregates these statistics and makes them available via the Octavia API. Load balancer statistics are available at the load balancer or listener level.

Load balancer statistics can be queried using the [OpenStack Client](https://docs.openstack.org/python-openstackclient/latest/).

```bash
$ openstack loadbalancer stats show <lb id>

+--------------------+-----------+
| Field              | Value     |
+--------------------+-----------+
| active_connections | 0         |
| bytes_in           | 2236722   |
| bytes_out          | 100973832 |
| request_errors     | 0         |
| total_connections  | 3606      |
+--------------------+-----------+
```

Individual listener statistics can also be queried using the [OpenStack Client](https://docs.openstack.org/python-openstackclient/latest/).

```bash
$ openstack loadbalancer listener stats show <listener id>

+--------------------+-------+
| Field              | Value |
+--------------------+-------+
| active_connections | 0     |
| bytes_in           | 89    |
| bytes_out          | 237   |
| request_errors     | 0     |
| total_connections  | 1     |
+--------------------+-------+
```

Load balancer statistics queried via the Octavia API include metrics for all listener protocols.

### Monitoring with Prometheus

Some provider drivers, such as the Octavia amphora driver, provide a prometheus endpoint. This allows you to configure your Prometheus infrastructure to collect metrics from Octavia load balancers.

To add a Prometheus endpoint on an Octavia load balancer, create a listener with a special protocol `PROMETHEUS`. This will enable the endpoint as `/metrics` on the listener. The listener supports all of the features of an Octavia load balancer, such as allowed_cidrs, but does not support attaching pools or L7 policies. All metrics will be identified by the Octavia object ID (UUID) of the resources.

> [!primary]
>
>Currectly UDP and SCTP metrics are not reported via Prometheus endpoints when using the amphora provider.
>

To create a Prometheus endpoint on port 8088 for load balancer lb1, you would run the following command.


```bash
$ openstack loadbalancer listener create --name stats-listener --protocol PROMETHEUS --protocol-port 8088 lb1

+-----------------------------+--------------------------------------+
| Field                       | Value                                |
+-----------------------------+--------------------------------------+
| admin_state_up              | True                                 |
| connection_limit            | -1                                   |
| created_at                  | 2023-11-30T01:44:25                  |
| default_pool_id             | None                                 |
| default_tls_container_ref   | None                                 |
| description                 |                                      |
| id                          | fb57d764-470a-4b6b-8820-627452f55b96 |
| insert_headers              | None                                 |
| l7policies                  |                                      |
| loadbalancers               | b081ed89-f6f8-48cb-a498-5e12705e2cf9 |
| name                        | stats-listener                       |
| operating_status            | OFFLINE                              |
| project_id                  | 4c1caeee063747f8878f007d1a323b2f     |
| protocol                    | PROMETHEUS                           |
| protocol_port               | 8088                                 |
| provisioning_status         | PENDING_CREATE                       |
| sni_container_refs          | []                                   |
| timeout_client_data         | 50000                                |
| timeout_member_connect      | 5000                                 |
| timeout_member_data         | 50000                                |
| timeout_tcp_inspect         | 0                                    |
| updated_at                  | None                                 |
| client_ca_tls_container_ref | None                                 |
| client_authentication       | NONE                                 |
| client_crl_container_ref    | None                                 |
| allowed_cidrs               | None                                 |
| tls_ciphers                 | None                                 |
| tls_versions                | None                                 |
| alpn_protocols              | None                                 |
| tags                        |                                      |
+-----------------------------+--------------------------------------+
```

Once the `PROMETHEUS` listener is `ACTIVE`, you can configure Prometheus to collect metrics from the load balancer by updating the prometheus.yml file.

```yaml
[scrape_configs]
- job_name: 'Octavia LB1'
  static_configs:
  - targets: ['192.0.2.10:8088']
```

For more information on setting up Prometheus, see the [Prometheus project web site](https://prometheus.io/).

> [!primary]
>
> The metrics exposed via the `/metrics` endpoint will use a custom Octavia namespace.
>

You can connect [Grafana](https://grafana.com) to the [Prometheus](https://prometheus.io) instance to provide additional graphing and dashboard capabilities. A Grafana dashboard for Octavia load balancers is included in the etc/grafana directory of the Octavia code.

## Go further

Visit our dedicated Discord channel: <https://discord.gg/ovhcloud>. Ask questions, provide feedback and interact directly with the team that builds our databases services.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.