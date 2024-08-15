---
title: Changing the admin password on a Windows server 
excerpt: Find out how to reset your Windows Administrator account password on a VPS or a Public Cloud instance using the OVHcloud rescue mode
updated: 2023-10-12
---

## Objective

When you install or reinstall a Windows Server operating system, you are provided with a password for administrative access (*Administrator* account).

If you have lost your Administrator password, you can reset it via the OVHcloud rescue mode.

**This guide explains how to reset the password of the admin account of a Windows Server OS in the OVHcloud rescue mode.**

## Requirements

- A [VPS](https://www.ovhcloud.com/asia/vps/) or a [Public Cloud instance](https://www.ovhcloud.com/asia/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](/links/manager)

## Instructions

### Step 1: Reboot the server into rescue mode

Rescue mode has to be activated before the admin password can be changed.

Use the respective guide to restart your OVHcloud service into rescue mode:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Public Cloud instance](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Step 2: Mount the system partition

Connect to your server via SSH. (Consult the [SSH introduction guide](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) if necessary.)

Alternatively, you can open a server connection by using [KVM (VPS)](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) or the [VNC console (Public Cloud instance)](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#accessvnc).

Type the following commands to mount the Windows file system:
 
```bash
ntfsfix /dev/sdb2
```

```bash
mount -t ntfs-3g /dev/sdb2 /mnt
```

### Step 3: Clear the current password

In this step the *SAM* file is edited by using a rescue mode tool. List the Windows users with this command:

```bash
chntpw -l /mnt/Windows/System32/config/SAM
```

```text
| RID -|---------- Username ------------| Admin? |- Lock? --|
| 01f4 | Administrator                  | ADMIN  | dis/lock |
| 01f7 | DefaultAccount                 |        | dis/lock |
| 01f5 | Guest                          |        | dis/lock |
| 01f8 | WDAGUtilityAccount             |        | dis/lock |
```

In this example output, `Administrator` is the local admin account. Start the reset procedure with the following command. (Use `admin` in case `Administrator` does not exist.)

```bash
chntpw -u Administrator /mnt/Windows/System32/config/SAM
```

```text
RID     : 0500 [01f4]
Username: Administrator
fullname:
comment : Built-in account for administering the computer/domain
homedir :

00000220 = Administrators (which has 1 members)

Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |

Failed login count: 47034, while max tries is: 0
Total  login count: 5

- - - - User Edit Menu:
 1 - Clear (blank) user password
 2 - Unlock and enable user account [probably locked now]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Type "1" and press `Enter`. (Make use of option 2 first if there is an "X" next to "Disabled".)

```text
Select: [q] > 1
Password cleared!
```

Type "q" and press `Enter` to quit the tool. Type "y" when prompted and press `Enter`.

```text
Select: [q] > q
 
Hives that have changed:
 #  Name
 0  </mnt/Windows/System32/config/SAM>
Write hive files? (y/n) [n] : y
 0  </mnt/Windows/System32/config/SAM> - OK
```

### Step 4: Reboot the server

You can now leave rescue mode and restart the server. If necessary, use the respective guide for your service:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Public Cloud instance](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)


### Step 5: Set a new password (KVM / VNC)

> [!warning]
>
> Do not skip this step. An unprotected Administrator account is a severe security risk.
>

Connect to your server and enter `cmd` into the search bar to open the `Command Prompt`.

Set the password for the current user ("Administrator"):

```powershell
net user Administrator *
```

![administratorpw](images/adminpw_win.png){.thumbnail}

You can now log in as "Administrator" with this new password.

## Go further


Join our community of users on <https://community.ovh.com/en/>.