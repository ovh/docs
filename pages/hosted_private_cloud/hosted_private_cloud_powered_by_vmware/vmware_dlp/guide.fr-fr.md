---
title: "Transfert des logs (Logs Forwarding) généré par l'offre Hosted Private Cloud"
excerpt: "Découvrez comment transférer les logs d'un Hosted Private Cloud vers un flux (stream) Logs Data Platform"
updated: 2024-05-13
---

## Objectif

L'objectif de ce guide est de vous montrer comment activer le transfert des logs de votre PCC Private Cloud vers Logs Data Platform (LDP), une plateforme qui vous aide à stocker, archiver, interroger et visualiser vos logs.

Si vous souhaitez en savoir plus sur Logs Data Platform avant de lire ce guide, reportez-vous au guide suivant : ["Introduction à Logs Data Platform"](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

## Prérequis
- Disposer d'un compte client OVHcloud.
- Disposer d'une ou plusieurs ressources Hosted Private Cloud.
- Avoir au moins un Stream actif configurait sur le compte LDP pour recevoir les logs.
- Les ressources Hosted Private Cloud et Logs Data Plateform doivent appartenir au même compte OVHcloud.

## Concepts et limites

### Êtes-vous éligible au transfert de log ?

> [!primary]
> Les PCC certifiés "PCIDS, HDS, SNC" + les PCC avec "NSX-T", ne sauraient procéder au transfert de leurs journaux qu'à la condition impérative que le composant de transfert soit activé (Enabled).
>

### Glossaire
- **Logs Data Platform :** Plateforme de gestion de logs entièrement gérée et sécurisée par OVHcloud. Pour plus d'informations, consultez la page de présentation de la solution [Logs Data Platform](https://www.ovhcloud.com/fr/logs-data-platform/){.external}
- **Data Stream :** Partition logique de logs que vous créez dans un compte LDP et que vous utiliserez lors de l'ingestion, de la visualisation ou de l'interrogation de vos logs. Plusieurs sources peuvent être stockées dans le même flux de données, et c'est l'unité qui peut être utilisée pour définir un pipeline de logs (politique de rétention, archivage, streaming live, etc.), des droits d'accès et des politiques d'alertes.
- **Transfert de logs :** Fonctionnalité intégrée à un produit OVHcloud pour ingérer les logs de ses services dans le *Data Stream* d’un compte LDP du même compte OVHcloud. Cette fonctionnalité doit être activée par vos soins et pour votre service.
- **Abonnement à la redirection de logs :** Lors de l'activation du transfert de logs pour votre service OVHcloud vers un LDP *Data Stream* donné, un *abonnement* doit être créé et rattaché au *Data Stream* pour une gestion ultérieure.

## En pratique

> [!primary]
> 
> Prenez en compte que l'activation du **transfert de logs (Log Forwarding)** est gratuite, mais vous serez facturé pour l'utilisation du service Logs Data Platform selon le tarif standard. Pour la tarification du LDP, consultez cette [page](https://www.ovhcloud.com/fr/logs-data-platform/).
>

Logs Data Platform est une interface de collecte, d'indexation et d'analyse de logs. Quelque-soit la provenance de vos logs, la plateforme vous permet de choisir différents points d'entrée en fonction du protocole, du niveau de sécurité et du format. L'analyse et l'exploitation des données peuvent se faire grâce à différentes API et interfaces web.

### Etape 1 - Audit Log Forwarding avec Hosted Private Cloud

> [!warning]
> 
> Les ressources Hosted Private Cloud et LDP doivent appartenir au même compte OVHcloud. Si ce n'est pas le cas, vous aurez ce message d'erreur : 
> ```shell
> {
> "message": "Client::ValidationError::SubscriptionDestinationClusterIsInternal ; {\"cluster_name\":\"XXX.logs.ovh.com\"} ; Subscription can't target non-public cluster 'XXXX.logs.ovh.com'"
> }
> ```
>

### Activation du Log Forwarder avec Hosted Private Cloud 

> [!primary]
>
> Vous devez avoir préalablement créer un stream Logs Data Plateform.
>

Trouvez plus d'information sur les appels API OVHcloud : [Premiers pas avec l'API OVHcloud](/pages/manage_and_operate/api/first-steps).

### Création de l'abonnement LDP pour votre Hosted Private Cloud

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans le control panel Hosted Private Cloud VMware on OVHcloud.

#### Via l’API OVHcloud :

> [!primary]
>
>  Trouvez plus d'information sur les appels API OVHcloud : [Premiers pas avec l'API OVHcloud](/pages/manage_and_operate/api/first-steps).
>

