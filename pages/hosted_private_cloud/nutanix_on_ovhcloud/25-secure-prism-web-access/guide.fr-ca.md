---
title: "Sécurisation de l'accès Web à Prism Central"
excerpt: "Découvrez comment restreindre l'accès Web à Prism Central"
updated: 2022-01-11
---

## Objectif

Une fois votre service livré, Prism Central est accessible sur l'Internet public. Vous pouvez en restreindre l'accès à une ou plusieurs adresses IP via le [Load Balancer OVHcloud](https://www.ovh.com/ca/fr/solutions/load-balancer/){.external}.

**Ce guide vous explique comment sécuriser l'accès à l'interface Prism Central.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à l'équipe [Professional Services OVHcloud](https://www.ovhcloud.com/fr-ca/professional-services/) ou à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

### Étape 1 : trouver le Load Balancer concerné

Connectez-vous à votre [espace client OVHcloud](/links/manager) et ouvrez la page de configuration du Nutanix Cluster vRack.

Identifiez le nom de votre Load Balancer.

![image vRack](images/vRack1.png){.thumbnail}

### Étape 2 : accéder aux frontends de votre Load Balancer

Sélectionnez votre Load Balancer identifié à l'étape précédente.

![Accès IPLB](images/iplb1.png){.thumbnail}

Ouvrez l'onglet `Frontends`{.action}.

![IPLB Frontends](images/iplb2.png){.thumbnail}

### Étape 3 : modifier le front-end Prism Central

Cliquez sur le `...`{.action} dans le tableau et sélectionnez `Editer`{.action}.

![edit Front-End Prism Central](images/iplb3.png){.thumbnail}

### Étape 4 : ajouter les IPs autorisées

Dans les paramètres avancés, vous pouvez désormais ajouter l'adresse IP de votre fournisseur d'accès à Internet public ou toute adresse IP  que vous souhaitez autoriser à accéder à l'interface web Prism Central.

![edit Front-End Prism Central](images/iplb4.png){.thumbnail}

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
