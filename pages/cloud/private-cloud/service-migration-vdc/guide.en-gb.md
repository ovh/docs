---
title: Migrating an infrastructure to a new vDC
routes:
    canonical: '/pages/cloud/private-cloud/service-migration'
excerpt: Find out how to move your workload from an existing vDC to a new vDC in the same VMware infrastructure
hidden: true
updated: 2023-07-05
---
<style>
.ovh-api-main { background:#fff;}
</style> 

**This guide explains how to move virtual machines (VM) from a previous source virtual DataCenter (vDC) (DC or SDDC) to a new destination vDC (Essentials or Premier).**

> [!warning]
>
> The addition of a vDC of the latest generation and therefore the ability to move VMs to this new vDC is not yet available for all VMware infrastructures as upgrades and maintenance operations are in progress. We will notify you as soon as this option becomes available to you.
>

## Objective

In 2020, OVHcloud has launched 2 new ranges: Essentials and Premier. You can now upgrade from commercial ranges prior to 2019 to the new ranges while keeping the same VMware infrastructure (pcc-123-123-123-123) using Storage Motion and vMotion.

There are two aspects involved in this process:

- The OVHcloud infrastructure itself which includes the customer's side of administrating an infrastructure.
- The VMware infrastructure, which includes the entire VMware ecosystem.

## Requirements

- a PCC infrastructure (SDDC or DC)
- a [new or an empty vRack](/pages/cloud/private-cloud/using_private_cloud_in_vrack) added to your PCC infrastructure (SDDC or DC)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) (`Private Cloud`{.action} in the `Hosted Private Cloud`{.action} section)
- access to the vSphere Control Panel

## Instructions

