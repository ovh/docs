---
title: Cold Archive - Premiers pas avec Cold Archive
excerpt: Ce guide vous montre comment gérer vos données avec Cold Archive
updated: 2024-03-04
---

## Objectif

Cold Archive est un service de stockage de données à long terme.
Lorsqu'ils sont archivés, tous les objets d'un bucket sont stockés sur des bandes physiques.
La restauration peut prendre un certain temps car elle doit être lue sur des bandes.

**Ce guide explique comment configurer le stockage sur bandes avec Cold Archive.**

## Prérequis

- [Premiers pas avec Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage#utilisation-de-aws-cli)
- `awscli` version >= 1.16.62

## En pratique

Dans ce guide, les **alias awscli** sont utilisés pour simplifier les commandes.

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
> - `Id` est une chaîne utilisée pour identifier la configuration de l'Intelligent-Tiering S3. Sa valeur est arbitraire et vous pouvez la modifier. Elle sera nécessaire pour les opérations ultérieures PUT, GET et DELETE sur la configuration de l'Intelligent-Tiering.
> 
> - `Status` et `Days` sont obligatoires mais non utilisés.
>

Pour récupérer une configuration de Intelligent-Tiering, utilisez la commande get-bucket-intelligent-tiering-configuration :

```bash
aws s3api get-bucket-intelligent-tiering-configuration --bucket example-bucket --id myid
```

```json
{
    "Id": "myid",
    "Status": "Enabled",
    "Tierings": [
        {"Days": 999, "AccessTier": "OVH_ARCHIVE"}
    ]
}
```

> [!primary]
>
> Si vous avez défini plusieurs profils, ajoutez `--profile <profile>` à la ligne de commande.
>

### Archiver un bucket

Avant d'archiver un bucket, il est nécessaire de s'assurer qu'il n'y a pas de parts de MPU non complétées.
Cela peut se faire avec la commande :

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api list-multipart-uploads --bucket <bucket_name>
```

#### Archiver un bucket

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net put-ovh-archive <bucket_name>
```

Après cette requête, le bucket n'est pas encore archivé.<br>
L'archivage sur les bandes prendra un certain temps.<br>
A partir de cette commande et jusqu'à une restauration, le bucket ne peut accepter aucune requête de lecture ou d'écriture sur les objets (lister les objets est toujours autorisé).

#### Archiver un bucket avec verrouillage de rétention

Par défaut, une archive n'est pas verrouillée, c'est-à-dire que vous pouvez toujours la supprimer après l'avoir écrite sur bandes magnétiques. Pour que votre archivage suive le modèle WORM (Write Once Read Many), vous pouvez définir une période de rétention dans votre configuration du intelligent tiering à l'aide du niveau d'accès `OVH_ARCHIVE_LOCK` et d'un nombre de jours. L'archive sera alors verrouillée jusqu'à la date du jour + le nombre de jours spécifié.

> [!primary]
>
> Avec le niveau d'accès par défaut `OVH_ARCHIVE`, l'attribut `Days` n'a aucun effet.
> Contrairement à la configuration précédente du intelligent tiering, en utilisant le niveau d'accès `OVH_ARCHIVE_LOCK`, l'attribut `Days` sera pris en compte dans le calcul de la durée du verrouillage et doit être un entier positif.
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
> Vous ne pouvez pas avoir plusieurs configurations d'intelligent tiering sur votre archive.
> De même, vous ne pouvez pas avoir plusieurs niveaux d'accès dans votre configuration de intelligent tiering, c'est-à-dire que vous devez utiliser le niveau d'accès `OVH_ARCHIVE` ou le niveau d'accès `OVH_ARCHIVE_LOCK` mais pas les deux.
>

#### Verrouiller un bucket après son archivage

Si vous avez des buckets qui ont été précédemment archivés sans utiliser le niveau d'accès `OVH_ARCHIVE_LOCK`, vous pouvez toujours les verrouiller en réappliquant une configuration du intelligent tiering à votre bucket à l'aide du niveau d'accès `OVH_ARCHIVE_LOCK` et en spécifiant une durée de rétention en jours.

> [!primary]
>
> Pour verrouiller un bucket déjà archivé, il doit avoir le statut « Archived » ou « Restored ».
> Vous devez également utiliser le même « Id » de configuration d'intelligent tiering.
>

De même, si vous souhaitez modifier la période de rétention, réappliquez la configuration du intelligent tiering en utilisant le même « Id ».

> [!primary]
>
> Vous ne pouvez pas réduire une période de rétention préalablement définie, c'est-à-dire que la nouvelle période de rétention (date actuelle + nombre de jours) doit être supérieure à la période de rétention précédente.
> Exemple :
>
> - Le 22/02/2024 vous avez mis en place un verrou de 10 jours, la période de rétention sera jusqu'au 03/03/2024.
> - Le 23/02/2024, vous changez d'avis et décidez de régler la durée du verrouillage sur 5 jours.
> - OVHcloud Cold Archive retournera une erreur car 23/02/2024 + 5 jours < 03/03/2024.
>

### Restauration d'un bucket

Restaurer un bucket:

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net put-ovh-restore <bucket_name>
```

Après cette requête, le bucket n'est pas encore restauré.<br>
La restauration prendra du temps et l'accès aux objets sera en lecture seule (l'écriture est interdite).

### Supression d'un bucket

> [!primary]
>
> Si vous avez verrouillé votre archive, toute tentative de suppression avant la fin de la période de rétention entraînera une erreur 400 Bad Request :
> `An error occurred (BadRequest) when calling the DeleteBucketIntelligentTieringConfiguration operation: Archive deletion is locked until 2124-01-19T15:24:56.000Z`
>

Supprimer la configuration Intelligent-Tiering et les objets d'un bucket:

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net delete-ovh-archive <bucket_name>
```

Après cette requête, les objets du bucket ne sont pas encore supprimés car la suppression est effectuée de manière asynchrone.<br>
L'opération supprimera tout (sur les bandes et tous les objets s'ils sont restaurés) et l'état du bucket sera en état "Deleting".<br>
Une fois la suppression effectuée :

