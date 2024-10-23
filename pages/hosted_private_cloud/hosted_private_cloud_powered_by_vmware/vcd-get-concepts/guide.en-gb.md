---
title: "VMware Cloud Director - VCD Fundamentals"
excerpt: "Discover the features, limitations and fundamental concepts of VMware Cloud Director on OVHcloud"
updated: 2024-10-07
---

## Objective

**The purpose of this page is to provide you with an overview of the features and technical limitations of services managed by OVHcloud VMware cloud Director.**

## The basic concepts

In this section, we will establish the essential foundation of VMware Cloud Director (VCD) on OVHcloud.

By defining these principles in a clear and concise way, we will provide the necessary foundation for effective and successful use of VMware Cloud Director. Whether it's for administrators looking to deploy complex infrastructure, or users looking to access resources quickly. This exploration of basic VCD concepts is a key starting point.

### Organizations

An organization is an administrative entity that groups together specific users, groups, and IT resources.

Users authenticate at the organization level by providing credentials established by an organization administrator when they are created or imported.

System administrators are responsible for creating and provisioning organizations, while organization administrators are responsible for managing users, groups, and catalogs specific to the organization.

### Users and groups

An organization can have a variable number of users and groups. Users can be created directly by the organization administrator or imported from a directory service (for example, Active Directory).

Groups must be imported from the directory service. Within an organization, permissions are managed by assigning specific rights and roles to users and groups.

### Virtual Datacentres (vDC)

A virtual datacentre can be used to offer computing resources (virtual machines/vApp/affinity rules) to an organization (your vDC), creating an environment managed by OVHcloud where virtualized systems can be stored, deployed and operated.

It is important to note that an organization may have multiple virtual datacentres (vDC) to meet their specific computing resource requirements (segmentation, isolation, security, etc.).

### Organization Virtual Datacenter Networks

A vDC network is encapsulated in a specific (virtual) datacentre created with VMware Cloud Director (VCD), and it is accessible to all of that organization’s vApps. This network allows an organization's different vApps to communicate with each other seamlessly. It can be configured to connect to an external network or kept isolated and internal to the organization.

Only system administrators have the privilege to create such networks, but organization administrators are able to manage the configurations of organization virtual datacentre networks, including the network services they offer.

### vApp networks

A vApp network is included in a vApp, and facilitates communication between the vApp’s various virtual machines.

It is possible to connect a vApp network to an organization virtual datacentre network, which allows the vApp to communicate with other vApps within the organization.

Additionally, if the organization virtual datacentre network is connected to an external network, this provides the ability for the vApp to communicate outside the organization as well.

### Catalog

Organizations use catalogs to store vApp templates and media files.

Authorized members within an organization can access these catalogs to use the vApp templates and the media files contained within them to create their own vApps.

In addition, organization administrators have the ability to copy items from public catalogs into their organization-specific catalog.

<a name="key-features"></a>

## Features

Below is a comparison of the features provided by OVHcloud on its 3 VMware Cloud Director on OVHcloud offerings.

| **Target Offers** | **NSX** | **vSAN Storage** |
|:-----------------:|:-------:|:----------------:|
|   `VCD Standard`    |    ❌    |        ❌         |
|   `VCD Advanced`    |    ✅    |        ❌         |
|    `VCD Premium`    |    ✅    |        ✅         |

### Cluster Management

> [!success]
> All Cluster Management features are fully managed by OVHcloud.
>

| **Features**                          | **Standard** 	 | **Advanced** 	 | **Premium** 	 | **Comments**                                   	 |
|:--------------------------------------|:--------------:|:--------------:|:-------------:|:-------------------------------------------------|
| `ESXi management / Capacity planning` |     ✅    	     |     ✅    	     |    ✅    	     | 	                                                |
| `Hosts Failover / Proactive HA`       |     ✅    	     |     ✅    	     |    ✅    	     | 	                                                |
| `DRS / Storage DRS`                   |     ✅    	     |     ✅    	     |    ✅    	     | 	                                                |
| `vMotion / Storage vMotion`           |     ✅    	     |     ✅    	     |    ✅    	     | 	                                                |

### Virtual Machine Management

