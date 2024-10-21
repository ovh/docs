---
title: Suspendre ou mettre en pause une instance
updated: 2023-06-20
---

## Objectif

 Dans le cadre de la configuration d’une infrastructure hautement disponible, vous pouvez avoir besoin de couper les accès à vos instances afin d’effectuer différents tests. OpenStack vous permet de suspendre, arrêter ou mettre en pause votre instance. Dans chaque cas, votre IP est maintenue.

> [!warning]
> La dénomination de ces options dans votre espace client OVHcloud est différente de celle dans Openstack/Horizon. Si vous effectuez cette opération depuis votre espace client OVHcloud, veillez à sélectionner la bonne option.
>

**Ce tutoriel indique comment suspendre, arrêter ou mettre en pause votre instance.**

## Prérequis

- Avoir créé une [instance Public Cloud OVHcloud](/pages/public_cloud/compute/public-cloud-first-steps) au forfait **horaire**.
- Être connecté à l’[espace client OVHcloud](/links/manager){.external} ou à l’interface [Horizon.](/pages/public_cloud/compute/introducing_horizon)
- Avoir des connaissances de l’[API Openstack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api) et des [variables Openstack](/pages/public_cloud/compute/loading_openstack_environment_variables)

## En pratique

> [!alert]
>
> Ces manipulations entrainent toujours une facturation de l’instance tant que celle-ci n’est pas **supprimée**.
>

Le tableau ci-dessous vous permet de différencier les options disponibles sur vos instances. Poursuivez la lecture de ce guide en cliquant sur l'option de votre choix.

