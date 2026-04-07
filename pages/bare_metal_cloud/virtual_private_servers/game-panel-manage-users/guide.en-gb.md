---
title: "Managing users on the Game Panel"
excerpt: "Create and manage user accounts with granular permissions on the OVHcloud Game Panel to control access to your game servers."
updated: 2026-04-12
---

## Objective

The OVHcloud Game Panel lets you create and manage user accounts with granular permissions. You can control access at both global and server levels, assigning predefined roles or custom permissions.

**This guide explains how to manage users on the OVHcloud Game Panel.**

## Requirements

- A [VPS](/links/bare-metal/vps) in your OVHcloud account with the Game Panel feature enabled.
- Administrator access to the Game Panel. Refer to our guide on [Log in to the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-log-in).

## Instructions

### Step 1 — Access user administration

Click `User Administration`{.action} in the left menu of the Game Panel.

<!-- DRAFT: To screenshot — User administration page with user list -->
![The user administration interface](images/user-administration.png){.thumbnail}

You will see a list of existing users. Use the `Edit`{.action} and `Delete`{.action} buttons to modify or remove users.

### Step 2 — Create a new user

Click `+ Create user`{.action} in the top right corner.

Fill in the following fields:

- **User name**: The username (e.g., `Florian`).
- **New password**: A secure password.
- **Retype new password**: Confirm the password.

<!-- DRAFT: To screenshot — Create user form with username and password fields -->
![Creating a new user account](images/create-user.png){.thumbnail}

### Step 3 — Configure server-specific permissions

Under **Server access for this user**, choose a server from the dropdown.

#### Set an access level

Quick presets are available:

| Preset | Description |
|--------|-------------|
| **No access** | No permissions. |
| **Viewer** | Read-only access. |
| **Operator** | Limited access. |
| **Full access** | Full control (recommended for administrators). |

<!-- DRAFT: To screenshot — Server permissions panel with preset dropdown and checkboxes -->
![Configuring server-level permissions](images/server-permissions.png){.thumbnail}

#### Customise permissions

Check the boxes for specific actions:

- **Edit server name**: Modify the server name.
- **Access server console**: Access the server console.
- **Power controls**: Start/stop/restart the server.
- **Read server logs**: View server logs.
- **Manage game update settings**: Manage game updates.
- **Read files / Write files**: Read and write files.
- **Create backups / Delete backups**: Create and delete backups.
- **Use SSH terminal**: Access the SSH terminal.

### Step 4 — Save changes

Click `Save`{.action} or `Apply`{.action} to confirm.

### Delete a user

Click `Delete`{.action} next to the user you want to remove, then confirm the deletion.

## Go further

See our guide on [Getting started with the Game Panel](/pages/bare_metal_cloud/virtual_private_servers/game-panel-getting-started).

Join our [community of users](/links/community).
