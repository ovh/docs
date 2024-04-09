---
title: Configuring an IPV6 block in a vRack
excerpt: This guide will show you how to configure a block of public IPV6 addresses for use with the vRack.
updated: 2024-04-09
---

## Objective

The vRack network serves as a global private network bridging various OVHcloud products, enabling the creation of sophisticated network solutions. Beyond facilitating private connections, it also supports routing public IP addresses. 

**This guide focuses on Additional IPv6 address block configuration within a vRack network.**


## Introduction   
IPv6 revolutionizes networking within OVHcloud's vRack by addressing IPv4's limitations and introducing features for the modern internet. Its rollout is a direct response to the need for more extensive, secure, and sophisticated internet architectures. Here are the key benefits of integrating IPv6 with vRack:

- **Flexibility for Advanced Networking**: IPv6 significantly increases the address space, providing the flexibility needed to scale infrastructure, manage failover scenarios and support larger solutions. This ensures that networks can grow and adapt without the space constraints of IPv4.

- **Hierarchical Routing and Segmentation**: IPv6 enables efficient hierarchical routing and logical infrastructure segmentation. This improves network manageability and security, ideal for reselling VMs with dedicated subnets or organising infrastructure into distinct segments.

- **Scalability at Scale**: IPv6's vast address space removes previous scalability limitations, allowing it to support large-scale requirements and the growing number of Internet-connected devices without infrastructure constraints.

By leveraging IPv6 within vRack, OVHcloud users can enjoy a more secure, efficient, and scalable network environment, ready to meet the demands of modern internet usage.


## Requirements

