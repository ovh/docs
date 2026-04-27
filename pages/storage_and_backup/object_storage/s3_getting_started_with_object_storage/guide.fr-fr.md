---
title: Object Storage - Premiers pas
excerpt: Ce guide a pour objectif de vous familiariser avec la gestion de vos buckets/objets.
updated: 2026-04-07
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

Ce guide vous aide à gérer vos buckets et objets.

**Découvrez comment créer et gérer un bucket Object Storage.**

> [!primary]
>
> Si vous utilisez l'ancien système de stockage d'objets Swift :
>
> - pour la classe de stockage **Standard object storage - SWIFT API**, consultez le guide [Standard object storage - SWIFT API](/pages/storage_and_backup/object_storage/pcs_create_container).
> - pour la classe de stockage **Cloud Archive - SWIFT API**, consultez le guide [Cloud Archive - SWIFT API](/pages/storage_and_backup/object_storage/pca_create_container).
>
> Pour les nouveaux projets, nous vous recommandons vivement d'utiliser notre stockage d'objets compatible S3<sup>1</sup>, qui bénéficie de nos dernières innovations et de nos nouvelles fonctionnalités.
>

## Prérequis

- Un [projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud
- Avoir créé un [utilisateur Object Storage](/pages/storage_and_backup/object_storage/s3_identity_and_access_management)

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Pour accéder à vos services :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

## En pratique

> [!primary]
>
> Si vous souhaitez utiliser le provider Terraform OVHcloud, vous pouvez consulter [le guide Terraform pour Object Storage S3](/pages/storage_and_backup/object_storage/s3_terraform).
>

### Préparation

/// details | Pour utiliser l'AWS CLI

Pour installer l'AWS CLI selon votre environnement, consultez [la documentation officielle d'AWS](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions).

**Vérifier l'installation**

```bash
aws --version
```

> [!primary]
>
> Si vous avez besoin de plus d'informations sur l'installation de l'AWS CLI, consultez [la documentation AWS](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).
>

#### Collecter les informations d'identification

- Récupérez l'*Access key* et la *Secret key* de votre utilisateur. Ces informations sont accessibles depuis l'onglet `Utilisateurs Object Storage`{.action} dans votre espace client OVHcloud.
- Récupérez également votre *endpoint_url*. Si vous avez déjà créé votre bucket, retrouvez cette information dans l'onglet `Mes conteneurs`{.action} puis dans les détails de votre bucket. Si nécessaire, consultez le guide [Object Storage - Endpoints et géo-disponibilité de l'Object Storage](/pages/storage_and_backup/object_storage/s3_location).

#### Où trouver l'endpoint d'un bucket ?

Cliquez sur le nom de votre bucket et retrouvez ses détails dans l'onglet `Informations générales`{.action} :

![détails du bucket](images/object_storage_information_panel.png){.thumbnail}

#### Configuration

Utilisez la configuration interactive pour générer les fichiers de configuration, ou créez-les manuellement.

> [!primary]
>
> Pour utiliser la configuration interactive, exécutez la commande suivante :
> 
> `aws configure`
> 
> Ou cette commande :
> 
> `aws configure --profile <profile_name>`

Le format du fichier de configuration dans le client AWS est le suivant :

```bash
cat ~/.aws/credentials
```

```text

[default]
aws_access_key_id = <access_key>
aws_secret_access_key = <secret_key>
```

```bash
cat ~/.aws/config
```

