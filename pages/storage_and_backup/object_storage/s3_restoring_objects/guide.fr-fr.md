---
title: Object Storage - Restaurer un objet archivé depuis la classe Cold Archive
excerpt: Restaurer des objets depuis la classe Cold Archive
updated: 2025-11-19
---

## Objectif

Découvrez comment restaurer un objet à partir du niveau Cold Archive dans un Object Storage OVHcloud compatible S3<sup>1</sup>.

## Prérequis

- Être connecté à votre [espace client OVHcloud](/links/manager)
- Avoir un [projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud
- Avoir un [utilisateur Object Storage](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) déjà créé

## Contexte et considérations

La classe de stockage **Cold Archive** est une classe de stockage d'archives. Existant également en tant que [produit dédié chez OVHcloud](/pages/storage_and_backup/object_storage/cold_archive_getting_started) (granularité au niveau du bucket), Cold Archive est désormais disponible en tant que classe Object Storage pour un bucket dit « general-purpose ».

Les objets dans une classe de stockage Cold Archive **doivent être restaurés** avant d'être disponibles pour une lecture. De plus, la classe de stockage Cold Archive a une durée de stockage minimale et des frais supplémentaires à prendre en compte :

- La durée de stockage minimale pour Cold Archive est de 180 jours. Si un objet est supprimé pendant cette période, des frais supplémentaires seront appliqués (prorata du coût de stockage de l'objet pour les 180 jours complets).
- Lorsqu'une demande de restauration est effectuée, les utilisateurs sont invités à définir une période de temps (en jours) pendant laquelle les objets demandés sont disponibles en lecture et au téléchargement. Les frais sont facturés à l'avance au tarif de la classe Standard.
- Une fois qu'une demande de restauration est effectuée, il n'est pas possible d'ajouter une autre demande de restauration avec une période de temps plus courte. La première demande ne peut pas être préemptée.
- Si vous utilisez [l'upload multipart (MPU)](/pages/storage_and_backup/object_storage/s3_performance_optimization), vous devez savoir que les parties en cours sont facturées au tarif de la classe Standard jusqu'à ce que vous complétiez le téléchargement.

Le processus de restauration peut prendre jusqu'à 48 heures selon la taille des objets. L'action de téléchargement est alors disponible lorsque le processus de restauration est terminé.

Vous pouvez restaurer un objet dans la classe de stockage Cold Archive en utilisant l' [espace client OVHcloud](/links/manager), les API OVHcloud ou en utilisant l'API REST Amazon S3 ou la CLI.

## Restaurer un objet archivé

> [!tabs]
> Via l'espace client OVHcloud
>> Cliquez sur `Object Storage`{.action} dans la barre de navigation de gauche, puis sur l'onglet `Mes conteneurs`{.action}.
>>
>> Dans la liste des objets, cliquez sur le bouton d'action de restauration associé à l'objet que vous souhaitez restaurer.
>>
>> Vous pouvez également surveiller l'état de votre restauration dans la liste des objets, via un statut dédié.
>>
> Via les API OVHcloud
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/storage/{name}/object/{key}/restore
>> 
> Via AWS CLI
>>
>> ```bash
>> aws s3api restore-object --bucket <bucket-name> --key <object-name> --restore-request '{"Days":10}'
>> ```
>>
>> > [!primary]
>> >
>> > Cold Archive ne prend pas en charge les paramètres `GlacierJobParameters` de l'API S3. Lorsqu'ils sont restaurés, les objets restent dans la classe Cold Archive d'un point de vue de la classe Object Storage, mais sont disponibles en lecture et au téléchargement.
>> >
>> > La classe Cold Archive est mappée avec le tier AWS S3 équivalent `DEEP_ARCHIVE`. Pour en savoir plus sur le mappage entre les niveaux OVHcloud Object Storage et les niveaux AWS S3, veuillez consulter le guide « [Object Storage - Endpoints et géo-disponibilité](/pages/storage_and_backup/object_storage/s3_location) ».
>> > 
>>
>> Vous pouvez également surveiller l'état de la restauration via :
>>
>> ```bash
>> aws s3api head-object --bucket <bucket-name> --key <object-name>
>> ```
>>

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services. 
 
Rejoignez notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
