---
title: Rescue mode
excerpt: How to use the Rescue mode.
slug: rescue_mode
section: Server Management
---


## 
There exists 2 Rescue mode at OVH: Rescue-pro and WinRescue (available in Advanced mode in the section Netboot of the manager). The rescue Pro is to be used mainly with servers running Linux. It enables users to access in SSH and to perform hardware checks.

Here are some examples of operations that can be done in Rescue mode:

## Rescue-pro for Linux:

- Execute fsck / e2fsck
- Look and analyze log files
- Fix software issues
- Check / Rebuild RAID
- Make backups of your data



## Hardware check interface:

- Memtest: to check the memory (RAM)
- Cpuburn: to check the stability of the CPU
- Fsck: to check the file system
- State: to check the hard drives
- Explorer: to navigate within your folders and files



## Rescue Mode WinPE:

- File management: Explorer, FTP client, WinRAR
- Password management: used to change or remove passwords of user account of the Windows server
- Server tools: Console, antivirus, virtual drive
- Internet navigator
- Hard drive management: Testdisk, Diskpart, Bootsect


If one or more tests fail or show errors, please contact your support and provide the result of those tests. You can do that directly within our manager in the Support section.


## 1. Activating the Rescue Pro mode
The Rescue-pro Mode is an Operating System based on Linux (Debian). It is loaded on the server from the network. It is completely independent from the OS installed on the server.

## Warning:
Do not used the web interface and SSH at the same time. Do not start hard drives check and mount your partitions at the same time, it could result a lost of data!!
Log in your manager and in the Dedicated Server section, choose your server in the list. On the left menu, choose the "Netboot" category and then "Rescue Pro mode".

Note that after choosing "Rescue pro", the server will not automatically be restarted in Rescue mode. There is another step that need to be done. There is 2 ways to perform a reboot of your server, either a soft reboot by logging in your server and execute a reboot command, or a hard reboot, which can be done directly from the manager.

If possible, it is advised to always prefer a soft reboot (in SSH: reboot). Do a hard reboot in situation where a soft reboot is not possible (can be done in the section reboot of the manager).

## Warning:
The hardware reboot is recommended only in cases where you do not have any other access to your server. By performing an hardware reboot, there could be risks of losing data. The hard reboot is the equivalent of a electrical reset.
An email will be sent to the admin of the server with the information necessary to connect to your server that was put in Rescue mode.
In the case you received an email informing you that one of your server is in Rescue mode with the root password, this generally means that a fault has been detected on it, and that our technician at the datacenter had no other choice but to put your server in Rescue mode. This could be due to a software issue with the grub, or firewall.


## 2. Hardware Check
Once the server has been put in Rescue mode, here is a screenshot of the interface that enable you to perform hardware checks:

![](images/img_953.jpg){.thumbnail}
This graphical interface is available immediately after the server is in Rescue mode. You will be able to test the hardware of your server such as the CPU, RAM, hard drives, and network.

The interface is available at the following address: http://IP.OF.YOUR.SERVER:81/, and the login informations are the same one as those received in the email.

## List of diagnostic tools:

- Hard Drives: to check the hard drives installed in the server and the SMART information
- Processors: to verify the CPU. With this test, it is possible that the result at the end of the test does not appear, or that the server freeze or reboot. It is a sign of an issue. Please contact your support in order to schedule an intervention to verify the cooling system and the CPU.
- Partitions State: To perform a verification of the drives
- Partitions File System: To perform a verification of the file system. Often, inconsistencies of the file system can be mistaken for a faulty hard drive. In those cases, the reinstallation of the server is often the best solution, particularly when files are located in the lost+found folder. Warning: Make sure that you have done your backups before doing a new installation of your server.
- Partitions Explore: Used to explore your files. It is not possible to edit them with this tool, but you make backup of them. Important: With this tool, you can read logs without necessary having to use SSH. Some file systems might not be compatible with this tool.
- Memory: To verify the RAM. Note that the memtest is using a lot of CPU as well. If this test make your server freeze or reboot, it is likely that the CPU has a cooling issue or is defective. If the RAM is faulty, it will be shown at the end of the test.


