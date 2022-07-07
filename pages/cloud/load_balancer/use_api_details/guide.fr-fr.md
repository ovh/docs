---
title: Détails des fonctionnalités API
slug: api-details
excerpt: "Détails des fonctionnalités de l’API OVHcloud pour l’offre OVHcloud Load Balancer"
section: Premiers pas
order: 03
---

**Dernière mise à jour le 04/04/2022**

## Objectif

Retrouvez ici la description des différents points d'entrées dans l'API pour le Load Balancer OVHcloud.

## Prérequis

- Consulter le guide [Premiers pas avec les API OVHcloud](../../api/first-steps-with-ovh-api/) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.

## En pratique

### Gérer son service OVHcloud Load Balancer via l'API

Tous les appels API se font dans la section */ipLoadbalancing* disponible ici : [https://api.ovh.com/console/#/ipLoadbalancing](https://api.ovh.com/console/#/ipLoadbalancing){.external}.

> [!warning]
>
> Attention, pour des raisons de compatibilité, le point d'entrée de l'ancien
> système Load Balancer OVHcloud est toujours présent dans l'API /ip/loadBalancing,
> à ne pas confondre avec le nouveau /ipLoadbalancing.
> 

> [!primary]
>
> Dans les appels ci-dessous, tous les champs marqués d'une astérisque *
> sont obligatoires.
> 

> [!primary]
>
> Les frontend, ferme et ferveur sont spécifiques au
> protocole (parmi HTTP, TCP ou UDP) dans lequel ils sont définis.
> Bien qu'ils puissent être « combinés » entre eux, ce n'est possible qu'au sein
> d'un même protocole. Ainsi, il n'est pas possible d'utiliser un frontend
> UDP avec une ferme HTTP. Mais il est possible (en l'absence d'autres
> limitations) d'utiliser un frontend HTTP avec une ferme HTTP.
> 

## Services et zones

### Load Balancer OVHcloud

#### Lister les services actifs

> [!api]
>
> @api {GET} /ipLoadbalancing
> 

#### Lister les zones disponibles pour le Load Balancer OVHcloud

> [!api]
>
> @api {GET} /ipLoadbalancing/availableZones
> 

#### Retourner les détails d'un service Load Balancer OVHcloud

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}
>> >
>>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>

#### Modifier un service Load Balancer OVHcloud

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}
>> >
>>
>
> Paramètres:
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>> >
>> > **Ip** *
>> >
>> >> **displayName**
>> >> >
>> >> > Le nom que vous souhaitez attribuer au service (chaîne de caractères)
>> >
>> >> **sslConfiguration**
>> >>
>> >> > La configuration SSL que vous souhaitez attribuer au service (valeur)
>

#### Lister les services attachés au Load Balancer OVHcloud

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/allowedServers
>> >
>>
>
> Paramètres:
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>

#### Lister les fermes existantes et leur type

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/definedFarms
>> >
>>
>
> Paramètres:
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>> >
>> > **vrackNetworkId**
>> >
>> >> Permet de filtrer selon le réseau vrack
>

#### Lister les zones pouvant être attachées à un service Load Balancer OVHcloud

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableServerZones
>> >
>>
>
> Paramètres:
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>

#### Lister les différentes sondes pouvant être utilisées

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableFarmProbes
>> >
>>
>
> Paramètres:
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>

#### Lister les différents types de fermes pouvant être utilisées

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableFarmType
>> >
>>
>
> Paramètres:
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>

#### Lister les différents types de frontends pouvant être utilisés

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableFrontendType
>> >
>>
>
> Paramètres:
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>

#### Lister les différents types d'actions de routage pouvant etre utilisés

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableRouteActions
>> >
>>
>
> Paramètres:
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>

#### Lister les différents types de règles de routage pouvant être utilisés

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/availableRouteRules
>> >
>>
>
> Paramètres:
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>

### Service

#### Obtenir les informations du service

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/serviceInfos
>> >
>>
>
> Paramètres:
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>

#### Modifier les informations du service

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/serviceInfos
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)
>> >
>> > **Service** *
>> >
>> >> - **automatic**
>> >> >
>> >> > Active le renouvellement automatique du service (booléen))
>> >>
>> >> - **deleteAtExpiration**
>> >> >
>> >> > Active la suppression du service lors de l'expiration (booléen)
>> >>
>> >> - **forced**
>> >> >
>> >> > Force le renouvellement automatique (booléen)
>> >>
>> >> - **period**
>> >> >
>> >> > Renseigne la durée de renouvellement (chaîne de caractères)
>

### Zones

#### Lister les zones actives pour un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/zone
>> > 
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, ex. : IP-1.2.3.4 (chaîne de caractères)
>

#### Obtenir les détails d'une zone

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/zone/{name}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **name** *
>> >
>> >> Le nom de la zone demandée
>

#### Supprimer une zone

Le service sera supprimé à la date d'expiration.

> [!faq]
>
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/zone/{name}/terminate
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **name** *
>> >
>> >> Le nom de la zone à supprimer
>

#### Annuler la suppression d'une zone

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **name** *
>> >
>> >> Le nom de la zone a supprimer
>

