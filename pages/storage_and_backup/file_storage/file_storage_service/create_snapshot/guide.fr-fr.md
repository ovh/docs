---
title: File Storage Service - Gestion des snapshots de partage
excerpt: "Découvrez comment répertorier, créer et supprimer des snapshots de partage NFS dans le service File Storage d'OVHcloud à l'aide de l'API. Garantissez la cohérence des données et gérez efficacement les snapshots."
updated: 2026-03-31
---

## Objectif

Les snapshots permettent de sauvegarder l'état d'un partage de fichiers NFS à un instant précis. Ce guide explique comment répertorier, créer et supprimer des snapshots à l'aide de l'API OVHcloud (v1 /cloud routes), en garantissant la cohérence et la fiabilité opérationnelle.

> [!primary]
>
> **Astuce :** Reportez-vous à la [console d'API OVHcloud](/links/console) pour obtenir des informations précises sur les opérations, les méthodes HTTP et les schémas de requête.
>

## Prérequis

- Un [projet Public Cloud](/links/public-cloud/public-cloud) avec le service File Storage activé.
- Un partage existant dans un état `available`.
- Des identifiants API disposant des autorisations suffisantes pour gérer les partages et les snapshots.
- Une compréhension des concepts clés de l'API : `serviceName` (ID de projet), `regionName`, `shareId` et `snapshotId` facultatif.

## En pratique

### Étape 1 : Identifier votre partage

Répertoriez tous les partages dans votre région cible pour trouver l'ID du partage :

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/region/{regionName}/share
>

Vérifiez que le partage est dans l'état `available` avant de créer des snapshots.

### Étape 2 : Répertorier les snapshots existants

Récupérez tous les snapshots d'un partage donné :

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/region/{regionName}/share/{shareId}/snapshot
>

Utilisez la réponse pour obtenir les identifiants et les états des snapshots avant de les supprimer ou d'automatiser ces opérations.

### Étape 3 : Créer un snapshot

Créez un snapshot avec une charge utile JSON spécifiant un nom lisible (et une description facultative) :

> [!api]
>
> @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/share/{shareId}/snapshot
>

- Interrogez les points de terminaison `list/detail` jusqu'à ce que le snapshot atteigne l'état `available`.
- Le temps de création d'un snapshot dépend de la capacité allouée, de l'activité d'E/S et de la charge de la plateforme.
- Planifiez les snapshots pendant les périodes d'activité d'E/S faible pour garantir la cohérence.

> [!primary]
>
> **Remarque :** Les snapshots sont cohérents en cas de plantage sauf si votre application met explicitement en veille les écritures.
>

### Étape 4 : Récupérer les détails d'un snapshot (facultatif)

Récupérez un seul snapshot par ID :

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/region/{regionName}/share/{shareId}/snapshot/{snapshotId}
>

Utilisez cet appel pour des vérifications automatisées après sauvegardes ou pour consulter les métadonnées du snapshot.

### Étape 5 : Supprimer un snapshot

Libérez l'espace de stockage occupé par un snapshot :

> [!api]
>
> @api {v1} /cloud DELETE /cloud/project/{serviceName}/region/{regionName}/share/{shareId}/snapshot/{snapshotId}
>

> [!warning]
>
> La suppression est irréversible. Assurez-vous que le snapshot n'est plus nécessaire.
>

## Aller plus loin

- [File Storage Service – Concepts clés](/pages/storage_and_backup/file_storage/file_storage_service/key_concepts)
- [File Storage Service – Premiers pas](/pages/storage_and_backup/file_storage/file_storage_service/getting_started)
- [Préparation d'un environnement pour utiliser l'API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

Échangez avec notre [communauté d'utilisateurs](/links/community).
