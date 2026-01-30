---
title: "Backup Agent - Cancellation process"
excerpt: "Learn how to delete an agent, a vault or a tenant Backup Agent"
updated: 2026-01-30
---

## Objective

This guide explains how to delete different elements of your Backup Agent service: agents, vaults, and tenants.

## Requirements

- Access to the [OVHcloud Control Panel](/links/manager).
- An active Backup Agent service.

## Instructions

### Delete an agent

To delete an agent, log in to your [OVHcloud Control Panel](/links/manager) and go to the `Backup Agent`{.action} section.

Go to the `Agents`{.action} section and click on the delete button for the agent you want to delete.

![Backup Agent Delete Agent](images/01-backup-agent-delete-agent.png){.thumbnail}

A confirmation window will appear. Confirm the deletion of the agent.

> [!warning]
>
> Once your agent is suspended, you cannot create a new agent on the same server. You must wait until the first agent is deleted.

**Behavior depending on agent usage:**

- **If the agent has not been used to transfer data**: It can be deleted immediately. It will be disabled first, then deleted.

- **If data has been transferred**: We apply a suspension of the agent with "Disabled" status for 14 days, the time it takes for immutable data to be deleted.

### Delete a vault

To delete a vault, log in to your [OVHcloud Control Panel](/links/manager) and go to the `Backup Agent`{.action} section.

Go to the `Vaults`{.action} section and click on the delete button for the vault you want to delete.

![Backup Agent Delete Vault](images/01-backup-agent-delete-vault.png){.thumbnail}

> [!warning]
>
> A vault cannot be deleted if it contains data. If you wish to delete a vault, you must [contact support](/links/support), who will perform checks with you before launching the deletion.

### Delete a tenant

To delete a tenant, log in to your [OVHcloud Control Panel](/links/manager) and go to the `Backup Agent`{.action} section.

Select your tenant and click on the delete button.

![Backup Agent Delete Tenant](images/01-backup-agent-delete-tenant.png){.thumbnail}

> [!warning]
>
> A tenant cannot be deleted autonomously at this time. If you wish to delete a tenant, you must [contact support](/links/support). We will take your request into account.

## Go further

Join our [community of users](/links/community).

