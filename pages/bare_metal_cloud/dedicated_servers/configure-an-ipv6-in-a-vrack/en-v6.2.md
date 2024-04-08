---
title: Configuring an IPV6 block in a vRack
excerpt: This guide will show you how to configure a block of public IPV6 addresses for use with the vRack.
updated: 2024-02-12
---

## Objective

The vRack network serves as a global private network bridging various OVHcloud products, enabling the creation of sophisticated network solutions. Beyond facilitating private connections, it also supports routing public IP addresses. 

**This guide simplifies configuring an additional IPv6 address block within vRack and its associated products.**



## Requirements

- A [vRack compatible server](https://www.ovh.com/ca/en/solutions/vrack/){.external}
- A [vRack](https://www.ovh.com/ca/en/solutions/vrack/){.external} service activated in your account
- Access to the OVHcloud [Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we){.external}

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en/compare/) for more information.

## Introduction   
IPv6 revolutionizes networking within OVHcloud's vRack by addressing IPv4's limitations and introducing features for the modern internet. Its rollout is a direct response to the need for more extensive, secure, and sophisticated internet architectures. Here are the key benefits of integrating IPv6 with vRack:

- **Flexibility for Advanced Networking**: IPv6 significantly increases the address space, providing the flexibility needed to scale infrastructure, manage failover scenarios and support larger solutions. This ensures that networks can grow and adapt without the space constraints of IPv4.

- **Hierarchical Routing and Segmentation**: IPv6 enables efficient hierarchical routing and logical infrastructure segmentation. This improves network manageability and security, ideal for reselling VMs with dedicated subnets or organising infrastructure into distinct segments.

- **Scalability at Scale**: IPv6's vast address space removes previous scalability limitations, allowing it to support large-scale requirements and the growing number of Internet-connected devices without infrastructure constraints.

By leveraging IPv6 within vRack, OVHcloud users can enjoy a more secure, efficient, and scalable network environment, ready to meet the demands of modern internet usage.






## Gathering new Additional IPv6 block
While requesting new Additional IPv6 block, it's important to note that the allocation is regional. This means the IPv6 block you receive will be tied to a specific region, defining where public traffic enters your vRack network (thus, where the gateway is located). 
To request an Additional IPv6 block during early Alpha product stage, please submit : https://survey.ovh.com/index.php/483751?lang=en

**<ins>Actions</ins>**  


<details>
<summary> <b>Check the Status of Your IPv6 Block Request</b> </summary>
<blockquote>

![image-2024-3-29_14-55-25](https://github.com/ovh/docs/assets/60412/20108fc8-a30e-481d-b470-beb2b99e7b7a)


</blockquote>
</details>


## Configuring IPv6 in a vRack (basic mode)

In this section we will present basic IPv6 setup for your vRack connected hosts.

![image](https://github.com/ovh/docs/assets/60412/3a8d7daa-7c55-4b4b-a090-2043d98b7e56)

### APIv6 setup

<details>
<summary> <b>Static IP configuration</b> </summary>
<blockquote>

Inside given /56 block, there is always first /64 subnet that is in bridged mode. You can view it this way:

![image-2024-3-29_14-54-24](https://github.com/ovh/docs/assets/60412/c3c67e28-205c-4ebe-910f-fefa5c018781)


To get more details:

![image-2024-3-29_14-53-36](https://github.com/ovh/docs/assets/60412/574f9e7a-3c6c-4aea-b232-0e1167a8285a)


</blockquote>
</details>
        
<details>
<summary> <b>Automatic IP configuration (SLAAC)</b> </summary>
<blockquote>

To simplify IP addressing inside your network, you may want to use SLAAC. It can be enabled per-bridged-subnet only and can be enabled with simple POST method:

![image-2024-3-29_14-48-7](https://github.com/ovh/docs/assets/60412/a26da7cd-9a9d-4841-b055-9997cf460adc)

Don't forget to configure SLAAC on your host machine.

</blockquote>
</details>

### Host-side commands
<details>
<summary> <b>Static IP configuration</b></b> </summary>
<blockquote>

In basic configuration, you may want to setup IP address and routing manually. This is also suggested setup when your machine acts as a router (XXX see "Configuring routed subnet") and has ipv6.forwarding mode enabled.

First, let's add an IP address on the vrack interface (in our example "eth1"):
``` bash
$ sudo ip address add 2001:41d0:abcd:ef00::2/64 dev eth1
```
(Please note that the first IP address in a block, 2001:41d0:abcd:ef00::1/64 is gateway IP address and must not be used for host addressing).

Optionally, if you want to use vRack interface as the main one for IPv6 traffic, default route can be configured the following way:
``` bash
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1/64 dev eth1
```

Finally, bring up the interface (and verify configured IP on it):
``` bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00::2/64 scope global static
```

</blockquote>
</details>
<details>
<summary> <b>Automatic IP configuration (SLAAC)</b></b> </summary>
<blockquote>

To use automatic configuration, please ensure you have configured your interface as the following:

First, let's allow our host to accept Router Advertisements (for autoconfiguration) on the vrack interface (in our example "eth1"):
``` bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=1
```
Important to note is that this setting will not work if ipv6.forwarding is enabled in your system. In such case please refer "XXX Configuring routed subnet setction" for details.
 
Then, simply bring up the interface:
``` bash
$ sudo ip link set up dev eth1
$ ip -6 addr list dev eth1
4: eth1: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    inet6 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166/64 scope global dynamic mngtmpaddr
       valid_lft 2322122sec preferred_lft 334922sec
```
After a moment (configuration must propagate), specific IPv6 address (with flags _global_ and _dynamic_) should be visible on the interface.

</blockquote>
</details>
        
### Setup verification
<details>
<summary> <b>Local</b> </summary>
<blockquote>
Most basic test is to ping local IP address on a host:

``` bash
#debian@ns2000052:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=64 time=0.043 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=64 time=0.034 ms
```

</blockquote>
</details>

<details>
<summary> <b>Remote</b> </summary>
<blockquote>
Next, let's verify connectivity from remote:
    
``` bash
#ubuntu@remote-test:~$ ping 2001:41d0:900:2100:fe34:97ff:feb0:c166
PING 2001:41d0:900:2100:fe34:97ff:feb0:c166(2001:41d0:900:2100:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=1 ttl=55 time=7.23 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=2 ttl=55 time=6.90 ms
64 bytes from 2001:41d0:900:2100:fe34:97ff:feb0:c166: icmp_seq=3 ttl=55 time=6.92 ms
```

</blockquote>
</details>    



## Configuring an IPv6 in a vRack for routed-mode
In this section we will present more advanced IPv6 setup, where your vRack connected hosts are acting as a routers for hosted Virtual Machines. Such VMs have delegated subnets from the main IPv6 block (presented with an orange color on a schema below).

![image](https://github.com/ovh/docs/assets/60412/abe59737-c29f-4f71-8907-ea33549e780e)

The traffic path is as follows: inbound traffic to a given VM (with specified subnet) is routed through the customer's vRack, first to a specified host (with a next-hop address), then using a local-link (or vSwitch - black link fd00::/64 on a diagram) to the particular VM.
Traffic comming back from such VM should use default route via first part of the local link (black one, fd00::1), then (possibly default) route from a host to it's gateway.

### APIv6 commands

<details>
<summary> <b>Define routed subnet</b> </summary>
<blockquote>

To create a routed subnet, we must first define:
- subnet in CIDR notation (size between /57 and /64)
- next-hop address (so the host's IPv6 address)

Please note that given subnet can not overlap with any other subnet defined and next-hop address must belong to the first part (bridged /64 subnet) of your Additional IPv6 prefix.

Please use the call as follows in the example below:

![image-2024-3-29_14-46-53](https://github.com/ovh/docs/assets/60412/c585d58c-3e5d-4a1c-be00-68267df881bd)

In the example above, we define routed subnet at a size of 2001:41d0:abcd:ef10::/60 which will be delegated to the VM hosted on: 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166

</blockquote>
</details>




### Host-side configuration

<details>
<summary> <b>Static IP configuration for a host (recommended)</b> </summary>
<blockquote>
When hosting Virtual Machines, we strongly recommend to use static configuration on your host.

Setup an IPv6 address, bring up the interface and (optionally) add default route over the vRack interface:
``` bash
$ sudo ip addr add 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166/64 dev eth1
$ sudo ip link set dev eth1 up
$ sudo ip -6 route add default via 2001:41d0:abcd:ef00::1 dev eth1
```

</blockquote>
</details>

<details>
<summary> <b>Automatic IP configuration (SLAAC) for a host</b> </summary>
<blockquote>
In some cases, you may want to configure your interfaces with SLAAC and IP forwarding together. 
Please note this bring additional risks (such as loosing access not only to a host but also to all VMs) and is not recommended.

Ensuring IPv6 forwarding is enabled:
``` bash
$ sudo sysctl -w net.ipv6.conf.all.forwarding=1
```

Configuring Router Advertisements to be accepted (on vRack eth1 interface in our example):
``` bash
$ sudo sysctl -w net.ipv6.conf.eth1.accept_ra=2
```

</blockquote>
</details>


<details>
<summary> <b>Routed subnet configuration on a host and inside VM</b> </summary>
<blockquote>

To ensure that our host knows what to do with packets addressed to the new routed subnet (that will be on a VM), we must add specific route for it.
In our example this is veth link with fd00::2/64 address inside a VM we will use for a routing.
Please note that this is very specific to the Hypervisor installed (it can be some of the vSwitch or veth interfaces). Please refer specific hypervisor networking guide for this setup.
``` bash
$ sudo ip -6 route add 2001:41d0:abcd:ef10::/60 via fd00::2
```

</blockquote>
</details>


<details>
<summary> <b>Routed subnet configuration inside a VM</b> </summary>
Again, please note that used link between host and VMs is very specific to the Hypervisor installed (it can be some of the vSwitch or veth interfaces). Please refer specific hypervisor networking guide for this setup.

<blockquote>
Add our routed IP block inside a VM to ensure it can accept packets:
    
``` bash
debian@vm-1:~$ sudo ip address add 2001:41d0:abcd:ef10::1/60 dev lo
```

Add default route on a VM to ensure traffic can get back out of it:
``` bash
debian@vm-1:~$ sudo ip -6 route add default via fd00::1
```

</blockquote>
</details>


### Setup verification

<details>
<summary> <b>Local, on a host</b> </summary>
<blockquote>

Ping from the host into the container (using local link):
``` bash
debian@host:~$ ping fd00::2
PING fd00::2(fd00::2) 56 data bytes
64 bytes from fd00::2: icmp_seq=1 ttl=64 time=0.053 ms
64 bytes from fd00::2: icmp_seq=2 ttl=64 time=0.071 ms
```

Ping from the host into the container (using routed subnet):
``` bash
debian@host:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=64 time=0.054 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=64 time=0.073 ms
```

Check route to our /60 subnet on a host:
``` bash
debian@host:~$ ip -6 route get 2001:41d0:abcd:ef10::1
2001:41d0:abcd:ef10::1 from :: via fd00::2 dev veth1a src fd00::1 metric 1024 pref medium
```

</blockquote>
</details>

<details>
<summary> <b>Local, on a VM</b> </summary>
<blockquote>

First, check routing table:
``` bash
debian@vm-1:~$ ip -6 route show
2001:41d0:abcd:ef10::/60 dev lo proto kernel metric 256 pref medium
fd00::/64 dev veth1b proto kernel metric 256 pref medium
default via fd00::1 dev veth1b src 2001:41d0:abcd:ef10::1 metric 1024 pref medium
```

Ping host link local interface:
``` bash
debian@vm-1:~$ ping fd00::1
PING fd00::1(fd00::1) 56 data bytes
64 bytes from fd00::1: icmp_seq=1 ttl=64 time=0.051 ms
64 bytes from fd00::1: icmp_seq=2 ttl=64 time=0.070 ms
```

Ping host global interface:
``` bash
debian@vm-1:~$ ping 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166
PING 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166(2001:41d0:abcd:ef00:fe34:97ff:feb0:c166) 56 data bytes
64 bytes from 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166: icmp_seq=1 ttl=64 time=0.050 ms
64 bytes from 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166: icmp_seq=2 ttl=64 time=0.080 ms
```

Finally, let's ping external IPv4 from a VM:
``` bash
debian@vm-1:~$ ping 2001:41d0:242:d300::
PING 2001:41d0:242:d300::(2001:41d0:242:d300::) 56 data bytes
64 bytes from 2001:41d0:242:d300::: icmp_seq=1 ttl=57 time=0.388 ms
64 bytes from 2001:41d0:242:d300::: icmp_seq=2 ttl=57 time=0.417 ms
```

Or, using domain name:
``` bash
debian@vm-1:~$ ping -6 proof.ovh.net
PING proof.ovh.net(2001:41d0:242:d300:: (2001:41d0:242:d300::)) 56 data bytes
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=1 ttl=57 time=0.411 ms
64 bytes from 2001:41d0:242:d300:: (2001:41d0:242:d300::): icmp_seq=2 ttl=57 time=0.415 ms
```


</blockquote>
</details>

<details>
<summary> <b>From remote host</b> </summary>
<blockquote>
Let's check connectivity to our VM from outside of OVHcloud network:

``` bash
ubuntu@remote-test:~$ ping 2001:41d0:abcd:ef10::1
PING 2001:41d0:abcd:ef10::1(2001:41d0:abcd:ef10::1) 56 data bytes
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=1 ttl=55 time=5.84 ms
64 bytes from 2001:41d0:abcd:ef10::1: icmp_seq=2 ttl=55 time=2.98 ms
```

And traceroute from remote host (somewhere in the internet):
``` bash
ubuntu@remote-test:~$ mtr -rc1 2001:41d0:abcd:ef10::1
Start: 2024-03-26T09:26:45+0000
HOST: remote-test                  				Loss%   Snt   Last   Avg  Best  Wrst StDev
...
...
  9.|-- 2001:41d0:abcd::2:5d        				0.0%     1    1.9   1.9   1.9   1.9   0.0
 10.|-- 2001:41d0:abcd:ef00:fe34:97ff:feb0:c166     0.0%     1    2.2   2.2   2.2   2.2   0.0
 11.|-- 2001:41d0:abcd:ef10::1      				0.0%     1    2.2   2.2   2.2   2.2   0.0
```
In this example: 
- hop 10 - our host's IP
- hop 11 - our VM

</blockquote>
</details>

## Multiple locations with single vRack
![image](https://github.com/ovh/docs/assets/60412/c8789220-2b6c-4245-bada-94e3854be8f7)
OVH's vRack technology enables organizations to connect servers across different locations as if they were located within the same data center. This is particularly beneficial for businesses that require high availability, disaster recovery solutions, or simply wish to maintain a unified network across multiple sites.

### Benefits
- **Enhanced Connectivity:** By leveraging a single vRack across multiple locations, businesses can ensure seamless communication between servers, regardless of their physical location. This is crucial for applications that rely on real-time data synchronization or distributed computing.
- **Scalability:** As organizational needs grow, the network can easily expand to include new servers in different locations without the need for complex reconfiguration. This scalability supports business growth and technological expansion with minimal disruption.
- **Centralized Management:** Managing a network that spans multiple locations through a single vRack simplifies network administration. It allows for centralized control over security policies, access rules, and configurations, reducing the complexity and overhead associated with managing multiple disparate networks.

### Risks and Considerations
- **Dependency on vRack Infrastructure:** Relying on a single vRack for multi-location connectivity introduces a dependency on OVH's infrastructure. Any disruptions or limitations within the vRack network could potentially impact connectivity across all locations.
- **No SLAAC Support:** One notable limitation in this setup is the inability to use Stateless Address Autoconfiguration (SLAAC) for IPv6 addresses when the network spans multiple locations. This means that IP addresses must be managed through alternative methods, such as DHCPv6 or static assignment, which could increase administrative overhead for network administrators.
- **Network Complexity:** While a single vRack can simplify management in some respects, the underlying network architecture may become more complex, especially when integrating multiple sites with varying local network topologies. This complexity requires careful planning and expertise to ensure optimal performance and reliability.


## Known Limitations
Understanding the constraints of using IPv6 within the vRack environment is crucial for effective network planning. Here are the key limitations to consider:
- **vRack as the Sole Backend**: The exclusive use of vRack as the backend network interface restricts design flexibility. All internal and external server communications must route through vRack, necessitating careful planning for connectivity and redundancy due to this dependency.
- **SLAAC Limitations in Multi-Location Setups**: Stateless Address Autoconfiguration (SLAAC) is not supported for IPv6 across multiple vRack locations, presenting a challenge for network administration. This requires manual IPv6 address management, with DHCPv6 or static assignments as alternative strategies for IP distribution in dispersed networks.
- **First /64 Bridging Cap**: The initial /64 IPv6 subnet in a vRack is limited to bridging 128 IP addresses, affecting the direct connection capacity. Strategic network and IP address planning are essential to ensure optimal connectivity for critical services and devices.
- **Public Bandwidth Cap**: Outbound traffic from OVH to the internet is capped at 1Gbps per location, impacting data transfer rates for external communications.
- **IPv6 Block Allocation Limit**: Users can obtain up to three /56 IPv6 prefixes per campus location, leading to a maximum allocation based on the number of campuses (N) x 3 x /56 prefixes.
- **Mobility of IPv6 Blocks**: Due to the hierarchical design of the IPv6 address space, additional IPv6 blocks are region-specific. This means blocks cannot be transferred between regions, although they can be reassigned within any vRack-connected backend. This regional specificity requires thoughtful deployment and management to align with your network's geographical distribution and connectivity needs.

  

## Go Further   
Join our community of users on <https://community.ovh.com/en/>.


UNDER THIS IS THE PREVIOUS VERSION, DON'T CARE ABOUT IT
---

---

---



### Adding an IPv6 block to the vRack   
Adding an IPv6 block to your OVH vRack can be accomplished through the OVH APIv6, similar to how IPv4 blocks are currently added. This process can be configured in two primary modes: Bridge mode and Routed mode. Below are sample APIv6 commands for each setup, along with a brief note on additional host-side configurations that might be necessary for Routed mode.

**<ins>Prerequisites</ins>**
- Ensure you have an active OVH API consumer key. If not, generate one by following OVH's API authentication guidelines.
- Have your vRack ID and the IPv6 block ready for configuration.

**<ins>Actions</ins>**


<details>
<summary> <b>Adding in Bridge Mode</b> </summary>
<blockquote>

In Bridge mode, the IPv6 block is directly associated with the vRack. This setup allows devices connected to the vRack to communicate using IPv6 addresses from this block, simplifying network configuration by eliminating the need for specific routing rules.  

APIv6 Setup Example for Bridge Mode:   

```bash
curl -XPOST -H "X-Ovh-Application: abc123xyz" -H "X-Ovh-Consumer: tUv123wXyZ" -H "Content-type: application/json" \
"https://api.ovh.com/1.0/vrack/vrack1234/ip" \
-d '{"ipBlock":"2001:db8:abcd:0012::/64", "mode":"bridge"}'
```

- `abc123xyz`: Your OVH application key.
- `tUv123wXyZ`: The consumer key obtained from the authentication process.
- `vrack1234`: Your vRack ID.
- `2001:db8:abcd:0012::/64`: The IPv6 block you wish to add in Bridge mode.

</blockquote>
</details>


<details>
<summary> <b>Adding in Routed Mode</b> </summary>
<blockquote>

Routed mode configures the IPv6 block with specific routing rules, directing traffic through a designated gateway. This setup requires additional configuration on the host side to ensure proper routing of IPv6 traffic.   

APIv6 Setup Example for Routed Mode:   

```bash
curl -XPOST -H "X-Ovh-Application: abc123xyz" -H "X-Ovh-Consumer: tUv123wXyZ" -H "Content-type: application/json" \
"https://api.ovh.com/1.0/vrack/vrack1234/ip" \
-d '{"ipBlock":"2001:db8:abcd:0012::/64", "mode":"routed", "nextHop":"2001:db8:abcd:0012::1"}'
```

- `2001:db8:abcd:0012::1`: The IPv6 address of the gateway for the routed traffic.

</blockquote>
</details>


<details>
<summary> <b>Expected Return from the Calls</b> </summary>
<blockquote>

For both Bridge and Routed mode setups, the OVH API will return a response indicating the success of the operation and details about the IPv6 block configuration.    

```json
{
  "message": "IPv6 block added to vRack successfully",
  "mode": "bridge/routed",
  "ipBlock": "2001:db8:abcd:0012::/64",
  "nextHop": "2001:db8:abcd:0012::1" // Only for routed mode
}
```

- `message`: A confirmation message indicating the successful addition of the IPv6 block to the vRack.
- `mode`: Indicates whether the block was added in Bridge or Routed mode.
- `ipBlock`: The IPv6 block that was added.
- `nextHop`: Specified only for Routed mode, indicating the gateway IPv6 address.

</blockquote>
</details>


<details>
<summary> <b>Additional Host-Side Configuration for Routed Mode</b> </summary>
<blockquote>

After adding the IPv6 block in Routed mode, configure each host within the vRack to use an IPv6 address from the block and set the specified gateway.   

Example Configuration on a Linux Host:   

```bash
sudo ip -6 addr add 2001:db8:abcd:0012::2/64 dev eth0
sudo ip -6 route add default via 2001:db8:abcd:0012::1
```

The first command assigns an IPv6 address from the block to the eth0 interface.   
The second command sets the default gateway for IPv6 traffic.

</blockquote>
</details>

---
   
### Configuration on host side    
Configuring your host to properly handle IPv6 addresses and route public traffic via the vRack interface is crucial for maintaining a secure and efficient network. Using the sample data provided, let's walk through the steps for manual IPv6 address configuration, enabling SLAAC, and setting up a separate IP routing table on a Linux-based system.

**<ins>Actions</ins>**

<details>
<summary> <b>Manual Configuration</b> </summary>
<blockquote>

To manually assign an IPv6 address to a network interface:   

```bash
sudo ip -6 addr add 2001:db8::1/64 dev eth0
```

This command configures the interface `eth0` with the IPv6 address `2001:db8::1` and a subnet prefix length of 64.

</blockquote>
</details>



<details>
<summary> <b>SLAAC Configuration</b> </summary>
<blockquote>

For SLAAC to function, ensure your network interface accepts Router Advertisements (RAs):  

```bash
sudo sysctl -w net.ipv6.conf.eth0.accept_ra=1
```

This enables `eth0` to automatically configure an IPv6 address using SLAAC, assuming RAs are present on your network.


</blockquote>
</details>


<details>
<summary> <b>Creating a Separate IP Routing Table</b> </summary>
<blockquote>

A separate IP routing table is essential for directing public traffic through the vRack interface, preventing it from mingling with private network traffic. This segregation enhances both security and routing efficiency.


<blockquote>
<b><i>1. Define a New Routing Table:</i></b>
    
Edit `/etc/iproute2/rt_tables` to add a new table:

```arduino
100    public
```

This entry creates a routing table named `public` with an ID of 100.   
</blockquote>


<blockquote>
<b><i>2. Add Routes to the New Table:</i></b>
    
Specify how traffic should be routed to the internet:    

```bash
sudo ip -6 route add default via 2001:db8::1 dev eth0 table public
```

This sets a default route in the `public` table, directing traffic through the gateway `2001:db8::1` on `eth0`.   
</blockquote>

<blockquote>
<b><i>3. Rule to Use the New Table:</i></b>
    
Apply the new table to traffic from a specific IPv6 address:

```bash
sudo ip -6 rule add from 2001:db8::2/64 table public
```

This command configures the system to route traffic originating from `2001:db8::2/64` using the `public` routing table.
</blockquote>

</blockquote>
</details>



---

### Setup verification   
To verify your network setup, whether it's configured in bridged or routed mode, `mtr` (My Traceroute) is a powerful network diagnostic tool that combines the functionality of the `traceroute` and `ping` programs. It provides a continuously updated list of routers traversed by your packets to reach a destination and the latency to each router. This can be particularly useful for diagnosing network issues and verifying the path and performance of your traffic.   

**<ins>Actions</ins>**

<details>
<summary> <b>Setup Verification with `mtr`</b> </summary>
<blockquote>

***MTR for Bridged Mode***   
To verify a bridged network setup, use mtr to analyze the path packets take through the vRack. This mode doesn't involve specific routing beyond the local network configuration.
```bash
mtr -rw 2001:db8::2
```
This command checks the route to `2001:db8::2`, an IPv6 address within your vRack configured in bridged mode. The `-rw` option runs `mtr` in report mode for concise output.

***MTR for Routed Mode***   
For a routed setup, `mtr` can trace the path packets take to an external destination, helping verify that your routing configurations are effective.   
```bash
mtr -rw google.com
```
This traces the route from a host within your vRack in routed mode to `google.com`, showing each hop and latency.


    
</blockquote>
</details>


<details>
<summary> <b>Expected Return from the Call</b> </summary>
<blockquote>

***For Bridged Mode to `2001:db8::2:`***
```yaml
Start: 2024-01-01T12:00:00
HOST: your-server              Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- 2001:db8::1              0.0%    10    0.5   0.6   0.4   0.8   0.1
  2.|-- 2001:db8::2              0.0%    10    1.2   1.4   1.0   2.0   0.3
```
***For Routed Mode to `google.com`:***   
```yaml
Start: 2024-01-01T12:00:00
HOST: your-server              Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- 2001:db8::1              0.0%    10    0.5   0.6   0.4   0.8   0.1
  2.|-- [external-router]        0.0%    10   10.2  10.5   9.8  11.2   0.4
  ... additional hops ...
```
    
</blockquote>
</details>



<details>
<summary> <b>Interpreting `mtr` Results</b> </summary>
<blockquote>

- **Consistent Latencies** across hops suggest a stable connection. Significant fluctuations may indicate congestion or other network issues.
- **Unexpected Hops** or routes not planned in your network design could point to misconfigurations or potential security concerns.
- **Packet Loss** at any hop requires further investigation to identify and resolve network problems.   

`mtr` offers a real-time view of your network's performance, making it invaluable for troubleshooting and ensuring optimal network operation. Remember, the output will vary based on your specific network configuration, the paths your packets take, and the current state of the network. Regular monitoring and analysis can help maintain network health and performance.
 

</blockquote>
</details>

