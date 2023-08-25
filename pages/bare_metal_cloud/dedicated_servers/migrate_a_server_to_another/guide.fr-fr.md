---
title: "Migrer les données d'un serveur dédié vers un autre"
excerpt: "Découvrez comment migrer les données d'un serveur dédié vers un autre"
updated: 2021-09-16
---


## Objectif

Vos besoins et les gammes OVHcloud évoluant constamment, il est parfois nécessaire de changer de serveur et donc de migrer vos données.

**Ce guide a pour but de centraliser les étapes afin d'effectuer la migration des données d'un serveur à un autre.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d’assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/directory/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
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

- La plus simple est d'utiliser un logiciel adapté tel que [SFTP](/pages/bare_metal_cloud/dedicated_servers/comment-deposer-ou-recuperer-des-donnees-sur-un-serveur-dedie-via-sftp).
- L'autre option est de [synchroniser les deux serveurs entres-eux](/pages/bare_metal_cloud/dedicated_servers/how-to-copy-data-from-one-dedicated-server-to-another-using-rsync).

### Utiliser le backup storage (disponible uniquement sur OVHcloud et So you Start)

L'option [Backup Storage](https://www.ovhcloud.com/fr/bare-metal/backup-storage/) vous permet de stocker des données sur un service externalisé à votre serveur. De base, il est lié uniquement au service sur lequel vous l'avez commandé.

> [!warning]
>
> Le Backup storage est accessible uniquement depuis les serveurs OVHcloud et les IP localisées dans la même zone.
>
> Par exemple, si un serveur situé dans le centre de données SBG dispose d'un Backup Storage, les serveurs situés dans les centres de données GRA ou RBX peuvent y accéder. Cependant, les serveurs situés dans les centres de données BHS ou WAW n’y auront pas accès.
>

Vous pouvez autoriser l'accès à ce stockage depuis votre nouveau serveur. Ainsi, vous disposerez d'une passerelle permettant le transfert de vos données.

Consultez notre guide « [utiliser backup storage sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage){.external} » pour plus d'informations.

### Migrer son Additional IP (disponible uniquement sur OVHcloud et So you Start)

> [!warning]
>
> - L'adresse IP principale d'un serveur ne peut être migrée vers un autre serveur.
>
> - La migration d'une Additional IP est possible depuis un compte So you Start vers un compte OVHcloud. Cette opération est facturée au même titre que la création d'une nouvelle IP.
>
> - Il n'est pas possible d'effectuer la migration d'une IP depuis un compte OVHcloud vers un compte So you Start.
>

Si la réputation de vos adresses IP est importante, il est fortement conseillé d'utiliser des [Additional IP](https://www.ovhcloud.com/fr/bare-metal/ip/), celles-ci pouvant être conservées en cas de migration.

Une fois ces IP en votre possession, il vous suffira de déplacer celles-ci vers le nouveau serveur.<br>
À cet effet, consultez notre guide dédié : [Déplacer une Additional IP](/pages/bare_metal_cloud/dedicated_servers/move-failover-ip).

> [!alert]
>
> La suppression du serveur d'origine, sur lequel une ou plusieurs options ont été commandées (Backup Storage, Additional IP), entraine la suppression définitive de ces options.
>
> Il est donc nécessaire d'effectuer toutes les manipulations avant de supprimer le service.
>

Dès que les données sont disponible sur le nouveau serveur, il sera peut être nécessaire de modifier votre configuration DNS, par exemple dans le cas où l'adresse IP principale était utilisée.

Pour plus d'informations, consultez notre documentation sur les [domaines et DNS](/products/web-cloud-domains-domain-names).

## Aller plus loin

Pour bénéficier d'une assistance à la migration de votre serveur, nous vous proposons de contacter [notre réseau de partenaires](https://partner.ovhcloud.com/fr/directory/).

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
