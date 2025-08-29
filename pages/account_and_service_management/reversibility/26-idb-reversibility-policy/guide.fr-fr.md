---
title: "Politique de réversibilité du produit Managed In-Memory Database"
updated: 2025-08-28
---

## Objectif

Ce document est la politique de réversibilité du produit In-Memory Database couvrant l’offre commerciale d’OVHcloud Valkey.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Liste des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
2. Les **implémentations OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
3. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1. Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Stockage clé-valeur en mémoire | Stockage haute performance de paires clé-valeur entièrement en mémoire | JSON, RDB, AOF | **Entrante** : import des données via API, la CLI ou restauration de dump  <br>**Sortante** : export avec les commandes BGSAVE ou dump  | [Valkey - Capacités et limites (EN)](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) <br><br>[Valkey - Se connecter avec CLI (EN)](/pages/public_cloud/public_cloud_databases/redis_03_connect_cli) |
| Haute disponibilité | Basculement automatique avec Valkey Sentinel ou en mode cluster | NA | **Entrante** : configuration des réplicas et du basculement via la CLI  <br>**Sortante** : : prendre note des configurations et les reproduire dans l'infrastructure cible | [Valkey - Capacités et limites (EN)](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) |
| Persistance | Sauvegarde des données sur disque via snapshots RDB ou journaux AOF (logs) | RDB, AOF | **Entrante** : import des snapshots ou des journaux AOF via la CLI Redis ou Valkey et configuration des sauvegardes <br>**Sortante** : export des données via la commande dump (CLI) | [Valkey - Capacités et limites (EN)](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) |
| Scalabilité | Mode cluster pour répartir les clés entre plusieurs instances de bases de données (shards) | Pas de format particulier exigé, ça dépend du choix du client | **Entrante** : import des clés de "resharding" pour s’adapter à la topologie du service via la CLI <br>**Sortante** : export et réimport des clés dans l’infrastructure cible via la CLI | [Valkey - Capacités et limites (EN)](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) |

### 2. Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Sécurité réseau (ACL) | Contrôle d’accès par liste IP  | IPv4, JSON | **Entrante** : configuration des IP autorisées via l’interface web (espace client) ou les API <br>**Sortante** : export de la configuration et l’adapter à l‘architecture cible | [Valkey - Capacités et limites (EN)](/pages/public_cloud/public_cloud_databases/redis_01_capabilities) |
| vRack | Le vRack, ou rack virtuel, est une technologie VLAN privée qui permet la connexion entre les services OVHcloud | NA | **Entrante** : activation et configuration de la connexion réseau <br>**Sortante** : prendre note de l'architecture réseau et la reproduire avec des VLANs. | [Création de V(x)LAN Public Cloud Databases](/pages/public_cloud/public_cloud_databases/databases_08_vrack) |

### 3. Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Infrastructure as a code | Déploiement automatisé via modules Terraform spécifiques à OVHcloud | NA | **Entrante** : scripts à adapter pour d’autres fournisseurs <br>**Sortante** : réécriture nécessaire des configurations Terraform | [Terraform](https://registry.terraform.io/providers/ovh/ovh/latest/docs) |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Entrant** : le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise. <br> **Sortant** : commande et configuration un anti-DDoS chez le nouveau fournisseur. | [OVHcloud DDoS Protection](/links/security/antiddos) |

## Liste des architectures

Le produit repose sur une architecture distribuée en mémoire, s’appuyant sur la technologie Valkey Sentinel pour assurer la haute disponibilité. Elle prend en charge la réplication, la tolérance aux pannes et les basculements automatiques pour garantir la fiabilité du service.

## Services partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **Data center expansion and Migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coûts et frais

Les fonctionnalités décrites dans les tableaux sont disponibles sans coûts et frais sauf mentions contraires, et sont librement utilisables par le client.
La tarification est en mode *Pay as you go* et dépend de la capacité mémoire, du type d’instance. Aucun frais de sortie supplémentaire n’est appliqué, mais il est essentiel d’exporter toutes les données avant résiliation, car elles seront supprimées définitivement.

## Conservation des données après résiliation du contrat

Une fois le service résilié, toutes les données présentes dans les instances Valkey sont supprimées de manière irréversible. Il incombe au client de réaliser une sauvegarde complète avant résiliation.

OVHcloud ne garantit pas l'exploitation et la disponibilité des sauvegardes pour effectuer des restaurations des données des clients après la résiliation du service.

Les sauvegardes des bases de données clients réalisées par OVHcloud sont conservées pour une durée allant de 2 jours à un mois après la résiliation du contrat.
