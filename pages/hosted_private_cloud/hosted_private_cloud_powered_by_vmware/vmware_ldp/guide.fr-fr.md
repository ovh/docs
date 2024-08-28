---
title: "Logs Data Platform - Activer le Log forwarder managé"
excerpt: "Découvrez comment souscrire un abonnement Logs Data Platform vSphere managé et activer le log forwarder interne afin de pousser les journaux VMware vers un stream LDP"
updated: 2024-08-28
---

> [!primary]
> Cette fonctionnalité est actuellement en phase Bêta. Logs Data Platform ne propose pas à ce jour des mêmes niveaux de sécurité (SNC/PCIDSS etc..) que VMware on OVHcloud, cependant l'activation est toujours possible.
> 

## Objectif

**L'objectif est de vous montrer comment activer le transfert des logs VMware vSphere managé vers un stream Logs Data Platform.**

## Prérequis

- Disposer d'un [compte client OVHcloud](/links/manager).
- Disposer d'une offre [Hosted Private Cloud](/links/hosted-private-cloud/vmware)
- Avoir suivi le guide « [Introduction à Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) ».
- Vous devez avoir le `logForwarder` activé. Pour le vérifier, exécutez [l'appel API suivant](#security-options).
- Un stream actif crée dans les clusters privés Logs Data Platform.

## En pratique

> [!primary]
> Prenez en compte que l'activation du **transfert de logs (Log Forwarding)** est gratuite.
>
> Cependant, vous devez pour assurer le bon fonctionnement de votre cluster dédié Hosted Private Cloud, des charges de stockage peuvent s'appliquer avec le temps selon le tarif standard. Ainsi qu'avec l'utilisation du catalogue de services managés LDP (Graylogs, OpenSearch etc..).
> 

L'activation du transfert des logs vers un stream Logs Data Platform permet de collecter, d'indexer et d'analyser les données d'un service Hosted Private Cloud VMware on OVHcloud. Peu importe leur origine, cette plateforme offre une diversité de moyens d'accès en fonction du protocole, du niveau de sécurité et du format désiré. Les données recueillies peuvent être aisément exploitées grâce aux multiples API et interfaces web mises à disposition.

Pour plus d'informations concernant les caractéristiques techniques de Logs Data Platform (ports, protocoles, etc.), nous vous invitons à consulter le guide « [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » (EN).

**Les logs et labels**

**Les kinds disponibles**

Un kind est un « type » de logs que votre produit génère.

Ils sont les types de logs que vous voulez transférer à votre stream Logs Data Platform. Voici des exemples qui peuvent être disponibles en fonction des composants de votre architecture Hosted Private Cloud VMware on OVHcloud :

- `esxi` : Seulement certaines applications sont redirigées.
- `nsxtEdge` : Tout est redirigé, pas de filtre.
- `vcsa` : Filtré par application.
- `nsxtManager` : Filtré par application.

### Étape 1 - Activer le Log Forwarder dans un vSphere managé

> [!warning]
> Si le pack `logForwarder` n'est pas activé au sein de votre pack de base d'options (base ou advanced security), [contactez le support OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help).
> 
> Si vous voulez la fonctionnalité `logForwarder` sans les packs de base et de sécurité avancées, contactez le support OVHcloud pour l'activer manuellement.
>

<a name="security-options"></a>

#### Via l'API OVHcloud

> [!primary]
> Consultez le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.
>

**Référencement de tous les appels API les packs de sécurités** :

| **Méthode** | **Chemin**                                                          | **Description**                                                             |
|:-----------:|:--------------------------------------------------------------------|:----------------------------------------------------------------------------|
|     GET     | /dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix   | Obtenir la matrice de compatibilité des options de sécurité                 |
|     GET     | /dedicatedCloud/{serviceName}/securityOptions/dependenciesTree      | Obtenir l'arborescence des dépendances des options de sécurité              |
|     GET     | /dedicatedCloud/{serviceName}/securityOptions/pendingOptions        | Obtenir les options de sécurité  en attente  d'activation                   |
|    POST     | /dedicatedCloud/{serviceName}/securityOptions/resumePendingEnabling | Réessayer l'activation de l'option de sécurité en attente                   |

Pour vérifier les options exigées pour permettre le fonctionnement de la fonctionnalité `logForwarder` au sein de votre VMware vSphere managé on OVHcloud, exécutez l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix
>

Laissez vides les 2 booléens `showIncompatible` et `showInternal` disponibles.

Voici un exemple de retour, si l'option exigée pour fonctionner n'est pas activée :

```json
@api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/securityOptions/compatibilityMatrix

[
 {
  description: "Deploy a syslog forwarder to gather all VMware logs of a Private Cloud"
  state: "disabled"
  name: "logForwarder"
  compatible: true
  enabled: false
  reason: null
 }
]
```
### Étape 2 - Création d'un stream Log Data Platform

> [!primary]
> Les ressources Hosted Private Cloud et Logs Data Platform doivent bien appartenir au même compte OVHcloud.
>
> Vos journaux sont manipulés à des fins de sécurité et d'observabilité dans les clusters privés Logs Data Platform. Pour plus d'informations sur la tarification LDP, consultez la page LDP de [ce lien](/links/manage-operate/ldp).
>

Pour créer une souscription, un stream est nécessaire. Vous pouvez créer un stream temporaire afin de souscrire votre abonnement avec le `streamId` et l'appel API POST de l'étape 3.

#### Via l'espace client OVHcloud

Vous pouvez vous référer à ce guide pour retrouver comment créer un stream depuis l'interface Logs Data Platform : « [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » (EN).

#### Via l'API OVHcloud

Création d'un stream, un `serviceName` LDP est nécessaire. Vous devez donc préalablement avoir un compte de souscription LDP temporaire pour créer un stream.

Voici l'appel API de création d'un stream :

> [!api]
>
> @api {v1} /dbaas/logs POST /dbaas/logs/{serviceName}/output/graylog/stream
>

> **Paramètres** :
> 
> ```json
> {
> "description": "string", // Description de votre stream.
> "title": "string" // Titre de votre stream.
> }
> ```

Retour :

```json
{
  "aliasId": null,
  "createdAt": "2024-08-28T12:25:13.544323+02:00",
  "dashboardId": null,
  "encryptionKeyId": null,
  "indexId": null,
  "inputId": null,
  "operationId": "e34f7a06-386b-4602-8d16-d45249197d40",
  "osdId": null,
  "roleId": null,
  "serviceName": "ldp-pu-66281",
  "state": "RUNNING",
  "streamId": null,
  "subscriptionId": null,
  "tokenId": null,
  "updatedAt": "2024-08-28T12:25:13.554173+02:00"
}
```

Récupérez le `streamId` et sauvegardez-le (copier-coller) dans un éditeur de texte. Vous en aurez besoin pour activer votre souscription Hosted Private Cloud avec le stream temporaire Logs Data Platform en question.

Nous allons voir dans l'étape suivante comment souscrire votre abonnement vSphere managé à un stream LDP temporaire.

### Étape 3 - Souscription de l'abonnement Logs Data Platform

> [!warning]
> Pour disposer d'une souscription Logs Data Platform actif avec VMware on OVHcloud, vous devez avoir un stream actif. 
> 
> Si vous voulez avoir un stream sur le même compte et avec le même niveau de sécurité que votre Hosted Private Cloud, vous devez faire le transfert de ce stream à celui de votre infrastructure privée (à ce jour). La responsabilité du transfert vous incombe, ainsi que du niveau de sécurité que vous voulez.
> 
> Vous pouvez vous referer à la [documentation Log Data Plateform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_responsibility_model), si vous voulez plus d'information sur les niveaux de sécurité et de responsabilités disponibles.
> 

#### Via l'espace client OVHcloud

Cette fonctionnalité n'est pas encore disponible dans la section Hosted Private Cloud de l'espace client OVHcloud.

#### Via l’API OVHcloud <a name="activation"></a>

Utilisez les appels API suivants pour établir la liste des abonnements de votre compte Hosted Private Cloud.

**Référencement des appels API**

| **Méthode** | **Chemin**                                                     | **Description**                                                     |
|:-----------:|:---------------------------------------------------------------|:--------------------------------------------------------------------|
|     GET     | /dedicatedCloud/{serviceName}/log/kind                         | Types de logs pour votre service Hosted Private Cloud               |
|     GET     | /dedicatedCloud/{serviceName}/log/kind/{name}                  | Obtenir les propriétés de cet objet                                 |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription                 | Inscrivez-vous pour votre service Hosted Private Cloud              |
|    POST     | /dedicatedCloud/{serviceName}/log/subscription                 | Créez un abonnement log pour votre service Hosted Private Cloud     |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription                 | Obtenir les propriétés de cet objet                                 |
|   DELETE    | /dedicatedCloud/{serviceName}/log/subscription                 | Supprimer un abonnement log pour votre service Hosted Private Cloud |

Pour récupérer le **streamId** de votre compte LDP, consultez le guide « [Premiers pas Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) ».

> [!api]
> 
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
>

> **Paramètres** :
>
> - `serviceName` : Nom du service vSphere managé, e.g `pcc-XXX-XXX-XXX-XXX`.
> - `kind` : Kind VMware que le forwarder utilise, e.g (Disponible : `nsxtEdge ┃ vcsa ┃ nsxtManager ┃ esxi`).
> - `streamId` : Identifiant du flux (stream) de destination, par exemple: (uuid : `ggb8d894-c491-433e-9c87-50a8bf6fe773`).
>

Paramètres input :

```json
@api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription

{
 "kind": "esxi", // Le label VMware, les valeurs supportées actuellement sont : `esxi`, `nsxtManager`, `vcsa`, `nsxtEdge`.
 "streamId": "Null", // L'identifiant du stream Logs Data Platform.
}
```
La requête GET permet de lister les stream ID au sein de votre souscription.

### Étape 4 - Administrer vos streams vSphere Logs Data Platform

L'administration de vos streams LDP peuvent être fait depuis l'API OVHcloud, depuis l'espace client Bare Metal Logs Data Plateform, depuis l'UI Graylog, depuis l'UI OpenSearch et bientôt dans l'espace client manager Hosted Private Cloud.

#### Via l'espace client OVHcloud

Vous pouvez vous référer à ce guide pour retrouver comment administrer vos flux (streams) depuis le control panel Log Data Platform : « [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » (EN).

#### Via l’API OVHcloud

**Référencement de quelques appels API Logs Data Platform**

Nous vous invitons à lire les guides pour voir l'ensemble des appel API disponible.

| **Méthode** | **Chemin**                                                                                                | **Description**                                                                 |
|:-----------:|:----------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------|
|     GET     | /dbaas/logs/{serviceName}                                                                                 |                                                                                 |
|     GET     | /dbaas/logs/{serviceName}/cluster                                                                         |                                                                                 |
|     GET     | /dbaas/logs/{serviceName}/cluster/{clusterId}                                                             |                                                                                 |
|     GET     | /dbaas/logs/{serviceName}/cluster/{clusterId}/retention                                                   |                                                                                 |
|     GET     | /dbaas/logs/{serviceName}/output/graylog/stream                                                           | - Returns the list of graylog streams                                           |
|     GET     | /dbaas/logs/{serviceName}/input/{inputId}/configuration/logstash                                          | - Returns the logstash configuration                                            |
|     GET     | /dbaas/logs/{serviceName}/encryptionKey                                                                   | - Return the list of registered encryption keys                                 |
|     GET     | /dbaas/logs/{serviceName}/input                                                                           | - Returns the list of registered input attached to the logged user              |
|    POST     | /dbaas/logs/{serviceName}/input                                                                           | - Register a new input object                                                   |
|     GET     | /dbaas/logs/{serviceName}/output/opensearch/alias/{aliasId}/index                                         | - Returns the list of OpenSearch indexes attached to specified OpenSearch alias |                                                                  |


**Comment obtenir le `subscriptionId`** ?

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
>

> **Paramètres** :
>
> - `serviceName` : Nom de service de votre vSphere managé, e.g `pcc-XXX-XXX-XXX-XXX`.
> - `kind` : Nom kind VMware que le forwarder utilise, e.g (`nsxtEdge ┃ vcsa ┃ nsxtManager ┃ esxi`).
>

Exemple de retour :

```json
[
 "9a36b2ec-c7d2-411d-acf8-qb64ccffdb54"
]
```

**Exemple de retours API**

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/kind/{name}
>

> **Paramètres** :
>
> - `name` : Nom kind VMware que le forwarder utilise, e.g (Disponible : `nsxtEdge ┃ vcsa ┃ nsxtManager ┃ esxi`).
> - `serviceName` : Nom de service de votre vSphere managé, e.g `pcc-XXX-XXX-XXX-XXX`.
> 

Retour :

**NSX-T Edge**

```json
{
  "name": "nsxtEdge",
  "createdAt": "2024-05-31T22:17:40+02:00",
  "kindId": "Null",
  "displayName": "NSX-T Edges",
  "additionalReturnedFields": [
    "priority",
    "application_name",
    "level",
    "comp",
    "s2comp",
    "subcomp"
  ],
  "updatedAt": "2024-05-31T22:17:40+02:00"
}
```

**NSX-T Manager**

```json
{
{
  "displayName": "NSX-T Manager",
  "kindId": "Null",
  "additionalReturnedFields": [
    "priority",
    "application_name",
    "level",
    "comp",
    "s2comp",
    "subcomp"
  ],
  "createdAt": "2024-05-31T22:17:40+02:00",
  "updatedAt": "2024-05-31T22:17:40+02:00",
  "name": "nsxtManager"
}
```

**VCSA**

```json
{
  "name": "vcsa",
  "createdAt": "2024-05-31T22:17:40+02:00",
  "additionalReturnedFields": [
    "priority",
    "application_name",
    "level"
  ],
  "updatedAt": "2024-05-31T22:17:40+02:00",
  "kindId": "Null",
  "displayName": "VCSA"
}
```

**ESXI**

```json
{
  "kindId": "Null",
  "displayName": "esxi",
  "name": "esxi",
  "createdAt": "2024-04-26T22:27:57+02:00",
  "updatedAt": "2024-04-26T22:27:57+02:00",
  "additionalReturnedFields": [
    "level",
    "application_name"
  ]
}
```

**Comment désactiver votre abonnement de souscription Hosted Private Cloud Log Data Platform** ?

> [!primary]
> La résiliation de votre abonnement Hosted Private Cloud LDP ne signifie pas la suppression de vos streams. Le stockage consommé au moment de la désactivation reste soumis à facturation.
>
> **Note** : Il n'est possible (à ce jour) que de supprimer un stream dans son intégralité (en entier) et non certains inputs granulairement.
>

> [!api]
>
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>

> **Paramètres** :
>
> - `serviceName` : Nom de service de votre vSphere managé, e.g `pcc-XXX-XXX-XXX-XXX`.
> - `subscriptionId` : L'ID de souscription de votre abonnement LDP, e.g `c83600f2-e0fb-44c8-8218-c721e3e9efaf`.
>

Retour :

```json
{
 "operationId": "456eb42e-58r6-4cfd-8r5c-ccr97273712r",
 "serviceName": "ldp-vg-XXXX"
}
```

Vous obtiendrez un `operationId` qui est l'identifiant qui permet de confirmer que l'opération de désactivation s'est bien réalisée.

## Aller plus loin

**Glossaire**

- **Logs Data Platform :** plateforme de gestion de logs entièrement gérée et sécurisée par OVHcloud. Pour plus d'informations, consultez [la page de présentation de la solution LDP](/links/manage-operate/ldp).
- **Data Stream :** partition logique de logs que vous créez dans un compte Logs Data Platform et que vous utiliserez lors de l'ingestion, de la visualisation ou de l'interrogation de vos logs. Plusieurs sources peuvent être stockées dans le même flux de données, et c'est l'unité qui peut être utilisée pour définir un pipeline de logs (politique de rétention, archivage, streaming live, etc.), des droits d'accès et des politiques d'alertes.
- **Transfert de logs :** fonctionnalité intégrée à un produit OVHcloud pour ingérer les logs de ses services dans le *Data Stream* d’un compte Logs Data Platform du même compte OVHcloud. Cette fonctionnalité doit être activée par vos soins et pour votre service. Consultez cette partie du guide pour l'activer : [Étape 2 - Souscription de l'abonnement Logs Data Platform pour un vSphere managé via l'API](#activation)
- **Abonnement à la redirection de logs :** lors de l'activation du transfert de logs pour votre service OVHcloud vers un *Data Stream* Logs Data Platform donné, un *abonnement* doit être créé et rattaché au *Data Stream* pour une gestion ultérieure.

Vous pouvez consulter ces guides pour profiter des fonctionnalités Logs Data Platform Hosted Private Cloud :

- [Logs Data Platform - Documentation de premiers pas](/products/observability-logs-data-platform-getting-started)) (EN)
- [Visualiser vos logs dans un tableau de bord Grafana](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana) (EN)
- [Utiliser la cli "LDP Tail" pour regarder en live vos logs Hosted Private Cloud](/pages/manage_and_operate/observability/logs_data_platform/cli_ldp_tail) (EN)
- [Pousser les logs depuis Apache vers LDP](/pages/manage_and_operate/observability/logs_data_platform/ingestion_apache) (EN)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d’utilisateurs](/links/community).
