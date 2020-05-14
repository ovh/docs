---
title: 'Gestion du RAID matériel'
slug: raid-hard
excerpt: 'Apprenez à vérifier l''état de votre RAID et de vos disques durs'
section: 'RAID & disques'
---

**Dernière mise à jour le 01/04/2020**

## Objectif

Sur un serveur disposant d'une configuration RAID matériel, la matrice RAID est gérée par un composant physique appelé contrôleur RAID.

**Ce guide vous montre comment vérifier l'état de votre RAID et de vos disques durs.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/t_BL_uOXQVA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external} avec une configuration RAID matériel.
- Avoir accès à votre serveur via SSH en tant qu'administrateur (root).

> [!warning]
>
> Il est risqué de manipuler les commandes `MegaCli` et `lsiutil` si vous ne possédez pas les compétences adéquates. Vous risquez en effet de perdre vos données. Nous vous conseillons d'effectuer une sauvegarde avant de réaliser la moindre action.
> 

## En pratique

### Utiliser le contrôleur RAID MegaRAID

#### Étape 1 : récupérer les informations du RAID

Avant tout, vérifiez que vous disposez d'un contrôleur MegaRAID :

```sh
lspci | grep -i lsi | grep -i megaraid
03:00.0 RAID bus controller: LSI Logic / Symbios Logic MegaRAID SAS 2108 [Liberator] (rev 05)
```

Le résultat obtenu ci-dessus vous confirme que le serveur dispose d'un contrôleur MegaRAID installé.

Pour rassembler et lister les ensembles RAID disponibles, vous pouvez utiliser la commande `MegaCli` :

```sh
MegaCli -LDInfo -Lall -aALL (Or : storcli /c0 /vall show)
Adapter 0 - Virtual Drive Information:
Virtual Drive: 0 (Target Id: 0)
Name :
RAID Level : Primary-1, Secondary-0, RAID Level Qualifier-0
Size : 36.321 GB
Sector Size : 512
Mirror Data : 36.321 GB
State : Optimal
Strip Size : 64 KB
Number Of Drives : 2
Span Depth : 1
Default Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
Current Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy : Disk's Default
Encryption Type : None
Bad Blocks Exist: Non
Is VD Cached: Non

Virtual Drive: 1 (Target Id: 1)
Name :
RAID Level : Primary-1, Secondary-0, RAID Level Qualifier-0
Size : 2.727 TB
Sector Size : 512
Mirror Data : 2.727 TB
State : Optimal
Strip Size : 64 KB
Number Of Drives : 2
Span Depth : 1
Default Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
Current Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
Default Access Policy: Read/Write
Current Access Policy: Read/Write
Disk Cache Policy : Disk's Default
Encryption Type : None
Bad Blocks Exist: Non
Is VD Cached: Oui
Cache Cade Type : Read Only

Exit Code: 0x00
```

Vous pouvez voir ci-dessus deux disques virtuels composés de deux disques durs physiques, soit un total de quatre disques physiques. Dans ce cas, le statut du RAID montre qu’il est « optimal », ce qui signifie que le RAID fonctionne correctement.

Si l'état du RAID est « dégradé », nous vous recommandons de vérifier également l'état du disque dur.

#### Étape 2 : déterminer l'état du disque

En premier lieu, listez les `device Id` pour chaque disque dur afin de bien les tester avec l’outil Smarmontools :

```sh
MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g' (Or : storcli /c0 /eall /sall show)
 
Slot Number: 0
Device Id: 4
Raw Size: 279.460 GB [0x22eec130 Sectors]
Firmware state: Online, Spun Up
Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355
 
Slot Number: 1
Device Id: 5
Raw Size: 279.460 GB [0x22eec130 Sectors]
Firmware state: Online, Spun Up
Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355
 
Slot Number: 2
Device Id: 7
Raw Size: 2.728 TB [0x15d50a3b0 Sectors]
Firmware state: Online, Spun Up
Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70
 
Slot Number: 3
Device Id: 6
Raw Size: 2.728 TB [0x15d50a3b0 Sectors]
Firmware state: Online, Spun Up
Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70
```

Avec la commande `smartctl` de l’outil Smartmontools, vous pouvez tester chaque disque dur comme indiqué ci-dessous :

```sh
smartctl -d megaraid,N -a /dev/sdX
```

Dans cet exemple, `/dev/sda` est le premier RAID et `/dev/sdb` est le second.

Dans certaines situations, vous pouvez recevoir ce résultat :

```
 /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
 ```
 Vous devez alors remplacer `megaraid` par `sat+megaraid` comme suit :
 
 ```
 smartctl -d sat+megaraid,N -a /dev/sdX
 ```

> [!warning]
>
> Si l'un de vos disques durs affiche des erreurs SMART, vous devez effectuer une sauvegarde complète de vos données dès que possible et contacter notre équipe Support. Votre interlocuteur aura besoin du slot number et du device ID afin d'identifier le disque défectueux.
> 

#### Étape 3 : vérifier l'état du contrôleur RAID

