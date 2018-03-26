---
title: Nouveautés sur le Load Balancer
slug: changelog
excerpt: Modification de l’API Load Balancer
section: Configuration
---


## Introduction

Nous avons repensé certains appels à l'API, voici la liste des changements que nous avons apportés.


## Nouveautés

### Pré-validation de la validité des `refresh`

L'appel api

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
>

effectue maintenant une pré-validation partielle de la configuration des Frontends, afin d'éviter les erreurs les plus classiques.

Nota : pour permettre de déconfigurer les Load Balancers, `refresh` considère qu'un Frontend désactivé est valide. Il s'agit d'ailleurs de la façon recommandée pour déconfigurer un Load Balancer (désactiver les Frontends, puis appliquer les changements).


### Statut du Load Balancer

L'appel api 

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/status
>

retourne une analyse rapide de l'état des différents Frontend, Ferme et Serveur du Load Balancer. L'appel renvoie un tableau associatif où, pour chaque catégorie, est listé le nombre d'éléments dans les différents états recensés. 


### Séparation des protocoles

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/
> 

Nous avons séparé les différents protocoles, pour permettre d'ajouter des spécificités par protocole.

Par exemple avec **HTTP**, vous pouvez définir un stickyness de type cookie, non présent en **UDP** et **TCP**.


### Retrait des limitations de zone

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/availableServerZones
> 

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/allowedServers
> 

L'appel AllowedServers/availableServerZones servaient à limiter les zones et backends possible, ceci n'est maintenant plus vrai, vous pouvez définir l'IP public de votre choix.


### Backends et Farm (et protocole)

Les appels **backends** ont été renommées en **Farm**. Le terme backends induit un serveur, et non un pool de serveur. Nous renommons backends en **farm** dans les nouveaux calls api.

Rappel : le protocole est maintenant décrit.

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/backend
> @api {GET} /ipLoadbalancing/{serviceName}/backend/{id}/server

sont remplacés par :

> [!api]
>
> @api {GET} /iploadbalancing/{servicename}/http/farm 
> @api {GET} /iploadbalancing/{servicename}/http/farm/{id}/server
> @api {GET} /iploadbalancing/{servicename}/tcp/farm 
> @api {GET} /iploadbalancing/{servicename}/tcp/farm/{id}/server

Il en est de même pour les appels API `POST` et `DELETE`.

### Gestion des IP dans la ferme

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> 

L'ajout de serveur dans la ferme ne se fait plus en ajoutant une liste de serveur (IP) et en liant ces serveurs à un backend. Vous pouvez directement ajouter le serveur dans la ferme via cet appel.


### IPv6

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}
> 

L'IPv6 en frontal a été déployée pour l'ensemble des services OVH Load Balancer. Le trafic vers les backends reste en IPv4, cela sera ajouté par la suite.


### Let's Encrypt

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/freeCertificate
> 

Vous pouvez ajouter des certificats SSL Let's Encrypt directement gerés par l'OVH Load Balancer.
