---
title: Détails des fonctions API
excerpt: Détails des fonctionnalités de l’API
updated: 2025-09-29
---

## Objectif

Ce guide fournit une description détaillée de toutes les fonctions de l'API pour le Load Balancer OVHcloud.

## Prérequis

- Consulter le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

## En pratique

### Gérer son service OVHcloud Load Balancer via l'API

Toutes les fonctions d'API qui sont utilisées dans la section */ipLoadbalancing* sont disponibles sur [cette page](/links/console).

> [!primary]
>
> Dans les appels ci-dessous, tous les champs marqués d'une astérisque `*` sont obligatoires.
> 

> [!primary]
>
> Les frontends, fermes et serveurs sont spécifiques au protocole (HTTP, TCP ou UDP) dans lequel ils sont définies.
> La compatibilité entre ces composants n'est possible qu'au sein du même protocole.
> Par exemple, un frontend HTTP ne peut être associé qu'à une ferme HTTP, et ne peut pas être utilisé avec une ferme UDP.
> 

## Services et zones

### Load Balancer OVHcloud

#### Lister les services actifs

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing
> 

#### Lister les zones disponibles pour le Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/availableZones
> 

#### Retourner les détails d'un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |

#### Modifier un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |
| `Ip.displayName` |  | Le nom que vous souhaitez attribuer au service (chaîne de caractères) |
| `Ip.sslConfiguration` |  | La configuration SSL que vous souhaitez attribuer au service (valeur) |

#### Lister les services attachés au Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/allowedServers
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |

#### Lister les fermes existantes et leur type

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/definedFarms
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |
| `vrackNetworkId` |  | Permet de filtrer selon le réseau vrack |

#### Lister les zones pouvant être attachées à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableServerZones
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |

#### Lister les différentes sondes pouvant être utilisées

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFarmProbes
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |

#### Lister les différents types de fermes pouvant être utilisées

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFarmType
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |

#### Lister les différents types de frontends pouvant être utilisés

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFrontendType
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |

#### Lister les différents types d'actions de routage pouvant etre utilisés

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteActions
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |

#### Lister les différents types de règles de routage pouvant être utilisés

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteRules
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |

### Service

#### Obtenir les informations du service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/serviceInfos
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |

#### Modifier les informations du service

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/serviceInfos
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères) |
| `Service.automatic` |  | Active le renouvellement automatique du service (booléen)) |
| `Service.deleteAtExpiration` |  | Active la suppression du service lors de l'expiration (booléen) |
| `Service.forced` |  | Force le renouvellement automatique (booléen) |
| `Service.period` |  | Renseigne la durée de renouvellement (chaîne de caractères) |

### Zones

#### Lister les zones actives pour un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/zone
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, ex. : IP-1.2.3.4 (chaîne de caractères) |

#### Obtenir les détails d'une zone

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/zone/{name}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `name` | Yes | Le nom de la zone demandée |

#### Supprimer une zone

Le service sera supprimé à la date d'expiration.

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/zone/{name}/terminate
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `name` | Yes | Le nom de la zone à supprimer |

#### Annuler la suppression d'une zone

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `name` | Yes | Le nom de la zone a supprimer |

## Protocole HTTP

Accéder aux éléments relatifs au protocole HTTP (frontend, ferme, etc.).

### Fermes HTTP

#### Lister les fermes HTTP attachées à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `zone` |  | Le nom de la zone (chaîne de caractères) |

