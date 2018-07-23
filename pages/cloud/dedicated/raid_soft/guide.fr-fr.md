---
title: RAID Logiciel
slug: raid-soft
excerpt: Decouvrez ici comment verifier l’etat de votre RAID, et comment le reconstruire apres le remplacement d’un disque.
section: RAID & disques
---


## Prérequis
- Avoir un serveur en Raid Logiciel.
- Avoir un serveur sous un système Linux ou Windows.


## Etat d'un Raid - Linux

### Étape 1 &#58; Verification

La vérification du Raid s'effectue via la commande suivante :

```sh
cat /proc/mdstat
```

#### Cas d'un Raid synchronise &#58;

```sh
cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md1 : active raid1 sda1[0] 
sdb1[1] 51198912 blocks [2/2] [UU]
md2 : active raid1 sda2[0]
sdb2[1] 921462720 blocks [2/2] [UU]
```

#### Cas d'un Raid desynchronise &#58;

```sh
cat /proc/mdstat 
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md2 : active raid1 sdc2[2] sdd2[3] sda2[0] sdb2[1] sde2[4] 20478912 blocks [7/5] [UUUUU__] 
md3 : inactive sda30 sdf35 sde34 sdd33 sdc32 sdb31 23316061824 blocks
```

Si toutes les unités ne sont pas intégrées au Raid, il faut vérifier les disques.

S'ils sont défectueux, il faut :

- Effectuer la sauvegarde de vos données.
- Contacter le support pour organiser le(s) remplacement(s) de disques.

S'ils sont sains, une resynchronisation du Raid est recommandée.


### Étape 2 &#58; Pour aller plus loin

#### Examiner les partitions

Pour cela, vous pouvez utiliser la commande `mdadm --examine /dev/sdaX`:

```sh
mdadm --examine /dev/sda5 /dev/sda5:  

Magic : a92b4efc         Version : 0.90.00
UUID : 65889d2a:11172e42:a4d2adc2:26fd5302
Creation Time : Thu Jul 12 20:22:48 2012   
Raid Level : raid5
Used Dev Size : 1924838272 (1835.67 GiB 1971.03 GB)
Array Size : 5774514816 (5507.01 GiB 5913.10 GB)
Raid Devices : 4
Total Devices : 4
Preferred Minor : 5 

Update Time : Wed Feb 25 16:51:49 2015
State : active
Active Devices : 4
Working Devices : 4
Failed Devices : 0
Spare Devices : 0
Checksum : 36669dd - correct
Events : 2266211

Layout : left-symmetric
Chunk Size : 64K

 Number   Major   Minor   RaidDevice  State 
   0       8        5        0        active sync   /dev/sda5
   1       1        8        1        active sync   /dev/sdb5
   2       2        8        2        active sync   /dev/sdc5
   3       3        8        3        active sync   /dev/sdd2
```


#### Stopper une partition

Pour cela, vous pouvez utiliser la commande `mdadm --stop /dev/mdX`:

```sh
mdadm --stop /dev/md126 mdadm: stopped /dev/md126 
```


#### Assembler le RAID dans une partition différente

Exemple : Mettre le contenu de sdb1 dans md1 et md2

```sh
mdadm --assemble /dev/md1 /dev/sdb1 
mdadm: /dev/md1 has been started with 1 drive (out of 2).
```

```sh
cat /proc/mdstat 
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md1 : active raid1 sdb1[1] 10485696 blocks [2/1] [_U] 
```

```sh
mdadm --assemble /dev/md2 /dev/sdb2 
mdadm: /dev/md2 has been started with 1 drive (out of 2).
```

```sh
cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md2 : active raid1 sdb2[1] 1942498240 blocks [2/1] [_U]
md1 : active raid1 sdb1[1] 10485696 blocks [2/1] [_U]
```

## Etat d'un Raid - Windows

Sous Windows 2012, pour vérifier l'état d'un RAID, il faut :

- Ouvrir une connexion RDP.
- Aller dans la section Tools et sélectionner dans la liste déroulante l'outil Computer Management.

![computer_management](images/computer_management.png){.thumbnail}

Une nouvelle icône apparaît dans la barre de tâche, cliquer dessus.


![ouvrir_computer_manager](images/ouvrir_computer_manager.png){.thumbnail}

Sélectionnez la partie storage puis Disk management.


![disk_management_panel](images/disk_management_panel.png){.thumbnail}

Les deux disques Disk 0 et Disk 1 sont en mirroring (Raid 1) dans le volume C.


## Resynchroniser un Raid - Linux


> [!warning]
>
> Avant de resynchroniser un Raid, vérifiez l'état de vos disques.
> 


### Étape 1 &#58; Determiner le nouveau disque

