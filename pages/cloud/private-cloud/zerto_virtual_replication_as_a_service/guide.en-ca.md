---
title: 'Setting up Zerto Virtual Replication for your DRP'
slug: zerto-virtual-replication-vmware-vsphere-drp
excerpt: 'Discover how to set up Zerto Virtual Replication between your Private Cloud platforms'
section: 'OVH services and options'
---

**Last updated 25th June 2020**

## Objective

This guide will present the concepts and steps required to setup Zerto Virtual Replication on the Private Cloud platform

**Discover how to set up Zerto Virtual Replication between your Private Cloud platforms.**

## Requirements 

- having 2 Private Cloud Platforms [Private Cloud](https://www.ovhcloud.com/en-ca/enterprise/products/hosted-private-cloud/hosts/) on 2 different data centres
- in each data centre, a free public IP must be available

### Zerto Virtual Replication Concepts

Zerto Virtual Replication is a disaster recovery solution for vSphere. It enables replication virtual machines between Private Cloud platforms by capturing and propagating all disk operations to secondary site.
It allows  automation and orchestration of actual failover or failover tests between sites.  

#### Virtual Replication Appliance (VRA)

Zerto works by deploying specific virtual machines on each hypervisor called Virtual Replication Appliance.
They have a predefined configuration: 

- vCPU: 1
- RAM: 2 GB
- Stockage: 36 GB

All VRA are stored on a specific datastore, provided by OVHcloud.

#### Sites

During deployement, VRA are deployed on source and destination sites, and then are paired together to start replication.
Since Zerto does not encrypt the dialog between VRA, OVHcloud automatically deploys a VPN tunnel between the VRA through the L2VPN appliance, to protect in-flight data.

#### Virtual Protection Group (VPG)

Before starting the replication, VMs must be grouped in a logical container called Virtual Protection Group, on which all replication parameters will be defined.
It allows to apply consistent parameters accross a group of VMs that share the same replication requirements, (typically VMs that belong to the same function or application),
 
VPGs can be prioritised to make the most efficient usage of available bandwidth.

## Instructions

### Service activation

#### From OVHcloud dashboard

From your OVHcloud Control Panel, go to "Server/Private Cloud". Select your primary site, then go ton the "Disaster Recovery" tab.

![zerto ovh enable](images/zerto_OvhToOvh_enable_01.png){.thumbnail}

Select **Between two OVHcloud Private Cloud solutions** then click `Activate Zerto DRP`{.action}.

![zerto ovh enable](images/zerto_OvhToOvh_enable_02.png){.thumbnail}

Selection of the primary **Private Cloud** and **data centre** is done automatically depending on where you are connecting from.

From the drop-down menu, select a **free**  public IP from the IP range attached to the **Private Cloud**. It will be used to setup the VPN tunnel between the 2 platforms.
Click `Next`{.action}.

![zerto ovh enable](images/zerto_OvhToOvh_enable_03.png){.thumbnail}

Secondary site selection must be done from available **Private Cloud** in the drop-down menu.
Please note that the list will show only Private Clouds meeting all the following requirements:

- Being located in another geographical area
- Not already involved in a Zerto replication

Select the **data centre** from the secondary **Private Cloud** in the drop-down menu.
The, select an **unused**  IP address from the public IP range attached to the secondary **Private Cloud**. It will be used for the secondary VPN endpoint.

Click `Next`{.action}.

![zerto ovh enable](images/zerto_OvhToOvh_enable_04.png){.thumbnail}

Activation request confirmation, as shown on screen, deployment can take up to one hour, if all provided information is correct (for example, if the IPs given in the wizard are already in use, the activation will fail).

![zerto ovh enable](images/zerto_OvhToOvh_enable_05.png){.thumbnail}

Once the activation has successfully completed, you will receive an email summary of the configuration and the links to the Zerto interface of both sites.

> [!primary]
>Dear Customer,
>
>You have just enabled the Zerto DRP solution between 2 of your Private Cloud solutions.
>
>You can log in to the main website via the following address:
>
>  - URL: https://zerto.pcc-x-x-x-x.ovh.com/ 
>
>You can log in to the secondary website via the following address:
>
>  - URL: https://zerto.pcc-x-x-x-x.ovh.com/ 
>
>You can authenticate with your administrator accounts the same way as you do for
>vSphere.


###  Zerto Replication Interface

The interface is reachable both from primary and secondary platforms through:

- https://zerto.pcc-x-x-x-x.ovh.com/ (replace with the PCC URL)

> [!warning]
>
> As indicated in the summary email, you can log in with your PCC account.
>

Once logged in, you arrive on the Zerto dashboard:

![Zerto Dashboard](images/zerto_OvhToOvh_int_01.png){.thumbnail}

You will find there:

- A status of VPGs health
- Key indicators for the Zerto platform
- Network and IO consumptions figures
- An alerts and messages log

### Configure a Virtual Protection Group (VPG)

From `Actions`{.action}, select `Create VPG`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_01.png){.thumbnail}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_02.png){.thumbnail}

