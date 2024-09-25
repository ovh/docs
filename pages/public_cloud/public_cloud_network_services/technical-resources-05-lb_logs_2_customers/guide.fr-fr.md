---
title: Transfert des logs (Logs Forwarding) TCP / HTTP / HTTPS du Load Balancer Public Cloud
excerpt: Découvrez comment transférer vos logs depuis un Load Balancer Public Cloud vers Logs Data Platform
updated: 2024-09-25
---

## Objectif

L'objectif de ce guide est de vous montrer comment activer le transfert de logs de votre Public Cloud Load Balancer vers Logs Data Platform (LDP), une plateforme qui vous aide à stocker, archiver, interroger et visualiser vos logs.
Si vous souhaitez en savoir plus sur Logs Data Platform avant de lire ce guide, reportez-vous au [Guide d'introduction de Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

## Glossaire

- **Logs Data Platform :** plateforme de gestion de logs entièrement gérée et sécurisée par OVHcloud. Pour plus d'informations, consultez la page de présentation de la solution [Logs Data Platform](https://www.ovhcloud.com/fr/logs-data-platform/).
- **Data Stream :** partition logique de logs que vous créez dans un compte LDP et que vous utiliserez lors de l'ingestion, de la visualisation ou de l'interrogation de vos logs. Plusieurs sources peuvent être stockées dans le même flux de données, et c'est l'unité qui peut être utilisée pour définir un pipeline de logs (politique de rétention, archivage, streaming live, etc.), des droits d'accès et des politiques d'alertes.
- **Transfert de logs :** fonctionnalité intégrée à un produit OVHcloud pour ingérer les logs de ses services dans un *Data Stream* d’un compte LDP dans le même compte OVHcloud. Cette fonctionnalité doit être activée par le client et par service.
- **Abonnement à la redirection de logs :** lors de l'activation du transfert de logs pour un service OVHcloud donné vers un LDP *Data Stream* donné, un *abonnement* est créé et attaché au *Data Stream* pour une gestion ultérieure par le client.

## Prérequis

- Un compte Logs Data Platform (LDP) avec au moins un *Stream* actif configuré. Ce guide vous guidera dans toutes les étapes nécessaires : [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
    - Si vous ne connaissez pas toutes les possibilités de configuration d’un *Stream* LDP, il vous suffit d'en créer un nouveau avec les options par défaut (indexation & websocket activés, stockage longue durée désactivé) pour suivre ce guide.
- Un [Load Balancer Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-01-create-lb-service) opérationnel.
- Le compte LDP et le compte Public Cloud Load Balancer doivent appartenir au même compte OVHcloud.

## Concepts & limites

> [!warning]
> A ce jour, les logs des listeners **UDP** ne sont pas transmis.
>

**Quels sont les logs d'un Load Balancer Public Cloud ?**

Les logs transférés sont générés par [HAproxy](https://fr.wikipedia.org/wiki/HAProxy){.external} (le composant open source utilisé pour la répartition de charge).

### Contenu des logs pour listeners TCP : `TCP`, `HTTP`,  `TERMINATED_HTTPS`, `HTTPS`

| Nom du champ | Description | Type |
|--------------|-------------|-------|
| accept_date | Horodatage auquel la requête/connexion a été effectuée | datetime (avec résolution en millisecondes) ex. 25/Mar/2024:14:07:19.536 |
| bytes_read | Nombre d'octets lus par le serveur | *Integer* |
| bytes_uploaded | Nombre d'octets envoyés par le serveur au client | *Integer* |
| client_ip | Adresse IP du client qui a initié la connexion TCP au Load Balancer | IP |
| client_ip_city_name | Ville calculée par Geoip à partir de `client_ip`| Chaine (*String*) (ex. `Lille`) |
| client_ip_country_code | Le code pays ISO 3166 A-2 calculé par Logstash Geoip à partir de `client_ip` ISO | XX (ex. `FR`) |
| client_ip_geolocation | Latitude, longitude calculées par Logstash Geoip à partir de `client_ip`| x.x,y.y (ex. `50.624,3.0511`) XST6Y7U899O0|
| client_port_int | Port TCP du client qui a initié la connexion TCP au Load Balancer | *Integer* |
| listener_id | ID du listener qui a reçu la demande/connexion | uuid |
| load_balancer_id | ID du load balancer ayant reçu la demande/connexion | uuid |
| member | Membre auquel la requête/connexion a été envoyée | uuid |
| message | Message du journal d'origine | Chaine (*String*) |
| pool | Pool ayant traité la requête / connexion | uuid |
| project_id | ID du projet Public Cloud auquel appartient le Load Balancer | uuid |
| region | La région Public Cloud à laquelle appartient le load balancer | Chaine (*String*) |
| tcp_total_session_duration_time_int | Durée en millisecondes pendant laquelle la session TCP a été ouverte lorsque cette demande est effectuée | *Integer* |
| termination_state | L'indicateur de fin de session : 2 lettres pour TCP, 4 lettres pour HTTP tous les détails sur [page de documentation HAProxy](https://docs.haproxy.org/2.6/configuration.html#8.5){.external}| Chaine (*String*) (par exemple « ---- ») |
| timestamp | Horodatage d'émission du journal | Chaine (*String*) |

### Contenu supplémentaire pour les listeners `HTTP` & `TERMINATED_HTTPS`

| Nom du champ | Description | Type |
|--------------|-------------|-------|
| http_request | La resource de la requête HTTP par exemple « /index.html » | Chaine (*String*) |
| http_status_int | Le statut HTTP retourné, par exemple « 200 » | *Integer* |
| http_verb | Verbe HTTP utilisé dans la requête, par exemple « GET » | Chaine (*String*) |
| http_version_num | La version HTTP de la requête, par exemple « 1.1 » | Numérique |

## En pratique

Prenez en compte que l'activation du *forwarding* est gratuite, mais vous serez facturé pour l'utilisation du service Logs Data Platform selon le tarif standard. Pour la tarification du LDP, consultez cette [page](https://www.ovhcloud.com/fr/logs-data-platform/).

### Activation du Log forwarding du Load Balancer Public Cloud via l’espace client OVHcloud

Cette fonctionnalité n'est pas encore disponible dans l'espace client

### Activation de Audit Log Forwarding via API

Vous devrez définir le *Stream* ciblé de l'un de vos comptes LDP sur lequel vous souhaitez que vos logs soient transférés. L'activation du transfert va créer un abonnement pour cet ID de flux.

Vous pouvez récupérer les spécifications de l'API dans le portail [OVH API](https://eu.api.ovh.com/console-preview/?section=%2Fdbaas%2Flogs&branch=v1#post-/dbaas/logs/-serviceName-/output/graylog/stream).

#### Étape 1 - récupérer le Stream (et l'ID) cible

Listez les flux de données de votre compte Logs Data Platform (renseignez votre identifiant LDP au format ldp-xx-xxxx dans le champ « serviceName ») :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream
>

Obtenez les détails d'un flux de données :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
>

#### Étape 2 - créer votre abonnement

Utilisez l'appel API suivant pour créer un abonnement :

> [!api]
>
> @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}/log/subscription
>

Vous devrez remplacer :

- **loadBalancerId** : il s'agit de l'identifiant du Load Balancer, que vous pouvez retrouver dans la page de détails de votre Load Balancer dans votre espace client OVHcloud ou en utilisant [l'appel API dédié](https://eu.api.ovh.com/console-preview/?section=%2Fcloud&branch=v1#get-/cloud/project/-serviceName-/region/-regionName-/loadbalancing/loadbalancer).
- **regionName** : la région OpenStack, par exemple, `GRA11`.
- **serviceName** : il s’agit de l’identifiant du projet Public Cloud, que vous pouvez retrouver dans votre espace client OVHcloud sous le nom de votre projet ou en utilisant [l’appel API dédié](https://eu.api.ovh.com/console-preview/?section=%2Fcloud&branch=v1#get-/cloud/project).

La requête POST a une charge utile qui nécessite les informations suivantes :

- `kind` : le type de journal que vous voulez transférer. Notez que la seule valeur actuellement prise en charge pour Public Cloud Load Balancer est « haproxy » (vous pouvez trouver les types disponibles en utilisant [l'appel API dédié](https://eu.api.ovh.com/console-preview/?section=%2Fcloud&branch=v1#get-/cloud/project/-serviceName-/region/-regionName-/loadbalancing/log/kind)).
- `streamId` : flux de données cible de votre compte LDP vers lequel vous souhaitez que vos logs du service Public Cloud Load Balancer soient transférés.

```shell
POST /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}/log/subscription
{
  "kind": "string", // Currently the only supported value is 'haproxy'.
  "streamId": "18d602ec-af40-4000-8e59-41ecc8c23f80" // The streamID of the targeted Stream.
}
```

Vous obtiendrez en réponse un `operationId` :

```shell
{
  "operationId": "f550aa1c-89ab-4b1a-81ae-4fba4959966f",
  "serviceName": "ldp-xxxxx"
}
```

Vous pouvez utiliser le `operationId` pour récupérer le `subscriptionId` à des fins de gestion ultérieure à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/operation/{operationId}
>

Une fois l'opération terminée, vous pouvez également récupérer les abonnements à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}/log/subscription/
>

Une fois en possession du `subscriptionId`, vous pouvez obtenir les détails via l'appel API suivant :

> [!api]
>
> @api {v1} /cloud GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}/log/subscription/{subscriptionId}
>

```shell
GET /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}/log/subscription/{subscriptionId}

{
  "createdAt": "2024-01-31T15:45:25.286Z",
  "kind": "string",
  "resource": {
    "name": "string",
    "type": "string"
  },
  "serviceName": "string",
  "streamId": "string",
  "subscriptionId": "18d60324-b260-4000-83db-b484f4db6e80",
  "updatedAt": "2024-01-31T15:45:25.286Z"
}
```

### Comment utiliser les logs du Load Balancer Public Cloud ?

Maintenant que vos logs sont ingérés et stockés dans votre flux de données Logs Data Platform, vous pouvez interroger vos logs et créer des tableaux de bord pour avoir une représentation graphique de vos logs en utilisant l'interface web de Graylog.

- Depuis votre espace client, récupérez l'identifiant LDP (ex: logs-xxxx) et son mot de passe sur la page d'accueil de votre compte Logs Data Platform. Vous pouvez vous référer à la documentation [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Ouvrez l'interface utilisateur Graylog. Vous pouvez récupérer le lien sur la page d'accueil de votre compte ou en utilisant votre point d'accès en fonction de la région de votre compte (par exemple : la région de Gravelines est https://gra1.logs.ovh.com/).
- Connectez-vous à Graylog en utilisant votre nom d'utilisateur et votre mot de passe Logs Data Platform.
- Parcourez vos logs dans le flux de données de votre compte Logs Data Platform. Vous pouvez consulter la documentation [Graylog writing search queries](https://go2docs.graylog.org/4-x/making_sense_of_your_log_data/writing_search_queries.html){.external} pour plus de détails sur la syntaxe de recherche.

Reportez-vous à la documentation suivante : [Logs Data Platform - Visualizing, querying and exploiting your logs](/products/observability-logs-data-platform-visualizing-querying-exploiting) pour plus de détails sur l'utilisation de vos logs avec Logs Data Platform, y compris sur la façon de :

- mettre en place des alertes ;
- consulter les logs en temps réel grâce à un WebSocket ;
- créer une visualisation avec les tableaux de bord OpenSearch ;
- créer une intégration avec l'API OpenSearch ;
- se connecter avec Grafana.
 
### Comment gérer vos abonnements ?

À tout moment, vous pouvez récupérer les abonnements attachés à votre flux Logs Data Platform et choisir de désactiver la redirection en annulant votre abonnement sur votre flux, de sorte que votre flux Logs Data Platform ne reçoive plus vos journaux d'audit.

Notez que cela ne supprime pas les logs stockés avant l'annulation de l'abonnement, car les données stockées dans un flux de logs sont immuables, sauf si vous supprimez le flux entier.

Pour supprimer votre abonnement, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {v1} /cloud DELETE /cloud/project/{serviceName}/region/{regionName}/loadbalancing/loadbalancer/{loadBalancerId}/log/subscription/{subscriptionId}
>

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
