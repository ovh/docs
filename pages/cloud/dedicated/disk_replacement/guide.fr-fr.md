---
title: Remplacement de disque
slug: disk-replacement
excerpt: Retrouvez ici les principales Étapes a suivre dans le cas d’un remplacement de disque.
section: RAID & disques
---


## Prérequis
Si vous constatez un défaut de disque ou que notre système vous a envoyé une notification par e-mail pour vous avertir d’une défaillance d’un disque, vous devez prendre les mesures nécessaires pour le remplacer dès que possible.


## Procédure

### Étape 1: Sauvegarde
Avant de faire quoi que ce soit, **il est primordial de faire une sauvegarde de vos données**. Le seul but d’un RAID (sauf le RAID0) est de protéger vos données contre les défaillances de disques. Une fois qu’un disque est inutilisable, toutes vos données dépendent de la santé du/des disque(s) restant(s).

Il est peu probable que deux disques soient en défaut en même temps, mais ce n’est pas impossible. Il vous est donc fortement conseillé de mettre en place une solution de sauvegarde.

Si vous ne confirmez pas que vous avez effectué vos sauvegardes avant de demander un remplacement de disque, vous devez confirmer que vous connaissez les risques et que vous en acceptez la pleine responsabilité.


### Étape 2: Détection
Que vous ayez trouvé le problème par vous-même ou suite à une notification de notre système, il est préférable de vérifier la santé de tous les disques.

La raison est simple. Si vous avez deux disques en défaut dans un même ensemble RAID, nous commençerons par remplacer celui avec le plus d’erreurs.


#### RAID Logiciel
Si vous avez un serveur disposant d'un RAID Logiciel, réferrez-vous au guide [RAID Logiciel](https://docs.ovh.com/fr/dedicated/raid-soft/){.external} afin de trouver les disques installés sur votre serveur.

Une fois que vous avez trouvé le chemin d'accès à vos disques, vous pouvez les tester en utilisant la commande smartctl de cette manière:

```sh
smartctl -a -d ata /dev/sdX
```

> [!primary]
>
> N'oubliez pas de remplacer /dev/sdX par le chemin d'accès à votre disque.
> 

Cela vous permettra également de récupérer le numéro de série (Serial Number) du ou des disques à remplacer afin de les communiquer au technicien.

Voici un exemple du résultat retourné.

```sh
smartctl -a -d ata /dev/sda
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

#### Pour un disque NVMe

Dans le cas d'un disque NVMe, il sera nécessaire de placer le serveur en mode Recue-pro sur lequel l'outil **nvme-cli** est installé par défaut.

Il faudra alors utiliser la commande nvme list afin de récupérer les numéros de série de vos disques.

```sh
root@rescue:~# nvme list
>>> Node             SN                   Model                                    Namespace Usage                      Format           FW Rev
>>> ---------------- -------------------- ---------------------------------------- --------- -------------------------- ---------------- --------
>>> /dev/nvme0n1     CVPF636600YC450RGN   INTEL SSDPE2MX450G7                      1         450.10  GB / 450.10  GB    512   B +  0 B   MDV10253
>>> /dev/nvme1n1     CVPF6333002Y450RGN   INTEL SSDPE2MX450G7                      1         450.10  GB / 450.10  GB    512   B +  0 B   MDV10253
```


#### RAID Matériel

Si vous avez un serveur disposant d'un RAID Matériel, réferrez-vous au guide [RAID Matériel](https://docs.ovh.com/fr/dedicated/raid-hard/){.external} et utilisez la procédure concernant votre type de contrôleur RAID pour trouver les chemins d'accès à vos disques.

Une fois que vous avez trouvé le chemin d'accès à vos disques, vous pouvez les tester en utilisant la commande smartctl de cette manière:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

Le Device ID du disque

Le numéro du disque (/dev/sda = 1st disque, /dev/sdb = 2nd disque, etc.)


> [!primary]
>
> N'oubliez pas de remplacer /dev/sdX par le chemin d'accès à votre disque.
> 


> [!warning]
>
> Dans certains cas, vous pouvez obtenir le message suivant : /dev/sda [megaraid_disk_00][SAT]: Device open changed type frome 'megaraid' to 'sat'.
> Il vous faudra alors remplacer megaraid par sat+megaraid comme suit : smartctl -d sat+megaraid,N -a /dev/sdX
> 

Pour une carte Raid LSI, vous pouvez tester les disques en utilisant la commande smartctl de cette manière:

```sh
smartctl -a /dev/sgY
```

Le numéro du RAID (/dev/sg0 = 1st RAID, /dev/sg1 = 2nd RAID, etc.)

### Étape 3: Remplacement de disque

#### Remplacement à froid (nécessitant une coupure du serveur)
Pour demander le remplacement d'un disque, il vous suffit de créer un ticket auprès de notre support depuis le [Manager OVH](https://www.ovh.com/manager/){.external}.

Afin d'accélerer le processus, n'hésitez pas à nous fournir les informations suivantes:

1. **La date et l'heure à laquelle vous souhaitez que nous intervenions** (vous devez prévoir une courte interruption de service, mais vous pouvez planifier l'intervention 24/24-7/7).

2. **La confirmation que vous avez effectué la sauvegarde de vos données, ou que vous acceptez la pleine responsabilité de toute perte de données.**

3. **Le numéro de série du disque à remplacer** (Pour récupérer le numéro de série du disque à remplacer, consultez [ce guide](https://docs.ovh.com/fr/dedicated/find-disk-serial-number/){.external} 
<cite>Si pour une raison ou une autre il n'est pas possible d'extraire le numéro de série du disque, veuillez le notifier dans le ticket, et nous communiquer le numéro de série du/des disque(s) à ne pas remplacer.</cite>


#### Remplacement a chaud (sans necessite d'eteindre le serveur. Valable uniquement sur serveur HG-bHG)
Dans le cas d'un remplacement à chaud sur un serveur HG-bHG avec une carte MegaRaid, dès que l'intervention est programmée, vous devrez faire clignoter la LED du disque à remplacer pour faciliter

Si votre serveur dispose d'une carte MegaRaid, utilisez les commandes suivantes :

Pour démarrer le clignotement de la LED :

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

Pour arrêter le clignotement de la LED :

```sh
MegaCli -PdLocate -stop -physdrv[E0:S0] -a0
```

L'Enclosure ID du disque.

Le Slot ID du disque.


> [!primary]
>
> Equivalent via la commande storcli :
> Pour démarrer le clignotement de la LED :
>
>```sh
>storcli /c0/e0/s0 start locate
>```
>
> Pour arrêter le clignotement de la LED :
>```sh
>storcli /c0/e0/s0 stop locate
>```
>



### Étape 4 : Après le remplacement
Si vous avez un serveur en RAID Matériel, le RAID va se reconstruire par lui-même (L'auto-rebuild doit être activé. Il l'est par défaut). Notez que le processus de re-synchronisation peut prendre quelque temps et impacter les performances de lecture/écriture de votre RAID.