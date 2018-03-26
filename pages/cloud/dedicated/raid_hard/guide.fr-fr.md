---
title: RAID Matériel
slug: raid-hard
excerpt: Decouvrez ici comment verifier l’etat de votre Raid Materiel et de vos disques avec un controleur RAID (LSI, LSI MegaRaid, et 3ware [Deprecie]).
section: RAID & disques
---


## Prérequis
- Avoir un accès root en SSH.
- Avoir un serveur avec un RAID Matériel.



> [!warning]
>
> Il est dangereux de manipuler les commandes MegaCli et lsiutil
> si vous ne savez pas ce que vous faites. Vous risquez de perdre vos
> données et il est important de les sauvegarder avant de faire quoi que
> ce soit.
> 


## Controleur RAID MegaRaid

### Étape 1 &#58; Informations
Avant de vérifier l'état du RAID, vérifions que vous possédez bien un contôleur RAID de type MégaRaid

```sh
lspci | grep -i lsi | grep -i megaraid 03:00.0 RAID bus controller: LSI Logic / Symbios Logic MegaRAID SAS 2108 [Liberator] (rev 05) 
```

Ceci confirme que le serveur possède bel et bien un contôleur RAID MegaRaid.

Utilisez la commande MegaCli pour lister les ensembles de RAID disponibles:

```sh 
MegaCli -LDInfo -Lall -aALL (Ou bien : storcli /c0 /vall show)
>>> Adapter 0 - Virtual Drive Information:
>>> Virtual Drive: 0 (Target Id: 0)
>>> Name :
>>> RAID Level : Primary-1, Secondary-0, RAID Level Qualifier-0
>>> Size : 36.321 GB
>>> Sector Size : 512
>>> Mirror Data : 36.321 GB
>>> State : Optimal
>>> Strip Size : 64 KB
>>> Number Of Drives : 2
>>> Span Depth : 1
>>> Default Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
>>> Current Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
>>> Default Access Policy: Read/Write
>>> Current Access Policy: Read/Write
>>> Disk Cache Policy : Disks Default
>>> Encryption Type : None
>>> Bad Blocks Exist: No
>>> Is VD Cached: No
```

```sh
>>> Virtual Drive: 1 (Target Id: 1)
>>> Name :
>>> RAID Level : Primary-1, Secondary-0, RAID Level Qualifier-0
>>> Size : 2.727 TB
>>> Sector Size : 512
>>> Mirror Data : 2.727 TB
>>> State : Optimal
>>> Strip Size : 64 KB
>>> Number Of Drives : 2
>>> Span Depth : 1
>>> Default Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
>>> Current Cache Policy: WriteBack, ReadAdaptive, Cached, Write Cache OK if Bad BBU
>>> Default Access Policy: Read/Write
>>> Current Access Policy: Read/Write
>>> Disk Cache Policy : Disks Default
>>> Encryption Type : None
>>> Bad Blocks Exist: No
>>> Is VD Cached: Yes
>>> Cache Cade Type : Read Only

>>> Exit Code: 0x00
```


Nous voyons 2 *disques virtuels* qui sont composés de 2 disques physiques chacuns, pour un total de 4 disques.

Dans le cas présent, le status du RAID montre qu'il est Optimal, ce qui veut dire que le RAID est bien fonctionnel.

Si le statut du RAID montre Degraded, nous vous recommandons de vérifier l'état de vos disques dur.


### Étape 2 : État des disques
Premièrement, vous devez lister les Device Id pour chaque disques dur afin de bien pouvoir les tester avec l'outil smartmontools:

```sh
MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g' (Ou bien : storcli /c0 /eall /sall show)

>>> Slot Number: 0
>>> Device Id: 4
>>> Raw Size: 279.460 GB [0x22eec130 Sectors]
>>> Firmware state: Online, Spun Up
>>> Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355

>>> Slot Number: 1
>>> Device Id: 5
>>> Raw Size: 279.460 GB [0x22eec130 Sectors]
>>> Firmware state: Online, Spun Up
>>> Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355

>>> Slot Number: 2
>>> Device Id: 7
>>> Raw Size: 2.728 TB [0x15d50a3b0 Sectors]
>>> Firmware state: Online, Spun Up
>>> Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70

>>> Slot Number: 3
>>> Device Id: 6
>>> Raw Size: 2.728 TB [0x15d50a3b0 Sectors]
>>> Firmware state: Online, Spun Up
>>> Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70
```

Avec la commande smartctl de l'outil smartmontools, nous allons tester chaque disque dur individuellement comme indiqué ci-dessous:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

`N`est le "Device ID" du disque dur.
`X`est le périphérique associé au RAID: /dev/sda = 1er RAID, /dev/sdb = 2eme RAID, etc.



> [!primary]
>
> Dans certains cas vous pouvez obtenir le message suivant:
> /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
> Vous devrez alors remplacer megaraid par sat+megaraid:
> smartctl -d sat+megaraid,N -a /dev/sdX
>


