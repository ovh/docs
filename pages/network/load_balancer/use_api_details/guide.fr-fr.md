---
title: Détails des fonctionnalités API
excerpt: "Détails des fonctionnalités de l’API OVHcloud pour l’offre OVHcloud Load Balancer"
updated: 2025-09-29
---

<style>
:root > * {
  --md-api-get-color:#3a87ad;
  --md-api-get-bgcolor:#c9ddf6;
  --md-api-post-color:#468847;
  --md-api-post-bgcolor:#d1e7db;
  --md-api-put-color:#f89406;
  --md-api-put-bgcolor:#f7dec0;
  --md-api-delete-color:#b94a48;
  --md-api-delete-bgcolor:#f4c1bf;
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>');
  --md-shadow-z1:0 0.2rem 0.5rem #0000000d,0 0 0.05rem #0000001a;
  --md-shadow-z2:0 0.2rem 0.5rem #00000040,0 0 0.05rem #00000040;
  --md-shadow-z3:0 0.2rem 0.5rem #0006,0 0 0.05rem #00000059;
}
/* HOOK API */
.ovh-api {
  position:relative !important;
  width:calc(100% - 30px) !important;
  z-index:2 !important;
}
.ovh-api > p {
  display:none !important;
}
.ovh-api-main {
  align-items:center !important;
  border-radius:0 !important;
  box-shadow:none !important;
  display:flex !important;
  font-size:initial !important;
  margin:15px 0 !important;
  overflow:hidden !important;
  padding:0 !important;
  scrollbar-width:thin !important;
}
.ovh-api-main:hover {
  overflow-x:auto !important;
}
.ovh-api-main span {
  font-size:13px !important
}
.ovh-api-main a {
  align-items:center !important;
  display:inline-flex !important;
  height:30px !important;
  text-decoration:none !important;
}
.ovh-api-verb {
  align-items:center !important;
  border-radius:4px !important;
  color:#fff !important;
  display:flex !important;
  font-weight:700 !important;
  height:22px !important;
  justify-content:center !important;
  letter-spacing:1px !important;
  line-height:initial !important;
  margin:0 1ch 0 4px !important;
  padding:2px 0 0 !important;
  position:initial !important;
  text-shadow:none !important;
  vertical-align:initial !important;
  width:9ch !important;
}
.ovh-api-endpoint {
  display: inline !important;
  padding:3px 1ch 0 0 !important;
  white-space:nowrap !important;
}
/* DETAILS */
details:not(:has(summary:empty)) {
  margin:10px 0;
}
.ovh-api + details:has(summary:empty) {
  margin-top:-15px !important;
  position:relative !important;
}
.ovh-api + details summary:empty {
  cursor:pointer !important;
  height:32px !important;
  list-style:none !important;
  outline:none !important;
  position:absolute !important;
  right:0 !important;
  top:-32px !important;
  width:30px !important;
}
.ovh-api + details > summary:empty:before {
  background-color:#222c32 !important;
  content:'' !important;
  height:24px !important;
  left:3px !important;
  -webkit-mask-image:var(--md-details-icon) !important;
          mask-image:var(--md-details-icon) !important;
  -webkit-mask-position:center !important;
          mask-position:center !important;
  -webkit-mask-repeat:no-repeat !important;
          mask-repeat:no-repeat !important;
  -webkit-mask-size:contain !important;
          mask-size:contain !important;
  position:absolute !important;
  top:3px !important;
  transition:transform .25s !important;
  width:24px !important;
}
.ovh-api + details > summary:empty::-webkit-details-marker {
  /* Hides marker on Safari */
  display:none !important;
}
.ovh-api + details[open]:has(summary:empty) {
  border-radius:0 0 4px 4px !important;
  border-top:none !important;
  margin-top:-47px !important;
  padding:40px 15px 15px !important;
}
.ovh-api + details[open] > summary:empty {
  right:-1px !important;
  top:-1px !important;
}
.ovh-api + details[open] > summary:empty:before {
  transform: rotate(90deg) !important;
}
.ovh-api + details[open]:has(summary:empty) p {
  margin:0 0 10px !important;
}
.ovh-api + details[open]:has(summary:empty) h6 {
  font-size: 16px !important;
  font-weight:600 !important;
  margin:0 0 20px !important;
  text-transform:uppercase !important;
}
.ovh-api + details[open]:has(summary:empty) sup {
  color: #900 !important;
  font-size: 24px !important;
  vertical-align: middle !important;
  padding: 18px 0 0 !important;
}
/* GET */
.ovh-api-main:has(.ovh-api-verb-GET) {
  border:1px solid var(--md-api-get-color) !important;
  border-right:0 !important;
}
.ovh-api-verb.ovh-api-verb-GET {
  background-color: var(--md-api-get-color) !important;
}
.ovh-api:has(.ovh-api-verb-GET) + details > summary:empty {
  border:1px solid var(--md-api-get-color) !important;
  border-left:0 !important;
}
.ovh-api:has(.ovh-api-verb-GET) + details > summary:empty:before {
  background-color:var(--md-api-get-color) !important;
}
.ovh-api:has(.ovh-api-verb-GET) + details[open]:has(summary:empty) {
  border:1px solid var(--md-api-get-color) !important;
  box-shadow:var(--md-shadow-z2), inset 0 30px 0 var(--md-api-get-bgcolor) !important;
}
.ovh-api:has(.ovh-api-verb-GET):not(:has(+ details > summary:empty)) .ovh-api-main {
  border-right:1px solid var(--md-api-get-color) !important;
  width:calc(100% + 29px) !important;
}
/* POST */
.ovh-api-main:has(.ovh-api-verb-POST) {
  border:1px solid var(--md-api-post-color) !important;
  border-right:0 !important;
}
.ovh-api-verb.ovh-api-verb-POST {
  background-color: var(--md-api-post-color) !important;
}
.ovh-api:has(.ovh-api-verb-POST) + details > summary:empty {
  border:1px solid var(--md-api-post-color) !important;
  border-left:0 !important;
}
.ovh-api:has(.ovh-api-verb-POST) + details > summary:empty:before {
  background-color:var(--md-api-post-color) !important;
}
.ovh-api:has(.ovh-api-verb-POST) + details[open]:has(summary:empty) {
  border:1px solid var(--md-api-post-color) !important;
  box-shadow:var(--md-shadow-z2), inset 0 30px 0 var(--md-api-post-bgcolor) !important;
}
.ovh-api:has(.ovh-api-verb-POST):not(:has(+ details > summary:empty)) .ovh-api-main {
  border-right:1px solid var(--md-api-post-color) !important;
  width:calc(100% + 29px) !important;
}
/* PUT */
.ovh-api-main:has(.ovh-api-verb-PUT) {
  border:1px solid var(--md-api-put-color) !important;
  border-right:0 !important;
}
.ovh-api-verb.ovh-api-verb-PUT {
  background-color: var(--md-api-put-color) !important;
}
.ovh-api:has(.ovh-api-verb-PUT) + details > summary:empty {
  border:1px solid var(--md-api-put-color) !important;
  border-left:0 !important;
}
.ovh-api:has(.ovh-api-verb-PUT) + details > summary:empty:before {
  background-color:var(--md-api-put-color) !important;
}
.ovh-api:has(.ovh-api-verb-PUT) + details[open]:has(summary:empty) {
  border:1px solid var(--md-api-put-color) !important;
  box-shadow:var(--md-shadow-z2), inset 0 30px 0 var(--md-api-put-bgcolor) !important;
}
.ovh-api:has(.ovh-api-verb-PUT):not(:has(+ details > summary:empty)) .ovh-api-main {
  border-right:1px solid var(--md-api-put-color) !important;
  width:calc(100% + 29px) !important;
}
/* DELETE */
.ovh-api-main:has(.ovh-api-verb-DELETE) {
  border:1px solid var(--md-api-delete-color) !important;
  border-right:0 !important;
}
.ovh-api-verb.ovh-api-verb-DELETE {
  background-color: var(--md-api-delete-color) !important;
}
.ovh-api:has(.ovh-api-verb-DELETE) + details > summary:empty {
  border:1px solid var(--md-api-delete-color) !important;
  border-left:0 !important;
}
.ovh-api:has(.ovh-api-verb-DELETE) + details > summary:empty:before {
  background-color:var(--md-api-delete-color) !important;
}
.ovh-api:has(.ovh-api-verb-DELETE) + details[open]:has(summary:empty) {
  border:1px solid var(--md-api-delete-color) !important;
  box-shadow:var(--md-shadow-z2), inset 0 30px 0 var(--md-api-put-bgcolor) !important;
}
.ovh-api:has(.ovh-api-verb-DELETE):not(:has(+ details > summary:empty)) .ovh-api-main {
  border-right:1px solid var(--md-api-delete-color) !important;
  width:calc(100% + 29px) !important;
}
</style>


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

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

