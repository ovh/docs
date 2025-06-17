---
title: "Politique de réversibilité du produit Managed Document Database"
updated: 2025-06-12
---

## Objectif

Ce document décrit la politique de réversibilité de la gamme de produits Managed Document Database couvrant l'offre OVHcloud MongoDB.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités de la gamme de produits Managed Document Database sont réparties en trois catégories :

1. **Fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
1. **Implémentations OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
1. **Fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1 - Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Base de données orientée document | Stockage de données JSON/BSON flexible pour une grande évolutivité. | BSON, JSON, CSV | **Entrant** : Import via mongorestore/mongoimport. <br> **Sortant** : Export via mongodump/mongoexport. | [MongoDB documentation](https://docs.mongodb.com/){.external} |
| Compatibilité Open-source MongoDB | Version standard de MongoDB sans modification, facilitant la portabilité. | Standard MongoDB (CLI, API, outils) | **Entrant** : intégration directe. <br> **Sortant** : Export complet sans adaptation. |[MongoDB](/products/public-cloud-databases-mongodb)|
| Haute disponibilité | Jeux de réplicas assurant la redondance et la récupération automatique. | N/A | **Entrant** : Configuration des réplicas à l'import. <br> **Sortant** : Export et déploiement sur un autre cluster. | [Replication](https://docs.mongodb.com/manual/replication/){.external} |
| Sauvegardes automatiques | Sauvegardes quotidiennes avec possibilité de restauration. | Snapshots MongoDB | **Entrant** : Restauration possible. <br> **Sortant** : Téléchargement et exportation doivent être effectués manuellement. | [MongoDB Backups](/pages/public_cloud/public_cloud_databases/mongodb_06_howto_backup_restore)|

### 2 - Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| OVHcloud Dashboard | Interface de gestion et de monitoring des clusters MongoDB. | N/A | **Entrant** : Configuration initiale via l'interface. <br> **Sortant** : Administration interrompue après résiliation. | [MongoDB](/products/public-cloud-databases-mongodb)|
| Monitoring intégré | Suivi des performances via des métriques dans l'interface. | N/A | **Entrant** : Configuration des alertes <br> **Sortant** : À reconfigurer dans un autre environnement. | [MongoDB](/products/public-cloud-databases-mongodb)|
| Sécurité réseau (ACL) | Filtrage IP, TLS/SSL, accès restreint par vRack. | IP, TLS/SSL | **Entrant** : Définition des règles de sécurité. <br> **Sortant** : Configuration export. | [MongoDB](/products/public-cloud-databases-mongodb)|

### 3 - Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Réseau privé OVHcloud (vRack) | Connexion avec d’autres services OVHcloud en réseau privé. | N/A | **Entrant** : Config vRack. <br> **Sortant** : Fonctionnalité non transférable. | [vRack](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |
| Mises à jour gérées par OVHcloud | Gestion des versions de MongoDB par OVHcloud. | N/A | **Entrant** : Vérifier la compatibilité. <br> **Sortant** : Migration sous la responsabilité du client. | [MongoDB](/products/public-cloud-databases-mongodb) |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Entrante** : Le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise. <br> **Sortante** : Commandez et configurez un anti-DDoS chez le nouveau fournisseur. | [OVHcloud DDoS Protection](/links/security/antiddos) |

## Liste des architectures

Managed MongoDB repose sur une architecture distribuée avec des jeux de réplicas pour assurer une haute disponibilité.

Les données sont réparties sur plusieurs nœuds grâce à des sauvegardes régulières, une surveillance continue et des outils de sécurité intégrés.

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés **« migration vers le cloud »**.

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

Les fonctionnalités décrites dans les tableaux sont gratuites sauf mention contraire et sont librement utilisables par le client

La facturation est basée sur la taille du cluster, la capacité de stockage et les sauvegardes.

Il n'y a pas de frais de résiliation, cependant les données doivent être exportées avant la résiliation car elles seront supprimées.

## Conservation des données après résiliation du contrat

> [!warning]
>
> OVHcloud ne garantit pas l’utilisation et la disponibilité des sauvegardes pour restaurer les données du client après la résiliation du service.

Après résiliation, toutes les données de l'instance sont définitivement supprimées, y compris les sauvegardes effectuées par OVHcloud.

Il appartient au client de réaliser l’exportation avant la fin du service, OVHcloud ne conservant aucune copie.

Les instances primaires sont **supprimées immédiatement** et les **sauvegardes sont conservées pendant une période allant de 2 jours à 1 mois** selon les options spécifiées dans le contrat.