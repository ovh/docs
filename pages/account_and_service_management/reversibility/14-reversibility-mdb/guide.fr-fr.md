---
title: "Politique de réversibilité du produit Managed Message Broker"
updated: 2025-06-19
---

## Objectif

Ce document décrit la politique de réversibilité de la gamme de produits Managed Message Broker couvrant l'offre OVHcloud Managed Kafka.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités de la gamme de produits Managed Document Database sont réparties en trois catégories :

1. Les **Ffonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
1. Les **implémentations OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
1. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1 - Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Streaming de messages à haute disponibilité | Transmission fiable et distribuée de données en temps réel. | Avro, JSON, Protobuf, Texte | **Entrant** : chargement via producteurs Kafka. <br> **Sortant** : export via consommateurs Kafka ou outils de replay. | [Kafka - Capacités et limitations](/pages/public_cloud/public_cloud_databases/kafka_01_capabilities)|
| Compatibilité Kafka open-source | Utilisation du moteur Apache Kafka standard sans modification. | Natif Kafka (API standard) | **Entrant** : intégration directe avec outils Kafka existants. <br> **Sortant** : export standard Kafka|[Kafka documentation - Getting started](https://kafka.apache.org/documentation/) |
| Partitionnement et réplication | Gestion des partitions et répliques pour la tolérance aux pannes | N/A | **Entrant** : configurer les partitions/réplicas à l'import.<br> **Sortant** : Export et déploiement sur un autre cluster. | [Kafka - Capacités et limitations](/pages/public_cloud/public_cloud_databases/kafka_01_capabilities) |
| Configuration de la rétention des données | Définition personnalisée de la durée de rétention des messages | NA | **Entrant** : ajustement des paramètres.<br> **Sortant** : migration limitée aux messages encore stockés. | [Kafka - Références des paramètres avancés](/pages/public_cloud/public_cloud_databases/kafka_03_advanced_parameters_references)|
| Registre des schémas de données | Dépôt central pour stocker les schémas de données | Format natif Karapace | **Entrant** : NA. <br> **Sortant** : NA. | [Schema registry](/pages/public_cloud/public_cloud_databases/kafka_01_capabilities)|

### 2 - Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| OVHcloud Dashboard | Gestion des topics, ACL et monitoring via interface web. | N/A | **Entrant** : configuration initiale via API et l'interface web. <br> **Sortant** : administration interrompue après résiliation. Reproduire les configurations manuellement dans l’environnement cible | [Dashboards - Capacités et limitations](/pages/public_cloud/public_cloud_databases/grafana_01_capabilities) <br> [Dashboards - Références des paramètres avancés ](/pages/public_cloud/public_cloud_databases/grafana_03_advanced_parameters_references)|
| Monitoring intégré | Tableaux de bord de performances intégrés à l’interface OVHcloud. | N/A | **Entrant** : configuration des métriques <br> **Sortant** : : configuration à recréer dans l’environnement cible | [Analytics - Kafka](/products/public-cloud-data-analytics-kafka)|
| Sécurité réseau (ACL) | Filtrage IP et authentification SASL/SSL. | IP, SASL/SSL | **Entrant** : configuration des règles. <br> **Sortant** : export des ACL à répliquer. | [Kafka-Premiers pas](/pages/public_cloud/public_cloud_databases/kafka_02_getting_started)|

### 3 - Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Réseau privé OVHcloud (vRack) | Connexion avec d’autres services OVHcloud en réseau privé. | N/A | **Entrant** : Configuration du vRack. <br> **Sortant** : Fonctionnalité non transférable. | [vRack](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Entrante** : le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise. <br> **Sortante** : commandez et configurez un anti-DDoS chez le nouveau fournisseur. | [OVHcloud DDoS Protection](/links/security/antiddos) |

## Liste des architectures

Le service Managed Kafka repose sur une architecture distribuée avec des brokers Kafka répartis entre plusieurs zones de disponibilité. La haute disponibilité est assurée via la réplication des partitions, avec un monitoring intégré pour la stabilité des flux de messages. Deux plans d’architecture sont proposés : un plan Business reposant sur trois nœuds et un plan Enterprise reposant sur six nœuds.

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **migration vers le cloud** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

Les fonctionnalités décrites dans les tableaux sont disponibles sans coûts ni frais, sauf mentions contraires, et sont librement utilisables par le client.
Le service est facturé selon les ressources utilisées : l’instance sélectionnée et le stockage. Aucun frais de résiliation n’est appliqué, mais il est impératif d’exporter les données avant résiliation/décommissionnement du service.

## Conservation des données après résiliation du contrat

Après résiliation du service, tous les messages et configurations Kafka sont supprimés de manière définitive. Le client doit effectuer une exportation complète avant résiliation, OVHcloud ne conservant aucune donnée.
