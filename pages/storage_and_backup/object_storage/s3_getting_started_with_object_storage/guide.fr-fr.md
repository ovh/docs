---
title: Object Storage - Premiers pas avec Object Storage
excerpt: Ce guide a pour objectif de vous familiariser avec la gestion de vos conteneurs / objets
updated: 2025-06-04
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Ce guide a pour objectif de vous familiariser avec la gestion de vos conteneurs/objets.

**Découvrez comment créer et gérer un bucket Object Storage.**

> [!primary]
>
> Si vous utilisez l'ancien système de stockage d'objets SWIFT :
>
> - pour la classe de stockage **Standard object storage - SWIFT API**, suivez [ce guide](/pages/storage_and_backup/object_storage/pcs_create_container).
> - pour la classe de stockage **Cloud Archive - SWIFT API**, suivez [ce guide](/pages/storage_and_backup/object_storage/pca_create_container).
>
> Pour les nouveaux projets, nous vous recommandons vivement d'utiliser notre stockage d'objets compatible S3<sup>1</sup>, qui bénéficie de nos dernières innovations et de nos nouvelles fonctionnalités.
>

## Prérequis

- Un [projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](/links/manager)
- Avoir créé un [utilisateur Object Storage](/pages/storage_and_backup/object_storage/s3_identity_and_access_management)

## En pratique

> [!primary]
>
> Si vous souhaitez utiliser le provider Terraform OVHcloud, vous pouvez suivre [ce guide](/pages/storage_and_backup/object_storage/s3_terraform).
>

### Préparation

/// details | Pour utiliser l'AWS CLI

Pour connaître la procédure d’installation de l’AWS CLI adaptée à votre environnement, nous vous recommandons de consulter [la documentation officielle d’AWS](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions).

**Vérifier l'installation**

```bash
user@host:~$ aws --version
```

> [!primary]
>
> Si vous avez besoin de plus d'informations sur l'installation de l'AWS CLI, consultez [la documentation AWS](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
>

#### Collecter les informations d'identification

- Vous aurez besoin de l'*Access key* et de la *Secret key* de votre utilisateur. Ces informations sont accessibles depuis l'onglet `Utilisateurs Object Storage`{.action} dans votre espace client OVHcloud.
- Vous aurez également besoin de votre *url_endpoint*. Si vous avez déjà créé votre bucket, cette information est accessible depuis l'onglet `Mes conteneurs`{.action} puis dans les détails du votre bucket. En cas de besoin, suivez ce [guide](/pages/storage_and_backup/object_storage/s3_location).

#### Où trouver l'endpoint d'un bucket ?

Cliquez sur le nom de votre bucket pour en afficher les détails et le contenu :

![détails du bucket](images/highperf-create-container-20220928091433895.png){.thumbnail}

#### Configuration

Vous pouvez utiliser la configuration interactive pour générer les fichiers de configuration ou les créer manuellement.

> [!primary]
>
> Pour utiliser la configuration interactive, exécutez la commande suivante :
> 
> `aws configure`
> 
> Ou cette commande :
> 
> `aws configure --profile PROFILE_NAME`

Le format du fichier de configuration dans le client AWS est le suivant :

```bash
user@host:~$ cat ~/.aws/credentials

[default]
aws_access_key_id = <access_key>
aws_secret_access_key = <secret_key>

user@host:~$ cat ~/.aws/config

[default]
region = <region_in_lowercase>
endpoint_url = <url_endpoint>
services = ovh-rbx-archive

[profile PROFILE_NAME]
region = rbx
output = json
services = ovh-rbx

[services ovh-rbx-archive]
s3 =
  endpoint_url = https://s3.rbx-archive.io.cloud.ovh.net/
  signature_version = s3v4

s3api =
endpoint_url = https://s3.rbx-archive.io.cloud.ovh.net/

[services ovh-rbx]
s3 =
  endpoint_url = https://s3.rbx.io.cloud.ovh.net/
  signature_version = s3v4

s3api =
endpoint_url = https://s3.rbx.io.cloud.ovh.net/
```