## Protocole HTTP

Accéder aux éléments relatifs au protocole HTTP (frontend, ferme, etc.).

### Fermes HTTP

#### Lister les fermes HTTP attachées à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/farm
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **zone**
>> >
>> >> Le nom de la zone (chaîne de caractères)
>

#### Ajouter une nouvelle ferme HTTP à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/http/farm
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **zone** *
>> >
>> >> Le nom de la zone (chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> le nom que vous souhaitez attribuer à votre ferme (chaîne de caractères)
>> >
>> > **balance**
>> >>
>> >> La méthode de répartition de charge de votre ferme (valeur)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre ferme. Hérité du frontend si non-défini (nombre, 1..65535)
>> >
>> > **stickiness**
>> >
>> >> Le type de persistence de connexion à utiliser pour votre ferme (valeur)
>> >
>> > **probe**
>> >
>> >> Le type de sonde à utiliser sur votre ferme (sonde HTTP)
>> >> >
>> >> > - **forceSsl**
>> >> >
>> >> >> L'activation du SSL est forcée pour la sonde (booléen)
>> >> >
>> >> > - **interval**
>> >> >
>> >> >> L'intervalle en secondes entre chaque test de la sonde. Doit être supérieur à 30. 30 par défaut (nombre)
>> >> >
>> >> > - **match**
>> >> >
>> >> >> La méthode de correspondance utilisée. 'default' utilise le comportement standard de HAProxy. 'status' n'est supporté que pour les sondes HTTP (value) [contains, default, internal, matches, status]
>> >> >
>> >> > - **negate**
>> >> >
>> >> >> Le comportement de l'opérateur 'match' est inversé (booléen)
>> >> >
>> >> > - **method**
>> >> >
>> >> >> La méthode HTTP utilisée en type 'http'. 'HEAD' peut économiser de la bande passante. 'GET' par défaut (valeur) [HEAD, GET, OPTIONS, internal]
>> >> >
>> >> > - **pattern**
>> >> >
>> >> >> Le format de la réponse du serveur quand "UP". Vide pour 'default', liste de statuts séparés par des virgules pour 'status', texte pour 'contains', expression régulière pour 'matches' (chaîne de caractères)
>> >> >
>> >> > - **port**
>> >> >
>> >> >> Le port que la sonde doit utiliser pour tester les serveurs attachés à votre ferme. Ignoré pour les sondes 'oco'. Si non-défini, le port de la ferme est utilisé (nombre)
>> >> >
>> >> > - **type**
>> >> >
>> >> >> Le type de la sonde ; son fonctionnement (valeur) [HTTP, interne, MySQL, OCO, PgSQL, SMTP, TCP]
>> >> >
>> >> > - **url**
>> >> >
>> >> >> L'adresse à utiliser par la sonde pour les sondes de type HTTP. Le type est ignoré si ce paramètre est défini (chaîne de caractères)
>

#### Obtenir les détails d'une ferme HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme HTTP (nombre)
>

#### Modifier les propriétés d'une ferme HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme HTTP (nombre)
>> >
>> > **BackendHttp** *
>> >
>> >> - **displayName**
>> >> >
>> >> > Le nom de la ferme (chaîne de caractères)
>> >>
>> >> - **balance**
>> >> >
>> >> > Le type de répartition de charge (valeur)
>> >>
>> >> - **port**
>> >> >
>> >> > Le port d'écoute de la ferme (nombre, 1..65000)
>> >>
>> >> - **probe**
>> >> >
>> >> > Le type de sonde à utiliser (sonde HTTP)
>> >>
>> >> - **stickiness**
>> >> >
>> >> > Le type de persistence de connexion (valeur)
>

#### Supprimer une ferme HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme HTTP (nombre)
>

### Serveurs HTTP

#### Lister les serveurs liés à la ferme HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme HTTP (nombre)
>> >
>> > **cookie**
>> >
>> >> Filtrer les valeurs par cookie (chaîne de caractères)
>> >
>> > **address**
>> >
>> >> Filtrer les valeurs par adresse IPv4 (IPv4)
>> >
>> > **status**
>> >
>> >> Filtrer les valeurs par statut du serveur (valeur)
>

#### Ajouter un serveur à une ferme HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>> >
>> > **address** *
>> >
>> >> L'adresse IPv4 de votre serveur (IPv4)
>> >
>> > **backup**
>> >
>> >> Si votre serveur est configuré comme serveur de secours (booléen)
>> >
>> > **chain**
>> >
>> >> La valeur du certificat SSL intermédiaire (chaîne de caractères)
>> >
>> > **cookie**
>> >
>> >> La valeur de votre cookie (chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom donné à votre serveur (chaîne de caractères)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre serveur. Hérité de votre ferme si non-défini (nombre, 1..65535)
>> >
>> > **probe**
>> >
>> >> Le type de sonde à utiliser (valeur)
>> >
>> > **proxyProtocolVersion**
>> >
>> >> La version de proxyProtocol à utiliser,
>> >>            voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (valeur)
>> >
>> > **ssl** *
>> >
>> >> Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen)
>> >
>> > **weight** *
>> >
>> >> Le poids de votre serveur pour votre ferme. Un serveur à poids élevé reçoit plus de requêtes (nombre)
>> >
>> > **status** *
>> >
>> >> Si votre serveur est activé ou non (booléen)
>

#### Obtenir les détails d'un serveur lié à une ferme HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre serveur (nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>

#### Modifier les propriétés d'un serveur HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre server-link (nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>> >
>> > **BackendHttpServer** *
>> >
>> >> - **backup**
>> >> >
>> >> > Si votre serveur est configuré comme serveur de secours (booléen)
>> >>
>> >> - **chain**
>> >> >
>> >> > La valeur du certificat SSL intermédiaire (chaîne de caractères)
>> >>
>> >> - **cookie**
>> >> >
>> >> > La valeur de votre cookie (chaîne de caractères)
>> >>
>> >> - **displayName**
>> >> >
>> >> > Le nom de votre serveur (chaîne de caractères)
>> >>
>> >> - **port**
>> >> >
>> >> > Le port d'écoute de votre serveur (nombre, 1..65535)
>> >>
>> >> - **probe**
>> >> >
>> >> > Le type de sonde à utiliser (valeur)
>> >>
>> >> - **proxyProtocolVersion**
>> >> >
>> >> > La version de proxyProtocol à utiliser,
>> >> > voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (valeur)
>> >>
>> >> - **ssl**
>> >> >
>> >> > Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen)
>> >>
>> >> - **status**
>> >> >
>> >> > Si votre serveur est activé ou non (booléen)
>> >>
>> >> - **weight**
>> >> >
>> >> > Le poids de votre serveur pour votre ferme (nombre)
>

