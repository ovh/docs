---
title: Cloud Disk Array - Comment créer un pool
excerpt: "Découvrez comment créer un un pool via l'espace client OVHcloud ou l'API OVHcloud"
updated: 2025-05-06
---

## Objectif

Ce guide vous montre comment créer un pool pour votre cluster Ceph, en utilisant l'espace client OVHcloud ou l'API OVHcloud.

## Prérequis

- Une solution [Cloud Disk Array](/links/storage/cloud-disk-array)

<!-- CP-NAV-START:storage-cloud-disk-array -->
---

### Accès à l’espace client OVHcloud

- **Lien direct :** [Cloud Disk Array](/links/control-panel/storage-cloud-disk-array)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Cloud Disk Array`{.action} > Sélectionnez votre service

---
<!-- CP-NAV-END:storage-cloud-disk-array -->

## En pratique

> [!primary]
>
> L'utilisation de l'espace client OVHcloud est la méthode la plus simple pour créer un pool.
>

### Depuis l'espace client OVHcloud

Vous retrouverez les pools existants dans l’onglet `Pools`{.action}.

![Ceph pools](images/ceph-add-pool-1.png){.thumbnail}

Entrez un nom de pool, celui-ci doit comporter au moins trois caractères.

![Ceph pool creation](images/ceph-add-pool-2.png){.thumbnail}

Vous pouvez alors voir que le statut du cluster a changé car le pool est en cours de création.

![Ceph pool creation is running](images/ceph-task-1.png){.thumbnail}

## Depuis l'API OVHcloud

> [!success]
> Si vous n'êtes pas familier avec l'utilisation de l'API OVHcloud, consultez notre guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) ».

Utilisez l'appel API ci-dessous pour créer votre pool :

> [!api]
>
> @api {v1} /dedicated/ceph POST /dedicated/ceph/{serviceName}/pool
>

`serviceName` est le fsid de votre cluster.

Vous pouvez vérifier la création d'un pool en consultant la liste des pools, via l'appel API suivant :

> [!api]
>
> @api {v1} /dedicated/ceph GET /dedicated/ceph/{serviceName}/pool
>

Par example:

```bash
GET /dedicated/ceph/98d166d8-7c88-47b7-9cb6-63acd5a59c15/pool
[
{
  replicaCount: 3
  serviceName: "98d166d8-7c88-47b7-9cb6-63acd5a59c15"
  name: "rbd"
  minActiveReplicas: 2
  poolType: "REPLICATED"
  backup: false
},
{
  replicaCount: 3
  serviceName: "98d166d8-7c88-47b7-9cb6-63acd5a59c15"
  name: "testpool"
  minActiveReplicas: 2
  poolType: "REPLICATED"
  backup: true
  }
]
```

## Aller plus loin

Rendez-vous sur notre chaîne Discord dédiée : <https://discord.gg/ovhcloud>. Posez des questions, fournissez des commentaires et interagissez directement avec l'équipe qui construit nos services de stockage et de sauvegarde.

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
