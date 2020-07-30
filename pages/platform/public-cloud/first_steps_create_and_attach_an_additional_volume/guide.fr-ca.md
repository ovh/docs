---
title: Créer un volume supplémentaire et l'attacher à une instance
excerpt: Découvrez comment créer et attacher un disque dur supplémentaire à une instance de cloud.
slug: creer-disque-supplementaire-attacher-instance
section: Premiers pas
hidden: true
---

## Objectif

Vous pouvez créer des volumes supplémentaires (ou des disques supplémentaires) pour vos instances de Public Cloud. Ceci est utile si:

- Vous souhaitez augmenter votre capacité de stockage sans modifier le modèle d'instance
- Vous souhaitez disposer d'un espace de stockage hautement disponible et performant
- Vous voulez pouvoir déplacer votre espace de stockage ainsi que les données contenues sur une autre instance
- Vous voulez installer le système sur un disque Ceph séparé plutôt qu'un disque SSD

**Ce guide explique comment créer un volume supplémentaire, puis comment l'attacher à une de vos instances.**

## Prérequis

- Une instance [Public Cloud](https://www.ovh.com/ca/fr/public-cloud){.external}

## Création du volume

- Connectez-vous au l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager/){.external}
- Cliquez sur le bouton `Ajouter un volume`{.action}

![public-cloud](images/create_volume.png){.thumbnail}

Un nouveau menu s'affiche.

![public-cloud](images/volume_creation.png){.thumbnail}

À partir de ce nouveau menu, vous pouvez:

- Nommez votre volume
- Sélectionnez le type de volume:


|Classic|200 IOPS guaranteed|
|---|---|
|High performance|Up to 3000 IOPS|

- Choisissez la capacité du volume à partir de 10 Go.
- Choisissez la région de votre volume

> [!primary]
>
> Pour attacher un volume à une instance, ils doivent tous les deux
> être situés dans la même région.
>

- Rendez votre disque dur amorçable en cochant "boot disk" (disque d'amorçage) si vous voulez démarrer le système à partir de ce disque.
- Valider la création du volume.
Une nouvelle fenêtre s'affiche avec votre volume:

![public-cloud](images/volume_list.png){.thumbnail}

## Attachement du volume à une instance

Vous pouvez ensuite joindre votre volume supplémentaire à une instance en cliquant sur le bouton `···`{.action} à droite de votre volume et en sélectionnant `Attacher à l'instance`{.action}

Sélectionnez votre instance dans le menu déroulant et cliquez sur "Confirmer" {.action}

Une fois cette opération terminée, elle montrera l'instance à laquelle elle est attachée.

![public-cloud](images/volume_attached.png){.thumbnail}

>[!primary]
>
>
>Pour continuer, vous devrez probablement [configurer](../configurer-un-volume-additionnel/) ce nouveau volume sur votre instance.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
