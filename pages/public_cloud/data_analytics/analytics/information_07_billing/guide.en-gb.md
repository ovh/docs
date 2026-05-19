---
title: Understanding Analytics pricing
excerpt: "Find out how Analytics services are billed per second, including compute, storage and backups"
updated: 2026-05-05
---

## Objective

This guide explains how pricing works for Analytics services. It covers the main cost components (compute, storage and backups), how per-second billing is applied, and how to interpret pricing across the website, order page and billing usage in the OVHcloud Control Panel.

## Analytics pricing components

### Compute (virtual machine)

Compute represents the virtual machine running your analytics service. It includes CPU and RAM resources, which directly impact processing performance, scalability and the overall hourly cost of your service.

### Storage (Block Storage)

Storage corresponds to the Block Storage volume where your analytics data is stored. This component is billed based on the allocated capacity (in GB) and is independent from compute resources.

Analytics services such as Dashboards (Grafana), Kafka Connect and Kafka MirrorMaker leverage in-memory storage, meaning they store data primarily in RAM and therefore do not directly benefit from Block Storage for their core data operations.

### Backups (Object Storage)

Backups are stored in Object Storage and ensure data durability and recovery. Pricing depends not only on the analytics service and any associated retention policy, but also on the nature of the data files and how the analytics service structures and organizes the data—while backup tools may optimize the final backup size through compression, these factors still directly influence the characteristics and overall size of the resulting backups.

Backups of analytics services such as Dashboards (Grafana), Kafka, Kafka Connect and Kafka MirrorMaker are generally unnecessary, as the data is volatile and not long-lived like OpenSearch or ClickHouse (check the [Automated Backups for Analytics](/pages/public_cloud/data_analytics/analytics/information_05_automated_backups) guide for more information).

## Billing and pricing principles

### Per-second billing

Analytics services are billed on a per-second basis: you only pay for the exact duration your resources are used. This provides flexibility and ensures accurate cost tracking, especially for variable or on-demand workloads.

### Hourly price (source of truth)

The hourly price is the reference value used to calculate costs. It reflects the price of your resources per hour and serves as the basis for all billing calculations.

### Monthly price

The monthly price is an estimation derived from the hourly price:

- Monthly price = Hourly price × 730 hours

This gives a standard approximation of monthly costs for comparison and planning purposes, even though actual billing remains based on per-second usage.

### Invoice structure

Invoices for analytics services are designed to clearly reflect how resources are billed.

Up until May 2026, an invoice for a given service typically includes two billing lines:

- The analytics service itself (covering compute, base storage and backups)
- Optional additional storage, if provisioned

As the billing model evolves toward greater transparency, invoices are being updated to include three distinct lines:

- The compute component of the service
- The total storage usage, combining base storage and any additional storage
- The backups stored for the service

This evolution provides better visibility into how costs are distributed between compute, storage and backup resources.

## Pricing visibility across interfaces

### Website pricing page

The [pricing page on the OVHcloud website](/links/public-cloud/prices) provides a high-level overview of analytics service costs. It displays hourly and estimated monthly prices, allowing users to compare different plans and configurations.

### OVHcloud Control Panel – Order page

When ordering an analytics service in the OVHcloud Control Panel, pricing is displayed in real time based on selected resources. The estimate updates dynamically as you adjust compute, storage or processing options.

### OVHcloud Control Panel – Billing & usage

In the billing section of the OVHcloud Control Panel, you can monitor your actual usage and costs. Charges are detailed per component and reflect the per-second billing model, giving full transparency into how your bill is calculated.

## We want your feedback

We would love to help answer questions and appreciate any feedback you may have.

For training or technical assistance implementing our solutions, contact your sales representative or visit our [Professional Services](/links/professional-services) page to request a quote and have your project analyzed by our experts.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our analytics service!

Join our [community of users](/links/community).