#### Supprimer un serveur d'une ferme HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre serveur (nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>

### Frontends HTTP

#### Lister les frontends HTTP attachés à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/frontend
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **defaultFarmId**
>> >
>> >> L'identifiant de la ferme HTTP à laquelle le frontend HTTP est lié (nombre)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre frontend (nombre, 1..65535)
>> >
>> > **zone**
>> >
>> >> Le nom de votre zone, par exemple: all (chaîne de caractères)
>

#### Ajouter un frontend HTTP à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/http/frontend
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **allowedSource**
>> >
>> >> La liste des adresses IPs clientes qui ont accès au Load Balancer (IPv4)
>> >>
>> >> NB: le filtrage s'effectue au niveau du Load Balancer, donc si le Load Balancer ainsi que les serveurs ne sont pas dans un vRack, vos serveurs sont directement accessibles depuis Internet
>> >
>> > **dedicatedIpfo**
>> >
>> >> La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])
>> >
>> > **defaultFarmId**
>> >
>> >> L'identifiant de la ferme HTTP par défaut pour votre frontend (nombre)
>> >
>> > **defaultSslId**
>> >
>> >> L'identifiant du certificat SSL par défaut (nombre)
>> >
>> > **disabled**
>> >
>> >> Si votre frontend HTTP est désactivé ou activé (booléen)
>> >
>> > **displayName**
>> >
>> >> Le nom de votre frontend HTTP (chaîne de caractères)
>> >
>> > **hsts**
>> >
>> >> Si le support du *https strict, HTTP Strict Transport Security* est activé ou désactivé (booléen)
>> >
>> > **httpHeader**
>> >
>> >> L'entête *http* personnalisé à ajouter (chaîne de caractères)
>> >
>> > **port** *
>> >
>> >> Le port d'écoute de votre frontend (nombre, 1..65535)
>> >
>> > **redirectLocation**
>> >
>> >> L'URL de redirection *http* (chaîne de caractères)
>> >
>> > **ssl**
>> >
>> >> Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (booléen)
>> >
>> > **zone** *
>> >
>> >> Le nom de votre zone, ex: all (chaîne de caractères)
>

### Obtenir les détails d'un frontend HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend HTTP (nombre)
>

#### Modifier les propriétés d'un frontend HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend HTTP (nombre)
>> >
>> > **FrontendHttp** *
>> >
>> >> - **allowedSource**
>> >> >
>> >> > La liste des adresses IPs clientes qui ont accès au Load Balancer (IPv4[])
>> >> >
>> >> > NB: le filtrage s'effectue au niveau du Load Balancer, donc si le Load Balancer ainsi que les serveurs ne sont pas dans un vRack, vos serveurs sont directement accessibles depuis Internet
>> >>
>> >> - **dedicatedIpfo** 
>> >> >
>> >> > La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])
>> >>
>> >> - **defaultSslId**
>> >> >
>> >> > L'identifiant du certificat SSL par défaut (nombre)
>> >>
>> >> - **disabled** 
>> >> >
>> >> > Si votre frontend HTTP est désactivé ou activé (booléen)
>> >>
>> >> - **displayName** 
>> >> >
>> >> > Le nom de votre frontend HTTP (chaîne de caractères)
>> >>
>> >> - **hsts** 
>> >> >
>> >> > Si le support du *https strict, HTTP Strict Transport Security* est activé ou désactivé (booléen)
>> >>
>> >> - **httpHeader** 
>> >> >
>> >> > L'en-tête *http* personnalisé à ajouter (chaîne de caractères)
>> >>
>> >> - **ssl** 
>> >> >
>> >> > Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (booléen)
>

