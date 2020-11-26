---
title: Migrating a Hosted Private Cloud service 
excerpt: Find out how to manage all aspects of migrating a Hosted Private Cloud service
slug: service-migration
section: Getting started
order: 6
---

**Last updated 23rd November 2020**

## Objective

There are two aspects to migrating a Hosted Private Cloud service:

- The Hosted Private Cloud (OVHcloud), which includes the customer's side of administrating an infrastructure.
- The VMware infrastructure, which includes the entire VMware eco-system.

**This guide explains how to cover all aspects of migrating a Hosted Private Cloud service.**

## Requirements

- a [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/)
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager) (`Private Cloud`{.action} in the `Hosted Private Cloud`{.action} section)

## Instructions

This guide will utilise the notions of a **source Hosted Private Cloud** and a **destination Hosted Private Cloud**.

### Hosted Private Cloud context

#### Security

##### **Hosted Private Cloud access**

For connections to the VMware platform, you can choose to block access to vSphere by default. Please refer to our guide on the [vCenter access policy](../modify-vcenter-access-policy/) for details.

If the access policy has been changed to "Restricted", you will need to apply the same connection IPs to the destination Hosted Private Cloud as to the source Hosted Private Cloud service.

##### **Hosted Private Cloud users**

In the lifecycle of the source Hosted Private Cloud, a list of users may have been created for business or organisational needs. You must therefore create them again on the destination Hosted Private Cloud and assign them the appropriate rights, depending on the configuration of the destination Hosted Private Cloud.

To do this, please refer to our guides on [Changing user rights](../change-users-rights/), [Changing the User Password](../changing-user-password/) and [Associating an email with a vSphere user](../associate-email-with-vsphere-user/).

##### **Key Management Server (KMS)**

If virtual machines are protected by encryption and this is a prerequisite for the destination Hosted Private Cloud, it will be necessary to recreate the encryption context on the destination Hosted Private Cloud.
Please refer to our guide on [Enabling Virtual Machine Encryption](../vm-encrypt/) in order to enable KMS on the destination Hosted Private Cloud.

##### **Certifications**

For compliance reasons, [PCI DSS](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/safety-compliance/pci-dss/) and [HDS](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/safety-compliance/hds/) options may have been enabled on the source Hosted Private Cloud.

These options must therefore be reactivated on the destination Hosted Private Cloud. To do this, please refer to our [guide on activating them](../activate-pci-dss-option/).

#### Network

##### **vRack**

> [!warning]
>
> VMnetworks located in the same region cannot be interconnected in a vRack.
>

As part of a migration process, you can link your Hosted Private Cloud services within the same vRack. Please consult our guide to [Using Private Cloud within a vRack](../using-private-cloud-with-vrack/).


##### **Public network**

> [!warning]
>
> If your Hosted Private Cloud/PCC offer pre-dates 2016, please contact our support teams to verify the requirements.
>

If the public IP addresses attached to the source Hosted Private Cloud are required on the destination Hosted Private Cloud, it will be necessary to transfer them.

