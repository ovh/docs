---
title: Getting started with a VPS
excerpt: "Find out how to manage a VPS in your OVHcloud Control Panel and discover the first steps of its use, including remote connections and security measures"
updated: 2026-01-21
---

## Objective

A Virtual Private Server (VPS) is a server that you fully administer.

Unlike a managed web hosting service, you are responsible for the following:

- Configuration: managing and setting up your server.
- Security: protecting your VPS against attacks.
- Maintenance: keeping the server up to date and operational.
- Backups: regularly testing your backups to ensure data recovery.

## Requirements

- An active [VPS](/links/bare-metal/vps) offer in your OVHcloud Control Panel.

<!-- CP-NAV-START:baremetal-vps -->
---

### OVHcloud Control Panel Access

- **Direct link:** [VPS management](/links/control-panel/baremetal-vps)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Virtual private servers`{.action} > Select your VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Instructions

To understand the management interface of your VPS and the available actions in the OVHcloud Control Panel, refer to our [guide dedicated to getting started with the OVHcloud Control Panel for VPS](/pages/bare_metal_cloud/virtual_private_servers/understand-vps-control-panel).

**Content overview**

- [Step 1: Initial connection](#initial-connection)
    - [GNU/Linux distribution](#linuxconnect)
    - [Windows distribution](#winconnect)
- [Step 2: Using the root account](#rootaccount)
- [Step 3: Securing your VPS](#secure)
- [Step 4: Linking a domain name](#domain)

### Step 1: Initial connection <a name="initial-connection"></a>

#### Linux: <a name="linuxconnect"></a>

When you connect to your VPS for the first time, note that **the account you connect with is not root**.

At OVHcloud, for security reasons and to protect our customers' services, we automatically create a **username linked to the operating system you selected** when you placed your order.

The exact username to use for the connection is clearly indicated in your VPS delivery email.

For example:

- For **Debian**, the username will be **debian**.
- For **Ubuntu**, the username will be **ubuntu**.
- For **Rocky Linux**, the username will be **rocky**.

The temporary password associated with this account is sent to you via a secure link in your delivery email.

> [!primary]
> **Important note**: during your **first connection**, you will be asked to **change this temporary password**.
>
> Once the password is changed, **the session will be automatically closed**. This is normal behavior. You will then need to **reconnect using your new password**.

```bash
ssh username@IPv4_VPS
```

- Replace "username" with the user corresponding to your OS.
- Replace "IPv4_de_votre_VPS" with the IP address indicated in your delivery email.

#### Windows: <a name="winconnect"></a>

##### Finalising the installation of Windows

Once the Windows operating system is installed, you receive an email with the default username `Windows user`.

You will then need to complete the Windows installation process by setting your display language, keyboard layout, and administrator password.

<!-- CP-STEPS-START:windows-kvm-launch -->
This is done in the VPS KVM console: in the `Home`{.action} tab, click the `...`{.action} button next to your VPS name in the **Your VPS** section and select `KVM`{.action}.
<!-- CP-STEPS-END:windows-kvm-launch -->

Find more information about this tool in our "[KVM guide](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps)".

To finalise the initial configuration of your Windows VPS, follow the steps below by browsing the tabs:

> [!tabs]
> 1. **Regional settings**
>>
>> Once the KVM session is established, complete the initial Windows configuration by setting your **country/region**, preferred **Windows language**, and **keyboard layout**. Then click on the `Next`{.action} button in the bottom right.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}
>>
> 2. **Administrator password**
>>
>> Set a password for your Windows `Administrator`/`admin` account, confirm it, and then click `Finish`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}
>>
> 3. **Login screen**
>>
>> Windows will apply your settings and then display the login screen. Click on the `Send CtrlAltDel`{.action} button in the top right to log in.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}
>>
> 4. **Administrator login**
>>
>> Enter the `Administrator` password you created in the previous step and click on the `arrow`.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### Connecting to the server with RDP

On your local Windows device, you can use the "Remote Desktop Connection" client application to connect to the VPS.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Enter the IPv4 address of your VPS, then your username and password. Usually, a warning message appears, asking you to confirm the connection due to an unknown certificate. Click `Yes`{.action} to connect.

You can also use another third-party application compatible with RDP. This is required if Windows is not installed on your local device.

> [!primary]
>
If you experience difficulties with this procedure, check that remote connections (RDP) are allowed on your device by checking system settings, firewall rules, and possible network restrictions.
>

To facilitate troubleshooting in case of problems, we recommend **enabling Windows boot logs** by following our [dedicated guide](/pages/bare_metal_cloud/virtual_private_servers/windows-boot-logs).

### Step 2: Using the root account (optional but recommended) <a name="rootaccount"></a>

The root user is disabled by default for the security of your product.

For administrative tasks, use sudo from your main user:

```bash
sudo command
```

If you wish to enable root:

```bash
sudo passwd root
```

### Step 3: Securing your VPS <a name="secure"></a>

If you wish to secure your VPS, we recommend following our guide "[Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)". This guide walks you through the process and details the following actions:

- Updating the system.
- Changing the default SSH listening port.
- Configuring the internal firewall.
- Installing fail2ban to block repeated login attempts.
- Backing up your system and data.

### Step 4: Linking a domain name (optional but recommended) <a name="domain"></a>

Putting your VPS online usually involves using and configuring a domain name.

For this, we recommend performing the following actions:

- [Edit the DNS zone](/pages/web_cloud/domains/dns_zone_edit) by adding the necessary entries to point the domain to the IPv4 address of your VPS.
- [Enable a free SSL certificate (Let's Encrypt)](/pages/bare_metal_cloud/virtual_private_servers/install-ssl-certificate) to secure access to your websites via HTTPS.

## Go further

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[SSH introduction](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Securing a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[How to recover access to the server in case of lost user password](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Join our [community of users](/links/community).