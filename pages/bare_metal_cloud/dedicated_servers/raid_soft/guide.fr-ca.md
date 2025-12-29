---
title: Gestion et reconstruction du RAID logiciel sur les serveurs en mode legacy boot (BIOS)
excerpt: "Découvrez comment gérer et reconstruire le RAID logiciel après un remplacement de disque sur votre serveur en mode legacy boot (BIOS)"
updated: 2025-12-11
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

Le RAID (Redundant Array of Independent Disks) est un ensemble de techniques prévues pour atténuer la perte de données sur un serveur en répliquant celles-ci sur plusieurs disques.

Le niveau RAID par défaut pour les installations de serveurs OVHcloud est RAID 1, ce qui double l'espace occupé par vos données, réduisant ainsi de moitié l'espace disque utilisable.

**Ce guide explique comment gérer et reconstruire un RAID logiciel en cas de remplacement d'un disque sur votre serveur en mode legacy boot (BIOS).**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/t_BL_uOXQVA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Avant de commencer, veuillez noter que ce guide se concentre sur les serveurs dédiés qui utilisent le mode legacy boot (BIOS). Si votre serveur utilise le mode UEFI (cartes mères plus récentes), reportez-vous à ce guide [Gestion et reconstruction du RAID logiciel sur les serveurs en mode boot UEFI](/pages/bare_metal_cloud/dedicated_servers/raid_soft_uefi).

Pour vérifier si un serveur s'exécute en mode BIOS ou en mode UEFI, exécutez la commande suivante :

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

## Prérequis

- Posséder un [serveur dédié](/links/bare-metal/bare-metal) avec une configuration RAID logiciel.
- Avoir accès à votre serveur via SSH en tant qu'administrateur (sudo).
- Compréhension du RAID et des partitions

## En pratique

### Présentation du contenu

