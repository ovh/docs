---
title: How to install an OpenClaw agent on an OVHcloud VPS
excerpt: "Find out how to deploy an OpenClaw instance 24/7 on your OVHcloud VPS using the official installation script and daemon mode"
updated: 2026-02-03
---

**OpenClaw** (successor to Moltbot and Clawdbot) is the new evolved version of the autonomous AI assistant. This guide will guide you through the installation of the Gateway on the OVHcloud infrastructure.

## Objective

The objective of this guide is to run a **persistent OpenClaw Gateway** on an OVHcloud VPS. Unlike previous versions, OpenClaw is now installed directly on the system for improved performance and simplified management via its own process manager (daemon).

## Requirements

- Have an active [OVHcloud VPS](/links/bare-metal/vps) offer.
- Be connected via SSH to your server using the default user (`ubuntu`, `debian`, etc.).
- Have an API key (Anthropic or OpenAI).

## Instructions

**Table of contents:**

- [Step 1: System preparation](#prepare)
- [Step 2: Install Node.js 22](#node-install)
- [Step 3: Install OpenClaw](#openclaw-install)
- [Step 4: Configuration (onboarding)](#config)
- [Step 5: Persistence and daemon](#daemon)
- [Step 6: Secure access via SSH tunnel](#access)

### Step 1: System preparation <a name="prepare"></a>

Log in to your VPS. With OVHcloud, use the user indicated in your delivery email (e.g., `debian` or `ubuntu`).

```bash
# System update
sudo apt-get update && sudo apt-get install -y git curl ca-certificates
```

### Step 2: Installing Node.js 22 <a name="node-install"></a>

OpenClaw requires Node.js version 22 or higher to function.

```bash
# Install Node.js 22 via the official Nodesource repository
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 3: Installing OpenClaw <a name="openclaw-install"></a>

We use the recommended scripted installer, which automatically configures the environment.

```bash
# Launch the official installation
curl -fsSL https://openclaw.ai/install.sh | bash
```

> [!warning]
>
> If the `openclaw` command is not recognized after installation, manually add the npm binaries path to your system:
>
> ```bash
> echo 'export PATH="$(npm prefix -g)/bin:$PATH"' >> ~/.bashrc
> source ~/.bashrc
> ```

### Step 4: Configuration (onboarding) <a name="config"></a>

Launch the interactive assistant to configure your API keys and communication channels (WhatsApp, etc.).

```bash
openclaw onboard
```

Follow the on-screen instructions. When choosing the **Gateway**, select *Local* to restrict access to the server itself (recommended for security).

### Step 5: Persistence and daemon <a name="daemon"></a>

To keep your agent online 24/7 even after closing your terminal or rebooting the VPS, you must install the "daemon" service.

**Install the system service**

```bash
openclaw onboard --install-daemon
```

**Check that the service is active:**
```bash
openclaw status
```

### Step 6: Securing access via SSH tunnel <a name="access"></a>

For security, the OpenClaw Gateway listens on the local interface (127.0.0.1). To access the graphical interface (Dashboard) from your personal computer:

1\. Open a terminal on your local machine.

2\. Create a secure SSH tunnel:

```bash
ssh -L 18789:127.0.0.1:18789 utilisateur@IP_DE_VOTRE_VPS
```

3\. Open your browser and go to: <http://127.0.0.1:18789>.

4\. The next steps take place in the **Overview** menu: enter your **Gateway Token** to log in.

You can find your **Gateway Token** on your VPS with:

```bash
grep -oP '"token":\s*"\K[^"]+' ~/.openclaw/openclaw.json
grep -oP '"password":\s*"\K[^"]+' ~/.openclaw/openclaw.json

# or by directly accessing the file where they are stored
nano openclaw.json
```

### What persists (source of truth)

All your critical data is stored in the user's home directory on the VPS. This ensures that your agent retains its memory and access even after an update.

| Component | Default location | Notes |
| :--- | :--- | :--- |
| **Configurations** | `~/.openclaw/openclaw.json` | Contains network settings (bind, port) and service status. |
| **Secrets and keys** | `~/.openclaw/.env` | Stores your API keys and Gateway token. | |
| **Channels (WhatsApp)** | `~/.openclaw/credentials/` | Contains authentication data to avoid scanning the QR Code each time. |
| **Memory and work** | `~/.openclaw/workspace/` | Directory where the AI generates files, code, or stores documents. |

### Essential commands

Here are the commands you should know to manage your instance directly from the VPS terminal:

| Command | Action |
| :--- | :--- |
| `openclaw status` | Checks if the Gateway is active and lists connected channels (WhatsApp, etc.). |
| `openclaw logs --follow` | Displays the AI's activity in real time (useful for debugging a crash). |
| `openclaw doctor` | Analyzes your installation and automatically fixes configuration errors. |
| `openclaw daemon restart` | Restarts the background service (required after modifying the JSON file). |
| `openclaw update` | Downloads and installs the latest version of OpenClaw without losing your data. |

## Go further

[Secure an OVHcloud VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Join our [community of users](/links/community).