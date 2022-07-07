---
title: 'Activer et utiliser le mode rescue'
slug: ovh-rescue
excerpt: 'Comment activer et utiliser le mode rescue sur un serveur dédié'
section: 'Diagnostic et mode Rescue'
---

**Dernière mise à jour le 02/05/2022**

## Objectif

Le mode rescue est un outil de votre serveur dédié. Il vous permet de démarrer sur un système d’exploitation temporaire, dans le but de diagnostiquer et de résoudre les problèmes.

Le mode rescue est généralement adapté aux tâches suivantes :

- Réinitialisation du mot de passe root
- Diagnostic des problèmes réseau
- Réparation d'un système d'exploitation défectueux
- Correction d'une configuration incorrecte d'un pare-feu logiciel
- Test des performances des disques
- Test du processeur et de la mémoire RAM

Prenez soin d'effectuer une sauvegarde de vos données si vous ne disposez pas encore de sauvegardes récentes.

**Découvrez comment activer et utiliser le mode rescue de votre serveur.**

## Prérequis

- Posséder un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/).
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

## En pratique

> [!warning]
> Veuillez noter que si vous avez défini une clé SSH par défaut dans votre espace pour les produits dédiés, vous ne recevrez pas de mot de passe root lors du redémarrage d'un serveur en mode rescue. Dans ce cas, vous devez d'abord désactiver la clé SSH par défaut avant de redémarrer le serveur en mode rescue. Pour ce faire, nous vous invitons à consulter cette [section](../creer-cle-ssh-serveur-dediees/#disablesshkey) du guide correspondant.
>

Le mode rescue ne peut être activé que depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Sélectionnez votre serveur en allant dans la partie `Bare Metal Cloud`{.action}, puis `Serveurs dédiés`{.action}. 

Recherchez « Boot » dans la zone **Informations générales** et cliquez sur `...`{.action} puis sur `Modifier`{.action}.

![Changer le mode de démarrage](images/rescue-mode-001.png){.thumbnail}

Dans la page suivante, sélectionnez **Booter en mode rescue**. Si votre serveur dispose d’un système d’exploitation Linux, sélectionnez `rescue-customer`{.action} dans la liste déroulante. Si votre serveur est sous Windows, choisissez  `WinRescue`{.action} (voir la [section du guide ci-dessous](#windowsrescue). Spécifiez une autre adresse de messagerie si vous ne souhaitez **pas** que les identifiants de connexion soient envoyées à l'adresse principale de votre compte OVHcloud.
<br>Cliquez sur `Suivant`{.action} et `Valider`{.action}.

![Mode rescue-customer](images/rescue-mode-08.png){.thumbnail}

Une fois la modification terminée, cliquez sur `...`{.action} à droite de « Statut » dans la zone intitulée **Etat des services**. 
<br>Cliquez sur `Redémarrer`{.action} et le serveur redémarrera en mode rescue. Cette opération peut prendre quelques minutes. 
<br>Vous pouvez vérifier l'avancement sous l'onglet `Tâches`{.action}. Un e-mail vous sera envoyé, contenant les identifiants (dont le mot de passe de connexion)  de l'utilisateur « root » du mode rescue.

![Redémarrer le serveur](images/rescue-mode-02.png){.thumbnail}

Lorsque vous aurez terminé vos tâches en mode rescue, n'oubliez pas de redéfinir le netboot sur `Booter sur le disque dur`{.action} puis redémarrez votre serveur.

### Linux

#### Utilisation du mode rescue (SSH)

> [!primary]
> 
> Si vous utilisez une clé SSH (active également dans votre espace client OVHcloud), aucun mot de passe ne vous sera envoyé. Une fois le serveur en mode rescue, vous pourrez vous connecter directement avec votre clé SSH.
>

Après le redémarrage de votre serveur, vous recevrez un e-mail avec vos identifiants de connexion en mode rescue. Cet e-mail est également disponible dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Cliquez sur le nom associé à votre identifiant client dans le coin supérieur droit de votre espace client, puis sur `E-mails de service`{.action}.

Vous devrez ensuite accéder à votre serveur en ligne de commande ou via un outil SSH, en utilisant le mot de passe root généré pour le mode rescue.

Par exemple :

```bash
ssh root@your_server_IP
root@your_server_password:
```

> [!warning]
> 
> Votre client SSH bloquera probablement la connexion en premier lieu, en raison d'une incompatibilité de l'empreinte ECDSA. Ceci est normal, car le mode rescue utilise son propre serveur SSH temporaire.
>
> Pour contourner ce problème, vous pouvez commenter l'empreinte de votre système habituel en ajoutant un `#` devant sa ligne dans le fichier *known_hosts*. Prenez soin de retirer ce caractère avant le redémarrage du serveur en mode normal.
>

La plupart des modifications apportées à votre serveur via SSH en mode rescue nécessitent le montage d’une partition. En effet, ce mode possède son propre système de fichiers temporaires. Par conséquent, les modifications apportées au système de fichiers en mode rescue seront perdues lors du redémarrage du serveur en mode normal.

#### Montage des partitions

Le montage des partitions est réalisé à l’aide de la commande `mount` en SSH. Vous devez préalablement lister vos partitions, afin de pouvoir récupérer le nom de celle que vous souhaitez monter. Vous pouvez vous référer aux exemples de code suivants :

```bash
rescue-customer:~# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Lorsque vous avez identifié le nom de la partition que vous voulez monter, utilisez la commande ci-dessous :

```bash
rescue-customer:~# mount /dev/hda1 /mnt/
```

> [!primary]
>
> Votre partition va maintenant être montée. Vous pouvez alors effectuer des opérations sur le système de fichiers.
> 
> Si votre serveur dispose d’une configuration RAID logicielle, vous devez monter votre volume RAID (en général `/dev/mdX`).
>

Pour quitter le mode rescue, redéfinissez le mode de démarrage sur `Booter sur le disque dur`{.action} dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et redémarrez le serveur en ligne de commande.

#### Montage d'un datastore

Vous pouvez monter un datastore VMware de la même manière que décrite précédemment. Tout d'abord, installez le paquet nécessaire :

```bash
rescue-customer:~# apt-get update && apt-get install vmfs-tools
```

Listez ensuite vos partitions afin de récupérer le nom de la partition du datastore :

```bash
rescue-customer:~# fdisk -l
```

À présent, montez la partition avec la commande suivante, en remplaçant `sdbX` par la valeur identifiée à l'étape précédente :

```bash
rescue-customer:~# vmfs-fuse /dev/sdbX /mnt
```

Pour quitter le mode rescue, redéfinissez le mode de démarrage sur `Booter sur le disque dur`{.action} dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et redémarrez le serveur en ligne de commande.

### Windows <a name="windowsrescue"></a>

#### Utilisation des outils WinRescue

Après le redémarrage de votre serveur, vous recevrez un e-mail avec vos identifiants de connexion en mode rescue. Cet e-mail est également disponible dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Cliquez sur le nom associé à votre identifiant client dans le coin supérieur droit de votre espace client, puis sur `E-mails de service`{.action}.

Pour utiliser le mode rescue proposé par Windows, vous devez télécharger et installer une console VNC ou utiliser le module `IPMI` dans votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

![WinRescue Windows](images/rescue-mode-07.png){.thumbnail}

Les outils suivants sont déjà installés dans ce mode :

|Outil|Description|
|---|---|
|Mozilla ULight|Un navigateur web.|
|Memory Diagnostics Tool|Un outil Windows permettant de tester la mémoire RAM.|
|Explorer_Q-Dir|Un explorateur de fichiers.|
|GSmartControl|Un outil de vérification des disques durs et des disques durs SSD.|
|PhotoRec|Un outil de récupération de fichiers potentiellement perdus sur un disque.|
|SilverSHielD|Un serveur SSH2 et SFTP.|
|System Recovery|Un outil Windows de restauration et de dépannage du système.|
|TestDisk|Une puissante application de récupération de données. Elle vous permet de récupérer et de modifier des partitions corrompues, de trouver des partitions perdues, de réparer un secteur de démarrage et même de reconstruire un MBR défectueux.|
|FileZilla|Un client FTP open source. Il prend en charge les protocoles SSH et SSL, et dispose d'une interface glisser-déposer claire et intuitive. Il peut être utilisé pour transférer vos données vers un serveur FTP, comme la sauvegarde FTP fournie avec la plupart des modèles de serveurs OVHcloud.|
|7-ZIP|Un utilitaire de compression et d'archivage de fichiers qui lit les formats suivants : ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR et Z. Il vous permet également de créer vos propres archives dans les formats suivants : BZIP2, GZIP, TAR, WIM, XZ, Z et ZIP.|

## Aller plus loin

[Modifier le mot de passe administrateur sur un serveur dédié Windows](../changer-mot-passe-admin-windows/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
