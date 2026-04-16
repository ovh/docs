---
title: "Backup Agent - Linux CLI Assistant"
excerpt: "Use the ovh-ba-install.sh script provided by OVHcloud to install and manage the Veeam backup agent on your Linux server."
updated: 2026-04-16
---

In the OVHcloud Control Panel, open your Backup Agent, then the agent download dialog by selecting **Linux** to view and copy the installation command.

![Backup Agent download — Linux installation commands](images/01-backup-agent-download-linux-en.png){.thumbnail}

This guide describes the script provided by OVHcloud to install and manage the Veeam backup agent on your Linux server. It is written for **beginners on Linux**: plain language, ordered steps, concrete examples.

For generic Backup Agent product documentation (overview, billing, troubleshooting, etc.), see the official OVHcloud repository: [Backup Agent documentation (GitHub)](https://github.com/ovh/docs/tree/develop/pages/storage_and_backup/backup_agent).

---

## Objective

The **`ovh-ba-install.sh`** script is a **command-line assistant** that helps you:

- **Install** the Veeam **Management Agent** using the package link from your backup / VSPC portal;
- **Install** the global **`ovhbackupagent`** command so you can open the same menu anytime (`sudo ovhbackupagent`);
- **Show** a text menu: agent status, Veeam UI launcher, diagnostics, help;
- **Diagnose** issues (connectivity to the backup platform, logs, support archive);
- **Uninstall** Veeam packages and, if you choose, the **`ovhbackupagent`** shortcut (**Uninstall Wizard**).

**Important**: the script **streamlines installation and day‑to‑day checks** on the server; it does not replace configuring backups in the OVHcloud / VSPC UI. **Cancelling the service** is done in the **OVHcloud Control Panel**, not with this script.

---

## Prerequisites

### On the server

| Item | Detail |
|------|--------|
| **OS** | A Linux distribution **supported** by Veeam Agent for Linux (see Veeam / OVHcloud documentation). |
| **Privileges** | **Administrator** access: installation commands usually require **`sudo`**. |
| **Network** | The server must be able to **download** the script and agent package (HTTPS) and **reach** the backup gateway (VSPC) according to your offer’s rules. |
| **Terminal** | An **SSH** session or local console, interactive for the menu. |

### What you should have ready

1. The **`ovh-ba-install.sh` script URL** (as provided by OVHcloud for your integration).
2. The **Linux Management Agent package URL** (often a `LinuxAgentPackages….sh` file) from your **backup interface** / VSPC portal.

> [!info]
>
> Copy both links into a text file before you SSH into the server so you can paste them accurately.
>

### Minimal vocabulary

- **`curl`**: tool that **downloads** a file from a web address (`https://…`).
- **`sudo`**: “run as administrator” — required to install system software.
- **`bash`**: shell that **runs** the script you pass to it.

---

## In practice

### Two common ways to run a full install

**Option 1 — Save the script to disk (recommended for beginners)**  

Replace `SCRIPT_URL` with the real script URL and `AGENT_PACKAGE_URL` with the Management Agent package link.

```bash
curl -sSL "SCRIPT_URL" -o /tmp/ovh-ba-install.sh && sudo bash /tmp/ovh-ba-install.sh --setup "AGENT_PACKAGE_URL"
```

**Option 2 — One-liner pipe (script not saved on disk)**  

Because the script is fed on standard input, pass **`--script-url`** (usually the same URL as in `curl`) so the **`ovhbackupagent`** command can be installed to `/usr/local/bin`.

```bash
curl -sSL "SCRIPT_URL" | sudo bash -s -- --setup "AGENT_PACKAGE_URL" --script-url "SCRIPT_URL"
```

Using an environment variable so the script URL is not repeated:

```bash
export OVH_BA_INSTALL_SCRIPT_URL="SCRIPT_URL"
curl -sSL "$OVH_BA_INSTALL_SCRIPT_URL" | sudo -E bash -s -- --setup "AGENT_PACKAGE_URL"
```

> [!info]
>
> **`--first-run`** is an **alias** for **`--setup`**: same behaviour.
>

### After a successful install

1. A **summary** is shown for **15 seconds** (what was done, menu overview, key hints).
2. The **Agent status** screen opens so you can follow Veeam status (`veeamconsoleconfig -s`), with auto‑refresh.
3. Press **Enter** to return to the **main menu**.

To open the assistant later:

```bash
sudo ovhbackupagent
```

(If the command is not found, try `sudo /usr/local/bin/ovhbackupagent` or ensure `/usr/local/bin` is in your `PATH`.)

### Other useful commands

| Goal | Example command |
|------|-----------------|
| Open the **menu** only (script file on disk) | `sudo bash /tmp/ovh-ba-install.sh` |
| Agents already installed: install **`ovhbackupagent`** + menu only | `sudo bash ovh-ba-install.sh --setup-local` |
| Quick **diagnostic** (network + status + log patterns) | `sudo bash ovh-ba-install.sh --diagnostic` |
| Create a **support bundle** archive | `sudo bash ovh-ba-install.sh --support-bundle` |
| Install only the **`ovhbackupagent`** command | `sudo bash ovh-ba-install.sh --install-global` |
| Show built‑in help / README | `sudo bash ovh-ba-install.sh --readme` |

### Downloaded the script again?

If you run it **with no arguments** in an interactive terminal (`sudo bash ovh-ba-install.sh`), a short **welcome** screen checks whether **`ovhbackupagent`** is still present and whether the Veeam agent is detected, and can offer to **reinstall only** the helper.

---

## Step‑by‑step example: first install

**Scenario**: new Linux server; you received two links (email or Control Panel): one for the **script**, one for the **agent package**.

1. SSH to the server with a user allowed to use `sudo`.
2. Paste the **Option 1** command (see *In practice*), replacing both URLs.
3. Read the intro and press **Enter** to start installation.
4. Wait for the Veeam installer to finish; the script then installs **`ovhbackupagent`**.
5. Read the **15‑second summary**, then watch **Agent status**; the **Backup Agent** may appear after a few minutes (platform deployment).
6. Press **Enter** for the main menu; use **`A`** for status again, **`D`** for diagnostics if something looks wrong.

---

## Main menu (keys)

| Key | Purpose |
|-----|---------|
| **A** | Agent status (auto‑refresh loop). |
| **V** | Open the Veeam UI on the server (when the Backup Agent is ready). |
| **D** | **Diagnostic** submenu: VSPC test, support bundle, log issue patterns, force‑stop stuck backup. |
| **I** | Reinstall Management Agent from file or URL (advanced). |
| **U** | **Uninstall Wizard**: remove Veeam packages + optional **`ovhbackupagent`** removal. |
| **H** | Help / built‑in README. |
| **Q** | Quit. |

The status line shows **OK/KO** for **Management** (`veeamma`) and **Backup** (`veeam`, `veeam-libs`) packages, plus a last‑backup hint when a recent `Job.log` is available.

---

## Troubleshooting and diagnostics

- **`D`** then **`T`**: connectivity test to the VSPC gateway.
- **`D`** then **`B`**: generate a **support archive** (logs + system info).
- **`D`** then **`I`**: **issue analyzer** on known log patterns (`agent.log`, `veeaminstaller.log`, etc.).
- **`D`** then **`J`**: **force‑stop** a running backup session (use carefully).

Direct CLI: **`--diagnostic`** or **`--support-bundle`**.

For product-level troubleshooting, see the [Backup Agent troubleshooting guide](/pages/storage_and_backup/backup_agent/backup_agent_troubleshooting). Additional topics (restrictions, billing, and more) are published in the [Backup Agent documentation folder on GitHub](https://github.com/ovh/docs/tree/develop/pages/storage_and_backup/backup_agent).

---

## Uninstall Wizard (key **U**)

- Two explicit confirmations: **`YES`** then **`UNINSTALL`**.
- Removes **Backup** packages then **Management** (`veeamma`), using **yum/dnf**, **zypper**, or **apt-get** depending on OS, without extra interactive package prompts.
- Optional prompt to remove **`/usr/local/bin/ovhbackupagent`** and the associated README.

**Important**: removing agents **does not cancel** your Backup Agent subscription. The offer stays active until you stop it in the **OVHcloud Control Panel**. You can **reinstall** agents later from your backup interface.

---

## FAQ

**Can I run the script without `sudo`?**  
No for install and menu: system‑level actions are required.

**Why `--script-url` with `curl | bash`?**  
The script is not saved as a file; the installer needs that URL to copy the script to `/usr/local/bin/ovhbackupagent`.

**The menu exits immediately after a piped install**  
Reads use the real terminal (`/dev/tty`); if in doubt, prefer **Option 1** (download to `/tmp` then `sudo bash …`).

**Where is the installed command?**  
Typically **`/usr/local/bin/ovhbackupagent`**.

---

## Summary

| Script purpose | Simplify Veeam Management Agent install + `ovhbackupagent` shortcut, and guide diagnostics / uninstall. |
| Main tool after install | `sudo ovhbackupagent` |
| OVHcloud product docs | [Backup Agent pages on GitHub](https://github.com/ovh/docs/tree/develop/pages/storage_and_backup/backup_agent) |

*This file helps you get started with `ovh-ba-install.sh`; exact URLs and portal wording depend on your OVHcloud offer.*
