---
title: Détails des fonctions API
slug: api-details
excerpt: Détails des fonctionnalités de l’API
section: Premiers pas
---

## Objectif

Description des différents points d'entrées dans l'API pour le Load Balancer OVHcloud.

## Prérequis

## En pratique

### Gérer son service Load Balancer OVH via l'API

Détails des fonctionnalités de l'API pour le Load Balancer OVHcloud.

- Tous les appels API se font dans la section */ipLoadbalancing* disponible ici : [https://ca.api.ovh.com/console/#/ipLoadbalancing](https://ca.api.ovh.com/console/#/ipLoadbalancing){.external}.



> [!warning]
>
> Attention, pour des raisons de compatibilité, le point d'entrée de l'ancien
> système Load Balancer OVH est toujours présent dans l'API /ip/loadBalancing,
> à ne pas confondre avec le nouveau /ipLoadbalancing.
> 


> [!primary]
>
> Dans les appels ci-dessous tous les champs marqués d'une astérisque *
> sont obligatoires.
> 



> [!primary]
>
> Les Frontend, Ferme et Serveur sont spécifiques au
> protocole (parmis HTTP, TCP ou UDP) dans lequel ils sont définis.
> Bien qu'ils puissent être "combinés" entre eux, ce n'est possible qu'au sein
> d'un même protocole. Ainsi, il n'est pas possible d'utiliser un Frontend
> UDP avec une Ferme HTTP. Mais il est possible (en l'absence d'autre
> limitation) d'utiliser un Frontend HTTP avec une Ferme HTTP.
> 


## Services et zones

### Load Balancer OVH

#### Lister les services actifs

> [!api]
>
> @api {GET} /ipLoadbalancing
> 

#### Lister les zones disponibles pour le Load Balancer OVH

> [!api]
>
> @api {GET} /ipLoadbalancing/availableZones
> 

#### Retourner les détails d'un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
>

#### Modifier un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
>> >
>> > **Ip** *
>> >
>> >> **displayName**
>> >> >
>> >> > Le nom que vous souhaitez attribuer au service (Chaîne de caractères)
>> >
>> >> **sslConfiguration**
>> >>
>> >> > La configuration SSL que vous souhaitez attribuer au service (Valeur)
>

#### Lister les services attachés au Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
>> >
>> > **vrackNetworkId**
>> >
>> >> Permet de filtrer selon le réseau vrack
>

#### Lister les zones pouvant être attachées à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
>

#### Lister les différents types d'actions de routage pouvant etre utilisées

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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (Chaîne de caractères)
>> >
>> > **Service** *
>> >
>> >> - **automatic**
>> >> >
>> >> > Active le renouvellement automatique du service (Booléen))
>> >>
>> >> - **deleteAtExpiration**
>> >> >
>> >> > Active la suppression du service lors de l'expiration (Booléen)
>> >>
>> >> - **forced**
>> >> >
>> >> > Force le renouvellement automatique (Booléen)
>> >>
>> >> - **period**
>> >> >
>> >> > Renseigne la durée de renouvellement (Chaîne de caractères)
>

### Zones

#### Lister les zones actives pour un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, ex. : IP-1.2.3.4 (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **name** *
>> >
>> >> Le nom de la zone a supprimer
>

## Protocole HTTP
Accéder aux éléments relatifs au protocole HTTP (Frontend, Ferme, etc.).


### Fermes HTTP


#### Lister les fermes HTTP attachées à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **zone**
>> >
>> >> Le nom de la zone (Chaîne de caractères)
>

