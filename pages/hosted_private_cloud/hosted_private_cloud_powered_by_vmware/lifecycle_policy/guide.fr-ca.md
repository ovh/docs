---
title: "Cycle de vie de la solution VMware on OVHcloud"
excerpt: "VMware on OVHcloud"
updated: 2024-08-09
---

> [!warning]
>
> Cette page est uniquement à des fins d'information générale et OVHcloud ne garantit pas que les informations sont complètes ou à jour. Les contrats régissant ce produit (notamment les conditions générales et spécifiques d'utilisation, consultables dans le compte client) et les communications adressées par OVHcloud aux clients prévalent sur toute information affichée sur cette page.
>

## Objectif

**Cette page donne un aperçu de la politique de cycle de vie des services VMware on OVHcloud.**

Le service Hosted Private Cloud VMware on OVHcloud propose une infrastructure dédiée basée sur les technologies VMware SDDC ainsi que sur les technologies d'autres partenaires (Veeam, Zerto...).

OVHcloud a une politique de cycle de vie du service afin de prendre en compte plusieurs facteurs, tels que :

* le cycle de vie des composants logiciels intégrés, tel que déterminé par leurs éditeurs (VMware, Veeam, Zerto, etc.) ;
* le cycle de vie des composants matériels ;
* la compatibilité entre composants matériels et/ou logiciels ;
* les autres facteurs affectant la qualité du service.

Cette politique de cycle de vie est fournie pour aider les clients à comprendre les raisons sous-jacentes des changements de version ou de gamme, à évaluer l'impact de chaque phase du cycle de vie sur le service et à préparer la transition vers une nouvelle version ou gamme.

### Gamme commerciale concernée

**Hosted Private Cloud VMware on OVHcloud** :

- DC2011 et DC2013 (AMD Opteron, AMD Bulldozer).
- DC2014 & DC2016 (AMD PileDriver).
- SDDC2014 et SDDC2016 (Intel Ivy Bridge, Intel Haswell).
- SDDC2018 (Intel Broadwell, Intel Haswell).
- Essentials (Intel Broadwell).
- Premier (Intel Xeon Gold).

## Chronologie du cycle de vie et définitions

### Définitions

#### End of Sales

Il s'agit de la date à laquelle les ventes d'un nouveau service pour une gamme ou une version commerciale sont arrêtées. Passé cette date, les clients ne pourront plus démarrer un service sur la gamme ou la version commerciale abandonnée.

Une fois qu'une gamme commerciale spécifique est déclarée en *End of Sales*, le client pourra toujours utiliser et développer des instances existantes du service et ajouter des serveurs hôtes individuels supplémentaires. Les packs de cette gamme commerciale précédente ou de toute autre gamme commerciale antérieure ne seront plus disponibles pour commander de nouvelles instances du service. Les packs seront commercialisés uniquement pour la nouvelle gamme commerciale lancée sur le marché.

Les *End of Sales* sont généralement annoncées avec un préavis minimum de trente (30) jours.

Une gamme ou une version commerciale atteindra généralement sa fin de commercialisation trois (3) ans après le début de la phase de disponibilité générale.

#### End of Growth

Il s'agit de la date à laquelle la croissance d'une gamme ou d'une version commerciale est interrompue. Passé cette date, les clients ne pourront plus commander la gamme ou la version commerciale abandonnée.

Les *End of Growth* sont généralement annoncées avec un préavis minimum de trente (30) jours.

Une gamme ou une version commerciale atteindra généralement le niveau *End of Growth* cinq (5) ans après le début de la phase de disponibilité générale.

#### End of Life

Il s'agit de la date à laquelle une gamme ou une version commerciale est arrêtée.

*End of Life* peut impliquer l'inapplicabilité des SLA, l'absence de services d'assistance et l'absence de pièces de rechange.

Suite à la déclaration de *End of Life*, les serveurs concernés seront définitivement arrêtés. OVHcloud peut proposer un délai de grâce de quelques mois pour permettre aux derniers clients utilisant des serveurs de cette gamme de migrer vers des gammes plus récentes.

Les clients doivent anticiper le changement de gamme en testant à l'avance et en s'assurant que leurs configurations et leurs logiciels sont compatibles avec la gamme vers laquelle ils migrent.

