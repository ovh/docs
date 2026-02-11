---
title: Cold Archive - Premiers pas avec Cold Archive
excerpt: Ce guide vous montre comment gérer vos données avec Cold Archive
updated: 2026-01-19
---

> [!warning]
>
> **Cette page est uniquement destinée aux clients existants du service Cold Archive standalone (granularité au niveau du bucket), introduit en 2023.**
>
> **Vous recherchez des solutions d'archivage compatibles S3<sup>1</sup> ?**
>
> OVHcloud Object Storage propose désormais d'archiver individuellement les objets plutôt que d'archiver l'ensemble du conteneur, grâce à l'ajout de la classe **Cold Archive** dans le cycle de vie Object Storage. En effet, la fonctionnalité est maintenant directement disponible dans votre dashboard Object Storage, depuis vos conteneurs Object Storage existants pour les régions éligibles :
>
> - Téléversez vos objets en choisissant la classe Cold Archive,
> - ou utilisez les transitions de cycle de vie pour déplacer les données vers la classe Cold Archive.
>
> Pour en savoir plus sur cette classe de stockage, consultez notre guide « [Choisir la bonne classe de stockage pour vos besoins](/pages/storage_and_backup/object_storage/s3_choosing_the_right_storage_class_for_your_needs) ».
>
> De plus, le service Cold Archive standalone (granularité au niveau du bucket) ne sera plus disponible à partir de l'espace client pour les nouveaux utilisateurs, sans impact pour les clients existants. Les API continueront à fonctionner et les données resteront bien sûr sécurisées et disponibles à tout moment. Nous modifions uniquement la manière dont les utilisateurs accéderont aux objets et les géreront.

## Objectif

Cold Archive fournit un stockage de données à long terme en archivant des objets de type « bucket » sur des bandes physiques.
La restauration peut prendre un certain temps car les données sont lues à partir des bandes.

Comme expliqué en détail dans la [FAQ Cold Archive](/pages/storage_and_backup/object_storage/cold_archive_faq), il existe deux manières de consommer Cold Archive :

- **Cold Archive v1, une solution standalone (granularité au niveau du bucket)**.
- **Cold Archive v2, une classe Object Storage permettant d'archiver des objets individuellement au sein d'un bucket**.

Bien qu'il existe deux manières différentes de consommer Cold Archive, nous continuons à faire référence à la solution sous le nom de 'Cold Archive' dans tous les documents destinés aux utilisateurs, y compris la page produit et dans l'espace client, sans mentionner explicitement 'v1' ou 'v2'.

**Ce guide explique comment configurer et gérer le stockage sur bandes avec Cold Archive v1 (offre legacy), en coexistence avec votre Object Storage.**

## Prérequis

