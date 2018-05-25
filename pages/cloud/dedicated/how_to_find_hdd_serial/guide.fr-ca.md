---
title: Comment récupérer le numero de série d’un disque dur ?
slug: trouver-serial-number-disque
excerpt: Retrouvez ici comment récupérer le numéro de série d’un disque dans le but de procéder à son remplacement.
section: RAID & disques
---


## Prérequis
Pour minimiser le risque d'erreur pendant le remplacement d’un disque, nous demandons à nos clients de nous fournir le numéro de série du disque qu’ils souhaitent remplacer.

Dans certain cas, par exemple avec un disque dur non détecté, il est impossible d’extraire le numéro de série.

Quand c’est le cas, fournissez-nous les numéros de série de tous les autres disques et demandez le remplacement du disque dont le numéro de série n’est pas listé.

Dans la plupart des cas, vous pouvez le récupérer en utilisant l'utilitaire smartmontools qui vous permet de tester les disques.

Pour réaliser ces manipulations, il faut :

- Avoir un accès SSH.
- Avoir le besoin de remplacer un disque.
- L'utilitaire sas2ircu doit être installé au préalable. (disponible via le moteur de recherche [broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external}). Concerne uniquement Windows.



> [!primary]
>
> Dans le cas d'un disque NVMe, il sera nécessaire de placer le serveur en mode Rescue-pro, et utiliser l'outil nvme-cli installé par défaut.
> 


## Pour un RAID Logiciel

### Sous Linux
Pour trouver vos numéros de série lorsque vous êtes sur un serveur en RAID Logiciel, il vous faut utiliser smartctl:

```sh
smartctl -a /dev/sdX | grep Serial
>>> Serial Number:    KKKKKKKKKK
```

Le périphérique détecté par votre OS (Ex: /dev/sda, /dev/sdb, etc..)


#### Pour un disque NVMe
Il sera nécessaire d'utiliser la commande nvme list :

```sh
root@rescue:~# nvme list
>>> Node             SN                   Model               Namespace Usage                    Format           FW Rev
>>> ---------------- ------------------- -------------------- --------- ------------------------ ---------------- --------
>>> /dev/nvme0n1     CVPF636600YC450RGN   INTEL SSDPE2MX450G7    1      450.10  GB / 450.10  GB   512   B +  0 B  MDV10253
>>> /dev/nvme1n1     CVPF6333002Y450RGN   INTEL SSDPE2MX450G7    1      450.10  GB / 450.10  GB   512   B +  0 B  MDV10253
```

On peut alors constater les numéro de série des nos disques NVMe (nvme0 et nvme1).


### Sous Windows
Le guide sous Windows est semblable, dans l’ensemble, au guide sous Linux. En effet, nous allons utiliser l'utilitaire : sas2ircu, et les commandes sont les mêmes que sous Linux.

> [!primary]
>
> Il sera important de lancer le terminal de commande en tant qu'administrateur pour ne pas avoir d'erreur.
> 

Pour récupérer le numéro de série dans le cas d'un RAID Logiciel, il vous faut utiliser la commande suivante :

```sh
.\smartctl -a /dev/sdX
>>> Serial Number:    KKKKKKKKKK
```

Le périphérique détecté par votre OS (Ex: /dev/sda, /dev/sdb, etc..)


![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


## Pour un RAID Matériel
Pour des commandes plus avancées, il vous faudra utiliser le guide [RAID Matériel](../raid_hard/guide.fr-fr.md){.ref}.


### Controleur MegaRaid

#### Étape 1 : Relever les ensembles de RAID
Vous pouvez trouver les numéros de série des disques en utilisant la commande smartctl. Néanmoins, il vous faudra trouver combien d'ensemble de RAID il y a sur votre serveur.

Vous pouvez obtenir cette information en utilisant la commande suivante :

```sh
MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip
>>> Adapter 0 — Virtual Drive Information:
>>> Size : 36.321 GB
>>> Adapter 1 — Virtual Drive Information:
>>> Size : 2.727 TB
```

Dans cet exemple, il y a deux RAID configurés sur le serveur (Adapter 0 and Adapter 1). Ils devraient être reliés à /dev/sda et /dev/sdb.


#### Étape 2 : Récupérer les informations disques
Ensuite, vous allez devoir trouver les informations des disques dur avec la commande suivante:

```sh
MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g'

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

#### Étape 3 : Récupérer le numéro de série
Le Device ID et l'Adapter ID seront utilisés pour spécifier à smartctl quel disque rechercher et dans quel ensemble de RAID.

La commande devrait donc ressemble à ceci:

```sh
smartctl -d megaraid,N -a /dev/sdX | grep Serial
>>> Serial Number:    XXXXXXX
```

Le Device ID du disque

Le périphérique du RAID : /dev/sda = 1er RAID, /dev/sdb = 2ème RAID, etc.


> [!primary]
>
> Dans certaines situations, il se peut que vous receviez ce résultat:
>
>/dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
>
>
>Vous devez alors remplacer megaraid par sat+megaraid:
>
>smartctl -d sat+megaraid,N -a /dev/sdX | grep Serial
>Serial Number:    XXXXXXX
>
>

### Contrôleur LSI
Les contrôleur RAID LSI utilisent un module appelé sg-map qui relie des périphériques à des chemins /dev/sgX (**X** étant le numéro du périphérique).

Vous pouvez utiliser [ce guide (LSI raid controller)](../guide.fr-fr.md){.ref} afin de déterminer quel disque correspond à quel device sg.

Une fois que vous savez quel disque correspond à quel device sg, utilisez la commande suivante:

```sh
smartctl -a /dev/sgX | grep Serial
>>> Serial Number:    XXXXXXX
```

Le numéro de périphérique sg (Ex: /dev/sg0, /dev/sg1)