#### Supprimer un frontend HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend (nombre)
>

### Routes HTTP

Les routes sont évaluées une par une, en testant leurs règles de routage. La première route validant toutes ses règles voit son action exécutée, et arrête l'évaluation des routes restantes. L'ordre d'exécution est défini par le type et le poids de la route.

#### Lister les routes HTTP attachées à un service Load Balancer

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/route
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **frontendId**
>> >
>> >> L'identifiant d'un frontend HTTP (nombre)
>

#### Ajouter une nouvelle route HTTP à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/http/route
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **action** *
>> >
>> >> L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction)
>> >>
>> >> - **status** 
>> >>
>> >> > Le code de retour HTTP attendu (nombre)
>> >>
>> >> - **target** 
>> >>
>> >> > L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères)
>> >>
>> >> - **type** 
>> >>
>> >> > L'action de votre route (chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom de votre route (chaîne de caractères)
>> >
>> > **frontendId**
>> >
>> >> L'identifiant du frontend HTTP pour lequel votre route est appliquée (nombre)
>> >
>> > **weight**
>> >
>> >> La priorité de votre route. (nombre) [0 - 255]
>

#### Obtenir les détails d'une route HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (nombre)
>

#### Modifier les propriétés d'une route HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/route/{routeId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (nombre)
>> >
>> > **routeHttp** *
>> >
>> >> **action** *
>> >>
>> >> > L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction)
>> >> >
>> >> > - **status** 
>> >> >
>> >> >> Le code de retour HTTP attendu (nombre)
>> >> >
>> >> > - **target** 
>> >> >
>> >> >> L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères)
>> >> >
>> >> > - **type** 
>> >> >
>> >> >> L'action de votre route (chaîne de caractères)
>> >>
>> >> **displayName**
>> >>
>> >> > Le nom de votre route (chaîne de caractères)
>> >>
>> >> **frontendId**
>> >>
>> >> > L'identifiant du frontend HTTP pour lequel votre route est appliquée (nombre)
>> >>
>> >> **weight**
>> >>
>> >> > La priorité de votre route. (nombre) [0 - 255]
>

#### Supprimer une route HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/http/route/{routeId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (nombre)
>

### Règles de routage

#### Lister les règles de routages attachées à une route HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route HTTP (nombre)
>

#### Ajouter les règles de routages attachées à une route HTTP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route HTTP (nombre)
>> >
>> > **field** *
>> >
>> >> Le nom du champ à tester avec l'opérateur "match" (chaîne de caractères)
>> >
>> > **match** *
>> >
>> >> L'opérateur de comparaison (valeur) (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >
>> > **negate**
>> >
>> >> Le comportement de l'opérateur :code:`match` est inversé (booléen)
>> >
>> > **pattern**
>> >
>> >> Le schéma ou l'expression régulière utilisée par l'opérateur "match" (Regex / Chaîne de caractères)
>> >
>> > **subField**
>> >
>> >> Le nom du sous-champ, si applicable. Peut être un cookie ou un nom d'en-tête, par exemple (chaîne de caractères)
>

