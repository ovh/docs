---
title: NAS-HA - Gestion des partitions par API
slug: nas/nas-partitions-api
excerpt: "Apprenez à gérer les partitions NAS-HA grâce à l'API OVHcloud"
section: NAS
---

**Dernière mise à jour le 20/07/2022**

## Objectif

Le service NAS-HA OVHcloud vous permet de gérer un stockage de fichiers accessible depuis un réseau.

**Ce guide vous explique comment gérer les partitions de votre service NAS-HA via l'API OVHcloud.**

## Prérequis

- Un service [NAS-HA OVHcloud](https://www.ovh.com/ca/fr/nas/)
- Consultez notre guide des [premiers pas avec l'API OVHcloud](../../api/first-steps-with-ovh-api/) afin de vous familiariser avec l'APIv6 OVHcloud

## En pratique

Toutes les routes API de ce guide sont disponibles dans la section */dedicated/nasha* : <https://ca.api.ovh.com/console/#/dedicated/nasha>.

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

### Liste de toutes les partitions

Utilisez la route suivante pour récupérer les partitions d'un service :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS
>

### Récupérer les propriétés d'une partition

Pour visualiser les détails d'une partition, utilisez la route suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}
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

### Récupération des statistiques d'une partition

Utilisez la route suivante pour récupérer les informations d'utilisation d'une partition :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/use
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
>> > **type** *
>> >
>> >> Le type de statistique à récupérer : *size*, *used* or *usedbysnapshots*
>

### Création d'une partition

Utilisez la route suivante pour créer une nouvelle partition :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS
>> >
>> > **partitionDescription** 
>> >
>> >> Description facultative
>> >
>> > **partitionName** *
>> >
>> >> Un nom pour la partition
>> >
>> > **protocol** *
>> >
>> >> *NFS*, *CIFS* ou *NFS_CIFS* pour les deux 
>> >
>> > **size** *
>> >
>> >> La taille de la partition
>

Choisissez `NFS` comme protocole et une taille de `10` Gigaoctets par exemple.

### Modifier les propriétés d'une partition

Utilisez la route suivante pour modifier une partition :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {PUT} /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>> >
>> > **partitionDescription**
>> >
>> >> La nouvelle description
>> >
>> > **size**
>> >
>> >> La nouvelle taille de la partition
>

### Récupérer les paramètres ZFS d’une partition

Utilisez la route suivante pour récupérer les paramètres ZFS :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/options
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>

### Modification des paramètres ZFS d’une partition

> [!warning]
>
> Tous les paramètres ZFS par défaut sont optimisés. Il est déconseillé de modifier ces paramètres.
>

Utilisez la route suivante pour modifier les paramètres ZFS :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/options
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> Le nom interne de votre service NAS
>> >
>> > **partitionName** *
>> >
>> >> Nom de la partition
>> >
>> > **time**
>> >
>> >> Paramètre de mise à jour du temps d'accès : *on* (default) ou *off*
>> >
>> > **recordsize**
>> >
>> >> Taille de bloc maximale : *131072* (par défaut), *16384*, *32768*, *4096*, *65536* ou *8129*
>> >
>> > **sync**
>> >
>> >> Paramètre de synchronisation de fichier : *always*, *disabled* ou *standard* (valeur par défaut)
>

### Suppression d'une partition

Utilisez la route suivante pour supprimer une partition :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}
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

## Aller plus loin

[Montez votre NAS via un partage NFS](../nas-nfs/)

[Montez votre NAS sur Windows Server via CIFS](../nas-cifs/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.