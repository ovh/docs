---
title: Modes de répartition
excerpt: Découvrez les différents modes de répartition de charge du Load Balancer OVHcloud
updated: 2025-10-24
---

## Objectif

Le service OVHcloud Load Balancer prend en charge différents algorithmes de répartition de charge pour vos services. Ce paramètre détermine la manière dont le Load Balancer va distribuer les requêtes clientes entrantes vers les serveurs d'une ferme.

**Ce guide présente les différents algorithmes de répartition de charge et explique comment les modifier.**

## Prérequis

- Posséder une offre [OVHcloud Load balancer](/links/network/load-balancer) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager)
- Posséder une ferme de serveurs créée.

## En pratique

### Algorithmes de répartition de charge disponibles

L'algorithme de répartition de charge est appliqué au niveau des fermes de serveurs. C'est ce paramètre qui définit la manière dont les requêtes sont réparties entre les serveurs de la ferme.

Pour une vue d'ensemble des composants du service OVHcloud Load Balancer, consultez ce guide : [Présentation du service OVHcloud Load Balancer](/pages/network/load_balancer/use_presentation).

|Algorithme|Fonctionnalités|
|---|---|
|**First**|Dirige la connexion vers le premier serveur disponible en fonction de son ID (du plus petit au plus grand).|
|**LeastConn**|Sélectionne le serveur qui a le moins de connexions actives. Ceci est recommandé pour les sessions longues avec peu de trafic. L'algorithme *RoundRobin* est appliqué pour départager les serveurs ayant un nombre de connexions actives égal.|
|**RoundRobin**|Distribue les connexions séquentiellement, les unes après les autres, pour chaque nouvelle requête. **C'est l'algorithme par défaut.**|
|**Source**|Utilise une fonction de *hachage* sur l'adresse IP source pour rediriger systématiquement la même IP cliente vers le même serveur, tant que celui-ci reste opérationnel.|
|**URI**|Utilise une fonction de *hachage* sur une partie ou la totalité de l'URI pour rediriger systématiquement les URI identiques vers le même serveur, tant que celui-ci reste opérationnel. *(Applicable uniquement aux fermes HTTP/HTTPS.)*|

### Modifier l'algorithme de répartition de charge d'une ferme via l'espace client OVHcloud

Dans la section `Fermes de serveur`{.action}, vous verrez les fermes actuellement créées. Il vous suffit d'éditer l'une d'entre elles en cliquant sur les trois points à droite puis sur `Modifier`{.action} :

![Modification d'une ferme](images/server_cluster_change.png){.thumbnail}

Dans les `Paramètres avancés`{.action} vous pourrez modifier votre `Mode de répartition`{.action} :

![Modification d'une ferme](images/distrib_mode_edit.png){.thumbnail}

Une fois l'algorithme souhaité sélectionné, cliquez sur `Mettre à jour`{.action}, puis sur `Appliquer la configuration`{.action} dans le bandeau jaune qui apparaît :

![Appliquer la configuration](images/apply_config.png){.thumbnail}

### Modifier l'algorithme de répartition de charge d'une ferme depuis l'API OVHcloud

La modification de l'algorithme de répartition s'effectue en éditant le champ correspondant dans la configuration de la ferme de serveurs.

#### Voir le détail d'une ferme

Cet appel API permet de consulter le détail d'une ferme en connaissant son identifiant. Dans cet exemple, nous travaillons sur une ferme HTTP :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

|Paramètre|Signification|
|---|---|
|serviceName*|Identifiant de votre service Load Balancer|
|farmId*|Identifiant numérique de la ferme|

|Réponse (BackendHttp)|Signification|
|---|---|
|farmId|Identifiant numérique de la ferme|
|balance|Algorithme de répartition de charge actuellement configuré sur la ferme|
|zone|Nom de la zone où est configurée la ferme|
|port|Port utilisé pour contacter les serveurs configurés sur la ferme|
|probe|Type de sonde actuellement configurée sur la ferme|
|displayName|Nom donné à cette ferme|
|stickiness|Mode de suivi de connexion actuellement configuré sur la ferme|

#### Modifier l'algorithme de répartition de charge d'une ferme

Cet appel API permet de modifier la configuration d'une ferme en connaissant son identifiant. Dans cet exemple, nous travaillons sur une ferme HTTP. Pour modifier le mode de répartition, le champ `BackendHttp.balance` doit être mis à jour avec un algorithme disponible :

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{id}
>

|Paramètre|Signification|
|---|---|
|serviceName*|Identifiant de votre service Load Balancer|
|farmId*|Identifiant numérique de la ferme|
|BackendHttp.balance|Algorithme de répartition souhaité pour cette ferme|

#### Appliquer les modifications

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

|Paramètre|Signification|
|---|---|
|serviceName*|Identifiant de votre service Load Balancer|
|zone*|Nom de la zone dans laquelle déployer la configuration|

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).