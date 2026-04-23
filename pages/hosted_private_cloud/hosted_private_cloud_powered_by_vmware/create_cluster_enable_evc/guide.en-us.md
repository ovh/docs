---
title: Cluster creation and EVC activation
excerpt: Learn how to create a cluster and activate EVC mode
updated: 2022-02-08
---

## Objective

You can set up multiple clusters in your environment to segment your activities.<br>
Learn how to create them and configure their functionalities (DRS, HA & EVC).

**This guide offers a step by step study case to achieve the objective.**

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere (created in the [OVHcloud Control Panel](/links/manager))

## Instructions

### Cluster creation

In the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.

![Menu](images/en01dash.png){.thumbnail}

Right click your Datacenter.<br>
Select `New Cluster`{.action}.

![New Cluster](images/en02newcluster.png){.thumbnail}

In the pop-up window, name your cluster and select the relevant options you want set.<br>
Click `OK`{.action} when done.

![Cluster](images/en03cluster.png){.thumbnail}

> [!warning]
>
> vSAN requires vSAN compatible hosts. Find more details [here](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/manager_ovh_private_cloud) on how to order them if needed.
> 

### DRS

DRS spreads the compute load accross your hosts.<br>
If you activated the option, it is set on "Fully Automated" by default.

Select your cluster. In the `Configure`{.action} tab, select `vSphere DRS`{.action} and click `Edit`{.action}.

![DRS](images/en04drsedit.png){.thumbnail}

Three options are available to you:

- Manual Mode. DRS generates both power-on placement recommendations, and migration recommendations for virtual machines. Recommendations need to be manually applied or ignored.
- Partially Automated. DRS automatically places virtual machines onto hosts at VM power-on. Migration recommendations need to be manually applied or ignored.
- Fully Automated. DRS automatically places virtual machines onto hosts at VM power-on, and virtual machines are automatically migrated from one host to another to optimize resource utilization.

Automated modes also allow to set the sensitivity of the service, from the most conservative to the most aggressive threshold.<br>
Click `OK`{.action} when done.

![DRS](images/en05drs.png){.thumbnail}

### HA

High Availability allows for redundancy so a failing host will not impact the services running in your VMs.<br>
If you activated the option, it is set on its default settings.

To modify them, select your cluster. In the `Configure`{.action} tab, select `vSphere HA`{.action} and click `Edit`{.action}.

![HA](images/en06haedit.png){.thumbnail}

The response types for the different host failures can be custom set to your needs.<br>
Click `OK`{.action} when done.

![HA](images/en07ha.png){.thumbnail}

### EVC

EVC (Enhanced vMotion Compatibility) allows migration of live VMs between hosts.

#### Best Practices for Mixed Hardware Clusters

This section aims to help you:
- Apply VMware by Broadcom best practices
- Ensure cluster stability and workload availability
- Fully leverage new hardware PREMIER2026 Generation (based on Intel Emerald Rapids)
- Avoid common misconfigurations impacting vMotion and High Availability (HA)

Introducing PREMIER2026 allows you to increase performance per host, extend the lifetime of your cluster and scale with new-generation hardware without rebuilding from scratch.

However, mixing CPU generations in a cluster introduces compatibility challenges, especially for vMotion (live migration) and HA restart mechanisms. This is where Enhanced vMotion Compatibility (EVC) becomes mandatory.

#### Supported use cases:
- Heterogeneous cluster (progressive growth)
- Migration to PREMIER2026 (homogeneous target)

##### Use Case 1: Heterogeneous cluster (progressive growth)
You want to keep existing hosts (Essential / SDDC / Premier) and add PREMIER2026 hosts progressively to scale your cluster over time

Recommended approach:
1. Enable EVC on the cluster
2. Select an EVC mode compatible with the oldest CPU generation
3. Add PREMIER2026 hosts
4. Continue scaling progressively

> [!warning]
>Implications: all hosts operate under a common CPU baseline, you preserve compatibility but you may not fully leverage the newest CPU features (slight performance limitation due to CPU masking)
>

##### Use Case 2: Migration to PREMIER2026 (homogeneous target)
You want to migrate workloads to PREMIER2026 only then decommission older hardware.

Recommended approach:
1. Enable EVC on the cluster (temporary baseline for migration, may require a power off/on of your VM)
2. Add PREMIER2026 hosts
3. Use vMotion to migrate all workloads
4. Remove old hosts from the cluster
5. (Optional) Reconfigure or disable EVC to unlock full CPU capabilities (may require a power off/on of your VMs)

> [!warning]
> Implications: Short-term compatibility ensured, Long-term performance maximized but requires a structured migration phase.
>

Alternative approach with a new cluster
1. Create a new cluster (no EVC configuration required)
2. Add PREMIER2026 hosts in this new cluster
3. Use vMotion to migrate all workloads from old cluster to the new one (rollback is possible but requires a power off/on of your VMs as EVC is not enabled in the new cluster)
4. Remove old hosts from the old cluster
5. Remove old cluster

> [!warning]
> Implications: Short-term performance maximized but requires a structured cross-cluster migration phase. No VMs power off/on required
>

#### How to Enable EVC
Prior to activating the functionality, check your hosts summary pages to determine their types.

![EVC](images/en12host.png){.thumbnail}

Select your cluster. In the `Configure`{.action} tab, select `VMware EVC`{.action} and click `Edit`{.action}.

![EVC](images/en08EVCedit.png){.thumbnail}

Enable EVC for the type of CPUs your hosts hold.<br>
Downward compatibility is assured. To help you verify the settings are working, you will see a compatibility validation at the bottom of the window.<br>
Click `OK`{.action} when done.

![EVC](images/en11EVC.png){.thumbnail}

> [!warning]
>
> EVC activation can only happen on a cluster with no active VM running. Make sure to turn off or evacuate all VMs before doing it. EVC activation may require a power off/on of your VMs
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
