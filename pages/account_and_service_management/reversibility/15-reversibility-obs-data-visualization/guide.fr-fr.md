---
title: "Politique de réversibilité du produit Managed Data Visualization"
updated: 2025-06-19
---

## Objectif

Ce document décrit la politique de réversibilité du produit Managed Data Visualization couvrant l'offre OVHcloud Managed Grafana.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités de la gamme de produits Managed Document Database sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
1. Les **implémentations OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
1. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1 - Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Platform As A Service | Plateforme permettant de mettre en place des tableaux de bord (*dashboards*) et graphiques dynamiques. | JSON, YAML | **Entrant** : connexion directe via API pour importer dashboards/configurations. <br> **Sortant** : export des ressources via API REST vers tout environnement Grafana compatible. | [Présentation de l'offre](/links/public-cloud/dashboards) |
| Utilisation de plugins standards | Plugins open source (Prometheus, Loki, etc.) activables. | Plugins officiels Grafana | **Entrant** : activation des plugins compatibles avec la version cible. <br> **Sortant** : plugins réutilisables si supportés par le nouvel environnement. | [Grafana Plugins](https://grafana.com/grafana/plugins/all-plugins/){.external} |
| Dhasboards et alertes | Création manuelle de dashboards et règles d'alerte via interface Grafana | JSON | **Entrant** : import des fichiers JSON via API ou interface. <br> **Sortant** : export des dashboards/alertes en JSON pour migration. | [Dashboards - Capacités et limitations](/pages/public_cloud/public_cloud_databases/grafana_01_capabilities)|
| Sauvegardes manuelles | Génération manuelle de sauvegardes via outils externes (ex : grr) | JSON, SQLite | **Entrant** : Restauration depuis un fichier JSON ou SQLite. <br> **Sortant** : Export manuel des données pour migration hors environnement d’hébergement OVHcloud. | [Grafana documentation](/products/public-cloud-data-analytics-grafana)|

### 2 - Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Réseau privé OVHcloud (vRack) | Le vRack, ou rack virtuel, est une technologie VLAN privée qui permet la connexion entre les services OVHcloud | N/A | **Entrant** : Configuration de la connexion réseau. <br> **Sortant**: Prenez note de l'architecture réseau et reproduisez-la avec des VLAN. | [vRack](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |
| Traçabilité (logs) | Stockage des logs dans OpenSearch managé par OVHcloud | JSON (OpenSearch) | **Entrant** : NA <br> **Sortant** : Export manuel des logs via API OpenSearch, puis réindexation dans l’environnement cible. | [Using Grafana with Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana)|
| Sauvegardes automatiques | Sauvegardes gérées par OVHcloud, non directement exportables en dehors de l’écosystème. | Snapshots internes | **Entrant** : non applicable à l’import direct. <br> **Sortant** : nécessite une restauration sur une instance OVHcloud puis export manuel (dump SQL) pour migration vers un autre environnement. | [Public Cloud Databases - Sauvegardes automatiques](/pages/public_cloud/public_cloud_databases/databases_05_automated_backups)|

### 3 - Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Infrastructure As a Code  | Déploiement automatisé via modules Terraform spécifiques à OVHcloud | N/A | **Entrant** : scripts à adapter pour d’autres fournisseurs. <br> **Sortant** : réécriture nécessaire des configurations Terraform. | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs) |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Entrante** : le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise. <br> **Sortante** : commandez et configurez un anti-DDoS chez le nouveau fournisseur. | [OVHcloud DDoS Protection](/links/security/antiddos) |

## Liste des architectures

L’offre de service Managed Grafana est déployée en mode single-node (plan essential). L’intégration avec d’autres services OVHcloud (OpenSearch, bases de données) est native via vRack. Les architectures incluent :

- Scalabilité verticale : montée en puissance des ressources (CPU/RAM) via l’interface OVHcloud.
- Cross-service integration : centralisation des logs et métriques dans OpenSearch managé.

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **migration vers le cloud** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

Aucun frais de résiliation : pas de surfacturation liée à la migration des données par défaut. La facturation s’arrête dès la résiliation du service. 
Les fonctionnalités décrites dans les tableaux sont disponibles sans coûts ni frais, sauf mentions contraires, et sont librement utilisables par le client.

## Conservation des données après résiliation du contrat

> [!warning]
>
> OVHcloud ne garantit pas l’utilisation et la disponibilité des sauvegardes pour restaurer les données du client après la résiliation du service.

OVHcloud ne conserve aucune donnée après suppression d’un cluster Managed Data Visualization. 
Les snapshots (automatiques ou manuels) sont irréversiblement supprimés. Une exportation manuelle préalable est obligatoire pour préserver les données.
