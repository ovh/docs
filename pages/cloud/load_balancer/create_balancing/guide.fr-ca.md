---
title: Mode de répartition
slug: iplb-balancing
excerpt: Découvrez les différents modes de répartition de charge de l'OVH Load Balancer
section: Configuration
---

## Objectif

Le nouveau service OVH Load Balancer offre différents types de répartition de charge pour vos services. Ce processus détermine la manière dont l'OVH Load Balancer va répartir les requêtes reçues vers vos serveurs.

**Ce guide vous présente les différents types de répartition de charge et vous explique comment les modifier.**

## Prérequis

- Être connecté à l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager).
- Posséder une ferme de serveurs créée.


## En pratique

### Les différents types de répartition de charge

La répartition de charge est utilisée dans les fermes de serveurs. C'est ce paramètre qui définit la manière dont les requêtes sont réparties entre les serveurs de la ferme.

Pour connaître les différentes parties élémentaires du service OVH Load Balancer, voir [Présentation Load Balancer](https://docs.ovh.com/fr/load-balancer/iplb-presentation/){.external}.

|Algorithme|Fonctionnalités|
|---|---|
|First|Le premier serveur disponible reçoit la connexion. Le serveur est choisi en fonction de son ID, du plus petit au plus grand.|
|LeastConn|Sélectionne le serveur qui a le moins de connexions actives, c'est le paramètre recommandé pour de longues sessions avec peu de trafic. L'algorithme *RoundRobin* est appliqué sur les groupes de serveurs qui ont le même nombre de connexion actives.|
|RoundRobin|Sélectionne les serveurs les uns après les autres pour chaque connexion, **c'est l'algorithme par défaut.**|
|Source|Cet algorithme effectue une fonction de *hashage* (hash) sur l'adresse IP source, puis divise le résultat par le nombre de serveurs actuellement actifs. La même adresse IP source sera alors toujours redirigée vers le même serveur, tant que celui-ci reste actif.|
|URI|Cet algorithme effectue une fonction de *hashage* (hash) sur une partie, ou sur l'URI entière, puis divise le résultat par le nombre de serveurs actuellement actifs. Le même URI sera alors toujours redirigée vers le même serveur tant, que celui-ci reste actif.|


### Modifier le mode de répartition de charge d'une ferme via l'espace client

- Dans la section `Fermes de serveur`{.action} (1) vous verrez les fermes actuellement créées. Il vous suffit d'éditer l'une d'entre elles en cliquant sur les trois points à droite (2) puis `Modifier`{.action} :

![Modification d'une ferme](images/server_cluster_change.png){.thumbnail}

Dans les `Paramètres avancés`{.action} vous pourrez modifier votre `Mode de répartition`{.action} :

![Modification d'une ferme](images/distrib_mode_edit.png){.thumbnail}

Une fois le mode de répartition souhaité sélectionné, cliquez sur `Mettre à jour`{.action}, puis sur `Appliquer la configuration`{.action} dans le bandeau jaune qui apparaît :

![Appliquer la configuration](images/apply_config.png){.thumbnail}


### Modifier le mode de répartition de charge d'une ferme via l'API

La modification des paramètres de mode de répartition s'effectue en éditant ceux de la ferme de serveurs.

- Voir le détail d'une ferme

Cet appel permet de consulter le détail d'une ferme en connaissant son identifiant. Dans cet exemple, nous allons travailler sur une ferme HTTP :

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Paramètre|Signification|
|---|---|
|ServiceName\*|Identifiant de votre service Load Balancer|
|farmId\*|Identifiant numérique de la ferme|

|Réponse (BackendHttp)|Signification|
|---|---|
|farmId|Identifiant numérique de la ferme|
|balance|Type de répartition actuellement configuré sur la ferme|
|zone|Nom de la zone où est configurée la ferme|
|port|port utilisé pour contacter les serveurs configurés sur la ferme|
|probe|Type de sonde actuellement configurée sur la ferme|
|displayName|Nom donné à cette ferme|
|stickiness|Mode de suivi de connexion actuellement configuré sur la ferme|

- Modifier le mode de répartition d'une ferme

Cet appel permet de modifier la configuration d'une ferme en connaissant son identifiant. Dans cet exemple, nous allons travailler sur une ferme HTTP. Pour modifier le mode de répartition, le champ `BackendHttp.balance` doit être mis à jour avec un mode de répartition disponible :

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{id}
> 

|Paramètre|Signification|
|---|---|
|ServiceName\*|Identifiant de votre service Load Balancer|
|farmId\*|Identifiant numérique de la ferme|
|BackendHttp.balance|Type de répartition souhaité pour cette ferme|

- Appliquer les modifications

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 

|Paramètre|Signification|
|---|---|
|ServiceName\*|Identifiant de votre service Load Balancer|
|zone\*|Nom de la zone dans laquelle déployer la configuration|


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