Please consult our guide to [Migrate an IP block between two Hosted Private Cloud services](../add-ip-block/#migrate-an-ip-block-between-two-hosted-private-cloud-solutions).

##### **Distributed port group settings**

Please verify portgroup settings including Security, VLAN, Teaming and failover, as if they have been modified on the source environment the same configuration will need to be applied on the destination.

For more information, consult VMware's documentation on [how to edit general distributed port group settings](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-FCA2AE5E-83D7-4FEE-8DFF-540BDB559363.html) and on [how to edit distributed port teaming and failover policies](https://docs.vmware.com/en/VMware-vSphere/6.0/com.vmware.vsphere.hostclient.doc/GUID-BB8EC262-5F85-4F42-AFC5-5FED456E2C11.html).

### VMware context

#### Cluster configuration

##### **Configuring VMware HA**

The migration involves reconfiguring VMware High Availability (HA), including boot order and priority. Please consult our guide about [VMware HA configuration](../vmware-ha-high-availability/).

Here is a checklist of aspect to take into account:

- Host monitoring settings
- VM monitoring settings
- Admission control
- Advanced HA options
- VM Overrides

**Automation tips:** Powercli cmdlet “Get-Cluster” returns information on HA and DRS configuration settings that can be applied to the destination cluster with “Set-Cluster” cmdlet.

##### **Configuring VMware DRS**

The migration involves reconfiguring the VMware Distributed Resource Scheduler (DRS) feature, in particular the affinity or anti-affinity rules for groups of hosts and VMs. Please consult our guide about [configuring VMware DRS](../vmware-drs-distributed-ressource-scheduler/).

Here is a checklist of aspects to take into account:

- Automation level
- VM/Hosts Groups
- VM/Host affinity/anti-affinity rules
- VM Overrides

**Automation tips:** [This VMware community thread](https://communities.vmware.com/t5/VMware-PowerCLI-Discussions/Backup-Restore-DRS-VM-affinity-anti-affinity-rules-can-these-be/td-p/733981/page/2) details options to export and import affinity-rules via powercli.

##### **Resource pools**

The migration requires rebuilding resource pools including reservations, shares, and vApps. This also applies to vApps and any start-up order configuration set in the vApps.

For more information, consult [VMware's documentation for managing resource pools](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external}.

Here is a checklist of aspects to take into account:

- CPU/Memory shares settings
- CPU/Memory reservations
- CPU/Memory expandable option
- CPU/Memory Limits

**Automation tips:** Powercli cmdlet “Get-ResourcePool” to gather the resource pool information and cmdlet “New-ResourcePool” to recreate the resource pool on the destination Hosted Private Cloud.

##### **Datastore Clusters**

If datastore clusters are present in the source Hosted Private Cloud, migration may involve the need to recreate these Datastore Clusters on the destination Hosted Private Cloud if the same level of structure and SDRS is needed.

Here is a checklist of aspects to take into account:

- SDRS automation level
- SDRS space, I/O, rule, policy, VM evacuation settings
- SDRS affinity/anti-affinity rules
- SDRS VM Overrides

##### **Networks**

Migration involves recreating the vRack VLAN-backed portgroups on the destination Hosted Private Cloud to ensure VM network consistency. If vRack VLANs are in use on the source Hosted Private Cloud vRack can be used to stretch the L2 domain to the destination Hosted Private Cloud to allow for a more phased migration plan. For more information consult our guide about [Using Private Cloud within a vRack](../using-private-cloud-with-vrack/).

Here is a checklist of aspects to take into account:

- Portgroup VLAN type
- Security settings
- Teaming and Failover settings
- Customer network resource allocation

**Automation tips:** Powercli cmdlet “Export-VDPortGroup” can retrieve Distibuted Virtual Portgroup information which can then be imported into the destination Distributed Switch with the use of the “New-VDPortgroup -BackupPath” cmdlet.

##### **OVHcloud provided Veeam Backup**

If OVHcloud provided Veeam is currently in use to backup VMs on the source Hosted Private Cloud, it will be necessary to recreate the backup configuration for the VMs in the destination Hosted Private Cloud post-migration.

Here is a checklist of aspects to take into account:

- List of VMs being backed up
- Backup settings

Please refer to our guide on [activating and using Veeam Managed Backup](../veeam-backup-as-a-service/).

**Automation tips:** OVHcloud API provides VM backup information attached to each VM via:

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/vm/{vmId}
>

The “backup” section of the returning json will give information on current backup configuration.

#### Inventory organisation

For organisational reasons, the VMs, hosts or datastores may have been placed in directories.

If you still need this organisation, you will need to create it again in the destination Hosted Private Cloud.

**Automation tips:** Powercli cmdlet “Get-Folder” to gather the folder information and cmdlet “New-Folder” to recreate the folder on the destination Hosted Private Cloud.

#### VM

There are several ways of migrating VMs from one Private Cloud to another. We offer to migrate using the Veeam solution and Veeam Replication technology.

The following elements are required:

- SPLA licences (on source and destination Hosted Private Cloud)
- A Veeam licence
- An IP address available on the source and destination Hosted Private Cloud services
- A [Veeam Backup & Replication](../../storage/veeam-backup-replication/) virtual machine on the source Hosted Private Cloud
- [Authorising the Veeam Backup & Replication virtual machine to connect](../authorise-ip-addresses-vcenter/) to the source and destination vCenter

Please refer to our guide on setting up [Veeam Backup & Replication](../../storage/veeam-backup-replication/).

The video below shows how to configure Hosted Private Cloud with the Veeam Backup & Replication solution.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/f8ufrsP4PQw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>The following video explains how to replicate your Hosted Private Cloud infrastructure with the Veeam Backup & Replication solution.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NqNtKrJSH8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br>You can also refer to the [Veeam documentation](https://www.veeam.com/veeam_backup_10_0_user_guide_vsphere_pg.pdf){.external} (PDF).

#### vSAN

If vSAN was enabled on your source Hosted Private Cloud, you will need to enable it again on the destination Hosted Private Cloud. Please refer to our guide on [Using VMware Hyperconvergence with vSAN](../vmware-vsan/).

#### NSX Configuration

##### Configuring NSX Edge

The migration involves re-creating your NSX edge gateway(s) in the destination Hosted Private Cloud.

Here is a checklist of elements to consider:

- Edge services (Firewall rules, DHCP, DNS, NAT, Load-balancer, VPN, Routing)
- Interface configuration
- HA configuration
- Syslog configuration
- Resource allocation
- NSX Edge objects (IP Sets, Services, Service Groups)

##### Configuring NSX Distributed Firewall

The migration involves re-creating the NSX Distributed Firewall in the destination Hosted Private Cloud.

Here is a checklist of elements to consider:

- NSX Distributed firewall sections
- NSX Distributed firewall rules (source, destination, service, applied-to, action, logging)
- NSX Distributed Firewall objects (Security Groups, IP Sets, MAC Sets, Services, Service Groups, IP Pools, Security Tags)

## Go further

Join our community of users on <https://community.ovh.com/en/>.
