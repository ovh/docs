---
title: Object Storage – Comment partager un objet ou fichier en externe
excerpt: Découvrez comment partager en toute sécurité des fichiers Object Storage en externe dans OVHcloud, en utilisant des URLs signées, des objets public-read ou des politiques de bucket pour un accès contrôlé
updated: 2025-12-19
---

## Objectif

Ce guide explique comment partager en toute sécurité des fichiers ou objets stockés dans l'Object Storage OVHcloud avec des utilisateurs externes, couvrant l'accès temporaire, les objets public-read et les politiques de bucket, tout en mettant en évidence les types d'URL et les bonnes pratiques.

### Scénarios d'utilisation

Les scénarios d'utilisation courants de partage d'objets dans l'Object Storage OVHcloud sont :

- Vous souhaitez fournir un lien de téléchargement temporaire à un partenaire ou client sans accorder un accès complet au bucket.
- Vous avez besoin de rendre certains objets publics, tels que des images ou des documents de produits, tout en gardant le reste du bucket privé.
- Vous souhaitez accorder un accès contrôlé à certains fichiers pour des collaborateurs ou utilisateurs externes.

## Comparaison des types d'URL

Lorsque vous partagez des objets dans l'Object Storage OVHcloud, il est important de comprendre la différence entre les **URL Path-style** et les **URL Virtual-hosted-style**.

| Fonctionnalité             | URL Path-style                                                                | URL Virtual-hosted-style                                     |
| -------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| Format                     | `https://s3.<region>.io.cloud.ovh.net/<bucket>/<object-key>/<generated-code>` | `https://<bucket>.s3.<region>.io.cloud.ovh.net/<object-key>` |
| Utilisation typique        | URLs signées générées via l'API                                               | URLs provenant du panneau de configuration ou des objets publics                |
| Emplacement du nom de bucket | Dans le chemin de l'URL                                                       | Dans le sous-domaine                                             |
| Adapté pour                | Accès temporaire ou programmation                                              | Partage public ou liens stables                               |
| Contrôle d'accès           | Limité par l'expiration de l'URL signée                                           | Contrôlé par les ACL ou les politiques de bucket                        |

**Points clés :**

- Utilisez les URL Path-style pour un accès temporaire ou programmé.
- Utilisez les URL Virtual-hosted-style pour le partage public ou à long terme, car elles sont plus standardisées et plus faciles à gérer.

## Prérequis

- Un bucket
- Un utilisateur avec les droits d'accès requis définis sur le bucket

Consultez notre guide [Object Storage - Premiers pas avec Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).

## En pratique

L'Object Storage OVHcloud propose trois méthodes principales pour partager des objets en externe. Choisissez la méthode en fonction de vos besoins : accès temporaire, accès public ou partage contrôlé.

> [!tabs]
> Via des URLs signées
>> Les URLs signées offrent un accès temporaire à un objet privé sans modifier les permissions du bucket.
>>
>> Étapes :
>>
>> - Générez une URL signée via l'API OVHcloud ou un SDK compatible S3.
>> - Définissez une date d'expiration.
>> - Partagez l'URL avec l'utilisateur externe.
>>
>> Exemple (compatible AWS CLI) :
>>
>> ```bash
>> aws s3 presign s3://my-bucket/reports/data.csv --expires-in 3600 \
>>  --endpoint-url https://s3.gra.io.cloud.ovh.net
>> ```
>>
>> Cette commande retourne un lien temporaire valide pendant 1 heure.
>>
>> Après l'expiration, l'accès est automatiquement bloqué et l'objet reste privé.
>>
> Via des objets publics
>> Des objets spécifiques peuvent être rendus publics en appliquant une ACL public-read. Seuls ces objets deviennent publics. le bucket et sa liste restent privés.
>>
>> Étapes :
>>
>> - Sélectionnez l'objet via l'API.
>> - Appliquez l'ACL public-read.
>> - Partagez l'URL de l'objet.
>>
>> Exemple (compatible AWS CLI) :
>>
>> ```bash
>> aws s3api put-object-acl \
>>  --bucket my-bucket \
>>  --key docs/manual.pdf \
>>  --acl public-read \
>>  --endpoint-url https://s3.gra.io.cloud.ovh.net
>> ```
>>
>> L'objet devient accessible à l'adresse : `https://my-bucket.s3.gra.io.cloud.ovh.net/docs/manual.pdf`
>>

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).