---
title: Créer une sauvegarde de votre Volume
slug: volume-backup
excerpt: Découvrez comment créer une sauvegarde de votre volume Block Storage depuis votre espace client.
section: Storage
order: 
---

**Dernière mise à jour le 13/03/2023**

## Objectif

Si vous accordez de l'importance aux données stockées dans vos volumes Block Storage, il convient d'en organiser la sauvegarde afin de limiter l'impact potentiel de tout problème sur ces données, qu'il s'agisse d'une erreur humaine ou d'un incident au niveau du cluster.

Un Volume Snapshot est un point de récupération stocké dans le même cluster de stockage que le volume d'origine. Les opérations de création et de restauration sont rapides, mais en cas d'incident sur le cluster, le volume et Volume Snapshot peuvent être indisponibles.
La création d'un Volume Snapshot ne nécessite pas que le volume soit détaché de l'instance.

Un Volume Backup est une image créée à partir de votre volume, cette dernière est stockée dans le cluster Object Storage de la localisation du volume d'origine.
Ce niveau de résilience est idéal et vous permettra de réagir rapidement à tout incident sur votre volume, en créant un autre volume à partir de la sauvegarde.
La création d'une sauvegarde de volume nécessite que le volume soit détaché de l'instance.

Lz Volume Snapshot et le Volume Backup vous permettent de :

- Créer des sauvegardes de votre volume en quelques clics et les conserver aussi longtemps que nécessaire
- Utiliser les sauvegardes pour restaurer l'état de votre volume
- Utiliser les sauvegardes comme modèle pour créer des volumes identiques

**Ce guide vous explique comment créer une sauvegarde de votre volume Block Storage depuis votre espace client OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Un volume [Block storage](../creer-et-configurer-un-disque-supplementaire-sur-une-instance/) créé dans votre projet [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/)

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.
Ouvrez ensuite le menu `Block Storage`{.action} dans la barre de navigation à gauche sous **Storage**.

==> Insert listing Page Block Storage Screenshot

A droite du volume concerné, cliquez sur `...`{.action} puis sur `Créer une sauvegarde`{.action} (il n'est pas nécessaire de détacher d'abord le volume de son instance). Cependant, si vous désirez détacher votre volume de son instance, consultez cette [section](https://docs.ovh.com/fr/public-cloud/creer-et-configurer-un-disque-supplementaire-sur-une-instance/#sous-linux) du guide correspondant pout Linux, et cette [section](https://docs.ovh.com/fr/public-cloud/creer-et-configurer-un-disque-supplementaire-sur-une-instance/#sous-windows) pour Windows.

==> Insert Volume Backup Creation workflow Screenshot

Si vous venez de la section Block Storage, le volume concerné est indiqué. Sinon, sélectionnez le volume que vous souhaitez sauvegarder.
Sélectionnez ensuite le type de sauvegarde que vous souhaitez créer : Volume Snapshot ou Valume Backup.
En choisissant Volume Snapshot, vous aurez la possibilité de modifier le nom du Volume Snapshot à créer avant de valider `Créer la sauvegarde`{.action}.
En choisissant Volume Backup, il vous sera demandé de détacher votre volume de l'instance afin de pouvoir continuer. Vous pourrez alors modifier le nom du Volume Snapshot à créer avant de valider `Créer la sauvegarde`{.action}.

Le temps de création de la sauvegarde, qu'il s'agisse d'un Volume Snapshot ou d'un Volume Backup, peut prendre plusieurs heures, en fonction de la quantité de données présentes sur le volume, ainsi que de l'utilisation des ressources de l'instance pour le Volume Snapshot, et enfin d'autres facteurs spécifiques au host.
Nous vous recommandons d'effectuer vos sauvegardes de volume en dehors de vos heures de production.

Voici quelques autres bonnes pratiques :

    évitez de créer des snapshots aux heures de pointe (entre 04h00 et 22h00, heure de Paris) ;
    installez l’agent qemu-guest si ce n’est pas fait ou essayez de le désactiver si nécessaire ;
    essayez de ne pas trop « solliciter » le serveur pendant la phase de création du snapshot (limitation des I/O, consommation de RAM, etc.).


Other best practices include:

- Évitez de créer des snapshots aux heures de pointe (entre 04h00 et 22h00, heure de Paris).
- Vérifiez régulièrement que vous êtes en mesure de récupérer vos données à partir de votre instantané de volume ou de votre sauvegarde de volume..
- Installez l’agent qemu-guest si ce n’est pas fait ou essayez de le désactiver si nécessaire.
- Même si ce n'est pas obligatoire, il est préférable de détacher votre volume lors de la création d'un Volume Snapshot.

Un Volume Snapshot ou un Volume Backup étant un clone de l’ensemble du disque, il aura la taille maximale du volume d’origine, quelle que soit l’allocation réelle d’espace disque.
Since a volume snapshot / volume backup is a clone of the entire disk, it will have the maximum size of the original volume, regardless of the actual disk space allocation.

==> Insert listing page Volume Snapshot

Vous trouverez la liste de vos Volume Snapshots dans la section `Volume Snapshot`{.action} dans la barre de navigation à gauche.
Aussitôt que le Volume Snapshot sera créé, il apparaîtra dans cette liste.

==> Insert listing page Volume Backup

Vous trouverez la liste de vos Volume Backups dans la section `Volume Backup`{.action} dans la barre de navigation à gauche.
Dès que la création du Volume Backup aura été demandée, il sera ajouté à la liste.

==

Cliquez sur le bouton `...`{.action} pour `Supprimer`{.action} ou `Créer un volume`{.action} à partir du Volume Snapshot ou Volume Backup correspondant.
Retrouvez plus d’informations sur [ce guide](../creer-volume-depuis-sauvegarde/).

## Aller plus loin

[Créer un volume à partir d’une sauvegarde](../creer-volume-depuis-sauvegarde/)

[Créer et configurer un disque supplementaire sur une instance](../creer-et-configurer-un-disque-supplementaire-sur-une-instance/)

[Augmenter la taille d’un disque supplémentaire](../augmenter-la-taille-dun-disque-supplementaire/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
