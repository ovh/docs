---
title: Presentation d’Horizon
slug: presentation-dhorizon
legacy_guide_number: 1776
section: Gestion depuis Horizon
order: 1
---

**Dernière mise à jour le 02/11/2021**

## Preambule
Cette page présente l'interface Horizon, cette interface est nativement proposée avec OpenStack, elle a été adaptée par OVHcloud mais peu modifiée, elle complète l'espace client OVHcloud et fournit davantage de fonctionnalités que celle ci.

**Ce guide fournit des informations sur les fonctions de base de l'interface Horizon.**

### Prérequis

- Un [project Public Cloud](https://docs.ovh.com/fr/public-cloud/creer-un-projet-public-cloud/)
- [Créer un accès à Horizon](../creer-un-acces-a-horizon/)


## Vue d'ensemble

### Choix de la region du datacentre
Contrairement à l'Espace Client OVHcloud, Horizon séparera vos services selon leur région. Vous pourrez choisir la région depuis le menu en haut a gauche :

![public-cloud](images/region2021.png){.thumbnail}

### Synthese des Quotas
On retrouve une synthèse des quotas, qui permet de voir les ressources occupées et disponibles pour vos projets :

![public-cloud](images/quotas2021.png){.thumbnail}

### Resume de l'Utilisation
Vient ensuite un résumé de l'utilisation des instances de votre projet, la période de recherche est personnalisable afin d'affiner ce résumé à la période souhaitée.

![public-cloud](images/usagesummary2021.png){.thumbnail}

### Usage
Enfin, un récapitulatif de vos "Usages", il s'agit d'un récapitulatif des différents services associés au projet, comme la liste des instances par exemple.

![public-cloud](images/usage2021.png){.thumbnail}

Le récapitulatif est téléchargeable au format CSV, ce qui permet d'extraire les informations afin de pouvoir ensuite les analyser avec d'autres outils. Il suffit pour cela de cliquer sur  **Télécharger le résumé CSV**

![public-cloud](images/csv2021.png){.thumbnail}

## A gauche
Ce menu permet de naviguer rapidement dans le projet et dans les différentes fonctionnalités associées.

![public-cloud](images/leftmenu2021.png){.thumbnail}

### Instances
Cette page permet de lister et administrer les instances. C'est ici par exemple qu'il est possible de créer de nouvelles instances, de mettre en pause, ou accéder à la console de l'instance, etc.

### Images
Cette page permet de lister et administrer les images, il s'agit des templates et des snapshots associés à votre projet.

### Key Pairs
Cette page permet de lister et de créer vos clés SSH pour la connection à votre instance.

### Volumes
Cette page permet de lister et administrer les volumes, ainsi que les backups et snapshots de volume.

![volume](images/volumes2021.png){.thumbnail}

### Network
Cette page permet de lister et administrer vos réseaux ainsi que les différents groupes de sécurité. 

![network](images/network2021.png){.thumbnail}

### Orchestration
C'est un service que vous pouvez utiliser pour orchestrer plusieurs applications cloud composites. Pour plus d'informations, veuillez consulter la [documentation OpenStack](https://docs.openstack.org/horizon/pike/user/stacks.html).

![orchestration](images/orchestration2021.png){.thumbnail}

### Identify
Cette page permet de lister les informations sur vos projets.

## En haut de page
Un menu utilisateur en haut à droite, qui permet de modifier les paramètres associés à ce dernier.

![public-cloud](images/username2021.png){.thumbnail}

## Aller plus loin
 
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.