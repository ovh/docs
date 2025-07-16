---
title: Transfert des logs (Log Forwarding) TCP / HTTP / HTTPS du Load Balancer OVHcloud
excerpt: Découvrez comment transférer vos logs depuis un Load Balancer OVHcloud vers Logs Data Platform
updated: 2025-06-16
---

## Objectif

L'objectif de ce guide est de vous montrer comment activer la redirection de logs de votre OVHcloud Load Balancer vers Logs Data Platform (LDP), une plateforme qui vous aide à stocker, archiver, interroger et visualiser vos logs.
Si vous souhaitez en savoir plus sur Logs Data Platform avant de lire ce guide, reportez-vous au [Guide d'introduction de Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

> [!primary]
> Afin d'utiliser cette fonctionnalité, vous devez d'abord effectuer un appel de rafraîchissement via l'API aux Load Balancers dont vous souhaitez collecter les logs.
> Ceci est nécessaire afin de s'assurer que le format des logs de l'OVHcloud Load Balancer est à jour.
> Vous pouvez utiliser l'appel API ci-dessous, où **serviceName** est le nom interne de votre Load Balancer, que vous pouvez retrouver sur la page de gestion du Load Balancer de votre espace client OVHcloud ou en utilisant [l'appel API dédié](https://api.ovh.com/console/?section=%2FipLoadbalancing&branch=v1#get-/ipLoadbalancing).

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

## Glossaire

- **Logs Data Platform :** une plateforme de gestion de logs entièrement gérée et sécurisée par OVHcloud. Pour plus d'informations, consultez la page de présentation de la solution [Logs Data Platform](/links/manage-operate/ldp).
- **Data Stream:** une partition logique de logs que vous créez dans un compte LDP et que vous utiliserez lors de l'ingestion, de la visualisation ou de l'interrogation de vos logs. Plusieurs sources peuvent être stockées dans le même flux de données, et c'est l'unité qui peut être utilisée pour définir un pipeline de logs (politique de rétention, archivage, streaming live, etc.), des droits d'accès et des politiques d'alertes.
- **Transfert de logs :** fonctionnalité intégrée à un produit OVHcloud pour ingérer les logs de ses services dans un *Data Stream* d’un compte LDP dans le même compte OVHcloud. Cette fonctionnalité doit être activée par le client et par service.
- **Abonnement à la redirection de logs :** Lors de l'activation de la redirection de logs pour un service OVHcloud donné vers un LDP *Data Stream* donné, un *Abonnement* est créé et attaché au *Data Stream* pour une gestion ultérieure par le client.

## Prérequis

- Un compte Logs Data Platform (LDP) avec au moins un *Stream* actif configuré. Ce guide vous guidera dans toutes les étapes nécessaires : [Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Si vous ne connaissez pas toutes les possibilités de configuration d'un *Stream* LDP, il vous suffit d'en créer un nouveau avec les options par défaut (indexation & websocket activés, stockage longue durée désactivé) pour suivre ce guide.
- Un [Load Balancer OVHcloud](/pages/network/load_balancer/use_presentation) opérationnel.
- Le compte LDP et le compte OVHcloud Load Balancer doivent appartenir au même compte OVHcloud.

## Concepts & limites

> [!warning]
> À ce jour, les journaux des listeners **UDP** ne sont pas transférés.
>

**Quels sont les logs d’un OVHcloud Load Balancer ?**

Les logs transférés sont générés par [HAproxy](https://fr.wikipedia.org/wiki/HAProxy){.external} (le composant open source utilisé pour la répartition de charge).

### Consignation du contenu pour les écouteurs TCP : `TCP`, `HTTP`

| Nom du champ | Description | Type |
|------------|-------------------------|-----------|
| service_name | Le nom du Load Balancer qui a reçu la requête/connexion | Chaine (*String*) |
| date_time | Horodatage auquel la requête/connexion a été effectuée | datetime (avec résolution en millisecondes) ex. 25/Mar/2024:14:07:19.536 |
| zone | La région OVHcloud à laquelle appartient le Load Balancer | Chaine (*String*) |
| client_ip | Adresse IP du client qui a initié la connexion TCP au Load Balancer | IP |
| client_port_int | Port TCP du client qui a initié la connexion TCP au Load Balancer | *Integer* |
| frontend_name | Nom du frontend de votre Load Balancer | Chaine (*String*) |
| frontend_ip | Adresse IP du frontend de votre Load Balancer | IP |
| frontend_port_int | Port TCP du frontend de votre Load Balancer | *Integer* |
| backend_name | Nom de la source NAT utilisée par le Load Balancer pour se connecter à vos serveurs backend | Chaine (*String*) |
| backend_source_ip | Adresse IP source utilisée par le Load Balancer pour se connecter à vos serveurs backend | IP |
| backend_source_port_int | Port source utilisé par le Load Balancer pour se connecter à vos serveurs backend | *Integer* |
| server_ip | Adresse IP du serveur backend connecté à votre Load Balancer | IP |
| server_port_int | Port TCP du serveur backend connecté à votre Load Balancer | *Integer* |
| termination_state | L'indicateur de fin de session : 2 lettres pour TCP, 4 lettres pour HTTP, tous les détails sont sur la [page de documentation HAProxy](https://docs.haproxy.org/2.6/configuration.html#8.5){.external}| Chaîne (par exemple « ---- ») |
| bytes_read_int | Taille (en octets) de la réponse envoyée par le Load Balancer au client | *Integer* |
| bytes_uploaded_int | Taille (en octets) de la requête envoyée par le client au Load Balancer | *Integer* |
| time_duration_int | Durée (en millisecondes) de la session TCP au moment où la demande a été effectuée | *Integer* |

### Contenu supplémentaire pour les écouteurs `HTTP`

| Nom du champ | Description | Type |
|------------|---------------|----------|
| catch_request_headers | Les en-têtes de la requête HTTP, par exemple « User-Agent » | Chaine (*String*) |
| http_request | Ressource de la requête HTTP, par exemple « /index.html » | Chaine (*String*) |
| http_status_code_int | Le statut HTTP retourné, par exemple « 200 » | *Integer* |


## Instructions

Prenez en compte que l'activation du *forwarding* est gratuite, mais vous serez facturé pour l'utilisation du service Logs Data Platform selon le tarif standard. Pour la tarification du LDP, consultez cette [page](/links/manage-operate/ldp).

### Activation du *forwarding* des journaux du Load Balancer via l’espace client OVHcloud

Cette fonctionnalité n'est pas encore disponible dans l'espace client.

### Activation de Audit Log Forwarding via API

Vous devrez définir le *Stream* ciblé de l’un de vos comptes LDP vers lequel vous souhaitez transférer vos logs. L'activation du *forwarding* va créer un abonnement pour cet ID de flux.

Vous pouvez récupérer les spécifications de l'API dans le portail [OVH API](https://api.ovh.com/console-preview/?section=%2Fdbaas%2Flogs&branch=v1#post-/dbaas/logs/-serviceName-/output/graylog/stream).

#### Étape 1 - Récupérer le Stream (et l'ID) cible

Lister les flux de données de votre compte Logs Data Platform (renseignez votre identifiant LDP sous la forme ldp-xx-xxxx dans le champ « serviceName ») :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream
>

Obtenir les détails d'un flux de données :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
>

#### Étape 2 - Créez votre abonnement

Utilisez l'appel API suivant pour créer un abonnement :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/log/subscription
>

Vous devrez remplacer :

- **serviceName** : il s'agit du nom interne de votre Load Balancer, que vous pouvez retrouver sur la page de gestion du Load Balancer de votre espace client OVHcloud ou en utilisant [l'appel API dédié](https://api.ovh.com/console/?section=%2FipLoadbalancing&branch=v1#get-/ipLoadbalancing).

La requête POST a une charge utile qui nécessite :

- `kind` : le type de journal que vous voulez transférer, soit « http » ou « tcp ». Vous pouvez trouver les types disponibles en utilisant [l'appel API dédié](https://api.ovh.com/console/?section=%2FipLoadbalancing&branch=v1#get-/ipLoadbalancing/-serviceName-/log/kind).
- `streamId` : flux de données cible de votre compte LDP vers lequel vous souhaitez que vos logs du service Load Balancer soient transférés.

```shell
POST /ipLoadbalancing/{serviceName}/log/subscription
{
  "kind": "string", // "http" or "tcp".
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

Vous pouvez utiliser le `operationId` pour récupérer le `subscriptionId` à des fins de gestion ultérieure à l'aide de l'appel d'api suivant :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/operation/{operationId}
>

Une fois l'opération terminée, vous pouvez également récupérer les abonnements à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/log/subscription
>

Une fois en possession du `subscriptionId`, vous pouvez obtenir les détails via l'appel API suivant :

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/log/subscription/{subscriptionId}
>

```shell
GET /ipLoadbalancing/{serviceName}/log/subscription/{subscriptionId}

{
  "createdAt": "2025-05-28T13:41:19.713Z",
  "kind": "string",
  "resource": {
    "name": "string",
    "type": "string"
  },
  "serviceName": "string",
  "streamId": "19717204-2e10-4000-8b63-4f080b5d5101",
  "subscriptionId": "19717204-2e10-4000-8c42-d7b11c9ce680",
  "updatedAt": "2025-05-28T13:41:19.713Z"
}
```

### Comment utiliser les logs OVHcloud Load Balancer ?

Maintenant que vos logs sont ingérés et stockés dans votre flux de données Logs Data Platform, vous pouvez interroger vos logs et créer des tableaux de bord pour avoir une représentation graphique de vos logs en utilisant l'interface web de Graylog.

- Dans votre espace client, récupérez le nom d'utilisateur LDP (ex: logs-xxxx) et son mot de passe sur la page d'accueil de votre compte Logs Data Platform. Vous pouvez vous référer au [Guide de démarrage rapide pour Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Ouvrir l'interface utilisateur Graylog. Vous pouvez récupérer le lien sur la page d'accueil de votre compte ou en utilisant votre point d'accès en fonction de la région de votre compte (par exemple : la région de Gravelines est `https://gra1.logs.ovh.com/`).
- Connectez-vous à Graylog en utilisant votre nom d'utilisateur et votre mot de passe Logs Data Platform.
- Parcourez vos logs dans le flux de données de votre compte Logs Data Platform. Vous pouvez consulter la documentation [Graylog writing search queries (EN)](https://go2docs.graylog.org/current/making_sense_of_your_log_data/writing_search_queries.html){.external} pour plus de détails sur la syntaxe de recherche.

Reportez-vous à la documentation suivante : [Logs Data Platform - Visualizing, querying and exploiting your logs (EN)](/products/observability-logs-data-platform-visualizing-querying-exploiting) pour plus de détails sur l'utilisation de vos logs avec Logs Data Platform, y compris sur la façon de :

- mettre en place des alertes
- consulter les logs en temps réel via un WebSocket
- créer une visualisation avec les tableaux de bord OpenSearch
- créer une intégration avec l'API OpenSearch
- se connecter avec Grafana

### Comment gérer vos abonnements ?

À tout moment, vous pouvez récupérer les abonnements attachés à votre flux Logs Data Platform et choisir de désactiver la redirection en annulant votre abonnement sur votre flux, de sorte que votre flux Logs Data Platform ne reçoive plus vos journaux d'audit.

Notez que cela ne supprime pas les journaux stockés avant l'annulation de l'abonnement, car les données stockées dans un flux de journal sont immuables, sauf si vous supprimez le flux entier.

Pour supprimer votre abonnement, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {v1} /ipLoadbalancing DELETE /ipLoadbalancing/{serviceName}/log/subscription/{subscriptionId}
>

## Aller plus loin

Si vous avez besoin d'une formation ou d'assistance technique pour mettre en œuvre nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demandez à nos experts Professional Services de vous aider sur votre cas d'utilisation spécifique de votre projet.

Échangez avec notre [communauté d'utilisateurs](/links/community).
