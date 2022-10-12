---
title: Monter un NAS-HA sur Windows Server via CIFS
slug: nas/cifs
excerpt: Decouvrez comment monter un NAS-HA sur Windows Server via CIFS
section: NAS
order: 04
---

**Dernière mise à jour le 22/11/2021**

## Objectif

Configurez et montez votre espace de stockage NAS-HA OVHcloud sur Windows Server via CIFS.

## Prérequis

- Un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/) **ou** un [VPS](https://www.ovhcloud.com/fr-ca/vps/) **ou** une [instance Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) avec une distribution Windows.
- Une offre [NAS-HA](https://www.ovh.com/ca/fr/nas/).

### Configuration

- **Windows Server 2008** : cliquez sur le menu `Démarrer`{.action} > `Tous les programmes`{.action} > `Accessoires`{.action} > `Invite de commandes`{.action}.
- **Windows Server 2012** : cliquez sur l'icône `Windows PowerShell`{.action} dans la barre de tâches.
- **Windows Server 2016** : cliquez sur le menu `Démarrer`{.action}, puis sur l'icône du `Windows PowerShell`{.action}.
- **Windows Server 2019** : cliquez sur le menu `Démarrer`{.action}, puis sur l'icône du `Windows PowerShell`{.action}.

Exécutez ensuite la commande suivante :

```bash
net use z: \\IP_SERVEUR_CIFS\CHEMIN_CIFS
```

### Exemple

- Montage CIFS pour un NAS-HA :

```bash
net use z: \\10.16.101.8\zpool-000206_NOM_PARTITION_1
```

> [!alert]
>
> L'utilisateur SMB/CIFS est `nobody`, toute modification de droits effectuée par cet utilisateur peut générer des conflits avec des droits NFS existants.
> 

## Aller plus loin

[Les questions fréquentes concernant le NAS](https://docs.ovh.com/ca/fr/storage/faq-nas/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