///

#### Modifier un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

**Ip** ^*^

- **displayName**
Le nom que vous souhaitez attribuer au service (chaîne de caractères)

- **sslConfiguration**
La configuration SSL que vous souhaitez attribuer au service (valeur)

///

#### Lister les services attachés au Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/allowedServers
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

///

#### Lister les fermes existantes et leur type

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/definedFarms
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

**vrackNetworkId**

Permet de filtrer selon le réseau vrack

///

#### Lister les zones pouvant être attachées à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableServerZones
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

///

#### Lister les différentes sondes pouvant être utilisées

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFarmProbes
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

///

#### Lister les différents types de fermes pouvant être utilisées

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFarmType
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

///

#### Lister les différents types de frontends pouvant être utilisés

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableFrontendType
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

///

#### Lister les différents types d'actions de routage pouvant etre utilisés

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteActions
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

///

#### Lister les différents types de règles de routage pouvant être utilisés

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/availableRouteRules
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

///

### Service

#### Obtenir les informations du service

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/serviceInfos
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

///

#### Modifier les informations du service

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/serviceInfos
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex: IP-1.2.3.4 (chaîne de caractères)

**Service** ^*^

- **automatic**
Active le renouvellement automatique du service (booléen))

- **deleteAtExpiration**
Active la suppression du service lors de l'expiration (booléen)

