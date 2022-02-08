---
titre : Cycle de vie du Hosted Private Cloud Powered by VMware
slug : lifecycle-policy
extrait : "Cycle de vie du Hosted Private Cloud Powered by VMware"
Rubrique : FAQ
commande : 3
---

**Dernière mise à jour le 08 février 2022**

> [!warning]
>
> Cette page est uniquement à des fins d'information générale et OVHcloud ne garantit pas que les informations sont complètes ou à jour. Les contrats régissant ce produit (notamment les conditions générales et spécifiques d'utilisation, consultables dans le compte client) et les communications adressées par OVHcloud aux clients prévallent sur toute information affichée sur cette page.
>

## Objectif

**Cette page donne un aperçu de la politique de cycle de vie des services OVHcloud Hosted Private Cloud powered by VMware.**

Le service Hosted Private Cloud d'OVHcloud propose une infrastructure dédiée basée sur les technologies VMware SDDC ainsi que sur les technologies d'autres partenaires (Veeam, Zerto...).

OVHcloud a une politique de cycle de vie du service afin de prendre en compte plusieurs facteurs, tels que :

* le cycle de vie des composants logiciels intégrés tel que déterminé par leurs éditeurs (VMware, Veeam, Zerto, etc.)
* le cycle de vie des composants matériels
* la compatibilité entre composants matériels et/ou logiciels
* les autres facteurs affectant la qualité du service

Cette politique de cycle de vie est fournie pour aider les clients à comprendre les raisons sous-jacentes des changements de version ou de gamme, l'impact de chaque phase du cycle de vie sur le service et à préparer la transition vers une nouvelle version ou gamme.

### Gamme commerciale concernée

Hosted Private Cloud

* DC2011 et DC2013 (AMD Opteron, AMD Bulldozer)
* DC2014 & DC2016 (AMD PileDriver)
* SDDC2014 et SDDC2016 (Intel Ivy Bridge, Intel Haswell)
* SDDC2018 (Intel Broadwell, Intel Haswell)


## Durée du cycle de vie et définitions

### Définitions

#### End of Sales

Il s'agit de la date à laquelle les ventes d'un nouveau service pour une gamme ou une version commerciale sont arrêtées. Passée cette date, les clients ne pourront plus démarrer un service sur la gamme ou la version commerciale abandonnée.

Une fois une gamme commerciale spécifique est déclarée End of Sales, le Client pourra toujours utiliser et développer des instances existantes du Service et ajouter des Serveurs Hôtes individuels supplémentaires. Les Packs de cette gamme commerciale précédente ou de toute autre gamme commerciale antérieure ne seront plus disponibles pour commander de nouvelles instances du Service. Les Packs seront commercialisés uniquement pour la nouvelle gamme commerciale lancée sur le marché.

Les End of Sales sont généralement annoncées avec un préavis minimum de trente (30) jours.

Une gamme ou une version commerciale atteindra généralement sa fin de commercialisation trois (3) ans après le début de la phase de disponibilité générale.

#### End of Growth

Il s'agit de la date à laquelle la croissance d'une gamme ou d'une version commerciale est interrompue. Passée cette date, les clients ne pourront plus commander la gamme ou la version commerciale abandonnée.

Les End of Growth sont généralement annoncées avec un préavis minimum de trente (30) jours.

Une gamme ou une version commerciale atteindra généralement le niveau End of Growth cinq (5) ans après le début de la phase de disponibilité générale.

#### End of Life

Il s'agit de la date à laquelle une gamme ou une version commerciale est arrêtée.

End of Life peut impliquer l'inapplicabilité des SLA, l'absence de services d'assistance et l'absence de pièces de rechange.

Suite à la déclaration de End of Life, les serveurs concernés seront définitivement arrêtés. OVHcloud peut proposer un délai de grâce de quelques mois pour permettre aux derniers clients utilisant des serveurs de cette gamme de migrer vers des gammes plus récentes.

Les clients doivent anticiper le changement de gamme en testant à l'avance et en s'assurant que leurs configurations et leurs logiciels sont compatibles avec la gamme vers laquelle ils migrent.

### Plage de temps

![Cycle de vie typique](images/01_lifecycle_pcc.png){.thumbnail}

### Résumé

Le tableau suivant présente un résumé des différentes phases du cycle de vie du service. L'impact pour chaque gamme commerciale peut différer.

| phases | Disponibilité générale | Assistance générale | Période de grâce / Déclassement |
|:-----:|:-----:|:-----:|:-----:|
| Ventes (démarrer de nouveaux services) | X | | |
| Croissance (services existants) | X | X | |
| Mises à jour et mises à niveau de maintenance | X | X | |
| Assistance | X | X | |
| SLA | X | X | |
| corrections de bogues | X | X | |
| Assistance matérielle (pièces de rechange) | X | X | |
| Correctifs de sécurité | X | X | X |
| Base de connaissances | X | X | X |



## Statut de la gamme commerciale OVHcloud

### Hôtes (calcul)

| Gamme commerciale | Disponibilité générale | End of Sales | End of Growth | End of Life |
|:-----:|:-----:|:-----:|:-----:|:-----:|
| DC2011 (AMD optéron) | 2011 | 28/02/2015 | 28/02/2022 | 31/07/2022 |
| DC2013 (Bouteur AMD) | 2013 | 28/02/2015 | 28/02/2022 | 31/07/2022 |
| DC2014 (piledriver AMD) | 2014 | 31/08/2017 | 28/02/2022 | 31/07/2022 |
| DC2016 (piledriver AMD) | 2016 | 30/11/2018 | 28/02/2022 | 31/07/2022 |
| SDDC2014 et SDDC2016 (Intel Ivy Bridge, Intel Haswell) | 2016 | 30/04/2017
