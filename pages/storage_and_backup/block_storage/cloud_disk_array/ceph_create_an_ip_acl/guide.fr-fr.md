---
title: "Cloud Disk Array - Comment créer une ACL IP"
excerpt: "Ce guide vous montre comment créer une ACL IP pour autoriser l'accès à votre cluster Ceph"
updated: 2025-04-28
---

## Objectif

Ce guide vous montre comment créer une ACL IP pour autoriser l'accès à votre cluster Ceph, en utilisant l'espace client OVHcloud ou l'API OVHcloud.

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
> L'utilisation de l'espace client OVHcloud est le moyen le plus simple de créer une ACL IP.
>

### Depuis l'espace client OVHcloud

Sur la page de votre service Cloud Disk Array, accédez à l'onglet `Contrôle d'accès IP`{.action}. Par défaut, il n'y a pas d'ACL.

![Ceph pools](images/ceph-add-ip-1.png){.thumbnail}

Obtenez votre adresse IP :

```bash
admin@server:~$ ip -4 a
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    inet 123.123.123.123/32 brd 234.234.234.234 scope global eth0
      valid_lft forever preferred_lft forever
```

Ajoutez ensuite votre IP.

![Ceph pools](images/ceph-add-ip-2.png){.thumbnail}

Enfin, créez l'ACL IP.

Après la création du pool d'adresses IP, vous pouvez voir que le statut du pool a changé car l'ACL est en cours de création.

### Depuis l'API OVHcloud

> [!success]
> Si vous n'êtes pas familier avec l'utilisation de l'API OVHcloud, consultez notre guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) ».

Utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicated/ceph POST /dedicated/ceph/{serviceName}/acl
>

`serviceName` est le fsid de votre cluster.

Vous pouvez vérifier la création d'une ACL en consultant la liste des ACL.

> [!api]
>
> @api {v1} /dedicated/ceph GET /dedicated/ceph/{serviceName}/acl
>

Example:

```bash
GET /dedicated/ceph/98d166d8-7c88-47b7-9cb6-63acd5a59c15/acl
[
  {
    network: "123.123.123.123"
    id: 57054
    netmask: "255.255.255.255"
    family: "IPV4"
  }
]
```

## Aller plus loin

Rendez-vous sur notre chaîne Discord dédiée : <https://discord.gg/ovhcloud>. Posez des questions, fournissez des commentaires et interagissez directement avec l'équipe qui construit nos services de stockage et de sauvegarde.

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

