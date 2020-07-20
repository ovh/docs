---
title: Remplacer un disque défectueux
slug: remplacement-disque
excerpt: Découvrez comment identifier un disque défectueux et demander son remplacement
section: RAID & disques
---

**Dernière mise à jour le 2018/05/25**

## Objectif

Si vous constatez un défaut de disque ou que notre système vous a envoyé une notification par e-mail pour vous avertir de la défaillance d’un disque, vous devez prendre les mesures nécessaires pour le remplacer dès que possible.

**Ce guide vous explique comment identifier qu'un disque est défectueux et comment faire la demande de remplacement auprès de nos équipes.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Être connecté en SSH à votre [serveur dédié OVHcloud](https://www.ovh.com/ca/fr/serveurs-dedies/){.external} avec l'accès *root* (Linux).


## En pratique

### Sauvegarder vos données

Avant de faire quoi que ce soit, **il est nécessaire d'effectuer une sauvegarde de vos données**. Le seul but d’un RAID, à l'exception du RAID 0 est de protéger vos données contre les défaillances des disques. Une fois qu’un disque est inutilisable, toutes vos données dépendent de la santé du ou des disques restants.

S'il est rare que deux disques soient défaillants en même temps, ce cas n’est pas impossible.
Aucun changement de disque ne sera effectué sans :
-	une confirmation de votre part de la sauvegarde de vos données ;
-	une confirmation que vous acceptez en connaissance de cause leur perte potentielle dûe au remplacement du disque.


### Détecter qu'un disque est défectueux

À la moindre alerte e-mail ou vérification de votre part vous signalant une défaillance, il est indispensable de vérifier la santé de tous vos disques. Et si deux disques faisant partie d'un même ensemble RAID présentent des défaillances, nous remplacerons en priorité celui comportant le plus d'erreurs.

#### Serveur disposant d'un RAID logiciel

Si vous possédez un serveur disposant d'un RAID logiciel, référez-vous au guide [« RAID Logiciel »](../raid-soft/){.external} afin de trouver les disques installés sur votre serveur.

Une fois que vous avez trouvé le chemin d'accès à vos disques, vous pouvez les tester en utilisant la commande `smartctl` de cette manière :

```sh
smartctl -a /dev/sdX
```

> [!primary]
>
> N'oubliez pas de remplacer `/dev/sdX` par le chemin d'accès à votre disque, le sdX étant le disque concerné, sdA, sdB, etc.
> 

Cela vous permettra également de récupérer le numéro de série (*Serial Number*) du ou des disques à remplacer afin de les communiquer au technicien.

Voici un exemple du résultat retourné :

```sh
smartctl -a /dev/sda

>>> smartctl 5.41 2011-06-09 r3365 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)                                                                                          
>>> Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net

>>> === START OF INFORMATION SECTION ===
>>> Device Model:     TOSHIBA DT01ACA050
>>> Serial Number:    5329T58NS
>>> LU WWN Device Id: 5 000039 ff6d28993
>>> Firmware Version: MS1OA750
>>> User Capacity:    500 107 862 016 bytes [500 GB]
>>> Sector Sizes:     512 bytes logical, 4096 bytes physical
>>> Device is:        Not in smartctl database [for details use: -P showall]
>>> ATA Version is:   8
>>> ATA Standard is:  ATA-8-ACS revision 4
>>> Local Time is:    Thu Nov 24 15:51:25 2016 CET
>>> SMART support is: Available - device has SMART capability.
>>> SMART support is: Enabled
```

La ligne importante dans notre cas sera donc la suivante :

**`Serial Number:    5329T58N`**

#### Serveur disposant d'un RAID matériel

Si vous possédez un serveur disposant d'un RAID matériel, référez-vous au guide [« RAID Matériel »](../raid-hard/){.external} et utilisez la procédure concernant votre type de contrôleur RAID pour trouver les chemins d'accès à vos disques.

Une fois que vous avez trouvé le chemin d'accès à vos disques, vous pouvez les tester en utilisant la commande `smartctl` de cette manière :

```sh
smartctl -d megaraid,N -a /dev/sdX
```

> [!primary]
>
> N'oubliez pas de remplacer /dev/sdX par le chemin d'accès à votre disque, le sdX étant le disque concerné, sdA, sdB, etc.
> 


