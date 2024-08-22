---
title: Object Storage - Spécifications pour Local Zones
excerpt: ""
updated: 2024-08-22
---

## Objectif

OVHcloud Object Storage in Local Zones fournit une solution évolutive, durable et à faible latence pour le stockage et l'accès aux données non structurées. Conçue pour répondre aux besoins de diverses applications, elle offre une plateforme robuste pour le stockage de données avec des améliorations spécifiques pour les Local Zones afin d'assurer des performances et une disponibilité élevées.

## Comment est géré l'accès au bucket ?

Toutes les clés d'accès d'un projet peuvent accéder à tous les buckets dans toutes les Local Zones.

## Classes de performance

- **Standard** : les classes de performance dans les Local Zones sont les mêmes que les performances standard d'OVHcloud, ce qui garantit la cohérence dans le traitement des données et les vitesses d'accès.
- **High Performance** : les classes de stockage High Performance ne sont pas disponibles dans les Local Zones pour le moment. Seules les classes de stockage Standard sont prises en charge.

Le support des classes High Performance dans les Local Zones pourra être envisagé à l'avenir par OVHcloud.

## Fonctionnalités

Les fonctionnalités d'Object Storage dans les régions et les Local Zones sont principalement les mêmes. Cependant, certaines différences importantes sont mises en évidence dans [le tableau comparatif sur ce guide](/pages/storage_and_backup/object_storage/s3_limitations#features-matrix).

## Spécifications MultiAZ et MonoAZ

### MultiAZ (Zone de multi-disponibilité)

- **Vue générale** : MultiAZ assure une haute disponibilité et une redondance en répartissant les données sur plusieurs zones de disponibilité au sein d'une même région. Cette configuration garantit que les données restent accessibles même si une zone de disponibilité subit une panne.
- **Disponibilité** : Les configurations MultiAZ sont disponibles dans les régions mais ne sont actuellement pas supportées dans les Local Zones. Les Local Zones se concentrent sur la fourniture d'un accès à faible latence au sein d'une zone de disponibilité unique.

### MonoAZ (Zone de mono-disponibilité)

- **Vue générale** : MonoAZ stocke les données dans une seule zone de disponibilité, offrant une latence plus faible et des performances plus élevées pour les applications qui ne nécessitent pas la haute disponibilité fournie par MultiAZ.
- **Disponibilité** : les configurations MonoAZ sont disponibles en Local Zones, ce qui les rend adaptées aux cas d’utilisation qui privilégient les performances et la faible latence par rapport à la redondance inter-zones.

### API de métadonnées (indisponible)

- **Vue générale** : L'API des méta-données, qui permet aux utilisateurs de récupérer des métadonnées sur leur stockage, n'est actuellement pas disponible dans les Local Zones. Cela inclut l'interrogation du nombre de buckets et de la taille totale des buckets via l'espace client OVHcloud ou via l'API.
- **Impact** : les clients ne peuvent pas gérer ou surveiller facilement leur utilisation et leurs capacités de stockage par programme dans les Local Zones.

Nos équipes travaillent à la mise en place de cette API.

### Chiffrement et versioning

#### Chiffrement

- **État actuel** : Le chiffrement n'est pas pris en charge dans les Local Zones, ce qui signifie que les données ne sont pas chiffrées au repos par le service.
- **Chiffrement pris en charge** : le chiffrement côté serveur avec clés fournies par le client (SSeC) est pris en charge. Cela permet aux utilisateurs de chiffrer leurs données avant de les envoyer au service Object Storage, ce qui fournit une couche de sécurité.

#### Versioning

- **État actuel** : le versioning est pris en charge par l'API, ce qui permet aux utilisateurs de gérer plusieurs versions d'un objet dans un bucket.

La prise en charge du versionning sera ultérieurement davantage intégrée à l'API, offrant une gestion et un contrôle plus complets des versions des objets.

### User policies (indisponibles)

- **Vue générale** : Les stratégies utilisateur (*user policies*) peuvent théoriquement être utilisées pour accorder des accès spécifiques aux utilisateurs. Toutefois, ces stratégies ne modifient pas le modèle d'accès des Local Zones.
- **Impact** : Toutes les clés d'accès d'un projet ont un accès illimité à tous les buckets des Local Zones, ce qui peut ne pas répondre à toutes les exigences de sécurité pour certains utilisateurs.

Des améliorations sur la gestion des stratégies utilisateur sont envisagées pour les mises à jour futures.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
