---
title: Utiliser l'Object Storage avec rClone
slug: sync-rclone-object-storage
section: Object Storage
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

Pour cela, quand vous êtes sur la page des utilisateurs OpenStack dans votre espace client, cliquez sur la clé à molette à droite de l'utilisateur puis sur `Télécharger un fichier de configuration rClone`{.action}.

![Télécharger un fichier de configuration rClone](images/download_file.png){.thumbnail}


- Configurer rClone :

Une fois le fichier téléchargé, vous pouvez lancer la commande suivante afin d’ajouter votre nouvel espace de stockage :

```sh
Rclone config
```

Vous serez invité à insérer les données de configuration présentes dans votre fichier.

> [!primary]
>
> Vous pouvez également copier-coller le contenu de votre fichier dans l'espace dédié aux configurations de Rclone (*.config/Rclone/Rclone.conf*).
> 

Une fois votre configuration effectuée, vous pouvez la tester en listant par exemple vos containers :

```sh
Rclone lsd BackupStorage
```

*BackupStorage* correspond au nom donné à votre espace de stockage.

Vous trouverez sur le site officiel de rClone une documentation précise des actions à effectuer pour synchroniser votre Object Storage et rClone : [Documentation officielle rClone](https://Rclone.org/swift/){.external}.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.