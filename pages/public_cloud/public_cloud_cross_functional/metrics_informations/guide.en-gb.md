---
title: 'Understanding Metrics in Public Cloud'
excerpt: 'Learn how Metrics work in OVHcloud Public Cloud, dashboards, subscriptions, and regional availability.'
updated: 2026-02-01
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

The objective of this document is to provide OVHcloud Public Cloud users with a comprehensive understanding of the Metrics feature, including:

- Key Concepts – Explaining M4M (Dashboards) and M2C (Subscriptions) so users understand how to monitor and manage their resources.
- Metrics Overview – Defining what Metrics are, how they work, and how they can help optimize cloud operations.
- Regional Roll-out – Highlighting the availability of Metrics across different regions, helping users plan and deploy workloads with full visibility.

By the end of this document, readers will be able to navigate the Metrics feature confidently, leverage dashboards and subscriptions effectively, and understand the service’s regional availability for better cost and resource management.

## Monitoring & Subscriptions: M4M and M2C

M4M and M2C work together to provide a comprehensive experience: view metrics to understand the state of the cloud, and use them to take effective action. This approach ensures that users always have complete control over their resources and can optimize both performance and costs.

### M4M – Dashboards for Metrics Monitoring

M4M represents the approach to visualizing and monitoring metrics. This feature allows users to:

- Centralize and visualize all metrics for their cloud services in real time and historically,
- Create customized dashboards to monitor performance, health, and resource usage,
- Analyze trends and quickly detect anomalies.

The goal of M4M is to provide a comprehensive and intuitive dashboard, ensuring maximum visibility across the entire cloud infrastructure.

### M2C – Metrics Consumption and Subscriptions

M2C corresponds to the management of Metrics consumption and use. It allows users to:

- Subscribe to specific Metrics feeds and receive real-time notifications,
- Integrate Metrics into automated workflows and external tools,
- Set alerts and thresholds to anticipate problems and optimize performance.

M2C emphasizes proactivity and action, transforming metric data into concrete operational decisions.

## Understanding Metrics in the Public Cloud

### What are Metrics?

Metrics are quantitative indicators of cloud resource performance and usage: CPU, memory, network, storage, latency, etc. They enable real-time monitoring, analysis, and optimization of infrastructure.

### Why Metrics Are Essential

- **Monitoring:** track service performance.
- **Efficiency:** detect bottlenecks and optimize resources.
- **Proactivity:** anticipate problems with alerts and thresholds.
- **Cost optimization:** align usage and budget.

### Explore Metrics by service

/// details | Compute

Compute metrics allow you to track the performance and usage of cloud instances. They provide accurate information on CPU, memory, storage, and network, enabling you to optimize performance and anticipate operational needs.

| Category             | Metric                          | Description |
| ---------------------| ------------------------------- | ----------- |
| **Storage – Disks**  | Disk read Bytes (KiB/s)         | Average volume of data read from all volumes attached to the instance. Helps measure application read speed. |
|                      | Disk read IOPS                  | Average number of read operations completed per second. Tracks the intensity of reads on the instance volumes. |
|                      | Disk write Bytes (KiB/s)        | Average volume of data written to all volumes attached to the instance. Helps measure application write speed. |
|                      | Disk write IOPS                 | Average number of write operations completed per second. Tracks the intensity of writes on the instance volumes. |
| **CPU**              | CPU utilization (%)             | Percentage of CPU resources used by the instance over a given period. Helps identify load peaks and potential bottlenecks. |
| **Network**          | Network in (bytes/s)            | Incoming traffic to the instance in bytes per second. Helps detect peaks or anomalies in inbound flows. |
|                      | Network out (bytes/s)           | Outgoing traffic from the instance in bytes per second. Monitors outbound flows and detects abnormal volumes. |
|                      | Network packets in (packets/s)  | Number of incoming packets per second. Useful to analyze network traffic intensity. |
|                      | Network packets out (packets/s) | Number of outgoing packets per second. Monitors outbound flows and detects anomalies. |
| **Memory**           | Memory utilization (%)          | Percentage of memory used by the instance. Helps identify memory pressure, leaks, or capacity constraints. |
| **Attached Volumes** | Number of attached volumes      | Number of volumes attached to the instance, to track available storage configuration. |


///

## Metrics availability by region

OVHcloud is gradually rolling out Metrics across all its regions to ensure high availability and consistent performance. Understanding the rollout by region allows users to plan their deployments, anticipate their monitoring needs, and optimize the use of their resources.

The table below shows the availability status of metrics and the planned release dates for each region.

| Region        | Metrics Availability | Release Date |
| ------------- | -------------------- | ------------ |
| GRA           | Available            |              |
| SBG           | Not available        | Q2 2026      |
| EU-WEST-PAR   | Not available        | Q3 2026      |
| EU-WEST-MIL   | Not available        | Q3 2026      |
| BHS           | Not available        | Q4 2026      |
| GRA           | Not available        | Q4 2026      |
| Autres régions | See [OVHcloud Public Cloud roadmap](https://github.com/orgs/ovh/projects/16/views/11?filterQuery=main-product%3A%2C%22Observability%22+status%3AAcknowledged%2CPrioritized%2CPlanned%2C%22Partially+released%22%2CDone++label%3A%22New+Geo%22+-release-date%3A%3C%40today-2m++-reason%3Anot-planned) | Follow roadmap for updates |

## Go further

Join our [community of users](/links/community).