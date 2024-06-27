---
title: "How to reset the Windows Administrator password with the Windows customer rescue system"
excerpt: "Find out how to use the OVHcloud Windows rescue mode to reset the password of the Administrator account on a Windows dedicated server"
updated: 2024-06-26
---

## Objective

This guide will help you to reset your `Administrator` account password with the **Windows customer rescue system**.

## Requirements

- Microsoft Windows installed on your [dedicated server](/links/bare-metal/bare-metal)
- At least 16 GB of RAM installed on the server
- Access to the [OVHcloud Control Panel](/links/manager)

> [!warning]
>
> This guide is not applicable to the legacy `WinPE Rescue` mode.
>
> Follow [this guide](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows) instead when using the `WinPE Rescue` mode in the OVHcloud Control Panel.

## Instructions

### Step 1 - Reboot the server into rescue mode <a name="step1"></a>

The system has to be started into the **Windows customer rescue system** before the admin password can be changed.

For detailed instructions, please refer to the [rescue mode guide](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

### Step 2 - Clear the current password <a name="step2"></a>

Connect to your server in Remote Desktop using the credentials provided by email.

Please note that the user name for the rescue mode is `Administrator`.

- If your server uses software RAID on your Windows disk, you have to import your Windows local disk to be able to access it: Follow the instructions of the [section A](#sectionA) below.
- If your server does not use software RAID on your Windows disk, you should be able to directly access the local Windows disk as explained in the [section B](#sectionB) of this guide.

#### A - Importing your local Windows disk <a name="sectionA"></a>

##### 1. Access disk management

Right-click the `Start`{.action} menu and select `Disk Management`{.action}.

![disk_manager_menu](images/disk_manager_menu.png){.thumbnail}

You can then see the disks and volumes of the server.

![disk_manager_window](images/disk_manager_window1.png){.thumbnail}

Your server's Windows disk is probably *Disk 1*. You must import it to be able to access it.

Please note that if you have several disk groups, the number of the Windows disk may vary. You may have to import several disks to get the Windows one.

You also have to import the second disk to properly import your software RAID volume.

##### 2. Import local disks

Right-click *Disk 1* and select `Online`{.action}.

![disk_import_disk1](images/disk_manager_disk1on.png){.thumbnail}

Do the same thing for the second disk (*Disk 2*) to properly import your software RAID volume.

Right-click *Disk 2* and select `Online`{.action}.

![disk_import_disk2](images/disk_manager_disk2on.png){.thumbnail}

Disks are now seen as "Dynamic" and "Foreign".

Right-click *Disk 1* again and select `Import Foreign Disks`{.action}.

![disk_import_menu](images/disk_manager_diskimport.png){.thumbnail}

Click `OK` twice.

![disk_import1](images/disk_import1.png){.thumbnail}

![disk_import2](images/disk_import2.png){.thumbnail}

You can see that the local disk is now accessible and that the Windows disk is drive `(E:)` (spreading on two software RAID disks with Mirrored volume type).

![disk_import_sync](images/disk_import_sync.png){.thumbnail}

> [!primary]
> In this example, the volume status is "Resynching" because the server was hard-rebooted into rescue mode. This is an expected status and it is not caused by the rescue mode itself.
> 
> This will not affect data on the volume and resynchronisation will continue once the server is rebooted on its installed OS.

> [!warning]
>
> You must then use the path of your local Windows directory (here it is `E:\Windows`) when browsing to find the "SAM" configuration file below.

You can now reset the password by following the instructions below.

#### B - Reset the password <a name="sectionB"></a>

To reset passwords, the tool NTPWEdit is required.<br>
Once you are connected via Remote Desktop, open the browser and download it from its [official website](http://www.cdslow.org.ru/files/ntpwedit/ntpwed07.zip).<br>
Navigate to the folder where the downloaded ZIP file is located and extract its content.<br>
Next, open the `ntpwedit64` executable to start the application.

In this interface, you can manipulate the SAM file in order to clear the admin user's password.

You must browse the local Windows drive to find your system's SAM file.

Click the three dots button (`...`{.action}) to browse the drive containing your server's local Windows folder.

It usually is the `Windows (E:\)` drive.

![ntpwedit1](images/ntpwedit_1.png){.thumbnail}

Browse to `E:\WINDOWS\SYSTEM32\CONFIG\`.

Select and open the SAM file to display the user accounts by clicking `Open`{.action}.

![ntpwedit_sam](images/SAM.png){.thumbnail}

Select the user account "admin" and click on `Change password`{.action}.

![ntpwedit2](images/ntpwedit_2.png){.thumbnail}

In the popup window, leave the fields empty and click `OK`{.action}. Finish by clicking `Save changes`{.action} and `Exit`{.action}.

After this, the server needs to be rebooted on the normal operating system.

### Step 3 - Reboot the server <a name="step3"></a>

First, change the netboot back to "Boot from the hard disk" in your OVHcloud Control Panel (see [step 1](#step1)).

Then restart the server from the Control Panel.

Click the `...`{.action} button near "Status" in the "Service Status" section and click `Restart`{.action}.

![reboot](/pages/assets/screens/control_panel/bare-metal-dedicated/cp_dedicated_restart.png){.thumbnail}

### Step 4 - Set a new password (IPMI) <a name="step4"></a>

In your OVHcloud Control Panel, navigate to the IPMI tab to open a KVM session.

![adminpw3](images/adminpw3.png){.thumbnail}

#### For a newer version of Windows

Once you have accessed your server through IPMI, click the start menu icon at the bottom left. Start typing `Sign-in options` and click the `Sign-in options`{.action} button once it pops up.

![adminpw7](images/adminpw7.png){.thumbnail}

Next, click the `Add`{.action} button under "Password" to set your new password.

![adminpw8](images/adminpw8.png){.thumbnail}

#### For an older version of Windows

A command line window (cmd) should open when the KVM session is established.

Set the password for the current user (`Administrator`):

```bash
net user Administrator *
```

![adminpw9](images/adminpw9.png){.thumbnail}

We advise you to use the virtual keyboard when typing passwords in this interface to avoid mistakes.

## Go further

Join our [community of users](/links/community).
