---
title: NAS-HA - Gestion des snapshots via API
slug: nas/nas-snapshots-api
excerpt: "Apprenez à gérer les snapshots du NAS-HA via l'API OVHcloud"
section: NAS
order: 09
---

**Dernière mise à jour le 20/07/2022**

## Objectif

Les NAS-HA OVHcloud vous permettent de créer et de gérer des volumes de fichiers accessibles depuis un réseau. 

**Ce guide vous explique comment gérer les snapshots d'une partition NAS-HA via l'API OVHcloud.**

## Prérequis

- Un service [NAS-HA OVHcloud](https://www.ovh.com/fr/nas/)
- Consultez notre guide des [premiers pas avec l'API OVHcloud](https://docs.ovh.com/fr/api/first-steps-with-ovh-api/) afin de vous familiariser avec l'APIv6 OVHcloud

## En pratique

> [!primary]
> N’hésitez pas à vous rendre sur [la page FAQ NAS-HA](https://docs.ovh.com/fr/storage/faq-nas/) pour retrouver toutes les informations détaillées concernant la fonction snapshot.
>

Toutes les routes API de ce guide sont disponibles dans la section */dedicated/nasha* : <https://api.ovh.com/console/#/dedicated/nasha>.

> [!primary]
>
> Lors de l'utilisation de l'API, tous les champs marqués d'un astérisque (\*) sont obligatoires.
>

### Récupérer des informations sur votre service

Tous vos services actifs peuvent être récupérés en utilisant la route suivante :

> [!api]
>
> @api {GET} /dedicated/nasha
>

Par défaut, un snapshot de vos données a lieu toutes les heures et est sauvegardé sur votre NAS-HA. Vous pouvez activer d'autres stratégies de snapshot qui créeront des snapshots à des fréquences prédéfinies.

### Récupérer la planification automatique des snapshots

Pour afficher la planification de snapshot automatique active, utilisez la route suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>

### Ajout d'un intervalle de snapshot automatique

Pour créer des snapshots automatiques supplémentaires à une fréquence sélectionnée, utilisez la route suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>> >
>> > **snapshotType** *
>> >
>> >> Une fréquence pour le snapshot : *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, ou *hour-6*
>

### Récupération des informations sur les snapshots automatiques

Pour récupérer les détails d'un snapshot automatique, utilisez la route suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>> >
>> > **snapshotType** *
>> >
>> >> La fréquence de snapshot concernée : *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, ou *hour-6*
>

### Suppression d'un intervalle de snapshot automatique

Utilisez la route suivante pour supprimer une fréquence de snapshot automatique :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>> >
>> > **snapshotType** *
>> >
>> >> La fréquence de snapshot concernée : *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, ou *hour-6*
>

Vous pouvez également utiliser des snapshots instantanés avec votre NAS-HA (snapshots personnalisés) via les endpoints suivants.

### Listing des snapshots personnalisés

Utilisez la route suivante pour récupérer des snapshots personnalisés existants :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>

### Création d'un snapshot personnalisé

Pour ajouter un snapshot manuel, utilisez la route suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>> >
>> > **expiration**
>> >
>> >> Une date d'expiration facultative, par exemple : 2022-06-24 (ISO 8601)
>> >
>> > **name** *
>> >
>> >> Nom du snapshot.
>

### Récupération des informations d'un snapshot personnalisé

Pour afficher les détails d'un snapshot personnalisé, utilisez la route suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>> >
>> > **name** *
>> >
>> >> Le nom du snapshot
>

### Suppression d'un snapshot personnalisé

Utilisez la route suivante pour supprimer un snapshot personnalisé :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name} 
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>> >
>> > **name** *
>> >
>> >> Le nom du snapshot
>

##### **Restauration de snapshots**

L'API ne permet pas de restaurer les snapshots effectués. Les snapshots sont stockés en lecture seule sur la partition.

Pour accéder aux snapshots depuis votre point de montage, vous devez accéder au répertoire `.zfs/snapshot` de votre partition.

Par exemple, sur un service dont l'ID est `zpool-123456`, contenant une partition nommée `partition1` et dont vous avez créé un snapshot nommé `snap-snapshot01`. Vous pouvez retrouver le snapshot avec cette commande :

```bash
ls -al /zpool-123456/partition1/.zfs/snapshot/snap-snapshot01/
```

Pour restaurer votre snapshot, copiez-le depuis le chemin d'accès du fichier `.zfs` vers le nouveau répertoire où vous souhaitez restaurer le snapshot. Vous pouvez utiliser un outil comme rsync qui vous permet d'effectuer des restaurations.

Plus d’informations dans la section [Aller plus loin](#gofurther) de ce guide.

## Aller plus loin

[Montez votre NAS via un partage NFS](../nas-nfs/)

[Montez votre NAS sur Windows Server via CIFS](../nas-cifs/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.