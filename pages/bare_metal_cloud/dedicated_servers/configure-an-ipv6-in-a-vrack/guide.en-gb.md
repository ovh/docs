---
title: "Configure an IPv6 Block in a vRack on a Dedicated Server"
excerpt: "Configure a public IPv6 address block for use with an OVHcloud vRack private network on your dedicated server."
updated: 2026-03-13
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

The vRack network serves as a global private network bridging various OVHcloud products, enabling the creation of sophisticated network solutions. Beyond facilitating private connections, it also supports routing public IP addresses.

**This guide focuses on Additional IPv6 address block configuration within a vRack network.**

> [!primary]
>
> vRack supports both IPv4 and IPv6 public routing with Additional IP address blocks. You can find the instructions on how to configure IPv4 blocks in this guide: [Configuring an IP block in a vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack).
>

> [!primary]
>
> This guide focuses on Additional IP configuration over a vRack network. If you look for guidance on Additional IP configuration together with primary IP (on public network interface), read the following articles:
>
> - IPv4:
>     - [Configuring IP aliasing on dedicated servers](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Configuring IP aliasing on a VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
> - IPv6:
>     - [Configuring IPv6 on dedicated servers](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Configuring IPv6 on a VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Configuring IPv6 on a Public Cloud instance](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Introduction

IPv6 revolutionizes networking within OVHcloud's vRack by addressing IPv4's limitations and introducing features for the modern Internet. Its rollout is a direct response to the need for more extensive, secure, and sophisticated Internet architectures. Here are the key benefits of integrating IPv6 with vRack:

- **Flexibility for Advanced Networking**: IPv6 significantly increases the address space, providing the flexibility needed to scale infrastructure, manage failover scenarios and support larger solutions. This ensures that networks can grow and adapt without the space constraints of IPv4.

- **Hierarchical Routing and Segmentation**: IPv6 enables efficient hierarchical routing and logical infrastructure segmentation. This improves network manageability and security, ideal for reselling VMs with dedicated subnets or organising infrastructure into distinct segments.

- **Low latency**: Native, end-to-end IPv6 connectivity can be an enabler for latency-sensitive services like media streaming, as many recent provider networks are built IPv6-native. In such networks, using IPv4 services brings additional latency (and costs).

By leveraging IPv6 within vRack, OVHcloud users can enjoy a more secure, efficient, and scalable network environment, ready to meet the demands of modern Internet usage.


## Requirements

- A [vRack](/links/network/vrack) service activated in your account
- A [vRack compatible server](/links/network/vrack) attached to your vRack network

<!-- CP-NAV-START:network-vrack -->
---

### OVHcloud Control Panel Access

- **Direct link:** [vRack](/links/control-panel/network-vrack)
- **Navigation path:** `Network`{.action} > `vRack private network`{.action}

---
<!-- CP-NAV-END:network-vrack -->

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](/links/bare-metal/eco-about).
>
> Visit our [comparison page](/links/bare-metal/eco-compare) for more information.

## Instructions

### Obtaining a new Additional IPv6 block

While requesting a new Additional IPv6 block, it's important to note that the allocation is regional. This means the IPv6 block you receive will be tied to a specific region, defining where public traffic enters your vRack network (thus, where the gateway is located). 

/// details | Request a new Additional IPv6 block

You can order your new additional IPv6 block [here](https://www.ovh.com/manager/#/dedicated/ip/agoraOrder/ipv6?catalogName=ip).

![configuration page](images/500.png){.thumbnail}

Next, follow the step-by-step instructions.

Your new Additional IPv6 will then be available on your vRack configuration page.

///

### Configuring IPv6 in a vRack (basic mode)

In this section we will present basic IPv6 setup for your vRack connected hosts.

![Configuring IPv6 in a vRack](images/20240418-03.png){.thumbnail}

The example above shows two hosts with their vRack-side interfaces configured with IPv6 public addresses. One host is configured manually, while the other has an IP address assigned automatically using SLAAC. All IP addresses belong to the first /64 subnet from a given public /56 Additional IPv6 block. Both leverage the vRack interface for public IPv6 connectivity.

The default gateway for the first /64 subnet (bridged one) is the first address from the /56 block. In this example it is `2001:41d0:abcd:ef00::1`. This is distributed via SLAAC but must be manually configured (as a default route) if SLAAC is disabled. See the **Static IP configuration** section below.

/// details | Via the OVHcloud Control Panel

![vRack management](images/700.png){.thumbnail}

On the left side, the possible options (eligible services to be configured) are listed.

On the right you see what is already configured with your vRack.

Select your new Additional IPv6 and add it to your vRack.

![vRack selection](images/701.png){.thumbnail}

You now have your new Additional IPv6 added to your vRack.

### Static IP configuration

Once the Additional IPv6 /56 block is attributed to a vRack network, there is still the first /64 subnet that is bridged with it.

This means you can easily use such IPs on your hosts with static IP configuration on vRack interfaces (see the next section for a host-side configuration example).

### Automatic IP configuration (SLAAC)

To simplify IP addressing inside your network, you may want to use SLAAC. It can be enabled per-bridged-subnet only and can be enabled for the first /64 of your block (this one is always bridged) at any time using this slider button:

![enabling SLAAC](images/702.png){.thumbnail}

Don't forget to configure SLAAC on your host machine.

///


/// details | Via the APIv6 (alternative way)

### Attributing an Additional IPv6 to a vRack

When you request an additional IPv6, it is automatically assigned to your vRack.

If you removed this new Additional IPv6 from your vRack, you can assign it again using this POST method:

> [!api]
>
> @api {v1} /vrack POST /vrack/{serviceName}/ipv6
>

As in the example below:

![api post add block](images/post-ipv6.png){.thumbnail}

Use the following call to verify the IPv6 has been assigned:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}
>

As in the example below:

![GET ipv6 call](images/20240418-04.png){.thumbnail}

Now, we see our block configured with a vRack. The next step is to configure the host or VMs.

### Static IP configuration

Once the Additional IPv6 /56 block is attributed to a vRack network, there is still the first /64 subnet that is bridged with it. This means you can easily use such IPs on your hosts.

Let's check exactly which subnet is bridged:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange
>

As in the example below:

![API response listing bridged subranges in the vRack](images/20240418-05.png){.thumbnail}

To get more details, use this call:

> [!api]
>
> @api {v1} /vrack GET /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

As in the example below:

![API response with bridged subrange details and SLAAC status](images/20240418-06.png){.thumbnail}

Notice that IP autoconfiguration (SLAAC) is turned off by default.

### Automatic IP configuration (SLAAC)

To simplify IP addressing inside your network, you may want to use SLAAC. It can be enabled per-bridged-subnet only and can be enabled with this PUT method:

> [!api]
>
> @api {v1} /vrack PUT /vrack/{serviceName}/ipv6/{ipv6}/bridgedSubrange/{bridgedSubrange}
>

As in the example below:

![API call POST enable SLAAC](images/20240418-07.png){.thumbnail}

Don't forget to configure SLAAC on your host machine.

///

### Managing public IP bandwidth on vRack

By default, Additional IP blocks routed via a vRack benefit from a standard public bandwidth of 5 Gbps in Europe/Canada/US and 100 Mbps in APAC regions. For a detailed overview of availability, please refer to public routing options on our [vRack product page](/links/network/vrack). 

As infrastructure requirements scale, users may require broader bandwidth to support high-traffic public-oriented services, for which OVHcloud provides paid bandwidth options. Note that bandwidth options are applied **per-vRack and per-region**. Since Additional IP addresses are tied to a region, any bandwidth modification will affect all IP addresses (both IPv4 and IPv6) routed to the specific vRack within that particular region.

/// details | During the Additional IP ordering process

#### Choosing public bandwidth during an Additional IP order

The default public bandwidth can be changed when ordering a new Additional IP block with a vRack network as the backend.

To order a new Additional IPv6 block:

- Log in to the [OVHcloud Control Panel](/links/manager).
- Open the `Network`{.action} section in the left-hand sidebar.
- Select `Public IP addresses`{.action}.
- Click on the `Order IPs`{.action} button, near the top of the page.
- Select the IP version, then the vRack you want to attach your Additional IP to.
- Select the region you want your Additional IP to be in.
- Choose the public bandwidth you want to apply to your vRack for that specific region.
- Fill in the other options as necessary, then proceed with your order.

///

/// details | From the vRack management page

#### Modifying vRack public bandwidth on management page

For Additional IP blocks already attached to a vRack, bandwidth can be managed directly through the service configuration page.

To access the management interface:

- Open `Network`{.action} in the left-hand sidebar of your Control Panel.
- Select `vRack private network`{.action}.
- In the "Public IP & bandwidth" column, click the `Manage`{.action} button for the corresponding vRack.

The management page is organized into two tabs:

- **All attached services**: For the time being, it redirects to the classic vRack management page. Soon, it will list all the products (Servers, Cloud Projects, etc.) currently linked to the vRack, in a new way.
- **Public IP routing**: Manages the public IP routing options of your vRack, including public bandwidth.

To modify the public bandwidth:

- Navigate to the `Public IP routing`{.action} tab.
- The interface displays individual management windows for each region (e.g., `eu-west-par`) associated with the vRack, listing all IP addresses attached to that specific region.
- Within the window for the relevant region, click the `Modify bandwidth`{.action} button.
- Select the desired bandwidth option in the panel that appears on the right-hand side, then click `Proceed to order`{.action} to validate the order.
- Once paid, the selected bandwidth should be available to your vRack in the chosen region after a few minutes.

> [!primary]
>
> Charges for the initial month are pro-rated based on the remaining days, with the full rate effective the next billing cycle.
>

The selected bandwidth upgrade will apply to all IP addresses in that region for the chosen vRack.

///

### Managing 3-AZ failover priorities

Some OVHcloud regions span three Availability Zones (AZs) hosted in physically independent locations within the same region. When such a region is involved in your vRack public IP routing, it is identified in the OVHcloud Control Panel by a **3-AZ** badge displayed next to the region name in the `Public IP routing`{.action} tab.

#### Benefits

- **Built-in resilience**: public IP traffic routed via the vRack remains available if a single Availability Zone becomes unavailable, as routing automatically fails over to the next AZ in the priority order.
- **Predictable failover behaviour**: each 3-AZ region exposes a Primary Availability Zone and two ordered failover positions for your vRack, so the failover sequence is deterministic.
- **Workload alignment**: when other OVHcloud services are deployed in the same 3-AZ region, priorities can be aligned so that the vRack's active AZ matches the AZ hosting your services. This keeps your public traffic in the same AZ as your workload during normal operation.

#### Mechanics and priority management

When a vRack is first associated with a 3-AZ region, OVHcloud assigns a **Primary Availability Zone** to it at random. The Primary Zone is displayed in the corresponding region tile on the `Public IP routing`{.action} tab, alongside a `Configure 3-AZ failover priorities`{.action} link. The two remaining AZs are assigned as **First failover** and **Last resort failover**.

You can override this random assignment at any time, for example to align failover priorities with the AZ layout of other components attached to your infrastructure.

/// details | Modify the Availability Zone priorities

To adjust the failover priorities of a 3-AZ region:

- Open `Network`{.action} in the left-hand sidebar of your Control Panel.
- Select `vRack private network`{.action}.
- In the "Public IP & bandwidth" column, click the `Manage`{.action} button for the corresponding vRack.
- Open the `Public IP routing`{.action} tab.
- Locate the tile of the 3-AZ region you want to configure and click `Configure 3-AZ failover priorities`{.action}.
- In the panel that opens on the right-hand side, assign each Availability Zone to one of the three slots: **Primary Zone**, **First failover** and **Last resort failover**.
- Validate your selection.

> [!primary]
>
> Priority changes apply to all Additional IP blocks routed to the corresponding 3-AZ region for the selected vRack, regardless of their IP version.
>

///

### Host-side commands

/// details | Static IP configuration

In a basic configuration, you may want to setup an IP address and routing manually. This is also the suggested way when your machine acts as a router (see the [configuring routed subnet](#routedmode) section) and has ipv6.forwarding mode enabled.

First, let's add an IP address on the vRack interface (in our example "eth1"):

```bash
$ sudo ip address add 2001:41d0:abcd:ef00::2/64 dev eth1
```

Please note that the first IP address in a block, `2001:41d0:abcd:ef00::1/64` is the gateway IP address and must not be used for host addressing.

Optionally, if you want to use the vRack interface as the main one for IPv6 traffic, the default route can be configured the following way:

```bash
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1/64 dev eth1
```

Finally, bring up the interface (and verify the configured IP on it):

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00::2/64 scope global static
```

///

/// details | Automatic IP configuration (SLAAC)

To use automatic configuration, please ensure you have configured your interface as follows:

First, let's allow our host to accept Router Advertisements (for autoconfiguration) on the vRack interface (in our example "eth1"):

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=1
```

Note that this setting does not work if ipv6.forwarding is enabled in your system. In such case please refer to [Automatic IP configuration for routed subnet](#host-side) for more details.

Then, simply bring up the interface:

```bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166/64 scope global dynamic mngtmpaddr
       valid_lft 2322122sec preferred_lft 334922sec
```

After a moment (the configuration must propagate), specific IPv6 address (with the flags <i>global</i> and <i>dynamic</i>) should be visible on the interface.

///

### Setup verification

/// details | Local

The most basic test is to ping a local IP address on a host:

```bash
debian@host:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=64 time=0.043 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=64 time=0.034 ms
```

///

/// details | Remote

Next, let's verify the connectivity from remote:

```bash
ubuntu@remote-test:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=55 time=7.23 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=55 time=6.90 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=3 ttl=55 time=6.92 ms
```

///

### Configuring an IPv6 in a vRack for routed mode <a name="routedmode"></a>

In this section we will present a more advanced IPv6 setup, where your vRack connected hosts are acting as routers for hosted Virtual Machines. Such VMs have delegated subnets from the main IPv6 block (presented with an orange color in the schema below).

![Configuring an IPv6 in a vRack for routed-mode](images/routed-mode-20240513.png){.thumbnail}

The traffic path is as follows: Inbound traffic to a given VM (with specified subnet) is routed through the customer's vRack, first to a specified host (with a next-hop address), then using a local link (or vSwitch - black link fd00::/64 on a diagram) to the particular VM.
Traffic coming back from such a VM should use the default route via the first part of the local link (black one, fd00::1), then (possibly default) route from a host to its gateway.

For routed subnet definition any prefix size can be used between /57 and /64.

The default gateway for the host is the first address from the /56 block, which is in this example: `2001:41d0:abcd:ef00::1`. The default gateway used by the VMs is the address of their host via the local link, which is `fd00::1` in this example.

#### Define routed subnet

/// details | OVHcloud Control Panel actions

After adding Additional IP to your vRack you can manage routed subnet by clicking the `Add subnet`{.action} button.

![vRack select](images/600.png){.thumbnail}

To create a routed subnet, we must first define:

- **subnet in CIDR notation** (size between /57 and /64)
- **next-hop address** (so the host's IPv6 address)

Please note that a given subnet cannot overlap with any other subnet defined and next-hop address must belong to the first part (bridged /64 subnet) of your Additional IPv6 prefix.

![Define routed subnet in CIDR notation and next-hop address](images/800.png){.thumbnail}

This created routed subnet `2001:41d0:abcd:ef10::/60` reachable via next hop `2001:41d0:abcd:ef00::2`. 

![Created routed subnet with next-hop displayed](images/801.png){.thumbnail}

///

/// details | APIv6 commands

To create a routed subnet, we must first define:

- **subnet in CIDR notation** (size between /57 and /64)
- **next-hop address** (so the host's IPv6 address)

Please note that a given subnet cannot overlap with any other subnet defined and next-hop address must belong to the first part (bridged /64 subnet) of your Additional IPv6 prefix.

The example below shows how to define such a subnet:

![API call to define a routed subnet with next-hop](images/20240418-02.png){.thumbnail}

Here, we defined a routed subnet `2001:41d0:abcd:ef10::/60` which will be delegated to the VM hosted on: `2001:41d0:abcd:ef00::2`.

///

#### Host-side configuration <a name="host-side"></a>

/// details | Static IP configuration for a host (recommended)

When hosting Virtual Machines, we strongly recommend to use static configuration on your host.

Set up an IPv6 address, bring up the interface and (optionally) add the default route over the vRack interface:

```bash
$ sudo ip addr add 2001:41d0:abcd:ef00::2/64 dev eth1
$ sudo ip link set dev eth1 up
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1 dev eth1
```

///

/// details | Automatic IP configuration (SLAAC) for a host

In some cases, you may want to configure your interfaces with SLAAC and IP forwarding together. 

Please note that this brings additional risks (such as losing access not only to the host but also to all VMs) and is not recommended.

Ensuring IPv6 forwarding is enabled:

```bash
$ sudo sysctl -w net.ipv6.conf.all.forwarding=1
```

Configuring Router Advertisements to be accepted (on vRack eth1 interface in our example):

```bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=2
```

///

/// details | Routed subnet configuration on a host and inside a VM

To ensure that our host knows what to do with packets addressed to the new routed subnet (that will be on a VM), we must add a specific route for it.

In our example this is the veth link with the address fd00::2/64 inside a VM we will use for routing.

Please note that this is very specific to the hypervisor installed (it can be vSwitch or veth interfaces). Please refer to the specific hypervisor networking guide for this setup.

```bash
$ sudo ip -6 route add 2001:41d0:abcd:ef10::/60 via fd00::2
```

///


/// details | Routed subnet configuration inside a VM

Again, please note that the link used between host and VMs is very specific to the hypervisor installed (it can be vSwitch or veth interfaces). Please refer to the specific hypervisor networking guide for this setup.

Add our routed IP block inside a VM to ensure it can accept packets:

```bash
debian@vm-1:~$ sudo ip address add 2001:41d0:abcd:ef10::1/60 dev lo
```

Add the default route on a VM to ensure traffic can get back out of it:

```bash
debian@vm-1:~$ sudo ip -6 route add default via fd00::1
```

///


#### Setup verification

/// details | Local, on a host

Ping from the host into the container (using local link):

```bash
debian@host:~$ ping fd00::2
PING fd00::2(fd00::2) 56 data bytes
64 bytes from fd00::2: icmp_seq=1 ttl=64 time=0.053 ms
64 bytes from fd00::2: icmp_seq=2 ttl=64 time=0.071 ms
```

Ping from the host into the container (using routed subnet):

```bash
debian@host:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=64 time=0.054 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=64 time=0.073 ms
```

Check the route to our /60 subnet on a host:

```bash
debian@host:~$ ip -6 route get 2001:41d0:abcd:ef10::1
2001:41d0:abcd:ef10::1 from :: via fd00::2 dev veth1a src fd00::1 metric 1024 pref medium
```

///

/// details | Local, on a VM

First, check the routing table:

```bash
debian@vm-1:~$ ip -6 route show
2001:41d0:abcd:ef10::/60 dev lo proto kernel metric 256 pref medium
fd00::/64 dev veth1b proto kernel metric 256 pref medium
default via fd00::1 dev veth1b src 2001:41d0:abcd:ef10::1 metric 1024 pref medium
```

Ping host link local interface:

```bash
debian@vm-1:~$ ping fd00::1
PING fd00::1(fd00::1) 56 data bytes
64 bytes from fd00::1: icmp_seq=1 ttl=64 time=0.051 ms
64 bytes from fd00::1: icmp_seq=2 ttl=64 time=0.070 ms
```

Ping host global interface:

```bash
debian@vm-1:~$ ping 2001:41d0:abcd:ef00::2
PING 2001:41d0:abcd:ef00::2(2001:41d0:abcd:ef00::2) 56 data bytes
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=1 ttl=64 time=0.050 ms
64 bytes from 2001:41d0:abcd:ef00::2: icmp_seq=2 ttl=64 time=0.080 ms
```

Finally, let's ping an external IPv6 from a VM:

```bash
debian@vm-1:~$ ping 2001:41d0:242:d300::
PING 2001:41d0:242:d300::(2001:41d0:242:d300::) 56 data bytes
64 bytes from 2001:41d0:242:d300::: icmp_seq=1 ttl=57 time=0.388 ms
64 bytes from 2001:41d0:242:d300::: icmp_seq=2 ttl=57 time=0.417 ms
```

Or, using a domain name:

```bash
debian@vm-1:~$ ping -6 proof.ovh.net
PING proof.ovh.net(2001:41d0:242:d300:: (2001:41d0:242:d300::)) 56 data bytes
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=1 ttl=57 time=0.411 ms
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=2 ttl=57 time=0.415 ms
```

///

/// details | From remote host

Let's check connectivity to our VM from outside the OVHcloud network:

```bash
ubuntu@remote-test:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=55 time=5.84 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=55 time=2.98 ms
```

And traceroute from a remote host (somewhere on the internet):

```bash
ubuntu@remote-test:~$ mtr -rc1 2001:41d0:abcd:ef10::1
Start: 2024-03-26T09:26:45+0000
HOST: remote-test                  				Loss%   Snt   Last   Avg  Best  Wrst StDev
...
...
  9.|-- 2001:41d0:abcd::2:5d        				0.0%     1    1.9   1.9   1.9   1.9   0.0
 10.|-- 2001:41d0:abcd:ef00::2      				0.0%     1    2.2   2.2   2.2   2.2   0.0
 11.|-- 2001:41d0:abcd:ef10::1      				0.0%     1    2.2   2.2   2.2   2.2   0.0
```

In this example: 

- hop 10 - our host's IP address
- hop 11 - our VM's IP address

///

## Multiple region locations vs. global vRack

OVHcloud's vRack technology enables organizations to connect servers across different locations as if they were located within the same data center. 
On the other hand, services like Additional IPv6 are regional, which means their functionality is linked to a particular location. 

Below, an architecture is presented for learning purposes with two different regions and different Additional IPv6 blocks announced from each. Also, there is a host presented with IP addresses from both networks as well as a suboptimal route example - a host in one region addressed with IPv6 address announced in another region:

![Multi-region vRack architecture with different IPv6 blocks](images/20240418-08.png){.thumbnail}

Please note that in such setups (with Additional IPv6 from more than single region) SLAAC **must be turned off in the whole vRack** (as this may lead to unpredictable results and losing connectivity randomly).

### Benefits

- **Enhanced Connectivity:** By leveraging a vRack network together with public IP blocks routed in multiple locations, businesses can ensure seamless communication around the globe, regardless of backend server's physical locations.
- **Move to cloud:** vRack technology can be a great enabler of early steps toward a "move-to-cloud" organizational strategy, unblocking some legacy applications that still require local network communication.

### Risks and Considerations

- **No SLAAC support in multi-location setups:** When there is more than one location acting in routing public IP traffic (both IPv4 and IPv6) into the same vRack, Stateless Address Autoconfiguration (SLAAC) **should not be used**. As an example of such situation, let's consider existing hosts using IPv4 addresses. Such hosts are becoming reconfigured automatically by SLAAC with IPv6 gateway set up from other region. Together with IPv6 prioritization over IPv4 by some Operating Systems this situation can lead to suboptimal routing or even total loss of connectivity for such hosts.

## Known Limitations

Understanding the constraints of using **Additional IPv6** within the **vRack** environment is crucial for effective network planning. Here are the key limitations to consider:

- **Additional IPv6 goes only with vRack**: Please note that Additional IPv6 addresses can only be configured with vRack-connected backends.
- **SLAAC limitations in multi-location setups**: Stateless Address Autoconfiguration (SLAAC) is not supported when there is public IP traffic (both IPv6 and IPv4) routed into vRack in multiple region locations.
- **Up to 128 hosts inside bridged subnet**: You can use up to 128 IP addresses directly on the vRack.
- **Up to 128 next-hop routes**: You can use up to 128 routes for routed subnets inside a vRack.
- **Public bandwidth cap**: Outbound traffic from OVHcloud to the Internet is capped at 5 Gbps per region location.
- **IPv6 block allocation limits**: Single Additional IPv6 block per vRack in a region location. Maximum of 3 blocks (/56) per region location.
- **Mobility of Additional IPv6 blocks**: Due to the hierarchical design of the IPv6 address space, Additional IPv6 blocks are region-specific. This means blocks cannot be transferred between regions, although they can be reassigned within any vRack-connected backend.
- **No direct VLAN 802.1Q support in vRack by Additional IPv6**: Configuration can only be done with native VLAN of your vRack network. For packet forwarding inside specific VLAN (of a vRack) a dedicated host on customer side will be needed.
- **At the moment, routing Additional IPv6 into vRack is not supported in APAC (Asia-Pacific) regions.**

## Go further

[Configuring the vRack on your Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Configuring Network Bridging](/pages/bare_metal_cloud/dedicated_servers/network_bridging)

Join our [community of users](/links/community).
