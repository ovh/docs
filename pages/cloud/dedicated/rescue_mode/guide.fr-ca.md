---
title: 'Activer et utiliser le mode rescue'
slug: ovh-rescue
excerpt: 'Comment activer et utiliser le mode rescue sur un serveur dédié'
section: 'Diagnostic et mode Rescue'
---

**Dernière mise à jour le 04/04/2019**

## Objectif

Le mode rescue est un outil de votre serveur dédié. Il vous permet de démarrer sur un système d’exploitation temporaire, dans le but de diagnostiquer et de résoudre les problèmes.

**Découvrez comment activer et utiliser le mode rescue de votre serveur.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/nvlAbXNM8Bk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prérequis

- Avoir un accès en SSH (root) à votre [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}.


## En pratique

Vous pouvez activer le mode rescue en vous connectant à votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager/){.external}. Sélectionnez votre serveur en allant dans la partie `Dédié`{.action}, puis `Serveurs dédiés`{.action}. Cliquez ensuite successivement sur `État du serveur`{.action}, `Informations générales`{.action}, `…`{.action} et `Modifier`{.action} pour changer le mode de démarrage.

![Changer le mode de démarrage](images/rescue-mode-01.png){.thumbnail}

Dans l’écran suivant, sélectionnez `Booter en mode rescue`{.action}. Si votre serveur dispose d’un système d’exploitation Linux, sélectionnez `rescue64-pro`{.action} dans la liste déroulante. Si votre serveur s'exécute sous Windows ou FreeBSD, choisissez respectivement `WinRescue`{.action} ou `bsd-rescue-pro`{.action}. Pour terminer, entrez votre adresse e-mail dans le champ de texte puis cliquez sur `Suivant`{.action}.

![Mode rescue-pro](images/rescue-mode-03.png){.thumbnail}

Confirmez vos options sur l’écran suivant, puis redémarrez votre serveur pour appliquer les modifications. 

![Redémarrer le serveur](images/rescue-mode-02.png){.thumbnail}

Votre serveur va maintenant redémarrer en mode rescue. Vous recevrez ensuite les informations pour vous connecter, via l’adresse e-mail fournie précédemment. Pour quitter le mode rescue, changez simplement le mode de démarrage en `Booter sur le disque dur`{.action} puis redémarrez votre serveur.

### Linux

#### Utiliser l’interface web

Après le redémarrage de votre serveur, vous recevrez un e-mail avec vos identifiants de connexion en mode rescue. Il contiendra également un lien vers l’interface web du mode rescue, qui vous permettra d’effectuer les tests suivants :

- disques durs : vérification de leur intégrité avec des tests SMART ;
- processeurs : vérification de leur fonctionnement normal (cette opération nécessite un certain temps) ;
- partitions (état) : vérification de l’état des lecteurs ;
- partitions (système de fichiers) : vérification du système de fichiers du serveur ; 
- partitions (explore) : lancement d’un navigateur pour explorer les fichiers. Il n’est pas possible de les éditer avec cet outil, mais vous pouvez en faire une sauvegarde ;
- mémoire : vérification de la RAM installée (cette opération nécessite un certain temps) ;
- réseau : vérification de la connexion à un système de référence interne à OVH ainsi que de la connexion à votre navigateur.

![Interface web du mode rescue](images/rescue-mode-04.png){.thumbnail}

#### Utiliser le SSH (lignes de commande)


> [!primary]
> 
> Si vous utilisez une clé SSH (active également dans votre espace client OVH), aucun mot de passe ne vous sera envoyé. Une fois le serveur en mode rescue, vous pourrez vous connecter directement avec votre clé SSH.
>

Après le redémarrage de votre serveur, vous recevrez un e-mail avec vos identifiants de connexion en mode rescue. Vous devrez alors joindre votre serveur via les lignes de commande habituelles, mais en utilisant le mot de passe root du mode rescue au lieu du vôtre.

Par exemple :

