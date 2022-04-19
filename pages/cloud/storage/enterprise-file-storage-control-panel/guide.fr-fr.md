---
title: "Enterprise File Storage - Gestion depuis l'espace client OVHcloud"
excerpt: Découvrez comment gérer votre service Enterprise File Storage depuis votre espace client OVHcloud
slug: netapp-control-panel
section: Enterprise File Storage
order: 2
---

**Dernière mise à jour le 14/04/2022**

## Objectif

Les services Enterprise File Storage peuvent être gérés [via les API OVHcloud](../netapp-quickstart/) ou depuis votre espace client OVHcloud.

**Découvrez comment gérer les volumes et les snapshots de stockage de fichiers d'entreprise dans votre espace client.**

## Prérequis

- Avoir un service Enterprise File Storage dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique <a name="instructions"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionez `Bare Metal Cloud`{.action} dans la barre de navigation supérieure. Ouvrez `Storage et Backup`{.action} puis `Enterprise File Storage`{.action} dans le menu de gauche et sélectionnez votre service dans la liste.

![Informations générales](images/manage_enterprise01.png){.thumbnail}

L'onglet `Informations générales`{.action} affiche des informations techniques sur votre service, des informations générales sur l'abonnement ainsi qu'un raccourci pour [créer un volume](#create_volume).

> [!primary]
> Consultez la page [Concepts](../netapp-concepts/) pour obtenir des informations détaillées sur les propriétés techniques de la solution Enterprise File Storage.
>

### Gestion des volumes <a name="manage_volume"></a>

Cliquez sur l'onglet `Volumes`{.action}. Le tableau répertorie tous les volumes créés pour le service sélectionné. Vous pouvez cliquer sur un identifiant de volume pour ouvrir sa [page de gestion](#modify_volume). 

![Volumes](images/manage_enterprise02.png){.thumbnail}

Vous pouvez effectuer plusieurs actions en cliquant sur le bouton `...`{.action} dans chaque ligne du tableau.

