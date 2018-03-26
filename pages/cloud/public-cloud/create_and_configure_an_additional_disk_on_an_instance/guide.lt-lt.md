---
title: Papildomo disko kūrimas ir konfigūravimas virtualioje mašinoje
excerpt: Papildomo disko kūrimas ir konfigūravimas virtualioje mašinoje
slug: papildomo_disko_kurimas_ir_konfiguravimas_virtualioje_masinoje
legacy_guide_number: g1863
---


## 
Jūs galite sukurti papildomus diskus savo Public Cloud virtualioms mašinoms.
Tai gali būti naudinga, jeigu:

- Norite padidinti savo saugyklos pajėgumus nekeisdami virtualios mašinos modelio.
- Norite užtikrinti aukštą pasiekiamumą ir našumą savo saugyklai.
- Reikia galimybės perkelti saugyklą ir kitoje virtualioje mašinoje talpinamus duomenis.


Šiame gide paaiškinama, kaip kuriamas ir konfigūruojamas papildomas diskas virtualioje mašinoje.


## Reikalavimai

- Virtuali mašina




## 

- Prisijunkite prie [OVH kliento valdymo sąsajos](https://www.ovh.com/manager/cloud/)
- Spauskite mygtuką „Pridėti“, po to „Pridėti diską“



![](images/img_2731.jpg){.thumbnail}
Šiame naujame meniu jūs galite:

- Pavadinti savo diską
- Pasirinkti disko tipą:

|Įprastas|garantuojama 200 IOPS|
|Aukšto naušumo|Iki 3000 IOPS|



- Pasirinkti disko talpą, nuo 10 GB;
- Pasirinkti duomenų centro regioną savo diskui;
- Patvirtinti disko kūrimą.


Jūsų diskui bus prieinamas naujas langas:

![](images/img_2732.jpg){.thumbnail}
Po to galėsite savo papildomą diską susieti su virtualia mašina:

- Nutempkite ir paleiskite diską virtualioje mašinoje;
- Spragtelėkite savo disko apačioje dešinėje esančią rodyklę ir pažymėkite „Priskirti serveriui“.


Po šių veiksmų atlikimo, žemiau virtualios mašinos matysite:

![](images/img_2733.jpg){.thumbnail}


## Linux virtualiai mašinai

- Diskų sąrašas

```
admin@serveur-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```



VDA atitinka jūsų virtualios mašinos diską, VDB bus su papildomu disku

- Skirsnio kūrimas

```
admin@serveur-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.
```



```
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-20971519, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-20971519, default 20971519):

Created a new partition 1 of type 'Linux' and of size 10 GiB.
```



```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```


- Skirsnio formatavimas

```
admin@serveur-1:~$ sudo mkfs.ext4 /dev/vdb1
mke2fs 1.42.12 (29-Aug-2014)
Creating filesystem with 2621184 4k blocks and 655360 inodes
Filesystem UUID: 781be788-c4be-462b-b946-88429a43c0cf
Superblock backups stored on blocks:
32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```


- Skirsnio pridėjimas

```
admin@serveur-1:~$ sudo mkdir /mnt/disk
admin@serveur-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```


- Pridėjimo tikrinimas

```
admin@serveur-1:~$ df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```



Norėdami pridėti nuolatinį diską, pakeiskite /etc/fstab failą:


- Sužinokite bloko ID

```
admin@serveur-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```


- Pridėkite savo diską /etc/fstab faile:

```
admin@serveur-1:~$ vim /etc/fstab

/etc/fstab: static file system information.

# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point> <type> <options> <dump> <pass>
UUID=51ba13e7-398b-45f3-b5f3-fdfbe556f62c / ext4 defaults 0 0
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```





## Windows virtualiai mašinai

- Prieiga prie disko valdymo įrankio



![](images/img_2736.jpg){.thumbnail}

- Disko formatavimas



![](images/img_2737.jpg){.thumbnail}
Dėmesio:
Jeigu matomas offline pranešimas (the disk is offline because of policy set by an administrator), jums reikės pakeisti disko ypatybes (atributus) dešiniuoju pelės mygtuku spaudžiant diską, pasirinkti „Online“, po to „Initialize“ arba naudojant Diskpart:


- Paleiskite Powershell ar komandinę eilutę.
- Patikrinkite taikomą strategiją:

```
PS C:\> diskpart
DISKPART> san

SAN Policy : Offline Shared
```


- Pakeiskite strategiją:

```
DISKPART> san policy=OnlineAll

DiskPart successfully changed the SAN policy for the current operating system.
```


- Strategijos taikymas papildomam diskui:

```
DISKPART> list disk

Disk ### Status Size Free Dyn Gpt
-------- ------------- ------- ------- --- ---
Disk 0 Online 200 GB 0 B
* Disk 1 Offline 10 GB 1024 KB
```



```
DISKPART> select disk 1

Disk 1 is now the selected disk.
```



```
DISKPART> attributes disk clear readonly

Disk attributes cleared successfully.
```



```
DISKPART> attributes disk

Current Read-only State : No
Read-only : No
Boot Disk : No
Pagefile Disk : No
Hibernation File Disk : No
Crashdump Disk : No
Clustered Disk : No
```



```
DISKPART> online disk

DiskPart successfully onlined the selected disk.
```


- Paruoškite diską naudojimui diskų valdiklyje ir pradėkite formatuoti diską.


Suformatavus diską, prieiga prie disko bus galima failų naršklėje.

![](images/img_2738.jpg){.thumbnail}


## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