Pour vous assurer que votre contrôleur RAID fonctionne correctement, vous pouvez lister toutes les informations avec la commande suivante :
```sh
MegaCli -AdpAllInfo -aALL
```

La partie la plus importante de la sortie est le compteur d'erreurs :

```
Compteur d'erreurs
                ================
Erreurs corrigeables de mémoire : 0
Erreurs de mémoire non corrigeables : 0
```
Si le nombre d'erreurs est supérieur à zéro, créez une sauvegarde de vos données et contactez le support avec la sortie complète. Notre équipe programmera ensuite une intervention pour le remplacement du contrôleur RAID.

Pour une sortie succincte des compteurs d'erreurs seulement, la commande peut être étendue par un `grep` :

```sh
MegaCli -AdpAllInfo -aALL | grep "Errors"
Erreurs corrigeables de mémoire : 0
Erreurs de mémoire non corrigeables : 0
```

#### Étape 4 : resynchronisation du RAID

Si un ou plusieurs disques durs ont été remplacés, le RAID se synchronisera automatiquement. Vous pouvez utiliser la commande ci-dessous pour voir quel disque dur est en cours de reconstruction :

```sh
MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g' (Or : storcli /c0 /eall /sall show)
 
Slot Number: 0
Device Id: 4
Raw Size: 279.460 GB [0x22eec130 Sectors]
Firmware state: Online, Spun Up
Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355
 
Slot Number: 1
Device Id: 5
Raw Size: 279.460 GB [0x22eec130 Sectors]
Firmware state: Online, Spun Up
Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355
 
Slot Number: 2
Device Id: 7
Raw Size: 2.728 TB [0x15d50a3b0 Sectors]
Firmware state: Online, Spun Up
Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70
 
Slot Number: 3
Device Id: 6
Raw Size: 2.728 TB [0x15d50a3b0 Sectors]
Firmware state: Rebuild
Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70 
```

Pour voir la progression de la reconstruction d’un disque, vous pouvez utiliser la commande suivante :

```sh
MegaCli -PDRbld -ShowProg -PhysDrv [EncID:SlotID] -aALL (Or : storcli /c0/eEncID/sSlotID show rebuild)
```

La commande récupérera l’enclosure ID et le slot ID, comme indiqué ci-dessus.


#### Étape 5a : utilisation de CacheCade

> [!primary]
>
> Le CacheCade est un module conçu par LSI pour améliorer les performances en lecture aléatoire des disques durs en utilisant un disque SSD comme périphérique frontal de cache.
> 

Pour vérifier la configuration de CacheCade, utilisez les commandes suivantes :

```sh
MegaCli -CfgCacheCadeDsply -a0 (Or : storcli /c0 /dall show cachecade)
```

Pour voir quel RAID est associé au CacheCade :

```sh
MegaCli -CfgCacheCadeDsply -a0 | grep "Associated LDs"
```

#### Étape 5b : vérification de l'état de l'unité de batterie de secours

Pour recevoir la liste complète des paramètres d'état du BBU, utilisez cette commande :
```sh
MegaCli -AdpBbuCmd -aALL
```
La valeur la plus importante à vérifier est l'état de la batterie, s'assurer que celui-ci est optimal. S'il existe des indicateurs d'une batterie défaillante, créez une sauvegarde de vos données et fournissez la sortie de cette commande lors de la création de votre ticket support.

### Utiliser le contrôleur RAID LSI

#### Étape 1 : récupérer les informations RAID

Avant tout, vérifiez que vous êtes en possession d'un contrôleur RAID de type LSI en tapant la commande suivante :

```sh
lspci | grep -i lsi | grep -v megaraid
01:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)
```

Cela confirme la présence d'un contrôleur RAID LSI.

> [!primary]
>
> La commande `grep -v megaraid` sert à retirer le paramètre `MegaRAID` du résultat de la commande `lspci` car les cartes MegaRAID sont aussi fabriquées par LSI Corporation.
> 

Pour rassembler et lister les ensembles RAID disponibles, vous pouvez utiliser la commande `lsiutil` :

> [!primary]
>
> Attention, les valeurs (1,0 21) peuvent être différentes selon les versions. Soyez vigilant lorsque vous manipulez ce type de commande.
> 

```sh
lsiutil -p1 -a 1,0 21
 
LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)
 
1 MPT Port found
 
     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC
 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0
 
RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 1
 
Volume 0 is DevHandle 011e, Bus 1 Target 0, Type RAID1 (Mirroring)
  Volume Name:
  Volume WWID:  0aaf504551c8efe5
  Volume State:  optimal, enabled, background init complete
  Volume Settings:  write caching disabled, auto configure hot swap enabled
  Volume draws from Hot Spare Pools:  0
  Volume Size 1906394 MB, 2 Members
  Primary is PhysDisk 1 (DevHandle 0009, Bus 0 Target 0)
  Secondary is PhysDisk 0 (DevHandle 000a, Bus 0 Target 1)
 
RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0
```

Dans l'exemple ci-dessus, nous pouvons voir un disque virtuel, composé de deux disques durs physiques. Dans ce cas, le statut du RAID montre qu’il est « optimal », ce qui signifie que le RAID fonctionne correctement.