- [Premiers pas avec Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage#utilisation-de-aws-cli)
- `awscli` version >= 1.16.62

## En pratique

> [!primary]
>
> Vous pouvez retrouver la présentation de Cold Archive v1 ainsi que son workflow [ici](/pages/storage_and_backup/object_storage/cold_archive_overview).
>

Cette section explique la procédure étape par étape pour configurer, archiver, restaurer et supprimer des buckets avec Cold Archive v1, en coexistence avec votre stockage d'objets.

Dans ce guide, les **alias awscli** sont utilisés pour simplifier les commandes.

### Configuration initiale : créer des alias AWS CLI

Pour simplifier les commandes, créez ou éditez le fichier`~/.aws/cli/alias` :

```bash
mkdir -p ~/.aws/cli
touch ~/.aws/cli/alias
```

Ajoutez ce contenu au fichier :

```bash
[toplevel]

put-ovh-archive = s3api put-bucket-intelligent-tiering-configuration --id myid --intelligent-tiering-configuration '{"Id": "myid", "Status": "Enabled", "Tierings": [{"Days": 999,"AccessTier": "OVH_ARCHIVE"}]}' --bucket

put-ovh-restore = s3api put-bucket-intelligent-tiering-configuration --id myid --intelligent-tiering-configuration '{"Id": "myid", "Status": "Enabled", "Tierings": [{"Days": 999,"AccessTier": "OVH_RESTORE"}]}' --bucket

get-ovh-bucket-status = s3api get-bucket-intelligent-tiering-configuration --id myid --bucket

delete-ovh-archive = s3api delete-bucket-intelligent-tiering-configuration --id myid --bucket
```

> [!primary]
>
> - `Id` est une chaîne utilisée pour identifier la configuration de l'Intelligent-Tiering S3<sup>1</sup>. Sa valeur est arbitraire et vous pouvez la modifier. Elle sera nécessaire pour les opérations ultérieures PUT, GET et DELETE sur la configuration de l'Intelligent-Tiering.
> 
> - `Status` et `Days` sont obligatoires mais non utilisés. Les jours ne sont significatifs que pour certains niveaux d'accès.
>

### Vérifier les uploads multiparts incomplets avant l'archivage

Exécutez cette commande pour vous assurer qu'il n'y a pas d'uploads multiparts incomplets sur votre bucket :

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api list-multipart-uploads --bucket <nom_du_bucket>
```

### Téléverser vos objets

Pour ajouter des objets dans le bucket que vous souhaitez archiver, utilisez la commande suivante :

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api put-object --bucket <bucket-name> --key <object-name> --body <object-name>
```

> [!primary]
>
> Cette opération n’est actuellement pas disponible via l’espace client OVHcloud. Elle doit être effectuée en ligne de commande via l’API S3.
>

### **Archiver un bucket**

> [!primary]
>
> Avant d'archiver un bucket, assurez-vous qu'il n'y a pas d'uploads multiparts incomplets.
>

> [!tabs]
> Via l'API S3 AWS
>> ```bash
>> aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net put-ovh-archive <bucket_name>
>> ```
>>
> Via l'espace client OVHcloud
>> Cliquez sur le bouton `⋮`{.action} puis sur `Archiver`{.action}.
>>
>> ![Archive a cold archive bucket](images/cold_archive_01.png){.thumbnail}
>>

- Le statut du bucket passe à "Archivage".
- Il n'est pas possible de lire ou d'écrire des objets au cours de ce processus ; seule l'énumération est autorisée.
- L'archivage sur bandes prend un certain temps.

### Archivage d'un bucket avec verrouillage de la rétention (conformité WORM)

Par défaut, une archive n'est pas verrouillée, c'est-à-dire que vous pouvez toujours supprimer une archive après qu'elle ait été écrite sur des bandes. Pour vous assurer que votre archive suit le modèle WORM (Write Once Read Many), vous pouvez définir une période de rétention dans votre configuration de Intelligent-Tiering en utilisant le niveau d'accès `OVH_ARCHIVE_LOCK` et un nombre de jours. L'archive sera alors verrouillée jusqu'à la date actuelle + le nombre de jours spécifié.

> [!primary]
>
> Avec le niveau d'accès par défaut `OVH_ARCHIVE`, l'attribut `Days` n'a aucun effet.
> Contrairement à la configuration précédente, en utilisant le niveau d'accès `OVH_ARCHIVE_LOCK`, l'attribut `Days` sera pris en compte dans le calcul de la durée du verrou et doit être un nombre entier positif.
>

```json
{
    "Id": "myid",
    "Status": "Enabled",
    "Tierings": [
        {"Days": <retention_in_days>, "AccessTier": "OVH_ARCHIVE_LOCK"}
    ]
}
```

> [!primary]
>
> Vous ne pouvez pas avoir plusieurs configurations d'Intelligent-Tiering sur votre archive.
> De même, vous ne pouvez pas avoir plusieurs niveaux d'accès dans votre configuration d'Intelligent-Tiering, c'est-à-dire que vous utilisez soit le niveau d'accès `OVH_ARCHIVE`, soit le niveau d'accès `OVH_ARCHIVE_LOCK`, mais pas les deux.
>

### Verrouiller un bucket déjà archivé

Si vous avez des buckets qui ont été précédemment archivés sans utiliser le niveau d'accès `OVH_ARCHIVE_LOCK`, vous pouvez toujours les verrouiller en réappliquant une configuration d'Intelligent-Tiering à votre bucket en utilisant le niveau d'accès `OVH_ARCHIVE_LOCK` et en spécifiant une durée de rétention en jours.

> [!primary]
>
> Pour verrouiller un bucket déjà archivé, il doit être dans l'état "Archivé" ou "Restauré".
> Vous devez également utiliser le même "Id" de configuration d'Intelligent-Tiering.
>

Si vous souhaitez modifier le délai de conservation, appliquez à nouveau la configuration d'Intelligent-Tiering en utilisant le même "Id".

> [!primary]
>
> Vous ne pouvez pas réduire un délai de conservation précédemment défini, c'est-à-dire que le nouveau délai de conservation (date actuelle + nombre de jours) doit être supérieur au délai de conservation précédent.
> Exemple :
>
> - Le 2024-02-22, vous avez mis en place un verrou de 10 jours, la période de rétention sera jusqu'au 2024-03-03.
> - Le 2024-02-23, vous changez d'avis et décidez de fixer la durée du verrouillage à 5 jours.
>
> OVHcloud Cold Archive retournera une erreur car 2024-02-23 + 5 jours < 2024-03-03.
>

### Restaurer un Bucket

> [!tabs]
> Via l'API S3 AWS
>> Restauration d'un bucket :
>>
>> ```bash
>> aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net put-ovh-restore <nom_du_bucket>
>> ```
>>
> Via l'espace client OVHcloud
>> Cliquez sur le bouton `⋮`{.action} puis sur `Restaurer`{.action}.
>>
>> ![Restore a cold archive bucket](images/cold_archive_02.png){.thumbnail}
>>

- Le statut du bucket passe à "Restauration".
- Une fois la restauration terminée, les objets deviennent accessibles en mode lecture seule pendant 30 jours. Passé ce délai, une nouvelle opération de restauration doit être lancée pour accéder aux objets archivés.
- Les objets du bucket archivé peuvent toujours être listés à tout moment.

### Supprimer une archive

> [!primary]
>
> Si le bucket est verrouillé, la suppression avant l'expiration de la période de rétention échouera.
> `Une erreur s'est produite (BadRequest) lors de l'appel de l'opération DeleteBucketIntelligentTieringConfiguration : La suppression de l'archive est bloquée jusqu'au 2124-01-19T15:24:56.000Z`
>

> [!tabs]
> Via l'API S3 AWS
>> Supprime une configuration d'Intelligent-Tiering et les objets d'un bucket :
>>
>> ```bash
>> aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net delete-ovh-archive <bucket_name>
>> ```
>>
> Via l'espace client OVHcloud
>> Cliquez sur le bouton `⋮`{.action} puis sur `Supprimer`{.action}.
>>
>> ![Delete a cold archive bucket](images/cold_archive_03.png){.thumbnail}
>>

Après cette requête, les objets du bucket ne sont pas encore supprimés car la suppression est effectuée de manière asynchrone.<br>
L'opération supprimera tout (sur les bandes et tous les objets s'ils sont restaurés) et le statut du bucket sera dans un statut "Deleting".<br>

