---
title: "Activer et utiliser le mode rescue"
excerpt: "Découvrez comment utiliser le mode rescue OVHcloud pour dépanner votre serveur dédié"
updated: 2024-08-23
---

## Objectif

Le mode Rescue est un outil fourni par OVHcloud qui vous permet de démarrer sur un système d'exploitation temporaire dans le but de diagnostiquer et de résoudre les problèmes sur votre serveur.

Le mode rescue est généralement adapté aux tâches suivantes :

- [Réinitialisation du mot de passe de l'utilisateur](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- [Diagnostic des problèmes réseau](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- Réparation d'un système d'exploitation défectueux
- Correction d'une configuration incorrecte d'un pare-feu logiciel
- [Test des performances des disques](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- [Test du processeur et de la mémoire RAM](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

> [!warning]
>
> Prenez soin d'effectuer une sauvegarde de vos données si vous ne disposez pas encore de sauvegardes récentes.
>
> Si vous avez des services en production sur votre serveur, le mode rescue les interrompt tant que la machine n’a pas été redémarrée en mode normal.
> 

**Ce guide vous explique comment redémarrer un serveur en mode rescue et monter des partitions.**

## Prérequis

- Posséder un [serveur dédié](/links/bare-metal/bare-metal).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

Le mode rescue ne peut être activé que depuis votre [espace client OVHcloud](/links/manager). Sélectionnez votre serveur en allant dans la partie `Bare Metal Cloud`{.action}, puis `Serveurs dédiés`{.action}. 

Recherchez « Boot » dans la zone **Informations générales** et cliquez sur `...`{.action} puis sur `Modifier`{.action}.

![Changer le mode de démarrage](images/rescue-mode-001.png){.thumbnail}

Sur la page suivante, sélectionnez **Booter en mode rescue**.

### Rescue Linux

Si votre serveur dispose d’un système d’exploitation Linux, sélectionnez `rescue-customer`{.action} dans le menu déroulant.

Dans cette situation, deux modes d'authentification vous sont proposés :

- Authentification par mot de passe
- Authentification par clé SSH

#### Authentification par clé SSH

> [!primary]
> 
> Si vous choisissez l'authentification par clé SSH, veillez à ce que votre clé SSH publique respecte l'un des formats parmi `RSA`, `ECDSA`, ou `ED25519`.
>

Sélectionnez l'option « Authentification par clé SSH » puis saisissez votre clé SSH **publique** dans la zone de texte dédiée.

![Authentification par clé SSH](images/rescue-mode-08.png){.thumbnail}

> [!primary]
> 
> Vous pouvez ajouter une clé SSH par défaut pour le mode rescue d'un serveur via l'API OVHcloud. Pour plus d'informations, consultez [cette partie de ce guide](#rescuessh).
>

#### Authentification par mot de passe

Sélectionnez l'option « Authentification par mot de passe ».<br>
Les identifiants de connexion seront envoyés par défaut sur l'adresse e-mail principale de votre compte OVHcloud. Vous avez la possibilité de renseigner une adresse différente dans le champ `Recevoir les identifiants du mode sur l'adresse e-mail`.

![Authentification par mot de passe Linux](images/rescue-mode-09.png){.thumbnail}

### Rescue Windows

Pour les serveurs disposant d'un système d'exploitation Windows, consultez le [guide dédié](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

L'option `WinRescue`{.action} peut également vous être proposée en fonction de votre serveur. Pour plus d'informations sur ce mode, consultez la [section du guide ci-dessous](#windowsrescue)). Veuillez noter que seule l'authentification par mot de passe est disponible avec ce type de mode rescue.

Spécifiez une autre adresse e-mail si vous ne souhaitez **pas** que les identifiants de connexion soient envoyées à l'adresse principale de votre compte OVHcloud.

![Authentification par mot de passe Windows](images/rescue-mode-10.png){.thumbnail}

### Etapes finales

Cliquez sur `Suivant`{.action} et `Valider`{.action}.

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

Après le redémarrage de votre serveur, vous recevrez un e-mail avec vos identifiants de connexion en mode rescue. Cet e-mail est également disponible dans votre [espace client OVHcloud](/links/manager). Cliquez sur le nom associé à votre identifiant client dans le coin supérieur droit de votre espace client, puis sur `E-mails de service`{.action}.

Vous devrez ensuite accéder à votre serveur en ligne de commande ou via un outil [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), en utilisant le mot de passe root généré pour le mode rescue.

Par exemple :

```bash
ssh root@ns3956771.ip-169-254-10.eu
root@ns3956771.ip-169-254-10.eu's password:
```

> [!warning]
>
> Votre client SSH bloquera probablement la connexion dans un premier temps en raison d'une incompatibilité de l'empreinte ECDSA. Ceci est normal car le mode rescue utilise son propre serveur SSH temporaire.
>
> Une façon de contourner ce problème est de « commenter » l'empreinte de votre serveur en ajoutant un `#` devant sa ligne dans le fichier `known_hosts`. N’oubliez pas d’annuler cette modification avant de repasser le netboot en mode « normal ».<br>Vous pouvez également supprimer la ligne du fichier. Votre client SSH ajoutera alors une nouvelle entrée d'empreinte pour le serveur lorsque la connexion sera à nouveau établie. Si vous avez besoin d'instructions plus détaillées, reportez-vous à notre guide « [Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction#login) ».
>

#### Montage des partitions

À moins que vous configuriez les disques du serveur d'une manière qui nécessite qu'ils soient détachés (*unmounted*), vous devez d'abord monter la partition système.

Le montage des partitions est réalisé à l’aide de la commande `mount` en SSH. Vous devez préalablement lister vos partitions, afin de pouvoir récupérer le nom de celle que vous souhaitez monter. Vous pouvez vous référer aux exemples de code suivants :

```bash
fdisk -l
```

```console
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
mount /dev/hda1 /mnt/
```

> [!primary]
>
> Votre partition va maintenant être montée. Vous pouvez alors effectuer des opérations sur le système de fichiers.
> 
> Si votre serveur dispose d’une configuration RAID logicielle, vous devez monter votre volume RAID (en général `/dev/mdX`).
>

Pour quitter le mode rescue, redéfinissez le mode de démarrage sur `Booter sur le disque dur`{.action} dans l'[espace client OVHcloud](/links/manager) et redémarrez le serveur en ligne de commande.

#### VMware - Montage d'un datastore

Vous pouvez monter un datastore VMware de la même manière que décrite dans l'étape précédente.

Listez vos partitions afin de récupérer le nom de la partition du datastore :

```bash
fdisk -l
```

Montez la partition avec la commande suivante, en remplaçant `sdbX` par la valeur identifiée à l'étape précédente :

```bash
vmfs-fuse /dev/sdbX /mnt
```

Si vous avez des datastores `VMFS 6`, accédez au dossier `sbin` et créez le dossier de montage :

```bash
cd /usr/local/sbin/
mkdir /mnt/datastore
```

Listez vos partitions afin de récupérer le nom de la partition du datastore :

```bash
fdisk -l
```

Montez la partition avec la commande suivante, en remplaçant `sdbX` par la valeur identifiée à l'étape précédente :

```bash
vmfs6-fuse /dev/sdbX /mnt/datastore/
```

Pour quitter le mode rescue, redéfinissez le mode de démarrage sur `Booter sur le disque dur`{.action} dans l'[espace client OVHcloud](/links/manager) et redémarrez le serveur en ligne de commande.

### Windows <a name="windowsrescue"></a>

Pour les serveurs disposant d'un système d'exploitation Windows, consultez le [guide dédié](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

#### Utilisation des outils WinRescue (déprécié)

Après le redémarrage de votre serveur, vous recevrez un e-mail avec vos identifiants de connexion en mode rescue. Cet e-mail est également disponible dans votre [espace client OVHcloud](/links/manager). Cliquez sur le nom associé à votre identifiant client dans le coin supérieur droit de votre espace client, puis sur `E-mails de service`{.action}.

Pour utiliser le mode rescue proposé par Windows, vous devez télécharger et installer une console VNC ou utiliser le module `IPMI` dans votre [espace client OVHcloud](/links/manager).

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

<a name="rescuessh"></a>

### Comment ajouter une clé SSH par défaut pour le mode rescue

Pour accélérer le processus, vous pouvez ajouter une clé SSH par défaut pour le mode rescue de votre serveur via l'[API OVHcloud](/pages/manage_and_operation/api/first-steps).

Pour ce faire, dans la console Web API, ouvrez le point de terminaison API suivant :

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Renseignez le nom interne de votre serveur dans le champ approprié.

Modifiez ensuite le champ de texte ci-dessous comme suit :

```bash
{
  "rescueSshKey": "string"
}
```

Remplacez `string` par votre clé publique SSH.

Le résultat doit ressembler à ce qui est indiqué dans l'exemple suivant :

![rescue key example](images/rescuekey.png){.thumbnail}

Une fois les valeurs correctement entrées, cliquez sur le bouton `TRY`{.action}.

Le champ de clé SSH sera désormais automatiquement rempli avec cette chaîne de clé lors du changement de mode Netboot.

## Aller plus loin

[Modifier le mot de passe administrateur sur un serveur dédié Windows](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows)

Échangez avec notre [communauté d'utilisateurs](/links/community).