#### Via l’API OVHcloud :

> [!api]
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
>
> **Paramètres:**
>
> **kind** : "esxi".
>
> **streamId** : "ggb8d894-c491-433e-9c87-50a8bf6fe773".
>

Exemple :

```shell
@api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription

{
  "kind": "string", // Le label VMware, la seul valeur supporté actuellement est : 'esxi'.
  "streamId": "vf06a2f5-55a9-4434-a1fb-130809312dvf", // L'identifiant du flux (stream) LDP.
}
```

La requête GET permet de lister vos souscriptions.

### Verification si le forwarder Syslog est activé

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans le control panel Hosted Private Cloud VMware on OVHcloud.

#### Via l’API OVHcloud :

> [!api]
> 
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/syslogForward
>
>
> **Paramètres** :
>
> **serviceName** : La référence pour votre PCC : "pcc-XXX-XXX-XXX-XXX".
>

Exemple de retour :

```shell
{
  "state": "disabled/Enabled"
}
```

Si vous avez réussi l'appel API : POST /dedicatedCloud/{serviceName}/syslogForward/forwarder, vous devez avoir l'option Activé.

### Lister les Syslog Forwarder de votre Hosted Private Cloud

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans le control panel Hosted Private Cloud VMware on OVHcloud.

#### Via l’API OVHcloud :

> [!api]
> 
> @api {v1} /dedicatedCloud GET  /dedicatedCloud/{serviceName}/syslogForward/forwarder
>
> **Paramètres:**
>
> **serviceName** : La référence pour votre PCC : "pcc-XXX-XXX-XXX-XXX".
>

### Mise à jour du Log Forwarder de votre PCC

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans le control panel Hosted Private Cloud VMware on OVHcloud.

#### Via l’API OVHcloud :

> [!api]
> 
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/syslogForward/forwarder/{logForwardId}/changeProperties
>
> **Paramètres** :
>
> **serviceName** : La référence pour votre PCC : pcc-XXX-XXX-XXX-XXX.
>
> **logForwardId** : Identifiant du log forwarder.
>

### Manager vos flux (stream) LDP avec Hosted Private Cloud

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans le control panel Hosted Private Cloud VMware on OVHcloud.

#### Via l’API OVHcloud

Utilisez l'appel API suivant pour lister les stream data de votre compte LDP :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dbaas/logs/{serviceName}/output/graylog/stream
>
> **Paramètres** :
>
> serviceName : La référence de votre serviceName : pcc-XXX.XXX-XXX-XXX.
>

Avoir les details des flux (stream) :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
>
> **Paramètres:**
>
> **serviceName** : La référence de votre serviceName : pcc-XXX.XXX-XXX-XXX.
> 
> **streamId** : L'identifiant de votre stream LDP.
>

Vous obtiendrez en réponse un `operationId`{.action} :

```shell
{
  "operationId": "f330aa1c-89ab-4b1a-81ae-4ffr4959966f",
  "serviceName": "pcc-XXX-XXX-XXX-XXX"
}
```

Vous pouvez utiliser le `operationId`{.action} pour récupérer le `subscriptionId`{.action} à des fins de gestion ultérieure à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/operation/{operationId}
>
> **Paramètres** :
>
> **serviceName** : La référence de votre serviceName : pcc-XXX-XXX-XXX-XXX.
>
> **operationId** : La référence de votre identifiant d'opération LDP : "5a9x1x74-a1f2-4bb7-a41c-e8fd397ee1xx".
>

Une fois l'opération terminée, vous pouvez également récupérer les abonnements à l'aide de l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
>
> **Paramètres:**
>
> **serviceName** : La reference de votre serviceName : "pcc-XXX-XXX-XXX-XXX".
>

Une fois en possession du `subscriptionId`{.action} , vous pouvez obtenir les détails via l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>
> **Paramètres:**
>
> serviceName : La reference de votre serviceName : pcc-XXX-XXX-XXX-XXX.
>
> subscriptionId : La reference de votre identifiant de subscription LDP : 18d60324-b260-4000-83db-b484f4db6e80.
>

Exemple de retour :

```shell
GET /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}

{
  "createdAt": "2024-04-26T22:27:57+02:00",
  "kind": "esxi",
  "resource": {
    "name": "Null",
    "type": "Null"
  },
  "serviceName": "Null",
  "streamId": "Null",
  "subscriptionId": "18a60324-b260-4000-83cb-h484f4db6i80",
  "updatedAt": "2024-01-31T15:45:25.286Z"
}
```

