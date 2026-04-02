---
title: Cloud Disk Array - Comment créer des utilisateurs
excerpt: Découvrez comment créer un nouvel utilisateur Cloud Disk Array
updated: 2025-04-18
---

## Objectif

Ce guide vous montre comment créer un nouvel utilisateur Cloud Disk Array, en utilisant l'espace client OVHcloud ou l'API OVHcloud.

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

### Depuis l'espace client OVHcloud

> [!primary]
>
> L'utilisation de l'espace client OVHcloud est le moyen le plus simple de créer un utilisateur.
>

Sur la page de votre service Cloud Disk Array, accédez à l'onglet `Users`{.action}.

![Ceph users](images/create_a_user_1.png){.thumbnail}

Entrez un nom d'utilisateur.

> [!warning]
>
> Votre nom d'utilisateur doit contenir au moins trois caractères.
>

![Ceph user creation](images/create_a_user_2.png){.thumbnail}

L'utilisateur est alors créé.

![Ceph user creation](images/create_a_user_3.png){.thumbnail}

### Depuis l'API OVHcloud

> [!success]
> Si vous n'êtes pas familier avec l'utilisation de l'API OVHcloud, consultez notre guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) ».

Vous pouvez créer un utilisateur en utilisant cette route API :

> [!api]
>
> @api {v1} /dedicated/ceph POST /dedicated/ceph/{serviceName}/user
>

`serviceName` est le fsid de votre cluster.

Vous pouvez également vérifier la création des utilisateurs en dressant une liste des utilisateurs :

> [!api]
>
> @api {v1} /dedicated/ceph GET /dedicated/ceph/{serviceName}/user
>

```bash
GET /dedicated/ceph/98d166d8-7c88-47b7-9cb6-63acd5a59c15/user
[
  {
    mdsCaps: ""
    monCaps: "allow r"
    serviceName: "98d166d8-7c88-47b7-9cb6-63acd5a59c15"
    name: "myuser"
    osdCaps: "allow class-read object_prefix rbd_children"
    key: "AQA9KpdXoBrDNhAAFCM7m/XOtmWh3LMSNlHVqw=="
  }
]
```

## Aller plus loin

Rendez-vous sur notre chaîne Discord dédiée : <https://discord.gg/ovhcloud>. Posez des questions, fournissez des commentaires et interagissez directement avec l'équipe qui construit nos services de stockage et de sauvegarde.

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
