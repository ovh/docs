---
title: 'Configurar la red en Proxmox VE en las gamas High Grade, Scale & Advance (EN)'
excerpt: 'Cómo configurar la red en Proxmox VE'
updated: 2025-05-16
---

> [!primary]
>
> The sections related to Advance range servers only apply to third generation Advance servers powered by EPYC 4004 Series processors.
>
> Older Advance generation servers do not rely on the same network infrastructure.
>

> [!warning]
>
> As of May 2025, virtual MACs can be used on High Grade & Scale ranges.
>
> If you want to use virtual MACs to configure the network on Proxmox VE on High Grade and Scale servers, you can refer to [Configuring Additional IP in bridge mode on your virtual machines](/pages/bare_metal_cloud/dedicated_servers/network_bridging).

## Objective

**Find out two ways to configure an _additional IP_ on Proxmox VE: via the public interfaces and via the private interfaces (vRack).**

## Requirements

- An [OVHcloud dedicated server](/links/bare-metal/bare-metal)
- One or more [Additional IP addresses](/links/network/additional-ip)
- Access to the [OVHcloud Control Panel](/links/manager)

> [!warning]
>
> No virtual MAC address must be applied to Additional IPs in the OVHcloud Control Panel.
>

## Instructions

### Additional IP in routed mode on public network interfaces <a name="additionalipmoderoute"></a>

With this configuration, Additional IP addresses must be attached to a dedicated server. If you have multiple Proxmox virtualization servers and you want to migrate a VM from one server to another, you will also need to migrate the Additional IP address to the destination server, via the OVHcloud Control Panel or via the OVHcloud API. You can automate this step by writing a script that uses the OVHcloud APIs.

#### Target configuration schema

> [!tabs]
> High Grade & Scale ranges
>>
>> ![schema route](images/schema_route2022.png){.thumbnail}
>>
> Advance range
>>
>> ![schema route](images/gamme-advance-01.png){.thumbnail}
>>

#### Explanations

Proxmox is a Debian-based distribution which relies on `ifupdown2` for network configuration. In this guide, the network configuration will be modified via SSH and not via the Web interface.

We will:

- connect via SSH on Proxmox
- create a bond interface (only for the High Grade & Scale ranges)
- create a bridge interface connected to the bond
- allow packet forwarding between interfaces
- add routes to the additional IPs

#### Configure the hypervisor

Log in to the Proxmox server via SSH:

```bash
ssh PUB_IP_DEDICATED_SERVER
```

##### Allow packet forwarding

Enable the `ip_forward` sysctl parameter. To do this, we recommend modifying the `sysctl.conf` configuration file.

Add the following line to `/etc/sysctl.conf`:

```text
# Enable ip_forward
net.ipv4.ip_forward = 1
```

Next, reload the sysctl configuration:

```bash
sysctl -p
```

##### Configure the network interfaces

> [!tabs]
> High Grade & Scale ranges
>>
>> ```bash
>> vi /etc/network/interfaces
>> ```
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> # Public interfaces
>> auto bond0
>> iface bond0 inet manual
>>         bond-slaves ens33f0 ens33f1
>>         bond-mode 802.3ad
>>         bond-lacp-rate fast
>>         bond-xmit-hash-policy layer3+4
>>
>> auto vmbr0
>> iface vmbr0 inet static
>>         address PUB_IP_DEDICATED_SERVER/32
>>         gateway 100.64.0.1
>>         # Define a private network used to communicate with the VMs,
>>         # it must not overlap with other private networks configured on the server
>>         address 192.168.0.1/24
>>         bridge-ports bond0
>>         bridge-stp off
>>         bridge-fd 0
>>         # Add a single Additional IP
>>         up ip route add ADDITIONAL_IP/32 dev $IFACE
>>         # Add an IP block
>>         up ip route add ADDITIONAL_IP_BLOCK/28 dev $IFACE
>>
>> # Private interfaces
>> auto bond1
>> iface bond1 inet manual
>>         bond-slaves ens35f0 ens35f1
>>         bond-mode 802.3ad
>>         bond-lacp-rate fast
>>         bond-xmit-hash-policy layer3+4
>>
>> auto vmbr1
>> iface vmbr1 inet manual
>>         bridge-ports bond1
>>         bridge-stp off
>>         bridge-fd 0
>> ```
> Advance range
>>
>> ```bash
>> vi /etc/network/interfaces
>> ```
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> # Public interface
>> auto vmbr0
>> iface vmbr0 inet static
>>         address PUB_IP_DEDICATED_SERVER/32
>>         gateway 100.64.0.1
>>         # Define a private network used to communicate with the VMs,
>>         # it must not overlap with other private networks configured on the server
>>         address 192.168.0.1/24
>>         bridge-ports enp8s0f0np0
>>         bridge-stp off
>>         bridge-fd 0
>>         # Add a single Additional IP
>>         up ip route add ADDITIONAL_IP/32 dev $IFACE
>>         # Add an IP block
>>         up ip route add ADDITIONAL_IP_BLOCK/28 dev $IFACE
>>
>> # Private interface
>> auto vmbr1
>> iface vmbr1 inet manual
>>         bridge-ports enp8s0f1np1
>>         bridge-stp off
>>         bridge-fd 0
>> ```

