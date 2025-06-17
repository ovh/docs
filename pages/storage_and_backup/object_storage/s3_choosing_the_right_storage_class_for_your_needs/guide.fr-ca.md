---
title: Object Storage - Choisir une classe de stockage adaptée à vos besoins
updated: 2025-06-04
---

Le stockage objet « Object Storage » est une famille d’offres de stockage proposant des espaces de stockage performants, scalables et sécurisés.

Les offres de stockage objet permettent de déposer à travers un point d’accès public appelé « endpoint » des fichiers statiques (vidéos, images, fichiers web…) dans un espace illimité, pour les exploiter depuis une application ou pour les rendre accessibles sur le web. Ces espaces de stockage sont accessibles via une interface d’API .

Nous proposons deux solutions de stockage d'objets : notre **dernière génération d'Object Storage - compatible S3<sup>1</sup>**, qui est disponible globalement, et **la solution Object Storage SWIFT API *legacy***, qui reste une option prise en charge pour les utilisateurs. Cependant, nous recommandons d'utiliser la solution Object Storage - compatible S3 pour toute nouvelle conception d'application, car celle-ci bénéficie des dernières fonctionnalités et innovations.

## Les classes Object Storage compatibles S3

### Object Storage - Standard

La classe de stockage Standard offre un service de stockage objet scalable, compatible avec la grande majorité des cas d'usages, adapté à tous types de volumétrie. L’offre s’appuie sur un stockage sur disques HDD au sein d'une architecture résiliente dans un datacentre. L’offre est accessible depuis une API S3.

Cette offre est adaptée aux cas d'usage suivants : media / content storage & delivery, datalake, website, backup, logs et métriques d'applications.

### Object Storage - High Performance

La classe de stockage High Performance est un espace de stockage objet hautement performant, pour les applicatifs ayant de gros besoins en bande passante et nécessitant des accès à la donnée en lecture et en écriture extrêmement rapides et intensifs. L’offre s’appuie sur un stockage sur des disques performants de type SSD NVMe au sein d'une architecture résiliente dans un datacentre.

Cette offre est adaptée aux cas d'usage suivants : AI & Analytics, Datalake, High power Computing Multimedia / Content Platform.

### Object Storage - Infrequent Access ou *accès peu fréquent*

La classe de stockage Infrequent Access est conçue pour les données qui sont rarement consultées, également appelées « données froides », mais nécessitant un accès rapide. Elle offre des performances similaires (TTFB en millisecondes, faible latence) et une disponibilité comparable à la classe Standard, à un coût inférieur par Gio-heure consommé mais avec un coût de récupération par Gio.

Cette offre est adaptée aux cas d'usage suivants : stockage long durée, sauvegardes, reprise après sinistre.

### Détails des classes de stockage d'objets compatibles S3

| Classe de stockage | Cas d'utilisation | Performance (TTFB) | Régions prises en charge | Disponibilité SLA | Durée de stockage minimale | Frais de récupération | Granularité |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **High performance** | AI & Analytics, Datalake, High power Computing Multimedia / Content Platform | millisecondes | 1-AZ | régions 1-AZ : 99,9% | Aucune | Non | À l'objet, prise en charge de la gestion du cycle de vie |
| **Standard** | media / content storage & delivery, datalake, website, backup, logs et métriques d'applications | millisecondes | 1-AZ et 3-AZ | régions 1-AZ : 99,9% - régions 3-AZ : 99,99% | Aucune | Non | À l'objet, prise en charge de la gestion du cycle de vie |
| **Infrequent Access** | stockage longue durée, sauvegardes, reprise après sinistre | millisecondes | 1-AZ et 3-AZ | régions 1-AZ : 99,9% - régions 3-AZ : 99,99% | 30 jours | Oui | À l'objet, prise en charge de la gestion du cycle de vie |
| **Cold Archive** *[en savoir plus](/pages/storage_and_backup/object_storage/cold_archive_overview)* | Stockage à très long terme, sauvegardes, reprise après sinistre | heures | 4 centres de données dédiés | 99,9% | 90 jours | Oui | Au bucket, pas de prise en charge de la gestion du cycle de vie pour le moment |

Retrouvez plus de détails concernant les régions OVHcloud [ici](/pages/storage_and_backup/object_storage/s3_location).

## Object Storage - SWIFT API

### Standard object storage - SWIFT API

La classe de stockage Swift Standard Object Storage  offre un service de stockage de données sans besoin particulier en matière de performance, au sein d’une architecture résiliente par triple réplication de la donnée au sein d’un même datacentre. L’offre est accessible depuis une API SWIFT et une API compatible Amazon S3 (compatibilité inférieure aux nouvelles offres Object Storage S3).

### Cloud Archive - SWIFT API

La classe de stockage Cloud Archive (SWIFT) offre un service de stockage pour de la conservation long terme de données pour des besoins métier ou d'autres obligations. Adapté à ce cas d’usage, ce service propose un coût du stockage faible et une latence à la récupération des données de plusieurs minutes. L’offre est accessible depuis une API SWIFT.

## Toutes les classes de stockage sont accessibles grâce à des API standard

| Classe de stockage | Compatibilité | Disponibilité | Statut |
| ------ | ------ | ------ | ------ |
| Object Storage - High Performance | Compatibilité S3 | Disponibilité générale | Génération la plus récente |
| Object Storage - Standard | Compatibilité S3 | Disponibilité générale | Génération la plus récente |
| Object Storage - Infrequent Access | Compatibilité S3 | Disponibilité générale | Génération la plus récente |
| Cold Archive | Compatibilité S3 | Disponibilité générale | Génération la plus récente |
| SWIFT Standard Object Storage | OpenStack SWIFT | Pris en charge | Solution établie, *legacy* |
| Cloud Archive - API SWIFT | OpenStack SWIFT | Pris en charge | Solution établie, *legacy* |

La liste de tous les points de terminaison API est disponible [ici](/pages/storage_and_backup/object_storage/s3_location).

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
