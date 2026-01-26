---
title: 'Installing Prometheus Agent on an instance'
excerpt: 'Find out how to install a Prometheus agent on an OVHcloud Public Cloud instance to gather metrics'
updated: 2026-01-26
---

## Objective

Prometheus is a monitoring system and time series database. You can install and use its agent on OVHcloud Public Cloud instances to gather metrics from your servers and applications.

**Find out how to install a Prometheus agent on an OVHcloud Public Cloud instance.**

> [!warning]
> 
> OVHcloud provides services for which you are responsible. In fact, as we do not have administrative access to these machines, we are not administrators and we cannot provide you with support. This means that it is up to you to manage the software and security daily.
>
> We have provided you with this guide in order to help you with common tasks. However, we advise contacting a [specialist provider](/links/partner) if you experience any difficulties or doubts about administration, usage or server security. Feel free to visit our [community forum](/links/community) to interact with other users.
>

## Requirements

- [An instance created via the OVHcloud Control Panel](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- [Administrative access to the instance](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance).
- A Prometheus server running and reachable from the instance.

## Instructions

Follow these steps to install a Prometheus agent (**Node Exporter** or **Windows Exporter**) on your OVHcloud Public Cloud instance to collect metrics.

### Step 1: Connecting to your instance

Connect to your instance via SSH:

```bash
ssh root@<INSTANCE_IP>
```

Replace `<INSTANCE_IP>` with the public IP address of your instance.

> [primary]
>
> For Windows, use PowerShell with SSH or an SSH client like [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) if you prefer using the command line.
>
> For Windows Server with GUI, you can also use RDP (Remote Desktop).
>

### Step 2: Updating your system

Make sure your system packages are up to date:

> [!tabs]
> For Debian/Ubuntu
>>
>> ```bash
>> sudo apt update && sudo apt upgrade -y
>> ```
>>
> For CentOS/RHEL
>>
>> ```bash
>> sudo yum update -y
>> ```
>>
> For macOS
>>
>> Use [Homebrew](https://brew.sh/) to update packages:
>>
>> ```bash
>> brew update
>> brew upgrade
>> ```
>>
> For Windows
>>
>> No system update is required specifically for Node Exporter. Optionally, ensure your system is up to date via Windows Update.
>>

### Step 3: Creating a Prometheus User (Optional)

Creating a dedicated user for Node Exporter improves security on Linux, but is optional on macOS and Windows.

> [!tabs]
> For Linux
>>
>> ```bash
>> sudo useradd --no-create-home --shell /bin/false prometheus
>> ```
>>
>> - This creates a user with limited permissions to run Node Exporter.
>> - Recommended for production to reduce security risks.
>> - You can then start Node Exporter under this user via systemd
>>
> For macOS
>>
>> ```bash
>> sudo dscl . -create /Users/prometheus
>> sudo dscl . -create /Users/prometheus UserShell /usr/bin/false
>> sudo dscl . -create /Users/prometheus NFSHomeDirectory /var/empty
>> ```
>>
>> - **Optional**: Node Exporter can run under your current user without issues.
>> - Creating a dedicated user is only for stricter separation, not required.
>>
> For Windows
>>
>> > [!primary]
>> >
>> > **Note**: Run these PowerShell commands inside the VM via SSH.
>> >
>>
>> ```powershell
>> New-LocalUser "prometheus" -NoPassword -Description "User for Node Exporter"
>>
>> Add-LocalGroupMember -Group "Users" -Member "prometheus"
>> ```
>>
>> **Note**: Node Exporter/Windows Exporter can run under the current user; creating a dedicated user is optional for stricter access control.
>>

### Step 4: Downloading Node Exporter

> [!tabs]
> For Linux
>>
>> ```bash
>> # Replace VERSION with the latest release, e.g., 1.10.2
>> VERSION="1.10.2"
>> wget https://github.com/prometheus/node_exporter/releases/download/v$VERSION/node_exporter-$VERSION.linux-amd64.tar.gz
>> tar xvf node_exporter-$VERSION.linux-amd64.tar.gz
>> cd node_exporter-$VERSION.linux-amd64
>> ```
>>
> For macOS
>>
>> ```bash
>> # Replace VERSION with the latest release, e.g., 1.10.2
>> VERSION="1.10.2"
>> curl -LO https://github.com/prometheus/node_exporter/releases/download/v$VERSION/node_exporter-$VERSION.darwin-arm64.tar.gz
>> tar xvf node_exporter-$VERSION.darwin-arm64.tar.gz
>> cd node_exporter-$VERSION.darwin-arm64
>> ```
>>
> For Windows (via SSH/PowerShell on the VM)
>>
>> > [!primary]
>> >
>> > `Invoke-WebRequest` require PowerShell 3.0 or later.
>> >
>>
>> ```powershell
>> mkdir C:\windows_exporter
>> cd C:\windows_exporter
>>
>> Invoke-WebRequest -Uri "https://github.com/prometheus-community/windows_exporter/releases/download/v0.31.3/windows_exporter-0.31.3-amd64.msi" -OutFile "windows_exporter.msi"
>> ```
>>
>> Everything is done directly inside the VM, no need to transfer files from your local machine.
>>

### Step 5: Running Node Exporter

> [!tabs]
> For Linux
>>
>> ```bash
>> ./node_exporter
>> ```
>>
>> - **Optional**: set up a systemd service to run Node Exporter automatically.
>> - If using the dedicated prometheus user, ensure the service runs under this account.
>>
> For macOS
>>
>> ```bash
>> ./node_exporter
>> ```
>>
>> **Optional**: run under a dedicated user for stricter separation, but current user works fine.
>>
> For Windows (via SSH/PowerShell)
>>
>> ```powershell
>> msiexec /i windows_exporter.msi ENABLED_COLLECTORS=cpu,cs,logical_disk,net,os,service,system,textfile /qn
>> ```
>>
>> - On Desktop or Core, you can run it directly in PowerShell or configure as a Windows service.
>>
>> It is possible to customize collectors; see the [official documentation](https://github.com/prometheus-community/windows_exporter#collectors) for the list.
>>

### Step 6: Verifying Node Exporter

> [!primary]
>
> Node Exporter listens on port 9100 by default.
>
> Windows Exporter listens on port 9182 by default
>
> Replace <PORT> with 9100 for Linux/macOS or 9182 for Windows.
>

You should see metrics such as CPU, memory, disk, and network usage using this curl command:

```bash
curl http://<INSTANCE_IP>:<PORT>/metrics
```

> [!primary]
>
> On Windows Desktop, you could also open a browser if desired, but via SSH/PowerShell, use `curl` or `Invoke-WebRequest`.
>

### Step 7: Firewall/Security Rules (OVHcloud)

Ensure that the port used by the exporter is open in both the VM firewall and your OVHcloud Security Group.

Restrict access to only your Prometheus server for security.

> [!tabs]
> For Linux (Debian/Ubuntu with UFW)
>>
>> ```bash
>> sudo ufw allow 9100/tcp
>> sudo ufw status
>> ```
>>
>> **Note**: If UFW shows **Status: inactive**, it means the firewall is not enabled on the VM. The port rule is added but not enforced.
>>
>> Security is mainly handled by your OVHcloud Security Group.
>>
>> If you want UFW active, first allow SSH to avoid being locked out:
>>
>> ```bash
>> sudo ufw allow ssh
>> sudo ufw enable
>> sudo ufw status
>> ```
>>
> For macOS
>>
>> macOS does not enable a firewall by default.
>>
>> If you are using the built-in firewall, open port 9100:
>>
>> ```bash
>> sudo /usr/libexec/ApplicationFirewall/socketfilterfw --add ./node_exporter
>> sudo /usr/libexec/ApplicationFirewall/socketfilterfw --unblockapp ./node_exporter
>> ```
>>
> For Windows
>>
>> Open port 9182 in Windows Firewall:
>>
>> ```powershell
>> netsh advfirewall firewall add rule name="Windows Exporter" dir=in action=allow protocol=TCP localport=9182
>> ```
>>
>> You can also verify rules via:
>>
>> ```powershell
>> netsh advfirewall firewall show rule name=all | findstr "9182"
>> ```
>>

### Step 8: Connecting Node Exporter to Prometheus

1\. Edit Prometheus config on your Prometheus server (prometheus.yml):

```yaml
scrape_configs:
  - job_name: 'node_exporter' # or 'windows_exporter'
    static_configs:
      - targets: ['<INSTANCE_IP>:9100'] # or 9182 for windows exporter
```

2\. Reload Prometheus:

> [!tabs]
> For Linux
>>
>> ```bash
>> sudo systemctl reload prometheus
>> ```
>>
> For macOS
>>
>> ```bash
>> brew services reload prometheus
>> ```
>>
> For Windows
>>
>> ```powershell
>> sc stop prometheus
>> sc start prometheus
>> ```
>>

3\. Node Exporter metrics from your OVHcloud instance should now appear in Prometheus.

## Go further

[Official Node Exporter documentation](https://github.com/prometheus/node_exporter)

[Creating and configuring a security group in Horizon](/pages/public_cloud/compute/setup_security_group)

Join our [community of users](/links/community).