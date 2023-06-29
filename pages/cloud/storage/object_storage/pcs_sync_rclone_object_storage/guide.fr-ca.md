---
title: Object Storage Swift - Utiliser le Stockage d’objet avec rClone
updated: 2021-10-27
---

**Dernière mise à jour le 2018/01/25**

## Objectif

Le Stockage d’objet d'OVH peut être synchronisé via rClone.

**Ce guide a pour objectif de vous rappeler les étapes pour effectuer cette synchronisation sur votre espace client OVH.**

rClone étant un logiciel de synchronisation externe, les détails d'utilisation de celui-ci sont à découvrir directement sur sa [documentation officielle](https://Rclone.org/).

## Prérequis

- Avoir créé son container *Stockage d’objet* (depuis [l'espace client](/pages/cloud/storage/object_storage/pcs_create_container){.external}.
- Avoir créé un [utilisateur OpenStack](/pages/platform/public-cloud/create_and_delete_a_user){.external}.

## En pratique

Une fois votre conteneur et votre utilisateur OpenStack créés, il vous reste deux choses à faire :

- Récupérer le fichier de configuration pour rClone :

Une fois votre [utilisateur OpenStack](/pages/platform/public-cloud/create_and_delete_a_user){.external} créé vous pourrez choisir, dans votre espace client, de récupérer le fichier de configuration nécessaire pour rClone.

Pour cela, quand vous êtes sur la page des utilisateurs OpenStack dans votre espace client, cliquez sur la clé à molette à droite de l'utilisateur puis sur `Télécharger un fichier de configuration rClone`{.external}.

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

Une fois votre configuration effectuée, vous pouvez la tester en listant par exemple vos conteneurs :

```sh
Rclone lsd BackupStorage
```

*BackupStorage* correspond au nom donné à votre espace de stockage.

Vous trouverez sur le site officiel de rClone une documentation précise des actions à effectuer pour synchroniser votre Stockage d’objet et rClone : [Documentation officielle rClone](https://Rclone.org/swift/){.external}.


## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
