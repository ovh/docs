---
title: Référence Rapide API Load Balancer
excerpt: Description rapide des différentes fonctions de l’API servant à gérer le Load Balancer
updated: 2022-04-04
---

## Liste des fonctions API
Cette section décrit brièvement les principales fonctions de l'API pour l'OVH Load Balancer sous /ipLoadbalancing

> [!warning]
>
> Attention, pour des raisons de compatibilité le point d'entrée de l'ancien système OVH Load Balancer est toujours présent dans l'API /ip/loadBalancing , à ne pas confondre avec le nouveau /ipLoadbalancing.
> 

Pour une référence complète aux fonctions de l'API du service OVH Load Balancer, c'est [ici](/pages/network/load_balancer/use_api_details).

> [!primary]
>
> Les Frontend, Ferme et Serveur sont spécifiques au
> protocole (parmis HTTP, TCP ou UDP) dans lequel ils sont définis.
> Bien qu'ils puissent être "combinés" entre eux, ce n'est possible qu'au sein
> d'un même protocole. Ainsi, il n'est pas possible d'utiliser un Frontend
> UDP avec une Ferme HTTP. Mais il est possible (en l'absence d'autre
> limitation) d'utiliser un Frontend HTTP avec une Ferme HTTP.
> 

## Frontend

> [!primary]
>
> Comme vous pouvez le constater, chaque catégorie se compose de 3 fonctions API.
> Il est nécessaire de bien exécuter la fonction API qui correspond au type de service souhaité.
> 

### Retourne la liste des IDs des frontends existants

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend
> 

### Crée un frontend

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/frontend
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/frontend
> 

### Retourne les paramètres appliqués à un frontend

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 

### Édite les paramètres relatifs à un frontend particulier

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
> 

### Supprime un frontend

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

### Retourne la liste des IDs des fermes existantes

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm
> 

### Crée une ferme

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm
> 

### Retourne les paramètres appliqués à une ferme

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
> 

### Édite les paramètres relatifs à une ferme particulière

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
> 

### Supprime une ferme

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

### Retourne la liste des IDs des serveurs liés à une ferme particulière

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
> 

### Crée un serveur pour une ferme particulière

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
> 

### Retourne les paramètres d'un serveur particulier

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
> 

### Édite les paramètres d'un serveur particulier

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
> 

### Supprime un serveur

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
> 

## certificats SSL

### Retourne la liste des certificats SSL

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl
> 

### Crée un certificat SSL

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/ssl
> 

### Retourne les paramètres d'un certificat SSL en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl/{id}
> 

### Supprime un certificat SSL

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
> 

## Tâche

### Applique les changements à la configuration du Load Balancer

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

### Retourne la liste des IDs des tâches

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task
> 

### Retourne le statut d'une tâche en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task/{id}
> 
