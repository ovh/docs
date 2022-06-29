---
title: "Plan de Reprise d'Activité sous Nutanix"
slug: disaster-recovery-plan-overview
excerpt: "Aperçu des diverses solutions de Plan de Reprise d'Activité sous Nutanix"
section: Plan de Reprise d'Activité
order: 01
---

**Dernière mise à jour le 21/06/2022**

## Objectif

Ce guide vous présente les possibilités offertes par les clusters Nutanix installés dans les infrastructures d'OVHcloud pour la mise en place de Plans de Reprise d'Activité (PRA).

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer de plusieurs clusters Nutanix avec l'une et/ou l'autre de ces organisations :
    - plusieurs clusters Nutanix sur des sites physiquement différents chez OVHcloud;
    - un cluster Nutanix fourni par OVHcloud et un autre cluster Nutanix chez un autre fournisseur.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur vos clusters via Prism Central.
- Avoir une interconnexion de type vRack ou VPN IPSEC entre les deux clusters en fonction des besoins.

## Présentation des diverses solutions

### Solutions d'interconnexions

Dans le cadre d'un plan de reprise d'activité, il est important de choisir la bonne interconnexion entre des sites distants.<br>
Les deux clusters doivent être entièrement visibles entre eux, au travers d'une connexion sécurisée.

Pour cela, vous pouvez utiliser des technologies diverses telles que :

- Une connexion des sites entre eux au travers du même [vRack](https://www.ovh.com/fr/solutions/vrack/) sur tous les sites.

![Interconnection with vRack diagram](images/vrackinterconnection.png){.thumbnail}

- La mise en place d'un VPN IPsec entre les deux clusters Nutanix. 

![Interconnection with IPsec diagram](images/ipsecinterconnection.png){.thumbnail}

Un exemple d'interconnexion IPsec est disponible à cette adresse : [Interconnexion IPsec entre deux sites](https://docs.ovh.com/fr/nutanix/ipsec-interconnection/)

### Solutions Nutanix pour la mise en place d'un plan de reprise d'activité

Certaines solutions sont disponibles avec **Prism Element** :

- **Async DR** : la réplication entre deux **storage containers** distants ne se fait qu'une fois par heure. Si un problème survient, il est possible de perdre une heure de données (RPO 1 heure) mais le redémarrage peut se faire manuellement dans la minute.
- **NearSync DR** : la réplication se fait plusieurs fois par heure. Il est possible d'avoir une synchronisation entre 1 minute et 15 minutes, en fonction de la licence que vous possédez (RPO entre 1 minute et 15 minutes).

Retrouvez le détail de ces solutions dans notre documentation sur la [réplication asynchrone ou nearsync au travers de Prism Element](https://docs.ovh.com/fr/nutanix/prism-element-nutanix-replication/)

Il est possible d'améliorer la gestion des plans de reprise d'activité via des outils tiers ou via une solution Nutanix nommé **Leap** au travers de **Prism Central**.

> [!warning]
> La réplication asynchrone entre deux sites est intégrée avec l'offre OVHcloud **Nutanix Standard**. Il sera cependant nécessaire de passer sur l'offre OVHcloud **Nutanix Advanced** pour pouvoir utiliser les autres options.

## Aller plus loin

[Interconnexion IPsec entre deux sites](https://docs.ovh.com/fr/nutanix/ipsec-interconnection/)

[Réplication asynchrone ou **nearsync** au travers de Prism Element](https://docs.ovh.com/fr/nutanix/prism-element-nutanix-replication/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.


