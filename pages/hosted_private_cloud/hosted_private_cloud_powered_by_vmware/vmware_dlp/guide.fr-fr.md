---
title: "Transfert des logs (Logs Forwarding) TCP / HTTP / HTTPS du PCC Hosted Private Cloud"
excerpt: "Découvrez comment transférer vos logs depuis un PCC Hosted Private Cloud vers Logs Data Platform"
updated: 2024-05-13
flag: hidden
---

## Objectif

L'objectif de ce guide est de vous montrer comment activer le transfert de logs de votre PCC Private Cloud vers Logs Data Platform (LDP), une plateforme qui vous aide à stocker, archiver, interroger et visualiser vos logs.
Si vous souhaitez en savoir plus sur Logs Data Platform avant de lire ce guide, reportez-vous au [Guide d'introduction de Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

## Glossaire

- **Logs Data Platform :** plateforme de gestion de logs entièrement gérée et sécurisée par OVHcloud. Pour plus d'informations, consultez la page de présentation de la solution [Logs Data Platform](https://www.ovhcloud.com/fr/logs-data-platform/).
- **Data Stream :** partition logique de logs que vous créez dans un compte LDP et que vous utiliserez lors de l'ingestion, de la visualisation ou de l'interrogation de vos logs. Plusieurs sources peuvent être stockées dans le même flux de données, et c'est l'unité qui peut être utilisée pour définir un pipeline de logs (politique de rétention, archivage, streaming live, etc.), des droits d'accès et des politiques d'alertes.
- **Transfert de logs :** fonctionnalité intégrée à un produit OVHcloud pour ingérer les logs de ses services dans un *Data Stream* d’un compte LDP dans le même compte OVHcloud. Cette fonctionnalité doit être activée par le client et par service.
- **Abonnement à la redirection de logs :** lors de l'activation du transfert de logs pour un service OVHcloud donné vers un LDP *Data Stream* donné, un *abonnement* est créé et attaché au *Data Stream* pour une gestion ultérieure par le client.

## Prérequis

- Un compte Logs Data Platform (LDP) avec au moins un *Stream* actif configuré. Ce guide vous guidera dans toutes les étapes nécessaires : [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Un [environnement de cloud privée VMware](https://help.ovhcloud.com/csm/fr-vmware-host-addition?id=kb_article_view&sysparm_article=KB0045617) opérationnel.
- Le compte LDP et le compte Hosted Private Cloud doivent appartenir au même compte OVHcloud.

## Concepts & limites

> [!warning]
> A ce jour, les logs des listeners **UDP** ne sont pas transmis.
>

**Quels sont les logs d'un PCC Private Cloud ?**

Les logs transférés sont générés par votre environnement VMware à l'aide d'un Syslog.

Les logs contiennent les champs suivants :

| Nom du champ                          | Description                                                                                                                                                                                      | Unité |
|---------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| serviceName                           | Domaine of the service                                                                                                                                                                           | uuid |
| client_ip                             | Adresse IP du client qui a initié la connexion TCP au Load Balancer                                                                                                                              | IP |
| client_port                           | Port TCP du client qui a initié la connexion TCP au Load Balancer                                                                                                                                | Numérique |
| accept_date                           | Horodatage auquel la requête/connexion a été effectuée                                                                                                                                           | datetime (avec résolution en millisecondes), par exemple : 25/Mar/2024:14:07:19.536 |
| http_verb http_request http_version   | La requête HTTP                                                                                                                                                                                  | String, par exemple : « GET / HTTP/1.1 » |
| http_status                           | État HTTP retourné                                                                                                                                                                               | Numérique |
| bytes_read                            | Nombre d'octets lus par le serveur                                                                                                                                                               | Numérique |
| bytes_uploaded                        | Nombre d'octets envoyés par le serveur au client                                                                                                                                                 | Numérique |
| client_certificate_verify             | Retourne l'ID d'erreur de vérification des résultats lorsque la connexion entrante a été établie sur une couche de transport SSL/TLS, sinon zéro si aucune erreur n'est rencontrée.              | Numérique |
| client_certificate_distinguished_name | Lorsque la connexion entrante a été établie sur une couche de transport SSL/TLS, renvoie le nom unique complet du sujet du certificat présenté par le client                                     | String |
| pool_id:listener_id                   | Pool vers lequel la requête/connexion a été redirigée                                                                                                                                            | uuid |
| member_id                             | Membre auquel la requête/connexion a été envoyée                                                                                                                                                 | uuid |
| tcp_total_session_duration_time       | Durée en millisecondes pendant laquelle la session TCP a été ouverte lorsque cette demande est effectuée                                                                                         | Numérique |
| termination_state                     | L'indicateur de fin de session : 2 lettres pour TCP, 4 lettres pour HTTP tous les détails sur la [page de documentation HAProxy](https://docs.haproxy.org/2.6/configuration.html#8.5){.external} | String (par exemple « ---- ») |

Les champs suivants sont calculés à partir de `client_ip` et fournis dans les logs :

| Nom du champ | Description | Unité |
|--------------|-------------|-------|
| client_ip_city_name | Ville calculée par Geoip à partir de `client_ip`| String (ex. `Lille`) |
| client_ip_geolocation | Latitude, longitude calculées par Logstash Geoip à partir de `client_ip`| x.x,y.y (ex. `50.624,3.0511`) XST6Y7U899O0|
| client_ip_country_code | Le code pays ISO 3166 A-2 calculé par Logstash Geoip à partir de `client_ip` ISO | XX (ex. `FR`) |


## En pratique

Prenez en compte que l'activation du *forwarding* est gratuite, mais vous serez facturé pour l'utilisation du service Logs Data Platform selon le tarif standard. Pour la tarification du LDP, consultez cette [page](https://www.ovhcloud.com/fr/logs-data-platform/).

### Activation du Log forwarding dans Vsphere via l’espace client OVHcloud

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
 
> **Parametres:**
>
> serviceName: La reference de votre PCC, exemple: **pcc-XX-XX-XX-XX**.


Obtenez les détails d'un flux de données :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
>
 
> > **Parameters:**
>
> streamId: La reference d'identification de votre stream LDP.


#### Étape 2 - créer votre abonnement

Utilisez l'appel API suivant pour créer un abonnement :

> [!api]
>
> @api {v1} /dedicatedCloud/ POST /dedicatedCloud/{serviceName}/log/subscription
>

> **Parametres:**
>
> serviceName: The reference for your PCC as `pcc-XX-XX-XX-XX`.

Vous devrez remplacer :

- **serviceName** : il s’agit de l’identifiant du projet Private Cloud, que vous pouvez retrouver dans votre espace client OVHcloud sous le nom de votre projet ou en utilisant [l’appel API dédié](https://eu.api.ovh.com/console-preview/?section=%2FdedicatedCloud&branch=v1#post-/dedicatedCloud/-serviceName-/datacenter).

La requête POST a une charge utile qui nécessite les informations suivantes :

- `kind` : le type de journal que vous voulez transférer. Notez que la seule valeur actuellement prise en charge pour Hosted Private Cloud est "esxi", "vcsa" (vous pouvez trouver les types disponibles en utilisant [l'appel API dédié](https://eu.api.ovh.com/console-preview/?section=%2FdedicatedCloud&branch=v1#get-/dedicatedCloud/-serviceName-/log/kind)).
- `streamId` : flux de données cible de votre compte LDP vers lequel vous souhaitez que vos logs du service Hosted Private Cloud soient transférés.

```shell
POST /dedicatedCloud/{serviceName}/log/subscription
{
  "kind": "string", // Currently the only supported value is 'esxi'.
  "streamId": "ca06a2f5-55a9-4434-a1fb-130809312dca" // The streamID of the targeted Stream.
}
```

Vous obtiendrez en réponse un `operationId` :

```shell
{
  "operationId": "f550aa1c-89ab-4b1a-81ae-4fba4959966f",
  "serviceName": "pcc-XX-XX-XX-XX"
}
```

Vous pouvez utiliser le `operationId` pour récupérer le `subscriptionId` à des fins de gestion ultérieure à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/operation/{operationId}
>

> **Parametres:**
>
> serviceName: The reference for your PCC as `pcc-XX-XX-XX-XX`.
> operationId: he reference for ...

Une fois l'opération terminée, vous pouvez également récupérer les abonnements à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
> 

> **Parametres:**
>
> serviceName: The reference for your PCC as `pcc-XX-XX-XX-XX`.

Une fois en possession du `subscriptionId`, vous pouvez obtenir les détails via l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>

> **Parametres:**
>
> serviceName: The reference for your PCC as `pcc-XX-XX-XX-XX`.
> subscriptionId: The reference for your DLP account subscription.

```shell
GET /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}

{
  "createdAt": "2024-04-26T22:27:57+02:00",
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

### Comment utiliser les logs du PCC Hosted Private CLoud ?

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
 

### Informations utiles

**Zone Cluster** : Vous retrouverez la zone du cluster dont fait partie votre plateforme de gestion de logs depuis le lien Graylog. 
- Exemple de lien Graylog d'un compte ldp, : **https://gra159.logs.ovh.com/ -> GRA159**


### Comment gérer vos abonnements ?

À tout moment, vous pouvez récupérer les abonnements attachés à votre flux Logs Data Platform et choisir de désactiver la redirection en annulant votre abonnement sur votre flux, de sorte que votre flux Logs Data Platform ne reçoive plus vos journaux d'audit.

Notez que cela ne supprime pas les logs stockés avant l'annulation de l'abonnement, car les données stockées dans un flux de logs sont immuables, sauf si vous supprimez le flux entier.

Pour supprimer votre abonnement, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>

> **Parametres:**
>
> subscriptionId: La reference de souscription pour votre compte LDP.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
