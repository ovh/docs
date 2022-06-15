---
title: Enterprise File Storage - Gérer les ACL d'un volume
slug: netapp-volume-acl
excerpt: Découvrez comment gérer les ACL d'un volume Enterprise File Storage en utilisant les API OVHcloud
section: Enterprise File Storage
order: 4
---

**Dernière mise à jour le 27/10/2021**

## Objectif

Dans ce guide, découvrez comment gérer les ACL d'un volume pour l'offre OVHcloud Enterprise File Storage.

**Vous apprendrez comment récupérer les ACL (Access Control Lists) de votre volume, créer une nouvelle ACL ainsi que supprimer une ACL existante depuis les API OVHcloud.**

## Prérequis

- Disposer d'une offre OVHcloud Enterprise File Storage avec un volume
- Être connecté sur la page des [API OVHcloud](https://api.ovh.com/)

## L'essentiel

Les ACL permettent d'autoriser ou de restreindre l'accès à un volume.

> [!warning]
>
> Par défaut, tout accès à un volume nouvellement créé est restreint. Une ACL doit être créée pour permettre l'accès.
>

À l'aide des ACL, vous pouvez autoriser une adresse IP ou une plage d'adresses IP (notation CIDR) à accéder à votre volume.

## Instructions

Toutes les routes API utilisées pour ce guide sont disponibles dans la section */storage* : <https://api.ovh.com/console/#/storage>.

> [!primary]
>
> Lors de l'utilisation de l'API, tous les champs marqués d'un astérisque (\*) sont obligatoires.
>

### Lister les ACL

Toutes les ACL existantes d'un volume peuvent être récupérées à l'aide de la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/acl
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>>
>> >> ID du service
>>
>> > **shareId** *
>>
>> >> ID du volume
>

Remplacez `serviceName` par l'ID de votre service et `shareId` par l'ID du volume.

Lorsque vous utiliserez cet appel API pour un nouveau volume, aucune ACL ne doit vous être retournée par défaut.

### Autoriser l'accès à un volume à l'aide d'une ACL

Pour créer une nouvelle ACL, utilisez la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share/{shareId}/acl
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>>
>> >> ID du service
>>
>> > **shareId** *
>>
>> >> ID du volume
>>
>> > **NetAppShareACLRule** *
>>
>> >> **accessLevel** *
>> >>
>> >> > Niveau d'accès ACL. Peut être **rw** (lecture et écriture) ou **ro** (lecture seule).
>> >>
>> >> **accessTo** *
>> >>
>> >> > Adresse IP ou plage d'adresses IP en notation CIDR.
>

Remplacez `serviceName` par l'ID de votre service et `shareId` par l'ID du volume.

Choisissez le niveau d'accès que vous souhaitez autoriser : soit `ro` (lecture seule) ou `rw` (lecture et écriture).

Enfin, remplacez `accessTo` par l'adresse IP à partir de laquelle vous souhaitez autoriser les connexions.

### Supprimer une ACL

La suppression d'une ACL empêche tout accès ultérieur à partir des adresses IP qu'elle spécifie.

Pour supprimer une ACL, utilisez la route API suivante :

> [!faq]
>
> API :
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>>
>> >> ID du service
>>
>> > **shareId** *
>>
>> >> ID du volume
>>
>> > **aclRuleId** *
>>
>> >> ID de l'ACL
>

Remplacez `serviceName` par l'ID de votre service et `shareId` par l'ID du volume.

Vous pouvez obtenir le `aclRuleId` à partir de la réponse obtenue lors de création de l'ACL ou en listant les ACL existantes de votre volume.

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