|Option|Description|Facturation|
|---|---|---|
|[Suspendre (*shelve*)](#shelve-instance)|Conserve les ressources et les données de votre disque en créant un snapshot, toutes les autres ressources sont libérées.|Seul le snapshot est facturé.|
|[Arrêter (*suspend*)](#stop-suspend-instance)|Stocke l’état de la VM sur le disque, les ressources dédiées à l’instance sont toujours réservées.|Vous serez toujours facturé au même prix pour votre instance.|
|[Pause](#pause-instance)|Stocke l’état de la VM dans la mémoire RAM, une instance en pause reste « gelée ».|Vous serez toujours facturé au même prix pour votre instance.|

### Suspendre (shelve) une instance <a name="shelve-instance"></a>

> [!alert]
> Attention, la suspension d'une instance de type IOPS ou T1/T2-180 entraînera la perte des données sur les disques NVMe en passthrough.
> En effet, la suspension de ce type d'instance entraîne la décommission de son hôte et donc des disques en passthrough.
>

Cette option vous permettra de libérer les ressources dédiées à votre instance Public Cloud, mais l’adresse IP sera conservée. Les données sur votre disque local seront stockées dans un snapshot créé automatiquement une fois l’instance suspendue. Les données stockées en mémoire et ailleurs ne seront pas sauvegardées.

#### Depuis l’espace client OVHcloud

Dans votre espace client OVHcloud, cliquez sur l’onglet `Public Cloud`{.action}, sélectionnez votre projet Public Cloud et cliquez sur la rubrique `Instances`{.action} dans le menu de gauche.

Cliquez sur le bouton `...`{.action} à droite de l’instance que vous souhaitez suspendre puis cliquez sur `Suspendre`{.action}.

![suspension instance](images/suspend_an_instance.png){.thumbnail}

Dans la fenêtre qui s’affiche, prenez connaissance des informations données et cliquez sur `Confirmer`{.action}.

![confirmer la suspension](images/confirm_suspension.png){.thumbnail}

Une fois la procédure terminée, votre instance aura le statut « Suspendue ».

![statut suspendu](images/instance_suspended.png){.thumbnail}

Le snapshot sera ensuite disponible dans la rubrique `Instance Backup`{.action} de la section `Storage` du menu gauche de l'espace Public Cloud. Un snapshot nommé *xxxxx-shelved* est alors visible :

![onglet snapshot](images/shelved_backup.png){.thumbnail}

#### Depuis l’interface Horizon

Pour utiliser cette méthode, il vous faut [créer un utilisateur OpenStack](/pages/public_cloud/compute/introducing_horizon) et vous [connecter à l’interface Horizon](https://horizon.cloud.ovh.net/auth/login/).

Si vous avez déployé des instances dans différentes régions, assurez-vous d’être dans la bonne région. Vous pouvez le vérifier en haut à gauche dans l’interface Horizon.

![horizon interface](images/firstaccesshorizon.png){.thumbnail}

Cliquez sur le menu `Compute`{.action} à gauche puis sur `Instances`{.action}. Sélectionnez `Shelve Instance`{.action} dans la liste déroulante correspondant à l’instance.

![instance shelve](images/shelveinstancehorizon.png){.thumbnail}

Une fois la procédure terminée, votre instance aura le statut *Shelved Offloaded*.

![instance réservée](images/newinstancestatushorizon.png){.thumbnail}

Pour visualiser le snapshot, dans le menu `Compute`{.action}, cliquez sur `Images`{.action}.

![snapshot](images/snapshothorizon.png){.thumbnail}

#### Depuis les API Openstack/Nova

Avant de poursuivre, Il est recommandé de consulter ces guides :

- [Préparer l’environnement pour utiliser l’API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Charger les variables d’environnement OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables)

Une fois votre environnement prêt, saisissez ce qui suit dans la ligne de commande :

```bash
openstack server shelve <UUID server>
 
=====================================

nova shelve <UUID server> 
```

### Réactiver une instance

Cette option vous permettra de réactiver votre instance pour continuer à l’utiliser. Veuillez noter qu’une fois cette opération effectuée, la facturation reprendra normalement.

> [!alert] **Actions sur le snapshot**
>
> Toute action sur le snapshot autre que la réactivation (*unshelve*) peut être très dangereuse pour votre infrastructure en cas de mauvaise utilisation. Lorsqu’une instance est « réactivée » (*unshelved*), le snapshot est automatiquement supprimé. Il est déconseillé de déployer une nouvelle instance à partir d’un snapshot créé suite à la suspension d’une instance.
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d’assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. En cas de difficultés ou de doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur, nous vous recommandons de faire appel à un prestataire spécialisé.
>

#### Depuis l’espace client OVHcloud 

Dans votre espace client OVHcloud, cliquez sur l’onglet `Public Cloud`{.action}, sélectionnez votre projet Public Cloud et cliquez sur la rubrique`Instances`{.action} dans le menu de gauche.

Cliquez sur les `...`{.action} à droite de l’instance puis cliquez sur `Réactiver`{.action}.

![réactiver instance](images/reactivate_instancePanel.png){.thumbnail}

Dans la fenêtre qui s’affiche, prenez connaissance des informations et cliquez sur `Confirmer`{.action}.

Une fois la procédure terminée, votre instance aura le statut « Activée ».

#### Depuis l’interface Horizon

Cliquez sur le menu `Compute`{.action} dans le menu de gauche et sélectionnez `Instances`{.action}. Sélectionnez `Resume Instance`{.action} dans la liste déroulante correspondant à l’instance.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Une fois la procédure terminée, votre instance aura le statut *Active*.

#### Depuis les API Openstack/Nova

Une fois votre environnement prêt, saisissez la commande ci-dessous dans la ligne de commande :

```bash
~$ openstack server unshelve <UUID server>

=========================================

~$ nova unshelve <UUID server>
```

### Arrêter (suspend) une instance <a name="stop-suspend-instance"></a>

Cette option vous permettra d'arrêter votre instance. L’état de la VM est stocké sur le disque, tandis que la mémoire est écrite sur le disque.

#### Depuis l’espace client OVHcloud

Dans votre espace client OVHcloud, cliquez sur `Public Cloud`{.action}, sélectionnez votre projet Public Cloud et cliquez sur `Instances`{.action} dans le menu de gauche.

Cliquez sur le bouton `...`{.action} à droite de l’instance que vous souhaitez arrêter, puis cliquez sur `Arrêter`{.action}.

![stop instance](images/stopinstance.png){.thumbnail}

Dans la fenêtre qui s’affiche, prenez connaissance des informations et cliquez sur `Confirmer`{.action}.

Une fois le processus terminé, votre instance aura le statut « Éteinte ».

Pour redémarrer l’instance, effectuez les même démarches que celles indiquées précédemment. Cliquez sur le bouton `...`{.action} à droite de l’instance et sélectionnez `Démarrer`{.action}. Dans certains cas, il peut être nécessaire de procéder à un redémarrage à froid.

#### Depuis l’interface Horizon 

Dans l’interface Horizon, cliquez sur le menu `Compute`{.action} à gauche puis sélectionnez `Instances`{.action}. Sélectionnez `Suspend Instance`{.action} dans la liste déroulante correspondant à l’instance.

![suspension instance Horizon](images/suspendinstancehorizon.png){.thumbnail}

Un message de confirmation s’affiche indiquant que l’instance est suspendue.

Pour redémarrer l’instance, effectuez les mêmes opérations que ci-dessus. Dans la liste déroulante correspondant à l’instance, sélectionnez `Resume Instance`{.action}.

#### Depuis les API Openstack/Nova

Une fois votre environnement prêt, saisissez la commande ci-dessous dans la ligne de commande :

```bash
~$ openstack server suspend <UUID server>

=========================================

~$ nova suspend <UUID server>
```

Pour redémarrer l’instance, saisissez la commande ci-dessous dans la ligne de commande :

```bash
~$ openstack server unsuspend <UUID server>

=========================================

~$ nova unsuspend <UUID server>
```

### Mettre en pause une instance <a name="pause-instance"></a>

Cette action est réalisable uniquement à partir de l’interface Horizon ou via les API Openstack/Nova. Elle vous permet de mettre en veille ou « geler » votre instance.

#### Depuis l’interface Horizon

Dans l’interface Horizon, cliquez sur le menu `Compute`{.action} à gauche puis sélectionnez `Instances`{.action}. Sélectionnez `Pause Instance`{.action} dans la liste déroulante correspondant à l’instance.

![Suspendre instance](images/pauseinstancehorizon.png){.thumbnail}

Le message de confirmation apparait indiquant la mise en pause de l’instance.

Pour réactiver l’instance, effectuez les même démarches que celles indiquées précédemment. Dans la liste déroulante correspondant à l’instance, sélectionnez `Resume Instance`{.action}.

#### Depuis les API Openstack/Nova

Une fois votre environnement prêt, saisissez la commande ci-dessous dans la ligne de commande :

```bash
~$ openstack server pause <UUID server>

=========================================

~$ nova pause <UUID server>
```

Pour annuler cette action, saisissez la commande ci-dessous dans la ligne de commande :

```bash
~$ openstack server unpause <UUID server>

=========================================

~$ nova unpause <UUID server>
```

## Aller plus loin

[Documentation OpenStack](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html){.external}.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
