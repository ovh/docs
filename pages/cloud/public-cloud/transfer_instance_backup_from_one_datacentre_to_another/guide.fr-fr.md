---
title: 'Transférer la sauvegarde d’une instance d’un datacenter à un autre'
slug: transferer-la-sauvegarde-dune-instance-dun-datacentre-a-lautre
section: 'Depuis les clients en ligne de commande'
excerpt: 'Découvrez comment effectuer ce déplacement tout en préservant la configuration et l’état de l’instance.'
---

**Dernière mise à jour le 12/03/2019**

## Objectif

Vous pouvez avoir besoin de déplacer votre [instance Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external} d’un datacenter à un autre, soit parce que vous préférez utiliser un nouveau centre de données, soit parce que vous souhaitez migrer d’OVH Labs vers Public Cloud.

**Découvrez comment transférer la sauvegarde d’une instance d’un datacenter à un autre, tout en préservant sa configuration et son état.**

## Prérequis

* Avoir créé une [instance Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external} dans votre compte.
* Disposer d’un accès administrateur (root) à votre datacenter via SSH.

> [!primary]
>
> Avant de commencer, il est recommandé de lire cet autre guide : [Préparer l’environnement pour utiliser l’API OpenStack](https://docs.ovh.com/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/){.external}.
>

## En pratique

### Créer une sauvegarde

Tout d’abord, établissez une connexion SSH vers votre datacenter. Puis exécutez la commande suivante pour lister vos instances existantes :

```
#root@serveur:~$ nova list

+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Serveur1 | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.254 |
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
```

Exécutez la commande suivante afin de créer une sauvegarde de votre instance :

```
#root@serveur:~$ nova image-create aa7115b3-83df-4375-b2ee-19339041dcfa snap_serveur1
```

### Télécharger la sauvegarde

Exécutez cette commande pour lister les instances disponibles :

```
#root@serveur:~$ glance image-list
+--------------------------------------+------------------------+-------------+------------------+-------------+--------+
| ID | Name | Disk Format | Container Format | Size | Status |
+--------------------------------------+------------------------+-------------+------------------+-------------+--------+
| c17f13b5-587f-4304-b550-eb939737289a | Centos 7 | raw | bare | 2149580800 | active |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7 | raw | bare | 2149580800 | active |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8 | raw | bare | 2149580800 | active |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19 | raw | bare | 2149580800 | active |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20 | raw | bare | 2149580800 | active |
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_serveur1 | qcow2 | bare | 1598029824 | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04 | raw | bare | 2149580800 | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04 | raw | bare | 10737418240 | active |
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2 | raw | bare | 21474836480 | active |
+--------------------------------------+------------------------+-------------+------------------+-------------+--------+
```

Identifiez maintenant l'instance de sauvegarde à partir de la liste.

```
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_serveur1 | qcow2 | bare | 1598029824 | active |
```

Enfin, exécutez cette commande pour télécharger la sauvegarde :

```
#root@serveur:~$ glance image-download --file snap_serveur1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

### Transférer la sauvegarde vers un autre datacenter

Pour lancer le processus de transfert, vous devez d’abord charger de nouvelles variables d'environnement.

> [!warning]
>
Si vous transférez votre sauvegarde vers un datacenter dans le même projet, vous devrez changer la variable OS_REGION_NAME.
>

```
#root@serveur:~$ export OS_REGION_NAME=SBG1
```

Si vous transférez votre sauvegarde vers un autre projet ou compte, vous devrez recharger les variables d’environnement liées à ce compte en utilisant la commande suivante :

```
#root@serveur:~$ source openrc.sh
```

Pour transférer la sauvegarde vers le nouveau datacenter, exécutez cette commande :

```
#root@serveur:~$ glance image-create --name snap_serveur1 --disk-format qcow2 --container-format bare --file snap_serveur1.qcow

+------------------+--------------------------------------+
| Property | Value |
+------------------+--------------------------------------+
| checksum | 6cebb4104eadde099bb2721ec8c574fb |
| container_format | bare |
| created_at | 2015-10-21T13:26:42 |
| deleted | False |
| deleted_at | None |
| disk_format | qcow2 |
| id | 0a3f5901-2314-438a-a7af-ae984dcbce5c |
| is_public | False |
| min_disk | 0 |
| min_ram | 0 |
| name | snap_serveur1 |
| owner | b3e269xxxxxxxxxxxxxxxxxxxxxxba29 |
| protected | False |
| size | 319356928 |
| status | active |
| updated_at | 2015-10-21T13:26:51 |
| virtual_size | None |
+------------------+--------------------------------------+
```

### Créer une instance à partir de votre sauvegarde

Utilisez l’ID de sauvegarde comme image avec cette commande :

```
#root@serveur:~$ nova boot --key_name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Serveur1_from_snap
+--------------------------------------+------------------------------------------------------+
| Property | Value |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig | MANUAL |
| OS-EXT-AZ:availability_zone | nova |
| OS-EXT-STS:power_state | 0 |
| OS-EXT-STS:task_state | scheduling |
| OS-EXT-STS:vm_state | building |
| OS-SRV-USG:launched_at | - |
| OS-SRV-USG:terminated_at | - |
| accessIPv4 | |
| accessIPv6 | |
| adminPass | 2Rxxvb4wx2iS |
| config_drive | |
| created | 2015-10-21T13:31:41Z |
| flavor | vps-ssd-1 (98c1e679-5f2c-4069-b4da-4a4f7179b758) |
| hostId | |
| id | 68d38ef7-1b25-40bb-a629-4f91f4b24b59 |
| image | snap_serveur1 (0a3f5901-2314-438a-a7af-ae984dcbce5c) |
| key_name | SSHKEY |
| metadata | {} |
| name | Serveur1_from_snap |
| os-extended-volumes:volumes_attached | [] |
| progress | 0 |
| security_groups | default |
| status | BUILD |
| tenant_id | b3e269f057d14af594542d6312b0ba29 |
| updated | 2015-10-21T13:31:41Z |
| user_id | 01e3c1c9c3584311931233798e411ba4 |
+--------------------------------------+------------------------------------------------------+
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.