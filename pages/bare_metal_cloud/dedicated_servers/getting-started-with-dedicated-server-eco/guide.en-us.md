---
title: "Getting started with a Kimsufi, So You Start or Rise dedicated server"
excerpt: "Find out how to proceed after the delivery of your Kimsufi, So You Start or Rise dedicated server"
updated: 2024-04-04
---

## Objective

A dedicated server is a physical server located in one of our data centres. Unlike Web Hosting plans (also referred to as "shared hosting"), which are technically managed by OVHcloud, you are fully responsible for the administration of your dedicated server.

**This guide will help you with the first steps of managing your Kimsufi, So You Start or Rise dedicated server.**

## Requirements

- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)
- A [dedicated server](https://www.ovhcloud.com/en/bare-metal/) of the ranges Kimsufi, So You Start or Rise in your OVHcloud account
- Administrative access (sudo) via SSH or remote desktop (Windows) to your server

## Instructions

### Content overview

- [Installing or reinstalling an operating system](#install)
- [Logging on to your server](#connect)
- [Restarting your dedicated server](#reboot)
- [Securing your dedicated server](#secure)
- [OVHcloud Monitoring](#monitoring-server)
- [Network configuration](#network)
- [Rescue mode](#rescue)
- [Access using IPMI](#console)
- [Backup storage](#backup)

<a name="install"></a>

### Installing or reinstalling an operating system

When your dedicated server is first set up during the order process, you can select which operating system will be installed.

You can easily reinstall your server and choose a different OS image in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we). From the `General information`{.action} tab, click on `...`{.action} next to the operating system and then click `Install`{.action}.

![Reinstall button](images/reinstalling-your-server-01.png){.thumbnail}

In the popup window, select one of the installation options:

- `Install from an OVHcloud template`{.action}: You can select the OS and customise the server configuration.
- `Install one of your templates`{.action}: In order to apply a customised template, you need to have saved at least one server configuration. To do this, check the option `Save this installation` in step 4 of the installation process.
- `Install from custom image`{.action}: This allows you to install an external image on the server. Please refer to the [BYOI guide](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image) to learn about the settings of this functionality.

> [!primary]
>
> Some proprietary operating systems or platforms such as Plesk or Windows require licences which generate additional fees. You can buy licences [via OVHcloud](https://www.ovhcloud.com/en/bare-metal/os/) or from an external reseller. You will then need to apply your licence, in the operating system itself or by using your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we).
>
You can manage all your licences in the `Bare Metal Cloud`{.action} section under `Licences`{.action}. In this section, you can also order licences or add existing ones via the `Actions`{.action} button.
>

Click `Next`{.action} to continue.

![Template selection](images/reinstalling-your-server-02.png){.thumbnail}

After choosing `Install from an OVHcloud template`{.action} you can select the operating system from the drop-down menus.

![Operating selection](images/reinstalling-your-server-03.png){.thumbnail}

If you need to modify the partioning scheme of your operating system, check the box "Customise the partition configuration" before clicking on `Next`{.action}.

![partitioning configuration](images/reinstalling-your-server-04.png){.thumbnail}

In this step you are able to set up RAID and partitioning options within the limits of the server's hardware and operating system.

After you have finished your adjustments, click `Next`{.action} to arrive at the summary page.

You will find additional questions that are specific to the chosen operating system.

For example, if you are installing a GNU/Linux-based operating system, you can add your SSH key in the last step of the installation process.

![SSH key configuration](images/reinstalling-your-server-05.png){.thumbnail}

Finally, click `Confirm`{.action} to trigger the operating system installation on your dedicated server.

<a name="connect"></a>

### Logging on to your server

#### Linux

Once the installation is completed, you will receive an email containing instructions for administrative access. You can connect to your server through a command terminal or with a third-party client by using SSH which is a secure communication protocol.

Use the following examples to log on to your server, replacing the credentials with your actual information (IP address and server reference name are interchangeable).

```bash
ssh username@IPv4
```

**Example:**

```bash
ssh ubuntu@203.0.113.1
```

You can learn more about SSH in [this guide](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

#### Windows

Once the installation is completed, you will receive an email containing your password for administrative (sudo) access. You will need to use these credentials to connect to the server via RDP (**R**emote **D**esktop **P**rotocol). After logging in, Windows will guide you through an intial setup.

Please also refer to our guide on [Configuring a new Windows Server installation](/pages/bare_metal_cloud/dedicated_servers/windows_first_config).

<a name="reboot"></a>

### Restarting your dedicated server

A reboot might become necessary in order to apply updated configurations or to fix an issue. Whenever feasible, perform a "soft reboot" via the command line:

```bash
reboot
```

However, you can carry out a "hard reboot" at any time in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we). From the `General information`{.action} tab, click on `...`{.action} next to "Status" in the **Service status** box, then click `Restart`{.action} and `Confirm`{.action} the action in the popup window.

![Rebooting](images/rebooting-your-server.png){.thumbnail}

<a name="secure"></a>

### Securing your dedicated server

As explained in the “Objective” section of this guide, you are the administrator of your dedicated server. As such, you are responsible for your data and its security. You can learn more about securing your server in [this guide](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server).

If your server runs Windows, use [this guide](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) instead.

<a name="monitoring-server"></a>

### OVHcloud Monitoring

You can set the monitoring status for a dedicated server from the `General information`{.action} tab in your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) (section **Service status**).

![Monitoring](images/monitoring-your-server.png){.thumbnail}

Click on the button `Configure`{.action}. In the popup window, you have three options for the monitoring behaviour:

- **Disabled**: This option stops alert messages and interventions by OVHcloud. Choose this if you are executing pertinent administrative actions on the server which prevent an ICMP response.
- **Enabled with proactive intervention**: If the server stops responding, an alert email is sent to you and the server will be checked by a technician.
- **Enabled without proactive intervention**: You will receive an alert message by email in case the server stops responding. To initiate an intervention, you will need to create a support request.

![Monitoring](images/monitoring-your-server2.png){.thumbnail}

Click on `Confirm`{.action} to update your monitoring configuration.

You can find more information about OVHcloud Monitoring in [this guide](/pages/bare_metal_cloud/dedicated_servers/network_ip_monitoring).

<a name="network"></a>

### Network configuration

> [!primary]
>
> Please note that [additional IP addresses](https://www.ovhcloud.com/en/bare-metal/ip/) are not compatible with the **Kimsufi** range.
>

#### Network bridging

Network bridging is the action taken by network equipment to create an aggregate network from either two or more communication networks, or two or more network segments. Bridging is distinct from routing, which allows the networks to communicate independently while remaining separate.

The Network Bridge configuration is most commonly used in the context of virtualisation, to allow each Virtual Machine to have its own public IP address.

For more information on network bridging, please refer to our guide: [Network Bridging](/pages/bare_metal_cloud/dedicated_servers/network_bridging).

#### IP aliasing

IP aliasing is the process of associating two or more IP addresses to the same network interface. This allows your server to establish multiple connections to a network, each serving a different purpose.

For detailed instructions on how to configure IP aliasing, please refer to [this guide](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).

#### IPv6 configuration

> [!primary]
>
> Please note that servers of the **Kimsufi** range only have one IPv4 address and one IPv6 address. Both will be configured automatically when installing the OS.
>

OVHcloud dedicated servers are delivered with a /64 IPv6 block. To use the addresses in this block, you will need to make some network configuration changes. Please refer to our guide: [IPv6 Configuration](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).

<a name="rescue"></a>
### Rescue mode

For any kind of issue, the first general troubleshooting step to take is rebooting your server into rescue mode from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we). It is important to identify server issues in this mode to exclude software-related problems before contacting our support teams.

Please refer to the [rescue mode guide](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

<a name="console"></a>

### Access using IPMI

> [!primary]
>
> Please note that this option is not available for the **Kimsufi** range.
>

OVHcloud deploys all dedicated servers with an IPMI (Intelligent Platform Management Interface) console which runs in your browser or from a Java applet, and enables you to connect directly to your server even if it has no network connection. This makes it a useful tool for troubleshooting issues that may have taken your server offline.

For more information, please refer to our guide: [Using the IPMI with dedicated servers](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).

<a name="backup"></a>

### Backup storage

> [!primary]
>
> Please note that this option is not available for the **Kimsufi** range.
>

OVHcloud dedicated servers have an access-controlled storage space as a gratuitous service option. It is best used as a complementary backup option in case the server itself suffers data loss.

To activate and use the backup storage, please refer to [this guide](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage).

## Go further

[How to configure user accounts and root access on a server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Securing a dedicated server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Activating and using rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[OVHcloud API & OS installation](/pages/bare_metal_cloud/dedicated_servers/api-os-installation)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