Voici les valeurs de configuration que vous pouvez définir spécifiquement :

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
> Si vous avez défini plusieurs profils, ajoutez `--profile <profile>` à la ligne de commande.
>

///

/// details | Utiliser l'espace client OVHcloud

Pour gérer un bucket Object Storage, connectez-vous d'abord à votre [espace client OVHcloud](/links/manager) et ouvrez votre projet `Public Cloud`{.action}.

///

#### Lister vos buckets

> [!tabs]
> Via AWS CLI
>> /// details | **Avec AWS s3**
>>
>> ```bash
>> aws s3 ls
>> ```
>>
>> ///
>>
>> /// details | **Avec AWS S3api**
>>
>> ```bash
>> aws s3api list-buckets --query "Buckets[].Name" // retirez --query pour avoir plus d'info que le name.
>> ```
>>
>> ///
>>
> Via l'espace client OVHcloud
>> Cliquez sur `Object Storage`{.action} dans la barre de navigation, puis sur l'onglet `Mes conteneurs`{.action}.
>>
>> ![My Dashboard containers](images/01-object-storage-bucket-listing.png){.thumbnail}

#### Créer un bucket

> [!tabs]
> Via AWS CLI
>> /// details | **Avec AWS s3**
>>
>> ```bash
>> aws s3 mb s3://<bucket_name>
>> aws --profile default s3 mb s3://<bucket_name>
>> ```
>>
>> ///
>>
>> /// details | **Avec AWS S3api**
>>
>> ```bash
>> aws s3api create-bucket --bucket <bucket_name>
>> aws s3api create-bucket --bucket <bucket_name> --profile default
>> ```
>>
>> ///
>>
> Via l'espace client OVHcloud
>> Cliquez sur `Créer un conteneur d'objets`{.action} et sélectionnez votre offre :
>>
>> ![Sélectionner votre offre](images/object-storage-bucket-creation-step1.png){.thumbnail}
>>
>> Sélectionnez un mode de déploiement :
>>
>> > [!primary]
>> >
>> > OVHcloud propose plusieurs modes de déploiement pour répondre à différents besoins en termes de résilience, de disponibilité et de performance. Chaque mode est optimisé pour des cas d'utilisation spécifiques et offre différents niveaux de redondance et de tolérance aux pannes.
>> >
>>
>> ![Sélectionner un mode de déploiement](images/object-storage-bucket-creation-step2.png){.thumbnail}
>>
>> Sélectionnez une région :
>>
>> > [!primary]
>> >
>> > Les régions peuvent varier en fonction du mode de déploiement choisi.
>> >
>>
>> ![Sélectionner une région](images/object-storage-bucket-creation-step3.png){.thumbnail}
>>
>> Vous devez associer un utilisateur au bucket :
>>
>> ![Associer un utilisateur](images/object-storage-bucket-creation-step4_1.png){.thumbnail}
>>
>> Pour ce faire, vous pouvez lier un utilisateur Object Storage existant :
>>
>> ![Associer un utilisateur existant](images/object-storage-bucket-creation-step4_2.png){.thumbnail}
>>
>> Vous pouvez afficher les informations d'identification de l'utilisateur en cliquant sur `Voir les informations d'identification`{.action} :
>>
>> ![Informations d'identification](images/object-storage-bucket-creation-step4_3.png){.thumbnail}
>>
>> Vous pouvez également créer un nouvel utilisateur Object Storage :
>>
>> ![Créer un utilisateur Object Storage](images/object-storage-bucket-creation-step4_4.png){.thumbnail}
>>
>> À ce stade, vous pouvez décider d'activer ou non la **gestion des versions**.
>>
>> La gestion des versions vous permet de conserver plusieurs variantes d'un objet dans le même bucket. Cette fonctionnalité permet de **préserver, récupérer et restaurer chaque version de chaque objet stocké dans vos buckets**, ce qui facilite la récupération en cas d'actions involontaires de l'utilisateur ou de défaillances de l'application. Par défaut, la gestion des versions est désactivée sur les buckets, et vous devez l'activer explicitement. Vous trouverez plus d'informations sur la gestion des versions dans notre [guide dédié](/pages/storage_and_backup/object_storage/s3_versioning).
>>
>> ![Activation de la gestion des versions](images/object-storage-bucket-creation-step5.png){.thumbnail}
>>
>> Vous pouvez alors décider si vous souhaitez **chiffrer vos données** en utilisant [SSE-OMK (chiffrement côté serveur avec OVHcloud Managed Keys)](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c).
>>
>> ![chiffrer les données](images/object-storage-bucket-creation-step6.png){.thumbnail}
>>
>> Enfin, donnez un nom à votre bucket :
>>
>> > [!primary]
>> >
>> > Les noms des buckets sont globaux. Il n'est pas possible de donner le même nom à deux buckets différents dans toutes les régions d'OVHcloud.
>> >
>>
>> ![Nom du container](images/object-storage-bucket-creation-step7.png){.thumbnail}
>>
>> Félicitations, votre bucket est créé :
>>
>> ![Result](images/01-object-storage-bucket-listing.png)
>>

#### Télécharger vos fichiers en tant qu'objets dans votre bucket

Lors du téléchargement des objets dans un bucket Object Storage, les utilisateurs peuvent choisir la classe de stockage, ce qui leur permet de contrôler la disponibilité, la redondance et le coût associés. Pour vous aider à choisir la classe de stockage la plus adaptée à vos besoins, consultez la documentation [ici](/pages/storage_and_backup/object_storage/s3_choosing_the_right_storage_class_for_your_needs).

> [!tabs]
> Via AWS CLI
>> **Pour télécharger un objet :**
>>
>> /// details | **Avec AWS s3**
>>
>>
>> ```bash
>> aws s3 cp /datas/<object_name> s3://<bucket_name>
>> ```
>>
>> **Par défaut, les objets sont nommés d'après des fichiers, mais ils peuvent être renommés.**
>>
>> ```bash
>> aws s3 cp /data/<object_name> s3://<bucket_name>/other-filename
>> ```
>>
>> ///
>>
>> > [!primary]
>> >
>> > La commande `aws s3 cp` utilisera STANDARD comme classe de stockage par défaut pour télécharger des objets.
>> > Pour stocker des objets dans le niveau de stockage High Performance, utilisez plutôt la commande `aws s3api put-object`, car `aws s3 cp` ne supporte pas la classe de stockage EXPRESS_ONEZONE qui est utilisée pour mapper le niveau de stockage High Performance.
>> > Pour en savoir plus sur le mappage des classes de stockage entre les niveaux de stockage OVHcloud et les classes de stockage AWS, vous pouvez consulter [notre documentation](/pages/storage_and_backup/object_storage/s3_location).
>> >
>>
>> /// details | **Avec AWS s3api**
>>
>> ```bash
>> # télécharger un objet vers le niveau de stockage High Performance
>> aws s3api put-object --bucket <bucket_name> --key <object_name> --body /data/<object_name> --storage-class EXPRESS_ONEZONE
>>
>> # télécharger explicitement un objet vers le niveau de stockage Standard
>> aws s3api put-object --bucket <bucket_name> --key <object_name> --body /data/<object_name> --storage-class STANDARD
>> ```
>>
>> ///
>>
> Via l'espace client OVHcloud
>> Cliquez sur le `nom de votre conteneur`{.action} :
>>
>> ![Conteneur](images/go-in-bucket.png){.thumbnail}
>>
>> Cliquez sur `Ajouter des objets`{.action} :
>>
>> ![Ajout de fichiers](images/upload-file.png){.thumbnail}
>>
>> Vous pouvez ajouter un préfixe au nom de votre objet (le nom de l'objet est le même que le nom du fichier). Sélectionnez la classe de stockage. Enfin, sélectionnez le fichier que vous êtes sur le point de télécharger et cliquez sur le bouton `Importer`{.action}.
>>
>> ![upload file window](images/upload-files-window.png)

#### Téléchargement d'un objet à partir d'un bucket

> [!tabs]
> Via AWS CLI
>> /// details | **Avec AWS s3**
>>
>> **Téléchargement d'un objet à partir d'un bucket :**
>>
>> ```bash
>> aws s3 cp s3://<bucket_name>/<object_name> .
>> ```
>>
>> **Téléchargement d'un objet d'un bucket vers un autre bucket :**
>>
>> ```bash
>> aws s3 cp s3://<bucket_name>/<object_name> s3://<bucket_name_2
>> ```
>>
>> **Télécharger ou uploader un bucket entier sur l'hôte/bucket :**
>>
>> ```bash
>> aws s3 cp s3://<bucket_name> . --recursive
>> aws s3 cp s3://<bucket_name> s3://<bucket_name_2> --recursive
>> ```
>>
>> ///
>>
>> /// details | **Avec AWS s3api**
>>
>> **Téléchargement d'un objet à partir d'un bucket :**
>>
>> ```bash
>> aws s3api get-object --bucket <bucket_name> --key <object_name> <object_name>
>> ```
>>
>> **Téléchargement d'un objet d'un bucket vers un autre bucket :**
>>
>> ```bash
>> aws s3api copy-object --bucket <bucket_name_2> --copy-source <bucket_name>/<object_name> --key <object_name>
>> ```
>>
>> ///
>>
> Via l'espace client OVHcloud
>> Cliquez sur le bouton `...`{.action} sur la ligne d'objet, puis sur `Télécharger`{.action}.
>>
>> ![Télécharger un fichier depuis un bucket](images/download-file-from-bucket.png){.thumbnail}

#### Synchronisation des buckets

> [!tabs]
> Via AWS CLI
>>
>> ```bash
>> aws s3 sync . s3://<bucket_name> # Synchronisation du répertoire local avec le bucket S3
>> aws s3 sync s3://<bucket_name> . # Synchronisation du bucket S3 avec le répertoire local
>> aws s3 sync s3://<bucket_name> s3://<bucket_name_2> # Synchroniser un bucket S3 avec un autre
>> ```

**Suppression d'objets et de buckets**

> [!primary]
>
> Un bucket ne peut être supprimé que s'il est vide.
>

> [!tabs]
> Via AWS CLI
>>
>> /// details | **Avec AWS s3**
>>
>> **Suppression d'objets et de buckets**
>>
>> ```bash
>> # Supprimer un objet
>> aws s3 rm s3://<bucket_name>/<object_name>
>> # Supprimer tous les objets dans un bucket
>> aws s3 rm s3://<bucket_name> --recursive
>> # Supprimer un bucket. Pour supprimer un bucket, celui-ci doit être vide.
>> aws s3 rb s3://<bucket_name>
>> # Si le bucket n'est pas supprimé, vous pouvez utiliser la même commande avec l'option --force.
>> # Cette commande supprime tous les objets du bucket, puis supprime le bucket.
>> aws s3 rb s3://<bucket_name> --force
>> ```
>>
>> **Suppression d'objets et de buckets avec la gestion des versions activée**
>>
>> Si la gestion des versions est activée, une simple opération de suppression sur vos objets ne les supprimera pas définitivement.
>>
>> Pour supprimer définitivement un objet, vous devez spécifier un identifiant de version :
>>
>> ```bash
>> aws s3api delete-object --bucket <NAME> --key <KEY> --version-id <VERSION_ID>
>> ```
>>
>> Pour répertorier tous les objets et tous les IDs de versions, vous pouvez utiliser la commande suivante :
>>
>> ```bash
>> aws s3api list-object-versions --bucket <NAME>
>> ```
>>
>> Avec la commande `delete-object` précédente, vous devrez itérer sur toutes vos versions d'objets. Alternativement, vous pouvez utiliser la commande suivante pour vider votre bucket :
>>
>> ```bash
>> aws s3api delete-objects --bucket <NAME> --delete "$(aws s3api list-object-versions --bucket <NAME> --query='{Objects: Versions[].{Key:Key,VersionId:VersionId}}')"
>> ```
>>
>> ///
>>
>> /// details | **Avec AWS s3api**
>>
>> **Suppression d'objets et de buckets**
>>
>> ```bash
>> # Supprimer un objet
>> aws s3api delete-object --bucket <bucket_name> --key <object_name>
>> # Supprimer tous les objets dans un bucket
>> aws s3api delete-objects --bucket <bucket_name> --delete "$(aws s3api list-objects-v2 --bucket <bucket_name> --query='{Objects: Contents[].{Key:Key}}')"
>> # Supprimer un bucket. Pour supprimer un bucket, celui-ci doit être vide.
>> aws s3api delete-bucket --bucket <bucket_name>
>> ```
>>
>> **Suppression d'objets et de buckets avec la gestion des versions activée**
>>
>> Si la gestion des versions est activée, une simple opération de suppression sur vos objets ne les supprimera pas définitivement.
>>
>> Pour supprimer définitivement un objet, vous devez spécifier un identifiant de version :
>>
>> ```bash
>> aws s3api delete-objects --bucket <bucket_name> --delete "$(aws s3api list-object-versions --bucket <bucket_name> --query='{Objects: Versions[].{Key:Key,VersionId:VersionId}}')"
>> ```
>>
>> ///
>>
>> > [!primary]
>> >
>> > Si le verrouillage d'objet est activé dans votre bucket, vous ne pourrez pas supprimer définitivement vos objets. Consultez notre [documentation](/pages/storage_and_backup/object_storage/s3_managing_object_lock) pour en savoir plus sur le verrouillage d'objet.
>> > Si vous utilisez le verrouillage d'objet en mode GOUVERNANCE et que vous avez la permission de contourner le mode GOUVERNANCE, vous devrez ajouter l'option `--bypass-governance-retention` à vos commandes de suppression.
>> >
>>
> Via l'espace client OVHcloud
>> **Suppression d'un bucket**
>>
>> Dans la liste des conteneurs Object Storage, cliquez sur le bouton `...`{.action} sur la ligne des conteneurs, puis sur `Supprimer`{.action}.
>>
>> ![Delete bucket](images/delete-bucket.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action}.
>>
>> **Suppression d'objets**
>>
>> Allez dans le bucket concerné et cliquez sur le bouton `...`{.action} sur la ligne de l'objet, puis sur `Supprimer`{.action}.
>>
>> ![Delete file](images/delete-file.png){.thumbnail}
>>
>> Cliquez sur `Confirmer`{.action}.
>>

**Gérer les tags**

> [!tabs]
> Via AWS CLI
>> **Définir des tags sur un bucket**
>>
>> ```bash
>> aws s3api put-bucket-tagging --bucket <bucket_name> --tagging 'TagSet=[{Key=myKey,Value=myKeyValue}]'
>> aws s3api get-bucket-tagging --bucket <bucket_name>
>> ```
>>
>> ```json
>> {
>>   "TagSet": [
>>     {
>>     "Value": "myKeyValue",
>>     "Key": "myKey"
>>     }
>>   ]
>> }
>> ```
>>
>> **Suppression de tags sur un bucket**
>>
>> ```bash
>> aws s3api s3api delete-bucket-tagging --bucket <bucket_name>
>> ```
>>
>> **Définir des tags sur un objet**
>>
>> ```bash
>> aws s3api put-object-tagging --bucket <bucket_name> --key <object_name> --tagging 'TagSet=[{Key=myKey,Value=myKeyValue}]'
>> aws s3api get-bucket-tagging --bucket <bucket_name>
>> ```
>>
>> ```json
>> {
>>   "TagSet": [
>>     {
>>     "Value": "myKeyValue",
>>     "Key": "myKey"
>>     }
>>   ]
>> }
>> ```
>>
>> **Suppression de tags sur un objet**
>>
>> ```bash
>> aws s3api s3api delete-object-tagging --bucket <bucket_name> --key <object_name>
>> ```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
