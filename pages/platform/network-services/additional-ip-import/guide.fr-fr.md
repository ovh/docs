---
title: Importer une Additional IP
slug: import-additional-ip
excerpt: "Ce guide explique comment importer une Additional IP dans votre projet Public Cloud OVHcloud"
section: Additional IP
order: 03
---

**Dernière mise à jour le 04/01/2023**

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/). Cela n'a aucun impact sur ses fonctionnalités ou le fonctionnement de vos services.
>

## Objectif

Si vous avez besoin de configurer une adresse Additional IP sur vos instances parce que :

- vous avez plusieurs sites sur votre instance 
- vous hébergez des projets internationaux
- vous voulez migrer votre activité depuis un serveur dédié vers une instance Public cloud

Il est possible d’importer une adresse Additional IP liée à un autre service OVHcloud.

**Ce guide explique comment importer une Additional IP dans votre projet Public Cloud OVHcloud.**

## Prérequis

- Un [projet Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Avoir [une Additional IP](https://www.ovhcloud.com/fr/bare-metal/ip/){.external}.

> [!warning]
> Cette fonctionnalité n'est actuellement pas disponible pour les instances Metal.
>

## En pratique

Tout d’abord, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et sélectionnez votre projet dans la section `Public Cloud `{.action}.

Dans le menu de gauche, ouvrez `Public IPs`{.action} dans `Network`.

Ouvrez l'onglet `Additional IP`{.action} et cliquez sur le bouton `Actions`{.action}. Sélectionnez `Importer une Additional IP`{.action} pour afficher toutes les adresses IP pouvant être importées dans votre projet Public Cloud.

![Section IP](images/import22_01.png){.thumbnail}

Si vous n'avez pas encore d'Additional IP sur votre projet Public Cloud, l'option d'importation d'une Additional IP s'affichera sur la page d'accueil.

Cliquez sur `...`{.action} à côté de l'adresse IP que vous souhaitez importer et cliquez sur `Importer cette Additional IP`{.action}.

![Import Additional IP](images/import22_02.png){.thumbnail}

Validez alors en cliquant sur `Importer`{.action}.

![Import confirm](images/import22_03.png){.thumbnail}

Patientez quelques minutes le temps que l'importation soit réalisée. Ouvrez l'onglet `Additional IP`{.action} pour rechercher l'adresse Additional IP importée. Actualisez la page si nécessaire.

Cliquez sur `...`{.action} à droite et sélectionnez `Modifier l'instance associée`{.action}.

![Import Additional IP](images/import22_04.png){.thumbnail}

Une fenêtre contextuelle apparaîtra pour choisir l'instance à laquelle votre adresse IP doit être attachée.

![Import Additional IP](images/import22_05.png){.thumbnail}

Cliquez sur `Joindre`{.action} pour confirmer. La page affiche alors un message de modification.

> [!warning]
>
> Une Additional IP ne peut être déplacée entre différentes zones. Par exemple, une IP localisée dans le datacentre de SBG peut être déplacée vers GRA ou RBX mais non vers BHS.
>

Votre adresse Additional IP sera maintenant attachée à votre instance.

La prochaine étape consiste à configurer l’IP dans votre système d'exploitation. Consultez [notre guide dédié à cette configuration](https://docs.ovh.com/fr/publiccloud/network-services/configure-additional-ip/).

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
