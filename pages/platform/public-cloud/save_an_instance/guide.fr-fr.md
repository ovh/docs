---
title: 'Sauvegarder une instance'
slug: sauvegarder-une-instance
excerpt: 'Découvrez comment sauvegarder une instance Public Cloud en quelques clics'
section: 'Base de connaissances'
---

**Dernière mise à jour le 22/11/2019**

## Objectif

Vous avez la possibilité de créer à tout moment une sauvegarde d'une instance depuis votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Cette dernière peut vous permettre de restaurer votre instance sur une ancienne configuration ; ou de pouvoir recréer cette dernière.

**Réalisez en quelques clics une sauvegarde d'une instance Public Cloud.**

## Prérequis

- [Avoir créé une instance Public Cloud depuis votre compte](../creer-instance-espace-client/).
- Être connecté à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, partie `Cloud`{.action}.

## En pratique

### Créer une sauvegarde d'une instance

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, sélectionnez l'onglet Public Cloud puis la rubrique `Instances`{.action}.

Cliquez alors sur les `...`{.action} à droite de l'instance choisie et enfin sur `Créer un backup`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Renseignez un nom pour cette sauvegarde sur la page suivante.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Une fois la sauvegarde terminée, celle-ci sera ensuite disponible dans la rubrique `Instance Backup`{.action}.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Créer une sauvegarde automatisée d'une instance

Dans la rubrique `Instances`{.action}, sélectionnez `Créer une sauvegarde automatisée`{.action} dans les actions disponibles de l'instance à sauvegarder.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Vous devrez renseigner plusieurs informations sur la page suivante :

#### **Le workflow** 

Il existe actuellement un seul workflow, celui-ci fera une sauvegarde de l'instance et du volume principal de celle-ci.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **La ressource**. 

Il suffit de sélectionner l'instance concernée par la sauvegarde.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **L'ordonnancement** 

Il s'agit de définir la fréquence des sauvegardes. Deux options par défaut sont proposées :

* Une sauvegarde tous les jours avec un historique de 7 jours maximum.
* Une sauvegarde tous les jours avec un historique de 14 jours maximum.

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

    
#### **Le nommage** 

Il s'agit simplement de donner un nom à la tâche de sauvegarde.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

Une fois celle-ci créée, elle sera disponible dans la rubrique `Workflow Management`{.action} :

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Les sauvegardes seront disponibles dans la rubrique `Instance Backup`{.action} et facturés en tant que tel.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.