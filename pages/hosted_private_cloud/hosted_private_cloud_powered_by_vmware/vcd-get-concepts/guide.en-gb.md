---
title: "VMware Cloud Director - The fundamentals of VCD"
excerpt: "Discover the basic concepts of VMware Cloud Director"
updated: 2024-06-10
---

## Objective

**This guide details the fundamentals of VMware Cloud Director (VCD) managed by OVHcloud.**

## Fundamental concepts

In this section, we will detail the essential foundations of VMware Cloud Director (VCD).

By defining these principles in a clear and concise way, we will provide the necessary foundation for effective and successful VMware Cloud Director use. Whether it’s for administrators looking to deploy complex infrastructures, or for users looking to access resources quickly, this exploration of VCD basics is a vital starting point.

### Organizations

An organization is an administrative entity that groups together specific users, groups, and IT resources.

Users authenticate at the organization level by providing credentials established by an organization administrator when they are created or imported.

System administrators are responsible for creating and provisioning organizations, while organization administrators are responsible for managing users, groups, and catalogs specific to the organization.

### Users and Groups

An organization can have a variable number of users and groups. Users can be created directly by the organization administrator or imported from a directory service (e.g. Active Directory).

Groups must be imported from the directory service. Within an organization, permissions are managed by assigning specific rights and roles to users and groups.

### Virtual Data Centers (vDC)

A virtual datacentre can be used to offer computing resources (virtual machines/vApp/affinity rules) to an organization (your vDC), creating an environment managed by OVHcloud where virtualized systems can be stored, deployed and operated.

It also provides storage space for virtual CDs and DVDs. It is important to note that an organization may have multiple virtual datacentres (vDC) to meet their specific computing resource requirements (segmentation, isolation, security, etc.).

### Organization Virtual Data Center Networks

A vDC network is encapsulated in a specific virtual datacentre created with VMware Cloud Director (VCD), and is accessible to all of that organization’s vApps. This network allows an organization's different vApps to communicate with each other seamlessly. It can be configured to be connected to an external network or kept isolated and internal to the organization.

Only system administrators have the privilege to create such networks, but organization administrators are able to manage the configurations of organization virtual datacentre networks, including the network services they offer.

### vApp Networks

A vApp network is included in a vApp, and facilitates communication between the vApp’s various virtual machines.

It is possible to connect a vApp network to an organization's virtual datacentre network, which allows the vApp to communicate with other vApps within the organization.

Furthermore, if the organization’s virtual datacentre network is connected to an external network, this allows the vApp to communicate outside the organization as well.

### Catalogs

Organizations use catalogs to store vApp templates and media files.

Authorized members within an organization can access these catalogs to use the vApp templates and the media files contained within them to create their own vApps.

In addition, organization administrators have the ability to copy items from public catalogs into their organization-specific catalog.

<a name="key-features"></a>

### Features of VMware Cloud Director at OVHcloud

Below is a comparison of the features provided by OVHcloud on its 3 VMware Cloud Director solutions.

|              | Advanced Network & Security | vSAN Storage |
|:------------:|:---------------------------:|:------------:|
| VCD Standard |              -              |       -      |
| VCD Advanced |              ✅              |       -      |
| VCD Premium  |              ✅              |       ✅      |

#### Cluster Management

> [!success]
> All Cluster Management features are fully managed by OVHcloud.
>

| Features |
| :-: |
| ESXi management / capacity planning |
| Hosts Failover / Proactive HA       |
| DRS / Storage DRS                   |
| vMotion / Storage vMotion           |

##### Virtual Machine Management

|         Features        	| Standard 	| Advanced 	| Premium 	|                                    Comments                                   	|
|:-----------------------:	|:--------:	|:--------:	|:-------:	|:-----------------------------------------------------------------------------:	|
|        Create VM        	|     ✅    	|     ✅    	|    ✅    	|                                                                               	|
| Manage Virtual Machines 	|     ✅    	|     ✅    	|    ✅    	|                  Start, Stop, Suspend, Delete, Copy/clone...                  	|
|      Affinity Rules     	|     ✅    	|     ✅    	|    ✅    	|                                                                               	|
|   Anti-Affinity Rules   	|     ✅    	|     ✅    	|    ✅    	|                                                                               	|
|    VMware Marketplace   	|     ✅    	|     ✅     |    ✅     	| Allowed to deploy VMs with pre-packaged software solutions  	                    |
|    Create VM catalogs   	|     ✅    	|     ✅     |    ✅     	|                     Build your own catalog of VM templates                    	|