- **forced**
Force le renouvellement automatique (booléen)

- **period**
Renseigne la durée de renouvellement (chaîne de caractères)

///

### Zones

#### Lister les zones actives pour un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/zone
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, ex. : IP-1.2.3.4 (chaîne de caractères)

///

#### Obtenir les détails d'une zone

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/zone/{name}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**name** ^*^

Le nom de la zone demandée

///

#### Supprimer une zone

Le service sera supprimé à la date d'expiration.

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/zone/{name}/terminate
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**name** ^*^

Le nom de la zone à supprimer

///

#### Annuler la suppression d'une zone

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/zone/{name}/cancelTermination
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**name** ^*^

Le nom de la zone a supprimer

///

## Protocole HTTP

Accéder aux éléments relatifs au protocole HTTP (frontend, ferme, etc.).

### Fermes HTTP

#### Lister les fermes HTTP attachées à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**zone**

Le nom de la zone (chaîne de caractères)

///

#### Ajouter une nouvelle ferme HTTP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**zone** ^*^

Le nom de la zone (chaîne de caractères)

**displayName**

le nom que vous souhaitez attribuer à votre ferme (chaîne de caractères)

**balance**

La méthode de répartition de charge de votre ferme (valeur)

**port**

Le port d'écoute de votre ferme. Hérité du frontend si non-défini (nombre, 1..65535)

**stickiness**

Le type de persistence de connexion à utiliser pour votre ferme (valeur)

**probe**

Le type de sonde à utiliser sur votre ferme (sonde HTTP)

- **forceSsl**
L'activation du SSL est forcée pour la sonde (booléen)

- **interval**
L'intervalle en secondes entre chaque test de la sonde. Doit être supérieur à 30. 30 par défaut (nombre)

- **match**
La méthode de correspondance utilisée. 'default' utilise le comportement standard de HAProxy. 'status' n'est supporté que pour les sondes HTTP (value) [contains, default, internal, matches, status]

- **negate**
Le comportement de l'opérateur 'match' est inversé (booléen)

- **method**
La méthode HTTP utilisée en type 'http'. 'HEAD' peut économiser de la bande passante. 'GET' par défaut (valeur) [HEAD, GET, OPTIONS, internal]

- **pattern**
Le format de la réponse du serveur quand "UP". Vide pour 'default', liste de statuts séparés par des virgules pour 'status', texte pour 'contains', expression régulière pour 'matches' (chaîne de caractères)

- **port**
Le port que la sonde doit utiliser pour tester les serveurs attachés à votre ferme. Ignoré pour les sondes 'oco'. Si non-défini, le port de la ferme est utilisé (nombre)

- **type**
Le type de la sonde ; son fonctionnement (valeur) [HTTP, interne, MySQL, OCO, PgSQL, SMTP, TCP]

- **url**
L'adresse à utiliser par la sonde pour les sondes de type HTTP. Le type est ignoré si ce paramètre est défini (chaîne de caractères)

///

#### Obtenir les détails d'une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme HTTP (nombre)

///

#### Modifier les propriétés d'une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme HTTP (nombre)

**BackendHttp** ^*^

- **displayName**
Le nom de la ferme (chaîne de caractères)

- **balance**
Le type de répartition de charge (valeur)

- **port**
Le port d'écoute de la ferme (nombre, 1..65000)

- **probe**
Le type de sonde à utiliser (sonde HTTP)

- **stickiness**
Le type de persistence de connexion (valeur)

///

#### Supprimer une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme HTTP (nombre)

///

### Serveurs HTTP

#### Lister les serveurs liés à la ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme HTTP (nombre)

**cookie**

Filtrer les valeurs par cookie (chaîne de caractères)

**address**

Filtrer les valeurs par adresse IPv4 (IPv4)

**status**

Filtrer les valeurs par statut du serveur (valeur)

///

#### Ajouter un serveur à une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

**address** ^*^

L'adresse IPv4 de votre serveur (IPv4)

**backup**

Si votre serveur est configuré comme serveur de secours (booléen)

**chain**

La valeur du certificat SSL intermédiaire (chaîne de caractères)

**cookie**

La valeur de votre cookie (chaîne de caractères)

**displayName**

Le nom donné à votre serveur (chaîne de caractères)

**port**

Le port d'écoute de votre serveur. Hérité de votre ferme si non-défini (nombre, 1..65535)

**probe**

Le type de sonde à utiliser (valeur)

**proxyProtocolVersion**

La version de proxyProtocol à utiliser,

voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (valeur)

**ssl** ^*^

Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen)

**weight** ^*^

Le poids de votre serveur pour votre ferme. Un serveur à poids élevé reçoit plus de requêtes (nombre)

**status** ^*^

Si votre serveur est activé ou non (booléen)

///

#### Obtenir les détails d'un serveur lié à une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**serverId** ^*^

L'identifiant de votre serveur (nombre)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

///

