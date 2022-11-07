---
title: Basculer une Additional IP
slug: migrate-additional-ip
section: Additional IP
order: 04
---

**Dernière mise à jour le 07/11/2022**

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/). Cela n'a aucun impact sur ses fonctionnalités ou le fonctionnement de vos services.
>

## Objectif

Ce guide vous explique comment basculer une Additional IP d'une instance à une autre. Cette opération peut avoir plusieurs applications, permettant généralement de limiter ou de supprimer les éventuels cas d'indisponibilité de service :

- basculer sur un site dans sa "nouvelle version" ;
- faire tourner votre production sur un serveur répliqué pendant que vous faites une maintenance, une mise à jour, sur le serveur de production.


## Prérequis
- Au moins deux instances Public Cloud démarrées
- Une Additional IP
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique 

> [!warning]
>
> Une Additional IP ne peut être déplacée entre différentes zones. Par exemple, une IP localisée dans le datacentre de SBG peut être déplacée vers GRA ou RBX mais non vers BHS.
>

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), sélectionnez votre projet dans la section `Public Cloud`{.action} .

Dans le menu de gauche, ouvrez `Public IPs`{.action} dans `Network`. Cliquez sur l'onglet `Additional IP`{.action}.

Dans cet exemple, l'adresse IP supplémentaire routée vers "Instance_A" sera migrée vers "Instance_B".

Cliquez sur `...`{.action} dans la ligne de l'IP supplémentaire et sélectionnez `Modifier l'instance associée`{.action} associée.

![migrating Additional IP](images/migrateip_01.png){.thumbnail}

Cliquez sur le menu déroulant pour choisir l'instance de destination dans la liste.

![migrating Additional IP](images/migrateip_02.png){.thumbnail}

Validez alors en cliquant sur `Joindre`{.action}.

Après quelques secondes, l’espace client est mis à jour et un message de confirmation s’affiche si la migration s’est effectuée avec succès.

![migrating Additional IP](images/migrateip_03.png){.thumbnail}

> [!primary]
>
L’IP Additional peut être configurée sur le serveur de destination avant ou après la migration. S’il était préconfiguré, il commencera à répondre dès que l’opération de routage sera terminée.
>

## Aller plus loin

[Configurer une Additional IP](https://docs.ovh.com/fr/publiccloud/network-services/configure-additional-ip/)

[Importer une Additional IP](https://docs.ovh.com/fr/publiccloud/network-services/import-additional-ip/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
