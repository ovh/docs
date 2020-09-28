---
title: 'Remplacer à chaud un disque sur un serveur en RAID logiciel'
slug: hotswap-raid-soft
excerpt: 'Découvrez les principales étapes pour remplacer à chaud un disque sur un serveur en RAID logiciel'
section: 'RAID & disques'
---

**Dernière mise à jour le 21/11/2016**

## Objectif

Si l'un des disques de votre serveur est hors d'usage, vous avez la possibilité de le remplacer à chaud si vous disposez d'un modèle Haut de gamme compatible.

**Découvrez les principales étapes pour remplacer à chaud un disque sur un serveur en RAID logiciel.**

## Prérequis

- Bénéficier d'un serveur mHG, HG ou BHG.
- Posséder un RAID logiciel (avec une carte LSI).
- Disposer d'un accès SSH (Linux) ou RDP (Windows).
- Avoir installé l'utilitaire « sas2ircu » (utilisez le moteur de recherche [Broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external} pour le trouver).

## En pratique

### Sous Linux

#### Étape 1 : identifier le disque concerné

Afin d'illustrer le propos de ce guide, nous partons du principe que nous avons reçu une alerte pour le disque `/dev/sdb`. Celui-ci est défectueux et nous souhaitons le remplacer à chaud. **Adaptez donc les éléments de cette documentation à votre situation.**

Débutez par tester et vérifier le « **Serial Number** » du disque concerné.

```sh
root@ns3054662:/home# smartctl -a /dev/sdb
>>> smartctl 6.4 2014-10-07 r4002 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)
>>> Copyright (C) 2002-14, Bruce Allen, Christian Franke, www.smartmontools.org

>>> === START OF INFORMATION SECTION ===
>>> Vendor:               HGST
>>> Product:              HUS726040ALS210
>>> Revision:             A907
>>> Compliance:           SPC-4
>>> User Capacity:        4,000,787,030,016 bytes [4.00 TB]
>>> Logical block size:   512 bytes
>>> LB provisioning type: unreported, LBPME=0, LBPRZ=0
>>> Rotation Rate:        7200 rpm
>>> Form Factor:          3.5 inches
>>> Logical Unit id:      0x5000cca25d3155bc
>>> Serial number:        K4GW439B
>>> Device type:          disk
>>> Transport protocol:   SAS (SPL-3)
>>> Local Time is:        Mon Nov 21 14:23:43 2016 CET
>>> SMART support is:     Available - device has SMART capability.
>>> SMART support is:     Enabled
>>> Temperature Warning:  Enabled

>>> === START OF READ SMART DATA SECTION ===
>>> SMART Health Status: OK

>>> Current Drive Temperature:     34 C
>>> Drive Trip Temperature:        85 C

>>> Manufactured in week 44 of year 2016
>>> Specified cycle count over device lifetime:  50000
>>> Accumulated start-stop cycles:  9
>>> Specified load-unload count over device lifetime:  600000
>>> Accumulated load-unload cycles:  14
>>> Elements in grown defect list: 0

>>> Vendor (Seagate) cache information
>>> Blocks sent to initiator = 2305525022720

>>> Error counter log:
>>>        Errors Corrected by           Total   Correction     Gigabytes    Total
>>>            ECC          rereads/    errors   algorithm      processed    uncorrected
>>>        fast | delayed   rewrites  corrected  invocations   [10^9 bytes]  errors
>>> read:          0        572         0       22548         77          4.725         5580
>>> write:         0        0         0         19548       196         17.344          2569

>>> Non-medium error count:        0

>>> SMART Self-test log
>>> Num  Test              Status                 segment  LifeTime  LBA_first_err [SK ASC ASQ]
>>>  Description                              number   (hours)
>>> # 1  Background short  Completed                   -       6                 - [-   -    -]
>>> # 2  Background short  Completed                   -       4                 - [-   -    -]
>>> # 3  Background short  Completed                   -       4                 - [-   -    -]
>>> # 4  Background short  Completed                   -       4                 - [-   -    -]
>>> # 5  Background short  Completed                   -       1                 - [-   -    -]

>>> Long (extended) Self Test duration: 34237 seconds [570.6 minutes]
```