- Le statut du compartiment sera "Flushed".
- Dans cet état, le bucket existe toujours (mais est vide et ne contient aucun objet) et les données ont été supprimées des bandes.
- Le bucket peut être débloqué et vous pouvez retirer votre bucket :

```bash
aws s3 rb s3://<bucket_name>
```

### Statut d'un bucket

Une fois qu'une configuration Intelligent-Tiering a été poussée (via une opération `put-bucket-intelligent-tiering-configuration`) et jusqu'à ce qu'elle soit retirée (via une opération `delete-bucket-intelligent-tiering-configuration`), l'état d'un bucket peut être lu via :

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api get-bucket-tagging --bucket <bucket_name>
```

Si vous avez verrouillé votre archive, vous pouvez vérifier la période de rétention à l'aide de la commande `get-bucket-tagging`.

- Exemple :

```bash
aws --endpoint-url https://s3.rbx-archive.io.cloud.ovh.net s3api get-bucket-tagging --bucket <bucket_name>

{
    "TagSet": [
        {
            "Key": "ovh:intelligent_tiering_status",
            "Value": "Archived"
        },
        {
            "Key": "ovh:intelligent_tiering_archive_lock_until",
            "Value": "2124-01-19T15:24:56.000Z"
        }
    ]
} 
```

#### Liste des statuts d'un bucket

| État de l'archive (= bucket) | Description | Autorisations d'objets |
| --- | --- | --- |
| **`None`** | Aucune configuration Intelligent-Tiering n'a encore été appliquée au bucket. | Tous |
| **`Archiving`** | Archivage en cours sur bandes. | Liste |
| **`Archived`** | Objets archivés sur bandes uniquement. | Liste |
| **`Restoring`** | Restauration en cours à partir des bandes. | Liste |
| **`Restored`** | Objets restaurés et accessibles. | Lecture seule + Liste |
| **`Deleting`** | Suppression des objets des bandes (et des disques si restaurés) en cours. | Liste |
| **`Flushed`** | Le bucket est vide et peut être retiré en toute sécurité. | Liste (bucket vide) |

## Aller plus loin

Découvrez notre chaîne dédiée Discord : <https://discord.gg/ovhcloud>. Posez vos questions, faites vos commentaires et interagissez directement avec l’équipe qui conçoit nos services de stockage et de sauvegarde.

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
