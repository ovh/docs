---
title: 'Suivi des connexions sur l’OVHcloud Load Balancer'
excerpt: 'Découvrez les méthodes disponibles pour suivre les connexions sur l’OVHcloud Load Balancer.'
updated: 2025-11-27
---

## Objectif

Le service [Load Balancer OVHcloud](/links/network/load-balancer) propose plusieurs méthodes pour le **suivi de connexion** (également appelé *persistence de session* ou *stickiness*) vers vos services.

Chaque session du service OVHcloud Load Balancer est maintenue par un système de persistence de connexion. Ce système est configuré au niveau de la **couche applicative** du service OVHcloud Load Balancer afin d'assurer la persistance de la connexion vers le serveur.

**Ce guide présente différentes façons de configurer le suivi de connexion pour le Load Balancer OVHcloud.**

## Prérequis

- Disposer d'un [Load Balancer OVHcloud](/links/network/load-balancer).
- Avoir accès à l'[espace client OVHcloud](/links/manager), ou bien
- Avoir accès à l'[API OVHcloud](/links/api).

## En pratique

### Les différents types de suivi de connexion

Deux méthodes principales de suivi de connexion peuvent être configurées pour vos services :

| Méthode de suivi | Détails |
|---|---|
| Cookie | Configure un cookie de session, utilisé pour toujours répartir le trafic d'une même session HTTP vers le même serveur dans la ferme. |
| SourceIp | Un algorithme de hash est appliqué à l'adresse IP source de la requête reçue par l’OVHcloud Load Balancer. Cela garantit que la même adresse IP client est toujours dirigée vers le même serveur. |

Les éléments suivants affecteront la redirection du trafic :

- le poids configuré change
- un serveur de la ferme se réactive
- un serveur de la ferme ne répond plus

> [!warning]
>
> Après un rafraichissement de votre configuration, les connexions existantes seront rééquilibrées, vos sessions HTTP seront donc perdues.
> 

### Modifier le mode de suivi de connexion d’une ferme via l’espace client OVHcloud

Pour modifier le suivi de connexion d’une ferme, rendez-vous sur l’onglet `Ferme de serveurs`{.action}, puis cliquez sur le bouton `...`{.action} sur la droite de la ferme voulue et sélectionnez `Modifier`{.action} :

![Modifier une ferme](images/farm_edit-2022.png){.thumbnail}

Dans la section `Paramètres avancés`{.action}, vous pourrez accéder à la section `Suivi de session`{.action} :

![Modifier le suivi de connexions](images/tracking_session-2022.png){.thumbnail}

Une fois que vous avez configuré la ferme, cliquez sur `Ajouter`{.action} ou `Modifier`{.action}, selon que vous configuriez une nouvelle ferme ou modifiiez une ferme existant.

N’oubliez pas de déployer la configuration. Il existe deux façons de le faire :

- dans la section `Statut`{.action} de l’espace client, en cliquant sur le bouton `...`{.action} de votre Load Balancer, puis en sélectionnant `Appliquer la configuration`{.action}

- dans le bandeau de rappel vous précisant que la configuration n'est pas appliquée, cliquer sur `Appliquer la configuration`{.action}.

![Appliquer une configuration au Load Balancer](images/apply_configuration-2022.png){.thumbnail}

### Modifier le mode de suivi de connexion d’une ferme via l’API

#### Voir les détails d’une ferme

Cette requête API vous permet de consulter les détails d’une ferme si vous connaissez son ID. Dans cet exemple, nous travaillerons sur une ferme HTTP.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Paramètre|Signification|
|---|---|
|serviceName\*|Identifiant de votre service Load Balancer|
|farmId\*|Identifiant numérique de la ferme|

|Réponse (BackendHttp)|Signification|
|---|---|
|farmId|Identifiant numérique de la ferme|
|balance|Type de répartition actuellement activé sur la ferme|
|zone|Nom de la zone où est configurée la ferme|
|port|Port utilisé pour contacter les serveurs configurés sur la ferme|
|probe|Type de sonde actuellement configurée sur la ferme|
|displayName|Nom donné à cette ferme|
|stickiness|Mode de suivi de connexion actuellement configuré sur la ferme|

#### Modifier le mode de suivi de connexion d’une ferme

Cette requête API vous permet de modifier les paramètres d’une ferme si vous connaissez son ID. Dans cet exemple, nous travaillerons sur une ferme HTTP. Pour modifier le mode de suivi de connexion, le champ `BackendHttp.stickiness` doit être mis à jour avec un mode de suivi de connexion disponible :

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{id}
> 

|Paramètre|Signification|
|---|---|
|serviceName\*|Identifiant de votre service Load Balancer|
|farmId\*|Identifiant numérique de la ferme|
|BackendHttp.stickiness|Mode de suivi de connexion souhaité pour cette ferme|

#### Appliquer les modifications

Cette requête API est nécessaire pour déployer les modifications de configuration sur le service Load Balancer.

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

|Paramètre|Signification|
|---|---|
|serviceName\*|Identifiant de votre service Load Balancer|
|zone|Nom de la zone dans laquelle déployer la configuration, "all" ou "rbx" par exemple|

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).