First step **General**:

- Enter a name for the new VPG
- Except specific requirements, you can leave the Priority set to **Medium**

Click `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_03.png){.thumbnail}

In the next step you need to select the VMs that will be in the VPG.

> [!warning]
>
> A VM can only belong to a single VPG.
> 

- You can filter the VMs by name through the  **Search** dialog box
- Tick the box of every VM to be added

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_04.png){.thumbnail}

- Click on the arrow pointing to the right to place VMs in the VPG

Click `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_05.png){.thumbnail}

Next step is the selection of the secondary site:

- **Recovery Site**: select the remote site (the primary site will be tagged as (Local)).
- **ZORG**: scroll down and select **No Organization**. The other values are present for backwards compatibility but will trigger an error messsage if selected.

Now you must define the default recovery resources:

- **Hosts**: select a vSphere Resource Pool, a DRS Cluster or a specific host in it (Cluster1 in our example).
- **Datastore**: likewise you can select a specific datastore or datastore cluster in the drop-down list.

You can keep the default values for the other settings. Click `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_06.png){.thumbnail}

In this step you can override the default recovery resources for specific VMs.
If it is not necessary, you can click `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_07.png){.thumbnail}

Now you need to define the default network to use during test failovers and actual failovers.

- **Failover/Move Network**: choose the default vSphere portgroup for an actual failover.
- **Failover Test Network**: choose the default vSphere portgroup for a test failover.
- **Recovery Folder**: if you want to regroup the failover VMs on the secondary site, you can select a folder or just "/" to place the VMs at the root of the vSphere inventory.

> [!primary]
> **Pre-recovery Script** and  **Post-recovery Script** are locked down, these features are not enabled.
> 

Click `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_08.png){.thumbnail}

In this second step, you have the possibility to override the default recovery networks for each VM, and specify the IP addresses to use in case of a test or an actual failover.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_09.png){.thumbnail}

> [!warning]
>
> The modification of the IP adress during failover is only possible for supported OSes with functioning VMware Tools
> 

Click `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_10.png){.thumbnail}

Long term retention is disabled, click `NEXT`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_11.png){.thumbnail}

The last screen summarize the settings for the new VPG. If everything is OK, click `DONE`{.action}.

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_13.png){.thumbnail}

On the dashboard, you will see the new VPG with a status "Initializing".

### Start a failover 

After having configured your VPG and once the initial replication has completed, you can now test Zerto failover features.

> [!warning]
>
> A failover test has **NO** impact on the production site, you only need to make sure that the VMs that are being failed-over are are starting in an isolated network and/or different IPs to avoid network conflicts.
> All the VMs instantiated during the failover test are fully managed by Zerto. You should not remove or modifiy them; they will be removed automatically at the end of the failover test.
> The replication keeps running during the failover tests and is not impacted in any way.
>

![Zerto Test Failover](images/zerto_OvhToOvh_test_00.png){.thumbnail}

From the interface, click on the bottom right button `FAILOVER`{.action} (the toggle is by default on **TEST**).
If the button is greyed out, it is because there is no available VPG to perform a test (initialisation is not finished or there is an issue with the VPG).

![Zerto Test Failover](images/zerto_OvhToOvh_test_01.png){.thumbnail}

The failover wizard appears with eligible VPGs, their replication direction (in or out), destination site and service level status (**Meeting SLA**).

You have 2 options:

1. Select the VPGs itself to perform the test, failing over all the VMs within.
2. Click on the square icon on the left of the VPG name to display all the VMs in the VPG. You can then choose to failover only the selected VMs within the VPG.

Click `NEXT`{.action}.

![Zerto Test Failover](images/zerto_OvhToOvh_test_02.png){.thumbnail}

In this case we have chosen to do a full VPG failover.

You can now check the settings for the failovers:

- Replication direction
- Remote site
- Boot order (locked down)
- Pre/Post scripts (locked down)

Click `NEXT`{.action}.

![Zerto Test Failover](images/zerto_OvhToOvh_test_03.png){.thumbnail}

