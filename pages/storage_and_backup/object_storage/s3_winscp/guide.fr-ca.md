---
title: "Object Storage - Utiliser Object Storage avec WinSCP"
excerpt: Apprenez à configurer WinSCP pour gérer vos buckets et vos objets
updated: 2023-10-16
---

## Objectif

[WinSCP](https://winscp.net/) est un client SFTP, un client FTP, un client WebDAV, un client S3, un client SCP et un gestionnaire de fichiers pour Windows.

**Découvrez comment configurer WinSCP pour gérer vos buckets et vos objets.**

## Prérequis

- Un bucket
- Un utilisateur avec les droits d'accès requis sur le bucket
- Vos identifiants Object Storage (access_key et secret_access_key).

Consultez notre guide [Object Storage - Premiers pas avec Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).

## En pratique

Démarrez WinSCP. La boîte de dialogue de connexion s'affiche. Dans la boîte de dialogue :

1. Assurez-vous que le nœud « Nouveau site » est sélectionné.

![Login dialog](images/login_dialog.png)

2. Sur le nœud Nouveau site, sélectionnez le protocole `Amazon S3`{.action}.

![Amazon S3 file protocol](images/S3_file_protocol.png)

3. Entrez votre Endpoint (sans `https://`) correspondant à votre classe de stockage et définissez le champ `Port number` sur `443`.

> [!primary]
>
> Afin d'identifier votre Endpoint correspondant à votre classe de stockage, veuillez vous référer à ce guide : [Object Storage - Endpoints et géo-disponibilité de l’Object Storage](/pages/storage_and_backup/object_storage/s3_location)
>

![Host name](images/hostname.png)

4. Entrez votre `Clé d'accès`

Afin de respecter les bonnes pratiques, veuillez ne renseigner que le champ `Acces key ID`

![Access key](images/access_key.png)

5. Enregistrez les paramètres de votre site à l'aide du bouton `Save`{.action}.

![Save config](images/save_config.png)

6. Connectez-vous à l'aide du bouton `Login`{.action}.

![Login](images/login.png)

Entrez ensuite votre `clé secrète`

![Clé secrète](images/secret_key.png)

7. Résultat

Une fois connecté, vous verrez une liste de vos buckets Object Storage sous la forme de *dossiers* dans le dossier racine.

> [!warning]
>
> La commande `Create directory` dans le dossier racine crée un nouveau bucket.
>

![Connected](images/connected.png)

## Aller plus loin

Rejoignez notre communauté d’utilisateurs Discord : <https://discord.gg/ovhcloud>

Échangez avec notre [communauté d'utilisateurs](/links/community).
