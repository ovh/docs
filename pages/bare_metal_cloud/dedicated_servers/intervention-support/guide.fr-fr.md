---
title: 'Finaliser une intervention de maintenance réalisée sur votre serveur dédié'
excerpt: "Découvrez quelles actions peuvent être à effectuer par vos soins sur votre serveur suite à une intervention de maintenance"
updated: 2024-01-15
---

## Objectif

Nos interventions de maintenance se limitent uniquement à l'aspect matériel de votre serveur. Suite à une intervention de maintenance, des actions de votre part peuvent s'avérer nécessaires sur la partie logicielle de votre serveur.

Cette documentation, basée sur de nombreux retours d'expériences et cas d'usages rencontrés par nos équipes, liste les actions à entreprendre en fonction de vos installations : systèmes d'exploitation, hyperviseur, etc...
Elle a pour objectif de vous accompagner et faire en sorte qu'il y ait le moins d'impact possible dans le cycle de vie de vos environnements.

## Prérequis

- Posséder un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/){.external}.

## En pratique

> [!primary]
>
> Découvrez comment repérer le nom de vos interfaces réseaux dans [cette sous-partie de ce guide](#network-interface).
> 

Poursuivez la lecture de ce guide en cliquant sur le lien correspondant à votre installation :

- Système d'exploitation
    - [Ubuntu](#ubuntu)
    - [CentOS/Alma Linux](#centos-almalinux)
    - [SmartOS](#smartos)
    - [FreeBSD](#freebsd)
    - [Gentoo](#gentoo)
- Virtualisation
    - [Proxmox](#proxmox)
    - [XenServer](#xenserver)
    - [ESXi](#esxi)
    - [Windows (hyper-V)](#windows)

> [!primary]
>
> Si vous rencontrez un problème de démarrage de votre système d'exploitation qui semble être lié à sa partition d'amorçage EFI, rendez-vous directement à cette [section](#partition-efi).
>

<a name="ubuntu"></a>

### Ubuntu 
Si vous rencontrez un souci de connectivité réseau (par exemple, pas de ping après le remplacement de la carte mère), effectuez les actions suivantes :

1\. Redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).<br>
2\. Montez la partition `/` :

```bash
root@rescue:~# mount /dev/my_system_disk /mnt
```
Si le fichier `70-persistent-net.rules` n'existe pas (référez-vous à la partie de ce guide sur [le nom de vos interfaces réseaux](#network-interface)), vérifiez, dans l'arborescence `/etc/systemd/network/`, les fichiers suivants :

- `50-default.network`
- `50-public-interface.link`

```bash
root@rescue:~# cat /mnt/etc/systemd/network/50-default.network
# This file sets the IP configuration of the primary (public) network device.
# You can also see this as "OSI Layer 3" config.
# It was created by the OVH installer, please be careful with modifications.
# Documentation: man systemd.network or https://www.freedesktop.org/software/systemd/man/systemd.network.html
 
[Match]
MACAddress=xx:xx:xx:xx:xx:xx
 
[Network]
Description=network interface on public network, with default route
DHCP=no
Address=1.2.3.4/24
Gateway=1.2.3.254
IPv6AcceptRA=no
NTP=ntp.ovh.net
DNS=127.0.0.1
DNS=213.186.33.99
DNS=2001:41d0:3:163::1
Gateway=2001:41d0:0203:4bff:ff:ff:ff:ff
 
[Address]
Address=2001:41d0:0203:1234::/64
 
[Route]
Destination=2001:41d0:0203:4bff:ff:ff:ff:ff
Scope=link
root@rescue:~#
root@rescue:~# cat /mnt/etc/systemd/network/50-public-interface.link
# This file configures the relation between network device and device name.
# You can also see this as "OSI Layer 2" config.
# It was created by the OVH installer, please be careful with modifications.
# Documentation: man systemd.link or https://www.freedesktop.org/software/systemd/man/systemd.link.html
 
[Match]
MACAddress=xx:xx:xx:xx:xx:xx
 
[Link]
Description=network interface on public network, with default route
MACAddressPolicy=persistent
NamePolicy=kernel database onboard slot path mac
#Name=eth2    # name under which this interface is known under OVH rescue system
#Name=eno3    # name under which this interface is probably known by systemd
root@rescue:~#
```

3\. Sauvegardez les fichiers et éditez-les afin de renseigner la nouvelle valeur de votre adresse MAC :

```bash
root@rescue:~# cp /mnt/etc/systemd/network/50-default.network /mnt/etc/systemd/network/50-default.network.link.bak-`date +%s`
root@rescue:~# cp /mnt/etc/systemd/network/50-public-interface.link /mnt/etc/systemd/network/50-public-interface.link.bak-`date +%s`
root@rescue:~# nano /mnt/etc/systemd/network/50-default.network
root@rescue:~# cat /mnt/etc/systemd/network/50-default.network | grep MACAddress
MACAddress=xx:xx:xx:xx:xx:xx
root@rescue:~#
root@rescue:~# nano /mnt/etc/systemd/network/50-public-interface.link
root@rescue:~#
root@rescue:~# cat /mnt/etc/systemd/network/50-public-interface.link | grep MACAddress
MACAddress=xx:xx:xx:xx:xx:xx
root@rescue:~#
```

4\. N'oubliez pas de démonter la partition `/` avant de redémarrer le serveur.

#### Cas particuliers

Dans certain cas, il est nécessaire de propager la nouvelle adresse MAC dans les fichiers suivants :

- `/mnt/etc/netplan/01-netcfg.yaml`
- `/mnt/etc/netplan/50-cloud-init.yaml`
- `/mnt/etc/systemd/network/10-eno1.link`
- `/mnt/etc/systemd/network/10-eno1.network`

<a name="centos-almalinux"></a>

### CentOS/Alma Linux

Si vous rencontrez un souci de connectivité réseau (par exemple, pas de ping après le remplacement de la carte mère), effectuez les actions suivantes : 

1\. Redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).<br>
2\. Montez la partition `/` :

```bash
root@rescue:~# mount /dev/my_system_disk /mnt
```

3\. Vérifiez le fichier de configuration `/mnt/etc/sysconfig/network-scripts/ifcfg-eth0`.
4\. Sauvegardez les fichiers et éditez-les afin de corriger l'adresse MAC :

```bash
root@rescue:~# cp /mnt/etc/sysconfig/network-scripts/ifcfg-eth0 /mnt/etc/sysconfig/network-scripts/ifcfg-eth0.`date +%s`
```

5\. Renseignez la nouvelle adresse MAC à la ligne `HWADDR=xx.xx.xx.xx.xx.xx`.
6\. N'oubliez pas de démonter la partition `/` avant de redémarrer le serveur.

<a name="smartos"></a>

### SmartOS

Si vous rencontrez un souci de connectivité réseau (par exemple, pas de ping après le remplacement de la carte mère), effectuez les actions suivantes :

1\. Redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).<br>

```bash 
modprobe zfs
root@rescue:~# zpool import -f zones (zpool import to list the pools)
root@rescue:~# zfs set mountpoint=/mnt zones/usbkey
root@rescue:~# zfs mount zones/usbkey
root@rescue:~# cp /mnt/config{,.bak-$(date +"%Y-%m-%d-%H_%M")}
```

2\. Renseignez la nouvelle adresse MAC à la ligne `admin_nic` :

```bash
root@rescue:~#  vim /mnt/config
```

3\. N'oubliez pas de démonter les partitions avant de redémarrer le serveur en mode `netboot` :

```bash
root@rescue:~# zfs umount -a
root@rescue:~# zfs set mountpoint="/usbkey" zones/usbkey 
```

<a name="freebsd"></a>

### FreeBSD

Si vous rencontrez un souci de connectivité réseau (par exemple, pas de ping après le remplacement de la carte mère), effectuez les actions suivantes :

1\. Redémarrez le serveur en mode rescue-bsd.<br>
2\. Exécutez la commande `ifconfig` depuis l'invite du rescue-bsd.

De cette manière, vous pouvez repérer l'appellation de votre interface réseau :

```bash
root@rescue-bsd:~ # ifconfig
igb0: flags=8843<UP,BROADCAST,RUNNING,SIMPLEX,MULTICAST> metric 0 mtu 1500
options=403bb<RXCSUM,TXCSUM,VLAN_MTU,VLAN_HWTAGGING,JUMBO_MTU,VLAN_HWCSUM,TSO4,TSO6,VLAN_HWTSO>
ether xx:xx:xx:xx:xx:xx
```

3\. Exécutez la commande `gpart show`, vous pouvez repérer et associer les partitions/noms :

```bash
root@rescue-bsd:~ # gpart show
=> 63 3907029105 ada0 MBR (1.8T)
 63 3907029105 1 freebsd [active] (1.8T)
 
=> 0 3907029105 ada0s1 BSD (1.8T)
 0 40960000 1 freebsd-ufs (20G)
 40960000 3865020416 2 freebsd-ufs (1.8T)
 3905980416 1048689 4 freebsd-swap (512M)
 
=> 63 3907029105 diskid/DISK-PN1134P6K14W5W MBR (1.8T)
 63 3907029105 1 freebsd [active] (1.8T)
 
=> 0 3907029105 diskid/DISK-PN1134P6K14W5Ws1 BSD (1.8T)
 0 40960000 1 freebsd-ufs (20G)
 40960000 3865020416 2 freebsd-ufs (1.8T)
 3905980416 1048689 4 freebsd-swap (512M)
```

4\. Montez la partition qui vous intéresse, vous pourrez ainsi modifier l'interface via le fichier `/etc/rc.conf` :

```bash
root@rescue-bsd:~ # zpool import
   pool: zroot
     id: 16525429322000118320
  state: ONLINE
 status: The pool was last accessed by another system.
 action: The pool can be imported using its name or numeric identifier and
    the '-f' flag.
   see: http://illumos.org/msg/ZFS-8000-EY
 config:
 
    zroot       ONLINE
      ada0p4    ONLINE
root@rescue-bsd:~ #
root@rescue-bsd:~ #
root@rescue-bsd:~ # zpool import -f zroot
cannot mount '/home': failed to create mountpoint
cannot mount '/zroot': failed to create mountpoint
root@rescue-bsd:~ #
 
root@rescue-bsd:~ # zfs list -t all
NAME                 USED  AVAIL  REFER  MOUNTPOINT
zroot               1.01G   673G    88K  /zroot
zroot/ROOT          1.00G   673G    88K  none
zroot/ROOT/default  1.00G  18.5G  1.00G  /
zroot/home            88K   673G    88K  /home
root@rescue-bsd:~ # mkdir /tmp/rootClient
root@rescue-bsd:~ # zfs set mountpoint=/tmp/roo
mountpoint=/tmp/ not found
 
root@rescue-bsd:~ # zfs set mountpoint=/tmp/rootClient zroot/ROOT/default
root@rescue-bsd:~ # zfs list -t all
NAME                 USED  AVAIL  REFER  MOUNTPOINT
zroot               1.01G   673G    88K  /zroot
zroot/ROOT          1.00G   673G    88K  none
zroot/ROOT/default  1.00G  18.5G  1.00G  /tmp/rootClient
zroot/home            88K   673G    88K  /home
root@rescue-bsd:~ #
 
root@rescue-bsd:~ # zfs mount zroot/ROOT/default
root@rescue-bsd:~ # ls /tmp/rootClient/
.cshrc          .rnd            bin             boot.config     entropy         home            libexec         mnt             opt             rescue          sbin            tmp             var
.profile        COPYRIGHT       boot            dev             etc             lib             media           net             proc            root            sys             usr             zroot
root@rescue-bsd:~ #
```

5\. Sauvegardez les fichiers et éditez-les afin de corriger l'adresse MAC.

Dans le cas présenté, nous devons modifier les 3 instances de `em0` par `ibg0` à partir du fichier de configuration associé :

```bash
root@rescue-bsd:~ # mount /dev/ada0s1 /mnt/
root@rescue-bsd:~ #
root@rescue-bsd:~ # cat /mnt/etc/rc.conf
sshd_enable="YES"
# Set dumpdev to "AUTO" to enable crash dumps, "NO" to disable
dumpdev="AUTO"
local_unbound_enable=yes
ifconfig_em0="inet xx.xxx.xxx.xxx netmask 255.255.255.0 broadcast xx.xxx.xxx.255"
defaultrouter="xx.xxx.xxx.254"
  
# IPv6 configuration
ipv6_enable="YES"
ipv6_network_interfaces="em0"
ifconfig_em0_ipv6="inet6 2001:xxxx:xxxx:xxx::1 prefixlen 128 accept_rtadv no_radr"
ipv6_static_routes="ovhgw"
ipv6_route_ovhgw="2001:41d0:0001:c1ff:ff:ff:ff:ff -prefixlen 128 -interface em0"
ipv6_defaultrouter="2001:41d0:0001:c1ff:ff:ff:ff:ff"
mysql_enable="YES"
root@rescue-bsd:~ #
root@rescue-bsd:~ # cp /mnt/etc/rc.conf /mnt/etc/rc.conf.`date +%s`
root@rescue-bsd:~ #
root@rescue-bsd:~ # vim /mnt/etc/rc.conf
root@rescue-bsd:~ #
root@rescue-bsd:~ # cat /mnt/etc/rc.conf
sshd_enable="YES"
# Set dumpdev to "AUTO" to enable crash dumps, "NO" to disable
dumpdev="AUTO"
local_unbound_enable=yes
ifconfig_ibg0="inet xx.xxx.xxx.xxx netmask 255.255.255.0 broadcast xx.xxx.xxx.255"
defaultrouter="xx.xxx.xxx.254"
  
# IPv6 configuration
ipv6_enable="YES"
ipv6_network_interfaces="em0"
ifconfig_ibg0_ipv6="inet6 2001:xxxx:xxxx:xxxx::1 prefixlen 128 accept_rtadv no_radr"
ipv6_static_routes="ovhgw"
ipv6_route_ovhgw="2001:41d0:0001:c1ff:ff:ff:ff:ff -prefixlen 128 -interface ibg0"
ipv6_defaultrouter="2001:41d0:0001:c1ff:ff:ff:ff:ff"
mysql_enable="YES"
root@rescue-bsd:~ #
```

6\. Démontez les partitions ZFS :

```bash
root@rescue-bsd:~ # zfs unmount /tmp/rootClient/
root@rescue-bsd:~ # zfs get mountpoint zroot/ROOT/default
NAME                PROPERTY    VALUE            SOURCE
zroot/ROOT/default  mountpoint  /tmp/rootClient  local
root@rescue-bsd:~ # zfs setuntpoint zroot/ROOT/default
root@rescue-bsd:~ # zfs set mountpoint=/ zroot/ROOT/default
root@rescue-bsd:~ # zfs get mountpoint zroot/ROOT/default
NAME                PROPERTY    VALUE       SOURCE
zroot/ROOT/default  mountpoint  /           local
root@rescue-bsd:~ # zfs list -t all
NAME                 USED  AVAIL  REFER  MOUNTPOINT
zroot               1.01G   673G    88K  /zroot
zroot/ROOT          1.00G   673G    88K  none
zroot/ROOT/default  1.00G  18.5G  1.00G  /
zroot/home            88K   673G    88K  /home
root@rescue-bsd:~ # zpool export zroot
root@rescue-bsd:~ # zfs list -t all
no datasets available
root@rescue-bsd:~ #
```

<a name="gentoo"></a>

### Gentoo

Suite au remplacement de la carte mère, il est impossible de modifier les nouvelles adresses MAC à travers l'OS via le mode rescue.

1\. Redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) et repérez la partition `/` :

```bash
root@rescue:~# blkid
/dev/sda1: UUID="15D6-5706" TYPE="vfat" PARTLABEL="grub" PARTUUID="bf514348-6259-41a4-a73f-ba0c38d45de5"
/dev/sda2: UUID="15D6-8A6F" TYPE="vfat" PARTLABEL="boot" PARTUUID="7c0cbc80-c09a-4226-b7f2-91689a04250c"
/dev/sda3: UUID="Q1r3UN-wfmY-QSPI-jIvA-9ybX-IWwk-YNNnUg" TYPE="LVM2_member" PARTLABEL="lvm" PARTUUID="79581bf9-3eb3-4947-9c51-856fb5d72ffa"
/dev/mapper/vg0-swap: UUID="337409d9-cdc5-4db8-a957-336631d3e7cb" TYPE="swap"
/dev/mapper/vg0-root: UUID="2b672f12-77be-40c2-a099-487565ffa933" TYPE="xfs"
root@rescue:~#
```

Dans notre exemple, le système utilise _LVM_ :

```bash
root@rescue:~# lvdisplay
  --- Logical volume ---
  LV Path                /dev/vg0/swap
  LV Name                swap
  VG Name                vg0
  LV UUID                X9ttby-08vi-iJVW-aJGP-qnep-PDI9-ohJF6J
  LV Write Access        read/write
  LV Creation host, time rescue.ovh.net, 2019-06-03 16:21:38 -0400
  LV Status              available
  # open                 0
  LV Size                128.00 GiB
  Current LE             32768
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           252:0
 
  --- Logical volume ---
  LV Path                /dev/vg0/root
  LV Name                root
  VG Name                vg0
  LV UUID                822GLw-DELk-Q1ze-3NJD-1B3W-LT9H-CG8RTO
  LV Write Access        read/write
  LV Creation host, time rescue.ovh.net, 2019-06-03 16:21:44 -0400
  LV Status              available
  # open                 0
  LV Size                17.34 TiB
  Current LE             4545078
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           252:1
```

2\. Montez la partition `/` identifiée :

```bash
root@rescue:~# mount /dev/vg0/root /mnt
root@rescue:~# ls /mnt
backups  bin  boot  dev  etc  home  images  images-ear  images-ueba  lib  lib32
        media  mnt  opt  overlayimages  proc  root  run  sbin  srv  sys  tmp  uploads  usr  var
```

Sous Gentoo, les adresses MAC sont présentes dans les 4 fichiers suivants :

```bash
root@rescue:~# cat /mnt/etc/systemd/network/
10-external.link   11-internal.link   50-static.network  51-vrack.network
root@rescue:~#
```

3\. Sauvegardez les fichiers avant de les modifier :

```bash
root@rescue:~# cp /mnt/etc/systemd/network/50-static.network /mnt/etc/systemd/network/50-static.network.`date +%s`
root@rescue:~# cp /mnt/etc/systemd/network/51-vrack.network /mnt/etc/systemd/network/51-vrack.network.`date +%s`
root@rescue:~# cp /mnt/etc/systemd/network/10-external.link /mnt/etc/systemd/network/10-external.link.`date +%s`
root@rescue:~# cp /mnt/etc/systemd/network/11-internal.link /mnt/etc/systemd/network/11-internal.link.`date +%s`
```

4\. Mettez à jour les fichiers avec les nouvelles adresses MAC :

```bash
root@rescue:~# nano /mnt/etc/systemd/network/50-static.network
root@rescue:~# nano /mnt/etc/systemd/network/51-vrack.network
root@rescue:~# nano /mnt/etc/systemd/network/10-external.link
root@rescue:~# nano /mnt/etc/systemd/network/11-internal.lin
```

5\. Démontez les partitions, puis faites un *reboot* :

```bash
root@rescue:~# umount /mnt
root@rescue:~# reboot
```

#### Cas particuliers

Pour certaines versions, seul le fichier ` /mnt/etc/udev/rules.d/10-f2c-network.rules` est à modifier :

```bash
root@rescue:~# cat /mnt/etc/gentoo-release
Gentoo Base System release 2.2
root@rescue:~#
root@rescue:~# ls /mnt/etc/udev/rules.d/
10-f2c-network.rules
root@rescue:~#
root@rescue:~# cat /mnt/etc/udev/rules.d/10-f2c-network.rules
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="xx:xx:xx:xx:xx:xx", ATTR{type}=="1", KERNEL=="*", NAME="netpublic0"
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="xx:xx:xx:xx:xx:xx", ATTR{type}=="1", KERNEL=="*", NAME="netprivate0"
root@rescue:~#
```

<a name="proxmox"></a>

### Proxmox

Si vous rencontrez un souci de connectivité réseau (par exemple, pas de ping après le remplacement de la carte mère), cela peut être lié à une erreur lors du démarrage du système, erreur causée par l'ancienne valeur d'adresse MAC toujours présente :

![proxmox](images/proxmox_edited.jpg){.thumbnail}

Effectuez les actions suivantes :

1\. Redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

```bash
root@rescue:~# cat /mnt/etc/network/interfaces
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).
 
# The loopback network interface
auto lo
iface lo inet loopback
 
iface enp3s0f0 inet manual
 
auto vmbr0
iface vmbr0 inet dhcp
  bridge-ports enp3s0f0
  bridge-stp off
  bridge-fd 0
 
auto vmbr1
iface vmbr1 inet static
  address  192.168.22.254
  netmask  255.255.255.0
  bridge_ports none
  bridge_stp off
  bridge_fd 0
  post-up echo 1 > /proc/sys/net/ipv4/ip_forward
root@rescue:~#
root@rescue:~# cat /mnt/var/log/messages | grep renamed
Aug  8 14:27:20 s22 kernel: [    1.527563] igb 0000:04:00.0 eno1: renamed from eth0
Aug  8 14:27:20 s22 kernel: [    1.550622] igb 0000:04:00.1 eno2: renamed from eth1
Aug  8 14:27:34 s22 kernel: [   88.148303] eth0: renamed from vethGRELEP
Aug  8 14:27:36 s22 kernel: [   90.444727] eth0: renamed from vethVMV0MH
Aug  8 14:27:40 s22 kernel: [   94.116739] eth0: renamed from vethQWYCXT
Aug  8 14:27:43 s22 kernel: [   97.469199] eth0: renamed from vethAIWWWX
Aug  8 14:27:48 s22 kernel: [  102.101324] eth0: renamed from vethB2DGCS
Aug  8 14:27:48 s22 kernel: [  102.139437] eth1: renamed from vethRSNNKL
root@rescue:~#
```

2\. Créez à nouveau le fichier `70-persistent-net.rules` et ajoutez :  

- Le nom de l'interface réseau trouvé dans le fichier `/mnt/etc/network/interfaces`.
- La nouvelle adresse MAC (visible dans l'onglet `Interfaces réseau`{.action} de l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou dans le retour de la commande `ip link`).

```bash
root@rescue:~# cat /mnt/etc/udev/rules.d/70-persistent-net.rules
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="xx:xx:xx:xx:xx:xx", NAME="enp3s0f0"
root@rescue:~#
```

<a name="xenserver"></a>

### XenServer

Si vous rencontrez un souci de connectivité réseau (par exemple, pas de ping après le remplacement de la carte mère), l'adresse MAC est configurée en statique et doit être réinitialisée.

Effectuez les actions suivantes :

1\. Redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) et utilisez la commande `chroot` :

```bash
root@rescue:~# mount /dev/sda1 /mnt
root@rescue:~# mount -t proc /proc/ /mnt/proc/
root@rescue:~# mount -o bind /sys/ /mnt/sys/
root@rescue:~# mount -o bind /dev/ /mnt/dev/
root@rescue:~# mount -o bind /dev/pts/ /mnt/dev/pts/
root@rescue:~# chroot /mnt
```

2\. Changez la configuration en place pour qu'elle corresponde aux nouveaux paramètres :

```bash
[root@rescue /]# xe-reset-networking --device=eth0 --mode=static --ip=xx.xx.xx.xx --netmask=255.255.255.0 --gateway=xx.xx.xx.xxx
```

3\. Il vous sera demandé de répondre à la question par « yes », appuyez ensuite sur « Enter » :

```bash
----------------------------------------------------------------------
!! WARNING !!
  
This command will reboot the host and reset its network configuration.
Any running VMs will be forcefully shutdown.
  
Before completing this command:
- Where possible, cleanly shutdown all VMs running on this host.
- Disable HA if this host is part of a resource pool with HA enabled.
----------------------------------------------------------------------
  
Your network will be re-configured as follows:
  
Management interface:   eth0
IP configuration mode:  static
IP address:             xx.xx.xx.xx
Netmask:                255.255.255.0
Gateway:                xx.xx.xx.xx
Pool master's address:  xx.xx.xx.xx
  
If you want to change any of the above settings, type 'no' and re-run
the command with appropriate arguments (use --help for a list of options).
  
Type 'yes' to continue.
Type 'no' to cancel.
yes
Stopping xapi...
Reconfiguring eth0...
Updating inventory file...
Running in chroot, ignoring request.
```

4\. Tapez « exit » pour sortir du mode `chroot` puis démontez toutes les partitions :

```bash
root@rescue:~# umount /mnt/sys
root@rescue:~# umount /mnt/proc
root@rescue:~# umount /mnt/dev/pts
root@rescue:~# umount /mnt/dev
root@rescue:~# umount /mnt
```

#### Cas particuliers

Il est nécessaire de vérifier et d'adapter les fichiers suivants :  

- `/mnt/etc/sysconfig/network-scripts/interface-rename-data/static-rules.conf`  
- `/mnt/etc/sysconfig/network-scripts/interface-rename-data/dynamic-rules.json`

<a name="esxi"></a>

### ESXi

Suite au remplacement de la carte mère, il est impossible de modifier les nouvelles adresses MAC à travers le fichier `esxi.conf` via les outils intégrés au mode rescue.
Il sera donc nécessaire d'intervenir manuellement.

#### Version 7.0 ou supérieure

La procédure décrite ci-dessous ne concerne que les **versions 7.0 ou supérieures**. A partir de cette version, le fichier state.tgz est crypté.
Il vous faudra réaliser une réinitialisation du réseau depuis le menu Direct Console via votre KVM ou IPMI.

Référez-vous à la capture d'écran ci-dessous :

![reset_network](images/restore.png){.thumbnail}

#### Version 6.7 ou inférieure

La procédure décrite ci-dessous ne concerne que les **versions 6.7 ou inférieures**.

1\. Redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) afin de monter la partition `/` :

```bash
root@rescue:~# mount /dev/sdaX /mnt/
```

2\. Sauvegardez le fichier `state.tgz`

```bash
root@rescue:~# ls /mnt/state.tgz
root@rescue:~# cp /mnt/state.tgz /mnt/state.tgz.`date +%s`
```

3\. Créez un environnement de travail :

```bash
root@rescue:~# mkdir /home/ovh/esxi
root@rescue:~# WORKINGDIR=/home/ovh/esxi
root@rescue:~# cd $WORKINGDIR
```

4\. Effectuez une extraction du contenu de `state.tgz` vers `$WORKINGDIR`, pour ensuite extraire le contenu de `local.tgz`.<br>
5\. Editez le fichier `esx.conf` obtenu :

```bash
root@rescue:/home/ovh/esxi# tar xf /mnt/state.tgz -C $WORKINGDIR
root@rescue:/home/ovh/esxi# tar xf /home/ovh/esxi/local.tgz -C $WORKINGDIR
root@rescue:/home/ovh/esxi# vim etc/vmware/esx.conf
```
6\. Repérez et modifiez l'addresse MAC pour `vmkernelnic` :

```bash
/net/vmkernelnic/child[0000]/mac = "XX:XX:XX:XX:XX:XX"
```

7\. Identifez sur quelle interface l'adresse IP principale est utilisée :

```bash
/net/vswitch/child[0000]/uplinks/child[0000]/pnic = "vmnicX"
```

8\. Mettez à jour l'adresse MAC de l'interface principale :

> [!warning]
> Ne modifiez pas l'adresse MAC virtuelle.
>

```bash
/net/pnic/child[0001]/mac = "XX:XX:XX:XX:XX:XX"         <== Primary Interface Mac address
/net/pnic/child[0001]/virtualMac = "00:50:56:XX:XX:XX"  <== Virtual Mac
/net/pnic/child[0001]/name = "vmnic1"
```

> [!warning]
> S'il y a une interface vRack, n'oubliez pas de modifier également son adresse MAC.
>

9\. Effectuez une sauvegarde puis démontez la partition `/` :

```bash
root@rescue:/home/ovh/esxi# tar -czf $WORKINGDIR/local.tgz etc/
root@rescue:/home/ovh/esxi# tar -czf /mnt/state.tgz local.tgz
root@rescue:/home/ovh/esxi# umount /mnt
```

#### Cas particuliers

Vérifiez l'ordre des déclarations de vos vmnicX. Voici un exemple fonctionnel :

```bash
root@rescue:/home/ovh/esxi# cat etc/vmware/esx.conf | grep "/vmkdevmgr/pci"
/vmkdevmgr/pci/m00008901/alias = "vmhba0"
/vmkdevmgr/pci/m00008501/alias = "vmnic0"
/vmkdevmgr/pci/m00008502/alias = "vmnic1"
```

<a name="windows"></a>

### Windows (Hyper-V)

Suite au remplacement de la carte mère, le serveur ne peut pas être joignable tant que vous n'avez pas manuellement modifié les adresses MAC à travers le **Gestionnaire de périphériques**.

Il existe 2 méthodes :

#### Via IPMI/KVM

1\. Connectez-vous en tant qu'administrateur à partir de l'interface [IPMI/KVM](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).<br>
2\. Ouvrez l’utilitaire `Exécuter`{.action} (touche de logo Windows + `R`{.action}) puis, à travers l'invite `run`, exécutez la commande `devmgmt.msc` :

![win_device_manager](images/win_device_manager_edited.png){.thumbnail}

3\. Ouvrez `Network adapters`{.action} et sélectionnez l'adaptateur correspondant à `eth0`.<br>
4\. Faites un clic-droit sur `Properties`{.action} > `Advanced`{.action}.<br>
5\. Repérez `Locally Administered Address`.<br>
6\. Renseignez la nouvelle valeur de l'adresse MAC (chiffres uniquement, sans espaces).

![win_advanced](images/win_advanced_edited.png){.thumbnail}

#### Via WinPE

1\. Redémarrez le serveur en mode `WinPE`.<br>
2\. Lancez la commande `regedit` via l'invite de commande `run`.<br>
3\. Chargez la base de registre locale à travers celle disponible dans `WinPE` puis cliquez sur `HKEY_LOCAL_MACHINE`{.action} :

![win_regedit_1](images/win_regedit_1_edited.png){.thumbnail}

4\. Cliquez ensuite sur `Load Hive...`{.action}.

![win_regedit_2](images/win_regedit_2_edited.png){.thumbnail}

> [!primary]
>
> Par défaut, vous serez dans l'arborescence du WinPE.
> N'oubliez pas de naviguer sur le lecteur `C:\`.
>

5\. Repérez le registre `SYSTEM`.

![win_load](images/win_load_edited.png){.thumbnail}

6\. Il vous sera demandé d'entrer un nom. Vous pouvez, par exemple, choisir `OVH_TEST`.

7\. Repérez la valeur du registre suivant :

```bash
"HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Class\{4D36E972-E325-11CE-BFC1-08002BE10318}"
```

> [!warning]
> Tant que nous sommes sous WinPE, la valeur `CurrentControlSet` devrait être égale à `CurrentSet001`
>

Vous devriez voir plusieurs sous-clés nommées comme ceci : 0000, 0001, etc...

8\. Cliquez sur chaque sous-clé pour vérifier la valeur `DriverDesc` qui doit correspondre à votre interface réseau.
Vous pouvez vérifier le nom de votre interface à partir d'un terminal via la commande suivante :

```bash
ipconfig /all
```

9\. Regardez dans les entrées de registre `NetworkAddress` sur le panneau de droite et modifiez la valeur par celle de votre nouvelle adresse MAC. Si cette entrée n'existe pas, faites un clic-droit dans une zone vide pour créer une valeur de type `String` avec le nom `NetworkAddress`.

![win_regedit_3](images/win_regedit_3_edited.png){.thumbnail}

10\. Il sera nécessaire de décharger le registre pour appliquer les changements récents. Cliquez sur OVH_TEST (créé précédemment) puis cliquez sur `File`{.action} (en haut à gauche) et selectionnez `Unload hive...`{.action}.

<a name="network-interface"></a>

### Repérer le nom de vos interfaces réseau

Suite au remplacement de la carte-mère, le serveur ne peut pas être joignable car le contrôleur des interfaces réseau a été renommé par le système d'exploitation.

1\. Redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode), montez la partition `/` et utilisez ensuite la commande `chroot` :

```bash
root@rescue:~# mount /dev/my_disk /mnt
root@rescue:~# for i in /dev /dev/pts /proc /sys; do mount -B $i /mnt$i; done
root@rescue:~# chroot /mnt
```

2\. Vérifiez si les interfaces ont été modifiées. Regardez dans les logs `var/log/messages` ou `var/log/kern.log` si l'interface a été renommée :

```bash
Oct  9 22:25:49 node1 kernel: [    5.479916] ixgbe 0000:03:00.1 eno4: renamed from eth1
Oct  9 22:25:49 node1 kernel: [    5.504285] ixgbe 0000:03:00.0 eno3: renamed from eth0
```

3\. Vérifiez votre fichier de configuration `/mnt/etc/udev/rules.d/70-persistent.-net.rules` et remplacez les nouvelles valeurs (adresses MAC) si nécessaire :

```bash
root@rescue:~# cat /mnt/etc/udev/rules.d/70-persistent-net.rules
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="xx:xx:xx:xx:xx:xx", ATTR{dev_id}=="0x0", ATTR{type}=="1", KERNEL=="eth*", NAME="public"
SUBSYSTEM=="net", ACTION=="add", DRIVERS=="?*", ATTR{address}=="xx:xx:xx:xx:xx:xx", ATTR{dev_id}=="0x0", ATTR{type}=="1", KERNEL=="eth*", NAME="private"
```

4\. Allez dans le repertoire `/boot/grub/` et créez une sauvegarde du fichier `grub.cfg`.
5\. Editez le fichier `/etc/default/grub` et modifiez la ligne commençant par `GRUB_CMDLINE_LINUX` pour obtenir ceci :

```bash
GRUB_CMDLINE_LINUX="net.ifnames=0 biosdevname=0"
```

6\. Exécutez la commande :

```bash
root@rescue:~# grub-mkconfig -o /boot/grub/grub.cfg
```

7\. Sortez de l'environnement `chroot` en utilisant la commande `exit` et démontez toutes les partitions :

```bash
root@rescue:~# umount /mnt/sys
root@rescue:~# umount /mnt/proc
root@rescue:~# umount /mnt/dev/pts
root@rescue:~# umount /mnt/dev
root@rescue:~# umount /mnt
```

<a name="partition-efi"></a>

### Problèmes liés à votre partition EFI

Les étapes suivantes sont indiquées si vous rencontrez un souci de démarrage (boot) lié aux partitions présentes sur vos disques.<br>
Il existe 2 méthodes, via le mode rescue ou via le BIOS

#### Via le mode rescue

- Cas d'usage : le système installé (ici Proxmox) n'est plus bootable après le remplacement du disque (aucune entrée EFI n'est visible à travers le BIOS).

1\. Redémarrez le serveur en [mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).<br>
2\. Repérez le disque possédant la partition EFI d'origine :

```bash
Disk /dev/nvme1n1: 894.3 GiB, 960197124096 bytes, 1875385008 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/nvme0n1: 894.3 GiB, 960197124096 bytes, 1875385008 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: A28EAF07-248B-4CEB-86D4-92F75A36F1B0

Device              Start        End    Sectors   Size Type
/dev/nvme0n1p1         34    1048609    1048576   512M EFI System
/dev/nvme0n1p2    1050624 1875368589 1874317966 893.8G Solaris /usr & Apple ZFS
/dev/nvme0n1p9 1875368590 1875384974      16385     8M Solaris reserved 1
```

3\. Montez la partition concernée.

```bash
root@rescue:~# ls /mnt/EFI/proxmox/grubx64.efi
/mnt/EFI/proxmox/grubx64.efi
root@rescue:~#
root@rescue:~# umount /mnt
```

4\. Utilisez la commande suivante pour rendre cette partition de nouveau fonctionnelle :

```bash
root@rescue:~# efibootmgr -v --create --disk /dev/nvme0n1 --part 1 --label "proxmox2" --loader '\EFI\proxmox\grubx64.efi'
BootCurrent: 0005
Timeout: 1 seconds
BootOrder: 0000,0005,0007,0006,0008,0001
Boot0001* proxmox    Vendor(99e275e7-75a0-4b37-a2e6-c5385e6c00cb,)
Boot0005* UEFI: PXE IP4 P0 Intel(R) Ethernet Controller X550    ACPI(a0341d0,0)PCI(1b,4)PCI(0,0)MAC(MAC(d05099d5e395,1)..BO
Boot0006  UEFI: PXE IP4 P1 Intel(R) Ethernet Controller X550    ACPI(a0341d0,0)PCI(1b,4)PCI(0,1)MAC(MAC(d05099d5e394,1)..BO
Boot0007  UEFI: Built-in EFI Shell    Vendor(5023b95c-db26-429b-a648-bd47664c8012,)..BO
Boot0008* UEFI: PXE IP4 P0 American Megatrends Inc.    ACPI(a0341d0,0)PCI(14,0)USB(7,0)USB(2,1)MAC(MAC(2ab925859a66,0)..BO
Boot0000* proxmox2    HD(1,22,100000,0df658ff-5461-470a-9d92-5d95208d5c0f)File(\EFI\proxmox\grubx64.efi)
```

#### Via le BIOS

- Cas d'usage : le système installé (ici CentOS 6) n'est plus bootable après le remplacement du disque (aucune entrée EFI n'est visible à travers le BIOS).

1\. Rédemarrez le serveur afin d'entrer dans le menu BIOS.

La *1ère séquence* consiste à régénérer les fichiers nécessaires afin de rendre votre partition de nouveau opérationelle :

- Rendez-vous dans le menu `boot` de votre BIOS :
    - Choisissez `Add New Boot Option`{.action}.
    - Choisissez le chemin de votre partition `Path for boot option`{.action} et sélectionnez le système de fichier qui contient votre partition de démarrage.
    - Sélectionnez le fichier `EFI\centos6\bootx64.efi` puis choisissez `Create`{.action}.

L'image ci-dessous est un résumé des actions citées plus haut :

![generate_efi](images/generate_efi-v2.gif){.thumbnail}

la *2ème séquence* consiste à rendre active la partition sélectionnée lors de la séquence précédente.

- Toujours dans le menu `boot` de votre BIOS : 
    - Choisissez `UEFI Hard Disk BBS Priorities`{.action}.
    - Choisissez `UEFI Boot Order #1`{.action} puis sélectionnez `CENTOS6`{.action} afin de le positionner en tant que 1er choix de démarrage dans la liste active.

L'image ci-dessous est un résumé des actions citées plus haut :

![select_efi](images/select_efi-v2.gif){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
