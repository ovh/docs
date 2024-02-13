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
### Gathering IPv6 block:
To gather an IPv6 block with OVH's services, particularly for use with a vRack, it's important to understand that the allocation is regional. This means the IPv6 block you receive will be tied to a specific region, influencing where public traffic enters your vRack backend. Here's how you can use OVH's APIv6 to perform this task:

**Prerequisites**
- Ensure you have an OVH API consumer key. If you don't have one, you'll need to generate it by following the instructions on the OVH API authentication page.
- Identify the region where you want your IPv6 block to be allocated. This is crucial as it determines the entry point of public traffic to your vRack.

**Sample APIv6 Commands**   
1. ***Authenticate with the OVH API:***
```bash
curl -XPOST -H "X-Ovh-Application: abc123xyz" -H "Content-type: application/json" \
"https://eu.api.ovh.com/1.0/auth/credential" \
-d '{"accessRules":[{"method":"GET","path":"/*"},{"method":"POST","path":"/*"},{"method":"PUT","path":"/*"},{"method":"DELETE","path":"/*"}]}'
````   
In this example, `abc123xyz` is a placeholder for your actual OVH application key. This command requests a new set of credentials (a consumer key) that will allow your application to make API calls under the specified access rules.    

Upon successful execution of the command, the OVH API will return a JSON object containing a consumerKey and a validationUrl. Here's an example of what the return might look like:
```json
{
  "validationUrl": "https://eu.api.ovh.com/auth/?credentialToken=dEf456GHi",
  "consumerKey": "tUv123wXyZ",
  "state": "pendingValidation"
}
```  
- `validationUrl` is the URL you need to visit to validate the consumer key. This step is crucial as it activates the key for use with the API.
- `consumerKey` is the key your application will use to authenticate subsequent API calls. Note that this key is in a `pendingValidation` state until you complete the validation process.
- `state` indicates the current state of the consumer key. In this case, it's `pendingValidation`, meaning you need to visit the `validationUrl` to activate it.

2. ***Request an IPv6 Block:***   
Assuming you've already authenticated and obtained your `consumerKey` from the previous step, here's how you might request an IPv6 block for your vRack:     
```bash
curl -XPOST -H "X-Ovh-Application: <application_key>" -H "X-Ovh-Consumer: <consumer_key>" -H "Content-type: application/json" \
"https://eu.api.ovh.com/1.0/vrack/<vrack_id>/ip" \
-d '{"type":"ipv6", "region":"<region>"}'
```   
In this command:   
- `abc123xyz` is the placeholder for your OVH application key.
- `tUv123wXyZ` is the consumer key you received from the authentication process.
- `vrack1234` is a hypothetical vRack ID. Replace this with your actual vRack ID.
- `GRA` represents the region where you want the IPv6 block allocated. OVHcloud has several data centers across the globe, so you would replace `GRA` with the specific region code that corresponds to your desired location.

Upon successful execution of the command, the OVH API will return information about the newly allocated IPv6 block. Here's an example of what the return might look like:

```json
{
  "task": {
    "id": 12345678,
    "function": "addIpToVrack",
    "status": "todo",
    "progress": 0
  },
  "ipv6Block": {
    "block": "2001:db8:abcd:0012::/64",
    "region": "GRA"
  }
}
```
The `task` object provides details about the request to add an IPv6 block to your vRack. It includes a task `id` you can use to track the progress, the `function` being performed, the current `status` of the task, and its `progress`.
   
The `ipv6Block` object contains information about the allocated IPv6 block, including the `block` itself (in this example, `2001:db8:abcd:0012::/64`) and the `region` where it's allocated.

3. ***Check the Status of Your IPv6 Block Request:***   
Given you have your `application_key`, `consumer_key`, `vrack_id`, and now an `ipv6_block_id` from the previous operation, here's how you might construct the command:
```bash
curl -XGET -H "X-Ovh-Application: abc123xyz" -H "X-Ovh-Consumer: tUv123wXyZ" \
"https://eu.api.ovh.com/1.0/vrack/vrack1234/ip/2001:db8:abcd:0012::/64"
```   
In this command:   
- `abc123xyz` is your OVH application key.
- `tUv123wXyZ` is the consumer key you received after authenticating.
- `vrack1234` is your hypothetical vRack ID.
- `2001:db8:abcd:0012::/64` represents the IPv6 block ID you're inquiring about. This is the block you requested to be added to your vRack.

The API call will return details about the IPv6 block request, including its current status. Here's an example of a possible response:

```json
{
  "status": "completed",
  "block": "2001:db8:abcd:0012::/64",
  "region": "GRA",
  "description": "My IPv6 Block",
  "assignedToVrack": "vrack1234"
}
```

- `status`: Indicates the current status of your request. In this example, it's `completed`, meaning the IPv6 block has been successfully allocated and added to your vRack.
- `block`: The specific IPv6 block that was requested.
- `region`: The region where the IPv6 block is allocated, matching your request.
- `description`: A human-readable description of the IPv6 block, which might be set during the allocation process or afterward.
- `assignedToVrack`: Confirms the vRack ID to which the IPv6 block has been assigned, ensuring it's part of the correct virtual rack setup.   

### Adding an IPv6 block to the vRack   
Adding an IPv6 block to your OVH vRack can be accomplished through the OVH APIv6, similar to how IPv4 blocks are currently added. This process can be configured in two primary modes: Bridge mode and Routed mode. Below are sample APIv6 commands for each setup, along with a brief note on additional host-side configurations that might be necessary for Routed mode.

**Prerequisites**
- Ensure you have an active OVH API consumer key. If not, generate one by following OVH's API authentication guidelines.
- Have your vRack ID and the IPv6 block ready for configuration.

**Adding an IPv6 Block to the vRack in Bridge Mode**     
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

**Adding an IPv6 Block to the vRack in Routed Mode**   
Routed mode configures the IPv6 block with specific routing rules, directing traffic through a designated gateway. This setup requires additional configuration on the host side to ensure proper routing of IPv6 traffic.   
APIv6 Setup Example for Routed Mode:   
```bash
curl -XPOST -H "X-Ovh-Application: abc123xyz" -H "X-Ovh-Consumer: tUv123wXyZ" -H "Content-type: application/json" \
"https://api.ovh.com/1.0/vrack/vrack1234/ip" \
-d '{"ipBlock":"2001:db8:abcd:0012::/64", "mode":"routed", "nextHop":"2001:db8:abcd:0012::1"}'
```
- `2001:db8:abcd:0012::1`: The IPv6 address of the gateway for the routed traffic.

**Expected Return from the Calls**   
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

**Additional Host-Side Configuration for Routed Mode**   
After adding the IPv6 block in Routed mode, configure each host within the vRack to use an IPv6 address from the block and set the specified gateway.   
Example Configuration on a Linux Host:   
```bash
sudo ip -6 addr add 2001:db8:abcd:0012::2/64 dev eth0
sudo ip -6 route add default via 2001:db8:abcd:0012::1
```   
The first command assigns an IPv6 address from the block to the eth0 interface.   
The second command sets the default gateway for IPv6 traffic.

   
### Configuration on host side    
Configuring your host to properly handle IPv6 addresses and route public traffic via the vRack interface is crucial for maintaining a secure and efficient network. Using the sample data provided, let's walk through the steps for manual IPv6 address configuration, enabling SLAAC, and setting up a separate IP routing table on a Linux-based system.

**Manual Configuration:**   
To manually assign an IPv6 address to a network interface:   
```bash
sudo ip -6 addr add 2001:db8::1/64 dev eth0
```
This command configures the interface `eth0` with the IPv6 address `2001:db8::1` and a subnet prefix length of 64.

**SLAAC Configuration:**   
For SLAAC to function, ensure your network interface accepts Router Advertisements (RAs):   
```bash
sudo sysctl -w net.ipv6.conf.eth0.accept_ra=1
```   
This enables `eth0` to automatically configure an IPv6 address using SLAAC, assuming RAs are present on your network.

**Creating a Separate IP Routing Table**   
A separate IP routing table is essential for directing public traffic through the vRack interface, preventing it from mingling with private network traffic. This segregation enhances both security and routing efficiency.
1. ***Define a New Routing Table:***   
Edit `/etc/iproute2/rt_tables` to add a new table:
```arduino
100    public
```
This entry creates a routing table named `public` with an ID of 100.   

2. ***Add Routes to the New Table:***   
Specify how traffic should be routed to the internet:    
```bash
sudo ip -6 route add default via 2001:db8::1 dev eth0 table public
```
This sets a default route in the `public` table, directing traffic through the gateway `2001:db8::1` on `eth0`.   

3. ***Rule to Use the New Table:***
Apply the new table to traffic from a specific IPv6 address:
```bash
sudo ip -6 rule add from 2001:db8::2/64 table public
```
This command configures the system to route traffic originating from `2001:db8::2/64` using the `public` routing table.

**Expected Outcome**   
After executing these commands, your host should be correctly configured to handle IPv6 addresses both manually and via SLAAC. Additionally, public internet traffic will be routed through the specified vRack interface, separate from your private network traffic, ensuring a clear delineation between public and private data flows.   
 
### Setup verification   
TODO
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
