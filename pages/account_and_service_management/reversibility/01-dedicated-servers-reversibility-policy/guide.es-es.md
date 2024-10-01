---
title: Dedicated Servers Reversibility Policy (EN)
updated: 2021-05-05
---

## Objective

This document is the reversibility policy for the **[Dedicated Servers](https://www.ovhcloud.com/es-es/bare-metal/)** product range.

This policy aims at implementing the global reversibility principles and requirements of [SWIPO IaaS Code of Conduct for Cloud Providers](https://swipo.eu/download-section/copyrighted-downloads/){.external}.

## Features map

Dedicated Servers features are divided into three categories:

- The [core features](#core-features) for which we guarantee the ability to migrate
- The [OVHcloud implementation](#ovhcloud-implementation), whose migration will require adaptations to a new environment.
- [Specific functionalities](#specific-functionalities), whose migration as such is impossible to guarantee as they are tied to OVHcloud environment or specific developments.

### Core features <a name="core-features"></a>

|Feature|Description|Available formats|Migration model|Available documentation|
|---|-----|---|-----|-----|
|Supplying dedicated servers|Supplying different ranges of high-performance dedicated servers|N/A|**Inbound migration**: Order a dedicated server in the [OVHcloud Control Panel](/links/manager), backup and migrate data, re-install software (or use automated installation).<br><br>**Outbound migration**: Order dedicated servers, backup and migrate data, re-install software|[Getting started with a dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)|
|Backup storage|Backup storage delivered by default with every dedicated server|NFS/CIFS/FTP|**Inbound migration**: Migrate data on your dedicated servers and activate backup storage on those servers through the [OVHcloud Control Panel](/links/manager).<br><br>**Outbound migration**: enable access from outside your account through OVHcloud API, then migrate data using standard file transfer protocols, such as FTP.|[Using backup storage on a dedicated server](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage)|
|Operating systems and software installed on dedicated server|Automatically install operating systems, databases, administration interfaces and virtualization software on a new dedicated server.<br>See [here](https://www.ovhcloud.com/es-es/bare-metal/os/) the complete list.|For customized images used with "bring your own image": <br>- Boot type: **uefi** or **legacy**<br>- Partition type: **MBR** or **GPT**<br>- Image format: **qcow2** or **raw**|**Inbound migration**: Order dedicated servers and choose operating systems/software to install on the [OVHcloud Control Panel](/links/manager). Alternatively, use the"bring your own image" feature to install customized images.<br><br>**Outbound migration**: Export your image and install on another dedicated server.|[Installing or reinstalling your dedicated server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#installing-or-reinstalling-your-dedicated-server)<br><br>[How to use the Bring Your Own Image feature](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image)|

### OVHcloud implementation <a name="ovhcloud-implementation"></a>

|Feature|Description|Available formats|Migration model|Available documentation|
|---|-----|---|-----|-----|
|Floating IPs|Additional IP that can be switched from one service to another in the same datacenter.|IPv4, IPv6|**Inbound migration**: Plan the network architecture, configure the Floating IPs in the [OVHcloud Control Panel](/links/manager) or through OVHcloud API.<br><br>**Outbound migration**: Record the configured setup in the [OVHcloud Control Panel](/links/manager) and configure a similar setup at another provider.|[Moving an Additional IP](/pages/bare_metal_cloud/dedicated_servers/move-failover-ip)<br><br>[Assigning a virtual MAC to an Additional IP](/pages/bare_metal_cloud/dedicated_servers/network_virtual_mac)|
|vRack|vRack, or Virtual rack, is a private VLAN technology that enables connection between OVHcloud services.|N/A|**Inbound migration**: Plan the network architecture, Add your servers to the vRack, Configure network interfaces.<br><br>**Outbound migration**: Record the network architecture and reproduce it with VLAN.|[Configuring the vRack on your dedicated servers](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)|

### Specific functionalities <a name="specific-functionalities"></a>

|Feature|Description|Available formats|Migration model|Available documentation|
|---|-----|---|-----|-----|
|Load Balancing|Load Balancers are network devices that distribute requests across services and datacenters to ensure that there is no overload.|N/A|**Inbound migration**: Purchase and activation through [OVHcloud Control Panel](/links/manager).<br><br>**Outbound migration**: Order and set up a load balancer with the new provider.|**Inbound migration**: [OVHcloud Load Balancers](https://www.ovh.co.uk/solutions/load-balancer/)<br><br>**Outbound migration**: N/A|
|Anti-DDoS|The anti-DDoS is a set of equipment and means put in place to absorb distributed denial of service attacks. It includes an analysis of traffic, the "aspiration" towards a specialized network, and mitigation, ensured by VAC technology developed by OVHcloud.|N/A|**Inbound migration**: The anti-DDoS is a component of our infrastructure, enabled by default. No action is required.<br><br>**Outbound migration**: Order and configure an anti-DDoS with the new provider.|**Inbound migration**: [OVHcloud anti-DDoS protection](https://www.ovh.co.uk/anti-ddos/) and [Anti-DDoS Technology](https://www.ovh.co.uk/anti-ddos/anti-ddos-technology.xml)<br><br>**Outbound migration**: N/A|

### Architecture listing

All components of the OVHcloud Dedicated Server product are accessible through the [OVHcloud Control Panel](/links/manager). this allows to visualize and manage the dedicated servers, installed images, network configuration ... as well as the features that are attached to these components.

### Partner services

OVHcloud Partners are listed with the "Cloud Migration" keyword in the dedicated [directory](https://partner.ovhcloud.com/es-es/directory/).

### Cost and fees

No additional billing is planned from OVHcloud for the migration features listed here.

### Retention of data after contract termination

If a customer explicitly terminates his use of a given host, the data is erased 24 hours thereafter. In case of contract termination without explicit release of hosts, the data is retained 7 days and then deleted permanently.
