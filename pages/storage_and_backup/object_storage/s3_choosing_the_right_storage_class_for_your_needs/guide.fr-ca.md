---
title: Object Storage - Choisir une classe de stockage adaptée à vos besoins
excerpt: Découvrez les différentes classes de stockage Object Storage OVHcloud et choisissez celle qui convient le mieux à vos besoins
updated: 2025-11-19
---

Le stockage objet « Object Storage » est une famille d’offres de stockage proposant des espaces de stockage performants, scalables et sécurisés.

Les offres de stockage objet permettent de déposer à travers un point d’accès public appelé « endpoint » des fichiers statiques (vidéos, images, fichiers web…) dans un espace illimité, pour les exploiter depuis une application ou pour les rendre accessibles sur le web. Ces espaces de stockage sont accessibles via une interface d’API .

Nous proposons deux solutions de stockage d'objets : notre **dernière génération d'Object Storage - compatible S3<sup>1</sup>**, qui est disponible globalement, et **la solution Object Storage SWIFT API *legacy***, qui reste une option prise en charge pour les utilisateurs. Cependant, nous recommandons d'utiliser la solution Object Storage - compatible S3 pour toute nouvelle conception d'application, car celle-ci bénéficie des dernières fonctionnalités et innovations.

## Les classes Object Storage compatibles S3

### Object Storage - Standard

La classe de stockage Standard offre un service de stockage objet scalable, compatible avec la grande majorité des cas d'usages, adapté à tous types de volumétrie. L’offre s’appuie sur un stockage sur disques HDD au sein d'une architecture résiliente dans un datacentre. L’offre est accessible depuis une API S3.

Cette offre est adaptée aux cas d'usages suivants : media / content storage & delivery, datalake, website, backup, logs et métriques d'applications.

### Object Storage - High Performance

La classe de stockage High Performance est un espace de stockage objet hautement performant, pour les applicatifs ayant de gros besoins en bande passante et nécessitant des accès à la donnée en lecture et en écriture extrêmement rapides et intensifs. L’offre s’appuie sur un stockage sur des disques performants de type SSD NVMe au sein d'une architecture résiliente dans un datacentre.

Cette offre est adaptée aux cas d'usages suivants : AI & Analytics, Datalake, High power Computing Multimedia / Content Platform.

### Object Storage - Infrequent Access ou *accès peu fréquent*

La classe de stockage Infrequent Access est conçue pour les données qui sont rarement consultées, également appelées « données froides », mais nécessitant un accès rapide. Elle offre des performances similaires (TTFB en millisecondes, faible latence) et une disponibilité comparable à la classe Standard, à un coût inférieur par Gio-heure consommé mais avec un coût de récupération par Gio.

Cette offre est adaptée aux cas d'usages suivants : stockage long durée, sauvegardes, reprise après sinistre.

### Object Storage - Classe Cold Archive (compatible S3)

La classe de stockage Cold Archive est une classe de stockage d'archives. Existant également en tant que [produit dédié chez OVHcloud](/pages/storage_and_backup/object_storage/cold_archive_getting_started) (granularité au niveau du bucket), Cold Archive est désormais disponible en tant que classe à part entière pour un bucket dit « general-purpose ». La classe Cold Archive est conçue pour le stockage de données à long terme et l'archivage de données avec un coût très bas par GiB-heure et un coût additionnel de restauration par GiB restauré. En effet, les données dans la classe Cold Archive ne sont pas disponibles en temps réel et doivent être restaurées avant d'être disponibles.

### Tableau comparatif

<table>
    <tr>
        <td><strong>Classe de stockage<strong></td>
        <td><strong>Cas d'usages<strong></td>
        <td><strong>Performance (TTFB)<strong></td>
        <td><strong>Régions prises en charge<strong></td>
        <td><strong>SLA de disponibilité<strong></td>
        <td><strong>Durée de stockage minimale<strong></td>
        <td><strong>Frais de récupération<strong></td>
        <td><strong>Granularité<strong></td>
    </tr>
    <tr>
        <td><strong>High Performance<strong></td>
        <td>AI &amp; Analytics, Datalake, High power Computing Multimedia / Content Platform</td>
        <td>millisecondes</td>
        <td>1-AZ</td>
        <td>régions 1-AZ : 99,9%</td>
        <td>Non</td>
        <td>Non</td>
        <td>À l'objet, prise en charge de la gestion du cycle de vie</td>
    </tr>
    <tr>
        <td><strong>Standard<strong></td>
        <td>Media / content storage & delivery, datalake, website, backup, logs et métriques d'application</td>
        <td>millisecondes</td>
        <td>1-AZ et 3-AZ</td>
        <td>régions 1-AZ : 99,9% - régions 3-AZ : 99,99%</td>
        <td>Non</td>
        <td>Non</td>
        <td>À l'objet, prise en charge de la gestion du cycle de vie</td>
    </tr>
    <tr>
        <td><strong>Infrequent Access<strong></td>
        <td>Stockage de longue durée, sauvegardes, reprise après sinistre</td>
        <td>millisecondes</td>
        <td>1-AZ et 3-AZ</td>
        <td>régions 1-AZ : 99,9% - régions 3-AZ : 99,99%</td>
        <td>30 jours</td>
        <td>Oui</td>
        <td>À l'objet, prise en charge de la gestion du cycle de vie</td>
    </tr>
    <tr>
        <td><strong>Cold Archive*<strong></td>
        <td>Stockage à très long terme, sauvegardes, reprise après sinistre</td>
        <td>heures</td>
        <td>Paris, région 3-AZ</td>
        <td>99,9%</td>
        <td>180 jours</td>
        <td>Oui</td>
        <td>À l'objet, prise en charge de la gestion du cycle de vie</td>
    </tr>
   </table>

