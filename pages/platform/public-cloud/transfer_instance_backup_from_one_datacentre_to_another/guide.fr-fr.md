---
title: 'Transférer la sauvegarde d’une instance d’un datacenter à un autre'
slug: transferer-la-sauvegarde-dune-instance-dun-datacentre-a-lautre
section: 'Actions via API et lignes de commande'
excerpt: 'Découvrez comment effectuer ce déplacement tout en préservant la configuration et l’état de l’instance.'
---

**Dernière mise à jour le 29 mars 2019**

## Objectif

Vous pouvez avoir besoin de déplacer votre instance Public Cloud d’un datacenter à un autre, soit parce que vous préférez utiliser un nouveau centre de données, soit parce que vous souhaitez migrer d’OVH Labs vers Public Cloud.

**Découvrez comment transférer la sauvegarde d’une instance d’un datacenter à un autre, tout en préservant sa configuration et son état.**


## Prérequis

* Posséder une [instance Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external} dans votre compte OVH.
* Disposer d’un accès administrateur (root) à votre datacenter via SSH.
* Lire le guide « [Préparer l’environnement pour utiliser l’API OpenStack](https://docs.ovh.com/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/){.external} » (recommandé).

> [!primary]
>
Les commandes de ce guide sont basées sur la CLI OpenStack, par opposition aux API `Nova` et `Glance`.
>

## En pratique

### Créer une sauvegarde

Tout d'abord, établissez une connexion SSH vers votre datacenter. Puis lancez la commande suivante pour lister vos instances existantes :

```
#root@server:~$ openstack server list
 
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID                                   | Name      | Status | Networks                                         | Image Name   |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```


Exécutez alors la commande ci-dessous afin de créer une sauvegarde de votre instance :

```
openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Télécharger la sauvegarde

Lancez cette commande pour lister les instances disponibles :

```
#root@server:~$ openstack image list 
+--------------------------------------+-----------------------------------------------+--------+ 
| ID | Name | Status | 
+--------------------------------------+-----------------------------------------------+--------+ 
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | active | 
| 3ff877dc-1a62-43e7-9655-daff37a0c355 | NVIDIA GPU Cloud (NGC) | active | 
| a14a7c1e-3ac5-4a61-9d36-1abc4ab4d5e8 | Centos 7 | active | 
| f720a16e-543b-42e5-af45-cc188ad2dd34 | Debian 8 - GitLab | active | 
| d282e7aa-332c-4dc7-90a9-d49641fa7a95 | CoreOS Stable | active | 
| 2519f0fb-18cc-4915-9227-7754292b9713 | Ubuntu 16.04 | active | 
| b15789f8-2e2f-4f6c-935d-817567319627 | Windows Server 2012 R2 Standard - UEFI | active | 
| ed2f327f-dbae-4f9e-9754-c677a1b76fa3 | Ubuntu 14.04 | active | 
| 9c9b3772-5320-414a-90bf-60307ff60436 | Debian 8 - Docker | active |
```

Identifiez maintenant la sauvegarde dans la liste :

``` 
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Enfin, exécutez cette commande pour télécharger la sauvegarde :

```
#root@server:~$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

### Transférer la sauvegarde vers un autre datacenter

Pour démarrer le processus de transfert, vous devez d'abord charger de nouvelles variables d'environnement.

> [!warning]
>
> Si vous transférez votre sauvegarde vers un datacenter dans le même projet, il vous suffit de modifier la variable OS\_REGION\_NAME.
>

``` 
#root@server:~$ export OS_REGION_NAME=SBG1
```

Si vous transférez votre sauvegarde vers un autre projet ou compte, vous devez recharger les variables d'environnement liées à ce compte en utilisant la commande suivante :

```
#root@server:~$ source openrc.sh
```

Pour transférer la sauvegarde vers le nouveau datacenter, exécutez cette commande :

```
#root@server:~$ openstack image create --disk-format qcow2 --container-format bare --file snap_server1.qcow snap_server1
 
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field            | Value                                                                                                                                                                                     |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum         | 82cb7d57ec7278818bba0afcf802f0fb                                                                                                                                                          |
| container_format | bare                                                                                                                                                                                      |
| created_at       | 2019-03-22T14:26:22Z                                                                                                                                                                      |
| disk_format      | qcow2                                                                                                                                                                                     |
| file             | /v2/images/1bf21cf3-8d39-40ae-b088-5549c31b7905/file                                                                                                                                      |
| id               | 0a3f5901-2314-438a-a7af-ae984dcbce5c                                                                                                                                                    |
| min_disk         | 0                                                                                                                                                                                         |
| min_ram          | 0                                                                                                                                                                                         |
| name             | snap_server1                                                                                                                                                                             |
| owner            | 4e03fd164d504aa3aa03938f0bf4ed90                                                                                                                                                          |
| properties       | direct_url='swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', locations='[{u'url': u'swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', u'metadata': {}}]' |
| protected        | False                                                                                                                                                                                     |
| schema           | /v2/schemas/image                                                                                                                                                                         |
| size             | 3004956672                                                                                                                                                                                |
| status           | active                                                                                                                                                                                    |
| tags             |                                                                                                                                                                                           |
| updated_at       | 2019-03-22T14:41:05Z                                                                                                                                                                      |
| virtual_size     | None                                                                                                                                                                                      |
| visibility       | private                                                                                                                                                                                   |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Créer une instance à partir de votre sauvegarde

Utilisez l'ID de sauvegarde comme image avec la commande suivante :

```
#root@server:~$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Aller plus loin

[Transférer la sauvegarde d’un volume d’un datacentre a l’autre](../transferer-la-sauvegarde-dun-volume-dun-datacentre-a-lautre/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.