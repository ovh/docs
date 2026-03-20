---
title: "How to install Docker and Docker Compose on a VPS"
excerpt: "Find out how to install Docker Engine and Docker Compose on an OVHcloud VPS running Debian or Ubuntu via the official repository."
updated: 2026-02-25
---

## Objective

By the end of this guide, your VPS will have:

- Docker Engine
- Docker Compose (official plugin)
- Permissions configured to avoid using `sudo` with Docker

Installing via the official Docker repository ensures regular updates, improved stability and maximum compatibility with recent tools.

**This guide explains how to install Docker Engine and Docker Compose on an OVHcloud VPS.**

## Requirements

- An active OVHcloud VPS running Debian 11/12 or Ubuntu 22.04 and later
- SSH access with a user that has sudo privileges

## Table of Contents

- [Step 1 - Update the system](#update)
- [Step 2 - Install dependencies](#dependencies)
- [Step 3 - Add the Docker GPG key](#gpg)
- [Step 4 - Add the Docker repository](#repo)
- [Step 5 - Install Docker](#install)
- [Step 6 - Configure Docker permissions](#permissions)
- [Step 7 - Verify the installation](#verify)

## Instructions

### Step 1 - Update the system <a name="update"></a>

Before installing anything, update your system:

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 2 - Install dependencies <a name="dependencies"></a>

Install the required packages:

```bash
sudo apt install -y ca-certificates curl gnupg
```

### Step 3 - Add the official Docker GPG key <a name="gpg"></a>

```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

### Step 4 - Add the Docker repository <a name="repo"></a>

> [!tabs]
> Debian 11 / 12
>>
>> ```bash
>> echo \
>>   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
>>   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
>> ```
> Ubuntu 22.04+
>>
>> ```bash
>> echo \
>>   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
>>   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
>> ```

### Step 5 - Install Docker Engine and Docker Compose <a name="install"></a>

```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Step 6 - Configure Docker permissions <a name="permissions"></a>

By default, Docker commands require `sudo`.

To avoid permission issues when using Docker Compose or installation scripts, add your user to the `docker` group:

```bash
sudo usermod -aG docker $USER
```

Reload your session:

```bash
newgrp docker
```

> [!warning]
>
> Do not run your future Docker scripts with `sudo` unless specifically required. Using `sudo` can create root-owned files and cause permission errors.

### Step 7 - Verify the installation <a name="verify"></a>

Check that Docker is working correctly:

```bash
docker --version
docker compose version
```

You should get output similar to:

```console
Docker version 29.x.x, build xxxxxxx
Docker Compose version v2.x.x
```

## Go further

You can now use Docker to:

- [Install OpenClaw behind Traefik on an OVHcloud VPS with OVHcloud AI Endpoints](/pages/bare_metal_cloud/virtual_private_servers/install_openclaw)
- [Install n8n on an OVHcloud VPS](/pages/bare_metal_cloud/virtual_private_servers/install_n8n_on_vps)
- [Install Nextcloud on an OVHcloud VPS with Docker and Traefik](/pages/bare_metal_cloud/virtual_private_servers/install_nextcloud_on_vps_advanced)

[Secure an OVHcloud VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

Join our [community of users](/links/community).
