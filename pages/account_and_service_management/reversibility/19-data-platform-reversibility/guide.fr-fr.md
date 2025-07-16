---
title: "Politique de réversibilité du produit Unified Data Platform"
updated: 2025-07-08
---

## Objectif

Ce document est la politique de réversibilité du produit Unified Data Platform couvrant l’offre commerciale d’OVHcloud Data Platform.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
1. Les **implémentation OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
1. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1 - Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Data Catalog | Intégration de plus de 60 connecteurs pour centraliser les sources de données | CSV, JSON, XML, Parquet, Avro, JDBC, Kafka, REST, FTP, etc. | **Entrante** : Configuration de connecteurs standard via interface web.<br> **Sortante** : export des métadonnées et données via API.| [Data Catalog documentation](https://docs.dataplatform.ovh.net/#/en/product/data-catalog/index) |
| Lakehouse Manager | Stockage unifié basé sur Apache, Iceberg et Trino | Parquet, ORC, Avro, Iceberg |  **Entrante** : configuration manuelle via une interface web   <br> **Sortante** : export via Trino, Spark, ou API.  | [Lakehouse Manager documentation](https://docs.dataplatform.ovh.net/#/en/product/lakehouse-manager/index) |
| Data Processing Engine | Orchestration de pipelines ETL/ELT avec Spark et Python. | Python, PySpark | **Entrante** : configuration manuelle via interface web ou connexion de repository git. <br> **Sortante** : export des workflows via Git ou API. | [Data processing engine documentation](https://docs.dataplatform.ovh.net/#/en/product/dpe/index) |
| Analytics Manager | Création de tableaux de bords avec éditeur no-code ou SQL (Trino). | SQL, JSON | **Entrante** : configuration manuelle via l’interface web. <br> **Sortante** : export des requêtes/visualisations via API. | [Analytics Manager documentation](https://docs.dataplatform.ovh.net/#/en/product/am/index) |
| Applications Services | Déploiement d'applications web et APIs (Node.js, Python, Docker). | Node.js, Python, Docker, REST | **Entrante** : configuration manuelle via interface web ou via repository git. <br> **Sortante** : export via Git ou API| [Applications services documentation](https://docs.dataplatform.ovh.net/#/en/product/app-manager/index) |

### 2 - Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Data Processing Engine | Orchestration de pipelines ETL/ELT avec Spark et Python. | Format spécifique à la plateforme OVHcloud, aucun standard déployé | **Entrante** : Données importées depuis data catalog avec configuration manuelle ou automatique des jobs <br> **Sortante** : Pas d’export possible | [Data processing engine documentation](https://docs.dataplatform.ovh.net/#/en/product/dpe/index)  |
| Gestion des identités et des accès | Gestion des comptes et accès utilisateurs sur la plateforme | NA | **Entrante** : configuration via l’interface Web <br> **Sortante** : export des comptes utilisateurs au format CSV | [DATAP IAM documentation](https://docs.dataplatform.ovh.net/#/en/getting-further/project-toolkit?id=user-management) |

### 3 - Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Monitoring intégré | Surveillance et gestion centralisée des performances développés par OVHcloud.| NA | **Entrante** : Interface de suivi intégrée par défaut sur la plateforme <br> **Sortante** : Logs et information de monitoring non exportables | [Control center documentation](https://docs.dataplatform.ovh.net/#/en/product/cc/index) |

## Liste des architectures

Le service OVHcloud Unified Data Platform repose sur des technologies open source comme Trino, Apache Iceberg et Kubernetes. Il est compatible avec les architectures Public Cloud OVHcloud.

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **Data center expansion and Migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

Les fonctionnalités décrites dans les tableaux sont disponibles sans coûts ni frais sauf mentions contraires, et sont librement utilisables par le client.

OVHcloud applique une tarification à l’usage, sans frais de sortie. La facturation est interrompue immédiatement à la suppression des services, permettant un contrôle souple des coûts.

## Conservation des données après résiliation du contrat

Une fois le service résilié, toutes les données du client sont supprimées de manière irréversible. Il incombe au client de réaliser une sauvegarde ou migration complète avant résiliation.

