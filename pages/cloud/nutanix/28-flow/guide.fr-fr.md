---
title: Nutanix Flow
slug: flow
excerpt: "Sécurisation du réseau à l'intérieur d'un CLUSTER au travers de FLOW"
section: Réseau et sécurité
order: 09
---

**Dernière mise à jour le 01/03/2022**

## Objectif

Connaitre et utiliser Nutanix Flow pour la sécurisation réseau à l'intérieur d'un cluster Nutanix.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Présention de de **Nutanix Flow**

Cette option est disponible dans toutes les offres **Hosted Private Cloud Powered by Nutanix**. Elle permet de protéger le réseau à l'interieur d'un ou plusieurs cluster Nutanix gérés par **Prism Central**.

Il est possible :

* de mettre en quarantaine des machines virtuelles de manière stricte sans laisser la possibilité d'avoir accès au réseau ou d'une manière moins stricte en permettant l'accès à des outils de diagnostics disponibles sur d'autres machines virtuelles.
* D'isoler des machines virtuelles entre elles.
* De faire des règles d'applications comme par exemple des bases de données ou des serveurs web en n'autorisant l'accès qu'a certains types de machines virtuelles ou de réseaux.
* De bloquer l'accès à certaines machines virtuels pour du **VDI** avec des comptes ou des groupes d'un active directory. 

## En pratique

Nous allons configurez **Nutanix Flow**.

Connectez-vous à **Prism Central**.

Pour plus d'informations sur la connexion au cluster reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide. 

### Activation de **Nutanix Flow**

Cliquez sur l'icôe `engrenage`{.action} en haut à droite pour modifier les paramètres.

![Activate Flow 01](images/ActivateMicrosegmentation01.PNG){.thumbnail}

Faites défiler la `barre de défilement`{.action} à gauche et cliquez sur `Microsegementation`{.action}.

![Activate Flow 02](images/ActivateMicrosegmentation02.PNG){.thumbnail}

Cliquez sur la `case à cocher`{.action} à coté à gauche de **Enable Microsegmentation** et cliquez sur `Save`{.action}.

![Activate Flow 03](images/ActivateMicrosegmentation03.PNG){.thumbnail}

La microsegmentation est activée . Il est possible de la désactiver.

![Activate Flow 04](images/ActivateMicrosegmentation04.PNG){.thumbnail}

### Création de catégories

Une catégorie est un objet qui peut contenir une ou plusieurs valeurs , certaines catégories sont présente lors de l'installation de **Prism Central** mais il est possible de créer des nouvelles catégories.

Les catégories permettent de faciliter la gestion d'un cluster Nutanix, il est possible de les affecter à des entités comme des VM, des sous réseaux ou desimages pour ensuite les utiliser dans des outils comme **Flow** par exemple.

Nous allons créer une Catégories **Special Computers** avec une valeur nommée **Antirus**






### Gestion de la quarantaine réseau.

Nous allons voir comment configurer la règle de quarantaine et l'utiliser.



### Création d'une règle d'isolation du réseau.

### Création d'un règle d'application.


## Aller plus loin

[Hyper-convergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)

[Présentation de Nutanix FLOW](https://portal.nutanix.com/page/documents/solutions/details?targetId=TN-2094-Flow:TN-2094-Flow)

[Régles de sécurité de Nutanix FLOW](https://portal.nutanix.com/page/documents/details?)

[Catégories dans Nutanix](https://portal.nutanix.com/page/documents/details?targetId=Prism-Central-Guide-Prism-vpc_2022_1:ssp-ssp-categories-manage-pc-c.html)


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
