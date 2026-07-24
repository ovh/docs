---
title: "Deploy an application from the application catalogue on a Dedicated Server"
excerpt: "Deploy a ready-to-use application on your bare metal server through automatic post-installation with the application catalogue"
updated: 2026-07-24
---

## Objective

The application catalogue lets you install a ready-to-use application on your OVHcloud dedicated server without any prior system administration knowledge. You choose an application when you (re)install your server, then complete a short configuration form in a secure web interface. The application is installed natively, secured with HTTPS, and made available in minutes.

**This guide explains how to use the application catalogue on your OVHcloud dedicated server.**

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)
- Access to the [OVHcloud API](/pages/manage_and_operate/api/first-steps) (for the "[Deployment via API](#viaapi)" section of this guide)
- A web browser to reach the configuration interface once the installation has completed

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Dedicated Servers](/links/control-panel/baremetal-dedicated-servers)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Dedicated servers`{.action} > Select your server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

> [!warning]
>
> As with any classical OS installation, a new installation with the application catalogue will erase all the data on the server. Back up any data you want to keep before you start.
>

## Instructions

### How the application catalogue works

Deploying an application happens in two steps:

1. **Selection (at installation):** you (re)install your server with an application catalogue image and select **one** application. This is where you choose *which* application you want.
2. **Configuration (after first boot):** once the server has restarted, a single-use configurator starts automatically and serves a secure web interface. You fill in a short form (for example a site name and administrator password), then the application is installed automatically over HTTPS.

Once the installation succeeds, the configurator **removes itself completely** from the server. You are left with only your application and full root access to the server.

**Technical limitations:**

- **Only one application** can be deployed through the application catalogue.
- **Custom partitioning is not available** for this installation.

> [!warning]
>
> This does not mean that you cannot run other applications on the server. It means that only **ONE** application can be installed through the catalogue. If you want to run additional applications, you will need to install them manually.
>

### Available applications

The catalogue is regularly updated. When you launch an installation, the up-to-date list is displayed in the OVHcloud Control Panel. At the time of writing, the following applications are available:

| Application | Category | Description |
|---|---|---|
| WordPress | CMS | Content management system for websites and blogs |
| Nextcloud | Cloud storage | Self-hosted file sync, calendar, contacts and collaboration |
| PrestaShop | E-commerce | E-commerce platform for online stores |
| Discourse | Community | Modern community forum platform |
| Matomo | Web analytics | Privacy-focused web analytics platform |
| n8n | Automation | Workflow automation platform with 400+ integrations |
| OpenClaw | AI | Personal AI assistant gateway running on your server |
| FreePBX | Telephony | Web-based PBX management system built on Asterisk |
| CloudPanel | Control panel | Server control panel for PHP and Node.js applications |
| HestiaCP | Control panel | Open-source web server control panel |
| FastPanel | Control panel | Web hosting control panel |
| Coolify | Control panel | Self-hostable PaaS alternative to Heroku or Vercel |
| Dokploy | Control panel | Self-hosted PaaS to deploy apps from Git or Docker |
| Easypanel | Control panel | Modern Docker-powered server control panel |
| OVHcloud Game Panel | Control panel | Web panel to manage Docker-based game servers |

**Deployment methods:**

- [Deployment via the Control Panel](#viacontrolpanel): install your application from the OVHcloud Control Panel.
- [Deployment via API](#viaapi): use the OVHcloud API to integrate the installation into your own scripts and automate deployments.

### Deployment via the Control Panel <a name="viacontrolpanel"></a>

1. Log in to the [OVHcloud Control Panel](/links/control-panel/baremetal-dedicated-servers) and select your server under `Bare Metal Cloud`{.action} > `Dedicated servers`{.action}.
2. In the `General information`{.action} tab, next to `Operating system (OS)`{.action}, click the `...`{.action} button and select the installation option.

![Click the button next to the operating system to start the installation](images/install_process_01.png){.thumbnail}

3. In the `Installation from an OVHcloud template`{.action} window, set `Type of OS`{.action} to `Ready-to-use (graphical user interface)`{.action}, then select the **Ubuntu Server 24.04 "Noble Numbat" LTS with Application Installer** template. Choose your target disk group and click `Next`{.action}.

> [!primary]
>
> Custom partition and hardware RAID configuration are not available with this template, so these options remain disabled.
>

![Select the Ubuntu template with Application Installer](images/install_process_02.png){.thumbnail}

4. Continue through the installation steps to enter the general settings, such as the server hostname and the SSH key to be added to the server.
5. At the `Application to install`{.action} step, select the **single application** you want to deploy from the drop-down list, then click `Confirm`{.action} to launch the installation.

![Select the single application to install and confirm](images/install_process_03.png){.thumbnail}

The server reinstalls and then starts the configurator automatically. Once the installation has completed, follow the "[Configuring and accessing your application](#configure)" section below to finish the setup.

### Deployment via API <a name="viaapi"></a>

You can trigger the same installation through the [OVHcloud API](/pages/manage_and_operate/api/first-steps). Use the `POST /dedicated/server/{serviceName}/reinstall` endpoint with an application catalogue operating system, and set the application to install in the `appToInstall` customization.

```json
{
  "operatingSystem": "ubuntu2404-withapp_64",
  "customizations": {
    "hostname": "myApplicationServer",
    "sshKey": "mySshKey",
    "appToInstall": "wordpress"
  }
}
```

The `appToInstall` value is the identifier of the application you want to deploy (for example `wordpress`, `nextcloud`, `prestashop` or `discourse`). Only one application can be specified.

#### Configuring and accessing your application <a name="configure"></a>

After the installation, your server boots the single-use configurator automatically. To finish the setup:

1. Open the configurator in your web browser at `https://<your-server-name>:10143/`, where `<your-server-name>` is your server's canonical hostname (in the `ipXX.ip-A-B-C.<tld>` form shown in the Control Panel). For security, access is protected by a one-time authentication token provided with your installation.
2. Fill in the short configuration form for your application. The fields depend on the application; for example, WordPress asks for a website name, an administrator password and a database password.
3. Submit the form. The application is installed automatically and a free, auto-renewing [Let's Encrypt](https://letsencrypt.org/) HTTPS certificate is issued for your server's hostname. You can follow the installation progress in real time.
4. When the installation succeeds, your application is available at `https://<your-server-name>/`. The configurator then removes itself from the server.

> [!primary]
>
> The configurator is single-use: it is designed to run only once and disappears after a successful installation. To deploy a different application, reinstall your server from the application catalogue and select the new application.
>

#### Common errors <a name="errors"></a>

| Symptom | Cause | Solution |
|---|---|---|
| The configurator page does not load at `https://<your-server-name>:10143/` | The installation is not finished yet, or inbound access to port `10143` is blocked. | Wait for the installation to complete, then retry. Make sure any firewall (including the OVHcloud [Network Firewall](/links/network/firewall)) allows inbound traffic to your server on port `10143`. |
| `401 Unauthorized` when opening the configurator | The authentication token is missing or incorrect. | Reopen the configurator using the exact link and token provided with your installation. |
| The application is not reachable over HTTPS after installation | The Let's Encrypt certificate could not be issued, usually because inbound port `80`/`443` is blocked or the hostname does not resolve. | Ensure ports `80` and `443` are open inbound and that your server's hostname resolves publicly, then reinstall if needed. |
| I need to deploy a second application from the catalogue | Only one application can be deployed through the catalogue. | Reinstall the server to deploy a different application, or install the additional application manually. |

## Go further

[OVHcloud API and OS installation](/pages/bare_metal_cloud/dedicated_servers/api-os-installation)

[Understanding the dedicated server boot process](/pages/bare_metal_cloud/dedicated_servers/boot-process)

Join our [community of users](/links/community).
