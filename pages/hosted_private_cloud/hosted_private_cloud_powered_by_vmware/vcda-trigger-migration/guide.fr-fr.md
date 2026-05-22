---
title: "Lancer une première migration VCDA vers votre Public VCFaaS"
excerpt: "Découvrez comment lancer votre première migration de VMs vers votre organisation Public VCFaaS via VMware Cloud Director Availability"
updated: 2026-05-22
---

## Objectif

OVHcloud propose une fonctionnalité de migration de machines virtuelles vers Public VCFaaS, reposant sur **VMware Cloud Director Availability (VCDA)**. Cette fonctionnalité permet de migrer simplement vos VMs depuis un environnement vSphere ou VCD on-premise vers votre organisation Public VCFaaS.

**Ce guide vous accompagne pour lancer une première migration : réplication des données, suivi puis bascule (migration) vers votre organisation Public VCFaaS.**

## Prérequis

- Disposer d'une organisation [Public VCFaaS](/links/hosted-private-cloud/vmware-vcd-organization) active.
- Avoir activé l'option de migration sur votre organisation depuis votre [espace client OVHcloud](/links/manager).
- Disposer d'une appliance **VCDA On-Premise** déployée, configurée et appairée avec votre organisation Public VCFaaS. Si ce n'est pas encore le cas, consultez le guide [Public VCFaaS Migration - Getting Started](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcda-getting-started).
- Disposer d'un compte utilisateur sur votre organisation Public VCFaaS avec les droits suffisants pour gérer les réplications.

## En pratique

### Vue d'ensemble du workflow

Le workflow de migration se découpe en trois étapes principales :

```
┌──────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐
│   Étape 1            │     │   Étape 2            │     │   Étape 3            │
│   Lancer la          │────▶│   Attendre la fin    │────▶│   Lancer la          │
│   réplication        │     │   de la réplication  │     │   migration finale   │
│   (source → cible)   │     │   (synchronisation)  │     │   (bascule)          │
└──────────────────────┘     └──────────────────────┘     └──────────────────────┘
```

Les opérations peuvent être pilotées depuis deux interfaces :

- **L'interface de votre appliance VCDA on-premise**, pour les opérations côté source (recommandé pour ce guide) ;
- **L'interface VMware Cloud Director** de votre organisation Public VCFaaS, via le **plugin Availability**.

#### Accéder au plugin Availability dans VMware Cloud Director

Depuis votre organisation Public VCFaaS, ouvrez le portail VCD et cliquez sur `More`{.action} > `Availability`{.action} pour accéder au plugin VCDA :

![Plugin Availability dans VMware Cloud Director](images/01-vcd-availability-plugin.png){.thumbnail}

Le plugin affiche l'état des réplications entrantes et sortantes pour votre organisation.

### Étape 1 : Lancer la réplication

Dans cet exemple, nous lançons la migration **depuis** l'appliance VCDA on-premise **vers** l'organisation Public VCFaaS.

Connectez-vous à l'interface de votre appliance VCDA on-premise (`https://<IP-de-l-appliance>`) avec le compte `root`.

Dans le menu de gauche, cliquez sur `Outgoing Replications`{.action} puis sur l'onglet `vApp`{.action}.

Cliquez sur le bouton `New migration`{.action} (icône cloud avec une flèche vers le haut) pour démarrer l'assistant.

![Bouton New migration](images/02-new-migration-button.png){.thumbnail}

#### Authentification sur l'organisation cible

L'assistant vous demande de vous authentifier sur l'organisation Public VCFaaS qui sera la cible de la migration.

Saisissez :

- **Username** : votre nom d'utilisateur sur l'organisation Public VCFaaS (au format `utilisateur@organisation`) ;
- **Password** : le mot de passe associé.

Cliquez sur `LOGIN`{.action}.