#### Ajouter une nouvelle ferme HTTP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `zone` | Yes | Le nom de la zone (chaîne de caractères) |
| `displayName` |  | le nom que vous souhaitez attribuer à votre ferme (chaîne de caractères) |
| `balance` |  | La méthode de répartition de charge de votre ferme (valeur) |
| `port` |  | Le port d'écoute de votre ferme. Hérité du frontend si non-défini (nombre, 1..65535) |
| `stickiness` |  | Le type de persistence de connexion à utiliser pour votre ferme (valeur) |
| `probe` |  | Le type de sonde à utiliser sur votre ferme (sonde HTTP) |
| `probe.forceSsl` |  | L'activation du SSL est forcée pour la sonde (booléen) |
| `probe.interval` |  | L'intervalle en secondes entre chaque test de la sonde. Doit être supérieur à 30. 30 par défaut (nombre) |
| `probe.match` |  | La méthode de correspondance utilisée. 'default' utilise le comportement standard de HAProxy. 'status' n'est supporté que pour les sondes HTTP (value) [contains, default, internal, matches, status] |
| `probe.negate` |  | Le comportement de l'opérateur 'match' est inversé (booléen) |
| `probe.method` |  | La méthode HTTP utilisée en type 'http'. 'HEAD' peut économiser de la bande passante. 'GET' par défaut (valeur) [HEAD, GET, OPTIONS, internal] |
| `probe.pattern` |  | Le format de la réponse du serveur quand "UP". Vide pour 'default', liste de statuts séparés par des virgules pour 'status', texte pour 'contains', expression régulière pour 'matches' (chaîne de caractères) |
| `probe.port` |  | Le port que la sonde doit utiliser pour tester les serveurs attachés à votre ferme. Ignoré pour les sondes 'oco'. Si non-défini, le port de la ferme est utilisé (nombre) |
| `probe.type` |  | Le type de la sonde ; son fonctionnement (valeur) [HTTP, interne, MySQL, OCO, PgSQL, SMTP, TCP] |
| `probe.url` |  | L'adresse à utiliser par la sonde pour les sondes de type HTTP. Le type est ignoré si ce paramètre est défini (chaîne de caractères) |

#### Obtenir les détails d'une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme HTTP (nombre) |

#### Modifier les propriétés d'une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme HTTP (nombre) |
| `BackendHttp.displayName` |  | Le nom de la ferme (chaîne de caractères) |
| `BackendHttp.balance` |  | Le type de répartition de charge (valeur) |
| `BackendHttp.port` |  | Le port d'écoute de la ferme (nombre, 1..65000) |
| `BackendHttp.probe` |  | Le type de sonde à utiliser (sonde HTTP) |
| `BackendHttp.stickiness` |  | Le type de persistence de connexion (valeur) |

#### Supprimer une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme HTTP (nombre) |

### Serveurs HTTP

#### Lister les serveurs liés à la ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme HTTP (nombre) |
| `cookie` |  | Filtrer les valeurs par cookie (chaîne de caractères) |
| `address` |  | Filtrer les valeurs par adresse IPv4 (IPv4) |
| `status` |  | Filtrer les valeurs par statut du serveur (valeur) |

#### Ajouter un serveur à une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |
| `address` | Yes | L'adresse IPv4 de votre serveur (IPv4) |
| `backup` |  | Si votre serveur est configuré comme serveur de secours (booléen) |
| `chain` |  | La valeur du certificat SSL intermédiaire (chaîne de caractères) |
| `cookie` |  | La valeur de votre cookie (chaîne de caractères) |
| `displayName` |  | Le nom donné à votre serveur (chaîne de caractères) |
| `port` |  | Le port d'écoute de votre serveur. Hérité de votre ferme si non-défini (nombre, 1..65535) |
| `probe` |  | Le type de sonde à utiliser (valeur) |
| `proxyProtocolVersion` |  | La version de proxyProtocol à utiliser, |
| `ssl` | Yes | Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen) |
| `weight` | Yes | Le poids de votre serveur pour votre ferme. Un serveur à poids élevé reçoit plus de requêtes (nombre) |
| `status` | Yes | Si votre serveur est activé ou non (booléen) |

#### Obtenir les détails d'un serveur lié à une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `serverId` | Yes | L'identifiant de votre serveur (nombre) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |

#### Modifier les propriétés d'un serveur HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `serverId` | Yes | L'identifiant de votre server-link (nombre) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |
| `BackendHttpServer.backup` |  | Si votre serveur est configuré comme serveur de secours (booléen) |
| `BackendHttpServer.chain` |  | La valeur du certificat SSL intermédiaire (chaîne de caractères) |
| `BackendHttpServer.cookie` |  | La valeur de votre cookie (chaîne de caractères) |
| `BackendHttpServer.displayName` |  | Le nom de votre serveur (chaîne de caractères) |
| `BackendHttpServer.port` |  | Le port d'écoute de votre serveur (nombre, 1..65535) |
| `BackendHttpServer.probe` |  | Le type de sonde à utiliser (valeur) |
| `BackendHttpServer.proxyProtocolVersion` |  | La version de proxyProtocol à utiliser, |
| `BackendHttpServer.ssl` |  | Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen) |
| `BackendHttpServer.status` |  | Si votre serveur est activé ou non (booléen) |
| `BackendHttpServer.weight` |  | Le poids de votre serveur pour votre ferme (nombre) |