#### Modifier les propriétés d'un serveur HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**serverId** ^*^

L'identifiant de votre server-link (nombre)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

**BackendHttpServer** ^*^

- **backup**
Si votre serveur est configuré comme serveur de secours (booléen)

- **chain**
La valeur du certificat SSL intermédiaire (chaîne de caractères)

- **cookie**
La valeur de votre cookie (chaîne de caractères)

- **displayName**
Le nom de votre serveur (chaîne de caractères)

- **port**
Le port d'écoute de votre serveur (nombre, 1..65535)

- **probe**
Le type de sonde à utiliser (valeur)

- **proxyProtocolVersion**
La version de proxyProtocol à utiliser,

voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (valeur)

- **ssl**
Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen)

- **status**
Si votre serveur est activé ou non (booléen)

- **weight**
Le poids de votre serveur pour votre ferme (nombre)

///

#### Supprimer un serveur d'une ferme HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/farm/{farmId}/server/{serverId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**serverId** ^*^

L'identifiant de votre serveur (nombre)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

///

### Frontends HTTP

#### Lister les frontends HTTP attachés à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**defaultFarmId**

L'identifiant de la ferme HTTP à laquelle le frontend HTTP est lié (nombre)

**port**

Le port d'écoute de votre frontend (nombre, 1..65535)

**zone**

Le nom de votre zone, par exemple: all (chaîne de caractères)

///

#### Ajouter un frontend HTTP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**allowedSource**

La liste des adresses IPs clientes qui ont accès au Load Balancer (IPv4)

NB: le filtrage s'effectue au niveau du Load Balancer, donc si le Load Balancer ainsi que les serveurs ne sont pas dans un vRack, vos serveurs sont directement accessibles depuis Internet

**dedicatedIpfo**

La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])

**defaultFarmId**

L'identifiant de la ferme HTTP par défaut pour votre frontend (nombre)

**defaultSslId**

L'identifiant du certificat SSL par défaut (nombre)

**disabled**

Si votre frontend HTTP est désactivé ou activé (booléen)

**displayName**

Le nom de votre frontend HTTP (chaîne de caractères)

**hsts**

Si le support du *https strict, HTTP Strict Transport Security* est activé ou désactivé (booléen)

**httpHeader**

L'entête *http* personnalisé à ajouter (chaîne de caractères)

**port** ^*^

Le port d'écoute de votre frontend (nombre, 1..65535)

**redirectLocation**

L'URL de redirection *http* (chaîne de caractères)

**ssl**

Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (booléen)

**zone** ^*^

Le nom de votre zone, ex: all (chaîne de caractères)

///

### Obtenir les détails d'un frontend HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId** ^*^

L'identifiant de votre frontend HTTP (nombre)

///

#### Modifier les propriétés d'un frontend HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId** ^*^

L'identifiant de votre frontend HTTP (nombre)

**FrontendHttp** ^*^

- **allowedSource**
La liste des adresses IPs clientes qui ont accès au Load Balancer (IPv4[])

NB: le filtrage s'effectue au niveau du Load Balancer, donc si le Load Balancer ainsi que les serveurs ne sont pas dans un vRack, vos serveurs sont directement accessibles depuis Internet

- **dedicatedIpfo**
La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])

- **defaultSslId**
L'identifiant du certificat SSL par défaut (nombre)

- **disabled**
Si votre frontend HTTP est désactivé ou activé (booléen)

- **displayName**
Le nom de votre frontend HTTP (chaîne de caractères)

- **hsts**
Si le support du *https strict, HTTP Strict Transport Security* est activé ou désactivé (booléen)

- **httpHeader**
L'en-tête *http* personnalisé à ajouter (chaîne de caractères)

- **ssl**
Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (booléen)

///

#### Supprimer un frontend HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/frontend/{frontendId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId** ^*^

L'identifiant de votre frontend (nombre)

///

### Routes HTTP

Les routes sont évaluées une par une, en testant leurs règles de routage. La première route validant toutes ses règles voit son action exécutée, et arrête l'évaluation des routes restantes. L'ordre d'exécution est défini par le type et le poids de la route.

#### Lister les routes HTTP attachées à un service Load Balancer

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId**

L'identifiant d'un frontend HTTP (nombre)

///

#### Ajouter une nouvelle route HTTP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/route
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**action** ^*^

L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction)

- **status**
Le code de retour HTTP attendu (nombre)

- **target**
L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères)

- **type**
L'action de votre route (chaîne de caractères)

**displayName**

Le nom de votre route (chaîne de caractères)

**frontendId**

L'identifiant du frontend HTTP pour lequel votre route est appliquée (nombre)

**weight**

La priorité de votre route. (nombre) [0 - 255]
///

#### Obtenir les détails d'une route HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route (nombre)

///

#### Modifier les propriétés d'une route HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route (nombre)

**routeHttp** ^*^

- **action** ^*^
L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction)

- **status**
Le code de retour HTTP attendu (nombre)

- **target**
L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères)

- **type**
L'action de votre route (chaîne de caractères)

