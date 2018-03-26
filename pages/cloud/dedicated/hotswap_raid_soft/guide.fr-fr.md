---
title: Remplacement à chaud - Raid Logiciel
slug: hotswap-raid-soft
excerpt: Retrouvez ici les principales étapes à suivre pour permettre le remplacement d’un disque à chaud sur un serveur en Raid Logiciel.
section: RAID & disques
---


## Prérequis
Le remplacement à chaud n'est possible que sur les gammes de serveur mHG, HG, et bHG.

Pour réaliser les différentes étapes de ce guide, il faut :

- Disposer d'un serveur mHG, HG, ou bHG.
- Avoir un serveur en RAID Logiciel (avec une carte LSI).
- Disposer d'un accès SSH (Linux) ou RDP (Windows).
- L'utilitaire sas2ircu doit être installé au préalable. (disponible via le moteur de recherche [broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external})


## Sous Linux
Dans ce guide, nous allons partir du principe que vous avez reçu une alerte pour le disque /dev/sdb, Serial Number **K4GW439B**, qui est défectueux et que vous voulez remplacer à chaud.

Pour cela, nous allons avoir besoin de l'**Enclosure ID**, le **Slot ID**, et le **Serial Number** du disque à remplacer.


### Étape 1 &#58; Identifier le disque
Nous avons été averti que notre disque SDB est HS, nous allons alors le tester et vérifier son **Serial Number**.

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


Ou plus simplement :

```sh
root@ns3054662:/home# smartctl -a /dev/sdb | grep Serial
>>> Serial number:        K4GW439B
```

On constate donc que notre disque SDB est effectivement HS (uncorrected errors dans notre cas), et que son Serial Number correspond bien à l'alerte reçue (via le Datacentre ou tout autre outil de monitoring).

Nous pouvons donc passer à l'étape suivante qui consiste à récupérer les informations **Enclosure ID** et **Slot ID** du disque à remplacer.


### Étape 2 : Récupérer la position du disque
Nous allons récupérer le **Slot ID** et l'**Enclosure ID** de notre disque SDB HS, pour cela nous allons avoir besoin de l'outil sas2ircu d'installé sur le serveur.

Avant tout, on vérifie que les disques sont bien connectés via une LSI.

```sh
root@ns3054662:/home# lspci | grep -i LSI
>>> 81:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)
```

On constate que nous possédons bien une carte LSI.

Nous devons maintenant déterminer l'ID de cette carte LSI.

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

L'index correspond à l'ID, notre carte a donc l'index/ID 0.

Avec cette information, on peut désormais récupérer le **Slot ID** et l'**Enclosure ID** de notre disque SDB, **Serial Number** K4GW439B.

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

Avec cette commande on récupère directement les informations de notre disque SDB.

Bien sur, on remplacera **K4GW439B** par le Serial Number du disque à remplacer, et **0** par l'ID de la carte RAID concernée.

Pour notre exemple, le disque a donc l'**Enclosure ID** 1, et le **Slot ID** 3.


### Étape 3 : Allumer un disque
Avec les informations récupérées aux étapes précédentes, nous pouvons allumer la LED du disque HS en vue du remplacement avec la commande : ./sas2ircu 0 locate EncID:SlotID on

```sh
root@ns3054662:/home# ./sas2ircu 0 locate 1:3 on
>>> LSI Corporation SAS2 IR Configuration Utility.
>>> Version 5.00.00.00 (2010.02.09)
>>> Copyright (c) 2009 LSI Corporation. All rights reserved.

>>> SAS2IRCU: LOCATE Command completed successfully.
>>> SAS2IRCU: Command LOCATE Completed Successfully.
>>> SAS2IRCU: Utility Completed Successfully.
```

Dans cet exemple, nous avons donc repris les informations vus précédemment où 1 est l'Enclosure ID, 3 le Slot ID, et 0 l'Index de la carte RAID.

Vous pouvez éteindre le clignotement du disque en remplacant "on" par "off" dans la commande.

Il reste maintenant à passer à la dernière étape qui consiste à sortir le disque défectueux du Raid Soft avant l'intervention.


### Étape 4 : Sortir le disque du RAID
Avant de sortir le disque défectueux du RAID, nous devons le passer en Faulty si ce n'est pas déjà le cas (toujours le disque SDB à remplacer dans notre exemple).