#### Supprimer un serveur d'une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `serverId` | Yes | L'identifiant de votre serveur (nombre) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |

### Frontends HTTP

#### Lister les frontends HTTP attachés à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `defaultFarmId` |  | L'identifiant de la ferme HTTP à laquelle le frontend HTTP est lié (nombre) |
| `port` |  | Le port d'écoute de votre frontend (nombre, 1..65535) |
| `zone` |  | Le nom de votre zone, par exemple: all (chaîne de caractères) |

#### Ajouter un frontend HTTP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `allowedSource` |  | La liste des adresses IPs clientes qui ont accès au Load Balancer (IPv4) |
| `dedicatedIpfo` |  | La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[]) |
| `defaultFarmId` |  | L'identifiant de la ferme HTTP par défaut pour votre frontend (nombre) |
| `defaultSslId` |  | L'identifiant du certificat SSL par défaut (nombre) |
| `disabled` |  | Si votre frontend HTTP est désactivé ou activé (booléen) |
| `displayName` |  | Le nom de votre frontend HTTP (chaîne de caractères) |
| `hsts` |  | Si le support du *https strict, HTTP Strict Transport Security* est activé ou désactivé (booléen) |
| `httpHeader` |  | L'entête *http* personnalisé à ajouter (chaîne de caractères) |
| `port` | Yes | Le port d'écoute de votre frontend (nombre, 1..65535) |
| `redirectLocation` |  | L'URL de redirection *http* (chaîne de caractères) |
| `ssl` |  | Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (booléen) |
| `zone` | Yes | Le nom de votre zone, ex: all (chaîne de caractères) |

### Obtenir les détails d'un frontend HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` | Yes | L'identifiant de votre frontend HTTP (nombre) |

#### Modifier les propriétés d'un frontend HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` | Yes | L'identifiant de votre frontend HTTP (nombre) |
| `FrontendHttp.allowedSource` |  | La liste des adresses IPs clientes qui ont accès au Load Balancer (IPv4[]) |
| `FrontendHttp.dedicatedIpfo` |  | La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[]) |
| `FrontendHttp.defaultSslId` |  | L'identifiant du certificat SSL par défaut (nombre) |
| `FrontendHttp.disabled` |  | Si votre frontend HTTP est désactivé ou activé (booléen) |
| `FrontendHttp.displayName` |  | Le nom de votre frontend HTTP (chaîne de caractères) |
| `FrontendHttp.hsts` |  | Si le support du *https strict, HTTP Strict Transport Security* est activé ou désactivé (booléen) |
| `FrontendHttp.httpHeader` |  | L'en-tête *http* personnalisé à ajouter (chaîne de caractères) |
| `FrontendHttp.ssl` |  | Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (booléen) |

#### Supprimer un frontend HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` | Yes | L'identifiant de votre frontend (nombre) |

### Routes HTTP

Les routes sont évaluées une par une, en testant leurs règles de routage. La première route validant toutes ses règles voit son action exécutée, et arrête l'évaluation des routes restantes. L'ordre d'exécution est défini par le type et le poids de la route.

#### Lister les routes HTTP attachées à un service Load Balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` |  | L'identifiant d'un frontend HTTP (nombre) |

#### Ajouter une nouvelle route HTTP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/route
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `action` | Yes | L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction) |
| `action.status` |  | Le code de retour HTTP attendu (nombre) |
| `action.target` |  | L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères) |
| `action.type` |  | L'action de votre route (chaîne de caractères) |
| `displayName` |  | Le nom de votre route (chaîne de caractères) |
| `frontendId` |  | L'identifiant du frontend HTTP pour lequel votre route est appliquée (nombre) |
| `weight` |  | La priorité de votre route. (nombre) [0 - 255] |

#### Obtenir les détails d'une route HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route (nombre) |