```sh
ssh root@your_server_IP
root@your_server_password:
```
> [!warning]
> 
> Votre client SSH bloquera probablement la connexion, en raison d'une incompatibilité de l'empreinte ECDSA. Ceci est normal, car le mode rescue utilise son propre serveur SSH temporaire.
>
> Pour contourner ce problème, vous pouvez commenter l'empreinte de votre système habituel en ajoutant un `#` devant sa ligne dans le fichier « known_hosts ». Ce changement sera réinitialisé lors d'un redémarrage du serveur en mode normal.
>

La plupart des modifications apportées à votre serveur via SSH en mode rescue nécessitent le montage d’une partition. En effet, ce mode possède son propre système de fichiers temporaire. Par conséquent, les modifications apportées au système de fichiers en mode rescue seront perdues lors du redémarrage du serveur en mode normal.

Le montage des partitions est réalisé à l’aide de la commande `mount` en SSH. Vous devez préalablement lister vos partitions, afin de pouvoir récupérer le nom de celle que vous souhaitez monter. Vous pouvez vous référer aux exemples de code suivants :

```sh
rescue:~# fdisk -l

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

Lorsque vous avez identifié le nom de la partition que vous voulez monter, utilisez la commande ci-dessous :

```sh
rescue:~# mount /dev/hda1 /mnt/
```

> [!primary]
>
> Votre partition va maintenant être montée. Vous pouvez alors effectuer des opérations sur le système de fichiers.
> 
> Si votre serveur dispose d’une configuration RAID logicielle, vous devez monter votre volume RAID (en général `/dev/mdX`).
>


### Windows

#### Accéder à WinRescue

Après le redémarrage de votre serveur, vous recevrez un e-mail avec vos identifiants de connexion en mode rescue. Pour les utiliser, vous devez télécharger et installer une console VNC ou utiliser le module `IPMI` dans votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager/){.external}.

![WinRescue Windows](images/rescue-mode-06.png){.thumbnail}

#### Outils WinRescue

|Outils|Description|
|---|---|
|Firefox|Un navigateur web.|
|Freecommander|Un gestionnaire de fichiers avec toutes les fonctionnalités standards dont vous avez besoin.|
|NTPWEdit|Un gestionnaire de mots de passe facile à utiliser. Il vous permet de réactiver ou de modifier les mots de passe des comptes utilisateur dans votre serveur. Cet outil est pratique en cas de perte d'informations de connexion ou pour la réactivation d'un compte de sécurité.|
|Avast Virus Cleaner|Une application antivirus avec des capacités de balayage et de nettoyage des fichiers.|
|ActivNIC|Un outil vous permettant de réactiver une carte d'interface réseau.|
|BootSect|Un outil vous permettant de réparer le secteur d'amorçage.|
|Virtual Clone Drive|Un outil vous permettant de monter des fichiers BIN, CCD et ISO dans un lecteur de CD virtuel.|
|smartCTL|Un outil vous permettant d'accéder aux propres logs de monitoring des disques durs.|
|Diskpart|Un outil vous permettant de manipuler les partitions du serveur.|
|SysInternal|Une suite logicielle de Microsoft vous permettant d’effectuer la maintenance du réseau et de gérer les processus.|
|TestDisk|Une puissante application de récupération de données. Elle vous permet de récupérer et de modifier des partitions corrompues, de trouver des partitions perdues, de réparer un secteur de démarrage et même de reconstruire un MBR défectueux.|
|FileZilla|Un client FTP open source. Il prend en charge les protocoles SSH et SSL, et dispose d'une interface glisser-déposer claire et intuitive. Il peut être utilisé pour transférer vos données vers un serveur FTP, comme la sauvegarde FTP fournie avec la plupart des modèles de serveurs OVH.|
|7-ZIP|Un utilitaire de compression et d'archivage de fichiers qui lit les formats suivants : ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR et Z. Il vous permet également de créer vos propres archives dans les formats suivants : BZIP2, GZIP, TAR, WIM, XZ, Z et ZIP.|

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
