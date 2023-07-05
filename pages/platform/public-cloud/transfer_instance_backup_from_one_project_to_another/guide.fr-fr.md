---
title: "Transférer une image d'un projet Public Cloud à un autre"
excerpt: "Apprenez à déplacer une image d'un projet Public Cloud à un autre"
updated: 2023-07-05
---

## Objectif

Il peut arriver que vous deviez déplacer une image come celle d'une [Instance backup](/pages/platform/public-cloud/save_an_instance) ou d'un [Volume backup](/pages/platform/public-cloud/volume-backup) vers un autre projet Public Cloud dans le but d'optimiser votre travail.

Avec Openstack (et surtout avec Glance), il est possible de partager une image entre plusieurs projets, même s'ils n'appartiennent pas au même compte.

Cette fonctionnalité offre de nombreuses possibilités, mais elle comporte également des risques. Il est donc important de comprendre de quoi il s'agit.

Par exemple, si vous souhaitez déplacer une image d'un projet A vers un projet B (dans le même compte ou dans un compte différent), les règles suivantes s'appliquent :

- L'image reste attachée physiquement au projet A. Le projet B ne dispose que d'une « autorisation d'accès » à cette image.

- Si le Projet A supprime l'accès à l'image (suppression de l'acl, suppression de l'image, suppression du projet pour factures impayées, etc...), les instances s'exécutant à partir de cette image sur le Projet B peuvent ne plus fonctionner en raison de problèmes de migration ou de reconstruction.

Il est donc important de garder cela à l'esprit avant de s'engager dans cette configuration.

Pour plus d'informations, veuillez consulter la documentation [officielle Openstack](https://docs.openstack.org/image-guide/share-images.html){.external}.

**Ce guide vous montrera comment transférer une image d'un projet Public Cloud à un autre tout en préservant la configuration et l'état de l'image.**

## Prérequis

Avant de suivre ces étapes, il est recommandé de compléter d'abord ce guide :

* [Préparer l’environnement à l’utilisation de l’API OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api)

Vous aurez également besoin :