- **displayName**
Le nom de votre route (chaîne de caractères)

- **frontendId**
L'identifiant du frontend HTTP pour lequel votre route est appliquée (nombre)

- **weight**
La priorité de votre route. (nombre) [0 - 255]
///

#### Supprimer une route HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route (nombre)

///

### Règles de routage

#### Lister les règles de routages attachées à une route HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route HTTP (nombre)

///

#### Ajouter les règles de routages attachées à une route HTTP

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route HTTP (nombre)

**field** ^*^

Le nom du champ à tester avec l'opérateur "match" (chaîne de caractères)

**match** ^*^

L'opérateur de comparaison (valeur) (contains, endsWith, exists, in, internal, is, matches, startsWith)

**negate**

Le comportement de l'opérateur :code:`match` est inversé (booléen)

**pattern**

Le schéma ou l'expression régulière utilisée par l'opérateur "match" (Regex / Chaîne de caractères)

**subField**

Le nom du sous-champ, si applicable. Peut être un cookie ou un nom d'en-tête, par exemple (chaîne de caractères)

///

#### Obtenir les détails d'une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route HTTP (nombre)

**ruleId** ^*^

L'identifiant de votre règle de routage HTTP (nombre)

///

#### Modifier les propriétés d'une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route HTTP (nombre)

**ruleId** ^*^

L'identifiant de votre règle de routage HTTP (nombre)

**RouteRule** ^*^

- **field**
Le nom du champ à tester via l'opérateur "match" (chaîne de caractères)

- **match**
L'opérateur de comparaison à utiliser (contains, endsWith, exists, in, internal, is, matches, startsWith)

- **negate**
Si l'opérateur "match" est inversé ou non (booléen)

- **pattern**
La valeur ou l'expression régulière à utiliser avec l'opérateur "match" (Regex / Chaîne de caractères)

- **subField**
Le nom du sous-champ si applicable (chaîne de caractères)

///

#### Supprimer une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/http/route/{routeId}/rule/{ruleId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route HTTP (nombre)

**ruleId** ^*^

L'identifiant de votre règle de routage HTTP (nombre)

///

## Protocole TCP

Accéder aux éléments relatifs au protocole TCP (frontend, ferme, etc.).

### Fermes TCP

#### Lister les fermes TCP attachées à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**zone**

Le nom de votre zone, ex: all (chaîne de caractères)

///

#### Ajouter une nouvelle ferme TCP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**balance**

La méthode de répartition de charge de votre ferme (valeur)

**displayName**

Le nom que vous souhaitez donner à votre ferme (chaîne de caractères)

**port**

Le port d'écoute de votre ferme. Hérité du frontend si non-défini (nombre, 1..65535)

**probe**

Le type de sonde à utiliser sur votre ferme (sonde HTTP)

- **forceSsl**
L'activation du SSL est forcée pour la sonde (booléen)

- **interval**
L'intervalle (en secondes) entre chaque test de la sonde. Doit être supérieur à 30. 30 par défaut (nombre)

- **match**
La méthode de correspondance utilisée. 'default' utilise le comportement standard de HAProxy. 'status' n'est supporté que pour les sondes HTTP (valeur) (contains, default, internal, matches, status)

- **negate**
Le comportement de l'opérateur :code:`match` est inversé (booléen)

- **method**
La méthode HTTP utilisée en :code:`type` 'http'. 'HEAD' peut économiser de la bande passante. 'GET' par défaut (valeur) (HEAD, GET, OPTIONS, internal)

- **pattern**
réponse du serveur quand "UP". Vide pour 'default', liste de statuts séparés par des virgules pour 'status', texte pour 'contains', expression régulière pour 'matches' (chaîne de caractères)

- **port**
Le port que la sonde doit utiliser pour tester les serveurs attachés à votre ferme. Ignoré pour les sondes 'oco'. Si non-défini, le port de la ferme est utilisé (nombre)

- **type**
Le type de la sonde ; son fonctionnement (valeur) (HTTP, interne, MySQL, OCO, PgSQL, SMTP ou TCP)

- **url**
L'adresse à utiliser par la sonde pour les sondes de type HTTP. Le :code:`type` est ignoré si ce paramètre est défini (chaîne de caractères)

**stickiness**

Le type de persistence de connexion à utiliser pour votre ferme (valeur)

**zone** ^*^

Le nom de votre zone, ex: all (chaîne de caractères)

///

#### Obtenir les détails d'une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

///

#### Modifier les propriétés d'une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

**BackendTcp** ^*^

- **balance**
Le type de répartition de charge (valeur)

- **displayName**
Le nom de la ferme (chaîne de caractères)

- **port**
Le port d'écoute de la ferme (nombre, 1..65000)

- **probe**
Le type de sonde à utiliser (sonde TCP)

- **stickiness**
Le type de persistence de connexion (valeur)

///

#### Supprimer une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

///

### Serveurs TCP

#### Lister les serveurs liés à la ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

**cookie**

Filtrer les valeurs par cookie (chaîne de caractères)

**address**

Filtrer les valeurs par adresse IPv4 (IPv4)

