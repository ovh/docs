---
title: "Politique de réversibilité du produit Managed Log Manager"
updated: 2025-07-08
---

## Objectif

Ce document est la politique de réversibilité du produit Managed Log Manager couvrant l’offre commerciale Logs Data Platform d’OVHcloud.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
1. Les **implémentation OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
1. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1 - Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Ingestion de logs standards | Support de plusieurs formats de fichiers de logs | GELF, LTSV, RFC 5424, Beats, Cap’n Proto, etc | **Entrant** : envoi direct via point d’entrée mutualisé. | [Mutualized inputs](/pages/manage_and_operate/observability/logs_data_platform/ingestion_mutualized_inputs) |
| Ingestion de logs non standards | Support de formats de fichiers de logs non traditionnels | Tout format proposé par le logiciel Logstash | **Entrant** : envoi direct via un point d'entréee dédié | [Dedicated input-logstash](/pages/manage_and_operate/observability/logs_data_platform/ingestion_logstash_dedicated_input) |
| Support de l'API OpenSearch | Import ou export des logs via OpenSearch  | JSON | **Entrant** : Indexation spéciale pour ingérer les logs. <br> **Sortant** : pagination Scroll ; ingestion externe possible | [Mutualized input - OpenSearch API](/pages/manage_and_operate/observability/logs_data_platform/ingestion_opensearch_api_mutualized_input) <br> [Exposing your logs to third-party tools via the OpenSearch API](/pages/manage_and_operate/observability/logs_data_platform/integration_opensearch_api) |
| Tableaux de bords OpenSearch | Visualisation et exploration via OpenSearch Dashboards| JSON | **Entrant/Sortant** : Visualisations, tableaux de bord et paramètres via API et interface utilisateur. | [Using OpenSearch Dashboards with Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/visualization_opensearch_dashboards) |
| Stockage et archivage à froid | Archivage quotidien chiffrable, conservation longue durée disponible 48h après réception des logs | Fichier contenant du GELF livré sous forme d’archive | **Entrant** : activation de l’option et configuration du stream.  <br> **Sortant** : téléchargement via l'espace client ou l'API OVHcloud. | [Archiving your logs-cold storage](/pages/manage_and_operate/observability/logs_data_platform/archive_cold_storage) |

### 2 - Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Plan de contrôle de la plateforme | Interface dans l'espace client pour créer des streams, dashboard, Alias, index OpenSearch dashboards ou inputs Logstash  | NA  | **Entrant** : Configuration des éléments liés au cycle de vie du service  <br> **Sortant** : Recréation de  la configuration sur un autre service ou plateforme de gestion de logs. | [OVHcloud API](https://api.ovh.com/console/?section=%2Fdbaas%2Flogs&branch=v1) |
| OpenSearch Index As a Service | Import ou export de documents via l'API OpenSearch | JSON | **Entrant** : conventions de noms spécifiques pour les index et alias, paramètres d'index et restrictions API.  <br> **Sortant** : Requêtes de défilement OpenSearch avec pagination | [OpenSearch Index as a Service](/pages/manage_and_operate/observability/logs_data_platform/opensearch_index) |
| Tableaux de bords Greylog | Configuration des tableaux de bords et des recherches sauvegardées par le client sur l’interface  Graylog  | JSON | **Entrant** : utilisation des API ou du panneau de contrôle Graylog  <br> **Sortant** : utilisation des API Graylog | [Greylog documentation](https://go2docs.graylog.org/4-0/home.htm) |
| Chiffrement des archives | Chiffrement systématique des archives en utilisant les clés PGP publiques fournies par le client | Clés PGP | **Entrant** : Enregistrement des clés PGP via API ou l’espace client  <br> **Sortant** : récupération des clés enregistrés et mise en place d’un mécanisme de chiffrement dans l’environnement cible | [Encrypting your logs archives](/pages/manage_and_operate/observability/logs_data_platform/archive_cold_storage_encryption) |

### 3 - Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Entrant** : le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise. <br> **Sortant** : commandez et configurez un anti-DDoS chez le nouveau fournisseur. | [OVHcloud DDoS Protection](/links/security/antiddos) |

## Liste des architectures

Les composants du produit sont accessibles depuis l’interface OVHcloud et permettent d’opérer les flux de données, les tableaux de bord, les outils de collecte, les index, les alias et les instances OpenSearch Dashboards. 

Le produit est décliné en deux offres de service : 

- Une infrastructure mutualisée : « logs-account »
- Un cluster dédié : « logs-enterprise »

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **Data center expansion and Migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

Les fonctionnalités décrites dans les tableaux sont disponibles sans coûts ni frais sauf mentions contraires, et sont librement utilisables par le client. Les détails de facturation sont disponibles sur la page de présentation de l’offre de service : [Présentation de l’offre](/links/manage-operate/ldp).

- Aucun frais de sortie supplémentaire n'est appliqué.
- La facturation dépend du volume stocké et du type d’infrastructure mobilisé (indexé/archivé).
- Toute prestation d’assistance ou export clé en main peut engendrer des coûts additionnels.

## Conservation des données après résiliation du contrat

OVHcloud ne garantit pas l'exploitation et la disponibilité des sauvegardes pour effectuer des restaurations des données des clients après la résiliation du service. 
Les streams et index OpenSearch sont supprimés immédiatement après suppression du service.

- Les archives Cold Storage sont immédiatement détruites à la résiliation du service
- Le client est entièrement responsable du rapatriement de ses données via API ou [ldp-archive-mirror](https://github.com/ovh/ldp-archive-mirror) avant le décommissionnement du service ou la résiliation du contrat.
