---
title: Migrating an infrastructure to a new vDC
routes:
    canonical: 'https://docs.ovh.com/gb/en/private-cloud/sddc-migration/'
excerpt: Find out how to manage all aspects of migrating from one vDC to another vDC in the same PCC
slug: vdc-migration
section: Getting started
order: 6
hidden: true
---

**Last updated 19th October 2021**

> [!warning]
>
> The vDC migration path is not yet available because upgrades and maintenance operations are in progress. We will notify you as soon as this migration is possible.
>

## Objective

There are two aspects to migrating to a new vDC:

- The OVHcloud infrastructure itself which includes the customer's side of administrating an infrastructure.
- The VMware infrastructure, which includes the entire VMware eco-system.

**This guide explains how to cover all aspects of migrating a pre-existing OVHcloud infrastructure to a new vDC.**

## Requirements

- a PCC infrastructure (SDDC or DC)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) (`Private Cloud`{.action} in the `Hosted Private Cloud`{.action} section)

## Instructions

This guide will utilise the notions of a **source vDC** and a **destination vDC**.

### OVHcloud context

#### Adding a new destination vDC

You can add a destination vDC following those steps:

1\. Check that your datacenter is eligible to move to the target range:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/commercialRange/compliance
>

**Expected return:** dedicatedCloud.compliantRanges[]

2\. Check which of your services you can upgrade:

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee
>

**Expected return:** List of available services available to the upgrade.

3\. View what you are able to upgrade to:

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee/{serviceName}
>

**Expected return:** order.cart.GenericProductDefinition[]

4\. Verify you are able to upgrade with your serviceName and planCode for destination range:

> [!api]
>
> @api {GET} /order/upgrade/privateCloudManagementFee/{serviceName}/{planCode} ( quantity : 1 )
>

**Expected return:** order.upgrade.OperationAndOrder

5\. Create the order:

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

#### Adding new ressources

