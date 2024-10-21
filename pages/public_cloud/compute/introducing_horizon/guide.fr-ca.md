---
title: Présentation de Horizon
excerpt: Découvrez les principales sections de l'interface Horizon
updated: 2024-02-09
---

## Objectif

L'interface Horizon, nativement proposée avec OpenStack, a été adaptée par OVHcloud afin d'offrir des fonctionnalités complémentaires à celles disponibles dans l'espace client OVHcloud.

**Découvrez les principales sections de l'interface Horizon.**

## Prérequis

- Un [project Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) dans votre compte OVHcloud.
- **[Facultatif depuis septembre 2023]** Un utilisateur [OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) créé dans votre projet. Cette étape est facultative car nous avons déployé une authentification unique (SSO : *Single Sign-On*) entre l'espace client OVHcloud et Horizon.

## En pratique

### Se connecter à OpenStack Horizon

* Pour vous connecter avec l'authentification unique OVHcloud : utilisez le lien `Horizon`{.action} dans le menu de gauche sous "Management Interfaces" après avoir ouvert votre projet `Public Cloud`{.action} dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

* Pour vous connecter avec un utilisateur OpenStack spécifique : ouvrez la page de connexion à [Horizon](https://horizon.cloud.ovh.net/auth/login/) et renseignez les [identifiants OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) préalablement créés, puis cliquez sur `Connect`{.action}.

### Choix de la région du datacentre

Contrairement à l'espace client OVHcloud, Horizon sépare vos services selon leur région. Vous pouvez choisir la région depuis le menu en haut à gauche :

![public-cloud](images/region2021.png){.thumbnail}

### Menu latéral de gauche

Ce menu vous permet de naviguer rapidement dans le projet et dans les différentes fonctionnalités associées.

![public-cloud](images/leftmenu2021.png){.thumbnail}

#### Compute

##### **Vue d'ensemble (*Overview*)**

- **Synthèse des quotas (*Limit Summary*)**

Horizon offre une synthèse des quotas, ce qui vous permet de voir les ressources occupées et disponibles pour vos projets :

![public-cloud](images/quotas2021.png){.thumbnail}

- **Résumé de l'utilisation (*Usage Summary*)**

Vient ensuite un résumé de l'utilisation des instances de votre projet. La période de recherche est personnalisable afin de restreindre ce résumé à une période souhaitée.

![public-cloud](images/usagesummary2021.png){.thumbnail}

- **Usage**

Un récapitulatif de vos « usages » est également disponible. Il s'agit d'un récapitulatif des différents services associés au projet, comme par exemple la liste des instances.

![public-cloud](images/usage2021.png){.thumbnail}

Le récapitulatif est téléchargeable au format CSV, ce qui permet d'extraire les informations afin de pouvoir ensuite les analyser via d'autres outils. Il suffit pour cela de cliquer sur `Download CSV Summary`{.action}.

![public-cloud](images/csv2021.png){.thumbnail}

- **Instances**

Cette page permet de lister et administrer les instances. C'est ici par exemple qu'il est possible de créer de nouvelles instances, de les mettre en pause, d'accéder à la console de l'instance, etc...

- **Images**

Listez et administrez, via ce menu, les images, c'est à dire les templates et snapshots associés à votre projet.

- **Key Pairs**

Vous pouvez ici lister et créer vos clés SSH pour la connection à vos instances.

##### **Volumes**

Ce menu vous permet de lister et d'administrer les volumes, ainsi que les backups et snapshots de volume.

![volume](images/volumes2021.png){.thumbnail}

##### **Network**

Listez et administrez ici vos réseaux ainsi que les différents groupes de sécurité. 

![network](images/network2021.png){.thumbnail}

##### **Orchestration**

Ce menu vous permet d'orchestrer plusieurs applications cloud composites.<br>
Pour plus d'informations, veuillez consulter la [documentation OpenStack](https://docs.openstack.org/horizon/pike/user/stacks.html){.external}.

![orchestration](images/orchestration2021.png){.thumbnail}

#### Identity

Ce menu permet de lister les informations sur vos projets.

### Menu utilisateur

En haut à droite de l'interface Horizon, un menu utilisateur vous permet notamment de: 

- modifier les paramètres d'affichage de l'interface;
- télécharger un fichier « OpenRC » contenant vos identifiants d'utilisateur;
- vous déconnecter de l'interface Horizon.

![public-cloud](images/username2021.png){.thumbnail}

## Aller plus loin

[Se familiariser avec l’interface Public Cloud](/pages/public_cloud/compute/03-public-cloud-interface-walk-me)
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