All hardware issues cannot be detected by the tools of this interface. If the tests does not show a problem with your server, but you think that there is actually an issue related to the hardware of your server, please contact the support. We will analyze your server and schedule an hardware check if needed.

## Warning:
It is possible that you encounter the following error at 64% completion of the memtest:
"your server hasn't reacted for a least 20 seconds. it is probably down you can try to refresh the pageif the server crashed while doing a cpu test. it is possible that the cpu is faulty."
You can click on "OK". The test is very long at 64% and the system may think it has crashed.


## 3. Rescue in SSH

## a. Connection
Please connect to your server in SSH in the same way as usual.
The only difference when connecting to your server is the password. Please use the root password that was send by email.

```
angie@amazone:~$ ssh root@213.186.xx.yy
The authenticity of host '213.186.xx.yy (213.186.xx.yy)' can't be established.
RSA key fingerprint is 02:11:f2:db:ad:42:86:de:f3:10:9a:fa:41:2d:09:77.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '213.186.xx.yy' (RSA) to the list of known hosts.
Password:
rescue:~#
```


You are now able to connect to your server, but your files are still not accessible. You need to mount them to your file system.

## b. Mounting partitions
Usually, /dev/xda1 is the root partition (/), and /dev/xda2 is /home. Replace x in xda1 and xda2 by the correct letter for your drive (s,h,...).

## Devices are of the following type:

- /dev/sd for SCSI, SATA, hardware RAID
- /dev/hd for IDE drives
- /dev/md for software RAID
- /dev/rd/c0d0p for Mylex RAID
- /dev/ad4s1 for FreeBSD systems


You could also use devfs nomenclature.
If you do not know what type of disks you have on your machine, nor what are their partition table, you can use the fdisk command. Here is an example of an output:


```
rescue:~# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```


You can see here that the server is equipped with 2 disk devices: /dev/hda and /dev/sda. There is 3 partitions on hda: hda1, hda2, hda3 and 1 partition on sda: sda1.

We can see that /dev/hda is shown with a star (*) which indicates that it is a bootable drive. The 2nd drive is an USB key (/dev/sda).
In the case of GPT partitions, use parted to be able to see the partitions of the drive.
To mount the root partition (/), simply execute the mount command followed by the partitions where it is located (/dev/hda1) and the place where you wish to mount it (/mnt).


```
rescue:~# mount /dev/hda1 /mnt/
```


Usually, the partition /home is on the partition /dev/hda2. To mount it, execute: "mount /dev/hda2 /mnt/home".

The /home partition is not necessarily located on /dev/hda2, it is possible that the data are located in /var (in the case of Plesk). To be sure of the configuration of your file system, you can execute the command: "cat /mnt/etc/fstab". This file contains the partitions of your server and where to mount it on the file system during the booting.

Example:


```
rescue:# cat /mnt/etc/fstab
/dev/hda1 / ext3 errors=remount-ro 0 1
/dev/hda2 /var ext3 defaults,usrquota,grpquota 1 2
/dev/hda3 swap swap defaults 0 0
/dev/devpts /dev/pts devpts gid=5,mode=620 0 0
/dev/shm /dev/shm tmpfs defaults 0 0
/dev/proc /proc proc defaults 0 0
/dev/sys /sys sysfs defaults 0 0
```


In this case, /dev/hda2 corresponds to /var, NOT /home. Therefore, mount it this way: "mount /dev/hda2 /mnt/var".
If your server is configure with software RAID, it is recommended to mount the /dev/md[x] partitions.

## c. Chroot
You can now edit the files of your server by browsing them at /mnt/var/[...] for example. Certains tasks necessitates to be root on the file system located on the drive which is not possible with the root account of the rescue mode.
For those operations, use the chroot command:


```
rescue:~# chroot /mnt/
rescue:/#
```


After the execution of the command, the prompt is placed in the / partition of the drive. When I execute commands, it will be as if I was using the hard drives of the server.


## 4. Exiting Rescue Mode
For the server to boot back on the disks, one will need to select the "Boot on the hard disk" Netboot option in the "Netboot" section of the Manager. Confirm this selection, and then either soft reboot (using a reboot command from the server itself) or hard reboot (using the "Reboot" option in the "Reboot" section of the Manager).

Here is an example of a soft reboot (from the server):