| **Features**        	     | **Standard**	 | **Advanced** 	 | **Premium** 	 | **Comments**                                   	                                                                                     |
|:--------------------------|:-------------:|:--------------:|:-------------:|:-------------------------------------------------------------------------------------------------------------------------------------|
| `Create VM`        	        |    ✅    	     |     ✅    	     |    ✅    	     | - VM creation from ISO or OVHcloud official templates                                                                       	        |
| `Manage Virtual Machines` 	 |    ✅    	     |     ✅    	     |    ✅    	     | - Start, Stop, Suspend, Delete, Copy/clone...                  	                                                                     |
| `Affinity Rules`     	      |    ✅    	     |     ✅    	     |    ✅    	     | - If the affinity or anti-affinity rules cannot be satisfied, this prevents the virtual machines added to the rule from powering on. |
| `Anti-Affinity Rules`   	   |    ✅    	     |     ✅    	     |    ✅    	     | 	                                                                                                                                    |
| `VMware Marketplace`   	    |    ✅    	     |       ✅        |    ✅     	    | - Allowed to deploy VMs with pre-packaged software solutions  	                                                                      |
| `Create VM catalogs`   	    |    ✅    	     |       ✅        |    ✅     	    | - Build your own catalog of VM templates                    	                                                                        |

### Organization/Virtual Datacenter Management

| **Features**             	            | **Standard** 	 | **Advanced** 	 | **Premium** 	 | **Comments**                                                	                                               |
|:--------------------------------------|:--------------:|:--------------:|:-------------:|:------------------------------------------------------------------------------------------------------------|
| `User Management`           	           |     ✅    	     |     ✅    	     |    ✅    	     | - Create users in a VCD Organisation Manage roles/permissions for Organisation users           	            |
| `Identity Provider Integration - SSO` 	 |       	        |       	        |       	       | - In Roadmap (via OVHcloud uIAM service)                                                                  	 |
| `vCPU over-allocation`                	 |     ✅    	     |     ✅    	     |    ✅    	     | - Allow users to adjust the quantity of vCPU/GHz for a virtual DC Possible through **OVH manager or API** 	 |

### Networking

