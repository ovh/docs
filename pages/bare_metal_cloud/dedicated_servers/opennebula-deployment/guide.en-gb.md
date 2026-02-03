---
title: How to deploy and verify an OpenNebula Hosted Cloud on Bare Metal servers
excerpt: Deploy a certified OpenNebula Hosted Cloud using OVHcloud Bare Metal servers and Ansible playbooks.
updated: 2025-12-09
---

## Introduction

OpenNebula is a powerful, open-source **Cloud Management Platform** (CMP) designed to manage and provision virtualized infrastructure.

Acting as an orchestrator, it turns a physical infrastructure into a managed **Infrastructure as a Service** (IaaS) cloud, accessible via a unified control interface. It supports major hypervisors and allows for hybrid deployments by integrating with Public Cloud providers, such as OVHcloud.

The deployment of OpenNebula on OVHcloud infrastructure is validated as part of the **OpenNebula Cloud-Ready Certification Program**.

To streamline this process, OpenNebula provides a set of **Ansible playbooks** called [Hosted Cloud OVHcloud](https://github.com/OpenNebula/hosted-cloud-ovhcloud) for automated deployment and verification. **You will use these playbooks throughout this guide**.

## Objective

This guide details the complete process of creating an OpenNebula Hosted Cloud on OVHcloud, including the custom architecture and hardware specifications.

Following this guide, you will be able to:

- Request necessary resources using your OVHcloud account,
- Prepare the Ansible deployment project with all required configuration,
- Perform OpenNebula deployment over these resources,
- Check the operation with an automated verification procedure.

## Requirements

- **Two** [dedicated servers](/links/bare-metal/bare-metal) from the Scale or High Grade ranges.
- An active [vRack](/links/network/vrack) service.
- A public block of [Additional IP](/links/network/additional-ip) addresses, sized according to your needs.
- Access to the [OVHcloud Control Panel](/links/manager).

> [!primary]
>
> The reference OpenNebula deployment uses the following configuration:
> 
> | Hardware specifications | |
> |:---|:---|
> | Processor | AMD EPYC GENOA 9124 - 16 cores / 32 threads - 3GHz/3.6GHz |
> | Memory | 128GB DDR5 ECC 4800MHz |
> | Storage | 2x SSD NVMe 960GB Datacenter Class Soft RAID |
> | Public bandwidth | 2 adapters, 5Gbit/s unmetered and guaranteed |
> | Private bandwidth | 2 adapters, 50Gbit/s unmetered and guaranteed|
>
> | Software specifications | |
> |:---|:---|
> | OpenNebula version | 7.0 |
> | Frontend node count | 1 |
> | Frontend node configuration | Ubuntu 24.04 LTS |
> | Virtualization node count| 2 (First node co-hosts frontend application) |
> | Virtualisation node configuration | Ubuntu 24.04 LTS - KVM Hypervisor |
> 
> Servers from the [Scale range](/links/bare-metal/scale) are suitable for small to medium cloud environments.
> 
> Servers from the [High Grade range](/links/bare-metal/hg) are more appropriate for heavier production workloads.
>
> For more information about scaling, please consult the [OpenNebula guide for Scalability Testing and Tuning](https://docs.opennebula.io/7.0/product/control_plane_configuration/large-scale_deployment/scalability/).

## Instructions

### Step 1 - Setting up your OVHcloud infrastructure <a name="infrastructure_provisioning"></a>

First, you need to install Ubuntu 24.04 LTS on both of your dedicated servers, by following the instructions in [this guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

Subsequently, add both servers to your vRack service by following step 2 of [this vRack configuration guide](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server).

Finally, from the OVHcloud Control Panel, open the `Network`{.action} section, then select `Public IP Addresses`{.action} under **Public Network**. Once you have reached the IP management interface, click on the `Order IPs`{.action} button near the top of the page. Choose the IP version, then **select the vRack your servers are attached to**, and the region where those servers are hosted.

> [!warning]
> 
> **Important:** To ensure functionality, please make sure that the IP block you ordered is **routed to the vRack** attached to the servers, and not used as a classic failover configuration.
>
> If you are unsure or need more information, please consult the following guide: [Configuring an Additional IP block in a vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack/).
>

### Step 2 - Collecting the Bare Metal & Network settings

Before starting the OpenNebula deployment, gather all parameters required for the automation process. **Update the inventory values** in the [Hosted Cloud OVHcloud repository](https://github.com/OpenNebula/hosted-cloud-ovhcloud) with these settings to match the provisioned infrastructure.

For further details on the automated deployment procedure, refer to the following section: [Configure and deploy the Hosted Cloud OVHcloud repository](#initial_setup).

Each server is equipped with two network adapters dedicated to public connectivity and two adapters for private connectivity. The two interfaces within each segment will be **bonded** using the **default LACP parameters for Scale and High Grade servers**.

The **Public network bond** is exclusively for OpenNebula service management, including cluster deployment, administration via the Sunstone Web UI or OpenNebula CLI, and connectivity between the Front-end and Virtualization hosts.

The **Private network bond** provides network to virtual servers, leveraging the OVHcloud vRack. This bond supports private networking, which is segmented using 802.1Q VLANs, and enables public IP addressing for virtual servers. To assign public addresses to virtual servers, a dedicated IP range must be purchased and routed via the vRack. This setup ensures cluster management traffic is isolated from virtual machine networking.

![Network](images/opennebula_network.png){.thumbnail}

> [!warning]
> This guide assumes the default bonding setup. If you change the network mode (e.g. OLA), please double check that your interface names and bonds are correct before running the playbooks.
>
> For more information about the link aggregation settings, please consult the following guide : [Improving Network Resilience on Bare Metal servers](/pages/bare_metal_cloud/dedicated_servers/lacp-resilience-scale-hg/).
>

#### Bare Metal network settings <a name="bare_metal_network_settings"></a>

From your OVHcloud Control Panel, navigate to `Bare Metal Cloud`{.action} section, then select `Dedicated servers`{.action}. Open both management pages for your dedicated servers, and collect the highlighted parameters :

![dedicated servers administration page](images/bare_metal_network.png){.thumbnail}

| Description                              | Variable Names                                           | Comment                                                |
|------------------------------------------|----------------------------------------------------------|--------------------------------------------------------|
| Frontend/KVM Host IP                     | `ansible_host`                                           | public_aggregation IP address                          |
| Frontend/KVM Host public NICs mac addresses | `public_nics.macaddress`                                 | public_aggregation MAC addresses                 |
| Frontend/KVM Host private NICs mac addresses| `private_nics.macaddress`                                | private_aggregation MAC addresses                  |

To collect the network adapter names, connect to your dedicated server and execute the `ip address` command :

![dedicated servers ip address](images/bare_metal_ip_address.png){.thumbnail}

| Description                              | Variable Names                                                | Comment                                                |
|------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------|
| Frontend/KVM Host public NICs name       | `public_nics.name`                                            | public_aggregation network adapter names               |
| Frontend/KVM Host private NICs name      | `private_nics.name`                                           | private_aggregation network adapter names              |

#### vRack network settings

**Public IP addresses**

The public IP block ordered in the previous steps allows to attach direct public connectivity to virtual servers. For a public IP range deployed on vRack, the first, penultimate, and last addresses in any given IP block are always reserved for the network address, network gateway, and network broadcast respectively.

This means that the first usable address is the second address in the block, as shown below:

```bash
46.105.135.96   Reserved : Network address
46.105.135.97   First usable IP
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109  Last usable IP
46.105.135.110  Reserved : Network gateway
46.105.135.111  Reserved : Network broadcast
```

Declare a bridge network for public IP addresses using all usable addresses of your IP range: 

| Description                              | Variable Names                                                | Files/Location                                         |
|------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------|
| VMs Public IP Range, first IP            | `vn.vm_public.template.AR.IP`                                 | Second IP address in the range: 46.105.135.97 in the example |
| VMs Public IP Range, number of usable addresses                      |   `vn.vm_public.template.AR.SIZE` |  Number of usable addresses, range size minus three addresses: 13 in the example     |
| VMs Public DNS                           | `vn.vm_public.template.DNS`                                   | 213.186.33.99: OVHcloud DNS   |
| VMs Public NETWORK MASK                  | `vn.vm_public.template.NETWORK_MASK`                          | IP range netmask: 255.255.255.240 for example for a /28 network   |
| VMs Public GATEWAY                       | `vn.vm_public.template.GATEWAY`                               | Penultimate IP address in the range, Network gateway: 46.105.135.110 in the example  |

**Private IP addresses**

On the private network bond, deploy one 802.1Q virtual network per private network. For each virtual network, create a section in the Ansible inventory file, and declare the VLAN ID, IP range and netmask.

| Description                              | Variable Names                                                | Files/Location                                         |
|------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------|
| VMs Private VLAN_ID                      | `vn.vm_vlan*.template.VLAN_ID`                                | VLAN id, between 1 and 4096                            |
| VMs Private IP Range, first IP           | `vn.vm_vlan*.template.AR.IP`                                  | First IP address, for example 10.1.10.100              |
| VMs Private IP Range, number of usable addresses                    | `vn.vm_vlan*.template.AR.SIZE`  | Number of usable addresses, for example 50 fo IP range 10.1.10.100-10.1.10.149   |
| VMs Private NETWORK MASK                 | `vn.vm_vlan*.template.NETWORK_MASK`                           | IP range netmask: 255.255.255.0 for example for a /24 network   |

### Step 3 - Configure and deploy the Hosted Cloud OVHcloud repository <a name="initial_setup"></a>

The deployment uses the **OpenNebula Hosted Cloud OVHcloud repository**.

The high-level deployment steps are:

1. **Clone** the deployment repository,
2. **Install** the dependencies listed in the [Requirements section](https://github.com/OpenNebula/hosted-cloud-ovhcloud?tab=readme-ov-file#requirements),
3. **Update** the inventory parameters in the repository with the configuration gathered above,
4. **Launch deployment commands**:
    - `make pre-tasks-ovhcloud`: Patch Ubuntu kernel and perform networking setup.
    - `make deployment`: Deploy OpenNebula.
    - `make validation`: Validate the automated deployment.

### Step 4 - Adding dedicated servers to an active OpenNebula infrastructure

To extend the cloud with new servers:

1. **Provision** the new host as detailed in the [Setting up your OVHcloud infrastructure](#infrastructure_Provisioning) section.
2. **Collect** the necessary configuration parameters, especially the bare-metal network settings.
3. **Re-execute** the deployment and verification commands from the [Configure and deploy the Hosted Cloud OVHcloud repository](#initial_setup) section.

### Step 5 - Operate your cloud infrastructure

The following section explains how to access a Hosted OpenNebula Cloud Deployment via the web UI, and instantiate and access a virtual machine.

This guide provides the basic steps. If you need a more detailed guide, please refer to [OpenNebula public documentation](https://docs.opennebula.io/7.0/product/virtual_machines_operation/virtual_machines/).

### Create a template from OpenNebula Public marketplace

From the OpenNebula Public marketplace, search and import virtual server templates needed for your infrastructure. The example below imports the Debian 13 "Trixie" template:

![user guide template 1](images/user_guide_template_1.png){.thumbnail}

![user guide template 2](images/user_guide_template_2.png){.thumbnail}

### Start a new virtual server

Based on the imported template, create a new virtual server instance.

![user guide create vm 1](images/user_guide_create_vm_1.png){.thumbnail}

![user guide create vm 2](images/user_guide_create_vm_2.png){.thumbnail}

![user guide create vm 3](images/user_guide_create_vm_3.png){.thumbnail}

You can adjust disk storage capacity, CPU and RAM allocation during this setup phase.

![user guide create vm 4](images/user_guide_create_vm_4.png){.thumbnail}

![user guide create vm 5](images/user_guide_create_vm_5.png){.thumbnail}

![user guide create vm 6](images/user_guide_create_vm_6.png){.thumbnail}

Finally, attach network adapters. In this example, we provide a public IP to this server, based on the public IP range we created during the OpenNebula automated deployment. Without any override, an available IP address from the public range will be picked for this interface.

![user guide create vm 7](images/user_guide_create_vm_7.png){.thumbnail}

![user guide create vm 8](images/user_guide_create_vm_8.png){.thumbnail}

### Check connectivity

You can use the virtual server console to check the deployment and the server connectivity. Set up the root password using virtual machine context variables.

![user guide check vm 1](images/user_guide_connectivity_1.png){.thumbnail}

![user guide check vm 2](images/user_guide_connectivity_2.png){.thumbnail}

Run your virtual server console to validate the deployment.

![user guide check vm 3](images/user_guide_connectivity_3.png){.thumbnail}

![user guide check vm 4](images/user_guide_connectivity_4.png){.thumbnail}

### Update virtual servers settings

Use virtual server settings to update the server configuration. This example shows the hot-plugging of a private network adapter to the virtual server.

![user guide hotplug 1](images/user_guide_hotplug_1.png){.thumbnail}

![user guide hotplug 2](images/user_guide_hotplug_2.png){.thumbnail}

![user guide hotplug 3](images/user_guide_hotplug_3.png){.thumbnail}

![user guide hotplug 4](images/user_guide_hotplug_4.png){.thumbnail}

### Destroy virtual server

Finally, as a cleanup step, terminate the virtual server by clicking the red "Trash can" icon.

![user guide terminate 1](images/user_guide_terminate_1.png){.thumbnail}

![user guide terminate 2](images/user_guide_terminate_2.png){.thumbnail}

## Go further

**External resources:**

- If you need more information about OpenNebula, you may consult the [OpenNebula Website](https://opennebula.io/) or the [official OpenNebula documentation](https://docs.opennebula.io/).
- If you need more information about Ansible, you may consult the [Ansible page on the RedHat website](https://www.redhat.com/en/ansible-collaborative?) or the [official Ansible documentation](https://docs.ansible.com/).
- The OpenNebula deployment repository used and referenced in this guide is [Hosted Cloud OVHcloud](https://github.com/OpenNebula/hosted-cloud-ovhcloud).

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assistance on your specific use case and project.

Join our [community of users](/links/community).