Vous constatez ainsi que : 

- le disque « **SDB** » est effectivement hors d'usage du fait d'erreurs non corrigées (« uncorrected errors ») ;
- son « **Serial Number** » correspond bien à l'alerte reçue (via le datacenter ou tout autre outil de monitoring).

Pour obtenir uniquement le « **Serial Number** » :

```sh
root@ns3054662:/home# smartctl -a /dev/sdb | grep Serial
>>> Serial number:        K4GW439B
```

#### Étape 2 : récupérer la position du disque

Vous devez maintenant retrouver le « **Slot ID** » et l'« **Enclosure ID** » du disque concerné. Pour cela, utilisez l'outil « sas2ircu » préalablement installé sur le serveur.

Débutez alors par vérifier que les disques sont bien connectés via une carte LSI.

```sh
root@ns3054662:/home# lspci | grep -i LSI
>>> 81:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)
```

Si tel est le cas, déterminez l'ID de cette carte LSI.

```sh
root@ns3054662:/home# ./sas2ircu list
>>> LSI Corporation SAS2 IR Configuration Utility.
>>> Version 5.00.00.00 (2010.02.09)
>>> Copyright (c) 2009 LSI Corporation. All rights reserved.


>>>          Adapter      Vendor  Device                       SubSys  SubSys
>>>  Index    Type          ID      ID    Pci Address          Ven ID  Dev ID
>>>  -----  ------------  ------  ------  -----------------    ------  ------
>>>      0     SAS2004     1000h    70h   00h:81h:00h:00h      1000h   3010h
>>> SAS2IRCU: Utility Completed Successfully.
```

L'index correspond à l'ID. Ici, la carte a donc l'index/ID 0.

Avec cette information, récupérez à présent pour le disque concerné (via son « **Serial Number** ») : le « **Slot ID** » et l'« **Enclosure ID** ».

```sh
root@ns3054662:/home# ./sas2ircu 0 display | grep -B 7 -A 2 K4GW439B
>>> Device is a Hard disk
>>>   Enclosure                               : 1
>>>   Slot                                    : 3
>>>   State                                   : Available (AVL)
>>>   Manufacturer                            : HGST
>>>   Model Number                            : HUS726040ALS210
>>>   Firmware Revision                       : A907
>>>   Serial No                               : K4GW439B
>>>   Protocol                                : SAS
>>>   Drive Type                              : SAS_HDD
```

Cette commande permet d'obtenir les informations du disque, dont le « **Serial Number** » qui est ici le K4GW439B.

Dans notre exemple, nous avons donc récupéré l'« **Enclosure ID** » (correspondant à 1) et le « **Slot ID** » (correspondant à 3).

#### Étape 3 : allumer le disque

Muni des informations récupérées durant les étapes précédentes, allumez la LED du disque hors d'usage en vue de son remplacement avec la commande `./sas2ircu 0 locate EncID:SlotID on`. Personnalisez celle-ci selon votre situation, comme dans l'exemple ci-dessous :

```sh
root@ns3054662:/home# ./sas2ircu 0 locate 1:3 on
>>> LSI Corporation SAS2 IR Configuration Utility.
>>> Version 5.00.00.00 (2010.02.09)
>>> Copyright (c) 2009 LSI Corporation. All rights reserved.

>>> SAS2IRCU: LOCATE Command completed successfully.
>>> SAS2IRCU: Command LOCATE Completed Successfully.
>>> SAS2IRCU: Utility Completed Successfully.
```

Vous pouvez désactiver le clignotement du disque, en remplaçant « on » par « off » dans la commande.

#### Étape 4 : sortir le disque défectueux du RAID

Si ce n'est pas déjà le cas, passez le disque défectueux en « **»Faulty** ». Puis regardez l'état du RAID.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0] sdb2[1]
>>>       3885385728 blocks super 1.2 [2/2] [UU]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sdb1[1] sda1[0]
>>>       20971456 blocks [2/2] [UU]

>>> unused devices: <none>
```

Dans cet exemple, le disque défectueux fait partie de md1 et md2 (sdb1 et sdb2). Nous allons donc passer celui-ci en « **»Faulty** », respectivement sdb1 dans md1 et sdb2 dans md2.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --set-faulty /dev/sdb1
>>> mdadm: set /dev/sdb1 faulty in /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --set-faulty /dev/sdb2
>>> mdadm: set /dev/sdb2 faulty in /dev/md2
```