#### Ajouter une nouvelle ferme HTTP à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **zone** *
>> >
>> >> Le nom de la zone (Chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> le nom que vous souhaitez attribuer à votre ferme (Chaîne de caractères)
>> >
>> > **balance**
>> >>
>> >> La méthode de répartition de charge de votre ferme (Valeur)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre ferme. Hérité du frontend si non défini (Nombre, 1..65535)
>> >
>> > **stickiness**
>> >
>> >> Le type de persistence de connexion à utiliser pour votre ferme (Valeur)
>> >
>> > **probe**
>> >
>> >> Le type de sonde à utiliser sur votre ferme (Sonde HTTP)
>> >> >
>> >> > - **forceSsl**
>> >> >
>> >> >> L'activation du SSL est forcée pour la sonde (Booléen)
>> >> >
>> >> > - **interval**
>> >> >
>> >> >> L'intervalle en secondes entre chaque test de la sonde. Doit être supérieur à 30. 30 par défaut (Nombre)
>> >> >
>> >> > - **match**
>> >> >
>> >> >> La méthode de correspondance utilisée. 'default' utilise le comportement standard de HAProxy. 'status' n'est supporté que pour les sondes HTTP (value) [contains, default, internal, matches, status]
>> >> >
>> >> > - **negate**
>> >> >
>> >> >> Le comportement de l'opérateur 'match' est inversé (Booléen)
>> >> >
>> >> > - **method**
>> >> >
>> >> >> La méthode HTTP utilisée en type 'http'. 'HEAD' peut économiser de la bande passante. 'GET' par défaut (valeur) [HEAD, GET, OPTIONS, internal]
>> >> >
>> >> > - **pattern**
>> >> >
>> >> >> Le format de la réponse du serveur quand "UP". Vide pour 'default', liste de status séparés par des virgules pour 'status', texte pour 'contains', expression régulière pour 'matches' (Chaîne de caractères)
>> >> >
>> >> > - **port**
>> >> >
>> >> >> Le port que la sonde doit utiliser pour tester les serveurs attachés à votre ferme. Ignoré pour les sondes 'oco'. Si non défini, le port de la ferme est utilisé (Nombre)
>> >> >
>> >> > - **type**
>> >> >
>> >> >> Le type de la sonde ; son fonctionnement (valeur) [HTTP, interne, MySQL, OCO, PgSQL, SMTP, TCP]
>> >> >
>> >> > - **url**
>> >> >
>> >> >> L'adresse à utiliser par la sonde pour les sondes de type HTTP. Le type est ignoré si ce paramètre est définit (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme HTTP (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme HTTP (Nombre)
>> >
>> > **BackendHttp** *
>> >
>> >> - **displayName**
>> >> >
>> >> > Le nom de la ferme (Chaîne de caractères)
>> >>
>> >> - **balance**
>> >> >
>> >> > Le type de répartition de charge (Valeur)
>> >>
>> >> - **port**
>> >> >
>> >> > Le port d'écoute de la ferme (Nombre, 1..65000)
>> >>
>> >> - **probe**
>> >> >
>> >> > Le type de sonde à utiliser (Sonde HTTP)
>> >>
>> >> - **stickiness**
>> >> >
>> >> > Le type de persistence de connexion (Valeur)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme HTTP (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme HTTP (Nombre)
>> >
>> > **cookie**
>> >
>> >> Filtrer les valeurs par Cookie (Chaîne de caractères)
>> >
>> > **address**
>> >
>> >> Filtrer les valeurs par adresse IPv4 (IPv4)
>> >
>> > **status**
>> >
>> >> Filtrer les valeurs par statut du serveur (Valeur)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>> >
>> > **address** *
>> >
>> >> L'adresse IPv4 de votre serveur (IPv4)
>> >
>> > **backup**
>> >
>> >> Si votre serveur est configuré comme serveur de secours (Booléen)
>> >
>> > **chain**
>> >
>> >> La valeur du certificat SSL intermédiaire (Chaîne de caractères)
>> >
>> > **cookie**
>> >
>> >> La valeur de votre Cookie (Chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom donné à votre serveur (Chaîne de caractères)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre serveur. Hérité de votre ferme si non défini (Nombre, 1..65535)
>> >
>> > **probe**
>> >
>> >> Le type de sonde à utiliser (Valeur)
>> >
>> > **proxyProtocolVersion**
>> >
>> >> La version de proxyProtocol à utiliser,
>> >>            voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Valeur)
>> >
>> > **ssl** *
>> >
>> >> Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (Booléen)
>> >
>> > **weight** *
>> >
>> >> Le poids de votre serveur pour votre ferme. Un serveur à poids élevé reçoit plus de requêtes (Nombre)
>> >
>> > **status** *
>> >
>> >> Si votre serveur est activé ou non (Booléen)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre server (Nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre server-link (Nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>> >
>> > **BackendHttpServer** *
>> >
>> >> - **backup**
>> >> >
>> >> > Si votre serveur est configuré comme serveur de secours (Booléen)
>> >>
>> >> - **chain**
>> >> >
>> >> > La valeur du certificat SSL intermédiaire (Chaîne de caractères)
>> >>
>> >> - **cookie**
>> >> >
>> >> > La valeur de votre Cookie (Chaîne de caractères)
>> >>
>> >> - **displayName**
>> >> >
>> >> > Le nom de votre serveur (Chaîne de caractères)
>> >>
>> >> - **port**
>> >> >
>> >> > Le port d'écoute de votre serveur (Nombre, 1..65535)
>> >>
>> >> - **probe**
>> >> >
>> >> > Le type de sonde à utiliser (Valeur)
>> >>
>> >> - **proxyProtocolVersion**
>> >> >
>> >> > La version de proxyProtocol à utiliser,
>> >> > voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Valeur)
>> >>
>> >> - **ssl**
>> >> >
>> >> > Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (Booléen)
>> >>
>> >> - **status**
>> >> >
>> >> > Si votre serveur est activé ou non (Booléen)
>> >>
>> >> - **weight**
>> >> >
>> >> > Le poids de votre serveur pour votre ferme (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre server (Nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>

### Frontends HTTP

#### Lister les frontends HTTP attachés à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **defaultFarmId**
>> >
>> >> L'identifiant de la ferme HTTP à laquelle le frontend HTTP est lié (Nombre)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre frontend (Nombre, 1..65535)
>> >
>> > **zone**
>> >
>> >> Le nom de votre zone, ex: all (Chaîne de caractères)
>

#### Ajouter un frontend HTTP à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
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
>> >> L'identifiant de la ferme HTTP par défaut pour votre frontend (Nombre)
>> >
>> > **defaultSslId**
>> >
>> >> L'identifiant du certificat SSL par défaut (Nombre)
>> >
>> > **disabled**
>> >
>> >> Si votre frontend HTTP est désactivé ou activé (Booléen)
>> >
>> > **displayName**
>> >
>> >> Le nom de votre frontend HTTP (Chaîne de caractères)
>> >
>> > **hsts**
>> >
>> >> Si le support du *https strict, HTTP Strict Transport Security* est activé ou désactivé (Booléen)
>> >
>> > **httpHeader**
>> >
>> >> L'entête *http* personnalisé à ajouter (Chaîne de caractères)
>> >
>> > **port** *
>> >
>> >> Le port d'écoute de votre frontend (Nombre, 1..65535)
>> >
>> > **redirectLocation**
>> >
>> >> L'URL de redirection *http* (Chaîne de caractères)
>> >
>> > **ssl**
>> >
>> >> Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (Booléen)
>> >
>> > **zone** *
>> >
>> >> Le nom de votre zone, ex: all (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend HTTP (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend HTTP (Nombre)
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
>> >> > L'identifiant du certificat SSL par défaut (Nombre)
>> >>
>> >> - **disabled** 
>> >> >
>> >> > Si votre frontend HTTP est désactivé ou activé (Booléen)
>> >>
>> >> - **displayName** 
>> >> >
>> >> > Le nom de votre frontend HTTP (Chaîne de caractères)
>> >>
>> >> - **hsts** 
>> >> >
>> >> > Si le support du *https strict, HTTP Strict Transport Security* est activé ou désactivé (Booléen)
>> >>
>> >> - **httpHeader** 
>> >> >
>> >> > L'entête *http* personnalisé à ajouter (Chaîne de caractères)
>> >>
>> >> - **ssl** 
>> >> >
>> >> > Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (Booléen)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **frontendId**
>> >
>> >> L'identifiant d'un frontend HTTP (Nombre)
>

#### Ajouter une nouvelle route HTTP à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **action** *
>> >
>> >> L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction)
>> >>
>> >> - **status** 
>> >>
>> >> > Le code de retour HTTP attendu (Nombre)
>> >>
>> >> - **target** 
>> >>
>> >> > L'identifiant de la ferme, ou le modèle pour l'URL (Chaîne de caractères)
>> >>
>> >> - **type** 
>> >>
>> >> > L'action de votre route (Chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom de votre route (Chaîne de caractères)
>> >
>> > **frontendId**
>> >
>> >> L'Identifiant du frontend HTTP pour lequel votre route est appliquée (Nombre)
>> >
>> > **weight**
>> >
>> >> La priorité de votre route. (Nombre) [0 - 255]
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (Nombre)
>> >
>> > **routeHttp** *
>> >
>> >> **action** *
>> >>
>> >> > L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction)
>> >> >
>> >> > - **status** 
>> >> >
>> >> >> Le code de retour HTTP attendu (Nombre)
>> >> >
>> >> > - **target** 
>> >> >
>> >> >> L'identifiant de la ferme, ou le modèle pour l'URL (Chaîne de caractères)
>> >> >
>> >> > - **type** 
>> >> >
>> >> >> L'action de votre route (Chaîne de caractères)
>> >>
>> >> **displayName**
>> >>
>> >> > Le nom de votre route (Chaîne de caractères)
>> >>
>> >> **frontendId**
>> >>
>> >> > L'Identifiant du frontend HTTP pour lequel votre route est appliquée (Nombre)
>> >>
>> >> **weight**
>> >>
>> >> > La priorité de votre route. (Nombre) [0 - 255]
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route HTTP (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route HTTP (Nombre)
>> >
>> > **field** *
>> >
>> >> Le nom du champs à tester avec l'opérateur "match" (Chaîne de caractères)
>> >
>> > **match** *
>> >
>> >> L'opérateur de comparaison (valeur) (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >
>> > **negate**
>> >
>> >> Le comportement de l'opérateur :code:`match` est inversé (Booléen)
>> >
>> > **pattern**
>> >
>> >> Le schéma ou l'expression régulière utilisée par l'opérateur "match" (Regex / Chaîne de caractères)
>> >
>> > **subField**
>> >
>> >> Le nom du sous-champs, si applicable. Peut être un cookie ou un nom d'en-tête, par exemple (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route HTTP (Nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route HTTP (Nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (Nombre)
>> >
>> > **RouteRule** *
>> >
>> >> - **field**
>> >>
>> >> > Le nom du champs à tester via l'opérateur "match" (Chaîne de caractères)
>> >>
>> >> - **match** 
>> >>
>> >> > L'opérateur de comparaison à utiliser (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >>
>> >> - **negate** 
>> >>
>> >> > Si l'opérateur "match" est inversé ou non (Booléen)
>> >>
>> >> - **pattern** 
>> >>
>> >> > La valeur ou l'expression régulière à utiliser avec l'opérateur "match" (Regex / Chaîne de caractères)
>> >>
>> >> - **subField** 
>> >>
>> >> > Le nom du sous-champs si applicable (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route HTTP (Nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (Nombre)
>

## Protocole TCP
Accéder aux éléments relatifs au protocole TCP (Frontend, Ferme, etc.).


### Fermes TCP

#### Lister les fermes TCP attachées à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **zone**
>> >
>> >> Le nom de votre zone, ex: all (Chaîne de caractères)
>

#### Ajouter une nouvelle ferme TCP à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **balance**
>> >
>> >> La méthode de répartition de charge de votre ferme (Valeur)
>> >
>> > **displayName**
>> >
>> >> Le nom que vous souhaitez donner à votre ferme (Chaîne de caractères)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre ferme. Hérité du frontend si non défini (Nombre, 1..65535)
>> >
>> > **probe**
>> >
>> >> Le type de sonde à utiliser sur votre ferme (Sonde HTTP)
>> >>
>> >> - **forceSsl**
>> >>
>> >> > L'activation du SSL est forcée pour la sonde (Booléen)
>> >>
>> >> - **interval**
>> >>
>> >> > L'intervalle (en secondes) entre chaque test de la sonde. Doit être supérieur à 30. 30 par défaut (Nombre)
>> >>
>> >> - **match**
>> >>
>> >> > La méthode de correspondance utilisée. 'default' utilise le comportement standard de HAProxy. 'status' n'est supporté que pour les sondes HTTP (valeur) (contains, default, internal, matches, status)
>> >>
>> >> - **negate**
>> >>
>> >> > Le comportement de l'opérateur :code:`match` est inversé (Booléen)
>> >>
>> >> - **method**
>> >>
>> >> > La méthode HTTP utilisée en :code:`type` 'http'. 'HEAD' peut économiser de la bande passante. 'GET' par défaut (valeur) (HEAD, GET, OPTIONS, internal)
>> >>
>> >> - **pattern**
>> >>
>> >> > réponse du serveur quand "UP". Vide pour 'default', liste de statuts séparés par des virgules pour 'status', texte pour 'contains', expression régulière pour 'matches' (Chaîne de caractères)
>> >>
>> >> - **port**
>> >>
>> >> > Le port que la sonde doit utiliser pour tester les serveurs attachés à votre ferme. Ignoré pour les sondes 'oco'. Si non défini, le port de la ferme est utilisé (Nombre)
>> >>
>> >> - **type**
>> >>
>> >> > Le type de la sonde ; son fonctionnement (valeur) (HTTP, interne, MySQL, OCO, PgSQL, SMTP ou TCP)
>> >>
>> >> - **url**
>> >>
>> >> > L'adresse à utiliser par la sonde pour les sondes de type HTTP. Le :code:`type` est ignoré si ce paramètre est définit (Chaîne de caractères)
>> >>
>> > **stickiness**
>> >
>> >> Le type de persistence de connexion à utiliser pour votre ferme (Valeur)
>> >
>> > **zone** *
>> >
>> >> Le nom de votre zone, ex: all (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>> >
>> > **BackendTcp** *
>> >
>> >> - **balance**
>> >>
>> >> > Le type de répartition de charge (Valeur)
>> >>
>> >> - **displayName** 
>> >>
>> >> > Le nom de la ferme (Chaîne de caractères)
>> >>
>> >> - **port** 
>> >>
>> >> > Le port d'écoute de la ferme (Nombre, 1..65000)
>> >>
>> >> - **probe** 
>> >>
>> >> > Le type de sonde à utiliser (Sonde TCP)
>> >>
>> >> - **stickiness** 
>> >>
>> >> > Le type de persistence de connexion (Valeur)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>> >
>> > **cookie**
>> >
>> >> Filtrer les valeurs par Cookie (Chaîne de caractères)
>> >
>> > **address**
>> >
>> >> Filtrer les valeurs par adresse IPv4 (IPv4)
>> >
>> > **status**
>> >
>> >> Filtrer les valeurs par statut du serveur (Valeur)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>> >
>> > **address** *
>> >
>> >> L'adresse IPv4 de votre serveur (IPv4)
>> >
>> > **backup**
>> >
>> >> Si votre serveur est configuré comme serveur de secours (Booléen)
>> >
>> > **chain**
>> >
>> >> La valeur du certificat SSL intermédiaire (Chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom donné à votre serveur (Chaîne de caractères)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre serveur. Hérité de votre ferme si non défini (Nombre, 1..65535)
>> >
>> > **probe**
>> >
>> >> Le type de sonde à utiliser (Valeur)
>> >
>> > **proxyProtocolVersion**
>> >
>> >> La version de proxyProtocol à utiliser,
>> >> voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Valeur)
>> >
>> > **ssl** *
>> >
>> >> Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (Booléen)
>> >
>> > **weight** *
>> >
>> >> Le poids de votre serveur pour votre ferme. Un serveur à poids élevé reçoit plus de requêtes (Nombre)
>> >
>> > **status** *
>> >
>> >> Si votre serveur est activé ou non (Booléen)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre server (Nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre server-link (Nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>> >
>> > **BackendTcpServer** *
>> >
>> >> - **backup**
>> >>
>> >> > Si votre serveur est configuré comme serveur de secours (Booléen)
>> >>
>> >> - **chain** 
>> >>
>> >> > La valeur du certificat SSL intermédiaire (Chaîne de caractères)
>> >>
>> >> - **displayName** 
>> >>
>> >> > Le nom de votre serveur (Chaîne de caractères)
>> >>
>> >> - **port** 
>> >>
>> >> > Le port d'écoute de votre serveur (Nombre, 1..65535)
>> >>
>> >> - **probe** 
>> >>
>> >> > Le type de sonde à utiliser (Valeur)
>> >>
>> >> - **proxyProtocolVersion** 
>> >>
>> >> > La version de proxyProtocol à utiliser,
>> >> > voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Valeur >> )
>> >>
>> >> - **ssl** 
>> >>
>> >> > Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (Booléen)
>> >>
>> >> - **status**
>> >>
>> >> > Si votre serveur est activé ou non (Booléen)
>> >>
>> >> - **weight** 
>> >>
>> >> > Le poids de votre serveur pour votre ferme (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre server (Nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>

### Frontends TCP

#### Lister les frontends TCP attachés à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **defaultFarmId**
>> >
>> >> L'identifiant de la ferme TCP à laquelle le frontend TCP est lié (Nombre)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre frontend (Nombre, 1..65535)
>> >
>> > **zone**
>> >
>> >> Le nom de votre zone, ex: all (Chaîne de caractères)
>

#### Ajouter un frontend TCP à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
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
>> >> L'identifiant de la ferme TCP par défaut pour votre frontend (Nombre)
>> >
>> > **defaultSslId**
>> >
>> >> L'identifiant du certificat SSL par défaut (Nombre)
>> >
>> > **disabled**
>> >
>> >> Si votre frontend TCP est désactivé ou activé (Booléen)
>> >
>> > **displayName**
>> >
>> >> Le nom de votre frontend TCP (Chaîne de caractères)
>> >
>> > **port** *
>> >
>> >> Le port d'écoute de votre frontend (Nombre, 1..65535)
>> >
>> > **ssl**
>> >
>> >> Si les requêtes envoyées à la ferme TCP doivent être chiffrées avec SSL ou non (Booléen)
>> >
>> > **zone** *
>> >
>> >> Le nom de votre zone, ex: all (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> >  **frontendId** *
>> >>
>> >> L'identifiant de votre frontend TCP (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend TCP (Nombre)
>> >
>> > **FrontendTcp** *
>> >
>> >> - **allowedSource**
>> >>
>> >> > La liste des adresses IPs clientes qui ont accès au Load Balancer (IPv4[])
>> >>
>> >> - **dedicatedIpfo** 
>> >>
>> >> > La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])
>> >>
>> >> - **defaultSslId**
>> >>
>> >> > L'identifiant du certificat SSL par défaut (Nombre)
>> >>
>> >> - **disabled** 
>> >>
>> >> > Si votre frontend HTTP est désactivé ou activé (Booléen)
>> >>
>> >> - **displayName** 
>> >>
>> >> > Le nom de votre frontend HTTP (Chaîne de caractères)
>> >>
>> >> - **ssl** 
>> >>
>> >> > Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (Booléen)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend (Nombre)
>

### Routes TCP
Les routes sont évaluées une par une, en testant leurs règles de routage. La première route validant toutes ses règles voit son action exécutée, et arrête l'évaluation des routes restantes. L'ordre d'exécution est défini par le type et le poids de la route.


#### Lister les routes TCP attachées à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **frontendId**
>> >
>> >> L'identifiant d'un frontend TCP (Nombre)
>

#### Ajouter une nouvelle route TCP à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **action** *
>> >
>> >> L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction)
>> >>
>> >> - **target** 
>> >>
>> >> > L'identifiant de la ferme, ou le modèle pour l'URL (Chaîne de caractères)
>> >>
>> >> - **type** 
>> >>
>> >> > L'action de votre route (Chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom de votre route (Chaîne de caractères)
>> >
>> > **frontendId**
>> >
>> >> L'Identifiant du frontend TCP pour lequel votre route est appliquée (Nombre)
>> >
>> > **weight**
>> >
>> >> La priorité de votre route. (Nombre) [0 - 255]
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (Nombre)
>> >
>> > **routeTcp** *
>> >
>> >> - **action**
>> >>
>> >> > L'action à réaliser (routeTcpAction)
>> >> >
>> >> > - **target** 
>> >> >
>> >> >> L'identifiant de la ferme, ou le modèle pour l'URL (Chaîne de caractères)
>> >> >
>> >> > - **type** 
>> >> >
>> >> >> L'action de votre route (Chaîne de caractères)
>> >>
>> >> - **displayName** 
>> >>
>> >> > Le nom de votre route (Chaîne de caractères)
>> >>
>> >> - **frontendId** 
>> >>
>> >> > Le frontend TCP pour lequel votre route est appliquée (Nombre)
>> >>
>> >> - **weight** 
>> >>
>> >> > La priorité de votre route (Nombre) [0 - 255]
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route TCP (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route TCP (Nombre)
>> >
>> > **field** *
>> >
>> >> Le nom du champs à tester avec l'opérateur "match" (Chaîne de caractères)
>> >
>> > **match** *
>> >
>> >> L'opérateur de comparaison (valeur) (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >
>> > **negate**
>> >
>> >> Le comportement de l'opérateur :code:`match` est inversé (Booléen)
>> >
>> > **pattern**
>> >
>> >> Le schéma ou l'expression régulière utilisée par l'opérateur "match" (Regex / Chaîne de caractères)
>> >
>> > **subField**
>> >
>> >> Le nom du sous-champs, si applicable. Peut être un cookie ou un nom d'en-tête, par exemple (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route TCP (Nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route TCP (Nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (Nombre)
>> >
>> > **RouteRule** *
>> >
>> >> - **field**
>> >>
>> >> > Le nom du champs à tester via l'opérateur "match" (Chaîne de caractères)
>> >>
>> >> - **match** 
>> >>
>> >> > L'opérateur de comparaison à utiliser (contains, endsWith, exists, in, internal, is, matches, startsWith)
>> >>
>> >> - **negate** 
>> >>
>> >> > Si l'opérateur "match" est inversé ou non (Booléen)
>> >>
>> >> - **pattern** 
>> >>
>> >> > La valeur ou l'expression régulière à utiliser avec l'opérateur "match" (Regex / Chaîne de caractères)
>> >>
>> >> - **subField** 
>> >>
>> >> > Le nom du sous-champs si applicable (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **routeId** *
>> >
>> >> L'identifiant de votre route TCP (Nombre)
>> >
>> > **ruleId** *
>> >
>> >> L'identifiant de votre règle de routage HTTP (Nombre)
>

## Protocole UDP
Accéder aux éléments relatifs au protocole UDP (Frontend, Ferme, etc.).


### Fermes UDP

#### Lister les fermes UDP attachées à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **zone**
>> >
>> >> Le nom de votre zone, ex: all (Chaîne de caractères)
>

#### Ajouter une nouvelle ferme UDP à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom que vous souhaitez donner à votre ferme (Chaîne de caractères)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre ferme. Hérité du frontend si non défini (Nombre, 1..65535)
>> >
>> > **zone** *
>> >
>> >> Le nom de votre zone, ex: all (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>> >
>> > **BackendUdp** *
>> >
>> >> - **displayName**
>> >>
>> >> > Le nom de la ferme (Chaîne de caractères)
>> >>
>> >> - **port** 
>> >>
>> >> > Le port d'écoute de la ferme (Nombre, 1..65000)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>> >
>> > **address**
>> >
>> >> Filtrer les valeurs par adresse IPv4 (IPv4)
>> >
>> > **status**
>> >
>> >> Filtrer les valeurs par statut du serveur (Valeur)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>> >
>> > **address** *
>> >
>> >> L'adresse IPv4 de votre serveur (IPv4)
>> >
>> > **displayName**
>> >
>> >> Le nom donné à votre serveur (Chaîne de caractères)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre serveur. Hérité de votre ferme si non défini (Nombre, 1..65535)
>> >
>> > **status** *
>> >
>> >> Si votre serveur est activé ou non (Booléen)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre server (Nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre serveur (Nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme (Nombre)
>> >
>> > **BackendUdpServer** *
>> >
>> >> - **displayName**
>> >>
>> >> > Le nom de votre serveur (Chaîne de caractères)
>> >>
>> >> - **port** 
>> >>
>> >> > Le port d'écoute de votre serveur (Nombre, 1..65535)
>> >>
>> >> - **status**
>> >>
>> >> > Si votre serveur est activé ou non (Booléen)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **serverId** *
>> >
>> >> L'identifiant de votre serveur UDP (Nombre)
>> >
>> > **farmId** *
>> >
>> >> L'identifiant de votre ferme UDP (Nombre)
>

### Frontends UDP

#### Lister les frontends UDP attachés à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **defaultFarmId**
>> >
>> >> L'identifiant de la ferme UDP à laquelle le frontend UDP est lié (Nombre)
>> >
>> > **port**
>> >
>> >> Le port d'écoute de votre frontend (Nombre, 1..65535)
>> >
>> > **zone**
>> >
>> >> Le nom de votre zone, ex: all (Chaîne de caractères)
>

#### Ajouter un frontend UDP à un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **dedicatedIpfo**
>> >
>> >> La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])
>> >
>> > **defaultFarmId** *
>> >
>> >> L'identifiant de la ferme UDP par défaut pour votre frontend (Nombre)
>> >
>> > **disabled**
>> >
>> >> Si votre frontend UDP est désactivé ou activé (Booléen)
>> >
>> > **displayName**
>> >
>> >> Le nom de votre frontend UDP (Chaîne de caractères)
>> >
>> > **port** *
>> >
>> >> Le port d'écoute de votre frontend (Nombre, 1..65535)
>> >
>> > **zone** *
>> >
>> >> Le nom de votre zone, ex: all (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend UDP (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend UDP (Nombre)
>> >
>> > **FrontendUdp** *
>> >
>> >> - **dedicatedIpfo**
>> >>
>> >> > La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])
>> >>
>> >> - **disabled** 
>> >>
>> >> > Si votre frontend UDP est désactivé ou activé (Booléen)
>> >>
>> >> - **displayName** 
>> >>
>> >> > Le nom de votre frontend UDP (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **frontendId** *
>> >
>> >> L'identifiant de votre frontend UDP (Nombre)
>

## Autres fonctionnalités

### Additional IP

#### Lister les Additional IPs routées sur un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>

### État du service

#### Obtenir l'état des instances d'un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>

#### Lister les IPs de sortie utilisées par OVH pour le NAT

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>

#### Appliquer les modifications d'un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>

### Certificats SSL

#### Lister les certificats SSL d'un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **fingerprint**
>> >
>> >> Liste l'empreinte du certificat SSL (Chaîne de caractères)
>> >
>> > **serial**
>> >
>> >> Liste le numéro d'indentification du certificat SSL (Chaîne de caractères)
>> >
>> > **type**
>> >
>> >> Type de certificat SSL (Valeur)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **certificate** *
>> >
>> >> Ajout du certificat SSL (Chaîne de caractères)
>> >
>> > **chain**
>> >
>> >> Ajout du certificat SSL intermédiaire (Chaîne de caractères)
>> >
>> > **key** *
>> >
>> >> Ajout de la clé privée (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **id** *
>> >
>> >> L'identifiant de votre certificat SSL (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **id** *
>> >
>> >> L'identifiant de votre certificat SSL (Nombre)
>

### Tâches

#### Lister les tâches en cours pour un service Load Balancer OVH

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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **id** *
>> >
>> >> L'identifiant de votre tâche (Nombre)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **contactAdmin**
>> >
>> >> Le NIC OVH à configurer pour le contact Admin de ce service (Chaîne de caractères)
>> >
>> > **contactBilling**
>> >
>> >> Le NIC OVH à configurer pour le contact Admin de ce service (Chaîne de caractères)
>> >
>> > **contactTech**
>> >
>> >> Le NIC OVH à configurer pour le contact Admin de ce service (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
>> >
>> > **displayName**
>> >
>> >> Le nom que vous souhaitez attribuer au réseau (Chaîne de caractères)
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
>> >> Le bloc d'Ip du réseau privé
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
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
>> >> L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (Chaîne de caractères)
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