```text

[default]
region = <region_in_lowercase>
endpoint_url = <endpoint_url>
services = ovh-rbx-archive

[profile <profile_name>]
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

Voici les valeurs de configuration que vous pouvez définir :

| Variable  | Type | Valeur | Définition  |
|:--|:--|:--|:--|
| max_concurrent_requests | Integer | **Défaut :** 10 | Le nombre maximum de requêtes simultanées. |
| max_queue_size | Integer | **Défaut :** 1000 | Le nombre maximal de tâches dans la file d'attente des tâches. |
| multipart_threshold | Integer<br>String | **Défaut :** 8MB | Le seuil de taille que l'interface CLI utilise pour les transferts multipart de fichiers individuels. |
| multipart_chunksize | Integer<br>String | **Défaut :** 8MB<br>**Minimum pour les téléversements :** 5MB | Lors de l'utilisation de transferts multipart, il s'agit de la taille en octets que l'interface CLI utilise pour les transferts multipart de fichiers individuels. |
| max_bandwidth | Integer | **Défaut :** None | La bande passante maximale qui sera consommée pour le chargement et le téléchargement de données vers et depuis vos buckets. |
| verify_ssl | Boolean | **Défaut :** true | Active / Désactive la vérification des certificats SSL |

Pour la liste des endpoints par région et par classe de stockage, consultez le guide [Object Storage - Endpoints et géo-disponibilité de l'Object Storage](/pages/storage_and_backup/object_storage/s3_location).

#### Utilisation

> [!primary]
>
> Si vous avez défini plusieurs profils, ajoutez `--profile <profile_name>` à la ligne de commande.
>

///

/// details | Utiliser l'espace client OVHcloud

Pour gérer un bucket Object Storage, rendez-vous dans `Object Storage`{.action} dans le menu de gauche.

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
>> aws s3api list-buckets --query "Buckets[].Name" # Retirez --query pour afficher la sortie complète.
>> ```
>>
>> ///
>>
> Via l'espace client OVHcloud
>> Cliquez sur `Object Storage`{.action} dans la barre de navigation, puis sur l'onglet `Mes conteneurs`{.action}.
>>
> Via la CLI OVHcloud
>> Saisissez la commande suivante :
>>
>> ```shell
>> ovhcloud cloud storage-s3 list
>> ```
>>

#### Créer un bucket