### Étape 2 - Récupération du Stream (ID) cible LDP

> [!primary]
> 
> Vous devez avoir préalablement créer un stream Logs Data Plateform.
>

#### Via le control panel OVHcloud :

Vous pouvez suivre le guide suivant pour récupérer le stream ID LDP via le control panel OVHcloud : [Premiers pas / Démarrage rapide Logs Data Plateform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

#### Via l’API OVHcloud :

Listez les flux de données de votre compte Logs Data Platform (renseignez votre identifiant LDP au format ldp-xx-xxxx dans le champ « serviceName ») :

> [!api]
>
> @api {v1} /dedicatedCloud/{serviceName}/logs GET /dedicatedCloud/{serviceName}/log/subscription
>
> Paramètres:
>
> **serviceName** : La référence de votre serviceName : pcc-XXX.XXX-XXX-XXX.
>

### Étape 3 - Obtenez les détails d'un flux de données PCCHosted Private Cloud

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans le control panel Hosted Private Cloud VMware on OVHcloud.

#### Via l’API OVHcloud :

> [!api]
>
> @api {v1} /dedicatedCloud/{serviceName}/logs GET /dedicatedCloud/{serviceName}/output/graylog/stream/{streamId}
>
> **Paramètres** :
>
> **streamId** : La référence d'identification de votre stream LDP : "caX6a2f5-XXa9-4434-a1xx-XX0809312dca".
>serviceName
> **serviceName** : La référence de votre serviceName : "pcc-XXX.XXX-XXX-XXX".
>

### Étape 3 - Accéder à l'interface Graylog

Utiliser les identifiants de votre compte LDP, lorsque que vous vous connectez la première fois définissez un mot de passe. 

Le login correspond au nom d'utilisateur Logs Data Plateform et non celui de votre stream (ldp-cg-XXX), voir exemple et capture ci-dessous :
- **Nom d'utilisateur** : `logs-dv-XXX`{.action} -> Correct.
- **Stream Name** : `ldp-cg-XXX`{.action} -> Non-correct.

![GRAYLOG](images/graylog_login.png)

Vous retrouvez plusieurs liens de connexions qui vous redirigent sur le bon lien Graylog dans le compte de votre espace LDP.

![GRAYLOG](images/graylog_login_2.png)

### Étape 4 - Gestion de l'abonnement Logs Data Plateform

À tout moment, vous pouvez récupérer les abonnements attachés à votre flux Logs Data Platform et choisir de désactiver la redirection en annulant votre abonnement sur votre flux, de sorte que votre flux Logs Data Platform ne reçoive plus vos journaux d'audit.

Notez que cela ne supprime pas les logs stockés avant l'annulation de l'abonnement, car les données stockées dans un flux de logs sont immuables, sauf si vous supprimez le flux entier.

Pour supprimer votre abonnement, vous pouvez utiliser l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>
> **Paramètres** :
>
> **subscriptionId** : La référence de souscription pour votre compte LDP, exemple : "18d30324-x260-5000-81db-a484f4db6y80".
>
> **serviceName** : La référence de votre serviceName : "pcc-XXX-XXX-XXX-XXX".
>

Pour aller plus loins dans la gestion de votre abonnement, vous pouvez suivre le guide : ["Démarrage rapide Logs Data Plateform"](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

## Aller plus loin

Vous pouvez suivre ces guides qui vous explique comment configurer votre PCC pour faire suivre les logs dans LDP :
- [Logs Data Platform - Listing guides premiers pas avec Logs Data Plateform](https://help.ovhcloud.com/csm/fr-documentation-observability-logs-data-platform-getting-started?id=kb_browse_cat&kb_id=3d4a8129a884a950f07829d7d5c75243&kb_category=e3eec38c1977a5d0476b930e789695d0&spa=1){.external}
- [Visualiser vos logs dans un tableau de bord Grafana](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana).
- [Utiliser la cli "LDP Tail" pour regarder en live vos logs Hosted Private Cloud](/pages/manage_and_operate/observability/logs_data_platform/cli_ldp_tail).
- [Génération des logs des comptes OVHcloud avec Logs Data Platform](/pages/manage_and_operate/iam/iam-logs-forwarding).
- [Pousser les logs depuis Apache vers LDP](/pages/manage_and_operate/observability/logs_data_platform/ingestion_apache).
- [Modèle de responsabilité "RACI"](/pages/manage_and_operate/observability/logs_data_platform/getting_started_responsibility_model).

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
