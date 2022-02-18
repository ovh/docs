---
title: Upgrade de votre cluster Nutanix 
slug: nutanix-upgrade-prismcentral
excerpt: Découvrez comment faire un upgrade de votre cluster Nutanix
section: Premiers pas
order: 04
hidden: true
---

**Dernière mise à jour le 11/01/2022**

## Objectif

Une fois qu'une mise à niveau d'un composant logiciel Nutanix est nécessaire, voici toutes les étapes principales pour l'appliquer.

**Ce guide vous explique les étapes de la mise à jour de votre cluster Nutanix.**

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## En pratique

### Documentation officielle des upgrades

Vous pouvez rechercher le document suivant : "The Nutanix upgrades: Life Cycle Manager" ou visitez le site officiel de Nutanix pour les documentations archivées : [Software Documentation: Upgrade Guide](https://portal.nutanix.com/page/documents/details?targetId=Acropolis-Upgrade-Guide-v5_19:Acropolis-Upgrade-Guide-v5_19){.external}.

### Backup

Avant toute action sur la configuration du système en cluster, il est fortement recommandé de créer une nouvelle sauvegarde ou de vérifier la dernière en date.

### Inventaire LCM

Comme l'indique le processus officiel de mise à niveau, vous devez d'abord lancer un inventaire LCM pour avoir une vue de l'état du logiciel du cluster Nutanix.

![First LCM Inventory](images/lcm_first_time.png){.thumbnail}

Procédez à l'exécution de la première ou d'une nouvelle mise à jour d'inventaire :

![Poursuivre l'inventaire LCM](images/lcm_inventory_proceed.png){.thumbnail}

Après une phase de pré-vérification, vous recevrez les résultats dès la fin de l’inventaire. Les upgrades disponibles seront affichés :

![Mises à niveau des résultats LCM disponibles](images/lcm_upgrade_available.png){.thumbnail}

Sélectionnez les upgrades souhaités ou mettez à jour tous les composants. Vous pouvez également décider de gérer directement ces upgrades comme expliqué dans les deux sections suivantes.

### Upgrade de Prism Central

Une fois que vous êtes certain de pouvoir lancer la mise à jour, ouvrez les paramètres via  le menu `Prism Central Settings`{.action} :

![Prism Central Settings](images/menu_prism_setting.png){.thumbnail}

Si des upgrades sont disponibles, vous pouvez sélectionner ceux que vous devez appliquer, puis choisir de ne faire que la pré-vérification ou l'upgrade immédiatement :

![Prism Available upgrade](images/required_upgrade.png){.thumbnail}

Le pré-contrôle sera exécuté dans tous les cas :

![Prevérifications upgrade](images/preupgrade_checks.png){.thumbnail}

Si vous avez sélectionné le processus d'upgrade, le processus lui-même sera initialisé :

![Démarrage de la mise à niveau](images/upgrade_started.png){.thumbnail}

Pendant l'exécution, vous risquez de perdre la connexion à Prism Central :

![Prism disconnection](images/loosing_connection_prism_central.png){.thumbnail}

Après quelques minutes, vous pourrez vous reconnecter à l'interface Prism Central, et ainsi vérifier ou attendre la fin du processus d'upgrade :

![Fin de la mise à niveau](images/upgrade_finished.png){.thumbnail}

### Upgrade NCC

Si un ou plusieurs upgrades NCC sont disponibles, vous pouvez télécharger ceux dont vous avez besoin puis lancer l'upgrade :

![Sélectionnez la version NCC](images/ncc_available_upgrade.png){.thumbnail}

### Validation

#### Mise à jour de l'inventaire LCM

Mettez à jour l'inventaire LCM. Si aucun upgrade n'est plus disponible, seule la liste des versions des composants logiciels installés sera présentée :

![Cluster Nutanix à jour](images/lcm_result_after_upgrades.png){.thumbnail}

#### Validation de la mise à niveau de Prism Central

Vous pouvez également vérifier que l'interface web Prism Central est à jour lorsque aucune mise à jour n'est disponible pour votre cluster. Cliquez sur le bouton `Prism Central Settings`{.action} et ouvrez `Upgrade Prism Central`{.action}. Aucune version ne devrait être disponible :

![Pas de mise à jour de Prism Central](images/no_upgrade.png){.thumbnail}

#### Validation d'upgrade NCC

Vous pouvez également vérifier que le NCC du cluster Nutanix est à jour lorsque aucune mise à jour n’est disponible pour votre cluster. Cliquez sur le bouton `Prism Central Settings`{.action} et ouvrez `Upgrade Prism Central`{.action}.. Aucune version ne devrait être disponible dans l'onglet NCC :

![Pas de mise à niveau NCC](images/ncc_upgrade_done.png){.thumbnail}

## Aller plus loin

[Documentation OVHcloud](https://docs.ovh.com/ca/fr/nutanix/)

[Documentation officielle de Nutanix](https://www.nutanix.com/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
