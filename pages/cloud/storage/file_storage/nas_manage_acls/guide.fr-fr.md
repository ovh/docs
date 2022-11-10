---
title: NAS-HA - Gestion des ACL via API
slug: nas/manage-acls
excerpt: Apprenez à gérer les accès au NAS-HA via l'API OVHcloud
section: NAS-HA
order: 07
---

**Dernière mise à jour le 20/07/2022**

## Objectif

Le service NAS-HA OVHcloud vous permet de gérer un stockage de fichiers accessible depuis un réseau.

**Ce guide vous explique comment gérer l'ACL d'une partition NAS-HA via l'API OVHcloud.**

## Prérequis

- Un service [NAS-HA OVHcloud](https://www.ovh.com/fr/nas/)
- Consultez notre guide des [premiers pas avec l'API OVHcloud](https://docs.ovh.com/fr/api/first-steps-with-ovh-api/) afin de vous familiariser avec l'APIv6 OVHcloud

## En pratique

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

> [!warning]
>
> L'accès est refusé par défaut sauf s'il est accordé via l'ACL. Seules les adresses IP attachées à vos services OVHcloud peuvent être ajoutées.
>

### Récupérer l'ACL d'une partition

Pour récupérer les adresses IP pouvant accéder à la partition, utilisez la route suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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

### Récupération de toutes les adresses IP éligibles

Vous pouvez vérifier les adresses IP éligibles à un accès via les appels API suivants :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
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

### Ajout d'une entrée ACL

Pour créer une nouvelle entrée ACL vous permettant de vous connecter à votre partition, utilisez la route suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > **ip** *
>> >
>> >> L'adresse IP ou la plage à laquelle l'accès doit être accordé
>> >
>> > **type** *
>> >
>> >> Type d'accès ACL pour cette entrée : *readonly* ou *readwrite*
>

> [!primary]
>
> Utilisez la notation CIDR pour les plages IP, par exemple : 192.0.2.0/24.
>

### Suppression d'une entrée ACL

Pour supprimer une adresse IP ou une plage d'adresses de l'ACL, utilisez la route suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
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
>> > **ip** *
>> >
>> >> L'adresse IP ou la plage à refuser d'accès
>

## Aller plus loin

[Montez votre NAS via un partage NFS](https://docs.ovh.com/fr/storage/file-storage/nas/nfs/)

[Montez votre NAS sur Windows Server via CIFS](https://docs.ovh.com/fr/storage/file-storage/nas/cifs/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
