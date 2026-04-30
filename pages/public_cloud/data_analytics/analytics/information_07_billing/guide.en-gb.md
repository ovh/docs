---
title: Understanding Analytics Pricing
excerpt: "Learn how Analytics services are priced, including compute, storage, backups, and per-second billing."
updated: 2026-05-04
---

## Objective

This guide explains how pricing works for Analytics services. It covers the main cost components (compute, storage, and backups), how per-second billing is applied, and how to interpret pricing across the website, order page, and billing usage in the Control Panel.

## Analytics Pricing Components

### Compute (Virtual Machine)

Compute represents the virtual machine running your analytics service. It includes CPU and RAM resources, which directly impact processing performance, scalability, and the overall hourly cost of your service.

### Storage (Block Storage)

Storage corresponds to the block storage volume where your analytics data is stored. This component is billed based on the allocated capacity (in GB) and is independent from compute resources.

Analytics services such as Dashboards (Grafana), Kafka Connect and Kafka MirrorMaker leverage in-memory storage, meaning they store data primarily in RAM and therefore do not directly benefit from block storage for their core data operations.

### Backups (Object Storage)

Backups are stored in object storage and ensure data durability and recovery. Pricing depends not only on the analaytics service and any associated retention policy, but also on the nature of the data files and how the analaytics service structures and organizes the data—while backup tools may optimize the final backup size through compression, these factors still directly influence the characteristics and overall size of the resulting backups.

Backups of analytics services such as Dashboards (Grafana), Kafka, Kafka Connect and Kafka MirrorMaker are generally unnecessary, as the data is volatile and not long-lived like OpenSearch or ClickHouse (check the [Automated Backups](/pages/public_cloud/data_analytics/analytics/information_05_automated_backups) guide for more information).

## Billing and Pricing Principles

### Per-Second Billing

Analytics services are billed on a per-second basis, meaning you only pay for the exact duration your resources are used. This provides flexibility and ensures accurate cost tracking, especially for variable or on-demand workloads.

### Hourly Price (Source of Truth)

The hourly price is the reference value used to calculate costs. It reflects the price of your resources per hour and serves as the basis for all billing calculations.

### Monthly Price

The monthly price is an estimation derived from the hourly price:

- Monthly price = Hourly price × 730 hours

This gives a standard approximation of monthly costs for comparison and planning purposes, even though actual billing remains based on per-second usage.

### Invoice Structure

Invoices for analytics services are designed to clearly reflect how resources are billed.

Up until May 2026, an invoice for a given service typically includes two billing lines:

- The analytics service itself (covering compute, base storage and backups)
- Optional additional storage, if provisioned

As the billing model evolves toward greater transparency, invoices are being updated to include three distinct lines:

- The compute component of the service
- The total storage usage, combining base storage and any additional storage
- The backups stored for the service

This evolution provides better visibility into how costs are distributed between compute, storage and backup resources.

## Pricing Visibility Across Interfaces

### Website Pricing Page

The [pricing page on the OVHcloud website](https://www.ovhcloud.com/fr/public-cloud/prices/){.external} provides a high-level overview of analytics service costs. It displays hourly and estimated monthly prices, allowing users to compare different plans and configurations.

### OVHcloud Control Panel – Order Page

When ordering an analytics service in the OVHcloud Control Panel, pricing is displayed in real time based on selected resources. The estimate updates dynamically as you adjust compute, storage, or processing options.

### OVHcloud Control Panel – Billing & Usage

In the billing section of the Control Panel, you can monitor your actual usage and costs. Charges are detailed per component and reflect the per-second billing model, giving full transparency into how your bill is calculated.

## We want your feedback

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our analytics service!
