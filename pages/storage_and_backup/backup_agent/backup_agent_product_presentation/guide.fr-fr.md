---
title: "Backup Agent - Présentation de l'offre"
excerpt: "Présentation des fonctionnalités et avantages du produit Backup Agent"
updated: 2026-01-28
---

## Objectif

Ce guide vous aidera à comprendre le fonctionnement du produit Backup Agent et ses avantages pour vos services Bare Metal.

## Présentation du produit

Le produit Backup Agent permet de sauvegarder vos serveurs Bare Metal en utilisant un agent qui va, selon une politique de sauvegarde que vous avez choisie, envoyer les données de votre serveur vers un point de stockage externe.

Le produit Backup Agent s'appuie sur deux produits de l'éditeur logiciel Veeam :

- La Veeam Service Provider Console (VSPC).
- Le Veeam Agent.

Le Veeam Agent est un logiciel créé par Veeam, qui s'installe sur votre système d'exploitation sous Linux et Windows, et vous permet de faire des sauvegardes de votre système.

La VSPC permet de redescendre les politiques de sauvegardes aux agents enregistrés dessus, et permet de donner les informations du stockage et des identifiants à chaque agent lors du démarrage de sa sauvegarde.
Découvez comment naviguer dans la VSPC via [ce guide](/pages/storage_and_backup/backup_agent/backup_agent_vspc_presentation).

Quand vous commandez le produit, vous recevez un e-mail vous confirmant la livraison du service ainsi que des identifiants d'accès à votre tenant dans la VSPC. Ce compte est en lecture-seule et vous donnera accès à des visualisations de vos sauvegardes et de vos agents.

Une fois que l'agent obtient les informations, il envoie directement les données vers le point de stockage sans jamais transitionner par l'infrastructure VSPC.

## Points clés

Plusieurs points forts sont présents dans cette offre :

- Première politique de sauvegarde automatique avec 14 jours de rétention.
- Possibilité de passer à 30 jours de rétention.
- La politique fait une sauvegarde complète de votre serveur.
- 14 jours d'immutabilité sur nos buckets.
- La période des sauvegardes automatiques est entre 22h00 et 06h00 (fuseau horaire CET pour l'Europe - fuseau horaire EST pour le Canada et l'Asie).
- Chiffrement géré par OVHcloud du stockage hébergeant vos données de sauvegardes.
- Envoi en direct de la donnée de sauvegarde vers le bucket sans mettre de copie sur notre infrastructure.
- Point de stockage toujours distant de la localisation de votre serveur Bare Metal (si vous êtes à Roubaix, votre point de stockage sera à Gravelines).

Il est également important de garder à l'esprit que :

- La politique de sauvegarde est restreinte, vous ne pouvez pas la modifier.
- Vous ne pouvez pas configurer une sauvegarde uniquement sur une liste de fichiers ou de dossiers.
- Vous ne pouvez pas modifier la date et l'heure des déclencheurs de sauvegarde (cela fera l'objet d'une amélioration à venir).

## L'infrastructure

Le schéma de principe est le suivant :

![Backup Agent Functional Diagram](images/01-backup-agent-diagram.png){.thumbnail}

Il est à noter que :

- L'infrastructure VSPC est hébergée dans les datacenters OVHcloud et n'envoie pas de données vers les serveurs de Veeam.
- Le stockage repose sur la technologie [OVHcloud Object Storage](/links/public-cloud/object-storage) qui est hébergée dans les datacenters OVHcloud.

Lors de votre livraison, vous recevez :

- Un Backup Tenant, en général nommé `backup-tenant-xxxx`, qui est un containeur virtuel permettant de regrouper tous vos services Backup.
- Un VSPC Tenant, en général nommé `vspc-tenant-xxxx`, qui est votre « company » dans la VSPC, permettant d'accéder à vos dashboards et de connecter vos agents.
- Un Vault, en général nommé `backup-vault-xxxx`, qui est votre espace de stockage où vos données de sauvegarde sont envoyées à chaque sauvegarde.

Nous vous invitons à lire nos autres guides afin de découvrir le produit.

## Anti-affinité

Les sauvegardes sont réalisées offsite, via la configuration Vault par défaut, avec un point de stockage situé dans une zone géographiquement distincte de celle du serveur Bare Metal. Ce mécanisme d’anti-affinité renforce la résilience des données de sauvegarde.

Mapping des zones de sauvegarde :

| Localisation Bare Metal | Vault Affinity |
| ----------------------- | -------------- |
| BHS                     | TOR            |
| SGP                     | SYD            |
| MUM                     | SGP            |
| SYD                     | SGP            |
| RBX                     | GRA            |
| GRA                     | SBG            |
| LIM                     | SBG            |
| PAR                     | RBX            |
| ERI                     | LIM            |
| WAR                     | LIM            |
| SBG                     | RBX            |
| TOR                     | BHS            |

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).