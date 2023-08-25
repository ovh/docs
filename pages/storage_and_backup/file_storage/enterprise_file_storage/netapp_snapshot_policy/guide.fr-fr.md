---
title: Enterprise File Storage - Gérez vos politiques de snapshots
excerpt: "Découvrez comment créer une politique de snapshot, l'appliquer sur votre volume, la modifier et la supprimer depuis votre espace client"
updated: 2023-08-07
---

## Objectif

Dans ce guide, nous allons vous donner un aperçu de la gestion de vos politiques de snapshots pour les volumes Enterprise File Storage d'OVHcloud.

**Découvrez comment créer une politique de snapshot, l'appliquer sur votre volume, la modifier et la supprimer depuis votre espace client.**

## Prérequis

- Un service Enterprise File Storage OVHcloud avec un volume disponible
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## Principes de base

Un snapshot de volume est une copie ponctuelle en lecture seule d'un volume.<br>
Les snapshots sont créés à partir d'un volume opérationnel existant. Ils ne peuvent exister sans cela.<br>
Une politique de snapshot permet d'automatiser la création de snapshots à l'aide de différents paramètres. La politique peut ensuite être modifiée et supprimée si vous n'en avez plus besoin.

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et sélectionnez l'onglet `Bare Metal Cloud`{.action} dans la barre de navigation supérieure. Ouvrez `Storage et sauvegarde`{.action} puis `Enterprise File Storage`{.action} dans le menu de gauche et sélectionnez votre service dans la liste.

### Créer votre politique de snapshot

Une politique de snapshot vous permet d'automatiser les snapshots en définissant la fréquence de création en minutes, heures, jours, semaines ou mois. 
Il est également nécessaire de préciser le nombre de copies que vous souhaitez conserver.

1\. Cliquez sur l'onglet `Snapshot policies`{.action}.

![SnapshotPolicy](images/Snapshot_Policy_1.png){.thumbnail}

2\. Définissez le nom de votre politique de snapshot, une description pour celle-ci, puis utilisez le bouton `+ Ajouter une nouvelle règle`{.action} pour ajouter une ou plusieurs règles à la politique.

![SnapshotPolicy](images/Snapshot_Policy_2.png){.thumbnail}

3\. Remplissez les champs pour spécifier l'heure, les jours du mois, les jours de la semaine et les mois pour la création du snapshot. Vous devrez également renseigner un préfixe pour les snapshots, nécessaire à leur dénomination.

Vous pouvez trouver des informations plus détaillées pour chaque valeur en cliquant sur le point d'interrogation. En développant la section `Exemple`{.action}, vous pouvez afficher deux ensembles de règles avec une explication de leur résultat.

Cliquez sur la coche pour ajouter la nouvelle règle. Une fois toutes les règles ajoutées, cliquez sur `Créer une nouvelle Snapshot policy`{.action}.

> [!primary]
> Vous devez spécifier un préfixe et une durée en minutes. De manière optionnelle, vous pouvez renseigner les heures, jours et mois d'exécution pour affiner votre planification.
>

Vous ne pouvez pas modifier une politique de snapshot après l'avoir créée. Si vous devez appliquer de nouveaux paramètres de fréquence, vous devrez supprimer la politique de snapshot actuelle et en créer une nouvelle. 

### Appliquer une politique de snapshot 

Une fois la politique de snapshot créée, vous pouvez l'appliquer sur un volume.

1\. Positionnez-vous sur l'onglet `Volumes`{.action} de votre pool de capacité.

![ApplySnapshotPolicy](images/Snapshot_Policy_3.png){.thumbnail}

2\. Choisissez dans la liste le volume auquel la politique de snapshot doit être appliquée.
3\. Rendez-vous dans la section `Snapshots`{.action} et dans la section `Gérer la snapshot policy`{.action}, sélectionnez la politique que vous souhaitez appliquer. 
4\. Cliquez sur le bouton `Appliquer la policy`{.action}.

![ApplySnapshotPolicy](images/Snapshot_Policy_4.png){.thumbnail}

### Supprimer une politique de snapshot

> [!warning]
>
> Une politique de snapshot attachée à un volume ne peut pas être supprimée. Si vous souhaitez supprimer une politique de snapshot associée à un ou plusieurs volumes, vous devez d'abord dissocier cette politique en associant une autre politique de snapshot à ces volumes.
>

Pour supprimer une politique de snapshot :

1\. Rendez-vous dans l'onglet `Snapshot policies`{.action} de votre pool de capacité.

![DeleteSnapshotPolicy](images/Snapshot_Policy_5.png){.thumbnail}

2\. Sélectionnez la politique à supprimer.
3\. Cliquez sur le bouton de suppression représentée par une `corbeille`{.action}.

![DeleteSnapshotPolicy](images/Snapshot_Policy_6.png){.thumbnail}

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
