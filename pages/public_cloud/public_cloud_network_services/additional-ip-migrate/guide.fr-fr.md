---
title: Basculer une Additional IP
updated: 2023-01-04
---

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/). Cela n'a pas d'impact sur ses fonctionnalités.
>

## Objectif

Ce guide vous explique comment basculer une Additional IP d'une instance à une autre. Cette opération peut avoir plusieurs applications. Elle permet généralement de limiter ou de supprimer les éventuels cas d'indisponibilité de service en :

- basculant sur un site dans sa "nouvelle version" ;
- faisant tourner votre production sur un serveur répliqué pendant que vous faites une maintenance ou une mise à jour sur le serveur de production.

## Prérequis
- Avoir au moins deux instances Public Cloud démarrées
- Disposer d'une Additional IP
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

> [!warning]
> Cette fonctionnalité n'est actuellement pas disponible pour les instances Metal.
>

## En pratique 

> [!warning]
>
> Une Additional IP ne peut pas être déplacée entre différentes zones. Par exemple, une IP localisée dans le datacentre de SBG peut être déplacée vers GRA ou RBX mais pas vers BHS.
>

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), sélectionnez votre projet dans la section `Public Cloud`{.action}.

Dans le menu de gauche, rendez-vous dans la section `Network` puis ouvrez la partie `Public IPs`{.action}. Cliquez sur l'onglet `Additional IP`{.action}.

Dans cet exemple, l'adresse Additional IP routée vers "Instance_A" sera migrée vers "Instance_B".

Cliquez sur `...`{.action} dans la ligne de l'Additional IP et sélectionnez `Modifier l'instance associée`{.action}.

![migrating Additional IP](images/migrateip_01.png){.thumbnail}

Cliquez sur le menu déroulant pour choisir l'instance de destination dans la liste.

![migrating Additional IP](images/migrateip_02.png){.thumbnail}

Validez en cliquant sur `Joindre`{.action}.

Après quelques secondes, l’espace client est mis à jour. Un message de confirmation s’affiche si la migration s’est effectuée avec succès.

![migrating Additional IP](images/migrateip_03.png){.thumbnail}

> [!primary]
>
L’Additional IP peut être configurée sur le serveur de destination avant ou après la migration. S’il était pré-configuré, il commencera à répondre dès que l’opération de routage sera terminée.
>

## Aller plus loin

[Configurer une Additional IP](/pages/public_cloud/public_cloud_network_services/getting-started-04-configure-additional-ip-to-instance)

[Importer une Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-import)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
