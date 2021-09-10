---
Titre : Suspendre ou mettre en pause une instance
slug : suspendre-ou-mettre-en-pause-une-instance
legacy_guide_number: 1781
section : Gestion de projets
Commande : 3
---

**Dernière mise à jour le 10/09/2021**

## Objectif

 Dans le cadre de la configuration d’une infrastructure hautement disponible,  il est possible que vous rencontriez le besoin de couper les accès à vos instances afin d’effectuer différents tests. OpenStack vous permet de suspendre, éteindre ou mettre en pause votre instance. Dans chaque cas, votre IP est maintenue.

> [!warning]
> La dénomination de ces options dans votre espace client OVHcloud est différente de celle dans Openstack/Horizon. Si vous effectuez cette opération à partir de votre espace client OVHcloud, veillez à sélectionner la bonne option.
>

**Ce tutoriel indique comment suspendre, éteindre ou mettre en pause votre instance.**

## Prérequis

- Posséder une instance Public Cloud [OVHcloud](../create_an_instance_in_your_ovh_customer_account/) au forfait horaire.
- Être connecté à l’espace client [OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} ou à l’interface [Horizon.](https://docs.ovh.com/fr/public-cloud/creer-un-acces-a-horizon/)
- Connaissance de l’API [Openstack](https://docs.ovh.com/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/) et des variables [Openstack](https://docs.ovh.com/fr/public-cloud/charger-les-variables-denvironnement-openstack/)

## En pratique

> [!alert]
>
> Ces manipulations entrainent toujours une facturation de l’instance tant que l’instance n’est pas terminée.
>

Veuillez prendre note des points suivants avant de poursuivre :

|Terme|Description|Facturation|
|---|---|---|
|Suspendre|Conserve les ressources et les données de votre disque en créant un snapshot, toutes les autres ressources sont libérées.|Vous n’êtes facturé que pour le snapshot.|
|Pause|Stocke l’état de la VM dans la mémoire RAM, une instance en pause reste *gelée*.|Vous serez toujours facturé au même prix pour votre instance.|
|Éteindre|Stocke l’état de la VM sur le disque, les ressources dédiées à l’instance sont toujours réservées.|Vous serez toujours facturé au même prix pour votre instance.|

### Suspendre (shelve) une instance

Cette option vous permettra de libérer les ressources dédiées à votre instance Public Cloud, mais l’adresse IP sera conservée. Les données sur votre disque local seront stockées dans un snapshot créé automatiquement une fois l’instance suspendue. Les données stockées en mémoire et ailleurs ne seront pas sauvegardées.

#### Depuis l’espace client OVHcloud

Dans votre espace client OVHcloud, cliquez sur l’onglet `Public Cloud`{.action}, sélectionnez votre projet Public Cloud et cliquez sur la rubrique`Instances`{.action} dans le menu de gauche.

Cliquez sur le bouton `...`{.action} à droite de l’instance que vous souhaitez suspendre puis cliquez sur `Suspendre`{.action}.

![suspension instance](images/suspend_an_instance.png){.thumbnail}

Dans la fenêtre qui s’affiche, prenez note du message et cliquez sur `Confirmer`{.action}.

![confirmer la suspension](images/confirm_suspension.png){.thumbnail}

Une fois la procédure terminée, votre instance aura le statut *Suspendue*.

![statut suspendu](images/instance_suspended.png){.thumbnail}

Le snapshot sera ensuite disponible dans la rubrique `Instance Backup`{.action}. Un snapshot nommé *xxxxx-shelved* est maintenant visible :

![onglet snapshot](images/shelved_backup.png){.thumbnail}

#### Depuis l’interface Horizon

Pour procéder, il faut [Créer un accès à Horizon](../creer-un-acces-a-horizon/) et vous [connecter à l’interface](https://horizon.cloud.ovh.net/auth/login/) Horizon.

Si vous avez déployé des instances dans différentes régions, assurez-vous d’être dans la bonne région. Vous pouvez le vérifier en haut à gauche dans l’interface Horizon.

![horizon interface](images/firstaccesshorizon.png){.thumbnail}

Cliquez sur le menu `Compute`{.action} dans le gauche et sélectionnez `Instances`{.action}. Sélectionnez `Shelve Instance`{.action} dans la liste déroulante correspondant à l’instance.

![instance shelve](images/shelveinstancehorizon.png){.thumbnail}

Une fois la procédure terminée, votre instance aura le statut *Shelved Offloaded*.

![instance réservée](images/newinstancestatushorizon.png){.thumbnail}

Pour visualiser le snapshot, dans le menu `Compute`{.action}, cliquez sur `Images`{.action}.

![snapshot](images/snapshothorizon.png){.thumbnail}

#### Depuis les APIs Openstack/Nova

Avant de poursuivre, Il est recommandé de consulter ces guides :

- [Préparer l’environnement pour utiliser l’API OpenStack](https://docs.ovh.com/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/)
- [Charger les variables d’environnement OpenStack](https://docs.ovh.com/fr/public-cloud/charger-les-variables-denvironnement-openstack/)

Une fois votre environnement prêt, saisissez ce qui suit dans la ligne de commande :

```bash
openstack server shelve <UUID server>
 
=====================================

nova shelve <UUID server> 
```

> [!alert] **Actions sur le snapshot**
>
> Toute action sur le snapshot autre que *unshelve* peut être très dangereuse pour votre infrastructure en cas de mauvaise utilisation. Lorsqu’une instance est *réactivée*, le snapshot est automatiquement supprimé. Il est déconseillé de déployer une nouvelle instance à partir d’un snapshot créé suite à la suspension d’une instance.
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d’assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien. En cas de difficultés ou de doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur, nous vous recommandons de faire appel à un prestataire spécialisé.
>

### Réactiver une instance

Cette option vous permettra de réactiver votre instance pour continuer à l’utiliser. Veuillez noter qu’une fois cette opération effectuée, la facturation reprendra normalement.

#### Depuis l’espace client OVHcloud 

Dans votre espace client OVHcloud, cliquez sur l’onglet `Public Cloud`{.action}, sélectionnez votre projet Public Cloud et cliquez sur la rubrique`Instances`{.action} dans le menu de gauche.

Cliquez sur les `...`{.action} à droite de l’instance puis cliquez sur `Réactiver`{.action}.

![réactiver instance](images/reactivate_instancePanel.png){.thumbnail}

Dans la fenêtre qui s’affiche, prenez note du message et cliquez sur `Confirmer`{.action}.

Une fois la procédure terminée, votre instance aura le statut *Activé*.

#### Depuis l’interface Horizon

Cliquez sur le menu `Compute`{.action} dans le gauche et sélectionnez `Instances`{.action}. Sélectionnez `Resume Instance`{.action} dans la liste déroulante correspondant à l’instance.

![unshelve instance](images/unshelveinstancehorizon.png){.thumbnail}

Une fois la procédure terminée, votre instance aura le statut *Active*.

#### Depuis les APIs Openstack/Nova

Une fois votre environnement prêt, saisissez ce qui suit dans la ligne de commande :

```bash
~$ openstack server unshelve <UUID server>

=========================================

~$ nova unshelve <UUID server>
```

### Éteindre (arréter) une instance

Cette option vous permettra d’éteindre votre instance. L’état de la VM est stocké sur le disque, tandis que la mémoire est écrite sur le disque.

#### Depuis l’espace client OVHcloud

Dans votre espace client OVHcloud, cliquez sur le menu de la section `Public Cloud`{.action}, sélectionnez votre projet Public Cloud et cliquez sur `Instances`{.action} dans le menu de gauche.

Cliquez sur le bouton `...`{.action} à droite de l’instance que vous souhaitez stopper, puis cliquez sur `Arrêter`{.action}.

![stop instance](images/stopinstance.png){.thumbnail}

Dans la fenêtre qui s’affiche, prenez note du message et cliquez sur `Confirmer`{.action}.

Une fois le processus terminé, votre instance aura le statut *Éteinte*.

Pour redemarrer l’instance, effectuez les même démarches que celles indiquées précédemment. Cliquez sur le bouton `...`{.action} à droite de l’instance et sélectionnez `Démarrer`{.action}. Dans certains cas, il peut être nécessaire de procéder à un redémarrage à froid.

#### Depuis l’interface Horizon 

Dans l’interface Horizon, cliquez sur le menu `Compute`{.action} à gauche puis sélectionnez `Instances`{.action}. Sélectionnez `Suspend Instance`{.action} dans la liste déroulante correspondant à l’instance.

![suspension instance Horizon](images/suspendinstancehorizon.png){.thumbnail}

Un message de confirmation s’affiche indiquant que l’instance est suspendue.

Pour débloquer l’instance, effectuez les mêmes opérations que ci-dessus. Dans la liste déroulante correspondant à l’instance, sélectionnez `Resume Instance`{.action}.

#### Depuis les APIs Openstack/Nova

Une fois votre environnement prêt, saisissez ce qui suit dans la ligne de commande :

```bash
~$ openstack server suspend <UUID server>

=========================================

~$ nova suspend <UUID server>
```

Pour réactiver l’instance, saisissez ce qui suit dans la ligne de commande :

```bash
~$ openstack server unsuspend <UUID server>

=========================================

~$ nova unsuspend <UUID server>
```

### Mettre en pause une instance

Cette action est réalisable uniquement à partir de l’interface Horizon ou à travers les APIs Openstack/Nova. Elle vous permet de mettre en *veille* ou de *geler* votre instance.

#### Depuis l’interface Horizon

Dans l’interface Horizon, cliquez sur le menu `Compute`{.action} à gauche puis sélectionnez `Instances`{.action}. Sélectionnez `Pause Instance`{.action} dans la liste déroulante correspondant à l’instance.

![Suspendre instance](images/pauseinstancehorizon.png){.thumbnail}

Le message de confirmation apparait indiquant la mise en pause de l’instance.

Pour réactiver l’instance, effectuez les même démarches que celles indiquées précédemment. Dans la liste déroulante correspondant à l’instance, sélectionnez `Resume Instance`{.action}.

#### Depuis les APIs Openstack/Nova

Une fois votre environnement prêt, saisissez ce qui suit dans la ligne de commande :

```bash
~$ openstack server pause <UUID server>

=========================================

~$ nova pause <UUID server>
```

Pour annuler cette action, saisissez ce qui suit dans la ligne de commande :

```bash
~$ openstack server unpause <UUID server>

=========================================

~$ nova unpause <UUID server>
```

## Aller plus loin

[Documentation Openstack](https://docs.openstack.org/mitaka/user-guide/cli_stop_and_start_an_instance.html)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
