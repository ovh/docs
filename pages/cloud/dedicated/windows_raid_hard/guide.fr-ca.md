---
title: Créer un partitionnement Windows avec un Raid Hard
slug: windows-raid-hard
excerpt: Decouvrez ici comment créer un partitionnement pour Windows sur un serveur en Raid Materiel.
section: RAID & disques
---


## Prérequis


> [!warning]
>
> Les manipulations réalisées dans ce guide nécessitent de casser le Raid existant. Cela signifie que toutes les données présentes seront perdues. Veillez à bien effectuer une sauvegarde de vos données au préalable.
> Ce guide s'adresse à des utilisateurs confirmés.
> 

Pour créer votre partitionnement, il sera nécessaire de créer de nouveaux volumes RAID sur la carte. Pour cela, vous aurez besoin de :

- Avoir un serveur avec un Raid Matériel. (Carte LSI MegaRaid)
- Avoir deux disques identiques au minimum. (Dans ce guide nous avons un serveur avec 3 disques)
- Avoir accès au mode rescue.


## Procedure

### Lister les volumes RAID
Tout d'abord, nous avons besoin de lister les volumes RAID afin de pouvoir ensuite les supprimer.

Pour cela, nous utilisons la commande suivante `MegaCli -LDInfo -Lall -aAll`{.action}

Exemple :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -LDInfo -Lall -aAll</span> <span class="blank">&nbsp;</span> <span class="output">Adapter 0 -- Virtual Drive Information:</span> <span class="output">Virtual Drive: 0 (Target Id: 0)</span> <span class="output">Name                :</span> <span class="output">RAID Level          : Primary-5, Secondary-0, RAID Level Qualifier-3</span> <span class="output">Size                : 3.637 TB</span> <span class="output">Sector Size         : 512</span> <span class="output">Is VD emulated      : No</span> <span class="output">Parity Size         : 1.818 TB</span> <span class="output">State               : Optimal</span> <span class="output">Strip Size          : 256 KB</span> <span class="output">Number Of Drives    : 3</span> <span class="output">Span Depth          : 1</span> <span class="output">Default Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span> <span class="output">Current Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span> <span class="output">Default Access Policy: Read/Write</span> <span class="output">Current Access Policy: Read/Write</span> <span class="output">Disk Cache Policy   : Disk's Default</span> <span class="output">Encryption Type     : None</span> <span class="output">Bad Blocks Exist: No</span> <span class="output">PI type: No PI</span> <span class="blank">&nbsp;</span> <span class="output">Is VD Cached: No</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>
Nous constatons que nous ne possédons actuellement qu'un seul volume RAID sur le serveur, et que celui-ci possède le **Virtual Drive** 0.


### Casser les RAID
Nous pouvons désormais casser les volumes RAID existant afin de pouvoir ensuite créer nos nouveaux volumes RAID.

Pour cela, nous utiliserons la commande ci-dessous à adapater avec le numéro du **Virtual Drive** récupéré précédemment.

`MegaCli -CfgLDDel -Lx -a0`{.action}

Le numéro du **Virtual Drive**

Exemple :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -CfgLDDel -L0 -a0</span> <span class="blank">&nbsp;</span> <span class="output">Adapter 0: Deleted Virtual Drive-0(target id-0)</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>

> [!primary]
>
> Si votre serveur possède déjà plusieurs RAID, répétez l'opération avec le numéro du Virtual Drive.
> 


### Recuperer les ID des disques
Nous allons maintenant récupérer l'**Enclosure ID** et le **SlotID** des disques présents sur le serveur afin de créer nos nouveaux volumes RAID.

Pour cela, nous utiliserons la commande suivante : `MegaCli -PdList -aALL | egrep -i "Adapter|Slot|Enclosure Device"`{.action}

Exemple :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -PdList -aALL | egrep -i "Adapter|Slot|Enclosure Device"</span> <span class="output">Adapter #0</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 0</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 1</span> <span class="output">Enclosure Device ID: 252</span> <span class="output">Slot Number: 2</span> </pre></div>
Nous constatons que nous possédons 3 disques, dont les **Enclosure ID** et **SlotID** sont respectivement 252:0, 252:1, et 252:2.


### Créer les nouveaux volumes RAID
Tout d'abord, nous créons le 1er volume RAID qui servira à notre système d'exploitation.

Nous utilisons alors la commande suivante : `MegaCli -CfgLdAdd -rX[EncID:SlotID,EncID:SlotID,...] -szYYYYY -a0`{.action}

Correspond au RAID souhaité (0, 1, 5, ou 6)

Correspond aux Enclosure ID des disques récupérés précédemment

Correspond aux SlotID des disques récupérés précédemment

Correspond à la taille de notre 1er disque virtuel

Dans notre exemple, nous allons créer un RAID 5 sur nos 3 disques, d'une taille de 200Go pour notre système d'exploitation.



> [!primary]
>
> Il est conseillé de prendre un peu plus d'espace afin d'avoir une partition de la taille minimum voulue, sachant que la configuration nécessite un peu d'espace.
> 

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -CfgLdAdd -r5[252:0,252:1,252:2] -sz204800 -a0</span> <span class="blank">&nbsp;</span> <span class="output">Adapter 0: Created VD 0</span> <span class="blank">&nbsp;</span> <span class="output">Adapter 0: Configured the Adapter!!</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>
Voilà, notre premier volume RAID est créé. Il nous reste désormais plus qu'à assigner le reste de l'espace disponible.