You can proceed with ordering new resources to the new Destination vDC following this [Information about Dedicated Cloud billing](https://docs.ovh.com/gb/en/private-cloud/information_about_dedicated_cloud_billing/#add-resources-billed-monthly) guide.

#### Converting a datastore to a global datastore

A global datastore is a datastore mounted on all clusters / virtual datacenters within a VMware infrastructure, i.e. shared between the source vDC and the destination vDC :

Run the OVHcloud API to check datastores compatibility. We recommend selecting the datastores ordered in the new vDC, old datastores may not be compatible.

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/checkGlobalCompatible
>

**Expected return:** boolean

If the API return is FALSE, your datastores are not compatible, you will need to order new datastores and use storage motion, using the following [Information about Dedicated Cloud billing](https://docs.ovh.com/gb/en/private-cloud/information_about_dedicated_cloud_billing/#add-resources-billed-monthly) and [VMware Storage vMotion](https://docs.ovh.com/gb/en/private-cloud/vmware_storage_vmotion/) guides.

If the API return is TRUE, you can proceed with the conversion to global datastores.

Run the OVHcloud API to check datastores compatibility:

> [!api]
>
> @api {POST}  /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/convertToGlobal
>

**Expected return:** Task information

#### Security

##### **Hosted Private Cloud access**

For connections to the VMware platform, you can choose to block access to vSphere by default. Please refer to our guide on the [vCenter access policy](../modify-vcenter-access-policy/) for details.

If the access policy has been changed to "Restricted", the new vDC will inherit the access policy that the source vDC uses.

##### **Hosted Private Cloud users**

In the lifecycle of the source vDC, a list of users may have been created for business or organisational needs. These users will also be present on the new vDC but will have no permissions on this new vDC. You must therefore assign the users the appropriate rights, depending on the configuration of the destination vDC.

To do this, please refer to our guides on [Changing user rights](../change-users-rights/), [Changing the User Password](../changing-user-password/) and [Associating an email with a vSphere user](../associate-email-with-vsphere-user/).

##### **Backup & DRP Options**

This option is to enable and configure per vDC.
You need to enable the relevant option on the new vDC.

##### **Key Management Server (KMS)**

This option is to enable and configure per vCenter and apply to any vDC.
If virtual machines are protected by encryption, they stay protected on the destination vDC.

##### **Certifications**

These options are enabled per vCenter and apply to any vDC.
If an option has been enabled, they stay available on the destination vDC.

#### Network

##### **vRack**

> [!warning]
>
> VMnetworks located in the same region cannot be interconnected in a vRack.
>

As part of a migration process, by default, the new vDC will be linked to the same vRack as the source vDC. Please consult our guide to [Using Private Cloud within a vRack](../using-private-cloud-with-vrack/).

##### **Public network**

The Public IP addresses attached to the source vDC will automatically be available for use in the destination vDC.

### VMware context

#### Step 1: Preparing your destination vDC

##### **1.1 HA**

The migration involves reconfiguring VMware High Availability (HA), including boot order and priority. Please consult our guide about [VMware HA configuration](../vmware-ha-high-availability/).

Here is a checklist of aspect to take into account:

- Host monitoring settings
- VM monitoring settings
- Admission control
- Advanced HA options
- VM Overrides

**Automation tips:** Powercli cmdlet “Get-Cluster” returns information on HA and DRS configuration settings that can be applied to the destination cluster with “Set-Cluster” cmdlet.

##### **1.2 DRS**

The migration involves reconfiguring the VMware Distributed Resource Scheduler (DRS) feature, in particular the affinity or anti-affinity rules for groups of hosts and VMs. Please consult our guide about [configuring VMware DRS](../vmware-drs-distributed-ressource-scheduler/).

Here is a checklist of aspects to take into account:

- Automation level
- VM/Hosts Groups
- VM/Host affinity/anti-affinity rules
- VM Overrides

**Automation tips:** [This VMware community thread](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) details options to export and import affinity-rules via powercli.

##### **1.3 Resource pools**

The migration requires rebuilding resource pools including reservations, shares, and vApps. This also applies to vApps and any start-up order configuration set in the vApps.

For more information, consult [VMware's documentation for managing resource pools](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

Here is a checklist of aspects to take into account:

- CPU/Memory shares settings
- CPU/Memory reservations
- CPU/Memory expandable option
- CPU/Memory Limits

**Automation tips:** Powercli cmdlet “Get-ResourcePool” to gather the resource pool information and cmdlet “New-ResourcePool” to recreate the resource pool on the destination vDC.

##### **1.4 Datastore Clusters**

If datastore clusters are present in the source vDC, migration may involve the need to recreate these Datastore Clusters on the destination vDC if the same level of structure and SDRS is needed.

Here is a checklist of aspects to take into account:

- SDRS automation level
- SDRS space, I/O, rule, policy, VM evacuation settings
- SDRS affinity/anti-affinity rules
- SDRS VM Overrides

##### **1.5 vSAN**

If vSAN was enabled on your source VDC, you will need to enable it again on the destination vDC. Please refer to our guide on [Using VMware Hyperconvergence with vSAN](../vmware-vsan/).

##### **1.6 vSphere networking**

Migration involves recreating the vRack VLAN-backed portgroups on the destination vDC to ensure VM network consistency. If vRack VLANs are in use on the source VDC, vRack can be used to stretch the L2 domain to the destination vDC to allow for a more phased migration plan. For more information consult our guide about [Using Hosted Private Cloud within a vRack](../using-private-cloud-with-vrack/).

Here is a checklist of aspects to take into account:

- Portgroup VLAN type
- Security settings
- Teaming and Failover settings
- Customer network resource allocation

For more information, consult OVHcloud's guide [How to create a V(x)LAN within a vRack](../creation-vlan-vxlan/#vlan-vrack) and VMware's documentation on [how to edit general distributed port group settings](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html){.external}.

**Automation tips:** Powercli cmdlet “Export-VDPortGroup” can retrieve Distibuted Virtual Portgroup information which can then be imported into the destination Distributed Switch with the use of the “New-VDPortgroup -BackupPath” cmdlet.

##### **1.7 Veeam backup configuration**

If OVHcloud provided Veeam is currently in use to backup VMs on the source vDC, it will be necessary to use the OVH API to re-check the backup jobs after the VMs have been migrated to the new vDC.

Here is how to proceed:

1\. Enable backup for the new vDC.

2\. Migrate the VM(s) from source vDC to destination vDC.

3\. Run the OVHcloud API to re-check the backup date:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/checkBackupJobs
>

4\. Repeat steps 2 and 3 for all VMs that have backups enabled and have been migrated to the new vDC.

##### **1.8 Inventory organisation (optional)**

For organisational reasons, the VMs, hosts or datastores may have been placed in directories.

If you still need this organisation, you will need to create it again in the destination vDC.

##### **1.9 NSX**

###### **1.9.1 VXLAN Transport Zone**

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

###### **1.9.2 NSX Edges**

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

    Step 1 - Select the interface that is connected to the VM Network (or any other VLAN portgroup)
    Step 2 - Select `Edit`{.action}.
    Step 3 - Click the "pencil" icon next to the "Connected to" field.
    Step 4 - In the "Logical switch" tab, choose a temporary VXLAN network to connect this interface to. **Keep note of the VLAN to VXLAN mapping**.
    Step 5 - Click `OK`{.action}.
    Step 6 - Click `Save`{.action}.
    Step 7 - Repeat for all other VLAN backed portgroups.

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

###### **1.9.3 NSX Distributed Logical Routing**

Once the NSX Transport Zone has been extended to the new vDC, Distributed Logical Routing will be available in the ESXi hosts on the destination vDC.

NSX Distributed Logical routers only need to be migrated when there is a Control VM deployed along side the DLR that facilitates dynamic routing.

If a control VM is deployed, please follow the NSX Edge migration steps above.

Note that you will not need to change interfaces as DLRs **must** already connect to VXLANs.

###### **1.9.4 NSX Distributed Firewall**

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

##### **1.10 Zerto Replication**

The Zerto Replication is configured at the vDC level. To protect workload on the new vDC, you need to do some actions.

> **Prerequisites:**
>
> - Having a new vDC
> - Having under the new vDC a host cluster with at least two (2) hosts
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

A task is launched on the infrastructure to deploy vRA on each hosts under the new vDC.

After this, the Zerto Replication will work on both datacenters:

- the old one is still running and protects your workload
- the new one is ready to host your workload

The next step depends on the current configuration per [Virtual Protection Group](../zerto-virtual-replication-vmware-vsphere-drp):

- source of replication
- destination of replication

##### **1.10.1 VPG as Source**

With the migration on the new vDC, Zerto will continue to protect workload with vRA deployed on the target cluster and hosts.

##### **1.10.1 VPG as destination**

Unfortunately, there is no way to update VPG configuration, the only option is to delete the VPG and create a new one.

#### Step 2: VM Migration

Since both source and destination vDC are within the same vCenter, hot or cold VMware VMotion can be used to migrate VMs.

**Hot VMotion** can be used when the CPU chipset is the same between source and destination (eg Intel to Intel).

**Cold VMotion** can be used when the CPU chipset is different between source and destination (eg AMD to Intel).

Here is a checklist of aspects to take into account:

- ESXi host CPU chipsets on source and destination vDCs
- EVC modes on source and destination Clusters
- vDS versions are the same between source and destination vDC

> [!primary]
> It is recommended to test the migration path with low-impact or test VMs before production migration.
>

#### Step 3: Post migration tasks

##### **Affinity rules**

Affinity rules are based on VM objects so rules can only be created after VMs have been migrated to the destination PCC. Once the migration is completed, affinity rules can be re-applied on the destination PCC.

**Automation tips:** [This VMware community thread](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) details options to export and import affinity-rules via powercli.

##### **Veeam backup configuration**

Disable Veeam Backup on the old vDC. It can be made with the following API call:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/disable
>

`{datacenterId}` is the **old** vDC id, you can get it with the following API call:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

##### **Zerto Replication**

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

A task is launched to :

- Check if no destination VPG still exists on the datacenter: they MUST be removed.
- Switch the Zerto Replication option (subscription) from the old to the new vDC.
- Remove all vRA from hosts on the old vDC.

##### **Remove previous vDC**

At this step, we can consider there is no longer any data and/or VM on the old vDC, so we can now remove resources.

In the following instructions, `{datacenterId}` is the **old** vDC id, you can get it with the following API call:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

#### **Put hosts in maintenance mode**

You must put hosts in maintenance mode by following these steps:

1. In the vSphere Client navigate to `Hosts and Clusters`{.action}.
2. Navigate to a `Host`{.action}.
3. Right click the `Host`{.action}.
4. Navigate to `Maintenance Mode`{.action}.
5. Click `Enter Maintenance Mode`{.action}.

Repeat action for each host.

#### **Remove Datastores**

With the API, get the filer (datastore) id list:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer
>

Then for each id :

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/remove
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

#### **Remove Hosts**

With the API, get the host id list:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host
>

Then for each id :

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

#### **Remove vDC**

With the API, ask for the vDC deletion:

> [!api]
>
> @api {DELETE} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
