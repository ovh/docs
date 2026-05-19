---
title: "Windows Rescue Mode on a Dedicated Server"
excerpt: "Boot your Windows dedicated server into OVHcloud rescue mode to troubleshoot, repair, or reset passwords."
updated: 2025-01-28
---

<style>
details>summary {
	color:rgb(33, 153, 232) !important;
	cursor: pointer;
}
details>summary::before {
	content:'\25B6';
	padding-right:1ch;
}
details[open]>summary::before {
	content:'\25BC';
}
</style>

## Objective

Rescue mode is a tool provided by OVHcloud that allows you to boot into a temporary operating system for the purpose of diagnosing and resolving issues on your server.  
The functionality of rescue mode in general is described on our guide page: 

[How to activate and use rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

The option **Windows customer rescue system** is only available for dedicated servers that have a **Windows Server** operating system installed. The following conditions apply:

- The rescue system for Windows (`rescue-customer-windows`) runs in a virtual machine (VM) launched from the customer rescue system (`rescue-customer`, based on Debian GNU/Linux).
- The server disks are attached to the VM with *passthrough*, so it is possible to access them.
- Other server components will not be accessible (CPU, RAM, network card, RAID card).
- The network is mounted with *passthrough* but without direct access to the network card. The VM carries the IP address and the MAC address of the *bare metal* server.

> [!warning]
>
> Backing up your data should be the first step in rescue mode if you do not already have recent backups available.
>
> If you have any services still online, rescue mode will interrupt them as the machine is being rebooted into the auxiliary rescue environment.
>

**This guide explains how to boot a server into the Windows customer rescue system.**
 
## Requirements

- Microsoft Windows installed on your [dedicated server](/links/bare-metal/bare-metal)
- At least 16 GB of RAM installed on the server

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### OVHcloud Control Panel Access

- **Direct link:** [Dedicated Servers](/links/control-panel/baremetal-dedicated-servers)
- **Navigation path:** `Bare Metal Cloud`{.action} > `Dedicated servers`{.action} > Select your server

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Instructions

### Activating rescue mode for Windows

<!-- CP-STEPS-START:activate-rescue-windows -->
Click on your server's name to open the `General information`{.action} tab.

<a name="netboot"></a>

In the **General information** box, click the button `...`{.action} next to `Boot`. Click on `Edit`{.action} in the context menu.

![Edit boot option in the General information section](images/rescue-mode-001.png){.thumbnail}

On the page **Change the netboot**, select `Boot in rescue mode`{.action}.

Select `Windows customer rescue system`{.action} in the drop-down menu.

![Select Windows customer rescue system from the netboot menu](images/manager-rescue-windows-menu.png){.thumbnail width="800"}

The rescue mode notification email including its login details will be sent to the contact email address of your OVHcloud account. To use a different email address, enter it in the field `Send new login details to the following email address`.

Click `Next`{.action}.

In the **Summary** step, click `Confirm`{.action}.

![Summary](images/winresc_summ.png){.thumbnail}

You should now have a notification regarding the `Netboot` setting in the `General information`{.action} tab.

![Netboot](images/rescue-mode-006.png){.thumbnail}

The final step is to restart the server. Click the button `...`{.action} next to "Status" in the **Service status** box, then click `Restart`{.action}. Click `Confirm`{.action} in the popup window.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/rebooting-your-server.png){.thumbnail}

This "hard reboot" will take a few minutes to complete. You can check the current status in the tab named `Tasks`{.action}.

> [!primary]
> 
> After you have finished your actions in rescue mode, remember to change the `Netboot` setting back to `Boot from the hard disk`{.action} before restarting the server.
<!-- CP-STEPS-END:activate-rescue-windows -->

### Accessing your server in rescue mode

Once you have received the email informing you that rescue mode is enabled, you can log on to the Windows rescue mode system and access your server.  
<!-- CP-STEPS-START:service-emails -->
This email is also available in your [OVHcloud Control Panel](/links/manager) as soon as it is sent. Click on the name associated with your NIC handle (Customer ID) in the menu bar in the top right-hand corner, then select `Service emails`{.action}.
<!-- CP-STEPS-END:service-emails -->

To establish a remote session to the Windows rescue mode system, you will need these credentials:

- IP address of the server
- Username of the temporary admin account (`Administrator`)
- Password for the temporary admin account

You can use the following connections methods to access your server via the Windows rescue mode system:

- Remote Desktop Protocol (RDP)
- KVM over IP (if your server allows it)
- OpenSSH (official Windows Server component)

#### RDP

/// details | Unfold this section

To connect, use the `Remote Desktop Connection` client of Windows or any compatible application.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

