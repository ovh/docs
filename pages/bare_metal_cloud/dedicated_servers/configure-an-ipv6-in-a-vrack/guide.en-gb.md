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
IPv6, the latest version of the Internet Protocol, addresses the limitations of IPv4 and introduces a suite of features designed for the modern internet. Its introduction is a response to IPv4 address exhaustion and the growing need for more complex and secure internet architectures. Here's how IPv6 enhances networking capabilities, particularly within OVHcloud's vRack environment:

### Ability to Attach Additional IPv6 to vRack (Creates RtVrack)
- **IPv6 and vRack:** IPv6 allows for a significantly larger address space than IPv4. This vast space enables the attachment of additional IPv6 addresses to a vRack, facilitating complex networking setups without the constraints of address scarcity.
- **RtVrack Creation:** Attaching additional IPv6 addresses automatically creates a RtVrack (Routing vRack), enhancing the routing capabilities within the vRack. This feature allows for more efficient data flow and communication between servers, improving overall network performance.

### Ability to Enable Routed Mode with "Next-Hop Address"
- **Routed Mode:** IPv6 supports a routed mode operation, where traffic is directed through a specified "next-hop" address. This capability allows for more precise control over traffic flow, enabling better security and traffic management within the network.
- **Enhanced Network Management:** By specifying a next-hop address, administrators can fine-tune the network routing, ensuring that data packets follow the most efficient path through the network. This is particularly beneficial in complex network architectures, where managing traffic flow is critical.

### Dualstack: One Service for Both IPv4 and IPv6
- **Dualstack Capability:** IPv6's dualstack feature allows a single service within a vRack to operate in both IPv4 and IPv6 modes simultaneously. This ensures compatibility and seamless operation across different network types, facilitating a smoother transition from IPv4 to IPv6.
- **Unified Networking Solution:** The dualstack approach provides a unified networking solution, where one vRack can handle both IPv4 and IPv6 traffic. This simplifies network management and ensures that services remain accessible regardless of the IP version used by clients.

### Ability to Gather New IPv6 Prefix of Size /56 from OVHcloud per Location
- **IPv6 Prefix Allocation:** OVHcloud offers the ability to gather new IPv6 prefixes of size /56 per location, providing a substantial amount of IP addresses for deployment. This feature is crucial for scaling network resources and supporting a large number of internet-connected devices.
- **Flexible Network Planning:** With a /56 prefix, organizations can subnet into smaller /57 to /64 ranges for use within the vRack. This flexibility in subnetting allows for detailed network segmentation and efficient IP address management.

### Ability to Subnet into /57-/64 Ranges and Use Inside vRack
- **Subnetting Flexibility:** The large address space of IPv6 enables subnetting into /57 to /64 ranges, offering granular control over IP address allocation within the vRack. This capability is essential for creating segmented networks that cater to different services or departments.
- **Exception on Bridging:** An exception to note is that the first /64 range is always bridged, ensuring that the initial segment of the IPv6 space is readily accessible and can serve as a gateway or a default network segment for immediate use.

The introduction of IPv6 brings a host of advanced features and capabilities that significantly enhance networking within a vRack environment. From the ability to attach additional IPv6 addresses and enable routed modes, to supporting dualstack operations and offering flexible subnetting options, IPv6 addresses the current and future needs of complex network infrastructures. Its implementation in OVHcloud's vRack not only addresses IPv4 exhaustion but also paves the way for more secure, efficient, and scalable networks.


## Configuring IPv6 in a vRack   
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
OVH's vRack technology enables organizations to connect servers across different locations as if they were located within the same data center. This is particularly beneficial for businesses that require high availability, disaster recovery solutions, or simply wish to maintain a unified network across multiple sites.

### Benefits
- **Enhanced Connectivity:** By leveraging a single vRack across multiple locations, businesses can ensure seamless communication between servers, regardless of their physical location. This is crucial for applications that rely on real-time data synchronization or distributed computing.
- **Scalability:** As organizational needs grow, the network can easily expand to include new servers in different locations without the need for complex reconfiguration. This scalability supports business growth and technological expansion with minimal disruption.
- **Centralized Management:** Managing a network that spans multiple locations through a single vRack simplifies network administration. It allows for centralized control over security policies, access rules, and configurations, reducing the complexity and overhead associated with managing multiple disparate networks.

### Risks and Considerations
- **Dependency on vRack Infrastructure:** Relying on a single vRack for multi-location connectivity introduces a dependency on OVH's infrastructure. Any disruptions or limitations within the vRack network could potentially impact connectivity across all locations.
- **No SLAAC Support:** One notable limitation in this setup is the inability to use Stateless Address Autoconfiguration (SLAAC) for IPv6 addresses when the network spans multiple locations. This means that IP addresses must be managed through alternative methods, such as DHCPv6 or static assignment, which could increase administrative overhead for network administrators.
- **Network Complexity:** While a single vRack can simplify management in some respects, the underlying network architecture may become more complex, especially when integrating multiple sites with varying local network topologies. This complexity requires careful planning and expertise to ensure optimal performance and reliability.


## Use cases
- Attaching an IPv6 Prefix to vRack
- Using IPv6 Addresses Inside vRack
- Routing IPv6 Prefix via Next-Hop Address
- Using SLAAC for IP Allocation

## Known limitations
- **vRack as the only backend:** In the vRack environment, a key limitation of using IPv6 is that vRack is the exclusive backend network interface. This constraint limits network design flexibility, as all server communications and external connections are routed through vRack. Consequently, this necessitates meticulous network planning to meet connectivity needs and consider redundancy strategies, given the reliance on a singular backend network path.   
- **SLAAC can't be used when in multi-location:** In OVH's vRack environments that extend across multiple locations, SLAAC for IPv6 configuration is not supported, posing a significant limitation. This constraint requires administrators to manually manage and configure IPv6 addresses, increasing the complexity of network management. To address this, OVH users must adopt alternative methods such as DHCPv6 or static assignments for effective IP distribution across geographically dispersed networks.   
- **128 IP addresses inside the first bridged /64:** 
In OVH's vRack, the first /64 IPv6 subnet has a bridging limit of 128 IP addresses. This limitation impacts the number of devices that can be directly connected within this range, requiring careful network planning and IP address allocation to optimize connectivity for essential services or devices.
- **Public bandwidth:** outbound traffic (OVH→internet) is limited to **1Gbps**
- **Number of IPv6 blocks:** There is no global limitation, but user can get maximum of 3 x /56 prefixes per campus location, so total limit is N (campuses) x 3 x /56 prefix  
- **Mobility:** Neither the location of IPv6 prefix announcement nor the Additional IPv6 itself are mobile
  

## Go Further
- **Summary of Advantages:** Highlight the long-term benefits of transitioning to IPv6 for future network scalability and security.
- **Further Reading:** Provide links to detailed technical guides, IPv6 transition case studies, and advanced configuration tutorials.
- **Technical Resources:** List tools, software, and platforms that support IPv6, and where to find them.
