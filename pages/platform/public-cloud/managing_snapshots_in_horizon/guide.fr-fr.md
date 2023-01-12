---
title: "Gestion des snapshots d’une instance dans horizon"
slug: gestion-des-snapshots-dune-instance-dans-horizon
legacy_guide_number: 1770
section: Gestion depuis Horizon
order: 05
---

**Dernière mise à jour le 31/01/2022**

## Objectif

Lors de votre activité, vous serez probablement amené à effectuer une sauvegarde de vos données, de vos configurations, et même de vos instances au complet. Pour cela, il est possible de créer des snapshots de vos instances. Ceux ci pourront être utilisés pour restaurer une configuration ultérieure sur votre instance, ou encore pour créer une copie exacte d'une instance.

**Ce guide vous explique comment gérer ces snapshots depuis l'interface OpenStack Horizon.**

## Prérequis

- Avoir [créé une instance Public Cloud](https://docs.ovh.com/fr/public-cloud/premiers-pas-instance-public-cloud/#etape-3-creer-une-instance) dans votre compte OVHcloud
- [Accéder à l'interface Horizon](../horizon/)

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

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>
