---
title: Configuration d'un plan de reprise d'activité avec Metro
slug: metro-availability
excerpt: "Mise en oeuvre de Metro pour un plan de reprise d'activité"
section: Plan de Reprise d'Activité
order: 06
---

**Dernière mise à jour le 06/10/2022**

## Objectif

** Ce guide vous présente la solution Metro qui permet un plan de reprise d'activité automatisé** 

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur vos clusters via Prism Central.

## Présentation

Nous allons voir comment mettre en place une réplication synchrone entre deux sites et activer un plan de reprise d'activité à l'aide d'un témoin de cluster (Metro AHV) en utilisant un troisième cluster distant.

- Le troisième cluster servira de témoin pour le cluster il hébergera la machine virtuelle Prism Central des trois clusters. 
- Les machines virtuelles seront répliqués entre Roubaix et Gravelines dans les deux sens
- Un plan de reprise d'activité sera mise en place en cas de défaillance d'un cluster des clusters répliquées ou de Prism Central.

## En pratique

### Interconnexion des trois clusters

### Deconnexion du Prism Central d'origine sur les deux clusters qui seront répliqués

### Connexion des deux clusters au Prism Central distant servant de témoin

### Activation de la réplication

### Activation du plan de reprise d'activité

### Test de bon fonctionnement





## Aller plus loin




[Interconnexion de clusters au travers du vRack](https://https://docs.ovh.com/fr/nutanix/nutanix-vrack-interconnection/)

[Plan de reprise d'activité sous Nutanix](https://docs.ovh.com/fr/nutanix/disaster-recovery-plan-overview/)

[Réplication asynchrone ou NearSync au travers de Prism Element](https://docs.ovh.com/fr/nutanix/prism-element-nutanix-replication/)

[Réplication avancée avec Leap](https://docs.ovh.com/fr/nutanix/leap-replication/)

[Présentation des vRack](https://www.ovh.com/fr/solutions/vrack/)

[AHV Metro (Witness Option)][https://portal.nutanix.com/page/documents/details?targetId=Leap-Xi-Leap-Admin-Guide-v2022_6:ecd-ecdr-witness-syncrep-pc-c.html]


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.


