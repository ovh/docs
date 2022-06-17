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
- Posseder un plan IP différent par cluster.

## Présentation technique

Nous allons remplacer la gateway par défaut qui ne permet que l'accès INTERNET sur le réseaux d'aministrateur du cluster par




## En pratique

Connectez vous à Prism Central






## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
