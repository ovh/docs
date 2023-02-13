---
title: Gestion du pare-feu des passerelles
slug: nsx-t-manage-gateway-firewall
excerpt: Comment administrer le pare-feu des passerelles
section: NSX-T
order: 06
---

**Dernière mise à jour le 07/02/2023**

> [!warning]
> Les guides concernant NSX-T dans la solution Hosted Private Cloud Powered by VMware ne sont pas définitifs, ils seront modifiés lors de la sortie en version BETA et finalisés quand la version définitive sera prête. 
>

## Objectif

**Decouvrer comment administrer le pare-feu des passerelles**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX-T (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir **NSX-T** déployé avec un segment configuré dans votre configuration NSX-T, vous pouvez vous aider de ce guide [Gestion des segments dans NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-segment-management).


# Présentation

Le pare-feu de passerelles permet le filtrage entre les segments internes et l'extérieur du cluster, Il s'applique à 

- des règles entrantes depuis un réseau Externe au cluster vers des adresses publiques internes.
- des règles sortantes depuis un réseau interne derrière les passerelles de type **Tier-1 Gateways** vers des réseaux externes à la configuration de NSX-T.

Si vous souhaitez créer des règles de filtrage entre segment interne il sera nécessaire d'utiliser le pare-feu distribué à l'aide de ce guide [Gestion du pare-feu distribué](https://docs.ovh.com/fr/nsx-t-manage-distributed-firewall).

## En pratique

Nous allons créer une règle qui bloque l'accès à tout le réseau externe d'un cluster depuis un segment. 

Nous allons utiliser un groupe pour la source, vous pouvez vous aider de ce guide pour créer des groupes [Gestion du pare-feu distribué](https://docs.ovh.com/fr/nsx-t-manage-distributed-firewall) et de **any** pour la destination.

Allez sur l'onglet `Security`{.action}, Sélectionnez `Gateway Firewall`{.action} et cliquez sur `+ ADD POLICY`{.action}

![01 Create gateway firewall rules 01](images/06-create-distributed-firewall-rules01.png){.thumbnail}

Sélectionnez `pvh-T0-gw`{.action} à droite de **Gateway**, nommez votre stratégie `my policy`{.action} en dessous de la colonne **Name** et cliquez sur les `points de suspensions verticaux`{.action} à gauche de votre stratégie.

![01 Create gateway firewall rules 02](images/06-create-distributed-firewall-rules02.png){.thumbnail}

Cliquez sur `Add Rule`{.action} dans le menu.

![01 Create gateway firewall rules 03](images/06-create-distributed-firewall-rules03.png){.thumbnail}

Nommez votre règle `block segment1 to any`{.action} en dessous de la colonne **Name**.

![01 Create gateway firewall rules 04](images/06-create-distributed-firewall-rules04.png){.thumbnail}

Cliquez sur le `stylo`{.action} à gauche de Any dans la colonne **Source**.

![01 Create gateway firewall rules 05](images/06-create-distributed-firewall-rules05.png){.thumbnail}

Restez dans l'onglet `Group`{.action}, sélectionnez le groupe `g-segment1`{.action} et cliquez sur `APPLY`{.action}

![01 Create gateway firewall rules 06](images/06-create-distributed-firewall-rules06.png){.thumbnail}

Choisissez `Drop`{.action} sous la colonne **Action** et cliquez sur `PUBLISH`{.action}

![01 Create gateway firewall rules 07](images/06-create-distributed-firewall-rules07.png){.thumbnail}

Votre règle est active sur la passerelle **ovh-T0-gw** elle bloque tout le trafic sortant depuis les membres du groupe **g-segment01**.

## Aller plus loin

[Premiers pas avec NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-first-steps/)

[Gestion des segment dans NSX-T](https://docs.ovh.com/fr/nsx-t-segment-management/)

[Gestion du pare-feu distribué](https://docs.ovh.com/fr/nsx-t-manage-distributed-firewall).

[Documentation VMware sur les pare-feux de passerelles dans NSX-T](https://docs.vmware.com/en/VMware-NSX-T-Data-Center/3.2/administration/GUID-A52E1A6F-F27D-41D9-9493-E3A75EC35481.html)


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

