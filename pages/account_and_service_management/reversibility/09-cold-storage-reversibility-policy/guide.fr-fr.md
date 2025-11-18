---
title: 'Politique de réversibilité du produit Cold Storage'
updated: 2025-06-13
---

## Objectif

Ce document décrit la politique de réversibilité du produit Cold Storage couvrant l'offre Cold Archive d’OVHcloud.

Cette politique vise à mettre en œuvre les principes de réversibilité mondiaux et les exigences du code de conduite SWIPO IaaS pour les fournisseurs de cloud.

## Inventaire des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

- Les **fonctionnalités principales** pour lesquelles nous garantissons la possibilité de migrer.
- L'**implémentation OVHcloud**, dont la migration nécessitera des adaptations à un nouvel environnement.
- Des **fonctionnalités spécifiques**, dont la migration en tant que telle est impossible à garantir car elles sont liées à l'environnement OVHcloud ou à des développements spécifiques.

### Fonctionnalités principales

|Fonctionnalité|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
| **Compatibilité API S3<sup>1</sup> standard**| Accès et gestion via API compatible S3 (RESTful, outils CLI AWS, SDK, etc.).| S3 (REST, JSON, objets)|**Entrant** : upload direct dans un bucket Object Storage via l’API S3, CLI ou SDK. <br> **Sortant** : récupération/export direct via API S3, CLI ou SDK vers tout autre fournisseur compatible S3. | [Présentation de l'offre commerciale Cold Archive](/links/public-cloud/cold-archive) <br> [Documentation de l'offre Cold Archive](/products/storage-object-storage)|
| **Import/Export massif d'objects** | La migration de données par lots à l'aide de commandes S3 (`aws s3 cp/sync`, etc.).| S3 (objets, dossiers)| **Entrant** : copie des données depuis une autre solution S3 vers le bucket Object Storage d’OVHcloud. <br> **Sortant** : export massif via les mêmes outils vers une autre plateforme S3 ou compatible. | [Documentation de l'offre Cold Archive](/products/storage-object-storage) |
| **Chiffrement Côté Serveur** | Chiffrement AES-256 natif au niveau du bucket, compatible avec S3 SSE| S3 (SSE-S3, SSE-C) | **Entrant** : upload de données chiffrées ou non, gestion transparente. <br> **Sortant** : export sans adaptation, chiffrement maintenu ou re-traité par la cible |[Documentation de l'offre Cold Archive](/products/storage-object-storage) |
| **Conservation longue durée** | Données stockées sur bandes magnétiques, durée de vie supérieure à 10 ans| S3 (objets)| **Entrant** : import sans adaptation. <br> **Sortant** : export d’objets via API S3 ; récupération sur tout stockage compatible. |[Documentation de l'offre Cold Archive](/products/storage-object-storage) |

### Implémentation OVHcloud

|Fonctionnalité|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
| **Archivage par bucket complet** | L’archivage s’applique à un bucket entier (pas d’archivage objet par objet)| S3 (bucket) | **Entrant** : nécessite le regroupement d'objets à archiver dans un bucket dédié. <br> **Sortant** : export des objets du bucket, puis import dans la cible (adaptation possible si la cible ne gère pas l’archivage par bucket). | [Documentation de l'offre Cold Archive](/products/storage-object-storage) |
| **Restauration différée (*unfreeze*)** |Les données doivent être « dégelées » avant téléchargement (latence de plusieurs heures)| S3 (objets) | **Entrant** : non applicable. <br> **Sortant** : m’utilisateur doit lancer une demande de restauration (*unfreeze*) puis télécharger les objets dans la fenêtre de disponibilité (24h) ; adaptation nécessaire si la cible n’a pas ce mécanisme. | [Documentation de l'offre Cold Archive](/products/storage-object-storage)  |
| **Immuabilité des données** | Possibilité de rendre les données immuables pour une durée définie ou indéfinie (WORM)| S3 (Object Lock)  | **Entrant** : nécessite que la source supporte l’immuabilité S3. <br> **Sortant** : cxport possible, mais la cible doit supporter le verrouillage S3 ou adaptation manuelle des politiques d'immuabilité. | [Documentation de l'offre Cold Archive](/products/storage-object-storage)|

### Fonctionnalités spécifiques

|Fonctionnalité|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|**Anti-DDoS**|L’anti-DDoS est un ensemble d’équipements et de moyens mis en place pour absorber les attaques par déni de service distribuées. Il comprend une analyse du trafic, l’« aspiration » vers un réseau spécialisé et la mitigation, assurée par la technologie VAC développée par OVHcloud.|S/O|**Migration entrante** : l’Anti-DDoS est une composante de notre infrastructure, activée par défaut. Aucune action n’est requise.<br><br>**Migration sortante** : commandez et configurez un anti-DDoS chez le nouveau fournisseur.|[Protection anti-DDoS OVHcloud](/links/security/antiddos)<br><br>[Technologie anti-DDoS](/links/security/antiddos)|
| **Architecture 4-Datacenter OVHcloud** | Répartition sur 4 datacentres en France avec erasure coding 8+4 | N/A | **Entrant** : non applicable. <br> **Sortant** : non transférable, dépend de l’architecture cible. | [Documentation de l'offre Cold Archive](/products/storage-object-storage) |
| **Gestion via l'espace client / l'API OVHcloud** | Interface graphique et API propriétaires OVHcloud pour la gestion des archives. | N/A | **Entrant** : non applicable. <br> **Sortant** : : scripts/API à réécrire pour la cible, gestion manuelle nécessaire. | [Documentation de l'offre Cold Archive](/products/storage-object-storage) |

## Liste des architectures

Le produit Cold Storage d’OVHcloud repose sur une architecture géo-distribuée sur quatre datacentres physiquement séparés (de plusieurs kilomètres), utilisant la technologie de bandes magnétiques IBM. Les données sont stockées via erasure coding 8+4, garantissant une résilience extrême et la tolérance à la perte d’un site complet.

## Services partenaires

Les partenaires OVHcloud sont répertoriés sous le mot-clé **« Migration vers le cloud »** dans [l'annuaire des partenaires](/links/partner).

OVHcloud propose également un service dédié : [OVHcloud Professional Services](/links/professional-services).

## Coût et frais

Aucun de frais de résiliation : pas de surfacturation liée à la migration des données par défaut. La facturation s’arrête dès la résiliation du service. Toutefois, un changement de tarification aura lieu lors de la restauration des données. Il correspondra à la tarification en vigueur pour le support sur lequel les données ont été transférées.

## Conservation des données après résiliation du contrat

OVHcloud ne conserve aucune donnée après l’arrêt du service. Les données sont irréversiblement supprimées. Une exportation manuelle préalable est obligatoire pour préserver les données.
Pour récupérer ses données, le client devra les désarchiver, puis les récupérer sur le bucket où elles ont été restaurées. Attention, le désarchivage peut prendre jusqu’à 48h.

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
