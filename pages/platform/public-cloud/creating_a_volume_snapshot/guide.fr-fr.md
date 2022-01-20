---
title: Création d'un Volume Snapshot
slug: creating-volume-snapshot
excerpt: 'Découvrez comment créer un snapshot d’un disque supplémentaire Public Cloud'
section: Stockage
order: 2
---

**Dernière mise à jour le 18/01/2022**

## Objectif

Un snapshot d’un volume additionnel a deux buts généraux :

- Vous pouvez effectuer des sauvegardes en quelques clics et les conserver le temps nécessaire.
- Vous pouvez utiliser le snapshot comme modèle pour des volumes identiques.

**Ce guide vous explique comment créer un instantané de volume dans votre espace client.**

## Prérequis

- Être connecté votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Un volume [Block storage](../creer-et-configurer-un-disque-supplementaire-sur-une-instance/) créé dans votre projet [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) ;

## En pratique

Connectez-vous à votre espace client [OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Ouvrez ensuite `Block Storage`{.action} dans la barre de navigation à gauche sous **Storage**.

![Volume Snapshot](images/volume_snapshot01.png){.thumbnail}

Sur la ligne du volume concernée, cliquez sur `...`{.action} puis sélectionnez `Créer un snapshot`{.action}. (Il n'est pas nécessaire de détacher d'abord le volume de son instance.)

![Volume Snapshot](images/volume_snapshot02.png){.thumbnail}

Dans la fenêtre qui apparaît, vous pouvez indiquer un nom différent pour le snapshot. Prenez connaissance des informations tarifaires, puis cliquez sur `Créer un snapshot`{.action}.

Le temps de création du snapshot dépend de la quantité de données présentes sur le volume.

Un Volume Snapshot étant un clone de l'ensemble du disque, il aura la taille maximale du volume d'origine, quelle que soit l'allocation réelle d'espace disque.

![Volume Snapshot](images/volume_snapshot03.png){.thumbnail}

Ouvrez la section `Volume Snapshot`{.action} dans la barre de navigation à gauche. Une fois le snapshot créé, il sera ajouté à ce tableau.

Cliquez sur le bouton `...`{.action} pour `Supprimer`{.action} un snapshot ou `Créer un volume`{.action} à partir du snapshot correspondant. Plus d’informations sur [ce guide](../creer-volume-depuis-sauvegarde/).


## Aller plus loin

[Créer un volume à partir d’une sauvegarde](../creer-volume-depuis-sauvegarde/)

[Créer et configurer un disque supplementaire sur une instance](../creer-et-configurer-un-disque-supplementaire-sur-une-instance/)

[Augmenter la taille d’un disque supplémentaire](../augmenter-la-taille-dun-disque-supplementaire/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.