Plus de détails sur les régions disponibles [ici](/pages/storage_and_backup/object_storage/s3_location).

> [!primary]
>
> Avant novembre 2025, Cold Archive n'existait qu'avec une granularité au niveau du bucket, en tant que [produit dédié chez OVHcloud](/pages/storage_and_backup/object_storage/cold_archive_getting_started). Le produit a été mis à jour pour permettre une granularité au niveau de l'objet et Cold Archive est maintenant considéré comme une classe Object Storage compatible avec la [**fonctionnalité de gestion du cycle de vie**](/pages/storage_and_backup/object_storage/s3_bucket_lifecycle).

### Détails supplémentaires

#### Durée de stockage minimale

Il s'agit de la **durée minimum pendant laquelle un objet doit être stocké** dans une classe de stockage concernée. En cas de suppression anticipée, via une requête *delete-object*, des frais proportionnels aux jours restants sont appliqués. Soyez vigileants avec des buckets non versionnés : si l'objet est écrasé, la nouvelle écriture sera considérée comme une suppression de la version actuelle de l'objet et les frais mentionnés seront également appliqués. 

Par exemple, pour la classe *Infrequent Access*, la durée de stockage minimale est de 730 heures (30 jours). Si un objet est supprimé pendant cette période, des frais supplémentaires seront appliqués et calculés à l'aide de la formule suivante : [730h - nombre d'heures de stockage de l'objet] x prix par heure de la classe de stockage.

#### Frais de récupération/d'extraction des données

Il s'agit de frais appliqués lorsque vous récupérez ou accédez à des données stockées dans une classe de stockage concernée. Ces frais de récupération sont calculés en fonction de la quantité de données récupérées (par Gio récupéré). 

Pour la classe *Infrequent Access*, seules les requêtes de type *get-object* sont considérées comme des frais de récupération. 

Pour la classe *Cold Archive*, seules les requêtes de type *restore* sont considérées comme des frais de récupération.

#### Prise en charge de la gestion du cycle de vie

Il s'agit de la capacité à gérer automatiquement le cycle de vie de vos objets, par exemple en les faisant passer d'une classe de stockage à une autre, selon des règles prédéfinies. Cela vous permet d'optimiser les coûts de stockage et de simplifier la gestion des données. Une granularité au niveau de l'objet est requise car elle vous permet de gérer ces règles au niveau d'un objet individuel. **Les requêtes associées à la fonctionnalité de lifecycle sont inclues et ne sont donc pas facturées**. 

Plus de détails sur la gestion du cycle de vie [ici](/pages/storage_and_backup/object_storage/s3_bucket_lifecycle).

#### Considérations pour la classe Cold Archive (granularité à l'objet)

Lorsque vous utilisez la classe Cold Archive dans un bucket Object Storage dit « general-purpose », **les objets archivés ne sont pas disponibles en temps réel**. L'utilisateur est invité à restaurer l'objet au préalable via une demande de **restauration** et ensuite, après un certain temps (de quelques minutes à plusieurs heures), l'objet est disponible en lecture et au téléchargement pendant une durée définie par l'utilisateur lors de la demande et est facturé à l'avance au tarif de la classe Standard. Cependant, sa classe restera Cold Archive mais sera disponible pour les requêtes GET ou d'autres actions. En résumé, pour chaque objet restauré, des frais de restauration uniques par GiB de données, ainsi que le coût de stockage au tarif Standard de l'objet, sont facturés.

Pour les tarifs officiels, consultez notre page « [Tarifs - Object Storage](https://www.ovhcloud.com/fr/public-cloud/prices/#storage) ».

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
