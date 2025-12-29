---
title: "Configuration d'un service OVHcloud Load Balancer avec les redirections"
excerpt: Intégrez vos services web derrière un Load Balancer avec les redirections
updated: 2025-11-27
---

## Objectif

Le **Load Balancer OVHcloud** fonctionne par défaut comme un proxy, un intermédiaire entre le trafic client et vos serveurs backend. Il peut également être configuré pour rediriger le trafic client vers un site web tiers. Cette fonctionnalité est essentielle pour des scénarios tels que la **migration de nom de domaine** ou l'application de la **version HTTPS** d'un site web. On parle alors de **redirection HTTP**.

**Ce guide décrit le processus d'intégration de vos services web derrière un Load Balancer OVHcloud utilisant des redirections HTTP.**

## Prérequis

- Posséder une offre [OVHcloud Load balancer](/links/network/load-balancer) dans votre compte OVHcloud.
- Avoir accès à votre [espace client OVHcloud](/links/manager).
- Avoir accès à l'[API OVHcloud](/links/api).

## En pratique

### Présentation

Une redirection HTTP se présente ainsi :

```bash
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/
Content-Type: text/html
Content-Length: 174
```

Les redirections personnalisées doivent utiliser le format `<scheme>://<net_loc>/<path>;<params>?<query>#<fragment>`. Il n'est possible de spécifier qu'une seule redirection par frontend.

Les redirections personnalisées peuvent être spécifiées via l'espace client ou via l'API, tant sur un nouveau frontend qu'un existant.

### Ajouter une redirection personnalisée depuis l'espace client OVHcloud

Il est possible de définir une redirection personnalisée depuis l'[espace client OVHcloud](/links/manager), dans la partie `Bare Metal Cloud`{.action} puis `Load Balancer`{.action}.
Cela peut-être effectué tant sur un nouveau frontend pendant sa création, que sur un frontend existant.

#### Ajout d'un nouveau frontend

Dans la section `Frontends`{.action}, cliquez sur le bouton `Ajouter un frontend`{.action} pour en créer un nouveau.

Dans la page d'édition d'un frontend, sélectionnez le protocole `HTTP`{.action} ou `HTTPS`{.action}.<br>
Configurez les informations normalement. Il est cependant inutile de préciser la `Ferme par défaut`{.action}, celle-ci ne sera pas utilisée.

Dans les paramètres avancés, renseignez la `Redirection HTTP`{.action}.

#### Édition d'un frontend existant

Dans la section `Frontends`{.action}, cliquez que le bouton `...`{.action} à droite du frontend concerné et sélectionnez `Modifier`{.action}.<br>
Assurez vous que le frontend choisi utilise bien le protocole `HTTP` ou `HTTPS`. Complétez la configuration si besoin.
Il est cependant inutile de préciser la `Ferme par défaut`{.action}, celle-ci ne sera pas utilisée.

Dans les paramètres avancés, renseignez la `Redirection HTTP`{.action}.

![Configuration d'une Redirection d'un Frontend](images/add_redirectlocation.png){.thumbnail}

Une fois le frontend configuré, cliquez sur `Ajouter`{.action} ou `Modifier`{.action} selon que vous configurez un nouveau frontend, ou un frontend existant.
N'oubliez pas de déployer la configuration.
Pour ce faire, vous pouvez au choix :

- Dans la section `Statut` de l'onglet `Accueil`{.action}, cliquez sur le bouton `...`{.action} de votre Load Balancer puis cliquez sur `Appliquer la configuration`{.action}.

- Dans le bandeau de rappel vous précisant que la configuration n'est pas appliquée, cliquez sur `Appliquer la configuration`{.action}.

![Application d'une Configuration d'un Load Balancer](images/apply_configuration.png){.thumbnail}

### Ajouter une redirection personnalisée depuis l'API OVHcloud

Dans l'[API OVHcloud](/links/api), les redirections sont spécifiées dans la chaîne de caractère redirectLocation :

**Création d'un nouveau frontend**

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
> 

|Paramètre|Signification|
|---|---|
|serviceName|Identifiant de votre service Load Balancer|
|port|Port(s) d'écoute du frontend|
|zone|Zone de déploiement du frontend|
|redirectLocation|URL de redirection HTTP|

**Mise à jour d'un frontend existant**

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Paramètre|Signification|
|---|---|
|serviceName|Identifiant de votre service Load Balancer|
|frontendId|Identifiant du frontend à mettre à jour|
|redirectLocation|URL de redirection HTTP|

**Appliquer les modifications**

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

|Paramètre|Signification|
|---|---|
|serviceName|Identifiant de votre service Load Balancer|
|zone|Zone de déploiement du frontend|

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).