### Chronologie

![Cycle de vie typique](images/01_lifecycle_pcc.png){.thumbnail}

### Résumé

Le tableau suivant présente un résumé des différentes phases du cycle de vie du service. L'impact pour chaque gamme commerciale peut différer.

|                    Phases                     | Disponibilité générale | Assistance générale | Période de grâce / Déclassement |
|:---------------------------------------------:|:----------------------:|:-------------------:|:-------------------------------:|
|    Ventes (démarrer de nouveaux services)     |           X            |                     |                                 |
|        Croissance (services existants)        |           X            |          X          |                                 |
| Mises à jour et mises à niveau de maintenance |           X            |          X          |                                 |
|                  Assistance                   |           X            |          X          |                                 |
|                      SLA                      |           X            |          X          |                                 |
|              Corrections de bugs              |           X            |          X          |                                 |
|  Assistance matérielle (pièces de rechange)   |           X            |          X          |                                 |
|            Correctifs de sécurité             |           X            |          X          |                X                |
|             Base de connaissances             |           X            |          X          |                X                |

## Statut de la gamme commerciale OVHcloud

### Hôtes (calcul)

|                   Commercial Range                    | Disponibilité générale | End of Sales | End of Growth | End of Life |
|:-----------------------------------------------------:|:----------------------:|:------------:|:-------------:|:-----------:|
|                 DC2011 (AMD Opteron)                  |          2011          |  28/02/2015  |  28/02/2022   | 30/09/2022  |
|                DC2013 (AMD Bulldozer)                 |          2013          |  28/02/2015  |  28/02/2022   | 30/09/2022  |
|                DC2014 (AMD PileDriver)                |          2014          |  31/08/2017  |  28/02/2022   | 30/09/2022  |
|                DC2016 (AMD PileDriver)                |          2016          |  30/11/2018  |  28/02/2022   | 30/09/2022  |
| SDDC2014 & SDDC2016 (Intel Ivy Bridge, Intel Haswell) |          2016          |  30/04/2017  |  30/03/2026   | 31/07/2026  |
|              SDDC2018 (Intel Broadwell)               |          2018          |  30/11/2018  |  30/03/2026   | 31/07/2026  |
|             Essentials (Intel Broadwell)              |          2020          |  30/09/2025  |  30/03/2026   | 31/07/2026  |
|               Premier (Intel Xeon Gold)               |          2020          |              |               |             |

## Logiciels intégrés

### Cycle de vie VMware

Pour connaître la politique de cycle de vie des produits VMware, merci de vous référer à la publication de l'éditeur accessible à l'url suivante :

[VMware Lifecycle](https://lifecycle.vmware.com/#/)

#### NSX Datacenter for vSphere

Vous pouvez connaître votre version de NSX-v dans la section « Networking and security » de vSphere, puis dans l'onglet « about NSX ».<br>
Si la version est antérieure à 6.4.12, nous vous invitons à contacter nos équipes du support afin de procéder à la mise à jour de ce composant.

VMware a étendu le support de NSX Datacenter for vSphere sur les infrastructures OVHcloud jusqu'au 31/07/2024. Vous devrez migrer depuis NSX Datacenter for vSphere vers NSX (NSX-T) avant cette date (31/07/2024).

### Cycle de vie Veeam Backup & Replication

Pour connaître la politique de cycle de vie des produits Veeam, merci de vous référer aux publications de l'éditeur accessibles aux URL suivantes :

- [Veeam Version Release](https://www.veeam.com/releasestatus_rn.pdf)

- [Veeam Lifecycle](https://www.veeam.com/product-lifecycle.html)

### Cycle de vie Zerto

Pour connaître la politique de cycle de vie des produits Zerto, merci de vous référer à la publication de l'éditeur accessible à l'URL suivante :

- [Zerto Virtual Replication Product Version Lifecycle Matrix](https://help.zerto.com/bundle/Lifecycle.Matrix.HTML/page/Content/Lifecycle_Matrix/Lifecycle_Matrix.htm#zerto_virtual_replication_product_version_lifecycle_matrix_r_893035264_1010900)

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
