---
title: "Configure MegaRAID for RAID 0 on a Dedicated Server"
excerpt: "Configure RAID 0 with the MegaRAID controller to use the full disk capacity on your OVHcloud dedicated server."
updated: 2025-04-29
---

 
## Objective

Redundant Array of Independent Disks (RAID) is a utility that mitigates data loss on a server by replicating data across two or more disks.

The default RAID level for OVHcloud server installations is RAID 1, which doubles the space taken up by your data, effectively halving the usable disk space.

**This guide explains how to configure your server’s disks with RAID 0, which will allow you to use all your disks' usable space.**

> [!warning]
> 
> Please note: RAID 0 provides **NO FAULT TOLERANCE** and **NO DATA REDUNDANCY**, making data loss in the event of disk failure highly likely.
> 

## Requirements

- A [dedicated server](/links/bare-metal/bare-metal) with hardware RAID
- Administrative (sudo) access to the server via SSH

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Dedicated Servers](/links/control-panel/baremetal-dedicated-servers)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Dedicated servers`{.action} > Select your server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instructions

### Using the OVHcloud Control Panel

From the `General information`{.action} tab, click on `...`{.action} next to the operating system and then click `Install`{.action}.

Select the operating system you want to install and then click `Next`{.action}.

Tick the boxes for **Customise the hardware RAID configuration** and **Customise the partition configuration**, then click `Next`{.action}.

![Customise hardware RAID and partition checkboxes](images/server_installation_raid0_2.png){.thumbnail}

Select `raid0` from the RAID drop-down list and click `Next`{.action}.

![Select RAID 0 from the RAID level drop-down list](images/server_installation_raid0_3.png){.thumbnail}

Configure the partitions as you see fit and then click `Next`{.action}.

![Configure disk partitions for the installation](images/server_installation_raid0_4.png){.thumbnail}

Finally, click `Confirm`{.action}.

![Confirm the RAID 0 installation settings](images/server_installation_raid0_5.png){.thumbnail}

After your server has been installed, check the partition sizes by logging on to the server via SSH and running the following command:

```sh
df -h
```

### Using rescue mode

In the **General Information** tab, look for `Boot` and click on `...`{.action}. Then click the `Edit`{.action} button to change the boot system.

![Edit boot setting in the General Information tab](images/rescue_mode_raid0_1.png){.thumbnail}

Next, select `Boot in rescue mode`{.action} then select `rescue-customer`{.action} from the drop-down list.

In the field "Send new login details to the following email address:", specify an alternative email address if you do not want the login credentials sent to your customer account’s primary address.

![Select Boot in rescue mode with rescue-customer option](images/rescue_mode_raid0_2.png){.thumbnail}

Click `Next`{.action} and then Confirm`{.action} in the **Summary**.

![Rescue mode summary confirmation step](images/rescue_mode_raid0_3.png){.thumbnail}

Once the change is completed, click on `...`{.action} next to “Status” in the box labelled **Service status**. Select `Restart`{.action} and the server will restart into rescue mode.

![Restart the server from the Service status section](images/server_installation_raid0_6.png){.thumbnail}

When your server reboots, log in to it via SSH using the rescue mode credentials that were emailed to you.

From the command line, type the following commands to delete the existing RAID settings. All data in the RAID will be deleted:

```sh
MegaCli -CfgLdDel -L0 -a0
MegaCli -CfgLdDel -Lall -aAll
```

Type the following command to retrieve the slot device IDs of your disks:

```sh
MegaCli -PdList -aALL | egrep "Slot|Device ID"
```

Type the following commands to configure RAID level 0:

```sh
MegaCli -CfgLDAdd -R0[252:0,252:1] -a0
```

In this example, 252 is the ID of the drive enclosure.

After setting the new RAID level you can check the settings with the following command:

```sh
MegaCli -LDInfo -Lall -a0 | grep -i size
```

## Go further

[Hot Swap – Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

[Hot Swap – Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

Join our [community of users](/links/community).
