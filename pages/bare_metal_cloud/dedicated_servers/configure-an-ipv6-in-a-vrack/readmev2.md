---
title: Configuring an IPV6 block in a vRack
excerpt: This guide will show you how to configure a block of public IPV6 addresses for use with the vRack.
updated: 2024-02-12
---

## Objective

As well as private IP addressing, the [vRack](https://www.ovh.com/ca/en/solutions/vrack/){.external} also allows you to route public IP traffic through your server's [vRack](https://www.ovh.com/ca/en/solutions/vrack/){.external} port using a public IPV6 address block.

**This guide will show you how to configure a block of public IPV6 addresses for use with the vRack.**


## Requirements

- A [vRack compatible server](https://www.ovh.com/ca/en/solutions/vrack/){.external}
- A [vRack](https://www.ovh.com/ca/en/solutions/vrack/){.external} service activated in your account
- Access to the OVHcloud [Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we){.external}

> [!warning]
> This feature might be unavailable or limited on servers of the [**Eco** product line](https://eco.ovhcloud.com/en/about/).
>
> Please visit our [comparison page](https://eco.ovhcloud.com/en/compare/) for more information.



## Introduction   
- **Overview of IPv4:** Recap the key points from the existing OVHcloud article, emphasizing the current use of IPv4 in vRack.
- **Introduction to IPv6:** Explain what IPv6 is and why it's becoming increasingly important, highlighting its advanced features compared to IPv4.

## Why Transition to IPv6?   
- **Limitations of IPv4:** Discuss the imminent exhaustion of IPv4 addresses, and the limitations in scalability and network efficiency.
- **Benefits of IPv6:** Elaborate on the larger address space of IPv6, its auto-configuration capabilities, improved routing and packet processing, and enhanced security protocols.

## Configuring IPv6 in a vRack   
- **Requirements:** List the prerequisites for setting up IPv6, including compatible hardware and software, and basic knowledge requirements.
- **Gathering IPv6 block:**
  - note that it's regional and will define location where public traffic reaches your vRack backend in the next step
  - APIv6 commands
- **Adding an IPv6 block to the vRack (similar to "Add the IP block to the vRack" in IPv4  today):**
  - APIv6 commands
  - Bridge mode
    - apiv6 setup example
  - Routed mode
    - apiv6 setup example / commands
    - info about additional config on host side for this to work (TBC)
- **Configuration on host side**
  - IP address:
    - manual
    - SLAAC (what setup to ensure it will work)
  - Separate IP routing table creation to handle public traffic via vRack interface
    - mention why it's needed
- **Setup verification**
    - mtr for bridged (from outside or inside ovh)
    - mtr for routed
 
## Multiple locations with single vRack
- mention this possibility 
- benefits
- mention risk and no-usage of SLAAC in this setup


## Use cases
- Attaching an IPv6 Prefix to vRack
- Using IPv6 Addresses Inside vRack
- Routing IPv6 Prefix via Next-Hop Address
- Using SLAAC for IP Allocation

## Known limitations
- vRack as the only backend
- SLAAC can't be used when in multi-location
- 3 prefixes per location (for 3 different vracks)
- 128 IP addresses inside the first bridged /64

## Go Further
- **Summary of Advantages:** Highlight the long-term benefits of transitioning to IPv6 for future network scalability and security.
- **Further Reading:** Provide links to detailed technical guides, IPv6 transition case studies, and advanced configuration tutorials.
- **Technical Resources:** List tools, software, and platforms that support IPv6, and where to find them.