```
rescue:~# reboot
Broadcast message from root (pts/0) (Tue Apr 12 15:56:17 2005):
The system is going down for reboot NOW!
```




## 1. WinRescue Mode Activation
Log in to your Manager, head into the "Dedicated Servers" section, select the appropriate server, and in the left column, click on the "Netboot" section and choose the "WinRescue" mode (it can be made visible in "Advanced Settings".

Please note that following this choice, the server will not yet be rebooted into Rescue mode yet. You must reboot the server, either as a "soft" reboot (in the server itself) or "hard" reboot (by cutting off the power) through the Manager, in the "Reboot" section.

If at all possible, a "soft" reboot will be preferable (Start Menu + Reboot, ou via ssh:  "shutdown /r /t 0"), while hard reboot will a last resort (done through the "Reboot" section of your Manager).

## Warning:
The hardware reboot is recommended only in cases where you do not have any other access to your server. By performing an hardware reboot, there could be risks of losing data. The hard reboot is the equivalent of a electrical reset.
The server's administrator (as registered in our databases) will be sent an email containing the URL and password that will let you access your server in WinRescue.
In the case you received an email informing you that one of your server is in Rescue mode with the root password, this generally means that a fault has been detected on it, and that our technician at the datacenter had no other choice but to put your server in Rescue mode. This could be due to a software issue with the grub, or firewall.


## 2. Tools
Learn about the main tools available under WinPE

a. File Explorer

![](images/img_737.jpg){.thumbnail}
Freecommander is a multifonctional file manager, able to perform many kinds of actions upon your data.

Accessing the files on the connected storage devices.
File managing: copying/pasting, data compression and extraction, renaming, moving, etc. 

b. Password Manager

![](images/img_738.jpg){.thumbnail}
NTPWdit is an easy to use password manager.
It lets you reactivate, or change the password of an account.
This tool is very useful in the event of losing one's credentials, or for the reactivation of a security account.

c. FTP Client

![](images/img_739.jpg){.thumbnail}
FileZilla is an easy to use open source FTP client.
It supports SSH and SSL protocols, drag and drop and its interface is clear and intuitive.

It will let you transfer your data to an FTP server, such as the FTP backup supplied with most of the OVH server models.

d. Archive Manager

![](images/img_740.jpg){.thumbnail}
7-ZIP is an free and easy to use archiving tool.
It reads archives of the following formats:  ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR and Z.

You can also create your own archives of the following formats: z, XZ, BZIP2, GZIP, TAR, ZIP and WIM.

e. Emergency Antivirus

![](images/img_741.jpg){.thumbnail}
The Avast Virus Cleaner tool lets you make a quick scan of all your disks in case of infection.

f. Server Tools

![](images/img_743.jpg){.thumbnail}
ActivNIC lets you reactivate a deactivated network card on your server.

![](images/img_742.jpg){.thumbnail}
SRVFirewall is a script that will try to activate or deactivate the firewall on your server.

g. Microsoft System Tools

![](images/img_745.jpg){.thumbnail}
SysInternal Tools is a Microsoft software suite comprised of many tools for network maintenance, process management and much more.

![](images/img_744.jpg){.thumbnail}
Command line interface

h. Virtual Drive

![](images/img_746.jpg){.thumbnail}
Virtual Clone Drive will let you mount ISO, BIN, and CCD files in a virtual drive.

i. Internet Browser

![](images/img_747.jpg){.thumbnail}
Web Browser (Firefox)

j. Disk Utility Software

![](images/img_748.jpg){.thumbnail}
Testdisk is a powerful free data recovery software, created by Christophe Grenier.

It lets you recover and modify corrupted partitions, find lost partitions, repair a boot sector or even reconstruct a defective MBR.

![](images/img_749.jpg){.thumbnail}
Diskpart is a command line tool by Microsoft that lets you create, modify and manage the partitions of one or multiple disks.
Through it, it is possible to enlarge or shrink disk partition size, change the letter associated with a volume, to clean disks, etc.
It is also possible to configure software RAID between disks on a same server.

![](images/img_750.jpg){.thumbnail}
Bootsect is a tool directly from the Windows Recovery Console.
It will help you repair a defective boot sector on your system partition.


## 
This guide has explained how to boot your server in 3 different Rescue Mode types.