#### Modifier les propriétés d'une route HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route (nombre) |
| `routeHttp.action` | Yes | L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction) |
| `routeHttp.status` |  | Le code de retour HTTP attendu (nombre) |
| `routeHttp.target` |  | L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères) |
| `routeHttp.type` |  | L'action de votre route (chaîne de caractères) |
| `routeHttp.displayName` |  | Le nom de votre route (chaîne de caractères) |
| `routeHttp.frontendId` |  | L'identifiant du frontend HTTP pour lequel votre route est appliquée (nombre) |
| `routeHttp.weight` |  | La priorité de votre route. (nombre) [0 - 255] |

#### Supprimer une route HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route (nombre) |

### Règles de routage

#### Lister les règles de routages attachées à une route HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route HTTP (nombre) |

#### Ajouter les règles de routages attachées à une route HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route HTTP (nombre) |
| `field` | Yes | Le nom du champ à tester avec l'opérateur "match" (chaîne de caractères) |
| `match` | Yes | L'opérateur de comparaison (valeur) (contains, endsWith, exists, in, internal, is, matches, startsWith) |
| `negate` |  | Le comportement de l'opérateur :code:`match` est inversé (booléen) |
| `pattern` |  | Le schéma ou l'expression régulière utilisée par l'opérateur "match" (Regex / Chaîne de caractères) |
| `subField` |  | Le nom du sous-champ, si applicable. Peut être un cookie ou un nom d'en-tête, par exemple (chaîne de caractères) |

#### Obtenir les détails d'une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route HTTP (nombre) |
| `ruleId` | Yes | L'identifiant de votre règle de routage HTTP (nombre) |

#### Modifier les propriétés d'une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route HTTP (nombre) |
| `ruleId` | Yes | L'identifiant de votre règle de routage HTTP (nombre) |
| `RouteRule.field` |  | Le nom du champ à tester via l'opérateur "match" (chaîne de caractères) |
| `RouteRule.match` |  | L'opérateur de comparaison à utiliser (contains, endsWith, exists, in, internal, is, matches, startsWith) |
| `RouteRule.negate` |  | Si l'opérateur "match" est inversé ou non (booléen) |
| `RouteRule.pattern` |  | La valeur ou l'expression régulière à utiliser avec l'opérateur "match" (Regex / Chaîne de caractères) |
| `RouteRule.subField` |  | Le nom du sous-champ si applicable (chaîne de caractères) |

#### Supprimer une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route HTTP (nombre) |
| `ruleId` | Yes | L'identifiant de votre règle de routage HTTP (nombre) |

## Protocole TCP

Accéder aux éléments relatifs au protocole TCP (frontend, ferme, etc.).

### Fermes TCP

#### Lister les fermes TCP attachées à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `zone` |  | Le nom de votre zone, ex: all (chaîne de caractères) |

#### Ajouter une nouvelle ferme TCP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `balance` |  | La méthode de répartition de charge de votre ferme (valeur) |
| `displayName` |  | Le nom que vous souhaitez donner à votre ferme (chaîne de caractères) |
| `port` |  | Le port d'écoute de votre ferme. Hérité du frontend si non-défini (nombre, 1..65535) |
| `probe` |  | Le type de sonde à utiliser sur votre ferme (sonde HTTP) |
| `probe.forceSsl` |  | L'activation du SSL est forcée pour la sonde (booléen) |
| `probe.interval` |  | L'intervalle (en secondes) entre chaque test de la sonde. Doit être supérieur à 30. 30 par défaut (nombre) |
| `probe.match` |  | La méthode de correspondance utilisée. 'default' utilise le comportement standard de HAProxy. 'status' n'est supporté que pour les sondes HTTP (valeur) (contains, default, internal, matches, status) |
| `probe.negate` |  | Le comportement de l'opérateur :code:`match` est inversé (booléen) |
| `probe.method` |  | La méthode HTTP utilisée en :code:`type` 'http'. 'HEAD' peut économiser de la bande passante. 'GET' par défaut (valeur) (HEAD, GET, OPTIONS, internal) |
| `probe.pattern` |  | réponse du serveur quand "UP". Vide pour 'default', liste de statuts séparés par des virgules pour 'status', texte pour 'contains', expression régulière pour 'matches' (chaîne de caractères) |
| `probe.port` |  | Le port que la sonde doit utiliser pour tester les serveurs attachés à votre ferme. Ignoré pour les sondes 'oco'. Si non-défini, le port de la ferme est utilisé (nombre) |
| `probe.type` |  | Le type de la sonde ; son fonctionnement (valeur) (HTTP, interne, MySQL, OCO, PgSQL, SMTP ou TCP) |
| `probe.url` |  | L'adresse à utiliser par la sonde pour les sondes de type HTTP. Le :code:`type` est ignoré si ce paramètre est défini (chaîne de caractères) |
| `stickiness` |  | Le type de persistence de connexion à utiliser pour votre ferme (valeur) |
| `zone` | Yes | Le nom de votre zone, ex: all (chaîne de caractères) |

