---
title: "Configurer HTTP/2 sur un service OVHcloud Load Balancer"
excerpt: "Découvrez comment choisir et configurer les frontends de votre service Load Balancer OVHcloud, pour une utilisation avec le protocole HTTP/2"
updated: 2026-01-15
---

> [!primary]
> **Note sur le support natif du protocole HTTP/2**
>
> Depuis juin 2025, les frontends HTTP et TLS des services Load Balancer OVHcloud supportent nativement le protocole HTTP/2.
>
> Le guide suivant reste cependant applicable pour les frontends TCP, qui peuvent être utiles pour des applications nécessitant une faible latence et de hautes performances.
>
> Afin d'activer le protocole HTTP/2 sur des frontends HTTP et TLS existants, vous devez effectuer l'appel de rafraîchissement ci-dessous via l'API, où **serviceName** est le nom interne de votre Load Balancer.
>

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

## Objectif

Ce guide a deux objectifs principaux :

- Vous aider à comprendre les distinctions entre les frontends TCP, HTTP et TLS sur un Load Balancer OVHcloud, vous permettant ainsi de déterminer si un frontend TCP est le choix le plus approprié pour vos besoins applicatifs spécifiques, en particulier lors de la gestion du trafic HTTP/2.
- Si un frontend TCP est jugé souhaitable, fournir ensuite des instructions étape par étape sur la façon de le configurer pour équilibrer efficacement le trafic HTTP/2 sur vos serveurs backend.

## Prérequis

Vous aurez besoin de :

- Un service [Load Balancer OVHcloud](/links/network/load-balancer) ;
- Un frontend TCP sur votre Load Balancer ;
- Un cluster de serveurs (ferme) TCP avec au moins un serveur ajouté ;
- Des serveurs backend configurés pour prendre en charge et répondre avec HTTP/2 ;
- Avoir accès à l'[API OVHcloud](/links/api).

## En pratique

### Pourquoi utiliser HTTP/2 ?

HTTP/2 apporte de nombreux avantages pour améliorer les performances et l'efficacité de vos applications :

- *Temps de chargement plus rapides* grâce au multiplexage, qui permet d'envoyer plusieurs requêtes en parallèle sur la même connexion.
- *Latence réduite* en limitant les échanges entre le client et le serveur.
- *Performances réseau optimisées* grâce à la compression des en-têtes.

### Différences entre les frontends HTTP/2 et TCP

Un frontend TCP opère à la Couche 4 (la couche de transport) du modèle OSI. Lorsque vous configurez un frontend TCP, le Load Balancer établit une connexion TCP entre le client et un serveur backend. Cela signifie que le Load Balancer n'inspecte ni ne comprend les données HTTP/2 au sein du flux TCP. Par conséquent, les frontends TCP offrent des performances élevées grâce à un traitement minimal des données.

Cependant, comme il ne comprend pas le protocole applicatif, il ne peut pas effectuer d'optimisations avancées spécifiques à HTTP, telles que le routage basé sur le contenu ou la manipulation des en-têtes HTTP.

Les frontends HTTP et TLS, quant à eux, opèrent à la Couche 7 (la couche application). Lorsqu'un client se connecte à un frontend compatible HTTP/2, le Load Balancer décode entièrement les trames HTTP/2 avant d'établir une connexion avec un serveur backend.

En interprétant le protocole applicatif, un frontend compatible HTTP/2 peut fournir de nombreuses fonctionnalités avancées. Celles-ci incluent la terminaison SSL/TLS (déchargeant le chiffrement/déchiffrement des serveurs backend), le routage basé sur le contenu (par exemple, le routage des requêtes vers différentes fermes de backend en fonction du chemin d'URL ou des en-têtes), la modification des requêtes/réponses et le multiplexage HTTP/2.

**Vous devriez utiliser un frontend TCP lorsque :**

- Vous devez équilibrer la charge d'autres services non-HTTP (par exemple, des bases de données, des applications TCP personnalisées, SSH) ;
- Vous exigez des performances maximales et une latence minimale ;
- Vos serveurs backend gèrent déjà la terminaison SSL/TLS ;
- Vous n'avez pas besoin de fonctionnalités HTTP avancées spécifiques telles que le routage basé sur le contenu, la manipulation des en-têtes HTTP ou les optimisations au niveau du protocole HTTP/2.

**Vous devriez utiliser un frontend compatible HTTP/2 lorsque :**

- Vous traitez principalement du trafic web (HTTP/HTTPS) ;
- Vous souhaitez tirer parti des avantages de performance de HTTP/2 entre le client et le Load Balancer ;
- Vous souhaitez déléguer la terminaison SSL/TLS de vos serveurs backend à votre Load Balancer ;
- Vous avez besoin d'une logique de routage avancée basée sur les en-têtes HTTP, les URL ou d'autres attributs de la couche application ;
- Vous souhaitez optimiser l'expérience côté client en tirant parti des fonctionnalités HTTP/2.

*Si vous choisissez d'utiliser un frontend TCP, suivez les étapes suivantes de ce guide pour le configurer pour une utilisation HTTP/2*.

### Configurer un frontend TCP pour HTTP/2

> [!warning]
>
> L'ordre de création des éléments est important : les routes doivent être configurées **avant** de pouvoir leur attacher des règles.
> 

#### Ajouter une route

Nous allons ajouter une route à notre service.

##### Depuis l'API OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
> 

> [!warning]
>
> Le paramètre weight permet de définir l'ordre d'évaluation de vos routes, la première qui est validée sera exécutée.
> 

Paramètres :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVHcloud Load Balancer|
|frontendId|Identifiant de votre Frontend TCP port 443|
|displayName|"HTTP2 TCP route"|
|weight|(vide)|
|action.type|"farm"|
|action.target|Identifiant de votre ferme tcp qui doit savoir gérer le HTTP/2|

#### Ajouter une règle

Nous allons maintenant ajouter une règle à notre route.

##### Depuis l'API OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
> 

Paramètres :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVHcloud Load Balancer|
|routeId|Identifiant de la route précédemment créée|
|field|"protocol" Le nom du champ qui doit vérifier la règle|
|match|"is" Le type de la vérification à faire|
|pattern|"http/2.0" La valeur à vérifier pour le champ spécifié|

#### Appliquer les modifications

Les modifications apportées à votre OVHcloud Load Balancer doivent être *appliquées explicitement* dans chacune des zones configurées pour votre service. C'est seulement à ce moment qu'elles seront visibles pour vos visiteurs. Cela permet d'effectuer un changement complexe de configurations en une seule fois.

Si vous avez plusieurs zones, vous devrez appliquer la même configuration pour chacune d'elles.

#### Rafraîchir une zone

##### Depuis l'API OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

Paramètres :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVHcloud Load Balancer|
|zone|Identifiant de la zone sur laquelle vous voulez appliquer votre configuration|

#### Valider

Après toutes ces étapes, vous devez maintenant disposer d'un service de répartition de charge fonctionnel pour vos serveurs HTTP/2. Vous pouvez alors valider l'état du service en interrogeant votre OVHcloud Load Balancer puis en vérifiant la version de la réponse :

```bash
curl -I --http2 https://www.ovh.com/
HTTP/2 200
```

## Aller plus loin

Si vous souhaitez obtenir plus d'informations sur le protocole HTTP/2, rendez-vous sur <https://http2.github.io/>.

Échangez avec notre [communauté d'utilisateurs](/links/community).