> [!tabs]
> Via AWS CLI
>> /// details | **Avec AWS s3**
>>
>> ```bash
>> aws s3 mb s3://<bucket_name>
>> aws --profile <profile_name> s3 mb s3://<bucket_name>
>> ```
>>
>> ///
>>
>> /// details | **Avec AWS S3api**
>>
>> ```bash
>> aws s3api create-bucket --bucket <bucket_name>
>> aws --profile <profile_name> s3api create-bucket --bucket <bucket_name>
>> ```
>>
>> ///
>>
> Via l'espace client OVHcloud
>> Cliquez sur `Créer un conteneur d'objets`{.action}.
>>
>> ![Créer votre bucket partie 1](images/object-storage-bucket-creation-1.png){.thumbnail}
>>
>> Vous pouvez saisir le nom de votre bucket (optionnel), puis **sélectionner votre offre**.
>>
>> **Sélectionnez un mode de déploiement.**
>>
>> > [!primary]
>> >
>> > OVHcloud propose plusieurs modes de déploiement pour répondre à différents besoins en termes de résilience, de disponibilité et de performance. Chaque mode est optimisé pour des cas d'utilisation spécifiques et offre différents niveaux de redondance et de tolérance aux pannes.
>> >
>>
>> **Sélectionnez une région.**
>>
>> > [!primary]
>> >
>> > Les régions peuvent varier en fonction du mode de déploiement choisi.
>> >
>>
>> Vous pouvez ensuite définir les paramètres de configuration de votre bucket.
>>
>> ![Créer votre bucket partie 2](images/object-storage-bucket-creation-2.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Si vous avez choisi le mode de déploiement 3AZ, une option supplémentaire apparaît pour **configurer la réplication offsite.**
>> >
>>
>> À ce stade, vous pouvez décider d'activer ou non la **gestion des versions**.
>>
>> La gestion des versions vous permet de conserver plusieurs variantes d'un objet dans le même bucket. Cette fonctionnalité permet de **préserver, récupérer et restaurer chaque version de chaque objet stocké dans vos buckets**, ce qui facilite la récupération en cas d'actions involontaires de l'utilisateur ou de défaillances de l'application. Par défaut, la gestion des versions est désactivée sur les buckets ; activez-la explicitement si nécessaire. Pour en savoir plus sur la gestion des versions, consultez le guide [Object Storage - Premiers pas avec la gestion de versions](/pages/storage_and_backup/object_storage/s3_versioning).
>>
>> Vous pouvez également activer l'[Object Lock](/pages/storage_and_backup/object_storage/s3_managing_object_lock) pour stocker vos objets en mode WORM (Write Once, Read Many) et garantir leur immutabilité pendant une période de rétention définie.
>>
>> > [!primary]
>> >
>> > **Remarque :** cette option doit impérativement être activée à la création d'un bucket, elle ne peut pas être activée ultérieurement.
>> >
>>
>> Vous devez associer un utilisateur au bucket.
>>
>> Pour cela, vous pouvez :
>>
>> - Associer un utilisateur Object Storage existant. Pour vérifier ses identifiants, cliquez sur `Voir les credentials`{.action}.
>> - Ou créer un nouvel utilisateur Object Storage.
>>
>> Vous pouvez alors décider si vous souhaitez **chiffrer vos données** en utilisant [SSE-OMK (chiffrement côté serveur avec OVHcloud Managed Keys)](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c).
>>
>> Une fois la configuration de votre bucket terminée, cliquez sur `Créer`{.action}.
>>
> Via la CLI OVHcloud
>> Saisissez la commande suivante en remplaçant `<region>` par le code de votre région (ex. `GRA`, `BHS`) et `<bucket_name>` par le nom souhaité :
>>
>> ```shell
>> ovhcloud cloud storage-s3 create <region> --name <bucket_name>
>> ```
>>
>> Pour créer un bucket avec le versioning et le chiffrement activés :
>>
>> ```shell
>> ovhcloud cloud storage-s3 create <region> --name <bucket_name> --versioning-status enabled --encryption-sse-algorithm AES256
>> ```
>>
>> Pour créer un bucket avec l'Object Lock activé :
>>
>> ```shell
>> ovhcloud cloud storage-s3 create <region> --name <bucket_name> --object-lock-status enabled --object-lock-rule-mode compliance --object-lock-rule-period P30D
>> ```
>>
>> > [!primary]
>> >
>> > L'option `--object-lock-status enabled` doit impérativement être définie à la création du bucket, elle ne peut pas être activée ultérieurement.
>> >
>>

#### Télécharger vos fichiers en tant qu'objets dans votre bucket

Lors du téléversement d'objets, sélectionnez une classe de stockage pour contrôler la disponibilité, la redondance et le coût. Pour vous aider à choisir la classe de stockage la plus adaptée à vos besoins, consultez le guide [Choisir la classe de stockage adaptée à vos besoins](/pages/storage_and_backup/object_storage/s3_choosing_the_right_storage_class_for_your_needs).

> [!tabs]
> Via AWS CLI
>> **Pour télécharger un objet :**
>>
>> /// details | **Avec AWS s3**
>>
>>
>> ```bash
>> aws s3 cp /data/<object_name> s3://<bucket_name>
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
>> Cliquez sur le `nom de votre conteneur`{.action}, puis cliquez sur le bouton `Ajouter des objets`{.action} dans l'onglet **Objets**.
>>
>> Une fenêtre apparaît, vous pouvez ajouter un préfixe au nom de votre objet (le nom de l'objet est le même que le nom du fichier). Sélectionnez le fichier que vous souhaitez téléverser et cliquez sur le bouton `Importer`{.action}.
>>

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
>> aws s3 cp s3://<bucket_name>/<object_name> s3://<bucket_name_2>/<object_name>
>> ```
>>
>> **Télécharger ou téléverser un bucket entier vers l'hôte/bucket :**
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
>> Cliquez sur l'icône de téléchargement (flèche vers le bas dans un socle bleu) sur la ligne de l'objet.
>>

#### Synchronisation des buckets

> [!tabs]
> Via AWS CLI
>>
>> ```bash
>> aws s3 sync . s3://<bucket_name> # Synchronisation du répertoire local avec le bucket S3
>> aws s3 sync s3://<bucket_name> . # Synchronisation du bucket S3 avec le répertoire local
>> aws s3 sync s3://<bucket_name> s3://<bucket_name_2> # Synchroniser un bucket S3 avec un autre
>> ```

#### Suppression d'objets et de buckets

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
>> Si la gestion des versions est activée, une suppression standard de vos objets ne les supprime pas définitivement.
>>
>> Pour supprimer définitivement un objet, vous devez spécifier un identifiant de version :
>>
>> ```bash
>> aws s3api delete-object --bucket <NAME> --key <KEY> --version-id <VERSION_ID>
>> ```
>>
>> Pour lister tous les objets et leurs IDs de versions, utilisez la commande suivante :
>>
>> ```bash
>> aws s3api list-object-versions --bucket <NAME>
>> ```
>>
>> Avec la commande `delete-object` ci-dessus, itérez sur toutes vos versions d'objets. Vous pouvez aussi utiliser la commande suivante pour vider votre bucket :
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
>> Si la gestion des versions est activée, une suppression standard de vos objets ne les supprime pas définitivement.
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
>> Saisissez `TERMINATE` pour confirmer votre choix et cliquez sur `Confirmer`{.action}.
>>
>> **Suppression d'objets**
>>
>> Accédez au bucket et ouvrez l'onglet `Objets`{.action}.
>>
>> Cliquez sur l'icône de suppression (poubelle) sur la ligne de l'objet, saisissez `PERMANENTLY DELETE` pour confirmer la suppression définitive, puis cliquez sur `Supprimer`{.action}.
>>
> Via la CLI OVHcloud
>> **Suppression d'objets**
>>
>> ```shell
>> # Supprimer un objet
>> ovhcloud cloud storage-s3 object delete <bucket_name> <object_name>
>>
>> # Supprimer tous les objets d'un bucket
>> ovhcloud cloud storage-s3 bulk-delete <bucket_name> --all
>>
>> # Supprimer les objets correspondant à un préfixe
>> ovhcloud cloud storage-s3 bulk-delete <bucket_name> --prefix <prefix>
>>
>> # Supprimer des objets spécifiques
>> ovhcloud cloud storage-s3 bulk-delete <bucket_name> --objects "file1.txt,file2.txt"
>> ```
>>
>> **Suppression d'un bucket**
>>
>> Le bucket doit être vide avant d'être supprimé.
>>
>> ```shell
>> ovhcloud cloud storage-s3 delete <bucket_name>
>> ```
>>
>> **Suppression d'objets avec la gestion des versions activée**
>>
>> Si la gestion des versions est activée, spécifiez l'identifiant de version pour supprimer définitivement un objet :
>>
>> ```shell
>> ovhcloud cloud storage-s3 object version delete <bucket_name> <object_name> <version_id>
>> ```
>>
>> Pour supprimer toutes les versions d'un objet, combinez la liste des versions et la suppression :
>>
>> ```shell
>> ovhcloud cloud storage-s3 bulk-delete <bucket_name> --objects "myfile.txt:<version_id_1>,myfile.txt:<version_id_2>"
>> ```
>>

#### Gérer les tags

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
>> aws s3api delete-bucket-tagging --bucket <bucket_name>
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
>> aws s3api delete-object-tagging --bucket <bucket_name> --key <object_name>
>> ```
>
> Via la CLI OVHcloud
>> La CLI OVHcloud permet de définir des tags sur un bucket lors de sa **création** ou de sa **modification** via l'option `--tag key=value` (répétable pour plusieurs tags). La gestion individuelle des tags (lecture, suppression) n'est pas disponible via la CLI.
>>
>> **Définir des tags lors de la création d'un bucket**
>>
>> ```shell
>> ovhcloud cloud storage-s3 create <region> --name <bucket_name> --tag myKey=myKeyValue --tag otherKey=otherValue
>> ```
>>
>> **Modifier les tags d'un bucket existant**
>>
>> ```shell
>> ovhcloud cloud storage-s3 edit <bucket_name> --tag myKey=myKeyValue
>> ```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.