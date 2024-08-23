---
title: "Logs Data Platform - Transfert des Logs VMware managé"
excerpt: "Découvrez comment activer le transfert de logs (logs forwarding) depuis VMware vSphere managé on OVHcloud vers un flux (stream) Logs Data Platform"
updated: 2024-08-23
---

> [!primary]
> Cette fonctionnalité est actuellement en phase Bêta. Ce guide peut donc être incomplet et pourra faire l'objet de mises à jour.
> 

## Objectif

**L'objectif est de vous montrer comment activer le transfert des logs VMware vSphere managé vers un stream Logs Data Platform.**

## Prérequis

- Disposer d'un [compte client OVHcloud](/links/manager).
- Disposer d'une ou plusieurs ressources Hosted Private Cloud.
- Disposer d'un flux (stream) Logs Data Platform actif sur le même compte et avec le même niveau de sécurité que votre Hosted Private Cloud VMware on OVHcloud.
- Avoir suivi le guide « [Introduction à Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) ».
- Vous devez avoir le `logForwarder` activé. Pour le vérifier, exécutez [l'appel API suivant](#security-options).

> [!primary]
> Consultez le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.
>

## En pratique

> [!primary]
> Prenez en compte que l'activation du **transfert de logs (Log Forwarding)** est gratuite, mais vous serez facturé pour l'utilisation d'un stream Logs Data Platform selon le tarif standard de stockage dans une "Database as a service" (dbaas).
>
> Vos journaux sont manipulés à des fins de sécurité et d'observabilité dans les clusters privés Logs Data Platform. Pour plus d'informations sur la tarification LDP, consultez la page LDP de [ce lien](/links/manage-operate/ldp).
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

### Étape 2 - Souscription de l'abonnement Logs Data Platform

#### Via l'espace client OVHcloud

Cette fonctionnalité n'est pas encore disponible dans la section Hosted Private Cloud de l'espace client OVHcloud.

#### Via l’API OVHcloud <a name="activation"></a>

Pour récupérer le **streamId** de votre compte LDP, consultez le guide « [Premiers pas Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) ».

> [!api]
> 
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
>

> **Paramètres** :
>
> - `serviceName` : Nom du service, par exemple: `pcc-XXX-XXX-XXX-XXX`.
> - `kind` : Type de filtrage journal VMware, par exemple: `esxi`, `nsxtManager`, `vcsa`, `nsxtEdge`.
> - `streamId` : Identifiant du flux (stream) de destination, par exemple: (uuid : `ggb8d894-c491-433e-9c87-50a8bf6fe773`).

Retour :

```json
@api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription

{
 "kind": "esxi", // Le label VMware, les valeurs supportées actuellement sont : `esxi`, `nsxtManager`, `vcsa`, `nsxtEdge`.
 "streamId": "ggb8d894-c491-433e-9c87-50a8bf6fe773", // L'identifiant du stream Logs Data Platform.
}
```

La requête GET permet de lister vos IDs de souscriptions.

### Étape 3 - Création d'un stream Logs Data Platform HPC

> [!primary]
> Les ressources Hosted Private Cloud et Logs Data Platform doivent bien appartenir au même compte OVHcloud.
>

Vous pouvez vous référer à ce guide pour retrouver comment administrer vos flux (streams) depuis l'interface Logs Data Platform : « [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » (EN).

Récupérez le **streamId** et sauvegardez-le (copier-coller). Vous en aurez besoin pour activer votre souscription Hosted Private Cloud avec le stream Logs Data Platform en question.

Nous allons voir dans l'étape suivante comment créer un stream.

### Étape 4 - Administrer vos flux Logs Data Platform

#### Via l'espace client OVHcloud

Vous pouvez vous référer à ce guide pour retrouver comment administrer vos flux (stream) depuis le control panel Log Data Platform : « [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » (EN).

#### Via l’API OVHcloud

Utilisez les appels API suivants pour établir la liste des abonnements de votre compte Hosted Private Cloud.

**Référencement de tous les appels API LDP pour un VMware vSphere managé** :

| **Méthode** | **Chemin**                                                     | **Description**                                                      |
|:-----------:|:---------------------------------------------------------------|:---------------------------------------------------------------------|
|     GET     | /dedicatedCloud/{serviceName}/log/kind                         | Types de logs pour votre service Hosted Private Cloud                |
|     GET     | /dedicatedCloud/{serviceName}/log/kind/{name}                  | Obtenir les propriétés de cet objet.                                 |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription                 | Inscrivez-vous pour votre service Hosted Private Cloud               |
|    POST     | /dedicatedCloud/{serviceName}/log/subscription                 | Créez un abonnement log pour votre service Hosted Private Cloud      |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription                 | Obtenir les propriétés de cet objet.                                 |
|   DELETE    | /dedicatedCloud/{serviceName}/log/subscription                 | Supprimer un abonnement log pour votre service Hosted Private Cloud  |


**Comment obtenir le `subscriptionId`** ?

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
>

> **Paramètres** :
>
> - `serviceName` : nom de service de votre Hosted Private Cloud VMware on OVHcloud sous la forme "pcc-XXX-XXX-XXX-XXX".
> - `kind` : nom du type de log de l'abonnement Hosted Private Cloud (par exemple `esxi`).
>

Exemple de retour :

```json
[
 "9a36b2ec-c7d2-411d-acf8-qb64ccffdb54"
]
```

**Comment désactiver votre abonnement de souscription Hosted Private Cloud Log Data Platform** ?

> [!primary]
> La résiliation de votre abonnement Hosted Private Cloud LDP ne signifie pas la suppression de vos streams. Le stockage consommé au moment de la désactivation reste soumis à facturation.
>
> **Note** : Il n'est possible (à ce jour) que de supprimer un stream dans son intégralité.
>

> [!api]
>
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>

> **Paramètres** :
>
> - `serviceName` : nom de service de votre Hosted Private Cloud VMware on OVHcloud sous la forme "pcc-XXX-XXX-XXX-XXX".
> - `subscriptionId` : nom du type de log de l'abonnement (par exemple `esxi`).
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
