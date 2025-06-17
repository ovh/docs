---
title: "Politique de réversibilité du produit Managed Relational Database"
updated: 2025-06-12
---

## Objectif

Ce document présente la politique de réversibilité de la gamme de produits Managed Document Database couvrant les offres OVHcloud suivantes : Managed MySQL et Managed PostgreSQL.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les caractéristiques de la gamme de produits Managed Document Database sont réparties en trois catégories :

1. **Fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
1. **Implémentations OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
1. **Fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1 - Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Export/Import - PostgreSQL | Utilisez `pg_dump`/`pg_restore` pour un transfert de données natif. | SQL, CSV, BINAIRE | **Entrant** : Restauration via CLI avec ajustement des droits. <br> **Sortant** : Exportation du dump standard. | [PostgreSQL - Tutoriel - Comment migrer de Enterprise Cloud Databases vers Public Cloud Databases (EN)](/pages/public_cloud/public_cloud_databases/postgresql_tuto_03_migrate_ecdb) |
| Export/Import - MySQL | Exportez et importez à l'aide des outils MySQL natifs (`mysqldump`, `mysql`, etc.). | SQL, CSV | **Entrant** : Exportez depuis la source (SQL dump), puis importez dans Managed MySQL via `mysql` ou l'interface utilisateur OVHcloud. <br> **Sortant** : SQL dump via `mysqldump`, puis importez dans l'environnement cible (cloud ou on-premises). | [MySQL - Capacités et limitations (EN)](/pages/public_cloud/public_cloud_databases/mysql_01_capabilities) |
| Accès au service - MySQL | Accès à la base de données via le protocole MySQL standard sur un port dynamique mis à disposition dans le Manager OVHcloud. | N/A | **Entrant** : Connexion à partir d'outils ou d'applications existants. <br> **Sortant** : Connectez-vous à partir de n’importe quel client MySQL standard pour l’extraction ou la migration des données. | [MySQL - Se connecter en ligne de commande (CLI)](/pages/public_cloud/public_cloud_databases/mysql_03_connect_cli) <br> [MySQL - Connectez-vous avec PHP (EN)](/pages/public_cloud/public_cloud_databases/mysql_04_connect_php) <br> [MySQL - Connectez-vous avec Python (EN)](/pages/public_cloud/public_cloud_databases/mysql_05_connect_python) <br> [MySQL - Connectez-vous avec MySQL Workbench (EN)](/pages/public_cloud/public_cloud_databases/mysql_06_connect_workbench) |
| Service Access - PostgreSQL | Accès via le protocole PostgreSQL, compatible avec les clients et outils standards. | N/A | **Entrant** : Connexion directe depuis les outils/applications existants. <br> **Sortant** : Connexion standard pour l'extraction ou la migration. | [PostgreSQL - Se connecter avec CLI (EN)](/pages/public_cloud/public_cloud_databases/postgresql_03_connect_cli) <br> [PostgreSQL - Connectez-vous avec PHP (EN)](/pages/public_cloud/public_cloud_databases/postgresql_04_connect_php) <br> [PostgreSQL - Connectez-vous avec Python (EN)](/pages/public_cloud/public_cloud_databases/postgresql_05_connect_python) <br> [PostgreSQL - Se connecter avec pgAdmin (EN)](/pages/public_cloud/public_cloud_databases/postgresql_06_connect_pgadmin)|
| Sauvegarde manuelle | Possibilité de générer une sauvegarde complète de la base de données à la demande. | SQL, CSV, tar | **Entrant** : Restaurer à partir du vidage SQL existant. <br> **Sortant** : Dump SQL généré depuis l’instance OVHcloud, utilisable sur tout environnement MySQL compatible. | [dump MySQL](https://dev.mysql.com/doc/refman/8.4/fr/mysqldump.html){.external} |

### 2 - Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Sauvegardes automatiques OVHcloud | Sauvegardes gérées par OVHcloud, non directement exportables en dehors de l'écosystème OVH. | Snapshots internes | **Entrant** : Non applicable à l'importation directe. <br> **Sortant** : Nécessite une restauration sur l'instance OVHcloud, puis une exportation manuelle (dump SQL) pour la migration. | [Public Cloud Databases - Sauvegardes automatiques (EN)](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) <br> [Analytics - Sauvegardes automatiques (EN)](/pages/public_cloud/data_analytics/analytics/information_05_automated_backups) |
| Point in Time Recovery (PITR) | Restaurer à un instant précis à l'aide de snapshots internes OVHcloud. | Snapshots internes | **Entrant** : Non applicable à l'importation directe, restauration préalable requise. <br> **Sortant** : Exportez le snapshot restauré en tant que dump SQL, puis importez le manuellement dans l'environnement cible. | [Public Cloud Databases - Sauvegardes automatiques (EN)](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups) <br> [Analytics - Sauvegardes automatiques (EN)](/pages/public_cloud/data_analytics/analytics/information_05_automated_backups) |
| API OVHcloud | Gestion des bases de données via les API REST ou via l'interface graphique OVHcloud. | N/A | **Entrant** : Création et importation automatisées d'instances. <br> **Sortant** : Export de données via les API OVHcloud ou des scripts de dump automatisés. |[Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) |
| Regroupement des connexions OVHcloud | Regroupement automatique des connexions PostgreSQL, non directement portable. | N/A | **Entrant** : Peut nécessiter une adaptation en fonction de la configuration de la source. <br> **Sortant** : Le pooling doit être reconfiguré sur l’infrastructure cible. | [PostgreSQL - Créer et utiliser des pools de connexion (EN)](/pages/public_cloud/public_cloud_databases/postgresql_08_pool) |
| Observabilité | Collecte de métriques via Prometheus intégré à OVHcloud. | Métriques Prometheus | **Entrant** : Adapter les tableaux de bord et métriques à l’environnement OVHcloud. <br> **Sortant** : Exportation possible des métriques, nécessite une adaptation sur une nouvelle plateforme de monitoring. | [MySQL - Capacités et limitations (EN)](/pages/public_cloud/public_cloud_databases/mysql_01_capabilities) <br> [PostgreSQL - Capacités et limitations (EN)](/pages/public_cloud/public_cloud_databases/postgresql_01_capabilities) |
| vRack | La baie virtuelle (vRack) est une technologie de VLAN privé qui relie les services OVHcloud. | N/A | **Entrant** : Les services MySQL et PostgreSQL sont inclus par défaut dans le vRack. <br> **Sortant** : Enregistrez l’architecture réseau et répliquez-la à l’aide de VLAN. | [Création de VLANs](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/creation_vlan) <br> [Public Cloud Databases - Comment configurer votre réseau privé (EN)](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |
| Adaptation des rôles et des autorisations | Aucun superutilisateur (par exemple : `postgres`). Les rôles doivent être adaptés à `avnadmin` ou équivalent. | N/A | **Entrant** : Modifiez le dump pour remplacer les rôles superutilisateur par des rôles compatibles avec OVHcloud. <br> **Sortant** : Adaptation inverse basée sur les privilèges de l’environnement cible. | [PostgreSQL - Tutorial - How to migrate an on-premises database to Public Cloud Databases](/pages/public_cloud/public_cloud_databases/postgresql_tuto_03_migrate_ecdb) |
| Gestion des ACL OVHcloud | Droits d’accès gérés via l’interface OVHcloud. | N/A | **Entrant** : Recréez manuellement des règles dans l'interface OVHcloud. <br> **Sortant** : Convertissez les règles ACL au format du nouveau fournisseur. | [MySQL - Capacités et limitations (EN)](/pages/public_cloud/public_cloud_databases/mysql_01_capabilities) <br> [PostgreSQL - Capacités et limitations (EN)](/pages/public_cloud/public_cloud_databases/postgresql_01_capabilities) |

### 3 - Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** |**Documentation disponible** |
| --- | --- | --- | --- | --- |
| Database Forking OVHcloud | Duplication instantanée d’une base de données via la fonctionnalité native « fork » d’OVHcloud. | Interne OVHcloud | **Entrant** : Fonctionnalité non disponible pour l'importation. <br> **Sortant** : Non portable, nécessite l’exportation manuelle des données pour pouvoir être répliqué ailleurs. | [Public Cloud Databases - How to restore a backup](/pages/public_cloud/public_cloud_databases/databases_06_restore_backup) <br> [Analytics - How to restore a backup](/pages/public_cloud/data_analytics/analytics/analytics_restore_backup) |
| Infrastructure as Code | Déploiement automatisé via les modules Terraform spécifiques à OVHcloud | N/A | **Entrant** : Les scripts doivent être adaptés pour d'autres fournisseurs. <br> **Sortant** : Réécriture de la configuration requise pour Terraform. | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs){.external} |
| Mises à jour gérées par OVHcloud | OVHcloud gère les versions et les mises à jour MySQL ou PostgreSQL. | N/A | **Entrant** : Assurez la compatibilité. <br> **Sortant** : La responsabilité de la migration incombe au client. | [MySQL - Capacités et limitations (EN)](/pages/public_cloud/public_cloud_databases/mysql_01_capabilities) <br> [PostgreSQL - Capacités et limitations (EN)](/pages/public_cloud/public_cloud_databases/postgresql_01_capabilities) |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Entrant** : Le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise. <br> **Sortant** : Commander et configurer un service anti-DDoS chez le nouveau fournisseur. | [Protection anti-DDoS](/links/security/antiddos) |

## Liste des architectures

**Managed MySQL et Managed PostgreSQL** prennent en charge différentes architectures en fonction du niveau de service sélectionné.

Les offres **Business** et **Enterprise** garantissent une **haute disponibilité** grâce à plusieurs nœuds et à une **réplication asynchrone automatique**.

## Services Partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés **« migration vers le cloud »**.

OVHcloud propose également un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

- **Pas de frais de résiliation** : Il n'y a pas de frais supplémentaires liés à la migration des données par défaut.
- La facturation s'arrête dès la résiliation du service.

## Conservation des données après résiliation du contrat

> [!warning]
>
> OVHcloud ne garantit pas l’utilisation et la disponibilité des sauvegardes pour restaurer les données du client après la résiliation du service.

OVHcloud **ne conserve aucune donnée** après la suppression d'un cluster Managed Data Visualization.

**Les snapshots automatiques et manuels sont supprimés définitivement**.

Une **exportation manuelle** doit être effectuée à l'avance si des données doivent être préservées.

Les instances primaires sont **supprimées immédiatement** et les **sauvegardes sont conservées pendant une période allant de 2 jours à 1 mois** selon les options spécifiées dans le contrat.