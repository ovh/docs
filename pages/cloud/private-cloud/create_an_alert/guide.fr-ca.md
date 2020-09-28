---
title: Créer une alerte
slug: creer-une-alerte
excerpt: Paramétrez des alertes sur votre client vSphere
section: Gestion des machines virtuelles
order: 09
---

**Dernière mise à jour le 29/06/2020**

## Objectif

Il est possible de créer une alerte sur tous les éléments de votre Private Cloud : le datacentre lui-même, les clusters, les VM, les datastores, le réseau...

**Ce guide explique comment créer des alertes.**

## Prérequis

- Posséder un produit [Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/){.external}.
- Être connecté à votre [interface vSphere](../connexion-interface-vsphere/).

## En pratique

### Créer une alerte

Pour créer une alerte, faites un clic droit sur le datacenter ou tout autre élément à surveiller, puis cliquez sur `Alarms`{.action} et `New Alarm Definition`{.action}.

![creation alerte](images/alarms01.png){.thumbnail}

### Définir un nom et une cible

La première étape consiste à donner un nom à l'alerte et à définir sa cible. Vous pouvez également ajouter une description.

![nom et cible de l'alerte](images/alarms02.png){.thumbnail}

### Définir les règles de l'alerte

La seconde étape consiste à définir les règles de l'alerte et les actions qu'elle déclenche.

Le champ `IF` vous permet de définir un déclencheur de l'alerte parmi une sélection de variables. Selon la variable choisie, une liste d'arguments vous sera proposée.

Le champ `THEN` permet d'indiquer que l'alerte se déclenche avec un certain degré de criticité et va entraîner des actions telles que l'envoi d'un e-mail, l'exécution d'un script ou l'arrêt d'une VM.

![règles de l'alerte](images/alarms03.png){.thumbnail}

Vous pouvez ainsi surveiller la RAM d’un host par exemple, en indiquant un seuil à ne pas dépasser avant que son statut ne passe en alerte et que vous ne receviez un e-mail d'avertissement.

>[!primary]
> Vous pouvez ajouter plusieurs règles à votre alerte en cliquant sur `ADD ANOTHER RULE`{.action}.
>

### Interruption de l'alerte

La troisième étape vous permet de définir les critères de fin d'alerte et de déclencher de nouvelles actions.

![interruption de l'alerte](images/alarms04.png){.thumbnail}

### Résumé de l'alerte

La dernirère étape vous présente un récapitulatif des règles définies. Vous pouvez activer l'alarme en cochant le curseur ou choisir de l'activer ultérieurement en faisant un clic droit sur l'élément choisi puis en cliquant sur `Alarms`{.action} et `Enable Alarm Actions`{.action}.

![résumé de l'alerte](images/alarms05.png){.thumbnail}

Vous pourrez également configurer à cette étape la fréquence de répétition des alertes.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