> [!warning]
>
> Si un disque contient des erreurs, il vous faut alors effectuer une sauvegarde de vos données et contacter notre support.
> Il faudra fournir l' Enclosure ID, le Slot Number, le Device ID, ainsi que le Numéro de série du disque pour que nous puissions identifier le disque défectueux.
> Sachez également que si vous possédez toutes ces informations, vous pourrez programmer le remplacement directement depuis votre espace client, en sélectionnant le nom de votre serveur, puis `Remplacement de disques`.
> 


### Étape 3 : Vérifier l'état de la batterie

Il est important de vérifier que la batterie de la carte RAID est pleinement opérationnelle. Pour cela voici la commande :

```sh
MegaCli -AdpBbuCmd -aAll
```

Si le résultat vous indique `Battery Replacement required : Yes` il faudra contacter le support pour procéder au changement de la batterie de la carte RAID.


### Étape 4 : Resynchronisation
Si un ou plusieurs disques durs ont été remplacés, le RAID se resynchronisera automatiquement.

Vous pouvez utiliser la commande ci-dessous pour voir quel disque dur est actuellement en train de se reconstruire:

```sh
MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g' (Ou bien : storcli /c0 /eall /sall show)

>>> Slot Number: 0
>>> Device Id: 4
>>> Raw Size: 279.460 GB [0x22eec130 Sectors]
>>> Firmware state: Online, Spun Up
>>> Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355

>>> Slot Number: 1
>>> Device Id: 5
>>> Raw Size: 279.460 GB [0x22eec130 Sectors]
>>> Firmware state: Online, Spun Up
>>> Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355

>>> Slot Number: 2
>>> Device Id: 7
>>> Raw Size: 2.728 TB [0x15d50a3b0 Sectors]
>>> Firmware state: Online, Spun Up
>>> Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70

>>> Slot Number: 3
>>> Device Id: 6
>>> Raw Size: 2.728 TB [0x15d50a3b0 Sectors]
>>> Firmware state: Rebuild
>>> Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70
```

Pour voir la progression de la reconstruction d'un disque, vous pouvez utiliser la commande suivante:

```sh
MegaCli -PDRbld -ShowProg -PhysDrv [EncID:SlotID] -aALL (Ou bien : storcli /c0/eEncID/sSlotID show rebuild)
```

`EncID` est l'enclosure ID
`SlotID`est le slot ID

Ces valeurs sont obtenues lorsque vous listez les informations des disques dur comme indiqué précédemment.


### Étape 5: CacheCade


> [!primary]
>
> Le CacheCade est un module conçut par LSI pour améliorer les performances en lecture aléatoire des disques dur en utilisant un disque SSD comme périphérique frontal de cache.
> 

Afin de vérifier la configuration du CacheCade:

```sh
MegaCli -CfgCacheCadeDsply -a0 (Ou bien : storcli /c0 /dall show cachecade)
```

Afin de vérifier quel RAID est associé au CacheCade:

```sh
MegaCli -CfgCacheCadeDsply -a0 | grep "Associated LDs"
```


## Controleur RAID LSI

### Étape 1: Informations
Avant de vérifier l'état de votre RAID, vérifions que vous possédez bien un contôleur RAID de type LSI:

```sh
lspci | grep -i lsi | grep -v megaraid
>>> 01:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)
```

> [!primary]
>
> La commande grep -v megaraid sert à retirer le paramètre "MegaRaid" du résultat de la commande lspci car les cartes MegaRaid sont aussi fabriquées par LSI Corporation.
> 

Pour obtenir l'information sur les RAID disponibles, vous pouvez utiliser la commande lsiutil:

> [!warning]
>
> Attention, les valeurs (1,0 21) peuvent être différentes suivant les versions. Veillez à faire très attention lorsque vous manipulez ce type de commande.
> 

```sh
lsiutil -p1 -a 1,0 21

>>> LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)

>>> 1 MPT Port found

>>>      Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC
>>>  1.  ioc0              LSI Logic SAS2004 03      200      13000000     0

>>> RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 1

>>> Volume 0 is DevHandle 011e, Bus 1 Target 0, Type RAID1 (Mirroring)
>>>   Volume Name:
>>>   Volume WWID:  0aaf504551c8efe5
>>>   Volume State:  optimal, enabled, background init complete
>>>   Volume Settings:  write caching disabled, auto configure hot swap enabled
>>>   Volume draws from Hot Spare Pools:  0
>>>   Volume Size 1906394 MB, 2 Members
>>>   Primary is PhysDisk 1 (DevHandle 0009, Bus 0 Target 0)
>>>   Secondary is PhysDisk 0 (DevHandle 000a, Bus 0 Target 1)

>>> RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0
```

Nous voyons un *disque virtuel* qui est composés de 2 disques physiques.

Dans le cas présent, le status du RAID montre qu'il est Optimal, ce qui veut dire que le RAID est bien fonctionnel.

Si le statut du RAID montre Degraded, nous vous recommandons de vérifier l'état de vos disques dur.


### Étape 2: Etat des disques
Pour vérifier l'état des disques à partir du contrôleur RAID, vous pouvez utiliser la commande suivante:

