---
title: 'Créer / restaurer un serveur virtuel a partir d’une sauvegarde'
excerpt: 'Découvrez comment créer ou restaurer la sauvegarde d’une instance'
updated: 2025-11-04
---

## Objectif

L'espace client OVHcloud vous permet de créer des [sauvegardes de vos instances](/pages/public_cloud/compute/save_an_instance) en quelques clics et d'automatiser ce processus.
Vous pouvez être amenés à vouloir restaurer votre instance grâce à une sauvegarde, par exemple en cas de mauvaise manipulation effectuée sur la configuration de votre instance. Vous pouvez utiliser ces sauvegardes d'instances pour deux raisons principales :

- Créer une instance sur la base de la sauvegarde, afin de dupliquer l'instance d'origine. Par exemple si vous configurez une infrastructure de répartition de charge (load balancing).
- Restaurer une instance à partir d'une sauvegarde. Par exemple si des modifications récentes ont cassé des configurations critiques sur l'instance.

**Découvrez comment utiliser vos sauvegardes pour dupliquer ou restaurer vos instances.**

## Prérequis

- Disposer d'[une sauvegarde d'une instance Public Cloud](/links/public-cloud/instance-backup). À cet effet, consultez [le guide dédié à la création d'une sauvegarde](/pages/public_cloud/compute/save_an_instance).
- Être connecté à [l'espace client OVHcloud](/links/manager).

## En pratique

> [!primary]
>
> Deux types de sauvegardes sont disponibles :
>
> - Locale : stockée dans la même région que votre instance.
> - Distante : automatiquement répliquée dans une autre région de votre choix.
>
> Les opérations de **création** et de **restauration** d'une instance depuis une sauvegarde distante sont entièrement prises en charge via l’API OVHcloud, offrant une plus grande flexibilité et une intégration facilitée dans vos processus d’automatisation.
>
> **Note :** Ces opérations ne sont pas encore disponibles depuis l’espace client OVHcloud.
>

### Créer une instance a partir d'une sauvegarde

> [!tabs]
> Via l'espace client OVHcloud
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.<br>
>> Cliquez ensuite sur `Instance backup`{.action} dans la barre de navigation de gauche sous **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}
>>
>> Cliquez alors sur les `...`{.action} à droite de la sauvegarde choisie et enfin sur `Créer une instance`{.action}.
>>
>> Une version simplifiée de la page de création d'instance est affichée, vous permettant de personnaliser certaines options.
>>
>> ![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}
>>
>> Certains éléments sont prédéfinis :
>>
>> - **Localisation** : Votre instance sera créée dans le même datacentre que votre sauvegarde.
>> - **Image** : L'image correspondra à votre sauvegarde.
>> - **Modèle** : Seuls les modèles pouvant accueillir votre image seront disponibles, en fonction de votre quota.
>>
>> ![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}
>>
>> Définissez le nom de la nouvelle instance, la clé SSH, le vRack et la période de facturation, puis cliquez sur le bouton `Créer l'instance`{.action}.
>>
>> Pour plus d'informations sur la création d'une instance, consultez [ce guide](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>> > [!primary]
>> >
>> > Pour créer une instance dans un autre datacentre que celui de la sauvegarde, il faudra transférer celle-ci vers la zone correspondante. Référez-vous alors au [guide sur la sauvegarde d'une instance d'un datacentre à l'autre](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).
>> >
>>
> Via la CLI OpenStack
>>
>> Pour créer une instance à partir de votre sauvegarde, utilisez l'ID de sauvegarde comme image avec cette commande :
>>
>> ```bash
>> $ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
>> ```
>>
> Via Horizon
>> Dans l'interface Horizon, cliquez sur `Compute`{.action} dans le menu de gauche, puis sur `Images`{.action}. Cherchez l'image désirée et Cliquez sur le bouton `Launch`{.action} se trouvant sur la droite de la ligne de votre image. 
>>
>> ![public-cloud-instance-backup-horizon](images/restorebackuphorizon1.png){.thumbnail}
>>
>> Nommez votre instance dans le champs dédié et determinez le nombre d'instance à créer. Puis cliquez sur l'onglet `Flavor`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-2](images/restorebackuphorizon2.png){.thumbnail}
>>
>> Choisissez le modèle d'instance désiré, puis cliquez sur l'onglet `Networks`{.action}.
>>
>> > [!warning]
>> >
>> > Si votre instance est un serveur Windows, vous devez sélectionner une flavor de type win-xx-xx (par exemple, win-b2-15) et disposer d’une interface publique sur le réseau Ext-Net. Sans ces conditions, l’authentification auprès du KMS OVHcloud ne sera pas possible, et votre serveur restera avec une [licence non activée](/pages/public_cloud/compute/activate-windows-license-private-mode). Cela pourrait entraîner des limitations, notamment l’absence de mises à jour. À noter qu’il est impossible de redimensionner une instance Linux (par exemple b2-15) en une instance Windows (comme win-b2-15). Pour effectuer cette transition, il est nécessaire de recréer une nouvelle instance.
>> >
>>
>> ![public-cloud-instance-backup-horizon-3](images/restorebackuphorizon3.png){.thumbnail}
>>
>> Choisissez le network que vous souhaitez lui assigner, puis cliquez sur le bouton `Launch Instance`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-4](images/restorebackuphorizon4.png){.thumbnail}
>>
>> Vous pouvez retrouver le status de votre nouvelle instance dans `Compute`{.action} dans le menu de gauche, puis sur `Instances`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-5](images/restorebackuphorizon5.png){.thumbnail}
>>
> Via l'API OVHcloud <a name="createinstanceviaapi"></a>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance
>> >
>>
>> Renseignez les variables :
>>
>> - **serviceName** : L’ID du projet OVHcloud.
>> - **regionName** : Le nom de la région où l’instance sera créée.
>>
>> Exemple de corps de requête :
>>
>> ```json
>> {
>>   "billingPeriod": "hourly",
>>   "bootFrom": {
>>     "imageId": "5cb8ea68-****-****-****-820be8346***"
>>   },
>>   "flavor": {
>>     "id": "e81b46f8-****-****-****-cad655e65***"
>>   },
>>   "name": "newInstance",
>>   "network": {
>>     "public": true
>>   },
>>   "sshKey": {
>>     "name": "MySSHKey"
>>   }
>> }
>> ```
>>

