---
title: Travailler avec les zones
excerpt: Utilisez les zones afin d'augmenter la disponibilité et diminuer la latence
updated: 2022-04-04
---

## Introduction

Le service OVH Load Balancer est localisé dans une ou plusieurs zone(s) de disponibilité,
définie(s) lors de la souscription au service.

Vous avez la possibilité de commander des zones supplémentaires pour votre service.
Vous augmentez ainsi la disponibilité de votre service Load Balancer en cas d'indisponibilité d'une zone.

Il est également possible, si configuré de façon appropriée, d'utiliser plusieurs zones afin de minimiser la latence pour vos visiteurs.

## Ajouter une zone

### Depuis l'API

Pour commander une zone via l'API, vous devez tout d'abord créer un panier ("cart")

> [!api]
>
> @api {v1} /order POST /order/cart
>

Veuillez noter le numéro du panier ("cart"), il vous sera utile pour la suite.

Puis vous l'assigner via

> [!api]
>
> @api {v1} /order POST /order/cart/{cartId}/assign
>

Vous pouvez lister les options disponibles sur votre service Load Balancer via

> [!api]
>
> @api {v1} /order GET /order/cartServiceOption/ipLoadbalancing/{serviceName}
>

Quand vous avez trouvé l'option correspondant à la zone souhaitée, vous pouvez l'ajouter à votre panier ("cart") via

> [!api]
>
> @api {v1} /order POST /order/cartServiceOption/ipLoadbalancing/{serviceName}
>

Enfin, vous pouvez valider votre panier ("cart") via

> [!api]
> @api {v1} /order POST /order/cart/{cartId}/checkout
>

N'oubliez pas de payer le bon de commande ainsi généré.

## Utiliser plusieurs zones

### Pour la haute disponibilité

Si vous voulez utiliser plusieurs zones afin d'obtenir une haute disponibilité, vous pouvez utiliser la zone spéciale `all` lorsque vous déclarez un `frontend` et une `farm`.

Cette zone spéciale `all` va permettre de déployer la même configuration sur toutes les zones souscrites sur votre service Load Balancer, et vous évite de dupliquer la configuration pour toutes les zones.

### Pour réduire la latence

Si le but est de réduire la latence, on peut imaginer diriger les requêtes venant depuis le load balancer de la zone1 vers des serveurs backends proches géographiquement de cette zone1, et similairement, diriger les requêtes venant depuis le load balancer de la zone2 vers des serveurs backends proches de la zone2.

Pour réaliser cela, il faut spécifier un frontend dans chaque zone qui utilise une farm dans la même zone.
Cela va nous permettre de déclarer les serveurs backends dans des farms différentes par zone et de controler les serveurs backends utilisés en fonction de la zone.

![Fonctionnement avec plusieurs zones et plusieurs fermes](images/multi_zones_multi_backends.png){.thumbnail}

Par example, si on a des serveurs backends dans les datacentres de Gravelines (gra) et Beauharnois (bhs),
on peut commander un service Load Balancer dans les zones `gra` et `bhs` et configurer :

- un frontend dans la zone gra avec comme ferme (farm) par défaut dans la zone gra qui contient des serveurs dans le datacentre de Gravelines
- un frontend dans la zone bhs avec comme ferme (farm) par défaut dans la zone bhs qui contient des serveurs dans le datacentre de Beauharnois