> [!primary]
>
> Bien que la suppression des données soit effectuée de manière asynchrone, la facturation est arrêtée dès que vous soumettez la demande !<br>
> La suppression est effectuée sur la base du meilleur effort et il n'y a pas de durée engagée.<br>
> Dans l'état "Deleting", le bucket est verrouillé et n'est pas accessible.<br>
>

Une fois la suppression terminée :

- L'état du bucket sera "Flushed".
- Dans cet état, le bucket existe toujours (mais il est vide et ne contient aucun objet) et les données ont été retirées des bandes.
- Le bucket peut être libéré et vous pouvez supprimer votre bucket :

```bash
aws s3 rb s3://<nom_du_bucket>
```

### Vérifier l'état des buckets et les durées de rétention

> [!tabs]
> Via l'API S3 AWS
>> Une fois qu'une configuration d'Intelligent-Tiering a été poussée (via l'opération `put-bucket-intelligent-tiering-configuration`) et jusqu'à ce qu'elle soit supprimée (via l'opération `delete-bucket-intelligent-tiering-configuration`), le statut d'un bucket est lisible à travers :
>>
>> ```bash
>> aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api get-bucket-tagging --bucket <bucket_name>
>> ```
>>
>> Si vous avez verrouillé votre archive, vous pouvez vérifier la période de rétention en utilisant la commande `get-bucket-tagging`.
>>
>> - Exemple:
>>
>> ```bash
>> aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api get-bucket-tagging --bucket <bucket_name>
>>
>> {
>>     "TagSet": [
>>         {
>>             "Key": "ovh:intelligent_tiering_status",
>>             "Value": "Archived"
>>         },
>>         {
>>             "Key": "ovh:intelligent_tiering_archive_lock_until",
>>             "Value": "2124-01-19T15:24:56.000Z"
>>         }
>>     ]
>> } <>
>> ```
>> 
> Via l'espace client OVHcloud
>> Vous pouvez consulter le statut de votre bucket en regardant la valeur dans la colonne `Statut` ainsi que sa durée de rétention dans la colonne `Vérouillé jusqu'au` :
>>
>> ![Cold archive bucket information](images/cold_archive_04.png){.thumbnail}
>>

#### Liste des statuts des buckets

| Statut | Description | Permissions sur les objets |
|-------------|----------------------------------------------------------------------------------|------------------------|
| `None` | Aucune configuration Intelligent-Tiering n'a encore été poussée sur le bucket.                   | Tous |
| `Archiving` | Archivage en cours sur les bandes.                                                  | Listing |
| `Archived` | Objets archivés sur bandes uniquement.                                                  | Listing |
| `Restoring` | Restauration en cours à partir des bandes.                                              | Listing |
| `Restored` | Objets restaurés et accessibles.                                                 | Lecture seule + Listing |
| `Deleting` | Suppression d'objets des bandes (et des disques si restaurés) en cours.                 |
| `Flushed` | Le bac est vide et peut être supprimé en toute sécurité.                                       | Listing (bucket vide) |

### Vérification avancée : Inspecter la configuration d'Intelligent Tiering

Pour récupérer la configuration complète de l’Intelligent-Tiering appliquée à votre bucket :

```bash
aws s3api get-bucket-intelligent-tiering-configuration --bucket <bucket_name> --id myid
```

Cette commande renvoie les détails complets de la configuration, utiles pour la vérification ou le débogage.

## Aller plus loin

Découvrez notre chaîne dédiée Discord : <https://discord.gg/ovhcloud>. Posez vos questions, faites vos commentaires et interagissez directement avec l’équipe qui conçoit nos services de stockage et de sauvegarde.

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