* Posséder une [Instance Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud
* Disposer d’un accès administrateur (root) à votre instance/sur votre système d'exploitation via SSH.

> [!primary]
>
> Les commandes de ce guide sont basées sur les API `OPENSTACK` et `GLANCE`.
>

## Instructions

### Avec Glance

#### Partager une image

Tout d'abord, établissez une connexion SSH à votre instance/système d'exploitation, puis exécutez la commande suivante pour répertorier vos images existantes :

```bash
$ glance image-list
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | pfsense |
```

> [!warning]
> 
> Pour être partagée, une image doit d'abord être mise en "visibility shared".
>

```bash
$ glance image-update --visibility shared <Image_UUID>
```

Une fois fait, l'image peut maintenant être partagée entre deux projets.

### Ajouter un projet à une image

L'étape suivante consiste à ajouter l'UUID d'un autre projet comme membre de l'image. Dans notre exemple ci-dessous, nous ajoutons l'UUID du « Projet B ».


```bash
$ glance member-create <Image_UUID> <UUID_Project_B>
+--------------------------------------+--------------------------------------+---------+
| Image ID | Member ID | Status |
+--------------------------------------+--------------------------------------+---------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+--------------------------------------+---------+
```

Une fois cela fait, vérifiez la demande sur le projet B :

```bash
$ glance member-list <Image_UUID>
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+----------------------------------+----------+
```

Si la demande de partage est en `attente`, vous devez l'accepter :

```bash
$ glance member-update 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba <UUID_Project_B> accepted
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | accepted |
+--------------------------------------+----------------------------------+----------+
```

Une fois l'opération terminée, vérifiez que vous pouvez voir et accéder à l'image :

```bash
$ glance image-show 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+------------------+----------------------------------------------------------------------------------+
| Property | Value |
+------------------+----------------------------------------------------------------------------------+
| checksum | 1b19c9e5bdd36b9010de0164dd8b245e |
| container_format | bare |
| created_at | 2018-05-08T15:38:50Z |
| direct_url | swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba |
| disk_format | raw |
| id | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba |
| locations | [{"url": "swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba", |
| | "metadata": {}}] |
| min_disk | 0 |
| min_ram | 0 |
| name | pfsense |
| owner | 35c9ee22e5c84c1097a5652b0abcbab3 |
| protected | False |
| size | 10737418240 |
| status | active |
| tags | [] |
| updated_at | 2018-05-08T15:53:57Z |
| virtual_size | Not available |
| visibility | private |
+------------------+----------------------------------------------------------------------------------+
```

Sur le projet A, vous pouvez :

#### Vérifier tous les membres d'une image

```bash
$ glance member-list --image-id <image>
+--------------------------------------+--------------------------------------+----------+
| Image ID                             | Member ID                            | Status   |
+--------------------------------------+--------------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project C>                          | pending  |
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <project B>                          | accepted |
+--------------------------------------+--------------------------------------+----------+
```

#### Supprimer un membre d'une image/annuler le partage d'une image

```bash
$ glance member-delete <image> <UUID_Projet_A_Supprimer>
```

### Avec Openstack 

#### Partager une image

Tout d'abord, établissez une connexion SSH à votre instance/système d'exploitation, puis exécutez la commande suivante pour répertorier vos images existantes :

```bash
$ openstack image list --private
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | pfsense |
```


> [!warning]
> 
> Pour être partagée, une image doit d'abord être mise en "visibility shared".
>

```bash
$ openstack image set --shared <Image_UUID>
```

### Ajouter un projet à une image

L'étape suivante consiste à ajouter l'UUID d'un autre projet comme membre de l'image. Dans notre exemple ci-dessous, nous ajoutons l'UUID du « Projet B ».

```bash
$ openstack image add project 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba <UUID_Project_B>
+------------+--------------------------------------+
| Field      | Value                                |
+------------+--------------------------------------+
| created_at | 2020-01-27T13:26:52Z                 |
| image_id   | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba |
| member_id  | <UUID_Project_B>                      |
| schema     | /v2/schemas/member                   |
| status     | pending                              |
| updated_at | 2020-01-30T15:18:00Z                 |
+------------+--------------------------------------+
```

Une fois cela fait, vérifiez la demande sur le projet B :


```bash
$ openstack image member list <Image_UUID>
+--------------------------------------+----------------------------------+----------+
| Image ID | Member ID | Status |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | <UUID_Project_B> | pending |
+--------------------------------------+----------------------------------+----------+
```


Si la demande de partage est en statut `pending`, vous devez l'accepter :

```bash
$ openstack image set --accept 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+--------------------------------------+----------------------------------+----------+
| Image ID                             | Member ID                        | Status   |
+--------------------------------------+----------------------------------+----------+
| 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba | eff99684d8294dbe8c2d4dd7407073f1 | accepted |
+--------------------------------------+----------------------------------+----------+
```

Une fois celle-ci terminée, vérifiez que vous pouvez voir et accéder à l'Image :

```bash
$ openstack image show 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field            | Value                                                                                                                                                                                  |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum         | 1b19c9e5bdd36b9010de0164dd8b245e                                                                                                                                                       |
| container_format | bare                                                                                                                                                                                   |
| created_at       | 2018-05-08T15:38:50Z                                                                                                                                                                   |
| disk_format      | raw                                                                                                                                                                                    |
| file             | /v2/images/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba/file                                                                                                                                   |
| id               | 9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba                                                                                                                                                   |
| min_disk         | 0                                                                                                                                                                                      |
| min_ram          | 0                                                                                                                                                                                      |
| name             | pfsense                                                                                                                                                                                |
| owner            | 35c9ee22e5c84c1097a5652b0abcbab3                                                                                                                                                       |
| properties       | direct_url='swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', locations='[{'url': 'swift+config://ref1/glance/9a0fbdc5-1f4a-4a1c-ad46-8d404a1313ba', 'metadata': {}}]' |
| protected        | False                                                                                                                                                                                  |
| schema           | /v2/schemas/image                                                                                                                                                                      |
| size             | 10737418240                                                                                                                                                                            |
| status           | active                                                                                                                                                                                 |
| tags             |                                                                                                                                                                                        |
| updated_at       | 2018-05-08T15:53:57Z                                                                                                                                                                   |
| virtual_size     | None                                                                                                                                                                                   |
| visibility       | private                                                                                                                                                                                |
+------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

#### Supprimer un membre d'une image/annuler le partage d'une image

```bash
$ openstack image remove project <image> <UUID_Projet_A_Supprimer>
```

## Aller plus loin

[Transférer la sauvegarde d'une instance d'un datacenter à un autre](/pages/platform/public-cloud/transfer_instance_backup_from_one_datacentre_to_another).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.