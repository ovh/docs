---
title: "OPCP - Object Storage fonctionnalités et spécifications"
excerpt: "Découvrez les spécifications d'Object Storage pour OVHcloud OPCP, avec informations sur l'accès aux buckets, les classes de performance, le chiffrement et le versioning."
updated: 2025-11-12
---

> [!primary]
>
> Veuillez noter que ces informations peuvent évoluer avant la disponibilité générale (GA). Selon nos estimations actuelles, la GA est prévue pour **mars 2026**. Nous nous engageons à vous tenir informés de toute modification, mais nous vous recommandons de consulter régulièrement ce guide pour obtenir les informations les plus récentes. Merci de votre compréhension.
>

## Objectif

OVHcloud Object Storage dans **OPCP** fournit une solution évolutive, durable et à faible latence pour le stockage et l'accès aux données non structurées. Conçue pour répondre aux besoins de diverses applications, elle offre une plateforme robuste pour le stockage de données avec des optimisations spécifiques à OPCP afin d'assurer des performances et une disponibilité élevées.

## Comment est géré l'accès au bucket ?

Toutes les clés d'accès d'un projet peuvent accéder à tous les buckets dans OPCP.

## Classes de performance

- **Standard** : les classes de performance dans OPCP sont identiques aux performances standard d'OVHcloud, garantissant la cohérence dans le traitement des données et les vitesses d'accès.  
- **High Performance** : les classes de stockage High Performance ne sont pas disponibles dans OPCP pour le moment. Seules les classes Standard sont prises en charge.

Le support des classes High Performance dans OPCP pourra être envisagé à l'avenir par OVHcloud.

## Fonctionnalités

Les fonctionnalités d'Object Storage dans OPCP sont principalement les mêmes que dans les régions OVHcloud. Certaines différences importantes sont détaillées dans [le tableau comparatif de ce guide](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

## Spécifications MultiAZ et MonoAZ

### MultiAZ (Zone de multi-disponibilité)

- **Vue générale** : MultiAZ assure haute disponibilité et redondance en répartissant les données sur plusieurs zones de disponibilité au sein d'une même région, garantissant l'accès aux données même en cas de panne d'une zone.  
- **Disponibilité** : les configurations MultiAZ sont disponibles dans les régions mais ne sont pas supportées dans OPCP, qui se concentre sur un accès à faible latence dans une zone unique.

### MonoAZ (Zone de mono-disponibilité)

- **Vue générale** : MonoAZ stocke les données dans une seule zone de disponibilité, offrant **latence réduite et performances élevées** pour les applications ne nécessitant pas la redondance MultiAZ.  
- **Disponibilité** : MonoAZ est pris en charge dans OPCP, adapté aux cas d’usage privilégiant performances et faible latence.

### API de métadonnées (indisponible)

- **Vue générale** : l’API de métadonnées, qui permet de récupérer des informations sur le stockage, n’est pas disponible dans OPCP. Cela inclut le nombre de buckets et la taille totale via l’espace client ou l’API.  
- **Impact** : les utilisateurs ne peuvent pas suivre ou gérer leur utilisation de stockage par programme dans OPCP.  

Nos équipes travaillent à l’intégration future de cette API.

### Chiffrement et versioning

#### Chiffrement

- **État actuel** : le chiffrement au repos n’est pas pris en charge dans OPCP.  
- **Chiffrement pris en charge** : le chiffrement côté client (SSeC) est disponible, permettant aux utilisateurs de chiffrer leurs données avant envoi au service Object Storage.

#### Versioning

- **État actuel** : le versioning est pris en charge par l’API, permettant la gestion de plusieurs versions d’un objet dans un bucket.  
- Une intégration plus complète du versioning sera proposée dans les futures mises à jour de l’API.

### Stratégies utilisateur (indisponibles)

- **Vue générale** : les *user policies* peuvent théoriquement contrôler les accès, mais elles n’affectent pas le modèle OPCP.  
- **Impact** : toutes les clés d’accès d’un projet ont un accès illimité à tous les buckets OPCP, ce qui peut ne pas répondre à certaines exigences de sécurité.  

Des améliorations pour la gestion des stratégies utilisateur sont prévues dans de futures mises à jour.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
