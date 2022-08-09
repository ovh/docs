---
title: Configurer le logiciel de sauvegarde tina 
slug: tina-backup
excerpt: "Installation du logiciel de sauvegarde tina sur un cluster Nutanix"
section: Sauvegardes
order: 03
kb: Hosted Private Cloud
category_l1: Hosted Private Cloud powered by Nutanix
category_l2: Backups
---

**Dernière mise à jour le 05/08/2022**

## Objectif


**Apprenez à installer, configurer et utiliser Time Navigator sur un cluster Nutanix avec un stockage virtuel distant**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>
> La licence Time Navigator n'est pas fournie par OVHcloud. Pour plus d'informations, contactez le service commercial Atempo ou d'OVHcloud.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur le cluster via Prism Central.
- Avoir souscrit une offre Tina auprès de la société ATEMPO. 
- Disposer, sur votre Cluster Nutanix, de 150 Go de Stockage, de 16 Go de Mémoire et de 8 Cœurs.
- De disposer de deux machines virtuelle sous Linux avec l'interface graphique ou de deux machines virtuelles sous Windows.
- d'avoir un serveur DNS interne (Par exemple un active diretory) 

## Présentation

Le logiciel **Time Navigator** est un logiciel modulaire composé de divers éléments que l'on peut installer à divers endroits, pour fonctionner correctement sur Nutanix il faut installer un agent qui fera la liaison avec le cluster.

## En pratique

Nous allons installer deux machines virtuelles sous AlmaLinux en version 8.6 une distribution Linux proche de RedHat (Dans le cas d'une exploitation en production il serait judicieux d'utiliser une Redhat Enterprise Server avec l'achat d'un support logiciel). 

Les trois machines virtuelles seront réparties comme ceci:

Deux sur le cluster Nutanix pour :
- Le serveur de sauvegarde avec sa console d'administration
- Servir de serveur de déduplication avec un paramètrage HSS (Hyper Stream Server) qui est à l'instant le seul compatible avec Nutanix.

### Installation 

#### Installation du moteur de déduplication sur le cluster

#### Installation du serveur Time Navigator

### Configuration d'une sauvegarde

### Restauration d'une sauvegarde

## Aller plus loin <a name="gofurther"></a>


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

[Tina Compatibily GUIDE 2022](https://www.atempo.com/wp-content/uploads/2022/01/COMPATIBILITY-GUIDE_en_Tina_469_24-01-2022.pdf)

