---
title: "SAP infrastructure with VMware on OVHcloud solution"
excerpt: "This concept page demonstrates an architecture using the VMware on OVHcloud SAP HANA pack solution"
updated: 2023-09-05
---

## Objective

The following concept allows you to build an architecture with an SAP HANA database up to 1.5 TB, to use all VMware on OVHcloud features (templates, Zerto, NSX, DRS, Fault Tolerance, High Availability) for your SAP infrastructure in a single OVHcloud location or multiple OVHcloud locations.

![schema](images/concept-vmware.png){.thumbnail}

| Objective | Description |
| --- | --- |
| Objective #1 | Building an SAP infrastructure based on OVHcloud Managed VMware vSphere®, Hyperconverged Storage SAP HANA pack or OVHcloud Managed VMware vSphere®, Software-Defined Datacenter SAP HANA pack. |
| Objective #2 | No compliance requirements with SecNumCloud regulation or PCI DSS certification. |
| Objective #3 | An Infrastructure Recovery Point Objective (RPO) of 15 minutes. |
| Objective #4 (optional) | An SAP infrastructure available in a second location which can be activated in the event of a major issue impacting the primary location. This second location offers an Infrastructure RPO near to zero. |

## Concept elements

### 1 - Network connectivity

To guarantee the quality of communication between your local site and your SAP infrastructure hosted at OVHcloud, we recommend using OVHcloud Connect. This solution offers you a secure and high-performance link between your offices and OVHcloud. To get more information, please refer to the [OVHcloud Connect documentation](https://www.ovhcloud.com/es/network/ovhcloud-connect/).

Instead of using OVHcloud Connect, a point-to-point VPN can also be deployed with NSX if you use a OVHcloud Managed VMware vSphere®, Software-Defined Datacenter SAP HANA pack. To learn how to configure an NSX Gateway VPN with OVHcloud, please refer to [our documentation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-12-configure-ipsec). If you use a OVHcloud Managed VMware vSphere®, Hyperconverged Storage SAP HANA pack, you must deploy a virtual machine to manage this point-to-point VPN.

### 2 - SAP HANA database

We advise to take consideration of the [SAP Note 2161991](https://launchpad.support.sap.com/#/notes/2161991), especially chapter 2 and 3, the [SAP Note 2015392](https://launchpad.support.sap.com/#/notes/2015392), and the [SAP Confluence](https://wiki.scn.sap.com/wiki/pages/viewpage.action?pageId=517013587), to set a compliant configuration between SAP and virtual machines.

OVHcloud proposes an SAP HANA virtual machine template. You have the possibility to use this template to deploy a virtual machine for SAP HANA with SUSE Linux Enterprise Server for SAP Application (SLES4SAP) operating system installed (BYOL mode), as well as disks configured following the recommendations by SAP and VMware.

This template offers also the possibility to deploy the SAP HANA database and the OVHcloud Backint Agent for SAP HANA after filling a form. To know more about this SAP HANA template, please refer to [our guide](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_sap_hana_template_vmware).

The Fault Tolerance feature provided by VMware is not suitable to protect the SAP HANA virtual machine due to the resource limitation of Fault Tolerance. However, we advise to enable the feature vSphere HA which monitors the health of each ESXi host in the cluster, and automatically restarts the virtual machines hosted on the impacted ESXi host.

We advise to be careful with the NUMA sharing. To know more about that please refer to the [SAP Confluence](https://wiki.scn.sap.com/wiki/display/VIRTUALIZATION/SAP+HANA+on+VMware+vSphere) and the [SAP Note 2470289](https://launchpad.support.sap.com/#/notes/2470289).

If you want to reduce the RTO and RPO in a single OVHcloud location, you have the possibility to manage an SAP HANA cluster with SUSE. We propose a [dedicated guide](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_sap_hana_cluster) to help you to implement this configuration. In this case, we recommend to create an anti-affinity rule to avoid running both SAP HANA databases on the same ESXi host.

### 3 - SAP Application Servers

The Fault Tolerance feature provided by VMware guarantees the availability of your SAP Application Servers in case of ESXi host failures. Your virtual machines are automatically activated on another member of your VMware cluster. We advise to enable it on your virtual machines which host the SAP Central Services (SCS), if you do not manage an SAP cluster for this service in another way. The Fault Tolerance could also be enabled on your SAP Application Servers which host a critical service. To discover how to enable this feature, please refer to [our guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_fault_tolerance).

However, to be able to enable the Fault Tolerance, the virtual machine cannot exceed 8 vCPUs and 128 GB of memory.

For SAP Application Servers which do not host a critical service, the vSphere HA feature is recommended.

Last, the vSphere Distributed Resource Scheduler can also be activated with VM/Host rules to avoid running all SAP Application Servers on the same ESXi host. To know more about this feature, please refer to [our guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new).

### 4 - Backup infrastructure

We recommend using an Object Storage bucket in a different OVHcloud location from the one on which your workload runs, to protect yourself from a major outage on the primary OVHcloud location.

#### 4.1 - SAP HANA database

OVHcloud provides OVHcloud Backint Agent for SAP HANA to backup your SAP HANA database to an Object Storage bucket on OVHcloud.

This backint agent allows you to take advantage of an Object Storage, like retention policy or immutable policy. To know more about the OVHcloud Backint Agent for SAP HANA, we recommend taking note of these guides:

- [Install and use OVHcloud Backint Agent for SAP HANA](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent)
- [Use OVHcloud Backint Agent with several Object Storage buckets](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_ovhcloud_backint_agent_several_buckets)

To ensure the recovery of the SAP HANA configuration (INI files), we suggest to set the value "true" for the parameter `include_configuration_backup`. This parameter enables the backup of all settings stored in INI files during the data backup of the SAP HANA database.

#### 4.2 - File systems

To protect the file systems on which important SAP files are stored, a cost-effective solution can be deployed with a daily running of a script which copies the content of these sensible file systems to an Object Storage on OVHcloud.

With this solution, only the content of these sensible file systems is protected. In case of a loss of an entire virtual machine, a build from scratch should be done before performing the recovery of the content of the SAP file systems could be done.

Another solution to accelerate the recovery of your virtual machine is to deploy or use an existing Veeam Backup and Replication server in your VMware on OVHcloud solution linked to an Object Storage on OVHcloud.

Veeam Backup and Replication allows you to back up and restore snapshots of your virtual machines. It ensures a quick recovery in case of an issue with your VMware on OVHcloud solution.

For help with the installation process of a Veeam Backup and Replication server in your VMware on OVHcloud solution, please refer to the [OVHcloud documentation](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication).

### 5 - Long term and archive storage

Some data needs to be stored and backed up with long retention for legal and/or technical reasons, ideally in a dedicated storage space with limited access once the data has been written. OVHcloud offers a Cold Archive solution for this application, featuring the highest security for your data by design.

For more information, please refer to the [OVHcloud documentation](https://www.ovhcloud.com/es/public-cloud/cold-archive/).

### 6 - SAP Support connection

About the connection from SAP Support to your SAP landscape on OVHcloud, we advise you to deploy a virtual machine within your VMware on OVHcloud solution. Then install the SAProuter service on this virtual machine, according to the [official SAProuter documentation by SAP Support](https://support.sap.com/en/tools/connectivity-tools/saprouter/install-saprouter.html).

Configure your NSX, or your virtual machine to route the ingress traffic to your SAProuter.

As this virtual machine is exposed to the Internet, adapt ingress firewall rules to only allow the connection from the SAP IP public range to your SAProuter server. Allow communication from your new SAProuter to your SAP infrastructure for only the needed ports/protocols. All of this information is available on the [SAP Support pages](https://support.sap.com/en/tools/connectivity-tools/saprouter/install-saprouter.html).

We propose you a [guide](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_vmware_saprouter) to set up a SAProuter with NSX.

### 7 - Dual locations (optional)

To eliminate the risk of losing a single OVHcloud location deployment, consider adding a secondary OVHcloud location.

#### 7.1 - Network connectivity

As with the primary OVHcloud location, we recommend using OVHcloud Connect. If this solution is not suitable for you, a point-to-point VPN can also be deployed with NSX, or a virtual machine which handles this role for the second OVHcloud location.

#### 7.2 - SAP HANA database

The SAP HANA System Replication called SAP HSR is used to replicate the data and configuration of primary OVHcloud location to your secondary OVHcloud location. This replication allows you to secure your data in another SAP HANA database and thus achieve the lowest RPO possible.

To discover the replication modes supported by SAP HANA, please refer to the official SAP documentation available on the [SAP Help Portal](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/86267e1ed56940bb8e4a45557cee0e43.html?locale=en-US). However, within the scope of this concept with two OVHcloud locations, we advise you to enable the data and log compression and use the ASYNC replication mode. Find more information on the [SAP Help Portal](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/92447e0a105c4facad3553b28aaec318.html).

> [!warning]
> If you trigger a takeover to your secondary OVHcloud location, you should switch the SAP Application Servers too, to guarantee the performance between the SAP Application Servers and the SAP HANA database.
>

Another solution could be to use the feature named Zerto in your VMware on OVHcloud solution, allowing you to replicate your virtual machines to a VMware on OVHcloud solution hosted on a secondary OVHcloud location. By default, every 15 minutes, a log backup is written on the disk, therefore even with this technical solution, the RPO stays at 15 minutes.

If you are interested in use cases with Zerto in an SAP HANA context, we advise to read the [Zerto documentation](https://www.zerto.com/wp-content/uploads/2022/08/SAP-HANA-Data-Management-Using-Zerto.pdf).

#### 7.3 - SAP Application Servers

To secure your infrastructure in the event of a major incident in your primary OVHcloud location, we advise you to enable the feature named Zerto for your VMware on OVHcloud solution, allowing you to replicate your virtual machines to a VMware on OVHcloud solution hosted on a secondary OVHcloud location. With this feature, you secure your SAP Application Servers on a secondary OVHcloud location with a synchronous replication, and you reduce the RTO and the RPO if you have to switch to your secondary OVHcloud location.

To know how to enable this feature, please refer to the [OVHcloud documentation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service/).

> [!warning]
> If you trigger a switch to the secondary OVHcloud location through Zerto, the SAP HANA database has to be switched too, to ensure the performance between the SAP Application Servers and the SAP HANA database.
>

#### 7.4 - Backup infrastructure

As mentioned previously, we recommend using an Object Storage bucket on a different OVHcloud location from the one on which your workload runs, to avoid a major outage on the primary location. A cross backup is safer for your business data.

#### 7.5 - SAP Support connection

To guarantee the connection continuity with the SAP Support, we recommend configuring a second SAProuter on the secondary OVHcloud location. If your Disaster Recovery Plan is triggered, and if the SAP Support has to connect to your SAP systems, only the public IP address in the SAP Support LaunchPad should be updated to recover the connection.

## Go further

- [Setting up Zerto Virtual Replication between two OVHcloud datacenters](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)
- [Setting up Veeam Backup & Replication](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication)
- [Installing SAProuter](https://support.sap.com/en/tools/connectivity-tools/saprouter/install-saprouter.html)
- [Deploy a SAProuter with NSX](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_vmware_saprouter)
- [Install and use OVHcloud Backint Agent for SAP HANA](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_install_ovhcloud_backint_agent)
- [Use OVHcloud Backint Agent with several Object Storage buckets](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_configure_ovhcloud_backint_agent_several_buckets)

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for assisting you on your specific use case of your project.

Join our community of users on <https://community.ovh.com/en/>.
