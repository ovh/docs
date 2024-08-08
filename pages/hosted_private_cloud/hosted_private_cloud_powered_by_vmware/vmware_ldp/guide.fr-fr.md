---
title: "Transfert des logs VMware vers un stream Logs Data Platform"
excerpt: "Découvrez comment activer le transfert de logs (logs forwarding) Hosted Private Cloud VMware on OVHcloud vers un stream Logs Data Platform"
updated: 2024-08-08
---

> [!primary]
>
> Cette fonctionnalité est actuellement en phase Bêta. Ce guide peut donc être incomplet et mise à jour.
> 

## Objectif

L'objectif de ce guide est de vous montrer comment activer le transfert des logs de votre Hosted Private Cloud VMware on OVHcloud vers Logs Data Platform (LDP), une plateforme qui vous aide à stocker, archiver, interroger et visualiser vos logs.

## Prérequis

- Disposer d'un [compte client OVHcloud](/links/manager).
- Disposer d'une ou plusieurs ressources Hosted Private Cloud.
- Disposer d'un flux (stream) Logs Data Platform actif sur le même compte et avec le même niveau de sécurité que votre Hosted Private Cloud VMware on OVHcloud.
- Avoir suivi le guide « [Introduction à Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) ».
- Avoir les options de sécurités activées, pour verifier lancer l'appel API [suivant](#security-options)

## Glossaire