#### Obtenir les détails d'une règle de routage

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route HTTP (nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (nombre)
>

#### Modifier les propriétés d'une règle de routage

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route HTTP (nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (nombre)
>> >
>> > **RouteRule** *
>> >
>> >> - **field**
>> >>
>> >> > Le nom du champ à tester via l'opérateur "match" (chaîne de caractères)
>> >>
>> >> - **match** 
>> >>
>> >> > L'opérateur de comparaison à utiliser (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >>
>> >> - **negate** 
>> >>
>> >> > Si l'opérateur "match" est inversé ou non (booléen)
>> >>
>> >> - **pattern** 
>> >>
>> >> > La valeur ou l'expression régulière à utiliser avec l'opérateur "match" (Regex / Chaîne de caractères)
>> >>
>> >> - **subField** 
>> >>
>> >> > Le nom du sous-champ si applicable (chaîne de caractères)
>

#### Supprimer une règle de routage

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route HTTP (nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (nombre)
>

## Protocole TCP

Accéder aux éléments relatifs au protocole TCP (frontend, ferme, etc.).

### Fermes TCP

#### Lister les fermes TCP attachées à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **zone**
>> >
>> >> Le nom de votre zone, ex: all (chaîne de caractères)
>

#### Ajouter une nouvelle ferme TCP à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/farm
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **balance**
>> >
>> >> La méthode de répartition de charge de votre ferme (valeur)
>> >
>> > **displayName**
>> >
>> >> Le nom que vous souhaitez donner à votre ferme (chaîne de caractères)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre ferme. Hérité du frontend si non-défini (nombre, 1..65535)
>> >
>> > **probe**
>> >
>> >> Le type de sonde à utiliser sur votre ferme (sonde HTTP)
>> >>
>> >> - **forceSsl**
>> >>
>> >> > L'activation du SSL est forcée pour la sonde (booléen)
>> >>
>> >> - **interval**
>> >>
>> >> > L'intervalle (en secondes) entre chaque test de la sonde. Doit être supérieur à 30. 30 par défaut (nombre)
>> >>
>> >> - **match**
>> >>
>> >> > La méthode de correspondance utilisée. 'default' utilise le comportement standard de HAProxy. 'status' n'est supporté que pour les sondes HTTP (valeur) (contains, default, internal, matches, status)
>> >>
>> >> - **negate**
>> >>
>> >> > Le comportement de l'opérateur :code:`match` est inversé (booléen)
>> >>
>> >> - **method**
>> >>
>> >> > La méthode HTTP utilisée en :code:`type` 'http'. 'HEAD' peut économiser de la bande passante. 'GET' par défaut (valeur) (HEAD, GET, OPTIONS, internal)
>> >>
>> >> - **pattern**
>> >>
>> >> > réponse du serveur quand "UP". Vide pour 'default', liste de statuts séparés par des virgules pour 'status', texte pour 'contains', expression régulière pour 'matches' (chaîne de caractères)
>> >>
>> >> - **port**
>> >>
>> >> > Le port que la sonde doit utiliser pour tester les serveurs attachés à votre ferme. Ignoré pour les sondes 'oco'. Si non-défini, le port de la ferme est utilisé (nombre)
>> >>
>> >> - **type**
>> >>
>> >> > Le type de la sonde ; son fonctionnement (valeur) (HTTP, interne, MySQL, OCO, PgSQL, SMTP ou TCP)
>> >>
>> >> - **url**
>> >>
>> >> > L'adresse à utiliser par la sonde pour les sondes de type HTTP. Le :code:`type` est ignoré si ce paramètre est défini (chaîne de caractères)
>> >>
>> > **stickiness**
>> >
>> >> Le type de persistence de connexion à utiliser pour votre ferme (valeur)
>> >
>> > **zone** *
>> >
>> >> Le nom de votre zone, ex: all (chaîne de caractères)
>

#### Obtenir les détails d'une ferme TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>

#### Modifier les propriétés d'une ferme TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>> >
>> > **BackendTcp** *
>> >
>> >> - **balance**
>> >>
>> >> > Le type de répartition de charge (valeur)
>> >>
>> >> - **displayName** 
>> >>
>> >> > Le nom de la ferme (chaîne de caractères)
>> >>
>> >> - **port** 
>> >>
>> >> > Le port d'écoute de la ferme (nombre, 1..65000)
>> >>
>> >> - **probe** 
>> >>
>> >> > Le type de sonde à utiliser (sonde TCP)
>> >>
>> >> - **stickiness** 
>> >>
>> >> > Le type de persistence de connexion (valeur)
>

#### Supprimer une ferme TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>

### Serveurs TCP

#### Lister les serveurs liés à la ferme TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>> >
>> > **cookie**
>> >
>> >> Filtrer les valeurs par cookie (chaîne de caractères)
>> >
>> > **address**
>> >
>> >> Filtrer les valeurs par adresse IPv4 (IPv4)
>> >
>> > **status**
>> >
>> >> Filtrer les valeurs par statut du serveur (valeur)
>

#### Ajouter un serveur à une ferme TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>> >
>> > **address** *
>> >
>> >> L'adresse IPv4 de votre serveur (IPv4)
>> >
>> > **backup**
>> >
>> >> Si votre serveur est configuré comme serveur de secours (booléen)
>> >
>> > **chain**
>> >
>> >> La valeur du certificat SSL intermédiaire (chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom donné à votre serveur (chaîne de caractères)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre serveur. Hérité de votre ferme si non-défini (nombre, 1..65535)
>> >
>> > **probe**
>> >
>> >> Le type de sonde à utiliser (valeur)
>> >
>> > **proxyProtocolVersion**
>> >
>> >> La version de proxyProtocol à utiliser,
>> >> voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (valeur)
>> >
>> > **ssl** *
>> >
>> >> Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen)
>> >
>> > **weight** *
>> >
>> >> Le poids de votre serveur pour votre ferme. Un serveur à poids élevé reçoit plus de requêtes (nombre)
>> >
>> > **status** *
>> >
>> >> Si votre serveur est activé ou non (booléen)
>

#### Obtenir les détails d'un serveur lié à une ferme TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre serveur (nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
> >

#### Modifier les propriétés d'un serveur TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre server-link (nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>> >
>> > **BackendTcpServer** *
>> >
>> >> - **backup**
>> >>
>> >> > Si votre serveur est configuré comme serveur de secours (booléen)
>> >>
>> >> - **chain** 
>> >>
>> >> > La valeur du certificat SSL intermédiaire (chaîne de caractères)
>> >>
>> >> - **displayName** 
>> >>
>> >> > Le nom de votre serveur (chaîne de caractères)
>> >>
>> >> - **port** 
>> >>
>> >> > Le port d'écoute de votre serveur (nombre, 1..65535)
>> >>
>> >> - **probe** 
>> >>
>> >> > Le type de sonde à utiliser (valeur)
>> >>
>> >> - **proxyProtocolVersion** 
>> >>
>> >> > La version de proxyProtocol à utiliser,
>> >> > voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Valeur >> )
>> >>
>> >> - **ssl** 
>> >>
>> >> > Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen)
>> >>
>> >> - **status**
>> >>
>> >> > Si votre serveur est activé ou non (booléen)
>> >>
>> >> - **weight** 
>> >>
>> >> > Le poids de votre serveur pour votre ferme (nombre)
>

#### Supprimer un serveur d'une ferme TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre serveur (nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>

### Frontends TCP

#### Lister les frontends TCP attachés à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/frontend
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **defaultFarmId**
>> >
>> >> L'identifiant de la ferme TCP à laquelle le frontend TCP est lié (nombre)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre frontend (nombre, 1..65535)
>> >
>> > **zone**
>> >
>> >> Le nom de votre zone, ex: all (chaîne de caractères)
>

#### Ajouter un frontend TCP à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/frontend
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **allowedSource**
>> >
>> >> La liste des adresses IPs clientes qui ont accès au Load Balancer (IPv4)
>> >
>> > **dedicatedIpfo**
>> >
>> >> La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])
>> >
>> > **defaultFarmId**
>> >
>> >> L'identifiant de la ferme TCP par défaut pour votre frontend (nombre)
>> >
>> > **defaultSslId**
>> >
>> >> L'identifiant du certificat SSL par défaut (nombre)
>> >
>> > **disabled**
>> >
>> >> Si votre frontend TCP est désactivé ou activé (booléen)
>> >
>> > **displayName**
>> >
>> >> Le nom de votre frontend TCP (chaîne de caractères)
>> >
>> > **port** *
>> >
>> >> Le port d'écoute de votre frontend (nombre, 1..65535)
>> >
>> > **ssl**
>> >
>> >> Si les requêtes envoyées à la ferme TCP doivent être chiffrées avec SSL ou non (booléen)
>> >
>> > **zone** *
>> >
>> >> Le nom de votre zone, ex: all (chaîne de caractères)
>

