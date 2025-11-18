---
title: "Politique de réversibilité du produit Managed Database System for Web Hosting"
updated: 2025-08-25
---

## Objectif

Ce document est la politique de réversibilité du produit Managed Database System for Web Hosting couvrant l’offre commerciale d’OVHcloud Web Cloud Databases.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
2. Les **implémentations OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
3. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1. Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Package de bases de données pour un hébergement web standard| Utilisation de composants open source standards | SQL, NoSQL | **Entrante** : copie des fichiers applicatifs, import des bases de données via dump SQL, configuration standard <br>**Sortante** : export des fichiers/dumps, réutilisables sur tout environnement compatible. | [Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database) |
| Export et import de base de données | Sauvegarde et restauration des bases via API ou espace client OVHcloud | SQL, CSV | **Entrante** : import d’un dump SQL existant <br>**Sortante** : Export d’un dump SQL, importable sur tout serveur MySQL/MariaDB/PostgreSQL  | [Importer une sauvegarde dans la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_importing_mysql_database) |
| Utilisateurs et permissions | Système d’utilisateur et de gestion des droits stockés dans la base de données | NA | **Entrante** : import des utilisateurs et des permissions via le dump de la base de données <br>**Sortante** : export des utilisateurs et des permissions via le dump de la base de données | [Modifier le mot de passe de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_change_password) |

### 2. Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Configuration personnalisée | Modifications de certains paramètres via l’interface utilisateur | NA | **Entrante** : réadaptation et ajustement nécessaires, import manuel de certains paramètres de configuration via API ou l’espace client <br>**Sortante** : réadaptation des paramètres dans l’environnement cible  | [Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database) |
| Sauvegardes managées par OVHcloud | OVHcloud dispose d’une politique de sauvegarde avec un historique de 30 sauvegardes. Possibilité de restaurer l’une des 30 sauvegardes à tout moment| NA | **Entrante** : automatisation de la sauvegarde possible via CRON et l’API OVHcloud <br>**Sortante** : réadaptation de la politique de sauvegarde dans l’environnement cible si possible | [Récupérer la sauvegarde de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_database_export)<br><br>[Créer des tâches automatisées (CRON) sur votre hébergement web](/pages/web_cloud/web_hosting/cron_tasks) |
| Modules PostgreSQL standards | Modules ou extensions non présents par défaut sur la cible | Modules, extensions | **Entrante** : Modules natifs Postgre installés et activés sur demande du client. Seul Postgis ne provient pas de l’éditeur et est installé et activable <br>**Sortante** : vérification de la disponibilité des modules sur la cible, adaptation possible | [PostgreSQL - Available extensions](/pages/public_cloud/public_cloud_databases/postgresql_02_extensions) |

### 3. Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Entrant** : le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise. <br> **Sortant** : commande et configuration d'un anti-DDoS chez le nouveau fournisseur. | [OVHcloud DDoS Protection](/links/security/antiddos) |

## Liste des architectures

Le produit repose sur des VPS avec OS Linux, des moteurs SGBD et modules PostgreSQL utilisant la technologie Docker. L’architecture permet une personnalisation partielle : ajout de modules, configuration de serveur PostgreSQL partielle, tâches planifiées, sauvegardes automatisées via API et une intégration réseau. Les ressources (CPU, RAM, stockage SSD NVMe) sont évolutives selon l’offre Web Cloud Databases choisie.

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **Data center expansion and Migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

La facturation est selon l’offre choisie avec une durée d’engagement variable. Aucun frais de résiliation spécifique n’est appliqué : la suppression du service arrête la facturation immédiatement. Les crédits OVHcloud éventuellement associés ne sont pas transférables. Il incombe au client d’exporter ses fichiers, bases et configurations avant suppression, car leur effacement est irréversible.

## Conservation des données après résiliation du contrat

Après suppression du service ou résiliation du contrat, OVHcloud supprime définitivement toutes les données stockées sur le VPS ou le serveur (fichiers, bases, snapshots). Dans le cas de l’utilisation du produit Managed Web Hosting avec ce produit, une période de rétention de 45 jours suivant la date d’échéance du service s’applique.

