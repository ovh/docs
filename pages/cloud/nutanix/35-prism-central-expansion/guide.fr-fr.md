---
title: Remplacement de Prism Central du mode Small au mode X-LARGE
slug: prism-central-to-xlarge-mode
excerpt: 'Comment remplacer Prism Central par trois machines virtuelles en mode X-LARGE' 
section: "Utilisation avancée"
order: 05
---

**Dernière mise à jour le 19/12/2022**

## Objectif

**Ce guide vous explique comment remplacer votre déploiement Prism Central initial sur une seule machine virtuelle a trois machine virtuelles**.


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.





## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur le cluster via Prism Central.
- Connaitre le mot de passe admin de Prism Element (Lors d'un déploiment de cluster ce mot de passe est le même que sur Prism Central mais il peut être changé par la suite).

## Présentation

Lorsque vous déployez votre cluster vous avez la possibilité de choisir le dimensionnement de Prism Central sur une ou trois machines virtuelles. Cette option est modifiable lorsque vous redéployer votre cluster mais toutes les données du cluster Nutanix sont éffacées.<br>

**Prism Central** peut être dimensionné avec une ou trois machines virtuelles pour une meilleure résilience mais la taille de chaque machine virtuelle peut être differente en fonction des besoins selon ces trois modes :

- Small avec 6 vCPU 26 Gb de mémoire et 500 Gb de stockage par machine virtuelle.
- Large avec 10 vCPU, 26 Gb de mémoire et 2500 Go de stockage par machine virtuelle.
- X-Large avec 15 vCPU, 60 Gb de mémoir et 2500 Gb de mémoire.

Le mode de déploiement de Prism Central sur les cluster Nutanix by OVHcloud est en mode SMALL avec une machine virtuelle ou trois machines virtuelles.

Nous allons voir comment remplacer Prism Central en Mode Small sur une seule machine virtuelle par un Prism Central en mode X-Large sur trois machines virtuelles.

## En pratique

> [!warning]
> Le remplacement du mode de fonctionnement de Prism Central implique la suppression de Prism Central et de toutes les options gérées par Prism Central (Microsegmentation, Disaster recovery, etc...)
>





Le remplacement du mode de fonctionnement de Prism Central implique la suppression de Prism Central et de toutes les options gérées par Prism Central (Microsegmentation, Disaster recovery, etc...)






## Aller plus loin <a name="gofurther"></a>


[Hyper-convergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