#### Obtenir les détails d'une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |

#### Modifier les propriétés d'une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |
| `BackendTcp.balance` |  | Le type de répartition de charge (valeur) |
| `BackendTcp.displayName` |  | Le nom de la ferme (chaîne de caractères) |
| `BackendTcp.port` |  | Le port d'écoute de la ferme (nombre, 1..65000) |
| `BackendTcp.probe` |  | Le type de sonde à utiliser (sonde TCP) |
| `BackendTcp.stickiness` |  | Le type de persistence de connexion (valeur) |

#### Supprimer une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |

### Serveurs TCP

#### Lister les serveurs liés à la ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |
| `cookie` |  | Filtrer les valeurs par cookie (chaîne de caractères) |
| `address` |  | Filtrer les valeurs par adresse IPv4 (IPv4) |
| `status` |  | Filtrer les valeurs par statut du serveur (valeur) |

#### Ajouter un serveur à une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |
| `address` | Yes | L'adresse IPv4 de votre serveur (IPv4) |
| `backup` |  | Si votre serveur est configuré comme serveur de secours (booléen) |
| `chain` |  | La valeur du certificat SSL intermédiaire (chaîne de caractères) |
| `displayName` |  | Le nom donné à votre serveur (chaîne de caractères) |
| `port` |  | Le port d'écoute de votre serveur. Hérité de votre ferme si non-défini (nombre, 1..65535) |
| `probe` |  | Le type de sonde à utiliser (valeur) |
| `proxyProtocolVersion` |  | La version de proxyProtocol à utiliser, |
| `ssl` | Yes | Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen) |
| `weight` | Yes | Le poids de votre serveur pour votre ferme. Un serveur à poids élevé reçoit plus de requêtes (nombre) |
| `status` | Yes | Si votre serveur est activé ou non (booléen) |

#### Obtenir les détails d'un serveur lié à une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `serverId` | Yes | L'identifiant de votre serveur (nombre) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |

#### Modifier les propriétés d'un serveur TCP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `serverId` | Yes | L'identifiant de votre server-link (nombre) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |
| `BackendTcpServer.backup` |  | Si votre serveur est configuré comme serveur de secours (booléen) |
| `BackendTcpServer.chain` |  | La valeur du certificat SSL intermédiaire (chaîne de caractères) |
| `BackendTcpServer.displayName` |  | Le nom de votre serveur (chaîne de caractères) |
| `BackendTcpServer.port` |  | Le port d'écoute de votre serveur (nombre, 1..65535) |
| `BackendTcpServer.probe` |  | Le type de sonde à utiliser (valeur) |
| `BackendTcpServer.proxyProtocolVersion` |  | La version de proxyProtocol à utiliser, |
| `BackendTcpServer.ssl` |  | Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen) |
| `BackendTcpServer.status` |  | Si votre serveur est activé ou non (booléen) |
| `BackendTcpServer.weight` |  | Le poids de votre serveur pour votre ferme (nombre) |

#### Supprimer un serveur d'une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `serverId` | Yes | L'identifiant de votre serveur (nombre) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |

### Frontends TCP

#### Lister les frontends TCP attachés à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `defaultFarmId` |  | L'identifiant de la ferme TCP à laquelle le frontend TCP est lié (nombre) |
| `port` |  | Le port d'écoute de votre frontend (nombre, 1..65535) |
| `zone` |  | Le nom de votre zone, ex: all (chaîne de caractères) |