#### Organisation / Virtual Datacenter Management

|               Features              	| Standard 	| Advanced 	| Premium 	|                                                 Comments                                                	|
|:-----------------------------------:	|:--------:	|:--------:	|:-------:	|:-------------------------------------------------------------------------------------------------------:	|
|           User Management           	|     ✅    	|     ✅    	|    ✅    	|            Create users in a VCD Organisation Manage roles/permissions for Organisation users           	|
| Identity Provider Integration - SSO 	|          	|          	|         	| in Roadmap (via OVHcloud uIAM service)                                                                  	|
| vCPU over-allocation                	|     ✅    	|     ✅    	|    ✅    	| Allow users to adjust the quantity of vCPU/GHz for a virtual DC Possible through **OVH manager or API** 	|

#### Networking

| Features                        	| Standard 	| Advanced 	| Premium 	| Comments                                                                                                                                                                                           	|
|---------------------------------	|----------	|----------	|---------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Routing & Switching IPv4        	| ✅        	| ✅        	| ✅       	| Network segments, distributed & non distributed routing, Routed Network with/without NAT BGP/ DHCP/ DNS/ Static routes Cross virtual DC Networking on the same site. Not supported: OSPF, VRF Lite 	|
| Public IPv4 Range               	| ✅        	| ✅        	| ✅       	|                                                                                                                                                                                                    	|
| Private Network - vRack support 	| ✅        	| ✅        	| ✅       	| in Roadmap                                                                                                                                                                                                   	|
| Routing & Switching IPv6        	|          	|          	|         	| in Roadmap                                                                                                                                                                                         	|
| VPN                             	|          	| ✅        	| ✅       	| L2VPN, VPN IPsec Policy Based Not Supported : SSL VPN, Routed based IPsec VPN                                                                                                                      	|
| Load Balancing                  	|          	|          	|         	| Not supported with native VCD network capabilities                                                                                                                                                 	|
| Advanced Load Balancing         	|          	|          	|         	| in Roadmap                                                                                                                                                                                         	|

#### Security

|       Features       	| Standard 	| Advanced 	| Premium 	|  Comments  	|
|:--------------------:	|:--------:	|:--------:	|:-------:	|:----------:	|
|   Stateful Firewall  	|        	|     ✅    	|    ✅    	|            	|
| Distributed Firewall 	|        	|     ✅    	|    ✅    	|            	|
|    Security groups   	|         	|     ✅    	|    ✅    	|            	|
|       IDS / IPS      	|          	|          	|         	| in Roadmap 	|
|          WAF         	|          	|          	|         	| in Roadmap 	|

#### Data protection

|           Features           	| Standard 	| Advanced 	| Premium 	|           Comments          	|
|:----------------------------:	|:--------:	|:--------:	|:-------:	|:---------------------------:	|
|      Backup as a Service     	|     ✅    	|     ✅    	|    ✅    	| Veeam Managed Backup Option 	|
|   Virtual Machine Snapshots  	|     ✅    	|     ✅    	|    ✅    	|           1 per VM          	|
| Protection / Replication VMs 	|          	|          	|         	|          in Roadmap         	|

#### Storage

|              Features             	| Standard 	| Advanced 	| Premium 	| Comments 	|
|:---------------------------------:	|:--------:	|:--------:	|:-------:	|:--------:	|
|           NFS datastore           	|     ✅    	|     ✅    	|    ✅    	|          	|
| High performance datastore (vSAN) 	|          	|          	|    ✅    	|          	|

#### Monitoring

|     Features    	| Standard 	| Advanced 	| Premium 	|                      Comments                     	|
|:---------------:	|:--------:	|:--------:	|:-------:	|:-------------------------------------------------:	|
| Aria operations 	|     ✅    	|     ✅    	|    ✅    	| Resource management Metrics, Dashboard, Reporting 	|

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.