**status**

Filtrer les valeurs par statut du serveur (valeur)

///

#### Ajouter un serveur à une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

**address** ^*^

L'adresse IPv4 de votre serveur (IPv4)

**backup**

Si votre serveur est configuré comme serveur de secours (booléen)

**chain**

La valeur du certificat SSL intermédiaire (chaîne de caractères)

**displayName**

Le nom donné à votre serveur (chaîne de caractères)

**port**

Le port d'écoute de votre serveur. Hérité de votre ferme si non-défini (nombre, 1..65535)

**probe**

Le type de sonde à utiliser (valeur)

**proxyProtocolVersion**

La version de proxyProtocol à utiliser,

voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (valeur)

**ssl** ^*^

Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen)

**weight** ^*^

Le poids de votre serveur pour votre ferme. Un serveur à poids élevé reçoit plus de requêtes (nombre)

**status** ^*^

Si votre serveur est activé ou non (booléen)

///

#### Obtenir les détails d'un serveur lié à une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**serverId** ^*^

L'identifiant de votre serveur (nombre)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

///

#### Modifier les propriétés d'un serveur TCP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**serverId** ^*^

L'identifiant de votre server-link (nombre)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

**BackendTcpServer** ^*^

- **backup**
Si votre serveur est configuré comme serveur de secours (booléen)

- **chain**
La valeur du certificat SSL intermédiaire (chaîne de caractères)

- **displayName**
Le nom de votre serveur (chaîne de caractères)

- **port**
Le port d'écoute de votre serveur (nombre, 1..65535)

- **probe**
Le type de sonde à utiliser (valeur)

- **proxyProtocolVersion**
La version de proxyProtocol à utiliser,

voir http://www.haproxy.org/download/1.5/doc/proxy-protocol.txt (Valeur  )

- **ssl**
Si les requêtes envoyées à vos serveurs doivent être chiffrées avec SSL (booléen)

- **status**
Si votre serveur est activé ou non (booléen)

- **weight**
Le poids de votre serveur pour votre ferme (nombre)

///

#### Supprimer un serveur d'une ferme TCP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/farm/{farmId}/server/{serverId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**serverId** ^*^

L'identifiant de votre serveur (nombre)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

///

### Frontends TCP

#### Lister les frontends TCP attachés à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**defaultFarmId**

L'identifiant de la ferme TCP à laquelle le frontend TCP est lié (nombre)

**port**

Le port d'écoute de votre frontend (nombre, 1..65535)

**zone**

Le nom de votre zone, ex: all (chaîne de caractères)

///

#### Ajouter un frontend TCP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/frontend
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**allowedSource**

La liste des adresses IPs clientes qui ont accès au Load Balancer (IPv4)

**dedicatedIpfo**

La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])

**defaultFarmId**

L'identifiant de la ferme TCP par défaut pour votre frontend (nombre)

**defaultSslId**

L'identifiant du certificat SSL par défaut (nombre)

**disabled**

Si votre frontend TCP est désactivé ou activé (booléen)

**displayName**

Le nom de votre frontend TCP (chaîne de caractères)

**port** ^*^

Le port d'écoute de votre frontend (nombre, 1..65535)

**ssl**

Si les requêtes envoyées à la ferme TCP doivent être chiffrées avec SSL ou non (booléen)

**zone** ^*^

Le nom de votre zone, ex: all (chaîne de caractères)

///

#### Obtenir les détails d'un frontend TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId** ^*^

L'identifiant de votre frontend TCP (nombre)

///

#### Modifier les propriétés d'un frontend TCP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId** ^*^

L'identifiant de votre frontend TCP (nombre)

**FrontendTcp** ^*^

- **allowedSource**
La liste des adresses IP clientes qui ont accès au Load Balancer (IPv4[])

- **dedicatedIpfo**
La liste des adresses IP des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])

- **defaultSslId**
L'identifiant du certificat SSL par défaut (nombre)

- **disabled**
Si votre frontend HTTP est désactivé ou activé (booléen)

- **displayName**
Le nom de votre frontend HTTP (chaîne de caractères)

- **ssl**
Si les requêtes envoyées à la ferme HTTP doivent être chiffrées avec SSL ou non (booléen)

///

#### Supprimer un frontend TCP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/frontend/{frontendId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId** ^*^

L'identifiant de votre frontend (nombre)

///

### Routes TCP

Les routes sont évaluées une par une, en testant leurs règles de routage. La première route validant toutes ses règles voit son action exécutée, et arrête l'évaluation des routes restantes. L'ordre d'exécution est défini par le type et le poids de la route.

#### Lister les routes TCP attachées à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId**

L'identifiant d'un frontend TCP (nombre)

///

#### Ajouter une nouvelle route TCP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**action** ^*^

L'action déclenchée quand toutes les règles de votre route sont validées (RouteHttpAction)

- **target**
L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères)

- **type**
L'action de votre route (chaîne de caractères)

**displayName**

Le nom de votre route (chaîne de caractères)

**frontendId**

L'identifiant du frontend TCP pour lequel votre route est appliquée (nombre)