- **Logs Data Platform :** plateforme de gestion de logs entièrement gérée et sécurisée par OVHcloud. Pour plus d'informations, consultez [la page de présentation de la solution LDP](/links/manage-operate/ldp).
- **Data Stream :** partition logique de logs que vous créez dans un compte Logs Data Platform et que vous utiliserez lors de l'ingestion, de la visualisation ou de l'interrogation de vos logs. Plusieurs sources peuvent être stockées dans le même flux de données, et c'est l'unité qui peut être utilisée pour définir un pipeline de logs (politique de rétention, archivage, streaming live, etc.), des droits d'accès et des politiques d'alertes.
- **Transfert de logs :** fonctionnalité intégrée à un produit OVHcloud pour ingérer les logs de ses services dans le *Data Stream* d’un compte Logs Data Platform du même compte OVHcloud. Cette fonctionnalité doit être activée par vos soins et pour votre service. Consultez cette partie du guide pour l'activer : [Etape 1 - Comment activer le transfert des journaux via l'API OVHcloud](#activation)
- **Abonnement à la redirection de logs :** lors de l'activation du transfert de logs pour votre service OVHcloud vers un *Data Stream* Logs Data Platform donné, un *abonnement* doit être créé et rattaché au *Data Stream* pour une gestion ultérieure.

## En pratique

> [!primary]
>
> Prenez en compte que l'activation du **transfert de logs (Log Forwarding)** est gratuite, mais vous serez facturé pour l'utilisation du service Logs Data Platform selon le tarif standard.
>
> Pour plus d'informations sur la tarification, consultez la page de l'offre [Logs Data Platform OVHcloud](/links/manage-operate/ldp).
>

L'activation du transfert des logs vers un stream Logs Data Platform permet de collecter, d'indexer et d'analyser les données d'un service Hosted Private Cloud VMware on OVHcloud. Peu importe leur origine, cette plateforme offre une diversité de moyens d'accès en fonction du protocole, du niveau de sécurité et du format désiré. Les données recueillies peuvent être aisément exploitées grâce aux multiples API et interfaces web mises à disposition.

Pour plus d'informations concernant les caractéristiques techniques de Logs Data Platform (ports, protocoles, etc.), nous vous invitons à consulter le guide « [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » (EN).

### Les logs et labels

#### Les *kinds* disponibles

Un *kind* est un « type » de logs que votre produit génère.

Ils sont les types de logs que vous voulez transférer à votre stream Logs Data Platform. Voici des exemples qui peuvent être disponibles en fonction des composants de votre architecture Hosted Private Cloud VMware on OVHcloud :

- **esxi** : filtré par application.
- **nsxtEdge** : tout est redirigé, pas de filtre.
- **vcsa** : filtré par application.
- **nsxtManager** : filtré par application.

Sachez qu'il est tout à fait acceptable qu'un produit ne possède qu'une seule catégorie.

**Remarques** :

- Tous les logs VMware sont collectés et envoyés aux clusters Logs Data Platform.
- Tous les logs des applications VMware sont traités et marqués au niveau de Logs Data Platform.

Nous fournissons toutes les métadonnées pour l'identification de Hosted Private Cloud VMware on OVHcloud.

### Étape 1 - Vérification des options de sécurités <a name="security-options"></a>

> [!warning]
>
> Si le call API renvoi "disabled", contactez le support OVHcloud.
>

#### Via l'API OVHcloud :

Pour vérifier si les options de sécurité sont présentes pour permettre l'activation de la fonctionnalité au sein de votre HPC VMware vSphere managé on OVHcloud, lancer l'appel API suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/securityOptions/dependenciesTree
>
>
> **Paramètre** :
>
> - `serviceName` : Votre PCC sous la forme, "pcc-XXX-XXX-XXX-XXX".
> - `option` : Avec `sendLogToCustomer` allowed.
> 

Exemple de retour si l'option est "activé" :

```Shell
 {
 "state": "delivered"
 }
```

Exemple de retour si l'option est en cours "d'activation" :

```Shell
 {
 "state": "creating"
 }
```

Exemple de retour si l'option n'est "pas activé" :

```Shell
 {
 "state": "disabled"
 }
```

### Étape 2 - Activation du transfert des logs Hosted Private Cloud

> [!primary]
> 
> Les ressources Hosted Private Cloud et LDP doivent appartenir au même compte OVHcloud.
>
> Vous devez avoir préalablement créer un stream Logs Data Platform.
>

### Création d'un stream Logs Data Platform

#### Via l'espace client OVHcloud

Vous pouvez vous référer à ce guide pour retrouver comment administrer vos flux (streams) depuis l'interface Logs Data Platform : « [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » (EN).

Récupérez le **streamId** et sauvegardez-le (copier-coller). Vous en aurez besoin pour activer votre souscription Hosted Private Cloud avec le stream Logs Data Platform en question.

### Étape 1 - Activation de l'abonnement Logs Data Platform Hosted Private Cloud

#### Via l'espace client OVHcloud

Cette fonctionnalité n'est pas encore disponible dans la section Hosted Private Cloud de l'espace client OVHcloud.

#### Via l’API OVHcloud <a name="activation"></a>

> [!success]
>
> Consultez le guide [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) pour vous familiariser avec l'utilisation des APIv6 OVHcloud.
>

Pour récupérer le **streamId** de votre compte LDP, consultez le guide « [Premiers pas Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) ».

> [!api]
> 
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
>

> **Paramètres :**
>
> - `serviceName` : nom de service de votre Hosted Private Cloud VMware on OVHcloud, sous la forme "pcc-XXX-XXX-XXX-XXX".
> - `kind` : nom du type de journal de l'abonnement, par exemple `esxi`, `nsxtManager`, `vcsa`, `nsxtEdge`.
> - `streamId` : identifiant du flux (stream) de destination, (uuid : `ggb8d894-c491-433e-9c87-50a8bf6fe773`).
>

- Exemple :

```shell
@api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription

{
  "kind": "esxi", // Le label VMware, les valeurs supportées actuellement sont : ["esxi","nsxtManager","vcsa","nsxtEdge"].
  "streamId": "ggb8d894-c491-433e-9c87-50a8bf6fe773", // L'identifiant du stream LDP.
}
```

La requête GET permet de lister vos souscriptions.

### Étape 3 - Administrer vos stream Logs Data Platform

#### Via l'espace client OVHcloud

Vous pouvez vous référer à ce guide pour retrouver comment administrer vos flux (stream) depuis le control panel Log Data Platform : « [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) » (EN).

#### Via l’API OVHcloud

Utilisez les appels API suivants pour établir la liste des abonnements de votre compte Hosted Private Cloud.

**Référencement de tous les appels API Hosted Private Cloud VMware on OVHcloud** :

| **Méthode** |                   **Chemin**                   |                     **Description**                     |
|:-----------:|:----------------------------------------------:|:-------------------------------------------------------:|
|     GET     |     /dedicatedCloud/{serviceName}/log/kind     |        Types de logs pour votre service Hosted Private Cloud        |
|     GET     | /dedicatedCloud/{serviceName}/log/kind/{name}  |          Obtenir les propriétés de cet objet.           |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription |       Inscrivez-vous pour votre service Hosted Private Cloud        |
|    POST     | /dedicatedCloud/{serviceName}/log/subscription |   Créez un abonnement log pour votre service Hosted Private Cloud   |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription |          Obtenir les propriétés de cet objet.           |
|   DELETE    | /dedicatedCloud/{serviceName}/log/subscription | Supprimer un abonnement log pour votre service Hosted Private Cloud |


- Obtenir le `subscriptionId`

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

```shell
[
  "9a36b2ec-c7d2-411d-acf8-qb64ccffdb54"
]
```

- Désactiver votre abonnement de souscription Hosted Private Cloud Log Data Platform :

> [!primary]
> 
> La résiliation de votre abonnement Hosted Private Cloud LDP ne signifie pas la suppression de vos stream. Le stockage consommé au moment de la désactivation reste soumis à facturation.
>
> **Remarque** : Il n'est possible (à ce jour) de supprimer qu'un stream en entier.
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

Vous obtiendrez un `operationId` qui est l'identifiant qui permet de confirmer que l'opération de désactivation s'est bien réalisée.

Retour :

```shell
{
  "operationId": "456eb42e-58r6-4cfd-8r5c-ccr97273712r",
  "serviceName": "ldp-vg-XXXX"
}
```

## Aller plus loin

Vous pouvez consulter ces guides pour profiter des fonctionnalités Logs Data Platform Hosted Private Cloud :

- [Logs Data Platform - Documentation de premiers pas](/products/observability-logs-data-platform-getting-started)) (EN)
- [Visualiser vos logs dans un tableau de bord Grafana](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana) (EN)
- [Utiliser la cli "LDP Tail" pour regarder en live vos logs Hosted Private Cloud](/pages/manage_and_operate/observability/logs_data_platform/cli_ldp_tail) (EN)
- [Pousser les logs depuis Apache vers LDP](/pages/manage_and_operate/observability/logs_data_platform/ingestion_apache) (EN)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d’utilisateurs](/links/community).
