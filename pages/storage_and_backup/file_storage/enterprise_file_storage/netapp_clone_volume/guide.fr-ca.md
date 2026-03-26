---
title: Enterprise File Storage - Cloner un volume
excerpt: "Découvrez comment cloner un volume de votre solution Enterprise File Storage à l'aide de l'API OVHcloud"
updated: 2024-12-09
---

## Objectif

Un volume cloné contient toutes les données du volume parent à un instant donné. Il possède toutes les fonctionnalités d'un volume et peut donc être utilisé comme un volume classique.<br>

Un volume cloné est créé à partir d'un snapshot (instantané) d'un volume actif. Une fois le clone créé, les changements apportés à son volume parent ne seront pas reflétés sur le clone.

> [!primary]
> Dans ce guide, un volume est également appelé « *share* » comme dans l’API OVHcloud.

**Découvrez la fonctionnalité de clonage de volumes et apprenez à cloner un volume de votre solution Enterprise File Storage via l'API OVHcloud.**

## Cas d'usage

Les scénarios d'utilisation d'un volume cloné sont multiples. Vous trouverez ci-dessous quelques exemples.

### Permettre l’accès aux données à des fins de qualité, de test ou de formation

Les environnements de formation, de qualité ou encore de test peuvent avoir besoin d'être mis à jour régulièrement avec des données issues de l'environnement de production.<br>

Grâce au clonage de volumes, des opérations d'automatisation peuvent être mises en place afin de créer rapidement des ensembles de données basés sur les données à jour et sans donner l'accès aux données de production.

![CloneVolumeUseCaseEnvironmentSync](images/clone_volume_use_case_1.png){.thumbnail}

### Lutter contre la corruption des données

Une corruption logique des données peut être causée par une erreur logicielle, une erreur humaine ou encore un acte malveillant.<br>

En créant des points de sauvegarde réguliers avec l'aide d'une [Politique de Snapshots](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_snapshot_policy) et en utilisant la fonctionnalité de clonage de volumes, vous avez la possibilité d'analyser facilement les causes des corruptions des données en créant un nouveau volume depuis les données existantes.

![CloneVolumeUseCaseDataCorruption](images/clone_volume_use_case_2.png){.thumbnail}

## Prérequis

- Disposer d'une offre OVHcloud [Enterprise File Storage](/links/storage/enterprise-file-storage)
- Être connecté à l’[API OVHcloud](/links/api)
- Disposer d'un volume Enterprise File Storage avec un snapshot `manual`

<!-- CP-NAV-START:storage-enterprise-file-storage -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Enterprise File Storage](/links/control-panel/storage-enterprise-file-storage)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Enterprise File Storage`{.action}

---
<!-- CP-NAV-END:storage-enterprise-file-storage -->

> [!primary]
>
> Vous pouvez créer un volume et un snapshot de type `manual` grâce à l'[API OVHcloud](/links/api) ou depuis votre [espace client OVHcloud](/links/manager).

> [!success]
> Si vous n'êtes pas familier avec l'utilisation de l'API OVHcloud, consultez notre guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) ».

## Limites de la fonctionnalité

- Seuls les snapshots de type `manual` peuvent être utilisés pour cloner un volume.
Cependant, si vous souhaitez cloner un volume en utilisant un snapshot de type `automatic`, vous pouvez conserver ce snapshot pour le transformer en snapshot de type `manual`.
Consultez le [guide de conservation de snapshots automatiques](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_hold_automatic_snapshot) pour en savoir plus.

- La création d'un volume cloné depuis un snapshot de type `system` n'est pas prise en charge.

- La taille du volume cloné doit être **supérieure ou égale** à la taille du snapshot utilisé pour l'opération de clonage.

## En pratique

1\. Identifiez l'`id` du snapshot à utiliser à l'aide de l'appel API suivant :

> [!api]
>
> @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

**Paramètres :**

- `serviceName`: est l'identifiant unique du service
- `shareId`: est l'identifiant du volume auquel appartient le snapshot

![CloneVolume](images/clone_volume_step_1.png){.thumbnail}

2\. Créez le volume à partir du snapshot à l'aide de l'appel API suivant :

> [!api]
>
> @api {POST} /storage/netapp/{serviceName}/share
>

**Paramètres :**

- `serviceName`: est l'identifiant unique du service
- `size`: est la taille du volume. Elle doit être supérieure ou égale à la taille du snapshot.
- `protocol`: est le protocole du volume. Seul le protocole NFS est supporté.
- `snapshotID`: est l'identifiant du snapshot à utiliser pour créer le volume
- `name`: (facultatif) est le nom du volume
- `description`: (facultatif) est la description du volume

![CloneVolume](images/clone_volume_step_2.png){.thumbnail}

L'API OVHcloud retournera un code HTTP 201 ainsi que l'information correspondant au volume crée.<br>

Le statut du volume passera à `creating_from_snapshot` puis changera pour devenir `available` une fois la création du volume terminée.<br>
Suivant la taille du snapshot utilisé, l'opération de création du volume pourra prendre du temps.

**Un nouveau volume est désormais créé depuis le snapshot de son volume parent.**

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).