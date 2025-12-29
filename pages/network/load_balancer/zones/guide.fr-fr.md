---
title: Configurer le Load Balancer OVHcloud en plusieurs zones
excerpt: Utilisez les zones pour augmenter la disponibilité et réduire la latence
updated: 2025-12-02
---

## Objectif

Le Load Balancer OVHcloud est un composant essentiel pour répartir le trafic réseau sur votre infrastructure. Pour garantir le meilleur niveau de service et une expérience utilisateur optimale, il est essentiel de déployer votre Load Balancer sur plusieurs zones de disponibilité (AZ). Lors de l'abonnement à un service Load Balancer OVHcloud, **vous pouvez choisir une ou plusieurs zones de disponibilité** dans lesquelles le service sera situé. Vous avez également la possibilité **d'ajouter des zones supplémentaires** à un service existant.

La configuration de votre service Load Balancer OVHcloud sur plusieurs zones de disponibilité vous aidera à **accroître la fiabilité** de votre service Load Balancer en cas de panne d'une zone, ou à **réduire la latence** pour vos utilisateurs en dirigeant le trafic vers le service le plus proche d'eux.

Ce guide explique comment configurer et utiliser ces zones multiples afin d'obtenir des performances et une résilience améliorées.

> [!primary]
>
> En raison de restrictions techniques, lors de la configuration d'un Load Balancer OVHcloud avec deux zones, si l'une se trouve dans une région APAC et l'autre non, le trafic sera préférentiellement dirigé via la zone non APAC, même lorsque le Load Balancer est hors service dans cette zone.
>
> Ce comportement est spécifique aux configurations transcontinentales impliquant des zones APAC. Par conséquent, nous ne recommandons pas de configurer votre Load Balancer de cette manière.
>
> Vous pouvez trouver une liste des régions OVHcloud sur [notre site web](/links/infrareg).
>

## Prérequis

- Un service [Load Balancer OVHcloud](/links/network/load-balancer)
- Accès à l'[espace client OVHcloud](/links/manager)

## Introduction aux zones de disponibilité

### Configuration multi-régions

La répartition de charge entre plusieurs régions offre **une meilleure reprise après sinistre en cas de pannes à un niveau régional**, et permet des points d'entrée mondiaux qui **réduisent considérablement la latence** en dirigeant les utilisateurs vers le **serveur le plus proche**. La plupart des régions n'ont qu'une seule zone de disponibilité, ce qui signifie que travailler avec plusieurs zones implique généralement de travailler avec plusieurs régions.

Grâce à un **réseau Anycast**, le Load Balancer OVHcloud peut rediriger les requêtes provenant d'une région spécifique vers des serveurs backend géographiquement proches.

Pour cela, vous devez spécifier un frontend dans chaque zone utilisant une ferme dans la même zone. Cela vous permettra de déclarer des serveurs backend dans différentes fermes par zone et de contrôler lesquels sont utilisés dans chaque zone.

![Fonctionnement avec plusieurs zones et plusieurs fermes](images/multi_zones_multi_backends.png){.thumbnail}
*Diagramme représentant un Load Balancer répartissant le trafic sur deux régions*

Par exemple, si vous avez des serveurs backend dans les régions Gravelines (GRA) et Beauharnois (BHS), vous pouvez commander un service Load Balancer dans les zones `GRA` et `BHS` et configurer :

- Un frontend dans la zone GRA avec une ferme par défaut dans la zone GRA contenant des serveurs dans le datacenter de Gravelines.
- Un frontend dans la zone BHS avec une ferme par défaut dans la zone BHS contenant des serveurs dans le datacenter de Beauharnois.

### Régions multi-AZ

OVHcloud déploie actuellement son plan stratégique pour les régions multi-zones de disponibilité (multi-AZ), débutant par le lancement de Paris 3-AZ en avril 2024 et Milan 3-AZ en novembre 2025.