**weight**

La priorité de votre route. (nombre) [0 - 255]
///

#### Obtenir les détails d'une route TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route (nombre)

///

#### Modifier les propriétés d'une route TCP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route (nombre)

**routeTcp** ^*^

- **action**
L'action à réaliser (routeTcpAction)

- **target**
L'identifiant de la ferme, ou le modèle pour l'URL (chaîne de caractères)

- **type**
L'action de votre route (chaîne de caractères)

- **displayName**
Le nom de votre route (chaîne de caractères)

- **frontendId**
Le frontend TCP pour lequel votre route est appliquée (nombre)

- **weight**
La priorité de votre route (nombre) [0 - 255]
///

#### Supprimer une route TCP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route (nombre)

///

### Règles de routage

#### Lister les règles de routages attachées à une route TCP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route TCP (nombre)

///

#### Ajouter les règles de routages attachées à une route TCP

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route TCP (nombre)

**field** ^*^

Le nom du champ à tester avec l'opérateur "match" (chaîne de caractères)

**match** ^*^

L'opérateur de comparaison (valeur) (contains, endsWith, exists, in, internal, is, matches, startsWith)

**negate**

Le comportement de l'opérateur :code:`match` est inversé (booléen)

**pattern**

Le schéma ou l'expression régulière utilisée par l'opérateur "match" (Regex / Chaîne de caractères)

**subField**

Le nom du sous-champ, si applicable. Peut être un cookie ou un nom d'en-tête, par exemple (chaîne de caractères)

///

#### Obtenir les détails d'une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route TCP (nombre)

**ruleId** ^*^

L'identifiant de votre règle de routage HTTP (nombre)

///

#### Modifier les propriétés d'une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route TCP (nombre)

**ruleId** ^*^

L'identifiant de votre règle de routage HTTP (nombre)

**RouteRule** ^*^

- **field**
Le nom du champ à tester via l'opérateur "match" (chaîne de caractères)

- **match**
L'opérateur de comparaison à utiliser (contains, endsWith, exists, in, internal, is, matches, startsWith)

- **negate**
Si l'opérateur "match" est inversé ou non (booléen)

- **pattern**
La valeur ou l'expression régulière à utiliser avec l'opérateur "match" (Regex / Chaîne de caractères)

- **subField**
Le nom du sous-champ si applicable (chaîne de caractères)

///

#### Supprimer une règle de routage

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule/{ruleId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**routeId** ^*^

L'identifiant de votre route TCP (nombre)

**ruleId** ^*^

L'identifiant de votre règle de routage HTTP (nombre)

///

## Protocole UDP

Accéder aux éléments relatifs au protocole UDP (frontend, ferme, etc.).

### Fermes UDP

#### Lister les fermes UDP attachées à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**zone**

Le nom de votre zone, ex: all (chaîne de caractères)

///

#### Ajouter une nouvelle ferme UDP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**displayName**

Le nom que vous souhaitez donner à votre ferme (chaîne de caractères)

**port**

Le port d'écoute de votre ferme. Hérité du frontend si non-défini (nombre, 1..65535)

**zone** ^*^

Le nom de votre zone, par exemple : all (chaîne de caractères)

///

#### Obtenir les détails d'une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

///

#### Modifier les propriétés d'une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

**BackendUdp** ^*^

- **displayName**
Le nom de la ferme (chaîne de caractères)

- **port**
Le port d'écoute de la ferme (nombre, 1..65000)

///

#### Supprimer une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

///

### Serveurs UDP

#### Lister les serveurs liés à la ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

**address**

Filtrer les valeurs par adresse IPv4 (IPv4)

**status**

Filtrer les valeurs par statut du serveur (valeur)

///

#### Ajouter un serveur à une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

**address** ^*^

L'adresse IPv4 de votre serveur (IPv4)

**displayName**

Le nom donné à votre serveur (chaîne de caractères)

**port**

Le port d'écoute de votre serveur. Hérité de votre ferme si non-défini (nombre, 1..65535)

**status** ^*^

Si votre serveur est activé ou non (booléen)

///

#### Obtenir les détails d'un serveur lié à une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**serverId** ^*^

L'identifiant de votre serveur (nombre)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

///

#### Modifier les propriétés d'un serveur UDP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**serverId** ^*^

L'identifiant de votre serveur (nombre)

**farmId** ^*^

L'identifiant de votre ferme (nombre)

**BackendUdpServer** ^*^

- **displayName**
Le nom de votre serveur (chaîne de caractères)

- **port**
Le port d'écoute de votre serveur (nombre, 1..65535)

- **status**
Si votre serveur est activé ou non (booléen)

///

#### Supprimer un serveur d'une ferme UDP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/farm/{farmId}/server/{serverId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**serverId** ^*^

L'identifiant de votre serveur UDP (nombre)

**farmId** ^*^

L'identifiant de votre ferme UDP (nombre)

///

### Frontends UDP

#### Lister les frontends UDP attachés à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**defaultFarmId**

L'identifiant de la ferme UDP à laquelle le frontend UDP est lié (nombre)

**port**

Le port d'écoute de votre frontend (nombre, 1..65535)

**zone**

Le nom de votre zone, par exemple : all (chaîne de caractères)

///

#### Ajouter un frontend UDP à un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/udp/frontend
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**dedicatedIpfo**

La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])

