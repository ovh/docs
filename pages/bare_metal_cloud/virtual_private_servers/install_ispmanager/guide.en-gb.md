---
title: 'How to install ISPmanager on a VPS or Dedicated Server'
excerpt: 'Discover how to install ISPmanager on your OVHcloud VPS or Dedicated Server and manage your websites, databases, and associated services'
updated: 2025-10-27
---

## Objective

[ISPmanager](https://www.ispmanager.com/) is an all-in-one web hosting panel that simplifies the management of websites, databases, accounts, TLS/Let’s Encrypt certificates, and associated services via a web interface. This guide explains how to install ISPmanager on a clean VPS or Dedicated Server and access the interface for initial configuration.

**Discover how to install ISPmanager on an OVHcloud VPS or Dedicated Server.**

> [!warning]
>
> OVHcloud provides services whose configuration, management, and responsibility fall to you. It is your responsibility to ensure their proper operation.
>
> We provide this tutorial to assist you with common tasks. However, we recommend contacting a [specialized provider](/links/partner) and/or the service publisher if you encounter difficulties. Indeed, we will not be able to provide assistance. For more information, see the [Go further](#go-further) section of this tutorial.
>

## Requirements

- A [VPS](/links/bare-metal/vps) or a [Dedicated Server](/links/bare-metal/bare-metal) in your [OVHcloud Control Panel](/links/manager) with a [recommended configuration for ISPmanager](https://www.ispmanager.com/docs/ispmanager/system-requirements).
- Administrator access (sudo) via SSH to your server.

## Instructions

### Step 1 — Connect and update the system

#### Connect to the server

Open a terminal and connect to your VPS (or Dedicated Server) using the following command:

```bash
ssh user@IP_VPS
```

Replace:

- `user` with your username.
- `IP_VPS` with your VPS's IP address.

#### Update the system

Update your operating system. This process may take several minutes.

> [!tabs]
> Debian and Ubuntu
>>
>> ```bash
>> sudo apt update && sudo apt -y upgrade
>> ```
>>
> AlmaLinux and Rocky Linux
>>
>> ```bash
>> sudo dnf -y update
>> ```
>>

### Step 2 — Open required ports on the firewall

To allow incoming and outgoing connections, consult the [official ISPmanager documentation](https://www.ispmanager.com/docs/ispmanager/system-requirements#firewall) to determine which ports to open based on your needs.

#### Example of opening ports for Debian / Ubuntu

1\. Install `UFW`:

```bash
sudo apt -y install ufw
```

2\. Open the necessary ports (examples: SSH, ISPmanager panel, HTTP/HTTPS):

```bash
sudo ufw allow 22/tcp
sudo ufw allow 1500/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

3\. Enable `UFW` and check its status (the value "ALLOW" is expected):

```bash
sudo ufw enable
sudo ufw status
```

#### Example of opening ports for AlmaLinux

1\. Install `firewalld`:

```bash
sudo dnf -y install firewalld
```

2\. Enable and start the service:

```bash
sudo systemctl enable --now firewalld
```

3\. Open the necessary ports (examples: SSH, ISPmanager panel, HTTP/HTTPS):

```bash
sudo firewall-cmd --add-service=ssh --permanent
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --add-service=https --permanent
sudo firewall-cmd --add-port=1500/tcp --permanent
```

4\. Apply the configuration:

```bash
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

### Step 3 — Install ISPmanager

1\. Install `wget`:

> [!tabs]
> Debian and Ubuntu
>>
>> ```bash
>> sudo apt -y install wget
>> ```
>>
> AlmaLinux 9 and Rocky Linux 8
>>
>> ```bash
>> sudo dnf -y install wget
>>
>> ```

2\. Download the ISPmanager installation script:

```bash
wget https://download.ispmanager.com/install.eu.sh -O install.eu.sh
```

3\. Run the installer:

```bash
sudo sh install.eu.sh
```

During installation:

- Choose the stable branch.
- Select the edition (Lite/Pro/Host) with recommended components.
- Choose your preferred web server and database.
- The installer installs necessary dependencies (this may take several minutes).

#### "Incorrect hostname" message during installation

If the following message appears during installation:

```console
You have incorrect hostname: vps-xxxx-vps-ovh-net  
Enter new hostname (or Ctrl+C to exit):
```

This means your server's hostname is not a fully qualified domain name (FQDN). To proceed, enter a valid domain name pointing to your server, for example:

```console
ispmanager.mondomaine.ovh
```

If you do not yet have a domain name linked to your VPS, consult our guide "[Edit an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)" to point your domain name to your VPS's IP address.

### Step 4 — First connection

Once installation is complete, enter the URL `https://<IP_VPS>:1500/ispmgr` in your browser, replacing `<IP_VPS>` with your VPS's IP address.

> [!primary]
>
> On first access, a self-signed certificate is used. Accept the browser warning to continue.

The following interface appears:

![ispmanager install](images/ispmanager-setup-interface.png){.thumbnail}

By default, the first connection to the ISPmanager interface uses the server's `root` system account. If you connect via SSH with a non-root user (e.g., `almalinux`, `debian`, `ubuntu`) and `root` has no password, run the following commands:

Switch to root:

```bash
sudo -i
```

Set a password for the root user:

```bash
passwd root
```

On the ISPmanager login interface, enter the following:

- Username: **root**.
- Password: the password for the **root** account you just set.

Accept the license agreement that appears to continue. Installation is complete, and the ISPmanager administration interface is accessible at `https://<IP_VPS>:1500/ispmgr`.

## Go further <a name="go-further"></a>

[Secure a VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Secure a Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner)

Join our [community of users](/links/community).