```sh
lsiutil -p1 -a 2,0 21

>>> LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)

>>> 1 MPT Port found

>>>      Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC
>>>  1.  ioc0              LSI Logic SAS2004 03      200      13000000     0

>>> RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 2

>>> PhysDisk 0 is DevHandle 000a, Bus 0 Target 1
>>>   PhysDisk State:  optimal
>>>   PhysDisk Size 1906394 MB, Inquiry Data:  ATA      HGST HUS724020AL AA70
>>>   Path 0 is DevHandle 000a, Bus 0 Target 1, online, primary
>>>   Path 1 is DevHandle 000a, invalid

>>> PhysDisk 1 is DevHandle 0009, Bus 0 Target 0
>>>   PhysDisk State:  optimal
>>>   PhysDisk Size 1906394 MB, Inquiry Data:  ATA      HGST HUS724020AL AA70
>>>   Path 0 is DevHandle 0009, Bus 0 Target 0, online, primary
>>>   Path 1 is DevHandle 0009, invalid

>>> RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0
```

Dans le cas présent, les dex disques sont dans un état Optimal.

Comme le contrôleur LSI utilise sg-map, nous devons tester le /dev/sgX (X étant le numéro du périphérique comme /dev/sg1 par exemple) correspondant aux disques dur afin de pouvoir les tester correctement avec smartmontools.

Voici comment les lister:

```sh
cat /proc/scsi/scsi | grep Vendor
>>>   Vendor: LSI      Model: Logical Volume   Rev: 3000
>>>   Vendor: ATA      Model: HGST HUS724020AL Rev: AA70
>>>   Vendor: ATA      Model: HGST HUS724020AL Rev: AA70
```

> [!primary]
>
> Chaque ligne représente un périphérique sg qui sont montés dans l'ordre d'affichage.
> 
> > [!faq]
> >
> > Ex: Vendor: LSI      Model: Logical Volume   Rev: 3000 => /dev/sg0
> >> 
> Vendor: ATA      Model: HGST HUS724020AL Rev: AA70 => /dev/sg1
> Vendor: ATA      Model: HGST HUS724020AL Rev: AA70 => /dev/sg2
> etc...
> >
> 

Afin d'obtenir le bon périphérique à l'aide d'une seule commande, vous pouvez utiliser celle-ci:

```sh
cat /proc/scsi/scsi | grep Vendor | nl -v 0 | sed 's/^/\/dev\/sg/' | grep -v LSI | cut -d ' ' -f1,6 | sed 's/sg\ /sg/' | sed 's/\/dev\/sg.\ /\/dev\/sg/'
>>> /dev/sg1
>>> /dev/sg2
```

Avec la commande smartctl de l'outil smartmontools, nous allons tester chaque disque dur individuellement comme indiqué ci-dessous:

```sh
smartctl -a /dev/sgX
```
`X`est le numéro du périphérique sg affiché dans la commande ci-dessus.

> [!warning]
>
> Si un disque contient des erreurs, il vous faut alors effectuer une sauvegarde de vos données et contacter notre support. Sachez également que si vous possédez toutes ces informations, vous pourrez programmer le remplacement directement depuis votre espace client, en sélectionnant le nom de votre serveur, puis `Remplacement de disque`.
> 


### Étape 3: Resynchronisation
Si vous avez un ou plusieurs disques dur de remplacés, le RAID se resynchronisera automatiquement.

Afin de vérifier si le RAID est actuellement en cours de resynchronisation et surveiller la progréssion de celui-ci, vous pouvez utiliser la commande ci-dessous:

> [!warning]
>
> Attention, les valeurs (3,0 21) peuvent être différentes suivant les versions. Veillez à faire très attention lorsque vous manipulez ce type de commande.
> 

```sh
lsiutil -p1 -a 3,0 21

>>> LSI Logic MPT Configuration Utility, Version 1.63-OVH (27a4f9f54c)

>>> 1 MPT Port found

>>>      Port Name         Chip Vendor/Type/Rev    MPT Rev  Firmware Rev  IOC
>>>  1.  ioc0              LSI Logic SAS2004 03      200      13000000     0

>>> RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 3

>>> Volume 0 is DevHandle 011e, Bus 1 Target 0, Type RAID1 (Mirroring)

>>> Volume 0 State:  degraded, enabled, resync in progress
>>> Resync Progress:  total blocks 624943104, blocks remaining 484024888, 77%

>>> RAID actions menu, select an option:  [1-99 or e/p/w or 0 to quit] 0
```

> [!warning]
>
> La valeur en pourcentage indiquée dans le résultat de la commande n'est pas le pourcentage de progréssion, mais le pourcentage restant.
> 


## Controleur RAID 3Ware


> [!alert]
>
> Ce contrôleur RAID est déprécié et devient instable. Nous vous suggérons fortement de contacter le Support OVH pour planifier une intervention visant à remplacer ce contrôleur RAID par un contrôleur LSI. Ce type d'intervention nécessitera une réinstallation de votre serveur. Veillez alors à bien sauvegarder vos données au préalable.
> 