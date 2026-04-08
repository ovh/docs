---
title: "Fix Proxmox VE Slow Downloads on a Dedicated Server"
excerpt: "Resolve slow download speeds in Proxmox VE containers and VMs on servers with Broadcom BCM57502 network adapters."
updated: 2025-01-16
---

## Objective

Some Dedicated Servers equipped with Broadcom BCM57502 NICs may experience really slow (as low as 255 kb/s) download speeds inside VMs or containers running on Proxmox VE (Virtual Environment).

**Find out how to fix slow downloads problems inside containers and VMs running on Proxmox VE with a Broadcom BCM57502 network interface controller by disabling the `generic-receive-offload` parameter.**

## Requirements

The issue is known to occur on bare metal servers of the ADVANCE ranges running Proxmox VE.
Only servers equipped with a Broadcom BCM57502 network interface controller are affected.

## Instructions

### Step 1 - Identifying your network interface controller

SSH into the server and run the following command which lists all PCI devices of class 200 (Ethernet controllers):

```sh
lspci -nnd ::200
```

If the output shows devices with PCI ID `14e4:1752`, your server is affected. Example output:

```text
02:00.0 Ethernet controller [0200]: Broadcom Inc. and subsidiaries BCM57502 NetXtreme-E 10Gb/25Gb/40Gb/50Gb Ethernet [14e4:1752] (rev 12)
02:00.1 Ethernet controller [0200]: Broadcom Inc. and subsidiaries BCM57502 NetXtreme-E 10Gb/25Gb/40Gb/50Gb Ethernet [14e4:1752] (rev 12)
```

### Step 2 - Obtaining the network interface names

List network interfaces with:

```sh
ip -brief link show
```

Example output:

```text
lo               UNKNOWN        00:00:00:00:00:00 <LOOPBACK,UP,LOWER_UP>
enp2s0f0np0      UP             9c:6b:00:12:34:56 <BROADCAST,MULTICAST,UP,LOWER_UP>
enp2s0f1np1      DOWN           9c:6b:00:12:34:57 <BROADCAST,MULTICAST>
vmbr0            UP             9c:6b:00:12:34:56 <BROADCAST,MULTICAST,UP,LOWER_UP>
```

To find the interfaces that correspond to the Broadcom controllers shown by `lspci`, you can run:

```sh
ethtool -i enp2s0f0np0
```

Example output:

```txt
driver: bnxt_en
version: 6.8.12-5-pve
firmware-version: 229.0.121.0/pkg N/A
expansion-rom-version:
bus-info: 0000:02:00.0
supports-statistics: yes
supports-test: yes
supports-eeprom-access: yes
supports-register-dump: yes
supports-priv-flags: no
```

The `bus-info` line matches the PCI address (`02:00.0` shown by `lspci`).

### Step 3 - Disabling the `generic-receive-offload` parameter

You can now check the status of the `generic-receive-offload` parameter with the following command:

```sh
ethtool --show-offload enp2s0f0np0 | grep generic-receive-offload:
```

Example output:

```text
generic-receive-offload: on
```

The slow downloads issue can be fixed by disabling `generic-receive-offload` with the following command:

```sh
ethtool --offload enp2s0f0np0 generic-receive-offload off
```

Example output:

```text
Actual changes:
rx-gro: off
rx-gro-hw: off [not requested]
```

### Step 4 - Persisting the change across reboots

In order to persist the change after the next reboot, the `ethtool` command may be added to the appropriate interfaces in `/etc/network/interfaces` as an `up` command.

For instance:

```text
auto lo
iface lo inet loopback

iface enp2s0f0np0 inet manual
	up ethtool --offload $IFACE generic-receive-offload off

auto vmbr0
iface vmbr0 inet static
	address <IPV4>/32
	gateway 100.64.0.1
	bridge-ports enp2s0f0np0
	bridge-stp off
	bridge-fd 0
	hwaddress 9C:6B:00:12:34:56

iface vmbr0 inet6 static
	address <IPV6>/56
	gateway fe80::1
```

> [!primary]
> The `$IFACE` placeholder will be replaced by the interface name on execution. You do not need to replace it with the actual interface name.
>
> Setting the `generic-receive-offload` parameter on the `vmbr0` bridge has no effect, the change must be applied to the physical interfaces.

You can now restart the networking service to apply the configuration:

```sh
systemctl restart networking.service
```

## Go further

[Proxmox VE Networking on HG/Scale Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/proxmox-network-HG-Scale)

[Hardware upgrade on a High Grade or Scale Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/hardware-upgrade-HG-Scale)

Join our [community of users](/links/community).