- A [vRack](https://www.ovh.com/ca/en/solutions/vrack/){.external} service activated in your account
- A [vRack compatible server](https://www.ovh.com/ca/en/solutions/vrack/){.external} attached to your vRack network
- Access to the OVHcloud [Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we){.external}

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en/compare/) for more information.



## Gathering new Additional IPv6 block
While requesting new Additional IPv6 block, it's important to note that the allocation is regional. This means the IPv6 block you receive will be tied to a specific region, defining where public traffic enters your vRack network (thus, where the gateway is located). 
To request an Additional IPv6 block during early Alpha product stage, please submit : https://survey.ovh.com/index.php/483751?lang=en

**<ins>Actions</ins>**  


<details>
<summary> <b>Check the Status of Your IPv6 Block Request</b> </summary>
<blockquote>
    
We can check services eligible for configuration using this GET API call:
![image](https://github.com/ovh/docs/blob/ipv6_in_vrack/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack/images/get-eligibleServices.png)
New IPv6 block is there, let's configure it now!

</blockquote>
</details>


## Configuring IPv6 in a vRack (basic mode)

In this section we will present basic IPv6 setup for your vRack connected hosts.
![image](https://github.com/ovh/docs/assets/60412/04b55646-15f9-4ecd-86f3-cea51fa7421e)

Example above shows two hosts with their vRack-side interfaces configured with IPv6 public addresses. One host is configured manually, while the other has an IP address assigned automatically using SLAAC. All IP addresses belongs to the first /64 subnet from given public /56 Additional IPv6 block. Both leverage vRack interface for public IPv6 connectivity.


### APIv6 setup

<details>
<summary> <b>Attributing Additional IPv6 to a vRack</b> </summary>
<blockquote>
Delivered IPv6 block (as seen previously with /eligibleServices API call), can now be added to the vRack network configuration using this POST method:

![image](https://github.com/ovh/docs/blob/ipv6_in_vrack/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack/images/post-ipv6.png)

It can be also verified this way:
![image-2024-3-29_14-55-25](https://github.com/ovh/docs/assets/60412/20108fc8-a30e-481d-b470-beb2b99e7b7a)
Now, we see our block configured with a vRack. Next step is to configure your host or VMs.

</blockquote>
</details>

<details>
<summary> <b>Static IP configuration</b> </summary>
<blockquote>

Once Additional IPv6 /56 block is attributed to a vRack network, there is always first /64 subnet that is bridged with it. That means, you can easily use such IPs on your hosts. 
Let's check exactly which subnet is bridged::

![image-2024-3-29_14-54-24](https://github.com/ovh/docs/assets/60412/c3c67e28-205c-4ebe-910f-fefa5c018781)


To get more details:

![image-2024-3-29_14-53-36](https://github.com/ovh/docs/assets/60412/574f9e7a-3c6c-4aea-b232-0e1167a8285a)
Notice that IP autoconfiguration (SLAAC) is turned off by default.

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

In a basic configuration, you may want to setup an IP address and routing manually. This is also suggested way when your machine acts as a router (see [configuring routed subnet](#configuring-an-ipv6-in-a-vrack-for-routed-mode)) and has ipv6.forwarding mode enabled.

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
Important to note is that this setting will not work if ipv6.forwarding is enabled in your system. In such case please refer to [Automatic IP configuration for routed subnet](#host-side-configuration) for details.
 
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

## Multiple region locations vs. global vRack
OVHcloud's vRack technology enables organizations to connect servers across different locations as if they were located within the same data center. 
On the other hand, services like Additional IPv6 are regional, which means their functionality is linked to a particular location. 

Below, an architecture is presented for learning purposes with two different regions and different Additional IPv6 blocks announced from each. Also, there is a host presented with IP addresses from both networks as well as suboptimal route example - a host in one region addressed with IPv6 address announced in another region:
![image](https://github.com/ovh/docs/assets/60412/c8789220-2b6c-4245-bada-94e3854be8f7)

Please note that in such setups (with Additional IPv6 from more than single region) SLAAC **must be turned off in whole vRack** (as this may lead to unpredictable results and loosing connectivity randomly).


### Benefits
- **Enhanced Connectivity:** By leveraging a vRack network together with public IP blocks routed in multiple locations, businesses can ensure seamless communication around the globe, regardless of backend server physical location.
- **Move to cloud:** vRack technology can be a great enabler on early steps of "move-to-cloud" organizational strategy, unblocking some legacy applications that still require local network communication.

### Risks and Considerations
- **No SLAAC support in multi-location setups:** When there is more than one location acting in routing public IP traffic (both IPv4 and IPv6) into the same vRack, Stateless Address Autoconfiguration (SLAAC) **should not be used**. As an example of such situation, let's consider existing hosts using IPv4 addresses. Such hosts are becoming reconfigured automatically by SLAAC with IPv6 gateway setup from other region. Together with IPv6 prioritization over IPv4 by some Operating Systems this situation can lead to suboptimal routing or even total loss of connectivity for such hosts.


## Known Limitations
Understanding the constraints of using **Additional IPv6** within the **vRack** environment is crucial for effective network planning. Here are the key limitations to consider:
- **Additional IPv6 goes only with vRack**: Please note that Additional IPv6 addresses can only be configured with vRack-connected backends.
- **SLAAC limitations in multi-location setups**: Stateless Address Autoconfiguration (SLAAC) is not supported when there is public IP traffic (both IPv6 and IPv4) routed into vRack in multiple region locations.
- **Up to 128 hosts inside bridged subnet**: You can use up to 128 IP addresses directly on vRack.
- **Up to 128 next-hop routes**: You can use up to 128 routes for routed subnets inside a vRack.
- **Public bandwidth cap**: Outbound traffic from OVHcloud to the internet is capped at 1Gbps per location.
- **IPv6 block allocation limits**: Users can obtain up to three /56 Additional IPv6 blocks per region location.
- **Mobility of Additional IPv6 blocks**: Due to the hierarchical design of the IPv6 address space, Additional IPv6 blocks are region-specific. This means blocks cannot be transferred between regions, although they can be reassigned within any vRack-connected backend. 
  

## Go Further   
Join our community of users on <https://community.ovh.com/en/>.
