---
title: "Configure OVHcloud Link Aggregation on a Dedicated Server (Debian)"
excerpt: "Enable OVHcloud Link Aggregation in your Debian server (from Debian 9 to Debian 11)"
updated: 2026-04-20
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

OVHcloud Link Aggregation (OLA) technology is designed by our teams to increase your server's availability, and boost the efficiency of your network connections. In just a few clicks, you can aggregate your network cards and make your network links redundant. This means that if one link goes down, traffic is automatically redirected to another available link. The available bandwidth is also doubled thanks to aggregation.
Aggregation is based on IEEE 802.3ad, Link Aggregation Control Protocol (LACP) technology.

**This guide explains how to bond your interfaces to use them for OLA in Debian 9 to 11 (ifupdown configuration).**

> [!warning]
> This guide provides instructions for configuring network interface bonding specifically using `ifupdown`, whose configuration file is located at `/etc/network/interfaces`. It also applies to the rescue system.
>
> If your system's network configuration uses `Netplan` instead (Debian 12 or newer, Ubuntu 24.04), please refer to [this guide](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).
>

## Requirements

- [Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Dedicated Servers](/links/control-panel/baremetal-dedicated-servers)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Dedicated servers`{.action} > Select your server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instructions

> [!primary]
> The values (MAC addresses, IP addresses, etc.) shown in the configurations and examples below are provided as examples. Of course, you must replace these values with your own.
>

> [!warning]
>
> You will need to install the ifenslave package on the server before enabling OLA in the OVHcloud Control Panel or API. To do so, please use the following command:
>
> ```bash
> apt install ifenslave
> ```
>

### Retrieving MAC addresses

<!-- CP-STEPS-START:retrieve-mac-addresses -->
Switch to the tab `Network Interfaces`{.action} and take note of the MAC addresses for each interface (public/private) which are displayed at the bottom of the menu.

![OVHcloud Control Panel](images/ControlPanel.png){.thumbnail}

> [!primary]
> Please note that the MAC address of the **main public** interface is the one receiving DHCP offers, both in the server's operating system and in rescue mode. This interface handles public connectivity in the default configuration.
>
> Additionally, the MAC address of the **main private** interface is the one with the lowest value. In the example image above, this is the address `a1:b2:c3:d4:e5:d6`.
>

Because you have a private-private configuration for your NICs in OLA, you will be unable to SSH into the server. Thus, you will need to leverage the IPMI tool to access the server.
<br>Click the `IPMI`{.action} tab (1).

Next, click the `From a Java applet (KVM)`{.action} button (2).
<!-- CP-STEPS-END:retrieve-mac-addresses -->

### Retrieving interfaces names

> [!primary]
>
> If you lose network connection to your server, follow the "**Open KVM**" steps from [this guide](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

To retrieve the names of the interfaces, execute the following command:

```bash
ip a
```

> [!primary]
>
> This command will yield numerous interfaces. If you are having trouble determining which ones are your physical interfaces, the first interface will still have the server's public IP address attached to it by default.
>

Here's an output example:

```text
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: ens22f0np0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c6 brd ff:ff:ff:ff:ff:ff
    inet 203.0.113.1/32 metric 100 scope global dynamic ens22f0np0
       valid_lft 71613sec preferred_lft 71613sec
    inet6 2001:db8:1:1b00:203:0:112:0/56 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::a6b2:c3ff:fed4:e5c6/64 scope link
       valid_lft forever preferred_lft forever
3: ens22f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c7 brd ff:ff:ff:ff:ff:ff
4: ens33f0np0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d6 brd ff:ff:ff:ff:ff:ff
5: ens33f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d7 brd ff:ff:ff:ff:ff:ff
```

Once you have determined the names of your interfaces, you can configure interfaces bonding in the OS.

### Configuring interface bonding

Select the tab below that matches your server configuration:

- **Two interfaces**: Advance servers with two physical NICs.
- **Four interfaces - Double LAG**: Scale and High-Grade servers with OLA in **Active - Double LAG** mode (public + private aggregates). This requires [OLA to be enabled](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) in the OVHcloud Control Panel.
- **Four interfaces - Fully Private**: Scale and High-Grade servers with OLA in **Active - Fully Private** mode (single private aggregate for vRack). This requires [OLA to be enabled](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) in the OVHcloud Control Panel.

> [!tabs]
> Two interfaces
>> Replace the content of `/etc/network/interfaces` with the following:
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 203.0.113.1/32
>>   gateway 100.64.0.1
>>   # MAC address of the server's main public interface
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>   dns-nameservers 213.186.33.99
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> auto bond0
>> iface bond0 inet dhcp
>>   # MAC address of the server's main public interface
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>> ```
>>
>> ///
>>
> Four interfaces - Double LAG
>> This configuration bonds public interfaces into `bond0` (with public IP) and private interfaces into `bond1` (for vRack).
>>
>> Replace the content of `/etc/network/interfaces` with the following:
>>
>> **Static IP**
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 203.0.113.1/32
>>   gateway 100.64.0.1
>>   # MAC address of the server's main public interface
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>   dns-nameservers 213.186.33.99
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>>
>> # Optional: private bond configuration
>> auto bond1
>> iface bond1 inet static
>>   address 10.0.0.1/24
>>   # MAC address of the server's main private interface
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> auto bond0
>> iface bond0 inet dhcp
>>   # MAC address of the server's main public interface
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>>
>> # Optional: private bond configuration
>> auto bond1
>> iface bond1 inet static
>>   address 10.0.0.1/24
>>   # MAC address of the server's main private interface
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> ///
>>
> Four interfaces - Fully Private
>> This configuration aggregates all physical interfaces into a single bond for vRack use only. There is no public IP connectivity.
>>
>> > [!warning]
>> >
>> > Following the implementation of OLA in Fully Private mode, the public IP is no longer accessible. Make sure you have an alternative means of access (e.g. through another server in the vRack, or via KVM/IPMI) before applying this configuration.
>> >
>>
>> Replace the content of `/etc/network/interfaces` with the following:
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 10.0.0.1/24
>>   # MAC address of the server's main private interface
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1 ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > In Fully Private mode, the bond uses the MAC address of the **main private** interface. The `address` field should be set to your vRack private IP.
>> >

### Applying the configuration

Apply the configuration by restarting the networking daemon:

```bash
systemctl restart networking
```

This restart may take several seconds since it is building the bond interface. To test that the bond is working, ping another server on the same vRack. If it works, you are all set. If it does not, double-check your configurations or try rebooting the server.

## Go further

[Configuring OVHcloud Link Aggregation in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[How to configure your NIC for OVHcloud Link Aggregation in Debian 12 or Ubuntu 24.04 using Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[How to Configure Your NIC for OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[How to Configure Your NIC for OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Join our [community of users](/links/community).