At this point, restart the network services:

```bash
systemctl restart networking.service
```

> [!primary]
>
> When the networking service is restarted, VMs are not added back to the bridge. This is because Proxmox disconnects each VM from the bridges and does not reconnect them. To force the VMs to reconnect to the bridges, you can restart the VMs.

#### Client VM configuration example

The VM must be attached to the `vmbr0` bridge.

> [!tabs]
> Debian (ifupdown)
>> Contents of the `/etc/network/interfaces` file:
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> auto eth0
>>
>> iface eth0 inet static
>>         address 192.168.0.2/24
>>
>> iface eth0 inet static
>>         address ADDITIONAL_IP/32
>>         # The "src" option must be set so that packets reaching the Internet
>>         # have the public IP as source, instead of the private IP 192.168.0.2
>>         up ip route replace default via 192.168.0.1 dev $IFACE onlink src ADDITIONAL_IP
>> ```
>>
> Ubuntu (Netplan)
>> Contents of the `/etc/netplan/01-netcfg.yaml` file:
>>
>> ```yaml
>> network:
>>   version: 2
>>   ethernets:
>>     eth0:
>>       addresses:
>>         - 192.168.0.3/24
>>         - ADDITIONAL_IP/32
>>       routes:
>>         - to: default
>>           via: 192.168.0.1
>>           # So that packets reaching the Internet have the public IP as source,
>>           # instead of the private IP 192.168.0.3
>>           from: ADDITIONAL_IP
>> ```
>>

#### Testing and validation

From now on, your virtual machines should be able to access the Internet from the additional IPs. They should also be reachable directly from the Internet using their additional IPs. The available bandwidth corresponds to the bandwidth available on your server's public interfaces and will not affect the private interfaces used for the vRack. This public bandwidth is shared with other virtual machines on the same host, as well as the Proxmox host itself.

To check your public IP, from the VM:

```bash
curl ifconfig.io
ADDITIONAL_IP # must return your additional ip
```

> [!primary]
>
> You need to restart the VM's network services for the configuration to take effect.

### Additional IP via the vRack

This configuration is more flexible as you do not need to associate an Additional IP with a server, but with a vRack. This means that if you have multiple Proxmox virtualization servers and you want to migrate a VM from one server to another, you do not need to perform any action on OVHcloud APIs. The only requirement is for all servers to be connected to the same vRack.

> [!warning]
>
> This configuration only works with a block of additional IPs.
> It is not possible to use a single Additional IP (/32) directly in the vRack. To use an Additional IP, it must be [configured on a public interface](#additionalipmoderoute) and cannot be directly integrated into the vRack.
>

#### Requirements

* A [server compatible with vRack](/links/bare-metal/bare-metal)
* A [vRack service](/links/network/vrack)
* A block of Additional IPs
* Access to the [OVHcloud Control Panel](/links/manager)

#### Target configuration schema

![schema vrack](images/schema_vrack2022.png){.thumbnail}

#### Explanations

Proxmox is a Debian-based distribution which relies on `ifupdown2` for network configuration. In this guide, the network configuration will be modified via SSH and not via the Web interface.

We will:

* create a bond interface (only for the High Grade & Scale ranges)
* create a bridge interface connected to the bond

First, add your block of Additional IPs to the vRack. To do so, go to the `Bare Metal Cloud`{.action} section of your [OVHcloud Control Panel](/links/manager) and open the `vRack`{.action} menu.

Select your vRack from the list to view the list of eligible services. Click on the block of Additional IPs you want to add to the vRack, then click the `Add`{.action} button.

#### Determine assignable IP addresses

When used in a vRack, the first, penultimate, and last addresses of a given IP block are always reserved for the network address, network gateway, and network broadcast, respectively. This means that the first assignable address is the second address in the block, as shown in the example below for the `46.105.135.96/28` block:

```sh
46.105.135.96   # Reserved: network address
46.105.135.97   # First assignable IP
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109   # Last assignable IP
46.105.135.110   # Reserved: network gateway
46.105.135.111   # Reserved: network broadcast
```

> [!primary]
>
> The subnet mask used in this example is appropriate for our block of Additional IPs. Your subnet mask may differ depending on the size of your block. When you purchase your IP block, you will receive an email with the subnet mask to use.
>

#### Configure the hypervisor

Log in to the Proxmox server via SSH:

```bash
ssh PUB_IP_DEDICATED_SERVER
```

> [!tabs]
> High Grade & Scale ranges
>>
>> ```bash
>> vi /etc/network/interfaces
>> ```
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> # Public interfaces
>> auto bond0
>> iface bond0 inet static
>>         address PUB_IP_DEDICATED_SERVER/32
>>         gateway 100.64.0.1
>>         bond-slaves ens33f0 ens33f1
>>         bond-mode 802.3ad
>>         bond-lacp-rate fast
>>         bond-xmit-hash-policy layer3+4
>>
>> # Private interfaces
>> auto bond1
>> iface bond1 inet manual
>>         bond-slaves ens35f0 ens35f1
>>         bond-mode 802.3ad
>>         bond-lacp-rate fast
>>         bond-xmit-hash-policy layer3+4
>>
>> auto vmbr1
>> iface vmbr1 inet manual
>>         bridge-ports bond1
>>         bridge-stp off
>>         bridge-fd 0
>> ```
>>
> Advance range
>>
>> ```bash
>> vi /etc/network/interfaces
>> ```
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> # Public interface
>> auto enp8s0f0np0
>> iface enp8s0f0np0 inet static
>>         address PUB_IP_DEDICATED_SERVER/32
>>         gateway 100.64.0.1
>>
>> # Private interface
>> auto vmbr1
>> iface vmbr1 inet manual
>>         bridge-ports enp8s0f1np1
>>         bridge-stp off
>>         bridge-fd 0
>> ```

At this point, restart the network services:

```bash
systemctl restart networking.service
```

> [!primary]
>
> When the networking service is restarted, VMs are not added back to the bridge. This is because Proxmox disconnects each VM from the bridges and does not reconnect them. To force the VMs to reconnect to the bridges, you can restart the VMs.

#### Client VM configuration example

The VM must be attached to the `vmbr1` bridge.

> [!tabs]
> Debian (ifupdown)
>> Contents of the `/etc/network/interfaces` file:
>>
>> ```text
>> auto lo
>> iface lo inet loopback
>>
>> auto eth0
>> iface eth0 inet static
>>         address 46.105.135.97/28
>>         gateway 46.105.135.110
>> ```
> Ubuntu (Netplan)
>> Contents of the `/etc/netplan/01-netcfg.yaml` file:
>>
>> ```yaml
>> network:
>>   version: 2
>>   ethernets:
>>     eth0:
>>       addresses:
>>         - 46.105.135.98/28
>>       routes:
>>         - to: default
>>           via: 46.105.135.110
>> ```

#### Testing and validation

From now on, your virtual machines should be able to access the Internet from the additional IPs. They should also be reachable directly from the Internet using their additional IPs.

To check your public IP, from the VM:

```bash
curl ifconfig.io
ADDITIONAL_IP # must return your additional ip
```

> [!primary]
>
> You need to restart the VM's network services for the configuration to take effect.

## Go further

Join our [community of users](/links/community).
