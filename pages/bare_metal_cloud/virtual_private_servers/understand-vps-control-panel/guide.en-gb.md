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
The `Home`{.action} tab is the **main dashboard** of your VPS.

It centralises **key information about the service** and provides access to **essential management actions**.

![VPS Home](images/vpshome.png){.thumbnail}
<!-- CP-STEPS-END:dashboard-overview -->

#### Your VPS <a name="myvps"></a>

<!-- CP-STEPS-START:your-vps-tabs -->
Find below the basic information about your VPS and the service status. Click on the tabs below to display the details.

> [!tabs]
> Name
>>
>> To customise the name of your VPS, click on the `...`{.action} button and select `Change the name`{.action}. This feature is useful for easier navigation in the Control Panel when managing multiple VPS services. However, the internal service name remains in the format *VPS-XXXXXXX.VPS.ovh.net*.
>>
> Boot
>>
>> The boot mode indicated is either:
>>
>> - In **normal mode** (*LOCAL*), where the server loads the installed operating system.
>> - In **rescue mode**, provided by OVHcloud for troubleshooting.
>>
>> Use the `...`{.action} button to [reboot the VPS](#rebootvps) or boot it in rescue mode if necessary.
>>
>> If needed, find more information in our guide on [rescue mode](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> OS/Distribution
>>
>> This is the currently installed operating system. Use the `...`{.action} button to [reinstall the same operating system or choose another one from the available options](#reinstallvps).
>>
>> > [!warning]
>> >
>> > A reinstallation will delete all data currently hosted on the VPS (except for additional disks).
>>
>> > [!primary]
>> >
>> > If you ordered a **Windows** VPS, you can only choose a Windows OS for reinstallation. Similarly, if Windows was not selected during the order, it cannot be installed after the VPS is delivered.
>>
>> Once the system is installed, you are responsible for applying the operating system security updates. You can find more information in the section "[Reinstall your VPS](#reinstallvps)" as well as in our guide "[Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)".
>> 
> Zone/Location
>>
>> These sections provide information about the location of your VPS. This can be useful for identifying and assessing any potential impacts on your service, such as those mentioned in [incident or maintenance reports](https://bare-metal-servers.status-ovhcloud.com/).
>>
<!-- CP-STEPS-END:your-vps-tabs -->

#### Your configuration <a name="myconf"></a>

<!-- CP-STEPS-START:your-configuration-tabs -->
<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BbyE52W7aBo?si=mmgSmaqIxx0zzGz2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Click on the tabs below to display the details of this section.

> [!tabs]
> Model
>>
>> This item indicates the commercial reference identifying the VPS model, corresponding to the [VPS offers on our website](/links/bare-metal/vps).
>>
> vCores/Memory/Storage
>> 
>> The current resources of your VPS are displayed here and can be updated separately by clicking on the corresponding link. Note that upgrades are limited by the chosen VPS model and may only be available by moving to a [higher range](/links/bare-metal/vps).
>>
> Additional disks
>> 
>> Add additional disks to your VPS to increase the server's storage capacity beyond that included in the initial configuration. You can, for example, store backup data on them.
<!-- CP-STEPS-END:your-configuration-tabs -->

#### IP <a name="ip"></a>

<!-- CP-STEPS-START:ip-tabs -->
Click on the tabs below to display the details of this section.

> [!tabs]
> IPv4
>>
>> The main public IPv4 address of the VPS is automatically configured during installation. Find more information on IP management in our guide "[Configuring an alias IP address](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing)".
>>
> IPv6/Gateway
>> 
>> Find the public IPv6 address and the associated gateway address here. These are automatically attached to the VPS during installation. Find more information in our guide "[Configuring IPv6 on a VPS server](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6)".
>> 
> Secondary DNS
>>
>> This feature is useful for hosting DNS services. Consult our guide "[Configuring an OVHcloud secondary DNS on a VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps)" for more details on this subject.
<!-- CP-STEPS-END:ip-tabs -->

#### Backup <a name="save"></a>

<!-- CP-STEPS-START:backup-tabs -->
These options refer to additional VPS services for backing up and restoring your system.

> [!tabs]
> Snapshot
>>
>> A snapshot on a VPS is an instant backup of the server's state, allowing you to quickly restore the system in case of a problem. The `Snapshot` option allows you to create a manual snapshot as a single restore point.
>>
> Automated backup
>>
>> A daily system backup (excluding additional disks) is automatically performed and kept for 24 hours (applicable only to services ordered from August 7, 2025). By switching to the "**Premium Automated Backup**" option, you will have the last 7 daily backups of your VPS, which you can use for mounting and restoring.  
>> Compared to manual snapshots, this feature increases data security by creating multiple restore points at regular intervals.
>>

Find all information on the backup solutions available for your service on the [VPS product page](/links/bare-metal/vps-options) and in [our respective guides](/products/bare-metal-cloud-virtual-private-servers-configuration).
<!-- CP-STEPS-END:backup-tabs -->

#### My offer <a name="myoffer"></a>

This section presents the most important information regarding the billing of your service. Find all information on this subject in [our respective guides](/products/account-and-service-management-managing-billing-payments-and-services).

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
However, you can perform a forced reboot at any time in your [OVHcloud Control Panel](/links/manager). From the `Home`{.action} tab, click on the `...`{.action} button next to `Boot` in the **Your VPS** section. Select `Reboot my VPS`{.action} and click `Confirm`{.action} in the window that appears.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reboot.png){.thumbnail}
<!-- CP-STEPS-END:reboot-vps -->

#### Reinstall your VPS <a name="reinstallvps"></a>

<!-- CP-STEPS-START:reinstall-vps -->
The reinstallation of your VPS can be done from your Control Panel. This operation is generally used in case of system problems, environment change or to start with a clean installation.

Click on the `...`{.action} button to the right of `OS/Distribution`{.action}, then on `Reinstall my VPS`{.action}.

![Reinstall](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reinst.png){.thumbnail}

In the window that appears, choose an operating system from the drop-down list. The options offered are [images compatible with an OVHcloud VPS](/pages/public_cloud/compute/image-life-cycle) and are immediately functional after installation.

If you have selected a compatible operating system, you can provide a **public key** to be automatically installed. Two options are available:

- Manually copy the key string and paste it into the `Your SSH Public Key` field.
- If you have previously [stored a public key](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel) in your [OVHcloud Control Panel](/links/manager), select the desired key from the `SSH Key to pre-install` drop-down menu.

![VPSnewreinstallation](images/reinstall.png){.thumbnail}
<!-- CP-STEPS-END:reinstall-vps -->

For more information on this topic, consult our guides:

- [How to create and use authentication keys for SSH connections to OVHcloud servers](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Tutorial - How to use PuTTY for SSH connections and authentication](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

If you have selected an SSH key and do not need a password to connect, enable the option `I do not wish to receive my VPS authentication codes by email`.

> [!warning]
>
> Reinstallation will format all the server's disks. It is strongly recommended to create a snapshot of your VPS before proceeding, so that you can return to the previous state in case of a problem.
>

<!-- CP-STEPS-START:manage-licenses -->
> [!primary]
>
> **Licenses**
>
> Some operating systems or proprietary platforms, such as Plesk or cPanel, require licenses that generate additional costs. Licenses can be managed from your Control Panel: go to the `Bare Metal Cloud`{.action} section, then click on `Licenses`{.action} in the left-hand navigation bar.
>
> To have a **Windows** operating system running on a VPS, you must have previously chosen it **in the ordering process**. A VPS with another OS installed cannot be reinstalled with Windows via the method described above.
>
<!-- CP-STEPS-END:manage-licenses -->

The reinstallation process can take a few minutes.

## Go further

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[SSH Introduction](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[How to recover access to the server in case of lost user password](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Join our [community of users](/links/community).