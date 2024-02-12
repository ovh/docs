# Working with IPv6 in Comparison to IPv4   

## Objective

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
