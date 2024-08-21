---
title: "Créer un volume à partir d'une sauvegarde"
excerpt: "Découvrez comment créer des disques supplémentaires à partir d'une sauvegarde d'un disque supplémentaire"
updated: 2021-04-06
---

## Objectif

Vous pouvez créer des disques supplémentaires pour vos instances Public Cloud depuis la sauvegarde d'un disque supplémentaire.

Cela peut être utile dans les cas suivants :

- Si vous souhaitez restaurer les données du disque supplémentaires.
- Si vous souhaitez disposer d’un espace de stockage hautement disponible et performant avec vos données.
- Si vous souhaitez déplacer vos données vers une autre instance.

**Découvrez comment créer et configurer un disque supplémentaire sur une de vos instances depuis la sauvegarde d'un disque.**

## Prérequis

- Être connecté votre [espace client OVHcloud](/links/manager){.external}.
- Avoir une [instance Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/){.external} dans votre compte OVHcloud.
- Avoir une sauvegarde disque dans la même région OpenStack.
- Avoir accès à votre instance via SSH en tant qu'administrateur (sudo).

## En pratique

### Créer le disque à partir d'une sauvegarde

Connectez-vous à [l'espace client OVHcloud](/links/manager), accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Cliquez ensuite sur `Volume Snapshot`{.action} dans la barre de navigation de gauche sous `Storage`.

À droite de la sauvegarde de votre choix, cliquez sur le bouton `...`{.action} puis sur `Créer un volume`{.action}.

![créer volume](images/volume01.png){.thumbnail}

Définissez alors le nom de ce nouveau disque et sa capacité puis cliquez sur `Créer le volume`{.action}.

![créer volume](images/volume02.png){.thumbnail}

La création du disque peut prendre quelques minutes, suivant la taille de celui-ci.

### Attacher le disque à une instance

Une fois le disque créé, vous pouvez décider de l'attacher à une instance. Pour cela, cliquez sur `Block Storage`{.action} dans la barre de navigation de gauche sous `Storage`.

À droite du volume de votre choix, cliquez sur le bouton `...`{.action} puis sur `Attacher à l'instance`{.action}.

![attacher volume](images/volume03.png){.thumbnail}

Sélectionnez maintenant l’instance et cliquez sur `Confirmer`{.action} pour attacher le disque.

![attacher volume](images/volume04.png){.thumbnail}

Le processus d’attachement du disque à votre instance va alors commencer et peut prendre quelques minutes.

![attacher volume](images/volume05.png){.thumbnail}

> [!warning]
Vous devez éviter la navigation en dehors de l’onglet en cours pendant l’attachement du disque. Cela peut interrompre le processus.
>

Une fois l'attachement effectué, vous pouvez suivre les étapes suivantes pour configurer votre disque supplémentaire [sous Linux](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#sous-linux) ou [sous Windows](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#sous-windows).

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