**defaultFarmId** ^*^

L'identifiant de la ferme UDP par défaut pour votre frontend (nombre)

**disabled**

Si votre frontend UDP est désactivé ou activé (booléen)

**displayName**

Le nom de votre frontend UDP (chaîne de caractères)

**port** ^*^

Le port d'écoute de votre frontend (nombre, 1..65535)

**zone** ^*^

Le nom de votre zone, ex: all (chaîne de caractères)

///

#### Obtenir les détails d'un frontend UDP

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId** ^*^

L'identifiant de votre frontend UDP (nombre)

///

#### Modifier les propriétés d'un frontend UDP

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId** ^*^

L'identifiant de votre frontend UDP (nombre)

**FrontendUdp** ^*^

- **dedicatedIpfo**
La liste des adresses IPs des serveurs distants auxquels votre Load Balancer est connecté (IPv4[])

- **disabled**
Si votre frontend UDP est désactivé ou activé (booléen)

- **displayName**
Le nom de votre frontend UDP (chaîne de caractères)

///

#### Supprimer un frontend UDP

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**frontendId** ^*^

L'identifiant de votre frontend UDP (nombre)

///

## Autres fonctionnalités

### Additional IP

#### Lister les Additional IPs routées sur un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/failover
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

///

### État du service

#### Obtenir l'état des instances d'un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/instancesState
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

///

#### Lister les IPs de sortie utilisées par OVHcloud pour le NAT

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/natIp
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

///

#### Appliquer les modifications d'un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/refresh
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

///

### Certificats SSL

#### Lister les certificats SSL d'un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**fingerprint**

Liste l'empreinte du certificat SSL (chaîne de caractères)

**serial**

Liste le numéro d'identification du certificat SSL (chaîne de caractères)

**type**

Type de certificat SSL (valeur)

///

#### Ajouter un nouvel objet SSL

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/ssl
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**certificate** ^*^

Ajout du certificat SSL (chaîne de caractères)

**chain**

Ajout du certificat SSL intermédiaire (chaîne de caractères)

**key** ^*^

Ajout de la clé privée (chaîne de caractères)

///

#### Obtenir les détails d'un objet SSL

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/ssl/{id}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**id** ^*^

L'identifiant de votre certificat SSL (nombre)

///

#### Supprimer un objet SSL

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/ssl/{id}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**id** ^*^

L'identifiant de votre certificat SSL (nombre)

///

### Tâches

#### Lister les tâches en cours pour un service Load Balancer OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**action** ^*^

Consultation des tâches disponibles (valeurs)

///

#### Obtenir les détails d'une tâche

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task/{id}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**id** ^*^

L'identifiant de votre tâche (nombre)

///

### Contact

#### Initier un changement de contact

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/changeContact
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**contactAdmin**

L'identifiant client OVHcloud à configurer pour le contact administrateur de ce service (chaîne de caractères)

**contactBilling**

L'identifiant client OVHcloud à configurer pour le contact facturation de ce service (chaîne de caractères)

**contactTech**

L'identifiant client OVHcloud à configurer pour le contact technique de ce service (chaîne de caractères)

///

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

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**subnet**

Permet de filtrer selon le réseau utilisé

**vlan**

Permet de filtrer selon le vlan utilisé

///

#### Ajouter un réseau privé dans le vRack

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/vrack/network
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**displayName**

Le nom que vous souhaitez attribuer au réseau (chaîne de caractères)

**farmId**

Tableau d'identifiant de fermes que vous souhaitez attacher à ce réseau privé

**natIp**

Un bloc d'IP réservé au load balancer pour joindre les serveurs

**subnet**

Le bloc d'IP du réseau privé

**vlan**

Vlan du réseau privé dans le vRack. 0 si le réseau privé n'est pas dans un vlan

///

#### Récupérer un réseau privé

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**vrackNetworkId** ^*^

L'identifiant du réseau privé

///

#### Modifier un réseau privé

> [!api]
>
> @api {v1} /ipLoadbalancing PUT /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**vrackNetworkId** ^*^

L'identifiant du réseau privé

///

#### Supprimer un réseau privé

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**vrackNetworkId** ^*^

L'identifiant du réseau privé

///

#### Modifier la liste des fermes attachées à un réseau privé

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/vrack/network/{vrackNetworkId}/updateFarmId
>

/// details | 

<h6>Paramètres :</h6>

**serviceName** ^*^

L'identifiant de votre Load Balancer, par exemple : "loadbalancer-abcdef0123456789" (chaîne de caractères)

**vrackNetworkId** ^*^

L'identifiant du réseau privé

**farmId** ^*^

Tableau d'identifiant de fermes que vous souhaitez attacher à ce réseau privé. La valeur "null" supprime le vrack network id de toutes les fermes où il était configuré.

///

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).

