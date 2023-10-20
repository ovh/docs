---
title: "Fonctionnalités principales de l'API Load Balancer"
excerpt: "Description rapide des différentes fonctions de l’API servant à gérer le Load Balancer"
updated: 2022-04-04
---

## Liste des fonctions API

Cette section décrit brièvement les principales fonctions de l'API pour le Load Balancer OVHcloud, sous /ipLoadbalancing.

> [!warning]
>
> Attention, pour des raisons de compatibilité, le point d'entrée de l'ancien système OVHcloud Load Balancer est toujours présent dans l'API /ip/loadBalancing, à ne pas confondre avec le nouveau /ipLoadbalancing.
> 

Pour une référence complète des fonctions de l'API du service OVHcloud Load Balancer, [cliquez ici](/pages/network/load_balancer/use_api_details).

> [!primary]
>
> Les frontend, ferme et serveur sont spécifiques au
> protocole (parmi HTTP, TCP ou UDP) dans lequel ils sont définis.
> Bien qu'ils puissent être « combinés » entre eux, ce n'est possible qu'au sein
> d'un même protocole. Ainsi, il n'est pas possible d'utiliser un frontend
> UDP avec une ferme HTTP. Mais il est possible (en l'absence d'autres
> limitations) d'utiliser un frontend HTTP avec une ferme HTTP.
> 

## Frontend

> [!primary]
>
> Comme vous pouvez le constater, chaque catégorie se compose de 3 fonctions API.
> Il est nécessaire de bien exécuter la fonction API qui correspond au type de service souhaité.
> 

### Retourner la liste des IDs des frontends existants

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend
> 

### Créer un frontend

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/frontend
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/frontend
> 

### Retourner les paramètres appliqués à un frontend

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 

### Éditer les paramètres relatifs à un frontend en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 

### Supprimer un frontend

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frntendId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 

## Ferme de serveurs

> [!primary]
>
> Tout comme pour le frontend, chaque catégorie se compose de 3 fonctions API.
> Il est nécessaire de bien exécuter la fonction API qui correspond au type de service souhaité.
> 

### Retourner la liste des IDs des fermes existantes

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm
> 

### Créer une ferme

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm
> 

### Retourner les paramètres appliqués à une ferme

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
> 

### Éditer les paramètres relatifs à une ferme en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
> 

### Supprimer une ferme

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
> 

## Serveur

> [!primary]
>
> Tout comme pour les frontend et ferme, chaque catégorie se compose de 3 fonctions API.
> Il est nécessaire de bien exécuter la fonction API qui correspond au type de service souhaité.
> 

### Retourner la liste des IDs des serveurs liés à une ferme en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
> 

### Créer un serveur pour une ferme en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
> 

### Retourner les paramètres d'un serveur en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
> 

### Éditer les paramètres d'un serveur en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
> 

### Supprimer un serveur

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
> 

## Certificats SSL

### Retourner la liste des certificats SSL

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl
> 

### Créer un certificat SSL

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/ssl
> 

### Retourner les paramètres d'un certificat SSL en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl/{id}
> 

### Supprimer un certificat SSL

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
> 

## Tâche

### Appliquer les changements à la configuration du Load Balancer

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

### Retourner la liste des IDs des tâches

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task
> 

### Retourner le statut d'une tâche en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task/{id}
> 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
