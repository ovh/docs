---
title: "VMware Cloud Director - Find out how to use the VCD user interface"
excerpt: "Discover the VCD user interface"
updated: 2024-05-22
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

**This guide will walk you through the different sections of the VCD interface.**

## Requirements

>[!primary]
> If you are unsure how to log in to your organization’s web portal, read [this guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-logging) first.

- A VMware Cloud Director account

## Instructions

VMware vCloud Director (VCD) is a cloud computing management platform. VCD enables the creation, management and deployment of virtualized computing resources on a large scale, and offers an agile and scalable infrastructure. With an easy-to-use user interface and advanced features such as resource management, automated billing, and enhanced security, vCloud Director simplifies the management of complex cloud environments.

This solution enables you to provision and efficiently manage virtual machines, virtual networks, and other resources, providing increased operational agility and flexibility to meet changing business needs.

>[!primary]
> Once you have logged in to your web interface, you will be greeted by a dashboard displaying your **vDC**, as well as a detailed summary of your resource usage (10). At the top of the screen, you will also find a navigation bar with the different settings options available for vCloud Director (VCD).

![Dashboard Overview](images/vcd-dashboard-overview.png){.thumbnail}

The different sections available are the following :

1. **Data Centers**
2. **Applications**
3. **Networking**
4. **Content Hub**
5. **Admin**
6. **Monitor**
7. **More**
8. **Magnifier**
9. **Completed tasks**
10. **Resources used**

### Data Centers
In this section, you will find all of your virtual datacentres (vDC) ordered in different datacentre locations, a brief overview of your resource usage, and the number of vApps/VMs currently running.</summary>

Compute :
- `vApps`{.action}
- `Virtual Machines`{.action}
- `Affinity Rules`{.action}

Networking :
- `Networks`{.action}
- `Edges`{.action}

Storage :
- `Named disks`{.action}
- `Storage Policies`{.action}

Settings :
- `General`{.action}
- `Metadata`{.action}
- `Sharing`{.action}
- `Kubernetes Policies`{.action}

![Datacenters Overview](images/vcd_overview_datacenter.gif){.thumbnail}

### Applications
In this section, get a comprehensive overview of all your vApps and virtual machines on your virtual datacentres (vcds): create, access and delete vApps or virtual machines with ease.

Applications :
- `Virtual Applications`{.action}
- `Virtual Machines`{.action}
- `Container Applications`{.action}

![Applications Overview](images/vcd_overview_application.gif){.thumbnail}

### Networking
In this section, you can find all the network components of your VCD environments: networks, Edge Gateways, Provider Gateways, IP address ranges, datacentre groups, and security tags.

Networking :
- `Networks`{.action}
- `Edge Gateways`{.action}
- `Provider Gateways`{.action}
- `IP Spaces`{.action}
- `Data Center Groups`{.action}
- `Security Tags`{.action}

![Network Overview](images/vcd_overview_networking.gif){.thumbnail}

### Content Hub
In this section, you can manage your catalogs: create, delete or download ISO files, OVA templates, or simply use the preconfigured templates available in the OVHcloud catalog.

Content :
- `Bibliothèques de contenu`{.action}
- `Services`{.action}

![Content Hub Overview](images/vcd_overview_content-hub.gif){.thumbnail}

### Administration
In this section, you can manage users in your organization, create roles and groups, and configure an identification provider (OIDC/SAML). You can also set up email alerts and expiration policies for your applications.

Access control :
- `Users`{.action}
- `Groups`{.action}
- `Roles`{.action}

Fournisseur d'identités :
- `SAML`{.action}
- `OIDC`{.action}

Gestion des certificats :
- `Certificate Management`{.action}

Parameters :
- `General`{.action}
- `Email`{.action}
- `Guest Personnalization`{.action}
- `Metadata`{.action}
- `Multisite`{.action}
- `Policies`{.action}
- `Quotas`{.action}

![Administration Overview](images/vcd_overview_administration.gif){.thumbnail}

### Monitoring
In this section, you can access the complete history of all tasks and events that have occurred in your organization. You can filter to find the tasks/events you want more easily.

![Monitoring Overview](images/vcd_overview_monitor.gif){.thumbnail}

### More
In this section, access the essential plugins: Veeam for data protection to back up your infrastructure, and the Operations Manager for an exhaustive breakdown of your usage.

![More options Overview](images/vcd_overview_more.gif){.thumbnail}

### Magnifier
Use this feature to search for components within your organization. The vertical dots give you the ability to log out, change your password, and manage your user preferences.

![Overview Magnifier](images/vcd_overview_loupe.gif){.thumbnail}

### Tasks Completed
See here for all recent actions in your organization.

![Tasks Overview](images/vcd-recent-tasks-overview.png){.thumbnail}

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.