---
title: "Object Storage - Création d'un bucket"
excerpt: "Découvrez comment créer un bucket S3 Object Storage depuis votre espace client OVHcloud"
updated: 2024-10-16
---

## Objectif

**Découvrez comment créer un bucket S3 Object Storage depuis votre espace client OVHcloud.**

> [!primary]
>
> - Si vous êtes intéressé par la classe de stockage **Standard object storage - SWIFT API**, veuillez suivre ce [guide](/pages/storage_and_backup/object_storage/pcs_create_container).
> - Si vous êtes intéressé par la classe de stockage **Cloud Archive - SWIFT API**, veuillez suivre ce [guide](/pages/storage_and_backup/object_storage/pca_create_container).
>

## Prérequis

- Un [projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

### Via l'espace client OVHcloud

Pour créer un bucket Object Storage, vous devez d'abord vous connecter à votre [espace client OVHcloud](/links/manager) et ouvrir votre projet `Public Cloud`{.action}. Cliquez sur `Object Storage`{.action} dans la barre de navigation à gauche puis sur l'onglet `Mes conteneurs`{.action}.

![My containers Dashboard](images/01_object_storage-bucket_listing.png)

Cliquez sur `Créer un conteneur d'objet`{.action} et sélectionnez votre classe de stockage:

![Select your solution](images/object_storage-bucke_creation_step1.png)

Sélectionnez un mode de déploiement :

> [!primary]
>
> OVHcloud propose plusieurs modes de déploiement pour répondre à différents besoins en termes de résilience, de disponibilité et de performance. Chaque mode est optimisé pour des cas d’usage spécifiques et offre différents niveaux de redondance et de tolérance aux pannes.
>

![Sélectionner un mode de déploiement](images/object_storage-bucke_creation_step2.png)

Sélectionnez une région :

> [!primary]
>
> Les régions peuvent varier suivant la classe de stockage sélectionnée.
>

![Select a region](images/object_storage-bucke_creation_step3.png)

Vous devez lier un utilisateur au bucket :

![Link a user](images/object_storage-bucke_creation_step4_1.png)

Pour cela, vous pouvez lier un utilisateur S3 existant :

![Link a user](images/object_storage-bucke_creation_step4_2.png)

Vous pouvez voir les informations d'identification de l'utilisateur, en cliquant sur `View credentials`{.action} :

![view credentials](images/object_storage-bucke_creation_step4_3.png)

Si vous n'en avez pas déjà un, vous pouvez créer un nouvel utilisateur S3 :

![Create S3 user](images/object_storage-bucke_creation_step4_4.png)

À ce stade, vous pouvez décider d'activer ou non le **versioning**.

Le contrôle de version (*versioning*) vous permet de conserver plusieurs variantes d'un objet dans le même compartiment. Cette fonctionnalité aide **à préserver, récupérer et restaurer chaque version de chaque objet stocké dans vos buckets**, facilitant ainsi la récupération en cas d'actions utilisateur non intentionnelles ou de défaillances d'application. Par défaut, le versioning est désactivé sur les buckets et vous devez explicitement l'activer. Retrouvez plus d'informations sur le versioning dans notre [guide dédié](/pages/storage_and_backup/object_storage/s3_versioning).

![Activation du versionning](images/object_storage-bucke_creation_step5.png)

Vous pouvez ensuite décider si vous souhaitez ou non **chiffrer vos données** à l'aide de [SSE-S3 (chiffrement côté serveur avec les clés managées OVHcloud)](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c).

![Encryption](images/object_storage-bucke_creation_step6.png)

Enfin, nommez votre bucket :

![Container name](images/object_storage-bucke_creation_step7.png)

Félicitations, votre bucket est créé :

![Result](images/01_object_storage-bucket_listing.png)

### Où trouver l'URL Endpoint d'un bucket

Cliquez sur le nom de votre bucket pour en afficher les détails et le contenu :

![Bucket details](images/highperf-create-container-20220928091433895.png)

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).