---
title: "Reset Administrator password when using Rescue-Customer-Windows"
excerpt: "Reset Administrator password when using Rescue-Customer-Windows"
updated: 2024-05-21
---

## Objective

This guide will help you to reset your `Administrator`'s password with the __*Windows customer rescue system*__.

## Requirements

- Microsoft Windows installed on your [dedicated server](/links/bare-metal/bare-metal)
- At least 16 GB of RAM installed on the server
- Access to the [OVHcloud Control Panel](/links/manager)

> [!warning]
>
> This is not compatible with the `WinPE Rescue`.  
> Follow [this guide](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows/guide.en-gb.md) if you are using the `WinPe Rescue`.
>

## Instructions

### Step 1: Rebooting the server into rescue mode <a name="step1"></a>

The system has to be started in __*Windows customer rescue system*__ before the admin password can be changed.

For detailed instructions, please refer to the [rescue mode guide](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows/guide.en-gb.md).

### Step 2: Clearing the current password <a name="step2"></a>

Connect to your server in Remote Desktop using the credentials provided by email.

Please note that the user name for the rescue is `Administrator`.

If you server uses software RAID on your Windows disk, you have to import your Windows local disk to be able to access it: follow instructions of [section A](#sectionA).

If you server does not use software RAID on your Windows disk, you should be able to access directly access the local Windows disk as explained in [section B](#sectionB).

#### A) Importing your local Windows disk <a name="sectionA"></a>

1) __Access disk management__

Right click the start menu and select "Disk Management".

![disk_manager_menu](images/disk_manager_menu.png)

You can then see the disks and volumes of the server.

![disk_manager_window](images/disk_manager_window1.png)

Your server's Windows disk is probably _disk 1_, so you must import it to be able to access it.
Please note that if you have several disk groups, the number of the Windows disk may vary, you may have to import several disks to get the Windows one.

2) __Importing local disk__

Right-click _Disk 1_ and select "Online".

![disk_import_disk1](images/disk_manager_disk1on.png)

Do the same thing for the second disk (Disk 2) to properly import your software raid.

Right-click _Disk 2_ and select "Online".

![disk_import_disk2](images/disk_manager_disk2on.png)

Disks are now seen as "Dynamic" and "Foreign".

Right-click _Disk 1_ again and select "Import Foreign Disks".

![disk_import_menu](images/disk_manager_diskimport.png)

Click "OK" twice:

![disk_import1](images/disk_import1.png)
![disk_import2](images/disk_import2.png)

Here, you can see that the local disk is now accessible and the Windows disk is drive "E:" (spreading on two disks because it is in software RAID).

![disk_import_sync](images/disk_import_sync.png)

__Note__: In this example, the volume status is "Resynching" because server was hard-rebooted in rescue. This is normal behaviour and it is not caused by the rescue itself.
This will not affect data on the volume and resynchronisation will continue after the server is rebooted on its normal OS.

> [!warning]
>
> You must then use the path of your local Windows directory (here it is E:\Windows) when browsing to find the "SAM" configuration file below.

You can now reset the password by following the instructions in [section B](#sectionB)

#### B) Resetting the pasword <a name="sectionB"></a>

To reset passwords, the NTPWEdit tool is required.
Once you are connected via Remote Desktop, open the browser and download it from its official website.
Navigate to the folder where the downloaded ZIP file is located and extract the contents.
Next, open the ntpwedit64 executable to start the application.

In this interface, you can manipulate the SAM file in order to clear the admin user's password.

You must browse to the local Windows drive to find your server's SAM file.

Click the three dots to browse to the drive containing your server's local Windows drive

Typically it is Windows (E:\)

![ntpwedit1](images/ntpwedit_1.png)

Browse to E:\WINDOWS\SYSTEM32\CONFIG\

Open the SAM file to display the list of users by clicking "Open".
![ntpwedit_sam](images/SAM.png)

The relevant user will either be "admin" or "Administrator", depending on the Windows version. If both are present, choose "admin". Then click  "Change password".

![ntpwedit2](images/ntpwedit_2.png)

In the popup window, leave the fields blank and click OK. Finish by clicking "Save changes and Exit".

After this, the server needs to be rebooted again.

### Step 3: Rebooting the server <a name="step3"></a>

First, change the netboot back to "Boot from the hard disk" in your OVHcloud Control Panel (see [step 1](#step1)).

Then restart the server from the Control Panel.

Click the three dots near Status in the "Service Status" section and select "Restart"

![reboot](images/reboot.png)

### Step 4: Setting a new password (IPMI) <a name="step4"></a>

In your OVHcloud Control Panel, navigate to the IPMI tab to open a KVM session.

![adminpw3](images/adminpw3.png)

#### For a newer version of Windows

Once you have accessed your server through IPMI, click the hourglass on the bottom-left. Start typing "Sign-in options" and click on Sign-in options once it pops up.

![adminpw7](images/adminpw7.png)

Next, click the "Add" button under "Password" to set your new password.

![adminpw8](images/adminpw8.png)

#### For an older version of Windows

A command line window (cmd) should open when the KVM session is established.

Set the password for the current user (`Administrator`):

```
net user Administrator *
```

![adminpw9](images/adminpw9.png)

It is advisable to use the virtual keyboard when typing passwords in this interface.


