---
title: "Object Storage - Comment migrer un Object Storage Swift OVHcloud vers un Object Storage OVHcloud compatible S3"
excerpt: "Découvrez comment migrer un Object Storage Swift OVHcloud vers un Object Storage OVHcloud compatible S3 en utilisant Rclone"
updated: 2025-10-16
---

## Objectif

OVHcloud propose deux types d'Object Storage : l'un basé sur OpenStack Swift et l'autre basé sur les API natives S3<sup>1</sup>.

Si vous souhaitez en savoir plus sur les offres et classes d'Object Storage disponibles, référez-vous à notre guide « [Object Storage - Choisir une classe de stockage adaptée à vos besoins](/pages/storage_and_backup/object_storage/s3_choosing_the_right_storage_class_for_your_needs) ».

Ce guide fournit des étapes détaillées pour vous aider à migrer un Object Storage Swift OVHcloud vers un Object Storage OVHcloud compatible S3 en utilisant l'outil [Rclone](https://rclone.org/), un outil en ligne de commande permettant de gérer des ressources de stockage cloud.

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du logiciel si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance.
>

## Prérequis

- Posséder un **compte OVHcloud** avec un accès aux conteneurs Object Storage Swift et aux buckets compatibles S3.
- Disposer d'un **conteneur source Object Storage Swift OVHcloud** dans votre Object Storage actuel avec :
    - Le nom de votre bucket.
    - Votre nom d'utilisateur et mot de passe associés.
    - L'ID de la région associée.
- Disposer **bucket de destination Object Storage OVHcloud compatible S3** avec :
    - Le nom de votre bucket.
    - Vos clés d'accès et clés secrètes associées.
    - L'ID de la région associée.
- Détenir une **machine virtuelle OVHcloud** avec Rclone installé, servant de station de gestion dans notre scénario. Pour obtenir les meilleurs résultats, dans votre budget, nous vous recommandons au moins les spécifications suivantes :
    - b3-16 : 4 v-cores et 16 Go de RAM.
    - c3-16 : 8 v-cores et 16 Go de RAM.

## En pratique

### 1 - Installation de Rclone

Si vous ne l'avez pas déjà fait, installez **Rclone** en suivant les instructions de [sa documentation](https://rclone.org/install/), en fonction de la configuration de votre système d'exploitation.

### 2 - Configuration de Rclone

Après avoir installé **Rclone** sur votre machine virtuelle, configurez sa connexion au conteneur source et aux buckets de destination. Pour ce faire, vous pouvez soit suivre la configuration pas à pas de Rclone, soit créer et modifier vous-même le fichier de configuration.

#### 2.1 - Utilisation de la commande Rclone config

```bash
$ rclone config
```

Cette commande ouvrira le menu de configuration et vous guidera pas à pas dans la configuration. Ensuite :

- Pour votre conteneur source : nous vous recommandons d'utiliser votre utilisateur OpenStack et le fichier de configuration Rclone associé depuis [l'espace client OVHcloud](/links/manager). Suivez les étapes de [ce guide](/pages/storage_and_backup/object_storage/pcs_sync_rclone_object_storage) pour accéder au fichier de configuration associé à votre utilisateur OpenStack.
- Pour votre bucket de destination : la configuration officielle du fournisseur OVHcloud est disponible [ici](https://rclone.org/s3/#ovhcloud) et vous guidera pas à pas.

#### 2.2 - Utilisation du fichier de configuration Rclone

Comme indiqué, vous pouvez également créer et modifier vous-même le fichier de configuration avec la commande suivante :

```bash
$ rclone config file
```

Si le fichier de configuration n'existe pas, vous serez invité à ajouter la configuration suivante en utilisant votre éditeur préféré. Par exemple, sous Linux, vous pouvez utiliser `nano` :

```bash
$ nano /home/<votre utilisateur Linux>/.config/rclone/rclone.conf
```
Dans les deux cas, vos blocs de configuration doivent ressembler à :

```bash
[ovhcloud-swift]
type = swift
env_auth = false
auth_version = 3
auth = https://auth.cloud.ovh.net/v3
endpoint_type = public
tenant_domain = default
tenant = <numéro de tenant (locataire)>
domain = default
user = <votre utilisateur>
key = <votre clé>
region = <région>

[ovhcloud-s3]
type = s3
provider = OVHcloud
env_auth = false
access_key_id = OVH-ACCESS-KEY
secret_access_key = OVH-SECRET-KEY
endpoint = s3.<région>.io.cloud.ovh.net
region = <région>
```

> [!primary]
>
> Pour obtenir la liste des endpoints des régions OVHcloud, consultez notre guide « [Object Storage - Endpoints et géo-disponibilité de l’Object Storage](/pages/storage_and_backup/object_storage/s3_location) ».
>

Vous pouvez ensuite tester vos deux connexions en utilisant la commande `rclone config` comme suit :

```bash
$ rclone config
```

### 3 - Exécution de Rclone

En fonction de votre stratégie, vous pouvez utiliser deux commandes différentes pour lancer la migration.

Vous pouvez utilisez la commande `rclone sync` pour migrer un ou tous les buckets. Comme indiqué dans la documentation, la commande `rclone sync` rendra la source et la destination identiques. Soyez donc prudent lors de son utilisation.

Vous pouvez également utiliser la commande `rclone copy` qui copiera les fichiers de votre source vers votre destination.

Dans les deux cas, n'oubliez pas de remplacer `source-container-name` et `destination-bucket-name` par le nom de votre conteneur source Swift OVHcloud et le nom de votre bucket de destination OVHcloud compatible S3, respectivement :

```bash
$ rclone sync ovhcloud-swift:source-container-name/ ovhcloud-s3:destination-bucket-name/ --progress
```

ou :

```bash
$ rclone copy ovhcloud-swift:source-container-name/ ovhcloud-s3:destination-bucket-name/ --progress
```

`--progress` affiche l'avancement pendant le transfert.

### Statut de la migration

Nous vous recommandons de comparer les buckets source et destination après la migration. Vos buckets source et destination OVHcloud peuvent être comparés en ligne de commande ou directement depuis [l'espace client OVHcloud](/links/manager)

Vous pouvez vérifier la taille des deux buckets et le nombre d'objets en utilisant cette commande :

```bash
rclone size <nom de votre fournisseur source>:source-bucket-name/
rclone size ovhcloud:ovh-bucket-name/
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.