---
title: "Migrer les données d'un serveur dédié vers un autre"
slug: migrer-un-serveur-dedie-vers-un-autre
excerpt: "Découvrez comment migrer les données d'un serveur dédié vers un autre"
section: Premiers pas
order: 5
---

**Dernière mise à jour le 16/09/2021**

## Objectif

Vos besoins et les gammes OVHcloud évoluant constamment, il est parfois nécessaire de changer de serveur et donc de migrer vos données.

**Ce guide a pour but de centraliser les étapes afin d'effectuer la migration des données d'un serveur à un autre.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d’assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Posséder deux serveurs dédiés (l'ancien et le nouveau) avec l'OS installé et accessible en mode administrateur.
- Des compétences en administration système.

## En pratique

> [!warning]
>
> Attention, certaines options mentionnées dans ce guide peuvent ne pas être disponibles sur votre gamme de serveur ou se trouver à un autre emplacement dans votre espace client (Kimsufi, SoYouStart).
>

### Préparer son environnement

Une fois le nouveau serveur livré sur votre compte, la première étape sera de créer un environnement (OS, logiciels, sécurisation...) identique au précédent environnement, ou du moins autant que possible.

Si un changement de version d'OS ou de logiciel est nécessaire, assurez-vous que les emplacements de fichiers restent les mêmes, ainsi que la compatibilité des données entre les versions.

### Migrer les données

La migration des données consiste généralement à copier les fichiers d'un serveur à un autre. Pour cela, plusieurs solutions existent :

- La plus simple est d'utiliser un logiciel adapté tel que [SFTP](https://docs.ovh.com/ca/fr/dedicated/deposer-et-recuperer-donnees-via-sftp/).
- L'autre option est de [synchroniser les deux serveurs entres-eux][(https://docs.ovh.com/fr/dedicated/copier-donnees-serveur-rsync/](https://docs.ovh.com/ca/fr/dedicated/copier-donnees-serveur-rsync/)).

### Utiliser le backup storage (disponible uniquement sur OVHcloud et So you Start)

L'option [Backup Storage](https://www.ovhcloud.com/fr-ca/bare-metal/backup-storage/) vous permet de stocker des données sur un service externalisé à votre serveur. De base, il est lié uniquement au service sur lequel vous l'avez commandé.

> [!warning]
>
> Le Backup storage est accessible uniquement depuis les serveurs OVHcloud et les IP localisées dans la même zone.
>
> Par exemple, si un serveur situé dans le centre de données SBG dispose d'un Backup Storage, les serveurs situés dans les centres de données GRA ou RBX peuvent y accéder. Cependant, les serveurs situés dans les centres de données BHS ou WAW n’y auront pas accès.
>

Vous pouvez autoriser l'accès à ce stockage depuis votre nouveau serveur. Ainsi, vous disposerez d'une passerelle permettant le transfert de vos données.

Consultez notre guide « [utiliser backup storage sur un serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/backup-storage/){.external} » pour plus d'informations.

### Migrer son IP fail-over (disponible uniquement sur OVHcloud et So you Start)

> [!warning]
>
> - L'adresse IP principale d'un serveur ne peut être migrée vers un autre serveur.
>
> - La migration d'une IP failover est possible depuis un compte So you Start vers un compte OVHcloud. Cette opération est facturée au même titre que la création d'une nouvelle IP.
>
> - Il n'est pas possible d'effectuer la migration d'une IP depuis un compte OVHcloud vers un compte So you Start.
>

Si la réputation de vos adresses IP est importante, il est fortement conseillé d'utiliser des [IP fail-over](https://www.ovhcloud.com/fr-ca/bare-metal/ip/), celles-ci pouvant être conservées en cas de migration.

Une fois ces IP en votre possession, il vous suffira de déplacer celles-ci vers le nouveau serveur.<br>
À cet effet, consultez notre guide dédié : [Déplacer une IP Fail Over](https://docs.ovh.com/ca/fr/dedicated/ip-fo-move/).

> [!alert]
>
> La suppression du serveur d'origine, sur lequel une ou plusieurs options ont été commandées (Backup Storage, IP fail-over), entraine la suppression définitive de ces options.
>
> Il est donc nécessaire d'effectuer toutes les manipulations avant de supprimer le service.
>

Dès que les données sont disponible sur le nouveau serveur, il sera peut être nécessaire de modifier votre configuration DNS, par exemple dans le cas où l'adresse IP principale était utilisée.

Pour plus d'informations, consultez notre documentation sur les [domaines et DNS](https://docs.ovh.com/ca/fr/domains/).

## Aller plus loin

Pour bénéficier d'une assistance à la migration de votre serveur, nous vous proposons de contacter [notre réseau de partenaires](https://partner.ovhcloud.com/fr-ca/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
