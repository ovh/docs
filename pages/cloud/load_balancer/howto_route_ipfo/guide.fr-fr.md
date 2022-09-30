---
title: "Routage d'une Additional IP"
slug: route-ipfo
excerpt: 'Ce guide vous explique comment utiliser une Additional IP avec le service OVHcloud Load Balancer'
section: Configuration
---

**Dernière mise à jour le 07/02/2022**

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/). Cela n'a aucun impact sur ses fonctionnalités ou le fonctionnement de vos services.
>

## Objectif

Une Additional IP est une adresse IP basculable d'un service à l'autre. Elle offre donc la possibilité de disposer d'une infrastructure résistant à une grande diversité de problèmes (pannes matérielles, surcharges de vos services, maintenance...).

Pour plus d'informations sur l'Additional IP, nous vous recommandons la lecture du [document de présentation](https://www.ovhcloud.com/fr/bare-metal/ip/).

Le service OVHcloud Load Balancer offre quant à lui des fonctionnalités de répartition de charge sur différents protocoles : HTTP, HTTPS, TCP et UDP. Associé à une Additional IP, il devient possible de basculer votre infrastructure existante vers un Load Balancer sans perturber ou interrompre les services de vos clients. En effet il n'y aura désormais plus de changement d'adresse IP dans la mesure où vous utiliserez toujours l'Additional IP, donc pas de délai de propagation des DNS.

Pour plus d'informations sur le service OVHcloud Load Balancer, nous vous conseillons de consulter la [présentation générale de l'offre](https://docs.ovh.com/fr/load-balancer/iplb-presentation/).

**Ce guide vous explique comment utiliser une Additional IP avec le service OVHcloud Load Balancer.**

## Prérequis

- Disposer d'un [Load Balancer OVHcloud](https://www.ovh.com/fr/solutions/load-balancer/) correctement configuré.
- Disposer d'une [Additional IP](https://www.ovhcloud.com/fr/bare-metal/ip/).

> [!primary]
>
> **Configuration du Load Balancer requise**
>
> Afin de valider le changement dans la liste des Additional IPs associées au Load Balancer, il est nécessaire de pouvoir actualiser celui-ci. Pour ce faire, plusieurs conditions doivent être réunies :
> 
> - Si le Load Balancer est dans un vRack, toutes les fermes doivent être dans le vRack. De plus, le Load Balancer doit disposer de son vLAN. Sinon, aucune ferme ne doit être dans un vRack.
>
> - Au moins un frontend présent. Tous les frontends doivent être valides. Ils peuvent donc être désactivés ou activés, avec soit :
>    - une route valide (avec une règle de routage) ;
>    - une redirection (`redirectLocation`{.action}) ;
>    - une ferme par défaut.
>
> - Aucun autre rafraîchissement du Load Balancer ne doit être en cours. Un Load Balancer ne peut pas être actualisé/rafraîchi plusieurs fois en même temps. Cela n'aurait pas de sens quand à la configuration résultante.
>

## En pratique

Dans la suite de ce document, nous allons voir 2 cas d'usages distincts.

- Associer une Additional IP à votre service OVHcloud Load Balancer.
- Associer une Additional IP à un seul et unique frontend de votre service OVHcloud Load Balancer.

### Ajouter une Additional IP

Depuis l'[API OVHcloud](https://api.ovh.com){.external}, vous pouvez associer ces IPs avec votre service OVHcloud Load Balancer.

Voici l'appel API pour cela :

> [!api]
>
> @api {POST} /ip/{ip}/move
> 

Vous pouvez ensuite lister les Additional IPs attachées à votre OVHcloud Load Balancer à l'aide de l'appel suivant :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/failover
>

Les Additional IPs attachées à votre Load Balancer seront disponibles pour tous vos frontends.
Contrairement au cas suivant dans lequel nous allons attacher une Additional IP à un seul frontend.

### Additional IP dédiée

Quel que soit le type de frontend que vous souhaitez utiliser, il est possible de définir une liste d'Additional IPs dédiées qui lui seront attachées.
À noter que, dans ce cas précis, votre Additional IP sera rattachée à un seul et unique frontend.
Elle ne permettra donc d'accéder qu'aux services fournis par ce frontend.
Les services de vos autres frontends restent quant à eux accessibles via l'adresse IP de votre IPLB.

#### Depuis l'API OVHcloud

##### **Création d'un frontend**

Depuis l'[API OVHcloud](https://api.ovh.com){.external}, l'appel suivant vous permettra de définir une ou plusieurs Additional IPs sur un frontend pendant sa création :

- protocole HTTP

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/http/frontend
> 

- protocole TCP

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/frontend
> 

- protocole UDP

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/udp/frontend
> 


##### **Mise à jour d'un frontend**

Toujours depuis l'[API OVHcloud](https://api.ovh.com){.external}, l'appel suivant vous permettra de définir une ou plusieurs Additional IPs sur un frontend existant :

- protocole HTTP

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

- protocole TCP

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> 

- protocole UDP

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 

#### Depuis l'espace client OVHcloud

Vous pouvez définir vos Additional IPs dédiées depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Rendez-vous dans la partie `Bare metal Cloud`{.action} puis dans `Load Balancer`{.action}.

Après avoir sélectionné le Load Balancer que vous souhaitez modifier, créez un nouveau frontend, ou éditez-en un existant.

Dans les `Paramètres avancés`{.action}, vous pourrez choisir la ou les Additional IPs que vous souhaitez associer à votre frontend.

![Configurer le frontend en associant une IP Fail-Over](images/iplb_frontend.png){.thumbnail}

Une fois le frontend configuré, cliquez sur `Ajouter`{.action} ou `Modifier`{.action} selon que vous configuriez un nouveau frontend, ou un frontend existant.

N'oubliez pas de déployer la configuration. Pour ce faire, vous pouvez au choix :

- dans la section `Statut` de l'onglet `Accueil`{.action}, cliquer sur le bouton `...`{.action} de votre Load Balancer puis cliquer sur `Appliquer la configuration`{.action};
- dans le bandeau de rappel vous précisant que la configuration n'est pas appliquée, cliquer sur `Appliquer la configuration`{.action}.

![Application d'une Configuration d'un Load Balancer](images/apply_configuration.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
