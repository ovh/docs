---
title: Ajout d'un nœud dans un Cluster NUTANIX
slug: add-node
excerpt: 'Ajouter un nœud et valider son bon fonctionnement'
section: "Utilisation avancée"
order: 03
---

**Dernière mise à jour le 31/03/2022**

## Objectif

Les clusters Nutanix sont évolutifs il est possible de rajouter un nœud (Un serveur physique) dans un cluster existant

**Ce guide vous explique comment ajouter ce nœud et valider son bon fonctionnement**.


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> Certaines options comme l'utilisation de la compression ou de la déduplication nécessitent des licences particulières fournies par Nutanix au travers d'OVHcloud, nous vous invitons à vous renseigner auprès du service commercial OVHcloud pour plus d'informations.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur le cluster via Prism Central.
- Un serveur physique prêt à être configuré préparé par les équipes d'OVHCloud

## En Pratique

Un cluster de 3 nœuds va être étendu avec un nœud supplémentaire.

Connectez-vous à **Prism Element** au travers de **Prism Central** pour plus d'informations sur la connexion au cluster reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide. 

Sur le tableau de bord les 3 nœuds sont visibles dans `Hardware Summary`, Cliquez sur `View Details`{.action} au milieu à gauche pour faire apparaitre plus de détail.

![Display dashboard before Expansion](images/DisplayDashboardBefore.PNG){.thumbnail}

Une vue plus détaillée apparait avec des informations comme l'espace total et la capacité de résilience sur le stockage. Cliquez sur `Close`{.action} pour fermer cette fenêtre.

![Cluster detail before Expansion](images/ClusterDetailBeforeFromDashboard.PNG){.thumbnail}

Cliquez sur le menu `Home`{.action} et choisisissez `Health`{.action} pour faire une analyse avant le rajout du nœud.

![NCC check before Expansion 01](images/CheckBeforeAdd01.PNG){.thumbnail}

Cliquez en haut à droite sur `Actions`{.action} et choisissez `Run NCC Check`{.action}.

![NCC check before Expansion 02](images/CheckBeforeAdd02.PNG){.thumbnail}

Cliquez sur `Run`{.action} pour lancer un contrôle. et attendre que le contrôle soit terminée

![NCC check before Expansion 03](images/CheckBeforeAdd03.PNG){.thumbnail}

















## Aller plus loin <a name="gofurther"></a>


[Hyperconvergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)



[Guide Nutanix d'ajout d'un noeud](https://portal.nutanix.com/page/documents/details?targetId=Web-Console-Guide-Prism-v5_20:wc-cluster-expand-wc-t.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

