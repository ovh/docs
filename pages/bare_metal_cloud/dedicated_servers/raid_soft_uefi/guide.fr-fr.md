---
title: "Gestion et reconstruction d'un RAID logiciel sur les serveurs utilisant le mode de démarrage UEFI"
excerpt: Découvrez comment gérer et reconstruire un RAID logiciel après un remplacement de disque sur un serveur utilisant le mode de démarrage UEFI
updated: 2026-01-13
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

## Objectif

Un Redundant Array of Independent Disks (RAID) est une technologie qui atténue la perte de données sur un serveur en répliquant les données sur deux disques ou plus.

Le niveau RAID par défaut pour les installations de serveurs OVHcloud est le RAID 1, qui double l'espace occupé par vos données, réduisant ainsi l'espace disque utilisable de moitié.

**Ce guide explique comment gérer et reconstruire un RAID logiciel après un remplacement de disque sur votre serveur en mode UEFI.**

Avant de commencer, veuillez noter que ce guide se concentre sur les serveurs dédiés qui utilisent le mode UEFI comme mode de démarrage. C'est le cas des cartes mères modernes. Si votre serveur utilise le mode de démarrage legacy (BIOS), veuillez consulter ce guide : [Gestion et reconstruction d'un RAID logiciel sur des serveurs en mode de démarrage legacy (BIOS)](/pages/bare_metal_cloud/dedicated_servers/raid_soft).

Pour vérifier si un serveur fonctionne en mode BIOS legacy ou en mode UEFI, exécutez la commande suivante :

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

Pour plus d'informations sur l'UEFI, consultez l'article suivant : [https://uefi.org/about](https://uefi.org/about).

## Prérequis

- Un [serveur dédié](/links/bare-metal/bare-metal) avec une configuration RAID logiciel
- Un accès administrateur (sudo) au serveur via SSH
- Une compréhension du RAID, des partitions et de GRUB

Au cours de ce guide, nous utilisons les termes **disque principal** et **disque secondaire**. Dans ce contexte :

- Le disque principal est le disque dont l'ESP (EFI System Partition) est monté par Linux.
- Les disques secondaires sont tous les autres disques du RAID.

## En pratique

Lorsque vous achetez un nouveau serveur, vous pouvez ressentir le besoin d'effectuer une série de tests et d'actions. Un tel test pourrait être de simuler une panne de disque afin de comprendre le processus de reconstruction du RAID.

### Aperçu du contenu

