---
title: 'Sauvegarder mes informations et mes bases de données dans un serveur de stockage'
slug: sauvegarder-informations-bases-de-donnees-serveur-stockage
excerpt: 'Sécuriser ses données en 5 étapes'
section: Tutoriel
---

## Introduction

Vos données informatiques sont sensibles : une perte ou une altération de celles-ci peut vite entraîner des situations problématiques pour votre activité. Le risque zéro n'existant pas, il est conseillé de réaliser des sauvegardes au moins quotidiennement et, de préférence, dans un serveur ou une solution de stockage différent de vos infrastructures de production.

OVH propose une gamme de [serveurs dédiés](https://www.ovh.com/fr/serveurs_dedies/stockage/){.external} adaptés à vos opérations de stockage et dotés au minimum de quatre disques durs. Il est possible d'utiliser ces ressources pour sauvegarder une infrastructure hébergée chez OVH ou chez un autre prestataire, via le réseau Internet public.

Dans ce tutoriel, vous configurerez un serveur de stockage OVH pour répondre à vos besoins, créerez l'arborescence de réception des sauvegardes, puis automatiserez la sauvegarde des données de deux serveurs distants via le protocole SCP.


## Prérequis

### Ce que vous devez savoir

- Avoir des notions d’administration Linux.
- Se connecter en SSH. 
- Se connecter à une base de données. 
- Sauvegarder des bases de données.
- Installer une distribution (ici nous utiliserons Debian 9.4).

### Ce que vous devez avoir

- Un [serveur de stockage OVH](https://www.ovh.com/fr/serveurs_dedies/stockage/){.external}.
- Une infrastructure de production ([VPS](https://www.ovh.com/fr/vps/){.external}, [serveurs dédiés](https://www.ovh.com/fr/serveurs_dedies/){.external}, [Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external}…).
- Une connexion SSH configurée entre le serveur de stockage et l'infrastructure de production.
- Conseillé : un réseau privé entre vos serveurs ([OVH vRack](https://www.ovh.com/fr/solutions/vrack/){.external}).



## En pratique

### Étape 1 : choisissez le mode RAID approprié

OVH dispose d'une gamme de [serveurs de stockage](https://www.ovh.com/fr/serveurs_dedies/stockage/){.external} dont les configurations matérielles contiennent plusieurs disques durs. Dans notre exemple, nous possédons un RAID logiciel (ou _soft RAID_) de quatre disques d'une capacité de 6 To chacun.

OVH vous permet de choisir la configuration de stockage des données, en proposant les RAID 0, 1, 5, 6 et 10. Chacun de ces modes a ses avantages et inconvénients en matière de performance et de résilience. Ainsi, avec quatre disques, nous pouvons stocker des informations efficacement en RAID 5, 6 ou 10 (les RAID 0 et 1 ne sont ici pas pertinents).

Voici quelques explications sur ces types de RAID.

#### RAID 5

Ce mode répartit vos données sur un minimum de trois disques durs. Il en utilise un quatrième pour reconstruire les autres en cas de défaillance d'un disque, en y stockant des informations de parité. Vous avez donc une tolérance de panne sur un disque. Les performances sont améliorées en lecture, mais pas en écriture (du fait du bit de parité).

Dans notre cas, la capacité du volume est de 18 To.

#### RAID 6

Il s'agit d'une version améliorée du RAID 5, avec quatre disques durs requis au minimum. Les informations de parité sont écrites sur deux disques et non un seul, ce qui assure davantage de redondance (tolérance de panne de deux disques). Les performances sont aussi améliorées en lecture et écriture.

Dans notre cas, la capacité du volume est de 12 To.

#### RAID 10

Ce mode est la combinaison de deux processus. Le premier consiste à « éclater » vos données et à les stocker sur deux disques, ce qui apporte un gain en performance car ceux-ci peuvent être sollicités simultanément. Le second duplique vos données en mode « miroir » sur deux disques. Vous obtenez alors une tolérance de panne de deux disques sur une même grappe.

Dans notre cas, la capacité du volume est de 12 To.

Il n'existe pas de RAID meilleur que les autres, tous répondent à des besoins différents. Dans notre exemple, nous souhaitons avoir une tolérance aux pannes de disques maximale tout en conservant de fortes performances en lecture et écriture. Nous partons donc sur une installation en RAID 6.


### Étape 2 : installez et configurez le serveur

Rendez-vous dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} et installez votre serveur. Comme indiqué au début, nous allons utiliser Debian 9.4. Référez-vous à notre guide des [premiers pas sur un serveur dédié](https://docs.ovh.com/fr/dedicated/premiers-pas-serveur-dedie/#installation-ou-reinstallation-de-votre-serveur-dedie_1){.external} pour plus d'informations.

Une fois le système sélectionné pour l'installation, cochez la case `Personnaliser la configuration des partitions`{.action}.

![Personnaliser la configuration des partitions](images/partition_customization.png){.thumbnail}

C'est à cette étape que vous allez modifier le type de RAID de votre `/home` (1) et, si vous le souhaitez, étendre la partition (2).

![Modification de la /home](images/partition_customization_menu.png){.thumbnail}

> [!primary]
> 
> Le niveau de RAID de la `/boot` ne sera pas modifiable.
> 

### Étape 3 : créez des répertoires cibles

Afin de stocker de manière claire les sauvegardes, nous allons créer des répertoires cibles. Connectez-vous en SSH sur votre serveur dédié, puis visualisez votre partitionnement :

```sh
df -h

Filesystem      Size    Used Avail Use% Mounted on
udev            7,8G       0  7,8G   0% /dev
tmpfs           1,6G     51M  1,6G   4% /run
/dev/md3         20G    740M   18G   4% /
tmpfs           7,9G       0  7,9G   0% /dev/shm
tmpfs           5,0M       0  5,0M   0% /run/lock
tmpfs           7,9G       0  7,9G   0% /sys/fs/cgroup
/dev/md2        487M     32M  426M   7% /boot
/dev/sda1       510M    152K  510M   1% /boot/efi
/dev/md4         11T     31M   11T   1% /home
```

Créez votre arborescence de fichiers à l'aide de la commande `mkdir`. Dans notre exemple, le serveur va recevoir les sauvegardes de deux serveurs web en production. Nous créons donc deux répertoires : *serveur1* et *serveur2*. Chacun contiendra un sous-dossier *dump* pour les sauvegardes SQL et un sous-dossier *data* pour les données web.

La commande `tree` vous permet de visualiser l'arborescence d'un répertoire. Vous pouvez par exemple obtenir un résultat sous cette forme :

```sh
tree
.
└── backups
    ├── serveur1
    │   ├── datas
    │   └── dump
    └── serveur2
        ├── datas
        └── dump

7 directories, 0 files
```

### Étape 4 : transférez des données de vos serveurs distants vers votre serveur de stockage

Le serveur de stockage est maintenant prêt à recevoir vos différentes sauvegardes.

> [!primary]
> 
> Si vos infrastructures de production sont hébergées chez OVH et disposent de notre solution de réseaux privés vRack, n'hésitez pas à les configurer en ce sens. Ainsi, vos sauvegardes ne transiteront pas sur le réseau public (Internet).
>

Le principe de cette étape est de se connecter via SSH à vos serveurs de productions, qui eux-mêmes se connecteront sur votre serveur de stockage via le protocole SCP. Pour cela, toutes ces ressources doivent pouvoir communiquer ensemble via SSH.

Réalisons tout d'abord une sauvegarde de base de données MySQL, communément appelée *dump*. Référez-vous à la documentation officielle de votre base de données pour un usage avancé.

```sh
mysql --host=localhost --user=myname --password=password mydb
mysqldump --all-databases > dump.sql
```

Votre service SSH configuré, vous pouvez vous rendre sur vos serveurs de production et utiliser la commande `scp`.

```sh
scp votre_fichier_dump user@IP_Stockage:/home/backups/serveur1/dump

The authenticity of host 'IP_Stockage (IP_Stockage)' can't be established.
ECDSA key fingerprint is SHA256:fmmeu5feHlnaUC56+2DB73sgNd4aMPVkS7oEtcyO2o8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'IP_Stockage' (ECDSA) to the list of known hosts.

user@IP_Stockage's password: 
```

> [!primary]
> 
> Si vous avez modifié le port SSH de votre serveur de stockage, il faut ajouter l'argument `-P`.
>

Réalisez la même opération pour vos fichiers. La commande `scp` permet également de sauvegarder des dossiers complets.

```sh
scp -r repertoire_a_sauvegarder user@IP_Stockage:/home/backups/serveur1/datas/2018_01_01
```

D'autres moyens plus efficaces comme *rsync* sont disponibles gratuitement et disposent de fonctionnalités avancées, comme la reprise d'un envoi si celui-ci a échoué.


### Étape 5 : réalisez une planification journalière basique via cron

Se connecter sur chacun des serveurs à sauvegarder, chaque jour, va vite devenir fastidieux. Il existe des moyens basiques d'automatiser une tâche, le plus connu étant le programme Unix *cron*. Celui-ci permet de planifier à l'heure, au jour, au mois ou à l'année des lignes de commande. Chaque utilisateur Unix dispose de sa propre liste de tâches planifiées, appelée *crontab*.

Pour plus de sécurité, il est conseillé de créer un compte utilisateur Unix supplémentaire et de lui attribuer des tâches planifiées.

Pour éditer cette liste, exécutez :

```sh
crontab -e
```

Ajoutez la ligne suivante pour automatiser un envoi de votre dump SQL, chaque jour de l'année à 2 heures du matin.

```sh
0 2 * * * scp votre_fichier_dump user@IP_Stockage:/home/backups/serveur1/dump >/dev/null 2>&1
```

La syntaxe d'une *crontab* est particulière ; nous ne la détaillerons pas ici mais plusieurs sites permettent d'en générer facilement.



## Conclusion

Vous venez de configurer un serveur de stockage OVH correspondant à vos besoins et d'automatiser de manière basique la sauvegarde de fichiers sur celui-ci. Il s'agit d'une étape importante pour éviter les pertes de données et sécuriser votre activité.

Comme expliqué lors de ce tutoriel, il existe d'autres méthodes gratuites ou payantes pour optimiser davantage vos sauvegardes. Si vos données sont sensibles, nous vous conseillons également de les chiffrer et de transiter uniquement via des réseaux privés, comme le vRack d'OVH.