---
title: Interconnexion IPSEC entre deux sites
slug: ipsec-interconnection
excerpt: "Mise en place d'un VPN IPSEC entre deux clusters Nutanix"
section: Plan de reprise d'activité
order: 02
---

**Dernière mise à jour le 20/05/2022**

## Objectif

Remplacer la paserelle fournie par défaut lors de la création du cluster Nutanix sur deux clusters et de créer une interconnexion sécurisée au travers d'un réseau VPN IPSEC.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer de plusieurs clusters Nutanix avec ces deux options :
    + Plusieurs clusters Nutanix sur des sites physiquement différents chez OVHcloud
    + Un cluster qui ne se trouve pas chez OVHcloud et un cluster chez OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur vos cluster via Prism Central.
- Avoir les deux clusters sur deux sites distants physiquement.

## Présentation technique

Lors de la configuration du cluster une machine virtuelle est créé et se nomme OVHgateway elle ne permet l'accès à INTERNET qu'en sortie pour le réseau d'administration du cluster Nutanix. Cette machine virtuelle utilise deux cartes réseaux une sur le réseau privé du cluster par défaut 192.168.0.254 avec un masque à 255.255.255.0 et un autre avec une adresse publique fournie par OVHcloud que l'on retrouve dans l'espace client D'OVHcloud en tant qu'**IP failover** le masque de cette adresse est /30.

Nous allons arrêter la machine virtuelle et la remplacer par une machine virtuelle sous PFSENSE qui servira à la fois de passerelle mais aussi pour la configuration d'un VPN IPSEC

## En pratique







## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
