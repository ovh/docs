---
title: Récupérer le numéro de série d''un disque dur
slug: rouver-serial-number-disque
excerpt: Découvrez comment récupérer le numéro de série d''un disque dur dans le but de procéder à son remplacement
section: RAID & disques
---

**Dernière mise à jour le 2018/08/21**

## Objectif

Pour minimiser le risque d'erreur pendant le remplacement d’un disque dur, nous demandons à nos clients de nous fournir le numéro de série du disque qu'ils souhaitent remplacer. Si vous ne l'avez pas encore fait, n'hésitez pas à vous reporter à notre documentation sur le [remplacement d'un disque dur](https://docs.ovh.com/ca/fr/dedicated/remplacement-disque/){.external} pour bien en comprendre la procédure.

**Ce guide vous explique comment récupérer le ou les numéros de série de votre ou de vos disques. Dans la plupart des cas, vous pouvez le trouver en testant vos disques durs individuellement avec l'outil smartmontools.**


## Prérequis

- Être connecté en SSH avec l'identifiant root [Linux] ou le compte administrateur [Windows].
- Avoir installé l'utilitaire sas2ircu sur votre serveur Windows (disponible via le moteur de recherche [broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external}).


## En pratique

> [!primary]
>
> Dans le cas d'un disque NVMe, il sera nécessaire de placer le serveur en mode [Rescue64](https://docs.ovh.com/ca/fr/dedicated/rescue-mode/){.external} et d'utiliser l'outil nvme-cli installé par défaut.
> 

### Récupérer le numéro de série d'un disque avec un RAID logiciel

Pour récupérer le numéro de série de votre disque dur avec une configuration RAID logiciel, vous pouvez simplement utiliser `smartctl` :

```sh
smartctl -a /dev/sdX | grep Serial Serial Number:    XXXXXXX
```

Le périphérique est détecté par le système d'exploitation (ex. : /dev/sda, /dev/sdb, etc.).


### Récupérer le numéro de série d'un disque NVMe

Pour les disques NVMe, il sera nécessaire d'utiliser la commande `nvme list` :

```sh
nvme list

Node          SN                  Model                Namespace  Usage                      Format   FW Rev
/dev/nvme0n1  CVPF636600YC450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
/dev/nvme1n1  CVPF6333002Y450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
```

Vous pouvez alors voir les numéros de série de vos différents disques NVMe (« nvme0 » et « nvme1 »).


### Récupérer le numéro de série d'un disque sous Windows

Le guide basé sur Windows est globalement similaire à celui basé sur Linux. Nous allons utiliser l’utilitaire sas2ircu avec les mêmes commandes que celles utilisées pour Linux.

> [!primary]
>
> Vous devrez exécuter le terminal de commande avec les droits d'administrateur pour éviter des erreurs.
> 

Pour récupérer le numéro de série d'une configuration RAID logiciel, vous devez utiliser la commande suivante :

```sh
.\smartctl -a /dev/sdX Serial Number: 1234567890
```

Le périphérique sera détecté par le système d'exploitation et affiché comme suit : `/dev/sda`, `/dev/sdb`, etc.

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


### Récupérer le numéro de série d'un disque avec un RAID matériel

Pour un aperçu détaillé de ces commandes et de la façon de tester vos disques durs, reportez-vous à ce [guide](https://docs.ovh.com/fr/dedicated/raid-hard/){.external}.


#### Contrôleur MegaRaid

##### Étape 1 : récupérer les ensembles RAID

Vous pouvez trouver les numéros de série des disques en utilisant la commande `smartctl`. Cependant, avant d’exécuter cette commande, il vous faudra trouver combien d’ensembles de RAID (ou disques virtuels) se trouvent sur votre serveur.

Vous pouvez obtenir cette information en utilisant la commande suivante :

```sh
MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip

Adapter 0

Virtual Drive Information: Size : 36.321 GB

Adapter 1

Virtual Drive Information: Size : 2.727 TB
```

Dans cet exemple, il existe deux RAID configurés sur le serveur (« Adapter 0 » et « Adapter 1 »). Ceux-ci devraient être mappés à `/dev/sda` et `/dev/sdb`.


##### Étape 2 : récupérer les informations des disques

Vous devez ensuite rassembler les informations sur le disque physique en utilisant la commande suivante :

```sh
 MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g'

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

##### Étape 3 : récupérer le numéro de série

Les ID du périphérique et de l'adaptateur seront utilisés pour indiquer à `smartctl` quel disque rechercher dans quel ensemble RAID.

La commande devrait donc ressembler à ceci :

```sh
smartctl -d megaraid,N -a /dev/sdX | grep Serial Serial Number: 1234567890
```

L'ID du périphérique RAID sera affiché comme suit : `/dev/sda` = 1er RAID, `/dev/sdb` = 2e RAID, etc.


> [!primary]
>
> Dans certaines situations, vous pouvez recevoir ce résultat :
> 
> ```
> /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
> ```
> 
> Vous devez alors remplacer `megaraid` par `sat+megaraid`:
>
> ```
> smartctl -d sat+megaraid,N -a /dev/sdX | grep Serial Serial Number:    1234567890
> ```
>

#### Récupérer le numéro de série d'un disque (Contrôleur RAID LSI)

Le contrôleur RAID LSI utilise un module appelé `sg-map`, qui mappe les périphériques dans `/dev/sgX` (**X** étant le numéro définissant le périphérique).

Vous pouvez vous référer à [ce guide](https://docs.ovh.com/fr/dedicated/raid-hard/){.external} pour déterminer quel disque dur correspond à un périphérique sg désigné.

Une fois que vous avez trouvé le périphérique sg lié au disque dur que vous voulez analyser, utilisez la commande suivante :

```sh
smartctl -a /dev/sgX | grep Serial Serial Number:    1234567890
```

Le numéro du périphérique sg sera affiché comme suit : `/dev/sg0`, `/dev/sg1`...


## Aller plus loin

[Remplacer un disque défectueux](https://docs.ovh.com/ca/fr/dedicated/remplacement-disque/){.external}

[Configurer un RAID matériel](https://docs.ovh.com/fr/dedicated/raid-hard/){.external}

[Congiruer un RAID logiciel](https://docs.ovh.com/fr/dedicated/raid-soft/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.