- **Modifier le volume** : ouvre la section « [Informations générales](#modify_volume) » du volume.
- **Créer un snapshot** : ouvre la section « [Sauvegardes](#snapshots) » afin d'effectuer un snapshot manuel du volume.
- **Gérer les snapshots** : ouvre la section « [Sauvegardes](#snapshots) » du volume.
- **Gérer IP Access (ACL)** : ouvre la section « [ACL](#access_control) » permettant de gérer le contrôle d'accès au volume.
- **Supprimer le volume** : permet de supprimer ce volume, une fois l'action confirmée dans la fenêtre qui apparaît alors.

#### Création d'un volume <a name="create_volume"></a>

Cliquez sur le bouton `Créer un volume`{.action}. Dans la nouvelle fenêtre qui apparaît, entrez le nom et la description du volume. Déterminez la taille en GB et cliquez sur `Créer un volume`{.action} pour valider la création.

![Volume de création](images/manage_enterprise03.png){.thumbnail}

Vous pouvez supprimer un volume en cliquant sur le bouton `...`{.action} dans le tableau, puis sur `Supprimer le volume`{.action}.

#### Modification d'un volume <a name="modify_volume"></a>

Cliquez sur un ID de volume dans le tableau pour ouvrir la page de gestion de ce volume.

![Gestion des volumes](images/manage_enterprise04.png){.thumbnail}

L'onglet `Informations générales`{.action} affiche les détails de votre volume, ainsi que des instructions détaillées sur la connexion au volume, y compris les paramètres individuels.

#### Création et gestion des snapshots d'un volume <a name="snapshots"></a>

L'onglet `Snapshots`{.action} répertorie tous les snapshots créés pour le volume sélectionné.

![Snapshots](images/manage_enterprise05.png){.thumbnail}

Pour ajouter manuellement un nouveau snapshot du volume dans son état actuel, cliquez sur le bouton `Actions`{.action} puis sur `Créer un snapshot`{.action}.

Dans la nouvelle fenêtre qui s'affiche, vous pouvez saisir un nom et une description. Cliquez sur le bouton `Créer un snapshot`{.action} pour lancer la création.

Dans le même onglet, vous pouvez également afficher toutes les [politiques de snapshots](#snapshot_policy) créées pour le service et les appliquer à ce volume.

![Snapshots](images/manage_enterprise06.png){.thumbnail}

Cliquez sur la ligne de la règle concernée pour consulter les détails de la planification des snapshots. Sélectionnez une politique via le bouton de sélection dédié, puis cliquez sur le bouton `Appliquer la policy`{.action} en dessous du tableau.

Afin de configurer vos [politiques de snapshot](#snapshot_policy), revenez à la section [Gestion des volumes](#instructions) de votre service et ouvrez l'onglet `Snapshot policies`{.action}.

#### Liste et récupération des snapshots <a name="access_snapshots"></a>

L'espace client ne permet pas de consulter la liste des snapshots effectués ni de les restaurer. 
Pour avoir accès aux snapshots depuis votre point de montage, vous pouvez utiliser les commandes proposées dans la documentation [NetApp](https://library.netapp.com/ecmdocs/ECMP1196991/html/GUID-36DC110C-C0FE-4313-BF53-1C12838F7BBD.html){.external}.

#### Gestion des ACL de volumes <a name="access_control"></a>

Le contrôle d'accès aux volumes fonctionne via des restrictions d'adresses IP. Comme aucune restriction n'est configurée par défaut, la première étape lors de la création de volumes consiste à définir des adresses IP ou des plages à partir desquelles l'accès sera autorisé.

Dans l'onglet `Contrôle d'accès (ACL)`{.action}, cliquez sur le bouton `+ Ajouter un nouvel accès`{.action}.

![ACL](images/manage_enterprise07.png){.thumbnail}

Cette action crée une nouvelle ligne dans le tableau dans laquelle vous pouvez entrer une adresse IP ou un bloc d'adresse (CIDR). Sélectionnez `Lecture seule` ou `Lecture et écriture` comme type d'accès dans le menu déroulant, puis cochez cette entrée pour l'ajouter à l'ACL.

Pour supprimer un accès au volume, cliquez sur l'icône de corbeille correspondante dans le tableau.

### Gestion des politiques de snapshots <a name="snapshot_policy"></a>

L'ajout de politiques vous permet de planifier la création de snapshots pour tous vos volumes.

Cliquez sur l'onglet `Snapshot policies`{.action}. Le tableau répertorie toutes les politiques créées pour le service sélectionné.

Une politique par défaut est déjà en place et ne peut pas être modifiée. Pour ajouter la vôtre, cliquez sur le bouton `Créer une nouvelle Snapshot policy`{.action}.

![Snapshots](images/manage_enterprise08.png){.thumbnail}

Sur la page qui apparaît alors, entrez un nom et une description pour la politique. Utilisez ensuite le bouton `+ Ajouter une nouvelle règle`{.action} pour ajouter une ou plusieurs règles à la politique.

![Snapshots](images/manage_enterprise09.png){.thumbnail}

Remplissez les champs pour indiquer les critères de périodicité de création du snapshot. Vous devez également indiquer un préfixe pour les snapshots, nécessaire à leur dénomination.

Vous trouverez des informations plus détaillées sur chaque valeur en cliquant sur l'icône représentant un point d'interrogation (`?`{.action}). En développant la section `Exemple`{.action}, vous pouvez afficher deux ensembles de règles de politique avec une explication de leur résultat.

Cochez la nouvelle règle pour l'ajouter. Une fois toutes les règles ajoutées, cliquez sur `Créer une nouvelle Snapshot policy`{.action}.

[Sélectionnez un volume](#manage_volume) et positionnez-vous sur l'onglet `Snapshots`{.action} afin d'[appliquer vos règles](#snapshots).

Pour supprimer une politique, cliquez sur l'icône de corbeille correspondante dans le tableau.

> [!primary]
>
> Les snapshots utilisent la capacité de stockage de votre solution Enterprise File Storage. 5 % de la taille d'un volume sont toujours réservés aux snapshots.
>

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

[Enterprise File Storage - API Quickstart](../netapp-quickstart/)

[Enterprise File Storage - Gestion des volumes](../netapp-volumes/)

[Enterprise File Storage - Gestion des ACL de volume](../netapp-volume-acl/)

[Enterprise File Storage - Gestion des snapshots de volumes](../netapp-volume-snapshots/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
