---
title: Configurer HTTP/2 sur un service OVH Load Balancer
slug: iplb-http2
excerpt: Configuration de HTTP/2 sur un service OVH Load Balancer
section: Cas d'usage
---

**Dernière mise à jour le 15/11/2017**

## Objectif

L'OVH Load Balancer ne supporte pas actuellement le protocole HTTP/2. Il existe cependant un moyen de contourner cette restriction, en utilisant conjointement le mode TCP et l'extension ALPN du protocole TLS.


ALPN (Application-Layer Protocol Negotiation) est une extension TLS qui permet à la couche applicative de négocier quel protocole sera utilisé (h2 dans notre cas).

**Ce guide a pour but de vous aider à créer un service HTTP/2 avec l'offre Load Balancer OVH. Nous allons ici configurer ce service pour répartir la charge sur plusieurs serveurs répondant en HTTP/2.**


## Prérequis

- Un frontend TCP est créé.
- Une ferme TCP est créée et des serveurs sont ajoutés.


## En pratique

> [!warning]
>
> L'ordre de création des éléments est important : les routes doivent être configurées avant de pouvoir leur attacher des règles.
> 


### Ajouter une route

Nous allons ajouter une route à notre service.


#### Via l'API

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> `<identifiant du Load Balancer>`
>> >
>> > **action**
>> >
>> >> **type**
>> >> >
>> >> > `"farm"`
>> >>
>> >> **target**
>> >> >
>> >> > `<id de votre ferme tcp qui doit savoir gérer le HTTP/2>`
>> >
>> > **frontendId**
>> >
>> >> `<id de votre frontend tcp 443>`
>


### Ajouter une règle

Nous allons maintenant ajouter une règle à notre route.



#### Via l'API

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> `<identifiant du Load Balancer>`
>> >
>> > **routeId**
>> >
>> >> `<id de la route créée ci-dessus>`
>> >
>> > **field**
>> >
>> >> `"protocol"`
>> >
>> > **match**
>> >
>> >> `"is"`
>> >
>> > **pattern**
>> >
>> >> `"http/2.0"`
>


### Appliquer les modifications

Les modifications apportées à votre OVH Load Balancer doivent être *appliquées explicitement* dans chacune des zones configurées pour votre service. C'est seulement à ce moment qu'elles seront visibles pour vos visiteurs. Cela permet d'effectuer un changement complexe de configurations en une seule fois.

Si vous avez plusieurs zones, vous devrez appliquer la même configuration pour chacune d'elles.


#### Via l'API

Rafraîchir une zone :

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> `<identifiant du Load Balancer>`
>> >
>> > **zone**
>> >
>> >> `<zone où déployer la configuration>`
>

### Valider

Après toutes ces étapes, vous devez maintenant disposer d'un service de répartition de charge fonctionnel pour vos serveurs HTTP/2. Vous pouvez alors valider l'état du service en interrogeant votre OVH Load Balancer puis en vérifiant la version de la réponse :

```bash
curl -I --http2 https://www.ovh.com/
HTTP/2 200
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.