La répartition de charge entre plusieurs zones de disponibilité (AZ) au sein de la même région, à la différence d'une configuration multi-régions, garantit une **haute disponibilité**, une **haute performance** et une **résilience face aux pannes locales**, en utilisant des **connexions à faible latence** et **Anycast** pour distribuer le trafic de la manière la plus efficace.

![Différence entre les déploiements multi-régions et multi-AZ](images/multi-az.png){.thumbnail}
*Diagramme représentant un load balancer répartissant le trafic sur les zones d'une seule région multi-AZ*

## En pratique

### Ajouter une zone

#### Depuis l'espace client OVHcloud

Vous pouvez commander une zone supplémentaire depuis l'[espace client OVHcloud](/links/manager). Dans la section `Network`{.action}, sous `Services réseau`{.action} cliquez sur `Load Balancer`{.action}.

Sélectionnez votre Load Balancer, puis dans l'onglet `Accueil`{.action}, section `Configuration`{.action}, cliquez sur le bouton `...`{.action} sur la droite de "Zones de disponibilité" et choisissez `Ajouter`{.action}.

![Ajout d'une zone Load Balancer depuis le manager](images/add_Zone_IPLB.png){.thumbnail}

Ensuite, sélectionnez la (ou les) zone(s) que vous souhaitez commander et cliquez sur `Ajouter`{.action}.

![Sélection d'une zone Load Balancer depuis le manager](images/Select_Zone_IPLB.png){.thumbnail}

Une commande sera générée, que vous devrez régler.

![Paiement de la commande de zone Load Balancer depuis le manager](images/Paybill_Zone_IPLB.png){.thumbnail}

#### Depuis l'API OVHcloud

Pour commander une zone via l'API, vous devez d'abord créer un panier ("cart").

> [!api]
>
> @api {v1} /order POST /order/cart
>

Veuillez noter l'ID du panier ("cart"), il sera utile plus tard dans le processus de commande.

Ensuite, attribuez le panier à votre compte OVHcloud via l'appel suivant :

> [!api]
>
> @api {v1} /order POST /order/cart/{cartId}/assign
>

Vous pouvez lister les options disponibles sur votre service Load Balancer via l'appel suivant :

> [!api]
>
> @api {v1} /order GET /order/cartServiceOption/ipLoadbalancing/{serviceName}
>

Lorsque vous avez trouvé l'option correspondant à la zone souhaitée, vous pouvez l'ajouter à votre panier ("cart") via l'appel suivant :

> [!api]
>
> @api {v1} /order POST /order/cartServiceOption/ipLoadbalancing/{serviceName}
>

Enfin, vous pouvez valider votre panier ("cart") via l'appel suivant :

> [!api]
> @api {v1} /order POST /order/cart/{cartId}/checkout
>

N'oubliez pas de régler le bon de commande ainsi généré.

### Configurer votre frontend

Une fois votre commande de zone finalisée, vous pouvez l'ajouter à votre Load Balancer depuis l'espace client OVHcloud.

Sélectionnez le Load Balancer que vous souhaitez modifier, puis créez un nouveau frontend, ou modifiez-en un existant, via l'onglet `Frontends`{.action}.

Dans le champ `Datacenter`{.action}, choisissez la zone que vous souhaitez associer à votre frontend. 

Si vous souhaitez utiliser plusieurs zones, vous pouvez choisir la zone spéciale `ALL`. Cette zone spéciale vous permettra de déployer la même configuration sur toutes les zones souscrites à votre service Load Balancer, ce qui vous épargne de dupliquer la configuration pour toutes les zones.

![Sélection de la zone](images/Select-Datacenter.png){.thumbnail}

Une fois le frontend configuré, cliquez sur `Ajouter`{.action} ou `Modifier`{.action}, selon que vous configurez un nouveau frontend ou modifiez un existant.

N'oubliez pas de déployer la configuration. Pour cela, cliquez sur `Appliquer la configuration`{.action} dans la bannière rappelant que la configuration n'est pas appliquée.

![Application d'une configuration Load Balancer](images/apply-configuration.PNG){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).