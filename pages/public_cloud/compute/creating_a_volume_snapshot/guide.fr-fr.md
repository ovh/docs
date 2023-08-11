---
title: "Créer un snapshot d'un volume"
excerpt: 'Découvrez comment créer un snapshot d’un disque additionel Public Cloud'
updated: 2023-04-21
---

**Dernière mise à jour le 21/04/2023**

## Objectif

Un **Volume Snapshot** est un point de récupération stocké dans le même cluster de stockage que le volume d'origine. Les opérations de création et de restauration sont rapides mais, en cas d'incident sur le cluster, le volume et le Volume Snapshot peuvent être indisponibles.<br>
La création d'un Volume Snapshot ne nécessite pas que le volume soit détaché de l'instance.

Cette fonctionnalité ne doit pas être confondue avec un **Volume Backup** qui est une image créée à partir de votre volume et stockée dans le cluster Object Storage de la localisation du volume d'origine.
Le niveau de résilience du **Volume Backup** est idéal et vous permettra de réagir rapidement à tout incident sur votre volume, en créant un autre volume à partir de la sauvegarde.<br>
La création d'une sauvegarde de volume nécessite que le volume soit détaché de l'instance. Pour plus d’informations sur cette option, nous vous invitons à consulter ce [guide](/pages/public_cloud/compute/volume-backup).

Créer un snapshot d’un volume additionnel correspond généralement à deux objectifs :

- effectuer des sauvegardes en quelques clics et les conserver le temps nécessaire ;
- utiliser le snapshot comme modèle pour des volumes identiques.

**Ce guide vous explique comment créer un snapshot d'un volume depuis votre espace client OVHcloud.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Un volume [Block storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) créé dans votre projet [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/)

## En pratique

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.
<br>Ouvrez ensuite le menu `Block Storage`{.action} dans la barre de navigation à gauche sous **Storage**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

A droite du volume concerné, cliquez sur `...`{.action} puis sur `Créer un snapshot`{.action} (il n'est pas nécessaire de détacher d'abord le volume de son instance). Cependant, si vous souhaitez détacher votre volume, nous vous invitons à consulter [cette section](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#sous-linux) du guide correspondant pour Linux et  [cette section](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#sous-windows) pour Windows.

![Volume Snapshot](images/volume_snapshot02.png){.thumbnail}

Dans la fenêtre qui apparaît, vous pouvez donner un nom différent au snapshot. Prenez connaissance des informations tarifaires, puis cliquez sur `Créer un snapshot`{.action}.

Le temps de création du snapshot dépend de la quantité de données présentes sur le volume, de l'utilisation des ressources de l'instance au moment du snapshot et d'autres facteurs spécifiques à l'hôte.

Nous vous recommandons donc d'effectuer vos snapshots en dehors de vos heures de production.

Voici quelques autres bonnes pratiques :

- évitez de créer des snapshots aux heures de pointe (entre 04h00 et 22h00, heure de Paris) ;
- installez l'agent qemu-guest si ce n'est pas fait ou essayez de le désactiver si nécessaire ;
- essayez de ne pas trop « solliciter » le serveur pendant la phase de création du snapshot (limitation des I/O, consommation de RAM, etc.).

Un snapshot de volume étant un clone de l'ensemble du disque, il aura la taille maximale du volume d'origine, quelle que soit l'allocation réelle d'espace disque.

![Volume Snapshot](images/volume_snapshot03.png){.thumbnail}

Ouvrez la section `Volume Snapshot`{.action} dans la barre de navigation à gauche. Une fois le snapshot créé, il sera ajouté à ce tableau.

Cliquez sur le bouton `...`{.action} pour `Supprimer`{.action} un snapshot ou `Créer un volume`{.action} à partir du snapshot correspondant. Retrouvez plus d’informations sur [ce guide](/pages/public_cloud/compute/create-volume-from-snapshot).

## Aller plus loin

[Créer un Volume Backup](/pages/public_cloud/compute/volume-backup)

[Créer un volume à partir d’une sauvegarde](/pages/public_cloud/compute/create-volume-from-snapshot)

[Créer et configurer un disque supplementaire sur une instance](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Augmenter la taille d’un disque supplémentaire](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.