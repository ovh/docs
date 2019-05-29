---
title: VMware vMotion
slug: vmware-vmotion-new
excerpt: Déplacer votre machine virtuelle sur un hôte différent à chaud
legacy_guide_number: '7767025'
section: Fonctionnalités VMware vSphere
order: 04
---

**Dernière mise à jour le 21/02/2019**

## Objectif

**vMotion** est une migration à **chaud** d'une machine virtuelle (en exécution) depuis un hôte vers un autre hôte, un ressource pools ou une Vapp, au sein du même **Cluster**.

**Ce guide montre comment réaliser cette opération**

## En pratique

### Déplacer une machine virtuelle
Quand un token est reçu par SMS, celui-ci doit être renseigné dans l'interface sécurisée afin que la tâche en attente puisse s’exécuter.
sur une autre ressource

Pour déplacer une machine virtuelle sur une autre ressource, il vous suffit de faire un clic droit sur la machine virtuelle allumée puis de sélectionner le menu `Migrer...`{.action}

![](images/Vmotion1.png){.thumbnail}

## Choix du type de vMotion

Le menu propose plusieurs options de Vmotion, dans notre exemple nous désirons uniquement migrer la machine virtuelle sur un autre hôte il faut donc sélectionner "Modifier uniquement la ressource de calcul".

L'option "Modifier uniquement le stockage" permet de migrer la machine virtuelle sur une autre banque de données. Cette opération appelé **Storage vMotion** est décrit dans [ce guide](https://docs.ovh.com/fr/private-cloud/vmware-storage-vmotion-new/){.external-link}.

![](images/Vmotion2.png){.thumbnail}

### Choix de la ressource

Choisir vers quel ressource migrer la machine virtuelle. Il est possible de migrer la machine virtuelle sur un hôte, un cluster, un ressourcePool ou une Vapp, dans notre exemple nous allons la migrer sur l'hôte .50.

![](images/Vmotion3.png){.thumbnail}

### Choix du réseau

Lors de cette étape, il vous est possible de choisit le réseau affecté à la machine virtuelle, dans notre exemple nous laissons la machine virtuelle sur son VLAN d'origine.

![](images/Vmotion4.png){.thumbnail}

### Choix de la priorité

Nous vous recommandons d'effectuer la migration en priorité haute, pour se faire sélectionnez "Planifier vMotion avec une priorité élevée".

![](images/Vmotion5.png){.thumbnail}

### Finaliser le vMotion

Cliquez sur "Terminer" pour lancer la procédure de migration.

![](images/Vmotion6.png){.thumbnail}

## Suivi du vMotion

Dans les tâches récentes, vous aurez l'état de la migration, celle-ci prends plus ou moins de temps cela dépend de la RAM attribuée, la charge sur la machine virtuelle et la bande passante utilisée.

![](images/Vmotion7.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.