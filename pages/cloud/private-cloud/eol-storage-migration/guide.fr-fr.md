---
title: End-of-life management for LV1 and LV2 storage.
slug: eol-storage-migration
excerpt: Marche à suivre pour effectuer une migration de stockage
section: FAQ
order: 005
---

**Dernière mise à jour le 10/01/2023**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Objectif

Certains stockages ne seront plus disponibles à la fin Mars 2023 car ils ne seront plus maintenus comme indiqué dans ce guide [Cycle de vie du Hosted Private Cloud powered by VMware](https://docs.ovh.com/fr/private-cloud/lifecycle-policy/#datastores-stockage)

Nous allons parcourir l'ensemble des étapes de migration de vos données vers un stockage plus récent et désasctiver votre stockage obsolète.

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant actif dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Avoir un identifiant actif dans vSphere.

## En pratique

### Ajout d'un stockage

Utilisez ce guide pour ajouter un stockage plus important si vous n'avez pas encore souscrit une offre plus récente.

[Comment ajouter de l’espace de stockage ?](https://docs.ovh.com/fr/private-cloud/additional-storage/)

### Migration de vos machines virtuelles

Allez dans votre interface vCenter et vérifiez les machines virtuelles qui se trouvent sur chacun de vos datastore obsolètes.

Cliquez sur l'icône de `stockage`{.action}, choisissez à gauche votre `Datastore`{.action} dans `Shared Storage`{.action} et cliquez sur l'onglet `VM`{.action} pour faire apparaitre les machines virtuelles qui se trouvent sur ce stockage obsolète.

![01 check existing VM on datastore 01](images/01-check-existing-vm-on-datastore01.png)

Ensuite Utiliser Storage migration pour migrer les données de votre datastore obsolète vers votre nouveau datastore.

Vous pouvez utiliser ce guide pour effectuer la migration VMware Storage vMotion [VMware Storage vMotion](https://docs.ovh.com/fr/managed-bare-metal/vmware-storage-vmotion-new/#finaliser-le-vmotion).

Lorsque vous n'aurez plus de machines virtuelles sur votre stockage vous pourrez supprimer votre DataStore

### Suppression du stockage de votre cluster VMware

Aidez-vous de ce guide pour supprimer votre stockage obsolète [Supprimer un datastore](https://docs.ovh.com/fr/private-cloud/suppression-data-store/)

> [!warning]
> Après avoir supprimé votre Datastore il faudra aller dans votre espace client pour arrêter la souscription à ce service.
>


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
