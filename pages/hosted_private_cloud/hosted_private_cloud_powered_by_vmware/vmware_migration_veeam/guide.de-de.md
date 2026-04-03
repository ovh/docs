---
title: "Move2Cloud - Migrating VMware Workloads to OVHcloud Hosted Private Cloud with Veeam Replication"
excerpt: "Learn how to migrate your on-prem VMware workloads to an OVHcloud Hosted Private Cloud environment using Veeam Replication"
updated: 2025-04-25
---

## Objective

This guide explains how to migrate your on-premises VMware workloads to an **OVHcloud Hosted Private Cloud (HPC)** using Veeam Replication.

> [!primary]
> **This guide applies to Hosted Private Cloud environments that are NOT part of SecNumCloud (SNC), PCI-DSS, or HDS-qualified environments.**
> If you are using an SNC, PCI-DSS, or HDS-qualified Hosted Private Cloud, some features described here, such as OVHcloud IAM, may not be available.
> For SecNumCloud environments, please refer to the dedicated guide: [Move2Cloud - Migrating VMware Workloads to SecNumCloud Hosted Private Cloud with Veeam Replication](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_migration_veeam_secnumcloud)

## Requirements

Before getting started, you will need:

- A complete list of VMs with FQDNs, IP addresses, and dependencies.
- Correctly sized target resources (e.g., hosts, datastores, vSAN clusters).
- A valid **Veeam Backup & Replication** solution from the [Veeam website](https://www.veeam.com/downloads.html?ad=top-sub-menu).
- Access to vCenter and pre-configured DNS, NTP, and authentication services in HPC.

<!-- CP-NAV-START:privatecloud-vmware-vsphere -->
---

### OVHcloud Control Panel Access

- **Direct link:** [VMware vSphere](/links/control-panel/privatecloud-vmware-vsphere)
- **Navigation path:** `Hosted Private Cloud`{.action} > `Managed VMware vSphere`{.action} > Select your vSphere service

---
<!-- CP-NAV-END:privatecloud-vmware-vsphere -->

![Move2Cloud](images/Move2PCC_Veam.png){.thumbnail}

## Instructions

### Step 1: Design your migration plan

At the end of Step 1, you should have a clear understanding of which workloads you are migrating, their dependencies, and the target network and storage configuration in OVHcloud.

#### Step 1.1: Create an inventory of VMs

Start by listing all the VMs you plan to migrate.

For each VM, include the following information:

- **FQDN (Fully Qualified Domain Name)** and **IP address**.
- **Operating System version** (ensure it’s up-to-date and supported).
- **Dependencies** (e.g. applications relying on specific servers).

#### Step 1.2: Group VMs into migration batches

Organize your VMs into logical groups based on their application dependencies.

For instance:

- A **web server**, an **application server**, and a **database server** that work together should be grouped in the same batch.

Migrating these batches ensures that applications remain functional during the transition.

#### Step 1.3: Document network and subnet details

Record the current network configuration of your on-premises environment, including:

- **Subnets** and **VLAN IDs**.
- The number of VLANs needed for the target Hosted Private Cloud.

With [OVHcloud vRack](/links/network/vrack), you can create up to 4,000 VLANs, which allows you to replicate your current IP address plan without any re-IP.

### Step 2: Plan target resources 

At the end of this step, you will have a clear understanding of the resources required in your **Hosted Private Cloud (HPC)** environment to match your workloads.

#### Step 2.1: Calculate compute requirements

Evaluate your needs for CPU and memory by calculating the total number of cores and amount of RAM required for your VMs.

Use your current consolidation ratio (e.g. pCPU/vCPU) as a reference to determine the number and type of ESXi hosts needed.

#### Step 2.2: Define storage needs

Decide which workloads require **NFS datastores** or **vSAN storage** based on their IOPS requirements. For applications with high performance demands, vSAN is typically the better option.

#### Step 2.3: Plan the network

If using NSX-T, define your network segmentation strategy. Determine how you will apply VLAN-based or overlay segments and evaluate north/south traffic.

Decide whether to retain your current firewall solution or deploy virtual firewalls (e.g. FortiVM, Stormshield, or Palo Alto VM-Series).

For internet-exposed services, allocate additional public IPs or use the [Bring Your Own IP (BYOIP)](/links/network/byoip) feature to retain your existing IP addresses.

### Step 3: Authorize IP access to vCenter

To enable remote access to the vCenter in your HPC, you must whitelist the IP addresses that need access.

1. Click [this link](/links/control-panel/privatecloud-vmware-vsphere) to access the `VMware vSphere`{.action} section, then open the Secure SSL Gateway.
2. Add the IP addresses that should have access to vCenter.

You can find detailed instructions in our [IP whitelisting guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/autoriser_des_ip_a_se_connecter_au_vcenter).

### Step 4: Configure roles and permissions

#### Step 4.1: Use OVHcloud IAM

Set up roles and permissions in your `Hosted Private Cloud`{.action} using `OVHcloud IAM`.

> [!warning]
> **OVHcloud IAM is not available in SecNumCloud (SNC), PCI-DSS, or HDS environments.**
> If you are using one of these qualified environments, you must configure roles and permissions directly in vSphere or use an external IAM solution such as Microsoft Active Directory or Okta.

For instructions, refer to the [IAM setup guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started).

#### Step 4.2: Integrate with existing IAM solutions

If you already use an identity management system such as Active Directory or Okta, you can deploy these services within your HPC.

#### Step 4.3: Enable single sign-on

To simplify access, you can configure Single Sign-On (SSO) by linking `OVHcloud IAM` with your ADFS (Active Directory Federation Services).

Follow the steps in [this guide](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs).

### Step 5: Build your target network

#### Step 5.1: Define the flow matrix

Plan your network traffic by creating a flow matrix. Identify which VLANs are routed and which VMs should exchange traffic, specifying allowed ports and protocols.

#### Step 5.2: Configure NSX-T

Use NSX-T to configure Tier-1 and Tier-0 gateways, distribute traffic, and segregate workloads. VMware tenants come with preconfigured **distributed vSwitches (dVS)** and VLANs, which you can adjust to match your environment.

Refer to the [NSX first steps guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-01-first-steps) for more details.

### Step 6: Deploy core services

Your Hosted Private Cloud requires basic infrastructure services for your migrated workloads:

- **NTP:** Configure `ntp.ovh.net` for time synchronization.
- **DNS:** Deploy DNS services, such as an Active Directory Domain Controller, to resolve domain names.
- **Authentication:** Set up authentication services locally in HPC to minimize cross-environment traffic.

### Step 7: Install the Veeam Backup & Replication server

Install the **Veeam Backup & Replication (B&R)** server in your OVHcloud HPC environment. This server will handle the replication process.

Activate its license using the [setup guide](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_veeam_backup_replication).

### Step 8: Set up secure connectivity

#### Step 8.1: Configure a VPN tunnel

Set up an IPsec tunnel between your on-prem infrastructure and OVHcloud using NSX, Stormshield, or OpnSense:

- [NSX VPN setup](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/nsx-12-configure-ipsec)
- [Stormshield VPN setup](https://documentation.stormshield.eu/SNS/v4/en/Content/User_Configuration_Manual_SNS_v4/IPSec_VPN/IPSEC_VPN.htm)
- [OpnSense VPN setup](https://docs.opnsense.org/manual/how-tos/ipsec-s2s.html)

#### Step 8.2: Use OVHcloud Connect (Optional)

For higher bandwidth and lower latency, you can subscribe to [OVHcloud Connect](/links/network/ovhcloud-connect), which provides an MPLS-like link between your on-prem infrastructure and your OVHcloud tenant.

With [OVHcloud Connect](/links/network/ovhcloud-connect), latency is controlled, and you can choose the bandwidth you need, from 200 Mbps up to several Gbps.

### Step 9: Deploy the Veeam proxy server

A Veeam proxy server must be deployed in your on-prem infrastructure to manage data transfer.

1. Add the proxy server in the Veeam Console under **Backup Infrastructure**.
2. Configure transport modes and resource allocation.

Follow the [proxy setup guide](https://helpcenter.veeam.com/docs/backup/vsphere/add_vmware_proxy.html?ver=120) for a detailed walkthrough.

### Step 10: Create replication jobs

In **Veeam Backup & Replication**, create a replication job to migrate your VMs.

1. Open the `Replication Jobs`{.action} section in the Veeam Console.
2. Add the `source VMs`{.action} and configure the target HPC environment.
3. Set additional options like compression or application-aware processing.

Detailed steps are available in the [replication job setup guide](https://helpcenter.veeam.com/docs/backup/vsphere/replica_job.html?ver=120).

### Step 11: Start and test replication

Run your replication jobs and test their functionality using Veeam’s `Failover Now`{.action} feature. Revert to the original state using `Undo Failover`{.action}.

Refer to the [Failover process](https://helpcenter.veeam.com/docs/backup/vsphere/failover.html?ver=120) and [Undo Failover process](https://helpcenter.veeam.com/docs/backup/vsphere/undo_failover.html?ver=120).

### Step 12: Finalize migration

Perform a `Planned Failover`{.action} on migration day to synchronize final changes, power off the source VMs, and activate the replicas in HPC.

See the [Planned Failover guide](https://helpcenter.veeam.com/docs/backup/vsphere/planned_failover.html?ver=120).

### Step 13: Validate applications

Ensure all VMs boot successfully and test critical services like AD, DNS, and databases to confirm full functionality.

### Step 14: Confirm permanent failover

Use the `Permanent Failover`{.action} option in Veeam to finalize your migration. This will make the replicas in HPC the primary production VMs.

Refer to the [Permanent Failover guide](https://helpcenter.veeam.com/docs/backup/vsphere/permanent_failover.html?ver=120).

### Step 15: Optimize and secure

Move VMs to target storage using [Storage vMotion](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_storage_vmotion) and configure backup jobs in [OVHcloud Object Storage](/links/public-cloud/object-storage) to protect your workloads.

### Step 16: Move VMs to target storage

Once your VMs have been migrated to the OVHcloud HPC, you may need to optimize their location within the environment based on performance requirements.

This involves moving VMs and their virtual disk files (VMDKs) to the appropriate storage.

1. **Assess Performance Requirements:**
    - Identify which VMs require high-performance storage (e.g. vSAN for intensive workloads).
    - Use NFS datastores for less demanding applications.
2. **Use Storage vMotion:**
    - Open the `vSphere Client`{.action} and navigate to the VM you wish to move.
    - Right-click the VM and select `Migrate`{.action}.
    - Choose the `Change storage only`{.action} option and select the target datastore (vSAN or NFS).
    - Review and confirm the migration settings, then start the migration process.

This step ensures your VMs are stored on the appropriate infrastructure to meet their performance needs.

For more information, refer to the [Storage vMotion guide](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_storage_vmotion).

### Step 17: Create backup jobs to secure your workloads

Now that your VMs are running in the OVHcloud Hosted Private Cloud, it’s essential to establish a backup strategy to protect your data.

**Veeam Backup & Replication** provides flexible options for securing your workloads.

1. **Define Backup Storage:**
    - Use OVHcloud **[S3*-compatible Object Storage](/links/public-cloud/object-storage)** as a backup repository for scalability and cost efficiency.
2. **Create a Backup Job in Veeam:**
    - Open the **Veeam Console** and navigate to the `Home`{.action} tab.
    - Click `Backup Job`{.action} > `Virtual Machine`{.action} and follow the wizard:
    - Select the VMs to back up.
    - Choose the backup repository (e.g. OVHcloud Object Storage).
    - Configure retention policies, compression, and encryption settings.
3. **Run and Test the Backup Job:**
    - Start the backup job and monitor its progress.
    - Perform a test restore to ensure the backups are reliable and can be used in a recovery scenario.

Setting up regular backups guarantees that your workloads are protected against data loss or corruption. For detailed instructions, refer to the [Veeam S3 backup guide](/pages/storage_and_backup/object_storage/s3_veeam).

*: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.

## Go Further

You can explore these additional resources to enhance your backup, replication, and disaster recovery strategy with OVHcloud:

- [Veeam Managed Backup](/links/hosted-private-cloud/veeam-managed-backup): A fully managed backup solution by OVHcloud.
- [Zerto for VMware on OVHcloud](/links/hosted-private-cloud/vmware-zerto): Disaster recovery and replication across regions.

If you need training or technical assistance to implement our solutions, contact your sales representative or click on [this link](/links/professional-services) to get a quote and ask our Professional Services experts for a custom analysis of your project.

Ask questions, give your feedback and interact directly with the team building our Hosted Private Cloud services on the dedicated [Discord](https://discord.gg/ovhcloud) channel.

Join our [community of users](/links/community).