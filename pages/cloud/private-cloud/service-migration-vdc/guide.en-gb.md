---
title: Migrating an infrastructure to a new vDC
routes:
    canonical: 'https://docs.ovh.com/gb/en/private-cloud/sddc-migration/'
excerpt: Find out how to move your workload from an existing vDC to a new vDC in the same VMware infrastructure
slug: vdc-migration
section: Getting started
order: 6
hidden: true
---
<style>
.ovh-api-main { background:#fff;}
</style> 

**Last updated 15th November 2022**

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
- a [new or an empty vRack](https://docs.ovh.com/gb/en/private-cloud/using-private-cloud-with-vrack/) added to your PCC infrastructure (SDDC or DC)
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
&ensp;&ensp;[Step 4.8 Reconfigure NSX (if relevant)](#nsx)<br />
&emsp;&emsp;[Step 4.8.1 v(x)lan Transport Zones](#transportzones)<br />
&emsp;&emsp;[Step 4.8.2 NSX Edges](#edges)<br />
&emsp;&emsp;[Step 4.8.3 NSX Distributed Logical Routing](#dlr)<br />
&emsp;&emsp;[Step 4.8.4 NSX Distributed Firewall](#dfw)<br />
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

In the OVHcloud Control Panel, you will see your new vDC attached to your existing service. You can proceed with ordering new hosts and datastores (selected in step 1) in the new Destination vDC following this [Information about Dedicated Cloud billing](https://docs.ovh.com/gb/en/private-cloud/information_about_dedicated_cloud_billing/#add-resources-billed-monthly) guide.
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

For connections to the VMware platform, you can choose to block access to vSphere by default. Please refer to our guide on the [vCenter access policy](../modify-vcenter-access-policy/) for details.

If the access policy has been changed to "Restricted", the new vDC will inherit the access policy that the source vDC uses.
<a name="userrights"></a>
#### Step 3.2 Assign users rights

In the lifecycle of the source vDC, a list of users may have been created for business or organisational needs. These users will also be present on the new vDC but will have no permissions on this new vDC. You must therefore assign the users the appropriate rights, depending on the configuration of the destination vDC.

To do this, please refer to our guides on [Changing user rights](../change-users-rights/), [Changing the User Password](../changing-user-password/) and [Associating an email with a vSphere user](../associate-email-with-vsphere-user/).
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

As part of a migration process, by default, the new vDC will be linked to the same vRack as the source vDC. Please consult our guide to [Using Private Cloud within a vRack](../using-private-cloud-with-vrack/).
<a name="publicnetwork"></a>
##### Step 3.4.2 Public network

The Public IP addresses attached to the source vDC will automatically be available for use in the destination vDC.
<a name="preparevdcvmwarecontext"></a>
### Step 4 Prepare your destination vDC in the VMware context
<a name="ha"></a>
#### Step 4.1 Reconfigure VMware High Availability (HA)

Setting up a new vDC involves reconfiguring VMware High Availability (HA), including boot order and priority. Please consult our guide about [VMware HA configuration](../vmware-ha-high-availability/).

Here is a checklist of aspect to take into account:

- Host monitoring settings
- VM monitoring settings
- Admission control
- Advanced HA options
- VM Overrides

**Automation tips:** Powercli cmdlet “Get-Cluster” returns information on HA and DRS configuration settings that can be applied to the destination cluster with “Set-Cluster” cmdlet.
<a name="drs"></a>
#### Step 4.2 Reconfigure VMware Distributed Resource Scheduler (DRS)

Setting up a new vDC involves reconfiguring the VMware Distributed Resource Scheduler (DRS) feature, in particular the affinity or anti-affinity rules for groups of hosts and VMs. Please consult our guide about [configuring VMware DRS](../vmware-drs-distributed-ressource-scheduler/).

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

If vSAN was enabled on your source VDC, you will need to enable it again on the destination vDC. Please refer to our guide on [Using VMware Hyperconvergence with vSAN](../vmware-vsan/).
<a name="vspherenetwork"></a>
#### Step 4.6 Recreate vSphere networking

Setting up a new vDC involves recreating the vRack VLAN-backed portgroups on the destination vDC to ensure VM network consistency. If vRack VLANs are in use on the source VDC, vRack can be used to stretch the L2 domain to the destination vDC to allow for a more phased migration plan. For more information consult our guide about [Using Hosted Private Cloud within a vRack](../using-private-cloud-with-vrack/).

Here is a checklist of aspects to take into account:

- Portgroup VLAN type
- Security settings (**Important in case promiscuous mode is needed**)
- Teaming and Failover settings
- Customer network resource allocation

For more information, consult OVHcloud's guide [How to create a V(x)LAN within a vRack](../creation-vlan-vxlan/#vlan-vrack) and VMware's documentation on [how to edit general distributed port group settings](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html){.external}.

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
#### Step 4.8 Configure NSX (if relevant)
<a name="transportzones"></a>
##### Step 4.8.1 v(x)lan Transport Zones

Whether or not VXLANs or DLRs are in use in the source vDC, it will be required to extend Transport Zone(s) when moving from source vDC to destination vDC if NSX Edges are in use. The reason behind this is to create PCC-wide VXLAN network IDs that will assist in Edge migration

The VXLAN transport zone determines the boundaries of a VXLAN backed network and the routing of a DLR. Extending transport zone(s) ensures the same VXLAN networks and DLRs are available in both the source and destination vDCs
To achieve this, we need to edit the current Transport Zone to include the new cluster(s) that are in the destination vDC.

You can do this by following these steps:

1\. In the vSphere Client navigate to `Networking and Security`{.action} then to `Installation and Upgrade`{.action}.

2\. Click the `Logical Network Settings`{.action} tab then the `Transport Zones`{.action} tab.

3\. Select a Transport Zone in here and click the `Connect Clusters`{.action} option.

4\. Select the new cluster(s) that are within the destination vDC and choose `Save`{.action}.

5\. Repeat for all, in-use, Transport Zones.

You can also create new VXLAN networks by following these steps:

1\. In the vSphere Client navigate to `Networking and Security`{.action} then to `Logical Switches`{.action}.

2\. Click `+ Add`{.action}.

3\. Give the Logical Switch/VXLAN a name and choose the Transport Zone.

4\. Click `Add`{.action}.
<a name="edges"></a>
##### Step 4.8.2 NSX Edges

To migrate an edge gateway, we need to instruct NSX manager to redeploy the edge gateway into the destination vDC. This is to ensure consistency within the NSX manager database. To do this, we need all interfaces on an edge gateway to be attached to VXLANs.

> [!primary]
>
> In this guide HA is disabled before migrating the NSX Edge gateway. This is to reduce downtime. It is possible to migrate an edge gateway with HA enabled but the downtime will be longer since two NSX Edges need to be migrated as opposed to one.
>

> **Prerequisites:**
>
> - If vRack VLANs are in use, ensure that the VLANs are re-created in the destination vDC and that the source and destination vDC are part of the same vRack. This will allow for L2 communication between vDCs.
>
> - For the edge migration, we will be switching all VLAN portgroups (including the VM Network) to VXLAN portgroups. Then we will migrate the edge to the new vDC. After this we will revert to VLAN portgroups. It is advised to keep track of what networks were switched.
>

You can migrate an NSX Edge by following these steps:

1\. In the vSphere Client navigate to `Networking and Security`{.action}.

2\. Navigate to `NSX Edges`{.action}.

3\. Choose the Edge you wish to migrate.

4\. Click the `Configure`{.action} tab.

5\. Click on the `High Availability`{.action} tab.

6\. Click `Edit`{.action}.

7\. Set “HA Status” to **Disabled** and wait for the task to complete.

8\. Click the `Interfaces`{.action} tab.

9\. In here the goal is  to change any interface that is connected to a VLAN backed portgroup, to a VXLAN backed portgroup. For example:

- Step 1 - Select the interface that is connected to the VM Network (or any other VLAN portgroup)
- Step 2 - Select `Edit`{.action}.
- Step 3 - Click the "pencil" icon next to the "Connected to" field.
- Step 4 - In the "Logical switch" tab, choose a temporary VXLAN network to connect this interface to. **Keep note of the VLAN to VXLAN mapping**.
- Step 5 - Click `OK`{.action}.
- Step 6 - Click `Save`{.action}.
- Step 7 - Repeat for all other VLAN backed portgroups.

> [!primary]
>
> - Take note of what VLAN networks correspond to the new VXLAN networks
>
> - Any VMs on a VLAN backed network that changes to a temporary VXLAN backed network will see network downtime
>

10\. Once all VLAN networks have been changed to VXLAN networks, click the `Appliance Settings`{.action} tab.

11\. Under the “Edge Appliance VMs” heading select the cog and `Edit`{.action}.

12\. In here fill out the parameters pointing to the new vDC and click `Save`{.action}.

13\. The edge gateway will redeploy into the destination vDC.

> [!primary]
>
> If you see details for two edges in the "Edge Appliance VMs" section even though you have disabled HA, you will need to either repeat the above steps to migrate this "ghost" edge, or select the cog for the ghost, "undeployed" edge and select `Delete`{.action}.
>

14\. Once the redeploy task is completed click the `Configure`{.action} tab.

15\. Click the `Interfaces`{.action} tab.

16\. In here the goal is to revert any VLAN backed network that was changed to VXLAN backed in step 9, back to the correct VLAN backed network that exists in the new vDC.

17\. Re-enable HA on the edge.

18\. Repeat for all other NSX Edges.

> [!primary]
>
> If you migrated the edge while HA was enabled and you are experiencing connectivity problems, it is recommended to failover the HA edges and re-test. This can be done by going to `Configure`{.action}, `Appliance Settings`{.action} and selecting the cog for the active edge then selecting `Set Admin State Down`{.action}. Re-test and change the admin state back to "Up".
>
<a name="dlr"></a>
##### Step 4.8.3 NSX Distributed Logical Routing

Once the NSX Transport Zone has been extended to the new vDC, Distributed Logical Routing will be available in the ESXi hosts on the destination vDC.

NSX Distributed Logical routers only need to be migrated when there is a Control VM deployed along side the DLR that facilitates dynamic routing.

If a control VM is deployed, please follow the NSX Edge migration steps above.

Note that you will not need to change interfaces as DLRs **must** already connect to VXLANs.
<a name="dfw"></a>
##### Step 4.8.4 NSX Distributed Firewall

The NSX Distributed Firewall protects the entire vDC automatically.  Thus, any new vDC will also be protected.

However, it is extremely important to understand that objects placed in the Distributed Firewal will match to locally significant object ID. For example, if a vRack VLAN portgroup is used in a rule in the Distributed Firewal it will reference the portgroup from the source vDC only and not any recreated vRack portgroup in the destination vDC.

It will be necessary to check the Distributed Firewal for locally significant objects and change the Distributed Firewal so that it also sees objects in the new vDC.  For example, a rule that uses a vRack VLAN portgroup from the source vDC can be changed to use both the source vRack VLAN portgroup and the newly created vRack VLAN portgroup in the destination vDC.

Objects that will need to be addressed:

- Clusters
- Datacenters
- Distributed Port Groups
- Legacy Port Group
- Resource Pool
- vApp
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

The next step depends on the current configuration per [Virtual Protection Group](../zerto-virtual-replication-vmware-vsphere-drp):

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

4\. Repeat steps 2 and 3 for all VMs that have backups enabled and have been migrated to the new vDC.

Before you continue, you can check visually, in the graphic Backup Management plug-in on the new vDC, that the backup jobs are present and active. You can then disable Veeam Backup on the old vDC. You can do this via the following API call:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable
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
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{hostId}/task/{taskId}
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

Join our community of users on <https://community.ovh.com/en/>.
