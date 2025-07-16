---
title: Politique de réversibilité du produit Object Storage
updated: 2025-06-27
---

## Objectif

Ce document décrit la politique de réversibilité du produit Object Storage.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le code de conduite SWIPO IaaS pour les fournisseurs de Cloud.

## Liste des fonctionnalités

Les fonctionnalités du produit Object Storage sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
1. Les **implémentations OVHcloud** dont la migration nécessitera des adaptations à un nouvel environnement.
1. Les **fonctionnalités spécifiques** dont la migration en tant que telle est impossible à garantir car elles sont liées à l'environnement OVHcloud ou à des développements spécifiques.

### 1 - Fonctionnalités principales

| **Fonctionnalité** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Compatibilité API S3<sup>1</sup> | Interface compatible S3 (API RESTful standard, outils AWS CLI, SDK, etc.). | S3 (REST, JSON, multipart upload) | **Entrant** : Upload direct via API S3 compatible, outils CLI, SDK ou migration depuis tout autre stockage compatible S3. <br><br> **Sortant** : Téléchargement/export direct via API S3, CLI ou SDK vers tout autre fournisseur compatible S3. | [S3 API](/pages/storage_and_backup/object_storage/pcs_object_storage_standard_s3_and_swift_rest_api_compatibility) |
| Import/export massif d'objets | Import/export de données par lots via les outils S3 (sync, cp, etc.). | S3 (objets, dossiers) | **Entrant** : Utilisation des outils de type rclone ou équivalent pour migrer des données depuis une autre solution. <br><br> **Sortant** : Export massif via les mêmes outils vers une autre plateforme S3 ou compatible. | [Premiers pas avec Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) |
| Versionning d'objet | Gestion native des versions d’objets (stockage de chaque version lors de la modification/suppression). | S3 (versioning) | **Entrant** : Import d'objets versionnés depuis un autre S3. <br><br> **Sortant** : Export des versions via API/CLI, compatible avec d’autres S3. | [Premiers pas avec la gestion de versions](/pages/storage_and_backup/object_storage/s3_versioning) |
| Chiffrement côté serveur (SSE-S3/SSE-C) | Chiffrement natif des objets au repos, compatible avec standards S3. | S3 (SSE-S3, SSE-C) | **Entrant** : Upload de données chiffrées ou non, gestion transparente.<br><br> **Sortant** : Export sans adaptation, chiffrement maintenu ou retraité par la cible.| [Object Storage Encryption](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c) |
| Interopérabilité avec des solutions tierces | Support natif de Veeam, HYCU, Nextcloud, Kubernetes, etc. | S3 (API, JSON, objets) | **Entrant** : Intégration directe via des plugins ou des connecteurs.<br><br> **Sortant** : Export des données via outils natifs ou API S3 vers la cible. | [Utiliser Object Storage avec Veeam](/pages/storage_and_backup/object_storage/s3_veeam) |

### 2 - Implémentation OVHcloud

| **Fonctionnalité** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Réplication asynchrone OVHcloud | Réplication automatique des données vers une région OVHcloud distincte configurée par le client. | S3 (objets répliqués) | **Entrant** : Non applicable à l'importation directe, nécessite une configuration OVHcloud. <br><br> **Sortant** : Restauration manuelle depuis la région répliquée, puis export vers la cible externe (nécessite une adaptation si la cible n’a pas de mécanisme équivalent). | [Cross-region replication](/pages/storage_and_backup/object_storage/s3_asynchronous_replication) |
| Object Lock (verrouillage d’objet) | Immuabilité des objets (WORM), empêche suppression/modification pendant une période définie. | S3 (object lock) | **Entrant** : Nécessite que la source supporte l’Object Lock S3. <br><br> **Sortant** : Export possible, mais la cible doit supporter le verrouillage S3 ou l'adaptation manuelle des politiques d’immuabilité. | [Object storage Object Lock](/pages/storage_and_backup/object_storage/s3_managing_object_lock) |
| ACL et gestion avancée des accès | Gestion des droits d'accès via ACL S3, ou politiques spécifiques. | S3 (ACL, politiques) | **Entrant** : Adaptation des droits en fonction de la structure cible. <br><br> **Sortant** : Export des objets, mais la reconfiguration des ACL/politiques est nécessaire sur la plateforme de destination. | [Gestion des accès](/pages/storage_and_backup/object_storage/s3_bucket_acl) |

### 3 - Fonctionnalités spécifiques

| **Fonctionnalité** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Gestion via l'[espace client OVHcloud](/links/manager) / [API OVHcloud](/links/api) | Interface graphique et API propriétaires OVHcloud pour la gestion du stockage. | N/A | **Entrant** : Non applicable. <br><br> **Sortant** : Scripts / API à réécrire pour l'environnement cible. | [Premiers pas avec Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) |

## Liste des architectures

L'Object Storage d’OVHcloud utilise l'erasure coding pour assurer la résilience et la tolérance à la perte d'un rack, garantissant ainsi une haute disponibilité et une continuité de service même en cas de panne majeure.

La réplication asynchrone (Asynchronous Replication) inter-région est disponible en option, permettant la sauvegarde automatique des données vers une autre région OVHcloud.

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous le filtre « **Data center expansion and migration** ».

OVHcloud propose également un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coût et frais

**Aucun frais de résiliation** : Pas de surfacturation, le service est stoppé immédiatement après suppression du service.

## Conservation des données après résiliation du contrat

Les données (Objets et Buckets) peuvent être supprimées par une action du client (CLI) ou via un décommissionnement du service en supprimant le projet Public Cloud relatif au produit. Ceci déclenche une libération automatique des ressources. Aucune restauration de données ne sera possible après ces actions.

Une exportation manuelle préalable est obligatoire pour préserver les données.

Un point d’attention doit être néanmoins porté à la fonctionnalité Object Lock. Retrouvez plus d’informations sur notre guide : « [Object Storage - Gestion de l'immuabilité des objets avec Object Lock (WORM)](/pages/storage_and_backup/object_storage/s3_managing_object_lock) ».

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