![Authentification dans l'assistant de migration](images/03-wizard-auth.png){.thumbnail}

#### Étape 1.1 : Sélection des VMs sources

Sélectionnez le vCenter source dans la liste déroulante `Select VMs to replicate from`{.action}, puis cochez la ou les machines virtuelles à migrer.

![Sélection des VMs sources](images/04-source-vm-selection.png){.thumbnail}

Cliquez sur `Next`{.action}.

#### Étape 1.2 : Choix du vDC et de la politique de stockage

Sélectionnez le **virtual datacenter (vDC)** cible dans votre organisation Public VCFaaS ainsi que la **politique de stockage** à utiliser pour les VMs migrées.

![Sélection du vDC et de la politique de stockage](images/05-destination-vdc.png){.thumbnail}

Cliquez sur `Next`{.action}.

#### Étape 1.3 : Paramètres de la réplication

Cette étape vous permet d'ajuster les paramètres de la réplication :

- **Compress replication traffic** : à activer uniquement en cas de bande passante limitée (consommation CPU augmentée) ;
- **Delay start synchronization** : pour décaler le démarrage de la synchronisation initiale ;
- **VDC policy settings** : politiques de placement et de sizing à appliquer côté cible (laissez `None`{.action} pour conserver la configuration d'origine).

![Paramètres de réplication](images/06-settings.png){.thumbnail}

Cliquez sur `Next`{.action}.

#### Étape 1.4 : Récapitulatif

L'assistant affiche un récapitulatif de la migration à venir. Vérifiez :

- les VMs sélectionnées ;
- le site source et le site de destination ;
- le vDC et la politique de stockage ;
- les politiques de sizing et de placement.

![Récapitulatif de la migration](images/07-ready-to-complete.png){.thumbnail}

Cliquez sur `Finish`{.action} pour démarrer la réplication.

### Étape 2 : Suivre l'avancement de la réplication

Une fois la réplication lancée, elle apparaît dans la liste `Outgoing Replications`{.action} avec l'état **Synchronizing**.

![Réplication en cours](images/08-replication-in-progress.png){.thumbnail}

Le détail de la réplication indique :

- la progression du checksum (vérification des blocs) ;
- les octets transférés ;
- l'état des composants côté source et cible.

> [!warning]
>
> Attendez que la réplication atteigne l'état **Healthy** avant de lancer la migration finale. La durée de la réplication initiale dépend de la taille des disques et de la bande passante disponible.

Lorsque la réplication est prête à être basculée, l'état devient **Healthy** et le **Recovery state** affiche **Not started** :

![Réplication prête](images/09-replication-ready.png){.thumbnail}

### Étape 3 : Lancer la migration

Une fois la réplication en état **Healthy**, vous pouvez déclencher la bascule.

Sélectionnez la réplication dans la liste, puis cliquez sur `ALL ACTIONS`{.action} > `Migrate`{.action}.

![Menu Migrate](images/10-migrate-menu.png){.thumbnail}

#### Étape 3.1 : Paramètres de la migration

Configurez les paramètres de bascule :

- **Power settings** : cochez `Power on recovered vApps`{.action} pour démarrer automatiquement les VMs côté cible après la bascule ;
- **Network Settings** :
    - `Apply preconfigured network settings on migrate`{.action} : applique les paramètres réseau définis dans le profil de récupération ;
    - `Connect all VMs to network`{.action} : reconnecte simplement les VMs au réseau choisi ;
- **VDC policy settings** : politiques de placement, de sizing et de stockage à utiliser côté cible.

![Paramètres de migration](images/11-migrate-settings.png){.thumbnail}

Cliquez sur `Next`{.action}.

#### Étape 3.2 : Confirmation

Vérifiez le récapitulatif :

- les vApps à migrer ;
- le site de récupération ;
- les paramètres réseau ;
- la politique de stockage.

![Confirmation de la migration](images/12-migrate-confirm.png){.thumbnail}

> [!primary]
>
> Le workflow de migration exécute automatiquement les étapes suivantes :
>
> 1. Synchronisation finale (si la VM source est démarrée) ;
> 2. Arrêt de la VM source ;
> 3. Synchronisation finale (une fois la VM source arrêtée) ;
> 4. Import de la VM dans le site cible.

Cliquez sur `Finish`{.action} pour lancer la migration.

#### Suivi de la migration en cours

La bascule apparaît dans la liste des réplications avec l'état **Migrate** et un pourcentage d'avancement :

![Migration en cours](images/13-migration-in-progress.png){.thumbnail}

#### Migration terminée

Une fois la migration finalisée, la VM apparaît dans votre organisation Public VCFaaS et l'état de la réplication passe en **Failed-Over** dans la vue **Incoming Replications** du portail VCD :

![Migration terminée](images/14-migration-completed.png){.thumbnail}

Vous pouvez désormais retrouver vos VMs migrées directement dans votre vDC Public VCFaaS, prêtes à être utilisées.

## Aller plus loin

- [Public VCFaaS Migration - Getting Started](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcda-getting-started)
- [Découvrez comment utiliser l'interface utilisateur de Public VCF as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-getting-started)
- [Documentation officielle VMware Cloud Director Availability](https://techdocs.broadcom.com/us/en/vmware-cis/cloud-director/vmware-cloud-director-availability.html)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
