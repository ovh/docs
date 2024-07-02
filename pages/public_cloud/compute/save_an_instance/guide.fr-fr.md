---
title: 'Sauvegarder une instance'
excerpt: 'Découvrez comment sauvegarder une instance Public Cloud depuis votre espace client OVHcloud'
updated: 2024-05-06
---

## Objectif

Vous pouvez créer une sauvegarde unique d'une instance ou configurer un planning afin d'automatiser les sauvegardes de vos instances. Les sauvegardes peuvent être utilisées pour restaurer votre instance à un état antérieur ou pour créer une nouvelle instance identique.

**Ce guide explique comment créer des sauvegardes manuelles et automatiques d'une instance Public Cloud.**

## Prérequis

- Avoir une instance [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](/links/manager).

## En pratique

### Créer une sauvegarde d'une instance

> [!warning]
> Cette option est uniquement disponible via un **Cold Snapshot** pour les instances Metal. L'instance Metal passera en mode rescue et, une fois la sauvegarde effectuée, l'instance sera redémarrée en mode normal.
>

Connectez-vous à votre [espace client OVHcloud](/links/manager) et ouvrez votre projet `Public Cloud`{.action}. Cliquez ensuite sur `Instances`{.action} dans le menu de gauche.

Cliquez sur le bouton `...`{.action} à droite de l'instance et sélectionnez `Créer un backup`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Renseignez un nom pour la sauvegarde sur la page suivante. Prenez connaissance des informations tarifaires et cliquez sur `Confirmer`{.action}.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Il n'est pas possible de suivre la progression de la sauvegarde en temps réel, cependant, dans la section `Instance Backup`{.action} sous la rubrique `Storage`{.action} dans le menu de gauche, le statut sera affiché comme "Backup en cours" pendant le processus.

![public-cloud-instance-backup](images/backup_in_progress.png){.thumbnail}

Une fois la sauvegarde terminée, celle-ci sera disponible dans la section `Instance Backup`{.action} sous la rubrique `Storage`{.action} dans le menu de gauche.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Créer une sauvegarde automatisée d’une instance

Cliquez sur le bouton `...`{.action} à droite de l'instance et sélectionnez `Créer une sauvegarde automatisée`{.action}.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Vous pourrez alors configurer les paramètres de sauvegarde suivants :

#### **Le workflow** 

Actuellement, un seul workflow existe. Il créera une sauvegarde pour l'instance et son volume principal.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **La ressource** 

Vous pouvez sélectionner l'instance à sauvegarder.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **Le planning** 

Vous pouvez définir une planification de sauvegarde personnalisée ou choisir l'une des fréquences par défaut :

- Sauvegarde quotidienne avec rétention des 7 dernières sauvegardes
- Sauvegarde quotidienne avec rétention des 14 dernières sauvegardes

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

#### **Le nom** 

Entrez un nom pour la planification de la sauvegarde automatique. Prenez connaissance des informations de tarification et créez le planning en cliquant sur le bouton `Créer`{.action}.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

### Gestion des sauvegardes et des plannings

Les planifications peuvent être créées et supprimées dans la section `Workflow Management`{.action} qui se trouve sous la rubrique `Storage`{.action} dans le menu de gauche.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Les sauvegardes de vos instances sont gérées dans la section `Instance Backup`{.action} qui se trouve sous la rubrique `Storage`{.action} dans le menu de gauche.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

> [!warning]
> L'option de sauvegarde de l'instance doit être supprimée séparément si vous ne souhaitez plus qu'elle vous soit facturée. La suppression d'une instance ne supprime pas les options qui y sont attachées.
>

> [!warning]
> **Notez que vous ne pouvez pas supprimer une sauvegarde d'instance si une instance qui a été générée à partir de cette sauvegarde est en cours d'exécution au moment de l'action de suppression.**

Découvrez comment utiliser les sauvegardes pour cloner ou restaurer des instances dans [ce guide](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup).

## Aller plus loin

[Créer / restaurer un serveur virtuel a partir d’une sauvegarde](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
