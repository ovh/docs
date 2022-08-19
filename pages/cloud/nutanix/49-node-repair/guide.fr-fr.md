---
title: "Plan de Reprise d'Activité sous Nutanix"
slug: node-repair
excerpt: "Remise en service d'un nœud après une panne"
section: "Plan de Reprise d'Activité"
order: 06
---

**Dernière mise à jour le 19/08/2022**

## Objectif

**Ce guide vous présente la remise en service d'un nœud sur un cluster après une panne.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'Nutanix fourni par OVHcloud. 
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur vos clusters via Prism Central.
- De disposer d'un ordinateur avec le client JAVA


## Présentation

Lorsqu'un cluster Nutanix fonctionne normalement tous les nœuds sont actifs.

Il est possible qu'une panne survienne sur un des nœuds du cluster, dans ce cas là le cluster pourra continuer en mode dégradé il peut continuer à fonctionner avec :

- Un nœud en panne si l'on a un facteur de réplication à 2 (RF2)
- Deux nœud en panne si l'on a un facteur de réplication à 3 (RF3)

Si l'on dépasse le nombre de nœuds en panne le cluster ne pourra plus fonctionner et les données seront perdues.

Vous pouvez vous aider de ce guide [Hyperconvergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/) pour avoir plus d'informations sur les clusters Nutanix.

Dès qu'une panne est détectée il est necessaire de prévenir OVHcloud pour remplacer la matériel défectueux et suivre la procédure ci-dessous pour remettre le nœud en service.

## En pratique

### Identifier le nœud en panne

??? A la fois sur le cluster et sur le manager ???

### Générer et récuperer une image iso de réparation du nœud

### Intervention sur l'IPMI de la machine physique à partir du manager

#### Connexion du CDROM à la machine physique

#### Boot sur l'image ISO et démarrage de l'installation

### Finalisation de la reinstallation à partir de Prism Central







## Aller plus loin <a name="gofurther"></a>


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

[Hyperconvergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/).