| **Features**                        	 | **Standard** 	 | **Advanced** 	 | **Premium** 	 | **Comments**                                                                                                                                                                                           	         |
|:--------------------------------------|:--------------:|:--------------:|:-------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Routing & Switching IPv4`        	     |   ✅        	   |   ✅        	   |   ✅       	   | - Network segments, distributed & non distributed routing, Routed Network with/without NAT BGP/ DHCP/ DNS/ Static routes Cross virtual DC Networking on the same site. Not supported: OSPF, VRF Lite 	           |
| `Public IPv4 Range`               	     |   ✅        	   |   ✅        	   |   ✅       	   | 	                                                                                                                                                                                                                |
| `Private Network with vRack support`    |   ✅        	   |   ✅        	   |   ✅       	   | - In Roadmap                                                                                                                                                                                                	    |
| `Routing & Switching IPv6`        	     |       	        |       	        |       	       | - In Roadmap                                                                                                                                                                                         	           |
| `VPN`                             	     |       	        |   ✅        	   |   ✅       	   | - L2VPN (supported)<br/>- VPN IPsec Policy Based (SSL VPN and Routed based : not Supported)                                                                                                                    	 |
| `Load Balancing`                  	     |       	        |       	        |       	       | - Not supported with native VCD network capabilities                                                                                                                                                 	           |
| `Advanced Load Balancing`         	     |       	        |       	        |       	       | - In Roadmap                                                                                                                                                                                         	           |                                                                                          	|

### Security

| Features       	       | Standard 	 |Advanced 	 | Premium 	 | Comments  	    |
|:-----------------------|:----------:|:---------:|:---------:|:---------------|
| `Stateful Firewall`  	   |     	      |  ✅    	   |  ✅    	   | 	              |
| `Distributed Firewall` 	 |     	      |  ✅    	   |  ✅    	   | 	              |
| `Security groups`   	    |     	      |  ✅    	   |  ✅    	   | 	              |
| `IDS / IPS`      	       |     	      |     	     |     	     | - In Roadmap 	 |
| `WAF`         	          |     	      |     	     |     	     | - In Roadmap 	 |

### Data protection

| **Features**           	                | **Standard** 	 | **Advanced** 	 | **Premium** 	 | **Comments**          	                 |
|:----------------------------------------|:--------------:|:--------------:|:-------------:|:----------------------------------------|
| `Backup as a Service (Repository)`      	 |     ✅    	     |     ✅    	     |    ✅    	     | - Veeam Managed Backup Option (100To) 	 |
| `Virtual Machine Snapshots`  	            |     ✅    	     |     ✅    	     |    ✅    	     | - 1 per VM          	                   |
| `Protection / Replication VMs` 	          |       	        |       	        |       	       | - In Roadmap         	                  |

### Storage

| **Features**             	            | **Standard** 	 | **Advanced** 	 | **Premium** 	 | **Comments** 	 |
|:--------------------------------------|:--------------:|:--------------:|:-------------:|:---------------|
| `NFS datastore`           	           |     ✅    	     |     ✅    	     |    ✅    	     | 	              |
| `High performance datastore (vSAN)` 	 |       	        |       	        |    ✅    	     | 	              |

### Monitoring

| **Features**    	   | **Standard** 	 | **Advanced** 	 | **Premium** 	 | **Comments**                     	                    |
|:--------------------|:--------------:|:--------------:|:-------------:|:------------------------------------------------------|
| `Aria operations` 	 |     ✅    	     |     ✅    	     |    ✅    	     | - Resource management Metrics, Dashboard, Reporting 	 |

## Limitations

| **Options / Offres**                | **Standard** | **Advanced**  |    **Premium**    | **Comments**                                                                                                                                                       |
|:------------------------------------|:------------:|:-------------:|:-----------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `vCPU` (per VM)                     |      12      |      12       |        12         | - Number of available vCPU (per VM).                                                                                                                               |
| `RAM` (per VM)                      |     128      |      128      |        128        | - Maximum possible amount of RAM (per VM, min 0.5 Go).                                                                                                             |
| `Network Card` (per VM)             |      5       |     	10	      |        10         | - Network card limit available (per VM) for VCD on OVHcloud.                                                                                                       |
| `Edge Gateway`                      |    	32 	     |     32 	      |        32	        | - Number of Edge Gateways (per Org limitations).                                                                                                                   |
| `Public IP` (per vDC)               |      2       |       2       |         2         | - Available public IP for vDC organization.                                                                                                                        |
| `Storage`                           |     1.5      |      1.5      |        1.5        | - Storage size limitation in To (per VM on NFS/vSAN).                                                                                                              |
| `Snapshot usage`	                   |      3	      |      3	       |        3	         | - The snapshot job limit (per VM) can be increased or limited if needed (for cost purposes).                                                                       |
| `VMs` (per vApp)                    |     128	     |     128	      |        128        | - Virtual machines numbers authorized per vApp (per vApp).	                                                                                                        |
| `VMs` (per org)                     |    	2000	    |     4000	     |       4000	       | - Number of VMs possible (per Org limitations).                                                                                                                    |
| `VMs` (per instance vDC)            |   	20 000    |   	20 000	    |      20 000	      | - The maximum number of virtual machines in a single VMware Cloud Director instance. This overrides the number of virtual machines that are supported on-premises. |
| `vApps` (per instance vDC)          |   	40 000	   |    40 000	    |      40 000	      | - The maximum number of vApps in a single VMware Cloud Director instance (per VCD instance).                                                                       |
| `vApps` (per org)                   |    10 000    |    10 000     |      10 000       | - The maximum number of vApps in an organization (per org).                                                                                                        |
| `Catalogs` 	                        |    10 000    |   	10 000	    |      10 000       | - The total number of catalogs in all organizations.                                                                                                               |
| `Resource pools` (per provider vDC) |     	64	     |      64	      |        64         | - The number of top-level resource pools per provider VDC.                                                                                                         |
| `Media`	                            |    5000	     |     5000	     |       5000        | - The total number of media files in all catalogs.                                                                                                                 |
| `Catalogs` 	                        |   10 000	    |    10 000	    |      10 000       | - The total number of catalogs in all organizations.                                                                                                               |

## Go further

For more information on the limits of VMware Cloud Director on OVHcloud, see the VMware tool: [VMware Cloud Director Configuration Limits](https://configmax.esp.vmware.com/)

If you require training or technical support to implement our solutions, please contact your sales representative or click [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community)