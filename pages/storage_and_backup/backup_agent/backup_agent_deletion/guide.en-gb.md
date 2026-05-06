---
title: "Backup Agent - Deletion Procedure"
excerpt: "Discover how to delete an agent, a vault or a Backup Agent tenant"
updated: 2026-02-03
---

## Objective

This guide explains how to delete different elements of your Backup Agent service: agents, vaults, and tenants.

## Requirements

- An active Backup Agent service.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Instructions

### Delete an agent

> [!primary]
>
> **Behavior according to the agent's usage:**
>
> - **If the agent has not been used to transfer data** : It can be deleted immediately. It will be disabled first, then deleted.
> - **If data has been transferred** : We apply a suspension of the agent in the "Disabled" status for 14 days, allowing time for immutable data to be deleted.

> [!warning]
>
> Once your agent is suspended, you can no longer create a new agent on the same server. You must wait until the first agent is deleted.

Go to the `Agents`{.action} section and click on the delete button for the relevant agent.

Confirm the agent deletion in the window that appears.

![Backup Agent Delete Agent](images/01-backup-agent-delete-agent.png){.thumbnail}

### Delete a vault

> [!warning]
>
> A vault cannot be deleted if it contains data. If you wish to delete a vault, you must [contact support](/links/support-contact), who will perform checks with you before initiating the deletion.

Go to the `Vaults`{.action} section and click on the delete button for the relevant vault.

Confirm the deletion in the window that appears.

![Backup Agent Delete Vault](images/01-backup-agent-delete-vault.png){.thumbnail}

### Delete a tenant

> [!warning]
>
> At the moment, a tenant cannot be deleted autonomously. If you wish to delete a tenant, you must [contact support](/links/support-contact). We will process your request.

Select your tenant and click on the delete button.

Confirm the deletion in the window that appears.

![Backup Agent Delete Tenant](images/01-backup-agent-delete-tenant.png){.thumbnail}

## Go further

Join our [community of users](/links/community).