- [Informations de base](#basicinformation)
- [Simuler une panne de disque](#diskfailure)
    - [Retrait du disque défaillant](#diskremove)
- [Reconstruction du RAID](#raidrebuild)
    - [Reconstruction du RAID en mode rescue](#rescuemode)
    - [Ajout du label à la partition SWAP (le cas échéant)](#swap-partition)
    - [Reconstruction du RAID en mode normal](#normalmode)


<a name="basicinformation"></a>

### Informations de base

Dans une session de ligne de commande, tapez le code suivant pour déterminer l'état actuel du RAID.

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 nvme0n1p2[1] nvme0n1p20]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 nvme0n1p4[0] nvme1n1p4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Cette commande nous indique que deux périphériques RAID logiciels sont actuellement configurés, **md4** étant le plus grand. Le périphérique RAID **md4** se compose de deux partitions, appelées **nvme1n1p4** et **nvme0n1p4**.

Le [UU] signifie que tous les disques fonctionnent normalement. Un `_` indique un disque défectueux.

Si vous possédez un serveur avec des disques SATA, vous obtenez les résultats suivants :

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Bien que cette commande renvoie nos volumes RAID, elle ne nous indique pas la taille des partitions elles-mêmes. Nous pouvons retrouver cette information avec la commande suivante :

```sh
[user@server_ip ~]# sudo fdisk -l

Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F

Device          Start        End    Sectors   Size Type
/dev/sdb1        2048       4095       2048     1M BIOS boot
/dev/sdb2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sdb3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sdb4  1865226240 3907024895 2041798656 973.6G Linux RAID

Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 2E1DCCBA-8808-4D2B-BA33-9FEC3B96ADA8

Device          Start        End    Sectors   Size Type
/dev/sda1        2048       4095       2048     1M BIOS boot
/dev/sda2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sda3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sda4  1865226240 3907024895 2041798656 973.6G Linux RAID
/dev/sda5  3907025072 3907029134       4063     2M Linux filesystem

Disk /dev/md4: 973.5 GiB, 1045265645568 bytes, 2041534464 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk /dev/md2: 888.8 GiB, 954321600512 bytes, 1863909376 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

La commande `fdisk -l` vous permet également d'identifier votre type de partition. Il s’agit d’une information importante pour reconstruire votre RAID en cas de défaillance d’un disque.

Pour les partitions **GPT**, la ligne 6 affichera : `Disklabel type: gpt`. Ces informations ne sont visibles que lorsque le serveur est en mode normal.

Toujours en se basant sur les résultats de `fdisk -l`, on peut voir que `/dev/md2` se compose de 888.8GB et `/dev/md4` contient 973.5GB.

Alternativement, la commande `lsblk` offre une vue différente des partitions :

```sh
[user@server_ip ~]# lsblk

NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
├─sda1    8:1    0     1M  0 part
├─sda2    8:2    0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sda3    8:3    0   512M  0 part  [SWAP]
├─sda4    8:4    0 973.6G  0 part
│ └─md4   9:4    0 973.5G  0 raid1 /home
└─sda5    8:5    0     2M  0 part
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Nous prenons en compte les périphériques, les partitions et leurs points de montage. À partir des commandes et des résultats ci-dessus, nous avons :

- Deux baies RAID : `/dev/md2` et `/dev/md4`.
- Quatre partitions font partie du RAID avec les points de montage : `/` et `/home`.

<a name="diskfailure"></a>

### Simuler une panne de disque

Maintenant que nous disposons de toutes les informations nécessaires, nous pouvons simuler une panne de disque et poursuivre les tests. Dans cet exemple, nous allons faire échouer le disque `sda`.

Le moyen privilégié pour y parvenir est l’environnement en mode rescue d’OVHcloud.

Redémarrez d'abord le serveur en mode rescue et connectez-vous avec les informations d'identification fournies.

Pour retirer un disque du RAID, la première étape consiste à le marquer comme **Failed** et à retirer les partitions de leurs matrices RAID respectives.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

À partir de la sortie ci-dessus, sda se compose de deux partitions en RAID qui sont **sda2** et **sda4**.

<a name="diskremove"></a>

#### Retrait du disque défaillant

Nous commençons par marquer les partitions **sda2** et **sda4** défectueuses (*Failed*).

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/sda2
# mdadm: set /dev/sda2 faulty in /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md4 --fail /dev/sda4
# mdadm: set /dev/sda4 faulty in /dev/md4
```

Nous avons maintenant simulé une défaillance du RAID, lorsque nous exécutons la commande `cat /proc/mdstat`, nous obtenons le résultat suivant :

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat 

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1](F) sdb2[0]
      931954688 blocks super 1.2 [2/2] [_U]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/2] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Comme nous pouvons le voir ci-dessus, le [F] à côté des partitions indique que le disque est défaillant ou défectueux.

Ensuite, nous retirons ces partitions de leurs matrices RAID respectives.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md2 --remove /dev/sda2
# mdadm: hot removed /dev/sda2 from /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md4 --remove /dev/sda4
# mdadm: hot removed /dev/sda4 from /dev/md4
```

Pour nous assurer que nous obtenons un disque qui est similaire à un disque vide, nous utilisons la commande suivante. Remplacez **sda** par vos propres valeurs :

```sh
shred -s10M -n1 /dev/sda1
shred -s10M -n1 /dev/sda2
shred -s10M -n1 /dev/sda3
shred -s10M -n1 /dev/sda4
shred -s10M -n1 /dev/sda
```

Le disque apparaît désormais comme un disque neuf et vide :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk 
NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Si nous exécutons la commande suivante, nous voyons que notre disque a été correctement « effacé » :

```sh
parted /dev/sda
GNU Parted 3.5
Using /dev/sda
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) p
Error: /dev/sda: unrecognised disk label
Model: HGST HUS724020AL (SATA)
Disk /dev/sda: 1.8T
Sector size (logical/physical): 512B/512B
Partition Table: unknown
Disk Flags:
```

L'état de notre RAID devrait maintenant ressembler à ceci :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat 

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sdb2[0]
      931954688 blocks super 1.2 [1/2] [_U]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sdb4[1]
      1020767232 blocks super 1.2 [1/2] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Les résultats ci-dessus montrent que seules deux partitions apparaissent désormais dans les matrices RAID. Nous avons réussi à faire échouer le disque **sda** et nous pouvons maintenant procéder au remplacement du disque.

Pour plus d'informations sur la préparation et la demande de remplacement d'un disque, consultez ce [guide](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

La commande suivante permet d'avoir plus de détails sur la ou les matrices RAID :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md4

/dev/md4:
           Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 16:28:03 2023
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md4
              UUID : 7b5c1d80:0a7ab4c2:e769b5e5:9c6eaa0f
            Events : 21

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1       8       20        1      active sync   /dev/sdb4
```

<a name="raidrebuild"></a>

### Reconstruire le RAID

> [!primary]
> Ce processus peut varier selon le système d'exploitation installé sur votre serveur. Nous vous recommandons de consulter la documentation officielle de votre système d'exploitation pour obtenir les commandes appropriées.
>

> [!warning]
>
> Pour la plupart des serveurs en RAID logiciel, après un remplacement de disque, le serveur est capable de démarrer en mode normal (sur le disque sain) pour reconstruire le RAID. Cependant, si le serveur ne parvient pas à démarrer en mode normal, il sera redémarré en mode rescue pour procéder à la reconstruction du RAID.
>

<a name="normalmode"></a>

#### Reconstruire le RAID en mode normal

Les étapes suivantes sont réalisées en mode normal. Dans notre exemple, nous avons remplacé le disque **sda**.

Une fois le disque remplacé, nous devons copier la table de partition du disque sain (dans cet exemple, sdb) vers le nouveau (sda).

> [!tabs]
> **Pour les partitions GPT**
>>
>> ```sh
>> sudo sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> La commande doit être au format suivant : `sgdisk -R /dev/nouveau disque /dev/disque sain`.
>>
>> Une fois cette opération effectuée, l'étape suivante consiste à attribuer un GUID aléatoire au nouveau disque afin d'éviter tout conflit avec les GUID d'autres disques :
>>
>> ```sh
>> sudo sgdisk -G /dev/sdX
>> ```
>>
>> Si le message suivant s'affiche :
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Vous pouvez simplement exécuter la commande `partprobe`. Si vous ne voyez toujours pas les partitions nouvellement créées (par exemple avec `lsblk`), vous devez redémarrer le serveur avant de continuer.
>>
> **Pour les partitions MBR**
>>
>> ```sh
>> [user@server_ip ~]# sudo sfdisk -d /dev/sdX | sfdisk /dev/sdX
>> ```
>>
>> La commande doit être au format suivant : `sfdisk -d /dev/disque sain | sfdisk /dev/nouveau disque`.
>>

Ensuite, nous ajoutons les partitions au RAID :

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/sda2
# mdadm: added /dev/sda2

[user@server_ip ~]# sudo mdadm --add /dev/md4 /dev/sda4
# mdadm: re-added /dev/sda4
```

Utilisez la commande suivante pour surveiller la reconstruction du RAID :

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[0] sdb2[1]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/4 pages [16KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/1] [UU]
      [============>........]  recovery = 64.8% (822969856/1020767232) finish=7.2min speed=401664K/sec
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Enfin, nous ajoutons un label et montons la partition [SWAP] (le cas échéant).

Pour ajouter un libellé à la partition SWAP :

```sh
[user@server_ip ~]# sudo mkswap /dev/sda4 -L swap-sda4
```

Ensuite, récupérez les UUID des deux partitions SWAP :

```sh
[user@server_ip ~]# sudo blkid -s UUID /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -S UUID /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Nous remplaçons l'ancien UUID de la partition swap (**sda4**) par le nouveau dans `/etc/fstab`.

Exemple :

```sh
[user@server_ip ~]# sudo nano etc/fstab

UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=BIOS       /boot       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

D'après les résultats ci-dessus, l'ancien UUID est `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` et doit être remplacé par le nouveau `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. 

Assurez-vous de remplacer le bon UUID.

Ensuite, nous vérifions que tout est correctement monté à l'aide de la commande suivante :

```sh
[user@server_ip ~]# sudo mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Exécutez la commande suivante pour activer la partition SWAP :

```sh
[user@server_ip ~]# sudo swapon -av
```

Puis rechargez le système à l'aide de la commande suivante :

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```

La reconstruction du RAID est maintenant terminée.

<a name="rescuemode"></a>

/// details | **Reconstruction du RAID en mode rescue**

Si votre serveur ne parvient pas à redémarrer en mode normal après un remplacement de disque, il sera redémarré en mode rescue par notre équipe du datacenter.

Dans cet exemple, nous avons remplacé le disque `sdb`.

Une fois le disque remplacé, nous devons copier la table de partition du disque sain (dans cet exemple, sda) vers le nouveau (sdb).

> [!tabs]
> **Pour les partitions GPT**
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> La commande doit être au format suivant : `sgdisk -R /dev/nouveau disque /dev/disque sain`
>>
>> Exemple :
>>
>> ```sh
>> sudo sgdisk -R /dev/sdb /dev/sda
>> ```
>>
>> Une fois cette opération effectuée, l'étape suivante consiste à attribuer un GUID aléatoire au nouveau disque afin d'éviter tout conflit avec les GUID d'autres disques :
>>
>> ```sh
>> sudo sgdisk -G /dev/sdb
>> ```
>>
>> Si le message suivant s'affiche :
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Vous pouvez simplement exécuter la commande `partprobe`.
>>
> **Pour les partitions MBR**
>>
>> ```sh
>> sudo sfdisk -d /dev/sda | sfdisk /dev/sdb
>> ```
>>
>> La commande doit être au format suivant : `sfdisk -d /dev/disque sain | sfdisk /dev/nouveau disque`
>>

Nous pouvons maintenant reconstruire la matrice RAID. L'extrait de code suivant montre comment ajouter les nouvelles partitions (sdb2 et sdb4) dans la matrice RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md2 /dev/sdb2
# mdadm: added /dev/sdb2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md4 /dev/sdb4
# mdadm: re-added /dev/sdb4
```

Utilisez la commande `cat /proc/mdstat` pour surveiller la reconstruction du RAID :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[0] sdb2[1]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/4 pages [16KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/1] [UU]
      [============>........]  recovery = 64.8% (822969856/1020767232) finish=7.2min speed=401664K/sec
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Pour plus de détails sur la ou les baies RAID :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md4

/dev/md4:
        Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 17:02:55 2023
             State : clean
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

 Rebuild Status : 21% complete

           UUID : 7f39d062:9f16a016:a4d2adc2:26fd5302
         Events : 0.95

    Number   Major   Minor   RaidDevice State
       0       8        2        0      spare rebuilding   /dev/sda4
       1       8       18        1      active sync   /dev/sdb4
```

<a name="swap-partition"></a>

#### Ajout du label à la partition SWAP (le cas échéant)

Une fois la reconstruction du RAID terminée, nous montons la partition contenant la racine de notre système d'exploitation sur `/mnt`. Dans notre exemple, cette partition est `md4`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md4 /mnt
```

Nous ajoutons le label à notre partition swap avec la commande :

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/sda4 -L swap-sda4
mkswap: /dev/sda4: warning: wiping old swap signature.
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

Ensuite, nous montons les répertoires suivants pour nous assurer que toute manipulation que nous faisons dans l'environnement chroot fonctionne correctement :

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

Ensuite, nous accédons à l'environnement `chroot` :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Nous récupérons les UUID des deux partitions swap :

```sh
root@rescue12-customer-eu:/# blkid -s UUID /dev/sda4
root@rescue12-customer-eu:/# blkid -s UUID /dev/sdb4
```

Exemple:

```sh
blkid /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
blkid /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Ensuite, nous remplaçons l'ancien UUID de la partition SWAP (**sdb4**) par le nouveau dans `/etc/fstab` :

```sh
root@rescue12-customer-eu:/# nano etc/fstab
```

Exemple:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /home   ext4    defaults       0       0
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Assurez-vous de remplacer l'UUID approprié. Dans notre exemple ci-dessus, l'UUID à remplacer est `d6af33cf-fc15-4060-a43c-cb3b5537f58a` par le nouveau `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Assurez-vous de remplacer le bon UUID.

Ensuite, nous nous assurons que tout est correctement monté :

```sh
root@rescue12-customer-eu:/# mount -av
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Activez la partition swap avec la commande suivante :

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/sda4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sda4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sda4
swapon: /dev/sdb4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sdb4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sdb4
```

Nous quittons l'environnement `chroot` avec exit et rechargeons le système :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Nous démontons tous les disques :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -R /mnt
```
///

Nous avons maintenant terminé avec succès la reconstruction du RAID sur le serveur et nous pouvons maintenant le redémarrer en mode normal.

## Aller plus loin

[Remplacement à chaud - RAID logiciel](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[API OVHcloud et Stockage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Gestion du RAID matériel](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Remplacement à chaud - RAID Matériel](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).