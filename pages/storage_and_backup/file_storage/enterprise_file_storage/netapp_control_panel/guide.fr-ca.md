---
title: "Enterprise File Storage - Gestion depuis l'espace client OVHcloud"
excerpt: Découvrez comment gérer votre service Enterprise File Storage depuis votre espace client OVHcloud
updated: 2024-12-13
---

## Objectif

Les services Enterprise File Storage peuvent être gérés [via les API OVHcloud](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_quick_start) ou depuis votre [espace client OVHcloud](/links/manager).

**Découvrez comment gérer les volumes et les snapshots de votre offre Enterprise File Storage depuis votre espace client OVHcloud.**

## Prérequis

- Avoir un service Enterprise File Storage dans votre compte OVHcloud. Le service peut être commandé depuis la [page produit](/links/storage/enterprise-file-storage) ou depuis l'[espace client OVHcloud](/links/manager).
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique <a name="instructions"></a>

Connectez-vous à votre [espace client OVHcloud](/links/manager) et sélectionnez `Bare Metal Cloud`{.action} dans la barre de navigation supérieure. Ouvrez `Stockage et sauvegarde`{.action} puis `Enterprise File Storage`{.action} dans le menu de gauche et sélectionnez votre service dans la liste.

![Informations générales](images/manage_enterprise01.png){.thumbnail}

L'onglet `Informations générales`{.action} affiche des informations techniques sur votre service, des informations générales sur l'abonnement ainsi qu'un raccourci pour [créer un volume](#create_volume).

> [!primary]
> Consultez la page [Concepts](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_concepts) pour obtenir des informations détaillées sur les propriétés techniques de la solution Enterprise File Storage.
>

### Gestion des volumes <a name="manage_volume"></a>

Cliquez sur l'onglet `Volumes`{.action}. Le tableau répertorie tous les volumes créés pour le service sélectionné. Vous pouvez cliquer sur un identifiant de volume pour ouvrir sa [page de gestion](#modify_volume).

![Volumes](images/manage_enterprise02.png){.thumbnail}

Vous pouvez effectuer plusieurs actions en cliquant sur le bouton `...`{.action} dans chaque ligne du tableau.