> [!primary]
>
> If you want to be assisted by:
>
> - OVHcloud partners, who are certified and experts on our products, to assist you with your migration or perform it on your behalf, please click [this link](https://www.ovhcloud.com/en-gb/private-cloud-migration/).
> - our OVHcloud technical experts for tailored support and advice at every stage of your migration project, please click [this link](https://www.ovhcloud.com/en-gb/private-cloud-migration/).
>

This guide will utilise the notions of a **source vDC** and a **destination vDC**. Please find an index of the tasks you will be performing:

[Step 1 Design your infrastructure](#design)<br />
&ensp;&ensp;[Step 1.1 Choose between Premier or Essentials](#premoress)<br />
&ensp;&ensp;[Step 1.2 Select your hosts (compute)](#selecthosts)<br />
&ensp;&ensp;[Step 1.3 Select your datastores (storage)](#selectdatastores)<br />
[Step 2 Build your new infrastructure](#build)<br />
&ensp;&ensp;[Step 2.1 Add a new destination vDC](#addvdc)<br />
&emsp;&emsp;[Step 2.1.1 Check that your service is eligible to move to the target range](#eligible)<br />
&emsp;&emsp;[Step 2.1.2 Get your "serviceName"](#checkupgrade)<br />
&emsp;&emsp;[Step 2.1.3 Get your "planCode"](#checkupgradeto)<br />
&emsp;&emsp;[Step 2.1.4 Verify you are able to upgrade with your serviceName and planCode for destination range](#snandpncheck)<br />
&emsp;&emsp;[Step 2.1.5 Create the order](#createorder)<br />
&ensp;&ensp;[Step 2.2 Add new hosts and Datastores](#addhostandds)<br />
&ensp;&ensp;[Step 2.3 Convert a datastore to a global datastore](#converttoglobal)<br />
[Step 3 Prepare your destination vDC in the OVHcloud context](#preparevdcovhcontext)<br />
&ensp;&ensp;[Step 3.1 Check inherited characteristics (Certifications, KMS, access restrictions)](#checkovhcontext)<br />
&emsp;&emsp;[Step 3.1.1 Certifications](#certs)<br />
&emsp;&emsp;[Step 3.1.2 Key Management Server (KMS)](#kms)<br />
&emsp;&emsp;[Step 3.1.3 Access restrictions](#access)<br />
&ensp;&ensp;[Step 3.2 Assign users rights](#userrights)<br />
&ensp;&ensp;[Step 3.3 Activate Veeam Managed Backup & Zerto Disaster Recovery Options](#activateveeamzerto)<br />
&ensp;&ensp;[Step 3.4 Check your network (vRack, Public IP)](#checknetwork)<br />
&emsp;&emsp;[Step 3.4.1 vRack](#vrack)<br />
&emsp;&emsp;[Step 3.4.2 Public network](#publicnetwork)<br />
[Step 4 Prepare your destination vDC in the VMware context](#preparevdcvmwarecontext)<br />
&ensp;&ensp;[Step 4.1 Reconfigure VMware High Availability (HA)](#ha)<br />
&ensp;&ensp;[Step 4.2 Reconfigure VMware Distributed Resource Scheduler (DRS)](#drs)<br />
&ensp;&ensp;[Step 4.3 Rebuild resource pools](#respools)<br />
&ensp;&ensp;[Step 4.4 Recreate Datastores Clusters (if relevant)](#dsclusters)<br />
&ensp;&ensp;[Step 4.5 Enable vSAN (if relevant)](#vsan)<br />
&ensp;&ensp;[Step 4.6 Recreate vSphere networking](#vspherenetwork)<br />
&ensp;&ensp;[Step 4.7 Check inventory organisation (if relevant)](#inventory)<br />
&ensp;&ensp;[Step 4.8 Migrate NSX V to NSX (if pertinent)](#nsx)<br />
&emsp;&emsp;[Step 4.8.1 NSX Distributed Firewall](#dfw)<br />
&emsp;&emsp;[Step 4.8.2 NSX Distributed Logical Router](#dlr)<br />
&emsp;&emsp;[Step 4.8.3 NSX Edges](#edge)<br />
&emsp;&emsp;[Step 4.8.3.1 Create T1 and segments](#t1seg)<br />
&emsp;&emsp;[Step 4.8.3.2 DHCP](#dhcp)<br />
&emsp;&emsp;[Step 4.8.3.3 DNS](#dns)<br />
&emsp;&emsp;[Step 4.8.3.4 NAT Rules](#nat)<br />
&emsp;&emsp;[Step 4.8.3.5 Load Balancing NSX](#lb)<br />
&emsp;&emsp;[Step 4.8.3.6 Firewall for T0 T1 gateways](#fwgw)<br />
&emsp;&emsp;[Step 4.8.3.7 VPN](#vpn)<br />
&emsp;&emsp;[Step 4.8.3.7.1 IPSec](#ipsec)<br />
&emsp;&emsp;[Step 4.8.3.7.2 SSL VPN](#sslvpn)<br />
&emsp;&emsp;[Step 4.8.3.8 Reconfiguration of the Initial IP Block](#moveip)<br />
&ensp;&ensp;[Step 4.9 Extend Zerto Disaster Recovery Protection (if relevant)](#zerto)<br />
&emsp;&emsp;[Step 4.9.1 VPG as Source](#vpgsource)<br />
&emsp;&emsp;[Step 4.9.2 VPG as Destination](#vpgdest)<br />
[Step 5 Migrate your workload](#migrate)<br />
&ensp;&ensp;[Step 5.1 Storage Motion](#svmotion)<br />
&ensp;&ensp;[Step 5.2 vMotion](#vmotion)<br />
[Step 6 Finalize your migration](#finalizemigration)<br />
&ensp;&ensp;[Step 6.1 Reconfigure Veeam Managed Backup (if relevant)](#reconveeam)<br />
&ensp;&ensp;[Step 6.2 Reconfigure Zerto Disaster Recovery (if relevant)](#reconzerto)<br />
&ensp;&ensp;[Step 6.3 Recreate Affinity rules](#recreateaffinity)<br />
&ensp;&ensp;[Step 6.4 Put hosts in maintenance mode](#hostmm)<br />
&ensp;&ensp;[Step 6.5 Remove old datastores](#removeoldds)<br />
&ensp;&ensp;[Step 6.6 Remove old hosts](#removeoldhosts)<br />
&ensp;&ensp;[Step 6.7 Remove the source vDC](#removeoldvdc)<br />

<a name="design"></a>
### Step 1 Design your infrastructure

At the end of step 1, you should have a clear view of which 2020 commercial range you want to upgrade to, as well as which hosts and storage you want to use.
<a name="premoress"></a>
#### Step 1.1 Choose between Premier or Essentials

As an Hosted Private Cloud VMware customer with host prior to 2020, you want to upgrade to 2020 hosts.
First, you would need to select a commercial range between [Essentials](https://www.ovhcloud.com/en-gb/managed-bare-metal/) (2018 Intel CPU, no NSX, no certification, network bandwith ~1Gbps) and [Premier](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) (2020 Intel CPU,NSX mandatory, certifications available, network bandwith ~10Gbps)
Please note that this choice is definitive.

Here are a few guidelines:

- If you are using or you plan to use [NSX](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/nsx-datacenter-vsphere/) => you must upgrade to [Premier](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/)
- If you need your VMware infrastructure to be [certified](https://www.ovhcloud.com/en-gb/enterprise/certification-conformity/) (HDS, PCI-DSS, HIPA) => you must upgrade to [Premier](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/)
- If you don't have NSX on your current infrastructure and you don't have need for certifications => you can choose between [Essentials](https://www.ovhcloud.com/en-gb/managed-bare-metal/) and [Premier](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/). As a general rule of thumbs, Essentials hosts have a better cost/core ratio while Premier ones optimize cost/RAM ratio. You can compare [Essentials hosts](https://www.ovhcloud.com/en-gb/managed-bare-metal/options/) and [Premier hosts](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/hosts/)
- Veeam Managed Backup and Zerto Disaster Recovery options are available on both Essentials and Premier
- If your current infrastructure is in AMD-2013, you will not be able to migrate to Premier.

Please be reminded that you do not create a new service, you will need to order your resources individually. Creating a new vDC will not deliver 2 hosts and 2 datastores.

![decision tree](images/ESSorPRE.png){.thumbnail}

<a name="selecthosts"></a>
#### Step 1.2 Select your hosts (compute)

You have now chosen your commercial range.

Based on your needs in terms of compute (CPU, RAM), you can select which type and how many hosts you would order between [Essentials hosts](https://www.ovhcloud.com/en-gb/managed-bare-metal/options/) and [Premier hosts](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/hosts/). For exemple, if you currently use 3xDC2016 XL+, and have chosen Essentials, you can upgrade to 3xESS128 (thanks to more powerful CPU) or 3xESS256 (if RAM is your criteria). 

Please note that this choice is not definitive, you can start with the 3xESS128 and upgrade to 3xESS256 later on.
<a name="selectdatastores"></a>
#### Step 1.3 Select your datastores (storage) <a name="introduction"></a>

You have now chosen your commercial range and your hosts. Please note that some of your actual datastores might be compatible with the newer ranges, that is to say those datastores can be made global. A global datastore is a datastore mounted on all clusters / virtual datacenters within a VMware infrastructure, i.e. shared between the source vDC and the destination vDC. Run the OVHcloud API to check datastores compatibility:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/checkGlobalCompatible
>

**Expected return:** boolean

If the API return is `TRUE`, this datastore is compatible with the newer ranges and you can keep this datastore, you will make it global later on in the upgrade process.
If the API return is `FALSE`, this datastore is not compatible, you will need to order new datastores, either [Essentials datastores](https://www.ovhcloud.com/en-gb/managed-bare-metal/options/) or [Premier datastores](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/datastores-nfs/).<br>
Based on your needs in terms of storage capacity, you can select which type and how many datastores you would order.

You only need to replace the datastores that are not compatible. You will be able to release the datastores that are not compatible after you upgrade your storage.

Please note that this choice is not definitive, you can start with 4x3Tb and switch to 2x6Tb later on.
<a name="build"></a>
### Step 2 Build your new infrastructure

At the end of step 2, you should have within your existing VMware infrastructure (pcc-123-123-123-123) a new Destination vDC with new 2020 hosts, and global datastores. 
<a name="addvdc"></a>
#### Step 2.1 Add a new destination vDC

You can add a destination vDC following those steps:
<a name="eligible"></a>
##### Step 2.1.1 Check that your service is eligible to move to the target range

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/commercialRange/compliance
>

**Expected return:** you will see a list of the commercial ranges compatible with your VMware infrastructure, including Essentials or Premier if you are compatible. Please note that vDC migration path is not yet available to all services because upgrades and maintenance operations are in progress. We will notify you as soon as this migration is possible for your infrastructure.
<a name="checkupgrade"></a>
##### Step 2.1.2 Get your "serviceName"

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee
>

**Expected return:** you should get "pcc-123-123-123-123/managementfee" 

<a name="checkupgradeto"></a>
##### Step 2.1.3 Get your "planCode"

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee/{serviceName}
>

**Expected return:** you should get the plan code for the next API call "pcc-management-fee-premier" or "pcc-management-fee-essentials"
<a name="snandpncheck"></a>
##### Step 2.1.4 Verify you are able to upgrade with your serviceName and planCode for destination range

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee/{serviceName}/{planCode} ( quantity : 1 )
>

**Expected return:** you should get a provisional order for the upgrade to Premier or Essentials 
<a name="createorder"></a>
##### Step 2.1.5 Create the order

> [!api]
>
> @api {POST} /order/upgrade/privateCloudManagementFee/{serviceName}/{planCode} ( quantity : 1 )
>

**Expected return:** order.upgrade.OperationAndOrder

This API call generates an order that needs to be validated. If you don’t have a payment method, please contact your support team or Account Manager to get it validated.

> [!primary]
>
> You will not be able to see the new vDC in the vSphere client until you have assigned the correct permissions to users for the new vDC.
>

<a name="addhostandds"></a>
#### Step 2.2 Add new hosts and Datastores

In the OVHcloud Control Panel, you will see your new vDC attached to your existing service. You can proceed with ordering new hosts and datastores (selected in step 1) in the new Destination vDC following this [Information about Hosted Private Cloud billing](/pages/cloud/private-cloud/information_about_dedicated_cloud_billing#add-resources-billed-monthly) guide.
<a name="converttoglobal"></a>
#### Step 2.3 Convert a datastore to a global datastore

You now have new datastores in the new virtual Datacenter, as well as compatible datastores in the previous datacenter. You can convert those datastores to global

Run the OVHcloud API to convert the datastore to global:

> [!api]
>
> @api {POST}  /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/convertToGlobal
>

**Expected return:** Task information
<a name="preparevdcovhcontext"></a>
### Step 3 Prepare your destination vDC in the OVHcloud context
<a name="checkovhcontext"></a>
#### Step 3.1 Check inherited characteristics (Certifications, KMS, access restrictions)
<a name="certs"></a>
##### Step 3.1.1 Certifications

These options are enabled per vCenter and apply to any vDC.
If an option has been enabled, they stay available on the destination vDC.
<a name="kms"></a>
##### Step 3.1.2 Key Management Server (KMS)

This option is to enable and configure per vCenter and apply to any vDC.
If virtual machines are protected by encryption, they stay protected on the destination vDC.
<a name="access"></a>
##### Step 3.1.3 Access restrictions

For connections to the VMware platform, you can choose to block access to vSphere by default. Please refer to our guide on the [vCenter access policy](/gb/en/private-cloud/modify-vcenter-access-policy/) for details.

If the access policy has been changed to "Restricted", the new vDC will inherit the access policy that the source vDC uses.
<a name="userrights"></a>
#### Step 3.2 Assign users rights

In the lifecycle of the source vDC, a list of users may have been created for business or organisational needs. These users will also be present on the new vDC but will have no permissions on this new vDC. You must therefore assign the users the appropriate rights, depending on the configuration of the destination vDC.

To do this, please refer to our guides on [Changing user rights](/pages/cloud/private-cloud/change_users_rights), [Changing the User Password](/pages/cloud/private-cloud/changement_du_mot_de_passe_utilisateur) and [Associating an email with a vSphere user](/pages/cloud/private-cloud/vsphere_edit_user).
<a name="activateveeamzerto"></a>
#### Step 3.3 Activate Veeam Managed Backup & Zerto Disaster Recovery Options

This options are enabled and configured per vDC.
You need to enable the relevant option on the new vDC.
<a name="checknetwork"></a>
#### Step 3.4 Check your network (vRack, Public IP)
<a name="vrack"></a>
##### Step 3.4.1 vRack

> [!warning]
>
> VMnetworks located in the same region cannot be interconnected in a vRack.
>

As part of a migration process, by default, the new vDC will be linked to the same vRack as the source vDC. Please consult our guide to [Using Private Cloud within a vRack](/pages/cloud/private-cloud/using_private_cloud_in_vrack).
<a name="publicnetwork"></a>
##### Step 3.4.2 Public network

The Public IP addresses attached to the source vDC will automatically be available for use in the destination vDC.
<a name="preparevdcvmwarecontext"></a>
### Step 4 Prepare your destination vDC in the VMware context
<a name="ha"></a>
#### Step 4.1 Reconfigure VMware High Availability (HA)

Setting up a new vDC involves reconfiguring VMware High Availability (HA), including boot order and priority. Please consult our guide about [VMware HA configuration](/pages/cloud/private-cloud/vmware_ha_high_availability).

Here is a checklist of aspect to take into account:

- Host monitoring settings
- VM monitoring settings
- Admission control
- Advanced HA options
- VM Overrides

**Automation tips:** Powercli cmdlet “Get-Cluster” returns information on HA and DRS configuration settings that can be applied to the destination cluster with “Set-Cluster” cmdlet.
<a name="drs"></a>
#### Step 4.2 Reconfigure VMware Distributed Resource Scheduler (DRS)

Setting up a new vDC involves reconfiguring the VMware Distributed Resource Scheduler (DRS) feature, in particular the affinity or anti-affinity rules for groups of hosts and VMs. Please consult our guide about [configuring VMware DRS](/pages/cloud/private-cloud/vmware_drs_distributed_ressource_scheduler_new).

Here is a checklist of aspects to take into account:

- Automation level
- VM/Hosts Groups
- VM/Host affinity/anti-affinity rules
- VM Overrides

**Automation tips:** [This VMware community thread](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) details options to export and import affinity-rules via powercli.
<a name="respools"></a>
#### Step 4.3 Rebuild resource pools

Setting up a new vDC requires rebuilding resource pools including reservations, shares, and vApps. This also applies to vApps and any start-up order configuration set in the vApps.

For more information, consult [VMware's documentation for managing resource pools](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

Here is a checklist of aspects to take into account:

- CPU/Memory shares settings
- CPU/Memory reservations
- CPU/Memory expandable option
- CPU/Memory Limits

**Automation tips:** Powercli cmdlet “Get-ResourcePool” to gather the resource pool information and cmdlet “New-ResourcePool” to recreate the resource pool on the destination vDC.
<a name="dsclusters"></a>
#### Step 4.4 Recreate Datastores Clusters (if relevant)

If datastore clusters are present in the source vDC, setting up a new vDC may involve the need to recreate these Datastore Clusters on the destination vDC if the same level of structure and SDRS is needed.

Here is a checklist of aspects to take into account:

- SDRS automation level
- SDRS space, I/O, rule, policy, VM evacuation settings
- SDRS affinity/anti-affinity rules
- SDRS VM Overrides
<a name="vsan"></a>
#### Step 4.5 Enable vSAN (if relevant)

If vSAN was enabled on your source VDC, you will need to enable it again on the destination vDC. Please refer to our guide on [Using VMware Hyperconvergence with vSAN](/pages/cloud/private-cloud/vmware_vsan).
<a name="vspherenetwork"></a>
#### Step 4.6 Recreate vSphere networking

Setting up a new vDC involves recreating the vRack VLAN-backed portgroups on the destination vDC to ensure VM network consistency. If vRack VLANs are in use on the source VDC, vRack can be used to stretch the L2 domain to the destination vDC to allow for a more phased migration plan. For more information consult our guide about [Using Hosted Private Cloud within a vRack](/pages/cloud/private-cloud/using_private_cloud_in_vrack).

Here is a checklist of aspects to take into account:

- Portgroup VLAN type
- Security settings (**Important in case promiscuous mode is needed**)
- Teaming and Failover settings
- Customer network resource allocation

For more information, consult OVHcloud's guide [How to create a V(x)LAN within a vRack](/pages/cloud/private-cloud/creation_vlan#vlan-vrack) and VMware's documentation on [how to edit general distributed port group settings](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html){.external}.

**Automation tips:** Powercli cmdlet “Export-VDPortGroup” can retrieve Distibuted Virtual Portgroup information which can then be imported into the destination Distributed Switch with the use of the “New-VDPortgroup -BackupPath” cmdlet.

> [!warning]
>
> - Some virtual routing appliances such as pfSense use CARP to provide high availability.
> - VMs that use CARP will need “Promiscuous Mode” enabled in the security settings of a portgroup.
> - Customers can enable this setting themselves on the vRack vDS on the destination vDC.
> - However, if promiscuous mode needs to be enabled on the “VM Network” portgroup in the new vDC, please open a ticket with OVHcloud support before migration to ensure connectivity remains during migration.
>

<a name="inventory"></a>
#### Step 4.7 Check inventory organisation (if relevant)

For organisational reasons, the VMs, hosts or datastores may have been placed in directories.

If you still need this organisation, you will need to create it again in the destination vDC.

<a name="nsx"></a>
#### Step 4.8 Migrate NSX V to NSX (if applicable)

As part of an NSX V to NSX T migration, several NSX V services need to be migrated to NSX T. If you are using any of the services listed below, here is a step-by-step guide on how to migrate them. 

> [!primary]
> If you need technical support, our [Professional Services] team (https://www.ovhcloud.com/en-gb/professional-services/) can help you rebuild your network architecture with customized services.

As a first step, please read our documentation on [getting started with NSX](/pages/cloud/private-cloud/nsx-01-first-steps).

<a name="dfw"></a>
##### Step 4.8.1 NSX Distributed Firewall

The NSX distributed firewall automatically protects the entire vDC. The Migration Coordinator tool allows you to do this, though a ticket must be created so that a support agent can trigger it. You can also call our [Professional Services](https://www.ovhcloud.com/en-gb/professional-services/) team to trigger the procedure.

However, it is crucial to understand that objects placed in the Distributed Firewall will correspond to the significant object ID locally. For example, if a vRack VLAN port group is used in a rule in the Distributed Firewall, it will reference the port group from the original vDC only, not from a recreated vRack port group in the destination vDC.

It will be necessary to verify if the Distributed Firewall contains significant local objects and modify the Distributed Firewall so that it can also see the objects in the new vDC. For example, a rule that uses a vRack VLAN port group from the original vDC can be modified to use both the original vRack VLAN port group and the new vRack VLAN port group in the destination vDC.

The objects to be considered are:

- Clusters
- Datacenters
- Distributed Port Groups
- Legacy Port Groups
- Resource Pool
- vApp

For more information, read our documentation on [Managing the distributed firewall in NSX](/pages/cloud/private-cloud/nsx-05-manage-distributed-firewall).

<a name="dlr"></a>
##### Step 4.8.2 NSX Distributed Logical Router

The NSX V Distributed Logical Router does not have a direct equivalent in NSX. To migrate the Distributed Logical Router, routing should be directly done in the T1 Gateways.

<a name="edge"></a>
##### Step 4.8.3 NSX Edges

Generally, depending on the number of edges deployed via NSX-V in the source vDC, you should create T1 Gateways in the NSX of the destination vDC. However, it might be beneficial to step back and review the implemented network architecture to better align with the requirements of the new NSX product.

Additionally, if your production requires zero service interruption, solutions can be implemented to avoid these disruptions.

In both cases mentioned above, our [Professional Services](https://www.ovhcloud.com/en-gb/professional-services/) team can assist you in this process.

Professional Services can also use the Migration Coordinator Tool to generate an NSX network blueprint based on your existing NSX V architecture, in order to expedite/simplify the migration process.

<a name="t1seg"></a>
##### Step 4.8.3.1 Create T1 and segments

To create T1 Gateways, follow our documentation on [Adding a New Tier-1 Gateway](/pages/cloud/private-cloud/nsx-10-add-new-tier1-gateway). This documentation also guides you on how to create segments. Before creating segments, it is necessary to inventory the VXLANs used in the source vDC and create a segment for each VXLAN used in your infrastructure.

Afterwards, you can connect them to the provided T0 in NSX.

For more information, read our documentation on [segment management in NSX](/pages/cloud/private-cloud/nsx-02-segment-management).

It is also possible to create VLAN-type segments and connect them to vRack via the `ovh-tz-vrack` Transport Zone. Then, either at the T1 level or at the T0 level with Service-type interfaces, VLAN segments should be positioned to establish connectivity with vRack via NSX.

<a name="dhcp"></a>
##### Step 4.8.3.2 DHCP

To recreate DHCP and associate them with your segments and T1 Gateways, refer to our guide on [configuring DHCP in NSX](/pages/cloud/private-cloud/nsx-03-configure-dhcp-onsegment).

<a name="dns"></a>
##### Step 4.8.3.3 DNS

To recreate DNS and associate them with your T1 Gateways, please refer to our guide on [configuring the DNS forwarder in NSX](/pages/cloud/private-cloud/nsx-04-configure-dns-forwarder/).

<a name="nat"></a>
##### Step 4.8.3.4 NAT Rules

To recreate your NAT rules and associate them with the T1 Gateways, please refer to our guide on [Setting up NAT for port redirections with NSX](/pages/cloud/private-cloud/nsx-07-configure-nat-redirection).

<a name="lb"></a>
##### Step 4.8.3.5 NSX Load Balancing

To recreate your Load Balancers, follow the instructions in our guide on [configuring Load Balancing in NSX](/pages/cloud/private-cloud/nsx-09-configure-loadbalancing).

<a name="fwgw"></a>
##### Step 4.8.3.6 T0 T1 Gateway Firewall

To recreate the firewall rules associated with your previous edges, please refer to our guide on [Gateway Firewall Management in NSX](/pages/cloud/private-cloud/nsx-06-manage-gateway-firewall).

<a name="vpn"></a>
##### Step 4.8.3.7 VPN 

<a name="ipsec"></a>
##### Step 4.8.3.7.1 IPSec 

To recreate your IPSec sessions, please refer to our guide on [setting up an IPsec Tunnel with NSX](/pages/cloud/private-cloud/nsx-12-configure-ipsec).

<a name="sslvpn"></a>
##### Step 4.8.3.7.2 SSL VPN

If you are using SSL VPN functionality, unfortunately, this feature no longer exists in NSX. However, there are open-source alternatives available, such as OpenVPN, OpenConnect VPN, WireGuard, etc. These network appliances need to be deployed on dedicated VMs hosted in your HPC. Each client needs to be installed on the employees' workstations to regain access to their VPN.

<a name="moveip"></a>

##### Step 4.8.3.8 Reconfiguration of the Initial IP Block

> [!warning]
> This step will result in a service interruption as all traffic will be redirected to the T0 VIP.
> It is up to you to decide whether you want to point the primary IP block of NSX V to the NSX T0 before or after migrating your VMs (see [Step 5.2](#vmotion)).
>

For this step, you will need two elements:

- The IP block initially associated with the NSX V vDC.
- The public IP of the VIP associated with the NSX T0 (visible in `Networking`{.action} => `Tier-0 Gateways`{.action} => `ovh-T0-XXXX`{.action} => expand => `HA VIP Configuration`{.action} => click on `1`{.action} => `IP Address / Mask`{.action} section)

Next, in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB), follow the instructions in our [Move an Additional IP](/pages/cloud/dedicated/move-failover-ip) guide to move the initial NSX-V block to the PCC service you are migrating, but specify the VIP IP of the T0 as the "next hop", as shown in the example below:

![NSX IP Migration](images/MoveIPNextHop.png){.thumbnail}

<a name="zerto"></a>
#### Step 4.9 Extend Zerto Disaster Recovery Protection (if relevant)

The Zerto Replication is configured at the vDC level. To protect workload on the new vDC, you need to do some actions.

> **Prerequisites:**
>
> - Having a new vDC
> - Having under the new vDC a host cluster with the required number of hosts (same as the source cluster with a minimum of 2 hosts)
> - Having under the new vDC a datastore that can be accessible from the two (2) hosts
> - Having enabled Zerto Replication on the new vDC
>

Run the OVHcloud API to prepare the migration:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/startMigration
>

`{datacenterId}` is the **new** vDC id, you can get it with the following API call:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

A task is launched on the infrastructure to deploy vRA on each of the hosts of the new vDC.

> [!warning]
> The hosts ordered in the new vDC after executing this API call will no longer have Z-VRA automatically.
> In this case, you will need to contact the support teams in order to deploy the Z-VRA on the new hosts. This change will only last for the migration time of your infrastructure, until you use the Zerto migration end API call [Step 6.2](#reconzerto).

After this, the Zerto Replication will work on both datacenters:

- the old one is still running and protects your workload
- the new one is ready to host your workload

The next step depends on the current configuration per [Virtual Protection Group](/pages/cloud/private-cloud/zerto_virtual_replication_as_a_service):

- source of replication
- destination of replication
<a name="vpgsource"></a>
##### Step 4.9.1 VPG as Source

With the migration on the new vDC, Zerto will continue to protect workload with vRA deployed on the target cluster and hosts.
<a name="vpgdest"></a>
##### Step 4.9.2 VPG as Destination

Unfortunately, there is no way to update VPG configuration, the only option is to delete the VPG and create a new one.
<a name="migrate"></a>
### Step 5 Migrate your workload
<a name="svmotion"></a>
#### Step 5.1 Storage Motion

You now have old datastores in the previous vDC (not compatible with the new ranges) and global datastores (either previous compatbile ones or new ones). You can use [Storage Motion](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-AB266895-BAA4-4BF3-894E-47F99DC7B77F.html) to move a virtual machine and its disk files from one datastore to another while the virtual machine is running. 
<a name="vmotion"></a>
#### Step 5.2 vMotion

Since both source and destination vDC are within the same vCenter, hot or cold VMware vMotion can be used to migrate VMs.

**Hot vMotion** can be used when the CPU chipset is the same between source and destination (eg Intel to Intel).

**Cold vMotion** can be used when the CPU chipset is different between source and destination (eg AMD to Intel).

Here is a checklist of aspects to take into account:

- ESXi host CPU chipsets on source and destination vDCs
- EVC modes on source and destination Clusters
- vDS versions are the same between source and destination vDC. You can upgrade the vDS vRACK in the source vDC. For the vDS with VM Network (VXLAN vDS), please contact the support so that the vDS can be upgraded.

> [!primary]
> It is recommended to test the migration path with low-impact or test VMs before production migration.
>

<a name="finalizemigration"></a>
### Step 6 Finalize your migration
<a name="reconveeam"></a>
#### Step 6.1 Reconfigure Veeam Managed Backup (if relevant)

If OVHcloud provided Veeam is currently in use to backup VMs on the source vDC, it will be necessary to use the OVHcloud API to re-check the backup jobs after the VMs have been migrated to the new vDC.

Here is how to proceed:

> [!primary]
>
> `{datacenterId}` is the **old** vDC id, you can get it with the following API call:
>
> > [!api]
> >
> > @api {GET} /dedicatedCloud/{serviceName}/datacenter
> >
>

1\. Enable the Veeam Managed Backup option on the new vDC from the OVHcloud Control Panel.

2\. Migrate the VM(s) from source vDC to destination vDC.

3\. Run the OVHcloud API to re-check the backup date:

> [!warning]
>
> This API call is to be executed on the old vDC (source vDC).

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/checkBackupJobs
>

4\. If you have migrated only part of the virtual machines whose backups are enabled, you can repeat steps 2 and 3 in order to transfer their backup jobs to the new vDC.

Before you continue, you can check visually, in the graphic Backup Management plug-in on the new vDC, that the backup jobs are present and active. You can then disable Veeam Backup on the old vDC. You can do this via the following API call:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable
>

> [!warning]
>
> Warning, this last call will remove the Veeam option from the vDC. This will result in the destruction of all backup jobs / retention points that would still be present on the old vDC.<br>
> Do not hesitate to first use the API call “checkBackupJobs” (mentioned in step 3 above) several times to ensure you have backups on the new vDC.<br>
> If you have any doubts, contact OVHcloud support to monitor backup jobs.
>

<a name="reconzerto"></a>
#### Step 6.2 Reconfigure Zerto Disaster Recovery (if relevant)

Run the OVHcloud API to finalize the migration:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/disasterRecovery/zerto/endMigration
>

`{datacenterId}` is the **new** vDC id, you can get it with the following API call:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

A task is launched to:

- Check if no destination VPG still exists on the datacenter: they MUST be removed.
- Switch the Zerto Replication option (subscription) from the old to the new vDC.
- Remove all vRA from hosts on the old vDC.
<a name="recreateaffinity"></a>
#### Step 6.3 Recreate Affinity rules

Affinity rules are based on VM objects so rules can only be created after VMs have been migrated to the destination vDC. Once the migration is completed, affinity rules can be re-applied on the destination vDC.

**Automation tips:** [This VMware community thread](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) details options to export and import affinity-rules via powercli.
<a name="hostmm"></a>
#### Step 6.4 Put hosts in maintenance mode

You must put hosts in maintenance mode by following these steps:

1. In the vSphere Client navigate to `Hosts and Clusters`{.action}.
2. Navigate to a `Host`{.action}.
3. Right click the `Host`{.action}.
4. Navigate to `Maintenance Mode`{.action}.
5. Click `Enter Maintenance Mode`{.action}.

Repeat action for each host.
<a name="removeoldds"></a>
#### Step 6.5 Remove old datastores

At this step, we can consider there is no longer any data and/or VM on the old vDC, so we can now remove resources.

In the following instructions, `{datacenterId}` is the **old** vDC id, you can get it with the following API call:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

With the API, get the filer (datastore) id list:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer
>

Then for each id:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove
>

For global datastores, you can use the following API call :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/filer/{filerId}/remove
>

A task is created for each call, you can follow the progress with:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/task/{taskId}
>

> [!warning]
>
> Wait for the full completion of tasks before continuing.
>

<a name="removeoldhosts"></a>
#### Step 6.6 Remove old hosts

In the following instructions, `{datacenterId}` is the **old** vDC id, you can get it with the following API call:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

With the API, get the host id list:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host
>

Then for each id:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/remove
>

A task is created for each call, you can follow the progress with:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/task/{taskId}
>

> [!warning]
>
> Wait for the full completion of tasks before continuing.
>

<a name="removeoldvdc"></a>
#### Step 6.7 Remove vDC

In the following instructions, `{datacenterId}` is the **old** vDC id, you can get it with the following API call:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

With the API, ask for the vDC deletion:

> [!api]
>
> @api {DELETE} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
>

## FAQ

Please find below a list of Frequently Asked Questions, do not hesitate to submit your own via github.

> [!faq]
>
> Are there any constraints or impact when sharing a datastore across my vDCs ?
>> No, there is no impact on current workload or on billing, or on ZFS snapshots. However, currently you are unable to unshare a datastore. We will change this later. 
> Will the VMs (with public IPs) be accessible from the exterior if they are in the new vDC when the PFSENSE are in the old vDC?
>> Yes, VM network is on the VMware infrastructure level and so on the 2 vDC.
> Can I implement a PFSENSE in the old vDC and another one in the new vDC?
>> Yes, it’s even required to have 2 different PFSENSEs to avoid IP conflicts.
> Are vxLANs available on both vDC?
>> The vxLANs are available on Premier only, and not on Essentials (as there is no NSX deployed).
> We don't use NSX. The migration procedure indicates that the source/destination DVS must be at the same version. On the source, our only DVS is in 6.0.0 so I imagine it needs to be updated. The doc / video / and the interface indicate that we can do it ourselves without cutting if it's vRack. I thought it was vRack but we can't update (the menu is greyed out). Does that mean it's vxlan? How do you tell the difference between vRack and vxlan?
>> If it's greyed out, it's probably the public DVS (vmnetwork) /vxlan. The bulk DVS is a second DVS with the word "vrack" at the end. Do not hesitate to open a support ticket so that we can confirm this with you and do the DVS upgrade if necessary.
> How do I know if my network adapters are VLAN or VxLAN and Essential compatible? In vSphere, I see for example and without more details: vxw-dvs-74-virtualwire-20-sid-....
>> Anything %-virtualwire-% is vxlan.
> If I have several VMs that go through the same NSX Edge, will it be necessary to migrate all the VMs and the Edge at the same time, at the risk of no longer having an Internet connection on certain VMs otherwise ?
>> Yes, either the EDGE would have to be moved with a redeployment before moving the VMs. Depending on the case, with extended networks or not, the 2 actions can be separated. 
> Can a DRS pool be created for global datastores? I believe I have already tried without success between 2 vDC 2014 / 2016.
>> Indeed, there are limitations for global datastores, we advise to use them only to migrate between the two vDCs and then to have "standard" datastores on the new vDC and to make the global datastores at the end of migration.
> We have a 2016 SDDC with 6 x 6 TB Acceleraded SSD (ordered in 2021) with "convert to global" available in the OVHcloud Control Panel. Can we convert them to global and keep them as is in the new vDC (to avoid the vMotion storage phase)? Note: the 6 DS are in a storage cluster.
>> Yes, if the VMs point to these DS there will be no storage motion steps.
> What are the differences between upgrading to Essentials or Premier ? 
>> There are no major differences, only the NSX steps are mandatory when upgrading to Premier and not relevant if you have selected Essentials.
> How much time do we need to plan to upgrade (depending on the number of VMs)?
>> We have measured transfer speed from 0.5 to 1TB per hour for the Storage Motion Step. Regarding the vMotion, it depends on the size of the VMs, normally less than a minute; it can take up to 3 minutes.
> What Microsoft licenses are available in SPLA mode?
>> Windows licences (standard and datacenter) and SQL server licences (standard and web) are available on 2020 offers in SPLA mode.
> I have to upgrade 2 VMware infrastructures that are currently used for DR purposes with data replication done by Zerto. Should I first upgrade my secondary infrastructure or my primary infrastructure?
>> There is no right or wrong, we recommend upgrading the secondary infrastructure first to master the upgrade process before upgrading the primary one.
> Will the historical pricing cap on hourly resources still be deployed?
>> No, the capping system has been disabled on 2020 offers (Premier & Essentials). All previous ranges will continue to run with the capping in place. 
> Will my old offer pricing change?
>> No repricing of old offers is planned.
> In what language are OVHcloud's Professional Services available?
>> OVHcloud's Professional Services are available both in French and English.
> Can OVHcloud's Professional Services recreate my user accounts & NSX configurations for me?
>> Our Professional Services will not run any operations on the customer's infrastructure. We are here to help, guide and provide advice. In this case, we will redirect our customers to partners, who can run operations in customer infrastructures. 
> How long does the Pack of Technical Advice Services credits last?
>> This service lasts for 3 months from date of order.
> How do I know how many hours of credits have been used, and are remaining?
>> Your OVHcloud Sales contact or Technical Lead contact are able to give you this information.
> What happens if the Advice Service session takes less time than planned?
>> A session is scheduled and accounted in blocks of 1 hour. For example, a session scheduled for 2 hours but taking 1.5 hours would be billed at 2 hours. A session scheduled for 3 hours which only took 1.5 hours would be charged at 2 hours.

## Go further

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](https://www.ovhcloud.com/en-gb/professional-services/) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Join our community of users on <https://community.ovh.com/en/>.
