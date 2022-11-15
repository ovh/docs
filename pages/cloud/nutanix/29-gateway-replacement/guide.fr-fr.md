---
title: Remplacer la passerelle OVHgateway par un serveur dédié 
slug: gateway-replacement
excerpt: "Comment remplacer votre passerelle intégrée à Nutanix par un serveur dédié"
section: Réseau et sécurité
order: 09
---

**Dernière mise à jour le 15/11/2022**

## Présentation

Lorsque vous souscrivez à un offre Nutanix OVHcloud les connexions internet sortantes se font à partir d'une machine virtuelle intégrée Nommmée OVHcloud, cette passerelle a une bande passante limité à 1gb/s. Si vous souhaitez aller au dela de cette limite il faut remplacer la passerelle par un serveur dédié qui lui pour avoir une bande passante plus importante jusqu'a 10 Gb/s comme indiqué sur ce lien [Serveurs dédiés OVHcloud](https://www.ovhcloud.com/fr/bare-metal/).

**Nous allons voir comment remplacer la passerelle par défaut par un serveur dédié OVHcloud.**


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur le cluster via Prism Central. 
- Disposer d'un serveur dédié qui utilise deux cartes réseaux une sur le réseau privé (vRACK) l'autre sur le réseau public.

## En pratique




## Aller plus loin <a name="gofurther"></a>

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
