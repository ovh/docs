---
title: Activer et utiliser Veeam Managed Backup
excerpt: Découvrez comment activer et utiliser l'option Veeam Managed Backup
updated: 2021-12-07
---

## Objectif

Veeam est un éditeur de logiciel spécialisé dans les solutions de sauvegarde et de plan de reprise d'activité (PRA) dans des environnements virtualisés. L'offre Veeam Managed Backup s'appuie sur la brique logicielle Veeam Availability Suite pour vous fournir une solution de backup à la demande.

Les sauvegardes sont réalisées à l'aide d'une machine virtuelle (VM) située à l’intérieur même de votre infrastructure [Hosted Private cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/). Les données sauvegardées sont, quant à elles, externalisées vers un espace de stockage indépendant, chez OVHcloud. Les sauvegardes s'effectuent la nuit, avec une durée de rétention en fonction du niveau d'offre choisi.

**Ce guide vous explique comment déployer et utiliser l'option Veeam Managed Backup en quelques minutes.**

## Prérequis

* Posséder une offre [Hosted Private cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/).
* [Donner le droit « Ajout de ressources »](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/change_users_rights) pour le datacenter concerné à l'utilisateur depuis l'[espace client OVHcloud](/links/manager).
* Être connecté au client vSphere.
* Avoir activé la [haute disponibilité (HA)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ha_high_availability).
* Avoir activé le [Distributed Ressource Scheduler (DRS)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new) sur le ou les clusters.
* Mettre en place la gestion des licences Windows sur le Private Cloud.

## En pratique

### Activer le service

La première étape consiste à activer le service depuis l'[espace client OVHcloud](/links/manager). Pour cela, rendez-vous dans la partie `Private Cloud`{.action} de l'onglet `Hosted Private Cloud`{.action}. Cliquez sur l'infrastructure vSphere concernée, puis sur le datacenter souhaité. Choisissez l'onglet `Backup`{.action}.

![Activer le backup](images/veeam-managed-controlp_new.png){.thumbnail}

Choisissez le niveau de l'offre de sauvegarde puis continuez en cliquant sur `Choisir l'offre`{.action}.

Validez les contrats en cliquant sur `Activer le backup`{.action}.

Une notification vous confirme la demande d'activation :

![Activer le backup](images/backuppcc_02_fr.png){.thumbnail}

Une fois l'option installée, un e-mail de confirmation vous est envoyé et l'activation de la sauvegarde vous sera indiqué dans l'espace client, avec le rappel du niveau de l'offre choisi.

![Activer le backup](images/backuppcc_03_fr.png){.thumbnail}

Le service est dès lors utilisable directement depuis vSphere.

Vous verrez apparaître sur votre infrastructure vSphere une machine virtuelle correspondant au serveur de sauvegarde :

![Serveur de sauvegarde](images/backupserver.png){.thumbnail}

### Activer la sauvegarde pour les machines virtuelles souhaitées

Maintenant que le service est en place, il suffit de réaliser les demandes de sauvegarde pour chaque machine virtuelle identifiée comme critique depuis le vSphere Web Client.

Sélectionnez le datacenter VMware, puis l'onglet `Configure`{.action} et choisissez `Backup Management`{.action} dans la section OVHCloud du menu.

![Backup Management](images/backupvm_01.png){.thumbnail}

Dans la liste, sélectionnez la VM pour laquelle vous souhaitez activer la sauvegarde. Sur le panneau à droite, cliquez alors sur `Enable backup on this VM`{.action} pour lancer la demande d'activation.

![Activation de la sauvegarde](images/backupvm_02.png){.thumbnail}

Une fenêtre de confirmation apparaît. Cliquez simplement sur `OK`{.action}.

![Confirmation de la sauvegarde](images/backupvm_03.png){.thumbnail}

Veeam est informé de cette nouvelle demande et crée le travail de sauvegarde de la machine virtuelle. Chaque nuit, à partir de 22 heures (par défaut), une tâche de sauvegarde sera programmée selon le schéma de sauvegarde défini par l'offre.

Chaque jour, un e-mail contenant les statuts de l'ensemble des travaux effectués est envoyé à l'adresse du compte OVHcloud.

> [!warning]
>
> La suppression d'une machine virtuelle de votre inventaire ou d'un disque ne désactive pas le travail de sauvegarde relatif à cette machine. Celui-ci apparaîtra en erreur dans le rapport.
>

### Restaurer une sauvegarde

Sélectionnez le datacenter VMware, puis l'onglet `Configure`{.action} et choisissez `Backup Management`{.action} dans la section OVHcloud du menu.

Dans la liste, sélectionnez la VM pour laquelle vous souhaitez restaurer une sauvegarde (celle-ci doit avoir un **backup state** à **Enabled**).

![Restauration du backup](images/restorebackup_01.png){.thumbnail}

Sur le panneau à droite, cliquez alors sur `Restore Backup`{.action} pour lancer la demande de restauration.

![Restauration du backup](images/restorebackup_02.png){.thumbnail}

Une nouvelle fenêtre s'ouvre alors pour créer le travail de restauration. Vérifiez bien le nom de la machine, sélectionnez la date de sauvegarde à restaurer et choisissez le datastore (espace de stockage utilisé comme cible de restauration). Cliquez sur `Restore Backup`{.action} pour lancer la restauration.

![Initialisation de la restauration](images/restorebackup_03.png){.thumbnail}

Une fenêtre confirme alors que le serveur Veeam est informé de cette nouvelle demande et que la création du travail de restauration de la machine virtuelle a été effectuée.

![Validation de la restauration](images/restorebackup_04.png){.thumbnail}

La machine est restaurée à côté de la machine source.

![La machine source est restaurée](images/restorebackup_05.png){.thumbnail}

> [!warning]
>
> Attention, la machine restaurée est connectée au réseau. Si vous démarrez celle-ci sans avoir désactivé la machine source, il risque d'y avoir un conflit d'adresse IP.
>

![Conflit d'IP](images/restorebackup_06.png){.thumbnail}

Pour effectuer ces actions, vous pouvez sélectionner le datacenter dans votre inventaire, cliquer sur l'onglet `Configure`{.action}, puis choisir `OVH Backup Management`{.action}. Dans cette page, vous avez accès à la liste de vos travaux de sauvegarde, avec le nombre de backups et le dernier statut du travail.

### Désactiver la sauvegarde d'une machine virtuelle

Sélectionnez le datacenter VMware, puis l'onglet `Configure`{.action} et choisissez `Backup Management`{.action} dans la section OVHcloud du menu.

Dans la liste sélectionnez la VM pour laquelle vous souhaitez désactiver la sauvegarde.

![Désactivation de la machine](images/restorebackup_01.png){.thumbnail}

Sur le panneau à droite, cliquez alors sur `Disable Backup on this VM`{.action} pour désactiver la sauvegarde.

![Désactivation de la sauvegarde](images/restorebackup_02.png){.thumbnail}

Confirmez ensuite la désactivation en cliquant sur `OK`{.action}.

![Confirmation de désactivation](images/disablebackup_03.png){.thumbnail}

> [!warning]
>
> Il est possible de réactiver la sauvegarde à tout moment à partir du moment où la machine virtuelle est présente dans l'infrastructure.
>
> A noter que les sauvegardes effectuées restent disponibles pour la restauration juqu'à l'expiration du délai de retention.
>

> [!primary]
>
> Suivez les mêmes instructions pour désactiver la sauvegarde d'une VM supprimée.
> Il est également possible de désactiver la sauvegarde temporairement et de la réactiver par la suite.
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
