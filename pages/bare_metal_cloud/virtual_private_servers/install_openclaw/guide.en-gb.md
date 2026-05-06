---
title: "How to install OpenClaw on a VPS"
excerpt: "Deploy OpenClaw in production with automatic HTTPS via Traefik and connect it to OVHcloud AI Endpoints on a VPS"
updated: 2026-02-25
---

## Objective

**OpenClaw** (successor to Moltbot and Clawdbot) is the new evolved version of the autonomous AI assistant. This guide uses Docker to protect your host system and ensure your assistant stays online 24/7.

Unlike a local installation via SSH tunnel, this method provides:

- Secure public access via HTTPS (Let's Encrypt)
- A scalable architecture behind Traefik (reverse proxy)
- The ability to add future services behind the same proxy (Nextcloud, n8n, Stoat, etc.)

The target architecture:

```text
Internet
   ↓
Traefik (automatic HTTPS)
   ↓
OpenClaw Gateway
   ↓
OVHcloud AI Endpoints
```

**This guide explains how to deploy OpenClaw in production with Docker, Traefik and OVHcloud AI Endpoints on a VPS.**

## Requirements

- An [OVHcloud VPS](/links/bare-metal/vps) (Debian 11/12 or Ubuntu 22.04+). Refer to our guide "[Getting started with a VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".
- SSH access to your VPS
- A domain name pointing to your VPS. Refer to our guide "[Adding a DNS A record](/pages/web_cloud/domains/dns_zone_a_record_creation)" if needed.
- An OVHcloud AI Endpoints API key. Refer to our guide "[AI Endpoints - Getting started](/pages/public_cloud/ai_machine_learning/endpoints_guide_01_getting_started)" to generate one.

## Table of Contents

- [Step 1 - Installing Docker](#docker)
- [Step 2 - Creating the proxy network](#network)
- [Step 3 - Installing Traefik](#traefik)
- [Step 4 - Installing OpenClaw](#openclaw)
- [Step 5 - Configuring for Traefik](#traefik-config)
- [Step 6 - Configuring OVHcloud AI Endpoints](#ovh)
- [Step 7 - Final startup](#launch)
- [Step 8 - Device pairing](#pairing)

## Instructions

### Step 1 - Installing Docker <a name="docker"></a>

Check that Docker is installed on your machine:

```bash
docker --version
docker compose version
```

If you get output similar to:

```console
Docker version 29.2.1, build a5c7197
Docker Compose version v5.0.2
```

This means Docker is already installed on your machine. Otherwise, follow the [Docker installation guide](/pages/bare_metal_cloud/virtual_private_servers/install_docker_on_vps).

#### Configuring Docker permissions (important)

By default, Docker commands require `sudo`. However, the `docker-setup.sh` script must be run **without sudo** to avoid permission issues on generated files (`.env`, `.openclaw`, volumes, etc.).

Add your user to the `docker` group:

```bash
sudo usermod -aG docker $USER
```

Then reload your session:

```bash
newgrp docker
```

You can verify that Docker works without sudo:

```bash
docker ps
```

If no permission error appears, continue with the installation.

### Step 2 - Creating the proxy network <a name="network"></a>

Traefik and OpenClaw must share a common Docker network:

```bash
docker network create proxy
```

### Step 3 - Installing Traefik <a name="traefik"></a>

#### Creating the directory

```bash
mkdir -p ~/docker/traefik && cd ~/docker/traefik
nano docker-compose.yml
```

#### Configuring the docker-compose.yml file

Copy the following configuration into the `docker-compose.yml` file:

```yaml
services:
   traefik:
    image: traefik:v2.11
    container_name: traefik
    restart: unless-stopped
    command:
      - "--api.dashboard=true"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.httpchallenge=true"
      - "--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.myresolver.acme.email=YOUR_EMAIL"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./letsencrypt:/letsencrypt"
    networks:
      - proxy

networks:
  proxy:
    external: true
```

Remember to update the file by replacing `YOUR_EMAIL` with your email address.

#### Initialising Let's Encrypt storage

Create the directory and certificate storage file with the appropriate permissions:

```bash
mkdir letsencrypt
touch letsencrypt/acme.json
chmod 600 letsencrypt/acme.json
```

#### Starting Traefik

Start the Traefik container in the background:

```bash
docker compose up -d
```

### Step 4 - Installing OpenClaw <a name="openclaw"></a>

```bash
cd ~
git clone https://github.com/openclaw/openclaw.git
cd openclaw
```

Prepare the directories:

```bash
mkdir -p ~/.openclaw/workspace
#grant permissions so the setup script can configure the files
sudo chown -R ubuntu:ubuntu ~/openclaw
```

Run the setup wizard:

```bash
./docker-setup.sh
```

At the end of the installation, make a note of the token provided to you, as you will need it to connect to OpenClaw.
You can retrieve this value at any time from the `.env` file in your OpenClaw directory:

```bash
cat .env
#Or alternatively via the command:
grep OPENCLAW_GATEWAY_TOKEN .env
```

### Step 5 - Configuring for Traefik <a name="traefik-config"></a>

Replace the contents of the generated `docker-compose.yml` with:

```yaml
services:
  openclaw-gateway:
    container_name: openclaw
    image: ${OPENCLAW_IMAGE:-openclaw:local}
    environment:
      HOME: /home/node
      TERM: xterm-256color
      OPENCLAW_GATEWAY_TOKEN: ${OPENCLAW_GATEWAY_TOKEN}
      CLAUDE_AI_SESSION_KEY: ${CLAUDE_AI_SESSION_KEY}
      CLAUDE_WEB_SESSION_KEY: ${CLAUDE_WEB_SESSION_KEY}
      CLAUDE_WEB_COOKIE: ${CLAUDE_WEB_COOKIE}
    volumes:
      - ${OPENCLAW_CONFIG_DIR}:/home/node/.openclaw
      - ${OPENCLAW_WORKSPACE_DIR}:/home/node/.openclaw/workspace
    init: true
    restart: unless-stopped
    command:
      [
        "node",
        "dist/index.js",
        "gateway",
        "--bind",
        "${OPENCLAW_GATEWAY_BIND:-lan}",
        "--port",
        "18789",
      ]
    networks:
      - proxy
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.openclaw.rule=Host(`YOUR_DOMAIN_NAME`)"
      - "traefik.http.routers.openclaw.entrypoints=websecure"
      - "traefik.http.routers.openclaw.tls.certresolver=myresolver"
      - "traefik.http.services.openclaw.loadbalancer.server.port=18789"
networks:
  proxy:
    external: true
```

Remember to update the file by replacing `YOUR_DOMAIN_NAME` with your domain name.

### Step 6 - Configuring OVHcloud AI Endpoints <a name="ovh"></a>

Before modifying the configuration file, create a backup then open it in a text editor:

```bash
mv ~/.openclaw/openclaw.json ~/.openclaw/openclaw.json.bak
nano ~/.openclaw/openclaw.json
```

Copy the following configuration into the `openclaw.json` file. This configuration defines the connection settings, the gateway and the OVHcloud AI Endpoints provider:

```json
{
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "commands": {
    "native": "auto",
    "nativeSkills": "auto"
  },
  "gateway": {
    "port": 18789,
    "mode": "local",
    "bind": "lan",
    "controlUi": {
      "allowedOrigins": [
        "https://YOUR_DOMAIN_NAME"
      ]
    },
    "auth": {
      "mode": "token",
      "token": "YOUR_OPENCLAW_TOKEN"
    }
  },
  "models": {
    "mode": "merge",
    "providers": {
      "ovhcloud": {
        "baseUrl": "https://oai.endpoints.kepler.ai.cloud.ovh.net/v1",
        "apiKey": "YOUR_OVH_ENDPOINT_API_KEY",
        "api": "openai-completions",
        "models": [
          {
            "id": "gpt-oss-120b",
            "name": "gpt-oss-120b",
            "compat": {
              "supportsStore": false
            }
          }
        ]
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "ovhcloud/gpt-oss-120b"
      },
      "models": {
        "ovhcloud/gpt-oss-120b": {}
      }
    }
  }
}
```

Remember to update the file by replacing the following values:

- `YOUR_DOMAIN_NAME` with your domain name.
- `YOUR_OPENCLAW_TOKEN` with the token OpenClaw provided at the end of the installation.
- `YOUR_OVH_ENDPOINT_API_KEY` with your API key.

### Step 7 - Final startup <a name="launch"></a>

Once the configuration is complete, restart the OpenClaw containers to apply the changes:

```bash
cd ~/openclaw/
docker compose down
docker compose up -d
```

Check that the gateway is active by viewing the container logs:

```bash
docker logs openclaw
```

If the startup was successful, you should see the following message (in cyan blue):

```console
Gateway listening on 0.0.0.0:18789
```

### Step 8 - Device pairing <a name="pairing"></a>

Access the OpenClaw web interface from your browser by opening the URL of your domain:

```text
https://your-domain.com
```

In the `Overview` section, enter your `Gateway Token` to authenticate.

When connecting for the first time from a new device, the interface displays the following message:

```console
pairing required
```

To authorise the device, list the pending devices then approve the desired one by replacing `<ID>` with the displayed identifier:

```bash
docker exec -it openclaw node dist/index.js devices list
docker exec -it openclaw node dist/index.js devices approve <ID>
```

## Go further

[Secure an OVHcloud VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Official OpenClaw documentation](https://docs.openclaw.ai/)

Join our [community of users](/links/community).
