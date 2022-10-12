---
title: Object Storage Swift - Utiliser l'Object Storage avec rClone
slug: pcs/sync-rclone-object-storage
section: Spécificités de la classe de stockage OpenStack Swift
order: 140
---

**Dernière mise à jour le 14/12/2017**

## Objectif

L'Object Storage d'OVH peut être synchronisé via rClone.

**Ce guide a pour objectif de vous rappeler les étapes pour effectuer cette synchronisation sur votre espace client OVH.**

rClone étant un logiciel de synchronisation externe, les détails d'utilisation de celui-ci sont à découvrir directement sur sa [documentation officielle](https://Rclone.org/).

## Prérequis

- Avoir créé son container *Object Storage* (depuis l'espace client ou depuis [Horizon](https://docs.ovh.com/fr/public-cloud/creer-un-conteneur-dobjets/){.external}).
- Avoir créé un [utilisateur OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external}.

## En pratique

Une fois votre container et votre utilisateur OpenStack créés, il vous reste deux choses à faire :

- Récupérer le fichier de configuration pour rClone :

Une fois votre [utilisateur OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external} créé vous pourrez choisir, dans votre espace client, de récupérer le fichier de configuration nécessaire pour rClone.

Pour cela, quand vous êtes sur la page des utilisateurs OpenStack dans votre espace client, cliquez sur `...`{.action} à droite de l'utilisateur puis sur `Télécharger un fichier de configuration Rclone`{.action}.

![Télécharger un fichier de configuration Rclone](images/pcs_sync_rclone_pcs-20211008090532581.png)

- Configurer rClone :

Une fois le fichier téléchargé, vous pouvez lancer la commande suivante afin d’ajouter votre nouvel espace de stockage :

```sh
rclone config
```

Vous serez invité à insérer les données de configuration présentes dans votre fichier.

> [!primary]
>
> Vous pouvez également copier-coller le contenu de votre fichier dans l'espace dédié aux configurations de Rclone (*.config/Rclone/Rclone.conf*).
>

Une fois votre configuration effectuée, vous pouvez la tester en listant par exemple vos containers :

```sh
rclone lsd BackupStorage
```

*BackupStorage* correspond au nom donné à votre espace de stockage.

Vous trouverez sur le site officiel de rClone une documentation précise des actions à effectuer pour synchroniser votre Object Storage et rClone : [Documentation officielle rClone](https://Rclone.org/swift/){.external}.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
