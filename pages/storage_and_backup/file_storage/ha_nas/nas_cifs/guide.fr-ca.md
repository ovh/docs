---
title: Monter un NAS-HA via un partage CIFS
excerpt: Configurer et monter un NAS-HA via le protocole CIFS
updated: 2025-10-23
---

## Objectif

**Découvrez comment configurer et monter votre espace de stockage NAS-HA OVHcloud via le protocole CIFS.**

## Prérequis

- Un [serveur dédié](/links/bare-metal/bare-metal) **ou** un [VPS](/links/bare-metal/vps) **ou** une [instance Public Cloud](/links/public-cloud/public-cloud).
- Une offre [NAS-HA](/links/storage/nas-ha).

## En pratique

### Configuration pour Microsoft Windows

- **Windows Server 2008** : cliquez sur le menu `Démarrer`{.action} > `Tous les programmes`{.action} > `Accessoires`{.action} > `Invite de commandes`{.action}.
- **Windows Server 2012** : cliquez sur l'icône `Windows PowerShell`{.action} dans la barre de tâches.
- **Windows Server 2016/2019/2022/2025** : cliquez sur le menu `Démarrer`{.action}, puis sur l'icône du `Windows PowerShell`{.action}.


Exécutez ensuite la commande suivante :

```bash
net use z: \\IP_SERVEUR_CIFS\CHEMIN_CIFS
```

#### Exemple

- Montage CIFS pour un NAS-HA :

```bash
net use z: \\10.16.101.8\zpool-000206_NOM_PARTITION_1
```

> [!alert]
>
> L'utilisateur SMB/CIFS est `nobody`, toute modification de droits effectuée par cet utilisateur peut générer des conflits avec des droits NFS existants.
>

Les messages d'erreur suivants peuvent s'afficher :

```console
System error 1272 has occurred.

You can't access this shared folder because your organization's security policies block unauthenticated guest access. These policies help protect your PC from unsafe or malicious devices on the network.
```

```console
System error 3227320323 has occurred.
```

> [!primary]
>
> Pour corriger ces erreurs, reportez-vous à la documentation officielle de Microsoft :<br>
> [Comment activer les ouvertures de session invité non sécurisées dans SMB2 et SMB3](https://learn.microsoft.com/fr-fr/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=powershell).<br>
> [Contrôler le comportement de la signature SMB](https://learn.microsoft.com/fr-fr/windows-server/storage/file-server/smb-signing?tabs=powershell).


### Configuration pour Linux

Connectez-vous via SSH à votre serveur et tapez la commande suivante :

```sh
mount -t cifs -o uid=root,gid=100,dir_mode=0700,username=root,password= //IP_SERVEUR_CIFS/CHEMIN_CIFS /mnt/FolderMount
```

> [!warning]
>
> Pour monter des partages par nom d'hôte (par opposition aux adresses IP), l'utilitaire `mount.cifs` est requis. Il fait généralement partie du paquet `cifs-utils`.
>
> `mount.cifs` est un wrapper qui résout les noms d'hôte et ajoute le paramètre `ip=` aux paramètres de montage transmis au noyau.
>
> Sans `mount.cifs`, les tentatives de montage par nom d'hôte entraîneront l'erreur suivante :
>
> ```text
> mount: /mnt/FolderMount: mount(2) system call failed: No route to host.
>        dmesg(1) may have more information after failed mount system call.
> ```
>

## Aller plus loin

[Les questions fréquentes concernant le NAS](/pages/storage_and_backup/file_storage/ha_nas/nas_faq)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