Si l'état du RAID est « dégradé », nous vous recommandons de vérifier également l'état du disque dur.

> [!primary]
>
> Dans le cas d'un serveur nouvellement provisionné, le message suivant peut s'afficher: « [In Progress:  data scrub] ». Ce message n'est pas une erreur. Il s'agit plutôt d'un processus automatisé généré par le micrologiciel du contrôleur afin de réduire autant que possible les erreurs non corrigibles.
> 

#### Étape 2 : déterminer l'état du disque

Pour vérifier l’état des disques à partir du contrôleur RAID, vous pouvez utiliser la commande suivante :

```sh
lsiutil -p1 -a 2,0 21
 
LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)
 
1 MPT Port found
 
     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC
 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0
 
RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 2

PhysDisk 0 is DevHandle 000a, Bus 0 Target 1
  PhysDisk State:  optimal
  PhysDisk Size 1906394 MB, Inquiry Data:  ATA      HGST HUS724020AL AA70
  Path 0 is DevHandle 000a, Bus 0 Target 1, online, primary
  Path 1 is DevHandle 000a, invalid

PhysDisk 1 is DevHandle 0009, Bus 0 Target 0
  PhysDisk State:  optimal
  PhysDisk Size 1906394 MB, Inquiry Data:  ATA      HGST HUS724020AL AA70
  Path 0 is DevHandle 0009, Bus 0 Target 0, online, primary
  Path 1 is DevHandle 0009, invalid

RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0
```

Dans ce cas, les deux disques s'affichent comme « optimal ».

Comme le contrôleur LSI utilise `sg-map`, nous devons tester le fichier `/dev/sgX` - « X » représentant le numéro du périphérique, comme `/dev/sg1` - correspondant aux disques durs afin de les tester avec Smartmontools.

Voici la commande permettant de les lister :

```sh
cat /proc/scsi/scsi | grep Vendor
  Vendor: LSI      Model: Logical Volume   Rev: 3000
  Vendor: ATA      Model: HGST HUS724020AL Rev: AA70
  Vendor: ATA      Model: HGST HUS724020AL Rev: AA70
```

Chaque ligne représente un périphérique sg, qui est mappé en fonction de l'ordre du périphérique affiché ci-dessous :
 
```
Vendor: LSI      Model: Logical Volume   Rev: 3000 => /dev/sg0
> 
> Vendor: ATA      Model: HGST HUS724020AL Rev: AA70 => /dev/sg1
> Vendor: ATA      Model: HGST HUS724020AL Rev: AA70 => /dev/sg2
> ```
> 

Afin d’obtenir le bon périphérique à l’aide d’une seule commande, vous pouvez utiliser celle-ci :

```sh
cat /proc/scsi/scsi | grep Vendor | nl -v 0 | sed 's/^/\/dev\/sg/' | grep -v LSI | cut -d ' ' -f1,6 | sed 's/sg\ /sg/' | sed 's/\/dev\/sg.\ /\/dev\/sg/'
/dev/sg1
/dev/sg2
```

Avec la comande `smartctl` de l’outil Smartmontools, nous allons tester chaque disque dur individuellement comme indiqué ci-dessous :

```sh
smartctl -a /dev/sgX 
```

Le numéro de périphérique sg est indiqué dans la commande ci-dessus.

> [!warning]
>
> Si l'un de vos disques durs affiche des erreurs SMART, vous devez effectuer une sauvegarde complète de vos données dès que possible et contacter notre équipe Support.
> 

#### Étape 3 : resynchronisation du RAID

Si un ou plusieurs disques durs ont été remplacés, le RAID se resynchronisera automatiquement. Afin de vérifier si le RAID est en cours de resynchronisation et surveiller la progression de celle-ci, vous pouvez utiliser la commande ci-dessous :

> [!primary]
>
> Attention, les valeurs (3,0 21) peuvent être différentes selon les versions. Soyez vigilant lorsque vous manipulez ce type de commande.
> 

```sh
lsiutil -p1 -a 3,0 21
 
LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)
 
1 MPT Port found
 
     Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC
 1.  ioc0              LSI Logic SAS2004 03      200      13000000     0
 
RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 3
 
Volume 0 is DevHandle 011e, Bus 1 Target 0, Type RAID1 (Mirroring)
 
Volume 0 State:  degraded, enabled, resync in progress
Resync Progress:  total blocks 624943104, blocks remaining 484024888, 77%
 
RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0
```

> [!primary]
>
> La valeur en pourcentage indiquée dans le résultat de la commande n’est pas le pourcentage de progression, mais le pourcentage restant.
> 

### Contrôleur Raid 3Ware

Ce contrôleur RAID est déprécié et devient instable. Nous vous suggérons fortement de contacter le support OVHcloud pour planifier une intervention visant à remplacer ce contrôleur RAID par un contrôleur LSI, puisque les contrôleurs RAID 3ware s’avèrent plutôt instables. Ce type d’intervention nécessite une réinstallation de votre serveur. Veillez alors à bien sauvegarder vos données au préalable.
 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
