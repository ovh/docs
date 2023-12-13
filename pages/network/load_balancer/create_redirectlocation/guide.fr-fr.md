---
title: "Configuration d'un service OVHcloud Load Balancer avec les redirections"
excerpt: Intégrez vos services web derrière un Load Balancer avec les redirections
updated: 2022-03-28
---

## Objectif

Le service OVHcloud Load Balancer agit par défaut comme un mandataire ou « Proxy ». Il peut aussi être configuré pour rediriger vos clients vers un site tiers, par exemple dans le cas d'un changement de nom de domaine ou pour rediriger vos clients en HTTPS. C'est que l'on appelle la redirection HTTP.

## Prérequis

- Posséder une offre [OVHcloud Load balancer](https://www.ovh.com/fr/solutions/load-balancer/) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté à l'[API OVHcloud](https://api.ovh.com/){.external}.

## En pratique

### Présentation

Une redirection HTTP se présente ainsi :

```bash
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/
Content-Type: text/html
Content-Length: 174
```

Les Rrdirections personnalisées doivent être de la forme `<scheme>://<net_loc>/<path>;<params>?<query>#<fragment>`. Il n'est possible de spécifier qu'une seule redirection par frontend.

Les redirections personnalisées peuvent être spécifiées via l'espace client ou via l'API, tant sur un nouveau frontend qu'un existant.

### Ajouter une redirection personnalisée depuis l'espace client OVHcloud

Il est possible de définir une redirection personnalisée depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Bare Metal Cloud`{.action} puis `Load Balancer`{.action}.
Cela peut-être effectué tant sur un nouveau frontend pendant sa création, que sur un frontend existant.

#### Ajout d'un nouveau frontend

Dans la section `Frontends`{.action}, cliquez sur le bouton `Ajouter un frontend`{.action} pour en créer un nouveau.

Dans la page d'édition d'un frontend, sélectionnez le protocole `HTTP`{.action} ou `HTTPS`{.action}.<br>
Configurez les informations normalement. Il est cependant inutile de préciser la `Ferme par défaut`{.action}, celle-ci ne sera pas utilisée.

Dans les paramètres avancés, renseignez la `Redirection HTTP`{.action}.

#### Édition d'un frontend existant

Dans la section `Frontends`{.action}, cliquez que le bouton `...`{.action} à droite du frontend concerné et sélectionnez `Modifier`{.action}.<br>
Assurez vous que le frontend choisi soit bien de protocole `HTTP` ou `HTTPS`. Complétez la configuration si besoin.
Il est cependant inutile de préciser la `Ferme par défaut`{.action}, celle-ci ne sera pas utilisée.

Dans les paramètres avancés, renseignez la `Redirection HTTP`{.action}.

![Configuration d'une Redirection d'un Frontend](images/add_redirectlocation.png){.thumbnail}

Une fois le frontend configuré, cliquez sur `Ajouter`{.action} ou `Modifier`{.action} selon que vous configurez un nouveau frontend, ou un frontend existant.
N'oubliez pas de déployer la configuration.
Pour ce faire, vous pouvez au choix :

- dans la section `Statut` de l'onglet `Accueil`{.action}, cliquez sur le bouton `...`{.action} de votre Load Balancer puis cliquez sur `Appliquer la configuration`{.action}.

- dans le bandeau de rappel vous précisant que la configuration n'est pas appliquée, cliquez sur `Appliquer la configuration`{.action}.

![Application d'une Configuration d'un Load Balancer](images/apply_configuration.png){.thumbnail}

### Ajouter une redirection personnalisée depuis l'API OVHcloud

Dans l'[API OVHcloud](https://api.ovh.com/){.external}, les redirections sont spécifiées dans la chaîne de caractère redirectLocation :

#### Création d'un nouveau frontend

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

#### Mise à jour d'un frontend existant

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> 

|Paramètre|Signification|
|---|---|
|serviceName|Identifiant de votre service Load Balancer|
|frontendId|Identifiant du frontend à mettre à jour|
|redirectLocation|URL de redirection HTTP|

#### Appliquer les modifications :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

|Paramètre|Signification|
|---|---|
|serviceName|Identifiant de votre service Load Balancer|
|zone|Zone de déploiement du frontend|

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
