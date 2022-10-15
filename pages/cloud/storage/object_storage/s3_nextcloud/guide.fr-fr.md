---
title: Object Storage - Utiliser S3 Object Storage avec Nextcloud
slug: s3/nextcloud
excerpt: Découvrez comment configurer le stockage dans Nextcloud pour utiliser un bucket S3 Object Storage
section: Configurer Object Storage avec vos solutions
order: 120
---

**Dernière mise à jour le 03/01/2022**

## Objectif

Nextcloud est une suite de logiciels client-serveur pour créer et utiliser des services d'hébergement de fichiers.

**Ce guide explique comment configurer le stockage dans Nextcloud pour utiliser un bucket S3 Object Storage.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du logiciel si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Avoir créé un bucket
- Avoir créé un utilisateur et avoir défini les droits d'accès requis sur le bucket
- Connaître vos informations d'identification S3 (access_key et secret_access_key)

Consultez notre guide « [Débuter avec S3 Object Storage](https://docs.ovh.com/fr/storage/s3/debuter-avec-s3/) » pour plus de détails.

## En pratique

### Configuration depuis l'interface graphique

#### Activation de l'application *External storage support*

Cliquez sur votre profil en haut à droite puis sur `Apps`{.action}.

![Main menu](images/HighPerf-nextcloud-20211206101650679.png){.thumbnail}

Sélectionnez le menu `Disabled Apps`{.action} dans le menu de gauche.

Repérez l'application **External storage support** et cliquez sur `Enable`{.action}.

![Disabled Apps](images/HighPerf-nextcloud-20211206101817393.png){.thumbnail}

#### Configuration

Cliquez sur votre avatar en haut à droite puis sur `Settings`{.action}.

![Main menu](images/HighPerf-nextcloud-20211206101913852.png){.thumbnail}

1. Sélectionnez le menu `External storage`{.action}
2. Créez un stockage de type *Amazon S3*
3. Nommez votre dossier de destination
4. Indiquez le nom de votre bucket
5. Définissez l'hôte comme tel : `s3.<region_in_lowercase>.perf.cloud.ovh.net`
6. Définissez le port : 443
7. Indiquez la région
8. Activez SSL
9. Renseignez votre clé d'accès
10. Renseignez votre clé secrète
11. `Validez`{.action}

![External Storage Amazon S3 completed](images/HighPerf-nextcloud-20211206102607233.png){.thumbnail}

Ouvrez l'application `Files`{.action}, sélectionnez le menu `External storage`{.action} puis votre `bucket`{.action}.

![Files External Storage](images/HighPerf-nextcloud-20211206102749423.png){.thumbnail}

Voici le résultat que vous devez obtenir :

![Files External Storage Bucket](images/HighPerf-nextcloud-20211206102844377.png){.thumbnail}

### Configuration depuis le CLI

Tout d'abord, l'application **External storage support** doit être activée :

```bash
$ php occ app:enable files_external
files_external enabled
```

Vérifiez que S3 est supporté sur votre installation :

```bash
$ php occ files_external:backends storage amazons3
  - name: Amazon S3
  - identifier: amazons3
  - configuration:
    - bucket: text
    - hostname: text
    - port: text
    - region: text
    - use_ssl: boolean
    - use_path_style: boolean
    - legacy_auth: boolean
  - storage_class: \OCA\Files_External\Lib\Storage\AmazonS3
  - supported_authentication_backends:
    - amazons3::accesskey
  - authentication_configuration:
    - amazons3::accesskey:
      - key: text
      - secret: password
```

Montez votre bucket S3 sur Nextcloud comme point de montage **OVH_hp-bucket** :

```bash
$ php occ files_external:create -c bucket=hp-bucket \
                                -c hostname=s3.<region_in_lowercase>.perf.cloud.ovh.net \
                                -c region=<region_in_lowercase> \
                                -c use_ssl=true \
                                -c use_path_style=false \
                                -c legacy_auth: false \
                                -c key=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \
                                -c secret=yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy \
                                OVH_hp-bucket amazons3 amazons3::accesskey
Storage created with id 4
```

Validez vos paramètres :

```bash
$ php occ files_external:verify 4
  - status: ok
  - code: 0
  - message
```

Vérifiez et mettez à jour les paramètres si nécessaire :

```bash
$ php occ files_external:list
  +----------+----------------+-----------+---------------------+-----------------+---------+------------------+-------------------+
  | Mount ID | Mount Point    | Storage   | Authentication Type | Configuration   | Options | Applicable Users | Applicable Groups |
  +----------+----------------+-----------+---------------------+-----------------+---------+------------------+-------------------+
  | 4        | /OVH_hp-bucket | Amazon S3 | Access key          | bucket: "nex.." |         | All              |                   |
  +----------+--------------+-----------+---------------------+-----------------+---------+------------------+-------------------+

```

Lancez l'indexation du nouveau stockage :

```bash
$ php occ files:scan -vvv --path /admin/files/OVH_hp-bucket
Starting scan for user 1 out of 1 (admin)
     Folder /admin/files/OVH_hp-bucket/
     Folder /admin/files/OVH_hp-bucket/home
     ...
+---------+-------+--------------+
| Folders | Files | Elapsed time |
+---------+-------+--------------+
| 3       | 13    | 00:00:04     |
+---------+-------+--------------+
```

### Définir votre bucket comme stockage principal

Editez votre fichier `config/config.php` et ajoutez :

```php
'objectstore' => array(
        'class' => 'OC\\Files\\ObjectStore\\S3',
        'arguments' => array(
                'bucket' => 'hp-bucket',
                'autocreate' => true,
                'key'    => 'xxxxxxxxxxxxxxxxxxxx',
                'secret' => 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
                'hostname' => 's3.<region_in_lowercase>.perf.cloud.ovh.net',
                'port' => 443,
                'use_ssl' => true,
                'region' => '<region_in_lowercase>',
                'use_path_style' => false
        ),
),
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
