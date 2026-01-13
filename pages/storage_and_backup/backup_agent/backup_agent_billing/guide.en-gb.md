---
title: "Backup Agent - Billing"
excerpt: "Backup Agent product billing"
updated: 2026-01-09
---

## Objective

This page aims at explaining how Backup Agent is billed

## Billing

The product uses two elements to offer its service:

- The Backup Agent installed on your Bare Metal servers.
- [OVHcloud Object Storage](/links/public-cloud/object-storage).

We do not charge for the Backup Agent on your servers, i.e. you can deploy it on one or more Bare Metal servers, it will not cost you anything.

However, you will be billed per GB per month for using OVHcloud Object Storage. You will be billed at the beginning of each month for your usage during the previous month.

Find the price per GB per month on our [website](/links/public-cloud/prices-object-storage).

You can use the `Billing`{.action} dashboard in your [OVHcloud Control Panel](/links/manager) to view your current usage, and thus predict the final bill at the end of the month.

- Example 1: You have deployed the Backup Agent on 3 Bare Metal servers, and they send their data to their respective Vaults. The total capacity used by your backup data on the Vault servers is 600GB. You will be billed at the end of the month for 600GB.

- Example 2: You have deployed the Backup Agent on 10 Bare Metal servers, and they send their data to their respective Vaults. The total capacity used by your backup data on the Vault servers is 600GB. After a few backups, you remove the Backup Agent from 4 servers, deleting the data after 14 days. Total Vault usage drops to 400GB. You will be billed at the end of the month for 600GB.

## Go further

Join our [community of users](/links/community).