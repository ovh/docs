---
title: "Débuter avec la gestion des volumes dans l’API Openstack"
slug: debuter-avec-volumes-api-openstack
legacy_guide_number: 2071
section: Gestion via OpenStack
order: 6
---

**Dernière mise à jour le 19/05/2021**

## Objectif

Afin d'automatiser vos opérations sur le Public Cloud, il est possible d'utiliser les API OpenStack afin de générer différents scripts.
<br>Vous pourrez par exemple créer un nouveau volume de type « haute performance » pour l'attacher à une instance Public Cloud.

**Ce guide vous aidera à prendre en main les API OpenStack afin de gérer vos volumes à l'aide du client Python OpenStack.**

## Prérequis

- [Préparer l'environnement pour utiliser l'API OpenStack](../prepare_the_environment_for_using_the_openstack_api/) en installant python-cinderclient et python-novaclient
- [Charger les variables d'environnement OpenStack](../set-openstack-environment-variables/)

## En pratique

### Documentation Cinder

Vous pouvez obtenir la liste des commandes possibles en lisant la documentation du client OpenStack :

```bash
admin@serveur-1:~$ openstack help
```

Voici la liste des commandes principales :

|Commande|Description|
|---|---|
|volume create|Crée un nouveau volume|
|volume delete|Supprime un volume|
|volume list|Liste les volumes|
|volume snapshot create|Crée un snaspshot d'un volume|

Vous pouvez également obtenir des informations concernant une commande spécifique en ajoutant `help` devant celle ci :

```bash
admin@serveur-1:~$ openstack help volume snapshot create
usage: openstack volume snapshot create [-h] [-f {json,shell,table,value,yaml}] [-c COLUMN] [--noindent] [--prefix PREFIX] [--max-width <integer>] [--fit-width] [--print-empty] [--volume <volume>] [--description <description>] [--force] [--property <key=value>]
                                        [--remote-source <key=value>]
                                        <snapshot-name>

Create new volume snapshot

positional arguments:
  <snapshot-name>       Name of the new snapshot

optional arguments:
  -h, --help            show this help message and exit
  --volume <volume>     Volume to snapshot (name or ID) (default is <snapshot-name>)
  --description <description>
                        Description of the snapshot
  --force               Create a snapshot attached to an instance. Default is False
```

> [!primary]
>
> Il est aussi possible de consulter la documentation du client Openstack directement sur [le site OpenStack](https://docs.openstack.org/python-openstackclient/latest/){.external}.
> 

### Operations basiques

#### Créer un volume haute performance

- Lister les types de volumes :

```bash
admin@serveur-1:~$ openstack volume type list
+--------------------------------------+------------+-----------+
| ID                                   | Name       | Is Public |
+--------------------------------------+------------+-----------+
| e9551830-6362-4bf8-92e5-391829456b03 | classic    | True      |
| 6fc8e512-3cac-4f39-b9a8-af098d710506 | high-speed | True      |
+--------------------------------------+------------+-----------+
```

- Créer le volume de type high-speed de 10GB nommé volume1 :

``` bash
admin@serveur-1:~$ openstack volume create --type high-speed --size 10 volume1

+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2021-05-18T14:16:28.658308           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 |
| multiattach         | False                                |
| name                | volume1                              |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 10                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | high-speed                           |
| updated_at          | None                                 |
| user_id             | ...                                  |
+---------------------+--------------------------------------+
```

Vous pouvez installer une image sur un volume à l'aide de l'argument `--image` :

```bash
admin@serveur-1:~$ openstack volume create --type high-speed --image be66762f-b849-43e1-b57c-005d9fe28088 --size 20 volume_debian
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2021-05-18T14:26:38.887508           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | 442d9dff-7df5-41b2-95e9-fa8ac5f4784a |
| multiattach         | False                                |
| name                | volume_debian                        |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 20                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | high-speed                           |
| updated_at          | None                                 |
| user_id             | ...                                  |
+---------------------+--------------------------------------+
```

Où **be66762f-b849-43e1-b57c-005d9fe28088**  correspond à l'ID de l'image Debian 10.

#### Attacher un volume sur une instance

- Lister les volumes additionnels :

```bash
admin@serveur-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-------------+
| ID                                   | Name          | Status    | Size | Attached to |
+--------------------------------------+---------------+-----------+------+-------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |             |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | available |   10 |             |
+--------------------------------------+---------------+-----------+------+-------------+
```

> [!primary]
>
> La majorité des commandes suivantes nécessiteront de renseigner l'ID du volume plutôt que son nom.
>

- Monter le volume sur une instance avec le client Openstack :

```bash
admin@serveur-1:~$ openstack server add volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Vérifier le bon attachement du volume à l'instance avec le client OpenStack :

```bash
admin@serveur-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| ID                                   | Name          | Status    | Size | Attached to                             |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |                                         |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | in-use    |   10 | Attached to cli-playground on /dev/sdb  |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
```

#### Suppression d'un volume

- Détacher le volume de l'instance :

```bash
admin@serveur-1:~$ openstack server remove volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Supprimer le volume :

```bash
admin@serveur-1:~$ openstack volume delete f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
