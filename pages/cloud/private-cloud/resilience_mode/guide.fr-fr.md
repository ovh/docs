---
title: Utiliser le mode résilience
slug: mode-resilience
excerpt: Découvrez comment utiliser le mode résilience d'OVH
legacy_guide_number: '7766742'
section: Fonctionnalités OVH
order: 05
---

**Dernière mise à jour le 13/08/2018**

## Objectif

Le mode résilience est un outil développé par OVH, qui simule une panne sur l'un de vos serveurs hôtes (_hosts_). Cela vous permet de vérifier qu'un système de type *High Availability* (HA) et *Fault Tolerance* (FT) fonctionne correctement dans votre cluster **en développement**.

**Ce guide vous explique comment utiliser le mode résilience d'OVH.**

## Prérequis

* Posséder une offre [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.
* Accéder à l’interface de gestion vSphere.



## En pratique

Avant tout, assurez-vous des points suivants :

- le serveur hôte doit être dans un cluster ;
- l'option *High Availability* (HA) doit être activée ;
- un autre serveur hôte dans le cluster doit être disponible et en état de fonctionnement.

> [!warning]
>
> Ceci est un test pour un **environnement de développement**. Il ne faut pas réaliser ce type d'opération en **production**.
> 


### Activer le mode résilience

Une fois connecté au client vSphere, rendez-vous dans l’inventaire de vos serveurs hôtes et cluster. Sélectionnez le serveur hôte concerné avec un simple clic droit. Cliquez ensuite sur `OVH Private Cloud`{.action}, puis sur `Resilience`{.action}.

![Clic-droit sur l'hôte pour activer le mode résilience](images/resilience_01.png){.thumbnail}

Après avoir vérifié que tous les prérequis sont respectés, cliquez sur le bouton `Next`{.action}.

![Vérification des prérequis et validation](images/resilience_02.png){.thumbnail}

Il est nécessaire de valider les conditions d'utilisation avant de lancer le test. Après avoir coché la case `I accept the terms of the failure simulation agreement`{.action}, cliquez sur le bouton `Next`{.action}.

![Validation des conditions d'utilisation](images/resilience_03.png){.thumbnail}

La demande d'activation est bien prise en compte.

![Activation du mode résilience en cours](images/resilience_04.png){.thumbnail}

En quelques minutes, le serveur hôte deviendra indisponible.

![Hôte indisponible](images/resilience_05.png){.thumbnail}


### Désactiver le mode résilience

Pour finaliser la simulation, cliquez à nouveau sur le mode résilience.

![Finalisation de la simulation](images/resilience_06.png){.thumbnail}

La demande de désactivation est bien prise en compte.

![Désactivation du mode résilience en cours](images/resilience_07.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
