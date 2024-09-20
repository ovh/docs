---
title: "Transférer la sauvegarde d'un volume d'une région OpenStack à une autre"
excerpt: "Découvrez comment transférer une sauvegarde de volume d'une région OpenStack à une autre"
updated: 2024-01-11
---

## Objectif

Vous pouvez avoir besoin de déplacer des volumes additionnels d'une région OpenStack à une autre, soit parce qu'une nouvelle région est disponible, soit parce que vous souhaitez migrer d'[OVHcloud Labs](https://labs.ovh.com/){.external} vers le [Public Cloud](https://www.ovh.com/ca/fr/public-cloud/instances/){.external}.

**Découvrez comment transférer une sauvegarde de volume d'une région OpenStack à une autre.**

## Prérequis

Pour effectuer le transfert, vous aurez besoin d'un environnement avec :

- CLI OpenStack. Consultez notre guide « [Comment préparer l'environnement pour utiliser l'API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api) ».
- La Connectivité aux API OVHcloud OpenStack.
- De l'espace de stockage disponible correspondant à la taille du disque du volume (pour le stockage de sauvegarde temporaire).

Cet environnement sera utilisé comme « jump host » pour transférer la sauvegarde d'une région à une autre. Cet environnement peut être une instance hébergée sur OVHcloud ou sur votre machine locale.

## En pratique

### Créer une sauvegarde

```sh
$ openstack volume list 
+--------------------------------------+--------------+--------+------+----------------------------------+
| ID                                   | Display Name | Status | Size | Attached to                      |
+--------------------------------------+--------------+--------+------+----------------------------------+
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | volume       | in-use |   10 | Attached to Server 1 on /dev/sdb |
+--------------------------------------+--------------+--------+------+----------------------------------+
```

Si le volume est attaché à une instance, il faut d'abord le détacher avant de créer la sauvegarde.

Utilisez la commande ci-dessous pour récupérer l'ID de l'instance :

```sh
$ openstack server list
+--------------------------------------+-----------+--------+------------------------------------------------+----------+--------+
| ID                                   | Name      | Status | Networks                                       | Image    | Flavor |
+--------------------------------------+-----------+--------+--------------------------------------------------------------------+
| a8b6b51-4413-4d1a-8113-9597d804b07e  | Server 1  | ACTIVE | Ext-Net=155.55.55.155, 2607:5300:23x:5000::8d5 | Centos 7 | b2-7   |
+--------------------------------------+-----------+--------+------------------------------------------------+----------+--------+
```

Ensuite, exécutez la commande suivante pour détacher le volume de son instance :

```sh 
$ openstack server remove volume a8b6b51-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```

Maintenant, créez une sauvegarde sous forme d'image à l'aide de cette commande suivante :

```sh
$ openstack image create --disk-format qcow2 --container-format bare --volume 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 snap_volume 
+---------------------+------------------------------------------------------+
|       Property      |                         Value                        |
+---------------------+------------------------------------------------------+
|   container_format  |                          bare                        |
|     disk_format     |                         qcow2                        |
| display_description |                                                      |
|          id         |           673b0ad9-1fca-485c-ae2b-8ee271b71dc7       |
|       image_id      |           8625f87e-8248-4e62-a0ce-a89c7bd1a9be       |
|      image_name     |                      snap_volume                     |
|         size        |                          10                          |
|        status       |                       uploading                      |
|      updated_at     |               2015-10-21T08:33:34.000000             |
|     volume_type     |                      [..........]                    |
+---------------------+------------------------------------------------------+
```

### Télécharger la sauvegarde

Exécutez la commande suivante pour répertorier les images disponibles :

```sh
$ openstack image list 
+--------------------------------------+--------------------------------+--------+
| ID                                   | Name                           | Status |
+--------------------------------------+--------------------------------+--------+
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume                    | active |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7                       | active |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8                       | active |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19                      | active |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20                      | active |
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume                    | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04                   | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04                   | active |
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2         | active |
+--------------------------------------+--------------------------------+--------+
```

Identifiez alors la sauvegarde dans la liste :

```sh
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
| ID                                   | Name        | disk_format |container_format|           | Status |
+--------------------------------------+---------------------------+----------------+-----------+--------+
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2       | bare           | 319356928 | active |
+--------------------------------------+-------------+-------------+----------------+-----------+--------+
```

Lancez enfin cette commande pour télécharger la sauvegarde :

```sh 
$ openstack image save --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```

### Transférer la sauvegarde vers une autre région OpenStack

Pour démarrer le processus de transfert, vous devez d'abord charger de nouvelles variables d'environnement.

> [!warning]
>
Si vous transférez votre sauvegarde vers une région OpenStack au sein du même projet, vous devrez changer la variable `OS_REGION_NAME`.
>

```sh 
$ export OS_REGION_NAME=SBG1
```

Si vous transférez votre sauvegarde vers un autre projet ou compte, vous devrez recharger les variables d'environnement liées à ce compte à l'aide de la commande suivante :

```sh
$ source openrc.sh
```

Pour transférer la sauvegarde vers la nouvelle région OpenStack, utilisez cette commande :

```sh 
$ openstack image create --disk-format qcow2 --container-format bare --file snap_volume.qcow snap-volume 
+------------------+------------------------------------------------------+
| Field            | Value                                                |
+------------------+------------------------------------------------------+
| checksum         | None                                                 |
| container_format | bare                                                 |
| created_at       | 2019-03-22T15:26:04Z                                 |
| disk_format      | qcow2                                                |
| file             | /v2/images/783136d3-365a-49c6-9024-1e2f9c2db51a/file |
| id               | aa2a39c6-433c-4e94-995a-a12c4398d457                 |
| min_disk         | 0                                                    |
| min_ram          | 0                                                    |
| name             | snap_volume                                          |
| owner            | b3e26xxxxxxxxxxxxxxxxxxx12b0ba29                     |
| properties       | locations='[]'                                       |
| protected        | False                                                |
| schema           | /v2/schemas/image                                    |
| size             | None                                                 |
| status           | queued                                               |
| tags             |                                                      |
| updated_at       | 2019-03-22T15:26:04Z                                 |
| virtual_size     | None                                                 |
| visibility       | private                                              |
+------------------+------------------------------------------------------+
```

### Créer un volume à partir de votre sauvegarde

Pour créer un volume à partir de votre sauvegarde, utilisez l'ID de la sauvegarde comme image avec cette commande :

```sh
$ openstack volume create --type classic --image aa2a39c6-433c-4e94-995a-a12c4398d457 --size 10 volume_from_snap
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2019-03-22T15:39:39.880479           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | 938b13c9-414e-45b5-b0fc-cfea743f54e1 |
| multiattach         | False                                |
| name                | volume_from_snap                     |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 10                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | classic                              |
| updated_at          | None                                 |
| user_id             | f63a1d2f27df455bb306bb79b0f2e2aa     |
+---------------------+--------------------------------------+
```

## Aller plus loin

[Transférer la sauvegarde d'une instance d'une région OpenStack à une autre](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another){.external}.

Échangez avec notre [communauté d'utilisateurs](/links/community).
