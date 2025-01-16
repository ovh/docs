---
title: Object Storage - Choisir une classe de stockage adaptée à vos besoins
updated: 2024-11-25
---

Le stockage objet « Object Storage » est une famille d’offres de stockage proposant des espaces de stockage performants, scalables et sécurisés.

Les offres de stockage objet permettent de déposer à travers un point d’accès public appelé « endpoint » des fichiers statiques (vidéos, images, fichiers web…) dans un espace illimité, pour les exploiter depuis une application ou pour les rendre accessibles sur le web. Ces espaces de stockage sont accessibles via une interface d’API .

## Les offres Object Storage sont les suivantes :

### Object Storage - Standard (Compatible S3 **\***)

La classe de stockage Standard offre un service de stockage objet scalable, compatible avec la grande majorité des cas d'usages, adapté à tous types de volumétrie. L’offre s’appuie sur un stockage sur disques HDD au sein d'une architecture résiliente dans un datacentre. L’offre est accessible depuis une API S3.

Cette offre est adaptée aux cas d'usage suivants : media / content storage & delivery, datalake, website, backup, logs et métriques d'applications.

> [!primary]
> La classe de stockage Standard est disponible sur les régions **1-AZ et 3-AZ**. Plus de détails sur les régions disponibles [ici](/pages/storage_and_backup/object_storage/s3_location).

### Object Storage - High Performance (Compatible S3)

La classe de stockage High Performance est un espace de stockage objet hautement performant, pour les applicatifs ayant de gros besoins en bande passante et nécessitant des accès à la donnée en lecture et en écriture extrêmement rapides et intensifs. L’offre s’appuie sur un stockage sur des disques performants de type SSD NVMe au sein d'une architecture résiliente dans un datacentre. L’offre est accessible depuis une API S3.

Cette offre est adaptée aux cas d'usage suivants : AI & Analytics, Datalake, High power Computing Multimedia / Content Platform.

> [!primary]
> La classe de stockage High Performance est disponible sur les régions **1-AZ** uniquement. Plus de détails sur les régions disponibles [ici](/pages/storage_and_backup/object_storage/s3_location).

## Les offres de stockage objet SWIFT sont les suivantes :

### Standard object storage - SWIFT API

La classe de stockage Swift Standard Object Storage  offre un service de stockage de données sans besoin particulier en matière de performance, au sein d’une architecture résiliente par triple réplication de la donnée au sein d’un même datacentre. L’offre est accessible depuis une API SWIFT et une API compatible Amazon S3 (compatibilité inférieure aux nouvelles offres Object Storage S3).

### Cloud Archive - SWIFT API

La classe de stockage Cloud Archive (SWIFT) offre un service de stockage pour de la conservation long terme de données pour des besoins métier ou d'autres obligations. Adapté à ce cas d’usage, ce service propose un coût du stockage faible et une latence à la récupération des données de plusieurs minutes. L’offre est accessible depuis une API SWIFT.

## Toutes les classes de stockage sont accessibles grâce à l'API standard

| Classe de stockage | Gestion du cycle de vie de l'offre | Accès standard par API S3 | Accès OpenStack par API SWIFT |
| --- | --- | --- | --- |
| Object Storage - Standard (Compatible S3) | Dernière génération d'offre | oui | non |
| Object Storage - High Performance (Compatible S3) | Dernière génération d'offre | oui | non |
| Swift Standard Object Storage | Fin de mise en vente proche | partiel | oui |
| Cloud Archive - SWIFT API | Fin de mise en vente proche | non | oui |

La liste de tous les points de terminaison API est disponible [ici](/pages/storage_and_backup/object_storage/s3_location).

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

**\*** : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.