---
title: 'Transférer la sauvegarde d’un volume d’un datacenter à l’autre'
slug: transferer-la-sauvegarde-dun-volume-dun-datacentre-a-lautre
legacy_guide_number: 1941
section: Stockage
excerpt: 'Apprenez à déplacer une sauvegarde de volume entre différents centres de données'
order: 11
---

**Dernière mise à jour le 29 mars 2019**

## Objectif

Vous pouvez avoir besoin de déplacer des volumes additionnels d'un datacenter à un autre, soit parce qu'un nouveau centre de données est disponible, soit parce que vous souhaitez migrer d'[OVHcloud Labs](https://labs.ovh.com/){.external} vers [Public Cloud](https://www.ovh.com/ca/fr/public-cloud/instances/){.external}.

**Découvrez comment transférer une sauvegarde de volume d'un datacenter à un autre.**

## Prérequis

* Posséder une [instance Public Cloud](https://www.ovh.com/ca/fr/public-cloud/instances/){.external} dans votre compte OVHcloud.
* Disposer d’un accès administrateur (root) à votre datacenter via SSH.
* Lire le guide « [Préparer l’environnement pour utiliser l’API OpenStack](../preparer-lenvironnement-pour-utiliser-lapi-openstack/){.external} » (recommandé).

> [!primary]
>
Les commandes de ce guide sont basées sur la CLI OpenStack, par opposition aux API `Nova` et `Glance`.
>


## En pratique

### Créer une sauvegarde

Établissez une connexion SSH à votre datacenter, puis exécutez la commande suivante pour répertorier vos volumes existants :

```sh
root@serveur:~$ openstack volume list 
+--------------------------------------+--------------+--------+------+------------------------------------+ 
| ID | Display Name | Status | Size | Attached to | 
+--------------------------------------+--------------+--------+------+------------------------------------+ 
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | volume | in-use | 10 | Attached to Serveur 1 on /dev/sdb | 
+--------------------------------------+--------------+--------+------+------------------------------------+ 
```

Lancez ensuite la commande ci-dessous pour déchiffrer le volume à partir de son instance :

```sh 
root@serveur:~$ openstack server remove volume a8b6b51-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```

Maintenant, créez une sauvegarde sous forme d'image à l'aide de cette commande suivante :

```sh
root@serveur:~$ openstack image create --disk-format qcow2 --container-format bare --volume 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 snap_volume 
+---------------------+------------------------------------------------------+ 
| Property | Value | 
+---------------------+------------------------------------------------------+ 
| container_format | bare | 
| disk_format | qcow2 | 
| display_description | | 
| id | 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | 
| image_id | 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | 
| image_name | snap_volume | 
| size | 10 | 
| status | uploading | 
| updated_at | 2015-10-21T08:33:34.000000 | 
| volume_type | [..........] |
+---------------------+------------------------------------------------------+
```

### Télécharger la sauvegarde

Exécutez la commande suivante pour répertorier les images disponibles :

```sh
root@serveur:~$ openstack image list 
+--------------------------------------+-----------------------------------------------+--------+ 
| ID | Name | Status | 
+--------------------------------------+-----------------------------------------------+--------+ 
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | active | 
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7 | active | 
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8 | active | 
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19 | active | 
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20 | active | 
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | active | 
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04 | active | 
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04 | active | 
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2 | active | 
+--------------------------------------+-----------------------------------------------+--------+
```

Identifiez alors la sauvegarde dans la liste :

```sh
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2 | bare | 319356928 | active | 
```

Lancez enfin cette commande pour télécharger la sauvegarde :

```sh 
root@serveur:~$ openstack image save --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```

### Transférer la sauvegarde vers un autre datacenter

Pour démarrer le processus de transfert, vous devez d'abord charger de nouvelles variables d'environnement.

> [!warning]
>
Si vous transférez votre sauvegarde vers un datacenter dans le même projet, il vous suffit de modifier la variable OS\_REGION\_NAME.
>

```sh 
root@serveur:~$ export OS_REGION_NAME=SBG1
```

Si vous transférez votre sauvegarde vers un autre projet ou compte, vous devez recharger les variables d'environnement liées à ce compte à l'aide de la commande suivante :

```sh
root@serveur:~$ source openrc.sh
```

Pour transférer la sauvegarde vers le nouveau datacenter, utilisez la commande ci-dessous :

```sh 
root@serveur:~$ openstack image create --disk-format qcow2 --container-format bare --file snap_volume.qcow snap-volume 
+------------------+------------------------------------------------------+ 
| Field | Value | 
+------------------+------------------------------------------------------+ 
| checksum | None | 
| container_format | bare | 
| created_at | 2019-03-22T15:26:04Z | 
| disk_format | qcow2 | 
| file | /v2/images/783136d3-365a-49c6-9024-1e2f9c2db51a/file | 
| id | aa2a39c6-433c-4e94-995a-a12c4398d457 | 
| min_disk | 0 | 
| min_ram | 0 | 
| name | snap_volume | 
| owner | b3e26xxxxxxxxxxxxxxxxxxx12b0ba29 | 
| properties | locations='[]' | 
| protected | False | 
| schema | /v2/schemas/image | 
| size | None | 
| status | queued | 
| tags | | 
| updated_at | 2019-03-22T15:26:04Z | 
| virtual_size | None | 
| visibility | private | 
+------------------+------------------------------------------------------+ 
```

### Créer un volume à partir de votre sauvegarde

Utilisez l'ID de sauvegarde comme image avec la commande suivante :

```sh
root@serveur:~$ volume créer —type classique —image aa2a39c6-433c-4e94-995a-a12c4398d457 —size 10 volume_from_snap 
+—+—+
| Champ| Valeur| 
+—+—+
| pièces jointes| []|
| zone_disponibilité| nova|
| amorçable| faux|
| cohérence_id_groupe| Aucun|
| création_at| 2019-03-22T15:39:39.880479|
| description| Aucun|
| crypté| Faux|
| id| 938b13c9-414e-45b5-b0fc-cfea743f54e1|
| multiattachement| Faux|
| nom| volume_de_capture|
| propriétés| |
| Replication_status| désactivé|
| taille| 10|
| id_instantané| Aucun|
| source_volid| Aucun|
| statut| création|
| type| classique|
| update_at| Aucun|
| id_utilisateur| f63a1d2f27df455bb306bb79b0f2e2aa| 
+—+—+ 
```

## Aller plus loin

[Transférer la sauvegarde d’une instance d’un datacenter à un autre](../transferer-la-sauvegarde-dune-instance-dun-datacentre-a-lautre/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
