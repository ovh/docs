---
title: "Gestion des snapshots d’une instance dans horizon"
updated: 2022-01-31
---

## Objectif

Lors de votre activité, vous serez probablement amené à effectuer une sauvegarde de vos données, de vos configurations, et même de vos instances au complet. Pour cela, il est possible de créer des snapshots de vos instances. Ceux ci pourront être utilisés pour restaurer une configuration ultérieure sur votre instance, ou encore pour créer une copie exacte d'une instance.

**Ce guide vous explique comment gérer ces snapshots depuis l'interface OpenStack Horizon.**

## Prérequis

- Avoir [créé une instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) dans votre compte OVHcloud
- [Accéder à l'interface Horizon](/pages/public_cloud/compute/introducing_horizon)

## En pratique

### Création du snapshot

Connectez-vous à l'interface Horizon et assurez-vous d’être dans la bonne région. Vous pouvez le vérifier en haut à gauche. 

![Sélection de région](images/region2021.png){.thumbnail}

Cliquez sur le menu `Compute`{.action} à gauche puis sur `Instances`{.action}. Cliquez ensuite sur `Create Snapshot`{.action} sur la ligne de l'instance correspondante.

![Create snapshot](images/createsnapshot.png){.thumbnail}

Dans la fenêtre qui s'affiche, saisissez les informations requises :

* Nom du snapshot (*Snapshot Name*): définissez un nom pour le snapshot et cliquez sur `Create Snapshot`{.action}.

![Create snapshot](images/createsnapshot2.png){.thumbnail}

Le snapshot sera ensuite listé dans la section `Images`{.action}. Il est donc conseillé d'attribuer un nom explicite à chaque snapshot. 

### Supression d'un snapshot

Dans l'inteface horizon, cliquez sur le menu `Compute`{.action} à gauche puis sur `Images`{.action}.

Cliquez ensuite sur la flèche déroulante à côté du snapshot à supprimer et cliquez sur `Delete Image`{.action}. Confirmez la suppression du snapshot.

![public-cloud](images/deletesnapshot.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.