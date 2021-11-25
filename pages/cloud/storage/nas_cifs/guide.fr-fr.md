---
title: Monter votre NAS sur Windows Serveur via CIFS
slug: nas/nas-cifs
excerpt: Decouvrez comment monter un NAS sur un Windows Serveur via CIFS.
section: NAS
---

**Dernière mise à jour le 22/11/2021**

## Objectif

Configurez et montez votre espace de stockage NAS-HA OVHcloud sur votre serveur Windows via CIFS.

## Prérequis

- Posséder un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) , un [VPS](https://www.ovhcloud.com/fr/vps/) ou une [instance Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) avec une distribution Windows.
- Posséder une offre de [NAS-HA](https://www.ovh.com/fr/nas/).


### Configuration

- (Windows Serveur 2008) Cliquez sur le menu "Démarrez" > "Tous les programmes" > "Accessoires" > "Invite de commandes".
- (Windows Serveur 2012) Cliquez sur l'icône "Windows PowerShell" dans la barre des tâches.
- (Windows Serveur 2016) Cliquez sur le menu "Démarrez", puis sur l'icône du "Windows PowerShell".
- (Windows Serveur 2019) Cliquez sur le menu "Démarrez", puis sur l'icône du "Windows PowerShell".

Exécutez ensuite la commande suivante :

```bash
net use z: \\IP_SERVEUR_CIFS\CHEMIN_CIFS
```

### Exemples

- Montage CIFS pour un Mini-NAS :

```bash
net use z: \\10.16.100.10\nas-000041_mininas-000212
```

- Montage CIFS pour un NAS ou NAS-HA :

```bash
net use z: \\10.16.101.8\zpool-000206\partition1
```

> [!alert]
>
> L'utilisateur SMB/CIFS est "nobody", les modifications de droits avec cet utilisateur peut générer des conflits avec des droits NFS existants.
> 


## Aller plus loin

[Les questions fréquentes concernant le NAS](https://docs.ovh.com/fr/storage/faq-nas/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.