- [Informations de base](#basicinformation)
- [Compréhension de la partition système EFI (ESP)](#efisystemparition)
- [Simulation d'une panne de disque](#diskfailure)
    - [Retirer le disque défectueux](#diskremove)
- [Reconstruction du RAID (avec des ESP non-mirrorrées)](#raidrebuildnonmirrored)
    - [Reconstruction du RAID après le remplacement du disque principal (mode rescue)](#nonmirroredrescuemode)
    - [Recréation de la partition système EFI](#recreateesp)
    - [Reconstruction du RAID avec des ESP non synchronisés après des mises à jour majeures du système (GRUB)](#efiraidgrub)
    - [Reconstruction du RAID après le remplacement du disque principal (mode normal)](#nonmirrorednormalmode)
- [Reconstruction du RAID (avec des ESP en miroir)](#raidrebuildmirrored)
- [Ajout de l'étiquette à la partition SWAP (si applicable)](#swap-partition)

<a name="basicinformation"></a>

### Informations de base

Dans une session de ligne de commande, tapez la commande suivante pour déterminer l'état du RAID :

```sh
[user@server_ip ~]# cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 nvme1n1p3[1] nvme0n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1] nvme0n1p2[0]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

D'après les résultats, nous avons actuellement deux périphériques RAID logiciels configurés, **md2** et **md3**, avec **md3** étant le plus grand des deux. **md3** est composé de deux partitions, appelées **nvme0n1p3** et **nvme1n1p3**.

Le [UU] signifie que tous les disques fonctionnent normalement. Un `_` indiquerait un disque défectueux.

Dans d'autres cas, vous obtiendriez les résultats suivants :

```sh
Personalities : [raid1]
md3 : active raid1 nvme0n1p3[1] nvme1n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md1 : active raid1 nvme0n1p1[1] nvme1n1p1[0]
      523200 blocks [2/2] [UU]

md2 : active raid1 nvme1n1p2[0] nvme0n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

D'après les résultats, nous avons actuellement trois périphériques RAID logiciels configurés, **md1**, **md2** et **md3**, avec **md3** étant le plus grand des deux. **md3** est composé de deux partitions, appelées **nvme0n1p3** et **nvme1n1p3**.

Si vous avez un serveur avec des disques SATA, vous obtiendrez les résultats suivants :

```sh
[user@server_ip ~]# cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 sda3[0] sdb3[1]
      3904786432 blocks super 1.2 [2/2] [UU]
      bitmap: 2/30 pages [8KB], 65536KB chunk

md2 : active raid1 sda2[0] sdb2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Cette commande affiche nos volumes RAID, mais pas la taille des partitions. Nous pouvons trouver cette information à l'aide de `fdisk -l` :

/// details | **fdisk -l**

```sh
[user@server_ip ~]# sudo fdisk -l

Disk /dev/nvme1n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: A11EDAA3-A984-424B-A6FE-386550A92435

Device             Start        End   Sectors   Size Type
/dev/nvme1n1p1      2048    1048575   1046528   511M EFI System
/dev/nvme1n1p2   1048576    3145727   2097152     1G Linux RAID
/dev/nvme1n1p3   3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme1n1p4 999161856 1000210431   1048576   512M Linux files


Disk /dev/nvme0n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F03AC3C3-D7B7-43F9-88DB-9F12D7281D94

Device              Start        End   Sectors   Size Type
/dev/nvme0n1p1       2048    1048575   1046528   511M EFI System
/dev/nvme0n1p2    1048576    3145727   2097152     1G Linux RAID
/dev/nvme0n1p3    3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme0n1p4  999161856 1000210431   1048576   512M Linux file
/dev/nvme0n1p5 1000211120 1000215182      4063     2M Linux file


Disk /dev/md2: 1022 MiB, 1071644672 bytes, 2093056 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/md3: 474.81 GiB, 509824991232 bytes, 995751936 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

Cette commande permet également d'identifier le type de partition.

Pour les partitions **GPT**, la ligne 6 affiche : `Disklabel type: gpt`.
Cette information n'est visible que lorsque le serveur est en mode normal.

Toujours en se basant sur les résultats, nous pouvons voir que `/dev/md2` se compose de 1022 MiB et `/dev/md3` contient 474,81 GiB. Si nous exécutons la commande `mount`, nous pouvons également trouver la disposition des disques.

///

En alternative, la commande `lsblk` offre une vue différente des partitions :

```sh
[user@server_ip ~]# lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:7    0   511M  0 part
├─nvme1n1p2 259:8    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme1n1p3 259:9    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
└─nvme1n1p4 259:10   0   512M  0 part  [SWAP]
nvme0n1     259:1    0 476.9G  0 disk
├─nvme0n1p1 259:2    0   511M  0 part  /boot/efi
├─nvme0n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme0n1p3 259:4    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
├─nvme0n1p4 259:5    0   512M  0 part  [SWAP]
└─nvme0n1p5 259:6    0     2M  0 part
```

De plus, si nous exécutons `lsblk -f`, nous obtenons davantage d'informations sur ces partitions, telles que le LABEL et l'UUID :

```sh
[user@server_ip ~]# sudo lsblk -f
NAME        FSTYPE            FSVER            LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINT
nvme1n1
├─nvme1n1p1 vfat              FAT16            EFI_SYSPART    B493-9DFA
├─nvme1n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme1n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
└─nvme1n1p4 swap              1                swap-nvme1n1p4 483b9b41-ada3-4143-8cac-5bff7afb73c7                [SWAP]
nvme0n1
├─nvme0n1p1 vfat              FAT16            EFI_SYSPART    B486-9781                             504.9M     1% /boot/efi
├─nvme0n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme0n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
├─nvme0n1p4 swap              1                swap-nvme0n1p4 51e7172b-adb0-4729-b0f8-613e5dede38b                [SWAP]
└─nvme0n1p5 iso9660           Joliet Extension config-2       2025-08-05-14-55-41-00
```

Notez les périphériques, les partitions et les points de montage, car cela est important, en particulier après le remplacement d'un disque. Cela vous permettra de vérifier que les partitions sont correctement montées sur leurs points de montage respectifs sur le nouveau disque.

Dans note exemple, nous avons :

- Deux matrices RAID : `/dev/md2` et `/dev/md3`.
- Partitions faisant partie du RAID : **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2** et **nvme0n1p3** avec les points de montage `/boot` et `/`.
- Partitions ne faisant pas partie du RAID : **nvem0n1p1**, **nvme0n1p4** et **nvme1n1p4** avec les points de montage `/boot/efi` et [SWAP].
- Une partition n'a pas de point de montage : **nvme1n1p1**.

La partition `nvme0n1p5` est une partition de configuration, c'est-à-dire un volume en lecture seule connecté au serveur qui lui fournit les données de configuration initiale.

<a name="efisystempartition"></a>

### Comprendre la partition système EFI (ESP)

/// details | **Déplier cette section**

***Qu'est-ce qu'une partition système EFI ?***

Une partition système EFI est une partition qui peut contenir les chargeurs de démarrage, les gestionnaires de démarrage ou les images de noyau d'un système d'exploitation installé. Elle peut également contenir des programmes utilitaires système destinés à être exécutés avant le démarrage du système d'exploitation, ainsi que des fichiers de données tels que des journaux d'erreurs.

***La partition système EFI est-elle mise en miroir dans RAID ?***

À compter de décembre 2025, seules les versions suivantes du système d'exploitation mettent en miroir la partition système EFI dans RAID pour les nouvelles installations ou les réinstallations :

* Debian 13
* Proxmox 9
* Ubuntu 25.10
* AlmaLinux and Rocky Linux 10
* Fedora 43

Pour les versions antérieures de ces systèmes d'exploitation, la partition EFI n'est pas mise en miroir dans RAID ; plusieurs ESP sont créés, un par disque. Cependant, une seule ESP est montée à la fois, et toutes les ESP contiennent les mêmes fichiers. La partition système EFI est montée dans `/boot/efi`, et le disque sur lequel elle est montée est sélectionné par Linux au démarrage.

Vous pouvez utiliser la commande `lsblk` pour vérifier si votre partition fait partie d'une configuration RAID.

> [!tabs]
> **ESP non mise en miroir**
>>
>> ```sh
>> lsblk
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme0n1     259:0    0 476.9G  0 disk
>> ├─nvme0n1p1 259:6    0   511M  0 part
>> ├─nvme0n1p2 259:7    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme0n1p3 259:8    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> ├─nvme0n1p4 259:9    0   512M  0 part  [SWAP]
>> └─nvme0n1p5 259:10   0     2M  0 part
>> nvme1n1     259:1    0 476.9G  0 disk
>> ├─nvme1n1p1 259:2    0   511M  0 part  /boot/efi
>> ├─nvme1n1p2 259:3    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme1n1p3 259:4    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> └─nvme1n1p4 259:5    0   512M  0 part  [SWAP]
>> ```
>>
>> D'après les résultats ci-dessus, nous pouvons voir qu'une seule partition système EFI est montée dans `/boot/efi`. Les ESP ne sont donc pas mis en miroir (répliqués).
>>
> **ESP mise en miroir**
>>
>> ```sh
>> lsblk
>> nvme0n1     259:0    0 476.9G  0 disk
>> ├─nvme0n1p1 259:1    0   511M  0 part
>> │ └─md1       9:1    0 510.9M  0 raid1 /boot/efi
>> ├─nvme0n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme0n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> └─nvme0n1p4 259:4    0   512M  0 part  [SWAP]
>> nvme1n1     259:5    0 476.9G  0 disk
>> ├─nvme1n1p1 259:6    0   511M  0 part
>> │ └─md1       9:1    0 510.9M  0 raid1 /boot/efi
>> ├─nvme1n1p2 259:7    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme1n1p3 259:8    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> ├─nvme1n1p4 259:9    0   512M  0 part  [SWAP]
>> └─nvme1n1p5 259:10   0     2M  0 part
>> ```
>>
>> D'après les résultats ci-dessus, nous pouvons voir que les deux partitions système EFI sont montées sur `/boot/efi`. Elles sont donc en miroir dans RAID.

***Le contenu de la partition système EFI change-t-il régulièrement ?***

En général, le contenu de cette partition ne change pas beaucoup, son contenu ne devrait changer que lors des mises à jour du chargeur d'amorçage (*bootloader*).

Cependant, si votre partition EFI n'est pas en miroir, nous vous recommandons d'exécuter un script automatique ou manuel pour synchroniser toutes les ESP, afin qu'elles contiennent toutes les mêmes fichiers à jour. Ainsi, si le disque sur lequel cette partition est montée tombe en panne, le serveur pourra redémarrer sur l'ESP de l'un des autres disques.

***Que se passe-t-il si le disque principal (avec la partition système EFI montée) tombe en panne ?***

Si votre ESP n'est pas en miroir, vous pouvez rencontrer les difficultés suivantes :

> [!primary]
> Veuillez noter que, bien que nous examinions ci-dessous les cas les plus courants, il existe plusieurs autres raisons pour lesquelles un serveur peut ne pas démarrer en mode normal après un remplacement de disque.
> 

**Étude de cas 1** - Aucune modification ni mise à jour majeure (par exemple, GRUB) n'a été apportée au système d'exploitation.

- Le serveur est capable de démarrer en mode normal et vous pouvez procéder à la reconstruction du RAID.
- Le serveur ne parvient pas à démarrer en mode normal. Utilisez l'environnement du mode rescue pour reconstruire le RAID et recréer la partition EFI sur le nouveau disque.

**Étude de cas 2** - Des mises à jour majeures du système (par exemple, GRUB) ont été effectuées et les ESP sont synchronisés.

- Le serveur est capable de démarrer en mode normal car toutes les ESP contiennent des informations à jour et la reconstruction du RAID peut être effectuée en mode normal.
- Le serveur ne parvient pas à démarrer en mode normal. Utilisez l'environnement du mode rescue pour reconstruire le RAID et recréer la partition EFI sur le nouveau disque.

**Étude de cas 3** - Des mises à jour majeures du système (par exemple, GRUB) ont été effectuées sur le système d'exploitation et les partitions ESP n'ont pas été synchronisées.

- Le serveur ne parvient pas à démarrer en mode normal, Utilisez l'environnement du mode rescue pour reconstruire le RAID, recréer la partition système EFI sur le nouveau disque et réinstaller le bootloader (par exemple, GRUB).
- Le serveur est capable de démarrer en mode normal (cela pourrait arriver dans le cas où un système d'exploitation est mis à niveau mais que la version de GRUB reste inchangée), ce qui permet de procéder à la reconstruction du RAID.

Dans certains cas, le démarrage à partir d'une ESP obsolète peut échouer ; par exemple, une mise à jour majeure de GRUB peut rendre le binaire GRUB dans l'ESP incompatible avec les nouveaux modules GRUB dans la partition `/boot`.

***Comment puis-je synchroniser mes partitions système EFI, et à quelle fréquence devrais-je les synchroniser ?***

Si votre partition système EFI n'est pas mise en miroir, tenez compte des éléments suivants :

> [!primary]
> Veuillez noter que le processus peut varier en fonction de votre système d'exploitation. Par exemple, Ubuntu peut synchroniser plusieurs partitions système EFI à chaque mise à jour de GRUB, mais c'est le seul système d'exploitation qui le fait. Nous vous recommandons de consulter la documentation officielle de votre système d'exploitation pour comprendre comment gérer les ESP.
>
> Dans ce guide, le système d'exploitation utilisé est Debian.

Nous vous recommandons de synchroniser vos ESP régulièrement ou après chaque mise à jour majeure du système. Par défaut, toutes les partitions système EFI contiennent les mêmes fichiers après l'installation. Cependant, si une mise à jour majeure du système est impliquée, la synchronisation des ESP est essentielle pour garder le contenu à jour.

L'exécution d'un script est un moyen efficace de synchroniser régulièrement vos partitions. Vous trouverez ci-dessous un script que vous pouvez utiliser pour synchroniser manuellement vos ESP. Vous pouvez également configurer un script automatisé pour les synchroniser quotidiennement ou à chaque démarrage du système.

Avant d'exécuter le script, assurez-vous que `rsync` est installé sur votre système :

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat et Fedora**

```sh
sudo yum install rsync
```

Pour exécuter un script sous Linux, vous avez besoin d'un fichier exécutable :

- Commencez par créer un fichier .sh dans le répertoire de votre choix, en remplaçant `nom-du-script` par le nom de votre choix.

```sh
sudo touch nom-du-script.sh
```

- Ouvrez le fichier avec un éditeur de texte et ajoutez les lignes suivantes :

```sh
sudo nano nom-du-script.sh
```

```sh
#!/bin/bash

set -euo pipefail

MOUNTPOINT="/var/lib/grub/esp"
MAIN_PARTITION=$(findmnt -n -o SOURCE /boot/efi)

echo "${MAIN_PARTITION} is the main partition"

mkdir -p "${MOUNTPOINT}"

while read -r partition; do
    if [[ "${partition}" == "${MAIN_PARTITION}" ]]; then
        continue
    fi
    echo "Working on ${partition}"
    mount "${partition}" "${MOUNTPOINT}"
    rsync -ax "/boot/efi/" "${MOUNTPOINT}/"
    umount "${MOUNTPOINT}"
done < <(blkid -o device -t LABEL=EFI_SYSPART)
```

Enregistrez et fermez le fichier.

- Rendez le script exécutable

```sh
sudo chmod +x nom-du-script.sh
```

- Exécutez le script

```sh
sudo ./nom-du-script.sh
```

- Si vous n'êtes pas dans le dossier

```sh
./chemin/vers/dossier/nom-du-script.sh
```

Lorsque le script est exécuté, le contenu de la partition EFI montée sera synchronisé avec les autres. Pour accéder au contenu, vous pouvez monter l'une de ces partitions EFI non montées sur le point de montage : `/var/lib/grub/esp`.

///

<a name="diskfailure"></a>

### Simulation d'une panne de disque

Maintenant que nous disposons des informations nécessaires, nous pouvons simuler une panne de disque. Dans cet exemple, nous allons provoquer la panne du disque principal `nvme0n1` (notez qu'il s'agit du disque sur lequel est monté l'ESP).

La méthode préférée pour le faire est via le mode rescue d'OVHcloud.

Redémarrez le serveur en mode rescue et connectez-vous avec les identifiants fournis.

Pour retirer un disque du RAID, la première étape est de le marquer comme **Failed** et de retirer les partitions de leurs tableaux RAID respectifs.

**Remarque** : il s'agit uniquement d'une illustration ; adaptez les commandes à votre propre configuration.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

À partir du résultat ci-dessus, nvme0n1 comporte deux partitions en RAID qui sont **nvme0n1p2** et **nvme0n1p3**.

<a name="removedisk"></a>

#### Retrait du disque défectueux

Tout d'abord, nous marquons les partitions **nvme0n1p2** et **nvme0n1p3** comme défectueuses (*Failed*).

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/nvme0n1p2
# mdadm: set /dev/nvme0n1p2 faulty in /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --fail /dev/nvme0n1p3
# mdadm: set /dev/nvme0n1p3 faulty in /dev/md3
```

Ensuite, nous exécutons la commande `cat /proc/mdstat` :

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0](F) nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2](F) nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Comme nous pouvons le voir ci-dessus, le [F] à côté des partitions indique que le disque est défectueux ou en panne.

Ensuite, nous retirons ces partitions des matrices RAID pour supprimer complètement le disque du RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

Le statut RAID devrait maintenant ressembler à ceci :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Maintenant, seules deux partitions apparaissent désormais dans les matrices RAID. Nous avons réussi à provoquer la défaillance du disque **nvme0n1**.

Pour obtenir un disque similaire à un disque vide, exécutez la commande suivante sur chaque partition, puis sur le disque :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1
```

Le disque apparaît désormais comme un disque neuf et vide :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:1    0   511M  0 part
├─nvme1n1p2 259:2    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:3    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1
└─nvme1n1p4 259:4    0   512M  0 part
nvme0n1     259:5    0 476.9G  0 disk
```

Exécutez la commande suivante pour vérifier que le disque a bien été « effacé » :

```sh
parted /dev/nvme0n1
GNU Parted 3.5
Using /dev/nvme0n1
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) p
Error: /dev/nvme0n1: unrecognised disk label
Model: WDC CL SN720 SDAQNTW-512G-2000 (nvme)
Disk /dev/nvme0n1: 512GB
Sector size (logical/physical): 512B/512B
Partition Table: unknown
Disk Flags:
```

Pour plus d'informations sur la préparation et la demande de remplacement d'un disque, consultez ce [guide](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

De plus, si vous exécutez la commande suivante, vous obtiendrez plus de détails sur les matrices RAID :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md3

/dev/md3:
           Version : 1.2
     Creation Time : Fri Aug  1 14:51:13 2025
        Raid Level : raid1
        Array Size : 497875968 (474.81 GiB 509.82 GB)
     Used Dev Size : 497875968 (474.81 GiB 509.82 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Fri Aug  1 15:56:17 2025
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md3
              UUID : b383c3d5:7fb1bb5e:6b7c4d96:6ea817ff
            Events : 215

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1     259        4        1      active sync   /dev/nvme1n1p3
```

Nous pouvons maintenant procéder au remplacement du disque et à la reconstruction du RAID.

<a name="raidrebuildnonmirrored"></a>

### Reconstruction du RAID (avec des ESP non-mirrorrées)

> [!primary]
> Ce processus peut varier selon le système d'exploitation installé sur votre serveur. Nous vous recommandons de consulter la documentation officielle de votre système d'exploitation pour obtenir les commandes appropriées.
>
> Si votre serveur peut démarrer en mode normal après le remplacement du disque, procédez simplement en suivant les étapes décrites dans [cette section](#nonmirrorednormalmode) si votre partition EFI n'est pas en miroir ou [cette section](#mirrored-esp-normal) si votre partition EFI est en miroir.
>

#### Reconstruction du RAID après le remplacement du disque principal (mode rescue) <a name="nonmirroredrescuemode"></a>

Une fois le disque remplacé, copiez la table de partition du disque sain (dans cet exemple, nvme1n1) vers le nouveau disque (nvme0n1).

**Pour les partitions GPT**

La commande doit être dans ce format : `sgdisk -R /dev/nouveau disque /dev/disque sain`.

Exemple :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Exécutez `lsblk` pour vous assurer que les tables de partitions ont été correctement copiées :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:1    0   511M  0 part
├─nvme1n1p2 259:2    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:3    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1
└─nvme1n1p4 259:4    0   512M  0 part
nvme0n1     259:5    0 476.9G  0 disk
├─nvme0n1p1 259:10   0   511M  0 part
├─nvme0n1p2 259:11   0     1G  0 part
├─nvme0n1p3 259:12   0 474.9G  0 part
└─nvme0n1p4 259:13   0   512M  0 part
```

Ensuite, randomisez le GUID du nouveau disque afin d'éviter tout conflit avec les GUID d'autres disques :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
```

Si vous recevez le message suivant :

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Exécutez la commande `partprobe`.

Ensuite, nous reconstruisons la matrice RAID. L'extrait de code suivant montre comment ajouter les nouvelles partitions (`nvme0n1p2` et `nvme0n1p3`) à la matrice RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
# mdadm: added /dev/nvme0n1p2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
# mdadm: re-added /dev/nvme0n1p3
```

Pour vérifier le processus de reconstruction :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[2] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      [>....................]  recovery =  0.1% (801920/497875968) finish=41.3min speed=200480K/sec
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]
```

Une fois la reconstruction du RAID terminée, exécutez la commande suivante pour vous assurer que les partitions ont été correctement ajoutées au RAID :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
nvme1n1
├─nvme1n1p1 vfat              FAT16 EFI_SYSPART    4629-D183
├─nvme1n1p2 linux_raid_member 1.2   md2            83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2     ext4              1.0   boot           4de80ae0-dd90-4256-9135-1735e7be4b4d
├─nvme1n1p3 linux_raid_member 1.2   md3            b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3     ext4              1.0   root           9bf386b6-9523-46bf-b8e5-4b8cc7c5786f
└─nvme1n1p4 swap              1     swap-nvme1n1p4 9bf292e8-0145-4d2f-b891-4cef93c0d209
nvme0n1
├─nvme0n1p1
├─nvme0n1p2 linux_raid_member 1.2   md2            83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2     ext4              1.0   boot           4de80ae0-dd90-4256-9135-1735e7be4b4d
├─nvme0n1p3 linux_raid_member 1.2   md3            b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3     ext4              1.0   root           9bf386b6-9523-46bf-b8e5-4b8cc7c5786f
└─nvme0n1p4
```

D'après les résultats ci-dessus, les partitions du nouveau disque ont été correctement ajoutées au RAID. Toutefois, la partition EFI System et la partition SWAP (dans certains cas) n'ont pas été dupliquées, ce qui est normal car elles ne font pas partie du RAID.

> [!warning]
> Les exemples ci-dessus illustrent simplement les étapes nécessaires sur la base d'une configuration de serveur par défaut. Les résultats de chaque commande dépendent du type de matériel installé sur votre serveur et de la structure de ses partitions. En cas de doute, consultez la documentation de votre système d'exploitation.
> 
> Si vous avez besoin d'une assistance professionnelle pour l'administration de votre serveur, consultez les détails de la section [Aller plus loin](#go-further) de ce guide.
>

<a name="recreateesp"></a>

#### Recréation de la partition EFI System

Pour recréer la partition EFI System sur le nouveau disque, nous devons formater **nvme0n1p1** et répliquer le contenu de la partition EFI System saine (dans notre exemple : nvme1n1p1) sur celle-ci.

Ici, nous supposons que les deux partitions ont été synchronisées et contiennent des fichiers à jour.

> [!warning]
> Si une mise à jour majeure du système, telle qu'une mise à jour du noyau ou de GRUB, a eu lieu et que les deux partitions n'ont pas été synchronisées, consultez cette [section](#efiraidgrub) une fois que vous avez terminé la création de la nouvelle partition EFI System.
>

Tout d'abord, formatez la partition :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

Ensuite, nommez la partition « EFI_SYSPART » (ce nom est spécifique à OVHcloud) :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Dupliquez ensuite le contenu de nvme1n1p1 vers nvme0n1p1. 

Commencez par créer deux dossiers, nommés « old » et « new » dans cet exemple :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

Ensuite, montez **nvme1n1p1** dans le dossier « old » et **nvme0n1p1** dans le dossier « new » pour faire la distinction :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Copiez les fichiers du dossier « old » vers le dossier « new » :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # rsync -axv old/ new/
sending incremental file list
EFI/
EFI/debian/
EFI/debian/BOOTX64.CSV
EFI/debian/fbx64.efi
EFI/debian/grub.cfg
EFI/debian/grubx64.efi
EFI/debian/mmx64.efi
EFI/debian/shimx64.efi

sent 6,099,848 bytes  received 165 bytes  12,200,026.00 bytes/sec
total size is 6,097,843  speedup is 1.00
```

Une fois cela fait, démontez les deux partitions :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

Ensuite, montez la partition contenant la racine du système d'exploitation sur `/mnt`. Dans cet exemple, cette partition est **md3**.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Montez les répertoires suivants pour vous assurer que toutes les modifications apportées dans l'environnement `chroot` fonctionnent correctement :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
mount --types proc /proc /mnt/proc
mount --rbind /sys /mnt/sys
mount --make-rslave /mnt/sys
mount --rbind /dev /mnt/dev
mount --make-rslave /mnt/dev
mount --bind /run /mnt/run
mount --make-slave /mnt/run
```

Ensuite, utilisez la commande `chroot` pour accéder au point de montage et vérifiez que la nouvelle partition système EFI a été correctement créée et que le système reconnaît les deux ESP :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Pour afficher les partitions ESP, exécutez la commande `blkid -t LABEL=EFI_SYSPART` :

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Les résultats ci-dessus montrent que la nouvelle partition EFI a été créée correctement et que le LABEL a été appliqué correctement.

Une fois cela fait, quittez l'environnement `chroot` :

```sh
root@rescue12-customer-eu:/# exit
```

Ensuite, consultez [cette section](#swap-partition) pour recréer la partition SWAP (le cas échéant).

#### Reconstruction du RAID avec des ESP non synchronisés après des mises à jour majeures du système (GRUB) <a name="efiraidgrub"></a>

/// details | **Développez cette section**

> [!warning]
> Veuillez suivre les étapes de cette section uniquement si cela s'applique à votre cas.
> 

Si le disque principal est remplacé alors qu'il contient des partitions système EFI qui n'ont pas été synchronisées après des mises à jour majeures du système ayant modifié le GRUB, le démarrage à partir d'un des disques secondaires avec une ESP obsolète peut échouer.

Dans ce cas, en plus de reconstruire le RAID et de recréer la partition système EFI en mode rescue, vous devez également réinstaller le GRUB sur celle-ci.

Une fois l'ESP créé (comme expliqué ci-dessus) et reconnu par le système, toujours dans l'environnement `choot`, créez le dossier /boot/efi pour monter la nouvelle partition système EFI **nvme0n1p1**.

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

Ensuite, réinstallez le chargeur de démarrage GRUB (*bootloader*) :

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Puis, exécutez la commande suivante :

```sh
root@rescue12-customer-eu:/# update-grub
```

Une fois cela fait, quittez l'environnement `chroot` :

```sh
root@rescue12-customer-eu:/# exit
```

Ensuite, consultez [cette section](#swap-partition) pour recréer la partition SWAP (le cas échéant).

///

<a name="nonmirrorednormalmode"></a>

#### Reconstruction du RAID après le remplacement du disque principal (mode normal)

/// details | **Développez cette section**

Si votre serveur est capable de démarrer en mode normal après un remplacement de disque, vous pouvez suivre les étapes ci-dessous pour reconstruire le RAID.

Une fois le disque remplacé, nous copions la table de partition du disque sain (dans cet exemple, nvme1n1) vers le nouveau (nvme0n1).

**Pour les partitions GPT**

```sh
sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

La commande doit être dans ce format : `sgdisk -R /dev/nouveau disque /dev/disque sain`.

Une fois cela fait, l'étape suivante consiste à attribuer un GUID aléatoire au nouveau disque pour éviter les conflits de GUID avec d'autres disques :

```sh
sudo sgdisk -G /dev/nvme0n1
```

Si vous recevez le message suivant :

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Exécutez simplement la commande `partprobe`. Si vous ne voyez toujours pas les nouvelles partitions créées (avec la commande `lsblk`), vous devez redémarrer le serveur avant de continuer.

Ensuite, ajoutez les partitions au RAID :

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Utilisez cette commande pour suivre la reconstruction du RAID : `cat /proc/mdstat`.

Une fois la reconstruction terminée, recréez la partition système EFI sur le nouveau disque.

- Tout d'abord, assurez-vous que les outils nécessaires sont installés :

**Debian et Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

- Formatez la partition. Dans notre exemple `nvme0n1p1` :

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

- Attribuez l'étiquette `EFI_SYSPART` à la partition (ce nommage est spécifique à OVHcloud) :

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Une fois cela fait, vous pouvez synchroniser les deux partitions à l'aide du script fourni dans ce guide.

- Vérifiez que la nouvelle partition EFI System a été correctement créée et que le système la reconnaît :

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Ensuite, consultez [cette section](#swap-partition) pour recréer la partition SWAP (le cas échéant).

///

<a name="raidrebuildmirrored"></a>

### Reconstruction du RAID (avec des ESP en miroir)

/// details | **Dépliez cette section**

> [!tabs] 
> **En mode Rescue**
>>
>> La reconstruction du RAID avec toutes les partitions en miroir est plus facile ; il suffit de copier les données du disque sain vers le nouveau disque et de recréer la partition [SWAP] (le cas échéant).
>>
>> D'après les illustrations ci-dessus, l'état du RAID devrait ressembler à ceci après une panne de disque :
>>
>> ```sh
>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>> md3 : active raid1 nvme1n1p3[2] nvme0n1p3[0](F)
>>       497875968 blocks super 1.2 [2/1] [_U]
>>       bitmap: 0/4 pages [0KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[1]
>>       523200 blocks [2/1] [_U]
>>
>> md2 : active raid1 nvme1n1p2[2] nvme0n1p2[0](F)
>>       1046528 blocks super 1.2 [2/1] [_U]
>>
>> unused devices: <none>
>> ```
>>
>> Une fois le disque remplacé, la première étape consiste à copier la table de partition du disque sain (dans cet exemple, nvme1n1) vers le nouveau disque (nvme0n1).
>>
>> **Pour les partitions GPT**
>>
>> La commande doit être au format suivant : `sgdisk -R /dev/nouveau disque /dev/disque sain`.
>>
>> Dans notre exemple :
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> Exécutez `lsblk` pour vous assurer que les tables de partition ont été correctement copiées :
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk
>>
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme1n1     259:0    0 476.9G  0 disk
>> ├─nvme1n1p1 259:1    0   511M  0 part
>> │ └─md1       9:1    0  510.9M 0 raid1
>> ├─nvme1n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1
>> ├─nvme1n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1
>> └─nvme1n1p4 259:4    0   512M  0 part
>> nvme0n1     259:5    0 476.9G  0 disk
>> ├─nvme0n1p1 259:10   0   511M  0 part
>> ├─nvme0n1p2 259:11   0     1G  0 part
>> ├─nvme0n1p3 259:12   0 474.9G  0 part
>> └─nvme0n1p4 259:13   0   512M  0 part
>> ```
>>
>> l'étape suivante consiste à attribuer un GUID aléatoire au nouveau disque pour éviter les conflits de GUID avec d'autres disques :
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
>> ```
>>
>> Si vous recevez le message suivant :
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Exécutez la commande `partprobe`.
>>
>> Nous pouvons maintenant reconstruire la matrice RAID. L'extrait de code suivant montre comment ajouter à nouveau les nouvelles partitions (nvme0n1p2 et nvme0n1p3) à la matrice RAID.
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md1 /dev/nvme0n1p1
>> # mdadm: added /dev/nvme0n1p1
>>
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
>> # mdadm: added /dev/nvme0n1p2
>>
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
>> # mdadm: added /dev/nvme0n1p3
>> ```
>>
>> Pour vérifier le processus de reconstruction :
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
>> Personalities : [raid1]
>> md3 : active raid1 nvme0n1p3[2] nvme1n1p3[0]
>>       497875968 blocks super 1.2 [2/1] [U_]
>>       [=========>...........]  recovery = 47.0% (234461184/497875968) finish=21.
>>       bitmap: 4/4 pages [16KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[1] nvme1n1p1[0]
>>       523200 blocks [2/2] [UU]
>>
>> md2 : active raid1 nvme0n1p2[2] nvme1n1p2[0]
>>       1046528 blocks super 1.2 [2/2] [UU]
>> ```
>>
>> Une fois la reconstruction terminée, exécutez la commande suivante pour vous assurer que les partitions ont été correctement ajoutées au RAID :
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
>> NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
>> nvme1n1
>> ├─nvme1n1p1 linux_raid_member 0.90.0                          2043a004-0743-7bc6-37f2-12c43604630c
>> │ └─md1     vfat              FAT16            EFI_SYSPART    D28D-6A4F
>> ├─nvme1n1p2 linux_raid_member 1.2              md2            0772556e-3f45-a551-ab32-c96e502dab22
>> │ └─md2     xfs                                boot           0b22431a-7020-427c-aa31-324feec6ea84
>> ├─nvme1n1p3 linux_raid_member 1.2              md3            071571aa-1b36-9ef7-15b3-190ffdcf3a8b
>> │ └─md3     xfs                                root           3a2cb95b-c142-4d72-835b-52fcce99a0c5
>> ├─nvme1n1p4 swap              1                swap-nvme1n1p4 0d502997-853d-4986-b40a-407d5f187e82
>> └─nvme1n1p5
>> nvme0n1
>> ├─nvme0n1p1 linux_raid_member 0.90.0                          2043a004-0743-7bc6-37f2-12c43604630c
>> │ └─md1     vfat              FAT16            EFI_SYSPART    D28D-6A4F
>> ├─nvme0n1p2 linux_raid_member 1.2              md2            0772556e-3f45-a551-ab32-c96e502dab22
>> │ └─md2     xfs                                boot           0b22431a-7020-427c-aa31-324feec6ea84
>> ├─nvme0n1p3 linux_raid_member 1.2              md3            071571aa-1b36-9ef7-15b3-190ffdcf3a8b
>> │ └─md3     xfs                                root           3a2cb95b-c142-4d72-835b-52fcce99a0c5
>> ├─nvme0n1p4
>> └─nvme0n1p5 iso9660           Joliet Extension config-2       2025-12-16-15-40-00-00
>> ```
>>
>> Ensuite, consultez [cette section](#swap-partition) pour recréer la partition SWAP (le cas échéant).
>>
> **En mode Normal**
>>
>> D'après les illustrations ci-dessus, l'état du RAID devrait ressembler à ceci après une panne de disque :
>>
>> ```sh
>> Personalities : [raid1]
>> md3 : active raid1 nvme0n1p3[1](F) nvme1n1p3[0]
>>       497875968 blocks super 1.2 [2/1] [U_]
>>       bitmap: 4/4 pages [16KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[0]
>>       523200 blocks [2/1] [U_]
>>
>> md2 : active raid1 nvme1n1p2[0] nvme0n1p2[1](F)
>>       1046528 blocks super 1.2 [2/1] [U_]
>> ```
>>
>> Une fois le disque remplacé, la première étape consiste à copier la table de partition du disque sain (dans cet exemple, nvme1n1) vers le nouveau disque (nvme0n1).
>>
>> **Pour les partitions GPT**
>>
>> ```sh
>> sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> La commande doit être au format suivant : `sgdisk -R /dev/nouveau disque /dev/disque sain`.
>>
>> Ensuite, randomisez le GUID du nouveau disque afin d'éviter tout conflit avec les GUID d'autres disques :
>>
>> ```sh
>> sudo sgdisk -G /dev/nvme0n1
>> ```
>>
>> Si vous recevez le message suivant :
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Exécutez simplement la commande `partprobe`. Si vous ne voyez toujours pas les nouvelles partitions créées (ex. avec `lsblk`), vous devez redémarrer le serveur avant de continuer.
>>
>> Ensuite, ajoutez les partitions au RAID :
>>
>> ```sh
>> [user@server_ip ~]# sudo mdadm --add /dev/md1 /dev/nvme0n1p1
>> # mdadm: added /dev/nvme0n1p1
>>
>> [user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2
>> # mdadm: added /dev/nvme0n1p2
>>
>> [user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3
>> # mdadm: added /dev/nvme0n1p3
>> ```
>>
>> Utilisez la commande suivante pour surveiller la reconstruction du RAID :
>>
>> ```sh
>> [user@server_ip ~]# cat /proc/mdstat
>> ```
>>
>> Une fois la reconstruction du RAID terminée, consultez [cette section](#swap-partition) pour recréer la partition SWAP (le cas échéant).
>>

///

#### Ajout de l'étiquette à la partition SWAP (si applicable) <a name="swap-partition"></a>

/// details | **Dépliez cette section**

> [!tabs]
> **Via le mode Rescue**
>>
>> Hors de l'environnement `chroot`, recréez la partition [SWAP] **nvme0n1p4** et ajoutez le label `swap-nvmenxxx` :
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
>> LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
>> ```
>>
>> Vérifiez que l'étiquette a été correctement appliquée :
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
>> NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
>> nvme1n1
>> ├─nvme1n1p1 vfat              FAT16 EFI_SYSPART    B27E-16D2
>> ├─nvme1n1p2 linux_raid_member 1.2   md2            fb3c5180-526f-56ad-3a0a-3f7961f57684
>> │ └─md2     xfs                     boot           ed3a4730-b3eb-4aa5-a550-dd6cd188c3a4
>> ├─nvme1n1p3 linux_raid_member 1.2   md3            a14af9ed-f791-46e5-4381-224e6d79088c
>> │ └─md3     xfs                     root           5041d916-abb3-4dc8-acdc-baeb3977ce6d  469.6G     1% /mnt
>> └─nvme1n1p4 swap              1     swap-nvme1n1p4 133ca9a3-1bd6-4519-9b5a-01b8ffa55ca4
>> nvme0n1
>> ├─nvme0n1p1 vfat              FAT16 EFI_SYSPART    3557-B372
>> ├─nvme0n1p2 linux_raid_member 1.2   md2            fb3c5180-526f-56ad-3a0a-3f7961f57684
>> │ └─md2     xfs                     boot           ed3a4730-b3eb-4aa5-a550-dd6cd188c3a4
>> ├─nvme0n1p3 linux_raid_member 1.2   md3            a14af9ed-f791-46e5-4381-224e6d79088c
>> │ └─md3     xfs                     root           5041d916-abb3-4dc8-acdc-baeb3977ce6d  469.6G     1% /mnt
>> └─nvme0n1p4 swap              1     swap-nvme0n1p4 dedd4d49-7d40-40c8-b529-41f251a7ff81
>> ```
>>
>> Accédez de nouveau à l'environnement `chroot` :
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
>> ```
>>
>> Récupérez l'UUID des deux partitions SWAP :
>>
>> ```sh
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>>
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> Ensuite, remplaçez l'ancien UUID de la partition SWAP (**nvme0n1p4**) par le nouveau dans le fichier `/etc/fstab` :
>>
>> ```sh
>> root@rescue12-customer-eu:/# nano /etc/fstab
>> ```
>>
>> Exemple :
>>
>> ```sh
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> Sur la base des résultats ci-dessus, l'ancien UUID est `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` et doit être remplacé par le nouveau `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Assurez-vous de remplacer le bon UUID.
>>
>> Ensuite, vérifiez que tout est correctement monté avec la commande suivante :
>>
>> ```sh
>> root@rescue12-customer-eu:/# mount -av
>> /                        : ignored
>> /boot                    : successfully mounted
>> /boot/efi                : successfully mounted
>> swap                     : ignored
>> swap                     : ignored
>> ```
>>
>> Activez la partition SWAP :
>>
>> ```sh
>> root@rescue12-customer-eu:/# swapon -av
>>
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme1n1p4
>> ```
>>
>> Sortez de l'environnement chroot avec `exit` et rechargez le système :
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
>> ```
>>
>> Démontez tous les disques :
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
>> ```
>>
>> Nous avons maintenant terminé avec succès la reconstruction RAID sur le serveur et nous pouvons désormais le redémarrer en mode normal.
>>
> **Via le mode Normal**
>>
>> Pour recréer la partition SWAP, procédez comme suit :
>>
>> - Tout d'abord, recréez la partition sur **nvme0n1p4** et ajoutez le label **swap-nvme0n1p4** :
>>
>> ```sh
>> [user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> ```
>>
>> - Récupérez les UUID des deux partitions SWAP :
>>
>> ```sh
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> - Remplaçez l'ancien UUID de la partition SWAP (**nvme0n1p4)** par le nouveau dans `/etc/fstab` :
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> ```
>>
>> Exemple :
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> D'après les résultats ci-dessus, l'ancien UUID est `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` et doit être remplacé par le nouveau `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. 
>>
>> Assurez-vous de remplacer le bon UUID.
>>
>> Ensuite, exécutez la commande suivante pour activer la partition SWAP :
>>
>> ```sh
>> [user@server_ip ~]# sudo swapon -av
>> swapon: /dev/nvme1n1p4: already active -- ignored
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> ```
>>
>> Ensuite, rechargez le système :
>>
>> ```sh
>> [user@server_ip ~]# sudo systemctl daemon-reload
>> ```
>>
>> Nous avons maintenant terminé avec succès la reconstruction RAID.
>>

///

## Aller plus loin

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Pour les services spécialisés (SEO, développement, etc.), contactez [les partenaires OVHcloud](/links/partner).

Si vous avez besoin d'une assistance pour utiliser et configurer vos solutions OVHcloud, veuillez consulter nos [offres de support](/links/support).

Si vous avez besoin de formation ou d'une assistance technique pour mettre en place nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander à nos experts de l'équipe Professional Services d'intervenir sur votre cas d'utilisation spécifique.

Rejoignez notre [communauté d'utilisateurs](/links/community).