On va regarder dans un premier temps l'état des RAID.

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

On voit que notre disque SDB HS fait parti de md1 et md2 (sdb1 et sdb2).

Nous allons désormais passer le disque en Faulty (respectivement sdb1 dans md1, et sdb2 dans md2).

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --set-faulty /dev/sdb1
>>> mdadm: set /dev/sdb1 faulty in /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --set-faulty /dev/sdb2
>>> mdadm: set /dev/sdb2 faulty in /dev/md2
```
On vérifie à nouveau l'état des RAID.

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

Les sdb1 et sdb2 sont bien passés en faulty (F).

On peut donc maintenant sortir le disque des RAID.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --remove /dev/sdb1
>>> mdadm: hot removed /dev/sdb1 from /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --remove /dev/sdb2
>>> mdadm: hot removed /dev/sdb2 from /dev/md2
```

Puis on vérifie une dernière fois que le disque n'est plus présent.

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

Nous sommes désormais prêt à faire remplacer le disque défectueux par un technicien en Datacentre.

Comme nous avons bien préparé l'intervention, le nouveau disque prendra comme Nom SDB, et il restera plus qu'à [resynchroniser le RAID](../guide.fr-fr.md){.ref}.


## Sous Windows
Le guide sous Windows sera semblable, dans l'ensemble, au guide de remplacement pour Linux. En effet, nous allons utiliser le même utilitaire : sas2ircu, et les commandes sont les mêmes que sous Linux.



> [!primary]
>
> Il sera important de lancer le terminal de commande en tant qu'administrateur pour ne pas avoir d'erreur.
> 

Dans ce guide, nous allons partir du principe que vous avez reçu une alerte pour le disque /dev/sdb, Serial Number **K4G187WB**, qui est défectueux et que vous voulez remplacer à chaud.

Pour cela, nous allons avoir besoin de l'**Enclosure ID**, le **Slot ID**, et le **Serial Number** du disque à remplacer.


### Étape 1 : Identifier le disque
Nous avons été averti que notre disque SDB est HS. Nous allons donc tester le disque et vérifier son **Serial Number**.


![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


> [!warning]
>
> Le disque utilisé pour notre guide n'est pas réellement HS, mais nous ferons comme ci c'était le cas :)
> 

On constate donc que le Serial Number du disque correspond bien à l'alerte reçue (via le Datacentre ou tout autre outil de monitoring).

Nous pouvons donc passer à l'étape suivant qui consiste à récuéprer les informations **Enclosure ID**, et **Slot ID** du disque à remplacer.


### Étape 2 : Récupérer la position du disque
Nous allons maintenant récupérer le **Slot ID** et l'**Enclosure ID** de notre disque SDB HS. Pour cela, nous allons avoir besoin de l'outils sas2ircu d'installé sur le serveur.

On va dans un premier temps déterminer l'ID de la carte RAID LSI présente dans le serveur.


![id_lsi_windows](images/id_lsi_windows.png){.thumbnail}

On a donc notre carte LSI qui a pour index/ID "0".

Avec cette information, on peut désormais récupérer le **Slot ID** et l'**Enclosure ID** de notre SDB, **Serial Number** K4G187WB.



> [!primary]
>
> Le Serial Number K4G187WB sera bien entendu à remplacer par le vôtre.
> 


![select-string](images/select-string.png){.thumbnail}

Vous pouvez aussi chercher les informations en listant les disques d'une façon plus générale.


![0display1](images/0display1.png){.thumbnail}


![0display2](images/0display2.png){.thumbnail}

On constate donc que notre disque **Serial Number** K4G187WB a pour **Enclosure ID** 1, et pour **Slot ID** 1 (2ème disque de la liste dans le cas présent).


### Étape 3 : Allumer le disque
Avec les informations récupérées aux étapes précédentes, nous pouvons allumer la LED du disque HS en vue du remplacement avec la commande suivante : .\sas2ircu.exe ID locate EncID:SlotID on


![locate](images/locate.png){.thumbnail}



> [!primary]
>
> Vous pouvez éteindre le clignotement du disque une fois celui ci remplacé en utilisant "off" à la place de "on" dans la commande précédente.
> 

Il reste maintenant à passer à la dernière étape, sortir le disque du RAID Soft avant intervention.


### Étape 4 : Sortir le disque du RAID
A venir...