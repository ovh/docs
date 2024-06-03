---
title: "Transfert des logs (Logs Forwarding) généré par l'offre Hosted Private Cloud"
excerpt: "Découvrez comment transférer les logs d'un Hosted Private Cloud vers un flux (stream) Logs Data Platform"
updated: 2024-06-03
---

## Objectif

L'objectif de ce guide est de vous montrer comment activer le transfert des logs de votre PCC Private Cloud vers Logs Data Platform (LDP), une plateforme qui vous aide à stocker, archiver, interroger et visualiser vos logs.

Si vous souhaitez en savoir plus sur Logs Data Platform avant de lire ce guide, reportez-vous au guide suivant : ["Introduction à Logs Data Platform"](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

## Prérequis
- Disposer d'un compte client OVHcloud.
- Disposer d'une ou plusieurs ressources Hosted Private Cloud.
- Avoir au moins un Stream actif configurait sur le compte LDP pour recevoir les logs.
- Les ressources Hosted Private Cloud et Logs Data Plateform doivent appartenir au même compte OVHcloud.
- Disposer de flux (stream) LDP du même niveau de sécurité que votre infrastructure Hosted Private Cloud.
- Avoir au moins un stream LDP actif.

## Concepts et limites

### Glossaire
- **Logs Data Platform :** Plateforme de gestion de logs entièrement gérée et sécurisée par OVHcloud. Pour plus d'informations, consultez la page de présentation de la solution [Logs Data Platform](https://www.ovhcloud.com/fr/logs-data-platform/){.external}
- **Data Stream :** Partition logique de logs que vous créez dans un compte LDP et que vous utiliserez lors de l'ingestion, de la visualisation ou de l'interrogation de vos logs. Plusieurs sources peuvent être stockées dans le même flux de données, et c'est l'unité qui peut être utilisée pour définir un pipeline de logs (politique de rétention, archivage, streaming live, etc.), des droits d'accès et des politiques d'alertes.
- **Transfert de logs :** Fonctionnalité intégrée à un produit OVHcloud pour ingérer les logs de ses services dans le *Data Stream* d’un compte LDP du même compte OVHcloud. Cette fonctionnalité doit être activée par vos soins et pour votre service.
- **Abonnement à la redirection de logs :** Lors de l'activation du transfert de logs pour votre service OVHcloud vers un LDP *Data Stream* donné, un *abonnement* doit être créé et rattaché au *Data Stream* pour une gestion ultérieure.

## En pratique

> [!primary]
> 
> Prenez en compte que l'activation du **transfert de logs (Log Forwarding)** est gratuite, mais vous serez facturé pour l'utilisation du service Logs Data Platform selon le tarif standard. Pour la tarification du LDP, consultez [la page Logs Data Plateform du site OVHcloud.](https://www.ovhcloud.com/fr/logs-data-platform/).
>

Logs Data Platform est une interface de collecte, d'indexation et d'analyse de logs. Quelque-soit la provenance de vos logs, la plateforme vous permet de choisir différents points d'entrée en fonction du protocole, du niveau de sécurité et du format. L'analyse et l'exploitation des données peuvent se faire grâce à différentes API et interfaces web.

Pour plus d'information sur les caractéristique technique de Logs Data Plateform (ports, protocoles, etc..), vous pouvez vous référer au guide : ["Premiers pas | Bien commencer avec Logs Data Plateform".](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

### Les journaux et labels

#### Kind

Voici des exemples de labels "kind" disponible avec Hosted Private Cloud VMware on OVHcloud et Logs Data Plateform :

Disponible en fonction des composants de votre architecture :

- **esxi** : Filtré par application.
- **nsxtEdge** : Tout est redirigé, pas de filtre.
- **vcsa** : Filtré par application.
- **nsxtManager** : Filtré par application.

Les kind sont le type de journal que vous voulez transférer à votre stream Logs Data Plateform. Notez que la seule valeur actuellement prise en charge aujourd'hui pour Hosted Private Cloud est **"esxi"**.

Sachez qu'il est tout à fait acceptable qu'un produit ne possède qu'une seule catégorie.

- Tous les journaux VMware sont collectés et envoyés aux clusters Logs Data Plateform.
- Tous les journaux des appliances VMware sont traités par les "Forwarder" Syslog et marqués par le filtre (Logstash) au niveau du cluster Logs Data Plateform.

Nous mettons toutes les métadonnées pour l'identification de Hosted Private Cloud VMware on OVHcloud.

La première chose dont vous avez besoin est de créer un ou plusieurs types de logs. Un Kind est un « type » de logs que votre produit génère. Cela dépend vraiment de votre logique établit.

Pour un produit Hosted Private Cloud, il est possible d'imaginer 3 types de logs :

1. Les logs Kernel.
2. Les logs Auth.
3. Les logs Cron.

### Etape 1 - Audit Log Forwarding avec Hosted Private Cloud

> [!primary]
> 
> Les ressources Hosted Private Cloud et LDP doivent appartenir au même compte OVHcloud.
>
> Vous devez avoir préalablement créer un stream Logs Data Plateform.
>

### Création d'un stream Logs Data Plateform pour votre Hosted Private Cloud

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans le control panel Hosted Private Cloud VMware on OVHcloud.

Pour créer un stream depuis l'interface Logs Data Plateform, suivez le guide : [Premiers pas Logs Data Plateform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

### Création de l'abonnement Logs Data Plateform pour votre Hosted Private Cloud

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans le control panel Hosted Private Cloud VMware on OVHcloud.

#### Via l’API OVHcloud :

> [!primary]
>
>  Trouvez plus d'information sur les appels API OVHcloud : [Premiers pas avec l'API OVHcloud](/pages/manage_and_operate/api/first-steps).
>

#### Via l’API OVHcloud :

Pour récuperer le streamid de votre compte LDP, suivez le guide : [Premiers pas Logs Data Plateform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

> [!api]
> 
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription
>
> **Paramètres :**
>
> **serviceName** : Domaine du service (pcc-XXX-XXX-XXX-XXX).
> 
> **kind** : Nom de type de journal de l'abonnement ("esxi").
>
> **streamId** : Id du flux du journal de destination (uuid :"ggb8d894-c491-433e-9c87-50a8bf6fe773").
>

Exemple :

```shell
@api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/log/subscription

{
  "kind": "string", // Le label VMware, la seul valeur supporté actuellement est : 'esxi'.
  "streamId": "ggb8d894-c491-433e-9c87-50a8bf6fe773", // L'identifiant du flux (stream) LDP.
}
```

La requête GET permet de lister vos souscriptions.

### Etape 2 - Administrer vos flux (stream) Logs Data Plateform avec Hosted Private Cloud

#### Via le control panel OVHcloud :

Cette fonctionnalité n'est pas encore disponible dans le control panel Hosted Private Cloud VMware on OVHcloud.

Pour manager vos stream depuis l'interface Logs Data Plateform, suivez le guide : [Premiers pas Logs Data Plateform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).

#### Via l’API OVHcloud

Utilisez les appels API suivant pour lister les abonnements de votre compte LDP avec Hosted Private Cloud :

![LDP CALL API](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ldp/images/LDP_API_CALL_LISTING.png){.thumbnail}

Obtenir le **subscriptionId** :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/log/subscription
>
> **Paramètres :**
>
> **serviceName** : Domaine du service (pcc-XXX-XXX-XXX-XXX).
>
> **kind** : Nom de type de journal de l'abonnement ("esxi").
>


Exemple de retour :

```shell
[
  "9a36b2ec-c7d2-411d-acf8-qb64ccffdb54"
]
```

Supprimer votre abonnement de souscription Hosted Private Cloud :

> [!warning]
> 
> Prenez garde, il vous est impossible de faire machine arrière une fois cette opération effectuée.
>

> [!api]
>
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/log/subscription/{subscriptionId}
>
> **Paramètres :**
>
> **serviceName** : Domaine du service (pcc-XXX-XXX-XXX-XXX).
>
> **subscriptionId** : Nom de type de journal de l'abonnement ("esxi").
>

Vous obtiendrez l'**operationId**, qui est l'identifiant que l'opération de suppression s'est bien effectué.

Retour :

```Shell
{
  "operationId": "456eb42e-58r6-4cfd-8r5c-ccr97273712r",
  "serviceName": "ldp-vg-XXXX"
}
```

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