The summary screen is displayed. If everything is OK, you can start the test by clicking `START FAILOVER TEST`{.action}.
You can log in on the remote site vCenter and see the VMs starting. You can then check if everything is working correctly on the remote site.

![Zerto Test Failover](images/zerto_OvhToOvh_test_05.png){.thumbnail}

When all checks have been performed, you can stop the test by clicking on the little red box right next to **Testing Failover**.

![Zerto Test Failover](images/zerto_OvhToOvh_test_06.png){.thumbnail}

At this stage, you can add a result of the test for future reference.

Confirm the end of the test by clicking `STOP`{.action}.

Clean-up operations are launched right away on the remote site.

### Launch a actual failover

You can launch a full failover from the secondary site, in case the primary site has been rendered unusable by a disaster.

> [!warning]
> If you trigger an actual failover when the primary site is still available, you have the possibility to properly shut down the VMs on the primary site.
> If not, be careful with the network configuration to make sure to prevent IP conflicts between primary and secondary instances of VMs.
>
> Please note that, contrary to what happens during a test failover, replication operations are stopped during an actual failover.
>

![Zerto Live Failover](images/zerto_OvhToOvh_live_02.png){.thumbnail}

To start  a complete failover, you need to set the toggle on **LIVE** before pushing the failover button. (The banner at the bottom of the page becomes red to warn you that going further may have an impact on your VMs.)

Click `FAILOVER`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_03.png){.thumbnail}

A screen will appear indicating the available VPGs, the direction of replication, the destination site, and if the level of protection is correct (**Meeting SLA**).
You can decide on the failover parameters, just like during a test failover: which VPGs to failover, the replication direction, VPGs status (**Meeting SLA**).

1. You can select one or several VPGs
2. If you want to partially migrate some VPGs, you can click on the square icon and select which VMs to failover.

Click `NEXT`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_04.png){.thumbnail}

We have decided to failover a single VPG.

We have a summary of the failover parameters:

- Replication direction
- Remote site
- The **checkpoint** to use: what version should use Zerto to restart from. Usually the latest version will minimze the data loss and improve **RPO**.
- What **commit policy** to use: see further down the page.
- **VM Shutdown**: what should Zerto do with the VMs on the primary site if they are still running, leave them running, shutdown, forced shutdown.
- **Reverse Protection**: after the failover, should the replication enabled again to allow a failback or be left as-is.

![Zerto Live Failover](images/zerto_OvhToOvh_live_05.png){.thumbnail}

There are 3 **Commit Policy** settings:

- Auto-Rollback: If no action is taken, the rollback starts automatically after the timer is elapsed.
- Auto-Commit: If no action is taken, data changed on the secondary site is now commited on VMs, and to be able to fail back, a reverse replication needs to be setup.
- None: **Rollback** or **Commit** have to be launched manually.

![Zerto Live Failover](images/zerto_OvhToOvh_live_06.png){.thumbnail}

For all automatic actions, the default timer is 60 minutes.

Click `NEXT`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_07.png){.thumbnail}

The summary screen is displayed. If everything is OK, you can start the test by clicking `START FAILOVER`{.action}.

> [!warning]
>
> Please read the summary and all associated warnings carefully.
>


![Zerto Live Failover](images/zerto_OvhToOvh_live_08.png){.thumbnail}

If you have selected an **Automatic Policy**, you will receive a warning about its impact.

Confirm with `START FAILOVER`{.action}.

Failover starts, you can follow the actions from the secondary vCenter.
Validate the successfull start of VMs on secondary platform.

![Zerto Live Failover](images/zerto_OvhToOvh_live_10.png){.thumbnail}

After the failover has completed, you will see an pending task as long as you have not committed or failed back the operation (through the small icons near the VPG name).

![Zerto Live Failover](images/zerto_OvhToOvh_live_11.png){.thumbnail}

When you commit the data on the secondary site, you can automatically set up the protection (**Reverse Protection**).

Validate with `COMMIT`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_13.png){.thumbnail}

If you check the VPG, you will see that the replication direction has changed.

### Prepare and trigger the failback

Depending on failover options, the failback (if needed) may require differents steps.

- If you have selected **Reverse Protection** during the failover, the failback is just a  **Failover Live** (refer to the relevant part of this guide).
- If you have not enabled **Reverse Protection**, you need to create a new VPG, do a full sync and then do a **Failover Live** (refer to the relevant part of this guide).

## Go further 

Discuss with other Zerto users on <https://community.ovh.com/>.
