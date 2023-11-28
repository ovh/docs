---
title: NAS-HA - Gestion des ACL via API
excerpt: Apprenez à gérer les accès au NAS-HA via l'API OVHcloud
updated: 2022-07-20
---

## Objectif

Le service NAS-HA OVHcloud vous permet de gérer un stockage de fichiers accessible depuis un réseau.

**Ce guide vous explique comment gérer l'ACL d'une partition NAS-HA via l'API OVHcloud.**

## Prérequis

- Un service [NAS-HA OVHcloud](https://www.ovh.com/ca/fr/nas/)
- Consultez notre guide des [premiers pas avec l'API OVHcloud](/pages/manage_and_operate/api/first-steps) afin de vous familiariser avec l'APIv6 OVHcloud

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
> @api {v1} /dedicated/nasha GET /dedicated/nasha
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
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {v1} /dedicated/nasha GET /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
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
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> > @api {v1} /dedicated/nasha DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
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

[Montez votre NAS via un partage NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs)

[Montez votre NAS sur Windows Server via CIFS](/pages/storage_and_backup/file_storage/ha_nas/nas_cifs)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