#### Ajouter un frontend TCP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `allowedSource` |  | La liste des adresses IPs clientes qui ont accès au Load Balancer (IPv4) |
| `dedicatedIpfo` |  | La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[]) |
| `defaultFarmId` |  | L'identifiant de la ferme TCP par défaut pour votre frontend (nombre) |
| `defaultSslId` |  | L'identifiant du certificat SSL par défaut (nombre) |
| `disabled` |  | Si votre frontend TCP est désactivé ou activé (booléen) |
| `displayName` |  | Le nom de votre frontend TCP (chaîne de caractères) |
| `port` | Yes | Le port d'écoute de votre frontend (nombre, 1..65535) |
| `ssl` |  | Si les requêtes envoyées à la ferme TCP doivent être chiffrées avec SSL ou non (booléen) |
| `zone` | Yes | Le nom de votre zone, ex: all (chaîne de caractères) |

#### Obtenir les détails d'un frontend TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` | Yes | L'identifiant de votre frontend TCP (nombre) |

#### Modifier les propriétés d'un frontend TCP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` | Yes | L'identifiant de votre frontend TCP (nombre) |
| `FrontendTcp.allowedSource` |  | La liste des adresses IP clientes qui ont accès au Load Balancer (IPv4[]) |
| `FrontendTcp.dedicatedIpfo` |  | La liste des adresses IP des serveurs distants auxquels votre Load Balancer est connecté (IPv4[]) |
| `FrontendTcp.defaultSslId` |  | L'identifiant du certificat SSL par défaut (nombre) |
| `FrontendTcp.disabled` |  | Si votre frontend HTTP est désactivé ou activé (booléen) |
| `FrontendTcp.displayName` |  | Le nom de votre frontend HTTP (chaîne de caractères) |
| `FrontendTcp.ssl` |  | Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (booléen) |

#### Supprimer un frontend TCP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` | Yes | L'identifiant de votre frontend (nombre) |

### Routes TCP

Les routes sont évaluées une par une, en testant leurs règles de routage. La première route validant toutes ses règles voit son action exécutée, et arrête l'évaluation des routes restantes. L'ordre d'exécution est défini par le type et le poids de la route.

#### Lister les routes TCP attachées à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` |  | L'identifiant d'un frontend TCP (nombre) |

#### Ajouter une nouvelle route TCP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `action` | Yes | L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction) |
| `action.target` |  | L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères) |
| `action.type` |  | L'action de votre route (chaîne de caractères) |
| `displayName` |  | Le nom de votre route (chaîne de caractères) |
| `frontendId` |  | L'identifiant du frontend TCP pour lequel votre route est appliquée (nombre) |
| `weight` |  | La priorité de votre route. (nombre) [0 - 255] |

#### Obtenir les détails d'une route TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route (nombre) |

#### Modifier les propriétés d'une route TCP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route (nombre) |
| `routeTcp.action` |  | L'action à réaliser (routeTcpAction) |
| `routeTcp.target` |  | L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères) |
| `routeTcp.type` |  | L'action de votre route (chaîne de caractères) |
| `routeTcp.displayName` |  | Le nom de votre route (chaîne de caractères) |
| `routeTcp.frontendId` |  | Le frontend TCP pour lequel votre route est appliquée (nombre) |
| `routeTcp.weight` |  | La priorité de votre route (nombre) [0 - 255] |

#### Supprimer une route TCP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route (nombre) |

### Règles de routage

#### Lister les règles de routages attachées à une route TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route TCP (nombre) |

#### Ajouter les règles de routages attachées à une route TCP

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route TCP (nombre) |
| `field` | Yes | Le nom du champ à tester avec l'opérateur "match" (chaîne de caractères) |
| `match` | Yes | L'opérateur de comparaison (valeur) (contains, endsWith, exists, in, internal, is, matches, startsWith) |
| `negate` |  | Le comportement de l'opérateur :code:`match` est inversé (booléen) |
| `pattern` |  | Le schéma ou l'expression régulière utilisée par l'opérateur "match" (Regex / Chaîne de caractères) |
| `subField` |  | Le nom du sous-champ, si applicable. Peut être un cookie ou un nom d'en-tête, par exemple (chaîne de caractères) |

#### Obtenir les détails d'une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route TCP (nombre) |
| `ruleId` | Yes | L'identifiant de votre règle de routage HTTP (nombre) |