///

#### KVM

/// details | Unfold this section

From the KVM login screen, you can select a different keyboard language.

![KVM Login Screen](images/rescue-kvm-login-screen.png){.thumbnail width="800"}

![KVM Language Screen](images/rescue-kvm-login-language.png){.thumbnail width="800"}

You can change the accessibility options and enable the virtual keyboard:

![KVM accessibility Screen](images/rescue-kvm-login-accessibility.png){.thumbnail width="800"}

![KVM keyboard screen](images/rescue-kvm-login-keyboard.png){.thumbnail width="800"}

You can find further information in our guide: [How to use the IPMI console with a dedicated server](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

///

#### SSH

/// details | Unfold this section

Open the command line application on your local device and enter the following command:

```bash
ssh Administrator@SERVER_IP
```

Example:

```bash
ssh Administrator@203.0.113.100
```

Enter the temporary rescue mode password when prompted. Example:

```console
Administrator@ns9356771.ip-203-0-113.eu's password:
administrator@WINRESCUEOVH C:\Users\Administrator>
```

Find more information on SSH connections in our [SSH introduction guide](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).  
You can also use any SSH connection tool, such as [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

///

### Importing disks to access your files

Once logged in to the Windows customer rescue system, you need to import (mount) the Windows server's disks before you can access the file system.

/// details | Unfold this section

> [!warning]
> The following exemplary instructions and screenshots will illustrate the mounting process based on a server with two mirrored disks (RAID1). The details displayed by the Disk Management tool depend on your server's disk configuration.  
> For additional information, consult the [official Microsoft documentation](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/overview-of-disk-management).
> 
> If you require professional assistance with server administration, consider the details in the [Go further](#gofurther) section of this guide.

| ![Open Disk Management from the Start Menu](images/rescue-disk-mgmt1.png){.thumbnail} |
|---|
| Right-click on the `Start Menu`{.action} button and open `Disk Management`{.action}. |

| ![Server disks shown as Offline in Disk Management](images/rescue-disk-mgmt2.png){.thumbnail width="700"} |
|---|
| `Disk 0` contains the rescue system (volume `C:`). The disks of your Windows server will be displayed as `Offline`. |

| ![Set disks to Online via the context menu](images/rescue-disk-mgmt3.png){.thumbnail} |
|---|
| Right-click on each disk and select `Online`{.action} from the context menu. |

| ![Disks recognized as Foreign in Disk Management](images/rescue-disk-mgmt4.png){.thumbnail} |
|---|
| The server disks are now [recognized by the rescue system as `Foreign`](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management#a-dynamic-disks-status-is-foreign), a status indicating in this case that the attached disks belong to a different operating system. |

| ![Import Foreign Disks option in the context menu](images/rescue-disk-mgmt5.png){.thumbnail} |
|---|
| Right-click on a disk and select `Import Foreign Disks...`{.action} from the context menu. |

| ![Select disks to import dialog](images/rescue-disk-mgmt6.png){.thumbnail} |
|---|
| If applicable, select the disks to import. Click `OK`{.action}. |

| ![Confirm foreign disk import dialog](images/rescue-disk-mgmt7.png){.thumbnail} |
|---|
| Click `OK`{.action}. |

| ![Mirrored disks resynching after import](images/rescue-disk-mgmt8.png){.thumbnail} |
|---|
| In this example, the two disks of the server are mirrored, therefore the status `Resynching` will be displayed. This is the normal process; the resynchronisation will continue once the server is rebooted into its installed OS. |

| ![Open the Windows partition to access files](images/rescue-disk-mgmt9.png){.thumbnail} |
|---|
| To access your files, right-click on the Windows partition of your `Disk 1` and select `Open`{.action} from the context menu. |

///

### Recommended utilities

> [!primary]
>
> Additional software is not preinstalled on the rescue mode system. Below is a list of recommended tools, available from the respective website of their developers.

| Software | Description |
| --- | --- |
| CrystalDiskInfo | Disk diagnostics tool |
| 7-Zip | Archive management tool |
| FileZilla | FTP client |

### Exiting rescue mode

<!-- CP-STEPS-START:exit-rescue -->
In the [OVHcloud Control Panel](/links/manager), [change the boot mode](#netboot) back to `Boot from the hard disk`{.action} and confirm.

![Netboot Disk](images/rescue-mode-007.png){.thumbnail width="800"}

Then use the `Restart`{.action} function in your OVHcloud Control Panel.
<!-- CP-STEPS-END:exit-rescue -->

<a name="gofurther"></a>

## Go further

[How to activate and use rescue mode](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[How to change the admin password on a Windows dedicated server](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)

For specialized services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).