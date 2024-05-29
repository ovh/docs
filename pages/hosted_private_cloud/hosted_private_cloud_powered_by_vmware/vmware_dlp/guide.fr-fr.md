---
title: "Transfert des logs (Logs Forwarding) TCP / HTTP / HTTPS du PCC Hosted Private Cloud"
excerpt: "Découvrez comment transférer vos logs depuis un PCC Hosted Private Cloud vers Logs Data Platform"
updated: 2024-05-13
---

## Objectif

L'objectif de ce guide est de vous montrer comment activer le transfert de logs de votre PCC Private Cloud vers Logs Data Platform (LDP), une plateforme qui vous aide à stocker, archiver, interroger et visualiser vos logs.

Si vous souhaitez en savoir plus sur Logs Data Platform avant de lire ce guide, reportez-vous au guide suivant : ["Introduction à Logs Data Platform"](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

## Prérequis
- Disposer d'un compte client OVHcloud.
- Disposer d'une ou plusieurs ressources Hosted Private Cloud (PCC).
- Avoir au moins un Stream actif configuré sur le compte LDP pour recevoir les logs.
- Les ressources PCC et LDP doivent appartenir au même compte OVHcloud.

## Concepts et limites
> [!warning]
> A ce jour, les logs des listeners **UDP** ne sont pas transmis.
> L'intégralité des journaux VMware ne sont pas transmissible, pour raison de sécurité.

### Glossaire
- **Logs Data Platform :** Plateforme de gestion de logs entièrement gérée et sécurisée par OVHcloud. Pour plus d'informations, consultez la page de présentation de la solution [Logs Data Platform](https://www.ovhcloud.com/fr/logs-data-platform/).
- **Data Stream :** Partition logique de logs que vous créez dans un compte LDP et que vous utiliserez lors de l'ingestion, de la visualisation ou de l'interrogation de vos logs. Plusieurs sources peuvent être stockées dans le même flux de données, et c'est l'unité qui peut être utilisée pour définir un pipeline de logs (politique de rétention, archivage, streaming live, etc.), des droits d'accès et des politiques d'alertes.
- **Transfert de logs :** Fonctionnalité intégrée à un produit OVHcloud pour ingérer les logs de ses services dans un *Data Stream* d’un compte LDP dans le même compte OVHcloud. Cette fonctionnalité doit être activée par le client et par service.
- **Abonnement à la redirection de logs :** Lors de l'activation du transfert de logs pour un service OVHcloud donné vers un LDP *Data Stream* donné, un *abonnement* est créé et attaché au *Data Stream* pour une gestion ultérieure par le client.

### Les types de journaux

> [!primary]
> Les PCC certifié (PCIDS, HDS, SNC, NSX-T) suivants peuvent faire transférer leurs journaux uniquement si le **syslogForwarder** est activé.

### Kind

La première chose dont vous avez besoin est de créer un ou plusieurs types de logs. Un Kind est un « type » de logs que votre produit génère. Cela dépend vraiment de votre logique commerciale. 

Pour un produit Hosted Private Cloud, il est possible d'imaginer 4 types de logs : 

1. Les logs Kernel.
2. Les logs Auth.
3. Les logs Cron.
4. Les logs Réseaux.

Sachez qu'il est tout à fait acceptable qu'un produit ne possède qu'une seule catégorie. 

Voici des exemples de labels "kind" représenté par défaut dans Hosted Private Cloud VMware on OVHcloud :

- **esxi** : Référence de votre hôte ESX, peut filtré par application (journaux système : )
- **nsxtEdge** : Référence de votre Edge, tout est redirigé (journaux réseaux).
- **vcsa** : Référence de cluster vCenter, filtré par application (journaux clustering : en relation avec vCenter et vos hôtes ESX).
- **nsxt** : Référence NSX-T, tout est redirigé (journaux réseaux)
- **nsxtManager** : Référence du manager NSX-T, tout est redirigé (journaux réseaux)

Il est le type de journal que vous voulez transférer à votre stream LDP. Notez que la seule valeur actuellement prise en charge aujourd'hui pour Hosted Private Cloud est "esxi".

D'autres références seront disponible dans les versions futures.

Pour pouvoir consommer des logs, votre infrastructure PCC doit avoir l'option de sécurité **syslogForwarder** activée. 

Tous les journaux VMware sont collectés et envoyés aux clusters Logs Data Plateform. 

Tous les journaux de l'appliance VMware sont traités par les "Forwarder" Syslog et marqués pour le filtre au niveau du cluster LDP.

Nous mettons toutes les métadonnées pour l'identification de Hosted Private Cloud.

## En pratique
> [!primary]
> Prenez en compte que l'activation du **Log Forwarding** est gratuite, mais vous serez facturé pour l'utilisation du service Logs Data Platform selon le tarif standard. Pour la tarification du LDP, consultez cette [page](https://www.ovhcloud.com/fr/logs-data-platform/).

Logs Data Platform est une interface de collecte, d'indexation et d'analyse de logs. Quelque soit la provenance de vos logs, la plateforme vous permet de choisir différents points d'entrée en fonction du protocole, du niveau de sécurité et du format. L'analyse et l'exploitation des données peuvent se faire grâce à différentes API et interfaces web.

### Etape 1 - Activer l'Audit Log Forwarding avec Hosted Private Cloud

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans l'espace client.

#### Via l’API OVHcloud :

> [!primary]
>
>  Trouvez plus d'information sur les appels API OVHcloud : [Premiers pas avec l'API OVHcloud](/pages/manage_and_operate/api/first-steps).

> [!api]
> @api {v1} /dedicatedCloud/{serviceName} POST /dedicatedCloud/{serviceName}/syslogForward/forwarder
>

> **Paramètres:**
>
> serviceName : La référence pour votre PCC : ***pcc-XXX-XXX-XXX-XXX***.
> ip: L'adresse Ip du service distant.
> logLevel : Le niveau de log minimum (LogLevelEnum).
> servicePort : Port distant (Syslog : 514, Syslog Manager : 6514).
> sourceType : Le type de source (nsxtEdge).
> sslThumbprint : L'empreinte de votre gateway SSL.
>

### Etape 2 - Créer une redirection de logs vers votre syslog

#### Via le control panel OVHcloud

Cette fonctionnalité n'est pas encore disponible dans l'espace client.

#### Via l’API OVHcloud

> [!api]
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/syslogForward/forwarder
>

> **Paramètres:**
>
> serviceName : La référence pour votre PCC : ***pcc-XXX-XXX-XXX-XXX***.
>


La requête GET à une charge utile qui permet de lister les forwarder activés.

##### Obtenir l'option de transfert vers syslog

> [!api]
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/syslogForward
>
>

> **Paramètres:**
>
> serviceName : La référence pour votre PCC : ***pcc-XXX-XXX-XXX-XXX***.
>

##### Lister tous les syslog forwarders

> [!api]
> @api {v1} /dedicatedCloud GET  /dedicatedCloud/{serviceName}/syslogForward/forwarder
>

> **Paramètres:**
>
> serviceName : La référence pour votre PCC : ***pcc-XXX-XXX-XXX-XXX***.
>

##### Mettre à jour les log forwarders

> [!api]
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/syslogForward/forwarder/{logForwardId}/changeProperties
>

> **Paramètres:**
>
> serviceName : La référence pour votre PCC : ***pcc-XXX-XXX-XXX-XXX***.
> logForwardId : 

### Etape 3 - Créez un abonnement pour votre Hosted Private Cloud

> [!api]
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
>

> **Paramètres:**
>
> serviceName : La référence pour votre PCC : ***pcc-XXX-XXX-XXX-XXX***.

```shell
POST /dedicatedCloud/{serviceName}/log/subscription
{
  "kind": "string", // La seul valeur supporté actuellement est : 'esxi'.
  "streamId": "ca06a2f5-55a9-4434-a1fb-130809312dca" // Le feed ID de votre stream LDP.
}
```
La requête GET à une charge utile qui permet de lister vos souscriptions.

#### Étape 4 - Manager vos stream dans Hosted Private Cloud

#### Via l’API OVHcloud

Utilisez l'appel API suivant pour lister les stream data de votre compte LDP :

> [!api]
>
> @api {v1} /dedicatedCloud/ GET /dbaas/logs/{serviceName}/output/graylog/stream
>

> **Paramètres:**
>
> serviceName : La référence de votre PCC : ***pcc-XXX.XXX-XXX-XXX***.

Avoir les details des stream :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
>

> **Paramètres:**
>
> serviceName : La référence de votre PCC : ***pcc-XXX.XXX-XXX-XXX***.
> streamId : L'identifiant de votre stream LDP.


Vous obtiendrez en réponse un `operationId`{.action} :

```shell
{
  "operationId": "f550aa1c-89ab-4b1a-81ae-4fba4959966f",
  "serviceName": "pcc-XXX-XXX-XXX-XXX"
}
```

Vous pouvez utiliser le `operationId`{.action} pour récupérer le `subscriptionId`{.action} à des fins de gestion ultérieure à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/operation/{operationId}
>

> **Paramètres:**
>
> serviceName : La reference de votre PCC : "pcc-XXX-XXX-XXX-XXX".
> operationId : La reference de votre identifiant d'opération DLP : 5a9x1x74-a1f2-4bb7-a41c-e8fd397ee1xx.

Une fois l'opération terminée, vous pouvez également récupérer les abonnements à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
>

> **Paramètres:**
>
> serviceName: La reference de votre PCC, tel que `pcc-XXX-XXX-XXX-XXX.`{.action}

Une fois en possession du `subscriptionId`{.action} , vous pouvez obtenir les détails via l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>

> **Paramètres:**
>
> serviceName : La reference de votre PCC, tel que `pcc-XXX-XXX-XXX-XXX`.
> subscriptionId : La reference de votre identifiant de subscription LDP, tel que : `18d60324-b260-4000-83db-b484f4db6e80`

Exemple de retour :

```shell
GET /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}

{
  "createdAt": "2024-04-26T22:27:57+02:00",
  "kind": "esxi",
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

### Étape 2 - Récupération du Stream (et l'ID) cible

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans l'espace client.

##### Via l’API OVHcloud :

Listez les flux de données de votre compte Logs Data Platform (renseignez votre identifiant LDP au format ldp-xx-xxxx dans le champ « serviceName ») :

> [!api]
>
> @api {v1} /dedicatedCloud/{serviceName}/logs GET /dedicatedCloud/{serviceName}/log/subscription
>
 
> **Paramètres:**
>
> serviceName: La reference de votre PCC : ***pcc-XXX.XXX-XXX-XXX***.


### Etape 4 - Obtenez les détails d'un flux de données

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans l'espace client.

##### Via l’API OVHcloud :

> [!api]
>
> @api {v1} /dedicatedCloud/{serviceName}/logs GET /dedicatedCloud/{serviceName}/output/graylog/stream/{streamId}
>
 
> > **Paramètres:**
>
> streamId : La référence d'identification de votre stream LDP : ***caX6a2f5-XXa9-4434-a1xx-XX0809312dca***.
> serviceName : La référence de votre PCC : ***pcc-XXX.XXX-XXX-XXX***.

### Etape 5 - Accéder à l'interface Graylog

Utiliser les identifiants de votre compte LDP, lorsque que vous vous connectez la première fois définissez un mot de passe. 

Le login correspond au nom d'utilisateur Logs Data Plateform et non celui de votre stream (ldp-cg-XXX), voir exemple et capture ci-dessous :
- **Nom d'utilisateur** : `logs-dv-XXX`{.action} -> Correct.
- **Stream Name** : `ldp-cg-XXX`{.action} -> Non-correct.

![GRAYLOG](images/graylog_login.png)

Vous retrouvez plusieurs liens de connexions qui vous redirige sur le bon lien Graylog dans le compte de votre espace LDP.

![GRAYLOG](images/graylog_login_2.png)

### Etape 6 - Gestion de l'abonnement Logs Data Plateform

À tout moment, vous pouvez récupérer les abonnements attachés à votre flux Logs Data Platform et choisir de désactiver la redirection en annulant votre abonnement sur votre flux, de sorte que votre flux Logs Data Platform ne reçoive plus vos journaux d'audit.

Notez que cela ne supprime pas les logs stockés avant l'annulation de l'abonnement, car les données stockées dans un flux de logs sont immuables, sauf si vous supprimez le flux entier.

Pour supprimer votre abonnement, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>

> **Paramètres:**
>
> subscriptionId : La référence de souscription pour votre compte LDP.
> serviceName : La référence de vôtre PCC : ***pcc-XXX-XXX-XXX-XXX***.

## Aller plus loin

Vous pouvez suivre ces guides qui vous explique comment configurer votre PCC pour faire suivre les logs dans LDP :
- [Logs Data Platform - Premiers pas](https://help.ovhcloud.com/csm/fr-documentation-observability-logs-data-platform-getting-started?id=kb_browse_cat&kb_id=3d4a8129a884a950f07829d7d5c75243&kb_category=e3eec38c1977a5d0476b930e789695d0&spa=1)
- [Pousser des logs avec un forwarder Syslog-ng (Linux)](https://help.ovhcloud.com/csm/fr-logs-data-platform-how-to-log-your-linux?id=kb_article_view&sysparm_article=KB0037664)
- [Pousser des logs avec un forwarder NXlog (Windows)](https://help.ovhcloud.com/csm/fr-logs-data-platform-windows-nxlog?id=kb_article_view&sysparm_article=KB0037694)
- [Génération des logs des comptes OVHcloud avec Logs Data Platform](https://help.ovhcloud.com/csm/fr-iam-logs-forwarding?id=kb_article_view&sysparm_article=KB0060437)
- [Pousser les logs depuis Apache vers LDP](https://help.ovhcloud.com/csm/fr-logs-data-platform-apache-logs?id=kb_article_view&sysparm_article=KB0050046)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
