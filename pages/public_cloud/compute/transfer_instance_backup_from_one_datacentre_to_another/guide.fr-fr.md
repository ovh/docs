---
title: "Transférer la sauvegarde d'une instance d'une région OpenStack à une autre"
excerpt: "Découvrez comment transférer une sauvegarde d'instance d'une région OpenStack à une autre tout en préservant la configuration et l'état de l'instance"
updated: 2023-09-25
---

## Objectif

Vous pourriez être amené à déplacer votre [instance Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) d'une région OpenStack à une autre. Soit parce que vous préférez migrer vers une nouvelle région OpenStack disponible ou parce que vous souhaitez migrer d'OVHcloud Labs vers Public Cloud.

**Découvrez comment transférer une sauvegarde d'instance d'une région OpenStack à une autre tout en préservant la configuration et l'état de l'instance.**

## Prérequis

Pour effectuer le transfert, vous aurez besoin d'un environnement avec :

- CLI OpenStack. Consultez notre guide « [Comment préparer l'environnement pour utiliser l'API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api) ».
- La Connectivité aux API OVHcloud OpenStack.
- De l'espace de stockage disponible correspondant à la taille du disque de l'instance (pour le stockage de sauvegarde temporaire).

Cet environnement sera utilisé comme « jump host » pour transférer la sauvegarde d'une région à une autre. Cet environnement peut être une instance hébergée sur OVHcloud ou sur votre machine locale.

Vous aurez également besoin d’une [instance Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) sur votre compte OVHcloud.

## En pratique

### Créer une sauvegarde

```bash
$ openstack server list
 
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID | Name | Status | Networks | Image Name |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```

Exécutez ensuite la commande suivante pour créer une sauvegarde de votre instance :

```bash
$ openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Télécharger la sauvegarde

Exécutez ensuite cette commande pour répertorier les instances disponibles :

```bash
$ openstack image list
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

Identifiez maintenant la sauvegarde de l'instance dans la liste :

```text
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Enfin, exécutez cette commande pour télécharger la sauvegarde sur l'hôte de reroutage :

```bash
$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

<a name="transfer"></a>

### Transférer la sauvegarde vers une autre région OpenStack

Pour démarrer le processus de transfert, vous devez d'abord charger de nouvelles variables d'environnement.

> [!warning]
>
> Si vous transférez votre sauvegarde vers une région OpenStack au sein du même projet, vous devrez changer la variable `OS_REGION_NAME`.
>

```bash
$ export OS_REGION_NAME=SBG1
```

Si vous transférez votre sauvegarde vers un autre projet ou compte, vous devrez recharger les variables d'environnement liées à ce compte à l'aide de la commande suivante :

```bash
$ source openrc.sh
```

Pour transférer la sauvegarde vers la nouvelle région OpenStack, utilisez cette commande :

```bash
$ openstack image create --disk-format qcow2 --container-format bare --file snap_server1.qcow snap_server1
```

```text
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field | Value |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum | 82cb7d57ec7278818bba0afcf802f0fb |
| container_format | bare |
| created_at | 2019-03-22T14:26:22Z |
| disk_format | qcow2 |
| file | /v2/images/1bf21cf3-8d39-40ae-b088-5549c31b7905/file |
| id | 0a3f5901-2314-438a-a7af-ae984dcbce5c |
| min_disk | 0 |
| min_ram | 0 |
| name | snap_server1 |
| owner | 4e03fd164d504aa3aa03938f0bf4ed90 |
| properties | direct_url='swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', locations='[{u'url': u'swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', u'metadata': {}}]' |
| protected | False |
| schema | /v2/schemas/image |
| size | 3004956672 |
| status | active |
| tags | |
| updated_at | 2019-03-22T14:41:05Z |
| virtual_size | None |
| visibility | private |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Créer une instance à partir de votre sauvegarde

Pour créer une instance à partir de votre sauvegarde, utilisez l'ID de sauvegarde comme image avec cette commande :

```bash
$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.