Il faut lister les partitions avec la commande `fdisk -l` afin de localiser le disque vierge.

Le message suivant sera affiché pour le nouveau disque :

```sh
fdisk -l
The /dev/sdX disk does not contain a valid partition table 
```

Exemple :

```sh
fdisk -l

Disk /dev/sda: 1500.3 GB, 1500301910016 bytes 255 heads, 63 sectors/track, 182401 cylinders, total 2930277168 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00067fad      
Device Boot      Start         End         Blocks          Id  System 
/dev/sda1 *      4096       40962048     20478976+    fd  Linux raid autodetect 
/dev/sda2      40962049     2929221632   1444129792   fd  Linux raid autodetect 
/dev/sda3      2929221633   2930268160    523264      82     Linux swap / Solaris   

>>> Disk /dev/sdb: 2000.4 GB, 2000398934016 bytes 255 heads, 63 sectors/track, 243201 cylinders, total 3907029168 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00000000   
>> Disk /dev/sdb doesnt contain a valid partition table

>>> Disk /dev/md2: 1478.8 GB, 1478788841472 bytes 2 heads, 4 sectors/track, 361032432 cylinders, total 2888259456 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00000000   
>> Disk /dev/md2 doesnt contain a valid partition table

>>> Disk /dev/md1: 21.0 GB, 20970405888 bytes 2 heads, 4 sectors/track, 5119728 cylinders, total 40957824 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00000000  
```

Ici, le disque encore vierge est le disque sdb.


### Étape 2 &#58; Replication des partitions

> [!warning]
>
> Cette étape est irréversible. Il faut respecter scrupuleusement les sens de réplication au risque de tout effacer.
> 

La procédure diffère selon les tables de partitionnement :

- MBR (Master Boot Record), il faudra utiliser sfdisk.
- GPT (GUID Partition Table), il faudra utiliser sgdisk.


#### Comment les determiner ?

Si lors de la commande `fdisk -l` vous rencontrez le message ci dessous, cela signifie que la table est en GTP. Sinon, elle est en MBR.

```sh
WARNING: GPT (GUID Partition Table) detected on /dev/sda! The util fdisk doesnt support GPT. Use GNU Parted. Passez à étape *Disque en GPT* sinon passez à l étape *Disque en MBR*. 
```

#### En MBR &#58;

Dans le cas du changement du SDA :

```sh
sfdisk -d /dev/sdb | sfdisk /dev/sda 
```

Dans le cas du changement du SDB :

```sh
sfdisk -d /dev/sda | sfdisk /dev/sdb 
```

Il peut arriver qu'il faille forcer la réplication : *sfdisk: ERROR: sector 0 does not have an msdos signature* Dans ce cas, il vous faut ajouter à la commande précédente `--force` :

Dans le cas du changement du SDA :

```sh
fdisk -d /dev/sdb | sfdisk --force /dev/sda 
```

Dans le cas du changement du SDB :

```sh
sfdisk -d /dev
```


#### En GPT &#58;

Dans le cas du changement du SDA :

```sh
sgdisk -R=/dev/sda /dev/sdb 
```

Dans le cas du changement du SDB :

```sh
sgdisk -R=/dev/sdb /dev/sda 
```

En poursuivant l'exemple précédent, les partitions sont en MBR, il faut utiliser `sfdisk`.

```sh
sfdisk -d /dev/sda | sfdisk /dev/sdb C
Checking that no-one is using this disk right now ... OK 
Disk /dev/sdb: 243201 cylinders, 255 heads, 63 sectors/track   sfdisk: ERROR: sector 0 does not have an msdos signature /dev/sdb: unrecognized partition table type Old situation: No partitions found New situation: Units = sectors of 512 bytes, counting from 0 Device Boot    Start       End   sectors  Id  
System/dev/sdb1     4096  40962048   40957953  fd  Linux raid autodetect 
/dev/sdb2      40962049 2929221632 2888259584  fd  Linux raid autodetect 
/dev/sdb3     2929221633 2930268160    1046528  82  Linux swap / Solaris 
/dev/sdb4            0         -          0   0  

Empty Warning: partition 1 does not end at a cylinder boundary 
Warning: partition 2 does not start at a cylinder boundary 
Warning: partition 2 does not end at a cylinder boundary 
Warning: partition 3 does not start at a cylinder boundary 
Warning: partition 3 does not end at a cylinder boundary 
Successfully wrote the new partition table   Re-reading the partition table ...  
If you created or changed a DOS partition, /dev/foo7, say, then use dd(1) to zero the first 512 bytes:  dd if=/dev/zero of=/dev/foo7 bs=512 count=1 (See fdisk(8).) 
```

Les tables de partition sont alors répliquées.

