---
title: "Enterprise File Storage - NFS Client considerations"
excerpt: "Specific settings to check and/or implement for the Enterprise File Storage solution"
updated: 2024-10-09
---

## Objective

**Find out how to enable read/write access to your Enterprise File Storage from specific NFS clients.**

## Requirements

- [An Enterprise File Storage solution](/links/storage/enterprise-file-storage)

## Instructions

### Microsoft Windows NFS Clients

#### Ensure that the Windows user who is used to access your Enterprise File Storage has sufficient rights

This is because the UID/GID pair must be configured to 0 (root unix right).

If this is not the case, you will have errors accessing your Enterprise File Storage because, when NFS is authorized on a Windows machine, a UNIX user is created with the UID and the default GID at -2 (or 4294967294).

As a workaround, the UID and GID can be forced to 0 on the Windows machine that accesses your Enterprise File Storage.

- Start the registry editor on the client machine.
- Locate `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default`.
- Create two DWORD values, AnonymousUid and AnonymousGid.
- Set these values on the UID and GID to 0.
- Restart the NFS service on the client machine.

> [!primary]
>
> **Reference documentation:**
>
> - <https://techcommunity.microsoft.com/t5/running-sap-applications-on-the/installation-configuration-of-windows-nfs-client-to-enable/ba-p/367084>
> - <https://learn.microsoft.com/en-gb/archive/blogs/msdn/sfu/can-i-set-up-user-name-mapping-in-windows-vista>
> - <https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc753302(v=ws.10)?redirectedfrom=MSDN>
> - <https://kb.netapp.com/on-prem/ontap/da/NAS/NAS-KBs/Unable_to_perform_write_operations_on_an_export_mounted_on_a_Windows_machine>

#### Allow unsecured guest connections for SMB2 and SMB3 protocols

You may need to enable guest connections to access your Enterprise File Storage, as it does not provide a user account, only guest access.

To modify your security policy accordingly, follow these steps:

- In a command prompt, launch `gpedit.msc` and select `Modify group policy`.
- In the left pane, under `Local Computer Policy`, go to `Computer Configuration\Administrative Templates\Network\Lanman Workstation`.
- Open `Enable unsecured guest connections`, select `Enabled`, then select `OK`.

> [!primary]
>
> **Reference documentation:**
>
> - <https://learn.microsoft.com/en-us/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=group-policy>

#### Request activation of the "showmount" feature from OVHcloud support

For security reasons, the "showmount" option to list the shares available on an NFS server is disabled by default.
However, if you get "invalid device error" errors during certain write operations, or if you are using an application that absolutely must use this feature, open an [OVHcloud support ticket](https://help.ovhcloud.com/csm?id=csm_get_help) to request the feature to be enabled exceptionally.

> [!primary]
>
> **Reference documentation:**
>
> - <https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/showmount>

## Go further

If you require training or technical support to implement our solutions, please contact your sales representative or click [this link](/links/professional-services) to get a quote and request a custom analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
