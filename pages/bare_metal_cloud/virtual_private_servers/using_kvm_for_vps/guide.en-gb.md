---
title: How to use the KVM console to access a VPS
excerpt: Find out how to log on to your VPS via web browser with the KVM functionality
updated: 2025-02-07
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objective

The KVM console for VPS available in your OVHcloud Control Panel allows you to open a connection to your VPS in your web browser, independently of additional connection software. KVM in this context stands for "keyboard, video, and mouse", referring to the emulated input/output method of the remote connection.

> [!primary]
>
> Note that the KVM console is not a workaround solution if you have lost access to the operating system of your VPS. You will need to [use the VPS rescue mode to recover server access](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password) in that case.

**This guide explains how to use the KVM console to access your VPS.**

## Requirements

- A [Virtual Private Server](/links/bare-metal/vps) in your OVHcloud account

<!-- CP-NAV-START:baremetal-vps -->
---

### OVHcloud Control Panel Access

- **Direct link:** [VPS management](/links/control-panel/baremetal-vps)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Virtual private servers`{.action} > Select your VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Instructions

### How to open the KVM console via the OVHcloud Control Panel

<!-- CP-STEPS-START:open-kvm-control-panel -->
In the tab `General information`{.action}, click the button `...`{.action} next to the name of your VPS in the section **Your VPS**.

![Open KVM](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_kvm.png){.thumbnail}
<!-- CP-STEPS-END:open-kvm-control-panel -->

### How to open the KVM console via the OVHcloud API

/// details | Unfold this section

If you are not familiar with the API, consult our guide on the [basics of using the OVHcloud API](/pages/manage_and_operate/api/first-steps). 

To retrieve the KVM access URL, open this endpoint:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/getConsoleUrl
>

Enter the internal name of your VPS (`vps-x11x11xyy.vps.ovh.net`) in the field `serviceName`.

Click the button `EXECUTE`{.action}.

The access URL will be displayed in the section `RESPONSE`.

///

### Using the KVM console

If you access the KVM from the OVHcloud Control Panel, it will open in a popup window. To use it in full-screen, click on the link `Open in a new window`{.action} in the bottom right corner. This will usually open a new browser tab.

![Connecting to KVM](images/kvm_screen.png){.thumbnail}

The KVM screen displayed depends on the operating system and the individual state of the VPS. If prompted, log in with the credentials of an active user account.

You can alternatively use a third-party software client to connect.

#### How to change the keyboard layout

> [!primary]
>
> The keyboard of the KVM console may have a different layout from your own. Before entering a password, type some characters to verify the layout, for example with the help of [this page](https://en.wikipedia.org/wiki/Keyboard_layout#Conventional_Latin-script_keyboard_layouts).
>

You can enable your preferred keyboard configuration to make using the console more convenient. Enter the following command:

```bash
sudo dpkg-reconfigure keyboard-configuration
```

If necessary, install the package first via your distribution's package manager (`sudo dnf install keyboard-configuration` or `sudo apt install keyboard-configuration`).

A graphical menu will open in which you can select a keyboard model.

![KVM](images/kvm_vps01.png){.thumbnail}

Use the arrow keys to navigate to the option that comes closest to your hardware, then press `Enter`{.action}.

In the next menu, choose your country.

![KVM](images/kvm_vps02.png){.thumbnail}

In the third menu, you can specify your actual keyboard layout.

![KVM](images/kvm_vps03.png){.thumbnail}

Depending on your selections, there may be further options showing up after the third menu.

Back at the command line, enter the following command to apply the changes:

```bash
sudo systemctl restart keyboard-setup
```

> [!primary]
>
> This change will not persist if the server is rebooted.
>


## Go further

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).