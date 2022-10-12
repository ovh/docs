---
title: Enterprise File Storage - Gérer vos volumes
slug: netapp/volumes
excerpt: Découvrez comment créer et gérer vos volumes OVHcloud Enterprise File Storage en utilisant les API OVHcloud
section: Enterprise File Storage
order: 3
---

**Dernière mise à jour le 27/10/2021**

## Objectif

Dans ce guide, découvrez comment gérer les volumes pour l'offre OVHcloud Enterprise File Storage.

**Vous apprendrez comment récupérer les volumes existants ainsi que leur point de montage, créer un nouveau volume ou encore supprimer un volume existant depuis les API OVHcloud.**

## Prérequis

- Disposer d'une offre OVHcloud Enterprise File Storage
- Être connecté sur la page des [API OVHcloud](https://api.ovh.com/)

## L'essentiel

Un volume est un système de fichiers partagé persistant, accessible en lecture et/ou écriture.

Il peut également avoir un nom et une description (facultatif).

> [!warning]
>
> Par défaut, tout accès à un volume nouvellement créé est restreint. Une ACL doit être créée pour permettre l’accès.
>

## Instructions

Toutes les routes API utilisées pour ce guide sont disponibles dans la section */storage* : <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Lors de l'utilisation des API, tous les champs marqués d'un astérisque (\*) sont obligatoires.
>

### Lister les volumes

Pour lister les volumes d'un service, utilisez la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> ID du service
>> >
>

Remplacez `serviceName` par l'ID de votre service.

### Récupérer les informations d'un volume

Pour récupérer les informations d'un volume, utilisez la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> ID du service
>> >
>> > **shareId** *
>> >
>> >> ID du volume
>

Remplacez `serviceName` par l'ID de votre service et `shareId` par l'ID du volume.

### Créer un volume

Pour créer un nouveau volume, utilisez la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp{serviceNme}/share
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> ID du service
>> >
>

Remplacez `serviceName` par l'ID de votre service.

Choisissez le protocol `NFS` pour votre nouveau volume (propriété `protocol`) ainsi que la taille de celui-ci (propriété `size`).
Vous pouvez également spécifier un nom et une description avec les propriétés `name` et `description`.

### Afficher les points de montage d'un volume

Pour connaître le chemin de montage d'un volume, utilisez la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp{serviceName}/share/{shareId}/accessPath
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> ID du service
>> >
>> > **shareId** *
>> >
>> >> ID du volume
>

Remplacez `serviceName` par l'ID de votre service et `shareId` par l'ID du volume.

Les chemins de montage retournés peuvent être utilisés pour monter le volume.

La commande de montage sera différente, suivant le protocole choisi pour le volume.  

> [!primary]
>
> Pour NFS, vous trouverez les instructions de montage dans le guide [Monter votre NAS via un partage NFS](https://docs.ovh.com/fr/storage/nas/nas-nfs/).
> À noter que le chemin de montage récupéré remplace IP_NAS/NFS_PATH dans cette documentation.
>  

### Supprimer un volume

Pour supprimer un volume, utilisez la route API suivante :  

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> ID du service
>> >
>> > **shareId** *
>> >
>> >> ID du volume
>

Remplacez `serviceName` par l'ID de votre service et `shareId` par l'ID du volume à supprimer.

## Aller plus loin

[Premiers pas avec les API OVHcloud](https://docs.ovh.com/fr/api/first-steps-with-ovh-api/)

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