#### Modifier les propriétés d'une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route TCP (nombre) |
| `ruleId` | Yes | L'identifiant de votre règle de routage HTTP (nombre) |
| `RouteRule.field` |  | Le nom du champ à tester via l'opérateur "match" (chaîne de caractères) |
| `RouteRule.match` |  | L'opérateur de comparaison à utiliser (contains, endsWith, exists, in, internal, is, matches, startsWith) |
| `RouteRule.negate` |  | Si l'opérateur "match" est inversé ou non (booléen) |
| `RouteRule.pattern` |  | La valeur ou l'expression régulière à utiliser avec l'opérateur "match" (Regex / Chaîne de caractères) |
| `RouteRule.subField` |  | Le nom du sous-champ si applicable (chaîne de caractères) |

#### Supprimer une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `routeId` | Yes | L'identifiant de votre route TCP (nombre) |
| `ruleId` | Yes | L'identifiant de votre règle de routage HTTP (nombre) |

## Protocole UDP

Accéder aux éléments relatifs au protocole UDP (frontend, ferme, etc.).

### Fermes UDP

#### Lister les fermes UDP attachées à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `zone` |  | Le nom de votre zone, ex: all (chaîne de caractères) |

#### Ajouter une nouvelle ferme UDP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `displayName` |  | Le nom que vous souhaitez donner à votre ferme (chaîne de caractères) |
| `port` |  | Le port d'écoute de votre ferme. Hérité du frontend si non-défini (nombre, 1..65535) |
| `zone` | Yes | Le nom de votre zone, par exemple : all (chaîne de caractères) |

#### Obtenir les détails d'une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |

#### Modifier les propriétés d'une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |
| `BackendUdp.displayName` |  | Le nom de la ferme (chaîne de caractères) |
| `BackendUdp.port` |  | Le port d'écoute de la ferme (nombre, 1..65000) |

#### Supprimer une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |

### Serveurs UDP

#### Lister les serveurs liés à la ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |
| `address` |  | Filtrer les valeurs par adresse IPv4 (IPv4) |
| `status` |  | Filtrer les valeurs par statut du serveur (valeur) |

#### Ajouter un serveur à une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |
| `address` | Yes | L'adresse IPv4 de votre serveur (IPv4) |
| `displayName` |  | Le nom donné à votre serveur (chaîne de caractères) |
| `port` |  | Le port d'écoute de votre serveur. Hérité de votre ferme si non-défini (nombre, 1..65535) |
| `status` | Yes | Si votre serveur est activé ou non (booléen) |

#### Obtenir les détails d'un serveur lié à une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `serverId` | Yes | L'identifiant de votre serveur (nombre) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |

#### Modifier les propriétés d'un serveur UDP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `serverId` | Yes | L'identifiant de votre serveur (nombre) |
| `farmId` | Yes | L'identifiant de votre ferme (nombre) |
| `BackendUdpServer.displayName` |  | Le nom de votre serveur (chaîne de caractères) |
| `BackendUdpServer.port` |  | Le port d'écoute de votre serveur (nombre, 1..65535) |
| `BackendUdpServer.status` |  | Si votre serveur est activé ou non (booléen) |

#### Supprimer un serveur d'une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `serverId` | Yes | L'identifiant de votre serveur UDP (nombre) |
| `farmId` | Yes | L'identifiant de votre ferme UDP (nombre) |

### Frontends UDP

#### Lister les frontends UDP attachés à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `defaultFarmId` |  | L'identifiant de la ferme UDP à laquelle le frontend UDP est lié (nombre) |
| `port` |  | Le port d'écoute de votre frontend (nombre, 1..65535) |
| `zone` |  | Le nom de votre zone, par exemple : all (chaîne de caractères) |

#### Ajouter un frontend UDP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/frontend
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `dedicatedIpfo` |  | La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[]) |
| `defaultFarmId` | Yes | L'identifiant de la ferme UDP par défaut pour votre frontend (nombre) |
| `disabled` |  | Si votre frontend UDP est désactivé ou activé (booléen) |
| `displayName` |  | Le nom de votre frontend UDP (chaîne de caractères) |
| `port` | Yes | Le port d'écoute de votre frontend (nombre, 1..65535) |
| `zone` | Yes | Le nom de votre zone, ex: all (chaîne de caractères) |

