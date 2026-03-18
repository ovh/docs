---
title: "VPS - Management from the OVHcloud Control Panel"
excerpt: "Find out how to use the OVHcloud Control Panel to manage your VPS: dashboard, reinstallation, reboot, backups and service configuration"
updated: 2026-01-21
---

## Objective

- Understand the VPS management interface.
- Identify essential information.
- Know where to perform the main actions.

## Requirements

- An active [VPS](/links/bare-metal/vps) offer in your OVHcloud Control Panel

> [!warning]
> Some VPS features mentioned on this page are not available in OVHcloud Local Zones.
>
> Please visit our [Local Zones page](/links/bare-metal/vps-lz) for more information.

<!-- CP-NAV-START:baremetal-vps -->
---

### OVHcloud Control Panel Access

- **Direct link:** [VPS management](/links/control-panel/baremetal-vps)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Virtual private servers`{.action} > Select your VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Instructions

This guide helps you **understand the VPS management interface in the OVHcloud Control Panel**, identify essential information and use the main available actions (reinstallation, reboot, backup, configuration).

**Content overview**

- [Dashboard](#controlpanel)
- [Your VPS](#myvps)
- [Your configuration](#myconf)
- [IP](#ip)
- [Backup](#save)
- [My offer](#myoffer)
- [Reboot your VPS](#rebootvps)
- [Reinstall your VPS](#reinstallvps)

### Dashboard <a name="controlpanel"></a>

<!-- CP-STEPS-START:dashboard-overview -->

The **Dashboard** tab is the default landing view when you open your VPS detail panel.

It centralises **key information about the service** and provides access to **essential management actions**.

![VPS Home](images/vpshome.png){.thumbnail}

The Dashboard tab is organised into five cards:

- **Configuration**: displays your offer, number of vCores, RAM, and storage, with an `Upgrade offer`{.action} link.
- **Network**: displays the IPv4 address, IPv6 address, gateway, and datacenter, with a `Manage IPs`{.action} button.
- **System**: displays the installed operating system and the current status of the VPS (running, stopped, etc.).
- **Quick Actions**: provides direct access to the `Reboot`{.action}, `Rescue`{.action}, `Reinstall`{.action}, and `Stop`{.action} (or `Start`{.action}) actions.
- **Subscription**: displays the creation date, next billing date, and renewal mode, with `Renewal settings`{.action} and `Commit`{.action} buttons.

> [!primary]
>
> In the New Manager, there is no context menu ("...") on the Dashboard. Actions such as renaming your VPS or accessing OS information are not available directly from the dashboard view.

<!-- CP-STEPS-END:dashboard-overview -->

<a name="hometab"></a>

### VPS functions available in the "Home" tab

> [!warning]
>
> OVHcloud provides services whose configuration and management are your responsibility. It is therefore your responsibility to ensure their proper functioning.
>
> This guide is intended to assist you with common tasks. However, we recommend that you contact a [specialised service provider](/links/partner) or our [community](/links/community) if you encounter difficulties or doubts regarding the administration, use or implementation of services on a server.
>

#### Reboot your VPS <a name="rebootvps"></a>

A reboot may be necessary to apply configuration updates or to resolve a malfunction. Where possible, perform a "software reboot" from the server's graphical interface (Windows, Plesk, etc.) or via the command line below:

```bash
sudo reboot
```

<!-- CP-STEPS-START:reboot-vps -->

However, you can perform a forced reboot at any time from the [OVHcloud New Manager](/links/manager). Select your VPS from the left panel, then click the `Reboot`{.action} button in the detail panel header (or in the **Quick Actions** card on the Dashboard tab).

![Reboot VPS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reboot.png){.thumbnail}

In the **Reboot VPS** modal that appears, click `Reboot`{.action} to confirm.

<!-- CP-STEPS-END:reboot-vps -->

#### Reinstall your VPS <a name="reinstallvps"></a>

<!-- CP-STEPS-START:reinstall-vps -->

The reinstallation of your VPS can be done from the [OVHcloud New Manager](/links/manager). This operation is generally used in case of system problems, environment change, or to start with a clean installation.

Select your VPS from the left panel, then click the `Reinstall`{.action} button in the **Quick Actions** card on the Dashboard tab.

In the **Reinstall VPS** modal that appears:

1. Select an operating system from the **Operating System** dropdown. The options offered are [images compatible with an OVHcloud VPS](/pages/public_cloud/compute/image-life-cycle) and are immediately functional after installation.
2. Optionally, select an SSH key from the `SSH Key (optional)`{.action} dropdown to have it automatically installed. Only SSH keys previously stored in your OVHcloud account can be selected.
3. Type `REINSTALL` in the confirmation field to enable the confirm button.
4. Click `Reinstall VPS`{.action} to confirm.

For more information on this topic, consult our guides:

- [How to create and use authentication keys for SSH connections to OVHcloud servers](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Tutorial - How to use PuTTY for SSH connections and authentication](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

> [!warning]
>
> Reinstallation will format all the server's disks. It is strongly recommended to create a snapshot of your VPS before proceeding, so that you can return to the previous state in case of a problem.
>

> [!primary]
>
> **Licences**
>
> Some operating systems or proprietary platforms, such as Plesk or cPanel, require licences that generate additional costs. Licence management is available in a dedicated section of the New Manager.
>
> To have a **Windows** operating system running on a VPS, you must have previously chosen it **in the ordering process**. A VPS with another OS installed cannot be reinstalled with Windows via the method described above.
>

The reinstallation process can take a few minutes.

<!-- CP-STEPS-END:reinstall-vps -->

## Go further

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[SSH Introduction](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[How to recover access to the server in case of lost user password](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Join our [community of users](/links/community).