Nous allons donc créer un second volume RAID via la commande suivante : `MegaCli -CfgLdAdd -rX[EncID:SlotID,EncID:SlotID,...] -a0`{.action}

Correspond au RAID souhaité (0, 1, 5, ou 6)

Correspond aux Enclosure ID des disques récupérés précédemment

Correspond aux SlotID des disques récupérés précédemment

Exemple :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -CfgLdAdd -r5[252:0,252:1,252:2] -a0</span> <span class="blank">&nbsp;</span> <span class="output">Adapter 0: Created VD 1</span> <span class="blank">&nbsp;</span> <span class="output">Adapter 0: Configured the Adapter!!</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>
C'est chose faite. Il ne nous reste plus qu'à vérifier nos volumes RAID.


### Verifier la creation des volumes RAID
Nous utiliserons alors la première commande de ce guide qui consiste à lister les volumes RAID : `MegaCli -LDInfo -Lall -aALL`{.action}

Exemple :

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# MegaCli -LDInfo -Lall -aAll</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">Adapter 0 -- Virtual Drive Information:</span> <span class="output">Virtual Drive: 0 (Target Id: 0)</span> <span class="output">Name                :</span> <span class="output">RAID Level          : Primary-5, Secondary-0, RAID Level Qualifier-3</span> <span class="output">Size                : 200.195 GB</span> <span class="output">Sector Size         : 512</span> <span class="output">Is VD emulated      : No</span> <span class="output">Parity Size         : 100.097 GB</span> <span class="output">State               : Optimal</span> <span class="output">Strip Size          : 256 KB</span> <span class="output">Number Of Drives    : 3</span> <span class="output">Span Depth          : 1</span> <span class="output">Default Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span> <span class="output">Current Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span> <span class="output">Default Access Policy: Read/Write</span> <span class="output">Current Access Policy: Read/Write</span> <span class="output">Disk Cache Policy   : Disk's Default</span> <span class="output">Encryption Type     : None</span> <span class="output">Bad Blocks Exist: No</span> <span class="output">PI type: No PI</span> <span class="blank">&nbsp;</span> <span class="output">Is VD Cached: No</span> <span class="blank">&nbsp;</span> <span class="blank">&nbsp;</span> <span class="output">Virtual Drive: 1 (Target Id: 1)</span> <span class="output">Name                :</span> <span class="output">RAID Level          : Primary-5, Secondary-0, RAID Level Qualifier-3</span> <span class="output">Size                : 3.441 TB</span> <span class="output">Sector Size         : 512</span> <span class="output">Is VD emulated      : No</span> <span class="output">Parity Size         : 1.720 TB</span> <span class="output">State               : Optimal</span> <span class="output">Strip Size          : 256 KB</span> <span class="output">Number Of Drives    : 3</span> <span class="output">Span Depth          : 1</span> <span class="output">Default Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span> <span class="output">Current Cache Policy: WriteBack, ReadAhead, Direct, No Write Cache if Bad BBU</span> <span class="output">Default Access Policy: Read/Write</span> <span class="output">Current Access Policy: Read/Write</span> <span class="output">Disk Cache Policy   : Disk's Default</span> <span class="output">Encryption Type     : None</span> <span class="output">Bad Blocks Exist: No</span> <span class="output">PI type: No PI</span> <span class="blank">&nbsp;</span> <span class="output">Is VD Cached: No</span> <span class="blank">&nbsp;</span> <span class="output">Exit Code: 0x00</span> </pre></div>
Nous pouvons également utiliser la commande `fdisk -l`{.action} afin de consulter nos deux volumes RAID.

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">root@rescue:~# fdisk -l</span> <span class="blank">&nbsp;</span> <span class="output">Disk /dev/sda: 200.2 GiB, 214958080000 bytes, 419840000 sectors</span> <span class="output">Units: sectors of 1 * 512 = 512 bytes</span> <span class="output">Sector size (logical/physical): 512 bytes / 512 bytes</span> <span class="output">I/O size (minimum/optimal): 512 bytes / 512 bytes</span> <span class="blank">&nbsp;</span> <span class="output">Disk /dev/sdb: 3.5 TiB, 3784730214400 bytes, 7392051200 sectors</span> <span class="output">Units: sectors of 1 * 512 = 512 bytes</span> <span class="output">Sector size (logical/physical): 512 bytes / 512 bytes</span> <span class="output">I/O size (minimum/optimal): 512 bytes / 512 bytes</span> </pre></div>

### Installer Windows depuis l'espace client
Enfin, accédez à votre espace client afin de procéder à l'installation de Windows sur votre serveur.

Il vous faudra alors cocher la case `Personnaliser la configuration des partitions`{.action}, modifier le schéma de partition actuel pour spécifier uniquement le disque C, et d'une taille de 200Go maximum.

Une fois le système installé, rendez-vous sur votre système Windows, dans l'utilitaire `Gestionnaire des disques`{.action}, et partitionnez le second disque virtuel (correspondant à notre second RAID qui est affiché comme "non alloué") au format GPT.