À l'issue de ces manipulations, vérifiez de nouveau l'état du RAID.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0] sdb2[1](F)
>>>       3885385728 blocks super 1.2 [2/1] [U_]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sdb1[2](F) sda1[0]
>>>       20971456 blocks [2/1] [U_]

>>> unused devices: <none>
```

Les sdb1 et sdb2 sont bien passés en faulty **(F)**. Vous pouvez à présent sortir le disque du RAID.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --remove /dev/sdb1
>>> mdadm: hot removed /dev/sdb1 from /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --remove /dev/sdb2
>>> mdadm: hot removed /dev/sdb2 from /dev/md2
```

Vérifiez enfin que le disque n'est plus présent.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0]
>>>       3885385728 blocks super 1.2 [2/1] [U_]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sda1[0]
>>>       20971456 blocks [2/1] [U_]

>>> unused devices: <none>
```

Le disque défectueux est désormais prêt à être remplacé par un technicien en datacenter. Une fois l'opération effectuée, vous n'aurez plus qu'à resynchroniser le RAID. Pour cela, aidez-vous de la documentation suivante : [RAID logiciel](../raid-soft/){.external}.

### Sous Windows

#### Étape 1 : identifier le disque

Afin d'illustrer le propos de ce guide, nous partons du principe que nous avons reçu une alerte pour le disque `/dev/sdb`. Celui-ci est défectueux et nous souhaitons le remplacer à chaud. **Adaptez donc les éléments de cette documentation à votre situation.**

> [!primary]
>
> Il est important de lancer le terminal de commande en tant qu'administrateur, afin de ne pas obtenir d'erreur.
> 

Débutez par tester et vérifier le « **Serial Number** » du disque concerné. **Dans la capture ci-dessous, le stockage n'est pas réellement hors d'usage mais nous ferons comme si c'était le cas.**

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}

Vous constatez ainsi que : 

- le disque « **SDB** » est effectivement hors d'usage du fait d'erreurs non corrigées (« uncorrected errors ») ;
- son « **Serial Number** » correspond bien à l'alerte reçue (via le datacenter ou tout autre outil de monitoring).

#### Étape 2 : récupérer la position du disque

Vous devez maintenant retrouver le « **Slot ID** » et l'« **Enclosure ID** » du disque concerné. Pour cela, utilisez l'outil « sas2ircu » préalablement installé sur le serveur.

Débutez par déterminer l'ID de cette carte LSI.

![id_lsi_windows](images/id_lsi_windows.png){.thumbnail}

Notre carte LSI a donc l'index/ID « 0 ».

Avec cette information, récupérez à présent pour le disque concerné (via son « **Serial Number** ») : le « **Slot ID** » et l'« **Enclosure ID** ».

![select-string](images/select-string.png){.thumbnail}

Cette commande permet d'obtenir les informations du disque, dont le « **Serial Number** » qui est ici le K4G187WB.

Dans notre exemple, nous avons donc récupéré l'« **Enclosure ID** » (correspondant à 1) et le « **Slot ID** » (correspondant à 1).

#### Étape 3 : allumer le disque

Muni des informations récupérées durant les étapes précédentes, allumez la LED du disque hors d'usage en vue de son remplacement avec la commande `.\sas2ircu 0 locate EncID:SlotID on`. Personnalisez celle-ci selon votre situation, comme dans l'exemple ci-dessous :

![locate](images/locate.png){.thumbnail}

Vous pouvez désactiver le clignotement du disque, en remplaçant « on » par « off » dans la commande.

#### Étape 4 : sortir le disque défectueux du RAID

Réalisez cette manipulation depuis l'interface « **Gestion des disques** » de votre serveur Windows.

Le disque défectueux est désormais prêt à être remplacé par un technicien en datacenter. Une fois l'opération effectuée, vous n'aurez plus qu'à resynchroniser le RAID. Pour cela, aidez-vous de la documentation suivante : [RAID logiciel](../raid-soft/){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.