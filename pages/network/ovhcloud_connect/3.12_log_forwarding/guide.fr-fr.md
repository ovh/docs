---
title: 'Transmission des logs OVHcloud Connect'
excerpt: 'Transmettez vos logs d''événements OVHcloud Connect vers Logs Data Platform pour les stocker, les interroger et les visualiser'
updated: 2026-04-22
---

## Objectif

Ce guide a pour but de vous montrer comment activer la transmission des logs de votre OVHcloud Connect vers Logs Data Platform (LDP), une plateforme qui vous permet de stocker, archiver, interroger et visualiser vos logs.

Si vous souhaitez en savoir plus sur Logs Data Platform avant de lire ce guide, consultez le [guide d'introduction à Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

## Glossaire

- **Logs Data Platform :** une plateforme de gestion de logs entièrement managée et sécurisée par OVHcloud. Pour plus d'informations, consultez la page produit [Logs Data Platform](/links/manage-operate/ldp).
- **Data Stream :** une partition logique de logs que vous créez dans un compte LDP et que vous utilisez lors de l'ingestion, de la consultation ou de l'interrogation de vos logs. Plusieurs sources peuvent être stockées dans un même data stream, et c'est l'unité qui permet de définir un pipeline de logs (politique de rétention, archivage, diffusion en direct, etc.), des droits d'accès et des politiques d'alerte.
- **Transmission de logs :** une fonctionnalité intégrée à un produit OVHcloud pour ingérer les logs de ses services dans un *Data Stream* d'un compte LDP appartenant au même compte OVHcloud. Cette fonctionnalité doit être activée par le client et par service.
- **Abonnement de transmission de logs :** lorsque vous activez la transmission de logs d'un service OVHcloud donné vers un *Data Stream* LDP donné, un *Abonnement* est créé et rattaché au *Data Stream* pour permettre une gestion ultérieure par le client.

## Prérequis

- Un compte Logs Data Platform (LDP) avec au moins un *Stream* actif configuré. Ce guide vous accompagne dans toutes les étapes nécessaires : [Démarrage rapide pour Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
    - Si vous n'êtes pas familier avec toutes les possibilités de configuration d'un *Stream* LDP, créez-en un nouveau avec les options par défaut (indexation et websocket activés, stockage long terme désactivé) pour les besoins de ce guide.
- Un [service OVHcloud Connect](../1.1_introduction_to_ovhcloud_connect/guide.fr-fr.md) opérationnel.
- Le compte LDP et le compte OVHcloud Connect doivent appartenir au même compte OVHcloud.

## Concepts et limites

**Quels sont les logs d'un OVHcloud Connect ?**

### Types de logs

Quatre types de logs différents peuvent être transmis :

- **service** : événements liés au cycle de vie du service (suspendu, livré, etc.).
- **service_configuration** : événements liés à la configuration du service, dont l'ajout ou la suppression de configurations DC/POP.
- **bgp** : statut de la session BGP.
- **interface** : événements liés à l'interface fibre optique, dont la lumière entrante et sortante.

### Contenu des logs

| Nom du champ | Description | Type |
|------------|-------------|---------|
| kind | Le type de log transmis | String |
| message | Une description explicite de l'événement journalisé | String |
| neighbor | L'adresse distante dans le sous-réseau établi entre le service OVHcloud Connect et le PoP | IP |
| service_uuid | L'UUID du service OVHcloud Connect concerné par l'événement | String |
| timestamp | L'horodatage auquel l'événement a été journalisé | datetime (avec une résolution à la milliseconde) ex. 25/Mar/2024:14:07:19.536 |

## Activer la transmission de logs OVHcloud Connect via les API

Notez que l'activation de la transmission est gratuite, mais l'utilisation du service Logs Data Platform vous sera facturée selon la grille tarifaire standard. Pour la tarification de LDP, consultez cette [page](/links/manage-operate/ldp).

Vous devez définir le *Stream* cible de l'un de vos comptes LDP vers lequel vous souhaitez transmettre vos logs. L'activation de la transmission crée un abonnement pour cet identifiant de stream.

Vous pouvez retrouver les spécifications de l'API dans le [portail API OVHcloud](/links/api) :

> [!api]
>
> @api {v1} /dbaas/logs POST /dbaas/logs/{serviceName}/output/graylog/stream
>

### Étape 1 - Récupérer votre Stream cible (et son ID)

Listez les data streams de votre compte Logs Data Platform (saisissez votre identifiant LDP au format ldp-xx-xxxx dans le champ « serviceName ») :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream
>

Récupérez les détails d'un data stream :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
>

### Étape 2 - Créer votre abonnement

Utilisez l'appel API suivant pour créer un abonnement :

> [!api]
>
> @api {v1} /ovhCloudConnect POST /ovhCloudConnect/{serviceName}/log/subscription
>

> [!primary]
> Vous devrez remplacer :
>
> - **serviceName** : il s'agit du nom interne de votre service OVHcloud Connect, vous le trouverez dans la page de gestion d'OVHcloud Connect dans l'espace client OVHcloud ou en utilisant l'appel API suivant :
>
> > [!api]
> >
> > @api {v1} /ovhCloudConnect GET /ovhCloudConnect
> >
>

La requête POST attend un payload qui requiert :

- `kind` : le type de log que vous souhaitez transmettre, parmi « service », « service_configuration », « bgp » et « interface ».
- `streamId` : le data stream cible de votre compte LDP vers lequel vous souhaitez transmettre vos logs OVHcloud Connect.

> [!primary]
> Vous pouvez retrouver les types disponibles à l'aide de l'appel API suivant :
>
> > [!api]
> >
> > @api {v1} /ovhCloudConnect GET  /ovhCloudConnect/{serviceName}/log/kind
> >
>

```shell
POST /ovhCloudConnect/{serviceName}/log/subscription
{
  "kind": "string", // "service", "service_configuration", "bgp" or "interface"
  "streamId": "198ef9d5-c320-4000-8bee-236623da5b80" // The streamID of the targeted Stream.
}
```

Vous obtiendrez en réponse un `operationId` :

```shell
{
  "operationId": "f550aa1c-89ab-4b1a-81ae-4fba4959966f",
  "serviceName": "occ-xxxxx"
}
```

Vous pouvez utiliser l'`operationId` pour récupérer le `subscriptionId` à des fins de gestion ultérieure à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/operation/{operationId}
>

Alternativement, une fois l'opération terminée, les abonnements peuvent être récupérés à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /ovhCloudConnect GET /ovhCloudConnect/{serviceName}/log/subscription
>

Une fois que vous disposez du `subscriptionId`, vous pouvez en obtenir les détails à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /ovhCloudConnect GET /ovhCloudConnect/{serviceName}/log/subscription/{subscriptionId}
>

```shell
GET /ovhCloudConnect/{serviceName}/log/subscription/{subscriptionId}

{
"createdAt": "2025-08-28T07:42:50.645Z",
"kind": "string",
"resource": {
  "name": "string",
  "type": "string"
},
"serviceName": "string",
"streamId": "string",
"subscriptionId": "198efa11-f150-4000-8e8d-871b1e482b80",
"updatedAt": "2025-08-28T07:42:50.645Z"
}
```

## Comment utiliser les logs OVHcloud Connect

Maintenant que vos logs sont ingérés et stockés dans le data stream de votre Logs Data Platform, vous pouvez interroger vos logs et créer des tableaux de bord afin d'obtenir une représentation graphique de vos logs grâce à l'interface web de Graylog.

- Dans l'espace client OVHcloud, récupérez le nom d'utilisateur LDP (par exemple : logs-xxxx) et son mot de passe sur la page d'accueil de votre compte Logs Data Platform. Vous pouvez vous référer au [guide de démarrage rapide pour Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Ouvrez l'interface web Graylog. Vous pouvez retrouver le lien sur la page d'accueil de votre compte ou via votre point d'accès en fonction de la région de votre compte (par exemple : la région Gravelines est https://gra1.logs.ovh.com/).
- Connectez-vous à Graylog avec votre nom d'utilisateur et votre mot de passe Logs Data Platform.
- Effectuez des recherches dans vos logs sur le data stream de votre compte Logs Data Platform. Vous pouvez vous référer à la documentation [Graylog writing search queries](https://go2docs.graylog.org/current/making_sense_of_your_log_data/writing_search_queries.html) pour des détails sur la syntaxe de recherche.

Référez-vous à la documentation suivante : [Logs Data Platform - Visualiser, interroger et exploiter vos logs](/products/observability-logs-data-platform-visualizing-querying-exploiting) pour plus de détails sur l'utilisation de vos logs avec Logs Data Platform, notamment comment :

- configurer des alertes
- visualiser les logs en temps réel via un WebSocket
- créer des visualisations avec OpenSearch Dashboards
- s'intégrer avec l'API OpenSearch
- se connecter à Grafana

## Comment gérer vos abonnements

À tout moment, vous pouvez récupérer les abonnements rattachés au data stream de votre Logs Data Platform et choisir de désactiver la transmission en annulant votre abonnement sur votre stream, afin que votre stream Logs Data Platform ne reçoive plus vos logs d'audit.

Notez que cela ne supprime pas les logs stockés avant l'annulation de l'abonnement, car les données stockées dans un stream de logs sont immuables sauf si vous supprimez l'intégralité du stream.

Pour supprimer votre abonnement, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {v1} /ovhCloudConnect DELETE /ovhCloudConnect/{serviceName}/log/subscription/{subscriptionId}
>

## Et ensuite ?

- [Superviser votre OVHcloud Connect](../3.9_monitor/guide.fr-fr.md)
- [Résolution des problèmes OVHcloud Connect](../1.9_troubleshooting/guide.fr-fr.md)
- [Déclarer et suivre un incident](../3.10_incident_followup/guide.fr-fr.md)

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
