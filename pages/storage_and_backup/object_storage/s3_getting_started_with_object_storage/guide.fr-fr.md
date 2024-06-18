---
title: Object Storage - Premiers pas avec Object Storage
excerpt: Ce guide a pour objectif de vous familiariser avec la gestion de vos conteneurs / objets
updated: 2024-06-11
---

## Objectif

Ce guide a pour objectif de vous familiariser avec la gestion de vos conteneurs / objets.

## Prérequis

- Un [projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Avoir créé un [utilisateur S3](/pages/storage_and_backup/object_storage/s3_identity_and_access_management)

## En pratique

### Utilisation de AWS CLI

#### Installation

Entrez la commande suivante :

```bash
user@host:~$ pip3 install awscli
```

> [!primary]
>
> - Installez le package `groff` si vous souhaitez utiliser l'aide en ligne de commande.
>

#### Collecter les informations d'identification

- Vous aurez besoin de l'*Access key* et de la *Secret key* de votre utilisateur. Ces informations sont accessibles depuis l'onglet `Utilisateurs S3` dans votre espace client.
- Vous aurez également besoin de votre *url_endpoint*. Si vous avez déjà créé votre bucket, cette information est accessible depuis l'onglet `Mes conteneurs` puis dans les détails du votre bucket. En cas de besoin, suivez ce [guide](/pages/storage_and_backup/object_storage/s3_location).

#### Configuration

Vous pouvez utiliser la configuration interactive pour générer les fichiers de configuration ou les créer manuellement.

> [!primary]
>
> Pour utiliser la configuration interactive, exécutez la commande suivante :
> `aws configure`
>

Le format du fichier de configuration dans le client aws est le suivant :

```bash
user@host:~$ cat ~/.aws/credentials

[default]
aws_access_key_id = <access_key>
aws_secret_access_key = <secret_key>

user@host:~$ cat ~/.aws/config

[profile default]
region = <region_in_lowercase>
endpoint_url = <url_endpoint>
s3 =
  signature_version = s3v4
```

Voici les valeurs de configuration que vous pouvez définir spécifiquement  :

| Variable  | Type | Valeur | Définition  |
|:--|:--|:--|:--|
| max_concurrent_requests | Integer | **Défaut :** 10 | Le nombre maximum de requêtes simultanées. |
| max_queue_size | Integer | **Défaut :** 1000 | Le nombre maximal de tâches dans la file d'attente des tâches. |
| multipart_threshold | Integer<br>String | **Défaut :** 8MB | Le seuil de taille que l'interface CLI utilise pour les transferts multipart de fichiers individuels. |
| multipart_chunksize | Integer<br>String | **Défaut :** 8MB<br>**Minimum for uploads:** 5MB | Lors de l'utilisation de transferts multipart, il s'agit de la taille de morceau que l'interface CLI utilise pour les transferts multipart de fichiers individuels. |
| max_bandwidth | Integer | **Défaut :** None | La bande passante maximale qui sera consommée pour le chargement et le téléchargement de données vers et depuis vos buckets. |
| verify_ssl | Boolean | **Défaut :** true | Active / Désactive la vérification des certificats SSL |

Pour connaître la liste des endpoints par région et par classe de stockage, vous pouvez vous référer à [cette page](/pages/storage_and_backup/object_storage/s3_location).

#### Utilisation

> [!primary]
>
> Si vous avez défini plusieurs profils, ajoutez `--profile <profile>` à la ligne de commande
>

**Créer un bucket**

```bash
aws s3 mb s3://<bucket_name>
aws --profile default s3 mb s3://<bucket_name>
```

**Lister vos buckets**

```bash
aws s3 ls
```

**Téléverser vos fichiers en tant qu'objets dans votre bucket**

```bash
aws s3 cp /datas/test1 s3://<bucket_name>
```

> [!primary]
>
> La commande `aws s3 cp` utilisera STANDARD comme classe de stockage par défaut pour l'upload d'objets.
> Pour stocker des objets dans le niveau High Performance, utilisez plutôt la commande `aws s3api put-object`, car `aws s3 cp` ne prend pas en charge la classe de stockage EXPRESS_ONEZONE utilisée pour mapper le niveau High Performance.
> Pour en savoir plus sur le mappage des classes de stockage entre les niveaux de stockage OVHcloud et les classes de stockage AWS, vous pouvez consulter notre documentation [ici](/pages/storage_and_backup/object_storage/s3_location).
>

```bash
# upload d'un objet dans le niveau High Performance
aws s3api put-object --bucket <bucket_name> --key <object_name> --body /datas/test1 --storage-class EXPRESS_ONEZONE
```

**Par défaut, les objets prennent le nom des fichiers mais ils peuvent être renommés**

```bash
aws s3 cp /datas/test1 s3://<bucket_name>/other-filename
```

**Télécharger un objet depuis un bucket**

```bash
aws s3 cp s3://<bucket_name>/test1 .
```

**Télécharger un objet d'un bucket vers un autre bucket**

```bash
aws s3 cp s3://<bucket_name>/test1 s3://<bucket_name_2>
```

**Télécharger ou téléverser un bucket entier vers l'hôte/bucket**

```bash
aws s3 cp s3://<bucket_name> . --recursive
aws s3 cp s3://<bucket_name> s3://<bucket_name_2> --recursive
```

**Synchronisation des buckets**

```bash
aws s3 sync . s3://<bucket_name>
aws s3 sync s3://<bucket_name> s3://<bucket_name_2>
```

**Supprimer des objets et des buckets**

> [!primary]
>
> Un bucket ne peut être supprimé que s'il est vide.
>

```bash
# Suppression d'un objet
aws s3 rm s3://<bucket_name>/test1
# Suppression de tous les objets d'un bucket
aws s3 rm s3://<bucket_name> --recursive
# Suppression d'une zone de stockage. Pour supprimer un bucket, il doit être vide.
aws s3 rb s3://<bucket_name>
# Si le bucket n'est pas supprimé, vous pouvez utiliser la même commande avec l'option --force.
# Cette commande supprime tous les objets du bucket, puis supprime le bucket.
aws s3 rb s3://<bucket_name> --force
```

**Suppression d'objets et de buckets avec le versionning activé**

Si le versioning est activé, une simple opération de suppression sur vos objets ne les supprimera pas définitivement.

Pour supprimer définitivement un objet, vous devez spécifier un ID de version :

```bash
aws s3api delete-object --bucket <NAME> --key <KEY> --version-id <VERSION_ID>
```

Pour répertorier tous les objets et tous les ID de version, vous pouvez utiliser la commande suivante :

```bash
aws s3api list-object-versions --bucket <NAME>
```

Avec la commande delete-object précédente, vous devrez parcourir toutes les versions de vos objets. Vous pouvez également utiliser la ligne suivante pour vider votre bucket :

```bash
aws s3api delete-objects --bucket <NAME> --delete "$(aws s3api list-object-versions --bucket <NAME> --query='{Objects: Versions[].{Key:Key,VersionId:VersionId}}')"
```

> [!primary]
>
> Si l'Object Lock est activé pour votre bucket, vous ne pourrez pas supprimer définitivement vos objets. Consultez notre [documentation](/pages/storage_and_backup/object_storage/s3_managing_object_lock) pour en savoir plus sur Object Lock.
> Si vous utilisez Object Lock en mode GOUVERNANCE et que vous avez l'autorisation de contourner le mode GOUVERNANCE, vous devrez ajouter l'option `--bypass-governance-retention` à vos commandes de suppression.
>

**Définir des tags sur un bucket**

```bash
aws s3api put-bucket-tagging --bucket <bucket_name> --tagging 'TagSet=[{Key=myKey,Value=myKeyValue}]'
aws s3api get-bucket-tagging --bucket <bucket_name>
```
```json
{
  "TagSet": [
    {
    "Value": "myKeyValue",
    "Key": "myKey"
    }
  ]
}
```

**Supprimer les tags sur un bucket**

```bash
aws s3api s3api delete-bucket-tagging --bucket <bucket_name>
```

**Définir des tags sur un objet**

```bash
aws s3api put-object-tagging --bucket <bucket_name> --key test1 --tagging 'TagSet=[{Key=myKey,Value=myKeyValue}]'
aws s3api get-bucket-tagging --bucket <bucket_name>
```
```json
{
  "TagSet": [
    {
    "Value": "myKeyValue",
    "Key": "myKey"
    }
  ]
}
```

**Supprimer les tags sur un objet**

```bash
aws s3api s3api delete-object-tagging --bucket <bucket_name> --key test1
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
