---
title: "Ajout d'un nœud dans un cluster Nutanix"
slug: add-node
excerpt: 'Ajouter un nœud et valider son bon fonctionnement'
section: "Utilisation avancée"
order: 03
hidden: true
kb: Hosted Private Cloud
category_l1: Nutanix on OVHcloud
category_l2: Advanced usage
---

**Dernière mise à jour le 07/04/2022**

## Objectif

Les clusters Nutanix sont évolutifs. Il est possible de rajouter des nœuds dans un cluster existant.

**Ce guide vous explique comment ajouter un nœud et valider son bon fonctionnement.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Être connecté sur le cluster via Prism Central.
- Un serveur physique prêt à être configuré ajouté dans l'espace client OVHCloud.

## Informations techniques

La solution **Nutanix on OVHcloud** permet d'avoir entre 3 et 18 nœuds sur le même cluster.

Il est possible d'ajouter plusieurs nœuds lors de l'expansion du cluster.

Les nœuds à rajouter doivent avoir la même version d'**AOS** que ceux du cluster existant.

## En pratique

### Ajout d'un nœud dans un cluster Nutanix.

Connectez-vous à **Prism Element** au travers de **Prism Central**.

Pour plus d'informations sur la connexion au cluster; reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide. 

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

[Hyper-convergence Nutanix](https://docs.ovh.com/ca/fr/nutanix/nutanix-hci/)

[Guide Nutanix d'ajout de nœuds](https://portal.nutanix.com/page/documents/details?targetId=Web-Console-Guide-Prism-v5_20:wc-cluster-expand-wc-t.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.