> [!warning]
>
> Dans certains cas, vous pouvez obtenir le message suivant : `/dev/sda [megaraid_disk_00][SAT]: Device open changed type from 'megaraid' to 'sat'`.
> 
> Il vous faudra alors remplacer `megaraid` par `sat+megaraid` comme suit : `smartctl -d sat+megaraid,N -a /dev/sdX`.
> 

Pour une carte Raid LSI, vous pouvez tester les disques en utilisant la commande `smartctl` de cette manière :

```sh
smartctl -a /dev/sgY
```

Le numéro du RAID est à préciser (/dev/sg0 = 1er RAID, /dev/sg1 = 2e RAID, etc.)


#### Serveur avec un disque NVMe

Dans le cas d'un disque NVMe, il sera nécessaire de placer le serveur en mode [« Recue-pro »](../rescue-mode/){.external} sur lequel l'outil **nvme-cli** est installé par défaut.

Il faudra alors utiliser la commande `nvme list` afin de récupérer les numéros de série de vos disques :

```sh
root@rescue:~# nvme list
>>> Node           SN                  Model                 Namespace Usage                     Format        FW Rev
>>> -------------- ------------------- --------------------- --------- ------------------------- ------------- --------
>>> /dev/nvme0n1   CVPF636600YC450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
>>> /dev/nvme1n1   CVPF6333002Y450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
```


### Demander le remplacement du disque

#### Remplacer le disque à froid (coupure du serveur requise)

Pour demander le remplacement d'un disque, il vous suffit de créer un ticket auprès de notre support depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}. Afin d'accélérer le processus, il convient de fournir les éléments liés aux tests. Voici un récapitulatif de ce qu'il faut :

- **le numéro de série du disque à remplacer ainsi que de tous les autres disques sains**. Pour récupérer le numéro de série du disque à remplacer, consultez [ce guide](../trouver-serial-number-disque/){.external}. Si, pour une raison ou une autre, il n'est pas possible d'extraire le numéro de série du disque, veuillez le notifier dans le ticket, et nous communiquer le numéro de série du ou des disques à ne pas remplacer. 

Comme précisé précédemment, les numéros de tous les disques sont importants. Ils seront transmis au technicien en datacenter et éviteront une erreur lors de l'opération ;

- **la date et l'heure de début de l'intervention**. Vous devez prévoir une courte interruption de service, mais vous pouvez planifier l'intervention 24 h/24 - 7 j/7 ;

- **La confirmation que vos données sont sauvegardées ou que vous acceptez la perte potentielle de ces informations.**


#### Remplacer le disque à chaud (sans coupure du serveur)

> [!primary]
>
> Ce type de remplacement n'est possible que pour les serveurs [Big-HG](https://www.ovh.com/ca/fr/serveurs-dedies/hg/){.external} disposant d'une carte RAID.
> 

Dans le cas d'un remplacement à chaud sur un serveur avec une carte MegaRAID, il vous est demandé de faire clignoter la LED du disque à remplacer une fois l'intervention programmée pour faciliter le travail de nos équipes.

Si votre serveur dispose d'une carte MegaRAID, voici les commandes à utiliser :

- pour démarrer le clignotement de la LED ;

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

- pour arrêter le clignotement de la LED ;

```sh
MegaCli -PdLocate -stop -physdrv[E0:S0] -a0
```

> [!primary]
>
> Équivalent via la commande `storcli` :
>
> - pour démarrer le clignotement de la LED :
>
> ```sh
> storcli /c0/e0/s0 start locate
> ```
>
> - pour arrêter le clignotement de la LED :
>
> ```sh
> storcli /c0/e0/s0 stop locate
> ```
>


> [!primary]
>
> Malgré le clignotement de la LED n'oubliez pas de bien préciser dans le ticket d'assistance le numéro de série et le *slot* du disque.
> 

### Une fois le remplacement effectué

Si vous possédez un serveur en RAID matériel, le RAID va se reconstruire par lui-même. Attention, l'*auto-rebuild*, activé par défaut, ne doit pas avoir été désactivé par vos soins. Notez que le processus de resynchronisation peut prendre quelque minutes et diminuer les performances de lecture/écriture de votre RAID.

Si vous possédez un serveur en RAID logiciel, il convient de lancer manuellement la resynchronisation de vos disques. Pour cela, n'hésitez pas à vous reporter à la documentation liée au [« RAID logiciel »](../raid-soft){.external}.


## Aller plus loin

[RAID logiciel](../raid-soft){.external}

[RAID matériel](../raid-hard){.external}

[Mode Rescue](../rescue-mode/){.external}


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