#### Obtenir les détails d'un frontend TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>> >
>>
>
> Paramètres :
>
>> >  **serviceName** *
>> >>
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> >  **frontendId** *
>> >>
>> >> L'identifiant de votre frontend TCP (nombre)
>> 

#### Modifier les propriétés d'un frontend TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend TCP (nombre)
>> >
>> > **FrontendTcp** *
>> >
>> >> - **allowedSource**
>> >>
>> >> > La liste des adresses IP clientes qui ont accès au Load Balancer (IPv4[])
>> >>
>> >> - **dedicatedIpfo** 
>> >>
>> >> > La liste des adresses IP des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])
>> >>
>> >> - **defaultSslId**
>> >>
>> >> > L'identifiant du certificat SSL par défaut (nombre)
>> >>
>> >> - **disabled** 
>> >>
>> >> > Si votre frontend HTTP est désactivé ou activé (booléen)
>> >>
>> >> - **displayName** 
>> >>
>> >> > Le nom de votre frontend HTTP (chaîne de caractères)
>> >>
>> >> - **ssl** 
>> >>
>> >> > Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (booléen)
>

#### Supprimer un frontend TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend (nombre)
>

### Routes TCP

Les routes sont évaluées une par une, en testant leurs règles de routage. La première route validant toutes ses règles voit son action exécutée, et arrête l'évaluation des routes restantes. L'ordre d'exécution est défini par le type et le poids de la route.

#### Lister les routes TCP attachées à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **frontendId**
>> >
>> >> L'identifiant d'un frontend TCP (nombre)
>

#### Ajouter une nouvelle route TCP à un service Load Balancer OVHcloud

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **action** *
>> >
>> >> L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction)
>> >>
>> >> - **target** 
>> >>
>> >> > L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères)
>> >>
>> >> - **type** 
>> >>
>> >> > L'action de votre route (chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom de votre route (chaîne de caractères)
>> >
>> > **frontendId**
>> >
>> >> L'identifiant du frontend TCP pour lequel votre route est appliquée (nombre)
>> >
>> > **weight**
>> >
>> >> La priorité de votre route. (nombre) [0 - 255]
>

#### Obtenir les détails d'une route TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (nombre)
>

#### Modifier les propriétés d'une route TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (nombre)
>> >
>> > **routeTcp** *
>> >
>> >> - **action**
>> >>
>> >> > L'action à réaliser (routeTcpAction)
>> >> >
>> >> > - **target** 
>> >> >
>> >> >> L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères)
>> >> >
>> >> > - **type** 
>> >> >
>> >> >> L'action de votre route (chaîne de caractères)
>> >>
>> >> - **displayName** 
>> >>
>> >> > Le nom de votre route (chaîne de caractères)
>> >>
>> >> - **frontendId** 
>> >>
>> >> > Le frontend TCP pour lequel votre route est appliquée (nombre)
>> >>
>> >> - **weight** 
>> >>
>> >> > La priorité de votre route (nombre) [0 - 255]
>

#### Supprimer une route TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (nombre)
>

### Règles de routage

