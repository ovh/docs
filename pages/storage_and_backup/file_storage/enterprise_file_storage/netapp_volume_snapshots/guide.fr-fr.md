---
title: Enterprise File Storage - Gérer les snapshots d'un volume
excerpt: Découvrez comment gérer les snapshots d'un volume Enterprise File Storage en utilisant les API OVHcloud
updated: 2021-10-27
---

## Objectif

Dans ce guide, découvrez comment gérer les snapshots des volumes pour l'offre OVHcloud Enterprise File Storage.

**Vous apprendrez comment récupérer des snapshots existants, créer un nouveau snapshot, récupérer des informations détaillées d'un snapshot et supprimer un snapshot en utilisant les API OVHcloud.**

## Prérequis

- Disposer d'une offre OVHcloud Enterprise File Storage avec un volume
- Être connecté sur la page des [API OVHcloud](https://api.ovh.com/)

## L'essentiel

Un snapshot d'un volume est une copie à un instant donné et en lecture seule d'un volume.

Les snapshots sont créés à partir d'un volume opérationnel.

> [!warning]
>
> Les snapshots sont liés à un volume, ils ne peuvent pas exister sans lui.
>

## Instructions

Toutes les API utilisées pour ce guide sont disponibles dans la section */storage* : <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Lors de l'utilisation des API, tous les champs marqués d'un astérisque (\*) sont obligatoires.
>

### Lister les snapshots

Tous les snapshots existants d'un volume peuvent être récupérés à l'aide de la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>>
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

Remplacez `serviceName` par l'ID de votre service et `shareId` par votre ID du volume.

Par défaut, aucun snapshot ne doit vous être retourné pour un nouveau volume.

### Créer un snapshot à partir d'un volume

Pour créer un snapshot, utilisez la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/snapshot
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
>> >
>> > **NetAppShareSnapshot**
>> >
>> >> **description**
>> >>
>> >> > Description du snapshot
>> >>
>> >> **name**
>> >>
>> >> > Nom du snapshot
>

Remplacez `serviceName` par l'ID de votre service et `shareId` par l'ID du volume.

Les paramètres `name` et `description` du snapshot sont tous deux facultatifs.

### Récupérer les informations d'un snapshot

Pour récupérer des informations d'un snapshot, utilisez la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>>
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
>> >
>> > **snapshotId** *
>> >
>> >> ID du snapshot
>

Remplacez `serviceName` par l'ID de votre service, `shareId` par l'ID du volume et `snapshotId` par l'ID du snapshot.

### Supprimer un snapshot

Pour supprimer un snapshot, utilisez la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {v1} /storage DELETE /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>>
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
>> >
>> > **snapshotId**
>> >
>> >> ID du snapshot
>

Remplacez `serviceName` par l'ID de votre service, `shareId` par l'ID du volume et `snapshotId` par l'ID du snapshot à supprimer.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
