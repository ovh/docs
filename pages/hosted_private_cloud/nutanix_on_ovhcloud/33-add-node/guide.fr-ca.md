---
title: "Ajout d'un nœud dans un cluster Nutanix"
excerpt: 'Ajouter un nœud et valider son bon fonctionnement'
hidden: true
kb: Hosted Private Cloud
category_l1: Nutanix on OVHcloud
category_l2: Advanced usage
updated: 2023-09-14
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objectif

Les clusters Nutanix sont évolutifs. Il est possible de rajouter des nœuds dans un cluster existant.

**Ce guide vous explique comment ajouter un nœud et valider son bon fonctionnement.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à l'équipe [Professional Services OVHcloud](https://www.ovhcloud.com/fr-ca/professional-services/) ou à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/directory/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Être connecté sur la page des [API OVHcloud](https://ca.api.ovh.com/).
- Être connecté sur le cluster via Prism Central.
- Un serveur physique prêt à être configuré ajouté dans l'espace client OVHCloud.

## Informations techniques

La solution **Nutanix on OVHcloud** permet d'avoir entre 3 et 18 nœuds sur le même cluster.

Il est possible d'ajouter plusieurs nœuds lors de l'expansion du cluster.

Les nœuds à rajouter doivent avoir la même version d'**AOS** que ceux du cluster existant.

## En pratique

### Vérification de la livraison du nœud.

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et vérifiez qu'un nœud supplémentaire apparaît bien dans le cluster Nutanix.

![Nouveau Noeud](images/scaleup1.png){.thumbnail}

Vous pouvez également le vérifier via l'API OVHcloud.

Utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /nutanix GET /nutanix/{serviceName}
>

- `serviceName` : saisissez le nom du cluster

![Nouveau Noeud via APIV6](images/scaleup2.png){.thumbnail}

Le nouveau nœud apparaît avec des IP en 0.0.0.0.

### Installation du Noeud.

Pour installer le nouveau nœud, vous devez modifier les propriété du cluster en faisant un `PUT` sur le cluster.

Pour cela, utilisez l'appel API suivant :

> [!api]
>
> @api {v1} /nutanix PUT /nutanix/{serviceName}
>

> [!warning]
> Veillez à décochez la case `redeployCluster`.

Cochez la case `scaleUp`.
Saisissez les informations suivantes en dessous de **nodes** :

- **ahvip** : Adresse IP de l'hyperviseur du nouveau nœud.
- **cvmip** : Adresse IP de la CVM du nouveau nœud.

> [!warning]
> Ces adresses IP ne doivent pas être déjà utilisées et doivent correpondre à votre plan d'adressage.

Vous devez également compléter la version de deployment. Elle peut ne pas correspondre avec la version courante de votre cluster. Cela ne pose pas de problèmes, le nœud sera modifié par le processus d'ajout dans le cluster via Prism Element.

![PUT scaleUp via APIV6](images/scaleup3.png){.thumbnail}

Cliquez sur `Execute`{.action} pour envoyer la requête.

Dans l'onglet « Result », le nouveau nœud apparaît avec la nouvelle adresse IP.

A la fin de l'installation, vous recevrez un email pour vous indiquer que le nœud est prêt.

<pre class="bgwhite"><code>
Dear Customer,

Your server has just been installed.

You must now add it back to your Nutanix cluster by connecting to Prism Central: https://cluster-xxxx.nutanix.ovh.net:9440

We remain at your disposal for any further information.

The OVHcloud Team
</code></pre>

### Ajout d'un nœud dans un cluster Nutanix.

Connectez-vous à **Prism Element** au travers de **Prism Central**.

Pour plus d'informations sur la connexion au cluster, reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide. 

Sur le tableau de bord, les 3 nœuds sont visibles dans `Hardware Summary`. Cliquez sur `View Details`{.action} au milieu à gauche pour faire apparaître plus de détails.

![Display dashboard before Expansion](images/DisplayDashboardBefore.PNG){.thumbnail}

Une vue plus détaillée est affichée avec des informations comme l'espace total et la capacité de résilience du stockage.<br>
Cliquez sur `Close`{.action} pour fermer cette fenêtre.

![Cluster detail before Expansion](images/ClusterDetailBFromDashboard.PNG){.thumbnail}

Ouvrez le menu `Home`{.action} et choisissez `Health`{.action} pour faire une analyse du cluster avant le rajout du nœud.

![NCC check before Expansion 01](images/CheckBeforeAdd01.PNG){.thumbnail}

Cliquez en haut à droite sur `Actions`{.action} et choisissez `Run NCC Check`{.action}.

![NCC check before Expansion 02](images/CheckBeforeAdd02.PNG){.thumbnail}

Cliquez sur `Run`{.action} pour lancer un contrôle et attendez que l'opération soit terminée.

![NCC check before Expansion 03](images/CheckBeforeAdd03.PNG){.thumbnail}

Après le contrôle, cliquez sur l'icône `Engrenage`{.action} en haut à droite pour modifier les paramètres.

![Add Node 01](images/AddNode01.PNG){.thumbnail}

Cliquez sur `Expand Cluster`{.action}.

![Add Node 02](images/AddNode02.PNG){.thumbnail}

Cochez la case à coté de l'hôte découvert afin de faire apparaître les détails du nœud.

![Add Node 03](images/AddNode03.PNG){.thumbnail}

Faites défiler la barre de défilement pour voir les options.

![Add Node 04](images/AddNode04.PNG){.thumbnail}

Continuez le défilement jusqu'en bas de la fenêtre et cliquez sur `Next`{.action}.

![Add Node 05](images/AddNode05.PNG){.thumbnail}

Choisissez le Rack dans `Assign to Rack` et cliquez sur `Next`{.action}.

![Add Node 06](images/AddNode06.PNG){.thumbnail}

Cliquez sur `Expand Cluster`{.action}.

![Add Node 07](images/AddNode07.PNG){.thumbnail}

Cliquez sur `Open`{.action} pour voir le détail de l'expansion du cluster.

![Add Node 08](images/AddNode08.PNG){.thumbnail}

![Add Node 09](images/AddNode09.PNG){.thumbnail}

L'ajout du nœud est terminée lorsque la progression de *Expanding Cluster* est à 100%.

![Add Node 10](images/AddNode10.PNG){.thumbnail}

Quatre nœuds sont visibles dans `Hardware Summary`, cliquez sur `View Details`{.action} pour afficher plus d'informations.

![Display dashbord after expansion](images/DisplayDashboardAfter.PNG){.thumbnail}

Cliquez sur `Close`{.action} pour revenir au tableau de bord.

![Cluster detail after Expansion](images/ClusterDetailAfterFromDashboard.PNG){.thumbnail}

## Aller plus loin <a name="gofurther"></a>

[Hyper-convergence Nutanix](/pages/hosted_private_cloud/nutanix_on_ovhcloud/03-nutanix-hci)

[Guide Nutanix d'ajout de nœuds](https://portal.nutanix.com/page/documents/details?targetId=Web-Console-Guide-Prism-v5_20:wc-cluster-expand-wc-t.html)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
