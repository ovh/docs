---
title: 'Créer / restaurer un serveur virtuel a partir d’une sauvegarde'
excerpt: 'Découvrez comment créer ou restaurer la sauvegarde d’une instance'
legacy_guide_number: 1882
updated: 2021-03-19
---

**Dernière mise à jour le 19/03/2021**

## Objectif

L'espace client OVHcloud vous permet de créer des [sauvegardes de vos instances](/pages/platform/public-cloud/save_an_instance) en quelques clics et d'automatiser ce processus.
Vous pouvez être amenés à vouloir restaurer votre instance grâce à une sauvegarde, par exemple en cas de mauvaise manipulation effectuée sur la configuration de votre instance. Vous pouvez utiliser ces sauvegardes d'instances pour deux raisons principales :

- Créer une instance sur la base de la sauvegarde, afin de dupliquer l'instance d'origine. Par exemple si vous configurez une infrastructure de répartition de charge (load balancing).
- Restaurer une instance à partir d'une sauvegarde. Par exemple si des modifications récentes ont cassé des configurations critiques sur l'instance.

**Découvrez comment utiliser vos sauvegardes pour dupliquer ou restaurer vos instances.**

## Prérequis

- Disposer d'une sauvegarde d'une instance Public Cloud. À cet effet, consultez [le guide dédié à la création d'une sauvegarde](/pages/platform/public-cloud/save_an_instance).
- Être connecté à [l'espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

## En pratique

### Créer une instance a partir d'une sauvegarde

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} et sélectionnez `Public Cloud`{.action}. Cliquez ensuite sur  `Instance backup`{.action} dans le menu à gauche.

![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}

Cliquez alors sur les `...`{.action} à droite de la sauvegarde choisie et enfin sur `Créer une instance`{.action}.

Une version abrégée de la page de création de l'instance s'affiche, dans laquelle vous pouvez modifier certaines options.

![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}

Certains éléments sont prédéfinis :

- **Localisation** : votre instance sera créée dans le même datacentre que votre sauvegarde.
- **Image** : elle correspondra à votre sauvegarde.
- **Modèle** : seuls ceux pouvant accueillir votre image seront disponibles, en fonction de votre quota.

![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}

Définissez le nom de la nouvelle instance, la clé SSH, le vRack et la période de facturation, puis cliquez sur le bouton `Créer l'instance`{.action}.

Pour plus d'informations sur la création d'une instance, consultez [ce guide](/pages/platform/public-cloud/public-cloud-first-steps#etape-3-creer-une-instance/).

> [!primary]
>
> Pour créer une instance dans un autre datacentre que celui de la sauvegarde, il faudra transférer celle-ci vers la zone correspondante. Référez-vous alors au [guide sur la sauvegarde d'une instance d'un datacentre à l'autre](/pages/platform/public-cloud/transfer_instance_backup_from_one_datacentre_to_another).
>

### Restaurer une instance à partir d’une sauvegarde

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} et sélectionnez `Public Cloud`{.action}. Cliquez ensuite sur  `Instances`{.action} dans le menu à gauche.

![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}

Cliquez sur le bouton `...`{.action} à droite de l'instance que vous souhaitez restaurer et cliquez sur `Editer`{.action}.

La page d'édition d'instance s'affichera alors. Vous pourrez y modifier :

- Le nom de l'instance.
- L'image de l'instance.
- Le modèle de l'instance.
- La facturation de l'instance (uniquement depuis le modèle « Horaire » vers le modèle « Mensuel »).

Effectuez les modifications nécessaires puis sélectionnez l'onglet `Backups`{.action} dans la partie « Image ».

![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}

Sélectionnez une sauvegarde dans la liste des sauvegardes disponibles. Cliquez sur `Modifier l'image`{.action} si vous êtes certain de vouloir remplacer l'image actuelle par la sauvegarde.

L'instance aura le statut `Réinstallation` jusqu'à ce que le processus soit terminé. Il peut être nécessaire d'actualiser la page dans le navigateur pour voir l'état actuel.

> [!warning]
>
> Comme indiqué dans l'encadré jaune qui vous est alors précisé, aucune donnée ajoutée après la création de cette sauvegarde ne pourra être récupérée.
>

## Aller plus loin

[Création et connexion à une première instance Public Cloud](/pages/platform/public-cloud/public-cloud-first-steps)

[Sauvegarder une instance](/pages/platform/public-cloud/save_an_instance)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