- **Modifier le volume** : ouvre la section « [Informations générales](#modify_volume) » du volume.
- **Créer un snapshot** : ouvre la section « [Snapshots](#snapshots) » ainsi qu'une fenêtre afin d'effectuer un snapshot manuel du volume.
- **Restaurer le dernier snapshot** : ouvre la section « [Snapshots](#snapshots) » ainsi qu'une fenêtre permettant de restaurer le volume.
- **Gérer les snapshots** : ouvre la section « [Snapshots](#snapshots) » du volume.
- **Gérer IP Access (ACL)** : ouvre la section « [ACL](#access_control) » permettant de gérer le contrôle d'accès au volume.
- **Modifier la taille** : ouvre une fenêtre permettant de changer la taille du volume.
- **Supprimer le volume** : permet de supprimer ce volume, une fois l'action confirmée dans la fenêtre qui apparaît alors.

#### Création d'un volume <a name="create_volume"></a>

Cliquez sur le bouton `Créer un volume`{.action}. Dans la nouvelle fenêtre qui apparaît, entrez le nom et la description du volume. Déterminez la taille en GB et cliquez sur `Créer un volume`{.action} pour valider la création.

![Volume creation](images/manage_enterprise03.png){.thumbnail}

#### Modification d'un volume <a name="modify_volume"></a>

Cliquez sur un ID de volume dans le tableau pour ouvrir la page de gestion de ce volume.

L'onglet `Informations générales`{.action} affiche les détails de votre volume, ainsi que des instructions détaillées sur la connexion au volume, y compris les paramètres individuels.

![Volume management](images/manage_enterprise04.png){.thumbnail}

Depuis cet onglet, vous pouvez également modifier le nom ainsi que la description du volume.

#### Suppression d'un volume <a name="delete_volume"></a>

Vous pouvez supprimer un volume en cliquant sur le bouton `...`{.action} dans le tableau depuis l'onglet `Volumes`{.action}, puis sur `Supprimer le volume`{.action}.

![Volume delete](images/manage_enterprise05.png){.thumbnail}

Tapez `DELETE` puis cliquez sur `Confirmer`{.action} pour valider la suppression.

### Gestion des snapshots d'un volume <a name="snapshots"></a>

> [!primary]
>
> Les snapshots utilisent la capacité de stockage de votre solution Enterprise File Storage. Par défaut, 5 % de la taille d'un volume sont toujours réservés aux snapshots.
>

L'onglet `Snapshots`{.action} répertorie tous les snapshots créés pour le volume sélectionné.

![Snapshots](images/manage_enterprise06.png){.thumbnail}

Dans le même onglet, vous pouvez également afficher toutes les [politiques de snapshots](#snapshot_policy) créées pour le service et les appliquer à ce volume.

![Volume Snapshot Policy Management](images/manage_enterprise07.png){.thumbnail}

Cliquez sur la ligne de la règle concernée pour consulter les détails de la planification des snapshots. Sélectionnez une politique via le bouton de sélection dédié, puis cliquez sur le bouton `Appliquer la policy`{.action} en dessous du tableau.

Afin de configurer vos [politiques de snapshot](#snapshot_policy), revenez à la section [Gestion des volumes](#instructions) de votre service et ouvrez l'onglet `Snapshot policies`{.action}.

#### Création d'un snapshot <a name="create_snapshot"></a>

Pour créer un nouveau snapshot d'un volume dans son état actuel, cliquez sur le bouton `Actions`{.action} puis sur `Créer un snapshot`{.action}.

![Snapshot create](images/manage_enterprise08.png){.thumbnail}

Dans la nouvelle fenêtre qui s'affiche, vous pouvez saisir un nom et une description.

Cliquez sur le bouton `Créer un snapshot`{.action} pour lancer la création.

![Snapshot create window](images/manage_enterprise09.png){.thumbnail}

#### Modification d'un snapshot <a name="modify_snapshot"></a>

Vous pouvez modifier le nom ou la description d'un snapshot en cliquant sur le bouton `...`{.action} dans le tableau, puis cliquez sur `Éditer`{.action}. Une fenêtre s'ouvrira alors vous permettant de choisir un nouveau nom et/ou description.

![Snapshot edit](images/manage_enterprise10.png){.thumbnail}

Cliquez sur `Confirmer`{.action} afin de valider vos modifications.

![Snapshot edit window](images/manage_enterprise11.png){.thumbnail}

#### Suppression d'un snapshot <a name="delete_snapshot"></a>

> [!warning]
>
> Il n'est pas possible de supprimer un snapshot de type `système`.
> Ceux-ci sont indispensables au bon fonctionnement de votre offre Enterprise File Storage.
>

Vous pouvez supprimer un snapshot en cliquant sur le bouton `...`{.action} dans le tableau, puis sur `Supprimer`{.action}.

![Snapshot delete](images/manage_enterprise12.png){.thumbnail}

Cliquez sur `Supprimer un snapshot`{.action} afin de valider la suppression.

![Snapshot delete confirmation](images/manage_enterprise13.png){.thumbnail}

#### Restauration du volume en utilisant un snapshot <a name="restore_volume"></a>

> [!warning]
>
> Veuillez noter qu'une fois qu'un volume est restauré à l'aide d'un snapshot, tous les fichiers ou snapshots créés ultérieurement seront perdus.
> Lorsqu'un volume est restauré, toutes les données qu'il contient sont remplacées par les données du snapshot. Cette action est irréversible.
>

Il est possible de restaurer un volume en utilisant le dernier snapshot `manuel`. Cliquez sur le bouton `Actions`{.action} puis sur `Restaurer le dernier snapshot`{.action}.

> [!primary]
>
> Afin de restaurer le volume en utilisant un snapshot antérieur au dernier snapshot, il est nécessaire de supprimer les snapshots jusqu'à ce que le snapshot à utiliser pour la restauration soit le plus récent.
>

![Volume revert to latest snapshot](images/manage_enterprise14.png){.thumbnail}

#### Sauvegarde d'un snapshot automatique <a name="hold_snapshot"></a>

Les snapshots `automatiques`, crées par les [politiques de snapshot](#snapshot_policy) peuvent être sauvegardés en cliquant sur le bouton `...`{.action} dans le tableau, puis sur `Sauvegarder`{.action}.

![Volume hold](images/manage_enterprise15.png){.thumbnail}

En sauvegardant un snapshot `automatique`, celui-ci deviendra `manuel`, ce qui empêchera sa rotation par la politique de snapshots et donc sa suppression automatique.

### Gestion des ACL de volumes <a name="access_control"></a>

Le contrôle d'accès aux volumes fonctionne via des restrictions d'adresses IP. Comme aucune restriction n'est configurée par défaut, la première étape lors de la création de volumes consiste à définir des adresses IP ou des plages à partir desquelles l'accès sera autorisé.

Dans l'onglet `Contrôle d'accès (ACL)`{.action}, cliquez sur le bouton `+ Ajouter un nouvel accès`{.action}.

![ACL](images/manage_enterprise16.png){.thumbnail}

Cette action crée une nouvelle ligne dans le tableau dans laquelle vous pouvez entrer une adresse IP ou un bloc d'adresse (CIDR). Sélectionnez `Lecture seule` ou `Lecture et écriture` comme type d'accès dans le menu déroulant, puis cochez cette entrée pour l'ajouter à l'ACL.

Pour supprimer un accès au volume, cliquez sur l'icône de corbeille correspondante dans le tableau.

### Gestion des politiques de snapshots <a name="snapshot_policy"></a>

> [!primary]
>
> Par défaut, chaque volume est protégé par une Snapshot Policy nommée `default` qui crée des snapshots du volume à intervalles réguliers.
>

L'ajout de politiques vous permet de planifier la création de snapshots pour tous vos volumes.

Cliquez sur l'onglet `Snapshot policies`{.action}. Le tableau répertorie toutes les politiques créées pour le service sélectionné.

Une politique par défaut est déjà en place et ne peut pas être modifiée. Pour ajouter la vôtre, cliquez sur le bouton `Créer une Snapshot policy`{.action}.

![Snapshot policies](images/manage_enterprise17.png){.thumbnail}

Sur la page qui apparaît alors, entrez un nom et une description pour la politique. Utilisez ensuite le bouton `+ Ajouter une nouvelle règle`{.action} pour ajouter une ou plusieurs règles à la politique.

![Snapshots](images/manage_enterprise18.png){.thumbnail}

Remplissez les champs pour indiquer les critères de périodicité de création du snapshot. Vous devez également indiquer un préfixe pour les snapshots, nécessaire à leur dénomination.

Vous trouverez des informations plus détaillées sur chaque valeur en cliquant sur l'icône représentant un point d'interrogation (`?`{.action}). En développant la section `Exemple`{.action}, vous pouvez afficher deux ensembles de règles de politique avec une explication de leur résultat.

Cochez la nouvelle règle pour l'ajouter. Une fois toutes les règles ajoutées, cliquez sur `Créer une nouvelle Snapshot policy`{.action}.

[Sélectionnez un volume](#manage_volume) et positionnez-vous sur l'onglet `Snapshots`{.action} afin d'[appliquer vos règles](#snapshots).

Pour supprimer une politique, cliquez sur l'icône de corbeille correspondante dans le tableau.

### Premiers pas <a name="firststeps"></a>

Si vous n'êtes pas familier avec l'utilisation de la solution Enterprise File Storage, vous pouvez suivre les étapes ci-dessous :

- [Créer un volume](#create_volume)
- [Configurer le contrôle d'accès](#access_control)
- [Configurer les politiques de snapshot](#snapshot_policy) (facultatif)
- [Appliquer des règles de snapshot au volume](#snapshots) (facultatif)
- [Lister et récupérer les snaphots](#access_snapshots) (facultatif)
- [Connectez-vous à votre volume en suivant les instructions de la rubrique « Informations générales »](#modify_volume)
- [Apprenez à utiliser Enterprise File Storage via API en consultant nos guides](#gofurther) (en option)

## Aller plus loin <a name="gofurther"></a>

[Enterprise File Storage - API Quickstart](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_quick_start)

[Enterprise File Storage - Gestion des volumes](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volumes)

[Enterprise File Storage - Gestion des ACL de volume](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_acl)

[Enterprise File Storage - Gestion des snapshots de volumes](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_snapshots)

[Enterprise File Storage - FAQ](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_faq/)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