#### Lister les règles de routages attachées à une route TCP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route TCP (nombre)
>

#### Ajouter les règles de routages attachées à une route TCP

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route TCP (nombre)
>> >
>> > **field** *
>> >
>> >> Le nom du champ à tester avec l'opérateur "match" (chaîne de caractères)
>> >
>> > **match** *
>> >
>> >> L'opérateur de comparaison (valeur) (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >
>> > **negate**
>> >
>> >> Le comportement de l'opérateur :code:`match` est inversé (booléen)
>> >
>> > **pattern**
>> >
>> >> Le schéma ou l'expression régulière utilisée par l'opérateur "match" (Regex / Chaîne de caractères)
>> >
>> > **subField**
>> >
>> >> Le nom du sous-champ, si applicable. Peut être un cookie ou un nom d'en-tête, par exemple (chaîne de caractères)
>

#### Obtenir les détails d'une règle de routage

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route TCP (nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (nombre)
>

#### Modifier les propriétés d'une règle de routage

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route TCP (nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (nombre)
>> >
>> > **RouteRule** *
>> >
>> >> - **field**
>> >>
>> >> > Le nom du champ à tester via l'opérateur "match" (chaîne de caractères)
>> >>
>> >> - **match** 
>> >>
>> >> > L'opérateur de comparaison à utiliser (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >>
>> >> - **negate** 
>> >>
>> >> > Si l'opérateur "match" est inversé ou non (booléen)
>> >>
>> >> - **pattern** 
>> >>
>> >> > La valeur ou l'expression régulière à utiliser avec l'opérateur "match" (Regex / Chaîne de caractères)
>> >>
>> >> - **subField** 
>> >>
>> >> > Le nom du sous-champ si applicable (chaîne de caractères)
>

#### Supprimer une règle de routage

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route TCP (nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (nombre)
>

## Protocole UDP

Accéder aux éléments relatifs au protocole UDP (frontend, ferme, etc.).

### Fermes UDP

#### Lister les fermes UDP attachées à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/farm
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **zone**
>> >
>> >> Le nom de votre zone, ex: all (chaîne de caractères)
>

#### Ajouter une nouvelle ferme UDP à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/udp/farm
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom que vous souhaitez donner à votre ferme (chaîne de caractères)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre ferme. Hérité du frontend si non-défini (nombre, 1..65535)
>> >
>> > **zone** *
>> >
>> >> Le nom de votre zone, par exemple : all (chaîne de caractères)
>

#### Obtenir les détails d'une ferme UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>

#### Modifier les propriétés d'une ferme UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>> >
>> > **BackendUdp** *
>> >
>> >> - **displayName**
>> >>
>> >> > Le nom de la ferme (chaîne de caractères)
>> >>
>> >> - **port** 
>> >>
>> >> > Le port d'écoute de la ferme (nombre, 1..65000)
>

#### Supprimer une ferme UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>

### Serveurs UDP

#### Lister les serveurs liés à la ferme UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>> >
>> > **address**
>> >
>> >> Filtrer les valeurs par adresse IPv4 (IPv4)
>> >
>> > **status**
>> >
>> >> Filtrer les valeurs par statut du serveur (valeur)
>

#### Ajouter un serveur à une ferme UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>> >
>> > **address** *
>> >
>> >> L'adresse IPv4 de votre serveur (IPv4)
>> >
>> > **displayName**
>> >
>> >> Le nom donné à votre serveur (chaîne de caractères)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre serveur. Hérité de votre ferme si non-défini (nombre, 1..65535)
>> >
>> > **status** *
>> >
>> >> Si votre serveur est activé ou non (booléen)
>

#### Obtenir les détails d'un serveur lié à une ferme UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre serveur (nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>

#### Modifier les propriétés d'un serveur UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre serveur (nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (nombre)
>> >
>> > **BackendUdpServer** *
>> >
>> >> - **displayName**
>> >>
>> >> > Le nom de votre serveur (chaîne de caractères)
>> >>
>> >> - **port** 
>> >>
>> >> > Le port d'écoute de votre serveur (nombre, 1..65535)
>> >>
>> >> - **status**
>> >>
>> >> > Si votre serveur est activé ou non (booléen)
>

#### Supprimer un serveur d'une ferme UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre serveur UDP (nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme UDP (nombre)
>

### Frontends UDP

#### Lister les frontends UDP attachés à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/frontend
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **defaultFarmId**
>> >
>> >> L'identifiant de la ferme UDP à laquelle le frontend UDP est lié (nombre)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre frontend (nombre, 1..65535)
>> >
>> > **zone**
>> >
>> >> Le nom de votre zone, par exemple : all (chaîne de caractères)
>

#### Ajouter un frontend UDP à un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/udp/frontend
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **dedicatedIpfo**
>> >
>> >> La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])
>> >
>> > **defaultFarmId** *
>> >
>> >> L'identifiant de la ferme UDP par défaut pour votre frontend (nombre)
>> >
>> > **disabled**
>> >
>> >> Si votre frontend UDP est désactivé ou activé (booléen)
>> >
>> > **displayName**
>> >
>> >> Le nom de votre frontend UDP (chaîne de caractères)
>> >
>> > **port** *
>> >
>> >> Le port d'écoute de votre frontend (nombre, 1..65535)
>> >
>> > **zone** *
>> >
>> >> Le nom de votre zone, ex: all (chaîne de caractères)
>

#### Obtenir les détails d'un frontend UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend UDP (nombre)
>

#### Modifier les propriétés d'un frontend UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {PUT} /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend UDP (nombre)
>> >
>> > **FrontendUdp** *
>> >
>> >> - **dedicatedIpfo**
>> >>
>> >> > La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])
>> >>
>> >> - **disabled** 
>> >>
>> >> > Si votre frontend UDP est désactivé ou activé (booléen)
>> >>
>> >> - **displayName** 
>> >>
>> >> > Le nom de votre frontend UDP (chaîne de caractères)
>

