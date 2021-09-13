---
title: Migrer d'un serveur dédié vers un autre
slug: migrer-un-serveur-dedie-vers-un-autre
excerpt : Découvrez comment migrer les données d'un serveur dédié vers un autre
section: Premiers pas
order: 5
---

**Dernière mise à jour le 13/09/2021**

## Objectif

Les besoins évoluant constamment et les gammes OVH évoluant sans cesse, il est parfois nécessaire de changer de serveur, et donc, de migrer ses données.

**Ce guide a pour but de centraliser les étapes afin d'effectuer la migration des données d'un serveur à un autre.**

> [!warning]
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d’assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Posséder deux serveurs dédiés (l'ancien et le nouveau) avec l'OS installé et accessible en mode administrateur.

- Des compétences en administration système.

## En pratique

> [!warning]
> Attention, certaines options mentionnées dans ce guide peuvent ne pas être disponibles sur votre gamme de serveur où se trouver à un autre emplacement dans votre espace client (Kimsufi, SoYouStart).
>

### Préparer son environnement

La première étape une fois le nouveau serveur livré sur votre compte, sera de créer un environnement (OS, logiciels, sécurisation...) à l'identique du précédent, ou du moins autant que possible.

Dans le cadre de changement de version d'OS ou de logiciel, il faudra s'assurer que les emplacements de fichiers restent les mêmes, ainsi que de la compatibilité des données entre les versions.

### Migrer les données

La migration des données consiste généralement à copier les fichiers d'un serveur à un autre, pour cela, quelques solutions existent : 

1. La plus simple étant d'utiliser un logiciel adapté tel que [SFTP](https://docs.ovh.com/fr/dedicated/deposer-et-recuperer-donnees-via-sftp/).

2. L'autre option est de [Synchroniser](https://docs.ovh.com/fr/dedicated/copier-donnees-serveur-rsync/) les deux serveurs entres-eux. 

### Utiliser le backup storage (disponible uniquement sur OVHcloud et Soyoustart)

L'option Backup Storage vous permet de stocker des données sur un service externalisé à votre serveur. De base, il est lié uniquement au service sur lequel vous l'avez commandé : [Backup Storage](https://www.ovhcloud.com/fr/bare-metal/backup-storage/).

> [!warning]
> Le Backup storage est accessible uniquement depuis les serveurs OVHcloud et les IP localisées dans la même zone. Par exemple, si un serveur situé dans le centre de données SBG dispose d'un Backup Storage, les serveurs situés dans les centres de données GRA ou RBX peuvent y accéder. Cepedant, les serveurs situés dans les centres de données BHS ou WAW n’y auront pas accès.
>

Vous pouvez autoriser l'accès à ce stockage depuis votre nouveau serveur, ainsi, vous disposerez d'une passerelle permettant le transfert de vos données. Référez-vous à notre guide [utiliser backup storage sur un serveur dédié](https://docs.ovh.com/fr/dedicated/services-backup-storage/){.external} pour plus d'informations.

### Migrer son IP failover (disponible uniquement sur OVHcloud et Soyoustart)

> [!warning]
> L'IP principale d'un serveur ne peut être migré et sera perdue dans le processus.
>
> La migration d'une IP failover entre deux comptes de branches différentes n'est possible que d'un compte SYS vers OVH, il n'est pas possible d'effectuer la migration en sense inverse.
>

Il est fortement conseillé d'utiliser des IP failovers si la réputation de vos IPs est importante afin de pouvoir garder celles-ci même en cas de migration.

Une fois que vous en disposerez, il vous suffira de déplacer celles-ci vers le nouveau serveur : [Déplacer une IP Fail Over](https://docs.ovh.com/fr/dedicated/ip-fo-move/).


> [!alert]
> La suppression du service principal auquel une option a été commandé (Backup Storage, IP failover) entraine la suppression définitive de ces options.
> 
>Il est donc nécessaire d'effectuer toutes les manipulation avant de supprimer le service.
> 

Dès que les données sont disponible sur le nouveau serveur, Il sera peut être nécessaire de modifier votre configuration DNS dans le cas où l'IP principal été utilisé par exemple. Pour plus d'informations, consulter le lien suivant : [Domaines et Dns](https://docs.ovh.com/fr/domains/).

## Aller plus loin
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.