Pour vérifier :

```sh
fdisk -l
>>> Disk /dev/sda: 1500.3 GB, 1500301910016 bytes 255 heads, 63 sectors/track, 182401 cylinders, total 2930277168 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00067fad      
Device Boot      Start        End        Blocks     Id  System 
/dev/sda1        4096      40962048    20478976+    fd  Linux raid autodetect 
/dev/sda2      40962049   2929221632   1444129792   fd  Linux raid autodetect 
/dev/sda3     2929221633  2930268160    523264   82  Linux swap / Solaris   

>>> Disk /dev/sdb:      2000.4 GB, 2000398934016 bytes 255 heads, 63 sectors/track, 243201 cylinders, total 3907029168 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00000000   

Device Boot      Start         End      Blocks   Id  System 
/dev/sdb1   *        4096    40962048    20478976+  fd  Linux raid autodetect /dev/sdb2        40962049  2929221632  1444129792   fd  Linux raid autodetect /dev/sdb3      2929221633  2930268160      523264   82  Linux swap / Solaris   
Disk /dev/md2: 1478.8 GB, 1478788841472 bytes 2 heads, 4 sectors/track, 361032432 cylinders, total 2888259456 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal)512 bytes / 512 bytes Disk identifier: 0x00000000   
Disk /dev/md2 doesnt contain a valid partition table   
 
Disk /dev/md1: 21.0 GB, 20970405888 bytes 2 heads, 4 sectors/track, 5119728 cylinders, total 40957824 sectors Units = sectors of 1 * 512 = 512 bytes Sector size (logical/physical): 512 bytes / 512 bytes I/O size (minimum/optimal): 512 bytes / 512 bytes Disk identifier: 0x00000000   
Disk /dev/md1 doesnt contain a valid partition table
```

### Étape 3 &#58; Resynchronisation

> [!primary]
>
> `mdadm` doit être installé.
> 

Dans l'exemple ci-dessous, on peut constater que le RAID est dégradé.

```sh
cat /proc/mdstat 
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md1 : active raid1 sda1[0] 20478912 blocks [2/1] [U_]
md2 : active raid1 sda2[0] 1444129728 blocks [2/1] [U_]
```

Il manque sdb1 dans md1 et sdb2 dans md2.

Il faut les ajouter dans md1 et md2 comme suit :

```sh
mdadm /dev/md1 --manage --add /dev/sdb1
mdadm: added /dev/sdb1
mdadm /dev/md2 --manage --add /dev/sdb2
mdadm: added /dev/sdb2 
```

La reconstruction est en cours.

```sh
cat /proc/mdstat Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md1 : active raid1 sdb1[2] sda1[0] 20478912 blocks [2/1] [U_] [=>...................] recovery = 5.0% (1039872/20478912) finish=4.6min speed=69324K/sec   
md2 : active raid1 sdb2[2] sda2[0] 1444129728 blocks [2/1] [U_] resync=DELAYED 
```

Sur md2, la resychronisation est en DELAYED. Cela signifie qu'elle est en attente.

La resynchronisation de cette partition aura lieu une fois que md1 sera remontée.


### Étape 4 &#58; La SWAP

Il faut maintenant rajouter la swap au disque que vous venez de formater et la rajouter au RAID.

```sh
mkswap /dev/sdb3 
```

Si la resynchronisation a eu lieu sur le disque, il faudra activer la swap. En rescue, cela n'est pas nécessaire, ça se fera automatiquement au démarrage.

```sh
swapon -a 
```

Pour vérifier que toute la zone de swap est activée, il faut utiliser la commande free.


## Resynchroniser un Raid - Windows


> [!warning]
>
> Avant de resynchroniser un Raid, vérifiez l'état de vos disques.
> 


### Sur disque en RDP

Pour resynchroniser le RAID, il faut :

- Ouvrir une connexion au bureau à distance.
- Accéder au `Disk Management`{.action}.

> [!primary]
>
> Si un disque du Raid est Offline, effectuer un clic droit sur le disque, puis cliquer sur Online pour le remettre dans le RAID.
> 

- Cliquer droit sur le disque principal, et sélectionner `Add mirror`{.action}.


![resynchroniser_raid_soft](images/resynchroniser_raid_soft.png){.thumbnail}

- Sélectionner le disque à mettre en miroir.


![add_mirroir](images/add_mirroir.png){.thumbnail}

- Confirmer en cliquant sur `Add mirror`{.action}.



> [!primary]
>
> Si ce n'est pas déjà le cas, le disque à remettre dans le RAID sera automatiquement mis en dynamic avant la resynchronisation.
> 

La resynchronisation est alors en cours.


![resync_en_cours](images/resync_en_cours.png){.thumbnail}