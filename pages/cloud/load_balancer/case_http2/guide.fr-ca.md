---
title: 'Configurer HTTP/2 sur un service OVHcloud Load Balancer'
slug: iplb-http2
excerpt: 'Configuration de HTTP/2 sur un service OVHcloud Load Balancer'
section: 'Cas d''usage'
---

**Dernière mise à jour le 16/05/2018**

## Objectif

L'OVHcloud Load Balancer ne supporte pas actuellement le protocole HTTP/2. Il existe cependant un moyen de contourner cette restriction, en utilisant conjointement le mode TCP et l'extension ALPN du protocole TLS.


ALPN (Application-Layer Protocol Negotiation) est une extension TLS qui permet à la couche applicative de négocier quel protocole sera utilisé (h2 dans notre cas).

**Ce guide a pour but de vous aider à créer un service HTTP/2 avec l'offre Load Balancer OVHcloud. Nous allons ici configurer ce service pour répartir la charge sur plusieurs serveurs répondant en HTTP/2.**


## Prérequis

- Disposer d'un [Load Balancer OVHcloud](https://www.ovh.com/ca/fr/solutions/load-balancer/){.external}.
- Un frontend TCP est créé sur le port 443.
- Une ferme TCP est créée et des serveurs sont ajoutés.
- Avoir accès à l'[API OVHcloud](https://ca.api.ovh.com/){.external}.

## En pratique

> [!warning]
>
> L'ordre de création des éléments est important : les routes doivent être configurées avant de pouvoir leur attacher des règles.
> 


### Ajouter une route

Nous allons ajouter une route à notre service.


#### Via l'API

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/route
> 

> [!warning]
>
> Le paramètre weight permet de définir l'ordre d'évaluation de vos routes, la première qui est validée sera exécutée.
> 

> Paramètres :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVHcloud Load Balancer|
|frontendId|Identifiant de votre Frontend TCP port 443|
|displayName|"HTTP2 TCP route"|
|weight|(vide)|
|action.type|"farm"|
|action.target|Identifiant de votre ferme tcp qui doit savoir gérer le HTTP/2|


### Ajouter une règle

Nous allons maintenant ajouter une règle à notre route.



#### Via l'API

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
> 

> Paramètres :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVHcloud Load Balancer|
|routeId|Identifiant de la route précédemment créée|
|field|"protocol" Le nom du champ qui doit vérifier la règle|
|match|"is" Le type de la vérification à faire|
|pattern|"http/2.0" La valeur à vérifier pour le champ spécifié|


### Appliquer les modifications

Les modifications apportées à votre OVHcloud Load Balancer doivent être *appliquées explicitement* dans chacune des zones configurées pour votre service. C'est seulement à ce moment qu'elles seront visibles pour vos visiteurs. Cela permet d'effectuer un changement complexe de configurations en une seule fois.

Si vous avez plusieurs zones, vous devrez appliquer la même configuration pour chacune d'elles.


#### Via l'API

Rafraîchir une zone :

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 

> Paramètres :

|Champ|Valeur et description|
|---|---|
|serviceName|Identifiant de votre service OVHcloud Load Balancer|
|zone|Identifiant de la zone sur laquelle vous voulez appliquer votre configuration|


### Valider

Après toutes ces étapes, vous devez maintenant disposer d'un service de répartition de charge fonctionnel pour vos serveurs HTTP/2. Vous pouvez alors valider l'état du service en interrogeant votre OVHcloud Load Balancer puis en vérifiant la version de la réponse :

```bash
curl -I --http2 https://www.ovh.com/
HTTP/2 200
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