### Restaurer une instance à partir d’une sauvegarde

> [!tabs]
> Via l'espace client OVHcloud
>> Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.<br>
>> Cliquez ensuite sur `Instances`{.action} dans la barre de navigation de gauche sous **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}
>>
>> Cliquez sur le bouton `...`{.action} à droite de l'instance que vous souhaitez restaurer et cliquez sur `Editer`{.action}.
>>
>> La page d'édition d'instance s'affichera alors. Vous pourrez y modifier :
>>
>> - le nom de l'instance ;
>> - l'image de l'instance ;
>> - le modèle de l'instance ;
>> - la facturation de l'instance (uniquement depuis le modèle « Horaire » vers le modèle « Mensuel »).
>>
>> Effectuez les modifications nécessaires puis sélectionnez l'onglet `Backups`{.action} dans la partie « Image ».
>>
>> ![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}
>>
>> Sélectionnez une sauvegarde dans la liste des sauvegardes disponibles. Cliquez sur `Modifier l'image`{.action} si vous êtes certain de vouloir remplacer l'image actuelle par la sauvegarde.
>>
>> L'instance aura le statut `Réinstallation` jusqu'à ce que le processus soit terminé. Il peut être nécessaire d'actualiser la page dans le navigateur pour voir l'état actuel.
>>
>> > [!warning]
>> >
>> > Comme indiqué dans l'encadré jaune qui vous est alors précisé, aucune donnée ajoutée après la création de cette sauvegarde ne pourra être récupérée.
>> >
>>
> Via l'API OVHcloud
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/reinstall
>> >
>>
>> Renseignez les variables :
>>
>> - **serviceName** : L’ID du projet OVHcloud.
>> - **regionName** : Le nom de la région où se trouve l’instance source.
>> - **instanceId** : L’ID unique de l’instance.
>>
>> Exemple de corps de requête :
>>
>> ```json
>> {
>>   "imageId": "5cb8ea68-****-****-****-820be8346***",
>>   "imageRegionName": "GRA11"
>> }
>> ```
>>

## Aller plus loin

[Création et connexion à une première instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)

[Sauvegarder une instance](/pages/public_cloud/compute/save_an_instance)

Échangez avec notre [communauté d'utilisateurs](/links/community).
