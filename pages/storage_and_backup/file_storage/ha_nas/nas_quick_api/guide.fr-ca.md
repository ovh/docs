---
title: NAS-HA - Premiers pas avec les API
excerpt: "Découvrez comment bien débuter avec un service NAS-HA en utilisant l'API OVHcloud"
updated: 2022-07-20
---

## Objectif

Le service NAS-HA OVHcloud vous permet de gérer du stockage de fichiers accessible depuis un réseau.

**Ce guide vous donne un aperçu de l'utilisation de votre service NAS-HA via l'API OVHcloud.**

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

### Création d'une partition

Utilisez la route suivante pour créer une nouvelle partition :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition
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

### Ajout d'une entrée ACL pour accéder à la partition

> [!warning]
>
> L'accès est refusé par défaut sauf s'il est accordé via l'ACL. Seules les adresses IP attachées à vos services OVHcloud peuvent être ajoutées.
>

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

### Créer un snapshot manuel

Pour ajouter un snapshot manuel, utilisez la route suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha POST /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
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

### Suppression d'une partition

Utilisez la route suivante pour supprimer une partition :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {v1} /dedicated/nasha DELETE /dedicated/nasha/{serviceName}/partition/{partitionName}
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

[Montez votre NAS via un partage NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_nfs)

[Montez votre NAS sur Windows Server via CIFS](/pages/storage_and_backup/file_storage/ha_nas/nas_cifs)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
