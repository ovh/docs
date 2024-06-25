---
title: "Transfert des logs VMware vers un stream Logs Data Platform"
excerpt: "Découvrez comment activer le transfert de logs (logs forwarding) Hosted Private Cloud VMware on OVHcloud vers un stream Logs Data Platform"
updated: 2024-06-25
---

## Objectif

L'objectif de ce guide est de vous montrer comment activer le transfert des logs de votre Hosted Private Cloud VMware on OVHcloud vers Logs Data Platform (LDP), une plateforme qui vous aide à stocker, archiver, interroger et visualiser vos logs.

## Prérequis
- Disposer d'un compte client OVHcloud.
- Disposer d'une ou plusieurs ressources Hosted Private Cloud.
- Disposer d'un flux (stream) Logs Data Platform actif du même compte et niveau de sécurité que votre Hosted Private Cloud VMware on OVHcloud.
- Avoir suivi le guide : ["Introduction à Logs Data Platform".](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)

## Concepts et limites

### Glossaire
- **Logs Data Platform :** Plateforme de gestion de logs entièrement gérée et sécurisée par OVHcloud. Pour plus d'informations, consultez la page de présentation de la solution LDP <https://www.ovhcloud.com/fr/logs-data-platform/>.
- **Data Stream :** Partition logique de logs que vous créez dans un compte Logs Data Platform et que vous utiliserez lors de l'ingestion, de la visualisation ou de l'interrogation de vos logs. Plusieurs sources peuvent être stockées dans le même flux de données, et c'est l'unité qui peut être utilisée pour définir un pipeline de logs (politique de rétention, archivage, streaming live, etc.), des droits d'accès et des politiques d'alertes.
- **Transfert de logs :** Fonctionnalité intégrée à un produit OVHcloud pour ingérer les logs de ses services dans le *Data Stream* d’un compte Logs Data Platform du même compte OVHcloud. Cette fonctionnalité doit être activée par vos soins et pour votre service, consultez cette partie du guide pour l'activer : [Etape 1 - Comment activer le transfert des journaux via l'API OVHcloud ?](#Activation)
- **Abonnement à la redirection de logs :** Lors de l'activation du transfert de logs pour votre service OVHcloud vers un *Data Stream* Logs Data Platform donné, un *abonnement* doit être créé et rattaché au *Data Stream* pour une gestion ultérieure.

## En pratique

> [!primary]
> 
> Prenez en compte que l'activation du **transfert de logs (Log Forwarding)** est gratuite, mais vous serez facturé pour l'utilisation du service Logs Data Platform selon le tarif standard. 
> 
> Pour la tarification, consultez la page de l'offre : [Logs Data Platform OVHcloud.](https://www.ovhcloud.com/fr/logs-data-platform/){.external}.
>

L'activation du transfert des logs vers un stream Logs Data Platform permet de collecter, d'indexer et d'analyser les informations Hosted Private Cloud VMware on OVHcloud. Peu importe leur origine, cette plateforme offre une diversité de moyens d'accès en fonction du protocole, du niveau de sécurité et du format désiré. Les données recueillies peuvent être aisément exploitées grâce aux multiples API et interfaces web mises à disposition.

Pour de plus amples informations concernant les caractéristiques techniques de Logs Data Platform (ports, protocoles, etc.), nous vous invitons à consulter le guide : ["Premiers pas | Bien commencer avec Logs Data Platform".](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

### Les journaux et labels

#### Kind disponible

Un Kind est un « type » de logs que votre produit génère.

Ils sont le type de journal que vous voulez transférer à votre stream Logs Data Platform. Voici des exemples qui peuvent être disponible en fonction des composants de votre architecture Hosted Private Cloud VMware on OVHcloud :

- **esxi** : Filtré par application.
- **nsxtEdge** : Tout est redirigé, pas de filtre.
- **vcsa** : Filtré par application.
- **nsxtManager** : Filtré par application.

Sachez qu'il est tout à fait acceptable qu'un produit ne possède qu'une seule catégorie.

**Remarques** :
- Tous les journaux VMware sont collectés et envoyés aux clusters Logs Data Platform.
- Tous les journaux des appliances VMware sont traités et marqués au niveau de Logs Data Platform.

Nous mettons toutes les métadonnées pour l'identification de Hosted Private Cloud VMware on OVHcloud.

Avec Hosted Private Cloud (Dedicated Server), il est possible d'imaginer 3 types de logs.

Par exemple :

1. Les logs Kernel.
2. Les logs Auth.
3. Les logs Cron.

### Etape 1 - Activation du transfert des journaux Hosted Private Cloud

> [!primary]
> 
> Les ressources Hosted Private Cloud et LDP doivent appartenir au même compte OVHcloud.
>
> Vous devez avoir préalablement créer un stream Logs Data Platform.
>

### Création d'un stream Logs Data Platform

#### Via le control panel OVHcloud :

Vous pouvez vous référer à ce guide et retrouver comment administrer vos flux (stream) depuis le control panel Log Data Platform : [Premiers pas | Commencement avec Logs Data Platform.](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

Vous pouvez récupérer le **streamId** et le mettre de côté (copier-coller). Vous en aurez besoin pour activer votre souscription Hosted Private Cloud avec le stream Logs Data Platform en question.

### Activation de l'abonnement Logs Data Platform Hosted Private Cloud

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans le control panel Hosted Private Cloud.

#### Via l’API OVHcloud <a name="Activation"></a>

> [!primary]
>
>  Trouvez plus d'information sur les appels API OVHcloud : [Premiers pas avec l'API OVHcloud](/pages/manage_and_operate/api/first-steps).
>

Pour récupérer le **streamId** de votre compte LDP, suivez le guide : [Premiers pas Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

> [!api]
> 
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
>
> **Paramètres :**
>
> - **serviceName** : Nom de service de votre Hosted Private Cloud VMware on OVHcloud, (pcc-XXX-XXX-XXX-XXX).
> 
> - **kind** : Nom du type de journal de l'abonnement, ["esxi","nsxtManager","vcsa","nsxtEdge"].
>
> - **streamId** : Identifiant du flux (stream) de destination, (uuid :"ggb8d894-c491-433e-9c87-50a8bf6fe773").
>

Exemple :

```shell
@api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription

{
  "kind": "esxi", // Le label VMware, les valeurs supportées actuellement sont : ["esxi","nsxtManager","vcsa","nsxtEdge"].
  "streamId": "ggb8d894-c491-433e-9c87-50a8bf6fe773", // L'identifiant du stream LDP.
}
```

La requête GET permet de lister vos souscriptions.

### Etape 2 - Administrer vos stream Logs Data Platform 

#### Via le control panel OVHcloud :

Vous pouvez vous référer à ce guide et retrouver comment administrer vos flux (stream) depuis le control panel Log Data Platform : [Premiers pas | Commencement avec Logs Data Platform.](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

#### Via l’API OVHcloud :

Veuillez utiliser les appels API suivants pour établir la liste des abonnements de votre compte Hosted Private Cloud.

**Référencement de tous les appels API Hosted Private Cloud VMware on OVHcloud :**

| **Méthode** |                   **Chemin**                   |                     **Description**                     |
|:-----------:|:----------------------------------------------:|:-------------------------------------------------------:|
|     GET     |     /dedicatedCloud/{serviceName}/log/kind     |        Types de logs pour votre dedicated cloud.        |
|     GET     | /dedicatedCloud/{serviceName}/log/kind/{name}  |          Obtenir les propriétés de cet objet.           |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription |       Inscrivez-vous pour votre dedicated cloud.        |
|    POST     | /dedicatedCloud/{serviceName}/log/subscription |   Créez un abonnement log pour votre dedicated cloud.   |
|     GET     | /dedicatedCloud/{serviceName}/log/subscription |          Obtenir les propriétés de cet objet.           |
|   DELETE    | /dedicatedCloud/{serviceName}/log/subscription | Supprimer un abonnement log pour votre dedicated cloud. |


#### Obtenir le "subscriptionId"

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
>
> **Paramètres :**
>
> - **serviceName** : Nom de service de votre Hosted Private Cloud VMware on OVHcloud, (pcc-XXX-XXX-XXX-XXX).
>
> - **kind** : Nom du type de journal de l'abonnement Hosted Private Cloud ("esxi").
>

Exemple de retour :

```shell
[
  "9a36b2ec-c7d2-411d-acf8-qb64ccffdb54"
]
```

Désactiver votre abonnement de souscription Hosted Private Cloud Log Data Platform :

> [!primary]
> 
> La résiliation de votre abonnement Hosted Private Cloud LDP ne comporte pas la suppression de vos stream. Le stockage consommé au moment de la désactivation reste soumis à facturation.
>
> **Remarque** : Il n'est possible (à ce jour) que de supprimer un stream en entier.
>

> [!api]
>
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>
> **Paramètres :**
>
> - **serviceName** : Nom de service de votre Hosted Private Cloud VMware on OVHcloud, (pcc-XXX-XXX-XXX-XXX).
>
> - **subscriptionId** : Nom de type de journal de l'abonnement ("esxi").
>

Vous obtiendrez l'**operationId**, qui est l'identifiant qui permet de confirmer que l'opération de désactivation s'est bien réalisé.

Retour :

```Shell
{
  "operationId": "456eb42e-58r6-4cfd-8r5c-ccr97273712r",
  "serviceName": "ldp-vg-XXXX"
}
```

## Aller plus loin

Vous pouvez suivre ces guides pour profiter des fonctionnalités Logs Data Platform Hosted Private Cloud :
- [Logs Data Platform - Listing guides premiers pas avec Logs Data Platform](https://help.ovhcloud.com/csm/fr-documentation-observability-logs-data-platform-getting-started?id=kb_browse_cat&kb_id=3d4a8129a884a950f07829d7d5c75243&kb_category=e3eec38c1977a5d0476b930e789695d0&spa=1){.external}
- [Visualiser vos logs dans un tableau de bord Grafana](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana).
- [Utiliser la cli "LDP Tail" pour regarder en live vos logs Hosted Private Cloud](/pages/manage_and_operate/observability/logs_data_platform/cli_ldp_tail).
- [Pousser les logs depuis Apache vers LDP](/pages/manage_and_operate/observability/logs_data_platform/ingestion_apache).

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/){.external} pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d’utilisateurs](/links/community.