#### Obtenir les détails d'un frontend UDP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` | Yes | L'identifiant de votre frontend UDP (nombre) |

#### Modifier les propriétés d'un frontend UDP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` | Yes | L'identifiant de votre frontend UDP (nombre) |
| `FrontendUdp.dedicatedIpfo` |  | La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[]) |
| `FrontendUdp.disabled` |  | Si votre frontend UDP est désactivé ou activé (booléen) |
| `FrontendUdp.displayName` |  | Le nom de votre frontend UDP (chaîne de caractères) |

#### Supprimer un frontend UDP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `frontendId` | Yes | L'identifiant de votre frontend UDP (nombre) |

## Autres fonctionnalités

### Additional IP

#### Lister les Additional IPs routées sur un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/failover
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |

### État du service

#### Obtenir l'état des instances d'un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/instancesState
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |

#### Lister les IPs de sortie utilisées par OVHcloud pour le NAT

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/natIp
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |

#### Appliquer les modifications d'un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/refresh
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |

### Certificats SSL

#### Lister les certificats SSL d'un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `fingerprint` |  | Liste l'empreinte du certificat SSL (chaîne de caractères) |
| `serial` |  | Liste le numéro d'identification du certificat SSL (chaîne de caractères) |
| `type` |  | Type de certificat SSL (valeur) |

#### Ajouter un nouvel objet SSL

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/ssl
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `certificate` | Yes | Ajout du certificat SSL (chaîne de caractères) |
| `chain` |  | Ajout du certificat SSL intermédiaire (chaîne de caractères) |
| `key` | Yes | Ajout de la clé privée (chaîne de caractères) |

#### Obtenir les détails d'un objet SSL

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl/{id}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `id` | Yes | L'identifiant de votre certificat SSL (nombre) |

#### Supprimer un objet SSL

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `id` | Yes | L'identifiant de votre certificat SSL (nombre) |

### Tâches

#### Lister les tâches en cours pour un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `action` | Yes | Consultation des tâches disponibles (valeurs) |

#### Obtenir les détails d'une tâche

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task/{id}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `id` | Yes | L'identifiant de votre tâche (nombre) |

### Contact

#### Initier un changement de contact

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/changeContact
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `contactAdmin` |  | L'identifiant client OVHcloud à configurer pour le contact administrateur de ce service (chaîne de caractères) |
| `contactBilling` |  | L'identifiant client OVHcloud à configurer pour le contact facturation de ce service (chaîne de caractères) |
| `contactTech` |  | L'identifiant client OVHcloud à configurer pour le contact technique de ce service (chaîne de caractères) |

> [!primary]
>
> Pour plus d'informations sur la gestion des contacts OVHcloud, consultez le guide « [Gérer les contacts de ses services](/pages/account_and_service_management/account_information/managing_contacts) ».
>

### vRack

#### Description des réseaux privés attachés au load balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/vrack/network
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `subnet` |  | Permet de filtrer selon le réseau utilisé |
| `vlan` |  | Permet de filtrer selon le vlan utilisé |

#### Ajouter un réseau privé dans le vRack

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/vrack/network
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `displayName` |  | Le nom que vous souhaitez attribuer au réseau (chaîne de caractères) |
| `farmId` |  | Tableau d'identifiant de fermes que vous souhaitez attacher à ce réseau privé |
| `natIp` |  | Un bloc d'IP réservé au load balancer pour joindre les serveurs |
| `subnet` |  | Le bloc d'IP du réseau privé |
| `vlan` |  | Vlan du réseau privé dans le vRack. 0 si le réseau privé n'est pas dans un vlan |

#### Récupérer, modifier ou supprimer un réseau privé

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `vrackNetworkId` | Yes | L'identifiant du réseau privé |

#### Modifier la liste des fermes attachées à un réseau privé

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
>

| Parameter | Required | Description |
|-----------|----------|-------------|
| `serviceName` | Yes | L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères) |
| `vrackNetworkId` | Yes | L'identifiant du réseau privé |
| `farmId` | Yes | Tableau d'identifiant de fermes que vous souhaitez attacher à ce réseau privé. La valeur "null" supprime le vrack network id de toutes les fermes où il était configuré. |

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).