#### Supprimer un frontend UDP

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend UDP (nombre)
>

## Autres fonctionnalités

### IP Failover

#### Lister les IP Failovers routées sur un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/failover
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>

### État du service

#### Obtenir l'état des instances d'un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/instancesState
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>

#### Lister les IPs de sortie utilisées par OVHcloud pour le NAT

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/natIp
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>

#### Appliquer les modifications d'un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>

### Certificats SSL

#### Lister les certificats SSL d'un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/ssl
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **fingerprint**
>> >
>> >> Liste l'empreinte du certificat SSL (chaîne de caractères)
>> >
>> > **serial**
>> >
>> >> Liste le numéro d'identification du certificat SSL (chaîne de caractères)
>> >
>> > **type**
>> >
>> >> Type de certificat SSL (valeur)
>

#### Ajouter un nouvel objet SSL

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/ssl
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **certificate** *
>> >
>> >> Ajout du certificat SSL (chaîne de caractères)
>> >
>> > **chain**
>> >
>> >> Ajout du certificat SSL intermédiaire (chaîne de caractères)
>> >
>> > **key** *
>> >
>> >> Ajout de la clé privée (chaîne de caractères)
>

#### Obtenir les détails d'un objet SSL

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/ssl/{id}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **id** *
>> >
>> >> L'identifiant de votre certificat SSL (nombre)
>

#### Supprimer un objet SSL

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/ssl/{id}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **id** *
>> >
>> >> L'identifiant de votre certificat SSL (nombre)
>

### Tâches

#### Lister les tâches en cours pour un service Load Balancer OVHcloud

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/task
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **action** *
>> >
>> >> Consultation des tâches disponibles (valeurs)
>

#### Obtenir les détails d'une tâche

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/task/{id}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **id** *
>> >
>> >> L'identifiant de votre tâche (nombre)
>

### Contact

#### Initier un changement de contact

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/changeContact
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **contactAdmin**
>> >
>> >> L'identifiant client OVHcloud à configurer pour le contact administrateur de ce service (chaîne de caractères)
>> >
>> > **contactBilling**
>> >
>> >> L'identifiant client OVHcloud à configurer pour le contact facturation de ce service (chaîne de caractères)
>> >
>> > **contactTech**
>> >
>> >> L'identifiant client OVHcloud à configurer pour le contact technique de ce service (chaîne de caractères)
>

> [!primary]
>
> Pour plus d'informations sur la gestion des contacts OVHcloud, consultez le guide « [Gérer les contacts de ses services](https://docs.ovh.com/fr/customer/gestion-des-contacts/) ».
>

### Vrack

#### Description des réseaux privés attachés au load balancer

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/vrack/network
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **subnet**
>> >
>> >> Permet de filtrer selon le réseau utilisé
>> >
>> > **vlan**
>> >
>> >> Permet de filtrer selon le vlan utilisé
>

#### Ajouter un réseau privé dans le vRack

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/vrack/network
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom que vous souhaitez attribuer au réseau (chaîne de caractères)
>> >
>> > **farmId**
>> >
>> >> Tableau d'identifiant de fermes que vous souhaitez attacher à ce réseau privé
>> >
>> > **natIp**
>> >
>> >> Un bloc d'IP réservé au load balancer pour joindre les serveurs
>> >
>> > **subnet**
>> >
>> >> Le bloc d'IP du réseau privé
>> >
>> > **vlan**
>> >
>> >> Vlan du réseau privé dans le vRack. 0 si le réseau privé n'est pas dans un vlan
>

#### Récupérer, modifier ou supprimer un réseau privé

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>> > @api {PUT} /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>> > @api {DELETE} /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **vrackNetworkId** *
>> >
>> >> L'identifiant du réseau privé
>

#### Modifier la liste des fermes attachées à un réseau privé

> [!faq]
>
> Service :
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
>> >
>>
>
> Paramètres :
>
>> > **serviceName** *
>> >
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)
>> >
>> > **vrackNetworkId** *
>> >
>> >> L'identifiant du réseau privé
>> >
>> > **farmId** *
>> >
>> >> Tableau d'identifiant de fermes que vous souhaitez attacher à ce réseau privé. La valeur "null" supprime le vrack network id de toutes les fermes où il était configuré.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
