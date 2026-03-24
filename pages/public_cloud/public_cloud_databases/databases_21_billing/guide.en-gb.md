---
title: Understanding OVHcloud Databases Pricing
excerpt: "Learn how OVHcloud database services are priced, including compute, storage, backups, and per-second billing."
updated: 2026-03-26
---

## Objective

This guide explains how pricing works for OVHcloud Managed Databases. It covers the three main cost components (compute, storage, and backups), how per-second billing is applied, and how to interpret pricing across the website, order page, and billing usage in the Control Panel.

## Database Pricing Components

### Compute (Virtual Machine)

Compute represents the virtual machine running your database service. It includes CPU and RAM resources, which directly impact performance, scalability, and the overall hourly cost of your service.

### Storage (Block Storage)

Storage corresponds to the block storage volume where your database data is stored. This component is billed based on the allocated capacity (in GB) and is independent from compute resources.

### Backups (Object Storage)

Backups are stored in object storage and ensure data durability and recovery. Pricing depends on the amount of backup data stored and any associated retention policy.

## Billing and Pricing Principles

### Per-Second Billing

OVHcloud databases are billed on a per-second basis, meaning you only pay for the exact duration your resources are used. This provides flexibility and ensures accurate cost tracking, especially for short-lived or scaled workloads.

### Hourly Price (Source of Truth)

The hourly price is the reference value used to calculate costs. It reflects the price of your resources per hour and serves as the basis for all billing calculations.

### Monthly Price

The monthly price is an estimation derived from the hourly price:

- Monthly price = Hourly price × 730 hours

This gives a standard approximation of monthly costs for comparison and planning purposes, even though actual billing remains based on per-second usage.

## Pricing Visibility Across Interfaces

### Website Pricing Page

The [pricing page on the OVHcloud website](https://www.ovhcloud.com/fr/public-cloud/prices/){.external} provides a high-level overview of database service costs. It displays hourly and estimated monthly prices, allowing users to compare different plans and configurations.

### OVHcloud Control Panel – Order Page

When ordering a database service in the OVHcloud Control Panel, pricing is displayed in real time based on selected resources. The estimate updates dynamically as you adjust compute, storage, or backup options.

### OVHcloud Control Panel – Billing & Usage

In the billing section of the Control Panel, you can monitor your actual usage and costs. Charges are detailed per component and reflect the per-second billing model, giving full transparency into how your bill is calculated.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Are you on Discord? Connect to our channel at <https://discord.gg/ovhcloud> and interact directly with the team that builds our databases service!